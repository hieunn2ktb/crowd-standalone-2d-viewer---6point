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
  , rectangle6p : "rect6p"
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

page.constants.keypoint = {
  visibility: {
    defaultValue: 2
    , values: {
      partial: 3
      , visible: 2
      , invisibility: 1
      , deletePoint: 0
    }, colors: {
      partial: "#ffffff"
      , invisibility: "#7c2424"
      , deletePoint: "#827272"
    }, getNextVisibility: function (current) {
      current = current == null || NaN == parseInt(current) ? page.constants.keypoint.visibility.defaultValue : current;
      current++;
      if (current > page.constants.keypoint.visibility.values.partial) {
        current = page.constants.keypoint.visibility.values.deletePoint;
      }
      return current;
    }
  }
};

page.constants.tagSize = 40;
page.constants.cookieKeys = {
  border        : "imgRV.setting.object.border2"
  , brightness  : "imgRV.setting.object.brightness2"
  , confirmPass : "imgRV.setting.confirmPass"
  , contrast    : "imgRV.setting.object.contrast2"
  , isViewTags  : "imgRV.setting.isViewTags"
  , opacity     : "imgRV.setting.object.opacity2"
  , point       : "imgRV.setting.object.point2"
  , imageServer : "imgRV.setting.imageServer"
};
page.constants.isCheckedObject = false;

page.data = {};
page.data.countLoading = 0;
page.constants.PI = Math.PI;
page.data.classVoList = [];
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
};
page.data.event = {
  isMovingGuidePopup: false
  , moveImageStartX: 0
  , moveImageStartY: 0
  , moveImageStartTop: 0
  , moveImageStartLeft: 0
}

page.message = {};

page.dom = {};
page.fn = {};

page.hotkey = [
  // {
  //   keyCode : "113" //F2
  //   , excuteFunction : function() {
  //     page.fn.toggleViewTag();
  //   }
  // },
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

  let opacity = _common.cookie.get(page.constants.cookieKeys.opacity, page.constants.config.opacity);
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
  page.dom.failReason = $("#failReason");
  page.dom.btnsReview = $(".btnsReview");
  page.dom.btnsReviewPass = $(".btnsReviewPass");
  page.dom.btnToggleTag = $("#btnToggleTag");
  page.dom.btnsReview.hide();

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

  page.fn.setTooltip();

  let isViewTags = _common.cookie.get(page.constants.cookieKeys.isViewTags, "false");
  if(isViewTags == "true") {
    page.fn.toggleViewTag();
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

page.fn.changeObjectPadding = function() {
  $(".object_li").empty();
  page.constants.config.padding = parseInt($("#configPaddingSize").val());
  // $("img[loaded='true']").each(function(i, o) {
  $("img").each(function(i, o){
    let taskImgNumber = $(o).attr("data-taskId") + "_" + $(o).attr("data-workTicketId");

    let imageData = page.data.imageMap.get(taskImgNumber);
    if(_common.isNotEmpty(imageData) && _common.isNotEmpty(imageData.objectList)) {
      if (page.constants.isCheckedObject) {
        imageData.objectList.forEach(function (object) {
          $(".object_li[data-objectId='" + taskImgNumber + "_" + object.objectId + "']").append(
              _common.template.parseObject("tmpl-canvas-object-checked", object));
        });
      } else {
        imageData.objectList.forEach(function (object) {
          $(".object_li[data-objectId='" + taskImgNumber + "_" + object.objectId + "']").append(
              _common.template.parseObject("tmpl-canvas-object", object));
        });
      }
    }
    page.fn.resizeImage($(o));
  });
}

page.fn.changeImageSize = function() {
  page.dom.root
      .removeClass("size_300")
      .removeClass("size_400")
      .removeClass("size_800")
      .removeClass("size_1600")
      .addClass("size_" + $("#configImageSize").val())
  ;

  $(".object_li").empty();

  $("img").each(function(i, o){
    let taskImgNumber = $(o).attr("data-taskId") + "_" + $(o).attr("data-workTicketId");
    let imageData = page.data.imageMap.get(taskImgNumber);
    if(_common.isEmpty(imageData)) {
      log.error("image data is not existst!\ntaskImgNumber="+taskImgNumber, "page.fn.changeImageSize");
    } else if(page.constants.isCheckedObject) {
      imageData.objectList.forEach(function(object) {
        $(".object_li[data-objectId='" + taskImgNumber + "_" + object.objectId + "']").append(
            _common.template.parseObject("tmpl-canvas-object-checked", object));
      });
    } else {
      imageData.objectList.forEach(function(object) {
        $(".object_li[data-objectId='" + taskImgNumber + "_" + object.objectId + "']").append(
            _common.template.parseObject("tmpl-canvas-object", object));
      });
    }
    page.fn.resizeImage($(o));
  });
}
page.fn.resetSearchForm = function() {
  $("input[name='searchClass']").prop("checked", false);
  dropList[0].onCheckBox();
  $("#searchStatus").val("");
  $("#searchClass").val("");
  $("#searchClassTag").val("");
  $("#searchTagInput").val("");
  $("#searchImgCount").val("50");

  page.fn.changeClass(document.getElementById("searchClass"));

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
  if(condition.filterStatus == "") {
    page.constants.isCheckedObject = false;
    $("#pagingArea").css("display", "none");
  }else {
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
  page.dom.root.empty();
  if(page.data.imageMap) {
    page.data.imageMap.clear();
  }
  page.data.imageMap = new HashMap();
  page.data.imageList = [];
  page.data.searchCondition = condition;
  condition.taskId = page.constants.ocTaskNumber;
  $("#selPaging").empty();
  page.fn.viewDetailInfo();
  _common.ajax.asyncJSON2({
    url : "/apis/v1/workspace/objectCheck/list"
    , param : condition
    , returnFunction : function(rev) {
      if(rev.result) {
        log.info(rev.data, "page.fn.search");
        if(_common.isNotEmpty(rev.data.reviewImageList)) {
          let objectListCnt = 0;
          rev.data.reviewImageList.forEach(function(file){
            log.info(file, "page.fn.search, file");
            let status = file.status;
            if(status == "reviewed") {
              status += "_" + file.statusReview;
            }
            let tmplName = "tmpl-image-"+status;
            file.imageServer = page.data.imageServerURL;
            page.dom.root.append(_common.template.parseObject(tmplName, file));
            if(file.objectList != null) {
              if(page.constants.isCheckedObject) {
                file.objectList.forEach(function(object) {
                  page.dom.root.append(_common.template.parseObject("tmpl-object-status-checked", object));
                  objectListCnt++;
                });
              } else {
                file.objectList.forEach(function(object) {
                  page.dom.root.append(_common.template.parseObject("tmpl-object-status", object));
                  objectListCnt++;
                });
              }
            }
            let imageKey = page.fn.getImageKey(file.taskId, file.workTicketId);
            // log.info(imageKey, "imageKey");
            page.data.imageMap.put(imageKey, file);
            page.data.imageList.push(file);
          });
          page.fn.lazyLoad();
          let firstImageObject = rev.data.reviewImageList[0].objectList[0];
          page.fn.viewDetailInfo(firstImageObject.taskId, firstImageObject.workTicketId, firstImageObject.objectId, true);
          $("#pagingCurrentCount").text(objectListCnt);
          $("#pagingTotalCount").text(rev.data.countTotal.toLocaleString('en'));
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
          // log.info(entry, "isIntersecting");
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
  if(img.src.startsWith(page.constants.imageServerURL)) {
    let taskId = $(img).attr("data-taskId");
    let workTicketId = $(img).attr("data-workTicketId");
    img.src = page.constants.srcErrorImage;
    $(img).attr("onerror", "");
    page.data.imageMap.remove(taskId + "_" + workTicketId);
    $(".object_li[data-taskId='" + taskId + "'][data-workTicketId='" + workTicketId + "']").remove();
  } else {
    img.src = page.constants.imageServerURL + $(img).attr("data-src");
  }
}

page.fn.resizeObject = function(object) {
  object.rotateMinXPoint = 0;
  object.rotateMinYPoint = 0;
  let objectLocation = JSON.parse(object.objectLocation);
  let taskImgNumber = object.taskId + "_" + object.workTicketId;
  let image = $("img[data-taskId=" + object.taskId + "][data-workTicketId=" + object.workTicketId + "]");
  let canvas = document.getElementById("canvas_" + taskImgNumber + "_" + object.objectId);
  let x = 0;
  let y = 0;
  let x2 = 0;
  let y2 = 0;
  let isNeedTrigonometric = false;
  if(object.objectType == page.constants.drawType.rectangle) {
    x = Math.min(objectLocation[0][0], objectLocation[1][0]);
    y = Math.min(objectLocation[0][1], objectLocation[1][1]);
    x2 = Math.max(objectLocation[0][0], objectLocation[1][0]);
    y2 = Math.max(objectLocation[0][1], objectLocation[1][1]);
    if(objectLocation.length > 2) {
      isNeedTrigonometric = true;
    }
  } else if(object.objectType == page.constants.drawType.rectangle4p) {
    x = Math.min(objectLocation[0][0], objectLocation[1][0], objectLocation[2][0], objectLocation[3][0]);
    y = Math.min(objectLocation[0][1], objectLocation[1][1], objectLocation[2][1], objectLocation[3][1]);
    x2 = Math.max(objectLocation[0][0], objectLocation[1][0], objectLocation[2][0], objectLocation[3][0]);
    y2 = Math.max(objectLocation[0][1], objectLocation[1][1], objectLocation[2][1], objectLocation[3][1]);
    if(objectLocation.length > 4) {
      isNeedTrigonometric = true;
    }
  } else if(object.objectType == page.constants.drawType.rectangle6p) {
    log.info(objectLocation, "rectangle6p");
    x = objectLocation.bbox.x;
    y = objectLocation.bbox.y;
    x2 = objectLocation.bbox.x + objectLocation.bbox.width;
    y2 = objectLocation.bbox.y + objectLocation.bbox.height;

  } else {
    let pointXList = [];
    let pointYList = [];
    let idx = 0;
    if(object.objectType == page.constants.drawType.keypoint) {
      const constKey = page.keypointMap.get(object.keypointNumber);
      objectLocation.forEach(function(point) {
        if (constKey && constKey.position[idx][7] && constKey.position[idx][7] =='off') {
          idx ++;
          return false;
        }
        let radius = point[4];
        if(point[0] + radius > page.data.imageMap.get(taskImgNumber).naturalWidth) {
          pointXList.push(page.data.imageMap.get(taskImgNumber).naturalWidth);
        }else {
          pointXList.push(point[0] + radius);
        }
        if(point[0] - radius < 0) {
          pointXList.push(0);
        }else {
          pointXList.push(point[0] - radius);
        }

        if(point[1] + radius > page.data.imageMap.get(taskImgNumber).naturalHeight) {
          pointYList.push(page.data.imageMap.get(taskImgNumber).naturalHeight);
        }else {
          pointYList.push(point[1] + radius);
        }
        if(point[1] - radius < 0) {
          pointYList.push(0);
        }else {
          pointYList.push(point[1] - radius);
        }
        idx++;
      });
    } else {
      objectLocation.forEach(function(point) {
        pointXList.push(point[0]);
        pointYList.push(point[1]);
      });
    }

    if(object.objectType == page.constants.drawType.point) {
      x = Math.min(...pointXList) - 10 < 0 ? 0 : Math.min(...pointXList) - 10;
      y = Math.min(...pointYList) - 10 < 0 ? 0 : Math.min(...pointYList) - 10;
      x2 = Math.max(...pointXList) + 10 > page.data.imageMap.get(taskImgNumber).naturalWidth ? page.data.imageMap.get(taskImgNumber).naturalWidth : Math.max(...pointXList) + 10;
      y2 = Math.max(...pointYList) + 10 > page.data.imageMap.get(taskImgNumber).naturalHeight ? page.data.imageMap.get(taskImgNumber).naturalHeight : Math.max(...pointYList) + 10;
    }else {
      x = Math.min(...pointXList);
      y = Math.min(...pointYList);
      x2 = Math.max(...pointXList);
      y2 = Math.max(...pointYList);
    }
    object.rotateMinXPoint = x;
    object.rotateMinYPoint = y;
  }

  if(isNeedTrigonometric) {
    let halfWidth = (x2 - x) / 2;
    let halfHeight = (y2 - y) / 2;
    let hypo = Math.sqrt(halfWidth*halfWidth + halfHeight*halfHeight);
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
    if(new_x >= page.data.imageMap.get(taskImgNumber).naturalWidth) {
      x2 = page.data.imageMap.get(taskImgNumber).naturalWidth;
    }else {
      x2 = new_x;
    }
    // 최소 오브젝트 이미지 넓이 계산
    if(x - xgap > 0) {
      x -= xgap;
    }else {
      xgap = x;
      x = 0;
    }
    object.rotateMinXPoint = xgap;
    let ygap = new_y - y2;
    // 최대 오브젝트 이미지 높이 계산
    if(new_y >= page.data.imageMap.get(taskImgNumber).naturalHeight) {
      y2 = page.data.imageMap.get(taskImgNumber).naturalHeight;
    }else {
      y2 = new_y;
    }
    // 최소 오브젝트 이미지 높이 계산
    if(y - ygap > 0) {
      y -= ygap;
    }else {
      ygap = y;
      y = 0;
    }
    object.rotateMinYPoint = ygap;
  }

  let nw = x2 - x;
  let nh = y2 - y;
  let cw = $(canvas).parent().width() - 4;
  let scale;
  let ctx = canvas.getContext("2d");

  if(nw > nh) {
    canvas.width = cw;
    scale = cw / nw;
    xy = page.fn.checkResizeObjectPadding(object, taskImgNumber, x, y, x2, y2, scale);
    x = xy.x;
    y = xy.y;
    x2 = xy.x2;
    y2 = xy.y2;
    nw = x2 - x;
    nh = y2 - y;
    scale = cw / nw;
    canvas.height = nh*scale;
  }else {
    canvas.height= cw;
    scale = cw / nh;
    xy = page.fn.checkResizeObjectPadding(object, taskImgNumber, x, y, x2, y2, scale);
    x = xy.x;
    y = xy.y;
    x2 = xy.x2;
    y2 = xy.y2;
    nw = x2 - x;
    nh = y2 - y;
    scale = cw / nh;
    canvas.width = nw*scale;
  }
  ctx.drawImage(image[0], x, y, nw, nh, 0, 0, canvas.width, canvas.height);

  $("#svg_" + taskImgNumber + "_" + object.objectId).attr("viewBox", "0 0 " + nw + " " + nh)
      .attr("scale", scale)
      .width(canvas.width)
      .height(canvas.height)
      .css("margin", $(canvas).css("margin"))
      .css("padding", $(canvas).css("padding"));

//		1. image : 이미지/캔버스의 요소등을 생성한 (이미지)객체.
//		2. sx : (그려지는 좌표아님!) 크롭할 영역의 시작 x좌표.
//		3. sy : (그려지는 좌표아님!) 크롭할 영역의 시작 y좌표.
//		4. sWidth : (그려지는 좌표아님!) 크롭할 영역의 넓이.
//		5. sHeight : (그려지는 좌표아님!) 크롭할 영역의 높이.
//		6. dx : 크롭된 이미지가 그려질 영역의 x좌표.
//		7. dy : 크롭된 이미지가 그려질 영역의 y좌표.
//		8. dWidth : 크롭된 이미지의 넓이(확대/축소가 가능합니다). 위의 sWidth와 같으면 1:1 비율.
//		9. dHeight : 크롭된 이미지의 높이(확대/축소가 가능합니다). 위의 sHidth와 같으면 1:1 비율.

  page.fn.drawObject(object);
}

page.fn.checkResizeObjectPadding = function(object, taskImgNumber, x, y, x2, y2, scale) {
  // console.debug(object, taskImgNumber, x, y, x2, y2, scale);
  let re = {};
  re.x = x;
  re.y = y;
  re.x2 = x2;
  re.y2 = y2;
  let padding;
  let img = page.data.imageMap.get(taskImgNumber);
  if(true) {
    padding = page.constants.config.padding;
  }else {
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

  if(x2 + padding <= img.naturalWidth) {
    re.x2 = x2 + padding;
  }else {
    re.x2 = img.naturalWidth;
  }
  if(y - padding >= 0) {
    if(object.objectType == page.constants.drawType.rectangle4p
        || object.objectType == page.constants.drawType.rectangle) {
      object.rotateMinYPoint += padding;
    }else {
      object.rotateMinYPoint -= padding;
    }
    re.y = y - padding;
  }else {
    if(object.objectType == page.constants.drawType.rectangle4p
        || object.objectType == page.constants.drawType.rectangle) {
      object.rotateMinYPoint += y;
    }else {
      object.rotateMinYPoint -= y;
    }
    re.y = 0;
  }
  if(y2 + padding <= img.naturalHeight) {
    re.y2 = y2 + padding;
  }else {
    re.y2 = img.naturalHeight;
  }
  // log.info(re, "page.fn.checkResizeObjectPadding, re");
  return re;
}

page.fn.resizeImage = function(image) {
  try {
    let taskId = image.attr("data-taskId");
    let workTicketId = image.attr("data-workTicketId");
    let taskImgNumber = page.fn.getImageKey(taskId, workTicketId);
    if(_common.isNotEmpty(taskImgNumber)) {
      let img = image.get(0);
      page.data.imageMap.get(taskImgNumber).naturalWidth = img.naturalWidth;
      page.data.imageMap.get(taskImgNumber).naturalHeight = img.naturalHeight;
      let nw = img.naturalWidth, nh = img.naturalHeight;
      let iw = image.width(), ih = image.height();
      let cw = image.parent().width() - 4;
      let scale;
      image.attr("data-naturalWidth", nw).attr("data-naturalHeight", nh);
      if(nw > nh) {
        log.debug("가로기준 width="+nw+", height="+nh, taskImgNumber);
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
        log.debug("세로기준 width="+nw+", height="+nh, taskImgNumber);
        if(cw > ih) {
          image.height(cw);
          iw = image.width();
          ih = image.height();
        }
        scale = ih / nh;
      }

      //set SVG
      $("#svg_"+taskImgNumber).attr("viewBox", "0 0 " + nw + " " + nh)
          .attr("scale", scale)
          .width(iw)
          .height(ih)
          .css("margin", image.css("margin"))
          .css("padding", image.css("padding")); // .get(0).currentScale = scale;
      $("#tagWrap_"+workTicketId).width(iw).height(ih);
      page.fn.showLoading();
      let imageData = page.data.imageMap.get(taskImgNumber);
      if(_common.isNotEmpty(imageData.objectList)) {
        imageData.objectList.forEach(function(object) {
          page.fn.resizeObject(object);
        });
      }
    } else {
      log.warn("This image is not work file.");
    }
    page.fn.hideLoading();
  } catch (Ex) {
    log.error(Ex, "page.fn.onLoadImage");
  }
}

page.fn.drawObject = function(object) {
  if(object.objectType == page.constants.drawType.rectangle) {
    minXY = page.fn.render.rectangleObject(object);
  } else if(object.objectType == page.constants.drawType.polygon) {
    minXY = page.fn.render.polygonObject(object);
  } else if(object.objectType == page.constants.drawType.polyline) {
    minXY = page.fn.render.polylineObject(object);
  } else if(object.objectType == page.constants.drawType.keypoint) {
    minXY = page.fn.render.keypointObject(object);
  } else if (object.objectType == page.constants.drawType.rectangle4p) {
    minXY = page.fn.render.rectangle4pObject(object);
  } else if (object.objectType == page.constants.drawType.pointGroup) {
    minXY = page.fn.render.pointGroupObject(object);
  } else if (object.objectType == page.constants.drawType.point) {
    minXY = page.fn.render.pointGroupObject(object);
  } else if (object.objectType == page.constants.drawType.rectangle6p) {
    minXY = page.fn.render.sideBox(object)
  } else {
    log.error("object.objectType="+object.objectType, "page.fn.drawObject(), undefined objectType.");
    return false;
  }

  // let tagIndex = 0;
  // if(minXY != null && object.tagList != null && object.tagList.length > 0) {
  //   object.tagList.forEach(function(tag){
  //     tag.objectIndex = object.objectOrder;
  //     tag.tagIndex = tagIndex;
  //     page.fn.render.tagObject(tag, 10, 10);
  //     tagIndex++;
  //   });
  // }

  page.fn.setTooltip("[title]");
}

page.fn.drawImage = function(image) {
  let img = image.get(0);
  let taskId = image.attr("data-taskId");
  let workTicketId = image.attr("data-workTicketId");
  let taskImgNumber = taskId + "_" + workTicketId;
  let imageData = page.data.imageMap.get(taskImgNumber);
  // log.info(imageData, "page.fn.drawImage");
  // log.debug(imageData, "page.fn.drawSVG");
  // if(_common.isNotEmpty(imageData.statusInsp)) {
  //   $("#chkReviewImage_"+taskImgNumber).parent().remove();
  // }
  $("#svg_"+taskImgNumber).empty();
  let objTagMap = new HashMap();

  imageData.objGrpMap = new HashMap();
  if(imageData.objGrpList != null) {
    try {
      imageData.objGrpList = JSON.parse(imageData.objGrpList);
      let index = 1;
      imageData.objGrpList.forEach(function(grp){
        imageData.objGrpMap.put(grp.groupId, index++);
      });
    } catch (E) {
      log.error(E, "page.fn.drawImage");
    }
  }
  if(imageData.objectList != null && imageData.objectList.length > 0) {
    imageData.objectList.forEach(function(object){
      // log.info(object, "render-object");
      let minXY = null;
      if(object.objectType == page.constants.drawType.rectangle) {
        minXY = page.fn.render.rectangle(object);
      } else if(object.objectType == page.constants.drawType.polygon) {
        minXY = page.fn.render.polygon(object);
      } else if(object.objectType == page.constants.drawType.polyline) {
        minXY = page.fn.render.polyline(object);
      } else if(object.objectType == page.constants.drawType.keypoint) {
        minXY = page.fn.render.keypoint(object);
      } else if (object.objectType == page.constants.drawType.rectangle4p) {
        minXY = page.fn.render.rectangle4p(object);
      } else if (object.objectType == page.constants.drawType.pointGroup) {
        minXY = page.fn.render.pointGroup(object);
      } else if (object.objectType == page.constants.drawType.point) {
        minXY = page.fn.render.pointGroup(object);
      } else if (object.objectType == page.constants.drawType.rectangle6p) {
        minXY = page.fn.render.sideBox(object)
      } else {
        log.error("object.objectType="+object.objectType, "page.fn.drawImage(), undefined objectType.");
        return false;
      }
      try {
        minXY.y += (page.constants.tagSize / 2);
      } catch (E) {
        log.error(E);
        log.info(object);
      }
      let tagIndex = 0;
      if(minXY != null && object.tagList != null && object.tagList.length > 0) {
        object.tagList.forEach(function(tag){
          tag.objectIndex = object.objectOrder;
          tag.tagIndex = tagIndex;
          page.fn.render.tag(tag, minXY.x, minXY.y);
          tagIndex++;
        });
      }
      if(_common.isNotEmpty(object.groupId)) {
        log.info(object, "init object-group");
        let g = document.createElementNS("http://www.w3.org/2000/svg", 'g');
        let x = minXY.x, y = minXY.y;
        x += tagIndex * (page.constants.tagSize + (page.constants.tagSize/4));
        y -= ((page.constants.tagSize/2) + ((page.constants.tagSize / 4)));
        $("#svg_"+taskImgNumber).append(g);

        let r = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        r.setAttribute("class", "tag");
        r.setAttribute("x", (x - 2));
        r.setAttribute("y", (y - 2));
        r.setAttribute("width", 50);
        r.setAttribute("height", 25);
        r.setAttribute("ry", 3);
        $(g).append(r);

        let i = document.createElementNS("http://www.w3.org/2000/svg", 'image');
        i.setAttribute("href", "/images/tool/icon_qr.png");
        i.setAttribute("height", (page.constants.tagSize/2));
        i.setAttribute("width", (page.constants.tagSize/2));
        i.setAttribute("class", "tag");
        i.setAttribute("x", x);
        i.setAttribute("y", y);
        $(g).append(i);
        let txt = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        $(txt).text("#"+imageData.objGrpMap.get(object.groupId));
        txt.setAttribute("x", x + 22);
        txt.setAttribute("y", (y + 15));
        txt.setAttribute("class", "tag");
        $(g).append(txt);
        $(g).attr("title", " Group #" + imageData.objGrpMap.get(object.groupId) + ", Object #" + object.objectOrder);
        //<image href="/global/images/tool/icon_qr.png" height="200" width="200"></image>
        tagIndex++;
      }
    });

    if(imageData.tagList != null && imageData.tagList.length > 0) {
      let tagIndex = 0;
      imageData.tagList.forEach(function(tag){
        tag.tagIndex = tagIndex;
        log.info(tag, "page.fn.drawImage, tag for image");
        page.fn.render.tagOfImage(tag, imageData.naturalWidth - (page.constants.tagSize * 1.5), page.constants.tagSize * 2);
        tagIndex++;
      });
    }
  }
  page.fn.setTooltip("[title]");
}
page.fn.setTooltip = function(selector) {
  log.debug(selector, "page.fn.setTooltip");
  $(selector).each(function(i, o){
    o = $(o);
    if(!o.hasClass("setTooltip")) {
      o.tooltip({
        boundary: 'window'
        , html:true
        , track: true
        , content : function() {
          let title = "";
          if(_common.isNotEmpty($(this).attr("hotkey"))){
            title = $("<span class='tooltipin title'>"+$(this).attr("title")+"</span><span class='tooltipin hotkey'>"+$(this).attr("hotkey")+"</span>")
          }else{
            title = $("<span class='tooltipin title'>"+$(this).attr("title")+"</span>")

          }
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
page.fn.render = {};
page.fn.render.getTagTitle = function(tag) {
  let title = (tag.objectIndex ? "#" + tag.objectIndex + " " : "") + tag.tagName + " : " + tag.tagValueName;
  // log.info(tag);
  return title;
}
page.fn.render.getTitle = function(object, circle, relationship, skelP) {
  let title = "#"+object.objectOrder;
  title += " " + object.className;
  // log.info(skelP, "page.fn.render.getTitle");
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

  if(object.tagList != null && object.tagList.length > 0) {
    object.tagList.forEach(function(tag){
      title += "<br/>-TAG [ " + tag.tagName + " = " + tag.tagValueName + " ] ";
    });
  }
  return title;
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

page.fn.render.rectangleObject = function(object) {
  log.debug(object, "page.fn.render.rectangle");
  let loc = page.fn.render.castLocation(JSON.parse(object.objectLocation));
  let minXY = null;
  if(loc != null && loc.length >= 2 && loc[0].length == 2) {
    let x = Math.min(loc[0][0], loc[1][0]);
    let y = Math.min(loc[0][1], loc[1][1]);
    let width = Math.max(loc[0][0], loc[1][0]) - x;
    let height = Math.max(loc[0][1], loc[1][1]) - y;
    let o = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    o.setAttribute("class", "draw-object CLASS_" + object.classId);
    o.setAttribute("x", object.rotateMinXPoint);
    o.setAttribute("y", object.rotateMinYPoint);
    o.setAttribute("width", width);
    o.setAttribute("height", height);
    o.setAttribute("title", page.fn.render.getTitle(object));
    o.setAttribute("data-taskId", object.taskId);
    o.setAttribute("data-workTicketId", object.workTicketId);
    o.setAttribute("data-objectId", object.objectId);
    $("#svg_"+ object.taskId + "_" + object.workTicketId + "_" + object.objectId).append(o);
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
  return minXY;
}

page.fn.render.rectangle = function(object) {
  log.debug(object, "page.fn.render.rectangle");
  let loc = page.fn.render.castLocation(JSON.parse(object.objectLocation));
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
    o.setAttribute("title", page.fn.render.getTitle(object));
    o.setAttribute("data-taskId", object.taskId);
    o.setAttribute("data-workTicketId", object.workTicketId);
    o.setAttribute("data-objectId", object.objectId);
    $("#svg_"+ object.taskId + "_" + object.workTicketId).append(o);
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

// page.fn.render.tagObject = function(tag, x, y) {
//   let o = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
//   page.constants.tagSize = 20;
//   x += tag.tagIndex * (page.constants.tagSize + (page.constants.tagSize/4));
//   let topMargin = (page.constants.tagSize / 2);
//   y -= (page.constants.tagSize + topMargin + 5);
//   let points = x + ","+ (y + topMargin) + " "
//       + x + "," + (y + page.constants.tagSize + topMargin) + " "
//       + (x + page.constants.tagSize) + "," + (y + page.constants.tagSize + topMargin) + " "
//       + (x + page.constants.tagSize) + "," + (y + topMargin) + " "
//       + (x + (page.constants.tagSize / 2)) + "," + y + " "
//   ;
//   let color = page.fn.getTagValueColor(tag);
//   if(_common.isEmpty(color)) {
//     $(o).css("fill", tag.color);
//   } else {
//     $(o).css("fill", color);
//   }
//
//   o.setAttribute("points", points);
//   o.setAttribute("title", page.fn.render.getTagTitle(tag));
//   $(o).addClass("tag");
//   $("#svg_"+tag.objectId).append(o);
//   page.constants.tagSize = 40;
// }
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
  $("#svg_"+tag.taskId + "_" + tag.workTicketId).append(o);
}

page.fn.render.polygonObject = function(object) {
  let loc = page.fn.render.castLocation(JSON.parse(object.objectLocation));
  let copyLoc = JSON.parse(JSON.stringify(loc));
  copyLoc.forEach(function(cl) {
    cl[0] = cl[0] - object.rotateMinXPoint;
    cl[1] = cl[1] - object.rotateMinYPoint;
  });
  let minXY = null;
  if(loc != null && loc.length > 0) {
    log.debug(object, "page.fn.render.polygon");
    let o = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
    o.setAttribute("class", "draw-object CLASS_" + object.classId);
    o.setAttribute("fill-rule", "evenodd");
    o.setAttribute("points", copyLoc);
    o.setAttribute("title", page.fn.render.getTitle(object));
    o.setAttribute("data-taskId", object.taskId);
    o.setAttribute("data-workTicketId", object.workTicketId);
    o.setAttribute("data-objectId", object.objectId);
    $("#svg_" + object.taskId + "_" + object.workTicketId + "_" + object.objectId).append(o);
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

page.fn.render.polygon = function(object) {
  let loc = page.fn.render.castLocation(JSON.parse(object.objectLocation));
  let minXY = null;
  if(loc != null && loc.length > 0) {
    log.debug(object, "page.fn.render.polygon");
    let o = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
    o.setAttribute("class", "draw-object CLASS_" + object.classId);
    o.setAttribute("fill-rule", "evenodd");
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
    o.setAttribute("title", page.fn.render.getTitle(object));'' +
    o.setAttribute("data-taskId", object.taskId);
    o.setAttribute("data-workTicketId", object.workTicketId);
    o.setAttribute("data-objectId", object.objectId);
    $("#svg_" + object.taskId + "_" + object.workTicketId + "_" + object.objectId).append(o);
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
  // let keypoint = page.fn.getKeyPoint(taskId);
  let keypoint = page.keypointMap.get(object.keypointNumber);
  if (keypoint == null) {
   keypoint = page.fn.getKeyPoint(taskId);
  }
  if(_common.isNotEmpty(keypoint)){
    try {
      if (keypoint.position != "") {
        let loc = JSON.parse(object.objectLocation);
        log.info(object, "page.fn.render.keypoint");
        log.info(loc, "page.fn.render.keypoint");
        if (loc != null && loc.length > 0) {
          let m = new HashMap();
          let m2 = new HashMap();
          let pidx = 0;
          loc.forEach(function (point) {
            if (_common.isNotEmpty(keypoint.position[pidx][7]) &&
                keypoint.position[pidx][7] == 'off') {
              pidx++;
              return false;
            }
            m.put(point[2], point);
            pidx++;
          });
          if (_common.isNotEmpty(keypoint.roi)) {
            let roiXList = [];
            let roiYList = [];
            keypoint.roi.forEach(function (i) {
              i = parseInt(i);
              if (m.get(i) != null) {
                let point = m.get(i);
                roiXList.push(parseInt(point[0]) - object.rotateMinXPoint);
                roiYList.push(parseInt(point[1]) - object.rotateMinYPoint);
              }
            })
            let roiRect = page.fn.renderKeypointRoi(roiXList, roiYList);
            let r = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
            r.setAttribute("x", roiRect.x);
            r.setAttribute("y", roiRect.y);
            r.setAttribute("width", roiRect.width);
            r.setAttribute("height", roiRect.height);
            r.setAttribute("objectid", object.objectId);
            r.setAttribute("class", "draw-object object-body keypoint roi CLASS_" + object.classId);
            $("#svg_" + object.taskId + "_" + object.workTicketId + "_" + object.objectId).append(r);
          }
          (keypoint.position).forEach(function (point) {
            m2.put(point[2], point);
          });
          (keypoint.relationship).forEach(function (rel) {
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
              $("#svg_" + object.taskId + "_" + object.workTicketId + "_" + object.objectId).append(o);
            }
          });

          minXY = {
            x: 1000000000
            , y: 100000000
          };
          let idx = 0;
          loc.forEach(function (c) {
            if (_common.isNotEmpty(keypoint.position[idx][7]) &&
                keypoint.position[idx][7] == 'off') {
              idx++;
              return false;
            }
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
            $("#svg_" + object.taskId + "_" + object.workTicketId + "_" + object.objectId).append(o);
            page.fn.drawKeypoint({
              x: c[0] - object.rotateMinXPoint
              , y: c[1] - object.rotateMinYPoint
              , objectId: object.objectId
              , index: idx
              , position: c[2]
              , classId: object.classId
              , visibility: c[3]
              , workTicketId: object.workTicketId
              , taskId: object.taskId
              // , name: page.data.task.constKeypoint.position[idx][4]
              , viewIndex: (idx + 1)
              , objectOrder: object.objectOrder
            });
            idx++;
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
    }catch (E) {
      log.error(E);
      log.warn(keypoint);
    }
  }
  return minXY;
}

page.fn.render.keypoint = function(object) {
  let minXY = {
    x : 1000000000
    , y : 100000000
  };
  let taskId = object.taskId;
  // let keypoint = page.fn.getKeyPoint(taskId);
  let keypoint = page.keypointMap.get(object.keypointNumber);
  if (keypoint == null) {
    keypoint = page.fn.getKeyPoint(taskId);
  }
  if(_common.isNotEmpty(keypoint)) {
    if(_common.isNotEmpty(keypoint.position)) {
      let loc = JSON.parse(object.objectLocation);
      log.info(object, "page.fn.render.keypoint, object");
      log.info(loc, "page.fn.render.keypoint, loc");
      log.info(keypoint, "page.fn.render.keypoint, keypoint");
      if (_common.isNotEmpty(loc)) {
        let m = new HashMap();
        let m2 = new HashMap();
        loc.forEach(function (point) {
          m.put(point[2], point);
        });
        (keypoint.position).forEach(function (point) {
          m2.put(point[2], point);
        });
        (keypoint.relationship).forEach(function(rel){
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
        if (_common.isNotEmpty(keypoint.roi)) {
          try {
            let roi = [];
            let roiXList = [];
            let roiYList = [];
            keypoint.roi.forEach(function (i) {
              i = parseInt(i);
              if (m.get(i) != null) {
                let point = m.get(i);
                roi.push([point[0], point[1]]);
                roiXList.push(point[0]);
                roiYList.push(point[1]);
              }
            })
            let roiRect = page.fn.renderKeypointRoi(roiXList, roiYList);
            let r = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
            r.setAttribute("x", roiRect.x);
            r.setAttribute("y", roiRect.y);
            r.setAttribute("width", roiRect.width);
            r.setAttribute("height", roiRect.height);
            r.setAttribute("objectid", object.objectId);
            r.setAttribute("class", "draw-object object-body keypoint roi CLASS_" + object.classId);
            $("#svg_" + object.taskId + "_" + object.workTicketId).append(r);
          } catch(E) {
            log.error(E);
            log.info(keypoint);
          }
        }
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
page.fn.renderKeypointRoi = function (roiXList, roiYList) {
  let objectBox = {
    x: 0, y: 0, width: 0, height: 0
  };
  let minX =Math.min(...roiXList);
  let minY =Math.min(...roiYList);
  let maxX =Math.max(...roiXList);
  let maxY =Math.max(...roiYList);
  let x = minX;
  let y = minY;
  let width = maxX - minX;
  let height = maxY - minY;
  objectBox.x = x;
  objectBox.y = y;
  objectBox.width = width;
  objectBox.height = height;

  return objectBox;
}
page.fn.drawKeypoint = function (point) {
  try {
    let id = "C_" + point.objectId + "_" + point.index;
    let c = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    point.visibility = parseInt(point.visibility);
    if (point.visibility == page.constants.keypoint.visibility.values.invisibility) {
      c.setAttribute("class", "draw-object keypoint object-body invisibility CLASS_" + point.classId);
    } else if (point.visibility == page.constants.keypoint.visibility.values.deletePoint) {
      c.setAttribute("class", "draw-object keypoint object-body deletePoint CLASS_" + point.classId);
    } else if (point.visibility == page.constants.keypoint.visibility.values.partial) {
      c.setAttribute("class", "draw-object keypoint object-body partial CLASS_" + point.classId);
    } else {
      c.setAttribute("class", "draw-object keypoint object-body CLASS_" + point.classId);
    }
    //log.debug(point);
    c.setAttribute("cx", point.x);
    c.setAttribute("cy", point.y);
    c.setAttribute("id", id);
    c.setAttribute("index", point.index);
    c.setAttribute("visibility", point.visibility);
    c.setAttribute("objectId", point.objectId);
    $("#svg_" + point.taskId + "_" + point.workTicketId + "_" + point.objectId).append(c);
    // let constP = page.data.task.constKeypoint.posMap.get(point.position);
    // if (constP != null) {
    //   if (constP.length >= 7) {
    //     let color = constP[6];
    //     color = color.startsWith("#") ? color : "#" + color;
    //     $(c).css("stroke", color);
    //   }
      // c.setAttribute("title", "#" + point.objectOrder + " *" + (constP[2]) + (_common.isNotEmpty(point.name) ? " (" + point.name + ")" : ""));
      // c.setAttribute("pointNum", constP[2]);
    // }
  } catch (E) {
    log.error(E, "page.fn.drawKeypoint");
    log.info(point, "page.fn.drawKeypoint");
  }
}
/**
 * Rectangle, 점4개 사각형을 캔버스 영역에 추가
 * @param object
 */

page.fn.render.rectangle4pObject = function (object) {
  // log.info(object, "page.fn.render.rectangle4p");
  let minXY = {
    x:0, y:0
  };
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
    let o = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
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
    // o.setAttribute("title", "#" + object.objectOrder);
    $("#svg_" + object.taskId + "_" + object.workTicketId + "_" + object.objectId).append(o);
    if(loc.length > 4) {
      $(o).css("transform", "rotate("+loc[4][0]+"deg)");
    }
  } catch (E) {
    log.debug(E, "page.fn.render.rectangle4p");
  }
  return minXY;
}

page.fn.render.rectangle4p = function (object) {
  // log.info(object, "page.fn.render.rectangle4p");
  let minXY = {
    x:0, y:0
  };
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
    let o = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    o.setAttribute("x", x);
    o.setAttribute("y", y);
    o.setAttribute("width", width);
    o.setAttribute("height", height);
    o.setAttribute("class", "draw-object object-body CLASS_" + object.classId);
    o.setAttribute("id", object.objectId);
    o.setAttribute("objectId", object.objectId);
    o.setAttribute("title", page.fn.render.getTitle(object));
    o.setAttribute("data-taskId", object.taskId);
    o.setAttribute("data-workTicketId", object.workTicketId);
    o.setAttribute("data-objectId", object.objectId);
    // o.setAttribute("title", "#" + object.objectOrder);
    $("#svg_"+object.taskId + "_" + object.workTicketId).append(o);
    if(loc.length > 4) {
      $(o).css("transform", "rotate("+loc[4][0]+"deg)");
    }
  } catch (E) {
    log.debug(E, "page.fn.render.rectangle4p");
  }
  return minXY;
}

page.fn.render.pointGroupObject = function(object) {
  // log.info(object, "page.fn.render.pointGroup");
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
  // log.info(object, "page.fn.render.pointGroup");
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
  let taskImgObjectNumber = taskId + "_" + workTicketId + "_" + objectId;
  $("#root div.data-box div.icoViewed").remove();
  if(!isFirst) {
    $("#chkReviewImage_" + taskImgObjectNumber).prop("checked", $("#chkReviewImage_" + taskImgObjectNumber).is(":checked") ? false : true);
    $("#root div.data-box[data-taskId='" + taskId + "'][data-workTicketId='" + workTicketId + "'][data-objectId='" + objectId + "']").toggleClass("on");
  }
  page.fn.reCheckImageSelected();
  $("#root div.data-box[data-taskId='" + taskId + "'][data-workTicketId='" + workTicketId + "'][data-objectId='" + objectId + "']").append(_common.template.parseObject("tmpl-hightlightImage"));
}

page.fn.clickImage = function() {
  page.fn.reCheckImageSelected();
}

page.fn.reloadImageList = function() {
  page.fn.search(page.data.searchCondition);
}

page.fn.togoAnnotationTool = function() {
  sessionStorage.reviewSearch = JSON.stringify(page.data.searchCondition);
  let reqType = "modifyReview";
  if("review/reviewer".includes(page.data.param.reqType)) {
    reqType = "modifyReview";
  } else if("manager/insp".includes(page.data.param.reqType)) {
    reqType = "modifyInsp";
  }else if("master".includes(page.data.param.reqType)) {
    reqType = "master";
  }
  let url = "/work/imageExpert?reqType=" + reqType
      + "&projectId=" + page.data.param.projectId
      + "&taskId=" + page.data.param.taskId
      + "&workTicketId=" + page.data.lastSelectedImageNumber
  ;
  window.open(url,'reviewAnnotation');
}

page.fn.getKeyPoint = function(taskId) {
  let keypoint = null;
  let keypointNumber = page.keypointList.get(taskId);
  keypoint = page.keypointMap.get(keypointNumber);
  // if(page.keypointList.length != 0 && taskId != null) {
  //   for(let i = 0; i < page.keypointList.length; i++) {
  //     if(taskId == page.keypointList[i].taskId) {
  //       keypoint = page.keypointList[i];
  //       break;
  //     }
  //   }
  // }
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
page.fn.changeServer = function(server) {
  // for(let i = 0; i < page.constants.imageServer.length; i++) {
  //   if(server == page.constants.imageServer[i].name) {
  //     page.data.imageServerURL = page.constants.imageServer[i].url;
  //   }
  // }
  // $(".btnFlag").removeClass("on");
  // $("#btnServer_" + server).addClass("on");
  // _common.cookie.set(page.constants.cookieKeys.imageServer, server);
}

page.fn.procConfirmSelected = function() {
  if(page.data.imageMap.getAllDataToList().length == 0) {
    return false;
  }
  if(!confirm(page.message.confirm.allConfirm)) {
    return false;
  }

  let objectCheckList = [];
  $(".object_li > .data-box").each(function(i, o) {
    let objectMap = {};
    objectMap.projectId       = page.param.projectId;
    objectMap.taskId      = $(o).attr("data-taskId");
    objectMap.workTicketId       = $(o).attr("data-workTicketId");
    objectMap.objectId = $(o).attr("data-objectId");
    objectCheckList.push(JSON.parse(JSON.stringify(objectMap)));
  });
  page.fn.showLoading();
  _common.ajax.asyncJSON2({
    url     : "/apis/v1/workspace/objectCheck/procConfirmObject"
    , param : JSON.stringify({
      objectCheckList  : objectCheckList
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
    let objectMap = {};
    objectMap.projectId       = page.param.projectId;
    objectMap.taskId      = $(o).attr("taskId");
    objectMap.workTicketId       = $(o).attr("workTicketId");
    objectMap.objectId = o.value;
    objectCheckList.push(JSON.parse(JSON.stringify(objectMap)));
  });
  page.fn.showLoading();
  _common.ajax.asyncJSON2({
    url     : "/apis/v1/workspace/objectCheck/procRejectObject"
    , param : JSON.stringify({
      objectCheckList  : objectCheckList
    })
    , contentType: "application/json"
    , returnFunction : function(r) {
      if(r && r.result) {
        // page.fn.reloadImageList();
        objectCheckList.forEach(function(obj) {
          if(page.data.imageMap.get(obj.taskId + "_" + obj.workTicketId) != null) {
            page.data.imageMap.remove(obj.taskId + "_" + obj.workTicketId);
            $("#liImageRoot_" + obj.taskId + "_" + obj.workTicketId).remove();
          }
          let minusCount = $(".object_li[data-taskId='" + obj.taskId + "'][data-workTicketId='" + obj.workTicketId + "']").length
          let pagingCurrentCount = parseInt($("#pagingCurrentCount").text()) - minusCount;
          let pagingTotalCount = parseInt($("#pagingTotalCount").text().split(',').join('')) - minusCount;
          $("#pagingCurrentCount").text(pagingCurrentCount)
          $("#pagingTotalCount").text(pagingTotalCount.toLocaleString('en'))
          $(".object_li[data-taskId='" + obj.taskId + "'][data-workTicketId='" + obj.workTicketId + "']").remove();
        })
        if(page.data.imageMap.getAllDataToList().length != 0) {
          let firstObject = page.data.imageMap.getAllDataToList()[0].objectList[0];
          page.fn.viewDetailInfo(firstObject.taskId, firstObject.workTicketId, firstObject.objectId, true);
          $(".object_li[data-objectId='" + firstObject.taskId + "_" + firstObject.workTicketId + "_" + firstObject.objectId + "']")[0].scrollIntoView();
        } else {
          page.fn.reCheckImageSelected();
        }
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

page.fn.getErrorCodeList = function(type) {
  let errorCodeList = [];
  let id;
  if(type == "single") {
    id = "#rootErrorCodeList";
  } else {
    id = "#modal-ng"
  }
  $(id + " input[type='checkbox']:checked").each(function(i, o){
    errorCodeList.push(o.value);
  });
  return errorCodeList;
}

page.fn.viewInspectionDetail = function() {
  $("#detailInspection").show();
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
  // log.info(this, "CheckboxDropdown.prototype.onCheckBox");
  this.updateStatus();
};

CheckboxDropdown.prototype.updateStatus = function() {
  // log.info(this, "CheckboxDropdown.prototype.updateStatus");
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
  // log.info(this, "CheckboxDropdown.prototype.onCheckAll");
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
  // log.info(event, "CheckboxDropdown.prototype.toggleOpen");
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
  // log.info("src="+image.attr("src"), "page.fn.checkSuccessLoadImage");
  if(image.attr("src") != page.constants.srcErrorImage) {
    page.fn.resizeImage(image);
    page.fn.drawImage(image);
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
    if (page.fn.checkPath(event, page.dom.popGuideHandle)) {
      event.preventDefault();
      page.data.event.isMovingGuidePopup = true;
      page.data.event.moveImageStartX = event.clientX;
      page.data.event.moveImageStartY = event.clientY;
      page.data.event.moveImageStartTop = page.dom.popGuide.position().top;
      page.data.event.moveImageStartLeft = page.dom.popGuide.position().left;
      page.dom.popGuide.css("opacity", 0.7);
      $(".layer-popUp-wrap").css("z-index", 100);
    }
  }
}
page.fn.eventMouseMove = function (event) {
  event = event || window.event;
  event.stopPropagation();
  if (page.data.event.isMovingGuidePopup) {
    event.preventDefault();
    page.dom.popGuide.css("left", page.data.event.moveImageStartLeft + (event.clientX - page.data.event.moveImageStartX));
    page.dom.popGuide.css("top", page.data.event.moveImageStartTop + (event.clientY - page.data.event.moveImageStartY));
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
    page.dom.popGuide.css("opacity", 1);
  }
}

page.fn.getImageKey = function(taskId, workTicketId) {
  if(_common.isNotEmpty(taskId) && _common.isNotEmpty(workTicketId)) {
    return taskId + "_" + workTicketId;
  } else {
    return null;
  }
}

page.fn.unConvertObjectLocation = function(object) {
  //log.info(object, "page.fn.unConvertObjectLocation");
  let objData = JSON.parse(object.objectLocation);
  object.location = objData.points;
  object.imgObjectData = objData;
}
page.fn.render.sideBox = function(object) {
  page.fn.unConvertObjectLocation(object);
  let groupId = object.taskId + "_" + object.workTicketId;
  let g = $("#"+groupId);
  if(g.length == 0) {
    g = document.createElementNS("http://www.w3.org/2000/svg", 'g');
    g.setAttribute("title", page.fn.render.getTitle(object));
    $(g).attr("id", groupId);
    $(g).attr("objectId", object.objectId);
    $("#svg_"+object.taskId + "_" + object.workTicketId).append(g);
    $("#svg_"+object.taskId + "_" + object.workTicketId + "_" + object.objectId).append(g);
    g = $(g);
  } else {
    g.empty();
  }
  log.info(object, "page.fn.renderSideBox, object");
  // log.info(g, "page.fn.renderSideBox, g");
  if(object.location.length > 1) {
    let loc = JSON.parse(object.objectLocation);

    let max = Math.min(object.location.length, 4);
    let path = "";
    //log.info(max, "page.fn.renderSideBox, max");
    let x = loc.bbox.x - page.constants.config.padding, y = loc.bbox.y - page.constants.config.padding;
    for (let i = 1; i < max; i++) {
      try {
        if (path != "") {
          path += " ";
        }
        let p1 = object.location[i - 1];
        let p2 = object.location[i];
        path += (p1[0] - x) + "," + (p1[1] - y) + " " + (p2[0] - x) + "," + (p2[1] - y);
      } catch (E) {
        log.error(i, "page.fn.renderSideBox, make path");
      }
    }
    //log.info(path, "page.fn.renderSideBox, made path");
    if(object.location.length >= 4) {
      path += " ";
      path += object.location[0][0] - x;
      path += ",";
      path += object.location[0][1] - y;
    }
    //log.info(path, "page.fn.renderSideBox, path");
    let o = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
    o.setAttribute("class", "draw-object object-body CLASS_" + object.classId);
    o.setAttribute("points", path);
    o.setAttribute("objectId", object.objectId);

    g.append(o);


    if (object.location.length == 5) {
      let p5 = object.location[4];
      let cp = null;
      let dist = 99999;
      for(let i = 0; i < 4; i++) {
        let p = object.location[i];
        let distX = Math.abs(p[0] - p5[0]);
        let distY = Math.abs(p[1] - p5[1]);
        if(dist > distX + distY) {
          dist = distX + distY;
          cp = p;
        }
      }
      let o = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
      o.setAttribute("class", "draw-object object-body CLASS_" + object.classId);
      o.setAttribute("points", (cp[0] - x)+","+(cp[1] - y)+" "+(p5[0] - x)+","+(p5[1] - y));
      o.setAttribute("objectId", object.objectId);
      g.append(o);
    } else if (object.location.length == 6) {
      let p5 = object.location[4];
      let p6 = object.location[5];
      let cp1 = null;
      let cp2 = null;
      let dist5 = 99999;
      let dist6 = 99999;
      let cp1Idx = -1;
      for(let i = 0; i < 4; i++) {
        let p = object.location[i];
        let distX = Math.abs(p[0] - p5[0]);
        let distY = Math.abs(p[1] - p5[1]);
        if(dist5 > distX + distY) {
          dist5 = distX + distY;
          cp1 = p;
          cp1Idx = i;
        }
      }
      let avaliablePoint6 = [];
      if(cp1Idx == 0) {
        avaliablePoint6 = [1, 3];
      } else if (cp1Idx == 1) {
        avaliablePoint6 = [0, 2];
      } else if (cp1Idx == 2) {
        avaliablePoint6 = [1, 3];
      } else if (cp1Idx == 3) {
        avaliablePoint6 = [2, 0];
      }
      for(let i = 0; i < 4; i++) {
        if(avaliablePoint6.includes(i)) {
          let p = object.location[i];
          let distX = Math.abs(p[0] - p6[0]);
          let distY = Math.abs(p[1] - p6[1]);
          if (dist6 > distX + distY) {
            dist6 = distX + distY;
            cp2 = p;
          }
        }
      }
      path = (cp1[0] - x)+","+(cp1[1] - y)+" "+(p5[0] - x)+","+(p5[1] - y);
      path += " " + (p6[0] - x)+","+(p6[1] - y)+" "+(cp2[0] - x)+","+(cp2[1] - y);

      let o = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
      o.setAttribute("class", "draw-object object-body CLASS_" + object.classId);
      o.setAttribute("points", path);
      o.setAttribute("objectId", object.objectId);
      g.append(o);
      object.imgObjectData.pointType = "6p";
    } else if (object.location.length == 4) {
      object.imgObjectData.pointType = "4p";
    }
  }
  let objectBox = {
    x: 99999, y: 99999, width: 0, height: 0
  };
  let xx = 0, yy = 0;
  for(let i = 0; i < object.location.length; i++) {
    let p = object.location[i];
    objectBox.x = Math.min(p[0], objectBox.x);
    objectBox.y = Math.min(p[1], objectBox.y);
    xx = Math.max(p[0], xx);
    yy = Math.max(p[1], yy);
  }
  objectBox.width = Math.max(xx - objectBox.x, 1);
  objectBox.height = Math.max(yy - objectBox.y, 1);
  object.imgObjectData.bbox = objectBox;

  try {
    object.objectLocation = JSON.stringify(object.imgObjectData);
  } catch (E) {
    log.error(object);
  }
  return objectBox;
}