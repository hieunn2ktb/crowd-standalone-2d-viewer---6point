let page = {};
page.param = {};

page.constants = {};
page.constants.tagMappings = {
  truncation: {
    "1": "Trun_lower_body",
    "2": "1-49%",
    "3": "50-99%"
  },
  occlusion: {
    "1": "occ_lower_body",
    "2": "1-49%",
    "3": "50-99%"
  }
};
page.constants.permission = {};
page.constants.permission.worker = "worker";
page.constants.permission.reviewer = "reviewer";
page.constants.permission.inspector = "inspector";
page.constants.permission.manager = "manager";
page.constants.permission.master = "master";
page.constants.permission.co = "client";
page.constants.drawType = {
  rectangle 	: "rect"
  , polygon 	: "polygon"
  , polyline 	: "polyline"
  , keypoint 	: "keypoint"
  , point       : "point"
  , rectangle4p : "rect4p"
  , pointGroup  : "points"
  , sideBox     : "rect6p"
  , edgePoints  : "edgePoints"
  , edgeLines : "edgeLines"
  , draw6PointCube: "draw6PointCube"
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
    max: 15, min: 0, interval: 0.25, default: 5
  }, point : {
    max: 15, min: 0, interval: 0.25, default: 10
  }, opacity_step : [0, 50, 100]
  , keypointLineStyle : "dash"
}
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
  , pointColorStart  : "imgRV.setting.pointColorStart"
  , pointColor  : "imgRV.setting.pointColor"
  , pointColorEnd  : "imgRV.setting.pointColorEnd"
  , opacity_step  : ["imgRV.setting.opacity_step_0", "imgRV.setting.opacity_step_1", "imgRV.setting.opacity_step_2"]
  , zoomerRatio : "imgRV.setting.zoomerRatio"
  , tagSize     : "imgRV.setting.tagSize"
  , opacityType : "imgRV.setting.opacityType"
  , keypointLineStyle: "imgRV.setting.keypointLineStyle"
  , imageServerUrl: "imgExp.setting.imageServerUrl"
};

page.constants.validationStatus = {
  waiting : "00"
  , done : "10"
  , executing : "20"
  , failed : "99"
};

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
  }, hiddenValues : [0, 3]
};
page.constants.tag = {
  tagTypeCd: {
    image: "IMG"
    , object: "OBJ"
    , point : "PNT"
  }, tagValTypeCd: {
    select: "30"
    , input: "20"
  }
};
page.constants.hotkeyType = {
  defaultKey: "default"
  , tagForImage: "tagForImage"
  , classesForImage: "classesForImage"
  , tagForObject: "tagForObject"
  , tagForPoint: "tagForPoint"
  , classesForObject: "classesForObject"
};

page.constants.toggleAllObjectView = {};
page.constants.toggleAllObjectView.show = "visibility";
page.constants.toggleAllObjectView.hide = "visibility_off";

page.data = {};
page.data.lastSelectedImageNumber = "";
page.data.lastSelectedImageIndex = 0;
page.data.countLoading = 0;
page.data.classVoList = [];
page.data.rejectReason =[];
page.data.inspNGReason =[];
page.data.historyType = 'work';
page.data.localforageKey = null;
page.data.localforageValue = null;
page.data.task = {};
page.data.config = {
  opacity: 50
  , border: 5
  , point : 10
  , brightness : 100
  , contrast : 100
  , viewPolylinePont : "off"
  , view4pBoxPoint : "off"
};
let objBoxSizeJson = {}
let objBoxSizeJsonFront = {}
page.data.config.color = {};
page.data.config.color.circleStart = "#3651ff";
page.data.config.color.circle = "#ecff3d";
page.data.config.color.circleEnd = "#fc3c3c";

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
page.data.currentImage = {}
page.keypoint = {};

page.message = {};

page.dom = {};
page.fn = {};
page.data.validatorList= null;
page.history = new HashMap();

page.fn.init = function() {
  log.info("start", "page.fn.init");
  customTag.init();

  $(window).on("keydown", function(event){
    log.info(_common.getKeyboard(event), "keydown");
    for(let i = 0; i < page.hotkey.length; i++) {
      if(page.hotkey[i].keyName == _common.getKeyboard(event).keyName
          && page.hotkey[i].type == page.constants.hotkeyType.defaultKey) {
        event.preventDefault();
        page.hotkey[i].excuteFunction();
        break;
      }
    }
  });

  $('[data-control="checkbox-dropdown"]').each(function(i, o){
    new CheckboxDropdown(o);
  });

  $('.searchOpen').on('click', function(event){
    let $this = $(this);
    if( $this.hasClass('on') != true ){
      $('.searcItems').stop(true, true).slideDown(200,'easeInOutExpo');
      $('.searcItems').addClass('on');
      $this.addClass('on');
    }else {
      $('.searcItems').stop(true, true).slideUp(200,'easeInOutExpo');
      $('.searcItems').removeClass('on');
      $this.removeClass('on');
    }
  });

  $('.multi-search-area button').on({
    click:function() {
      $(this).blur();
      $(this).toggleClass('on');
      $('.multi-search textarea').toggleClass('on');
    }
  });

  let opacity = _common.cookie.get(page.constants.cookieKeys.opacity, page.constants.config.opacity);
  if(isNaN(opacity)) {
    opacity = 50;
  }
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
  let border = _common.cookie.get(page.constants.cookieKeys.border, page.constants.config.border.default);
  page.fn.setViewBorder(border);
  console.log("_common.cookie",_common.cookie)
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

  $("#inputCircleColorStart").val(page.data.config.color.circleStart);
  page.fn.setCircleColorStart(page.data.config.color.circleStart);
  $("#inputCircleColorStart").minicolors({
    change: page.fn.setCircleColorStart
  });
  $("#inputCircleColor").val(page.data.config.color.circle);
  page.fn.setCircleColor(page.data.config.color.circle);
  $("#inputCircleColor").minicolors({
    change: page.fn.setCircleColor
  });
  $("#inputCircleColorEnd").val(page.data.config.color.circleEnd);
  page.fn.setCircleColorEnd(page.data.config.color.circleEnd);
  $("#inputCircleColorEnd").minicolors({
    change: page.fn.setCircleColorEnd
  });

  $("#opacity_step_0").val(_common.cookie.get(page.constants.cookieKeys.opacity_step[0], page.constants.config.opacity_step[0]));
  $("#opacity_step_1").val(_common.cookie.get(page.constants.cookieKeys.opacity_step[1], page.constants.config.opacity_step[1]));
  $("#opacity_step_2").val(_common.cookie.get(page.constants.cookieKeys.opacity_step[2], page.constants.config.opacity_step[2]));

  page.constants.config.opacityType = _common.cookie.get(page.constants.cookieKeys.opacityType, page.constants.config.opacityType); //////
  $("input[name='opacityType'][value='"+page.constants.config.opacityType+"']").prop("checked", true);
  page.fn.toggleOpacityType();

  let point = _common.cookie.get(page.constants.cookieKeys.point, page.constants.config.point.default);
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

  page.constants.tagSize = _common.cookie.getNumber(page.constants.cookieKeys.tagSize, page.constants.tagSize);
  page.fn.setTagSize(page.constants.tagSize);
  $("#sliderTagSize").slider({
    range: "min"
    , value: page.constants.tagSize
    , step: 1
    , min: 1
    , max: 100
    , slide: function( event, ui ) {
      page.fn.setTagSize(ui.value);
    }
  });

  page.constants.config.keypointLineStyle = _common.cookie.get(page.constants.cookieKeys.keypointLineStyle, page.constants.config.keypointLineStyle);
  $("#cpKeypointLineStyle_"+page.constants.config.keypointLineStyle).prop("checked", true);
  $( ".modal-configure" ).draggable({
    handle: ".modal-header"
  });
  $( "#classFilterPopup" ).draggable({
    handle: ".popUp-header"
  });
  $( "#popHotkey" ).draggable({
    handle: ".popUp-header"
  });

  page.data.config.imageServerUrl = _common.nvl(_common.cookie.get(page.constants.cookieKeys.imageServerUrl), "default");
  if(page.data.config.imageServerUrl == "default") {
    $("#imageServerUrl_default").prop("checked", true);
  } else {
    $("#imageServerUrl_edge").prop("checked", true);
  }

  page.dom.root = $("#root");
  page.dom.rootRejectObjectData = $("#rootRejectObjectData");
  page.dom.rootRejectImageData = $("#rootRejectImageData");
  page.dom.failReason = $("#failReason");
  page.dom.btnsReview = $(".btnsReview");
  page.dom.btnsReviewPass = $(".btnsReviewPass");
  page.dom.btnToggleTag = $("#btnToggleTag");
  page.dom.btnShowComment = $("#btnShowComment");
  page.dom.btnsReview.hide();
  page.dom.popGuide = $("#guide-modal");
  page.dom.popGuideHandle = $("#guide-modal .popUp-header").get(0);
  page.dom.popChatting = $("#popChatting");
  page.dom.popVcModal = $("#vcModal");
  page.dom.popVcModalHandle = $("#vcModal .popUp-header").get(0);

  if(sessionStorage.reviewSearch != null && sessionStorage.reviewSearch != "undefined" && JSON.parse(sessionStorage.reviewSearch)) {
    page.data.searchCondition = JSON.parse(sessionStorage.reviewSearch);
    if(page.data.searchCondition.classes) {
      page.data.searchCondition.classes.forEach(function(cls){
        $("input[name='searchClass'][value='"+cls+"']").prop("checked", true);
      });
    }
    if (_common.isNotEmpty(page.data.searchCondition.filterValidation) && page.data.searchCondition.filterValidation.length >0) {
      $("#inspectionSysType").val('filterValidation');
      $("#forValidationCheck").show();
      if($("input[name='vcOption']").length != page.data.searchCondition.filterValidation.length){
        page.data.searchCondition.filterValidation.forEach(function (workRuleType) {
          $("#workRuleType_" + workRuleType).prop("checked", true);
        });
      }
    }
    dropList[0].onCheckBox();
    dropList[1].onCheckBox();
    $("#searchObjectCount").val(page.data.searchCondition.objectCount);
    $("#searchStatus").val(page.data.searchCondition.filterStatus);
    $("#searchSort").val(page.data.searchCondition.sort);
    $("#searchWorkerId").val(page.data.searchCondition.annotatorId);
    $("#searchReviewerId").val(page.data.searchCondition.reviewerId);
    $("#searchInspectorId").val(page.data.searchCondition.inspectorId);
    $("#searchFileName").val(page.data.searchCondition.fileName);
    if (page.data.searchCondition.filterClassCheck){
      $("#inspectionSysType").val('filterClassCheck');
    } else if (page.data.searchCondition.filterObjectCheck) {
      $("#inspectionSysType").val('filterObjectCheck');
    }
    page.data.initImgNumber = page.param.workTicketId;
    page.fn.search(page.data.searchCondition);
    sessionStorage.reviewSearch = null;
  } else {
    sessionStorage.reviewSearch = null;
    page.fn.searchFromUI();
  }
  page.fn.setTooltip();
  page.fn.createLocalForageKey();
  page.fn.domLanguageSetting();
  let isViewTags = _common.cookie.get(page.constants.cookieKeys.isViewTags, "false");
  if(isViewTags == "true") {
    page.fn.toggleViewTag();
  }
  for(let i = 0; i < page.constants.imageServer.length; i++) {
    let imgServerUrl = page.constants.imageServer[i].url;
    let imgServerName = page.constants.imageServer[i].name;
    if(page.constants.userLocation.toUpperCase() == imgServerName.toUpperCase()) {
      page.data.imageServerURL = imgServerUrl;
      page.data.imageServerName = imgServerName;
    }
  }
  if (_common.isEmpty(page.data.imageServerURL)) {
    page.data.imageServerURL = page.constants.imageServer[0].url;
    page.data.imageServerName = page.constants.imageServer[0].name;
  }
  page.constants.imageServerURL = page.constants.imageServer[0].url;
  page.constants.imageServerName = page.constants.imageServer[0].name;

  try {
    page.fn.addEvent(window, "mousedown", page.fn.eventMouseDown, false);
    page.fn.addEvent(window, "mousemove", page.fn.eventMouseMove, false);
    page.fn.addEvent(window, "mouseup", page.fn.eventMouseUp, false);
    page.fn.addEvent(document.getElementById('uploadFileName'), "paste", page.fn.pasteRejectImg, false);
    // page.fn.addEvent(document.getElementById('uploadFileNameSelected'), "paste", page.fn.pasteRejectImg, false);
  } catch (E) {
    log.error(E, "page.fn.init, addEvent");
  }
  if(page.data.task.taskDesc != null && page.data.task.taskDesc != "") {
    page.data.task.taskDesc = page.data.task.taskDesc.replaceAll('<br/>', '\n');
    $(".guide-editor > p").html(page.data.task.taskDesc);
  }
  let clip = new ClipboardJS('[data-clipboard-text]');
  clip.on("success", function (e) {
    page.fn.alert(_common.template.parseMessage(page.message.copyClip, {text: e.text}));
  });
  if (page.data.task.taskDesc != null && page.data.task.taskDesc != "") {
    page.data.task.taskDesc = page.data.task.taskDesc.replaceAll('<br/>', '\n');
    $(".guide-editor > p").html(page.data.task.taskDesc);
  }
  page.fn.changeImageSize();
  $(window).bind('wheel', function(event){
    let appendVal = 0.5;
    if (page.data.zoomer.ratio < 3) {
      appendVal = 0.1;
    } else if (page.data.zoomer.ratio < 5) {
      appendVal = 0.2;
    }
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
      page.data.zoomer.ratio += appendVal;
    } else {
      // scroll down
      page.data.zoomer.ratio -= appendVal;
    }
    page.fn.applyZoomRatio();
  });
  let cookieZoomerRatio = _common.cookie.getNumber(page.constants.cookieKeys.zoomerRatio, 2)
  if (cookieZoomerRatio <= 0) {
    page.data.zoomer.ratio = 2
  } else {
    page.data.zoomer.ratio = cookieZoomerRatio;
  }
  $("#wrapZoomerRatio").text("x" + page.data.zoomer.ratio.toFixed(1));
  $(window).bind("resize", function() {
    page.data.window.width = $(window).width();
    page.data.window.height = $(window).height();
    if($("#configImageSize").val() == "full") {
      $("img[loaded='true']").each(function (i, o) {
        page.fn.resizeImage($(o));
      });
    }
  });
  page.data.window.width = $(window).width();
  page.data.window.height = $(window).height();
  page.fn.viewDataInfo();

  page.dom.rootHotkeySystem = $("#rootHotkeySystem");
  page.dom.rootHotkeyTask = $("#rootHotkeyTask");
  log.info(page.hotkey, "init hotkey guide");
  page.hotkey.forEach(function (key) {
    if (key.isVisible && _common.isNotEmpty(key.keyName)) {
      let w = $(_common.template.parseObject("tmpl-hotkey-wrap", key));
      if (key.type == page.constants.hotkeyType.defaultKey) {
        // log.debug(key, "append system hotkey");
        page.dom.rootHotkeySystem.append(w);
      } else {
        // log.info(key, "append task hotkey");
        page.dom.rootHotkeyTask.append(w);
      }
      let keys = key.keyName.split("+");
      let isFirst = true;
      key.keyName.split("+").forEach(function (k) {
        if (!isFirst) {
          w.children(".hotkey").append(_common.template.parseObject("tmpl-hotkey-icon-plus"));
        }
        if (k == "mouse_left") {
          w.children(".hotkey").append(_common.template.parseObject("tmpl-hotkey-icon-mouseLeft"));
        } else if (k == "mouse_right") {
          w.children(".hotkey").append(_common.template.parseObject("tmpl-hotkey-icon-mouseRight"));
        } else if (k == "move") {
          w.children(".hotkey").append(_common.template.parseObject("tmpl-hotkey-icon-move"));
        } else if (k == "mouse_wheelup") {
          w.children(".hotkey").append(_common.template.parseObject("tmpl-hotkey-icon-mouseWheelup"));
        } else if (k == "mouse_wheeldown") {
          w.children(".hotkey").append(_common.template.parseObject("tmpl-hotkey-icon-mouseWheeldown"));
        } else {
          switch(k) {
            case 'ARROWLEFT' : k = '←'; break;
            case 'ARROWRIGHT' : k = '→'; break;
            case 'ARROWUP' : k = '↑'; break;
            case 'ARROWDOWN' : k = '↓'; break;
          }
          w.children(".hotkey").append(_common.template.parseObject("tmpl-hotkey-key", {key: k}));
        }
        isFirst = false;
      });
    }
  });
  log.info("end", "page.fn.init");
}

page.fn.reCheckImageSelected = function() {
  $("#viewCheckedImageCount").text($("input[name='chkReviewImage']:checked").length);
  if($("input[name='chkReviewImage']").length == 0) {
    $("#btnSelectAll").text(page.message.button.selectAll);
  } else if($("input[name='chkReviewImage']").length == $("input[name='chkReviewImage']:checked").length) {
    $("#btnSelectAll").text(page.message.button.deSelectAll);
  } else {
    $("#btnSelectAll").text(page.message.button.selectAll);
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
      .removeClass("size_400")
      .removeClass("size_800")
      .removeClass("size_1600")
      .removeClass("size_full")
      .addClass("size_" + $("#configImageSize").val())
  ;
  if($("#configImageSize").val() == "full") {
    $(".body-left").addClass("scroll-disabled");
  } else {
    $(".body-left").removeClass("scroll-disabled");
  }
  $("img[loaded='true']").each(function(i, o){
    page.fn.resizeImage($(o));
  });
}
page.fn.changeImageFile = function(upDown) {
  if($("#configImageSize").val() == "full") {
    let nextFileIndex = 0;
    if (upDown == "up") {
      if (page.data.lastSelectedImageIndex > 0) {
        nextFileIndex = page.data.lastSelectedImageIndex - 1;
      }
    } else {
      if (page.data.imageMap.length() - 1 > page.data.lastSelectedImageIndex) {
        nextFileIndex = page.data.lastSelectedImageIndex + 1;
      } else {
        nextFileIndex = page.data.lastSelectedImageIndex
      }
    }
    log.info(nextFileIndex, "page.fn.changeImageFile, nextFileIndex");
    if (nextFileIndex != page.data.lastSelectedImageIndex) {
      $("#root").scrollTop(($("#root > li:first-child").height() + 5) * nextFileIndex);

      let nextImgNumber = $($(".data-box").get(nextFileIndex)).attr("data-workTicketId");
      page.fn.viewDetailInfo(nextImgNumber, false);
      page.fn.resizeImage($("#img_"+nextImgNumber));
    }
    $("#txt-file-locator-current").text(nextFileIndex + 1);
  }
}
page.fn.preloadNextImage = function(image) {
  image = $(image);
  //log.info(image, "page.fn.preloadNextImage");
  let curIdx = $(image.parents("li")).index();
  let nextLi = $($("#root > li").get(curIdx + 1));
  if(nextLi.length > 0) {
    let img = nextLi.children("div.data-box").children("div.img-area").children("img");
    if(img.hasClass("lazy")) {
      // log.info(img, "need loading");
      let lazyImage = img.get(0);
      lazyImage.onload = function (evt) {
        // log.info(evt, "lazyImage.onload");
        let image = $(evt.path[0]);
        page.fn.checkSuccessLoadImage(image);
        page.fn.preloadNextImage(image);
      }
      lazyImage.src = page.fn.getImageURL(lazyImage.dataset.src);
      lazyImage.classList.remove("lazy");
      //lazyImageObserver.unobserve(lazyImage);
      $(lazyImage).addClass("loadedImage");
    }
  }
}
page.fn.resetSearchForm = function() {
  $("input[name='searchClass']").prop("checked", false);
  dropList[0].onCheckBox();
  $("#searchObjectCount").val("");
  $("#searchStatus").val(page.constants.defaultImageStatus );
  $("#searchSort").val("originalFileName");
  $("#searchWorkerId").val("");
  $("#searchFileName").val("");
  $("#searchReviewerId").val("");
  $("#searchInspectorId").val("");
  $("#inspectionSysType").val("");
  $("input[name='vcOption']").prop("checked", false);
  $("#forValidationCheck").hide();
  dropList[1].onCheckBox();
  page.fn.searchFromUI(1);
}
page.fn.getSearchConditionFromUI = function() {
  let classes = [];
  let checked = $("input[name='searchClass']:checked");
  let fileNames = $("#searchFileName").val().split("\n");
  if(checked.length != $("input[name='searchClass']").length) {
    checked.each(function(i, o){
      classes.push(o.value);
    });
  }
  let objectCount = $("#searchObjectCount").val();
  objectCount = objectCount != "" ? Number.parseInt(objectCount) : null;
  let reqType = page.fn.convertReqType();
  // ispection System type 추가
  let inspectionSysType = $("#inspectionSysType").val();
  let filterValidation = [];
  let filterObjectCheck = false;
  let filterClassCheck = false;
  // validation check의 경우
  if (inspectionSysType == 'filterValidation') {
    let checkedVc = $("input[name='vcOption']:checked");
    // if ()
    if(checkedVc.length == 0) {
      $("input[name='vcOption']").each(function(i, o){
        filterValidation.push(o.value);
      });
    } else {
      checkedVc.each(function(i, o){
        filterValidation.push(o.value);
      });
    }

    // object check의 경우
  } else if (inspectionSysType == 'filterObjectCheck') {
    filterObjectCheck = true;
  }else if (inspectionSysType =='filterClassCheck') {
    filterClassCheck = true;
  }else {
    inspectionSysType = null;
  }
  // let filterObjectCheck = $("input:checkbox[id=box-check]").is(":checked") ? true : false;

  let condition = {
    filterStatus  : $("#searchStatus").val()
    , classes     : classes
    , objectCount : objectCount
    , sort        : $("#searchSort").val()
    , annotatorId : $("#searchWorkerId").val()
    , reviewerId  : $("#searchReviewerId").val()
    , inspectorId : $("#searchInspectorId").val()
    , fileName    : $("#searchFileName").val()
    , fileNameList: fileNames
    , inspectionSysType : inspectionSysType
    , filterObjectCheck : filterObjectCheck
    , filterValidation : filterValidation
    , filterClassCheck : filterClassCheck
    , pageIndex   : 1
    , projectId   : page.data.param.projectId
    , taskId  : page.data.param.taskId
    , reqType     : reqType
  };
  log.info(condition, "page.fn.getSearchConditionFromUI");
  return condition;
}

page.fn.searchFromUI = function(pageIndex) {
  pageIndex = pageIndex == null ? 1 : pageIndex;
  let condition = page.fn.getSearchConditionFromUI();
  condition.pageIndex = pageIndex;
  page.fn.search(condition);
  page.fn.viewHistoryData('work')
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
page.fn.search = function(condition, showNext) {
  showNext = showNext == true ? true : false;
  page.fn.showLoading();
  page.dom.root.empty();
  if (page.constants.permission.reviewer != page.data.param.reqType) {
    $(".modal-fail li input[type='checkbox']").prop("checked", false);

  }
  if(page.data.imageMap) {
    page.data.imageMap.clear();
  }
  page.data.imageMap = new HashMap();
  page.data.searchCondition = condition;
  $("#selPaging").empty();
  //page.fn.viewDetailInfo();
  if(page.data.param.reqType == page.constants.permission.co) {
    condition.filterStatus = 'filter_status_all';
  }
  let url = "/task/image-detail";
  _common.ajax.asyncJSON2({
    url : url
    , param : condition
    , returnFunction : function(rev) {
      if(rev.result && rev.data) {
        log.info(rev, url);
        //reset image list li
        const $ul = $("#rootImageListData");
        $ul.empty();

        if(rev.data != null && rev.data.reviewImageList != null && rev.data.reviewImageList.length > 0) {
          rev.data.reviewImageList.forEach(function(file, idx){
            file.index = idx;
            let status = _common.nvl(file.status, "open");
            if(status == "reviewed" && file.statusReview != null) {
              status += "_" + file.statusReview;
            } else if (status == "reviewed" && file.statusReview == null) {
              status = "open";
            }
            if(_common.nvl(file.status, "open") == "reviewed" && file.statusReview == "master comment") {
                status = "reviewed_fail";
            }
            let tmplName = "tmpl-image-"+status;
            // log.info("tmplName="+tmplName);
            file.imageServer = page.data.imageServerURL;
            if(file.ocStatus != null && file.ocStatus == 'reject') {
              page.dom.root.append(_common.template.parseObject("tmpl-image-object_check", file));
            }else {
              page.dom.root.append(_common.template.parseObject(tmplName, file));
            }
            if(file.statusInspect == "OK") {
              $("#liImageRoot_"+file.workTicketId).append(_common.template.parseObject("tmpl-labelInspOK"));
            } else if(file.statusInspect == "NG") {
              $("#liImageRoot_"+file.workTicketId).append(_common.template.parseObject("tmpl-labelInspNG"));
            }
            const html = _common.template.parseObject("tmpl-imageListItem", {
              fileName: file.fileName
            }) ;
            const $li = $(html);
            //closure??
            $li.data("file", file);
            $li.on("click", function () {
              page.fn.viewDetailInfo(file.workTicketId);
            })
            $("#rootImageListData").append($li);
            page.data.imageMap.put(file.workTicketId, file);
            // log.info(file, "page.fn.search");
          });

          $("#loadedImageCount").text(0);
          page.fn.lazyLoad();
          if(page.data.lastSelectedImageNumber != null && showNext) {
            if(page.data.lastSelectedImageIndex > rev.data.reviewImageList.length - 1) {
              page.fn.viewDetailInfo(rev.data.reviewImageList[rev.data.reviewImageList.length - 1].workTicketId);
              $(".data-box[data-workTicketId='"+ rev.data.reviewImageList[rev.data.reviewImageList.length - 1].workTicketId + "']")[0].scrollIntoView();
            }else {
              page.fn.viewDetailInfo(rev.data.reviewImageList[page.data.lastSelectedImageIndex].workTicketId);
              $(".data-box[data-workTicketId='"+ rev.data.reviewImageList[page.data.lastSelectedImageIndex].workTicketId + "']")[0].scrollIntoView();
            }
          }else {
            if(!_common.isEmpty(page.data.initImgNumber) &&
                _common.isNotEmpty(page.data.imageMap.get(page.data.initImgNumber))) {
              $("#txt-file-locator-current").text(page.data.imageMap.get(page.data.initImgNumber).index + 1);
              page.fn.viewDetailInfo(page.data.initImgNumber);
              page.data.initImgNumber = null;
            } else {
              page.fn.viewDetailInfo(rev.data.reviewImageList[0].workTicketId);
            }
          }
          page.data.pagingInfo = {
            totalCount : rev.paging.totalCount
            , lastPageIndex : rev.paging.lastPage
            , currentPageIndex : rev.paging.pageIndex

          };
          $("#pagingCurrentCount").text(rev.data.reviewImageList.length);
          $("#txt-file-locator-total").text(rev.data.reviewImageList.length);
          $("#pagingTotalCount").text(page.data.pagingInfo.totalCount);
          $(".btnPaging").prop("disabled", false);

          for(let i = 1; i <= page.data.pagingInfo.lastPageIndex; i++) {
            $("#selPaging").append(_common.template.parseObject("tmpl-paging-option", {
              pageNum   : i
              , selected: i == rev.paging.pageIndex ? "selected" : ""
            }));
          }

          if($("#chkReviewImage_"+page.data.searchHistoryImage).length > 0) {
            page.fn.viewDetailInfo(page.data.searchHistoryImage);
            page.data.searchHistoryImage = null;
          }

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
        if (_common.isEmpty(rev.data.taskValidatorList)) {
          page.data.validatorList = rev.data.taskValidatorList;
          $(".VC-check li").remove();
        }
        else if (page.data.validatorList != rev.data.taskValidatorList) {
          page.data.validatorList = rev.data.taskValidatorList;
          $(".VC-check li").remove();
          rev.data.taskValidatorList.forEach(function (obj) {
            if (_common.isNotEmpty(obj.workRuleType) && "11/21/31/41/51/61/71/81/91".includes(obj.workRuleType)) {
              $("#forRuleType_"+obj.workRuleType+" span").hide();
              if (obj.workRuleType == '61') {
                let typeList =[];
                if (obj.numbering =="Y"){
                  typeList.push(page.message.numbering);
                }
                if (obj.letter == "Y") {
                  typeList.push(page.message.letter);
                }
                if (obj.specialCharacter == "Y") {
                  typeList.push(page.message.specialCharacter);
                }
                obj.typeList = typeList;
                if (_common.isEmpty(obj.tagClassName)) {
                  obj.tagClassName = obj.tagName;
                }
              } else if (obj.workRuleType =='71') {
                if (_common.isNotEmpty(obj.numbering)) {
                  obj.tagValType = page.message.numbering;
                } else if (_common.isNotEmpty(obj.letter)) {
                  obj.tagValType = page.message.letter;
                } else if (_common.isNotEmpty(obj.specialCharacter)) {
                  obj.tagValType = page.message.specialCharacter;
                }
              }
              $("#forRuleType_"+obj.workRuleType).append(_common.template.parseObject("tmpl-vcModal-workRuleType_"+obj.workRuleType, obj));
            } else {
              log.error(obj, obj.workRuleType," is undefined workRuleType.");
            }
          });
        }

        $(".VC-check").each(function (i, o) {
          if($(o).children('li').length == 0) {
            $(o).children('span').show();
          }
        });
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
  if(lazyImages.length > 0) {
    let lazyImage = lazyImages[0];
    if($(lazyImage).is(':visible')) {
      lazyImage.onload = function (evt) {
        //log.info(evt, "lazyImage.onload");
        let image = $(evt.path[0]);
        page.fn.checkSuccessLoadImage(image);
        page.fn.preloadNextImage(image);
      }
      lazyImage.src = page.fn.getImageURL(lazyImage.dataset.src);
      lazyImage.classList.remove("lazy");
      $(lazyImage).addClass("loadedImage");
    }
    // lazyImage.src = page.fn.getImageURL(lazyImage.dataset.src);
  }
}
page.fn.getImageURL = function(imageUrl) {
  let imageServer = page.data.config.imageServerUrl == "default" ? page.data.imageServerURL : edgeImageServerUrl;
  let url = imageServer + imageUrl;
  return url;
}

page.fn.onErrorImageLoad = function(img) {
  log.info(img, "page.fn.onErrorImageLoad");
  if(img.src.startsWith(page.data.imageServerURL)) {
    img.src = page.constants.srcErrorImage;
    $(img).attr("onerror", "");
  } else {
    img.src = page.data.imageServerURL + $(img).attr("data-src");
  }
}

page.fn.resizeImage = function(image) {
  // log.info(image, "page.fn.resizeImage");
  try {
    let imageId = image.attr("id");
    let workTicketId = imageId.replace('img_', '');

    // log.info("workTicketId=" + workTicketId, "page.fn.onLoadImage");
    let img = image.get(0);
    page.data.imageMap.get(workTicketId).naturalWidth = img.naturalWidth;
    page.data.imageMap.get(workTicketId).naturalHeight = img.naturalHeight;
    let padding = 4;
    let nw = img.naturalWidth, nh = img.naturalHeight;
    let iw = image.width(), ih = image.height();
    let cw = image.parent().width() - padding, ch = image.parent().height() - padding;
    let scale;
    let ww = cw - nw;
    let hh = ch - nh;
    let sw = nw / cw;
    let sh = nh / ch;

    if(ww < 0 || hh < 0) {
      sw = cw / nw;
      sh = ch / nh;
      if(sw > sh) {
        // log.info("type-1-1");
        scale = sh;
      } else {
        // log.info("type-1-2");
        scale = sw;
      }
    } else {
      sw = cw / nw;
      sh = ch / nh;
      if(sw > sh) {
        // log.info("type-2-1");
        scale = sh;
      } else {
        // log.info("type-2-2");
        scale = sw;
      }
    }
    let dd = {
      naturalWidth:nw, naturalHeight:nh, imageWidth:iw, imageHeight:ih, parentWidth:cw, parentHeight:ch
      , intervalWidth:ww, intervalHeight:hh, sw:sw, sh:sh, scale:scale
    };
    // log.info(dd);
    image.attr("data-naturalWidth", nw).attr("data-naturalHeight", nh).attr("data-scale", scale);
    image.width(nw * scale);
    image.height(nh * scale);

    //set SVG
    $("#svg_"+workTicketId).attr("viewBox", "0 0 " + nw + " " + nh)
        .attr("scale", scale)
        .width(nw * scale)
        .height(nh * scale)
        .css("margin", image.css("margin"))
        .css("padding", image.css("padding"))
    ; // .get(0).currentScale = scale;
    $("#tagWrap_"+workTicketId).width(iw).height(ih);
  } catch (Ex) {
    log.error(Ex, "page.fn.onLoadImage");
  }
}
page.fn.drawImage = function(image) {
  let img = image.get(0);
  let workTicketId = image.attr("data-workTicketId");
  let imageData = page.data.imageMap.get(workTicketId);
  //log.info(imageData, "page.fn.drawImage");
  // log.debug(imageData, "page.fn.drawSVG");
  if(_common.isNotEmpty(imageData.statusInspect)) {
    $("#chkReviewImage_"+workTicketId).parent().remove();
  }
  $("#svg_"+workTicketId).empty();
  let objTagMap = new HashMap();

  imageData.objGrpMap = new HashMap();
  if(imageData.objectGroupInfo != null) {
    try {
      imageData.objectGroupInfo = JSON.parse(imageData.objectGroupInfo);
      let index = 1;
      imageData.objectGroupInfo.forEach(function(grp){
        imageData.objGrpMap.put(grp.groupId, index++);
      });
    } catch (E) {
      //log.error(E, "page.fn.drawImage");
    }
  }
  if(imageData.tagList != null && imageData.tagList.length > 0) {
    let tagIndex = 0;
    imageData.tagList.forEach(function(tag){
      tag.tagIndex = tagIndex;
      //log.info(tag, "page.fn.drawImage, tag for image");
      page.fn.render.tag(tag, 5, 5);
      tagIndex++;
    });
  }
  if(_common.isNotEmpty(imageData.objectList)) {
    imageData.objectList.forEach(function(object){
      //log.info(object, "render-object");
      let minXY = null;
      if(object.objectType == page.constants.drawType.rectangle) {
        minXY = page.fn.render.rectangle(object);
      } else if(object.objectType == page.constants.drawType.polygon) {
        minXY = page.fn.render.polygon(object);
      } else if(object.objectType == page.constants.drawType.polyline) {
        minXY = page.fn.render.polyline(object);
      } else if(object.objectType == page.constants.drawType.keypoint) {
        if (object.keypointId == null && page.data.task.keypointMap.length()==1) {
          page.data.objectKeypointNumber = page.data.task.keypointMap.keySet()[0];
        } else {
          page.data.objectKeypointNumber = object.keypointId;
        }
        minXY = page.fn.render.keypoint(object);
      } else if (object.objectType == page.constants.drawType.rectangle4p) {
        minXY = page.fn.render.rectangle4p(object);
      } else if (object.objectType == page.constants.drawType.pointGroup) {
        minXY = page.fn.render.pointGroup(object);
      } else if (object.objectType == page.constants.drawType.point) {
        minXY = page.fn.render.pointGroup(object);
      } else if (object.objectType == page.constants.drawType.sideBox) {
        minXY = page.fn.render.sideBox(object);
      }  else if (object.objectType == page.constants.drawType.edgeLines) {
        minXY = page.fn.render.edgeLines(object);
      } else if(object.objectType == 'drawCube2D') {
        minXY = page.fn.render.drawCube2D(object);
      } else if(object.objectType == 'drawCube2DFront') {
        minXY = page.fn.render.drawCube2DFront(object);
      } else {
        log.error("object.objectType="+object.objectType, "page.fn.renderObject(), undefined objectType.");
        return false;
      }
      try {
        minXY.y += (page.constants.tagSize / 2);
      } catch (E) {
        log.error(E);
        log.info(object);
      }
      object.minXY = minXY;
      let tagIndex = 0;
      if(minXY != null && object.tagList != null && object.tagList.length > 0) {
        object.tagList.forEach(function(tag){
          tag.objectIndex = object.objectOrder;
          tag.tagIndex = tagIndex;
          if(object.objectType == 'drawCube2D' || object.objectType == 'drawCube2DFront') {
            if(tag.tagName != 'direction') {
              page.fn.render.tag(tag, minXY.x, minXY.y);
            }
          } else {
            page.fn.render.tag(tag, minXY.x, minXY.y);
          }
          tagIndex++;
        });
      }
      if(_common.isNotEmpty(object.groupId)) {
        //log.info(object, "init object-group");
        let g = document.createElementNS("http://www.w3.org/2000/svg", 'g');
        let x = minXY.x, y = minXY.y;
        x += tagIndex * (page.constants.tagSize + (page.constants.tagSize/4));
        y -= ((page.constants.tagSize/2) + ((page.constants.tagSize / 4)));
        $("#svg_"+object.workTicketId).append(g);

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
        let text = "#"
        let grpList = object.groupId.split(",");
        grpList.forEach(function(grpId, idx) {
          text += imageData.objGrpMap.get(grpId)
          if(idx != grpList.length - 1) {
            text += ","
          }
        })
        $(txt).text(text);
        txt.setAttribute("x", x + 22);
        txt.setAttribute("y", (y + 15));
        txt.setAttribute("class", "tag");
        $(g).append(txt);
        $(g).attr("title", " Group " + text + ", Object #" + object.objectOrder);
        //<image href="/global/images/tool/icon_qr.png" height="200" width="200"></image>
        tagIndex++;
      }
    });
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
  //log.info(skelP, "page.fn.render.getTitle");
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
page.fn.render.tagObjectValue = function(object, x, y, width, height) {
  //add label for tag
  if(object.tagList && object.tagList.length > 0) {
    let tag = object.tagList[0];
    let tagGroup = document.createElementNS("http://www.w3.org/2000/svg", 'g');
    tagGroup.setAttribute("class", "tag-group");
    let tagLabel = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    tagLabel.setAttribute("x", x);
    tagLabel.setAttribute("y", y);
    tagLabel.setAttribute("width", Math.max(width * 0.2, 50));
    tagLabel.setAttribute("height", Math.max(height * 0.1, 20));
    tagLabel.setAttribute("title", page.fn.render.getTitle(object));
    tagLabel.style.fill = tag.color || "#000";
    tagLabel.style.fillOpacity = "1"; // Fully opaque

    let tagText = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    tagText.setAttribute("x", x + 5);
    tagText.setAttribute("y", y + 15);
    tagText.setAttribute("fill", "#FFF");
    tagText.style.fontSize = "12px";
    const tagName = tag.tagName.toLowerCase();
    const tagValueMapping = page.constants.tagMappings[tagName];
    if (tagValueMapping && tagValueMapping[tag.val]) {
      tag.tagValueName = tagValueMapping[tag.val];
      tagText.textContent = tagValueMapping[tag.val] || "";
    }

    tagText.style.pointerEvents = "none"; // Prevent text from blocking click
    // tagGroup.appendChild(tagLabel);
    tagGroup.appendChild(tagText);
    $("#svg_"+object.workTicketId).append(tagGroup);
  }
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
    o.setAttribute("data-workTicketId", object.workTicketId);
    o.setAttribute("data-objectId", object.objectId);
    $("#svg_"+object.workTicketId).append(o);
    minXY = {
      x : x
      , y : y
    };
    if(loc.length > 2) {
      $(o).css("transform", "rotate("+loc[2][0]+"deg)");
    }
    //add tag label for object
    page.fn.render.tagObjectValue(object, x, y, width, height);
  }else{
    log.debug("object data is not allow, workTicketId="+object.workTicketId, "page.fn.render.rectangle");
  }
  return minXY;
}
page.fn.render.drawCube2D = function(object) {
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
    o.setAttribute("data-workTicketId", object.workTicketId);
    o.setAttribute("data-objectId", object.objectId);
    o.style.fill = "red";
    $("#svg_"+object.workTicketId).append(o);
    minXY = {
      x : x
      , y : y
    };
    /*if(loc.length > 2) {
      $(o).css("transform", "rotate("+loc[2][0]+"deg)");
    }*/
    if(loc.length > 2) {
        let fileIndex = page.data.lastSelectedImageIndex;
        let objAll = JSON.parse(object.objectLocation);
        if(objAll.length > 2) {
            objBoxSizeJson[object.objectId] = JSON.stringify(objAll[2]);
            createCube2DSide(fileIndex, object, objAll[2]);
        }
    }

    $("#svg_"+object.workTicketId).append(o);
    //add tag label for object
    page.fn.render.tagObjectValue(object, x, y, width, height);
    minXY = { x: x, y: y };
  }else{
    log.debug("object data is not allow, workTicketId="+object.workTicketId, "page.fn.render.rectangle");
  }
  return minXY;
}
createCube2DSide = function(fileIndex, object, objectBoxSize) {
    try {
        let svg = $("svg[id='svg_" + object.workTicketId + "']");
        let g = svg.children("g[objectId='" + object.objectId + "'][data-objectType='drawCube2DSide']");
        //let g = svg.children("g[objectId='" + object.objectId + "']");
        if(g.length == 0) {
            g = $(document.createElementNS("http://www.w3.org/2000/svg", 'g'));
            g.attr("objectId", object.objectId);
            g.attr("data-objectType", 'drawCube2DSide');
            svg.append(g);
        }
        //right
        if(objectBoxSize.direction == 'right') {
            let c_top = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            let idx_ = 9;
            c_top.setAttribute("cx", objectBoxSize.x2);
            c_top.setAttribute("cy", objectBoxSize.y2);
            c_top.setAttribute("class", "draw-point CLS_" + object.classId+" drawing-points");
            //c.setAttribute("objectId", object.objectId);
            c_top.setAttribute("index", idx_);
            c_top.setAttribute("pointNum", idx_ + 1);
            c_top.setAttribute("objectId", object.objectId);
            c_top.setAttribute("data-objectType", 'drawCube2DSide');
            c_top.setAttribute("direction", 'right');
            c_top.style.zIndex = -3;
            g.append(c_top);

            let c_next = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            idx_ = 10;
            c_next.setAttribute("cx", objectBoxSize.x3);
            c_next.setAttribute("cy", objectBoxSize.y3);
            c_next.setAttribute("class", "draw-point CLS_" + object.classId+" drawing-points");
            //c.setAttribute("objectId", object.objectId);
            c_next.setAttribute("index", idx_);
            c_next.setAttribute("pointNum", idx_ + 1);
            c_next.setAttribute("objectId", object.objectId);
            c_next.setAttribute("data-objectType", 'drawCube2DSide');
            c_next.setAttribute("direction", 'right');
            c_next.style.zIndex = -3;
            g.append(c_next);
        }
        //left
        if(objectBoxSize.direction == 'left') {
            let c_top = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            let idx_ = 9;

            c_top.setAttribute("cx", objectBoxSize.x1);
            c_top.setAttribute("cy", objectBoxSize.y1);
            c_top.setAttribute("class", "draw-point CLS_" + object.classId+" drawing-points");
            //c.setAttribute("objectId", object.objectId);
            c_top.setAttribute("index", idx_);
            c_top.setAttribute("pointNum", idx_ + 1);
            c_top.setAttribute("objectId", object.objectId);
            c_top.setAttribute("data-objectType", 'drawCube2DSide');
            c_top.setAttribute("direction", 'left');
            c_top.style.zIndex = -3;
            g.append(c_top);

            let c_next = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            idx_ = 10;
            c_next.setAttribute("cx", objectBoxSize.x4);
            c_next.setAttribute("cy", objectBoxSize.y4);
            c_next.setAttribute("class", "draw-point CLS_" + object.classId+" drawing-points");
            //c.setAttribute("objectId", object.objectId);
            c_next.setAttribute("index", idx_);
            c_next.setAttribute("pointNum", idx_ + 1);
            c_next.setAttribute("objectId", object.objectId);
            c_next.setAttribute("data-objectType", 'drawCube2DSide');
            c_next.setAttribute("direction", 'left');
            c_next.style.zIndex = -3;
            g.append(c_next);

        }
        g = svg.children("g[objectId='" + object.objectId + "']");
        let points = "";
        points += objectBoxSize.x1 + "," + objectBoxSize.y1 + " "+  objectBoxSize.x2 + "," + objectBoxSize.y2 + " " +  objectBoxSize.x3 + "," + objectBoxSize.y3 + " " +  objectBoxSize.x4 + "," + objectBoxSize.y4;
        //let o = g.children("drawCube2DSide.object-body");
        let o = g.children("polygon");
        if (o.length == 0) {
            o = $(document.createElementNS("http://www.w3.org/2000/svg", 'polygon'));
            o.attr("class", "draw-object object-body CLASS_" + object.classId)
                .attr("fill-rule", "evenodd")
                .attr("points", points)
                .attr("objectId", object.objectId)
                .attr("data-objectType", object.objectType)
                .attr("data-file-index", fileIndex)
            ;
            o.css({
            	"fill": "yellow",
            });
            //g.append(o);
            $(o).insertBefore(g.children().first());
        }
        let img = page.data.imageMap.get(object.workTicketId);
        let objectList = img.objectList;
        objectList.forEach(function (o) {
            if(o.objectId == object.objectId) {
                //let objectBoxSizeJson = JSON.stringify(objectBoxSize);
                //objBoxSizeJson[o.objectId] = objectBoxSizeJson;
                //update
                if(objectBoxSize.deleted == 'drawCube2DSide') {
                    g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2D']");
                    let polygon = g.children('polygon');
                    polygon.attr('visibility', 'hidden');
                    g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2DSide']");
                    g.attr('visibility', 'hidden');
                }
                if(objectBoxSize.deleted == 'main') {
                    //g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2D']");
                    //let rect = svg.children('rect');
                    let rect = svg.children('rect[data-objectId="'+ object.objectId +'"]');
                    rect.attr('visibility', 'hidden');
                    //g = svg.children("g[objectId='" + o.objectId + "'][id='group_points_"+ o.objectId +"']");
                    g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2DSide']");
                    //g.attr('visibility', 'hidden');
                    let circle = g.children('circle');
                    circle.attr('visibility', 'hidden');
                }
            }
        });
    } catch(E) {
        log.error(E, "createCube2DSide");
        page.fn.data.deleteObject(fileIndex, object.objectId);
    }
    return objectBoxSize;
}
page.fn.render.drawCube2DFront = function(object) {
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
    o.setAttribute("data-workTicketId", object.workTicketId);
    o.setAttribute("data-objectId", object.objectId);
    o.style.fill = "blue";
    $("#svg_"+object.workTicketId).append(o);
    minXY = {
      x : x
      , y : y
    };
    /*if(loc.length > 2) {
      $(o).css("transform", "rotate("+loc[2][0]+"deg)");
    }*/
    if(loc.length > 2) {
        let fileIndex = page.data.lastSelectedImageIndex;
        let objAll = JSON.parse(object.objectLocation);
        if(objAll.length > 2) {
            objBoxSizeJsonFront[object.objectId] = JSON.stringify(objAll[2]);
            createCube2DSideFront(fileIndex, object, objAll[2]);
        }
    }
    //add tag label for object
    page.fn.render.tagObjectValue(object, x, y, width, height);
  }else{
    log.debug("object data is not allow, workTicketId="+object.workTicketId, "page.fn.render.rectangle");
  }
  return minXY;
}
createCube2DSideFront = function(fileIndex, object, objectBoxSize) {
    try {
        let svg = $("svg[id='svg_" + object.workTicketId + "']");
        let g = svg.children("g[objectId='" + object.objectId + "'][data-objectType='drawCube2DSideFront']");
        //let g = svg.children("g[objectId='" + object.objectId + "']");
        if(g.length == 0) {
            g = $(document.createElementNS("http://www.w3.org/2000/svg", 'g'));
            g.attr("objectId", object.objectId);
            g.attr("data-objectType", 'drawCube2DSideFront');
            svg.append(g);
        }
        //right
        if(objectBoxSize.direction == 'right') {
            let c_top = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            let idx_ = 9;
            c_top.setAttribute("cx", objectBoxSize.x2);
            c_top.setAttribute("cy", objectBoxSize.y2);
            c_top.setAttribute("class", "draw-point CLS_" + object.classId+" drawing-points");
            //c.setAttribute("objectId", object.objectId);
            c_top.setAttribute("index", idx_);
            c_top.setAttribute("pointNum", idx_ + 1);
            c_top.setAttribute("objectId", object.objectId);
            c_top.setAttribute("data-objectType", 'drawCube2DSideFront');
            c_top.setAttribute("direction", 'right');
            c_top.style.zIndex = -3;
            g.append(c_top);

            let c_next = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            idx_ = 10;
            c_next.setAttribute("cx", objectBoxSize.x3);
            c_next.setAttribute("cy", objectBoxSize.y3);
            c_next.setAttribute("class", "draw-point CLS_" + object.classId+" drawing-points");
            //c.setAttribute("objectId", object.objectId);
            c_next.setAttribute("index", idx_);
            c_next.setAttribute("pointNum", idx_ + 1);
            c_next.setAttribute("objectId", object.objectId);
            c_next.setAttribute("data-objectType", 'drawCube2DSideFront');
            c_next.setAttribute("direction", 'right');
            c_next.style.zIndex = -3;
            g.append(c_next);
        }
        //left
        if(objectBoxSize.direction == 'left') {
            let c_top = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            let idx_ = 9;

            c_top.setAttribute("cx", objectBoxSize.x1);
            c_top.setAttribute("cy", objectBoxSize.y1);
            c_top.setAttribute("class", "draw-point CLS_" + object.classId+" drawing-points");
            //c.setAttribute("objectId", object.objectId);
            c_top.setAttribute("index", idx_);
            c_top.setAttribute("pointNum", idx_ + 1);
            c_top.setAttribute("objectId", object.objectId);
            c_top.setAttribute("data-objectType", 'drawCube2DSideFront');
            c_top.setAttribute("direction", 'left');
            c_top.style.zIndex = -3;
            g.append(c_top);

            let c_next = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            idx_ = 10;
            c_next.setAttribute("cx", objectBoxSize.x4);
            c_next.setAttribute("cy", objectBoxSize.y4);
            c_next.setAttribute("class", "draw-point CLS_" + object.classId+" drawing-points");
            //c.setAttribute("objectId", object.objectId);
            c_next.setAttribute("index", idx_);
            c_next.setAttribute("pointNum", idx_ + 1);
            c_next.setAttribute("objectId", object.objectId);
            c_next.setAttribute("data-objectType", 'drawCube2DSideFront');
            c_next.setAttribute("direction", 'left');
            c_next.style.zIndex = -3;
            g.append(c_next);

        }
        g = svg.children("g[objectId='" + object.objectId + "']");
        let points = "";
        points += objectBoxSize.x1 + "," + objectBoxSize.y1 + " "+  objectBoxSize.x2 + "," + objectBoxSize.y2 + " " +  objectBoxSize.x3 + "," + objectBoxSize.y3 + " " +  objectBoxSize.x4 + "," + objectBoxSize.y4;
        //let o = g.children("drawCube2DSide.object-body");
        let o = g.children("polygon");
        if (o.length == 0) {
            o = $(document.createElementNS("http://www.w3.org/2000/svg", 'polygon'));
            o.attr("class", "draw-object object-body CLASS_" + object.classId)
                .attr("fill-rule", "evenodd")
                .attr("points", points)
                .attr("objectId", object.objectId)
                .attr("data-objectType", object.objectType)
                .attr("data-file-index", fileIndex)
            ;
            o.css({
            	"fill": "yellow",
            });
            //g.append(o);
            $(o).insertBefore(g.children().first());
        }
        let img = page.data.imageMap.get(object.workTicketId);
        let objectList = img.objectList;
        objectList.forEach(function (o) {
            if(o.objectId == object.objectId) {
                //let objectBoxSizeJson = JSON.stringify(objectBoxSize);
                //objBoxSizeJson[o.objectId] = objectBoxSizeJson;
                //update
                if(objectBoxSize.deleted == 'drawCube2DSideFront') {
                    g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2DFront']");
                    let polygon = g.children('polygon');
                    polygon.attr('visibility', 'hidden');
                    g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2DSideFront']");
                    g.attr('visibility', 'hidden');
                }
                if(objectBoxSize.deleted == 'mainFront') {
                    //g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2D']");
                    //let rect = svg.children('rect');
                    let rect = svg.children('rect[data-objectId="'+ object.objectId +'"]');
                    rect.attr('visibility', 'hidden');
                    //g = svg.children("g[objectId='" + o.objectId + "'][id='group_points_"+ o.objectId +"']");
                    g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2DSideFront']");
                    //g.attr('visibility', 'hidden');
                    let circle = g.children('circle');
                    circle.attr('visibility', 'hidden');
                }
            }
        });
    } catch(E) {
        log.error(E, "createCube2DSide");
        page.fn.data.deleteObject(fileIndex, object.objectId);
    }
    return objectBoxSize;
}
page.fn.render.tag = function(tag, x, y) {
  // log.info(tag, "page.fn.render.tag");
  let o = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
  x += tag.tagIndex * (page.constants.tagSize + (page.constants.tagSize/4));
  let topMargin = (page.constants.tagSize / 2);
  y -= (topMargin + 5) - page.constants.tagSize;
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
  $(o).attr("data-class", tag.classId);

  $(o).addClass("tag");
  $("#svg_"+tag.workTicketId).append(o);


}
page.fn.render.tagForPoint = function(tags, xx, yy, className, maxWidth, maxHeight, workTicketId) {
  log.info(tags, "page.fn.render.tagForPoint, tags");
  let g = document.createElementNS("http://www.w3.org/2000/svg", 'g');
  $(g).attr("data-type", "pointTagGroup");
  $("#svg_" + workTicketId).append(g);
  if(_common.isNotEmpty(tags)) {
    let keys = Object.keys(tags);
    for(let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let tag = {};
      tag[key] = tags[key];
      let color = page.fn.getTagValueColorForPoint({
        tagId : key
        , val : tags[key]
      });

      let o = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
      let topMargin = (page.constants.tagSize / 2);

      let x = xx + ((page.constants.tagSize / 4)) + ((i) * (page.constants.tagSize + 2));
      let y = yy - (topMargin + 5) - page.constants.tagSize;

      if (x + page.constants.tagSize > maxWidth) {
        x = xx - (page.constants.tagSize + (page.constants.tagSize / 4)) - ((i) * (page.constants.tagSize + 2));
      }
      if (y + page.constants.tagSize < 0) {
        y = yy + 5 + page.constants.tagSize;
      }

      let points = x + "," + (y + topMargin) + " "
          + x + "," + (y + page.constants.tagSize + topMargin) + " "
          + (x + page.constants.tagSize) + "," + (y + page.constants.tagSize + topMargin) + " "
          + (x + page.constants.tagSize) + "," + (y + topMargin) + " "
          + (x + (page.constants.tagSize / 2)) + "," + y + " "
      ;

      o.setAttribute("points", points);
      o.setAttribute("title", page.fn.stringfyObjectPointTagValues(tag));
      if(_common.isNotEmpty(color)) {
        $(o).css("fill", color);
      }
      $(o).addClass("tag").addClass(className);
      $(g).append(o);
    }
  }
}
page.fn.getTagValueColor = function(tag) {
  let color = null;
  if(_common.isNotEmpty(page.data.task.tags)) {
    if (tag.tagValTypeCd == "30") {
      for (let i = 0; i < page.data.task.tags.length; i++) {
        if (page.data.task.tags[i].tagId == tag.tagId) {
          for (let j = 0; j < page.data.task.tags[i].tagSelectValueVoList.length; j++) {
            if (page.data.task.tags[i].tagSelectValueVoList[j].value == tag.val) {
              if (_common.isNotEmpty(page.data.task.tags[i].tagSelectValueVoList[j].color)) {
                color = page.data.task.tags[i].tagSelectValueVoList[j].color;
              }
              break;
            }
          }
          break;
        }
      }
    }
  }
  return color;
}
page.fn.getTagValueColorForPoint = function(tag) {
  let color = null;
  if(_common.isNotEmpty(page.data.task.tags)) {
    for (let i = 0; i < page.data.task.tags.length; i++) {
      if (page.data.task.tags[i].tagId == tag.tagId) {
        if(page.data.task.tags[i].tagSelectValueVoList.length != 0) {
          tag.tagValTypeCd = "30";
          for (let j = 0; j < page.data.task.tags[i].tagSelectValueVoList.length; j++) {
            if (page.data.task.tags[i].tagSelectValueVoList[j].value == tag.val) {
              if (_common.isNotEmpty(page.data.task.tags[i].tagSelectValueVoList[j].color)) {
                color = page.data.task.tags[i].tagSelectValueVoList[j].color;
              }
              break;
            }
          }
        } else {
          tag.tagValTypeCd = "20";
          color = page.data.task.tags[i].color;
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
  $("#svg_"+tag.workTicketId).append(o);
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
    o.setAttribute("data-workTicketId", object.workTicketId);
    o.setAttribute("data-objectId", object.objectId);
    $("#svg_"+object.workTicketId).append(o);
    if(loc != null && loc.length > 0) {
      minXY = {
        x : 1000000000
        , y : 100000000
      };
      let idx = 0;
      loc.forEach((function(l){
        minXY.x = Math.min(l[0], minXY.x);
        minXY.y = Math.min(l[1], minXY.y);
        idx++;
      }));
    }
  }else{
    log.debug("object data is not allow, workTicketId="+object.workTicketId, "page.fn.render.polygon");
  }
  return minXY;
}
page.fn.render.polyline = function(object) {
  let loc = page.fn.render.castLocation(JSON.parse(object.objectLocation));
  // log.info(loc, "page.fn.render.polyline, loc");
  let minXY = null;
  if(loc != null && loc.length > 0) {
    //log.info(object, "page.fn.render.polyline");
    let o = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
    o.setAttribute("class", "draw-object CLASS_" + object.classId);
    o.setAttribute("points", loc);
    o.setAttribute("title", page.fn.render.getTitle(object));
    o.setAttribute("data-workTicketId", object.workTicketId);
    o.setAttribute("data-objectId", object.objectId);

    loc = JSON.parse(object.objectLocation);
    let prePoint = [];
    let isTag = false;
    let points = "";
    let index = 0;

    loc.forEach((function(point){
        if(typeof(point[3]) != "undefined") {
            let data = null;
            isTag = true;
            if(index > 0) {
                points = prePoint[0] + "," + prePoint[1] + " " + point[0] + "," + point[1];
                data = prePoint[3];
                let keys = Object.keys(data.tags);
                let key = keys[0];
                let tag = {};
                tag[key] = data.tags[key];
                let color = page.fn.getTagValueColorForPoint({
                    tagId : key
                    , val : tag[key]
                });

                let o_polyline = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
                o_polyline.setAttribute("class", "draw-object");
                //o.setAttribute("class", "draw-object CLASS_" + object.classId);
                o_polyline.setAttribute("points", points);
                o.setAttribute("title", page.fn.render.getTitle(object));
                o.setAttribute("data-workTicketId", object.workTicketId);
                o.setAttribute("data-objectId", object.objectId);
                o_polyline.setAttribute('stroke', color);
                $("#svg_"+object.workTicketId).append(o_polyline);
            }
        }

        prePoint = point;
        index++;
    }));

    if(isTag != true) {
        $("#svg_"+object.workTicketId).append(o);
    }
    //log.info(loc, "page.fn.render.polyline, loc, " + object.workTicketId);
    if(loc != null && loc.length > 0) {
      minXY = {
        x : 1000000000
        , y : 100000000
      };
      let g = document.createElementNS("http://www.w3.org/2000/svg", 'g');
      $("#svg_"+object.workTicketId).append(g);
      g = $(g);
      g.addClass("group_polyline_points")
      //g.attr("data-loc", object.objectLocation);
      let idx = 0;

      let canvasSize = $("#svg_"+object.workTicketId).attr("viewBox");
      let maxHeight = 0;
      let maxWidth = 0;
      try {
        canvasSize = canvasSize.split(" ");
        maxWidth = canvasSize[2];
        maxHeight = canvasSize[3];
      } catch(E) {
        log.error(E, "page.fn.render.polyline, canvasSize");
      }

      let pIdx = 0;
      loc.forEach((function(point){
        let cx = point[0];
        let cy = point[1];
        // log.info(cx, "cx");
        // log.info(cy, "cy");
        minXY.x = Math.min(cx, minXY.x);
        minXY.y = Math.min(cy, minXY.y);

        //2023-05-30 Point Tag View 추가
        let hasPointTag = false;
        let data = point[3];
        if(_common.isNotEmpty(data) && _common.isNotEmpty(data.tags)) {
          hasPointTag = true;
        }
        if(hasPointTag == true) {
          if(_common.isNotEmpty(canvasSize)) {
            try {
              let pClassName = "polyline-point";
              if(pIdx == 0) {
                pClassName = "point-start";
              } else if(loc.length - 1 == pIdx) {
                pClassName = "point-end";
              }
              page.fn.render.tagForPoint(data.tags, cx, cy, pClassName, maxWidth, maxHeight, object.workTicketId);
            } catch(E) {
              log.error(E, "page.fn.render.polyline, pointTag");
            }
          }
        }
        pIdx++;
        //2023-05-30 Point Tag View 추가

        if(page.data.config.viewPolylinePont == "on") {
          let c = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
          g.append(c);
          c = $(c);
          c.attr("cx", cx);
          c.attr("cy", cy);
          c.addClass("polyline-point");
          if(idx == 0) {
            c.addClass("point-start");
          } else if(idx == loc.length - 1) {
            c.addClass("point-end");
          }
          //log.info(loc, "page.fn.render.polyline, loc");
          if(hasPointTag == true) {
            //log.info(data, "page.fn.render.polyline, sub-data");
            if(Object.keys(data.tags).length > 0) {
              log.info(data.tags, "data.tags");
              c.addClass("has-tag");
              c.attr("title", page.fn.stringfyObjectPointTagValues(data.tags));
            }
          }
        }
        idx++;
      }));
    }
  }else{
    log.debug("object data is not allow, workTicketId="+object.workTicketId, "page.fn.render.polyline");
  }
  return minXY;
}
page.fn.render.keypoint = function(object) {
  // log.info(object, "page.fn.render.keypoint, object");
  let minXY = null;
  let constKey = page.data.task.keypointMap.get(page.data.objectKeypointNumber);
  log.info(constKey, "page.fn.render.keypoint, constKey");

  try {
    let groupId = "group_" + object.objectId;
    let g = $("#"+groupId);
    if(g.length == 0){
      g = document.createElementNS("http://www.w3.org/2000/svg", 'g');
      g = $(g);
      g.attr("id", groupId);
      $("#svg_" + object.workTicketId).append(g);
    } else {
      g.empty();
    }
    // if(page.keypoint.position != "") {
    if (constKey.position != "") {
      let loc = JSON.parse(object.objectLocation);
      let boundingBox = JSON.parse(object.objectBoundingBox)
      // log.info(object, "page.fn.render.keypoint");
      // log.info(loc, "page.fn.render.keypoint");
      if (loc != null && loc.length > 0) {
        let m = new HashMap();
        let m2 = new HashMap();
        let pidx = 0;
        loc.forEach(function (point) {
          if (_common.isNotEmpty(constKey.position[pidx][7]) &&
              constKey.position[pidx][7] == 'off') {
            pidx++;
            return false;
          }
          m.put(point[2], point);
          pidx++;
        });
        constKey.position.forEach(function (point) {
          m2.put(point[2], point);
        });
        // ===== PHẦN THÊM VÀO TỰ ĐỘNG VẼ ROI ===== //
        // 1. Thu thập tất cả tọa độ từ objectLocation
        let allX = [];
        let allY = [];
        loc.forEach(point => {
          if (point[0] > -999 && point[1] > -999) { // Lọc điểm hợp lệ
            allX.push(point[0]);
            allY.push(point[1]);
          }
        });

        // 2. Tính toán bounding box bao quanh tất cả keypoint
        if (allX.length > 0) {
          const minX = Math.min(...allX);
          const minY = Math.min(...allY);
          const maxX = Math.max(...allX);
          const maxY = Math.max(...allY);

          // 3. Tạo ROI rectangle
          const roiRect = {
            x: boundingBox.x,
            y: boundingBox.y,
            width: boundingBox.w,
            height: boundingBox.h
          };

          // 4. Vẽ bounding box
          const roiBox = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
          roiBox.setAttribute("x", roiRect.x);
          roiBox.setAttribute("y", roiRect.y);
          roiBox.setAttribute("width", roiRect.width);
          roiBox.setAttribute("height", roiRect.height);
          roiBox.setAttribute("class", "dynamic-roi CLASS_" + object.classId);
          roiBox.setAttribute("data-objectId", object.objectId);
          roiBox.setAttribute("style", "stroke: #FF0000;fill: none;stroke-width: 2;");
          g.append(roiBox);
        }

        if (_common.isNotEmpty(constKey.roi)) {
          let roi = [];
          let roiXList = [];
          let roiYList = [];
          constKey.roi.forEach(function (i) {
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
          r.setAttribute("style", "stroke:#f6ff21; fill:#f6ff21 !important;");
          g.append(r);
        }

        constKey.relationship.forEach(function (rel) {
          if (m.get(rel[0]) != null && m.get(rel[1]) != null) {
            let p1 = m.get(rel[0]);
            let p2 = m.get(rel[1]);
            let lineStyle = "";
            if(page.constants.keypoint.hiddenValues.includes(p1[3]) || page.constants.keypoint.hiddenValues.includes(p2[3])) {
              lineStyle = page.constants.config.keypointLineStyle;
            }
            // Skip if either point is (-1, -1)
            if ((p1[0] === -1 && p1[1] === -1) || (p2[0] === -1 && p2[1] === -1)) {
              return; // Or: continue; if inside a loop
            }
            let points = p1[0] + "," + p1[1] + " " + p2[0] + "," + p2[1];
            let o = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
            o.setAttribute("points", points);
            o.setAttribute("title", page.fn.render.getTitle(object, null, rel));
            o.setAttribute("class", "draw-object CLASS_" + object.classId);
            o.setAttribute("data-workTicketId", object.workTicketId);
            o.setAttribute("data-objectId", object.objectId);
            g.append(o);
            $(o).addClass(lineStyle);
          }
        });
        minXY = {
          x: 1000000000
          , y: 100000000
        };
        let idx = 0;
        for(let i = 0; i < loc.length; i++) {
          let c = loc[i];
          // if (_common.isNotEmpty(constKey.position[idx][7]) &&
          //     constKey.position[idx][7] == 'off') {
          //   idx++;
          //   return false;
          // }
          let o = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
          o.setAttribute("index", i);
          let cls = "CLASS_" + object.classId;
          if (c[0] > -999) {
            minXY.x = Math.min(minXY.x, c[0]);
          }
          if (c[1] > -999) {
            minXY.y = Math.min(minXY.y, c[1]);
          }
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
          o.setAttribute("data-workTicketId", object.workTicketId);
          o.setAttribute("data-objectId", object.objectId);

          page.fn.drawKeypoint({
            x: c[0]
            , y: c[1]
            , objectId: object.objectId
            , index: idx
            , position: c[2]
            , classId: object.classId
            , visibility: c[3]
            , workTicketId: object.workTicketId
            // , name: page.data.task.constKeypoint.position[idx][4]
            , viewIndex: (idx + 1)
            , orderSeq: object.objectOrder
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
          if (constKey.radiusYn == "Y") {
            $(o).css("r", c[4] + "px");
            $(o).attr("id", getUUID());
            // log.info(c, "hasRadius");
            // log.info(o);
          }
          g.append(o);
        }
      } else {
        log.debug("not defined keypoint!", "page.fn.render.keypoint");
      }
    }
  } catch (E) {
    log.error(E, "page.fn.render.keypoint");
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
    $("#group_"+point.objectId).append(c);
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
page.fn.render.rectangle4p = function (object) {
  log.info(object, "page.fn.render.rectangle4p");
  let minXY = {
    x:0, y:0
  };
  try {
    let loc = page.fn.render.castLocation(JSON.parse(object.objectLocation));
    if (loc.length < 4) {
      log.warn(object, "page.fn.renderRectangle, can't draw");
      return false;
    }
    let idx = 0;
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
    o.setAttribute("data-workTicketId", object.workTicketId);
    o.setAttribute("data-objectId", object.objectId);
    // o.setAttribute("title", "#" + object.objectOrder);
    $("#svg_"+object.workTicketId).append(o);
    if(loc.length > 4) {
      $(o).css("transform", "rotate("+loc[4][0]+"deg)");
    }

    if(page.data.config.view4pBoxPoint == "on") {
      let g = document.createElementNS("http://www.w3.org/2000/svg", 'g');
      $("#svg_"+object.workTicketId).append(g);
      g = $(g);
      g.addClass("group_rectangle4p_points")

      loc.forEach((function(point){
        let c = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        g.append(c);
        c = $(c);
        c.attr("cx", point[0]);
        c.attr("cy", point[1]);
        c.css("stroke", object.color)
        c.addClass("rectangle4p-point");
      }))
    }
  } catch (E) {
    log.debug(E, "page.fn.render.rectangle4p");
  }
  return minXY;
}

page.fn.render.pointGroup = function(object) {
  log.info(object, "page.fn.render.pointGroup");
  let minXY = {x:0, y:0};
  try {
    let g;
    $("#"+object.objectId).remove();
    g = document.createElementNS("http://www.w3.org/2000/svg", 'g');
    g.setAttribute("objectId", object.objectId);
    g.setAttribute("id", object.objectId);
    g.setAttribute("class", "draw-object object-body CLASS_" + object.classId);
    g.setAttribute("data-workTicketId", object.workTicketId);
    g.setAttribute("data-objectId", object.objectId);
    $("#svg_"+object.workTicketId).append(g);
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
page.fn.viewDetailInfo = function(workTicketId, isNeedChecked) {
  log.info(workTicketId, "page.fn.viewDetailInfo");
  let im = $(".data-box[data-workTicketId='"+ workTicketId + "']");
  let img = page.data.imageMap.get(workTicketId);
// Get the comment text directly
  let comment = Array.from(page.imageCommentMap.keys()).find(key => key.endsWith(img.originalFileName))
      ? page.imageCommentMap.get(Array.from(page.imageCommentMap.keys()).find(key => key.endsWith(img.originalFileName)))[0]
      : null;
  let commentText = comment?.content || 'No comment available';
  let commentDate = comment?.register_datetime ? comment.register_datetime : 'Unknown date';  page.data.currentImage = img;

//handle highlight for image list li
  $("#rootImageListData li").removeClass("li-highlight");
  const selector = `li[data-filename="${img.fileName}"]`;
  const $li = $("#rootImageListData").find(selector)
  $li.addClass("li-highlight")
  $li[0].scrollIntoView({behavior: "smooth", block: "center"})

  if(im.length > 0) {
    im[0].scrollIntoView(false);
    $(window).scrollTop(0);
    $("#txt-file-locator-current").text(img.index + 1);
  }
  $('#detailReject').hide();
  $("#failReason").val("");
  $("#ngReason").val("");
  $("#uploadFile").val("");
  $("#uploadFile").attr("data-fileId", "");
  $("#uploadFileName").val(page.message.noSelectFailImg);
  $("#downloadOldFile").text("");
  $("#downloadOldFile").attr("data-fileId","");
  $("#root div.data-box div.icoViewed").remove();

  /* cylim 리뷰/인스펙션 완료 후 초기화 수 */
  page.dom.rootRejectObjectData.empty();
  $("#rootInspObjTagList").empty();
  page.dom.rootRejectImageData.empty();
  $("#rootInspImageTagList").empty();

//  $("#rootErrorCodeList").empty();

  if(img != null) {
    if(isNeedChecked== "true") {
      $("#chkReviewImage_"+workTicketId).prop("checked", $("#chkReviewImage_"+workTicketId).is(":checked") ? false : true);
      page.fn.reCheckImageSelected();
    }
    $("#root div.data-box[data-workTicketId='"+workTicketId+"']").append(_common.template.parseObject("tmpl-hightlightImage"));
    $("#viewDetail_fileName").text(img.originalFileName);
    // Create the comment container
    let commentContainer = `
      <div>
        <p>${commentText}</p>
        ${commentDate !== 'Unknown date' ?
            `<p style="font-style: italic; font-size: 12px; color: gray;">${commentDate}</p>`
            : ''}
      </div>
     `;
    $("#viewDetail_comment").html(commentContainer);
    $('#copyBtnDiv').html('');
    $('#copyBtnDiv').append(_common.template.parseObject('tmpl-fileInfo-fileCopy', img))
    $("#viewDetail_fileName").parent().children(".title-tooltip").text(img.originalFileName);
    $("#viewDetail_status").text(page.fn.getFileStatusName(img.status, img.statusReview, img.statusInspect));
    $("#viewDetail_annotatorId").text(img.annotatorId);
    $("#viewDetail_failCount").text(img.countFailWorker);
    $("#viewDetail_workedDate").text(_common.convertData(img.workedDatetime));
    $("#viewDetail_reviewedDate").text(_common.convertData(img.reviewedDatetime));
    $("#viewDetail_reviewerId").text(img.reviewerId);
    $("#viewDetail_inspectorId").text(img.inspectorId);
    $("#viewDetail_inspectedDate").text(_common.convertData(img.inspectedDatetime));
    $("#failReason").val(img.reviewMessage);
    $("#ngReason").val(img.inspectMessage);
    $("#downloadOldFile").text(img.reviewFileName);
    $("#downloadOldFile").attr("data-fileId", img.reviewFileUrl);

	$('#viewDetail_masterCommentList').html('');
    $('#viewDetail_masterCommentList').hide();
    var cmtCounter = 0;
    if(img.listComment != undefined) {
        for (i = 0; i < img.listComment.length; ++i) {
            $('#viewDetail_masterCommentList').show();
            var li_master_comment = $('<li class="li_master_comment"><strong>'
                                        + img.listComment[i].masterId
                                        + ' :</strong><span>'
                                        + img.listComment[i].masterComment
                                        + '</span><span> ('
                                        + img.listComment[i].registerDatetime
                                        + ') </span></li>');
            $('#viewDetail_masterCommentList').append(li_master_comment);
            cmtCounter++;
        }
    }
    $('.cmtCount').text('('+ cmtCounter +')');
    $("#masterCommentContents").val(img.masterComment);
    $("#masterCommentContents").text(img.masterComment);
    $("#masterCommentContents").attr('placeholder',img.registerId + ' :');
    page.data.lastSelectedImageNumber = workTicketId;

    for(var i = 0; i < Object.keys(page.data.imageMap.map).length; i++) {
      if(Object.keys(page.data.imageMap.map)[i] == workTicketId) {
        page.data.lastSelectedImageIndex = i;
        break;
      }
    }

    log.info(img, "page.fn.viewDetailInfo");
//    page.dom.rootRejectObjectData.empty();
//    $("#rootInspObjTagList").empty();
    if(img.objectList && img.objectList.length > 0) {
      img.objectList.forEach(function(obj){
        page.dom.rootRejectObjectData.append(_common.template.parseObject("tmpl-rejectImage-object", obj));
        $("#rootInspObjTagList").append(_common.template.parseObject("tmpl-inspObj", obj));
        if(obj.tagList && obj.tagList.length > 0) {
          obj.tagList.forEach(function(tag){
            let color = page.fn.getTagValueColor(tag);
            tag.tagValueStyle = "";
            if(_common.isNotEmpty(color)) {
              tag.tagValueStyle = "color:"+color+";";
            }
            const tagName = tag.tagName.toLowerCase();
            const tagValueMapping = page.constants.tagMappings[tagName];
            if (tagValueMapping && tagValueMapping[tag.val]) {
              tag.tagValueName = tagValueMapping[tag.val];
            }
            page.dom.rootRejectObjectData.append(_common.template.parseObject("tmpl-rejectImage-tag", tag));
            $("#li_inspObj_"+obj.objectId).append(_common.template.parseObject("tmpl-inspObjTag", tag));
          });
        }
      });
    }
//    page.dom.rootRejectImageData.empty();
//    $("#rootInspImageTagList").empty();
    if(img.tagList && img.tagList.length > 0) {
      //HIDE IMAGETAG TEMPORARILY
      // img.tagList.forEach(function(tag){
      //   tag.objectId = "";
      //   tag.tagValueStyle = "";
      //   page.dom.rootRejectImageData.append(_common.template.parseObject("tmpl-rejectImage-tag", tag));
      //   $("#rootInspImageTagList").append(_common.template.parseObject("tmpl-inspImageTag", tag));
      // });
    }
    $(".reject-choice").hide();
    page.dom.btnsReview.hide();
    page.dom.btnsReviewPass.hide();
    $('#detailReject').hide();
    $("#detailInspection").hide();
    $("#rootErrorCodeList input[type='checkbox']").prop("checked", false);
    if(img.inspErrList != null && img.inspErrList.length > 0) {
      try {
        let inspErrList = img.inspErrList.split(",");
        inspErrList.forEach(function(err){
          $("#inspErr_" + err).prop("checked", true);
        });
      } catch (E) {
        log.error(E);
        log.error(img);
      }
    }
    $("#detailReject input[type='checkbox']").prop("disabled", true);
    $("#detailReject textarea").prop("disabled", true);
    $("#detailReject textarea").val(img.reviewMessage);

    if(img.reviewFailData) {
      let reviewFailData = JSON.parse(img.reviewFailData);
      if(reviewFailData.objectList && reviewFailData.objectList.length > 0) {
        reviewFailData.objectList.forEach(function(objectId) {
          $("#rejectObject_" + objectId).prop("checked", true);
        });
        reviewFailData.tagList.forEach(function(tag) {
          $("#rejectObject_" + tag.objectId + "_" + tag.tagId).prop("checked", true);
        });
      }
    }
    if (page.data.param.reqType == page.constants.permission.master) {
      // 마스터뷰 히스토리 추가 24.05.14
      page.history.clear();
      img.masterViewHistoryList?.forEach(function (t) {
        if (t.workHistoryType == 'worked') {
          if (page.history.get('work')) {
            page.history.get('work').push(t);
          } else {
            page.history.put('work', [t])
          }
        } else {
          if (page.history.get('review')) {
            page.history.get('review').push(t);
          } else {
            page.history.put('review', [t])
          }
        }
      })
      page.fn.viewHistoryData(page.data.historyType);
    }
    if(img.status == page.constants.imageStatusCode.reviewAssigned && page.data.param.reqType == page.constants.permission.reviewer) {
      $(".reject-choice").show();
      $(".check-area").show();
      $('#detailReject').show();
      $("button.btnsReview.reviewer").show();
      $("#detailReject button").show();
      $(".filebox-wrap").show();
      $("#rejectCheck").show();
      $("#showUploadFile").hide();
      $("#deleteFile").hide();
      $("#detailReject input[type='checkbox']").prop("disabled", false);
      $("#detailReject textarea").prop("disabled", false);
      // $("#wrapInspImageInfo").hide();
    } else if(page.data.param.reqType != page.constants.permission.reviewer) {
      if(img.status == page.constants.imageStatusCode.reviewed
          && img.statusReview == page.constants.imageStatusCode.reviewPass) {
        $(".reject-choice").show();
        $(".check-area").show();
        page.dom.btnsReviewPass.show();
        $("#wrapInspImageInfo").show();
        if(_common.isEmpty(img.statusInspect)) {
          $(".reject-choice").show();
          $("button.btnsReview.inspector").show();
          $("#rootErrorCodeList input[type='checkbox']").prop("disabled", false);
          $(".check-area").show();
          $("#detailInspection input[type='checkbox']").prop("disabled", false);
          $("#detailInspection textarea").prop("disabled", false);
          $("#btnInspNG").show();
          // $('#detailInspection').show();
          if(page.data.param.reqType == page.constants.permission.master) {
            $(".reject-choice").hide();
            $(".check-area").hide();
            $("#detailInspection textarea").prop("disabled", true);
            $("button.btnsReview.inspector").hide();
            page.dom.btnsReviewPass.hide();
            $("#rootErrorCodeList input[type='checkbox']").prop("disabled", true);
          }
        } else if(img.statusInspect == "ng") {
          $(".reject-choice").hide();
          $('#detailInspection').show();
          $(".check-area").hide();
          $("#detailInspection textarea").prop("disabled", true);
        } else {
          $(".reject-choice").hide();
          $("button.btnsReview.inspector").hide();
          if(img.statusInspect == "NG") {
            $(".reject-choice").hide();
            $("#rootErrorCodeList input[type='checkbox']").prop("disabled", true);
            $(".check-area").hide();
            $("#detailInspection textarea").prop("disabled", true);
            $("#detailInspection").show();
            $("#btnInspNG").hide();
          }
        }
      } else if (img.status == page.constants.imageStatusCode.reviewed
                           && img.statusReview == 'master comment') {
            page.dom.btnsReviewPass.show();
      }
    } else if(img.status == page.constants.imageStatusCode.reviewed && img.statusReview == page.constants.imageStatusCode.reviewPass) {
      page.dom.btnsReviewPass.show();
      if(_common.isEmpty(img.statusInspect) && page.data.param.reqType == page.constants.permission.master) {
        page.dom.btnsReviewPass.hide();
      }
      $('#detailReject').show();
      $("#detailInspection").show();
      $(".filebox-wrap").hide();
      $("#rejectCheck").hide();
      if (_common.isNotEmpty(img.statusInspect) && page.data.param.reqType == page.constants.permission.reviewer){
        $("#wrapInspImageInfo").show();
        $("#detailReject").hide();
        $("#rootErrorCodeList input[type='checkbox']").prop("disabled", true);
        $(".check-area").hide();
        $("#detailInspection textarea").prop("disabled", true);
        if (img.statusInspect == 'OK') {
          $("#detailInspection").hide();
        }

      } else if (_common.isEmpty(img.statusInspect) && page.data.param.reqType == page.constants.permission.reviewer) {
        // $("#detailInspection").hide();
        // $("#wrapInspImageInfo").hide();
      } else if (_common.is(img.statusInspect)&& "manager/insp".includes(page.data.param.reqType)) {
      }
    } else if(img.status == page.constants.imageStatusCode.reviewed && img.statusReview == page.constants.imageStatusCode.reviewFail) {
      $('#detailReject').show();
      $(".reject-choice").hide();
      $("#detailReject button").hide();
      $(".filebox-wrap").hide();
      if (img.reviewFileUrl !=null) {
        $("#downloadOldFile").show();
      }
      $("#rejectCheck").hide();
      $("#detailReject input[type='checkbox']").prop("disabled", true);
      $("#detailReject textarea").prop("disabled", true);
    }
  } else {
    if(page.constants.isReviewer) {
      $('#detailReject').show();
      $(".filebox-wrap").hide();
      // $("#wrapInspImageInfo").hide();
    }
    $("#viewDetail_fileName").text("");
    $("#viewDetail_status").text("");
    $("#viewDetail_annotatorId").text("");
    $("#viewDetail_failCount").text("0");
    $("#viewDetail_workedDate").text("");
    $("#viewDetail_reviewedDate").text("");
    $("#viewDetail_inspectedDate").text("");
    $("#viewDetail_reviewerId").text("");
    $("#viewDetail_inspectorId").text("");
    page.data.lastSelectedImageNumber = "";
    page.dom.btnsReview.hide();
    log.error("image is not exists", "page.fn.viewDetailInfo");
  }
  if(page.data.param.reqType == page.constants.permission.master) {
    $("#wrapInspImageInfo").show();
  }
}
page.fn.viewDetailInspection = function () {
  $("#detailInspection").show();
}
page.fn.viewRejectDetail = function() {
  $('#detailReject').show();
}
page.fn.getFileStatusName = function(status, statusResult, statusInspect) {
  let name = "";
  switch (status) {
    case "open"       : name = page.message.status.open; break;
    case "assigned"   : name = page.message.status.assigned; break;
    case "worked"     : name = page.message.status.worked; break;
    case "rvassigned" : name = page.message.status.rvAssigned; break;
    case "reviewed"   :
      if(statusInspect == "OK") name = page.message.status.inspOK;
      else if(statusInspect == "NG") name = page.message.status.inspNG;
      else if(statusResult == "pass") name = page.message.status.reviewedPass;
      else if(statusResult == "fail") name = page.message.status.reviewedFail;
      break;
  }
  log.info(name, status+":"+statusResult+":"+statusInspect);
  return name;
}

page.fn.clickImage = function(workTicketId) {
  if($("#chkReviewImage_" + workTicketId).length == 1) {
    $("#chkReviewImage_" + workTicketId).prop("checked", $("#chkReviewImage_" + workTicketId).prop("checked") ? false : true);
  }
  page.fn.reCheckImageSelected();
}

page.fn.newReviewAssign = function() {
  page.fn.showLoading();
  let url = "/apis/v1/workspace/review/assign";
  if(page.constants.permission.inspector == page.data.param.reqType) {
    url = "/apis/v1/workspace/inspect/assign";
  }
  _common.ajax.asyncJSON2({
    url: url
    , param: {
      projectId: page.param.projectId
      , taskId: page.param.taskId
      , reqType: page.data.param.reqType
    }, returnFunction: function (r) {
      if(r && r.result) {
        if(r.data == -1) {
          if(page.constants.permission.inspector == page.data.param.reqType) {
            page.fn.alert(page.message.alert.fullIPAssignImage);
          } else {
            page.fn.alert(page.message.alert.fullRvAssignImage);
          }
        } else if(r.data == 0) {
          if(page.constants.permission.inspector == page.data.param.reqType) {
            page.fn.alert(page.message.alert.noMoreInspectionAssigned);
          } else {
            page.fn.alert(page.message.alert.noMoreRvassigned);

          }
        } else {
          page.data.searchCondition.pageIndex = 1;
          page.fn.search(page.data.searchCondition);
        }
      }
      page.fn.hideLoading();
    }, errorFunction : function() {
      page.fn.hideLoading();
    }
  });
}
page.fn.procAllPass = function() {
  if(confirm(page.message.confirm.allPass)) {
    page.fn.showLoading();
    _common.ajax.asyncJSON2({
      url     : "/apis/v1/workspace/review/passAll"
      , param : {
        projectId       : page.param.projectId
        , taskId    : page.param.taskId
        , reqType: page.data.param.reqType
      }, returnFunction : function(r) {
        if(r && r.result) {
          page.fn.reloadImageList();
        } else if(r && r.message == "auth") {
          page.fn.alert(page.message.alert.noHavePermission);
        } else if(r && _common.isNotEmpty(r.message)) {
          page.fn.alert(r.message);
        } else {
          page.fn.alert(page.message.alert.failOfAllPass);
        }
        page.fn.hideLoading();
      }, errorFunction : function() {
        page.fn.alert(page.message.alert.failOfAllPass);
        page.fn.hideLoading();
      }
    });
  }
}
page.fn.procReviewPass = function() {
  page.fn.restoreWindow();
  if(_common.isEmpty(page.data.lastSelectedImageNumber)) {
    page.fn.alert(page.message.alert.notSelectedImage);
    return false;
  }
  page.fn.showLoading();
  _common.ajax.asyncJSON2({
    url     : "/apis/v1/workspace/review/pass"
    , param : {
      projectId       : page.param.projectId
      , taskId    : page.param.taskId
      , workTicketId     : page.data.lastSelectedImageNumber
      , reqType: page.data.param.reqType
    }, returnFunction : function(r) {
      if(r && r.result) {
        page.fn.reloadImageList(true);
      } else if(r && r.message == "auth") {
        page.fn.alert(page.message.alert.noHavePermission);
      } else if(r && _common.isNotEmpty(r.message)) {
        page.fn.alert(r.message);
      } else {
        page.fn.alert(page.message.alert.failOfImagePass);
      }
      page.fn.hideLoading();
      page.fn.restoreWindow();
    }, errorFunction : function() {
      page.fn.alert(page.message.alert.failOfImagePass);
      page.fn.hideLoading();
      page.fn.restoreWindow();
    }
  });
}
page.fn.restoreWindow = function() {
  setTimeout(function(){
    $(window).scrollTop(0);
    page.fn.focusSelectedImage();
  }, 100);
  setTimeout(function(){
    $(window).scrollTop(0);
    page.fn.focusSelectedImage();
  }, 200);
  setTimeout(function(){
    $(window).scrollTop(0);
    page.fn.focusSelectedImage();
  }, 500);
  setTimeout(function(){
    $(window).scrollTop(0);
    page.fn.focusSelectedImage();
  }, 1000);
}
page.fn.procReviewFail = function() {
  page.fn.restoreWindow();
  let failReason = page.dom.failReason.val();
  let rejectImg = $("#uploadFile").attr("data-fileId");
  let checkFailReason = failReason.replaceAll("\n",'') ;
  if(_common.isEmpty(checkFailReason)) {
    page.fn.alert(page.message.alert.requiredFailReason);
    page.dom.failReason.val("");
    page.dom.failReason.focus();
    return false;
  } else {
    page.fn.isCheckedSaveReject(failReason, false);
  }
  let objectList = [];
  let tagList = [];
  $("input[name='rejectObject']:checked").each(function(i, o){
    objectList.push(o.value);
  });
  $("input[name='rejectTag']:checked").each(function(i, o){
    tagList.push({
      objectId : $(o).attr("objectId")
      , tagId : $(o).attr("tagId")
    });
  });
  let reviewFailData = {
    objectList : objectList
    , tagList : tagList
  };
  log.info(reviewFailData);
  page.fn.showLoading();
  // file upload 추가
  let token = $("meta[name='_csrf']").attr("content");
  let header = $("meta[name='_csrf_header']").attr("content");
  let multipart = new FormData();
  let attachFile = null;
  if ($("#uploadFile").length > 0) {
    try {
      attachFile = $("#uploadFile")[0].files;
    } catch (e) {
      log.error(e);
      alert(page.message.alert.failImgFile);
    }
  }

  if (attachFile != null) {
    if (attachFile.length >0) {
      if (!page.fn.AttachFileSizeCheck(attachFile[0].size)) {
        alert(page.message.alert.failImgFile);
        return false;
      } else {
        multipart.append('uploadType', $("#uploadType").val());
        multipart.append('uploadFile', $("#uploadFile").get(0).files[0]);
      }
    }
  }
    multipart.append('uploadType', $("#uploadType").val());
    multipart.append('projectId', page.param.projectId)
    multipart.append('taskId', page.param.taskId)
    multipart.append('reqType', page.data.param.reqType)
    multipart.append('workTicketId', page.data.lastSelectedImageNumber)
    multipart.append('reviewMessage', failReason )
    multipart.append('reviewFailData', JSON.stringify(reviewFailData))
  _common.ajax.asyncMultipart2({
      url : "/apis/v1/workspace/review/fail"
    , data : multipart
    , success : function(r) {
      if(r && r.result) {
        page.fn.reloadImageList(true);
      } else if(r && r.message == "auth") {
        page.fn.alert(page.message.alert.noHavePermission);
      } else if(r && _common.isNotEmpty(r.message)) {
        page.fn.alert(r.message);
      } else {
        page.fn.alert(page.message.alert.failOfImageFail);
      }
      page.fn.hideLoading();
      page.fn.restoreWindow();
    }, error : function() {
      page.fn.alert(page.message.alert.failOfImageFail);
      page.fn.hideLoading();
      page.fn.restoreWindow();
    }
  });
}
page.fn.procMasterComment = function() {
  page.fn.restoreWindow();
  if(_common.isEmpty(page.data.lastSelectedImageNumber)) {
    page.fn.alert(page.message.alert.notSelectedImage);
    return false;
  }
  let masterComment = $('#masterCommentContents').val();
  let checkMasterComment = masterComment.replaceAll("\n",'') ;
  if(_common.isEmpty(checkMasterComment)) {
      page.fn.alert(page.message.alert.requiredFailReason);
      page.dom.failReason.val("");
      page.dom.failReason.focus();
      return false;
  }
  page.fn.showLoading();
  _common.ajax.asyncJSON2({
    url     : "/apis/v1/workspace/master/comment"
    , param : {
      projectId             : page.param.projectId
      , taskId              : page.param.taskId
      , workTicketId        : page.data.lastSelectedImageNumber
      , reqType             : page.data.param.reqType
      , masterComment       : masterComment
      , annotatorId         : $('#viewDetail_annotatorId').text()
      , reviewerId          : $('#viewDetail_reviewerId').text()
      , inspectorId         : $('#viewDetail_inspectorId').text()
    }, returnFunction : function(r) {
      if(r && r.result) {
        page.fn.reloadImageList(true);
      } else if(r && r.message == "auth") {
        page.fn.alert(page.message.alert.noHavePermission);
      } else if(r && _common.isNotEmpty(r.message)) {
        page.fn.alert(r.message);
      } else {
        page.fn.alert(page.message.alert.failOfImagePass);
      }
      page.fn.hideLoading();
      page.fn.restoreWindow();
    }, errorFunction : function() {
      page.fn.alert(page.message.alert.failOfImagePass);
      page.fn.hideLoading();
      page.fn.restoreWindow();
    }
  });
}
page.fn.reloadImageList = function(isOne) {
  let showNext = isOne ? true : false;
  page.data.searchHistoryImage = page.data.lastSelectedImageNumber;

  page.fn.search(page.data.searchCondition, showNext);
}

page.fn.togoAnnotationTool = function() {
  sessionStorage.reviewSearch = JSON.stringify(page.data.searchCondition);
  let reqType = page.fn.convertReqType();
  _common.postForm("/annotation/workImage", {
    reqType         : reqType
    , projectId     : page.data.searchCondition.projectId
    , taskId    : page.data.searchCondition.taskId
    , workTicketId     : page.data.lastSelectedImageNumber
    , coProjectKey  : page.data.param.coProjectKey
    , coProjectName : page.data.param.coProjectName
    , coTaskKey     : page.data.param.coTaskKey
    , coTaskName    : page.data.param.coTaskName
    , coUserId      : page.data.param.coUserId
  }, "POST");
}

page.fn.procPassSelected = function() {
  let workTicketIdList = [];
  $("input[name='chkReviewImage']:checked").each(function(i, o){
    workTicketIdList.push(o.value);
  });
  if(workTicketIdList.length == 0) {
    page.fn.alert(page.message.alert.notSelectedImage);
  } else {
    log.info(workTicketIdList);
    page.fn.showLoading();
    _common.ajax.asyncJSON2({
      url     : "/apis/v1/workspace/review/passAll"
      , param : {
        projectId       : page.param.projectId
        , taskId    : page.param.taskId
        , workTicketIds    : workTicketIdList
        , reqType : page.data.param.reqType
      }, returnFunction : function(r) {
        if(r && r.result) {
          page.fn.reloadImageList();
        } else if(r && r.message == "auth") {
          page.fn.alert(page.message.alert.noHavePermission);
        } else if(r && _common.isNotEmpty(r.message)) {
          page.fn.alert(r.message);
        } else {
          page.fn.alert(page.message.alert.failOfImagePass);
        }
        page.fn.hideLoading();
      }, errorFunction : function() {
        page.fn.alert(page.message.alert.failOfImagePass);
        page.fn.hideLoading();
      }
    });
  }
}

page.fn.procFailSelected = function() {
  let workTicketIdList = [];
  let rejectImg = $("#uploadFileSelected").attr("data-fileId");
  $("input[name='chkReviewImage']:checked").each(function(i, o){
    workTicketIdList.push(o.value);
  });
  let message = $("#failReasonForSelected").val();
  let checkMsg = message.replaceAll("\n",'') ;
  if(_common.isEmpty(checkMsg)) {
    page.fn.alert(page.message.alert.requiredFailReason);
    $("#failReasonForSelected").val("");
    $("#failReasonForSelected").focus();
    return false;
  } else {
    page.fn.isCheckedSaveReject(message, true);
  }
  if(workTicketIdList.length == 0) {
    page.fn.alert(page.message.alert.notSelectedImage);
  } else {
    log.info(workTicketIdList);
    page.fn.showLoading();
    // file upload 추가
    let token = $("meta[name='_csrf']").attr("content");
    let header = $("meta[name='_csrf_header']").attr("content");
    let multipart = new FormData();
    let attachFile = null;
    if($("#uploadFileSelected").length > 0) {
      try {
        attachFile = $("#uploadFileSelected")[0].files;
      } catch (E) {
        log.error(E);
        alert(page.message.alert.failImgFile);
      }
    }
    if (attachFile != null) {
      if (attachFile.length >0) {
        if (!page.fn.AttachFileSizeCheck(attachFile[0].size)) {
          alert(page.message.alert.failImgFile);
          return false;
        } else {
          multipart.append('uploadFile', $("#uploadFileSelected").get(0).files[0]);
        }
      }
    }
      multipart.append('uploadType', $("#uploadTypeSelected").val());
      multipart.append('projectId', page.param.projectId)
      multipart.append('taskId', page.param.taskId)
      multipart.append('reqType', page.data.param.reqType)
      multipart.append('workTicketIds', workTicketIdList)
      multipart.append('reviewMessage', message )
    _common.ajax.asyncMultipart2({
      url : "/apis/v1/workspace/review/fail"
      , data : multipart
      , success : function(r) {
        if(r && r.result) {
          page.fn.togglePopup(".modal-fail");
          page.fn.reloadImageList();
        } else if(r && r.message == "auth") {
          page.fn.alert(page.message.alert.noHavePermission);
        } else if(r && _common.isNotEmpty(r.message)) {
          page.fn.alert(r.message);
        } else {
          page.fn.alert(page.message.alert.failOfImageFail);
        }
        page.fn.hideLoading();
      }, error : function() {
        page.fn.alert(page.message.alert.failOfImageFail);
        page.fn.hideLoading();
      }
    });
  }
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
    if(target.hasClass("modal-fail")) {
      $("#failReasonForSelected").val("");
      $("#ngReasonForSelected").val("");
      $("#uploadFileSelected").val("");
      $("#uploadFileSelected").attr("data-fileId","");
      $("#showUploadFileSelected").hide();
      $("#deleteFileSelected").hide();
      $("#uploadFileNameSelected").val(page.message.noSelectFailImg);
      if ($("#rootErrorCodeList input[type='checkbox']").length == 0) {
        $("#errorcodeSelect").hide();
      }
    } else if(target.hasClass("modal-configure")) {
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
  if(page.constants.config.opacityType == "individual") {
    $("#style_config_opacity").html("svg rect, svg polygon, svg rect, svg circle {fill-opacity: " + page.data.config.opacity / 100 + " !important}");
  } else {
    $("#style_config_opacity").html("svg rect, svg polygon, svg rect, svg circle {fill-opacity: 1 !important; stroke-width: 0px !important;} .img-area svg, #svgZoomer { opacity: " + page.data.config.opacity / 100 + " }");
  }
  $("#style_keypoint_dash").html("polyline.dash {stroke-dasharray: "+page.data.config.opacity/10+" 2%;}");
}
page.fn.setViewBorder = function (border) {
  $("#txtBorder").text(border);
  $("#root").removeClass("border_"+page.data.config.border);
  page.data.config.border = border * 100;
  $("#root").addClass("border_"+page.data.config.border);
  _common.cookie.set(page.constants.cookieKeys.border, border);
  $("#style_config_border").html("svg rect, svg polygon, svg rect, svg circle {stroke-width: "+page.data.config.border/100+"}");
}
page.fn.setViewPoint = function (point) {
  $("#txtPoint").text(point);
  $("#root").removeClass("point_"+(page.data.config.point));
  page.data.config.point = (point*100);
  $("#root").addClass("point_"+page.data.config.point);
  _common.cookie.set(page.constants.cookieKeys.point, point);
  $("#style_config_border").html("svg circle {r: "+page.data.config.point/100+"px;}");
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

  $("#style_config_brightness").html("#imgZoomer {filter: brightness("+brightness+"%) contrast("+contrast+"%)}");
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
  } else if(type == "tagSize") {
    $("#sliderTagSize").slider("value", 20);
    page.fn.setTagSize(20);
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

page.fn.nextInspObjectHighlight = (function() {

  let currentIndex = 0;
  let blinkInterval = null;
  let timeoutHandle = null;
  let lastHighlightedElements = [];
  let lastHighlightedLi = null;

  return function() {
    const objectList = page.data.currentImage.objectList;
    if (!objectList || objectList.length === 0) return;

    // Reset index if out of range
    if (currentIndex >= objectList.length) {
      currentIndex = 0;
    }

    // Clear previous SVG highlight blink
    if (blinkInterval) {
      clearInterval(blinkInterval);
      blinkInterval = null;
    }
    if (timeoutHandle) {
      clearTimeout(timeoutHandle);
      timeoutHandle = null;
    }

    // Remove old SVG highlight
    if (lastHighlightedElements.length > 0) {
      lastHighlightedElements.forEach(element => {
        $(element).css({
          "transition": "stroke 0.3s, stroke-width 0.3s, opacity 0.3s",
          "stroke": $(element).data("original-color") || "none",
          "stroke-width": page.data.config.border / 100,
          "opacity": "1"
        });
      });
      lastHighlightedElements = [];
    }

    // Remove highlight from previous LI
    if (lastHighlightedLi) {
      lastHighlightedLi.removeClass("li-highlight");
      lastHighlightedLi = null;
    }

    // Get next object
    const object = objectList[currentIndex];
    currentIndex = (currentIndex + 1) % objectList.length;

    // Find and highlight SVG elements
    const svgElements = $("#svg_" + object.workTicketId).find(
        `rect[data-objectId='${object.objectId}'],
       polygon[data-objectId='${object.objectId}'],
       g[objectId='${object.objectId}'] polygon,
        g[id='group_${object.objectId}'] circle,
       g[objectId='${object.objectId}'] circle`
    );

    lastHighlightedElements = svgElements.toArray().map(el => $(el));
    lastHighlightedElements.forEach(el => {
      el.data("original-color", el.css("stroke"));
      el.css({
        "transition": "stroke 0.3s, stroke-width 0.3s, opacity 0.3s",
        "stroke": "yellow",
        "stroke-width": "3",
        "opacity": "1"
      });
    });

    // Blink SVG stroke
    let highlighted = true;
    blinkInterval = setInterval(() => {
      lastHighlightedElements.forEach(el => {
        el.css({
          "stroke": highlighted ? "yellow" : "none",
          "stroke-width": highlighted ? "5" : "0"
        });
      });
      highlighted = !highlighted;
    }, 300);

    timeoutHandle = setTimeout(() => {
      clearInterval(blinkInterval);
      blinkInterval = null;
      lastHighlightedElements.forEach(el => {
        el.css({
          "stroke": "yellow",
          "stroke-width": "5",
          "opacity": "1"
        });
      });
    }, 1000);

    // Highlight corresponding <li>
    const liId = `#li_inspObj_${object.objectId}`;
    const $li = $(liId);
    if ($li.length > 0) {
      $li.addClass("li-highlight");
      $li[0].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      lastHighlightedLi = $li;
    }
  };
})();
//
// page.fn.nextSvgObjectHighlight = (function() {
//   let currentIndex = 0;
//   let blinkInterval = null;
//   let lastHighlightedRect = null;
//   let lastHighlightedElements = [];
//   let timeoutHandle = null;
//
//   return function() {
//     const objectList = page.data.currentImage.objectList;
//     if (!objectList || objectList.length === 0) return;
//     // Đảm bảo currentIndex nằm trong phạm vi objectList
//     if (currentIndex >= objectList.length) {
//       currentIndex = 0;
//     }
//     // kill hiệu ứng nhấp nháy cũ nếu có
//     if (blinkInterval) {
//       clearInterval(blinkInterval);
//       blinkInterval = null;
//     }
//     if (timeoutHandle) {
//       clearTimeout(timeoutHandle);
//       timeoutHandle = null;
//     }
//     //bỏ highlight object cu với hiệu ứng fade-out
//     if(lastHighlightedElements.length > 0) {
//       lastHighlightedElements.forEach(element => {
//         $(element).css({
//           "transition": "stroke 0.3s, stroke-width 0.3s, opacity 0.3s",
//           "stroke": $(element).data("original-color") || "none",
//           "stroke-width": page.data.config.border / 100,
//           "opacity" : "1"
//         });
//       });
//       lastHighlightedElements = [];
//     }
// // Bỏ highlight object cũ với hiệu ứng fade-out
// //     if (lastHighlightedRect) {
// //       lastHighlightedRect.css({
// //         "transition": "stroke 0.3s, stroke-width 0.3s, opacity 0.3s",
// //         "stroke" : objectList[currentIndex-1]?.color || "yellow",
// //         "stroke-width": page.data.config.border / 100,
// //       });
// //       setTimeout(() => {
// //         lastHighlightedRect.css("opacity", "1");
// //         lastHighlightedRect.css("stroke-width", "");
// //       }, 300);
// //       lastHighlightedRect = null;
// //     }
//
//     //tìm object và svg elements cần highlight
//     const object = objectList[currentIndex];
//     currentIndex = (currentIndex +1 ) % objectList.length;
//
//     const svgElements = $("#svg_" + object.workTicketId).find(
//         `rect[data-objectId='${object.objectId}'],
//        polygon[data-objectId='${object.objectId}'],
//        g[objectId='${object.objectId}'] polygon,
//        g[objectId='${object.objectId}'] circle`
//     );
//
//     if (svgElements.length === 0) {
//       console.warn("Không tìm thấy rect với objectId:", object.objectId);
//       return;
//     }
//
//     lastHighlightedElements = svgElements.toArray().map(element => $(element));
//     lastHighlightedElements.forEach((element) => {
//       element.data("original-color", element.css("stroke")); //save the original color
//       element.css({
//         "transition": "stroke 0.3s, stroke-width 0.3s, opacity 0.3s",
//         "stroke": "yellow",
//         "stroke-width": "3",
//         "opacity": "1"
//       })
//     })
//
//
//     let highlighted = true;
//     blinkInterval = setInterval(() => {
//       lastHighlightedElements.forEach((element) => {
//         element.css({
//           "stroke": highlighted ? "yellow" : "none",
//           "stroke-width": highlighted ? "5" : "0"
//         });
//       });
//       highlighted = !highlighted;
//     }, 300)
//     // Tắt nhấp nháy sau 1 giây, giữ viền vàng
//     timeoutHandle = setTimeout(() => {
//       clearInterval(blinkInterval);
//       blinkInterval = null;
//       lastHighlightedElements.forEach((element) => {
//         element.css({
//           "stroke": "yellow",
//           "stroke-width": "5",
//           "opacity": "1"
//         });
//       });
//     }, 1000);
//   };
// })();

page.fn.showComment = function(containerSelector = 'body') {
  //toggle
  if(page.dom.btnShowComment.hasClass("on")) {
    page.dom.btnShowComment.removeClass("on");
  } else {
    page.dom.btnShowComment.addClass("on");
  }

  // Lấy container cha (mặc định là body nếu không chỉ định)
  const container = document.querySelector(containerSelector) || document.body;

  // Kiểm tra nếu popup đã tồn tại
  if (document.getElementById("commentPopup")) {
    // document.getElementById("commentPopup").style.display = "none";
    document.body.removeChild(document.getElementById("commentPopup"));
    return;
  }

  // Tạo popup với style đẹp hơn
  const popup = document.createElement("div");
  popup.id = "commentPopup";
  popup.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 0;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    z-index: 1000;
    width: 400px;
    max-width: 90vw;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    overflow: hidden;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
  `;

  // Nội dung popup
  popup.innerHTML = `
    <div id="popupHeader" style="
      background: #323536;
      color: white;
      padding: 15px 20px;
      font-size: 18px;
      font-weight: 600;
      cursor: move;
      user-select: none;
    ">
      <span>Add Comment</span>
      <button id="closePopupBtn" style="
        float: right;
        background: transparent;
        border: none;
        color: white;
        font-size: 16px;
        cursor: pointer;
        padding: 0 5px;
        margin-top: -5px;
      ">×</button>
    </div>
    <div style="padding: 20px;">
      <textarea id="commentText" placeholder="Write your comment here..." style="
        width: 100%;
        min-height: 120px;
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 6px;
        resize: vertical;
        font-family: inherit;
        font-size: 14px;
        transition: border 0.3s;
      "></textarea>
      <div style="
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 15px;
      ">
        <button onclick="page.fn.closeComment()" style="
          padding: 8px 16px;
          background: #f5f5f5;
          border: 1px solid #ddd;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s;
        ">Cancel</button>
        <button onclick="page.fn.submitComment()" style="
          padding: 8px 16px;
          background: #323536;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s;
        ">Submit</button>
      </div>
    </div>
  `;

  // Thêm vào DOM
  document.body.appendChild(popup);

  // Hiệu ứng fade in
  setTimeout(() => {
    popup.style.opacity = "1";
    popup.style.transform = "translate(-50%, -50%) scale(1)";
  }, 10);

  // Xử lý di chuyển popup
  const header = popup.querySelector("#popupHeader");
  let isDragging = false;
  let startX, startY, initialX, initialY;

  header.addEventListener('mousedown', function(e) {
    isDragging = true;

    // Tính toán chính xác offset từ vị trí click đến góc popup
    const rect = popup.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    startX = e.clientX;
    startY = e.clientY;
    initialX = rect.left - containerRect.left; // Tính toán vị trí tương đối trong container
    initialY = rect.top - containerRect.top;

    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    header.style.cursor = 'grabbing';
    popup.style.transition = 'none';
    popup.style.userSelect = 'none'; // Ngăn chọn text khi kéo
    e.preventDefault();
  });

  const movePopup = (e) => {
    if (!isDragging) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    // Tính toán vị trí mới tương đối trong container
    let newX = initialX + dx;
    let newY = initialY + dy;

    // Giới hạn trong phạm vi container
    const popupWidth = popup.offsetWidth;
    const popupHeight = popup.offsetHeight;

    // Giới hạn trái
    newX = Math.max(0, newX);
    // Giới hạn phải
    newX = Math.min(container.clientWidth - popupWidth, newX);
    // Giới hạn trên
    newY = Math.max(0, newY);
    // Giới hạn dưới
    newY = Math.min(container.clientHeight - popupHeight, newY);

    popup.style.left = `${newX}px`;
    popup.style.top = `${newY}px`;
    popup.style.transform = 'none';
  };

  // Sử dụng requestAnimationFrame để mượt mà
  const smoothMove = (e) => {
    requestAnimationFrame(() => movePopup(e));
  };

  document.addEventListener('mousemove', smoothMove);

  document.addEventListener('mouseup', () => {
    if (!isDragging) return;

    isDragging = false;
    header.style.cursor = 'move';
    popup.style.userSelect = 'auto';

    // Kích hoạt lại transition khi kết thúc kéo
    setTimeout(() => {
      popup.style.transition = 'transform 0.2s ease-out';
    }, 10);
  });

  // Nút đóng popup
  popup.querySelector("#closePopupBtn").addEventListener('click', page.fn.closeComment);
};

page.fn.closeComment = function() {
  const popup = document.getElementById("commentPopup");
  if (popup) {
    popup.style.opacity = "0";
    popup.style.transform = "translate(-50%, -50%) scale(0.9)";
    setTimeout(() => {
      document.body.removeChild(popup);
      page.dom.btnShowComment.removeClass("on");
    }, 300);
  }
};

page.fn.submitComment = function () {
  const text = document.getElementById("commentText").value.trim();
  if (text) {
    console.log("Comment submitted:", text);
    //hidden
    let fileName = page.data.currentImage.originalFileName;
      let data = new Object();
      data.contents = text;
      data.orgnFileName = fileName;
      let param = {
        url : "/annotate/saveComment"
        , param : data
        , returnFunction : function(rev){
          if (rev.result) {
            page.imageCommentMap.set(fileName, [{
              content: text,
              register_datetime: new Date().toISOString()
            }]);
            page.fn.renderComment(fileName);
          } else {
            console.log('Failed to save comment');
          }
        }
      };
      _common.ajax.asyncJSON2(param);
  }
  page.fn.closeComment();
};

page.fn.renderComment = function(fileName) {
  const commentContainer = $("#viewDetail_comment");
  commentContainer.empty();
  const comment = page.imageCommentMap.get(fileName)?.[0];
  if(comment.length == 0) {
    commentContainer.text("")
    return;
  }
  if(comment){
    commentContainer.html(`
      <div>
        <p>${comment.content}</p>
        <p style="font-style: italic; font-size: 12px; color: gray;">
        ${new Date(comment.register_datetime).toLocaleDateString()}
        </p>
      </div>
    `)
  }

}


page.fn.convertReqType = function() {
  let reqType = page.constants.permission.reviewer;
  if("review/reviewer".includes(page.data.param.reqType)) {
    reqType = page.constants.permission.reviewer;
  } else if("manager/insp/inspector".includes(page.data.param.reqType)) {
    reqType = page.constants.permission.inspector;
  }else if("master".includes(page.data.param.reqType)) {
    reqType = page.constants.permission.master;
  }else if("co/client".includes(page.data.param.reqType)) {
    reqType = page.constants.permission.co;
  }
  return reqType;
}
page.fn.gotoDetailView = function() {
  sessionStorage.reviewSearch = JSON.stringify(page.data.searchCondition);
  let reqType = page.fn.convertReqType();

  _common.postForm("/annotation/workImage", {
    reqType         : reqType
    , projectId     : page.data.searchCondition.projectId
    , taskId    : page.data.searchCondition.taskId
    , workTicketId     : page.data.lastSelectedImageNumber
    , coProjectKey  : page.data.param.coProjectKey
    , coProjectName : page.data.param.coProjectName
    , coTaskKey     : page.data.param.coTaskKey
    , coTaskName    : page.data.param.coTaskName
    , coUserId      : page.data.param.coUserId
    , sort          : page.data.searchCondition.sort
  }, "POST");
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
page.fn.procInspOKSelected = function() {
  let checked = $("#root input[type='checkbox']:checked");
  if(checked.length == 0) {
    page.fn.alert(page.message.alert.notSelectedImage);
    return false;
  }
  let workTicketIdList = [];
  checked.each(function(i, o){
    workTicketIdList.push(o.value);
  });
  page.fn.showLoading();
  _common.ajax.asyncJSON2({
    url     : "/apis/v1/workspace/inspect/okAll"
    , param : {
      projectId       : page.param.projectId
      , taskId    : page.param.taskId
      , workTicketIds : workTicketIdList
    }, returnFunction : function(r) {
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
page.fn.procInspNGSelected = function() {
  let checked = $("#root input[type='checkbox']:checked");
  if(checked.length == 0) {
    page.fn.alert(page.message.alert.notSelectedImage);
    return false;
  }

  if(!confirm(page.message.confirm.ng)) {
    return false;
  }

  let workTicketIdList = [];
  checked.each(function(i, o){
    workTicketIdList.push(o.value);
  });

  let inspNGmessage = $("#ngReasonForSelected").val();
  let checkEmptyMsg = inspNGmessage.replaceAll("\n", '');
  if(_common.isEmpty(checkEmptyMsg)) {
    $("#ngReasonForSelected").val("");
    inspNGmessage = null;
  }
  if (inspNGmessage != null) {
    page.fn.isCheckedSaveInspNG($("#ngReasonForSelected").val(), true);
  }
  let errs = page.fn.getErrorCodeList("multi");
  if (inspNGmessage ==null && errs.length == 0) {
    page.fn.alert(page.message.confirmNg)
  }
  // file upload 추가
  let file = $("#uploadFile")[0].files;

  // return false;
  page.fn.showLoading();
  _common.ajax.asyncJSON2({
    url     : "/apis/v1/workspace/inspect/ng"
    , param : {
      projectId       : page.param.projectId
      , taskId    : page.param.taskId
      , workTicketIds    : workTicketIdList
      , errorCodeList : errs
      , inspectMessage : inspNGmessage
    }, returnFunction : function(r) {
      if(r && r.result) {
        page.fn.togglePopup('#modal-ng');
        page.fn.reloadImageList();
        $("#ngReasonForSelected").val("");
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
page.fn.procInspectionOK = function() {
  if(_common.isEmpty(page.data.lastSelectedImageNumber)) {
    page.fn.alert(page.message.alert.notSelectedImage);
    return false;
  }
  page.fn.showLoading();
  _common.ajax.asyncJSON2({
    url     : "/apis/v1/workspace/inspect/ok"
    , param : {
      projectId       : page.param.projectId
      , taskId    : page.param.taskId
      , workTicketId     : page.data.lastSelectedImageNumber
    }, returnFunction : function(r) {
      if(r && r.result) {
        page.fn.reloadImageList(true);
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
page.fn.procAllOK = function () {
  if(confirm(page.message.confirm.allOK)){
    page.fn.showLoading();
    _common.ajax.asyncJSON2({
      url     : "/apis/v1/workspace/inspect/okAll"
      , param : {
        projectId       : page.param.projectId
        , taskId    : page.param.taskId
      }, returnFunction : function(r) {
        if(r && r.result) {
          page.fn.reloadImageList();
        } else if(r && r.message == "auth") {
          page.fn.alert(page.message.alert.noHavePermission);
        } else if(r && _common.isNotEmpty(r.message)) {
          page.fn.alert(r.message);
        } else {
          page.fn.alert(page.message.alert.failOfAllOK);
        }
        page.fn.hideLoading();
      }, errorFunction : function() {
        page.fn.alert(page.message.alert.failOfAllOK);
        page.fn.hideLoading();
      }
    });
  }
}
page.fn.procInspectionNG = function() {
  if(_common.isEmpty(page.data.lastSelectedImageNumber)) {
    page.fn.alert(page.message.alert.notSelectedImage);
    return false;
  }
  let errs = page.fn.getErrorCodeList("single");
  /*if(errs.length == 0) {
    page.fn.alert(page.message.alert.inspNoSelectedCode);
    return false;
  }*/
  if(!confirm(page.message.confirm.ng)) {
    return false;
  }
  // insp NG message
  let inspNGmessage = $("#ngReason").val();
  let checkEmptyMsg = inspNGmessage.replaceAll("\n", '');
  if(_common.isEmpty(checkEmptyMsg)) {
    $("#ngReason").val("");
    inspNGmessage = null;
  }
  if (inspNGmessage != null) {
    page.fn.isCheckedSaveInspNG($("#ngReason").val(), false);
  }

  if (inspNGmessage ==null && errs.length == 0) {
    if(!confirm(page.message.confirmNg)) {
      return false;
    }
  }
  // return false;
  page.fn.showLoading();
  _common.ajax.asyncJSON2({
    url     : "/apis/v1/workspace/inspect/ng"
    , param : {
      projectId       : page.param.projectId
      , taskId    : page.param.taskId
      , workTicketId     : page.data.lastSelectedImageNumber
      , errorCodeList : errs
      , inspectMessage : inspNGmessage
    }, returnFunction : function(r) {
      if(r && r.result) {
        page.fn.reloadImageList(true);
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

page.fn.getErrorCodeList = function(type) {
  let errorCodeList = [];
  let id;
  if(type == "single") {
    id = "#rootErrorCodeList";
  } else {
    id = "#modal-ng"
  }
  $(id + " input[type='checkbox']:checked").each(function(i, o){
    if (o.value != "on") {
      errorCodeList.push(o.value);
    }
  });
  return errorCodeList;
}

page.fn.viewInspectionDetail = function() {
  $("#detailInspection").show();
}
page.fn.viewDataInfo = function () {
  $(".data-info-btn").toggleClass("on");
  $('.data-info').toggleClass('on');
  if ($(".data-info-btn").hasClass("on")) {
    // $(".data-info-btn").removeClass("on");
    $(".data-info.on ul").show();
  } else {
    $(".data-info.on ul").hide();
    // $(".data-info-btn").addClass("on");
  }
}
page.fn.viewHistoryInfo = function() {
  $('.data-info-btn.his').toggleClass('on');
  $('.data-his-info').toggleClass('on');
  if ($('.data-info-btn.his').hasClass('on')) {
    $('.data-his-info').show();
  } else {
    $('.data-his-info').hide()
  }
}
page.fn.viewMastercommentList = function() {
  $('.data-info-btn.cmtList').toggleClass('on');
  $('#masterCommentList').toggleClass('on');
  if ($('.data-info-btn.cmtList').hasClass('on')) {
    $('#masterCommentList').show();
  } else {
    $('#masterCommentList').hide();
  }
}
page.fn.viewHistoryData = function(historyType) {
  $('#historyData').empty();
  $('.btn-history-work').removeClass('on')
  page.data.historyType = historyType;
  let hisData = page.history;
  if (hisData.get(historyType)) {
    $('.tbl-history').show();
    $('#noneData').hide()
    hisData.get(historyType)?.forEach(function(t) {
      let registerDatetime = t.registerDatetime.split(' ');
      if (page.data.historyType == 'work') {
        $('#historyWork').addClass('on')
        t.userId = t.annotatorId;
        t.historyData = page.message.history[t.workHistoryType]
        t.workedId = '';
        t.historyCSS = t.workHistoryType;
        t.registerDate = registerDatetime[0];
        t.registertime = registerDatetime[1];
        $('#historyUser').text(page.message.history.worker)
        $('#historyStatus').text(page.message.history.status)
      } else {
        $('#historyReview').addClass('on')
        t.userId= t.reviewerId;
        t.historyData = page.message.history[t.workHistoryType];
        t.workedId = `(${t.annotatorId})`;
        t.workedIdTooltip = t.annotatorId
        t.historyCSS = t.workHistoryType;
        t.registerDate = registerDatetime[0];
        t.registertime = registerDatetime[1];
        $('#historyUser').text(page.message.history.reviewer)
        $('#historyStatus').text(page.message.history.reviewStatus)
      }
      $("#historyData").append(_common.template.parseObject('tmpl-historyList', t))
    })
  } else {
    if (page.data.historyType == 'work') {
      $('#historyWork').addClass('on')
    } else {
      $('#historyReview').addClass('on')
    }
    $('#noneData').show();
    $('.tbl-history').hide();
  }
}
page.fn.animObject = function(workTicketId, objectId) {
  page.fn.focusSelectedImage();
  $("[data-workTicketId='"+workTicketId+"'][data-objectId='"+objectId+"']")
      .fadeOut(page.fn.focusSelectedImage)
      .fadeIn(page.fn.focusSelectedImage)
      .fadeOut(page.fn.focusSelectedImage)
      .fadeIn(page.fn.focusSelectedImage)
  ;
}
page.fn.focusSelectedImage = function() {
  log.info(page.data.lastSelectedImageNumber, "page.fn.focusSelectedImage");
  $("#root").scrollTop(($("#root > li:first-child").height() + 5) * $("#img_"+page.data.lastSelectedImageNumber).parents("li").index());
  $(window).scrollTop(0);
}
/////////////////
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
    _this.toggleOpen();
  });

  this.$checkAll.on('click', function(e) {
    e.preventDefault();
    _this.onCheckAll();
  });

  this.$inputs.on('change', function(e) {
    _this.onCheckBox();
  });

  this.onCheckBox();
};

CheckboxDropdown.prototype.onCheckBox = function() {
  this.updateStatus();
};

CheckboxDropdown.prototype.updateStatus = function() {
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
  $("#loadedImageCount").text(Number.parseInt($("#loadedImageCount").text()) + 1);
}

page.fn.onErrorLoadGuideImage = function() {
  $("#popGuide_image").hide();
  if(page.data.task.taskDesc == "" || page.data.task.taskDesc == null) {
    $("#popGuide_downloadDesc").show();
  }
  $("#popGuide_downloadFotter").show();
}
page.fn.showDownloadGuideFile = function() {
  $("#popGuide_downloadFotter").show();
}

page.fn.toggleGuide = function () {
  if ($("#guide-modal").is(":visible")) {
    page.fn.hideGuide();
  } else {
    page.fn.showGuide();
  }
}
page.fn.showGuide = function () {
  if(page.data.task.isExistsGuide == true) {
    if(page.dom.popGuide.position().left == 0 && page.dom.popGuide.position().top == 0) {
      page.dom.popGuide.css("left",($(window).width() - page.dom.popGuide.width()) / 2);
      page.dom.popGuide.css("top", ($(window).height() - page.dom.popGuide.height()) / 2);
    }
    $("#guide-modal").fadeIn();
  }
}
page.fn.hideGuide = function () {
  $("#guide-modal").fadeOut();
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
  try {
    isCapture = isCapture == true ? true : false;
    if (window.addEventListener) {
      element.addEventListener(eventName, func, isCapture);
    } else if (window.attachEvent) {
      element.attachEvent("on" + eventName, func);
    } else {
      element["on" + eventName] = func;
    }
  } catch(E) {
    log.error(E, "page.fn.addEvent");
    log.error(element, "page.fn.addEvent, element");
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
    } else if (page.fn.checkPath(event, page.dom.popVcModalHandle)) {
      event.preventDefault();
      page.data.event.isMovingVcPopup = true;
      page.data.event.moveImageStartX = event.clientX;
      page.data.event.moveImageStartY = event.clientY;
      page.data.event.moveImageStartTop = page.dom.popVcModal.position().top;
      page.data.event.moveImageStartLeft = page.dom.popVcModal.position().left;
      page.dom.popVcModal.css("opacity", 0.7);
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
  else if (page.data.event.isMovingVcPopup) {
    event.preventDefault();
    page.dom.popVcModal.css("left", page.data.event.moveImageStartLeft + (event.clientX - page.data.event.moveImageStartX));
    page.dom.popVcModal.css("top", page.data.event.moveImageStartTop + (event.clientY - page.data.event.moveImageStartY));
  }

  if(page.data.zoomer.isValidZoomer) {
    let overay = page.fn.isEventOnTagName(event, "svg");
    if(overay.isOn) {
      let svg = $(overay.target);
      if(svg.prop("id").startsWith("svg_")) {
        page.data.zoomer.event = event;
        page.data.zoomer.svg = svg;
        page.fn.drawingZoomer();
      }
    } else {
      $("#popupImageZoomer").hide();
    }
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
  else if (page.data.event.isMovingVcPopup) {
    page.data.event.isMovingVcPopup = false;
    page.dom.popVcModal.css("opacity", 1);
  }
}

page.fn.rejectChoiceOnClick = function (t) {
  let target = $(t)
  let targer_ul = target.next();

  if (target.hasClass("on")){
    target.removeClass("on");
    targer_ul.removeClass("on");
  }else{
    target.addClass("on");
    targer_ul.addClass("on");
  }
}
page.fn.isCheckedSaveReject = function (rejectReason, isSelected) {
  if (rejectReason !='') {
    if (isSelected && $("#textarea-check01").prop("checked")) {
      page.fn.saveRejectReason(rejectReason);
    }else if (!isSelected && $("#textarea-check").prop("checked")){
      page.fn.saveRejectReason(rejectReason);
    }
  }
}
page.fn.saveRejectReason = function (rejectReason) {
  if (!page.data.rejectReason.includes(rejectReason)) {
    page.data.rejectReason.unshift(rejectReason);
    if (page.data.rejectReason.length >5){
      page.data.rejectReason.pop();
    }
    page.fn.setLocalForageData();
  }
}


page.fn.createLocalForageKey = function (){
  let localForageKey = page.data.param.projectId +"_" +page.data.param.taskId;
  // page.data.localforageKey = localForageKey;
  if (page.constants.permission.reviewer == page.data.param.reqType) {
    page.data.localforageKey = "review_" +localForageKey;
    page.fn.getRejectReasonToLocal();
  } else if(page.constants.permission.inspector == page.data.param.reqType) {
    page.data.localforageKey = "insp_" +localForageKey;
    page.fn.getinspNGReasonToLocal();
  }

}

page.fn.getRejectReasonToLocal = function () {
  localforage.getItem(page.data.localforageKey).then(function (value) {
    // page.data.rejectReason = value;
    if (value) {
      page.data.rejectReason = value;
      page.fn.rejectReasonTmpl();
    }
  });
}
page.fn.setLocalForageData = function () {
  if (page.constants.permission.reviewer == page.data.param.reqType) {
    if (page.data.rejectReason.length <6) {
      localforage.setItem(page.data.localforageKey, page.data.rejectReason);
      page.fn.rejectReasonTmpl();
    }
  } else if(page.constants.permission.inspector == page.data.param.reqType) {
    if (page.data.inspNGReason.length <9) {
      localforage.setItem(page.data.localforageKey, page.data.inspNGReason);
      page.fn.inspNGReasonTmpl();
    }
  }

}

page.fn.rejectReasonTmpl = function () {
  let ul = $(".reject-choice-ul");
  ul.empty();
  page.data.rejectReason.forEach(function (r) {
    ul.append(
        _common.template.parseObject("tmpl-choiceRejectMsg", {"rejectReason":r})
    )
  });
}
page.fn.removeRejectReason = function (t) {
  let target = t.parentNode;
  let innertext = $(target).attr("value");
  let index = page.data.rejectReason.indexOf(innertext);
  // target.remove();
  if (index> -1) {
    page.data.rejectReason.splice(index, 1);
    page.fn.setLocalForageData();
  }
}
page.fn.selectRejectReason = function (t) {
  log.info(t, "page.fn.selectRejectReason");
  let innertext = $(t).attr("value");
  log.info(innertext, "page.fn.selectRejectReason innertext");
  let parent = t.parentNode;
  parent = parent.parentNode;
  let textArea = $(parent).next().find("textarea");
  log.info(textArea, "page.fn.selectRejectReason textArea");
  $(textArea).val(innertext);
  $(".reject-choice").removeClass("on");
  $(".reject-choice-ul").removeClass("on");
}
page.fn.addScrollEvent = function (t) {
  let checkbox = $(t).prevUntil();
  let nowScroll = $(t).scrollTop();
  if (!checkbox.hasClass("check-area")){
    checkbox = $(t.parentNode).prev();
  }
  if (nowScroll >1) {
    $(checkbox).hide();
  } else {
    $(checkbox).show();
  }
}
page.fn.domLanguageSetting = function () {
  if(page.constants.currentLocale =='KOR'){

  }else if(page.constants.currentLocale =='ENG'){
    $(".btn-gray").addClass("lang-60");
    $("#guide-modal").css("width", "1180px");
  }else if (page.constants.currentLocale == 'VNM'){
    $(".btn-gray").addClass("lang-60");
    $("#procAllPassBtn").addClass("lang-120");
    $("#guide-modal").css("width", "1180px");
  }

}

page.fn.getinspNGReasonToLocal = function () {
  localforage.getItem(page.data.localforageKey).then(function (value) {
    // page.data.rejectReason = value;
    if (value) {
      page.data.inspNGReason = value;
      page.fn.inspNGReasonTmpl();
    }
  });
}
page.fn.isCheckedSaveInspNG = function (inspNGReason, isSelected) {
  if (inspNGReason != '') {
    if (!isSelected && $("#textarea-ngCheck").prop("checked")) {
      page.fn.saveinspNGReason(inspNGReason);
    }else if (isSelected && $("#textarea-ngCheck01").prop("checked")){
      page.fn.saveinspNGReason(inspNGReason);
    }
  }
}
page.fn.saveinspNGReason = function (inspNGReason) {
  if (!page.data.inspNGReason.includes(inspNGReason)) {
    page.data.inspNGReason.unshift(inspNGReason);
    if (page.data.inspNGReason.length >8){
      page.data.inspNGReason.pop();
    }
    page.fn.setLocalForageData();
  }
}

page.fn.inspNGReasonTmpl = function () {
  let ul = $(".reject-choice-ul");
  ul.empty();
  page.data.inspNGReason.forEach(function (r) {
    ul.append(
        _common.template.parseObject("tmpl-choiceinspNGMsg", {"inspNGReason":r})
    )
  });
}

page.fn.removeinspNGReason = function (t) {
  let target = t.parentNode;
  let innertext = $(target).attr("value");
  let index = page.data.inspNGReason.indexOf(innertext);
  // target.remove();
  if (index> -1) {
    page.data.inspNGReason.splice(index, 1);
    page.fn.setLocalForageData();
  }
}
page.fn.toggleValidationOption = function () {
  if ($("#inspectionSysType").val()== 'filterValidation') {
    // $("#forValidationCheck").show();
    page.fn.getValidationStatus();
  } else {
    $("#forValidationCheck").hide();
    $("input[name='vcOption']").prop("checked", false);
    dropList[1].onCheckBox();
  }
}
page.fn.toggleVcModal = function () {
  if ($("#vcModal").is(":visible")) {
    page.fn.hideVcModal();
  } else {
    page.fn.showVcModal();
  }
}
page.fn.showVcModal = function () {
  page.dom.popVcModal.css("left",($(window).width() - page.dom.popVcModal.width()) / 2);
  page.dom.popVcModal.css("top", ($(window).height() - page.dom.popVcModal.height()) / 2);
  $("#vcModal").fadeIn();
}
page.fn.hideVcModal = function () {
  $("#vcModal").fadeOut();
}

page.fn.getValidationStatus = function () {
  let url = "/apis/v1/workspace/getReqStatus";
  _common.ajax.asyncJSON2({
    url: url
    , param: {
      projectId: page.param.projectId
      , taskId: page.param.taskId
    }, returnFunction: function (r) {
      if (r != null && r.result ) {
        page.fn.showVCdropDown(r.data.reqStatus);
      } else {
        page.fn.showVCdropDown();
      }}
    , errorFunction : function(e) {
      log.info(e, "page.fn.getValidationStatus");
    }
  });
}

page.fn.showVCdropDown = function (status) {
  if (status != page.constants.validationStatus.executing) {
    $("#forValidationCheck").show();
  } else {
    page.fn.alert(page.message.validation.vcExecuting);
    $("#inspectionSysType").val("");
  }
}

page.fn.toggleViewPolylinePoint = function() {
  page.data.config.viewPolylinePont = $("input[name='cpViewPolylinePoint']:checked").val();
  $("#loadedImageCount").text(0)
  $("img.loadedImage").each(function(idx, img){
    page.fn.checkSuccessLoadImage($(img));
  });
}

page.fn.toggleView4pBoxPoint = function() {
  page.data.config.view4pBoxPoint = $("input[name='cpView4pBoxPoint']:checked").val();
  $("#loadedImageCount").text(0)
  $("img.loadedImage").each(function(idx, img){
    page.fn.checkSuccessLoadImage($(img));
  });
}
page.fn.toggleDefaultUrl = function() {
  page.data.config.imageServerUrl = $("input[name='imageServerUrl']:checked").val();
  _common.cookie.set(page.constants.cookieKeys.imageServerUrl, page.data.config.imageServerUrl);
  page.fn.search(page.data.searchCondition);
}

page.fn.setCircleColor = function (color) {
  // log.info(color, "page.fn.setCircleColor");
  page.data.config.color.circle = color;
  let style = "svg circle.polyline-point {stroke: " + color + ";}";
  style += " svg polygon.tag.polyline-point {fill: "+color+";}";
  $("#style_circle_color").html(style);
  _common.cookie.set(page.constants.cookieKeys.pointColor, color);
}

page.fn.setCircleColorStart = function (color) {
  // log.info(color, "page.fn.setCircleColorStart");
  page.data.config.color.circleStart = color;
  let style = "svg circle.polyline-point.point-start {stroke: " + color + ";}";
  style += " svg polygon.tag.point-start {fill: "+color+";}";
  $("#style_circle_color_start").html(style);
  _common.cookie.set(page.constants.cookieKeys.pointColorStart, color);
}

page.fn.setCircleColorEnd = function (color) {
  // log.info(color, "page.fn.setCircleColorEnd");
  page.data.config.color.circleEnd = color;
  let style = "svg circle.polyline-point.point-end {stroke: " + color + ";}";
  style += " svg polygon.tag.point-end {fill: "+color+";}";
  $("#style_circle_color_end").html(style);
  _common.cookie.set(page.constants.cookieKeys.pointColorEnd, color);
}

page.fn.stringfyObjectPointTagValues = function(tags) {
  let txt = "";
  try {
    if(tags != null && typeof(tags) == "object") {
      let tagIdList = Object.keys(tags);
      tagIdList.forEach(function(tagId){
        let constTag = page.fn.getConstantsTag(tagId);
        log.info(constTag, "page.fn.stringfyObjectPointTagValues, constTag="+tagId);
        if(constTag != null) {
          if (txt != "") {
            txt += "<br/>";
          }
          if (constTag.tagValTypeCd == page.constants.tag.tagValTypeCd.input) {
            txt += constTag.name + " : ";
            txt += tags[tagId];
          } else if (constTag.tagValTypeCd == page.constants.tag.tagValTypeCd.select) {
            for (let i = 0; i < constTag.tagSelectValueVoList.length; i++) {
              if (constTag.tagSelectValueVoList[i].value == tags[tagId]) {
                txt += constTag.name + " : ";
                txt += constTag.tagSelectValueVoList[i].name;
                break;
              }
            }
          } else {
            log.error(constTag, "page.fn.stringfyObjectPointTagValues, undefined tagValTypeCd");
          }
          log.info(txt, "page.fn.stringfyObjectPointTagValues, result");
        }
      });
    }
  } catch(E) {
    log.error(E, "page.fn.stringfyObjectPointTagValues");
  }

  return txt;
}
page.fn.getConstantsTag = function (tagId) {
  let tag = null;
  for (let i = 0; i < page.data.task.tags.length; i++) {
    if (tagId == page.data.task.tags[i].tagId) {
      tag = page.data.task.tags[i];
      break;
    }
  }
  return tag;
}

page.fn.uploadAttachFile = function (t) {
  let file = $(t)[0].files;
  let multipart = new FormData();
  if (file.length ==0) {
    return false;
  }
  if (!page.fn.AttachFileSizeCheck(file[0].size)) {
    return false;
  } else {
    multipart.append('uploadType', $("#uploadType").val());
    multipart.append('file', $(t).get(0).files[0]);
  }
  let reader = new FileReader();
  reader.onload = function (e) {
    $(t).next().attr("data-src", e.target.result);
  }
  reader.readAsDataURL($(t).get(0).files[0]);
  $(t).prev().val($(t).get(0).files[0].name);
  $(t).next().show();
  $(t).next().next().show();

}
page.fn.AttachFileSizeCheck = function (size) {
  let max = 10485760;
  if (size > max) {
    alert(page.message.alert.failImgFile);
    return false;
  } else {
    return true;
  }
}
page.fn.deleteAttachFile = function (t) {
  let uploadFile = $(t).prev().prev().attr("id");
  $(t).prev().prev().prev().val("");
  $(t).prev().attr("data-src", "");
  $(t).prev().hide();
  $(t).hide();
  let dataTransfer = new DataTransfer();
  document.querySelector('#'+ uploadFile).files = dataTransfer.files;
}

page.fn.downloadAttachFile = function (t) {
  let attachFileId = $(t).attr("data-fileId");
  if (_common.isNotEmpty(attachFileId)) {
    var filename = $(t).text();
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function () {
      var a = document.createElement('a');
      a.href = window.URL.createObjectURL(xhr.response); // xhr.response is a blob
      a.download = filename; // Set the file name.
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      delete a;
    };
    xhr.open('GET', attachFileId);
    xhr.send();
  }
}
page.fn.openTabAttachFile = function (t) {
  let uploadFileId = $(t).prev().attr("id");
  let uploadFile = $("#"+uploadFileId)[0].files;
  let dataSrc = $(t).attr("data-src");
  let img = window.open("", "_blank");
  img.document.write("<img src= '"+dataSrc+"'>");

  img.onbeforeunload = function () {
  }
}

page.fn.pasteRejectImg = function (evt) {
  let elementId = evt.path[0].id;
  let uploadFile = $("#"+elementId).next().attr("id");
  let item = evt.clipboardData.items[0];
  let dateType = evt.clipboardData.items[0].type.split('/')[0];

  if(item.kind === 'file' && dateType === 'image'){
    let base64 = item.getAsFile();
    let reader = new FileReader();
    reader.onload = function(e){
      let src = reader.result;
      let arr = src.split(',');
      let mime = arr[0].match(/:(.*?);/)[1];
      let bstr = atob(arr[1]);
      let n = bstr.length;
      let u8arr = new Uint8Array(n);

      while(n--){
        u8arr[n] = bstr.charCodeAt(n);
      }

      /* 파일명 랜덤 생성, 확장자 추출 */
      let fileName = Math.random().toString(36).substring(2,11);
      let ext = src.split(',')[0].match(/:(.*?);/)[1].split('/')[1];

      /* 파일 생성 */
      let imgFile = new File([u8arr], fileName + "." + ext, {type: mime});
      let dataTransfer = new DataTransfer();
      dataTransfer.items.add(imgFile);
      document.querySelector('#'+ uploadFile).files = dataTransfer.files;
      document.getElementById(elementId).value = dataTransfer.files[0].name;
      $("#"+elementId).next().next().attr("data-src", src);
      $("#"+elementId).next().next().show();
      $("#"+elementId).next().next().next().show();

    };
    reader.readAsDataURL(base64);

  } else {
    /* 이미지가 아닐시 제거 */
    evt.preventDefault();
  }

}

page.fn.gotoDetailViewNew = function() {
  sessionStorage.reviewSearch = JSON.stringify(page.data.searchCondition);
  let reqType = page.fn.convertReqType();

  let url = "/annotation/workImage";
  let param = {
    reqType         : reqType
    , projectId     : page.data.searchCondition.projectId
    , taskId    : page.data.searchCondition.taskId
    , workTicketId     : page.data.lastSelectedImageNumber
    , coProjectKey  : page.data.param.coProjectKey
    , coProjectName : page.data.param.coProjectName
    , coTaskKey     : page.data.param.coTaskKey
    , coTaskName    : page.data.param.coTaskName
    , coUserId      : page.data.param.coUserId
    , sort          : page.data.searchCondition.sort
  };
  let form = $("<form name='frm'></form>");
  form.attr("target", "_image_drawing_tool");
  form.attr("action", url);
  let keys = Object.keys(param);
  for(let i = 0; i < keys.length; i++) {
    form.append("<input type='hidden' name='"+keys[i]+"' value='"+param[keys[i]]+"' />");
  }
  let win = window.open("", "_image_drawing_tool");
  //log.info(form);
  $(document.body).append(form);
  form.get(0).submit();
  form.remove();
}

page.fn.downloadImageFileList = function() {
  let csv = [];
  let row = [];
  row.push("검색조건,"+JSON.stringify(page.data.searchCondition).replace("{", "").replace("}", ""));
  csv.push(row);
  csv.push(" ");
  row = [];
  row.push(
      "파일경로"
      , "파일명"
      , "현재상태"
      , "최종변경일시"
      , "작업자"
      , "작업완료일시"
      , "검수자"
      , "검수완료일시"
      , "인스펙터"
      , "인스펙션완료일시"
  );
  csv.push(row.join(","));
  page.data.imageMap.getAllDataToList().forEach(function(file){
    row = [];
    row.push(
        file.originalFilePath
        , file.originalFileName
        , page.fn.getStatusName(file)
        , page.fn.convertDateFormatForCSV(file.modifyDatetime)
        , _common.nvl(file.annotatorId, "")
        , page.fn.convertDateFormatForCSV(file.workedDatetime)
        , _common.nvl(file.reviewerId, "")
        , page.fn.convertDateFormatForCSV(file.reviewedDatetime)
        , _common.nvl(file.inspectorId, "")
        , page.fn.convertDateFormatForCSV(file.inspectedDatetime)
    );
    csv.push(row.join(","));
  });
  var today = new Date();

  let year = today.getFullYear();
  let month = ('0' + (today.getMonth() + 1)).slice(-2);
  let day = ('0' + today.getDate()).slice(-2);

  let dateString  = year + '-' + month  + '-' + day + "_";
  var hours = ('0' + today.getHours()).slice(-2);
  var minutes = ('0' + today.getMinutes()).slice(-2);
  var seconds = ('0' + today.getSeconds()).slice(-2);
  var timeString = hours + ':' + minutes  + ':' + seconds;
  page.fn.downloadCSV(csv.join("\n"), "file_list_"+dateString+timeString+".csv");
}
page.fn.convertDateFormatForCSV = function(dt) {
  let r = "";
  if (_common.isNotEmpty(dt)) {
    r = dt.split(".")[0];
  }
  return r;
}
page.fn.getStatusName = function(o) {
  let statusName = "Undefined["+o.status+"]";
  switch (o.status) {
    case 'open'         : statusName = "[Open]작업대기"; break;
    case 'assigned'     : statusName = "[Assigned]작업중"; break;
    case 'worked'       : statusName = "[Worked]작업완료"; break;
    case 'rvassigned'   : statusName = "[Review Assigned]검수중"; break;
    case 'reviewed' :
      if (o.statusReview == page.constants.imageStatusCode.reviewPass) {
        if(_common.isNotEmpty(o.statusInspect)) {
          statusName = "[Inspected]인스펙션완료("+o.statusInspect+")";
        } else {
          statusName = "[Reviewed]검수완료(PASS)";
        }
      } else if (o.statusReview == page.constants.imageStatusCode.reviewFail) {
        statusName = "[Reviewed]검수완료(FAIL)";
      }
      break;
  }
  return statusName;
}

page.fn.downloadCSV = function(csv, filename) {
  let csvFile;
  let downloadLink;

  //한글 처리를 해주기 위해 BOM 추가하기
  const BOM = "\uFEFF";
  csv = BOM + csv;

  csvFile = new Blob([csv], { type: "text/csv" });
  downloadLink = document.createElement("a");
  downloadLink.download = filename;
  downloadLink.href = window.URL.createObjectURL(csvFile);
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);
  downloadLink.click();
}

page.fn.changeOpacityStep = function(index) {
  _common.cookie.set(page.constants.cookieKeys.opacity_step[index], $("#opacity_step_"+index).val());
}

page.fn.applyOpacityStep = function(next) {
  if(page.data.opacityStep == null) {
    page.data.opacityStep = -1;
  }
  if(next == "down") {
    page.data.opacityStep -= 1;
  } else {
    page.data.opacityStep += 1;
  }
  if(page.data.opacityStep < 0) {
    page.data.opacityStep = 2;
  }else if(page.data.opacityStep > 2) {
    page.data.opacityStep = 0;
  }
  $("#sliderOpacity").slider("value", $("#opacity_step_"+page.data.opacityStep).val());
  page.fn.setViewOpacity($("#opacity_step_"+page.data.opacityStep).val());
}


page.fn.toggleRejectClassList = function(btn) {
  btn = $(btn);
  if(btn.hasClass("on")) {
    btn.removeClass("on");
    $("#wrapRejectObjectData").hide();
  } else {
    btn.addClass("on");
    $("#wrapRejectObjectData").show();
  }
}

page.fn.applyToggleClasses = function() {
  let offStyle = "";

  $("input[name='chkToggleClasses']").each(function(idx, input){
    if(!$(input).is(":checked")) {
      offStyle += _common.template.parseObject("tmpl-toggleClassStyle", {classId: input.value});
    }
  });
  $("#style_classFilter").html(offStyle);
  log.info(offStyle, "page.fn.applyToggleClasses");
}

page.fn.toggleAllClass = function(visible) {
  $("input[name='chkToggleClasses']").prop("checked", visible);
  page.fn.applyToggleClasses();
}

page.fn.toggleClassFilterHeight = function(btn) {
  btn = $(btn);
  if(btn.hasClass("on")) {
    btn.removeClass("on");
    btn.text("keyboard_arrow_up");
    $("#wrapToggleClasses").css("max-height", 300);
  } else {
    btn.addClass("on");
    btn.text("keyboard_arrow_down");
    $("#wrapToggleClasses").css("max-height", 150);
  }
}

// zoomer
page.data.zoomer = {};
page.data.zoomer.isValidZoomer = false;
page.data.zoomer.width = 400;
page.data.zoomer.height = 400;
page.data.zoomer.ratio = 2;
page.data.zoomer.workTicketId = "";
page.data.zoomer.mousePositionX = 0;
page.data.zoomer.mousePositionY = 0;
page.data.window = {width:0, height:0};
page.data.mouse = {x:0, y:0};
page.fn.isEventOnTagName = function(event, tagName) {
  let isOn = false;
  let target = null;
  if(_common.isNotEmpty(event.path)) {
    for(let i = 0; i < event.path.length; i++) {
      try {
        if (event.path[i].tagName == tagName.toLowerCase() && $(event.path[i]).is(":visible")) {
          isOn = true;
          target = event.path[i];
          break;
        }
      } catch (E) {
        log.error(E, "page.fn.isEventOnTagName");
        log.info(event.path);
      }
    }
  }
  return {isOn : isOn, target : target};
}
page.fn.toggleFunctionZoomer = function() {
  if(page.data.zoomer.isValidZoomer) {
    page.data.zoomer.isValidZoomer = false;
    page.fn.hideZoomer();
    $('svg .setTooltip').tooltip({disabled: false});
    $("#style_config_zoomer").html("");
    $("#btnToggleZoomer").removeClass("on");
  } else {
    page.data.zoomer.isValidZoomer = true;
    $('svg .setTooltip').tooltip({disabled: true});
    $("#style_config_zoomer").html(".img-area {cursor: zoom-in;}");
    $("#btnToggleZoomer").addClass("on");
  }
}
page.fn.hideZoomer = function() {
  $("#popupImageZoomer").hide();
}
page.fn.resizeZoomer = function(type) {
  if(type == "up") {
    page.data.zoomer.width += 50;
    page.data.zoomer.height += 50;
  } else {
    page.data.zoomer.width -= 50;
    page.data.zoomer.height -= 50;
  }
  $("#popupImageZoomer").width(page.data.zoomer.width).height(page.data.zoomer.height);
  page.fn.moveZoomer();
}
page.fn.drawingZoomer = function() {
  let event = page.data.zoomer.event;
  let svg = page.data.zoomer.svg;
  let workTicketId = svg.prop("id").replace("svg_", "");
  const margin = 10;
  //log.info(workTicketId, "workTicketId");
  //팝업 위치 결정
  let top = event.clientY + margin, left = event.clientX + margin;
  if(top + page.data.zoomer.height > page.data.window.height - margin) {
    top -= page.data.zoomer.height + (margin * 2);
  }
  if(left + page.data.zoomer.width > page.data.window.width - margin) {
    left -= page.data.zoomer.width + (margin * 2);
  }
  $("#popupImageZoomer").css("top", top).css("left", left).show();
  //이미지와 SVG 그리기
  if(workTicketId != page.data.zoomer.workTicketId) {
    page.data.zoomer.workTicketId = workTicketId;
    $("#imgZoomer").prop("src", $("#img_"+workTicketId).prop("src"));
  }
  //마우스 위치를 중점으로 이미지 이동
  page.data.mouse = {x : event.pageX, y : event.pageY};
  page.fn.moveZoomer();
}

page.fn.moveZoomer = function() {
  const img = $("#img_"+page.data.zoomer.workTicketId);
  const imgWidth = Number.parseInt(img.attr("data-naturalwidth"));
  const zoomer = $("#wrapZoomer");
  const offset = img.offset();
  if(offset) {
    let posX = page.data.mouse.x - offset.left, posY = page.data.mouse.y - offset.top;
    let scale = imgWidth / img.width();
    zoomer.css("top", (posY * -scale * page.data.zoomer.ratio) + (zoomer.height() / 2)).css("left", (posX * -scale * page.data.zoomer.ratio) + (zoomer.width() / 2));
  }
}
page.fn.applyZoomRatio = function() {
  log.info(page.data.zoomer.ratio, "page.data.zoomer.ratio");
  _common.cookie.set(page.constants.cookieKeys.zoomerRatio, page.data.zoomer.ratio);
  $("#wrapZoomerRatio").text("x"+page.data.zoomer.ratio.toFixed(1));
  page.fn.initZoomerImage();
  page.fn.moveZoomer();
}

page.fn.initZoomerImage = function() {
  let img = $("#imgZoomer").get(0);
  let width = img.naturalWidth;
  let height = img.naturalHeight;
  $("#imgZoomer").width(width * page.data.zoomer.ratio).height(height * page.data.zoomer.ratio);
  $("#svgZoomer").width(width * page.data.zoomer.ratio).height(height * page.data.zoomer.ratio);
  document.getElementById("svgZoomer").viewBox = "0 0 " + width + " " + height;
  $("#svgZoomer").attr("viewBox", "0 0 " + width + " " + height).html($("#svg_"+page.data.zoomer.workTicketId).html());
}


// class filter & class toggle
page.fn.toggleAllObjectView = function() {
  const btn = $("#btnToggleAllObjectView");
  if(btn.text() == page.constants.toggleAllObjectView.show) {
    btn.text(page.constants.toggleAllObjectView.hide);
    page.data.config.toggleAllObjectView = page.constants.toggleAllObjectView.hide;
  } else {
    btn.text(page.constants.toggleAllObjectView.show);
    page.data.config.toggleAllObjectView = page.constants.toggleAllObjectView.show;
  }
  page.fn.applyObjectView();
}

// page.fn.applyToggleClasses = function() {
//   page.fn.applyObjectView();
// }

page.fn.toggleAllClass = function(visible) {
  $("input[name='chkToggleClasses']").prop("checked", visible);
  page.fn.applyToggleClasses();
}

page.fn.applyObjectView = function() {
  if(page.data.config.toggleAllObjectView == page.constants.toggleAllObjectView.show) {
    let offStyle = "";
    $("input[name='chkToggleClasses']").each(function(){
      if(!$(this).is(":checked")) {
        offStyle += _common.template.parseObject("tmpl-toggleClassStyle", {classId: this.value});
      }
    });
    $("#style_classFilter").html(offStyle);
  } else {
    let offStyle = "";
    $("input[name='chkToggleClasses']").each(function(){
      offStyle += _common.template.parseObject("tmpl-toggleClassStyle", {classId: this.value});
    });
    $("#style_classFilter").html(offStyle);
  }
  let isAllChecked = true;
  $("input[name='chkToggleClasses']").each(function() {
    if (!$(this).is(":checked")) {
      $("#allToggleClasses").prop("checked", false);
      isAllChecked = false;
    }
  });
  if(isAllChecked) {
    $("#allToggleClasses").prop("checked", true);
  }
}
page.fn.toggleClassFilterPopup = function() {
  page.constants.popupZindex = 102;
  const classFilterPopup = $("#classFilterPopup");
  if (classFilterPopup.css("display") == "block") {
    classFilterPopup.fadeOut();
    $("#btnToggleClassFilterPopup").removeClass("on");
  } else {
    $(".layer-popUp-wrap[style*='z-index: " + page.constants.popupZindex + "']").css("z-index", page.constants.popupZindex - 1);
    classFilterPopup.css("z-index", page.constants.popupZindex);
    classFilterPopup.fadeIn();
    $("#btnToggleClassFilterPopup").addClass("on");
    if (classFilterPopup.position().left == -1 && classFilterPopup.position().top == -1) {
      classFilterPopup.css("top", "50px");
      classFilterPopup.css("left", $(window).width() - 560 + "px");
    }
  }
}
page.fn.togglePopupOfHotkey = function () {
  page.constants.popupZindex = 101;
  const popHotkey = $("#popHotkey");
  if (popHotkey.css("display") == "block") {
    popHotkey.fadeOut();
    $("#btnTogglePopupHotkey").removeClass("on");
  } else {
    $(".layer-popUp-wrap[style*='z-index: " + page.constants.popupZindex + "']").css("z-index", page.constants.popupZindex - 1);
    popHotkey.css("z-index", page.constants.popupZindex);
    popHotkey.fadeIn();
    $("#btnTogglePopupHotkey").addClass("on");
    if (popHotkey.position().left == -1 && popHotkey.position().top == -1) {
      popHotkey.css("top", "50px");
      popHotkey.css("left", $(window).width() - 560 + "px");
    }
  }
}

page.fn.changeTabOfHoykey = function (tab) {
  const rootHotkeySystem = $("#rootHotkeySystem");
  const rootHotkeyTask = $("#rootHotkeyTask");
  if (tab == "system") {
    $("#tab_system").addClass("on");
    $("#tab_task").removeClass("on");
    rootHotkeySystem.show();
    rootHotkeyTask.hide();
  } else {
    $("#tab_task").addClass("on");
    $("#tab_system").removeClass("on");
    rootHotkeyTask.show();
    rootHotkeySystem.hide();
  }
}

page.fn.applyToggleAllClasses = function(input) {
  if(_common.isNotEmpty(input) && $(input).prop("checked")) {
    $("input[name='chkToggleClasses']").prop("checked", true);
  } else if(_common.isNotEmpty(input) && !$(input).prop("checked")) {
    $("input[name='chkToggleClasses']").prop("checked", false);
  }
  page.fn.applyToggleClasses();
}

page.fn.refreshPage = function(){
  log.info("page.fn.refreshPage");
  sessionStorage.reviewSearch = JSON.stringify(page.data.searchCondition);
  let reqType = page.fn.convertReqType();

  _common.postForm("/annotation/reviewImage", {
    reqType         : reqType
    , projectId     : page.data.searchCondition.projectId
    , taskId    : page.data.searchCondition.taskId
    , workTicketId     : page.data.lastSelectedImageNumber
    , coProjectKey  : page.data.param.coProjectKey
    , coProjectName : page.data.param.coProjectName
    , coTaskKey     : page.data.param.coTaskKey
    , coTaskName    : page.data.param.coTaskName
    , coUserId      : page.data.param.coUserId
  }, "POST");
}

page.fn.setTagSize = function(value) {
  page.constants.tagSize = Number.parseInt(value);
  _common.cookie.set(page.constants.cookieKeys.tagSize, page.constants.tagSize);
  $("#txtTagSize").text(page.constants.tagSize);
  page.fn.applyTagSize();
}
page.fn.applyTagSize = function() {
  try {
    $("svg polygon.tag").remove();
    $("svg[data-type='pointTagGroup']").remove();
    if(page.data.imageMap != null) {
      let listImage = page.data.imageMap.getAllDataToList();
      for (let img of listImage) {
        //page.fn.drawImage($("#img_"+img.workTicketId));
        if (_common.isNotEmpty(img.objectList)) {
          img.objectList.forEach(function (object) {
            if (_common.isNotEmpty(object.tagList)) {
              object.tagList.forEach(function (tag) {
                page.fn.render.tag(tag, object.minXY.x, object.minXY.y);
              });
            }
            if(object.objectType == page.constants.drawType.polyline) {
              let loc = JSON.parse(object.objectLocation);
              let canvasSize = $("#svg_"+object.workTicketId).attr("viewBox");
              let maxHeight = 0;
              let maxWidth = 0;
              try {
                canvasSize = canvasSize.split(" ");
                maxWidth = canvasSize[2];
                maxHeight = canvasSize[3];
              } catch(E) {
                log.error(E, "page.fn.render.polyline, canvasSize");
              }
              let pIdx = 0;
              loc.forEach((function(point) {
                let cx = point[0];
                let cy = point[1];

                let hasPointTag = false;
                let data = point[3];
                if (_common.isNotEmpty(data) && _common.isNotEmpty(data.tags)) {
                  hasPointTag = true;
                }
                if (hasPointTag == true) {
                  if (_common.isNotEmpty(canvasSize)) {
                    try {
                      let pClassName = "polyline-point";
                      if (pIdx == 0) {
                        pClassName = "point-start";
                      } else if (loc.length - 1 == pIdx) {
                        pClassName = "point-end";
                      }
                      page.fn.render.tagForPoint(data.tags, cx, cy, pClassName, maxWidth, maxHeight, object.workTicketId);
                    } catch (E) {
                      log.error(E, "page.fn.render.polyline, pointTag");
                    }
                  }
                }
                pIdx++;
              }))
            }
          })
        }
        if (_common.isNotEmpty(img.tagList)) {
          img.tagList.forEach(function (tag) {
            page.fn.render.tag(tag, 5, 5);
          });
        }
      }
    }
  } catch(E) {
    log.error(E);
  }
}

page.fn.toggleOpacityType = function() {
  setTimeout(function(){
    page.constants.config.opacityType = $("input[name='opacityType']:checked").val();
    page.fn.setViewOpacity(page.data.config.opacity);
    _common.cookie.set(page.constants.cookieKeys.opacityType, page.constants.config.opacityType);
  }, 200);
}

page.fn.unConvertObjectLocation = function(object) {
  //log.info(object, "page.fn.unConvertObjectLocation");
  try {
    let objData = JSON.parse(object.objectLocation);
    if (typeof (objData.points) != "undefined") {
      object.location = objData.points;
    } else {
      object.location = objData;
    }
    object.objectData = objData;
    if (_common.isNotEmpty(object.location)) {
      for (let idx = 0; idx < object.location.length; idx++) {
        if (object.objectType == page.constants.drawType.rectangle && idx > 1) {
          break;
        } else if (object.objectType == page.constants.drawType.rectangle4p && idx > 3) {
          break;
        }
        let l = object.location[idx];
        l[0] = isNaN(Number.parseInt(l[0])) ? 0 : l[0];
        l[1] = isNaN(Number.parseInt(l[1])) ? 0 : l[1];
        if (object.objectType != page.constants.drawType.keypoint) {
          l[2] = _common.isEmpty(l[2]) ? page.fn.data.createTempKey() + "" + lpad(idx++, 5, "0") : l[2];
        }
      }
    } else {
      object.location = [];
    }
  } catch (E) {
    log.error(E, "page.fn.unConvertObjectLocation, Exception");
    log.error(object, "page.fn.unConvertObjectLocation, object");
  }
}
page.fn.render.sideBox = function(object) {
  page.fn.unConvertObjectLocation(object);
  let groupId = ""+object.objectId;
  let g = $("#"+groupId);
  if(g.length == 0) {
    g = document.createElementNS("http://www.w3.org/2000/svg", 'g');
    $(g).attr("id", groupId);
    $(g).attr("objectId", object.objectId);
    $("#svg_"+object.workTicketId).append(g);
    g = $(g);
  } else {
    g.empty();
  }
  //log.info(object.location, "page.fn.renderSideBox");
  if(object.location.length > 1) {
    let max = Math.min(object.location.length, 4);
    let path = "";
    //log.info(max, "page.fn.renderSideBox, max");
    for (let i = 1; i < max; i++) {
      try {
        if (path != "") {
          path += " ";
        }
        let p1 = object.location[i - 1];
        let p2 = object.location[i];
        path += p1[0] + "," + p1[1] + " " + p2[0] + "," + p2[1];
      } catch (E) {
        log.error(i, "page.fn.renderSideBox, make path");
      }
    }
    //log.info(path, "page.fn.renderSideBox, made path");
    if(object.location.length >= 4) {
      path += " ";
      path += object.location[0][0];
      path += ",";
      path += object.location[0][1];
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
      o.setAttribute("points", cp[0]+","+cp[1]+" "+p5[0]+","+p5[1]);
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
      path = cp1[0]+","+cp1[1]+" "+p5[0]+","+p5[1];
      path += " " + p6[0]+","+p6[1]+" "+cp2[0]+","+cp2[1];

      let o = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
      o.setAttribute("class", "draw-object object-body CLASS_" + object.classId);
      o.setAttribute("points", path);
      o.setAttribute("objectId", object.objectId);
      g.append(o);
      object.objectData.pointType = "6p";
    } else if (object.location.length == 4) {
      object.objectData.pointType = "4p";
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
  object.objectData.bbox = objectBox;

  try {
    object.objectLocation = JSON.stringify(object.objectData);
  } catch (E) {
    log.error(object);
  }
  return objectBox;
}

page.fn.render.edgeLines = function(object) {
  // let loc = page.fn.render.castLocation(JSON.parse(object.objectLocation));
  // let minXY = null;
  // if(loc != null && loc.length > 0) {
  //   let o = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
  //   o.setAttribute("class", "draw-object CLASS_" + object.classId);
  //   o.setAttribute("points", loc);
  //   o.setAttribute("title", page.fn.render.getTitle(object));
  //   o.setAttribute("data-workTicketId", object.workTicketId);
  //   o.setAttribute("data-objectId", object.objectId);
  //
  //   loc = JSON.parse(object.objectLocation);
  //   $("#svg_"+object.workTicketId).append(o);
  //   if(loc != null && loc.length > 0) {
  //     minXY = {
  //       x : 1000000000
  //       , y : 100000000
  //     };
  //     let g = document.createElementNS("http://www.w3.org/2000/svg", 'g');
  //     $("#svg_"+object.workTicketId).append(g);
  //     g = $(g);
  //     g.addClass("group_edge_points")
  //     let canvasSize = $("#svg_"+object.workTicketId).attr("viewBox");
  //     let maxHeight = 0;
  //     let maxWidth = 0;
  //     try {
  //       canvasSize = canvasSize.split(" ");
  //       maxWidth = canvasSize[2];
  //       maxHeight = canvasSize[3];
  //     } catch(E) {
  //       log.error(E, "page.fn.render.edgeLine, canvasSize");
  //     }
  //
  //     loc.forEach((function(point){
  //       let cx = point[0];
  //       let cy = point[1];
  //       minXY.x = Math.min(cx, minXY.x);
  //       minXY.y = Math.min(cy, minXY.y);
  //
  //       let c = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
  //       g.append(c);
  //       c = $(c);
  //       c.attr("cx", cx);
  //       c.attr("cy", cy);
  //       c.addClass("edge-point");
  //     }));
  //   }
  // }else{
  //   log.debug("object data is not allow, workTicketId="+object.workTicketId, "page.fn.render.edgeLine");
  // }
  // return minXY;
}

page.fn.toggleKeypointLineStyle = function() {
  setTimeout(function(){
    page.constants.config.keypointLineStyle = $("input[name='keypointLineStyle']:checked").val();
    _common.cookie.set(page.constants.cookieKeys.keypointLineStyle, page.constants.config.keypointLineStyle);
    page.fn.renderAllKeypoint();
  }, 100);
}

page.fn.renderAllKeypoint = function () {
  $(".img-area > img[loaded='true']").each(function(idx, img){
    let imageData = page.data.imageMap.get($(img).attr("data-workTicketId"));
    if(_common.isNotEmpty(imageData.objectList)) {
      imageData.objectList.forEach(function(object){
        if(object.objectType == page.constants.drawType.keypoint) {
          if (object.keypointId == null && page.data.task.keypointMap.length()==1) {
            page.data.objectKeypointNumber = page.data.task.keypointMap.keySet()[0];
          } else {
            page.data.objectKeypointNumber = object.keypointId;
          }
          page.fn.render.keypoint(object);
        }
      });
    }
  });



}