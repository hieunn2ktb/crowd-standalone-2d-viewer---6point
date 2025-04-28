let page = {};
page.param = {};

page.constants = {};
page.constants.drawType = {
    rectangle 	: "rect"
    , polygon 	: "polygon"
    , polyline 	: "polyline"
    , keypoint 	: "keypoint"
    , point       : "point"
    , rectangle4p : "rect4p"
    , pointGroup  : "points"
};
page.constants.imageStatus = {
    open             : "status_open"
    , work_assign    : "status_work_assign"
    , work_worked    : "status_work_worked"
    , review_assigned: "status_review_assigned"
    , review_pass    : "status_review_pass"
    , review_fail    : "status_review_fail"
}
page.constants.imageStatusCode = {
    open             : "open"
    , workAssigned   : "assign"
    , worked         : "worked"
    , reviewAssigned : "rvassigned"
    , reviewed       : "reviewed"
    , reviewPass    : "pass"
    , reviewFail    : "fail"
    , inspection_ok  : "OK"
    , inspection_ng  : "NG"
}
page.constants.config = {
    opacity: 50
    , brightness : 100
    , contrast : 100
    , border : {
        max: 15, min: 0.25, interval: 0.25, default: 5
    }, point : {
        max: 15, min: 0.25, interval: 0.25, default: 10
    }
    , padding : 10
}
page.constants.tagSize = 40;
page.constants.cookieKeys = {
    border          : "imgRV.setting.object.border2"
    , brightness    : "imgRV.setting.object.brightness2"
    , confirmPass   : "imgRV.setting.confirmPass"
    , contrast      : "imgRV.setting.object.contrast2"
    , isViewTags    : "imgRV.setting.isViewTags"
    , opacity       : "imgRV.setting.object.opacity2"
    , point         : "imgRV.setting.object.point2"
    , imageServer   : "imgRV.setting.imageServer"
    , isViewClasses : "imgRV.setting.isViewClasses"
};
page.constants.caseType = {
    normal : "normal"
    , classError : "class-error"
    , negative : "process-error " // 가공대상 오류 - worker만 작업
    , positive : "process-omission" //가공대상 누락 - ai만 작업
}
page.constants.caseOrderSeq = {
    normal : 4
    , classError : 1
    , negative : 2  // 가공대상 오류 - worker만 작업
    , positive : 3 //가공대상 누락 - ai만 작업
}
page.constants.objectWorkType = {
    detect : "detect"
    , work : "work"
}
page.constants.isCheckedObject = false;
page.constants.allObjectLoaded = false;

page.data = {};
page.data.countLoading = 0;
page.constants.PI = Math.PI;
page.data.classVoList = [];
page.data.isViewClasses = false;
page.data.project = {};
page.data.config = {
    opacity: 50
    , border: 5
    , point : 10
    , brightness : 100
    , contrast : 100
};
page.data.pagingInfo = {
    totalCount : 0
    , lastPageIndex : 0
    , currentPageIndex : 0
    , objectTotalCount : 0
    , objectCardCount : 0
};
page.data.objectLoadedCount = 0;
page.data.event = {
    isMovingGuidePopup: false
    , moveImageStartX: 0
    , moveImageStartY: 0
    , moveImageStartTop: 0
    , moveImageStartLeft: 0
}
page.data.hasOtherObjectType = false;

page.message = {};

page.dom = {};
page.fn = {};

page.hotkey = [
    {
        keyCode : "113" //F2
        , excuteFunction : function() {
            page.fn.toggleViewClass();
        }
    },
    {
        keyCode : "123" //F12
        , excuteFunction : function() {
            page.fn.togglePopup('.modal-configure');
        }
    }
];

page.constants.objectPadding = 50;

page.fn.init = function() {

    $(window).on("keydown", function(event){
        for(let i = 0; i < page.hotkey.length; i++) {
            if(page.hotkey[i].keyCode == _common.getKeyboard(event).keyCode) {
                event.preventDefault();
                page.hotkey[i].excuteFunction();
                break;
            }
        }
    });

    $('[data-control="checkbox-dropdown"]').each(function(i, o){
        new CheckboxDropdown(o);
    });

    // let opacity = _common.cookie.get(page.constants.cookieKeys.opacity, page.constants.config.opacity);
    let opacity = 40;
    page.fn.setViewOpacity(opacity);
    $("#sliderOpacity").slider({
        range: "min",
        value: opacity,
        min: 0,
        max: 100,
        slide: function( event, ui ) {
            page.fn.setViewOpacity(ui.value);
        }
    });
    let border = _common.cookie.get(page.constants.cookieKeys.border, page.constants.config.border);
    page.fn.setViewBorder(border);
    $("#sliderBorder").slider({
        value: border
        , step: page.constants.config.border.interval
        , range: "min"
        , min: page.constants.config.border.min
        , max: page.constants.config.border.max
        , slide: function( event, ui ) {
            page.fn.setViewBorder(ui.value);
        }
    });
    let brightness = _common.cookie.get(page.constants.cookieKeys.brightness, page.constants.config.brightness);
    let contrast = _common.cookie.get(page.constants.cookieKeys.contrast, page.constants.config.contrast);
    page.fn.setImageFilter(brightness, contrast);
    $("#sliderBrightness").slider({
        range: "min",
        value: brightness,
        min: 0,
        max: 200,
        slide: function( event, ui ) {
            page.fn.setImageFilter(ui.value, page.data.config.contrast);
        }
    });
    $("#sliderContrast").slider({
        range: "min",
        value: contrast,
        min: 0,
        max: 200,
        slide: function( event, ui ) {
            page.fn.setImageFilter(page.data.config.brightness, ui.value);
        }
    });

    let point = _common.cookie.get(page.constants.cookieKeys.point, page.constants.config.point);
    point = point > page.constants.config.point.max ? page.constants.config.point.max : point;
    point = point < page.constants.config.point.min ? page.constants.config.point.min : point;
    page.fn.setViewPoint(point);
    $("#sliderPoint").slider({
        range: "min"
        , value: point
        , step: page.constants.config.point.interval
        , min: page.constants.config.point.min
        , max: page.constants.config.point.max
        , slide: function( event, ui ) {
            page.fn.setViewPoint(ui.value);
        }
    });
    $( ".modal-configure" ).draggable({
        handle: ".modal-header"
    });


    page.dom.root = $("#root");
    page.dom.rootRejectObjectData = $("#rootRejectObjectData");
    page.dom.btnToggleTag = $("#btnToggleTag");
    page.dom.btnToggleClass = $("#btnToggleClasses");
    page.dom.popImageDetailModal = $("#imageDetail-modal");
    page.dom.popImageDetailModalHandle = $("#imageDetail-modal .popUp-header").get(0);

    if(sessionStorage.reviewSearch != null && sessionStorage.reviewSearch != "undefined" && JSON.parse(sessionStorage.reviewSearch)) {
        page.data.searchCondition = JSON.parse(sessionStorage.reviewSearch);
        if(page.data.searchCondition.classes) {
            page.data.searchCondition.classes.forEach(function(cls){
                $("input[name='searchClass'][value='"+cls+"']").prop("checked", true);
            });
        }
        dropList[0].onCheckBox();
        $("#searchStatus").val(page.data.searchCondition.filterStatus);

        page.fn.search(page.data.searchCondition);
        sessionStorage.reviewSearch = null;
    } else {
        sessionStorage.reviewSearch = null;
        page.fn.searchFromUI();
    }

    page.fn.addEvent(window, "mousedown", page.fn.eventMouseDown, false);
    page.fn.addEvent(window, "mousemove", page.fn.eventMouseMove, false);
    page.fn.addEvent(window, "mouseup", page.fn.eventMouseUp, false);

}

page.fn.reCheckImageSelected = function(t) {
    $("#viewCheckedImageCount").text($("input[name='chkReviewImageObject']:checked").length);
    if (_common.isNotEmpty(t)){
        $(t).parent().parent().toggleClass("on");
    }
}

page.fn.toggleAllImageSelect = function() {
    if($("input[name='chkReviewImage']").length == 0) {
        alert(page.message.alert.notExistsRvAssigned);
        return false;
    }
    if($("input[name='chkReviewImage']").length == $("input[name='chkReviewImage']:checked").length) {
        $("input[name='chkReviewImage']").prop("checked", false);
    } else {
        $("input[name='chkReviewImage']").prop("checked", true);
    }
    page.fn.reCheckImageSelected();
}

page.fn.changeImageSize = function() {
    page.dom.root
        .removeClass("size_300")
        .removeClass("size_400")
        .removeClass("size_800")
        .removeClass("size_1600")
        .addClass("size_" + $("#configImageSize").val())
    ;
    page.data.configImageSize = $("#configImageSize").val();

    $("svg").empty();
    try {
        $("img").each(function(i, o){
            page.fn.resizeImage($(o), false);
            page.fn.drawImage($(o), false); //안그려도되긴함
        });
    } catch (e) {

    }

}
page.fn.resetSearchForm = function() {
    // $("input[name='searchClass']").prop("checked", false);
    // dropList[0].onCheckBox();
    $(".view-select input[type=checkbox]").prop("checked", true);
    $(".case-select input[type=checkbox]").each(function (i, o) {
        if (o.value != "normal") {
            $(o).prop("checked", true);
        }
    });
    $("#inputIou").val(80);
    $(".class-select input[type=checkbox]").each(function (i, o) {
        $(o).prop("checked", true);
    });
    $("#checkAll").text("선택 해제");
    $("#checkAll").addClass('selected');
    $("#searchStatus").val("");
    $("#searchClass").val("");
    $("#searchClassTag").val("");
    $("#searchTagInput").val("");
    $("#searchImgCount").val("30");

    // page.fn.changeClass(document.getElementById("searchClass"));

    page.fn.searchFromUI(1);
}
page.fn.getSearchConditionFromUI = function() {
    let reqType = "review";
    if("review/reviewer".includes(page.data.param.reqType)) {
        reqType = "review";
    } else if("manager/insp".includes(page.data.param.reqType)) {
        reqType = "insp";
    }else if("master".includes(page.data.param.reqType)) {
        reqType = "master";
    }
    let condition = {
        filterStatus : $("#searchStatus").val()
        , filterClass: $("#searchClass").val()
        , pageIndex  : 1
        , filterTag  : $("#searchClassTag").val()
        , filterTagValue : $("#searchTagInput").val() == "" ? $("#searchTagSelect").val() : $("#searchTagInput").val()
        , projectId  : page.data.param.projectId
        , perPage    : parseInt($("#searchImgCount").val())
        , reqType    : reqType
    };
    log.info(condition, "page.fn.getSearchConditionFromUI");
    return condition;
}

page.fn.searchFromUI = function(pageIndex) {
    pageIndex = pageIndex == null ? 1 : pageIndex;
    let condition = page.fn.getSearchConditionFromUI();
    condition.pageIndex = pageIndex;
    if (condition.filterStatus == "") {
        page.constants.isCheckedObject = false;
        $("#pagingArea").css("display", "none");
    } else {
        page.constants.isCheckedObject = true;
        $("#pagingArea").css("display", "flex");
    }
    page.fn.search(condition);
}
page.fn.changePage = function(command) {
    switch (command) {
        case "first" :
            page.data.searchCondition.pageIndex = 1;
            break;
        case "last" :
            page.data.searchCondition.pageIndex = page.data.pagingInfo.lastPageIndex;
            break;
        case "pre" :
            page.data.searchCondition.pageIndex--;
            page.data.searchCondition.pageIndex = page.data.searchCondition.pageIndex < 1 ?
                1 : page.data.searchCondition.pageIndex;
            break;
        case "next" :
            page.data.searchCondition.pageIndex++;
            page.data.searchCondition.pageIndex = page.data.searchCondition.pageIndex > page.data.pagingInfo.lastPageIndex ?
                page.data.pagingInfo.lastPageIndex : page.data.searchCondition.pageIndex;
            break;
    }
    if(page.data.searchCondition.pageIndex != page.data.pagingInfo.currentPageIndex) {
        page.fn.search(page.data.searchCondition);
    }
}
page.fn.changePageIndex = function() {
    page.data.searchCondition.pageIndex = Number.parseInt($("#selPaging").val());
    page.fn.search(page.data.searchCondition);
}
page.fn.search = function(condition) {
    page.fn.showLoading();
    page.data.imageDataMap = new HashMap();
    page.data.imgObjectMap = new HashMap();
    page.data.taskList = new HashMap();
    page.data.imageDataMap.clear();
    page.data.imgObjectMap.clear();
    page.data.taskList.clear();
    page.fn.setClearDom();
    page.data.searchCondition = condition;
    page.data.criterion = $("#inputIou").val();

    $("#selPaging").empty();
    page.fn.viewDetailInfo();
    _common.ajax.asyncJSON2({
        url : "/apis/v1/workspace/classCheck/list"
        , param : condition
        , returnFunction : function(rev) {
            if(rev.result) {
                if(_common.isNotEmpty(rev.data.reviewImageList)) {
                    let objectListCnt = 0;
                    rev.data.reviewImageList.forEach(function(file){
                        if (!page.constants.isCheckedObject) {
                            _iou.getIOUData(file.detectObjectList, file.objectList);
                        }
                        file.imageServer = page.data.imageServerURL;
                        page.data.imageDataMap.put(file.workTicketId, file);
                        page.fn.setImgObjectMap(file);
                        page.fn.createObjectCard(file.workTicketId);
                        page.fn.sortObjectLi(file.workTicketId);
                        page.data.taskList.put(file.workTicketId, file.taskList);

                        log.info(file, "page.fn.search");
                    });
                    page.fn.viewByCaseType();
                    page.fn.lazyLoad();
                    $("#pagingCurrentCount").text(page.data.pagingInfo.objectCardCount);
                    $("#pagingTotalCount").text(page.data.pagingInfo.objectTotalCount.toLocaleString('en'));
                    $(".btnPaging").prop("disabled", false);

                    for(let i = 1; i <= rev.data.lastPageIndex; i++) {
                        $("#selPaging").append(_common.template.parseObject("tmpl-paging-option", {
                            pageNum   : i
                            , selected: i == rev.data.pageIndex ? "selected" : ""
                        }));
                    }
                    page.data.pagingInfo = {
                        totalCount : rev.data.countTotal
                        , lastPageIndex : rev.data.lastPageIndex
                        , currentPageIndex : rev.data.pageIndex
                    };
                    page.fn.applyIouFilter();
                } else {
                    $("#pagingCurrentCount").text(0);
                    $("#pagingTotalCount").text(0);
                    $(".btnPaging").prop("disabled", true);
                    page.data.pagingInfo = {
                        totalCount : 0
                        , lastPageIndex : 0
                        , currentPageIndex : 0
                    };
                }
            }
            page.fn.hideLoading();
            page.fn.reCheckImageSelected();
        }, errorFunction : function() {
            page.fn.hideLoading();
        }

    });
}

page.fn.showLoading = function() {
    page.data.countLoading++;
    $("#div_loading").addClass("on");
}

page.fn.hideLoading = function() {
    page.data.countLoading--;
    // $("#div_loading").removeClass("on");
    if(page.data.countLoading <= 0) {
        $("#div_loading").removeClass("on");
    }
}

page.fn.lazyLoad = function () {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    log.info(entry, "isIntersecting");
                    let lazyImage = entry.target;
                    if($(lazyImage).is(':visible')) {
                        $(lazyImage).parent().parent().parent().css("display", "none");
                        lazyImage.onload = function (evt) {
                            log.info(evt, "lazyImage.onload");
                            let image = $(evt.path[0]);
                            page.fn.checkSuccessLoadImage(image);
                        }
                        lazyImage.src = page.data.imageServerURL + lazyImage.dataset.src;
                        lazyImage.classList.remove("lazy");
                        lazyImageObserver.unobserve(lazyImage);
                    }
                }
            });
        });
        lazyImages.forEach(function (lazyImage) {
            if($(lazyImage).is(':visible')) {
                lazyImageObserver.observe(lazyImage);
            }
        });
    } else {
        for (let i = 0; i < lazyImages.length; i++) {
            lazyImages[i].src = lazyImages[i].dataset.src;
        }
    }
}

page.fn.onErrorImageLoad = function(img) {
    log.info(img, "page.fn.onErrorImageLoad");
    if(img.src.startsWith(page.data.imageServerURL)) {
        let taskId = $(img).attr("data-taskId");
        let workTicketId = $(img).attr("data-workTicketId");
        img.src = page.constants.srcErrorImage;
        $(img).attr("onerror", "");
        page.data.imgObjectMap.remove(workTicketId);
        $(".object_li[data-taskId='" + taskId + "'][data-workTicketId='" + workTicketId + "']").remove();
    } else {
        img.src = page.data.imageServerURL + $(img).attr("data-src");
    }
}
page.fn.createObjectCard = function (workTicketId) {
    log.info(workTicketId, "page.fn.createObjectCard, workTicketId");
    let selectedClassList = [];
    $(".class-select li input[type ='checkbox']:checked").each(function (i, o) {
        selectedClassList.push(o.value);
    });
    let img = page.data.imageDataMap.get(workTicketId);
    page.dom.root.append(_common.template.parseObject("tmpl-image-box", img));
    if (page.constants.isCheckedObject) {
        for (let objectKey in page.data.imgObjectMap.get(workTicketId)) {
            let object = page.data.imgObjectMap.get(workTicketId)[objectKey];
            if (object != null) {
                page.data.pagingInfo.objectCardCount += 1;
                page.dom.root.append(_common.template.parseObject("tmpl-checkedObjectTmpl", object));
                $("#class_" + object.workType + "_" + object.objectId).text(object.className);
                if (object.isMatch) {
                    $("#class_" + object.matchObject.workType + "_" + object.objectId).text(object.matchObject.className);
                }
            }
        }
    } else {
        for(let objectKey in page.data.imgObjectMap.get(workTicketId)) {
            let object = page.data.imgObjectMap.get(workTicketId)[objectKey];
            if (object != null) {
                if (object.isMatch){
                    if (selectedClassList.includes(object.classId)|| selectedClassList.includes(object.matchObject.classId)) {
                        page.data.pagingInfo.objectCardCount += 1;
                        page.dom.root.append(_common.template.parseObject("tmpl-preCheckObjectBox", object));
                        $("#class_" + object.workType + "_" + object.objectId).text(object.className);
                        $("#class_" + object.matchObject.workType + "_" + object.objectId).text(object.matchObject.className);
                    }
                } else {
                    if (selectedClassList.includes(object.classId)) {
                        page.data.pagingInfo.objectCardCount += 1;
                        page.dom.root.append(_common.template.parseObject("tmpl-preCheckObjectBox", object));
                        $("#class_" + object.workType + "_" + object.objectId).text(object.className);
                    }
                }
            }
        }
    }
}

page.fn.setImgObjectMap = function (file) {
    let objectMap = {};
    if (file.objectList != null) {
        file.objectList.forEach(function (object) {
            object.workType = page.constants.objectWorkType.work;
            page.data.pagingInfo.objectTotalCount +=1;
            let iou = parseFloat(object.iouPercent);
            if (iou >= page.data.criterion) {
                object.isMatch = true;
                if (object.matchClass) {
                    object.caseType = page.constants.caseType.normal;
                    object.caseOrderSeq = page.constants.caseOrderSeq.normal;
                } else {
                    object.caseType = page.constants.caseType.classError;
                    object.caseOrderSeq = page.constants.caseOrderSeq.classError;
                }
            } else {
                object.isMatch = false;
                object.caseType = page.constants.caseType.negative;
                object.caseOrderSeq = page.constants.caseOrderSeq.negative;
                objectMap[object.workTicketId + "_" + object.taskId + "_" + object.objectId] = object;
            }
        });
    }
    if (file.detectObjectList != null) {
        file.detectObjectList.forEach(function (detectObj) {
            detectObj.workType = page.constants.objectWorkType.detect;
            // 다시 setting 할 경우를 위한 초기화
            detectObj.isMatch = false;
            detectObj.taskId = null;
            detectObj.matchObject = null;
            page.data.pagingInfo.objectTotalCount +=1;
            if (detectObj.objectType == page.constants.drawType.polygon && detectObj.polygonLocation != null) {
                detectObj.objectLocation = detectObj.polygonLocation;
            } else {
                detectObj.objectType = page.constants.drawType.rectangle;
                detectObj.objectLocation = detectObj.bboxLocation;
                if (detectObj.bboxLocation == null) {
                    detectObj.objectType = page.constants.drawType.polygon;
                    detectObj.objectLocation = detectObj.polygonLocation;
                }
            }
            let iou = parseFloat(detectObj.iouPercent);
            if (iou >= page.data.criterion) {
                if (file.objectList != null) {
                    for (let i = 0; file.objectList.length> i; i++) {
                        if (file.objectList[i].objectId == detectObj.matchObjectId) {
                            detectObj.matchObject = file.objectList[i];
                            break;
                        }
                    }
                }
                detectObj.isMatch = true;
                detectObj.taskId = detectObj.matchTaskId;
                if (detectObj.matchClass) {
                    detectObj.caseType = page.constants.caseType.normal;
                    detectObj.caseOrderSeq = page.constants.caseOrderSeq.normal;
                } else {
                    detectObj.caseType = page.constants.caseType.classError;
                    detectObj.caseOrderSeq = page.constants.caseOrderSeq.classError;
                }
            } else {
                if (detectObj.status == null) {
                    //reject 된 적 없는 오브젝트 - 매핑 안되어도 상태값 대기 일 때 보여줌
                    detectObj.taskId = "detectTask";
                    detectObj.caseType = page.constants.caseType.positive;
                    detectObj.caseOrderSeq = page.constants.caseOrderSeq.positive;
                    detectObj.isMatch = false;
                    // detectObj.objectType = page.constants.drawType.rectangle; // match 안되면 rect로만 보여주기 위함
                } else {
                    // reject, confirm 된 적 있는 오브젝트 - 상태값 대기 일때 보여주면 안된다.
                    if (detectObj.matchObjectId != null && page.constants.isCheckedObject) {
                        // reject, confirm 된 적 있는 오브젝트 -매칭되어있음. ( 상태값= reject 혹은 confirm)
                        detectObj.isMatch = true;
                        if (file.objectList != null) {
                            for (let i = 0; file.objectList.length> i; i++) {
                                if (file.objectList[i].objectId == detectObj.matchObjectId) {
                                    let iou = _iou.calculationIOU(detectObj, file.objectList[i]);
                                    detectObj.iouPercent = iou;
                                    file.objectList[i].iouPercent = iou;
                                    file.objectList[i].workType = page.constants.objectWorkType.work;
                                    file.objectList[i].isMatch = true;
                                    file.objectList[i].matchObjectId = detectObj.objectId;
                                    detectObj.matchObject = file.objectList[i];
                                    detectObj.objectType = file.objectList[i].objectType;
                                    break;
                                }
                            }
                        }
                        if (detectObj.objectType == page.constants.drawType.polygon) {
                            detectObj.objectLocation = detectObj.polygonLocation;
                        } else {
                            detectObj.objectLocation = detectObj.bboxLocation;
                        }
                        objectMap[detectObj.workTicketId + "_" + detectObj.matchTaskId + "_" + detectObj.matchObjectId] = detectObj;

                    } else if (page.constants.isCheckedObject) {
                        //reject, confirm 시 매칭 안된 오브젝트
                        detectObj.isMatch = false;
                        detectObj.taskId = "detectTask";
                    }
                }
            }
            if (detectObj.taskId != null) {
                objectMap[detectObj.workTicketId + "_" + detectObj.taskId + "_" + detectObj.objectId] = detectObj;
            } else {
                if (detectObj.isMatch) {
                    detectObj.taskId= detectObj.matchTaskId;
                }
            }
        });
    }
    page.data.imgObjectMap.put(file.workTicketId, objectMap);
}

page.fn.resizeObject = function (object, isAdd) {
    object.rotateMinXPoint = 0;
    object.rotateMinYPoint = 0;
    let workTicketId = object.workTicketId;
    let objectLocation = JSON.parse(object.objectLocation);
    let image = $("img[id =img_"+ object.workTicketId + "][data-workTicketId=" + object.workTicketId + "]");
    let canvas = document.getElementById("canvas_"+ object.workTicketId +"_" + object.taskId +"_"+ object.objectId);
    if (isAdd) {
        canvas = document.getElementById("canvas_" +object.workTicketId+"_" + object.taskId+"_" +object.matchObjectId);
    }
    if (canvas != null) {
        let x = 0;
        let y = 0;
        let x2 = 0;
        let y2 = 0;
        let originX = 0;
        let originY = 0;
        let originX2 = 0;
        let originY2 = 0;
        let pointXList = [];
        let pointYList = [];
        let matchPointXList = [];
        let matchPointYList = [];
        let isNeedTrigonometric = false;

        objectLocation.forEach(function (point) {
            pointXList.push(point[0]);
            pointYList.push(point[1]);
        });
        originX = Math.min(...pointXList);
        originY = Math.min(...pointYList);
        originX2 = Math.max(...pointXList);
        originY2 = Math.max(...pointYList);
        if (object.isMatch) {
            let matchObject = page.fn.getMatchObject(object, isAdd);
            let matchObjectLocation = JSON.parse(matchObject.objectLocation);
            matchObjectLocation.forEach(function (matchPoint) {
                matchPointXList.push(matchPoint[0]);
                matchPointYList.push(matchPoint[1]);
            });
            x = Math.min(...pointXList, ...matchPointXList);
            y = Math.min(...pointYList, ...matchPointYList);
            x2 = Math.max(...pointXList, ...matchPointXList);
            y2 = Math.max(...pointYList, ...matchPointYList);
        } else {
            x = originX;
            y = originY;
            x2 = originX2;
            y2 = originY2;
        }

        if (object.objectType == page.constants.drawType.rectangle) {
            if (objectLocation.length > 2) {
                isNeedTrigonometric = true;
            }
        } else if (object.objectType == page.constants.drawType.rectangle4p){
            if (objectLocation.length > 4) {
                isNeedTrigonometric = true;
            }
        } else if (object.objectType == page.constants.drawType.polygon) {
            object.rotateMinXPoint = x;
            object.rotateMinYPoint = y;
        }
        if (isNeedTrigonometric) {
            let halfWidth = (x2 - x) / 2;
            let halfHeight = (y2 - y) / 2;
            let hypo = Math.sqrt(halfWidth * halfWidth + halfHeight * halfHeight);
            let centerXY = [x + halfWidth, y + halfHeight];
            let objectDegree = objectLocation[objectLocation.length - 1][0];

            let firstPointRad = Math.atan2(y - centerXY[1], x - centerXY[0]);
            let secondPointRad = Math.atan2(y - centerXY[1], x2 - centerXY[0]);
            let thirdPointRad = Math.atan2(y2 - centerXY[1], x - centerXY[0]);
            let lastPointRad = Math.atan2(y2 - centerXY[1], x2 - centerXY[0]);

            let firstPointDegree = firstPointRad * 180 / page.constants.PI + objectDegree;
            let secondPointDegree = secondPointRad * 180 / page.constants.PI + objectDegree;
            let thirdPoinDegree = thirdPointRad * 180 / page.constants.PI + objectDegree;
            let lastPointDegree = lastPointRad * 180 / page.constants.PI + objectDegree;

            firstPointRad = firstPointDegree * page.constants.PI / 180;
            secondPointRad = secondPointDegree * page.constants.PI / 180;
            thirdPointRad = thirdPoinDegree * page.constants.PI / 180;
            lastPointRad = lastPointDegree * page.constants.PI / 180;

            let new_x = Math.max(centerXY[0] + Math.cos(firstPointRad) * hypo, centerXY[0] + Math.cos(secondPointRad) * hypo, centerXY[0] + Math.cos(thirdPointRad) * hypo, centerXY[0] + Math.cos(lastPointRad) * hypo);
            let new_y = Math.max(centerXY[1] + Math.sin(firstPointRad) * hypo, centerXY[1] + Math.sin(secondPointRad) * hypo, centerXY[1] + Math.sin(thirdPointRad) * hypo, centerXY[1] + Math.sin(lastPointRad) * hypo);

            let xgap = new_x - x2;	// 절대값 처리 하면 줄어들었을 때 이미지 작아지지 않음
            // 최대 오브젝트 이미지 넓이 계산
            if (new_x >= page.data.imageDataMap.get(workTicketId).naturalWidth) {
                x2 = page.data.imageDataMap.get(workTicketId).naturalWidth;
            } else {
                x2 = new_x;
            }
            // 최소 오브젝트 이미지 넓이 계산
            if (x - xgap > 0) {
                x -= xgap;
            } else {
                xgap = x;
                x = 0;
            }
            object.rotateMinXPoint = xgap;
            let ygap = new_y - y2;
            // 최대 오브젝트 이미지 높이 계산
            if (new_y >= page.data.imageDataMap.get(workTicketId).naturalHeight) {
                y2 = page.data.imageDataMap.get(workTicketId).naturalHeight;
            } else {
                y2 = new_y;
            }
            // 최소 오브젝트 이미지 높이 계산
            if (y - ygap > 0) {
                y -= ygap;
            } else {
                ygap = y;
                y = 0;
            }
            object.rotateMinYPoint = ygap;
        }
        let nw = x2 - x;
        let nh = y2 - y;
        // let cw = $(canvas).parent().width() - 4;
        let cw = page.data.configImageSize - 4;
        let scale;
        let ctx = canvas.getContext("2d");
        let xy = {};
        if (nw > nh) {
            canvas.width = cw;
            scale = cw / nw;
            xy = page.fn.getObjectXYForCrop(object, workTicketId, x, y, x2, y2, scale, originX, originY, originX2, originY2);
            x = xy.x;
            y = xy.y;
            x2 = xy.x2;
            y2 = xy.y2;
            nw = x2 - x;
            nh = y2 - y;
            scale = cw / nw;
            canvas.height = nh * scale;
        } else {
            canvas.height = cw;
            scale = cw / nh;
            xy = page.fn.getObjectXYForCrop(object, workTicketId, x, y, x2, y2, scale, originX, originY, originX2, originY2);
            x = xy.x;
            y = xy.y;
            x2 = xy.x2;
            y2 = xy.y2;
            nw = x2 - x;
            nh = y2 - y;
            scale = cw / nh;
            canvas.width = nw * scale;
        }
        ctx.drawImage(image[0], x, y, nw, nh, 0, 0, canvas.width, canvas.height);
        object.scale = scale;
        let isShowForced = false;
        if (!$(canvas).is(":visible")) {
            $(canvas).parent().parent().parent().show();
            isShowForced = true;
        }
        if (isAdd) {
            $("#svg_"+ object.workTicketId+"_" +object.taskId+ "_"+ object.matchObjectId).attr("viewBox", "0 0 " + nw + " " + nh)
                .attr("scale", scale)
                .width(canvas.width)
                .height(canvas.height)
                .css("margin", $(canvas).css("margin"))
                .css("padding", $(canvas).css("padding"));
        } else {
            $("#svg_"+ object.workTicketId+"_" +object.taskId+ "_"+ object.objectId).attr("viewBox", "0 0 " + nw + " " + nh)
                .attr("scale", scale)
                .width(canvas.width)
                .height(canvas.height)
                .css("margin", $(canvas).css("margin"))
                .css("padding", $(canvas).css("padding"));
        }
        if (isShowForced) {
            $(canvas).parent().parent().parent().hide();
        }

//		1. image : 이미지/캔버스의 요소등을 생성한 (이미지)객체.
//		2. sx : (그려지는 좌표아님!) 크롭할 영역의 시작 x좌표.
//		3. sy : (그려지는 좌표아님!) 크롭할 영역의 시작 y좌표.
//		4. sWidth : (그려지는 좌표아님!) 크롭할 영역의 넓이.
//		5. sHeight : (그려지는 좌표아님!) 크롭할 영역의 높이.
//		6. dx : 크롭된 이미지가 그려질 영역의 x좌표.
//		7. dy : 크롭된 이미지가 그려질 영역의 y좌표.
//		8. dWidth : 크롭된 이미지의 넓이(확대/축소가 가능합니다). 위의 sWidth와 같으면 1:1 비율.
//		9. dHeight : 크롭된 이미지의 높이(확대/축소가 가능합니다). 위의 sHidth와 같으면 1:1 비율.

        page.fn.drawObject(object, isAdd);
    }
}

page.fn.getObjectXYForCrop = function(object, workTicketId, x, y, x2, y2, scale, originX, originY, originX2, originY2) {
    let re = {};
    re.x = x; // minx
    re.y = y; // mix y
    re.x2 = x2; //max x
    re.y2 = y2; // max y
    re.originX = originX;
    re.originY = originY;
    re.originX2 = originX2;
    re.originY2 = originY2;
    let padding;
    if(true) {
        padding = page.constants.config.padding;
    } else {
        padding = page.constants.config.padding / scale;
    }
    if (x - padding >= 0) {
        // Crop 시작할 cropX 좌표- padding이 0 보다 클 경우(padding 정상으로 줄 수 있는 경우)
        // rect object drawX 좌표 : (origin)imgX 좌표 - cropX 좌표
        re.x = x - padding;
        re.originX = originX - re.x;
        if (object.objectType == page.constants.drawType.rectangle4p
            || object.objectType == page.constants.drawType.rectangle) {
            // object.rotateMinXPoint += padding;
            object.rotateMinXPoint = re.originX;
        } else {
            object.rotateMinXPoint -= padding;
            // object.rotateMinXPoint = re.originX ;
        }
    } else {
        re.x = 0;
        re.originX = originX - re.x;
        if (object.objectType == page.constants.drawType.rectangle4p
            || object.objectType == page.constants.drawType.rectangle) {
            object.rotateMinXPoint = re.originX;
        } else {
            object.rotateMinXPoint -= originX;
        }
    }

    if (x2 + padding <= page.data.imageDataMap.get(workTicketId).naturalWidth) {
        re.x2 = x2 + padding;
        re.originX2 = originX2 + padding;
    } else {
        re.x2 = page.data.imageDataMap.get(workTicketId).naturalWidth;
        re.originX2 = page.data.imageDataMap.get(workTicketId).naturalWidth;
    }
    if (originX2 + padding <= page.data.imageDataMap.get(workTicketId).naturalWidth) {
        re.originX2 = originX2 + padding;
    } else {
        re.originX2 = page.data.imageDataMap.get(workTicketId).naturalWidth;
    }

    if (y - padding >= 0) {
        re.y = y - padding;
        re.originY = originY - re.y;
        if (object.objectType == page.constants.drawType.rectangle4p
            || object.objectType == page.constants.drawType.rectangle) {
            // object.rotateMinYPoint += padding;
            object.rotateMinYPoint = re.originY;
        } else {
            object.rotateMinYPoint -= padding;
        }

    } else {
        re.y = 0;
        re.originY = originY - re.y;
        if (object.objectType == page.constants.drawType.rectangle4p
            || object.objectType == page.constants.drawType.rectangle) {
            // object.rotateMinYPoint += y;
            object.rotateMinYPoint = re.originY;
        } else {
            object.rotateMinYPoint -= originY;
        }

    }
    if (y2 + padding <= page.data.imageDataMap.get(workTicketId).naturalHeight) {
        re.y2 = y2 + padding;
    } else {
        re.y2 = page.data.imageDataMap.get(workTicketId).naturalHeight;
    }
    return re;
}

page.fn.checkResizeObjectPadding = function (object, workTicketId, x, y, x2, y2, scale ) {
    let re = {};
    re.x = x;
    re.y = y;
    re.x2 = x2;
    re.y2 = y2;
    let padding;
    if (true) {
        padding = page.constants.config.padding;
    } else {
        padding = page.constants.config.padding / scale;
    }
    if(x - padding >= 0) {
        if(object.objectType == page.constants.drawType.rectangle4p
            || object.objectType == page.constants.drawType.rectangle) {
            object.rotateMinXPoint += padding;
        }else {
            object.rotateMinXPoint -= padding;
        }
        re.x = x - padding;
    }else {
        if(object.objectType == page.constants.drawType.rectangle4p
            || object.objectType == page.constants.drawType.rectangle) {
            object.rotateMinXPoint += x;
        }else {
            object.rotateMinXPoint -= x;
        }
        re.x = 0;
    }

    if(x2 + padding <= page.data.imageDataMap.get(workTicketId).naturalWidth) {
        re.x2 = x2 + padding;
    }else {
        re.x2 = page.data.imageDataMap.get(workTicketId).naturalWidth;
    }
    if (y - padding >= 0) {
        if(object.objectType == page.constants.drawType.rectangle4p
            || object.objectType == page.constants.drawType.rectangle) {
            object.rotateMinYPoint += padding;
        }else {
            object.rotateMinYPoint -= padding;
        }
        re.y = y - padding;
    } else {
        if(object.objectType == page.constants.drawType.rectangle4p
            || object.objectType == page.constants.drawType.rectangle) {
            object.rotateMinYPoint += y;
        }else {
            object.rotateMinYPoint -= y;
        }
        re.y = 0;
    }
    if(y2 + padding <= page.data.imageDataMap.get(workTicketId).naturalHeight) {
        re.y2 = y2 + padding;
    } else {
        re.y2 = page.data.imageDataMap.get(workTicketId).naturalHeight;
    }

    return re;
}


page.fn.resizeImage = function(image, isDetailViewer) {
    try {
        let taskId = image.attr("data-taskId");
        let workTicketId = image.attr("data-workTicketId");
        let img = image.get(0);
        page.data.imageDataMap.get(workTicketId).naturalWidth = img.naturalWidth;
        page.data.imageDataMap.get(workTicketId).naturalHeight = img.naturalHeight;
        let nw = img.naturalWidth, nh = img.naturalHeight;
        let iw = image.width(), ih = image.height();
        let cw = image.parent().width() - 4;
        let scale;
        image.attr("data-naturalWidth", nw).attr("data-naturalHeight", nh);
        if(nw > nh) {
            log.debug("가로기준 width="+nw+", height="+nh, workTicketId);
            if(cw > iw) {
                image.width(cw);
                image.height(null);
            }else if(iw > cw){
                image.width(cw);
                image.height(null);
            }
            iw = image.width();
            ih = image.height();
            scale = iw / nw;
        } else {
            log.debug("세로기준 width="+nw+", height="+nh, workTicketId);
            if(cw > ih) {
                image.height(cw);
                iw = image.width();
                ih = image.height();
            }
            scale = ih / nh;
        }
        //set SVG
        if (!isDetailViewer) {
            $("#svg_"+workTicketId).attr("viewBox", "0 0 " + nw + " " + nh)
                .attr("scale", scale)
                .width(iw)
                .height(ih)
                .css("margin", image.css("margin"))
                .css("padding", image.css("padding")); // .get(0).currentScale = scale;
        } else {
            $("#svg_detailModal").attr("viewBox", "0 0 " + nw + " " + nh)
                .attr("scale", scale)
                .width(iw)
                .height(ih)
                .css("margin", image.css("margin"))
                .css("padding", image.css("padding"));
        }
        $("#tagWrap_"+workTicketId).width(iw).height(ih);

        if (!isDetailViewer) {
            for (let objectKey in page.data.imgObjectMap.get(workTicketId)) {
                let object = page.data.imgObjectMap.get(workTicketId)[objectKey];
                if (object!= null) {
                    if (object.isMatch && object.workType == page.constants.objectWorkType.detect) {
                        page.fn.resizeObject(object, false);
                        page.fn.resizeObject(object.matchObject, true);
                    } else {
                        page.fn.resizeObject(object, false);
                    }
                }
            }
        }
        if(page.data.hasOtherObjectType) {
            page.data.hasOtherObjectType = true;
            alert("Different object types exist.");
        }
        page.fn.hideLoading();

    } catch (Ex) {
        log.error(Ex, "page.fn.resizeImage");
    }
}

page.fn.drawObject = function(object ,isAdd) {
    let objMinXY = null;
    let o = null;
    if(object.objectType == page.constants.drawType.rectangle) {
        objMinXY, o = page.fn.render.rectangleObject(object, isAdd);
    } else if(object.objectType == page.constants.drawType.polygon) {
        objMinXY, o = page.fn.render.polygonObject(object, isAdd);
    } else if (object.objectType == page.constants.drawType.rectangle4p) {
        objMinXY, o = page.fn.render.rectangle4pObject(object, isAdd);
    } else {
        page.data.hasOtherObjectType = true;
        log.error(object, "page.fn.drawObject(), undefined objectType.");
        return false;
    }
    $(o).css("stroke-width", page.data.config.border / 200 / object.scale);
    $(o).css("stroke-dasharray", page.data.config.border / 200 / $(o).attr("scale"));
    page.fn.setTooltip("[title]");
}

page.fn.resizeObjectToSameStroke = function() {
    $(".img-object-area svg").children().each(function(idx, o) {
        $(o).css("stroke-width", page.data.config.border / 200 / $(o).attr("scale"));
        $(o).css("stroke-dasharray", page.data.config.border / 200 / $(o).attr("scale"));
    })
}

page.fn.drawImage = function(image, isDetailViewer) {
    let img = image.get(0);
    let taskId = image.attr("data-taskId");
    let workTicketId = image.attr("data-workTicketId");
    let taskImgNumber = taskId + "_" + workTicketId;
    let imageData = page.data.imageDataMap.get(workTicketId);
    // $("#svg_"+taskImgNumber).empty();
    if (!isDetailViewer) {
        $("#svg_"+workTicketId).empty();
    } else {
        $("#svg_detailModal").empty();
    }
    for (let objectKey in page.data.imgObjectMap.get(workTicketId)) {
        let minXY = null;
        let object = page.data.imgObjectMap.get(workTicketId)[objectKey];
        if (object != null) {
            if (object.isMatch) {
                if(object.objectType == page.constants.drawType.rectangle) {
                    minXY = page.fn.render.rectangle(object, isDetailViewer);
                    minXY = page.fn.render.rectangle(object.matchObject, isDetailViewer);
                } else if(object.objectType == page.constants.drawType.polygon) {
                    minXY = page.fn.render.polygon(object, isDetailViewer);
                    minXY = page.fn.render.polygon(object.matchObject, isDetailViewer);
                }else if (object.objectType == page.constants.drawType.rectangle4p) {
                    minXY = page.fn.render.rectangle4p(object, isDetailViewer);
                    minXY = page.fn.render.rectangle4p(object.matchObject, isDetailViewer);
                } else if (object.objectType == null) {
                    minXY = page.fn.render.rectangle(object, isDetailViewer);
                    minXY = page.fn.render.rectangle(object.matchObject, isDetailViewer);
                }
            } else {
                if(object.objectType == page.constants.drawType.rectangle) {
                    minXY = page.fn.render.rectangle(object, isDetailViewer);
                } else if(object.objectType == page.constants.drawType.polygon) {
                    minXY = page.fn.render.polygon(object, isDetailViewer);
                }else if (object.objectType == page.constants.drawType.rectangle4p) {
                    minXY = page.fn.render.rectangle4p(object, isDetailViewer);
                } else if (object.objectType == null) {
                    minXY = page.fn.render.rectangle(object, isDetailViewer);
                }
            }
        }
    }
    page.fn.setTooltip("[title]");
}

page.fn.setTooltip = function(selector) {
    log.debug(selector, "page.fn.setTooltip");
    $(selector).each(function(i, o){
        o = $(o);
        if(!o.hasClass("setTooltip")) {
            // log.info(o, "page.fn.setTooltip, init");
            o.tooltip({
                boundary: 'window'
                , html:true
                , track: true
                , content : function() {
                    // log.info(this, "page.fn.setTooltip, event");
                    let title = "";
                    if($(this).attr("data-tooltipType") == "iou") {
                        title = page.fn.render.getIouTooltipTitle(this);
                    } else {
                        if (_common.isNotEmpty($(this).attr("hotkey"))) {
                            title = $("<span class='tooltipin title'>" + $(this).attr("title") + "</span><span class='tooltipin hotkey'>" + $(this).attr("hotkey") + "</span>")
                        } else {
                            title = $("<span class='tooltipin title'>" + $(this).attr("title") + "</span>")
                        }
                    }
                    // log.info(title, "page.fn.setTooltip, title");
                    return title;
                }, close : function() {
                    $("div[role='log'][aria-relevant='additions']").remove();
                }, open : function () {
                    try {
                        $('[title]').not(this).tooltip('close');
                    } catch(E) {}
                }, create: function( event, ui ) {
                    $("div[role='log'][aria-relevant='additions']").remove();
                }
            });
            o.addClass("setTooltip");
        }
    });
}
page.fn.getMatchObject =  function (object, isWork) {
    let matchObject;
    if (isWork) {
        page.data.imageDataMap.get(object.workTicketId).detectObjectList.forEach(function (detectObj) {
            if (detectObj.objectId == object.matchObjectId) {
                matchObject = detectObj;
            }
        });
    } else {
        matchObject = object.matchObject;
    }
    return matchObject;
}
page.fn.render = {};
page.fn.render.getTagTitle = function(tag) {
    let title = (tag.objectIndex ? "#" + tag.objectIndex + " " : "") + tag.tagName + " : " + tag.tagValueName;
    // log.info(tag);
    return title;
}
page.fn.render.getTitle = function(object, circle, relationship, skelP) {
    let title = "#"+object.orderSeq;
    title += " " +object.className;
    log.info(skelP, "page.fn.render.getTitle");
    if(object.objectType == "rect") {
        let loc = JSON.parse(object.objectLocation);
        title += " ( " + (Math.max(loc[0][0], loc[1][0]) - Math.min(loc[0][0], loc[1][0]));
        title += " * " + (Math.max(loc[0][1], loc[1][1]) - Math.min(loc[0][1], loc[1][1]));
        title += " px )"
    }
    if(circle != null) {
        title += " : *" + (circle[2]);
    }
    if(relationship != null) {
        title += " : *" + (relationship[0]) + " ↔ *" + (relationship[1]);
    }

    if(skelP != null && skelP.length > 4 && _common.isNotEmpty(skelP[4])) {
        title += " (" + skelP[4] + ")";
    }

    if(object.tagVoList != null && object.tagVoList.length > 0) {
        object.tagVoList.forEach(function(tag){
            title += "<br/>-TAG [ " + tag.tagName + " = " + tag.tagValueName + " ] ";
        });
    }
    return title;
}
page.fn.render.getIouTooltipTitle =  function (t) {
    let data = {};
    let title = "";
    let workType =$(t).attr("data-viewType");
    let objectId = $(t).attr("data-objectId");
    let workTicketId = $(t).attr("data-workTicketId");
    if ($(t).attr("data-isObjectMatched") == "true") {
        let matchObjectId = $(t).attr("data-matchObjectId");
        let matchObject = $(".draw-object[data-workTicketId ='" + workTicketId +"'][data-objectId = '"+ matchObjectId+"']" );
        if ($(t).attr("data-viewType") == page.constants.objectWorkType.detect) {
            data = {
                objectId : $(t).attr("data-objectId")
                , workOrderSeq : "WK-"+ matchObject.attr("data-objectOrderSeq")
                , workClassName: matchObject.attr("data-className")
                , workMatchObjectId: $(t).attr("data-matchObjectId")
                , detectOrderSeq : "AI-"+ $(t).attr("data-objectOrderSeq")
                , detectClassName : $(t).attr("data-className")
                , detectMatchObjectId : $(t).attr("data-objectId")
                , iouPercent: $(t).attr("data-iouPercent")
            }
        } else {
            data = {
                objectId : $(t).attr("data-objectId")
                , workOrderSeq : "WK-"+ $(t).attr("data-objectOrderSeq")
                , workClassName: $(t).attr("data-className")
                , workMatchObjectId: $(t).attr("data-matchObjectId")
                , detectOrderSeq : "AI-"+ matchObject.attr("data-objectOrderSeq")
                , detectClassName : matchObject.attr("data-className")
                , detectMatchObjectId : $(t).attr("data-objectId")
                , iouPercent: $(t).attr("data-iouPercent")
            }
        }
        title = _common.template.parseObject("tmpl-setIouToolTip", data);
    } else {
        let seqString;
        let otherSeqString;
        let matchObjectId = $(t).attr("data-matchObjectId");
        let matchObject = $(".draw-object[data-workTicketId ='" + workTicketId +"'][data-objectId = '"+ matchObjectId+"']" );
        if (matchObjectId =="") {

        }
        if ($(t).attr("data-viewType") == page.constants.objectWorkType.work || $(t).attr("data-viewType") == "detailViewer_work") {
            seqString = "WK-";
            otherSeqString = "AI-";
        } else {
            seqString = "AI-";
            otherSeqString = "WK-";
        }
        data = {
            objectId : $(t).attr("data-objectId")
            , workType : $(t).attr("data-viewType")
            , orderSeq : seqString + $(t).attr("data-objectOrderSeq")
            , className: $(t).attr("data-className")
            // , matchOrderSeq : otherSeqString + matchObject.attr("data-objectOrderSeq")
            , matchOrderSeq : "NONE"
            , iouPercent: $(t).attr("data-iouPercent")
        }
        title = _common.template.parseObject("tmpl-singleIouTooltip", data);
    }
    return title
}

page.fn.render.castLocation = function(loc) {
    let l = [];
    if(loc != null && loc.length > 0) {
        loc.forEach(function(o){
            l.push([o[0], o[1]]);
        });
    }
    return l;
}

page.fn.render.rectangleObject = function(object, isAdd) {
    log.debug(object, "page.fn.render.rectangle");
    let loc = page.fn.render.castLocation(JSON.parse(object.objectLocation));
    let minXY = null;
    let o = null;
    if(loc != null && loc.length >= 2 && loc[0].length == 2) {
        let x = Math.min(loc[0][0], loc[1][0]);
        let y = Math.min(loc[0][1], loc[1][1]);
        let width = Math.max(loc[0][0], loc[1][0]) - x;
        let height = Math.max(loc[0][1], loc[1][1]) - y;
        o = document.createElementNS("http://www.w3.org/2000/svg", 'rect');

        o.setAttribute("class", "draw-object CLASS_" + object.classId);
        o.setAttribute("x", object.rotateMinXPoint);
        o.setAttribute("y", object.rotateMinYPoint);
        o.setAttribute("width", width);
        o.setAttribute("height", height);
        // o.setAttribute("title", page.fn.render.getTitle(object));
        o.setAttribute("data-taskId", object.taskId);
        o.setAttribute("data-workTicketId", object.workTicketId);
        o.setAttribute("data-objectId", object.objectId);
        o.setAttribute("data-viewType", object.workType);
        o.setAttribute("title", "");
        o.setAttribute("scale", object.scale);
        //Tooltip에 표현될 정보 추가
        // if(object.iouPercent == undefined) {
        //     object.iouPercent = 0.00;
        // }
        $(o)
            .attr("data-tooltipType", "iou")
            .attr("data-objectOrderSeq", object.orderSeq)
            .attr("data-className", object.className)
            .attr("data-matchObjectId", object.matchObjectId)
            .attr("data-iouPercent", (object.iouPercent).toFixed(2))
        ;
        if (object.workType == page.constants.objectWorkType.work) {
            $(o)
                .css("fill", "#1C9CFF")
                .css("stroke", "#1C9CFF")
                .css("stroke-dasharray", "5px");

        } else {
            $(o)
                .css("fill", "#FFC336")
                .css("stroke", "#FFC336");
        }
        if (object.isMatch) {
            o.setAttribute("data-isObjectMatched", "true" );
        } else {
            o.setAttribute("data-matchObjectId", "");
            o.setAttribute("data-iouPercent", (0).toFixed(2));
            o.setAttribute("data-isObjectMatched", "false" );
        }
        if (isAdd) {
            $("#svg_"+ object.workTicketId+"_"+object.taskId+"_"+ object.matchObjectId).append(o);

        } else {
            $("#svg_"+ object.workTicketId+"_"+object.taskId+"_"+ object.objectId).append(o);
        }

        minXY = {
            x : 0
            , y : 0
        };
        if(loc.length > 2) {
            $(o).css("transform", "rotate("+loc[2][0]+"deg)");
        }
    }else{
        log.debug("object data is not allow, workTicketId="+object.workTicketId, "page.fn.render.rectangle");
    }
    return minXY, o;
}

page.fn.render.rectangle = function(object, isDetailViewer) {
    log.debug(object, "page.fn.render.rectangle");
    let loc;
    if (object.objectLocation == null) {
        loc = page.fn.render.castLocation(JSON.parse(object.bboxLocation));
    } else {
        loc = page.fn.render.castLocation(JSON.parse(object.objectLocation));
    }
    // let loc = page.fn.render.castLocation(JSON.parse(object.objectLocation));
    let minXY = null;
    if(loc != null && loc.length >= 2 && loc[0].length == 2) {
        let x = Math.min(loc[0][0], loc[1][0]);
        let y = Math.min(loc[0][1], loc[1][1]);
        let width = Math.max(loc[0][0], loc[1][0]) - x;
        let height = Math.max(loc[0][1], loc[1][1]) - y;
        let o = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        o.setAttribute("class", "draw-object CLASS_" + object.classId);
        o.setAttribute("x", x);
        o.setAttribute("y", y);
        o.setAttribute("width", width);
        o.setAttribute("height", height);
        o.setAttribute("data-objectClassId", object.classId);
        o.setAttribute("data-workTicketId", object.workTicketId);
        o.setAttribute("data-objectId", object.objectId);

        o.setAttribute("title", "");
        //Tooltip에 표현될 정보 추가
        $(o)
            .attr("data-tooltipType", "iou")
            .attr("data-objectOrderSeq", object.orderSeq)
            .attr("data-className", object.className)
            .attr("data-matchObjectId", object.matchObjectId)
            .attr("data-iouPercent", (object.iouPercent).toFixed(2))
        ;


        if (!isDetailViewer) {
            o.setAttribute("data-viewType", object.workType);
            $("#svg_"+ object.workTicketId).append(o);
        } else {
            if (object.isMatch) {
                o.setAttribute("data-isObjectMatched", "true" );
            } else {
                o.setAttribute("data-iouPercent", (0).toFixed(2));
                o.setAttribute("data-isObjectMatched", "false" );
            }
            o.setAttribute("data-viewType", "detailViewer_"+object.workType);

            if (object.workType == page.constants.objectWorkType.work) {
                $(o)
                    .css("fill", "#1C9CFF")
                    .css("stroke", "#1C9CFF")
                    .css("fill-opacity", "0.4")
                    .css("stroke-dasharray", "5px");

            } else {
                $(o)
                    .css("fill", "#FFC336")
                    .css("fill-opacity", "0.4")
                    .css("stroke", "#FFC336");
            }
            if (page.data.detailObjectId == object.objectId || object.isMatch && page.data.detailObjectId == object.matchObjectId){
                $(o)
                    .css("fill", "#002fff")
                    .css("stroke", "#002fff");
            }

            $("#svg_detailModal").append(o);
        }

        minXY = {
            x : x
            , y : y
        };
        if(loc.length > 2) {
            $(o).css("transform", "rotate("+loc[2][0]+"deg)");
        }
    }else{
        log.debug("object data is not allow, workTicketId="+object.workTicketId, "page.fn.render.rectangle");
    }
    return minXY;
}
page.fn.render.tag = function(tag, x, y) {
    let o = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
    x += tag.tagIndex * (page.constants.tagSize + (page.constants.tagSize/4));
    let topMargin = (page.constants.tagSize / 2);
    y -= (page.constants.tagSize + topMargin + 5);
    let points = x + ","+ (y + topMargin) + " "
        + x + "," + (y + page.constants.tagSize + topMargin) + " "
        + (x + page.constants.tagSize) + "," + (y + page.constants.tagSize + topMargin) + " "
        + (x + page.constants.tagSize) + "," + (y + topMargin) + " "
        + (x + (page.constants.tagSize / 2)) + "," + y + " "
    ;
    let color = page.fn.getTagValueColor(tag);
    if(_common.isEmpty(color)) {
        $(o).css("fill", tag.color);
    } else {
        $(o).css("fill", color);
    }

    o.setAttribute("points", points);
    o.setAttribute("title", page.fn.render.getTagTitle(tag));
    $(o).addClass("tag");

    $("#svg_"+tag.taskId + "_" + tag.workTicketId).append(o);

}

page.fn.getTagValueColor = function(tag) {
    let color = null;
    if(tag.tagTypeCd == "OBJ" && tag.tagValTypeCd == "30") {
        for(let i = 0; i < page.data.project.tags.length; i++) {
            if(page.data.project.tags[i].tagId == tag.tagId) {
                for(let j = 0; j < page.data.project.tags[i].tagSelectValueVoList.length; j++) {
                    if(page.data.project.tags[i].tagSelectValueVoList[j].value == tag.val) {
                        if(_common.isNotEmpty(page.data.project.tags[i].tagSelectValueVoList[j].color)) {
                            color = page.data.project.tags[i].tagSelectValueVoList[j].color;
                        }
                        break;
                    }
                }
                break;
            }
        }
    }
    return color;
}
page.fn.render.tagOfImage = function(tag, x, y) {
    let o = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
    x -= tag.tagIndex * (page.constants.tagSize + (page.constants.tagSize/4));
    let topMargin = (page.constants.tagSize / 2);
    y -= (page.constants.tagSize + topMargin + 5);
    let points = x + ","+ (y + topMargin) + " "
        + x + "," + (y + page.constants.tagSize + topMargin) + " "
        + (x + page.constants.tagSize) + "," + (y + page.constants.tagSize + topMargin) + " "
        + (x + page.constants.tagSize) + "," + (y + topMargin) + " "
        + (x + (page.constants.tagSize / 2)) + "," + y + " "
    ;

    o.setAttribute("points", points);
    o.setAttribute("title", page.fn.render.getTagTitle(tag));
    $(o).css("fill", tag.color);
    $(o).addClass("tag");
    // $("#svg_"+tag.taskId + "_" + tag.workTicketId).append(o);
}

page.fn.render.polygonObject = function(object, isAdd) {
    let loc = page.fn.render.castLocation(JSON.parse(object.objectLocation));
    let copyLoc = JSON.parse(JSON.stringify(loc));
    copyLoc.forEach(function(cl) {
        cl[0] = cl[0] - object.rotateMinXPoint;
        cl[1] = cl[1] - object.rotateMinYPoint;
    });
    let minXY = null;
    let o = null;
    if(loc != null && loc.length > 0) {
        log.debug(object, "page.fn.render.polygon");
        o = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
        o.setAttribute("class", "draw-object CLASS_" + object.classId);
        o.setAttribute("fill-rule", "evenodd");
        o.setAttribute("points", copyLoc);
        // o.setAttribute("title", page.fn.render.getTitletest(object));
        o.setAttribute("data-taskId", object.taskId);
        o.setAttribute("data-objectData", object)
        o.setAttribute("data-workTicketId", object.workTicketId);
        o.setAttribute("data-objectId", object.objectId);
        o.setAttribute("data-viewType", object.workType);
        o.setAttribute("scale", object.scale);
        //Tooltip에 표현될 정보 추가
        $(o)
            .attr("data-tooltipType", "iou")
            .attr("data-objectOrderSeq", object.orderSeq)
            .attr("data-className", object.className)
            .attr("data-matchObjectId", object.matchObjectId)
            .attr("data-iouPercent", (object.iouPercent).toFixed(2))
            .attr("title", "")
        ;
        if (object.workType == page.constants.objectWorkType.work) {
            $(o)
                .css("fill", "#1C9CFF")
                .css("stroke", "#1C9CFF")
                .css("stroke-dasharray", "5px");

        } else {
            $(o)
                .css("fill", "#FFC336")
                .css("stroke", "#FFC336");
        }
        if (object.isMatch) {
            o.setAttribute("data-isObjectMatched", "true" );
        } else {
            o.setAttribute("data-iouPercent", (0).toFixed(2));
            o.setAttribute("data-isObjectMatched", "false" );
        }
        if (isAdd) {
            $("#svg_"+ object.workTicketId+"_"+object.taskId+"_"+ object.matchObjectId).append(o);

        } else {
            $("#svg_"+ object.workTicketId+"_"+object.taskId+"_"+ object.objectId).append(o);
        }
        if(loc[0] != null && loc[0].length > 0) {
            minXY = {
                x : 1000000000
                , y : 100000000
            };
            let idx = 0;
            loc[0].forEach((function(l){
                if(idx % 2 == 0) {
                    minXY.x = Math.min(l, minXY.x);
                } else {
                    minXY.y = Math.min(l, minXY.y);
                }
                idx++;
            }));
        }
    }else{
        log.debug("object data is not allow, workTicketId="+object.workTicketId, "page.fn.render.polygon");
    }
    return minXY, o;
}

page.fn.render.polygon = function(object, isDetailViewer) {
    let loc;
    if (object.objectLocation == null) {
        loc = page.fn.render.castLocation(JSON.parse(object.polygonLocation));
    } else {
        loc = page.fn.render.castLocation(JSON.parse(object.objectLocation));
    }
    // let loc = page.fn.render.castLocation(JSON.parse(object.objectLocation));
    let minXY = null;
    if(loc != null && loc.length > 0) {
        log.debug(object, "page.fn.render.polygon");
        let o = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
        o.setAttribute("class", "draw-object CLASS_" + object.classId);
        o.setAttribute("fill-rule", "evenodd");
        o.setAttribute("points", loc);
        o.setAttribute("title", page.fn.render.getTitle(object));
        // o.setAttribute("data-taskId", object.taskId);
        o.setAttribute("data-workTicketId", object.workTicketId);
        o.setAttribute("data-objectId", object.objectId);

        //Tooltip에 표현될 정보 추가
        $(o)
            .attr("data-tooltipType", "iou")
            .attr("data-objectOrderSeq", object.orderSeq)
            .attr("data-className", object.className)
            .attr("data-matchObjectId", object.matchObjectId)
            .attr("data-iouPercent", (object.iouPercent).toFixed(2))
        ;

        if (!isDetailViewer) {

            o.setAttribute("data-viewType", object.workType);
            $("#svg_" + object.workTicketId).append(o);
        } else {
            if (object.isMatch) {
                o.setAttribute("data-isObjectMatched", "true" );
            } else {
                o.setAttribute("data-iouPercent", (0).toFixed(2));
                o.setAttribute("data-isObjectMatched", "false" );
            }
            o.setAttribute("data-viewType", "detailViewer_"+object.workType);
            if (object.workType == page.constants.objectWorkType.work) {
                $(o)
                    .css("fill", "#1C9CFF")
                    .css("stroke", "#1C9CFF")
                    .css("fill-opacity", "0.4")
                    .css("stroke-dasharray", "5px");

            } else {
                $(o)
                    .css("fill", "#FFC336")
                    .css("fill-opacity", "0.4")
                    .css("stroke", "#FFC336");
            }
            if (page.data.detailObjectId == object.objectId || object.isMatch && page.data.detailObjectId == object.matchObjectId) {
                $(o)
                    .css("fill", "#002fff")
                    .css("stroke", "#002fff");
            }
            $("#svg_detailModal").append(o);
        }
        if(loc[0] != null && loc[0].length > 0) {
            minXY = {
                x : 1000000000
                , y : 100000000
            };
            let idx = 0;
            loc[0].forEach((function(l){
                if(idx % 2 == 0) {
                    minXY.x = Math.min(l, minXY.x);
                } else {
                    minXY.y = Math.min(l, minXY.y);
                }
                idx++;
            }));
        }
    }else{
        log.debug("object data is not allow, workTicketId="+object.workTicketId, "page.fn.render.polygon");
    }
    return minXY;
}

page.fn.render.polylineObject = function(object) {
    let loc = page.fn.render.castLocation(JSON.parse(object.objectLocation));
    let copyLoc = JSON.parse(JSON.stringify(loc));
    copyLoc.forEach(function(cl) {
        cl[0] = cl[0] - object.rotateMinXPoint;
        cl[1] = cl[1] - object.rotateMinYPoint;
    });
    let minXY = null;
    if(loc != null && loc.length > 0) {
        log.debug(object, "page.fn.render.polygon");
        let o = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
        o.setAttribute("class", "draw-object CLASS_" + object.classId);
        o.setAttribute("points", copyLoc);
        o.setAttribute("title", page.fn.render.getTitle(object));
        o.setAttribute("data-taskId", object.taskId);
        o.setAttribute("data-workTicketId", object.workTicketId);
        o.setAttribute("data-objectId", object.objectId);
        $("#svg_" + object.workTicketId + "_" + object.taskId + "_" + object.objectId).append(o);
        if(loc[0] != null && loc[0].length > 0) {
            minXY = {
                x : 1000000000
                , y : 100000000
            };
            let idx = 0;
            loc[0].forEach((function(l){
                if(idx % 2 == 0) {
                    minXY.x = Math.min(l, minXY.x);
                } else {
                    minXY.y = Math.min(l, minXY.y);
                }
                idx++;
            }));
        }
    }else{
        log.debug("object data is not allow, workTicketId="+object.workTicketId, "page.fn.render.polyline");
    }
    return minXY;
}

page.fn.render.polyline = function(object) {
    let loc = page.fn.render.castLocation(JSON.parse(object.objectLocation));
    let minXY = null;
    if(loc != null && loc.length > 0) {
        log.debug(object, "page.fn.render.polygon");
        let o = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
        o.setAttribute("class", "draw-object CLASS_" + object.classId);
        o.setAttribute("points", loc);
        o.setAttribute("title", page.fn.render.getTitle(object));
        o.setAttribute("data-taskId", object.taskId);
        o.setAttribute("data-workTicketId", object.workTicketId);
        o.setAttribute("data-objectId", object.objectId);
        $("#svg_"+object.taskId + "_" + object.workTicketId).append(o);
        if(loc[0] != null && loc[0].length > 0) {
            minXY = {
                x : 1000000000
                , y : 100000000
            };
            let idx = 0;
            loc[0].forEach((function(l){
                if(idx % 2 == 0) {
                    minXY.x = Math.min(l, minXY.x);
                } else {
                    minXY.y = Math.min(l, minXY.y);
                }
                idx++;
            }));
        }
    }else{
        log.debug("object data is not allow, workTicketId="+object.workTicketId, "page.fn.render.polyline");
    }
    return minXY;
}

page.fn.render.keypointObject = function(object) {
    let minXY = null;
    let taskId = object.taskId;
    let keypoint = page.fn.getKeyPoint(taskId);
    if(keypoint != null) {
        if (keypoint.position != "") {
            let loc = JSON.parse(object.objectLocation);
            log.info(object, "page.fn.render.keypoint");
            log.info(loc, "page.fn.render.keypoint");
            if (loc != null && loc.length > 0) {
                let m = new HashMap();
                let m2 = new HashMap();
                loc.forEach(function (point) {
                    m.put(point[2], point);
                });
                JSON.parse(keypoint.position).forEach(function (point) {
                    m2.put(point[2], point);
                });
                JSON.parse(keypoint.relationship).forEach(function (rel) {
                    if (m.get(rel[0]) != null && m.get(rel[1]) != null) {
                        let p1 = m.get(rel[0]);
                        let p2 = m.get(rel[1]);
                        let px1 = p1[0] - object.rotateMinXPoint;
                        let py1 = p1[1] - object.rotateMinYPoint;
                        let px2 = p2[0] - object.rotateMinXPoint;
                        let py2 = p2[1] - object.rotateMinYPoint;
                        let points = px1 + "," + py1 + " " + px2 + "," + py2;
                        let o = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
                        o.setAttribute("points", points);
                        o.setAttribute("title", page.fn.render.getTitle(object, null, rel));
                        o.setAttribute("class", "draw-object CLASS_" + object.classId);
                        o.setAttribute("data-taskId", object.taskId);
                        o.setAttribute("data-workTicketId", object.workTicketId);
                        o.setAttribute("data-objectId", object.objectId);
                        $("#svg_" + object.workTicketId + "_" + object.taskId + "_" + object.objectId).append(o);
                    }
                });
                minXY = {
                    x: 1000000000
                    , y: 100000000
                };
                loc.forEach(function (c) {
                    let o = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
                    let cls = "CLASS_" + object.classId;
                    minXY.x = Math.min(minXY.x, c[0]);
                    minXY.y = Math.min(minXY.y, c[1]);
                    o.setAttribute("cx", c[0] - object.rotateMinXPoint);
                    o.setAttribute("cy", c[1] - object.rotateMinYPoint);
                    // o.setAttribute("r", 10);
                    if (c[3] != null && c[3] == "1") {
                        cls += " invisibility";
                    } else if (c[3] != null && c[3] == "0") {
                        cls += " deletePoint";
                    } else if (c[3] != null && c[3] == "3") {
                        cls += " partial";
                    }
                    o.setAttribute("class", cls);
                    o.setAttribute("title", page.fn.render.getTitle(object, c, null, m2.get(c[2])));
                    o.setAttribute("data-taskId", object.taskId);
                    o.setAttribute("data-workTicketId", object.workTicketId);
                    o.setAttribute("data-objectId", object.objectId);
                    $("#svg_"+ object.workTicketId + "_"  + object.taskId + "_" + object.objectId).append(o);
                    try {
                        if (m2.get([c[2]]).length >= 7) {
                            let color = m2.get([c[2]])[6];
                            color = color.startsWith("#") ? color : "#" + color;
                            $(o).css("stroke", color);
                        }
                    } catch (E) {
                        log.debug("============================");
                        log.debug(E);
                        log.debug(loc);
                        log.debug("============================");
                    }
                    if (keypoint.radiusYn == "Y") {
                        $(o).css("r", c[4]);
                    }
                });
            } else {
                log.debug("not defined keypoint!", "page.fn.render.keypoint");
            }
        }
    }
    return minXY;
}

page.fn.render.keypoint = function(object) {
    let minXY = null;
    let taskId = object.taskId;
    let keypoint = page.fn.getKeyPoint(taskId);
    if(keypoint != null) {
        if(keypoint.position != "") {
            let loc = JSON.parse(object.objectLocation);
            log.info(object, "page.fn.render.keypoint");
            log.info(loc, "page.fn.render.keypoint");
            if (loc != null && loc.length > 0) {
                let m = new HashMap();
                let m2 = new HashMap();
                loc.forEach(function (point) {
                    m.put(point[2], point);
                });
                JSON.parse(keypoint.position).forEach(function (point) {
                    m2.put(point[2], point);
                });
                JSON.parse(keypoint.relationship).forEach(function(rel){
                    if(m.get(rel[0]) != null && m.get(rel[1]) != null) {
                        let p1 = m.get(rel[0]);
                        let p2 = m.get(rel[1]);

                        let points = p1[0] + "," + p1[1] + " " + p2[0] + "," + p2[1];
                        let o = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
                        o.setAttribute("points", points);
                        o.setAttribute("title", page.fn.render.getTitle(object, null, rel));
                        o.setAttribute("class", "draw-object CLASS_" + object.classId);
                        o.setAttribute("data-taskId", object.taskId);
                        o.setAttribute("data-workTicketId", object.workTicketId);
                        o.setAttribute("data-objectId", object.objectId);
                        $("#svg_" + object.taskId + "_" + object.workTicketId).append(o);
                    }
                });
                minXY = {
                    x : 1000000000
                    , y : 100000000
                };
                loc.forEach(function (c) {
                    let o = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
                    let cls = "CLASS_" + object.classId;
                    minXY.x = Math.min(minXY.x, c[0]);
                    minXY.y = Math.min(minXY.y, c[1]);
                    o.setAttribute("cx", c[0]);
                    o.setAttribute("cy", c[1]);
                    // o.setAttribute("r", 10);
                    if (c[3] != null && c[3] == "1") {
                        cls += " invisibility";
                    } else if (c[3] != null && c[3] == "0") {
                        cls += " deletePoint";
                    } else if (c[3] != null && c[3] == "3") {
                        cls += " partial";
                    }
                    o.setAttribute("class", cls);
                    o.setAttribute("title", page.fn.render.getTitle(object, c, null, m2.get(c[2])));
                    o.setAttribute("data-taskId", object.taskId);
                    o.setAttribute("data-workTicketId", object.workTicketId);
                    o.setAttribute("data-objectId", object.objectId);
                    $("#svg_" + object.workTicketId).append(o);
                    try {
                        if(m2.get([c[2]]).length >= 7) {
                            let color = m2.get([c[2]])[6];
                            color = color.startsWith("#") ? color : "#"+color;
                            $(o).css("stroke", color);
                        }
                    } catch(E) {
                        log.debug("============================");
                        log.debug(E);
                        log.debug(loc);
                        log.debug("============================");
                    }
                    if(keypoint.radiusYn == "Y") {
                        $(o).css("r", c[4]);
                    }
                });
            } else {
                log.debug("not defined keypoint!", "page.fn.render.keypoint");
            }
        }
    }
    return minXY;
}

/**
 * Rectangle, 점4개 사각형을 캔버스 영역에 추가
 * @param object
 */

page.fn.render.rectangle4pObject = function (object, isAdd) {
    log.info(object, "page.fn.render.rectangle4p");
    let minXY = {
        x:0, y:0
    };
    let o = null;
    try {
        let loc = page.fn.render.castLocation(JSON.parse(object.objectLocation));
        if (loc.length < 4) {
            log.warn(object, "page.fn.renderRectangle, can't draw");
            return false;
        }
        let x = Math.min(_common.nvl(loc[0][0], 0), _common.nvl(loc[1][0], 0), _common.nvl(loc[2][0], 0), _common.nvl(loc[3][0], 0));
        let y = Math.min(_common.nvl(loc[0][1], 0), _common.nvl(loc[1][1], 0), _common.nvl(loc[2][1], 0), _common.nvl(loc[3][1], 0));
        minXY.x = x;
        minXY.y = y;
        let width = Math.max(_common.nvl(loc[0][0], 0), _common.nvl(loc[1][0], 0), _common.nvl(loc[2][0], 0), _common.nvl(loc[3][0], 0)) - x;
        let height = Math.max(_common.nvl(loc[0][1], 0), _common.nvl(loc[1][1], 0), _common.nvl(loc[2][1], 0), _common.nvl(loc[3][1], 0)) - y;
        o = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        o.setAttribute("x", object.rotateMinXPoint);
        o.setAttribute("y", object.rotateMinYPoint);
        o.setAttribute("width", width);
        o.setAttribute("height", height);
        o.setAttribute("class", "draw-object object-body CLASS_" + object.classId);
        o.setAttribute("id", object.objectId);
        o.setAttribute("objectId", object.objectId);
        o.setAttribute("title", page.fn.render.getTitle(object));
        o.setAttribute("data-taskId", object.taskId);
        o.setAttribute("data-workTicketId", object.workTicketId);
        o.setAttribute("data-objectId", object.objectId);
        o.setAttribute("data-viewType", object.workType);
        o.setAttribute("scale", object.scale);
        // o.setAttribute("title", "#" + object.orderSeq);
        if (object.workType == page.constants.objectWorkType.work) {
            $(o)
                .css("fill", "#1C9CFF")
                .css("stroke", "#1C9CFF")
                .css("stroke-dasharray", "5px");

        } else {
            $(o)
                .css("fill", "#FFC336")
                .css("stroke", "#FFC336");
        }
        if (object.isMatch) {
            o.setAttribute("data-isObjectMatched", "true" );
        } else {
            o.setAttribute("data-iouPercent", (0).toFixed(2));
            o.setAttribute("data-isObjectMatched", "false" );
        }
        if (isAdd) {
            $("#svg_"+ object.workTicketId+"_"+object.taskId+"_"+ object.matchObjectId).append(o);

        } else {
            $("#svg_"+ object.workTicketId+"_"+object.taskId+"_"+ object.objectId).append(o);
        }

        if(loc.length > 4) {
            $(o).css("transform", "rotate("+loc[4][0]+"deg)");
        }
    } catch (E) {
        log.debug(E, "page.fn.render.rectangle4p");
    }
    return minXY, o;
}

page.fn.render.rectangle4p = function (object, isDetailViewer) {
    log.info(object, "page.fn.render.rectangle4p");
    let minXY = {
        x:0, y:0
    };
    let o = null;
    try {
        let loc;
        if (object.objectLocation == null) {
            // loc = page.fn.render.castLocation(JSON.parse(object.bboxLocation));
        } else {
            loc = page.fn.render.castLocation(JSON.parse(object.objectLocation));
        }
        // let loc = page.fn.render.castLocation(JSON.parse(object.objectLocation));
        if (loc.length < 4) {
            log.warn(object, "page.fn.renderRectangle, can't draw");
            return false;
        }
        let x = Math.min(_common.nvl(loc[0][0], 0), _common.nvl(loc[1][0], 0), _common.nvl(loc[2][0], 0), _common.nvl(loc[3][0], 0));
        let y = Math.min(_common.nvl(loc[0][1], 0), _common.nvl(loc[1][1], 0), _common.nvl(loc[2][1], 0), _common.nvl(loc[3][1], 0));
        minXY.x = x;
        minXY.y = y;
        let width = Math.max(_common.nvl(loc[0][0], 0), _common.nvl(loc[1][0], 0), _common.nvl(loc[2][0], 0), _common.nvl(loc[3][0], 0)) - x;
        let height = Math.max(_common.nvl(loc[0][1], 0), _common.nvl(loc[1][1], 0), _common.nvl(loc[2][1], 0), _common.nvl(loc[3][1], 0)) - y;
        o = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        o.setAttribute("x", x);
        o.setAttribute("y", y);
        o.setAttribute("width", width);
        o.setAttribute("height", height);
        o.setAttribute("class", "draw-object object-body CLASS_" + object.classId);
        o.setAttribute("id", object.objectId);
        o.setAttribute("objectId", object.objectId);
        o.setAttribute("title", page.fn.render.getTitle(object));
        // o.setAttribute("data-taskId", object.taskId);
        o.setAttribute("data-workTicketId", object.workTicketId);
        o.setAttribute("data-objectId", object.objectId);
        // o.setAttribute("title", "#" + object.orderSeq);
        //Tooltip에 표현될 정보 추가
        $(o)
            .attr("data-tooltipType", "iou")
            .attr("data-objectOrderSeq", object.orderSeq)
            .attr("data-className", object.className)
            .attr("data-matchObjectId", object.matchObjectId)
            .attr("data-iouPercent", (object.iouPercent).toFixed(2))
        ;

        if (!isDetailViewer) {

            o.setAttribute("data-viewType", object.workType);
            $("#svg_" + object.workTicketId).append(o);
        } else {
            if (object.isMatch) {
                o.setAttribute("data-isObjectMatched", "true" );
            } else {
                o.setAttribute("data-iouPercent", (0).toFixed(2));
                o.setAttribute("data-isObjectMatched", "false" );
            }
            o.setAttribute("data-viewType", "detailViewer_" + object.workType);
            if (object.workType == page.constants.objectWorkType.work) {
                $(o).css("fill", "#FFC336")
                    .css("stroke", "#FFC336")
                    .css("fill-opacity", "0.4");

            } else {
                $(o).css("fill", "#1C9CFF")
                    .css("stroke", "#1C9CFF")
                    .css("fill-opacity", "0.4")
                    .css("stroke-dasharray", "5px");
            }
            $("svg_detailModal").append(o);
        }

        if(loc.length > 4) {
            $(o).css("transform", "rotate("+loc[4][0]+"deg)");
        }
    } catch (E) {
        log.debug(E, "page.fn.render.rectangle4p");
    }
    return minXY, o;
}

page.fn.render.pointGroupObject = function(object) {
    log.info(object, "page.fn.render.pointGroup");
    let minXY = {x:0, y:0};
    try {
        let g;
//    $("#"+object.objectId).remove();
        g = document.createElementNS("http://www.w3.org/2000/svg", 'g');
        g.setAttribute("objectId", object.objectId);
        g.setAttribute("id", object.objectId);
        g.setAttribute("class", "draw-object object-body CLASS_" + object.classId);
        g.setAttribute("data-taskId", object.taskId);
        g.setAttribute("data-workTicketId", object.workTicketId);
        g.setAttribute("data-objectId", object.objectId);
        $("#svg_" + object.taskId + "_" + object.workTicketId + "_" + object.objectId).append(g);
        let location = page.fn.render.castLocation(JSON.parse(object.objectLocation));
        location.forEach(function (point) {
            let c = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            let id = "g_" + point[2];
            c.setAttribute("cx", point[0] - object.rotateMinXPoint);
            c.setAttribute("cy", point[1] - object.rotateMinYPoint);
            c.setAttribute("objectId", object.objectId);
            c.setAttribute("id", id);
            c.setAttribute("title", page.fn.render.getTitle(object));
            g.append(c);
        });
        minXY.x = location[0][0];
        minXY.y = location[0][1];
    } catch (E) {
        log.debug(E, "page.fn.render.pointGroup");
    }
    return minXY;
}

page.fn.render.pointGroup = function(object) {
    log.info(object, "page.fn.render.pointGroup");
    let minXY = {x:0, y:0};
    try {
        let g;
        // $("#"+object.objectId).remove();
        g = document.createElementNS("http://www.w3.org/2000/svg", 'g');
        g.setAttribute("objectId", object.objectId);
        g.setAttribute("id", object.objectId);
        g.setAttribute("class", "draw-object object-body CLASS_" + object.classId);
        g.setAttribute("data-taskId", object.taskId);
        g.setAttribute("data-workTicketId", object.workTicketId);
        g.setAttribute("data-objectId", object.objectId);
        $("#svg_"+object.taskId + "_" + object.workTicketId).append(g);
        let location = page.fn.render.castLocation(JSON.parse(object.objectLocation));
        location.forEach(function (point) {
            let c = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            let id = "g_" + point[2];
            c.setAttribute("cx", point[0]);
            c.setAttribute("cy", point[1]);
            c.setAttribute("objectId", object.objectId);
            c.setAttribute("id", id);
            c.setAttribute("title", page.fn.render.getTitle(object));
            g.append(c);
        });
        minXY.x = location[0][0];
        minXY.y = location[0][1];
    } catch (E) {
        log.debug(E, "page.fn.render.pointGroup");
    }
    return minXY;
}

page.fn.changeClass = function(target) {
    let classId = $(target).val();
    $("#searchClassTag").empty();
    $("#searchTagInput").val("");
    $("#searchTagSelect").empty();
    $("#tagTypeSelectForm").css("display", "none");
    $("#tagTypeInputForm").css("display", "none");
    $("#searchClassTag").append(_common.template.parseObject("tmpl-classTagOptionAll"));
    page.data.project.tags.forEach(function (tag) {
        if(tag.matchClasses.includes(classId)) {
            $("#searchClassTag").append(_common.template.parseObject("tmpl-classTagOption", tag));
        }
    });
}

page.fn.changeClassTag = function(target) {
    $("#searchTagInput").val("");
    $("#searchTagSelect").empty();
    let tagId = $(target).val();
    if(tagId == null || tagId == "") {
        $("#tagTypeSelectForm").css("display", "none");
        $("#tagTypeInputForm").css("display", "none");
    }else {
        for(var i = 0; i < page.data.project.tags.length; i++) {
            var tag = page.data.project.tags[i];
            if(tag.tagId == tagId) {
                if(tag.tagValTypeCd == "20") {
                    $("#tagTypeSelectForm").css("display", "none");
                    $("#tagTypeInputForm").show();
                } else {
                    $("#tagTypeInputForm").css("display", "none");
                    $("#tagTypeSelectForm").show();
                    $("#searchTagSelect").append(_common.template.parseObject("tmpl-tagValueOptionAll"));
                    tag.tagSelectValueVoList.forEach(function (selectValue) {
                        $("#searchTagSelect").append(_common.template.parseObject("tmpl-tagValueOption", selectValue));
                    });
                }
                break;
            }
        }
    }
}

page.fn.viewDetailInfo = function(taskId, workTicketId, objectId, isFirst) {
    let taskImgObjectId = taskId + "_" + workTicketId + "_" + objectId;
    $("#root div.data-box div.icoViewed").remove();
    if(!isFirst) {
        $("#chkReviewImage_" + taskImgObjectId).prop("checked", $("#chkReviewImage_" + taskImgObjectId).is(":checked") ? false : true);
        $("#root div.data-box[data-taskId='" + taskId + "'][data-workTicketId='" + workTicketId + "'][data-objectId='" + objectId + "']").toggleClass("on");
    }
    page.fn.reCheckImageSelected();
    // $("#root div.data-box[data-taskId='" + taskId + "'][data-workTicketId='" + workTicketId + "'][data-objectId='" + objectId + "']").append(_common.template.parseObject("tmpl-hightlightImage"));
}

page.fn.clickImage = function() {
    page.fn.reCheckImageSelected();
}

page.fn.reloadImageList = function() {
    page.fn.search(page.data.searchCondition);
}

page.fn.getKeyPoint = function(taskId) {
    let keypoint = null;
    if(page.keypointList.length != 0 && taskId != null) {
        for(let i = 0; i < page.keypointList.length; i++) {
            if(taskId == page.keypointList[i].taskId) {
                keypoint = page.keypointList[i];
                break;
            }
        }
    }
    return keypoint;
}

page.fn.alert = function(message) {
    alert(message);
}

page.fn.togglePopup = function (target) {
    log.info(target, "page.fn.togglePopup");
    target = $(target);
    if(target.is(":visible")) {
        target.hide();
        if(target.hasClass("modal-configure")) {
            $("#btnToggleConfigure").removeClass("on");
        }
    } else {
        if(target.hasClass("modal-configure")) {
            $("#btnToggleConfigure").addClass("on");
        }
        target.show();
    }
}
page.fn.setViewOpacity = function (opacity) {
    $("#txtOpacity").text(opacity);
    $("#root").removeClass("opacity_"+page.data.config.opacity);
    page.data.config.opacity = opacity;
    $("#root").addClass("opacity_"+page.data.config.opacity);
    _common.cookie.set(page.constants.cookieKeys.opacity, opacity);
}
page.fn.setViewBorder = function (border) {
    $("#txtBorder").text(border);
    $("#root").removeClass("border_"+page.data.config.border);
    page.data.config.border = border * 100;
    $("#root").addClass("border_"+page.data.config.border);
    _common.cookie.set(page.constants.cookieKeys.border, border);
    page.fn.resizeObjectToSameStroke();
}
page.fn.setViewPoint = function (point) {
    $("#txtPoint").text(point);
    $("#root").removeClass("point_"+(page.data.config.point));
    page.data.config.point = (point*100);
    $("#root").addClass("point_"+page.data.config.point);
    _common.cookie.set(page.constants.cookieKeys.point, point);
}
page.fn.setImageFilter = function(brightness, contrast) {
    $("#root").removeClass("imageFilter_B"+page.data.config.brightness+"_C"+page.data.config.contrast);
    page.data.config.brightness = brightness;
    page.data.config.contrast = contrast;
    $("#root").addClass("imageFilter_B"+page.data.config.brightness+"_C"+page.data.config.contrast);
    $("#txtBrightness").text(brightness);
    $("#txtContrast").text(contrast);
    _common.cookie.set(page.constants.cookieKeys.brightness, brightness);
    _common.cookie.set(page.constants.cookieKeys.contrast, contrast);
}
page.fn.setDefaultControlbar = function(type) {
    log.info(type, "page.fn.setDefaultControlbar");
    if(type == "opacity") {
        $("#sliderOpacity").slider("value", page.constants.config.opacity);
        page.fn.setViewOpacity(page.constants.config.opacity);
    } else if(type == "border") {
        $("#sliderBorder").slider("value", page.constants.config.border.default);
        page.fn.setViewBorder(page.constants.config.border.default);
    } else if(type == "brightness") {
        $("#sliderBrightness").slider("value", page.constants.config.brightness);
        page.fn.setImageFilter(page.constants.config.brightness, page.data.config.contrast);
    } else if(type == "contrast") {
        $("#sliderContrast").slider("value", page.constants.config.contrast);
        page.fn.setImageFilter(page.data.config.brightness, page.constants.config.contrast);
    } else if(type == "point") {
        $("#sliderPoint").slider("value", page.constants.config.point.default);
        page.fn.setViewPoint(page.constants.config.point.default);
    }
}
page.fn.toggleViewTag = function() {
    if(page.dom.btnToggleTag.hasClass("on")) {
        page.dom.btnToggleTag.removeClass("on");
        page.dom.root.removeClass("onTag");
        _common.cookie.set(page.constants.cookieKeys.isViewTags, "false");
    } else {
        page.dom.btnToggleTag.addClass("on");
        page.dom.root.addClass("onTag");
        _common.cookie.set(page.constants.cookieKeys.isViewTags, "true");
    }
}
page.fn.toggleViewClass = function () {
    if (page.dom.btnToggleClass.hasClass("on")) {
        page.dom.btnToggleClass.removeClass("on");
        $(".class-name-area").removeClass("on");
        page.data.isViewClasses = false;
        // _common.cookie.set(page.constants.cookieKeys.isViewClasses, "false");
    } else {
        page.dom.btnToggleClass.addClass("on");
        $(".class-name-area").addClass("on");
        page.data.isViewClasses = true;
        // _common.cookie.set(page.constants.cookieKeys.isViewTags, "true");
    }
}

page.fn.procConfirmSelected = function() {
    if(!confirm(page.message.confirm.allConfirm)) {
        return false;
    }

    let objectCheckList = [];
    $(".object_li > .data-box").each(function(i, o) {
        let checkedObjectMap = {};
        let object = page.data.imgObjectMap.get($(o).attr("data-workTicketId"))[$(o).attr("data-workTicketId") + "_" + $(o).attr("data-taskId") + "_" + $(o).attr("data-objectId")];
        let taskList = [];
        checkedObjectMap.projectId       = page.param.projectId;
        checkedObjectMap.taskId      = object.taskId;
        checkedObjectMap.workTicketId       = object.workTicketId;
        checkedObjectMap.taskIdList  = null;
        if (object.isMatch && object.matchObject != null) {
            checkedObjectMap.detectObjectId = object.objectId;
            checkedObjectMap.objectId = object.matchObject.objectId;
        } else {
            if (object.workType == page.constants.objectWorkType.work) {
                checkedObjectMap.objectId = object.objectId;
                checkedObjectMap.detectObjectId = null;
            } else {
                page.data.taskList.get(($(o).attr("data-workTicketId"))).forEach(function (task) {
                    let classlist = (task.classes).split(',');
                    if (classlist.includes(object.classId)) {
                        taskList.push(JSON.parse(JSON.stringify(task.taskId)));
                    }
                });
                checkedObjectMap.taskIdList      = taskList;
                checkedObjectMap.objectId = null;
                checkedObjectMap.taskId      = null;
                checkedObjectMap.detectObjectId = object.objectId;
            }
        }
        objectCheckList.push(JSON.parse(JSON.stringify(checkedObjectMap)));
    });
    page.fn.showLoading();
    _common.ajax.asyncJSON2({
        url     : "/apis/v1/workspace/classCheck/confirm"
        , param : JSON.stringify({
            objectCheckList  : objectCheckList
            , reqType : page.param.reqType
        })
        , contentType: "application/json"
        , returnFunction : function(r) {
            if(r && r.result) {
                page.fn.reloadImageList();
            } else if(r && r.message == "auth") {
                page.fn.alert(page.message.alert.noHavePermission);
            } else if(r && _common.isNotEmpty(r.message)) {
                page.fn.alert(r.message);
            } else {
                page.fn.alert(page.message.alert.failOfImageOK);
            }
            page.fn.hideLoading();
        }, errorFunction : function() {
            page.fn.alert(page.message.alert.failOfImageOK);
            page.fn.hideLoading();
        }
    });
}

page.fn.procRejectSelected = function() {
    let checked = $("#root input[type='checkbox']:checked");
    if(checked.length == 0) {
        page.fn.alert(page.message.alert.notSelectedImage);
        return false;
    }

    let objectCheckList = [];
    checked.each(function(i, o) {
        let checkedObjectMap = {};
        let object = page.data.imgObjectMap.get($(o).attr("workTicketId"))[$(o).attr("workTicketId") + "_" + $(o).attr("taskId") + "_" + o.value];
        let taskList = [];
        checkedObjectMap.projectId       = page.param.projectId;
        checkedObjectMap.taskId      = object.taskId;
        checkedObjectMap.workTicketId       = object.workTicketId;
        checkedObjectMap.taskIdList  = null;
        if (object.isMatch && object.matchObject != null) {
            checkedObjectMap.detectObjectId = object.objectId;
            checkedObjectMap.objectId = object.matchObject.objectId;
        } else {
            if (object.workType == page.constants.objectWorkType.work) {
                checkedObjectMap.objectId = object.objectId;
                checkedObjectMap.detectObjectId = null;
            } else {

                page.data.taskList.get(($(o).attr("workTicketId"))).forEach(function (task) {
                    let classlist = (task.classes).split(',');
                    if (classlist.includes(object.classId)) {
                        taskList.push(JSON.parse(JSON.stringify(task.taskId)));
                    }
                });
                checkedObjectMap.taskIdList      = taskList;
                checkedObjectMap.objectId = null;
                checkedObjectMap.taskId      = null;
                checkedObjectMap.detectObjectId = object.objectId;
            }
        }
        objectCheckList.push(JSON.parse(JSON.stringify(checkedObjectMap)));
    });
    // return false;
    page.fn.showLoading();
    _common.ajax.asyncJSON2({
        url     : "/apis/v1/workspace/classCheck/reject"
        , param : JSON.stringify({
            objectCheckList  : objectCheckList
        })
        , contentType: "application/json"
        , returnFunction : function(r) {
            if(r && r.result) {
                // page.fn.reloadImageList();
                let pagingCurrentCount = parseInt($("#pagingCurrentCount").text());
                let pagingTotalCount = parseInt($("#pagingTotalCount").text().split(',').join(''));
                objectCheckList.forEach(function(rejectObj) {
                    if (rejectObj.taskId == null && rejectObj.taskIdList != null) {
                        if (page.data.imgObjectMap.get(rejectObj.workTicketId)[rejectObj.workTicketId +  "_detectTask_" + rejectObj.detectObjectId] != null) {
                            delete page.data.imgObjectMap.get(rejectObj.workTicketId)[rejectObj.workTicketId +  "_detectTask_" + rejectObj.detectObjectId];
                            $(".object_li[data-taskId='detectTask'][data-workTicketId='" + rejectObj.workTicketId + "'][data-objectId='"+ rejectObj.detectObjectId +"']").remove();
                            rejectObj.taskIdList.forEach(function (taskId) {
                                for (let objectKey in page.data.imgObjectMap.get(rejectObj.workTicketId)) {
                                    let object = page.data.imgObjectMap.get(rejectObj.workTicketId)[objectKey];
                                    if (object != null) {
                                        if (object.taskId == taskId) {
                                            delete page.data.imgObjectMap.get(rejectObj.workTicketId)[objectKey];
                                            $(".object_li[data-taskId='" + taskId + "'][data-workTicketId='" + rejectObj.workTicketId + "'][data-objectId='"+ object.objectId +"']").remove();
                                            pagingTotalCount -=1;
                                            pagingCurrentCount -=1;
                                        }
                                    }
                                }
                            });
                        }
                    } else {
                        for (let objectKey in page.data.imgObjectMap.get(rejectObj.workTicketId)) {
                            let object = page.data.imgObjectMap.get(rejectObj.workTicketId)[objectKey];
                            if (object != null) {
                                if (object.taskId == rejectObj.taskId) {
                                    $(".object_li[data-taskId='" + rejectObj.taskId + "'][data-workTicketId='" + rejectObj.workTicketId + "'][data-objectId='"+ object.objectId +"']").remove();
                                    if (object.isMatch) {
                                        pagingTotalCount -= 1;
                                    }
                                    pagingTotalCount -=1;
                                    pagingCurrentCount -=1;
                                    delete page.data.imgObjectMap.get(rejectObj.workTicketId)[objectKey];
                                }
                            }
                        }
                    }
                    // detect object만 남은경우 check -> 해당 object도 안보이기
                    let isEmptyReviewObject = true;
                    for (let objectKey in page.data.imgObjectMap.get(rejectObj.workTicketId)) {
                        let object = page.data.imgObjectMap.get(rejectObj.workTicketId)[objectKey];
                        if (object != null) {
                            if (object.taskId != "detectTask") {
                                isEmptyReviewObject = false;
                                break;
                            }
                        }
                    }
                    if (isEmptyReviewObject) {
                        for (let objectKey in page.data.imgObjectMap.get(rejectObj.workTicketId)) {
                            let object = page.data.imgObjectMap.get(rejectObj.workTicketId)[objectKey];
                            if (object != null) {
                                delete page.data.imgObjectMap.get(rejectObj.workTicketId)[objectKey];
                                $(".object_li[data-taskId='detectTask'][data-workTicketId='" + rejectObj.workTicketId + "'][data-objectId='"+ object.objectId +"']").remove();
                            }
                        }
                    }
                });
                $("#pagingCurrentCount").text(pagingCurrentCount);
                $("#pagingTotalCount").text(pagingTotalCount.toLocaleString('en'));
            } else if(r && r.message == "auth") {
                page.fn.alert(page.message.alert.noHavePermission);
            } else if(r && _common.isNotEmpty(r.message)) {
                page.fn.alert(r.message);
            } else {
                page.fn.alert(page.message.alert.failOfImageNG);
            }
            page.fn.hideLoading();
        }, errorFunction : function() {
            page.fn.alert(page.message.alert.failOfImageNG);
            page.fn.hideLoading();
        }
    });
}

let dropList = [];
let CheckboxDropdown = function(el) {
    dropList.push(this);
    let _this = this;
    this.isOpen = false;
    this.areAllChecked = false;
    this.$el = $(el);
    this.$label = this.$el.find('.dropdown-label');
    this.$checkAll = this.$el.find('[data-toggle="check-all"]').first();
    this.$inputs = this.$el.find('[type="checkbox"]');

    this.$label.on('click', function(e) {
        e.preventDefault();
        log.info(e, "$label.click");
        _this.toggleOpen();
    });

    this.$checkAll.on('click', function(e) {
        e.preventDefault();
        log.info(e, "$checkAll.click");
        _this.onCheckAll();
    });

    this.$inputs.on('change', function(e) {
        log.info(e, "$inputs.click");
        _this.onCheckBox();
    });

    this.onCheckBox();
};

CheckboxDropdown.prototype.onCheckBox = function() {
    log.info(this, "CheckboxDropdown.prototype.onCheckBox");
    this.updateStatus();
};

CheckboxDropdown.prototype.updateStatus = function() {
    log.info(this, "CheckboxDropdown.prototype.updateStatus");
    let checked = this.$el.find(':checked');

    this.areAllChecked = false;
    this.$checkAll.html(page.message.dropdown.allSelected);

    if(checked.length <= 0) {
        this.$label.html(page.message.dropdown.allDeSelected);
    }
    else if(checked.length === 1) {
        this.$label.html(checked.siblings('label').text());
    }
    else if(checked.length === this.$inputs.length) {
        this.$label.html(page.message.dropdown.allSelect);
        this.areAllChecked = true;
        this.$checkAll.html(page.message.dropdown.allDeSelect);
    }
    else {
        this.$label.html(checked.length + page.message.dropdown.selected);
    }
};

CheckboxDropdown.prototype.onCheckAll = function(checkAll) {
    log.info(this, "CheckboxDropdown.prototype.onCheckAll");
    if(!this.areAllChecked || checkAll) {
        this.areAllChecked = true;
        this.$checkAll.html('Uncheck All');
        this.$inputs.prop('checked', true);
    }
    else {
        this.areAllChecked = false;
        this.$checkAll.html('Check All');
        this.$inputs.prop('checked', false);
    }

    this.updateStatus();
};

CheckboxDropdown.prototype.toggleOpen = function(forceOpen, event) {
    log.info(event, "CheckboxDropdown.prototype.toggleOpen");
    let _this = this;

    if(!this.isOpen || forceOpen) {
        dropList.forEach(function(drop){
            if(drop.isOpen) {
                drop.isOpen = false;
                drop.$el.removeClass('on');
                $(document).off('click');
            }
        });
        this.isOpen = true;
        this.$el.addClass('on');
        $(document).on('click', function(e) {
            if(!$(e.target).closest('[data-control]').length) {
                _this.toggleOpen();
                $(document).off('click');
            }
        });
    }
    else {
        this.isOpen = false;
        this.$el.removeClass('on');
        $(document).off('click');
    }
};

page.fn.checkSuccessLoadImage = function(image) {
    log.info("src="+image.attr("src"), "page.fn.checkSuccessLoadImage");
    if(image.attr("src") != page.constants.srcErrorImage) {
        page.fn.resizeImage(image, false);
        page.fn.drawImage(image, false);
    }
    image.attr("loaded", "true");
}

page.fn.checkPath = function (event, target) {
    let is = false;
    if (event.path != null) {
        for (let i = 0; i < event.path.length; i++) {
            if (event.path[i] === target) {
                is = true;
                break;
            }
        }
    }
    return is;
}
page.fn.addEvent = function (element, eventName, func, isCapture) {
    isCapture = isCapture == true ? true : false;
    if (window.addEventListener) {
        element.addEventListener(eventName, func, isCapture);
    } else if (window.attachEvent) {
        element.attachEvent("on" + eventName, func);
    } else {
        element["on" + eventName] = func;
    }
}

page.fn.eventMouseDown = function (event) {
    let isRightMB = false;
    event = event || window.event;
    if ("which" in event)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
        isRightMB = event.which == 3;
    else if ("button" in event)  // IE, Opera
        isRightMB = event.button == 2;
    if (!isRightMB) {
        if (page.fn.checkPath(event, page.dom.popImageDetailModalHandle)) {
            event.preventDefault();
            page.data.event.isMovingGuidePopup = true;
            page.data.event.moveImageStartX = event.clientX;
            page.data.event.moveImageStartY = event.clientY;
            page.data.event.moveImageStartTop = page.dom.popImageDetailModal.position().top;
            page.data.event.moveImageStartLeft = page.dom.popImageDetailModal.position().left;
            page.dom.popImageDetailModal.css("opacity", 0.7);
            $(".layer-popUp-wrap").css("z-index", 100);
        }
    }
}
page.fn.eventMouseMove = function (event) {
    event = event || window.event;
    event.stopPropagation();
    if (page.data.event.isMovingGuidePopup) {
        event.preventDefault();
        page.dom.popImageDetailModal.css("left", page.data.event.moveImageStartLeft + (event.clientX - page.data.event.moveImageStartX));
        page.dom.popImageDetailModal.css("top", page.data.event.moveImageStartTop + (event.clientY - page.data.event.moveImageStartY));
    }
}
page.fn.eventMouseUp = function (event) {
    let isRightMB = false;
    event = event || window.event;
    page.data.event.isRemoverMoving = false;
    if ("which" in event)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
        isRightMB = event.which == 3;
    else if ("button" in event)  // IE, Opera
        isRightMB = event.button == 2;
    if (page.data.event.isMovingGuidePopup) {
        page.data.event.isMovingGuidePopup = false;
        page.dom.popImageDetailModal.css("opacity", 1);
    }
}

page.fn.viewBySelectWorkDetect = function (t) {
    let isChecked = $(t).is(":checked");
    let checkedVal = $(t).val();
    let viewType = document.querySelectorAll('[data-viewType = '+ checkedVal + ']');
    if (isChecked) {
        $(viewType).show();
    } else {
        $(viewType).hide();
    }
}

page.fn.showImageDetailModal = function (t) {
    let workTicketId = $(t).attr("data-workTicketId");
    let imgData = page.data.imageDataMap.get(workTicketId);
    let objectId = $(t).attr("data-objectId");
    let matchObjectId = $(t).attr("data-matchobjectnumber");
    page.data.detailObjectId = objectId;
    let img = document.querySelector("img#detailModalImg");
    $(".file-name span").text(imgData.originalFileName);
    $(".object-select input[type='checkbox']").prop("checked", "checked");
    img.src = page.data.imageServerURL + imgData.rawFilePath +"/"+ imgData.rawFileName;
    img.onload = function (evt) {
        log.info(evt, "page.fn.showImageDetailModal");
        let image = $(evt.path[0]);
        image.attr("data-workTicketId", workTicketId);
        page.fn.resizeImage(image, true);
        page.fn.drawImage(image, true);
    }
    page.dom.popImageDetailModal.css("left",($(window).width() - page.dom.popImageDetailModal.width()) / 2);
    page.dom.popImageDetailModal.css("top", ($(window).height() - page.dom.popImageDetailModal.height()) / 2);
    $("#imageDetail-modal").fadeIn();
    let o = $("#svg_detailModal> .draw-object");

}
page.fn.hideImageDetailModal = function () {
    $("#imageDetail-modal").fadeOut();
    page.data.detailObjectId = null;
}
page.fn.sortObjectLi = function (workTicketId) {
    $("#root >li").sort(function (a, b) {
        if (a.dataset.imgnumber == workTicketId && b.dataset.imgnumber == workTicketId) {
            return parseFloat(a.dataset.caseorderseq) - parseFloat(b.dataset.caseorderseq);
        }
    }).appendTo("#root");
}

page.fn.viewByCaseType = function () {
    $(".case-select input[type='checkbox']").each(function (i,o) {
        if ($(o).is(":checked")) {
            $(".object_li."+$(o).val()).show();
        } else {
            if ($(".object_li."+$(o).val()).is(':visible')) {
                $(".object_li."+$(o).val()).hide();
            }
        }
    });
}

page.fn.applyIouFilter = function () {
    if (_common.isEmpty($("#inputIou").val())) {
        alert("1~100까지 입력해주세요");
        return false;
    }
    page.dom.root.empty();
    page.data.imgObjectMap.clear();
    page.data.pagingInfo.objectCardCount =0;
    page.data.objectLoadedCount =0;

    page.data.criterion = $("#inputIou").val();
    for(let workTicketId in page.data.imageDataMap.map) {
        page.fn.setImgObjectMap(page.data.imageDataMap.get(workTicketId));
        page.fn.createObjectCard(workTicketId);
        page.fn.sortObjectLi(workTicketId);
    }
    page.fn.viewByCaseType();
    page.fn.lazyLoad();
    if (page.data.isViewClasses) {
        page.dom.btnToggleClass.addClass("on");
        $(".class-name-area").addClass("on");
    }
    $("#pagingCurrentCount").text(page.data.pagingInfo.objectCardCount);
    page.fn.reCheckImageSelected();
}

page.fn.classCheckAll = function () {
    $("#checkAll").toggleClass('selected');
    if ($("#checkAll").hasClass('selected')) {
        $('.class-select input[type="checkbox"]').prop('checked', true)
        $("#checkAll").text(page.message.button.deSelectAll);
    } else {
        $('.class-select input[type="checkbox"]').prop('checked', false);
        $("#checkAll").text(page.message.button.selectAll);
    }
}
page.fn.changeClassSelectText = function () {
    if ($('.class-select input[type="checkbox"]').length == $('.class-select input[type="checkbox"]:checked').length) {
        $("#checkAll").text(page.message.button.deSelectAll);
        $("#checkAll").addClass('selected');
    }else {
        $("#checkAll").text(page.message.button.selectAll);
        $("#checkAll").removeClass('selected');
    }
}

page.fn.filterValue = function(input) {
    log.info(input.value);
    let i = $(input);
    let val = input.value;
    val = val.replace(/[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\]\{\}\\\|\;\:\'\"\,\<\>\.\/\?]/gi, '');
    let vals = val.split('');
    val = "";
    vals.forEach(function(v){
        val += /[0-9]/.test(v) ? v : "";
        val += /[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\]\{\}\\\|\;\:\'\"\,\<\>\.\/\?]/.test(v) ? v : "";
    });
    if (val > 100) {
        val = 100;
    } else if (val <=0) {
        val ="";
    }
    log.info(val, "filtered value of letter, " + input.value);
    input.value = val;
}
page.fn.setClearDom =  function () {
    page.dom.root.empty();
    page.data.pagingInfo.objectTotalCount = 0;
    page.data.pagingInfo.objectCardCount = 0;
    page.data.configImageSize = 300;

    if (page.data.imgObjectMap) {
        page.data.imgObjectMap.clear();
    }

    $(".view-select input[type=checkbox]").prop("checked", true);
    $(".case-select input[type=checkbox]").each(function (i, o) {
        if (o.value != "normal") {
            $(o).prop("checked", true);
        }
    });
    $("#inputIou").val(80);
    $(".class-select input[type=checkbox]").each(function (i, o) {
        $(o).prop("checked", true);
    });
    $("#checkAll").text(page.message.button.deSelect);
    $("#checkAll").addClass('selected');

    if (page.constants.isCheckedObject) {
        $("#case-select").hide();
        $(".class-select-area").hide();
    } else {
        $("#case-select").show();
        $(".class-select-area").show();
    }

}