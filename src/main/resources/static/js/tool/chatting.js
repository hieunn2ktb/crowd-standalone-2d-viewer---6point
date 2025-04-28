let chat = {};
chat.data = {};
chat.data.isInit = false;
chat.data.server = {
    host: ""
};
chat.data.firstGetTime = null;
chat.data.lastGetTime = null;
chat.data.projectId = null;
chat.data.taskId = null;

chat.config = {};
chat.config.isGetMessage = false;
chat.config.intervalGetMessage = 5000;
chat.config.isGettingPast = false;
chat.config.isGettingMore = false;

chat.constants = {};

chat.constants.messageType = {
    text				    :"text"
    , file				    :"file"
    , requestNew			:"req_new"
    , requestAccept			:"req_accept"
    , requestQuitByWorker	:"req_quit_worker"
    , requestQuitByManager	:"req_quit_manager"
};

chat.init = function(param) {
    return false;
    chat.data.server.host = param.serverHost;
    chat.data.projectId = param.projectId;
    chat.data.taskId = param.taskId;
    chat.config.isGetMessage = false;
    chat.config.inputMessage = $("#"+param.input);
    chat.fn.timer(true);
    page.dom.chattingContents.scroll(function(){
        let per = page.dom.chattingContents.scrollTop() / page.dom.chattingContents.prop('scrollHeight');
        if(per > 0.8) {
            $("#icoChatHasMore").hide();
        } else if(per < 0.1) {
            chat.fn.getMessagePast();
        }
    });
}

chat.fn = {};
chat.fn.timer = function() {
    if(chat.config.isGetMessage) {
        chat.fn.getMessage(true);
    } else {
        chat.fn.getUnreadCount();
        setTimeout(chat.fn.timer, chat.config.intervalGetMessage);

    }
}
chat.fn.ajax = function(param) {
    param.contentType = param.contentType == null ?
        "application/x-www-form-urlencoded;charset=UTF-8" : param.contentType;
    $.ajax({
        url : chat.data.server.host + param.url
        , async : true
        , cache : false
        , data : param.data
        , type: "POST"
        , dataType : "json"
        , contentType : param.contentType
        , success : function (retv) {
            if($.type(param.returnFunction) == "function") {
                param.returnFunction(retv);
            }
            // _hideLoading();
        }, error : function (request,status,error) {
            if($.type(param.errorFunction) == "function") {
                param.errorFunction(param);
            }else{
                try {
                    log.info("request.status : " + request.status, "chat.fn.ajax");
                    log.info("request.responseText : " + request.responseText, "chat.fn.ajax");
                    log.info("request.responseText : " + request.error, "chat.fn.ajax");
                } catch (e) {
                    log.error(e);
                }
            }
            // _hideLoading();
        }, beforeSend : function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + page.constants.authToken);
        }, complete : function () {
            if($.type(param.completeFunction) == "function") {
                param.completeFunction(param);
            }
        }
    });
}
chat.fn.ssoIsLogin = function() {
    url = "http://localhost:7101" + "/sso/isLogin";
    $.ajax({
        url : url
        , async : true
        , cache : false
        , success : function (retv) {
            log.info(retv, "success");
        }, error : function (request,status,error) {
            log.info(error, "error");
        }, beforeSend : function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + page.constants.authToken);
        }, xhrFields: {
            withCredentials: true
        }
    });
}
chat.fn.ssoTest = function(url) {
    window.open("", "rs");
    //Form 생성
    const frm = document.createElement("form");
    frm.setAttribute("method", "post");
    //@Value("${aistudio.tool.reviewSystem.host}")
    frm.setAttribute("action", page.constants.reviewSystemHost);
    frm.setAttribute("target", "rs");
    document.body.appendChild(frm);
    //토큰
    let i = document.createElement("input");
    i.setAttribute("name", "bearer");
    i.setAttribute("type", "hidden");
    i.setAttribute("value", page.constants.authToken);
    frm.appendChild(i);
    //Tool URL
    i = document.createElement("input");
    i.setAttribute("name", "rurl");
    i.setAttribute("type", "hidden");
    i.setAttribute("value", url);
    frm.appendChild(i);
    frm.submit();
    $(frm).remove();
}
chat.fn.getMessagePast = function() {
    if(!chat.config.isGettingPast) {
        chat.config.isGettingPast = true;
        if(chat.data.firstGetTime == "finished") {
            return false;
        }
		if(chat.data.firstGetTime==null) {
			return false;
		}
        chat.fn.ajax({
            url: "/chat/listMessagePast"
            , data: {
                projectId: chat.data.projectId
                , taskId: chat.data.taskId
                , time: chat.data.firstGetTime
            }
            , returnFunction: function (result) {
                // log.info(result, "chat.fn.getMessage.returnFunction");
                if (result.result) {
                    if (result.data && result.data.length > 0) {
                        chat.data.firstGetTime = result.data[result.data.length - 1].time;
                        page.fn.viewMessagesPast(result.data);
                    } else if (result.data != null && result.data.length == 0) {
                        chat.data.firstGetTime = "finished";
                    }
                }
            }
            , completeFunction : function() {
                chat.config.isGettingPast = false;
            }
        });
    }
}
chat.fn.getUnreadCount = function() {
    chat.fn.ajax({
        url: "/chat/countUnread"
        , data: {
            projectId: chat.data.projectId
            , taskId: chat.data.taskId
        }, returnFunction : function(r) {
            log.info(r);
            try {
                if (r && r.data && r.data.countUnread) {
                    let count = r.data.countUnread;
                    if(count > 0 && page.dom.popChatting.is(":visible") == false) {
                        $("#icoChatUnread").text(count).stop().fadeIn().fadeOut().fadeIn();
                    }
                }
            } catch (E) {
                log.error(E);
            }
        }
    });
}
chat.fn.getMessage = function(isRunTimer) {
    // log.info("chat.fn.getMessage");
	isInit = !chat.data.isInit;
    if(!chat.config.isGettingMore) {
        chat.config.isGettingMore = true;
        isRunTimer = isRunTimer == false ? false : true;
        isInit = isInit == true ? true : false;
        if(isInit){
            chat.fn.showLoading();
        }
        chat.fn.ajax({
            url: "/chat/listMessage"
            , data: {
                projectId: chat.data.projectId
                , taskId: chat.data.taskId
                , time: chat.data.lastGetTime
            }
            , returnFunction: function (result) {
                // log.info(result, "chat.fn.getMessage.returnFunction");
                if (result.result) {
                    if (result.data && result.data.length > 0) {
                        chat.data.lastGetTime = result.data[0].time;
                        if (isInit) {
                            chat.data.firstGetTime = result.data[result.data.length - 1].time;
							chat.data.isInit = true;
                        }
                        page.fn.viewMessages(result.data, isInit);
                    }
                }
                chat.fn.hideLoading();
            }
            , completeFunction: function () {
                if (isRunTimer) {
                    setTimeout(chat.fn.timer, chat.config.intervalGetMessage);
                }
                chat.config.isGettingMore = false;
            }
            , errorFunction : function() {
                page.fn.alert(page.message.errorOfChattingServer);
            }
        });
    }
}

chat.fn.sendMessage = function() {
    log.info("chat.fn.sendMessage");

    let message = (chat.config.inputMessage.val()).trim();
    if(message == "") {
        log.info("no have text");
        chat.config.inputMessage.focus()
        return false;
    }
    message = _common.escapeHtml(message);
    message = message.replace(/\n/gi, "<br/>");
    chat.fn.showLoading();
    chat.fn.ajax({
        url: "/chat/sendMessage"
        , data: {
            projectId : chat.data.projectId
            , taskId : chat.data.taskId
            , messageContents : message
        }
        , returnFunction : function(result) {
            log.info(result, "chat.fn.sendMessage.returnFunction");
            chat.config.inputMessage.val("").focus();
            chat.fn.getMessage(false, false);
            chat.fn.hideLoading();
        }
        , completeFunction : function() {

        }
    });
}
chat.fn.showLoading = function() {
    $("#loadingChat").show();
}
chat.fn.hideLoading = function() {
    $("#loadingChat").hide();
}

chat.fn.convertDateType = function(time, type) {
    type = type == null ? "time" : type;
    let dt = new Date(time);
    if(type == "full") {
        return dt.getFullYear()
            + "-" + ((dt.getMonth()+1) < 10 ? "0" : "") + (dt.getMonth()+1)
            + "-" + (dt.getDate() < 10 ? "0" : "") + dt.getDate()
            + " " + (dt.getHours() < 10 ? "0" : "") + dt.getHours()
            + ":" + (dt.getMinutes() < 10 ? "0" : "") + dt.getMinutes();
    } else if(type == "date") {
        return dt.getFullYear()
            + "-" + ((dt.getMonth()+1) < 10 ? "0" : "") + (dt.getMonth()+1)
            + "-" + (dt.getDate() < 10 ? "0" : "") + dt.getDate()
        ;
    } else {
        return dt.getHours()
            + ":" + (dt.getMinutes() < 10 ? "0" : "") + dt.getMinutes();
    }
}

chat.fn.convertSVGToImage = function() {

    let canvasOri = document.querySelector('#canvasForOriginal');
    let svg = document.querySelector('#drawingSVG');

    // let children = "<image xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='"+page.dom.drawingImage.attr("src")+ "' x='0' y='0' style='width:" + page.data.loadImage.width + "px;height:" + page.data.loadImage.height + "px;' />";
    let children = "";
    let ctx = canvasOri.getContext("2d");
    let image = new Image();
    image.crossOrigin = "Anonymous";
    image.src = page.dom.drawingImage.attr("src");
    image.onload = function(){
        $("#canvasForOriginal").width(image.width).height(image.height).attr("width", image.width).attr("height", image.height);
        $("#canvasForConvert").width(image.width).height(image.height).attr("width", image.width).attr("height", image.height);
        ctx.drawImage(image, 0, 0, image.width, image.height);

        let canvasCov = document.querySelector('#canvasForConvert');
        let ctxCov = canvasCov.getContext("2d");
        page.dom.svg.children().each(function(idx, ch){
            // log.info(chat.fn.explicitlySetStyle((ch)));
            let filters = ["RECT", "POLYGON", "POLYLINE", "CIRCLE"];
            let cch = $(ch);
            if(filters.includes(cch.prop("tagName").toUpperCase())) {
                children += "<" + cch.prop("tagName")
                    + " style='"
                    + chat.fn.explicitlySetStyle((ch))
                    +"'";
                if(cch.prop("tagName").toUpperCase() == "RECT") {
                    children += " x='" + cch.attr("x") + "' ";
                    children += " y='" + cch.attr("y") + "' ";
                    children += " width='" + cch.attr("width") + "' ";
                    children += " height='" + cch.attr("height") + "' ";
                } else if(  cch.prop("tagName").toUpperCase() == "POLYGON"
                    ||  cch.prop("tagName").toUpperCase() == "POLYLINE"
                ) {
                    children += " points='" + cch.attr("points") + "'";
                } else if(cch.prop("tagName").toUpperCase() == "CIRCLE") {
                    children += " cx='" + cch.attr("cx") + "'";
                    children += " cy='" + cch.attr("cy") + "'";
                    children += " r='" + cch.css("r") + "'";
                }
                children += " ></" + cch.prop("tagName") + ">"
            }
        });
        let v = canvg.Canvg.fromString(ctxCov, "<svg version='1.1'" +
            " xmlns='http://www.w3.org/2000/svg' xmlns:xlink= 'http://www.w3.org/1999/xlink'"
            +" viewport='"+page.dom.svg.attr("viewport")
            +"' style='"
            + "width:" + page.data.loadImage.width + ";"
            + "height:" + page.data.loadImage.height + ";"
            +"'>"
            +children
            +"</svg>", {useCORS: true, anonymousCrossOrigin: true, renderCallback: function() {

            }});
        v.start();


        canvasCov.toBlob(function(blob){
            ctx.drawImage(canvasCov, 0, 0, image.width, image.height);
            canvasOri.toBlob(function(blob2){
                let multipart = new FormData();
                multipart.append('projectId',       page.data.task.projectId);
                multipart.append('taskId',      page.data.task.taskId);
                multipart.append('messageReferImg', page.data.imageData.path + "/" + page.data.imageData.fileName);
                multipart.append('file',            blob2, page.data.imageData.originalFileName);
                $.ajax({
                    type: "POST",
                    enctype: 'multipart/form-data',
                    url: chat.data.server.host + "/chat/uploadFile",
                    data: multipart,
                    processData: false,
                    contentType: false,
                    cache: false,
                    timeout: 600000,
                    success: function (data) {
                        chat.fn.hideLoading();
                        chat.fn.getMessage(false, false);
                    },
                    error: function (e) {
                        chat.fn.hideLoading();
                    }, beforeSend : function (xhr) {
                        xhr.setRequestHeader("Authorization", "Bearer " + page.constants.authToken);
                    }
                });
            }, 'image/png');
        });
    }
}

chat.fn.explicitlySetStyle = function (element, isAddToElement) {
    var cSSStyleDeclarationComputed = getComputedStyle(element);
    var i, len, key, value;
    var svgExcludedValues = ['stroke', 'background-color', 'fill', "stroke-width", "fill-opacity"];
    var computedStyleStr = "";
    for (i=0, len=cSSStyleDeclarationComputed.length; i<len; i++) {
        key=cSSStyleDeclarationComputed[i];
        if (svgExcludedValues.indexOf(key) >= 0) {
            value=cSSStyleDeclarationComputed.getPropertyValue(key);
            computedStyleStr+=key+":"+value+";";
        }
    }
    if(isAddToElement == true) {
        element.setAttribute('style', computedStyleStr);
    }
    return computedStyleStr;
}
chat.fn.uploadDrawing = function() {
    chat.fn.showLoading();
    chat.fn.convertSVGToImage();
}

chat.fn.close = function() {
    if(confirm(page.message.confirmChatClose)) {
        chat.fn.showLoading();
        chat.fn.ajax({
            url: "/chat/quit"
            , data: {
                projectId   : chat.data.projectId
                , taskId: chat.data.taskId
            }, returnFunction : function() {
                chat.fn.getMessage(false, true);
            }, completeFunction : function(rv) {
                chat.fn.hideLoading();
            }
        });
    }
}

chat.fn.download = function(url, fileName) {
    fileName = fileName == null ? url.substr(url.lastIndexOf("/") + 1) : fileName;
    fetch(url).then(function(t) {
        return t.blob().then((b) =>
            {
                try {
                    let a = document.createElement("a");
                    a.href = URL.createObjectURL(b);
                    a.setAttribute("download", fileName);
                    a.click();
                } catch (E) {
                    alert("Sorry, The work guide file could not be downloaded.\nPlease contact to admin.");
                }
            }
        );
    });
}

chat.fn.errorLoadUploadFile = function(img) {
    log.info(img, "chat.fn.errorLoadUploadFile");
    $(img).parent().parent().append(page.message.labelUploadFile);
    $(img).parent().remove();
}