let page = window.page || {};


page.constants = {};
page.constants.messageType = {
    info: "info",
    error: "error",
    warning: "warning",
    success: "success"
};
page.constants.rulerSize = 30;
page.constants.hotkeyType = {
    defaultKey: "default"
    , tagForImage: "tagForImage"
    , classesForImage: "classesForImage"
    , tagForObject: "tagForObject"
    , tagForPoint: "tagForPoint"
    , classesForObject: "classesForObject"
};
page.constants.deletePoint = {
    polyline: 2
    , polygon: 3
    , pointGroup: 1
    , pointPolyline: 2
}

page.constants.color6PointCube = {
    front: "blue", rear: "red", side: 'green', p1P2Color: "#000000", p3Color: "yellow",
    p4Color: "blue", p5Color: "red", p6Color: "green", hiddenColor: "gray"
}
page.constants.visibility6PointCube = {
    hidden: 0,
    visible: 1,
}
page.constants.tag = {
    tagTypeCd: {
        image: "IMG"
        , object: "OBJ"
        , point: "PNT"
    }, tagValTypeCd: {
        select: "30"
        , input: "20"
    }
}
page.constants.TagValueType = {
    input: "20"
    , select: "30"
    , none: "10"
}
page.constants.drawType = {
    rectangle: "rect"
    , polygon: "polygon"
    , polyline: "polyline"
    , pointPolyline: "pointPolyline"
    , magicAI: "magicAI"
    , keypoint: "keypoint"
    , rectangle4p: "rect4p"
    , pointGroup: "points"
    , point: "point"
    , paint: "paint"
    , sideBox: "rect6p"
    , drawBevBox4: "drawBevBox4"
    , edgePoints: "edgePoints"
    , edgePointsArrange: "edgePointsArrange"
    , edgeLines: "edgeLines"
    , drawCube2D: "drawCube2D"
    , drawCube2DFront: "drawCube2DFront"
    , draw6PointCube: "draw6PointCube"
    , drawVISBox: "drawVISBox"
}
page.constants.method = {
    selectObject: "selectObject"
    , editObject: "editObject"
    , movePoint: "movePoint"
    , none: "none"
    , moveImage: "moveImage"
    , moveObject: "moveObject"
    , magicBox: "magicBox"
    , magicPin: "magicPin"
    , magicKey: "magicKey"
    , magicQ: "magicQ"
    , magicAI: "magicAI"
    , magicAIBox: "magicAIBox"
    , magicAIPolygon: "magicAIPolygon"
    , drawPolygon: "drawPolygon"
    , drawRectangle: "drawRectangle"
    , drawBevRectangle: "drawBevRectangle"
    , drawPolyline: "drawPolyline"
    , drawPointPolyline: "drawPointPolyline"
    , drawKeypoint: "drawKeypoint"
    , drawRectangle4p: "drawRectangle4p"
    , drawBevBox4: "drawBevBox4"
    , drawPointGroup: "drawPointGroup"
    , makeGroup: "makeGroup"
    , drawPoint: "drawPoint"
    , drawPaint: "drawPaint"
    , drawSideBox: "drawSideBox"
    , drawEdgePoints: "drawEdgePoints"
    , drawEdgePointsArrange: "drawEdgePointsArrange"
    , drawEdgeLines: "drawEdgeLines"
    , drawCube2D: "drawCube2D"
    , drawCube2DFront: "drawCube2DFront"
    , draw6PointCube: "draw6PointCube"
    , drawVISBox: "drawVISBox"
}
page.constants.moveImageMethod = {
    first: "f"
    , last: "l"
    , next: "n"
    , previous: "p"
}
page.constants.userSetting = {
    opacity: 50
    , border: 5
    , point: 5
    , contrast: 100
    , brightness: 100
    , fixScale: "false"
    , fixPosition: "false"
    , subtagVisible: "block"
    , subtagSize: 5
    , subtagOpacity: 0.8
    , objectFillType: "class"
    , tagValueNoneColor: "#000000"
    , objectTooltip: "off"
}
page.constants.config = {
    border: {
        max: 15, min: 0, interval: 0.25
    }, point: {
        max: 15, min: 0, interval: 0.25
    }, zoomRatio: {
        max: 20, min: 2, interval: 1
    }, defaultClass: "default"
};
page.constants.cookieKeys = {
    isViewTags: "imgExp.setting.isViewTags"
    , isViewObjectGroup: "imgExp.setting.isViewObjectGroup"
    , opacity: "imgExp.setting.object.opacity2"
    , border: "imgExp.setting.object.border2"
    , point: "imgExp.setting.object.point2"
    , pointColor: "imgExp.setting.object.point2Color"
    , pointColorStart: "imgExp.setting.object.point2ColorStart"
    , pointColorEnd: "imgExp.setting.object.point2ColorEnd"
    , pointColorSelected: "imgExp.setting.object.point2ColorSel"
    , crossHairColor: "imgExp.setting.crossHair"
    , contrast: "imgExp.setting.object.contrast2"
    , brightness: "imgExp.setting.object.brightness2"
    , confirmPass: "imgExp.setting.confirmPass"
    , imageServer: "imgRV.setting.imageServer"
    , zoomRatio: "imgRV.setting.zoomRatio"
    , fixScale: "imgRV.setting.fixScale"
    , fixPosition: "imgRV.setting.fixPosition"
    , valueScale: "imgRV.setting.valueScale"
    , valuePosition: "imgRV.setting.valuePosition"
    , posX: "imgRV.setting.posX"
    , posY: "imgRV.setting.posY"
    , subtagSize: "imgExp.setting.subtagSize"
    , subtagOpacity: "imgExp.setting.subtagOpacity"
    , subtagVisible: "imgExp.setting.subtagVisible"
    , objectFillType: "imgExp.setting.objectFillType"
    , tagValueNoneColor: "imgExp.setting.tagValueNoneColor"
    , objectTooltip: "imgExp.setting.objectTooltip"
    , alertCopyToClipboard: "imgExp.setting.alertCopyToClipboard"
    , alertCopyToClipboardAll: "imgExp.setting.alertCopyToClipboardAll"
    , alertSaveTemp: "imgExp.setting.alertSaveTemp"
    , alertImageCompleteSuccess: "imgExp.setting.alertImageCompleteSuccess"
    , imageServerUrl: "imgExp.setting.imageServerUrl"
}
page.constants.button = {
    visibility: {
        visible: "visibility"
        , invisible: "visibility_off"
    }
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
    }, hiddenValues: [0, 3]
}
// 스포츠 모델로 변경
page.constants.magicKey = {
    topLeft: [0, 1, 2, 3, 5, 7]
    , bottomLeft: [14, 12, 10]
    , topRight: [4, 6, 8, 9]
    , bottomRight: [15, 13, 11]
}
page.constants.workType = {
    annotator: "worker"
    , reviewer: "reviewer"
    , inspector: "inspector"
    , manager: "inspector"
    , owner: "owner"
    , master: "master"
    , demo: "demo"
}
page.constants.imageStatus = {
    open: "open"
    , assigned: "assigned"
    , review_assigned: "rvassigned"
    , work_worked: "worked"
    , reviewed: "reviewed"
    , pass: "pass"
    , fail: "fail"
}
page.constants.popupZindex = 101;
page.constants.fixedLength = 2;
page.constants.reqType = {
    review: "reviewer"
    , insp: "inspector"
}
page.constants.layout = {};
page.constants.layout.marginTop = 60;
page.constants.layout.marginLeft = 55;
page.constants.layout.marginRight = 300;
page.constants.layout.marginBottom = 60;
page.constants.layout.marginBorder = 8;
page.constants.objectGroup = {
    groupId: 0
    , groupName: ""
    , objectList: []
    , index: 0
    , objNumList: ""
    , countObject: 0
}
page.constants.animateTime = 400;
page.constants.gateway = {
    isMakeHistory: false
    , message: ""
    , command: {
        add: "add"
        , back: "back"
    }
}
page.constants.eraserSize = 10;

page.data = {};
page.data.countLoading = 0;
page.data.task = {};
page.data.loadTicket = {};
page.data.layout = {};
page.data.layout.undockingList = [];
page.data.event = {};
page.data.event.workFileMover = {};
page.data.event.focusInput = false;
page.data.event.workFileMover.isMoving = false;
page.data.event.isValidHotkey = true;
page.data.historyData = new HashMap();
page.data.historyDrawData = new HashMap();
page.data.extraHistoryData = new HashMap();
page.data.historyDrawDataObject = new HashMap();
page.data.rotationData = {};
page.data.userSetting = {
    opacity: 15
    , border: 20
    , point: 20
    , contrast: 100
    , brightness: 100
    , zoomRatio: 5
    , objectFillType: "class"
    , tagValueNoneColor: "#000000"
    , objectTooltip: "off"
}
page.data.rulerX = "";
page.data.rulerY = "";
page.data.userSetting = {
    opacity: 15
    , border: 20
    , point: 20
    , contrast: 100
    , brightness: 100
    , zoomRatio: 5
    , objectFillType: "class"
    , tagValueNoneColor: "#000000"
    , objectTooltip: "off"
}
page.data.drawing = {};

page.config = {};
page.config.zoom = {
    max: 100
    , min: 0.01
}
page.config.color = {
    circle: "#FC3C3C"
    , circleSelected: "#FC3C3C"
    , crossHair: "#FC3C3C"
}
let objBoxSizeJson = {}
let objBoxSizeJsonFront = {}
page.dom = {}
page.init = function () {
    document.oncontextmenu = function () {
        return false;
    };
    window.ondragstart = function () {
        return false;
    };
    window.addEventListener(`resize`, function (e) {
        page.fn.resize.checkWindowSize();
    });
    let clip = new ClipboardJS('[data-clipboard-text]');
    clip.on("success", function (e) {
        page.fn.alert(_common.template.parseMessage(page.message.copyClip, {text: e.text}));
    });
    $(document).tooltip();

    page.dom.loading = $("#div_loading");
    page.dom.ticketList = $("#rootImageList");

    page.dom.txtImageCount = $("#txtImageCount");
    page.dom.txtImageScale = $("#txtImageScale");
    page.dom.imageListPageIndex = $("#imageListPageIndex");
    page.dom.rootDrawing = $("#rootDrawing");
    page.dom.rootObjectList = $("#rootObjectList");
    page.dom.btnToggleViewObjectGroup = $("#btnToggleViewObjectGroup");
    page.dom.btnToggleViewTag = $("#btnToggleViewTag");
    page.dom.wrapImageTags = $(".wrapImageTag");
    page.dom.rootHotkeySystem = $("#rootHotkeySystem");
    page.dom.rootHotkeyTask = $("#rootHotkeyTask");
    page.dom.styleChooseObject = $("#style_chooseObject");
    page.dom.rootPopPTPoints = $("#rootPopPTPoints");
    page.dom.rootChangeClassList = $("#rootChangeClassList");
    page.dom.rootImageTagList = $("#rootImageTagList");
    page.dom.rootObjectTagList = $("#rootObjectTagList");
    page.dom.txtHistoryMsg = $("#txtHistoryMsg");
    page.dom.popControlbar = $("#popControlbar");
    page.dom.popMsgHisContents = $("#popMsgHisContents");
    page.dom.popMessageHistory = $("#popMessageHistory");
    page.dom.popObjectGroup = $("#popObjectGroup");
    page.dom.popGroupListInObject = $("#popGrpLayer");
    page.dom.popRejectAlertModal = $("#alertModal");
    page.dom.rootGroupListInObject = $("#popGroupListInObject");
    page.dom.chattingContents = $("#chattingContents");
    page.dom.popHotkey = $("#popHotkey");
    page.dom.popGuide = $("#popGuide");
    page.dom.popPointTag = $("#popPointTag");
    page.dom.popKeyPoint = $("#popKeyPointLayer");
    page.dom.popEdgePointsArrange = $("#popEdgePointsLayer");
    page.dom.changeClassModal = $("#changeClassModal");
    page.dom.changeClassModalContents = $("#changeClassModal > .modal-body");
    page.dom.pannelTitleOfOBJECT = $("#pannelTitleOfOBJECT");
    page.dom.btnVisibleAllObject = $("#btnVisibleAllObject");
    page.dom.popObjectGroupList = $("#popObjectGroupList");
    page.dom.popEdgePoints = $("#popEdgePoints");
    page.dom.confirmModal = $("#confirmModal");
    page.dom.btnImageGiveup = $("#btnImageGiveup");
    page.dom.btnImageTempSave = $("#btnImageTempSave");
    page.dom.btnReviewAssign = $("#btnReviewAssign");
    page.dom.btnImageComplete = $("#btnImageComplete");

    if (page.constants.env == "local") {
        page.dom.stat = new Stats();
        page.dom.statDom = $(page.dom.stat.dom);
        $("#footer .wrapMessage").append(page.dom.stat.dom);
        page.dom.statDom.css("position", "absolute")
            .css("top", "")
            .css("left", "")
            .css("bottom", "18px")
            .css("right", "50px");
        page.fn.animate();
    }
    page.dom.rootObjectList.sortable({
        items: "> li"
        , scroll: false
        , axis: "y"
        , stop: page.fn.data.resortingObjectList
        , containment: "parent"
        , handle: ".index"
    });
    if (page.data.task.classMap.get(page.data.task.defaultClassId) == null) {
        if (Array.isArray(page.data.task.classes) && page.data.task.classes.length > 0) {
            page.data.task.defaultClassId = page.data.task.classes[0].classId;
        } else {
            page.data.task.defaultClassId = ""; // or an appropriate default value
            log.warn("Classes array is empty or invalid when setting defaultClassId");
        }
    }

    let workTmpl = "";
    let workLayoutTemplate = "default";
    for (let i = 0; i < page.constants.ticketFileSize; i++) {
        workTmpl += _common.template.parseObject("tmpl-work-" + workLayoutTemplate, {index: i});
    }
    page.dom.rootDrawing.html(workTmpl);
    $("#workTemplateCss").prop("href", staticPrefix + "/css/tool/image/multiTemplate/" + page.constants.workTemplate + ".css");
    $(".root").on("contextmenu", function () {
        return false;
    });
    //init events
    page.fn.event.addEvent(window, "mousedown", page.fn.event.mouseDown, false);
    page.fn.event.addEvent(window, "mousemove", page.fn.event.mouseMove, false);
    page.fn.event.addEvent(window, "mouseup", page.fn.event.mouseUp, false);
    page.fn.event.addEvent(window, "wheel", page.fn.event.mouseWheel, true);
    page.fn.event.addEvent(window, "keydown", page.fn.event.keyDown, true);
    page.fn.event.addEvent(window, "keyup", page.fn.event.keyUp, true);
    page.fn.event.addEvent(window, "click", page.fn.event.ctrlClick, true);
    window.onbeforeunload = function (e) {
        page.fn.event.refreshPage();
    };

    //init config
    page.config.color.circle = _common.nvl(_common.cookie.get(page.constants.cookieKeys.pointColor), "#fff536");
    page.config.color.circleStart = _common.nvl(_common.cookie.get(page.constants.cookieKeys.pointColorStart), "#364aff");
    page.config.color.circleEnd = _common.nvl(_common.cookie.get(page.constants.cookieKeys.pointColorEnd), "#fc3c3c");
    page.config.color.circleSelected = _common.nvl(_common.cookie.get(page.constants.cookieKeys.pointColorSelected), "#fc3c3c");
    page.config.color.crossHair = _common.nvl(_common.cookie.get(page.constants.cookieKeys.crossHairColor), "#fc3c3c");
    page.data.userSetting.isViewTags = _common.nvl(_common.cookie.get(page.constants.cookieKeys.isViewTags), "false");
    page.data.userSetting.isViewObjectGroup = _common.nvl(_common.cookie.get(page.constants.cookieKeys.isViewObjectGroup), "false");
    page.data.userSetting.opacity = _common.nvl(_common.cookie.getNumber(page.constants.cookieKeys.opacity), page.constants.userSetting.opacity);
    page.data.userSetting.border = _common.nvl(_common.cookie.getNumber(page.constants.cookieKeys.border), page.constants.userSetting.border);
    page.data.userSetting.point = _common.nvl(_common.cookie.getNumber(page.constants.cookieKeys.point), page.constants.userSetting.point);
    page.data.userSetting.contrast = _common.nvl(_common.cookie.getNumber(page.constants.cookieKeys.contrast), page.constants.userSetting.contrast);
    page.data.userSetting.brightness = _common.nvl(_common.cookie.getNumber(page.constants.cookieKeys.brightness), page.constants.userSetting.brightness);
    page.data.userSetting.zoomRatio = _common.nvl(_common.cookie.getNumber(page.constants.cookieKeys.zoomRatio), page.constants.userSetting.zoomRatio);
    page.data.userSetting.fixScale = _common.nvl(_common.cookie.get(page.constants.cookieKeys.fixScale), page.constants.userSetting.fixScale);
    page.data.userSetting.fixPosition = _common.nvl(_common.cookie.get(page.constants.cookieKeys.fixPosition), page.constants.userSetting.fixPosition);
    page.data.userSetting.objectTooltip = _common.cookie.get(page.constants.cookieKeys.objectTooltip, page.constants.userSetting.objectTooltip);
    page.data.userSetting.keypointLineStyle = _common.cookie.get(page.constants.cookieKeys.keypointLineStyle, page.constants.userSetting.keypointLineStyle);
    page.data.userSetting.imageServerUrl = _common.nvl(_common.cookie.get(page.constants.cookieKeys.imageServerUrl), "default");

    page.data.userSetting.border = page.data.userSetting.border.min > page.constants.config.border.min ? page.constants.config.border.min : page.data.userSetting.border;
    page.data.userSetting.border = page.data.userSetting.border.max < page.constants.config.border.max ? page.constants.config.border.max : page.data.userSetting.border;
    page.data.userSetting.point = page.data.userSetting.point.min > page.constants.config.point.min ? page.constants.config.point.min : page.data.userSetting.point;
    page.data.userSetting.point = page.data.userSetting.point.max < page.constants.config.point.max ? page.constants.config.point.max : page.data.userSetting.point;

    if (page.data.userSetting.isViewObjectGroup == "true") {
        page.dom.btnToggleViewObjectGroup.addClass("on");
    } else if (page.data.userSetting.isViewObjectGroup == "half") {
        page.dom.btnToggleViewObjectGroup.addClass("onHalf");
    }

    $('#objectTooltipOnOff').buttonset();
    $('#defaultClass').buttonset();
    $('#defaultUrl').buttonset();
    $('#keypointLineStyle').buttonset();


    $("#wrapObjectTooltipOnOff input[name='objectTooltipOnOff'][value='" + page.data.userSetting.objectTooltip + "']").click();
    $("#wrapObjectTooltipOnOff").buttonset();
    $("#wrapDefaultClass").buttonset();
    $("#keypointLineStyle_" + page.data.userSetting.keypointLineStyle).prop("checked", true);
    $("#wrapKeypointLineStyle").buttonset();
    if (page.data.userSetting.imageServerUrl == "default") {
        $("#imageUrl_default").prop("checked", true);
    } else {
        $("#imageUrl_edge").prop("checked", true);
    }
    $("#wrapDefaultUrl").buttonset();
    page.fn.config.toggleKeypointLineStyle();
    if (page.data.userSetting.fixScale == "true") {
        $("#chkFixScale").prop("checked", true);
        if (page.data.userSetting.fixPosition == "true") {
            $("#chkFixPosition").prop("checked", true);
        }
    } else {
        $("#chkFixPosition").prop("checked", false);
    }
    if (page.data.userSetting.isViewTags == "true") {
        page.dom.btnToggleViewTag.addClass("on");
        page.dom.wrapImageTags.show();
    } else if (page.data.userSetting.isViewTags == "half") {
        page.dom.wrapImageTags.show();
        page.dom.btnToggleViewTag.addClass("onHalf");
    }
    page.fn.config.setChangedControlbar("brightness", page.data.userSetting.brightness);
    $("#sliderBrightness").slider({
        value: page.data.userSetting.brightness,
        range: "min", min: 0, max: 200, slide: function (event, ui) {
            page.fn.config.setChangedControlbar("brightness", ui.value);
        }
    });
    page.fn.config.setChangedControlbar("contrast", page.data.userSetting.contrast);
    $("#sliderContrast").slider({
        value: page.data.userSetting.contrast,
        range: "min", min: 0, max: 200, slide: function (event, ui) {
            page.fn.config.setChangedControlbar("contrast", ui.value);
        }
    });
    page.fn.config.setChangedControlbar("opacity", page.data.userSetting.opacity);
    $("#sliderOpacity").slider({
        value: page.data.userSetting.opacity,
        range: "min", min: 0, max: 100, slide: function (event, ui) {
            page.fn.config.setChangedControlbar("opacity", ui.value);
        }
    });
    $('#opacitySlider').slider({
        value: page.data.userSetting.opacity,
        range: 'min',
        min: 0,
        max: 100,
        slide: function (event, ui) {
            page.config.setChangedControlbar('opacity', ui.value);
        }
    })
    page.fn.config.setChangedControlbar("border", page.data.userSetting.border);
    $("#sliderBorder").slider({
        value: page.data.userSetting.border
        , step: page.constants.config.border.interval
        , range: "min"
        , min: page.constants.config.border.min
        , max: page.constants.config.border.max
        , slide: function (event, ui) {
            page.fn.config.setChangedControlbar("border", ui.value);
        }
    });
    $('#borderSlider').slider({
        value: page.data.userSetting.border,
        step: page.constants.config.border.interval,
        range: 'min',
        min: page.constants.config.border.min,
        max: page.constants.config.border.max,
    })
    page.fn.config.setChangedControlbar("point", page.data.userSetting.point);
    $("#sliderPoint").slider({
        value: page.data.userSetting.point
        , range: "min"
        , step: page.constants.config.point.interval
        , min: page.constants.config.point.min
        , max: page.constants.config.point.max
        , slide: function (event, ui) {
            page.fn.config.setChangedControlbar("point", ui.value);
        }
    });
    page.fn.config.setChangedControlbar("zoomRatio", page.data.userSetting.zoomRatio);
    $("#sliderZoomRatio").slider({
        value: page.data.userSetting.zoomRatio
        , range: "min"
        , step: page.constants.config.zoomRatio.interval
        , min: page.constants.config.zoomRatio.min
        , max: page.constants.config.zoomRatio.max
        , slide: function (event, ui) {
            page.fn.config.setChangedControlbar("zoomRatio", ui.value);
        }
    });
    $("#inputCircleColorStart").val(page.config.color.circleStart);
    page.fn.config.setCircleColorStart(page.config.color.circleStart);
    $("#inputCircleColorStart").minicolors({
        change: page.fn.config.setCircleColorStart
    });
    $("#inputCircleColor").val(page.config.color.circle);
    page.fn.config.setCircleColor(page.config.color.circle);
    $("#inputCircleColor").minicolors({
        change: page.fn.config.setCircleColor
    });
    $("#inputCircleColorEnd").val(page.config.color.circleEnd);
    page.fn.config.setCircleColorEnd(page.config.color.circleEnd);
    $("#inputCircleColorEnd").minicolors({
        change: page.fn.config.setCircleColorEnd
    });
    $("#inputSelectedCircleColor").val(page.config.color.circleSelected);
    page.fn.config.setSelectedCircleColor(page.config.color.circleSelected);
    $("#inputSelectedCircleColor").minicolors({
        change: page.fn.config.setSelectedCircleColor
    });
    $("#inputCrossHairColor").val(page.config.color.crossHair);
    page.fn.config.setCrossHairColor(page.config.color.crossHair);
    $("#inputCrossHairColor").minicolors({
        change: page.fn.config.setCrossHairColor
    });
    $("#inputObjectFillDefaultColor").val(page.data.userSetting.tagValueNoneColor);
    page.fn.config.setObjectFillDefaultColor(page.data.userSetting.tagValueNoneColor);
    $("#inputObjectFillDefaultColor").minicolors({
        change: page.fn.config.setObjectFillDefaultColor
    });

    for (let i = 1; i <= page.constants.ticketFileSize; i++) {
        let key = "Alt+" + i;
        page.constants.hotkeys.put(key, {
            keyCode: key
            , keyName: key
            , excuteFunction: function (event) {
                event.preventDefault();
                page.fn.data.changeFileIndex(i - 1);
            }, type: page.constants.hotkeyType.defaultKey
            , description: _common.template.parseMessage(page.message.chooseWorkFile, {index: i})
            , isVisible: true
            , isCheckPermission: false
            , isCanInput: false
        });
    }


    page.data.task.classes.forEach(function (key) {
        let hotkey = {
            keyCode: key.hotkey
            , keyName: key.hotkeyName
            , isCheckPermission: true
            , type: page.constants.hotkeyType.classesForObject
            , isVisible: true
            , description: _common.template.parseMessage(page.message.hotkeyObjectClass, {className: key.className})
            , excuteFunction: function (event) {
                if (!page.data.loadTicket.isValid) {
                    page.fn.alert(page.message.isInvalidEdit);
                    return false;
                }
                if (page.data.focusedInput == null && page.data.event.isValidHotkey) {
                    event.preventDefault();
                    page.fn.event.keyEventOfTask(key.classId, page.constants.hotkeyType.classesForObject);
                }
            }
        };
        log.debug(hotkey, "add task hotkey");
        page.fn.event.addHotkey(hotkey);
    });

    page.data.task.tags.forEach(function (t) {
        if (_common.isNotEmpty(t.hotkey)) {
            let hotkey = {
                keyCode: t.hotkey
                , keyName: t.hotkeyName
                , isCheckPermission: true
                , type: null
                , isVisible: true
                , description: ""
            };
            log.debug(hotkey, "add task hotkey");
            if (t.tagTypeCd == page.constants.tag.tagTypeCd.image) {
                hotkey.type = page.constants.hotkeyType.tagForImage;
                hotkey.excuteFunction = function (event) {
                    if (!page.data.loadTicket.isValid) {
                        page.fn.alert(page.message.isInvalidEdit);
                        return false;
                    }
                    if (page.data.focusedInput == null && page.data.event.isValidHotkey) {
                        event.preventDefault();
                        page.fn.event.keyEventOfTask(t.tagId, page.constants.hotkeyType.tagForImage);
                    }
                }
                hotkey.description = _common.template.parseMessage(page.message.hotkeyImageTag, {tagName: t.name});
            } else if (t.tagTypeCd == page.constants.tag.tagTypeCd.object) {
                hotkey.type = page.constants.hotkeyType.tagForObject;
                hotkey.excuteFunction = function (event) {
                    if (!page.data.loadTicket.isValid) {
                        page.fn.alert(page.message.isInvalidEdit);
                        return false;
                    }
                    if (page.data.focusedInput == null && page.data.event.isValidHotkey) {
                        event.preventDefault();
                        page.fn.event.keyEventOfTask(t.tagId, page.constants.hotkeyType.tagForObject);
                    }
                }
                hotkey.description = _common.template.parseMessage(page.message.hotkeyObjectTag, {tagName: t.name});
            } else if (t.tagTypeCd == page.constants.tag.tagTypeCd.point) {
                hotkey.type = page.constants.hotkeyType.tagForObject;
                hotkey.excuteFunction = function (event) {
                    if (!page.data.loadTicket.isValid) {
                        page.fn.alert(page.message.isInvalidEdit);
                        return false;
                    }
                    if (page.data.focusedInput == null && page.data.event.isValidHotkey) {
                        event.preventDefault();
                        page.fn.event.keyEventOfTask(t.tagId, page.constants.hotkeyType.tagForPoint);
                    }
                }
                hotkey.description = _common.template.parseMessage(page.message.hotkeyPointTag, {tagName: t.name});
            }
            page.fn.event.addHotkey(hotkey);
        }
    });

    let hotkeySet = page.constants.hotkeys.keySet();
    for (let k of hotkeySet) {
        let key = page.constants.hotkeys.get(k);
        if (key.isVisible && _common.isNotEmpty(key.keyCode)) {
            let w = $(_common.template.parseObject("tmpl-hotkey-wrap", key));
            if (key.type == page.constants.hotkeyType.defaultKey) {
                page.dom.rootHotkeySystem.append(w);
            } else {
                page.dom.rootHotkeyTask.append(w);
            }
            let keys = key.keyName.split("+");
            let isFirst = true;
            keys.forEach(function (k) {
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
                    w.children(".hotkey").append(_common.template.parseObject("tmpl-hotkey-key", {key: k}));
                }
                isFirst = false;
            });
        }
    }

    page.data.task.tags.forEach(function (tag) {
        if (tag.tagTypeCd === page.constants.tag.tagTypeCd.point) {
            if (tag.tagValTypeCd === page.constants.tag.tagValTypeCd.input) {
                $("#rootPointTagInput").append(_common.template.parseObject("tmpl-tagListItemInput", tag));
            } else if (tag.tagValTypeCd === page.constants.tag.tagValTypeCd.select) {
                $("#rootPointTagInput").append(_common.template.parseObject("tmpl-tagListItemSelect", tag));
                if (tag.tagSelectValueVoList != null) {
                    tag.tagSelectValueVoList.forEach(function (tagValue) {
                        tagValue.title = _common.isEmpty(tagValue.title) ? tagValue.name : tagValue.title;
                        $("#selectTag_" + tag.tagId).append(_common.template.parseObject("tmpl-tagListItemSelectOption", tagValue));
                    });
                }
            }
        }
    })
    $("#rootPointTagInput li").hide();
    $("#rootPointTagInput").append(_common.template.parseObject("tmpl-popPt-noneObjectPointTag"));

    if (page.data.useMagicAI == "Y") {
        if (page.data.task.tool.includes("B.box")
            || page.data.task.tool.includes("MagicFit")
        ) {
            $("#runMagicAIBoxBtn").show();
        } else {
            $("#runMagicAIBoxBtn").remove();
        }
        if (page.data.task.tool.includes("Polygon")
            || page.data.task.tool.includes("MagicPin")
            || page.data.task.tool.includes("MagicQ")
        ) {
            $("#runMagicAIPolygonBtn").show();
        } else {
            $("#runMagicAIPolygonBtn").remove();
        }
    }

    if (page.data.task.tool.includes("Edge-Points")) {
        $("#btn_drawEdgePoints").show();
        $("#btn_drawEdgeLines").show();
    } else {
        $("#btn_drawEdgePoints").remove();
        $("#btn_drawEdgeLines").remove();
        $("#btnToggleViewEdgePointsInfo").remove();
    }

    page.data.task.tool.forEach(function (tool) {
        $("button[data-controller='" + tool + "']").removeClass("controller");
    });
    if (page.data.permissionCode != page.constants.workType.annotator) {
        $("#sortByFileName").remove();
    }
    // Always show BEV bbox button for testing (remove this condition later)
    $("button[data-controller='BEV_bbox']").removeClass("controller");

    // Also show for Image_Bev projects specifically
    if (page.data.task.workFormType === 'B') {
        $("button[data-controller='BEV_bbox']").removeClass("controller");
    }

    $("button[data-controller].controller").remove();

    if (_common.isEmpty(page.data.task.keypointMap)) {
        $("#btn_drawKeypoint").remove();
    } else {
        let idx = 1;
        page.data.task.keypoints.forEach(function (kp) {
            if (kp.magicYn == 'Y' && $("#runMagicAIKeypointBtn").is(":visible")) {
                page.dom.popKeyPoint.children("ul").append(_common.template.parseObject("tmpl-keypointList", {
                    keypointId: kp.keypointId
                    , idx: 0
                    , keypointName: kp.keypointName
                }));
            } else if (kp.magicYn == 'N') {
                page.dom.popKeyPoint.children("ul").append(_common.template.parseObject("tmpl-keypointList", {
                    keypointId: kp.keypointId
                    , idx: idx
                    , keypointName: kp.keypointName
                }));
                idx++;
            }
        });
        let size = $(".multi-keypoint-btn").length;
        if (size == 0) {
            $("#btn_drawKeypoint").remove();
        } else if (size == 2) {
            page.dom.popKeyPoint.children("ul").css("height", 40);
        } else if (size > 2 && size <= 4) {
            page.dom.popKeyPoint.children("ul").css("height", 80);
        } else if (size > 4 && size <= 6) {
            page.dom.popKeyPoint.children("ul").css("height", 120);
        } else if (size > 6 && size <= 8) {
            page.dom.popKeyPoint.children("ul").css("height", 160);
        } else if (size > 8 && size <= 10) {
            page.dom.popKeyPoint.children("ul").css("height", 200);
        }
        $(".multi-keypoint-btn").sort(function (a, b) {
            return parseInt($(a).attr("data-orderSeq")) - parseInt($(b).attr("data-orderSeq"));
        }).appendTo(page.dom.popKeyPoint.children("ul"));
    }
    page.fn.data.createLocalForageKey();
    chat.init({
        serverHost: page.constants.serverChattingApi
        , projectId: page.data.task.projectId
        , taskId: page.data.task.taskId
        , input: "inputChatMessage"
    });
    page.data.drawing.lastSelectedClass = {};
    page.data.drawing.lastSelectedClass.classId = page.data.task.defaultClassId;
    page.data.drawing.lastSelectedClass.className = page.data.task.defaultClassName;
    page.data.drawing.lastSelectedClass.classColor =
        page.data.task.classMap.get(page.data.task.defaultClassId)?.color
        ?? "red";
    page.fn.drawing.startNewDrawing(page.constants.method.moveImage);
    page.data.paging = {};


    if (page.constants.ticketFileSize === 1) {
        if ("manager/compReviewer/master/co/reviewer/inspector".includes(page.data.permissionCode)) {
            if (sessionStorage.reviewSearch == null
                || sessionStorage.reviewSearch == "undefined"
                || sessionStorage.reviewSearch == "null"
            ) {
                page.data.searchConditionByReview = {
                    filterStatus: "filter_status_rvassign"
                    , objectCount: ""
                    , sort: "orginalFileName"
                    , annotatorId: ""
                    , fileName: ""
                    , pageIndex: 1
                    , projectId: page.param.projectId
                    , taskId: page.param.taskId
                    , workTicketId: page.param.workTicketId
                    , coProjectKey: page.constants.co.coProjectKey
                    , coProjectName: page.constants.co.coProjectName
                    , coTaskKey: page.constants.co.coTaskKey
                    , coTaskName: page.constants.co.coTaskName
                    , coUserId: page.constants.co.coUserId
                }
            } else {
                page.data.searchConditionByReview = JSON.parse(sessionStorage.reviewSearch);
                page.param.pageNum = page.data.searchConditionByReview.pageIndex;
                page.data.paging.pageIndex = page.data.searchConditionByReview.pageIndex;
            }
            page.data.searchConditionByReview.reqType = page.param.reqType;
        }
    } else {
        $("#chkFixPosition").hide();
        $("#chkFixPosition").next().hide()
        $("#chkFixPosition").next().next().hide()
    }
    sessionStorage.reviewSearch = null;
    page.fn.resize.checkWindowSize();
    page.fn.data.getImageList({
        addAssignImage: true
    });

    if (_common.cookie.get(`${page.data.task.taskId}_loc`)) {
        page.data.rotationData = JSON.parse(_common.cookie.get(`${page.data.task.taskId}_loc`));
    } else {
        page.data.rotationData = {};
    }
    page.fn.initTooltip();


}
page.data.countLoading = 0;
page.fn = {};
page.fn.showLoading = function (callBy) {
    page.dom.loading.addClass("on");
    page.data.countLoading++;
    log.info(page.data.countLoading, "page.data.countLoading, " + callBy);
}
page.fn.hideLoading = function () {
    page.dom.loading.removeClass("on");
}
page.fn.onErrorLoadGuideImage = function () {
    $("#popGuide_image").hide();
    if (page.data.task.taskDescHTML == "") {
        $("#popGuide_downloadDesc").show();
    }
    $("#popGuide_downloadFotter").show();
}
page.fn.showDownloadGuideFile = function () {
    $("#popGuide_downloadFotter").show();
}

page.fn.alert = function (message) {
    let isShowModal = true;
    if (message == page.message.copyToClipboard && _common.cookie.get(page.constants.cookieKeys.alertCopyToClipboard) == "yes") {
        isShowModal = false;
    } else if (message == page.message.copyToClipboardAll && _common.cookie.get(page.constants.cookieKeys.alertCopyToClipboardAll) == "yes") {
        isShowModal = false;
    } else if (message == page.message.resultSaveTempSuccess && _common.cookie.get(page.constants.cookieKeys.alertSaveTemp) == "yes") {
        isShowModal = false;
    } else if (message == page.message.imageCompleteSuccess && _common.cookie.get(page.constants.cookieKeys.alertImageCompleteSuccess) == "yes") {
        isShowModal = false;
    }
    if (message == page.message.copyToClipboard
        || message == page.message.copyToClipboardAll
        || message == page.message.resultSaveTempSuccess
        || message == page.message.imageCompleteSuccess
    ) {
        $("#confirmAlertCheckboxWrap").show();
    } else {
        $("#confirmAlertCheckboxWrap").hide();
    }
    $("#confirmAlertCheckbox").prop("checked", false);
    $("#popAlert2Title").text("");
    $("#alertModal2Message").html(message);
    let left = (window.innerWidth / 2) - ($("#alertModal2").width() / 2);
    let height = (window.innerHeight / 2) - ($("#alertModal2").height() / 2);

    let p = $("<p class='alert fontSize_12'></p>");
    message = "[" + moment().format('YYYY-MM-DD HH:mm:ss') + "] " + message;

    page.dom.txtHistoryMsg.attr("key", "").text(message);
    p.text(message);
    page.dom.popMsgHisContents.append(p);
    page.dom.popMsgHisContents.scrollTop(page.dom.popMsgHisContents.get(0).scrollHeight);
    if (isShowModal) {
        $("#alertModal2").css("left", left).css("top", height).fadeIn();
    }
}
page.fn.hideAlert = function () {
    if ($("#confirmAlertCheckbox").prop("checked")) {
        if ($("#alertModal2Message").html() == page.message.copyToClipboard) {
            _common.cookie.set(page.constants.cookieKeys.alertCopyToClipboard, "yes");
        } else if ($("#alertModal2Message").html() == page.message.copyToClipboardAll) {
            _common.cookie.set(page.constants.cookieKeys.alertCopyToClipboardAll, "yes");
        } else if ($("#alertModal2Message").html() == page.message.resultSaveTempSuccess) {
            _common.cookie.set(page.constants.cookieKeys.alertSaveTemp, "yes");
        } else if ($("#alertModal2Message").html() == page.message.imageCompleteSuccess) {
            _common.cookie.set(page.constants.cookieKeys.alertImageCompleteSuccess, "yes");
        }
    }
    $("#alertModal2").fadeOut();
}

page.fn.resetPaging = function () {
    let idr = ((Number.parseInt(page.data.paging.pageNum) - 1) * page.data.paging.perPaging);
    let pgTxt = _common.template.parseMessage(page.message.pagingText, {
        startIndex: (idr + 1)
        , endIndex: (idr + page.data.paging.curPageLen)
        , totalCount: page.data.paging.totalCount
    });
    let pgTit = _common.template.parseMessage(page.message.pagingTooltip, {
        startIndex: (idr + 1)
        , endIndex: (idr + page.data.paging.curPageLen)
        , totalCount: page.data.paging.totalCount
    });

    page.dom.txtImageCount.text(pgTxt).attr("title", pgTit);
    page.dom.imageListPageIndex.empty();
    let max = Math.ceil(page.data.paging.totalCount / page.data.paging.perPaging);
    for (let i = 0; i < max; i++) {
        page.dom.imageListPageIndex.append("<option value='" + (i + 1) + "'>" + (i + 1) + "</option>");
    }
    page.dom.imageListPageIndex.attr("title", _common.template.parseMessage(page.message.imageListPaging, {max: max}));
    page.dom.imageListPageIndex.val(page.data.paging.pageNum);
}


page.fn.resize = {};
page.fn.resize.checkWindowSize = function () {
    let divideCnt = 1;
    if (page.constants.ticketFileSize === 4) {
        divideCnt = 2;
    } else if (page.constants.ticketFileSize === 6) {
        divideCnt = 3;
    }
    if (window.devicePixelRatio < 0.3) {
        $("#rootDrawing .rootWorkLayout").css("width", "calc((100% / " + divideCnt + ") - 7px)");
    } else if (window.devicePixelRatio < 0.4) {
        $("#rootDrawing .rootWorkLayout").css("width", "calc((100% / " + divideCnt + ") - 5px)");
    } else if (window.devicePixelRatio < 0.6) {
        $("#rootDrawing .rootWorkLayout").css("width", "calc((100% / " + divideCnt + ") - 3px)");
    } else if (window.devicePixelRatio < 0.8) {
        $("#rootDrawing .rootWorkLayout").css("width", "calc((100% / " + divideCnt + ") - 2px)");
    } else {
        $("#rootDrawing .rootWorkLayout").css("width", "calc((100% / " + divideCnt + ") - 1.5px)");
    }
}
page.fn.resize.applyScaleImage = function (image) {
    image = $(image);
    let imageWrap = image.parent();
    let imageSize = page.fn.data.getImageOriginalSize(image.attr("data-file-index"));
    let widthView = imageSize.width * imageSize.scale;
    let heightView = imageSize.height * imageSize.scale;
    let fileIndex = imageSize.index;
    imageWrap
        .width(widthView)
        .height(heightView)
    ;
    $(".ruler-vertical[data-file-index='" + fileIndex + "']").css("height", heightView);
    $(".ruler-horizontal[data-file-index='" + fileIndex + "']").css("width", widthView);
}
page.fn.resize.centerToFit = function (image) {
    image = image != null ? image : $(".drawingImage[data-file-index='" + page.data.event.currentFileIndex + "']")[0];
    image = $(image);
    let drawingArea = image.parent().parent();
    let imageWrap = image.parent();
    let widthWrap = drawingArea.width();
    let heightWrap = drawingArea.height();
    let imageSize = page.fn.data.getImageOriginalSize(image.attr("data-file-index"));
    let imageAngle = image.attr("data-file-rotation");
    // 이미지 회전 시 회전된 이미지가 중앙에 정렬될 수 있게 하기 위해
    if (imageAngle != 0) {
        imageSize = page.fn.drawing.calcRotationImageSize(imageSize, imageAngle);
    }
    let iw = imageSize.width / widthWrap;
    let ih = imageSize.height / heightWrap;
    let scale = 0;
    if (iw > ih) {
        //가로기준 축소
        scale = (drawingArea.width() - 10) / imageSize.width;
    } else {
        //세로기준 축소
        scale = (drawingArea.height() - 10) / imageSize.height;
    }
    image.attr("data-scale", scale);
    page.fn.resize.applyScaleImage(image);
    page.fn.resize.toCenter(image);
}
page.fn.resize.toImageOriginSize = function (image) {
    image = $(image);
    let wrapImageArea = image.parent();
    let root = wrapImageArea.parent();
    wrapImageArea
        .width(Number.parseInt(image.attr("data-origin-width")))
        .height(Number.parseInt(image.attr("data-origin-height")))
        .css("top", (root.height() - wrapImageArea.height()) / 2)
        .css("left", (root.width() - wrapImageArea.width()) / 2)
    ;
    page.fn.drawing.applyRulerPositionByIndex(image.attr("data-file-index"));
}
page.fn.resize.toCenter = function (image) {
    image = $(image);
    let wrapImageArea = image.parent();
    let root = wrapImageArea.parent();
    wrapImageArea
        .css("top", (root.height() - wrapImageArea.height()) / 2)
        .css("left", (root.width() - wrapImageArea.width()) / 2)
    ;
    page.fn.drawing.applyRulerPositionByIndex(image.attr("data-file-index"));
}
page.fn.resize.objectToCenter = function (objectId) {
    let image = $(".drawingImage[data-file-index='" + page.data.event.currentFileIndex + "']")[0];
    page.fn.resize.toCenter(image);
    let wrapImageArea = $(".wrapImageArea[data-file-index='" + page.data.event.currentFileIndex + "']");
    let imageSize = page.fn.data.getImageOriginalSize(page.data.event.currentFileIndex);
    let imagePosition = wrapImageArea.position();
    let canvasSize = {
        width: $("#root").width()
        , height: $("#root").height()
    };
    let object = page.fn.data.getObject(page.data.event.currentFileIndex, objectId);
    let calcX;
    let calcY;
    if (object.objectType === "point") {
        calcX = (parseInt(object.location[0][0]) - (imageSize.width / 2)) * imageSize.scale;
        calcY = (parseInt(object.location[0][1]) - (imageSize.height / 2)) * imageSize.scale;
    } else {
        calcX = ((object.objectBox.width / 2) + (object.objectBox.x - (imageSize.width / 2))) * imageSize.scale;
        calcY = ((object.objectBox.height / 2) + (object.objectBox.y - (imageSize.height / 2))) * imageSize.scale;
    }
    wrapImageArea
        .css("top", imagePosition.top - calcY)
        .css("left", imagePosition.left - calcX)
    ;
    $("svg [objectId='" + objectId + "']").fadeOut().fadeIn();
}


page.fn.event = {};
page.fn.event.addEvent = function (element, eventName, func, isCapture) {
    isCapture = isCapture === true;
    if (window.addEventListener) {
        element.addEventListener(eventName, func, isCapture);
    } else if (window.attachEvent) {
        element.attachEvent("on" + eventName, func);
    } else {
        element["on" + eventName] = func;
    }
}
page.fn.event.checkPath = function (event, targetClass, fileIndex) {
    let is = false;
    // log.info(event, "page.fn.event.checkPath, event.path");
    if (event.path != null) {
        for (let i = 0; i < event.path.length; i++) {
            if ($(event.path[i]).hasClass(targetClass) === true) {
                if (fileIndex != null) {
                    if ($(event.path[i]).attr("data-file-index") === fileIndex?.toString()) {
                        is = true;
                        break;
                    }
                } else {
                    is = true;
                    break;
                }
            }
        }
    }
    return is;
}
page.fn.event.isDrawingEvent = function (event) {
    return page.fn.event.checkPath(event, "root", page.data.event.currentFileIndex);
}
page.fn.event.addHotkey = function (hotkey) {
    let isNotExists = true;
    for (let i = 0; i < page.constants.hotkeys.length; i++) {
        try {
            if (page.constants.hotkeys[i].keyName == hotkey.keyName && hotkey.keyName !== '') {
                isNotExists = false;
                break;
            }
        } catch (E) {
            log.error(E);
            log.debug("index=" + i);
            log.error(page.constants.hotkeys[i]);
        }
    }
    if (isNotExists) {
        page.constants.hotkeys.put(hotkey.keyName, hotkey);
        page.constants.hotkeyMap.put(hotkey.keyName.toUpperCase(), hotkey);
    } else {
        let title = "";
        if (hotkey.type == page.constants.hotkeyType.tagForImage) {
            title = page.message.imageTagOfHotkeyType;
        } else if (hotkey.type == page.constants.hotkeyType.tagForObject) {
            title = page.message.objectTagOfHotkeyType;
        } else if (hotkey.type == page.constants.hotkeyType.classesForObject) {
            title = page.message.objectClassOfHotkeyType;
        }
        page.fn.alert(title + _common.template.parseMessage(page.message.notAddedHotkey, {keyName: hotkey.keyName}));
    }
}
page.fn.event.keyEventOfTask = function (tagId, type) {
    if (type == page.constants.hotkeyType.classesForObject) {
        if (_common.isEmpty(page.data.event.selectedObjectId)) {
            page.fn.alert(page.message.copyNoSelected);
        } else {
            let cls = null;
            for (let i = 0; i < page.data.task.classes.length; i++) {
                if (page.data.task.classes[i].classId == tagId) {
                    cls = page.data.task.classes[i];
                    break;
                }
            }
            if (_common.isNotEmpty(cls)) {
                page.data.event.selectChangeClassId = page.data.event.selectedObjectId;
                page.fn.data.changeClass(cls.classId, cls.className, cls.color);
            }
        }
    } else if (type == page.constants.hotkeyType.tagForImage || type == page.constants.hotkeyType.tagForObject) {
        let tag = page.fn.data.getConstantsTag(tagId);
        if (_common.isNotEmpty(tag)) {
            if (type == page.constants.hotkeyType.tagForObject && _common.isEmpty(page.data.event.selectedObjectId)) {
                page.fn.alert(page.message.copyNoSelected);
                return false;
            }
            let sel = $("#selectTag_" + tagId);
            if (sel.length === 0) {
                page.fn.alert(_common.template.parseMessage(page.message.noExistsObjectTag, {tagName: tag.name}));
                return false;
            }

            if (tag.tagValTypeCd == page.constants.tag.tagValTypeCd.input) {
                sel.focus();
            } else {
                let val = "";
                if (sel.val() == "") {
                    val = tag.tagSelectValueVoList[0].value;
                } else {
                    for (let i = 0; i < tag.tagSelectValueVoList.length; i++) {
                        if (tag.tagSelectValueVoList[i].value == sel.val()) {
                            if (tag.tagSelectValueVoList.length === (i + 1)) {
                                val = "";
                            } else {
                                val = tag.tagSelectValueVoList[i + 1].value;
                            }
                            break;
                        }
                    }
                }
                sel.val(val);
                page.data.event.isValidHotkey = false;
                page.fn.event.focusedInputBlur(sel.get(0));
            }
        }
    } else if (type == page.constants.hotkeyType.tagForPoint) {
        let tag = page.fn.data.getConstantsTag(tagId);
        if ($("#rootPopPTPoints li.on").length === 0) {
            page.fn.alert(page.message.copyNoSelected);
            return false;
        }
        let sel = $("#selectTag_" + tagId);
        if (sel.length === 0) {
            page.fn.alert(_common.template.parseMessage(page.message.noExistsObjectTag, {tagName: tag.name}));
            return false;
        }
        if (tag.tagValTypeCd == page.constants.tag.tagValTypeCd.input) {
            sel.focus();
        } else {
            let val = "";
            if (sel.val() == "") {
                val = tag.tagSelectValueVoList[0].value;
            } else {
                for (let i = 0; i < tag.tagSelectValueVoList.length; i++) {
                    if (tag.tagSelectValueVoList[i].value == sel.val()) {
                        if (tag.tagSelectValueVoList.length === (i + 1)) {
                            val = "";
                        } else {
                            val = tag.tagSelectValueVoList[i + 1].value;
                        }
                        break;
                    }
                }
            }
            sel.val(val);
            page.data.event.isValidHotkey = false;
            page.fn.event.focusedInputBlur(sel.get(0));
        }
    } else {
        log.error("undefined hotkey");
    }
}
page.fn.event.mouseWheel = function (event) {
    try {
        const targetFileIndex = $(event.target).closest('.rootWorkFile').data('file-index');
        if (window.__BEV_MODE__ === true && targetFileIndex === 0) {
            return;
        }
    } catch(e) {}
    if (page.fn.event.isDrawingEvent(event)) {
        if (event.deltaY > 0) {
            page.fn.drawing.zoomOut(event);
        } else {
            page.fn.drawing.zoomIn(event);
        }
        if (page.data.drawing.isViewCorsshair === true) {
            page.fn.drawing.setPositionOfCrosshair(event);
        }
    } else {
        log.info("This is not image area");
    }
}
page.fn.event.mouseDownOnKeypointCircle = function (event, object) {
    if (page.data.event.selectedObjectId === object.objectId) {
        let isRightMB = false;
        event = event || window.event;
        page.data.event.isRemoverMoving = false;
        $("#removerRange").remove();
        if ("which" in event)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
            isRightMB = event.which === 3;
        else if ("button" in event)  // IE, Opera
            isRightMB = event.button == 2;

        let t = $(event.target);
        if (!isRightMB) {
            page.data.event.isResizingRadius = true;
        }
        page.data.event.resizeingRadiusIndex = Number.parseInt(t.attr("pointNum"));
        page.data.event.resizeingRadiusNum = Number.parseInt(t.attr("index"));
        page.data.event.movePointIndex = Number.parseInt(t.attr("index"));
        $(".objectSizeViewer").eq(object.fileIndex).show().text("*" + t.attr("pointNum") + " Radius : " + t.css("r"));
        $("#root circle.draw-point").removeClass("click");
        $("#C_" + object.objectId + "_" + t.attr("index")).addClass("click");
    }
}
page.fn.event.onLoadImage = function (target) {
    let t = $(target);
    t.parent().css("transform", "rotate(0deg)");
    t.attr("data-file-rotation", 0);

    let fileIndex = Number.parseInt(t.attr("data-file-index"));
    t.attr("data-origin-width", target.naturalWidth).attr("data-origin-height", target.naturalHeight);
    let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
    svg.attr("viewBox", "0 0 " + target.naturalWidth + " " + target.naturalHeight);
    if (t.attr("src").endsWith("/empty.png") || t.attr("src").endsWith("/image_loading.gif")) {
        page.data.loadTicket.isValid = false;
        page.dom.btnImageGiveup.hide();
        page.dom.btnImageTempSave.hide();
        page.dom.btnImageComplete.hide();
        page.fn.resize.toImageOriginSize(target);
        return false;
    } else {
        page.fn.drawing.initRuler(t);
        if ($("#chkFixScale").is(":checked") === false) {
            page.fn.resize.centerToFit(target);
        } else {
            if (_common.cookie.get(page.constants.cookieKeys.valueScale) == null) {
                _common.cookie.set(page.constants.cookieKeys.valueScale, '0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2');
            } else {
                let valueScale = _common.cookie.get(page.constants.cookieKeys.valueScale).split(",");
                if (valueScale.length !== 8) {
                    _common.cookie.set(page.constants.cookieKeys.valueScale, '0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2');
                }
            }
            let cookieValueScale = _common.cookie.get(page.constants.cookieKeys.valueScale).split(",");
            let scale = cookieValueScale[fileIndex];
            t.attr("data-scale", scale);
            page.fn.resize.applyScaleImage(target);
            if ($("#chkFixPosition").is(":checked") === false) {
                page.fn.resize.toCenter(target);
            } else {
                let valuePosition = _common.cookie.get(page.constants.cookieKeys.valuePosition).split(",");
                if (valuePosition != null && page.constants.ticketFileSize === 1) {
                    t.parent().css("top", parseFloat(valuePosition[0])).css("left", parseFloat(valuePosition[1]))
                    ;
                } else {
                    page.fn.resize.toCenter(target);
                }
                page.fn.drawing.applyRulerPositionByIndex(t.attr("data-file-index"));
            }
        }

        page.fn.showLoading("page.fn.data.onLoadImage, getFileData");
        let file = page.data.loadTicket.fileList[fileIndex];
        let url = "/apis/v1/workspace/annotate/get";
        if (page.data.permissionCode === page.constants.workType.reviewer) {
            url = "/apis/v1/workspace/review/get"
        } else if (page.data.permissionCode === page.constants.workType.inspector) {
            url = "/apis/v1/workspace/inspect/get"
        } else if (page.data.permissionCode === page.constants.workType.master) {
            url = "/apis/v1/workspace/master/get"
        }
        _common.ajax.asyncJSON2({
            url: url
            , param: {
                projectId: page.param.projectId
                , taskId: page.param.taskId
                , workTicketId: page.data.loadTicket.workTicketId
                , rawFileId: file.rawFileId
                , reqType: page.param.reqType
            }
            , returnFunction: function (rv) {
                try {
                    file.objectList = rv.data.objectList;
                    if (_common.isEmpty(file.objectList)) {
                        file.objectList = [];
                    }

                    if (window.__BEV_MODE__ === true && fileIndex === 0 && Array.isArray(file.objectList)) {
                        try {
                            file.objectList.forEach(function (bevObj) {
                                if (!bevObj) {
                                    return;
                                }
                                if (typeof bevObj.fileIndex === 'undefined') {
                                    bevObj.fileIndex = fileIndex;
                                }
                                if (typeof window.projectBevFromObject === 'function') {
                                    window.projectBevFromObject(bevObj);
                                }
                            });
                        } catch (_) {
                        }
                    }
                    file.tagList = rv.data.tagList;
                    file.objectGroupInfo = JSON.parse(_common.nvl(rv.data.objectGroupInfo, "[]"));
                    if (page.data.task.tool.includes("Edge-Points")) {
                        page.fn.data.setEdgePointMap(fileIndex);
                    }

                    page.fn.drawing.renderAllObject(file.fileIndex);
                    page.fn.data.setObjectGroup(fileIndex);
                    if (page.data.event.currentFileIndex === fileIndex) {
                        page.fn.data.changeFileIndex(fileIndex);
                    }
                } catch (E) {
                    log.error(E, "page.fn.data.onLoadImage, getData");
                }
                if (page.data.loadTicket.statusReview === page.constants.imageStatus.fail
                    && page.data.loadTicket.fileList.length - 1 === fileIndex) {
                    if (page.data.loadTicket.fileList[fileIndex].objectList == null) {
                        page.constants.refreshFailData = true;
                    } else {
                        page.fn.popup.makeRejectReasonPopup(page.data.loadTicket.workTicketId);
                        if (page.data.reqType === page.constants.workType.annotator) {
                            page.fn.popup.showRejectReason(page.data.loadTicket.workTicketId);
                        }
                    }
                }
                //TODO 20240323 임찬영 리뷰 fail messge 관련 오류 수정중 아래 조건 확인 해볼것
                if (page.data.loadTicket.statusInsp === "NG"
                    && page.data.loadTicket.fileList.length - 1 === fileIndex
                    && page.data.loadTicket.statusInsp != null) {
                    if (page.data.loadTicket.fileList[fileIndex].objectList == null) {
                        page.constants.refreshFailData = true;
                    } else {
                        page.fn.popup.makeNGReasonPopup(page.data.loadTicket.workTicketId);
                    }
                }
                page.fn.drawing.resetPopupTag(fileIndex, "page.fn.data.onLoadImage");

                if (page.constants.ticketFileSize !== 1) {
                    let rotationCookie = _common.cookie.get(`${page.data.task.taskId}_loc`);
                    if (rotationCookie) {
                        let rotationObject = JSON.parse(rotationCookie);
                        let fileIndex = t.data('file-index');
                        for (let index in rotationObject) {
                            if (index == fileIndex && rotationObject[index] > 0) {
                                t.attr("data-file-rotation", Number(rotationObject[index]) - 90);
                                t.parent().css("transform", `rotate(${rotationObject[index] - 90}deg)`);
                                page.fn.layout.rotateImage(fileIndex, true)
                            }
                        }
                    }
                }
                page.fn.hideLoading();

            }
        });
    }
}
page.fn.event.onErrorImageLoad = function (img) {
    if ($(img).prop("src").startsWith(f)) {
        if ($(img).attr("id") == "drawingImage") {
            alert(page.message.refreshLoadImage);
        }
        $(img).attr("server-name", "empty")
            .prop("src", "/image/tool/annImage/empty.png")
        ;
    } else if ($(img).attr("server-name") != "empty") {
        $(img).attr("server-name", "KR")
            .prop("src", page.data.imageServerURL + $(img).attr("file-path"))
        ;
    }
}
page.fn.event.mouseDown = function (event) {
    log.info(event, "page.fn.event.mouseDown");
    let target = page.fn.event.filterByClass(event, "root");
    let isRightClick = page.fn.event.isMouseRightClick(event);
    if (isRightClick) {
        if (_common.getKeyboard(event).keyCode.startsWith("alt_")) {
            if (page.data.drawing.object.objectType == 'drawCube2D') {
                //let fileIndex = page.data.loadTicket.fileIndex;
                let fileIndex = page.data.event.currentFileIndex;
                let objId_ = event.target.getAttribute('objectId');
                let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
                if (event.target.getAttribute('data-objectType') == 'drawCube2DSide') {
                    const objectJS_ = JSON.parse(objBoxSizeJson[objId_]);
                    if (objectJS_.deleted == 'main') {
                        page.fn.data.deleteObject(fileIndex, objId_);
                        return;
                    }
                    objectJS_.deleted = 'drawCube2DSide';
                    objBoxSizeJson[objId_] = JSON.stringify(objectJS_);
                    let g = svg.children("g[objectId='" + objId_ + "'][data-objectType='drawCube2D']");
                    let polygon = g.children('polygon');
                    polygon.attr('visibility', 'hidden');
                    g = svg.children("g[objectId='" + objId_ + "'][data-objectType='drawCube2DSide']");
                    g.attr('visibility', 'hidden');
                } else {
                    try {
                        const objectJS_ = JSON.parse(objBoxSizeJson[objId_]);
                        if (objectJS_.deleted == 'drawCube2DSide') {
                            page.fn.data.deleteObject(fileIndex, objId_);
                            return;
                        }
                        objectJS_.deleted = 'main';
                        objBoxSizeJson[objId_] = JSON.stringify(objectJS_);
                        let g = svg.children("g[objectId='" + objId_ + "'][data-objectType='drawCube2D']");
                        let rect = g.children('rect');
                        rect.attr('visibility', 'hidden');
                        g = svg.children("g[objectId='" + objId_ + "'][id='group_points_" + objId_ + "']");
                        //g.attr('visibility', 'hidden');
                        let circle = g.children('circle');
                        circle.attr('visibility', 'hidden');
                        if (objectJS_.direction == 'right') {
                            circle = g.children('circle[index="2"]');
                            circle.attr('visibility', 'show');
                            circle = g.children('circle[index="7"]');
                            circle.attr('visibility', 'show');
                        }
                        if (objectJS_.direction == 'left') {
                            circle = g.children('circle[index="0"]');
                            circle.attr('visibility', 'show');
                            circle = g.children('circle[index="5"]');
                            circle.attr('visibility', 'show');
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }
                return;
            }
            if (page.data.drawing.object.objectType == 'drawCube2DFront') {
                //let fileIndex = page.data.loadTicket.fileIndex;
                let fileIndex = page.data.event.currentFileIndex;
                let objId_ = event.target.getAttribute('objectId');
                let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
                if (event.target.getAttribute('data-objectType') == 'drawCube2DSideFront') {
                    const objectJS_ = JSON.parse(objBoxSizeJsonFront[objId_]);
                    if (objectJS_.deleted == 'mainFront') {
                        page.fn.data.deleteObject(fileIndex, objId_);
                        return;
                    }
                    objectJS_.deleted = 'drawCube2DSideFront';
                    objBoxSizeJsonFront[objId_] = JSON.stringify(objectJS_);
                    let g = svg.children("g[objectId='" + objId_ + "'][data-objectType='drawCube2DFront']");
                    let polygon = g.children('polygon');
                    polygon.attr('visibility', 'hidden');
                    g = svg.children("g[objectId='" + objId_ + "'][data-objectType='drawCube2DSideFront']");
                    g.attr('visibility', 'hidden');
                } else {
                    try {
                        const objectJS_ = JSON.parse(objBoxSizeJsonFront[objId_]);
                        if (objectJS_.deleted == 'drawCube2DSideFront') {
                            page.fn.data.deleteObject(fileIndex, objId_);
                            return;
                        }
                        objectJS_.deleted = 'mainFront';
                        objBoxSizeJsonFront[objId_] = JSON.stringify(objectJS_);
                        let g = svg.children("g[objectId='" + objId_ + "'][data-objectType='drawCube2DFront']");
                        let rect = g.children('rect');
                        rect.attr('visibility', 'hidden');
                        g = svg.children("g[objectId='" + objId_ + "'][id='group_points_" + objId_ + "']");
                        //g.attr('visibility', 'hidden');
                        let circle = g.children('circle');
                        circle.attr('visibility', 'hidden');
                        if (objectJS_.direction == 'right') {
                            circle = g.children('circle[index="2"]');
                            circle.attr('visibility', 'show');
                            circle = g.children('circle[index="7"]');
                            circle.attr('visibility', 'show');
                        }
                        if (objectJS_.direction == 'left') {
                            circle = g.children('circle[index="0"]');
                            circle.attr('visibility', 'show');
                            circle = g.children('circle[index="5"]');
                            circle.attr('visibility', 'show');
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }
                return;
            }
        } else {
            if (page.data.drawing.object && page.data.drawing.object.objectType == 'drawCube2D') {
                // handle move image right click
                if (target.hasTarget == true) {
                    if (!_common.getKeyboard(event).keyCode.startsWith("alt_")) {
                        let pointTarget = page.fn.event.filterByClass(event, "draw-point");
                        if (pointTarget.hasTarget && page.data.event.method != page.constants.method.editObject) {
                            page.fn.event.deletePointToObjectByEvent(page.data.drawing.object, pointTarget.target, event);
                        } else {
                            page.fn.event.moveImageStart(event, target.target);
                        }
                    }
                }
                //let fileIndex = page.data.loadTicket.fileIndex;
                let fileIndex = page.data.event.currentFileIndex;
                let objId_ = event.target.getAttribute('objectId');
                let obj2dCubeTxt = objBoxSizeJson[objId_];
                let obj2dCube = {};
                if (obj2dCubeTxt) {
                    obj2dCube = JSON.parse(obj2dCubeTxt);
                }
                let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
                let idCube = event.target.getAttribute('index');
                if (idCube != '9' && idCube != '10') {
                    let g = svg.children("g[objectId='" + objId_ + "'][id='group_points_" + objId_ + "']");
                    let circle = g.children('circle[index="' + idCube + '"]');
                    if (obj2dCube['P' + idCube] != undefined && obj2dCube['P' + idCube] == 0) {
                        circle.css("stroke", "yellow");
                        obj2dCube['P' + idCube] = 1;
                    } else {
                        circle.css("stroke", "grey");
                        obj2dCube['P' + idCube] = 0;
                    }
                    objBoxSizeJson[objId_] = JSON.stringify(obj2dCube);
                    return;
                } else {
                    let g = svg.children("g[objectId='" + objId_ + "'][data-objectType='drawCube2DSide']");
                    let circle = g.children('circle[index="' + idCube + '"]');
                    if (obj2dCube['P' + idCube] != undefined && obj2dCube['P' + idCube] == 0) {
                        circle.css("stroke", "yellow");
                        obj2dCube['P' + idCube] = 1;
                    } else {
                        circle.css("stroke", "grey");
                        obj2dCube['P' + idCube] = 0;
                    }
                    objBoxSizeJson[objId_] = JSON.stringify(obj2dCube);
                    return;
                }
            }
            if (page.data.drawing.object && page.data.drawing.object.objectType == 'drawCube2D') {
                // handle move image right click
                if (target.hasTarget == true) {
                    if (!_common.getKeyboard(event).keyCode.startsWith("alt_")) {
                        let pointTarget = page.fn.event.filterByClass(event, "draw-point");
                        if (pointTarget.hasTarget && page.data.event.method != page.constants.method.editObject) {
                            page.fn.event.deletePointToObjectByEvent(page.data.drawing.object, pointTarget.target, event);
                        } else {
                            page.fn.event.moveImageStart(event, target.target);
                        }
                    }
                }
                //let fileIndex = page.data.loadTicket.fileIndex;
                let fileIndex = page.data.event.currentFileIndex;
                let objId_ = event.target.getAttribute('objectId');
                let obj2dCubeTxt = objBoxSizeJsonFront[objId_];
                let obj2dCube = {};
                if (obj2dCubeTxt) {
                    obj2dCube = JSON.parse(obj2dCubeTxt);
                }
                let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
                let idCube = event.target.getAttribute('index');
                if (idCube != '9' && idCube != '10') {
                    let g = svg.children("g[objectId='" + objId_ + "'][id='group_points_" + objId_ + "']");
                    let circle = g.children('circle[index="' + idCube + '"]');
                    if (obj2dCube['P' + idCube] != undefined && obj2dCube['P' + idCube] == 0) {
                        circle.css("stroke", "yellow");
                        obj2dCube['P' + idCube] = 1;
                    } else {
                        circle.css("stroke", "grey");
                        obj2dCube['P' + idCube] = 0;
                    }
                    objBoxSizeJsonFront[objId_] = JSON.stringify(obj2dCube);
                    return;
                } else {
                    let g = svg.children("g[objectId='" + objId_ + "'][data-objectType='drawCube2DSideFront']");
                    let circle = g.children('circle[index="' + idCube + '"]');
                    if (obj2dCube['P' + idCube] != undefined && obj2dCube['P' + idCube] == 0) {
                        circle.css("stroke", "yellow");
                        obj2dCube['P' + idCube] = 1;
                    } else {
                        circle.css("stroke", "grey");
                        obj2dCube['P' + idCube] = 0;
                    }
                    objBoxSizeJsonFront[objId_] = JSON.stringify(obj2dCube);
                    return;
                }

            } else if ($(event.target).attr('data-objectType') === page.constants.drawType.draw6PointCube) {
                const targetElement = $(event.target);
                const objectId = targetElement.attr('objectId');
                const pointId = targetElement.attr('id');
                const fileIndex = page.data.event.currentFileIndex;

                let obj = page.fn.data.getObject(fileIndex, objectId);

                if (obj) {
                    let pointFound = false;
                    page.fn.data.unConvertObjectLocation(obj);
                    if (obj.location && Array.isArray(obj.location)) {
                        obj.location.forEach(point => {
                            if (point[3] === pointId) {
                                point[2] = (point[2] === page.constants.visibility6PointCube.hidden)
                                    ? page.constants.visibility6PointCube.visible
                                    : page.constants.visibility6PointCube.hidden;
                                pointFound = true;
                            }
                        });
                    }
                    if (pointFound) {
                        page.fn.data.convertObjectLocation(obj);
                        page.fn.data.saveObject(obj);
                        page.fn.drawing.renderObject(obj);

                        if (page.data.event.selectedObjectId === objectId) {
                            page.fn.drawing.renderObjectPoint(null, null, false, obj);
                        }
                        page.gateway(page.constants.gateway.command.add, `Toggled point visibility on object #${obj.objectOrder}`);
                    }
                }
            }
            else if (page.data.drawing.object?.objectType === page.constants.drawType.drawVISBox) {
                let isAdded = false;
                // For VIS-Box, constrain P3 to VIS Box Y range if adding 3rd point
                if (page.data.drawing.object.location.length === 2) {
                    // This is P3 - constrain Y to VIS Box range
                    let p1 = page.data.drawing.object.location[0];
                    let p2 = page.data.drawing.object.location[1];
                    let minY = Math.min(p1[1], p2[1]);
                    let maxY = Math.max(p1[1], p2[1]);
                    let tempPoint = page.fn.event.getPointOnFile(page.data.drawing.object.fileIndex, event);
                    let constrainedY = Math.max(minY, Math.min(maxY, tempPoint.y));
                    let constrainedPoint = [tempPoint.x, constrainedY, getUUID()];
                    // Manually add the constrained point
                    page.data.drawing.object.location.push(constrainedPoint);
                    page.fn.data.convertObjectLocation(page.data.drawing.object);
                    isAdded = true;
                } else {
                    // For P1, P2 - normal behavior
                    isAdded = page.fn.event.addPointToObjectByEvent(page.data.drawing.object, event);
                }
                if (isAdded) {
                    page.fn.drawing.renderObject(page.data.drawing.object);
                    page.fn.drawing.renderObjectPoint(null, null, false, page.data.drawing.object);
                    // Khi đủ 2 điểm, tiếp tục chờ điểm P3 hoặc ESC
                    if (page.data.drawing.object.location.length === 2) {
                        console.log("VIS-Box: P1, P2 created. Waiting for P3 or ESC.");
                    }
                    // Khi đủ 3 điểm, kết thúc vẽ
                    else if (page.data.drawing.object.location.length === 3) {
                        page.fn.drawing.endNewDrawing("onmousedown of add new VIS-Box object");
                        if (page.data.drawing.object != null) {
                            page.fn.data.onSelectObject(page.data.drawing.object.fileIndex, page.data.drawing.object.objectId);
                        }
                        // Re-render sau khi isDrawing=false để chấm đỏ có draw-point + index
                        setTimeout(function () {
                            page.fn.drawing.renderObject(page.data.drawing.object);
                            page.fn.drawing.renderObjectPoint(null, null, false, page.data.drawing.object);
                            // NEW: render points cho tất cả VIS-Box trong file hiện tại
                            const fileIndexAll = page.data.drawing.object.fileIndex;
                            $("svg.drawingSVG[data-file-index='" + fileIndexAll + "'] g[id^='group_points_']").remove();
                            const allObjects = page.data.loadTicket.fileList[fileIndexAll]?.objectList || [];
                            allObjects.forEach(function (o) {
                                if (o.objectType === page.constants.drawType.drawVISBox) {
                                    page.fn.drawing.renderObjectPoint(fileIndexAll, null, false, o);
                                }
                            });
                        }, 0);
                    }
                }
            }

        }
        let edgeLineTarget = page.fn.event.filterByClass(event, "edgeLines", "data-file-index", page.data.event.currentFileIndex);
        let edgePointTarget = page.fn.event.filterByClass(event, "edgePoint", "data-file-index", page.data.event.currentFileIndex);
        // drawingType edgeLines 일 때
        if (edgeLineTarget.hasTarget && !page.data.event.isDrawingEdgePoint
            && page.data.drawing.object.objectType == page.constants.drawType.edgeLines) {
            page.data.event.CanDeleteEdgeLine = true;
        }
        // drawingType edgePoints 일 때
        if (edgePointTarget.hasTarget && page.data.event.isDrawing == true && page.data.event.isDrawingEdgePoint) {
            let targetPointId = $(event.target).attr("pointId");
            page.fn.data.deleteEdgePoint(page.data.event.currentFileIndex, targetPointId);
        } else {
            if (target.hasTarget == true) {
                if (!_common.getKeyboard(event).keyCode.startsWith("alt_")) {
                    let pointTarget = page.fn.event.filterByClass(event, "draw-point");
                    // page.data.event.method != page.constants.method.editObject 이 조건은 밑에서 지워주기 때문에
                    // 다 그인 이후 오브잭트는 여기서 삭제할 필요 없어서 editObject가 아닌 그리고 있는 상태에서만 지워줌
                    if (pointTarget.hasTarget && page.data.event.method != page.constants.method.editObject) {
                        page.fn.event.deletePointToObjectByEvent(page.data.drawing.object, pointTarget.target, event);
                    } else {
                        page.fn.event.moveImageStart(event, target.target);
                    }
                }
            }
            if (page.data.event.method == page.constants.method.editObject) {
                target = page.fn.event.filterByClass(event, "draw-point");
                if (_common.getKeyboard(event).keyCode.startsWith("alt_") && _common.isNotEmpty(page.data.event.selectedObjectId)
                    && (
                        page.fn.data.getObject(page.data.event.currentFileIndex, page.data.event.selectedObjectId).objectType == page.constants.drawType.polygon
                        || page.fn.data.getObject(page.data.event.currentFileIndex, page.data.event.selectedObjectId).objectType == page.constants.drawType.polyline
                        || page.fn.data.getObject(page.data.event.currentFileIndex, page.data.event.selectedObjectId).objectType == page.constants.drawType.pointPolyline
                        || page.fn.data.getObject(page.data.event.currentFileIndex, page.data.event.selectedObjectId).objectType == page.constants.drawType.pointGroup
                    )
                ) {
                    page.data.event.isRemoverMoving = true;
                    if ($("#removerRange").length == 0) {
                        let p = page.fn.drawing.getPositionForDrawing(event);
                        let range = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
                        range.setAttribute("x", (p[0] - (page.constants.eraserSize / 2)));
                        range.setAttribute("y", (p[1] - (page.constants.eraserSize / 2)));
                        range.setAttribute("width", page.constants.eraserSize);
                        range.setAttribute("height", page.constants.eraserSize);
                        range.setAttribute("id", "removerRange");
                        page.dom.svg.append(range);
                    }
                    return false;
                } else if (target.hasTarget === true) {
                    let object = page.fn.data.getObject(page.data.event.currentFileIndex, $(event.target).attr("objectId"));
                    if (target.target.hasClass(page.constants.drawType.keypoint)) {
                        let index = Number.parseInt(target.target.attr("index"));
                        let point = object.location[index];
                        let visibility = _common.nvl(point[3], page.constants.keypoint.visibility.defaultValue);
                        log.info(visibility, "current visibility");
                        visibility = page.constants.keypoint.visibility.getNextVisibility(visibility);
                        object.location[index][3] = visibility;
                        page.fn.data.convertObjectLocation(object, object.location);
                        page.fn.drawing.renderObject(object);
                        page.fn.data.saveObject(object);
                        page.data.drawing.object = _common.copy(object)
                        page.fn.drawing.renderObjectPoint(null, null, false, object);
                    } else if (target.target.attr("data-group") === "circle-6pointCube") {

                        page.fn.data.convertObjectLocation(object, object.location);
                        page.fn.drawing.renderObject(object);
                        page.fn.data.saveObject(object);
                        page.data.drawing.object = _common.copyData(object)
                        page.fn.drawing.renderObjectPoint(null, null, false, object);

                    } else {
                        log.info(event, "onmousedown, delete point on object");
                        page.fn.event.deletePointToObjectByEvent(page.data.drawing.object, target.target, event);
                    }
                }
            }
        }
    } else {
        if (target.hasTarget === true && page.data.event.method === page.constants.method.moveImage) {
            // const isRightClick = page.fn.event.isMouseRightClick(event);
            if (isRightClick) {
                page.fn.event.moveImageStart(event, target.target);
            } else {
                console.log("❌ Chuột trái không được move ảnh");
            }
        }
        target = page.fn.event.filterByClass(event, "popUp-header");
        if (target.hasTarget === true) {
            page.fn.event.popupMoveStart(event, target.target);
        } else if (page.data.event.method === page.constants.method.selectObject) {
            let resolved = false;

            target = page.fn.event.filterByClass(event, "view-point-poly");
            if (!target.hasTarget) {
                target = page.fn.event.filterByClass(event, "view-point");
            }

            if (target.hasTarget === true) {
                let pointId = target.target.attr("id");
                let objectId = target.target.attr("objectId");

                if (objectId && $("#rootObject_" + objectId).length > 0) {
                    log.info("selectedObject = " + objectId + (pointId ? ", pointId = " + pointId : ""));

                    // Preserve pending point selection for pointPolyline
                    let object = page.fn.data.getObject(page.data.event.currentFileIndex, objectId);
                    if (object && object.objectType === page.constants.drawType.pointPolyline && pointId) {
                        page.data.pendingPointSelection = {
                            pointId: pointId,
                            objectId: objectId,
                            fileIndex: page.data.event.currentFileIndex,
                            classId: object.classId
                        };
                    }
                    page.fn.data.onSelectObject(page.data.event.currentFileIndex, objectId, true);
                    resolved = true;
                }
            }

            if (!resolved) {
                // 3) Clicked on object body (rect/polyline/polygon). Walk up to find element with objectId.
                let $t = $(event.target);
                let gWithId = $t.closest('[objectId]');
                let objectId = gWithId && gWithId.attr ? gWithId.attr('objectId') : null;
                if (!objectId) {
                    objectId = $t.attr('objectId');
                }
                if (objectId && $("#rootObject_" + objectId).length > 0) {
                    log.info("selectedObject (body) = " + objectId);
                    page.fn.data.onSelectObject(page.data.event.currentFileIndex, objectId, true);
                }
            }
        } else if (page.data.event.method === page.constants.method.editObject) {
            target = page.fn.event.filterByClass(event, "draw-point");
            if (target.hasTarget === true && page.fn.data.isSameobjectId(page.data.event.selectedObjectId, target.target)) {
                // For pointPolyline objects, select the point when clicked (not just when dragging)
                let object = page.fn.data.getObject(page.data.event.currentFileIndex, page.data.event.selectedObjectId);
                if (object && object.objectType === page.constants.drawType.pointPolyline) {
                    let pointId = target.target.attr("id");
                    if (pointId) {
                        page.fn.data.choosePTPointForDrawing(pointId, object.fileIndex, object.objectId, object.classId);
                    }
                }
                // move point
                page.fn.event.movePointStart(event, target.target);
            } else {
                // add point
                let key = _common.getKeyboard(event);
                if (key.keyCode.startsWith("ctrl_")) {
                    if (page.data.drawing.object.objectType === page.constants.drawType.polyline
                        || page.data.drawing.object.objectType === page.constants.drawType.pointPolyline
                        || page.data.drawing.object.objectType === page.constants.drawType.polygon) {
                        let data = page.fn.drawing.eventGetCenter(event, page.data.drawing.object);
                        page.data.drawing.object.location.splice(data.index2, 0, data.point);
                        page.fn.data.convertObjectLocation(page.data.drawing.object, page.data.drawing.object.location);
                        page.fn.data.saveObject(page.data.drawing.object);
                        page.fn.drawing.renderObject(page.data.drawing.object);
                        page.fn.drawing.renderObjectPoint(null, null, false, page.data.drawing.object);
                    }
                }
            }
        } else if (page.data.event.method === page.constants.method.moveObject) {

            target = page.fn.event.filterByClass(event, "object-body");
            if (target.hasTarget === true) {
                let fileIndex = target.target.parents(".root").attr("data-file-index");
                if (page.data.event.currentFileIndex == fileIndex) {
                    page.fn.event.moveObjectStart(event, target.target);
                }
            }
        } else if (page.data.event.isDrawing === true && page.data.drawing.isAddingObject === true) {
            console.log("page.fn.event.mouseDown, isDrawing == true, isAddingObject === true");
            if (isRightClick === true) {
                //delete point
                target = page.fn.event.filterByClass(event, "draw-point");
                page.fn.event.deletePointToObjectByEvent(page.data.drawing.object, target.target, event);
            } else {
                //
                target = page.fn.event.filterByClass(event, "draw-point", "objectId", page.data.drawing.object.objectId);
                if (target.hasTarget === true) {
                    //move point
                    page.fn.event.movePointStart(event, target.target);
                } else {
                    //add point
                    target = page.fn.event.filterByClass(event, "root", "data-file-index", page.data.drawing.object.fileIndex);
                    if (target.hasTarget === true) {
                        // append point to new object
                        if (page.data.event.method === page.constants.method.magicPin) {
                            let isAdded = page.fn.event.addPointToObjectByEvent(page.data.drawing.object, event);
                            if (isAdded === true) {
                                if (page.data.drawing.object.location.length === 2) {
                                    page.fn.data.runMagicPin(page.data.drawing.object);
                                }
                            }
                        } else if (page.data.event.method === page.constants.method.magicBox) {
                            let isAdded = page.fn.event.addPointToObjectByEvent(page.data.drawing.object, event);
                            if (isAdded === true) {
                                if (page.data.drawing.object.location.length === 2) {
                                    page.fn.data.runMagicBox(page.data.drawing.object);
                                }
                            }
                        } else if (page.data.event.method === page.constants.method.magicQ) {
                            let isAdded = page.fn.event.addPointToObjectByEvent(page.data.drawing.object, event);
                        } else if (page.data.event.method === page.constants.method.magicKey) {
                            let isAdded = page.fn.event.addPointToObjectByEvent(page.data.drawing.object, event);
                            if (isAdded === true) {
                                if (page.data.drawing.object.location.length === 2) {
                                    page.fn.data.runMagicKey(page.data.drawing.object);
                                }
                            }
                        } else if (page.data.drawing.object.objectType === page.constants.drawType.rectangle) {

                            let isAdded = page.fn.event.addPointToObjectByEvent(page.data.drawing.object, event);
                            if (isAdded === true) {
                                page.fn.drawing.renderObject(page.data.drawing.object);
                                page.fn.drawing.renderObjectPoint(null, null, false, page.data.drawing.object);
                                if (page.data.drawing.object.location.length === 2) {
                                    page.fn.drawing.endNewDrawing("onmousedown of add new object");
                                    if (page.data.drawing.object != null) {
                                        page.fn.data.onSelectObject(page.data.drawing.object.fileIndex, page.data.drawing.object.objectId);
                                    }
                                }
                            }
                        } else if (page.data.drawing.object.objectType === page.constants.drawType.rectangle4p) {
                            let isAdded = page.fn.event.addPointToObjectByEvent(page.data.drawing.object, event);
                            if (isAdded === true) {
                                page.fn.drawing.renderObject(page.data.drawing.object);
                                page.fn.drawing.renderObjectPoint(null, null, false, page.data.drawing.object);
                                if (page.data.drawing.object.location.length === 4) {
                                    page.fn.drawing.endNewDrawing("onmousedown of add new object");
                                    if (page.data.drawing.object != null) {
                                        page.fn.data.onSelectObject(page.data.drawing.object.fileIndex, page.data.drawing.object.objectId);
                                    }
                                }
                            }
                        } else if (page.data.drawing.object.objectType === page.constants.drawType.polygon) {
                            let isAdded = page.fn.event.addPointToObjectByEvent(page.data.drawing.object, event);
                            if (isAdded === true) {
                                page.fn.drawing.renderObject(page.data.drawing.object);
                                page.fn.drawing.renderObjectPoint(null, null, false, page.data.drawing.object);
                            }
                        } else if (page.data.drawing.object.objectType === page.constants.drawType.polyline) {
                            let isAdded = page.fn.event.addPointToObjectByEvent(page.data.drawing.object, event);
                            if (isAdded === true) {
                                page.fn.drawing.renderObject(page.data.drawing.object);
                                page.fn.drawing.renderObjectPoint(null, null, false, page.data.drawing.object);
                            }
                        } else if (page.data.drawing.object.objectType === page.constants.drawType.pointPolyline) {
                            let isAdded = page.fn.event.addPointToObjectByEvent(page.data.drawing.object, event);
                            if (isAdded === true) {
                                page.fn.drawing.renderObject(page.data.drawing.object);
                                page.fn.drawing.renderObjectPoint(null, null, false, page.data.drawing.object);
                                // Auto select the newly added point in popup
                                if (page.data.drawing.object.location && page.data.drawing.object.location.length > 0) {
                                    let lastPointIndex = page.data.drawing.object.location.length - 1;
                                    let lastPointId = page.data.drawing.object.location[lastPointIndex][2];
                                    let drawingObject = page.data.drawing.object;
                                    if (lastPointId) {
                                        setTimeout(function() {
                                            page.fn.data.choosePTPointForDrawing(lastPointId, drawingObject.fileIndex, drawingObject.objectId, drawingObject.classId);
                                        }, 100);
                                    }
                                }
                            }
                        } else if (page.data.drawing.object.objectType === page.constants.drawType.keypoint) {
                            let isAdded = page.fn.event.addPointToObjectByEvent(page.data.drawing.object, event);
                            if (isAdded === true && page.data.drawing.object.location.length === 2) {
                                let svg = $("svg.drawingSVG[data-file-index='" + page.data.drawing.object.fileIndex + "']");
                                svg.children("g[objectId='" + page.data.drawing.object.objectId + "']").remove();
                                page.data.drawing.object.objectLocation = JSON.stringify(page.data.drawing.keyPoints);
                                page.fn.drawing.endNewDrawing("onmousedown of add new object");
                                page.fn.data.saveObject(page.data.drawing.object)
                                page.fn.data.onSelectObject(page.data.drawing.object.fileIndex, page.data.drawing.object.objectId);
                            }
                        } else if (page.data.drawing.object.objectType === page.constants.drawType.pointGroup) {
                            let isAdded = page.fn.event.addPointToObjectByEvent(page.data.drawing.object, event);
                            if (isAdded === true) {
                                page.fn.drawing.renderObject(page.data.drawing.object);
                                page.fn.drawing.renderObjectPoint(null, null, false, page.data.drawing.object);
                            }
                        } else if (page.data.drawing.object.objectType === page.constants.drawType.point) {
                            let isAdded = page.fn.event.addPointToObjectByEvent(page.data.drawing.object, event);
                            if (isAdded === true) {
                                page.fn.drawing.renderObject(page.data.drawing.object);
                                page.fn.drawing.renderObjectPoint(null, null, false, page.data.drawing.object);
                                if (page.data.drawing.object.location.length === 1) {
                                    page.fn.drawing.endNewDrawing("onmousedown of add new object");
                                    page.fn.data.onSelectObject(page.data.drawing.object.fileIndex, page.data.drawing.object.objectId);
                                }
                            }
                        } else if (page.data.drawing.object.objectType === page.constants.drawType.sideBox) {
                            let isAdded = page.fn.event.addPointToObjectByEvent(page.data.drawing.object, event);
                            if (isAdded === true) {
                                page.fn.drawing.renderObject(page.data.drawing.object);
                                page.fn.drawing.renderObjectPoint(null, null, false, page.data.drawing.object);
                                if (page.data.drawing.object.location.length === 6) {
                                    page.fn.drawing.endNewDrawing("onmousedown of add new object");
                                    page.fn.data.onSelectObject(page.data.drawing.object.fileIndex, page.data.drawing.object.objectId);
                                }
                            }
                        } else if (page.data.drawing.object.objectType === page.constants.drawType.edgeLines) {
                            target = page.fn.event.filterByClass(event, "edgePoint", "data-file-index", page.data.event.currentFileIndex);
                            if (target.hasTarget) {
                                let pointX = $(event.target).attr("cx");
                                let pointY = $(event.target).attr("cy");
                                let edgePointId = $(event.target).attr("pointId");
                                let canSave = true;
                                if (page.data.drawing.object.location.length === 1) {
                                    canSave = page.fn.event.canSaveEdgeLine(event);
                                }
                                if (canSave) {
                                    let isAdded = page.fn.event.addPointToObjectByEdgePoint(page.data.drawing.object, pointX, pointY, edgePointId);
                                    if (isAdded === true) {
                                        page.fn.drawing.renderObject(page.data.drawing.object);
                                        if (page.data.drawing.object.location.length === 2) {
                                            page.fn.drawing.endNewDrawing("onmousedown of add new object");
                                            page.fn.drawing.renderEdgePoint(page.data.event.currentFileIndex);
                                            page.fn.drawing.startNewDrawing(page.constants.method.drawEdgeLines);
                                        }
                                    }
                                } else {

                                }
                            }
                        } else if (page.data.drawing.object.objectType === page.constants.drawType.drawCube2D) {
                            let isAdded = page.fn.event.addPointToObjectByEvent(page.data.drawing.object, event);
                            if (isAdded === true) {
                                page.fn.drawing.renderObject(page.data.drawing.object);
                                page.fn.drawing.renderObjectPoint(null, null, false, page.data.drawing.object);
                                if (page.data.drawing.object.location.length === 2) {
                                    page.fn.drawing.endNewDrawing("onmousedown of add new object");
                                    if (page.data.drawing.object != null) {
                                        page.fn.data.onSelectObject(page.data.drawing.object.fileIndex, page.data.drawing.object.objectId);
                                    }
                                }
                            }
                        } else if (page.data.drawing.object.objectType === page.constants.drawType.drawCube2DFront) {
                            let isAdded = page.fn.event.addPointToObjectByEvent(page.data.drawing.object, event);
                            if (isAdded) {
                                page.fn.drawing.renderObject(page.data.drawing.object);
                                page.fn.drawing.renderObjectPoint(null, null, false, page.data.drawing.object);
                                if (page.data.drawing.object.location.length === 2) {
                                    page.fn.drawing.endNewDrawing("onmousedown of add new object");
                                    if (page.data.drawing.object != null) {
                                        page.fn.data.onSelectObject(page.data.drawing.object.fileIndex, page.data.drawing.object.objectId);
                                    }
                                }
                            }
                        } else if (page.data.drawing.object.objectType === page.constants.drawType.draw6PointCube) {
                            let isAdded = page.fn.event.addPointToObjectByEvent(page.data.drawing.object, event);
                            if (isAdded) {
                                page.fn.drawing.renderObject(page.data.drawing.object);
                                page.fn.drawing.renderObjectPoint(null, null, false, page.data.drawing.object);
                                if (page.data.drawing.object.location.length === 6 || page.data.drawing.object.location.length === 8) {
                                    page.fn.drawing.endNewDrawing("onmousedown of add new object");
                                    if (page.data.drawing.object != null) {
                                        page.fn.data.onSelectObject(page.data.drawing.object.fileIndex, page.data.drawing.object.objectId);
                                    }
                                }
                            }
                        } else if (page.data.drawing.object.objectType === page.constants.drawType.drawBevBox4) {
                            let isAdded = page.fn.event.addPointToObjectByEvent(page.data.drawing.object, event);
                            if (isAdded) {
                                page.fn.drawing.renderObject(page.data.drawing.object);
                                page.fn.drawing.renderObjectPoint(null, null, false, page.data.drawing.object);
                                // Khi đủ 2 điểm, chuyển sang 4 đỉnh và kết thúc vẽ
                                if (page.data.drawing.object.location.length === 2) {
                                    try {
                                        page.fn.drawing.bevTwoToFourCorners(page.data.drawing.object);
                                        page.fn.data.saveObject(page.data.drawing.object);
                                        page.fn.drawing.renderObject(page.data.drawing.object);
                                        page.fn.drawing.renderObjectPoint(null, null, false, page.data.drawing.object);
                                    } catch (_) {
                                    }
                                    page.fn.drawing.endNewDrawing("onmousedown of add new object");
                                    if (page.data.drawing.object != null) {
                                        page.fn.data.onSelectObject(page.data.drawing.object.fileIndex, page.data.drawing.object.objectId);
                                    }
                                }
                            }
                        }else if (page.data.drawing.object.objectType === page.constants.drawType.drawVISBox) {
                            debugger
                            let isAdded = page.fn.event.addPointToObjectByEvent(page.data.drawing.object, event);
                            if (isAdded) {
                                page.fn.drawing.renderObject(page.data.drawing.object);
                                page.fn.drawing.renderObjectPoint(null, null, false, page.data.drawing.object);
                                // Khi đủ 2 điểm, tiếp tục chờ điểm P3 hoặc ESC
                                if (page.data.drawing.object.location.length === 2) {
                                    console.log("VIS-Box: P1, P2 created. Waiting for P3 or ESC.");
                                }
                                // Khi đủ 3 điểm, kết thúc vẽ
                                else if (page.data.drawing.object.location.length === 3) {
                                    page.fn.drawing.endNewDrawing("onmousedown of add new VIS-Box object");
                                    if (page.data.drawing.object != null) {
                                        page.fn.data.onSelectObject(page.data.drawing.object.fileIndex, page.data.drawing.object.objectId);
                                    }
                                    // Re-render sau khi isDrawing=false để chấm đỏ có draw-point + index
                                    setTimeout(function () {
                                        page.fn.drawing.renderObject(page.data.drawing.object);
                                        page.fn.drawing.renderObjectPoint(null, null, false, page.data.drawing.object);
                                        // NEW: render points cho tất cả VIS-Box trong file hiện tại
                                        const fileIndexAll = page.data.drawing.object.fileIndex;
                                        $("svg.drawingSVG[data-file-index='" + fileIndexAll + "'] g[id^='group_points_']").remove();
                                        const allObjects = page.data.loadTicket.fileList[fileIndexAll]?.objectList || [];
                                        allObjects.forEach(function (o) {
                                            if (o.objectType === page.constants.drawType.drawVISBox) {
                                                page.fn.drawing.renderObjectPoint(fileIndexAll, null, false, o);
                                            }
                                        });
                                    }, 0);
                                }
                            }
                        }

                    } else {
                        log.info("User mousedown on outside of work area.");
                    }
                }
            }
        } else if (page.data.event.isDrawing === true && page.data.event.isDrawingEdgePoint === true) {
            let pointTarget = page.fn.event.filterByClass(event, "edgePoint", "data-file-index", page.data.event.currentFileIndex);
            if (pointTarget.hasTarget) {
                page.data.event.canMoveEdgePoint = true;
                page.data.event.currentEdgePointId = $(event.target).attr("pointId");
            } else {
                page.data.event.canMoveEdgePoint = false;
                target = page.fn.event.filterByClass(event, "root", "data-file-index", page.data.event.currentFileIndex);
                if (target.hasTarget) {
                    page.fn.data.insertEdgePoint(event, page.data.event.currentFileIndex);
                    page.fn.drawing.renderEdgePoint(page.data.event.currentFileIndex, "active");
                }
            }
        } else if (page.data.event.isDrawing === true && page.data.event.isDrawingEdgePointArrange === true) {
            let pointTarget = page.fn.event.filterByClass(event, "edgePoint", "data-file-index", page.data.event.currentFileIndex);
            if (pointTarget.hasTarget) {
                if (pointTarget.target.hasClass("arrangeTarget")) {
                    pointTarget.target.removeClass("arrangeTarget")
                } else {
                    let targetPoints = $(".edgePoint.arrangeTarget");
                    $(".edgePoint").removeClass("arrangeTarget")
                    setTimeout(() => {
                        pointTarget.target.addClass("arrangeTarget")
                        targetPoints.addClass("arrangeTarget")
                    }, 500);
                }
            }
        } else if (page.data.event.method === page.constants.method.makeGroup) {
            page.fn.drawing.startFindObjectForGroup(event);
        }
    }
}
page.fn.event.mouseMove = function (event) {
    if (page.data.drawing.isViewCorsshair === true) {
        page.fn.drawing.setPositionOfCrosshair(event);
    }
    page.data.event.CanDeleteEdgeLine = false;
    if (page.data.event.workFileMover.isMoving) {
        log.info(event, "moving workfile-layout");
        let mouseX = event.pageX;
        let mouseY = event.pageY;
        let intervalY = (mouseY - page.data.event.workFileMover.startY);
        let intervalX = (mouseX - page.data.event.workFileMover.startX);
        let top = page.data.event.workFileMover.ogirinY + intervalY;
        if (page.data.event.workFileMover.minY > top) {
            top = page.data.event.workFileMover.minY;
        }
        if (top > page.data.event.workFileMover.maxY) {
            top = page.data.event.workFileMover.maxY;
        }
        let left = page.data.event.workFileMover.ogirinX + intervalX;
        if (page.data.event.workFileMover.minX > left) {
            left = page.data.event.workFileMover.minX;
        }
        if (left > page.data.event.workFileMover.maxX) {
            left = page.data.event.workFileMover.maxX;
        }

        page.data.event.workFileMover.target
            .css("top", top)
            .css("left", left)
            .attr("data-layout-top", top + "px")
            .attr("data-layout-left", left + "px")
        ;
    }
    if (page.data.event.isRemoverMoving) {
        event.preventDefault();
        let p = page.fn.drawing.getPositionForDrawing(event, true);
        let scale = page.fn.data.getScale(page.data.event.currentFileIndex);
        $("#removerRange").attr("x", (p[0] - (page.constants.eraserSize / 2))).attr("y", (p[1] - (page.constants.eraserSize / 2)));
        let range = page.dom.svg.get(0).createSVGRect();
        range.x = (p[0] - (page.constants.eraserSize / 2)) * scale;
        range.y = (p[1] - (page.constants.eraserSize / 2)) * scale;
        range.width = range.height = page.constants.eraserSize;
        let tList = page.dom.svg.get(0).getIntersectionList(range, null);
        for (let i = 0; i < tList.length; i++) {
            let target = $(tList[i]);
            if (target.hasClass("draw-point")) {
                let object = page.fn.data.getObject(page.data.event.currentFileIndex, target.attr("objectId"));
                let pointId = target.attr("id");
                if (_common.isEmpty(object.objectLocation)) {
                    page.fn.data.castLocationToObject(object);
                }
                if (object.location.length <= 3 && object.objectType === page.constants.drawType.polygon) {
                    //nothing
                } else if (object.location.length <= 2 && object.objectType === page.constants.drawType.polyline) {
                    //nothing
                } else if (object.location.length <= 2 && object.objectType === page.constants.drawType.pointPolyline) {
                    //nothing
                } else if (object.location.length <= 1 && object.objectType === page.constants.drawType.pointGroup) {
                    //nothing
                } else if (object.objectType === page.constants.drawType.rectangle4p) {
                    //nothing
                } else {
                    page.fn.event.deletePointToObjectByEvent(page.data.drawing.object, target, event);
                }
            }
        }
    } else if (page.data.event.working === page.constants.method.moveImage) {
        let pos = page.fn.event.getMousePositionByTarget(event, page.data.event.target);
        let imageAngle = $(`.drawingImage[data-file-index=${page.data.event.currentFileIndex}]`).attr("data-file-rotation");
        // log.info(page.data.event.target.position(), "imageMove, before");
        let targetLeft = page.data.event.position.startTargetX + (pos.mouseX - page.data.event.position.startMouseX);
        let targetTop = page.data.event.position.startTargetY + (pos.mouseY - page.data.event.position.startMouseY);
        // 이미지가 회전된 상태에서 이동 시 이미지 회전으로 인한 이미지 좌표 수정을 위해
        if (imageAngle == 90 || imageAngle == 270) {
            targetLeft = targetLeft + (page.data.event.position.startTargetLeft - page.data.event.position.startTargetPositionLeft);
            targetTop = targetTop + (page.data.event.position.startTargetTop - page.data.event.position.startTargetPositionTop);
        }
        page.data.event.target
            .css("left", targetLeft)
            .css("top", targetTop)
        ;
        _common.cookie.set(page.constants.cookieKeys.valuePosition, targetTop + "," + targetLeft);
        // log.info(page.data.event.target.position(), "imageMove, after");
        page.fn.drawing.applyRulerPositionByIndex(page.data.event.target.attr("data-file-index"));
    } else if (_common.isNotEmpty(page.data.event.popup) && page.data.event.popup.isMoving === true) {
        let pos = page.fn.event.getMousePositionByTarget(event, page.data.event.popup.target);
        page.data.event.popup.target
            .css("left", page.data.event.popup.position.startTargetX + (pos.mouseX - page.data.event.popup.position.startMouseX))
            .css("top", page.data.event.popup.position.startTargetY + (pos.mouseY - page.data.event.popup.position.startMouseY))
        ;
    } else if (page.data.event.working === page.constants.method.movePoint) {

        let imageAngle = $(`.drawingImage[data-file-index=${page.data.drawing.object.fileIndex}]`).attr("data-file-rotation");
        page.fn.event.movePointMove(event);
        // 이미지가 회전된 상태에서 오브젝트 포인트 이동 시 오브젝트 팝업 태그 위치를 오브젝트에 맞춰주기 위해
        if (imageAngle !== 0) {
            page.fn.drawing.resetPopupTag(page.data.event.currentFileIndex);
        }
    } else if (page.data.event.method === page.constants.method.editObject) {
        if (page.data.drawing.object != null) {
            let valid = page.fn.drawing.isValidAppendPointOfEditObject(event);
            if (valid.isValid === true && valid.isCrosshair === true) {
                page.fn.drawing.setPositionOfCrosshair(event);
            }
            if (page.data.drawing.object.objectType === page.constants.drawType.polyline
                || page.data.drawing.object.objectType === page.constants.drawType.pointPolyline
                || page.data.drawing.object.objectType === page.constants.drawType.polygon) {
                let key = _common.getKeyboard(event);
                let tempObject = _common.copy(page.data.drawing.object);
                if (key.keyCode.startsWith("ctrl_")) {
                    let tempPointPosition = page.fn.event.getPointOnFile(page.data.drawing.object.fileIndex, event);
                    let tempPoint = [tempPointPosition.x, tempPointPosition.y, getUUID(), null];
                    tempObject.location.push(tempPoint);
                    let data = page.fn.drawing.eventGetCenter(event, tempObject);
                    tempObject.location.splice(data.index2, 0, data.point);
                    page.fn.data.convertObjectLocation(tempObject, tempObject.location);
                    page.fn.drawing.renderObject(tempObject);
                } else {
                    page.fn.drawing.renderObject(tempObject);
                }
                let imageAngle = $(`.drawingImage[data-file-index=${tempObject.fileIndex}]`).attr("data-file-rotation");
                // 이미지가 회전된 상태에서 오브젝트 수정 시 오브젝트 팝업 태그 위치를 오브젝트에 맞춰주기 위해
                if (imageAngle !== 0) {
                    page.fn.drawing.resetPopupTag(page.data.drawing.object.fileIndex);
                }
            }
        }
    } else if (page.data.event.method === page.constants.method.moveObject && page.data.event.isMovingObject === true) {
        let imageAngle = $(`.drawingImage[data-file-index=${page.data.drawing.object.fileIndex}]`).attr("data-file-rotation");
        page.fn.event.moveObjectMoving(event);
        // 이미지가 회전된 상태에서 오브젝트 이동 시 오브젝트 팝업 태그 위치를 오브젝트에 맞춰주기 위해
        if (imageAngle !== 0) {
            page.fn.drawing.resetPopupTag(page.data.drawing.object.fileIndex);
        }
    } else if (page.data.event.isDrawing === true && page.data.event.isDrawingEdgePoint) {
        if (page.data.event.canMoveEdgePoint) { // mouseDown 상태로 target이 edgePoints면 true
            page.fn.drawing.renderEdgePointLines(event, page.data.event.currentEdgePointId);
        }
    } else if (page.data.event.isDrawing === true && page.data.event.isDrawingEdgePointArrange) {
        // do nothing
    } else if (page.data.event.isDrawing === true) {

        if (page.data.drawing.object == null) {
            page.fn.drawing.startNewDrawing(page.constants.method.moveImage);
        } else {
            let target = page.fn.event.filterByClass(event, "root", "data-file-index", page.data.drawing.object.fileIndex);
            if (target.hasTarget) {

                const obj = page.data.drawing.object ?? {}
                const position = page.fn.event.getMousePositionByTargetCustom(event);
                obj.postionCursor = position;

                if (page.data.drawing.object.objectType === page.constants.drawType.drawVISBox &&
                    page.data.drawing.object.location.length === 2) {
                    let tempObject = _common.copyData(page.data.drawing.object);
                    let tempPointPosition = page.fn.event.getPointOnFile(page.data.drawing.object.fileIndex, event);
                    let tempPoint = [tempPointPosition.x, tempPointPosition.y, getUUID()];
                    tempObject.location.push(tempPoint);
                    page.fn.data.convertObjectLocation(tempObject);
                    // Render VIS-Box preview with special styling
                    page.fn.drawing.renderVISBoxPreview(page.data.drawing.object.fileIndex, tempObject);
                } else {
                    let tempObject = _common.copyData(page.data.drawing.object);
                    let tempPointPosition = page.fn.event.getPointOnFile(page.data.drawing.object.fileIndex, event);
                    let tempPoint = [tempPointPosition.x, tempPointPosition.y, getUUID()];
                    tempObject.location.push(tempPoint);
                    page.fn.data.convertObjectLocation(tempObject);
                    if (tempObject.objectType === page.constants.drawType.keypoint) {
                        page.fn.drawing.renderKeypointBox(page.data.drawing.object.fileIndex, tempObject);
                    } else {
                        page.fn.drawing.renderObject(tempObject, true);
                    }
                }
            }
        }
    } else if (page.data.event.workFileMover.isResizing === true) {
        let mouseX = event.pageX;
        let mouseY = event.pageY;
        let height = page.data.event.workFileMover.ogirinHeight + (mouseY - page.data.event.workFileMover.startY);
        let width = page.data.event.workFileMover.ogirinWidth + (mouseX - page.data.event.workFileMover.startX);
        page.data.event.workFileMover.target
            .css("height", height)
            .css("width", width)
            .attr("data-layout-height", height + "px")
            .attr("data-layout-width", width + "px")
        ;
    } else if (page.data.event.method === page.constants.method.makeGroup) {
        page.fn.drawing.movingFindObjectForGroup(event);
    }
}
page.fn.event.mouseUp = function (event) {
    log.info(event, "page.fn.event.mouseUp");
    let edgeLineTarget = page.fn.event.filterByClass(event, "edgeLines", "data-file-index", page.data.event.currentFileIndex);
    if (edgeLineTarget.hasTarget && !page.data.event.isDrawingEdgePoint
        && page.data.drawing.object.objectType === page.constants.drawType.edgeLines
        && page.data.event.CanDeleteEdgeLine) {
        let object = page.fn.data.getObject(page.data.event.currentFileIndex, $(event.target).attr("objectId"));
        page.fn.data.deleteObject(page.data.event.currentFileIndex, object.objectId);
    }
    if (page.data.event.working === page.constants.method.moveImage) {
        page.data.event.working = null;
    } else if (_common.isNotEmpty(page.data.event.popup) && page.data.event.popup.isMoving == true) {
        page.data.event.popup.isMoving = false;
    } else if (page.data.event.working === page.constants.method.movePoint) {
        page.data.event.working = null;
        let isValidObjectData = page.fn.data.isValidObjectData(page.data.drawing.object);
        if (page.data.drawing.object != null && isValidObjectData == 'min') {
            page.fn.event.redoObjectSize();
        } else {
            page.fn.event.movePointEnd(event);
            $("#clonedObj").remove();
            $("#clonedObj2").remove();
        }
    } else if (page.data.event.method === page.constants.method.moveObject && page.data.event.isMovingObject === true) {
        let isValidObjectData = page.fn.data.isValidObjectData(page.data.drawing.object);
        if (page.data.drawing.object != null && isValidObjectData == 'min') {
            page.data.event.isMovingObject = false;
            page.fn.event.redoObjectSize();
        } else {
            page.fn.event.moveObjectEnd(event);
        }
    } else if (page.data.event.workFileMover.isMoving === true) {
        page.data.event.workFileMover.isMoving = false;
        page.data.event.workFileMover.target.css("opacity", 1);
    } else if (page.data.event.workFileMover.isResizing === true) {
        page.data.event.workFileMover.isResizing = false;
        page.data.event.workFileMover.target.css("opacity", 1);
    } else if (page.data.event.method === page.constants.method.makeGroup) {
        page.fn.drawing.endFindObjectForGroup(event);
    }
    page.data.event.canMoveEdgePoint = false;
}
page.fn.event.redoObjectSize = function () {
    page.gateway(page.constants.gateway.command.add);
    if (page.constants.drawMin.isUse == "Y") {
        page.fn.alert(_common.template.parseMessage(page.message.cancleDrawingMin, {
            minX: page.constants.drawMin.x
            , minY: page.constants.drawMin.y
        }));
    } else if (page.constants.drawMin.isUse == "S") {
        page.fn.alert(_common.template.parseMessage(page.message.cancleDrawingMinP, {
            area: page.constants.drawMin.x
        }));
    }
    page.gateway(page.constants.gateway.command.back);
}
page.fn.event.filterByClass = function (event, cls, hasKey, hasKeyValue) {
    let rev = {
        hasTarget: false
        , target: null
    };
    let target = $(event.target);
    let isRun = true;
    let max = 10;
    let cnt = 0;
    while (isRun) {
        if (target.hasClass(cls)) {
            if (_common.isEmpty(hasKey)) {
                isRun = false;
                rev.hasTarget = true;
                rev.target = target;
            } else {
                if (_common.isEmpty(hasKeyValue) && _common.isNotEmpty(target.attr(hasKey))) {
                    isRun = false;
                    rev.hasTarget = true;
                    rev.target = target;
                } else if (_common.isNotEmpty(hasKeyValue) && target.attr(hasKey) == hasKeyValue) {
                    isRun = false;
                    rev.hasTarget = true;
                    rev.target = target;
                }
            }
        } else {
            let p = target.parent();
            if (p.prop("tagName") == "BODY") {
                isRun = false;
            } else {
                target = p;
            }
        }
        if (max < cnt) {
            isRun = false;
        }
        cnt++;
    }
    return rev;
}
page.fn.event.isMouseRightClick = function (event) {
    let isRightMB = false;
    event = event || window.event;
    if ("which" in event) {
        isRightMB = event.which == 3;
    } else if ("button" in event) {
        isRightMB = event.button == 2;
    }
    return isRightMB;
}
page.fn.event.deletePointToObjectByEvent = function (object, targetPoint, event) {
    // 여기 들어오는 object 는 page.data.drawing.object. 그래야 renderObject 시 그리고 있는 오브젝트가 update됨
    let minPointLength = page.constants.deletePoint[object.objectType];
    if (_common.isNotEmpty(minPointLength)) {
        log.info(targetPoint, "point delete");
        page.fn.data.unConvertObjectLocation(object);
        if (minPointLength < object.location.length) {
            let pointIndex = Number.parseInt(targetPoint.attr("index"));
            let fileIndex = Number.parseInt(object.fileIndex);

            page.fn.data.removePoint(object, pointIndex);
            page.fn.data.convertObjectLocation(object);
            page.fn.data.saveObject(object);
            page.fn.drawing.renderObject(object);
            page.fn.drawing.renderObjectPoint(fileIndex, null, false, object);
        } else {
            page.fn.alert(page.message.cantRemovePoint);
        }
    } else {
        page.fn.alert(page.message.cantRemovePoint);
    }
}
page.fn.event.getPointOnFile = function (fileIndex, event) {
    let imageSize = page.fn.data.getImageOriginalSize(fileIndex);
    let targetFile = $(".drawingSVG[data-file-index='" + fileIndex + "']");
    let position = page.fn.event.getMousePositionByTarget(event, targetFile);
    log.info(position, "page.fn.event.getPointOnFile, position");
    // 1) Best: use SVG CTM to map screen -> SVG coordinates (robust to re-parent, transforms)
    let x, y;
    try {
        const svgEl = document.querySelector(`svg.drawingSVG[data-file-index="${fileIndex}"]`);
        if (svgEl && typeof svgEl.createSVGPoint === 'function' && svgEl.getScreenCTM) {
            const pt = svgEl.createSVGPoint();
            // clientX/clientY are in viewport CSS pixels which CTM expects
            pt.x = (event.clientX != null ? event.clientX : (position.mouseX - window.pageXOffset));
            pt.y = (event.clientY != null ? event.clientY : (position.mouseY - window.pageYOffset));
            const ctm = svgEl.getScreenCTM();
            if (ctm && ctm.inverse) {
                const sp = pt.matrixTransform(ctm.inverse());
                x = sp.x;
                y = sp.y;
            }
        }
    } catch (e) { /* fallback below */
    }
    // 2) Next: use viewBox + getBoundingClientRect mapping
    if (x == null || !isFinite(x) || y == null || !isFinite(y)) {
        try {
            const svgEl = document.querySelector(`svg.drawingSVG[data-file-index="${fileIndex}"]`);
            if (svgEl) {
                const rect = svgEl.getBoundingClientRect();
                const vb = (svgEl.getAttribute('viewBox') || '').split(/\s+/).map(Number);
                const vbW = (vb && vb.length === 4) ? (vb[2] || imageSize.width) : imageSize.width;
                const vbH = (vb && vb.length === 4) ? (vb[3] || imageSize.height) : imageSize.height;
                const px = (position.mouseX - (rect.left + window.pageXOffset));
                const py = (position.mouseY - (rect.top + window.pageYOffset));
                x = px * (vbW / rect.width);
                y = py * (vbH / rect.height);
            }
        } catch (e) { /* fallback below */
        }
    }
    if (x == null || !isFinite(x) || y == null || !isFinite(y)) {
        // Fallback: Use layout (wrapImageArea) absolute offset and image scale
        x = (position.mouseX - position.layoutX) / imageSize.scale;
        y = (position.mouseY - position.layoutY) / imageSize.scale;
    }
    let imageAngle = $(`.drawingImage[data-file-index=${fileIndex}]`).attr("data-file-rotation");
    // 회전된 이미지의 회전 각도에 따라 이미지 위에서 출력되는 좌표값 변환
    if (imageAngle != 0) {
        let mousePosition = {x: x, y: y};
        let rotationMousePosition = page.fn.drawing.calcRotationPoint(mousePosition, fileIndex, imageAngle);
        x = rotationMousePosition.x;
        y = rotationMousePosition.y;
    }
    if (x < 0) {
        x = 0;
    } else if (x > imageSize.width) {
        x = imageSize.width;
    }
    if (y < 0) {
        y = 0;
    } else if (y > imageSize.height) {
        y = imageSize.height;
    }
    return {x: page.fn.drawing.limitMousePosition(x), y: page.fn.drawing.limitMousePosition(y)};
}
page.fn.event.addPointToObjectByEvent = function (object, event) {
    let point = page.fn.event.getPointOnFile(object.fileIndex, event);
    page.gateway(page.constants.gateway.command.add, _common.template.parseMessage(page.message.newPoint, {orderSeq: object.objectOrder}));

    // nếu là cube 6 point
    if (object.objectType === page.constants.drawType.draw6PointCube) {
        if (object.location.length > 1) {
            // top point of diagonal
            const topCorner = {x: object.location[0][0], y: object.location[0][1]}

            // bottom point of diagonal
            const bottomCorner = {x: object.location[1][0], y: object.location[1][1]}
            let p3 = undefined;
            let p4 = undefined;
            let p1 = undefined;
            let p2 = undefined;
            if (object.location.length === 4) {
                // coordinate p4
                p4 = {x: object.location[3][0], y: object.location[3][1]}
                p1 = {x: object.location[0][0], y: object.location[0][1]}
                p2 = {x: object.location[1][0], y: object.location[1][1]}
            } else if (object.location.length === 5) {
                p3 = {x: object.location[2][0], y: object.location[2][1]}
            }

            pushPointByIndex(object, topCorner, bottomCorner, object.location.length + 1, point, p3, p4);
        } else {
            object.location.push([
                point.x, point.y, page.constants.visibility6PointCube.visible, getUUID()
            ]);
        }
    } else {

        object.location.push([
            point.x, point.y, getUUID(), null
        ]);
    }
    page.fn.data.convertObjectLocation(object);
    page.fn.data.saveObject(object);
    return true;
}
page.fn.event.addPointToObjectByEdgePoint = function (object, x, y, edgePointId) {
    object.location.push([
        x, y, edgePointId
    ]);
    page.fn.data.convertObjectLocation(object);
    page.fn.data.saveObject(object);
    return true;
}
page.fn.event.moveObjectStart = function (event, target) {
    log.info(event, "page.fn.event.moveObjectStart");
    page.data.event.working = page.constants.method.moveObject;
    let position = page.fn.event.getMousePositionByTarget(event, target);
    let objectId = target.attr("objectId");
    let object = page.fn.data.getObject(page.data.event.currentFileIndex, objectId);
    if (object.objectType == page.constants.drawType.edgeLines) {
        return false;
    }
    page.fn.data.convertObjectLocation(object);

    page.data.drawing.object = _common.copy(object);
    page.data.event.target = target;
    page.data.event.objectId = objectId;
    page.data.event.position = {};
    page.data.event.position.startMouseX = position.mouseX;
    page.data.event.position.startMouseY = position.mouseY;
    page.data.event.position.originalLocation = _common.copy(object.location);
    page.data.event.isMovingObject = true;
}
page.fn.event.moveObjectMoving = function (event) {
    console.log('page.data.drawing.object.....', page.data.drawing.object)

    let position = page.fn.event.getMousePositionByTarget(event, page.data.event.target);
    let fileIndex = Number.parseInt(page.data.drawing.object.fileIndex);
    let scale = page.fn.data.getScale(fileIndex);
    let imageSize = page.fn.data.getImageOriginalSize(fileIndex);
    let imageAngle = $(`.drawingImage[data-file-index=${fileIndex}]`).attr("data-file-rotation");
    let locationLength = page.data.drawing.object.location.length;
    // B.box 오브젝트의 경우 location에 rotation값을 가지고 있기 때문에 오브젝트 이동 시 좌표값에 rotation값이 영향을 받지 않기 위해
    if (page.data.drawing.object.objectType == page.constants.drawType.rectangle && page.data.drawing.object.location[2] != null) {
        locationLength = page.data.drawing.object.location.length - 1;
    }
    if (page.data.drawing.object.objectType == 'drawCube2D') {
        locationLength = 2;
    }
    for (let idx = 0; idx < locationLength; idx++) {
        let o = page.data.event.position.originalLocation[idx];
        let p = page.data.drawing.object.location[idx];
        // 이미지가 회전된 상태에서 오브젝트 이동 시 회전된 마우스 좌표값에 따라 오브젝트를 이동 시켜주기 위해
        if (imageAngle == 0) {
            p[0] = o[0] + (position.mouseX - page.data.event.position.startMouseX) / scale;
            p[1] = o[1] + (position.mouseY - page.data.event.position.startMouseY) / scale;
        } else if (imageAngle == 90) {
            p[0] = o[0] + (position.mouseY - page.data.event.position.startMouseY) / scale;
            p[1] = o[1] + ((position.mouseX - page.data.event.position.startMouseX) * -1) / scale;
        } else if (imageAngle == 180) {
            p[0] = o[0] + ((position.mouseX - page.data.event.position.startMouseX) * -1) / scale;
            p[1] = o[1] + ((position.mouseY - page.data.event.position.startMouseY) * -1) / scale;
        } else if (imageAngle == 270) {
            p[0] = o[0] + ((position.mouseY - page.data.event.position.startMouseY) * -1) / scale;
            p[1] = o[1] + (position.mouseX - page.data.event.position.startMouseX) / scale;
        }
        if (p[0] < 0) {
            p[0] = 0;
        } else if (p[0] > imageSize.width) {
            p[0] = imageSize.width;
        }
        if (p[1] < 0) {
            p[1] = 0;
        } else if (p[1] > imageSize.height) {
            p[1] = imageSize.height;
        }
        // 모든 오브젝트 좌표 소수점 세팅
        p[0] = page.fn.drawing.limitMousePosition(p[0])
        p[1] = page.fn.drawing.limitMousePosition(p[1])
    }
    page.fn.data.convertObjectLocation(page.data.drawing.object);
    page.fn.drawing.renderObject(page.data.drawing.object);
    // Live projection for any object on BEV while moving the whole object
    try {
        const obj = page.data.drawing.object;
        if (window.__BEV_MODE__ === true && obj && Number(obj.fileIndex) === 0) {
            if (window.projectBevLiveFromCurrent) window.projectBevLiveFromCurrent();
        }
    } catch (_) {}
    try {
        const obj = page.data.drawing.object;
        if (obj && obj.objectType === page.constants.drawType.drawBevBox4 && Number(obj.fileIndex) === 0) {
            if (window.projectBevLiveFromCurrent) window.projectBevLiveFromCurrent();
        }
    } catch (_) { }
    if (page.data.drawing.object.objectType == 'drawCube2D') {
        const gapX = page.data.drawing.object.location[0][0] - page.data.event.position.originalLocation[0][0];
        const gapY = page.data.drawing.object.location[0][1] - page.data.event.position.originalLocation[0][1];
        if (page.data.drawing.object.location.length > 2) {
            page.data.drawing.object.location[2].x1 = parseFloat(page.data.event.position.originalLocation[2].x1) + gapX;
            page.data.drawing.object.location[2].x2 = parseFloat(page.data.event.position.originalLocation[2].x2) + gapX;
            page.data.drawing.object.location[2].x3 = parseFloat(page.data.event.position.originalLocation[2].x3) + gapX;
            page.data.drawing.object.location[2].x4 = parseFloat(page.data.event.position.originalLocation[2].x4) + gapX;
            page.data.drawing.object.location[2].y1 = parseFloat(page.data.event.position.originalLocation[2].y1) + gapY;
            page.data.drawing.object.location[2].y2 = parseFloat(page.data.event.position.originalLocation[2].y2) + gapY;
            page.data.drawing.object.location[2].y3 = parseFloat(page.data.event.position.originalLocation[2].y3) + gapY;
            page.data.drawing.object.location[2].y4 = parseFloat(page.data.event.position.originalLocation[2].y4) + gapY;

            const js = JSON.parse(objBoxSizeJson[page.data.drawing.object.objectId]);
            js.x1 = page.data.drawing.object.location[2].x1;
            js.x2 = page.data.drawing.object.location[2].x2;
            js.x3 = page.data.drawing.object.location[2].x3;
            js.x4 = page.data.drawing.object.location[2].x4;
            js.y1 = page.data.drawing.object.location[2].y1;
            js.y2 = page.data.drawing.object.location[2].y2;
            js.y3 = page.data.drawing.object.location[2].y3;
            js.y4 = page.data.drawing.object.location[2].y4;
            objBoxSizeJson[page.data.drawing.object.objectId] = JSON.stringify(js);
            let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
            let object = page.data.drawing.object;
            let g_polygon = svg.children("g[objectId='" + object.objectId + "'][data-objectType='drawCube2D']");
            let polygon = g_polygon.children('polygon');
            if (polygon.length > 0) {
                let points = js.x1 + ',' + js.y1 + ' ' + js.x2 + ',' + js.y2 + ' ' + js.x3 + ',' + js.y3 + ' ' + js.x4 + ',' + js.y4;
                polygon.attr('points', points);
            }
        }
    }
}
page.fn.event.moveObjectEnd = function (event) {
    page.data.event.isMovingObject = false;
    page.gateway(page.constants.gateway.command.add, page.message.moveObject);
    page.fn.data.saveObject(page.data.drawing.object);
    // Ensure final projection after finishing object move (any BEV object)
    try {
        const obj = page.data?.drawing?.object;
        if (window.__BEV_MODE__ === true && obj && Number(obj.fileIndex) === 0) {
            if (window.projectBevFromObject) {
                window.projectBevFromObject(obj);
            } else if (window.projectBevLiveFromCurrent) {
                window.projectBevLiveFromCurrent();
            }
        }
    } catch (_) {}
}
page.fn.event.movePointStart = function (event, target) {
    log.info(event, "page.fn.event.movePointStart");
    let position = page.fn.event.getMousePositionByTarget(event, target);
    let scale = page.fn.data.getScale(page.data.event.currentFileIndex);
    page.data.event.working = page.constants.method.movePoint;
    page.data.event.target = target;
    page.data.event.position = {};
    page.data.event.position.startMouseX = position.mouseX;
    page.data.event.position.startMouseY = position.mouseY;
    page.data.event.position.startTargetX = Number.parseFloat(target.attr("cx"));
    page.data.event.position.startTargetY = Number.parseFloat(target.attr("cy"));
    let targetObject = $(`rect[objectId=${target.attr("objectId")}]`);
    page.data.event.position.startTargetObjectBottom = Number.parseFloat(targetObject.attr("y")) + Number.parseFloat(targetObject.attr("height"));
    page.data.event.position.startTargetObjectTop = Number.parseFloat(targetObject.attr("y"));
    page.data.event.position.startTargetObjectRight = Number.parseFloat(targetObject.attr("x")) + Number.parseFloat(targetObject.attr("width"));
    page.data.event.position.startTargetObjectLeft = Number.parseFloat(targetObject.attr("x"));
    page.data.event.startedClone = page.fn.drawing.cloneObject("rect.object-body[objectId='" + page.data.event.selectedObjectId + "']");
    if (page.data.event.startedClone != null) {
        page.data.event.startedClone.attr("objectId", "clonedObj");
        page.data.event.startedClone.attr("id", "clonedObj");
        $("svg.drawingSVG[data-file-index='" + page.data.event.currentFileIndex + "']").append(page.data.event.startedClone);
        page.data.event.startedClonePos = page.fn.drawing.getAbsolutePosition("rect.object-body[objectId='" + page.data.event.selectedObjectId + "']", scale);
    }
    page.data.event.point = {
        isRect: false
        , groupX1: false
        , groupX2: false
        , groupY1: false
        , groupY2: false
        , rotation: false
        , isVISBox: false
        , visHandle: null
    };
    if (page.data.event.target.attr("group_x1") == "true") {
        page.data.event.point.isRect = true;
        page.data.event.point.groupX1 = true;
    }
    if (page.data.event.target.attr("group_x2") == "true") {
        page.data.event.point.isRect = true;
        page.data.event.point.groupX2 = true;
    }
    if (page.data.event.target.attr("group_y1") == "true") {
        page.data.event.point.isRect = true;
        page.data.event.point.groupY1 = true;
    }
    if (page.data.event.target.attr("group_y2") == "true") {
        page.data.event.point.isRect = true;
        page.data.event.point.groupY2 = true;
    }
    if (page.data.event.target.attr("rot") === "Y" || (page.data.event.target.hasClass && page.data.event.target.hasClass("bev-rotate-handle"))) {
        page.data.event.point.isRect = true;
        page.data.event.point.rotation = true;
        page.data.event.point.rad = 0;
        // Init rotate state for BEV: if still 2-point (just drawn), convert to 4 corners first
        if (page.data.drawing.object.objectType === page.constants.drawType.drawBevBox4
            && page.data.drawing.object.location.length >= 2) {
            try { page.fn.data.unConvertObjectLocation(page.data.drawing.object); } catch(_) {}
            if (page.data.drawing.object.location.length === 2) {
                try { page.fn.drawing.bevTwoToFourCorners(page.data.drawing.object); } catch(_) {}
            }
            const loc = _common.copyData(page.data.drawing.object.location);
            if (loc.length >= 4) {
                const cx = (loc[0][0] + loc[1][0] + loc[2][0] + loc[3][0]) / 4;
                const cy = (loc[0][1] + loc[1][1] + loc[2][1] + loc[3][1]) / 4;
                const pos = page.fn.event.getMousePositionByTarget(event, target);
                const startAngle = Math.atan2(pos.svgY - cy, pos.svgX - cx);
                const s0 = page.fn.drawing.bev.getState(page.data.drawing.object) || page.fn.drawing.bev.stateFromCorners(loc);
                if (s0) { s0.cx = cx; s0.cy = cy; }
                const metas = [loc[0]?.[2], loc[1]?.[2], loc[2]?.[2], loc[3]?.[2]];
                page.data.event.bevRotate = {center: {x: cx, y: cy}, startAngle, baseAngle: (s0?.angle || 0), metas};
            }
        }
    }
    page.data.event.point.isVISBox = false;
    page.data.event.point.visHandle = null;
    const visHandle = page.data.event.target.attr("data-vis-handle");
    if (visHandle) {
        page.data.event.point.isVISBox = true;
        page.data.event.point.visHandle = visHandle;
        try { page.fn.data.unConvertObjectLocation(page.data.drawing.object); } catch (_) {}
        const visLoc = _common.copyData(page.data.drawing.object.location);
        if (Array.isArray(visLoc) && visLoc.length >= 2) {
            const vx1 = Math.min(visLoc[0][0], visLoc[1][0]);
            const vx2 = Math.max(visLoc[0][0], visLoc[1][0]);
            const vy1 = Math.min(visLoc[0][1], visLoc[1][1]);
            const vy2 = Math.max(visLoc[0][1], visLoc[1][1]);
            page.data.event.visBox = {
                handle: visHandle,
                x1: vx1,
                y1: vy1,
                x2: vx2,
                y2: vy2,
                p3: visLoc.length >= 3 ? _common.copyData(visLoc[2]) : null
            };
        } else {
            page.data.event.visBox = null;
        }
    } else {
        page.data.event.point.isVISBox = false;
        page.data.event.point.visHandle = null;
        page.data.event.visBox = null;
    }

    // BEV rectangle constrained move: precompute basis and signs
    try {
        if (page.data.drawing.object?.objectType === page.constants.drawType.drawBevBox4
            && Array.isArray(page.data.drawing.object.location)
            && page.data.drawing.object.location.length >= 4
            && !page.data.event.point.rotation) {
            const loc = _common.copyData(page.data.drawing.object.location);
            // center
            const cx = (loc[0][0] + loc[1][0] + loc[2][0] + loc[3][0]) / 4;
            const cy = (loc[0][1] + loc[1][1] + loc[2][1] + loc[3][1]) / 4;
            // axes from current order (TL->TR->BR->BL)
            const u = {x: loc[1][0] - loc[0][0], y: loc[1][1] - loc[0][1]};
            const v = {x: loc[3][0] - loc[0][0], y: loc[3][1] - loc[0][1]};
            const nu = Math.hypot(u.x, u.y) || 1;
            const nv = Math.hypot(v.x, v.y) || 1;
            const e1 = {x: u.x / nu, y: u.y / nu}, e2 = {x: v.x / nv, y: v.y / nv};
            const a = nu / 2, b = nv / 2; // half-lengths
            // determine sign mapping per corner by dot with axes
            const signs = loc.map(p => {
                const dx = p[0] - cx, dy = p[1] - cy;
                const s1 = (dx * e1.x + dy * e1.y) >= 0 ? 1 : -1;
                const s2 = (dx * e2.x + dy * e2.y) >= 0 ? 1 : -1;
                return [s1, s2];
            });
            // which corner index is moving
            let idxStr = target.attr("index") || target.attr("pointNum");
            let idx = parseInt(idxStr, 10);
            if (target.attr("pointNum")) idx = idx - 1;
            page.data.event.bevRect = {center: {x: cx, y: cy}, e1, e2, a, b, signs, idx};
        }
    } catch (_) {
    }
}
page.fn.event.movePointMove = function (event) {
    let position = page.fn.event.getMousePositionByTarget(event, page.data.event.target);
    let fileIndex = Number.parseInt(page.data.drawing.object.fileIndex);
    let imageSize = page.fn.data.getImageOriginalSize(fileIndex);
    let scale = page.fn.data.getScale(fileIndex);
    let intervalX = ((position.mouseX - page.data.event.position.startMouseX) / scale);
    let intervalY = ((position.mouseY - page.data.event.position.startMouseY) / scale);
    let movedX = page.data.event.position.startTargetX + intervalX;
    let movedY = page.data.event.position.startTargetY + intervalY;
    let imageAngle = $(`.drawingImage[data-file-index=${fileIndex}]`).attr("data-file-rotation");
    // 이미지가 회전된 상태에서 오브젝트 포인트 이동 시 회전된 마우스 좌표값에 따라 이동시켜주기 위해
    if (imageAngle != 0) {
        if (imageAngle == 90) {
            movedX = page.data.event.position.startTargetX + intervalY;
            movedY = page.data.event.position.startTargetY - intervalX;
        } else if (imageAngle == 180) {
            movedX = page.data.event.position.startTargetX - intervalX;
            movedY = page.data.event.position.startTargetY - intervalY;
        } else if (imageAngle == 270) {
            movedX = page.data.event.position.startTargetX - intervalY;
            movedY = page.data.event.position.startTargetY + intervalX;
        }
    }
    // 모든 오브젝트 좌표 소수점 세팅
    movedX = page.fn.drawing.limitMousePosition(movedX)
    movedY = page.fn.drawing.limitMousePosition(movedY)
    if (movedX < 0) {
        movedX = 0;
    } else if (movedX > imageSize.width) {
        movedX = imageSize.width;
    }
    if (movedY < 0) {
        movedY = 0;
    } else if (movedY > imageSize.height) {
        movedY = imageSize.height;
    }
    // BEV B.box: live move/rotate of corners (4-corner mode) or interim 2-point mode
    try {
        const object = page.data.drawing.object;
        if (object && object.objectType === page.constants.drawType.drawBevBox4) {
            // Rotation via handle
            if (page.data.event.bevRotate && ((page.data.event.point?.rotation === true) || (page.data.event.target?.attr && (page.data.event.target.attr('rot') === 'Y' || (page.data.event.target.hasClass && page.data.event.target.hasClass('bev-rotate-handle')))))) {
                const position2 = page.fn.event.getMousePositionByTarget(event, page.data.event.target);
                const center = page.data.event.bevRotate.center;
                const curAngle = Math.atan2(position2.svgY - center.y, position2.svgX - center.x);
                const delta = curAngle - page.data.event.bevRotate.startAngle;
                // Work in unconverted (pixel) space
                try { page.fn.data.unConvertObjectLocation(object); } catch(_) {}
                // Use canonical state to compute rotation; avoid cumulative drift
                const s = page.fn.drawing.bev.getState(object) || page.fn.drawing.bev.stateFromCorners(object.location);
                if (s) {
                    s.cx = center.x; s.cy = center.y;
                    s.angle = (page.data.event.bevRotate.baseAngle || 0) + delta;
                    object.bevState = s;
                    const metas = page.data.event.bevRotate.metas || [object.location[0]?.[2], object.location[1]?.[2], object.location[2]?.[2], object.location[3]?.[2]];
                    object.location = page.fn.drawing.bev.cornersFromState(s, metas);
                    page.fn.data.convertObjectLocation(object);
                    page.fn.drawing.renderObject(object);
                    page.fn.drawing.renderObjectPoint(fileIndex, null, false, object);
                    try { if (window.projectBevLiveFromCurrent) window.projectBevLiveFromCurrent(); } catch (_) {}
                    return;
                }
            }

        }
    } catch (e) {
        log.warn('BEV move/rotate handler error', e);
    }
    try {
        let pointIndex = Number.parseInt(page.data.event.target.attr("index"));
        page.data.event.target.attr("cx", movedX).attr("cy", movedY);

        let object = page.data.drawing.object;
        if (page.data.event.point.isVISBox === true) {
            try { page.fn.data.unConvertObjectLocation(object); } catch (_) {}
            const meta = page.data.event.visBox || {};
            const handle = page.data.event.point.visHandle;
            const locSrc = object && object.location;
            if (!Array.isArray(locSrc) || locSrc.length < 2) {
                return;
            }
            const ensureNum = (value, fallback) => (typeof value === "number" && isFinite(value)) ? value : fallback;
            let vx1 = ensureNum(meta.x1, Math.min(locSrc[0][0], locSrc[1][0]));
            let vx2 = ensureNum(meta.x2, Math.max(locSrc[0][0], locSrc[1][0]));
            let vy1 = ensureNum(meta.y1, Math.min(locSrc[0][1], locSrc[1][1]));
            let vy2 = ensureNum(meta.y2, Math.max(locSrc[0][1], locSrc[1][1]));
            let rawX1 = vx1, rawX2 = vx2, rawY1 = vy1, rawY2 = vy2;
            let affectsX1 = false, affectsX2 = false, affectsY1 = false, affectsY2 = false;
            switch (handle) {
                case "edge-top":
                    rawY1 = movedY;
                    affectsY1 = true;
                    break;
                case "edge-right":
                    rawX2 = movedX;
                    affectsX2 = true;
                    break;
                case "edge-bottom":
                    rawY2 = movedY;
                    affectsY2 = true;
                    break;
                case "edge-left":
                    rawX1 = movedX;
                    affectsX1 = true;
                    break;
                case "p3-center":
                    break;
                default:
                    break;
            }
            let finalX1 = Math.min(rawX1, rawX2);
            let finalX2 = Math.max(rawX1, rawX2);
            let finalY1 = Math.min(rawY1, rawY2);
            let finalY2 = Math.max(rawY1, rawY2);
            const minSize = 0.5;
            if ((affectsX1 || affectsX2) && finalX2 - finalX1 < minSize) {
                if (affectsX1 && !affectsX2) {
                    finalX1 = finalX2 - minSize;
                } else if (!affectsX1 && affectsX2) {
                    finalX2 = finalX1 + minSize;
                }
            }
            if ((affectsY1 || affectsY2) && finalY2 - finalY1 < minSize) {
                if (affectsY1 && !affectsY2) {
                    finalY1 = finalY2 - minSize;
                } else if (!affectsY1 && affectsY2) {
                    finalY2 = finalY1 + minSize;
                }
            }
            const centerX = finalX1 + ((finalX2 - finalX1) / 2);
            const centerY = finalY1 + ((finalY2 - finalY1) / 2);
            if (locSrc.length >= 2) {
                locSrc[0][0] = finalX1;
                locSrc[0][1] = finalY1;
                locSrc[1][0] = finalX2;
                locSrc[1][1] = finalY2;
            }
            if (locSrc.length >= 3) {
                const p3 = locSrc[2];
                console.log("DEBUG: handle =", handle, "visHandle =", page.data.event.point.visHandle);
                if (handle === "p3-center" || page.data.event.point.visHandle === "p3-center") {
                    console.log("DEBUG: Xử lý p3-center, movedX =", movedX, "p3[0] =", p3[0]);

                    // P3 di chuyển trái phải theo chấm vàng, giữ Y cố định
                    const clampedY = Math.max(finalY1, Math.min(finalY2, p3[1])); // Giữ Y cố định
                    p3[0] = movedX; // P3 di chuyển theo X của chấm vàng
                    p3[1] = clampedY; // Giữ Y cố định

                    // Chấm vàng luôn ở giữa P3 (cùng tọa độ X, Y ở giữa box)
                    const p3CenterY = (finalY1 + finalY2) / 2; // Y ở giữa box
                    page.data.event.target.attr("cx", p3[0]).attr("cy", p3CenterY); // X theo P3, Y cố định

                    console.log("DEBUG: Sau khi xử lý, p3[0] =", p3[0], "target cx =", page.data.event.target.attr("cx"));
                }
                else {
                    p3[1] = Math.max(finalY1, Math.min(finalY2, p3[1]));
                }
            }
            if (handle !== "p3-center") {
                const handlePositions = {
                    "edge-top": {cx: centerX, cy: finalY1},
                    "edge-right": {cx: finalX2, cy: centerY},
                    "edge-bottom": {cx: centerX, cy: finalY2},
                    "edge-left": {cx: finalX1, cy: centerY}
                };
                const newPos = handlePositions[handle];
                if (newPos) {
                    page.data.event.target.attr("cx", newPos.cx).attr("cy", newPos.cy);
                }
            }
            page.fn.data.convertObjectLocation(object);
            page.fn.drawing.renderObject(object);
            page.fn.drawing.renderObjectPoint(fileIndex, null, false, object);
            return;
        }
        if (page.data.event.point.isRect == true) {
            if (page.data.event.point.groupX1 == true) {
                // 이미지가 회전된 상태로 B.box 오브젝트가 회전되어 있다면 수정하려는 반대변의 좌표를 마우스의 이동방향으로 이동시켜 오브젝트의 크기를 수정해주기 위해
                if (page.data.drawing.object.location[2] != null) {
                    if (page.data.drawing.object.location[2][0] > 90 || page.data.drawing.object.location[2][0] < -90) {
                        if (page.data.drawing.object.location[2][0] > 90) {
                            if (imageAngle == 0 || imageAngle == 90) {
                                page.data.drawing.object.location[1][0] = page.data.event.position.startTargetObjectRight + intervalX;
                            } else {
                                page.data.drawing.object.location[1][0] = page.data.event.position.startTargetObjectRight - intervalX;
                            }
                        } else {
                            if (imageAngle == 0 || imageAngle == 270) {
                                page.data.drawing.object.location[1][0] = page.data.event.position.startTargetObjectRight + intervalX;
                            } else {
                                page.data.drawing.object.location[1][0] = page.data.event.position.startTargetObjectRight - intervalX;
                            }
                        }
                    } else {
                        page.data.drawing.object.location[0][0] = movedX;
                    }
                } else {
                    // B.box 오브젝트의 좌변이 우변 보다 우측에 위치하게 되면 재수정 시 좌측변에 우측변이 붙어버리는 현상을 방지하기 위해
                    if (page.data.drawing.object.location[0][0] > page.data.drawing.object.location[1][0]) {
                        page.data.drawing.object.location[1][0] = movedX;
                        page.data.drawing.object.location[0][0] = page.data.event.position.startTargetObjectRight;
                    } else {
                        page.data.drawing.object.location[0][0] = movedX;
                        page.data.drawing.object.location[1][0] = page.data.event.position.startTargetObjectRight;
                    }
                }
            }
            if (page.data.event.point.groupX2 == true) {
                if (page.data.drawing.object.location[2] != null) {
                    if (page.data.drawing.object.location[2][0] > 90 || page.data.drawing.object.location[2][0] < -90) {
                        if (page.data.drawing.object.location[2][0] > 90) {
                            if (imageAngle == 0 || imageAngle == 90) {
                                page.data.drawing.object.location[0][0] = page.data.event.position.startTargetObjectLeft + intervalX;
                            } else {
                                page.data.drawing.object.location[0][0] = page.data.event.position.startTargetObjectLeft - intervalX;
                            }
                        } else {
                            if (imageAngle == 0 || imageAngle == 270) {
                                page.data.drawing.object.location[0][0] = page.data.event.position.startTargetObjectLeft + intervalX;
                            } else {
                                page.data.drawing.object.location[0][0] = page.data.event.position.startTargetObjectLeft - intervalX;
                            }
                        }
                    } else {
                        page.data.drawing.object.location[1][0] = movedX;
                    }
                } else {
                    if (page.data.drawing.object.location[0][0] > page.data.drawing.object.location[1][0]) {
                        page.data.drawing.object.location[1][0] = movedX;
                        page.data.drawing.object.location[0][0] = page.data.event.position.startTargetObjectLeft;
                    } else {
                        page.data.drawing.object.location[0][0] = movedX;
                        page.data.drawing.object.location[1][0] = page.data.event.position.startTargetObjectLeft;
                    }
                }
            }
            if (page.data.event.point.groupY1 == true) {
                if (page.data.drawing.object.location[2] != null) {
                    if (page.data.drawing.object.location[2][0] > 90 || page.data.drawing.object.location[2][0] < -90) {
                        if (page.data.drawing.object.location[2][0] > 90) {
                            if (imageAngle == 0 || imageAngle == 90) {
                                page.data.drawing.object.location[1][1] = page.data.event.position.startTargetObjectBottom + intervalY;
                            } else {
                                page.data.drawing.object.location[1][1] = page.data.event.position.startTargetObjectBottom - intervalY;
                            }
                        } else {
                            if (imageAngle == 0 || imageAngle == 270) {
                                page.data.drawing.object.location[1][1] = page.data.event.position.startTargetObjectBottom + intervalY;
                            } else {
                                page.data.drawing.object.location[1][1] = page.data.event.position.startTargetObjectBottom - intervalY;
                            }
                        }
                    } else {
                        page.data.drawing.object.location[0][1] = movedY;
                    }
                } else {
                    if (page.data.drawing.object.location[0][1] > page.data.drawing.object.location[1][1]) {
                        page.data.drawing.object.location[1][1] = movedY;
                        page.data.drawing.object.location[0][1] = page.data.event.position.startTargetObjectBottom;
                    } else {
                        page.data.drawing.object.location[0][1] = movedY;
                        page.data.drawing.object.location[1][1] = page.data.event.position.startTargetObjectBottom;
                    }
                }
            }
            if (page.data.event.point.groupY2 == true) {
                if (page.data.drawing.object.location[2] != null) {
                    if (page.data.drawing.object.location[2][0] > 90 || page.data.drawing.object.location[2][0] < -90) {
                        if (page.data.drawing.object.location[2][0] > 90) {
                            if (imageAngle == 0 || imageAngle == 90) {
                                page.data.drawing.object.location[0][1] = page.data.event.position.startTargetObjectTop + intervalY;
                            } else {
                                page.data.drawing.object.location[0][1] = page.data.event.position.startTargetObjectTop - intervalY;
                            }
                        } else {
                            if (imageAngle == 0 || imageAngle == 270) {
                                page.data.drawing.object.location[0][1] = page.data.event.position.startTargetObjectTop + intervalY;
                            } else {
                                page.data.drawing.object.location[0][1] = page.data.event.position.startTargetObjectTop - intervalY;
                            }

                        }
                    } else {
                        page.data.drawing.object.location[1][1] = movedY;
                    }
                } else {
                    if (page.data.drawing.object.location[0][1] > page.data.drawing.object.location[1][1]) {
                        page.data.drawing.object.location[0][1] = movedY;
                        page.data.drawing.object.location[1][1] = page.data.event.position.startTargetObjectTop;
                    } else {
                        page.data.drawing.object.location[1][1] = movedY;
                        page.data.drawing.object.location[0][1] = page.data.event.position.startTargetObjectTop;
                    }
                }
            }
            if (page.data.event.point.rotation == true) {
                let centerX = page.data.drawing.object.location[0][0] + ((page.data.drawing.object.location[1][0] - page.data.drawing.object.location[0][0]) / 2)
                let centerY = page.data.drawing.object.location[0][1] + ((page.data.drawing.object.location[1][1] - page.data.drawing.object.location[0][1]) / 2)
                // 이미지가 회전된 상태에서 B.box 오브젝트를 회전할 때 회전된 마우스 좌표로 출력해주기 위해
                if (imageAngle != 0) {
                    let mousePosition = {x: position.svgX, y: position.svgY};
                    let rotationMousePosition = page.fn.drawing.calcRotationPoint(mousePosition, page.data.drawing.object.fileIndex, imageAngle)
                    position.svgX = rotationMousePosition.x;
                    position.svgY = rotationMousePosition.y;
                }
                let mouseX = position.svgX
                let mouseY = position.svgY
                let rd = {
                    rad: 0
                    , radX: 0
                    , radY: 0
                };
                rd.radX = (mouseX - centerX);
                rd.radY = (mouseY - centerY);
                rd.rad = Math.atan2(rd.radY, rd.radX);
                rd.rad = ((rd.rad * 180 / Math.PI) + 90);
                // log.info(rd, "rad-1");
                // rad = ((rad*180)/Math.PI) + 90;
                // log.info(rad, "rad-2");
                rd.rad = page.fn.drawing.restoreRad(rd.rad);
                // log.info(rad, "rad-3");
                if (isNaN(rd.rad) == true) {
                    rd.rad = 0;
                }
                log.info(position, "position");
                log.info(rd, "rad");
                page.data.drawing.object.location[2] = [rd.rad, getUUID()];
            }
            if (page.data.event.point.rotation != true && page.data.drawing.object.location.length > 2 && page.data.drawing.object.location[2][0] != 0) {
                let clone = $("#clonedObj2");
                if (clone.length == 0) {
                    clone = page.fn.drawing.cloneObject("#clonedObj");
                    clone.attr("id", "clonedObj2");
                    page.dom.svg.append(clone);
                }

                let rot = page.data.drawing.object.location[2][0];
                let tp = page.data.event.target;

                clone.attr("id", "clonedObj2");
                page.dom.svg.append(clone);
                let x1 = Math.min(page.data.drawing.object.location[0][0], page.data.drawing.object.location[1][0]);
                let x2 = Math.max(page.data.drawing.object.location[0][0], page.data.drawing.object.location[1][0]);
                let y1 = Math.min(page.data.drawing.object.location[0][1], page.data.drawing.object.location[1][1]);
                let y2 = Math.max(page.data.drawing.object.location[0][1], page.data.drawing.object.location[1][1]);

                clone.attr("x", x1);
                clone.attr("y", y1);
                clone.attr("width", x2 - x1);
                clone.attr("height", y2 - y1);
                clone.attr("objectId", "clonedObj2");

                let beforePosition = page.data.event.startedClonePos;
                let nextPosition = page.fn.drawing.getAbsolutePosition("#clonedObj2", scale);
                let nloc = _common.copy(page.data.drawing.object.location);
                let dix1 = (nextPosition.x - beforePosition.x) / imageSize.scale;
                let dix2 = ((nextPosition.x + nextPosition.width) - (beforePosition.x + beforePosition.width)) / imageSize.scale;
                let diy1 = (nextPosition.y - beforePosition.y) / imageSize.scale;
                let diy2 = ((nextPosition.y + nextPosition.height) - (beforePosition.y + beforePosition.height)) / imageSize.scale;
                log.info("dix1=" + dix1 + ", dix2=" + dix2 + ", diy1=" + diy1 + ", diy2=" + diy2);
                let bx = nloc[0][0];
                let by = nloc[0][1];
                let bw = nloc[1][0] - nloc[0][0];
                let bh = nloc[1][1] - nloc[0][1];
                if (rot > 0 && rot < 90) {
                    if (tp.attr("pointNum") == "4") {
                        log.info("resize point4-1");
                        if (imageAngle == 0) {
                            nloc[1][0] = nloc[1][0] - dix2;
                            nloc[0][1] = nloc[0][1] - diy2;
                            nloc[1][1] = nloc[1][1] - diy2;
                        } else if (imageAngle == 90) {
                            nloc[0][0] = nloc[0][0] - diy2;
                            nloc[1][0] = nloc[1][0] - diy2;
                            nloc[0][1] = nloc[0][1] + dix1;
                            nloc[1][1] = nloc[1][1] + dix1;
                        } else if (imageAngle == 180) {
                            nloc[0][0] = nloc[0][0] + dix1;
                            nloc[1][0] = nloc[1][0] + dix1;
                            nloc[0][1] = nloc[0][1] + diy1;
                            nloc[1][1] = nloc[1][1] + diy1;
                        } else if (imageAngle == 270) {
                            nloc[0][0] = nloc[0][0] + diy1;
                            nloc[1][0] = nloc[1][0] + diy1;
                            nloc[0][1] = nloc[0][1] - dix2;
                            nloc[1][1] = nloc[1][1] - dix2;
                        }
                    } else if (tp.attr("pointNum") == "5") {
                        log.info("resize point5-1");
                        if (imageAngle == 0) {
                            nloc[0][0] = nloc[0][0] - dix1;
                            nloc[0][1] = nloc[0][1] - diy1;
                            nloc[1][1] = nloc[1][1] - diy1;
                        } else if (imageAngle == 90) {
                            nloc[0][0] = nloc[0][0] - diy1;
                            nloc[0][1] = nloc[0][1] + dix2;
                            nloc[1][1] = nloc[1][1] + dix2;
                        } else if (imageAngle == 180) {
                            nloc[0][0] = nloc[0][0] + dix2;
                            nloc[0][1] = nloc[0][1] + diy2;
                            nloc[1][1] = nloc[1][1] + diy2;
                        } else if (imageAngle == 270) {
                            nloc[0][0] = nloc[0][0] + diy2;
                            nloc[0][1] = nloc[0][1] - dix1;
                            nloc[1][1] = nloc[1][1] - dix1;
                        }
                    } else if (tp.attr("pointNum") == "2") {
                        log.info("resize point2-1");
                        if (imageAngle == 0) {
                            nloc[0][0] = nloc[0][0] - dix1;
                            nloc[1][0] = nloc[1][0] - dix1;
                            nloc[1][1] = nloc[1][1] - diy2;
                        } else if (imageAngle == 90) {
                            nloc[0][0] = nloc[0][0] - diy1;
                            nloc[1][0] = nloc[1][0] - diy1;
                            nloc[0][1] = nloc[0][1] + dix1;
                            nloc[1][1] = nloc[1][1] + dix1;
                        } else if (imageAngle == 180) {
                            nloc[0][0] = nloc[0][0] + dix2;
                            nloc[1][0] = nloc[1][0] + dix2;
                            nloc[0][1] = nloc[0][1] + diy1;
                            nloc[1][1] = nloc[1][1] + diy1;
                        } else if (imageAngle == 270) {
                            nloc[0][0] = nloc[0][0] + diy2;
                            nloc[1][0] = nloc[1][0] + diy2;
                            nloc[0][1] = nloc[0][1] - dix2;
                            nloc[1][1] = nloc[1][1] - dix2;
                        }
                    } else if (tp.attr("pointNum") == "7") {
                        log.info("resize point7-1");
                        if (imageAngle == 0) {
                            nloc[0][0] = nloc[0][0] - dix2;
                            nloc[1][0] = nloc[1][0] - dix2;
                            nloc[0][1] = nloc[0][1] - diy1;
                        } else if (imageAngle == 90) {
                            nloc[0][0] = nloc[0][0] - diy2;
                            nloc[1][0] = nloc[1][0] - diy2;
                            nloc[0][1] = nloc[0][1] + dix2;
                        } else if (imageAngle == 180) {
                            nloc[0][0] = nloc[0][0] + dix1;
                            nloc[1][0] = nloc[1][0] + dix1;
                            nloc[0][1] = nloc[0][1] + diy2;
                        } else if (imageAngle == 270) {
                            nloc[0][0] = nloc[0][0] + diy1;
                            nloc[1][0] = nloc[1][0] + diy1;
                            nloc[0][1] = nloc[0][1] - dix1;
                        }
                    } else if (tp.attr("pointNum") == "1") {
                        log.info("resize point1-1");
                        nloc[0][0] = nloc[0][0] - dix2;
                        nloc[1][0] = nloc[1][0] - dix2;
                        nloc[0][1] = nloc[0][1] - diy1;
                    }
                } else if (rot > -90 && rot < 0) {
                    if (tp.attr("pointNum") == "4") {
                        log.info("resize point4-3");
                        if (imageAngle == 0) {
                            nloc[1][0] = nloc[1][0] - dix2;
                            nloc[0][1] = nloc[0][1] - diy1;
                            nloc[1][1] = nloc[1][1] - diy1;
                        } else if (imageAngle == 90) {
                            nloc[1][0] = nloc[1][0] - diy2;
                            nloc[0][1] = nloc[0][1] + dix2;
                            nloc[1][1] = nloc[1][1] + dix2;
                        } else if (imageAngle == 180) {
                            nloc[0][0] = nloc[0][0] + dix1;
                            nloc[1][0] = nloc[1][0] + dix1;
                            nloc[0][1] = nloc[0][1] + diy2;
                            nloc[1][1] = nloc[1][1] + diy2;
                        } else if (imageAngle == 270) {
                            nloc[0][0] = nloc[0][0] + diy1;
                            nloc[1][0] = nloc[1][0] + diy1;
                            nloc[0][1] = nloc[0][1] - dix1;
                            nloc[1][1] = nloc[1][1] - dix1;
                        }
                    } else if (tp.attr("pointNum") == "5") {
                        log.info("resize point5-3");
                        if (imageAngle == 0) {
                            nloc[0][0] = nloc[0][0] - dix1;
                            nloc[0][1] = nloc[0][1] - diy2;
                            nloc[1][1] = nloc[1][1] - diy2;
                        } else if (imageAngle == 90) {
                            nloc[0][0] = nloc[0][0] - diy1;
                            nloc[0][1] = nloc[0][1] + dix1;
                            nloc[1][1] = nloc[1][1] + dix1;
                        } else if (imageAngle == 180) {
                            nloc[0][0] = nloc[0][0] + dix2;
                            nloc[0][1] = nloc[0][1] + diy1;
                            nloc[1][1] = nloc[1][1] + diy1;
                        } else if (imageAngle == 270) {
                            nloc[0][0] = nloc[0][0] + diy2;
                            nloc[0][1] = nloc[0][1] - dix2;
                            nloc[1][1] = nloc[1][1] - dix2;
                        }
                    } else if (tp.attr("pointNum") == "2") {
                        log.info("resize point2-3");
                        if (imageAngle == 0) {
                            nloc[0][0] = nloc[0][0] - dix2;
                            nloc[1][0] = nloc[1][0] - dix2;
                            nloc[1][1] = nloc[1][1] - diy2;
                        } else if (imageAngle == 90) {
                            nloc[0][0] = nloc[0][0] - diy2;
                            nloc[1][0] = nloc[1][0] - diy2;
                            nloc[0][1] = nloc[0][1] + dix1;
                            nloc[1][1] = nloc[1][1] + dix1;
                        } else if (imageAngle == 180) {
                            nloc[0][0] = nloc[0][0] + dix1;
                            nloc[1][0] = nloc[1][0] + dix1;
                            nloc[0][1] = nloc[0][1] + diy1;
                            nloc[1][1] = nloc[1][1] + diy1;
                        } else if (imageAngle == 270) {
                            nloc[0][0] = nloc[0][0] + diy1;
                            nloc[1][0] = nloc[1][0] + diy1;
                            nloc[0][1] = nloc[0][1] - dix2;
                            nloc[1][1] = nloc[1][1] - dix2;
                        }
                    } else if (tp.attr("pointNum") == "7") {
                        log.info("resize point7-3");
                        if (imageAngle == 0) {
                            nloc[0][0] = nloc[0][0] - dix1;
                            nloc[1][0] = nloc[1][0] - dix1;
                            nloc[0][1] = nloc[0][1] - diy1;
                        } else if (imageAngle == 90) {
                            nloc[0][0] = nloc[0][0] - diy1;
                            nloc[1][0] = nloc[1][0] - diy1;
                            nloc[0][1] = nloc[0][1] + dix2;
                        } else if (imageAngle == 180) {
                            nloc[0][0] = nloc[0][0] + dix2;
                            nloc[1][0] = nloc[1][0] + dix2;
                            nloc[0][1] = nloc[0][1] + diy2;
                            nloc[1][1] = nloc[1][1] + diy2;
                        } else if (imageAngle == 270) {
                            nloc[0][0] = nloc[0][0] + diy2;
                            nloc[1][0] = nloc[1][0] + diy2;
                            nloc[0][1] = nloc[0][1] - dix1;
                            nloc[1][1] = nloc[1][1] - dix1;
                        }
                    } else if (tp.attr("pointNum") == "1") {
                        log.info("resize point1-3");
                        nloc[0][0] = nloc[0][0] - dix2;
                        nloc[1][0] = nloc[1][0] - dix2;
                        nloc[0][1] = nloc[0][1] - diy1;
                    }
                } else if (rot > 90) {
                    if (tp.attr("pointNum") == "4") {
                        log.info("resize point4-2");
                        if (imageAngle == 0) {
                            bx = bx - dix1;
                            by = by - diy2;
                            nloc[0][0] = bx;
                            nloc[1][0] = bx + bw;
                            nloc[0][1] = by;
                            nloc[1][1] = by + bh;
                        } else if (imageAngle == 90) {
                            nloc[0][0] = nloc[0][0] - diy1;
                            nloc[1][0] = nloc[1][0] - diy1;
                            nloc[0][1] = nloc[0][1] + dix1;
                            nloc[1][1] = nloc[1][1] + dix1;
                        } else if (imageAngle == 180) {
                            nloc[0][0] = nloc[0][0] + dix2;
                            nloc[0][1] = nloc[0][1] + diy1;
                            nloc[1][1] = nloc[1][1] + diy1;
                        } else if (imageAngle == 270) {
                            nloc[0][0] = nloc[0][0] + diy2;
                            nloc[0][1] = nloc[0][1] - dix2;
                            nloc[1][1] = nloc[1][1] - dix2;
                        }
                    } else if (tp.attr("pointNum") == "5") {
                        log.info("resize point5-2");
                        if (imageAngle == 0) {
                            bx = bx - dix2;
                            by = by - diy1;
                            nloc[0][0] = bx;
                            nloc[1][0] = bx + bw;
                            nloc[0][1] = by;
                            nloc[1][1] = by + bh;
                        } else if (imageAngle == 90) {
                            nloc[0][0] = nloc[0][0] - diy2;
                            nloc[1][0] = nloc[1][0] - diy2;
                            nloc[0][1] = nloc[0][1] + dix2;
                            nloc[1][1] = nloc[1][1] + dix2;
                        } else if (imageAngle == 180) {
                            nloc[0][0] = nloc[0][0] + dix1;
                            nloc[1][0] = nloc[1][0] + dix1;
                            nloc[0][1] = nloc[0][1] + diy2;
                            nloc[1][1] = nloc[1][1] + diy2;
                        } else if (imageAngle == 270) {
                            nloc[0][0] = nloc[0][0] + diy1;
                            nloc[1][0] = nloc[1][0] + diy1;
                            nloc[0][1] = nloc[0][1] - dix1;
                            nloc[1][1] = nloc[1][1] - dix1;
                        }
                    } else if (tp.attr("pointNum") == "2") {
                        log.info("resize point2-2");
                        if (imageAngle == 0) {
                            nloc[0][0] = nloc[0][0] - dix1;
                            nloc[1][0] = nloc[1][0] - dix1;
                            nloc[0][1] = nloc[0][1] - diy1;
                        } else if (imageAngle == 90) {
                            nloc[0][0] = nloc[0][0] - diy1;
                            nloc[1][0] = nloc[1][0] - diy1;
                            nloc[0][1] = nloc[0][1] + dix2;
                            nloc[1][1] = nloc[1][1] + dix2;
                        } else if (imageAngle == 180) {
                            nloc[0][0] = nloc[0][0] + dix2;
                            nloc[1][0] = nloc[1][0] + dix2;
                            nloc[0][1] = nloc[0][1] + diy2;
                            nloc[1][1] = nloc[1][1] + diy2;
                        } else if (imageAngle == 270) {
                            nloc[0][0] = nloc[0][0] + diy2;
                            nloc[1][0] = nloc[1][0] + diy2;
                            nloc[0][1] = nloc[0][1] - dix1;
                            nloc[1][1] = nloc[1][1] - dix1;
                        }
                    } else if (tp.attr("pointNum") == "7") {
                        log.info("resize point7-2");
                        if (imageAngle == 0) {
                            by = by - diy2;
                            bx = bx - dix2;
                            nloc[0][0] = bx;
                            nloc[1][0] = bx + bw;
                            nloc[0][1] = by;
                            nloc[1][1] = by + bh;
                        } else if (imageAngle == 90) {
                            nloc[0][0] = nloc[0][0] - diy2;
                            nloc[1][0] = nloc[1][0] - diy2;
                            nloc[0][1] = nloc[0][1] + dix1;
                            nloc[1][1] = nloc[1][1] + dix1;
                        } else if (imageAngle == 180) {
                            nloc[0][0] = nloc[0][0] + dix1;
                            nloc[1][0] = nloc[1][0] + dix1;
                            nloc[0][1] = nloc[0][1] + diy1;
                            nloc[1][1] = nloc[1][1] + diy1;
                        } else if (imageAngle == 270) {
                            nloc[0][0] = nloc[0][0] + diy1;
                            nloc[1][0] = nloc[1][0] + diy1;
                            nloc[0][1] = nloc[0][1] - dix2;
                            nloc[1][1] = nloc[1][1] - dix2;
                        }
                    } else if (tp.attr("pointNum") == "1") {
                        log.info("resize point1-2");
                    }
                } else if (rot > -180 && rot < -90) {
                    if (tp.attr("pointNum") == "4") {
                        log.info("resize point4-4");
                        if (imageAngle == 0) {
                            bx = bx - dix1;
                            by = by - diy1;
                            nloc[0][0] = bx;
                            nloc[1][0] = bx + bw;
                            nloc[0][1] = by;
                            nloc[1][1] = by + bh;
                        } else if (imageAngle == 90) {
                            nloc[0][0] = nloc[0][0] - diy1;
                            nloc[1][0] = nloc[1][0] - diy1;
                            nloc[0][1] = nloc[0][1] + dix2;
                            nloc[1][1] = nloc[1][1] + dix2;
                        } else if (imageAngle == 180) {
                            nloc[0][0] = nloc[0][0] + dix2;
                            nloc[1][0] = nloc[1][0] + dix2;
                            nloc[0][1] = nloc[0][1] + diy2;
                            nloc[1][1] = nloc[1][1] + diy2;
                        } else if (imageAngle == 270) {
                            nloc[0][0] = nloc[0][0] + diy2;
                            nloc[1][0] = nloc[1][0] + diy2;
                            nloc[0][1] = nloc[0][1] - dix1;
                            nloc[1][1] = nloc[1][1] - dix1;
                        }
                    } else if (tp.attr("pointNum") == "5") {
                        log.info("resize point5-4");
                        if (imageAngle == 0) {
                            bx = bx - dix2;
                            by = by - diy2;
                            nloc[0][0] = bx;
                            nloc[1][0] = bx + bw;
                            nloc[0][1] = by;
                            nloc[1][1] = by + bh;
                        } else if (imageAngle == 90) {
                            nloc[0][0] = nloc[0][0] - diy2;
                            nloc[1][0] = nloc[1][0] - diy2;
                            nloc[0][1] = nloc[0][1] + dix1;
                            nloc[1][1] = nloc[1][1] + dix1;
                        } else if (imageAngle == 180) {
                            nloc[0][0] = nloc[0][0] + dix1;
                            nloc[1][0] = nloc[1][0] + dix1;
                            nloc[0][1] = nloc[0][1] + diy1;
                            nloc[1][1] = nloc[1][1] + diy1;
                        } else if (imageAngle == 270) {
                            nloc[0][0] = nloc[0][0] + diy1;
                            nloc[1][0] = nloc[1][0] + diy1;
                            nloc[0][1] = nloc[0][1] - dix2;
                            nloc[1][1] = nloc[1][1] - dix2;
                        }
                    } else if (tp.attr("pointNum") == "2") {
                        log.info("resize point2-4");
                        if (imageAngle == 0) {
                            bx = bx - dix2;
                            by = by - diy1;
                            nloc[0][0] = bx;
                            nloc[1][0] = bx + bw;
                            nloc[0][1] = by;
                            nloc[1][1] = by + bh;
                        } else if (imageAngle == 90) {
                            nloc[0][0] = nloc[0][0] - diy2;
                            nloc[1][0] = nloc[1][0] - diy2;
                            nloc[0][1] = nloc[0][1] + dix2;
                            nloc[1][1] = nloc[1][1] + dix2;
                        } else if (imageAngle == 180) {
                            nloc[0][0] = nloc[0][0] + dix1;
                            nloc[1][0] = nloc[1][0] + dix1;
                            nloc[0][1] = nloc[0][1] + diy2;
                            nloc[1][1] = nloc[1][1] + diy2;
                        } else if (imageAngle == 270) {
                            nloc[0][0] = nloc[0][0] + diy1;
                            nloc[1][0] = nloc[1][0] + diy1;
                            nloc[0][1] = nloc[0][1] - dix1;
                            nloc[1][1] = nloc[1][1] - dix1;
                        }
                    } else if (tp.attr("pointNum") == "7") {
                        log.info("resize point7-4");
                        if (imageAngle == 0) {
                            bx = bx - dix1;
                            by = by - diy2;
                            nloc[0][0] = bx;
                            nloc[1][0] = bx + bw;
                            nloc[0][1] = by;
                            nloc[1][1] = by + bh;
                        } else if (imageAngle == 90) {
                            nloc[0][0] = nloc[0][0] - diy1;
                            nloc[1][0] = nloc[1][0] - diy1;
                            nloc[0][1] = nloc[0][1] + dix1;
                            nloc[1][1] = nloc[1][1] + dix1;
                        } else if (imageAngle == 180) {
                            nloc[0][0] = nloc[0][0] + dix2;
                            nloc[1][0] = nloc[1][0] + dix2;
                            nloc[0][1] = nloc[0][1] + diy1;
                            nloc[1][1] = nloc[1][1] + diy1;
                        } else if (imageAngle == 270) {
                            nloc[0][0] = nloc[0][0] + diy2;
                            nloc[1][0] = nloc[1][0] + diy2;
                            nloc[0][1] = nloc[0][1] - dix2;
                            nloc[1][1] = nloc[1][1] - dix2;
                        }
                    }
                } else {
                    log.warn("undefined rotation value, " + page.data.drawing.object);
                }
                page.data.drawing.object.location = nloc;
            }
        } else if (object.objectType === page.constants.drawType.draw6PointCube) {

            const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
            const distance = (a, b) => (a - b);
            if (object.location.length === 2) {

                object.isMovePoint = true
                const targetId = position.target.attr("id");
                const mouseX = position.svgX;
                const mouseY = position.svgY;
                let [p1, p2,] = object.location;
                if (targetId === p1[3]) {
                    // Giới hạn ngang: không đi qua bên phải p2
                    const rightLimit = p2[0];
                    const bottomLimit = p2[1];

                    p1[0] = clamp(mouseX, -Infinity, rightLimit);
                    p1[1] = clamp(mouseY, -Infinity, bottomLimit);


                } else if (targetId === p2[3]) {
                    const leftLimit = p1[0]
                    const topLimit = p1[1];

                    p2[0] = clamp(mouseX, leftLimit, Infinity);
                    p2[1] = clamp(mouseY, topLimit, Infinity);

                }
                object.location = [p1, p2];
                if (object.allPointListOfTheBox) {

                    object.allPointListOfTheBox.p1.x = p1[0]
                    object.allPointListOfTheBox.p1.y = p1[1]
                    object.allPointListOfTheBox.p1.v = p1[2]
                    object.allPointListOfTheBox.p1.id = p1[3]

                    object.allPointListOfTheBox.p2.x = p2[0]
                    object.allPointListOfTheBox.p2.y = p2[1]
                    object.allPointListOfTheBox.p2.v = p2[2]
                    object.allPointListOfTheBox.p2.id = p2[3]
                } else {
                    let allPointListOfTheBox = {
                        p1: {x: p1[0], y: p1[1], v: p1[2], id: p1[3]},              // top-left
                        p2: {x: p2[0], y: p2[1], v: p2[2], id: p2[3]},              // bottom-right
                        p3: {x: 2, y: 2, v: 1, id: 'id3'},              // p3
                        p4: {x: 3, y: 3, v: 1, id: 'id4'},              // p4
                        p5: {x: 4, y: 4, v: 1, id: 'id5'},              // p5
                        p6: {x: 5, y: 5, v: 1, id: 'id6'},              // p6
                        p7: {x: 6, y: 6, v: 1, id: 'id13'},          // top-right (giả lập)
                        p8: {x: 7, y: 7, v: 1, id: 'id26'}           // bottom-left (giả lập)

                    };
                    object.allPointListOfTheBox = allPointListOfTheBox;
                }


            } else {
                // Destructure existing 8 points from object.location
                let [p1, p2, p3, p4, p5, p6, p7, p8] = object.location;

                // Compute center X of the top edge (p1 → p2)
                const centerX = p1[0] + (p2[0] - p1[0]) / 2;
                // Determine whether the “front face” of the cube is on the right side
                const isRight = p4[0] >= centerX;

                // Identify which control-point was clicked
                const targetId = position.target.attr("id");
                // Current mouse coordinates in SVG space
                const mouseX = position.svgX;
                const mouseY = position.svgY;

                // Use a switch-case on targetId for clarity, instead of a long if-else chain
                switch (targetId) {
                    // ────────────────────────────────────────────────────────────────────────
                    case p1[3]:
                        // p1: Top-left corner of the 6-point “cube”
                        // ------------------------------------------------
                        // 1) Compute horizontal limit so p1 cannot move past p3 or p6
                        //    (whichever is closer to the mouse)
                        const rightLimitForP1 = distance(mouseX, p3[0]) > distance(mouseX, p6[0])
                            ? p3[0]
                            : p6[0];
                        // 2) Vertical limit so p1 never goes below the line of p4
                        const bottomLimitForP1 = p4[1];

                        // 3) Clamp p1.x between -Infinity and rightLimitForP1
                        p1[0] = clamp(mouseX, -Infinity, rightLimitForP1);
                        // 4) Clamp p1.y between -Infinity and bottomLimitForP1
                        p1[1] = clamp(mouseY, -Infinity, bottomLimitForP1);

                        // 5) Recompute dependent points p3, p4, p5, p6, p7, p8
                        //    because p1 moved. Pass `isMovePoint12 = true` to updateDependentPointsIn6Cube.
                        [p3, p4, p5, p6, p7, p8] = updateDependentPointsIn6Cube(
                            p1, p2, p3, p4, p5, p6, p7, p8,
                            isRight,
                            true
                        );
                        break;

                    // ────────────────────────────────────────────────────────────────────────
                    case p2[3]:
                        // p2: Bottom-right corner of the 6-point “cube”
                        // ------------------------------------------------
                        // 1) Compute horizontal limit so p2 cannot move past p3 or p6
                        //    (whichever is closer to the mouse). Use “leftLimit” for the X-axis.
                        const leftLimitForP2 = distance(mouseX, p3[0]) < distance(mouseX, p6[0])
                            ? p3[0]
                            : p6[0];
                        // 2) Vertical limit so p2 never goes above the line of p5
                        const topLimitForP2 = p5[1];

                        // 3) Clamp p2.x between leftLimitForP2 and +Infinity
                        p2[0] = clamp(mouseX, leftLimitForP2, Infinity);
                        // 4) Clamp p2.y between topLimitForP2 and +Infinity
                        p2[1] = clamp(mouseY, topLimitForP2, Infinity);

                        // 5) Recompute dependent points p3, p4, p5, p6, p7, p8
                        //    because p2 moved. Pass `isMovePoint12 = true`.
                        [p3, p4, p5, p6, p7, p8] = updateDependentPointsIn6Cube(
                            p1, p2, p3, p4, p5, p6, p7, p8,
                            isRight,
                            true
                        );
                        break;

                    // ────────────────────────────────────────────────────────────────────────
                    case p3[3]:
                        // p3: Middle point on top edge, only moves horizontally, Y = p1.y
                        // ------------------------------------------------
                        // Restrict p3.x between the current p1.x and p2.x
                        p3[0] = clamp(mouseX, Math.min(p1[0], p2[0]), Math.max(p1[0], p2[0]));
                        // Keep p3.y locked to the same Y as p1
                        p3[1] = p1[1];
                        break;

                    // ────────────────────────────────────────────────────────────────────────
                    case p4[3]:
                        // p4: Middle point on right “vertical” edge, only moves vertically
                        // ------------------------------------------------
                        // 1) Snap p4.x to either p2.x (if the cube is “facing right”) or p1.x (if facing left)
                        p4[0] = isRight ? p2[0] : p1[0];
                        // 2) Restrict p4.y between the Y of p1 (top) and the Y of p5 (bottom)
                        p4[1] = clamp(mouseY, Math.min(p1[1], p5[1]), Math.max(p1[1], p5[1]));
                        break;

                    // ────────────────────────────────────────────────────────────────────────
                    case p5[3]:
                        // p5: Middle point on bottom “vertical” edge, only moves vertically
                        // ------------------------------------------------
                        // 1) Snap p5.x to the current p4.x (so it stays aligned)
                        p5[0] = p4[0];
                        // 2) Restrict p5.y between the Y of p4 (top) and the Y of p2 (bottom)
                        p5[1] = clamp(mouseY, Math.min(p4[1], p2[1]), Math.max(p4[1], p2[1]));
                        break;

                    // ────────────────────────────────────────────────────────────────────────
                    case p6[3]:
                        // p6: Bottom point on top face (third corner), only moves horizontally
                        // ------------------------------------------------
                        // Restrict p6.x between the current p1.x and p2.x
                        p6[0] = clamp(mouseX, Math.min(p1[0], p2[0]), Math.max(p1[0], p2[0]));
                        // Keep p6.y locked to the same Y as p2
                        p6[1] = p2[1];
                        break;

                    // ────────────────────────────────────────────────────────────────────────
                    case p7[3]:
                        // p7: Bottom-left corner of the 6-point “cube”
                        // ------------------------------------------------
                        // 1) Compute horizontal limit so p7 cannot move past p3 or p6
                        //    (pick whichever is closer to the mouse for leftLimit)
                        const leftLimitForP7 = distance(mouseX, p3[0]) < distance(mouseX, p6[0])
                            ? p3[0]
                            : p6[0];
                        // 2) Vertical limit so p7 never goes below p4’s current Y
                        const bottomLimitForP7 = p4[1];

                        // 3) Clamp p7.x between leftLimitForP7 and +Infinity
                        p7[0] = clamp(mouseX, leftLimitForP7, Infinity);
                        // 4) Clamp p7.y between -Infinity and bottomLimitForP7
                        p7[1] = clamp(mouseY, -Infinity, bottomLimitForP7);

                        // 5) Because p7 moved, update p1..p6. Pass `isMovePoint12 = false`
                        [p1, p2, p3, p4, p5, p6] = updateDependentPointsIn6Cube(
                            p1, p2, p3, p4, p5, p6, p7, p8,
                            isRight,
                            false
                        );
                        break;

                    // ────────────────────────────────────────────────────────────────────────
                    case p8[3]:
                        // p8: Bottom face’s trailing corner, only moves horizontally/vertically
                        // ------------------------------------------------
                        // 1) Compute horizontal limit so p8 cannot move past p3 or p6
                        //    (pick whichever is farther from the mouse for rightLimit)
                        const rightLimitForP8 = distance(mouseX, p3[0]) > distance(mouseX, p6[0])
                            ? p3[0]
                            : p6[0];
                        // 2) Vertical limit so p8 never goes above p5’s current Y
                        const topLimitForP8 = p5[1];

                        // 3) Clamp p8.x between -Infinity and rightLimitForP8
                        p8[0] = clamp(mouseX, -Infinity, rightLimitForP8);
                        // 4) Clamp p8.y between topLimitForP8 and +Infinity
                        p8[1] = clamp(mouseY, topLimitForP8, Infinity);

                        // 5) Because p8 moved, update p1..p6. Pass `isMovePoint12 = false`
                        [p1, p2, p3, p4, p5, p6] = updateDependentPointsIn6Cube(
                            p1, p2, p3, p4, p5, p6, p7, p8,
                            isRight,
                            false
                        );
                        break;

                    // ────────────────────────────────────────────────────────────────────────
                    default:
                        // If for some reason targetId doesn’t match any of the eight point IDs,
                        // do nothing (or you could log a warning here).
                        break;
                }

                // ──────────────────────────────────────────────────────────────────────────
                // After modifying any of the points (p1..p8), write them back into object.location
                object.location = [p1, p2, p3, p4, p5, p6, p7, p8];

                // Destructure again for clarity when building allPointListOfTheBox
                const [x1, y1, v1, id1] = object.location[0]; // P1 – top-left
                const [x2, y2, v2, id2] = object.location[1]; // P2 – bottom-right
                const [x3, y3, v3, id3] = object.location[2]; // P3 – top face midpoint
                const [x4, y4, v4, id4] = object.location[3]; // P4 – right vertical midpoint
                const [x5, y5, v5, id5] = object.location[4]; // P5 – bottom vertical midpoint
                const [x6, y6, v6, id6] = object.location[5]; // P6 – bottom face midpoint
                const [x7, y7, v7, id7] = object.location[6]; // P7 – bottom-left
                const [x8, y8, v8, id8] = object.location[7]; // P8 – bottom trailing corner

                // Build the “allPointListOfTheBox” object containing each point’s updated coordinates
                let allPointListOfTheBox = {
                    p1: {x: x1, y: y1, v: v1, id: id1},
                    p2: {x: x2, y: y2, v: v2, id: id2},
                    p3: {x: x3, y: y3, v: v3, id: id3},
                    p4: {x: x4, y: y4, v: v4, id: id4},
                    p5: {x: x5, y: y5, v: v5, id: id5},
                    p6: {x: x6, y: y6, v: v6, id: id6},
                    p7: {x: x7, y: y7, v: v7, id: id7},
                    p8: {x: x8, y: y8, v: v8, id: id8}
                };

                // Assign to object.allPointListOfTheBox so the rendering layer or other logic can read updated values
                object.allPointListOfTheBox = {...allPointListOfTheBox};
            }


        }
            // BEV B.box: di chuyển từng corner theo 2 điểm chéo (2-click box)
        // Khối xử lý chính đã được sửa
        else if (page.data.drawing.object.objectType === page.constants.drawType.drawBevBox4) {
            try {
                console.log("object.bevState    e",object.bevState )
                const targetId = position.target.attr("pointNum");
                const mouseX = position.svgX;
                const mouseY = position.svgY;

                // Gọi hàm cập nhật và nhận kết quả là một object
                const result = page.fn.drawing.bev.updateByCornerDrag(object, targetId, mouseX, mouseY);

                // Nếu cập nhật thành công, gán lại cả state và location
                if (result && result.newCorners && result.newCorners.length === 4) {
                    // GÁN TƯỜNG MINH CẢ HAI!

                    object.bevState = result.newState;
                    console.log("result.newState",result.newState)
                    object.location = result.newCorners;

                    // Các hàm gọi phụ trợ
                    try {
                        if (window.projectBevLiveFromCurrent) window.projectBevLiveFromCurrent();
                    } catch (_) {
                    }

                    page.fn.data.convertObjectLocation(object);
                    page.fn.drawing.renderObject(object);
                    page.fn.drawing.renderObjectPoint(fileIndex, object.objectId, false, object);
                    // return;
                }
            } catch (err) {
                console.error("BEV Drag Error:", err);
            }
        } else {
            let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
            object = page.data.drawing.object;
            let g = svg.children("g[objectId='" + object.objectId + "'][data-objectType='drawCube2DSide']");
            let g1 = svg.children("g[objectId='" + object.objectId + "'][data-objectType='drawCube2DSideFront']");
            if (g && g.length > 0) {
                if (g.length > 0) {
                    page.fn.data.convertObjectLocation(page.data.drawing.object);
                    page.fn.drawing.renderObject(page.data.drawing.object);
                    page.fn.drawing.renderObjectPoint(fileIndex, null, false, page.data.drawing.object);
                    updateDrawCube2DSide(page.data.event.target, fileIndex);
                    return;
                    //updateDrawCube2DSide
                }
            } else if (g1 && g1.length > 0) {
                if (g1.length > 0) {
                    page.fn.data.convertObjectLocation(page.data.drawing.object);
                    page.fn.drawing.renderObject(page.data.drawing.object);
                    page.fn.drawing.renderObjectPoint(fileIndex, null, false, page.data.drawing.object);
                    updateDrawCube2DSideFront(page.data.event.target, fileIndex);
                    return;
                    //updateDrawCube2DSideFront
                }
            } else {
                if (
                    page.data.drawing.object.objectType === page.constants.drawType.drawVISBox &&
                    pointIndex === 2 &&
                    !page.data.event.point?.visHandle
                ) {
                    // P3 chỉ được di chuyển theo trục dọc, giữ X cố định
                    let p1 = page.data.drawing.object.location[0];
                    let p2 = page.data.drawing.object.location[1];
                    let minY = Math.min(p1[1], p2[1]);
                    let maxY = Math.max(p1[1], p2[1]);
                    let constrainedY = Math.max(minY, Math.min(maxY, movedY));

                    // Chỉ thay đổi Y, giữ X cố định
                    page.data.drawing.object.location[pointIndex][0] = page.data.drawing.object.location[pointIndex][0]; // Giữ X cố định
                    page.data.drawing.object.location[pointIndex][1] = constrainedY; // Chỉ thay đổi Y
                }
                else {
                    // Normal point movement for other objects
                    page.data.drawing.object.location[pointIndex][0] = movedX;
                    page.data.drawing.object.location[pointIndex][1] = movedY;
                }

            }
        }
        if (page.data.drawing.object.objectType == 'drawCube2D') {
            page.fn.data.convertObjectLocation(page.data.drawing.object);
            page.fn.drawing.renderObject(page.data.drawing.object);
            page.fn.drawing.renderObjectPoint(fileIndex, null, false, page.data.drawing.object);
            // updateDrawCube2DSide(page.data.event.target, fileIndex);
            return;
        }
        if (page.data.drawing.object.objectType == 'drawCube2DFront') {
            page.fn.data.convertObjectLocation(page.data.drawing.object);
            page.fn.drawing.renderObject(page.data.drawing.object);
            page.fn.drawing.renderObjectPoint(fileIndex, null, false, page.data.drawing.object);
            // updateDrawCube2DSideFront(page.data.event.target, fileIndex);
            return;
        }
        page.fn.data.convertObjectLocation(page.data.drawing.object);
        page.fn.drawing.renderObject(page.data.drawing.object);
        page.fn.drawing.renderObjectPoint(fileIndex, null, false, page.data.drawing.object);
        // Live projection for any object on BEV while moving a point
        try {
            const obj = page.data.drawing.object;
            if (window.__BEV_MODE__ === true && obj && Number(obj.fileIndex) === 0) {
                if (window.projectBevLiveFromCurrent) window.projectBevLiveFromCurrent();
            }
        } catch (_) {}

        // Re-highlight point after render for pointPolyline objects
        if (page.data.drawing.object.objectType === page.constants.drawType.pointPolyline &&
            page.data.event.selectedPointNumber) {
            page.fn.drawing.highlightPoint(page.data.event.selectedPointNumber);
        }
    } catch (E) {
        log.error(E, "page.fn.event.movePointMove");
    }
}

updateDrawCube2DSide = function (target, fileIndex) {
    let cx = target.attr('cx');
    let cy = target.attr('cy');
    let index = target.attr('index');
    let direction = target.attr('direction');
    let objectBoxSize = page.data.drawing.objectBoxSize;
    let objectId = target.attr('objectId');
    let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
    let object = page.data.drawing.object;
    let g = svg.children("g[objectId='" + object.objectId + "'][data-objectType='drawCube2DSide']");
    if (objBoxSizeJson[objectId]) {
        let obj_ = JSON.parse(objBoxSizeJson[object.objectId]);
        objectBoxSize = obj_;
    }
    if (index == 9) {
        let circle = g.children('circle[index=10]');
        circle.attr('cx', cx);
    }
    if (index == 10) {
        let circle = g.children('circle[index=9]');
        circle.attr('cx', cx);
    }
    let circle9 = g.children('circle[index=9]');
    let circle10 = g.children('circle[index=10]');
    if (direction == 'right') {
        objectBoxSize.x2 = circle9.attr('cx');
        objectBoxSize.y2 = circle9.attr('cy');
        objectBoxSize.x3 = circle10.attr('cx');
        objectBoxSize.y3 = circle10.attr('cy');
    }
    if (direction == 'left') {
        objectBoxSize.x1 = circle9.attr('cx');
        objectBoxSize.y1 = circle9.attr('cy');
        objectBoxSize.x4 = circle10.attr('cx');
        objectBoxSize.y4 = circle10.attr('cy');
    }
    let g_polygon = svg.children("g[objectId='" + object.objectId + "'][data-objectType='drawCube2D']");
    let polygon = g_polygon.children('polygon');
    if (polygon.length > 0) {
        //console.log(polygon.attr('polygon'));
        let points = objectBoxSize.x1 + ',' + objectBoxSize.y1 + ' ' + objectBoxSize.x2 + ',' + objectBoxSize.y2 + ' ' + objectBoxSize.x3 + ',' + objectBoxSize.y3 + ' ' + objectBoxSize.x4 + ',' + objectBoxSize.y4;
        polygon.attr('points', points);
    }
    //updateCube2DSideDismiss
    let image = g.children('image');
    if (image) {
        /*let meanx = (Number(objectBoxSize.x1)+Number(objectBoxSize.x3))/2;
        let meany = (Number(objectBoxSize.y2)+Number(objectBoxSize.y3))/2;*/
        //image.attr("x", meanx - 17.5);
        //image.attr("y", meany - 17.5);
    }

    let objectList = page.data.loadTicket.fileList[fileIndex].objectList;
    objectList.forEach(function (o) {
        if (o.objectId == object.objectId) {
            if (page.data.drawing.object && o.objectId == page.data.drawing.object.objectId) {
                let objectBoxSizeJson = JSON.stringify(objectBoxSize);
                objBoxSizeJson[o.objectId] = objectBoxSizeJson;
                //update
                if (objectBoxSize.deleted && objectBoxSize.deleted == 'drawCube2DSide') {
                    g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2D']");
                    let polygon = g.children('polygon');
                    polygon.attr('visibility', 'hidden');
                    g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2DSide']");
                    g.attr('visibility', 'hidden');
                }
                if (objectBoxSize.deleted && objectBoxSize.deleted == 'main') {
                    g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2D']");
                    let rect = g.children('rect');
                    rect.attr('visibility', 'hidden');
                    g = svg.children("g[objectId='" + o.objectId + "'][id='group_points_" + o.objectId + "']");
                    //g.attr('visibility', 'hidden');
                    let circle = g.children('circle');
                    circle.attr('visibility', 'hidden');
                    //g.attr('visibility', 'hidden');
                    if (objectBoxSize.direction == 'right') {
                        circle = g.children('circle[index="2"]');
                        circle.attr('visibility', 'show');
                        circle = g.children('circle[index="7"]');
                        circle.attr('visibility', 'show');
                    }
                    if (objectBoxSize.direction == 'left') {
                        circle = g.children('circle[index="0"]');
                        circle.attr('visibility', 'show');
                        circle = g.children('circle[index="5"]');
                        circle.attr('visibility', 'show');
                    }
                }
            }
        }
    });
    for (let i = 0; i < 9; i++) {
        g = svg.children("g[objectId='" + object.objectId + "'][id='group_points_" + object.objectId + "']");
        let circle = g.children('circle[index="' + i + '"]');
        if (objectBoxSize['P' + i] != undefined) {
            if (objectBoxSize['P' + i] == 0) {
                circle.css("stroke", "grey");
            }
        }
    }
    for (let i = 9; i <= 10; i++) {
        g = svg.children("g[objectId='" + object.objectId + "'][data-objectType='drawCube2DSide']");
        let circle = g.children('circle[index="' + i + '"]');
        if (objectBoxSize['P' + i] != undefined) {
            if (objectBoxSize['P' + i] == 0) {
                circle.css("stroke", "grey");
            }
        }
    }
}
updateDrawCube2DSideFront = function (target, fileIndex) {
    let cx = target.attr('cx');
    let cy = target.attr('cy');
    let index = target.attr('index');
    let direction = target.attr('direction');
    let objectBoxSize = page.data.drawing.objectBoxSize;
    let objectId = target.attr('objectId');
    let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
    let object = page.data.drawing.object;
    let g = svg.children("g[objectId='" + object.objectId + "'][data-objectType='drawCube2DSideFront']");
    if (objBoxSizeJsonFront[objectId]) {
        let obj_ = JSON.parse(objBoxSizeJsonFront[object.objectId]);
        objectBoxSize = obj_;
    }
    if (index == 9) {
        let circle = g.children('circle[index=10]');
        circle.attr('cx', cx);
    }
    if (index == 10) {
        let circle = g.children('circle[index=9]');
        circle.attr('cx', cx);
    }
    let circle9 = g.children('circle[index=9]');
    let circle10 = g.children('circle[index=10]');
    if (direction == 'right') {
        objectBoxSize.x2 = circle9.attr('cx');
        objectBoxSize.y2 = circle9.attr('cy');
        objectBoxSize.x3 = circle10.attr('cx');
        objectBoxSize.y3 = circle10.attr('cy');
    }
    if (direction == 'left') {
        objectBoxSize.x1 = circle9.attr('cx');
        objectBoxSize.y1 = circle9.attr('cy');
        objectBoxSize.x4 = circle10.attr('cx');
        objectBoxSize.y4 = circle10.attr('cy');
    }
    let g_polygon = svg.children("g[objectId='" + object.objectId + "'][data-objectType='drawCube2DFront']");
    let polygon = g_polygon.children('polygon');
    if (polygon.length > 0) {
        //console.log(polygon.attr('polygon'));
        let points = objectBoxSize.x1 + ',' + objectBoxSize.y1 + ' ' + objectBoxSize.x2 + ',' + objectBoxSize.y2 + ' ' + objectBoxSize.x3 + ',' + objectBoxSize.y3 + ' ' + objectBoxSize.x4 + ',' + objectBoxSize.y4;
        polygon.attr('points', points);
    }
    //updateCube2DSideDismiss
    let image = g.children('image');
    if (image) {
        /*let meanx = (Number(objectBoxSize.x1)+Number(objectBoxSize.x3))/2;
        let meany = (Number(objectBoxSize.y2)+Number(objectBoxSize.y3))/2;*/
        //image.attr("x", meanx - 17.5);
        //image.attr("y", meany - 17.5);
    }

    let objectList = page.data.loadTicket.fileList[fileIndex].objectList;
    objectList.forEach(function (o) {
        if (o.objectId == object.objectId) {
            if (page.data.drawing.object && o.objectId == page.data.drawing.object.objectId) {
                let objectBoxSizeJson = JSON.stringify(objectBoxSize);
                objBoxSizeJsonFront[o.objectId] = objectBoxSizeJson;
                //update
                if (objectBoxSize.deleted && objectBoxSize.deleted == 'drawCube2DSideFront') {
                    g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2DFront']");
                    let polygon = g.children('polygon');
                    polygon.attr('visibility', 'hidden');
                    g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2DSideFront']");
                    g.attr('visibility', 'hidden');
                }
                if (objectBoxSize.deleted && objectBoxSize.deleted == 'mainFront') {
                    g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2DFront']");
                    let rect = g.children('rect');
                    rect.attr('visibility', 'hidden');
                    g = svg.children("g[objectId='" + o.objectId + "'][id='group_points_" + o.objectId + "']");
                    //g.attr('visibility', 'hidden');
                    let circle = g.children('circle');
                    circle.attr('visibility', 'hidden');
                    //g.attr('visibility', 'hidden');
                    if (objectBoxSize.direction == 'right') {
                        circle = g.children('circle[index="2"]');
                        circle.attr('visibility', 'show');
                        circle = g.children('circle[index="7"]');
                        circle.attr('visibility', 'show');
                    }
                    if (objectBoxSize.direction == 'left') {
                        circle = g.children('circle[index="0"]');
                        circle.attr('visibility', 'show');
                        circle = g.children('circle[index="5"]');
                        circle.attr('visibility', 'show');
                    }
                }
            }
        }
    });
    for (let i = 0; i < 9; i++) {
        g = svg.children("g[objectId='" + object.objectId + "'][id='group_points_" + object.objectId + "']");
        let circle = g.children('circle[index="' + i + '"]');
        if (objectBoxSize['P' + i] != undefined) {
            if (objectBoxSize['P' + i] == 0) {
                circle.css("stroke", "grey");
            }
        }
    }
    for (let i = 9; i <= 10; i++) {
        g = svg.children("g[objectId='" + object.objectId + "'][data-objectType='drawCube2DSideFront']");
        let circle = g.children('circle[index="' + i + '"]');
        if (objectBoxSize['P' + i] != undefined) {
            if (objectBoxSize['P' + i] == 0) {
                circle.css("stroke", "grey");
            }
        }
    }
}
page.fn.event.movePointEnd = function (event) {
    page.gateway(page.constants.gateway.command.add, page.message.moveObjectPoint);
    try {
        if (page.data?.drawing?.object) {
            page.fn.data.convertObjectLocation(page.data.drawing.object);
        }
    } catch (_) {
    }
    page.fn.data.saveObject(page.data.drawing.object);
    try {
        const obj = page.data.drawing.object;
        if (obj) {
            const svg = $("svg.drawingSVG[data-file-index='" + obj.fileIndex + "']");
            svg.find('#bev-rot-preview-' + obj.objectId).remove();
        }
    } catch (_) {
    }

    // Re-select the point in popup after moving (for pointPolyline objects)
    if (page.data.drawing.object &&
        page.data.drawing.object.objectType === page.constants.drawType.pointPolyline &&
        page.data.event.selectedPointNumber) {
        setTimeout(function() {
            page.fn.data.choosePTPointForDrawing(
                page.data.event.selectedPointNumber,
                page.data.drawing.object.fileIndex,
                page.data.drawing.object.objectId,
                page.data.drawing.object.classId
            );
        }, 50);
    }
}
page.fn.event.moveImageStart = function (event, target) {
    log.info(event, "page.fn.event.moveImageStart")
    let position = page.fn.event.getMousePositionByTarget(event, target.children(".wrapImageArea"));

    page.data.event.working = page.constants.method.moveImage;
    page.data.event.target = target.children(".wrapImageArea");
    page.data.event.position = {};
    page.data.event.position.startMouseX = position.mouseX;
    page.data.event.position.startMouseY = position.mouseY;
    page.data.event.position.startTargetX = position.targetX;
    page.data.event.position.startTargetY = position.targetY;
    page.data.event.position.startTargetLeft = parseFloat(page.data.event.target.css("left"));
    page.data.event.position.startTargetTop = parseFloat(page.data.event.target.css("top"));
    page.data.event.position.startTargetPositionLeft = page.data.event.target.position().left;
    page.data.event.position.startTargetPositionTop = page.data.event.target.position().top;
}
page.fn.event.popupMoveStart = function (event, target) {
    log.info(event, "page.fn.event.popupMoveStart");
    let position = page.fn.event.getMousePositionByTarget(event, target.parent());

    page.data.event.popup = {};
    page.data.event.popup.isMoving = true;
    page.data.event.popup.target = target.parent();
    page.data.event.popup.position = {};
    page.data.event.popup.position.startMouseX = position.mouseX;
    page.data.event.popup.position.startMouseY = position.mouseY;
    page.data.event.popup.position.startTargetX = position.targetX;
    page.data.event.popup.position.startTargetY = position.targetY;
}
page.fn.event.getMousePositionByTarget = function (event, target) {
    let position = {};
    let targetPosition = $(target).position();
    let layout = target.parents(".wrapImageArea");
    if (layout.length == 0) {
        layout = $(".wrapImageArea[data-file-index='" + page.data.event.currentFileIndex + "']");
    }
    let image = layout.children(".drawingImage");
    let scale = page.fn.data.getScale(image.attr("data-file-index"));
    let offset = layout.offset();
    if (_common.isEmpty(offset)) {
        offset = {left: 0, top: 0};
    }
    let imageData = page.fn.data.getImageOriginalSize(page.data.event.currentFileIndex);
    let imageAngle = image.attr("data-file-rotation");
    if (imageAngle != 0) {
        imageData = page.fn.drawing.calcRotationImageSize(imageData, imageAngle);
    }
    position.mouseX = event.clientX;
    position.mouseY = event.clientY;
    position.targetX = targetPosition.left;
    position.targetY = targetPosition.top;
    position.target = target;
    position.layout = layout;
    position.layoutX = offset.left;
    position.layoutY = offset.top;
    position.svgX = (position.mouseX - position.layoutX) / scale;
    position.svgY = (position.mouseY - position.layoutY) / scale;

    if (position.svgX < 0) {
        position.svgX = 0;
    } else if (position.svgX > imageData.width) {
        position.svgX = imageData.width;
    }
    if (position.svgY < 0) {
        position.svgY = 0;
    } else if (position.svgY > imageData.height) {
        position.svgY = imageData.height;
    }
    return position;
}
page.fn.event.keyDown = function (event) {
    let key = _common.getKeyboard(event);
    log.info(key, "page.fn.event.keyDown");
    let hotkey = page.constants.hotkeys.get(key.keyName);
    if (_common.isNotEmpty(hotkey)) {
        if (typeof (hotkey.excuteFunction) == "function") {
            hotkey.excuteFunction(event);
        }
    } else {
        if (key.keyName.startsWith(_common.keyboard.ctrl) && page.data.event.method == page.constants.method.editObject) {
            // page.dom.crosshairSVG.show();
        }
    }
}
page.fn.event.ctrlClick = function (event) {
    let key = _common.getKeyboard(event);
    log.info(key, "page.fn.event.ctrlClick");
    let hotkey = page.constants.hotkeys.get(key.keyName);
    if (_common.isNotEmpty(hotkey)) {
        //console.log(key.keyName);
    } else {
        if (key.keyName.startsWith(_common.keyboard.ctrl) && page.data.drawing.objectType == page.constants.method.drawCube2D) {
            let objectBoxSize = {
                x1: 0, y1: 0, x2: 0, y2: 0,
                x3: 0, y3: 0, y4: 0, y4: 0
            };
            try {
                let location = page.data.drawing.object.location;
                let position = page.fn.event.getMousePositionByTarget(event, page.dom.svg);
                let meanY = (location[1][1] + location[0][1]) / 2;
                //right
                if (position.svgX >= Math.max(location[0][0], location[1][0])) {
                    objectBoxSize.direction = 'right';
                    // lower than meanY
                    if (position.svgY < meanY) {
                        //x1, y1: highest and lowest location of 2 points' box
                        objectBoxSize.x1 = Math.max(location[0][0], location[1][0]);
                        objectBoxSize.y1 = Math.min(location[0][1], location[1][1]);

                        //x2, y2 = position (mouse)
                        objectBoxSize.x2 = position.svgX;
                        objectBoxSize.y2 = position.svgY;

                        //Math.abs confirm the calculated result always be positive;
                        objectBoxSize.x3 = position.svgX;
                        //the distance between the mouse and the meanY, then multiply by 2
                        objectBoxSize.y3 = position.svgY + Math.abs(meanY - position.svgY) * 2;
                        objectBoxSize.x4 = Math.max(location[0][0], location[1][0]);
                        objectBoxSize.y4 = Math.max(location[0][1], location[1][1]);
                        //higher than meanY
                    } else {
                        objectBoxSize.x1 = Math.max(location[0][0], location[1][0]);
                        objectBoxSize.y1 = Math.min(location[0][1], location[1][1]);
                        objectBoxSize.x2 = position.svgX;
                        objectBoxSize.y2 = position.svgY - Math.abs(meanY - position.svgY) * 2;
                        objectBoxSize.x3 = position.svgX;
                        objectBoxSize.y3 = position.svgY;
                        objectBoxSize.x4 = Math.max(location[0][0], location[1][0]);
                        objectBoxSize.y4 = Math.max(location[0][1], location[1][1]);
                    }
                }
                //left
                if (position.svgX < Math.min(location[0][0], location[1][0])) {
                    objectBoxSize.direction = 'left';
                    if (position.svgY < meanY) {
                        objectBoxSize.x1 = position.svgX;
                        objectBoxSize.y1 = position.svgY;
                        objectBoxSize.x2 = Math.min(location[0][0], location[1][0]);
                        objectBoxSize.y2 = Math.min(location[0][1], location[1][1]);
                        objectBoxSize.x3 = Math.min(location[0][0], location[1][0]);
                        objectBoxSize.y3 = Math.max(location[0][1], location[1][1]);
                        objectBoxSize.x4 = position.svgX;
                        objectBoxSize.y4 = position.svgY + Math.abs(meanY - position.svgY) * 2;
                    } else {
                        objectBoxSize.x1 = position.svgX;
                        objectBoxSize.y1 = position.svgY - Math.abs(meanY - position.svgY) * 2;
                        objectBoxSize.x2 = Math.min(location[0][0], location[1][0]);
                        objectBoxSize.y2 = Math.min(location[0][1], location[1][1]);
                        objectBoxSize.x3 = Math.min(location[0][0], location[1][0]);
                        objectBoxSize.y3 = Math.max(location[0][1], location[1][1]);
                        objectBoxSize.x4 = position.svgX;
                        objectBoxSize.y4 = position.svgY;
                    }
                }
                let svg = $("svg.drawingSVG[data-file-index='" + page.data.drawing.object.fileIndex + "']");
                let g = svg.children("g[objectId='" + page.data.drawing.object.objectId + "'][data-objectType='drawCube2D']");
                let polygon = g.children('polygon');
                if (polygon.length == 0) {
                    page.data.drawing.objectBoxSize = createCube2DSide(page.data.drawing.object.fileIndex, page.data.drawing.object, objectBoxSize);
                    //console.log(page.data.drawing.objectBoxSize);
                    //createCube2DDismiss(page.data.drawing.object.fileIndex, page.data.drawing.object, objectBoxSize);
                } else {
                    let objDrawingCube = JSON.parse(objBoxSizeJson[page.data.drawing.object.objectId]);
                    if (objDrawingCube.deleted == 'drawCube2DSide') {
                        objDrawingCube.deleted = null;
                        objBoxSizeJson[page.data.drawing.object.objectId] = JSON.stringify(objDrawingCube);
                        //page.data.drawing.objectBoxSize = createCube2DSide(page.data.drawing.object.fileIndex, page.data.drawing.object, objectBoxSize);
                        polygon.attr('visibility', 'show');
                        g = svg.children("g[objectId='" + page.data.drawing.object.objectId + "'][data-objectType='drawCube2DSide']");
                        g.attr('visibility', 'show');
                    }
                }
            } catch (E) {
                log.error(E, "createCube2DSide");
                page.fn.data.deleteObject(page.data.drawing.object.fileIndex, object.objectId);
            }
        }
        if (key.keyName.startsWith(_common.keyboard.ctrl) && page.data.drawing.objectType == page.constants.method.drawCube2DFront) {
            let objectBoxSize = {
                x1: 0, y1: 0, x2: 0, y2: 0,
                x3: 0, y3: 0, y4: 0, y4: 0
            };
            try {
                let location = page.data.drawing.object.location;
                let position = page.fn.event.getMousePositionByTarget(event, page.dom.svg);
                let meanY = (location[1][1] + location[0][1]) / 2;
                //right
                if (position.svgX >= Math.max(location[0][0], location[1][0])) {
                    objectBoxSize.direction = 'right';
                    if (position.svgY < meanY) {
                        objectBoxSize.x1 = Math.max(location[0][0], location[1][0]);
                        objectBoxSize.y1 = Math.min(location[0][1], location[1][1]);
                        objectBoxSize.x2 = position.svgX;
                        objectBoxSize.y2 = position.svgY;
                        objectBoxSize.x3 = position.svgX;
                        objectBoxSize.y3 = position.svgY + Math.abs(meanY - position.svgY) * 2;
                        objectBoxSize.x4 = Math.max(location[0][0], location[1][0]);
                        objectBoxSize.y4 = Math.max(location[0][1], location[1][1]);
                    } else {
                        objectBoxSize.x1 = Math.max(location[0][0], location[1][0]);
                        objectBoxSize.y1 = Math.min(location[0][1], location[1][1]);
                        objectBoxSize.x2 = position.svgX;
                        objectBoxSize.y2 = position.svgY - Math.abs(meanY - position.svgY) * 2;
                        objectBoxSize.x3 = position.svgX;
                        objectBoxSize.y3 = position.svgY;
                        objectBoxSize.x4 = Math.max(location[0][0], location[1][0]);
                        objectBoxSize.y4 = Math.max(location[0][1], location[1][1]);
                    }
                }
                //left
                if (position.svgX < Math.min(location[0][0], location[1][0])) {
                    objectBoxSize.direction = 'left';
                    if (position.svgY < meanY) {
                        objectBoxSize.x1 = position.svgX;
                        objectBoxSize.y1 = position.svgY;
                        objectBoxSize.x2 = Math.min(location[0][0], location[1][0]);
                        objectBoxSize.y2 = Math.min(location[0][1], location[1][1]);
                        objectBoxSize.x3 = Math.min(location[0][0], location[1][0]);
                        objectBoxSize.y3 = Math.max(location[0][1], location[1][1]);
                        objectBoxSize.x4 = position.svgX;
                        objectBoxSize.y4 = position.svgY + Math.abs(meanY - position.svgY) * 2;
                    } else {
                        objectBoxSize.x1 = position.svgX;
                        objectBoxSize.y1 = position.svgY - Math.abs(meanY - position.svgY) * 2;
                        objectBoxSize.x2 = Math.min(location[0][0], location[1][0]);
                        objectBoxSize.y2 = Math.min(location[0][1], location[1][1]);
                        objectBoxSize.x3 = Math.min(location[0][0], location[1][0]);
                        objectBoxSize.y3 = Math.max(location[0][1], location[1][1]);
                        objectBoxSize.x4 = position.svgX;
                        objectBoxSize.y4 = position.svgY;
                    }
                }
                let svg = $("svg.drawingSVG[data-file-index='" + page.data.drawing.object.fileIndex + "']");
                let g = svg.children("g[objectId='" + page.data.drawing.object.objectId + "'][data-objectType='drawCube2DFront']");
                let polygon = g.children('polygon');
                if (polygon.length == 0) {
                    page.data.drawing.objectBoxSize = createCube2DSideFront(page.data.drawing.object.fileIndex, page.data.drawing.object, objectBoxSize);
                    //console.log(page.data.drawing.objectBoxSize);
                    //createCube2DDismiss(page.data.drawing.object.fileIndex, page.data.drawing.object, objectBoxSize);
                } else {
                    let objDrawingCube = JSON.parse(objBoxSizeJsonFront[page.data.drawing.object.objectId]);
                    if (objDrawingCube.deleted == 'drawCube2DSideFront') {
                        objDrawingCube.deleted = null;
                        objBoxSizeJsonFront[page.data.drawing.object.objectId] = JSON.stringify(objDrawingCube);
                        //page.data.drawing.objectBoxSize = createCube2DSide(page.data.drawing.object.fileIndex, page.data.drawing.object, objectBoxSize);
                        polygon.attr('visibility', 'show');
                        g = svg.children("g[objectId='" + page.data.drawing.object.objectId + "'][data-objectType='drawCube2DSideFront']");
                        g.attr('visibility', 'show');
                    }
                }
            } catch (E) {
                log.error(E, "createCube2DSideFront");
                page.fn.data.deleteObject(page.data.drawing.object.fileIndex, object.objectId);
            }
        }
    }
}

createCube2DDismiss = function (fileIndex, object, objectBoxSize) {
    let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
    let g = svg.children("g[objectId='" + object.objectId + "'][data-objectType='drawCube2D']");
    let meanx = (object.location[0][0] + object.location[1][0]) / 2;
    let meany = (object.location[0][1] + object.location[1][1]) / 2;
    if (g) {
        let image = document.createElementNS("http://www.w3.org/2000/svg", 'image');
        image.setAttribute("href", "/image/tool/annImage/draw-cube-2d-close.png");
        image.setAttribute("x", meanx - 8.5);
        image.setAttribute("y", meany - 8.5);
        image.setAttribute("width", 17);
        image.setAttribute("height", 17);
        image.setAttribute("objectType", "drawCube2D");
        image.setAttribute("objectId", object.objectId);
        //image.style.cursor = 'move';
        g.append(image);
        image.addEventListener("click", function (event) {
            page.fn.data.deleteObject(fileIndex, object.objectId);
            /*let objectList = page.data.loadTicket.fileList[fileIndex].objectList;
            objectList.forEach(function (o) {
            	if(o.objectId == object.objectId) {
            		objBoxSizeJson[o.objectId] = null;
            	}
            	if(objBoxSizeJson[o.objectId]) {
            	    let obj_ = JSON.parse(objBoxSizeJson[o.objectId]);
            	    createCube2DSide(fileIndex, o, obj_);
                    createCube2DDismiss(fileIndex, o, obj_);
                }
            });
            objBoxSizeJson[object.objectId] = null;*/
        });
    }
    g = svg.children("g[objectId='" + object.objectId + "'][data-objectType='drawCube2DSide']");
    if (g) {
        meanx = (parseFloat(objectBoxSize.x1) + parseFloat(objectBoxSize.x3)) / 2;
        meany = (parseFloat(objectBoxSize.y2) + parseFloat(objectBoxSize.y3)) / 2;
        let image = document.createElementNS("http://www.w3.org/2000/svg", 'image');
        image.setAttribute("href", "/image/tool/annImage/draw-cube-2d-close.png");
        image.setAttribute("x", meanx - 8.5);
        image.setAttribute("y", meany - 8.5);
        image.setAttribute("width", 17);
        image.setAttribute("height", 17);
        image.setAttribute("objectType", "drawCube2DSide");
        image.setAttribute("objectId", object.objectId);
        //image.style.cursor = 'move';
        g.append(image);
        image.addEventListener("click", function (event) {
            let circle = g.children('circle[data-objectType="drawCube2DSide"]');
            circle.remove();
            g = svg.children("g[objectId='" + object.objectId + "'][data-objectType='drawCube2D']");
            let polygon = g.children('polygon');
            polygon.remove();
            image.remove();

            let objectList = page.data.loadTicket.fileList[fileIndex].objectList;
            objectList.forEach(function (o) {
                if (o.objectId == object.objectId) {
                    objBoxSizeJson[o.objectId] = null;
                }
            });
        });
    }
}

createCube2DSide = function (fileIndex, object, objectBoxSize) {
    try {
        let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
        let g = svg.children("g[objectId='" + object.objectId + "'][data-objectType='drawCube2DSide']");
        //let g = svg.children("g[objectId='" + object.objectId + "']");
        if (g.length == 0) {
            g = $(document.createElementNS("http://www.w3.org/2000/svg", 'g'));
            g.attr("objectId", object.objectId);
            g.attr("data-objectType", 'drawCube2DSide');
            svg.append(g);
        }
        //right
        if (objectBoxSize.direction == 'right' && page.data.drawing.object && object.objectId == page.data.drawing.object.objectId) {
            let c_top = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            let idx_ = 9;
            c_top.setAttribute("cx", objectBoxSize.x2);
            c_top.setAttribute("cy", objectBoxSize.y2);
            c_top.setAttribute("class", "draw-point CLS_" + object.classId + " drawing-points");
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
            c_next.setAttribute("class", "draw-point CLS_" + object.classId + " drawing-points");
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
        if (objectBoxSize.direction == 'left' && page.data.drawing.object && object.objectId == page.data.drawing.object.objectId) {
            let c_top = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            let idx_ = 9;

            c_top.setAttribute("cx", objectBoxSize.x1);
            c_top.setAttribute("cy", objectBoxSize.y1);
            c_top.setAttribute("class", "draw-point CLS_" + object.classId + " drawing-points");
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
            c_next.setAttribute("class", "draw-point CLS_" + object.classId + " drawing-points");
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
        points += objectBoxSize.x1 + "," + objectBoxSize.y1 + " " + objectBoxSize.x2 + "," + objectBoxSize.y2 + " " + objectBoxSize.x3 + "," + objectBoxSize.y3 + " " + objectBoxSize.x4 + "," + objectBoxSize.y4;
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
        let objectList = page.data.loadTicket.fileList[fileIndex].objectList;
        objectList.forEach(function (o) {
            if (o.objectId == object.objectId) {
                if (page.data.drawing.object && o.objectId == page.data.drawing.object.objectId) {
                    let objectBoxSizeJson = JSON.stringify(objectBoxSize);
                    objBoxSizeJson[o.objectId] = objectBoxSizeJson;
                }
                //update
                if (objectBoxSize.deleted == 'drawCube2DSide') {
                    g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2D']");
                    let polygon = g.children('polygon');
                    polygon.attr('visibility', 'hidden');
                    g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2DSide']");
                    g.attr('visibility', 'hidden');
                }
                if (objectBoxSize.deleted == 'main') {
                    g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2D']");
                    let rect = g.children('rect');
                    rect.attr('visibility', 'hidden');
                    g = svg.children("g[objectId='" + o.objectId + "'][id='group_points_" + o.objectId + "']");
                    g.attr('visibility', 'hidden');
                    let circle = g.children('circle');
                    circle.attr('visibility', 'hidden');
                }
            }
        });
    } catch (E) {
        log.error(E, "createCube2DSide");
        page.fn.data.deleteObject(fileIndex, object.objectId);
    }
    return objectBoxSize;
}
createCube2DSideFront = function (fileIndex, object, objectBoxSize) {
    try {
        let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
        let g = svg.children("g[objectId='" + object.objectId + "'][data-objectType='drawCube2DSideFront']");
        //let g = svg.children("g[objectId='" + object.objectId + "']");
        if (g.length == 0) {
            g = $(document.createElementNS("http://www.w3.org/2000/svg", 'g'));
            g.attr("objectId", object.objectId);
            g.attr("data-objectType", 'drawCube2DSideFront');
            svg.append(g);
        }
        //right
        if (objectBoxSize.direction == 'right' && page.data.drawing.object && object.objectId == page.data.drawing.object.objectId) {
            let c_top = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            let idx_ = 9;
            c_top.setAttribute("cx", objectBoxSize.x2);
            c_top.setAttribute("cy", objectBoxSize.y2);
            c_top.setAttribute("class", "draw-point CLS_" + object.classId + " drawing-points");
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
            c_next.setAttribute("class", "draw-point CLS_" + object.classId + " drawing-points");
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
        if (objectBoxSize.direction == 'left' && page.data.drawing.object && object.objectId == page.data.drawing.object.objectId) {
            let c_top = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            let idx_ = 9;

            c_top.setAttribute("cx", objectBoxSize.x1);
            c_top.setAttribute("cy", objectBoxSize.y1);
            c_top.setAttribute("class", "draw-point CLS_" + object.classId + " drawing-points");
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
            c_next.setAttribute("class", "draw-point CLS_" + object.classId + " drawing-points");
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
        points += objectBoxSize.x1 + "," + objectBoxSize.y1 + " " + objectBoxSize.x2 + "," + objectBoxSize.y2 + " " + objectBoxSize.x3 + "," + objectBoxSize.y3 + " " + objectBoxSize.x4 + "," + objectBoxSize.y4;
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
        let objectList = page.data.loadTicket.fileList[fileIndex].objectList;
        objectList.forEach(function (o) {
            if (o.objectId == object.objectId) {
                if (page.data.drawing.object && o.objectId == page.data.drawing.object.objectId) {
                    let objectBoxSizeJson = JSON.stringify(objectBoxSize);
                    objBoxSizeJsonFront[o.objectId] = objectBoxSizeJson;
                }
                //update
                if (objectBoxSize.deleted == 'drawCube2DSideFront') {
                    g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2DFront']");
                    let polygon = g.children('polygon');
                    polygon.attr('visibility', 'hidden');
                    g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2DSideFront']");
                    g.attr('visibility', 'hidden');
                }
                if (objectBoxSize.deleted == 'mainFront') {
                    g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2DFront']");
                    let rect = g.children('rect');
                    rect.attr('visibility', 'hidden');
                    g = svg.children("g[objectId='" + o.objectId + "'][id='group_points_" + o.objectId + "']");
                    g.attr('visibility', 'hidden');
                    let circle = g.children('circle');
                    circle.attr('visibility', 'hidden');
                }
            }
        });
    } catch (E) {
        log.error(E, "createCube2DSideFront");
        page.fn.data.deleteObject(fileIndex, object.objectId);
    }
    return objectBoxSize;
}
page.fn.event.keyUp = function (event) {
    let key = _common.getKeyboard(event);
    if (page.data.event.method == page.constants.method.editObject) {
        page.dom.crosshairSVG.hide();
    }
    if (page.data.event.isRemoverMoving) {
        if (!key.keyCode.startsWith("alt_")) {
            page.data.event.isRemoverMoving = false;
            $("#removerRange").remove();
        }
    }
    if (key.keyName === "esc") {
        debugger
        if (page.data.event.isDrawing && page.data.drawing.object &&
            page.data.drawing.object.objectType === page.constants.drawType.drawVISBox &&
            page.data.drawing.object.location.length === 2)
        {
            console.log("VIS-Box: ESC pressed with 2 points. Finalizing.");
            // Theo quy tắc: gán P3 = P2 (Full Box = VIS Box)
            const p2 = page.data.drawing.object.location[1];
            page.data.drawing.object.location.push(_common.copy(p2));
            // Convert object location for proper rendering
            page.fn.data.convertObjectLocation(page.data.drawing.object);
            // Clean up preview
            $("svg.drawingSVG g[data-preview='vis-box-preview']").remove();
            // Kết thúc việc vẽ và chọn đối tượng vừa tạo
            page.fn.drawing.endNewDrawing("ESC on VIS-Box");
            if (page.data.drawing.object != null) {
                page.fn.data.onSelectObject(page.data.drawing.object.fileIndex, page.data.drawing.object.objectId);
            }
            // Re-render sau khi isDrawing=false để chấm đỏ có draw-point + index
            setTimeout(function () {
                page.fn.drawing.renderObject(page.data.drawing.object);
                page.fn.drawing.renderObjectPoint(null, null, false, page.data.drawing.object);
                // NEW: render points cho tất cả VIS-Box trong file hiện tại
                const fileIndexAll = page.data.drawing.object.fileIndex;
                $("svg.drawingSVG[data-file-index='" + fileIndexAll + "'] g[id^='group_points_']").remove();
                const allObjects = page.data.loadTicket.fileList[fileIndexAll]?.objectList || [];
                allObjects.forEach(function (o) {
                    if (o.objectType === page.constants.drawType.drawVISBox) {
                        page.fn.drawing.renderObjectPoint(fileIndexAll, null, false, o);
                    }
                });
            }, 0);
            event.preventDefault(); // Ngăn chặn các hành vi mặc định khác của phím ESC
            return; // Stop processing other ESC logic
        }
        // General ESC logic for other drawing modes
        else if (page.data.event.isDrawing) {
            page.fn.drawing.endNewDrawing("ESC - cancel drawing");
        }
    }

}
page.fn.event.refreshPage = function () {
    let is = true;
    if (page.constants.gateway.isMakeHistory && page.data.loadTicket.isValid) {
        if (confirm(_common.template.parseMessage(page.message.haveNoSaveData, {
            doSomething: page.message.doSomethingRefresh
        }))) {
            is = true;
        }
    } else {
        is = true;
    }
    if (is) {
        if ("manager/reviewer/master/co/inspector".includes(page.data.permissionCode)) {
            sessionStorage.reviewSearch = JSON.stringify(page.data.searchConditionByReview);
        }
        let uri = window.location.href;
        let next = "/annotation/annotation";
        if (uri.substr(uri.lastIndexOf("/")).startsWith("/imageExpert")) {
            next = "/work/imageExpert";
        } else if (window.location.pathname.startsWith("/annotation/")) {
            next = window.location.pathname;
        }

        _common.postForm(next, {
            reqType: page.param.reqType
            , projectId: page.param.projectId
            , taskId: page.param.taskId
            , workTicketId: page.data.loadTicket ? page.data.loadTicket.workTicketId : ""
            , pageNum: page.data.paging.pageNum
            , token: page.param.token
        }, "POST");
    }
}
page.fn.event.focusedInput = function (target) {
    page.data.event.focusInput = true;
    target = $(target);
    if (target.attr("tagTypeCd") == page.constants.tag.tagTypeCd.point) {
        $(".tagInput").attr("data-file-index", page.data.event.currentFileIndex);
        $(".tagInput").attr("objectId", page.data.event.selectedObjectId);
    }
    if (!page.data.loadTicket.isValid) {
        page.fn.alert(page.message.isInvalidEdit);
        target.blur();
        $(".tagInput").blur();
        return false;
    } else {
        log.info(target, "page.fn.focusedInput");
        page.data.event.isValidHotkey = false;
    }
}
page.fn.event.rollbackInput = function (target, fileIndex) {
    target = $(target);
    log.debug(target, "page.fn.rollbackInput");
    target.attr("rollback", "rollback");
    let tag = null;
    if (target.attr("tagTypeCd") == page.constants.tag.tagTypeCd.image) {
        tag = page.fn.data.getImageTag(target.attr("tagId"), target.attr("data-file-index"));
    } else if (target.attr("tagTypeCd") == page.constants.tag.tagTypeCd.object) {
        tag = page.fn.data.getObjectTag(target.attr("tagId"), target.attr("objectId"));
    } else if (target.attr("tagTypeCd") == page.constants.tag.tagTypeCd.point) {
        let value = page.fn.data.getObjectPointTagValue(target.attr("tagId"), page.data.event.selectedObjectId, $("#rootPopPTPoints li.on").attr("data-pointId"), fileIndex);
        tag = {val: value};
        log.info(tag, "page.fn.rollbackInput, tagTypeCd.point");
    }
    target.val(tag == null ? "" : tag.val);
}
page.fn.event.focusedInputBlur = function (target) {

    page.data.event.focusInput = false;
    if (page.data.loadTicket.isValid) {
        if (!page.data.event.isValidHotkey) {
            page.data.event.isValidHotkey = true;
            page.fn.event.filterValue(target);
            target = $(target);
            target.blur();
            let tagId = target.attr("tagId");
            let objectId = target.attr("objectId");
            let fileIndex = target.attr("data-file-index");
            // TODO fileIndex current 시점 바뀐상태 (이미지 태그일떄만 왜인지 찾아봐야함)
            //  page.data.event.fileIndex 사용할 경우 전역변수와 다르지만 현 이미지 태그의 값(val)을 가져와서 저장함.
            //  console.log(fileIndex, page.data.event.currentFileIndex) // 0, 1 (오브젝트 태그일땐 0, 0)
            if (target.attr("rollback") != "rollback") {
                let msg;
                let tag;

                if (target.attr("tagTypeCd") == page.constants.tag.tagTypeCd.image) {
                    let constTag = page.fn.data.getConstantsTag(tagId);
                    tag = page.fn.data.getImageTag(tagId, fileIndex);
                    if (tag != null) {
                        tag.tagName = constTag.tagName;
                    } else {
                        if (target.val() != "") {
                            tag = JSON.parse(JSON.stringify(constTag));
                            tag.rawFileId = page.data.loadTicket.fileList[fileIndex].rawFileId;
                            tag.val = "";
                            // page.data.event.currentFile.tagList.push(tag);
                            page.data.loadTicket.fileList[fileIndex].tagList.push(tag);
                        }
                    }
                    if (tag != null) {
                        msg = _common.template.parseMessage(page.message.changeImageTagValue, {
                            tagName: tag.tagName
                            , beforeValue: page.fn.data.getTagValueName(tag)
                            , afterValue: page.fn.data.getTagValueName(tag, target.val())
                        });
                    }
                } else if (target.attr("tagTypeCd") == page.constants.tag.tagTypeCd.object) {
                    tag = page.fn.data.getObjectTag(tagId, objectId);
                    log.debug(tag, "page.fn.focusedInputBlur-object-tag");
                    let object = page.fn.data.getObject(fileIndex, objectId);

                    let tagName = target.closest('li').find('.tagName').text().trim();

                    // 3. Bây giờ bạn có thể kiểm tra tên của tag.
                    if (tagName?.trim().toLowerCase() === 'direction') {
                        const val = target.val() ?? ''
                        if (val.trim().toLowerCase() === 'rear' || val.trim().toLowerCase() === 'front')
                            object.direction6PointCube = val
                        else
                            object.direction6PointCube = undefined

                    }

                    log.debug(object, "page.fn.focusedInputBlur-object-object");
                    let constTag = page.fn.data.getConstantsTag(tagId);
                    if (tag == null && object != null) {
                        if (target.val() != "") {
                            tag = {
                                color: null
                                , rawFileId: object.rawFileId
                                , objectId: objectId
                                , objectTagId: page.fn.data.createTempKey()
                                , name: constTag.tagName
                                , projectId: page.data.task.projectId
                                , tagId: tagId
                                , tagTypeCd: constTag.tagTypeCd
                                , tagValTypeCd: constTag.tagValTypeCd
                                , tagValueName: page.message.noSelectedOfSelect
                                , taskImgNumber: null
                                , taskId: object.taskId
                                , val: ""
                            };
                            if (!object.tagList) {
                                object.tagList = []
                            }
                            object.tagList.push(tag);
                            if (page.data.drawing.object.objectId == object.objectId) {
                                if (!page.data.drawing.object.tagList) {
                                    page.data.drawing.object.tagList = []
                                }
                                page.data.drawing.object.tagList.push(tag)
                            }
                        }
                    } else {
                        tag.tagTypeCd = constTag.tagTypeCd;
                        tag.tagValTypeCd = constTag.tagValTypeCd
                        tag.tagName = constTag.tagName;
                    }
                    if (tag != null) {

                        log.info(tag, "change object tag value");
                        msg = _common.template.parseMessage(page.message.changeObjectTagValue, {
                            tagName: tag.tagName
                            , beforeValue: page.fn.data.getTagValueName(tag)
                            , afterValue: page.fn.data.getTagValueName(tag, target.val())
                            , index: object.objectOrder
                        });
                    }
                    if (object.objectType === 'drawCube2DFront' || object.objectType === 'drawCube2D') {
                        if (constTag.name.trim().toLowerCase() === 'direction'.toLowerCase()) {
                            let objS = page.data.loadTicket.fileList[fileIndex].objectList;
                            for (let i = 0; i < objS.length; i++) {
                                if (objS[i].objectId == page.data.drawing.object.objectId) {
                                    if (target.val().trim().toLowerCase() === 'front') {
                                        objS[i].objectType = 'drawCube2DFront';
                                    }
                                    if (target.val().trim().toLowerCase() === 'rear') {
                                        objS[i].objectType = 'drawCube2D';
                                    }
                                }
                            }
                            if ((target.val().trim().toLowerCase() == 'front' || target.val().trim().toLowerCase() === '1') && page.data.drawing.object.objectType == 'drawCube2D') {
                                object.objectType = 'drawCube2DFront';
                                page.data.drawing.object.objectType = 'drawCube2DFront';
                                objBoxSizeJsonFront[objectId] = objBoxSizeJson[objectId];

                                let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
                                let g_main = svg.children("g[objectId='" + object.objectId + "'][data-objectType='drawCube2D']");
                                let g_side = svg.children("g[objectId='" + object.objectId + "'][data-objectType='drawCube2DSide']");
                                g_main.attr('data-objectType', 'drawCube2DFront');
                                g_side.attr('data-objectType', 'drawCube2DSideFront');
                                let polygon = g_main.children('polygon');
                                polygon.attr('data-objectType', 'drawCube2DFront');
                                let rect = g_main.children('rect');
                                rect.css('fill', 'blue');
                                rect.removeClass('objectType_drawCube2D');
                                rect.addClass('objectType_drawCube2DFront');
                                g_side.find('circle').each(function () {
                                    $(this).attr('data-objectType', 'drawCube2DSideFront');
                                });
                            }
                            if ((target.val().trim().toLowerCase() == 'rear' || target.val().trim().toLowerCase() === '2') && page.data.drawing.object.objectType == 'drawCube2DFront') {
                                object.objectType = 'drawCube2D';
                                page.data.drawing.object.objectType = 'drawCube2D';
                                objBoxSizeJson[objectId] = objBoxSizeJsonFront[objectId];

                                let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
                                let g_main = svg.children("g[objectId='" + object.objectId + "'][data-objectType='drawCube2DFront']");
                                let g_side = svg.children("g[objectId='" + object.objectId + "'][data-objectType='drawCube2DSideFront']");
                                g_main.attr('data-objectType', 'drawCube2D');
                                g_side.attr('data-objectType', 'drawCube2DSide');
                                let polygon = g_main.children('polygon');
                                polygon.attr('data-objectType', 'drawCube2D');
                                let rect = g_main.children('rect');
                                rect.css('fill', 'red');
                                rect.removeClass('objectType_drawCube2DFront');
                                rect.addClass('objectType_drawCube2D');
                                g_side.find('circle').each(function () {
                                    $(this).attr('data-objectType', 'drawCube2DSide');
                                });
                            }
                        }
                    } else if (object.objectType === page.constants.drawType.draw6PointCube) {


                        updatePolygonFillColor(object, 'quad1-6pointCube', object.direction6PointCube?.trim().toLowerCase() === 'front');
                    }

                } else if (target.attr("tagTypeCd") == page.constants.tag.tagTypeCd.point) {
                    let object = page.fn.data.getObject(fileIndex, objectId);
                    if (object == null) {
                        object = page.fn.data.getObject(fileIndex, page.data.event.selectedObjectId);
                    }
                    let selectedPointId = $("#rootPopPTPoints li.on").attr("data-pointId");
                    if (selectedPointId == null) {
                        selectedPointId = page.data.event.selectedPointNumber;
                    }
                    let pointInfo = null;
                    let selectedPointIndex = -1;
                    for (let i = 0; i < object.location.length; i++) {
                        let point = object.location[i];
                        if (point[2] === selectedPointId) {
                            pointInfo = point[3];
                            selectedPointIndex = i;
                            break;
                        }
                    }
                    if (pointInfo == null) {
                        pointInfo = {
                            tags: {}
                        };
                    } else if (pointInfo.tags == undefined || pointInfo.tags == null) {
                        pointInfo.tags = {};
                    }
                    if (_common.isEmpty(target.val())) {
                        delete pointInfo.tags[tagId];
                    } else {
                        pointInfo.tags[tagId] = target.val();
                    }
                    object.location[selectedPointIndex][3] = pointInfo;
                    page.fn.data.convertObjectLocation(object);
                    if (page.data.drawing.object && page.data.drawing.object.objectId === objectId) {
                        page.data.drawing.object.location[selectedPointIndex][3] = pointInfo;
                        page.fn.data.convertObjectLocation(page.data.drawing.object);
                    }

                    let view = page.fn.data.stringfyObjectPointTagValues(fileIndex, object.objectId, selectedPointId);
                    $("#li_pt_" + selectedPointId + " div.tagValue").html(view).attr("title", view);
                    $("#" + selectedPointId).attr("title", view);
                    if (view == "") {
                        $("#" + selectedPointId).removeClass("hasTag");
                    } else {
                        $("#" + selectedPointId).addClass("hasTag");
                    }
                }
                if (tag != null) {
                    if (target.val() != tag.val) {
                        page.gateway(page.constants.gateway.command.add, msg);
                        let object = page.fn.data.getObject(fileIndex, objectId);
                        if (object == null) {
                            for (let ii = 0; ii < page.data.loadTicket.fileList[fileIndex].tagList.length; ii++) {
                                if (page.data.loadTicket.fileList[fileIndex].tagList[ii].tagId == tagId) {
                                    if (target.val() != "" && target.val() != null) {
                                        page.data.loadTicket.fileList[fileIndex].tagList[ii].val = target.val();
                                    } else {
                                        page.data.loadTicket.fileList[fileIndex].tagList.splice([ii], 1);
                                    }
                                    break;
                                }
                            }
                        } else {
                            for (let ii = 0; ii < object.tagList.length; ii++) {
                                if (object.tagList[ii].tagId == tagId) {
                                    if (target.val() != "" && target.val() != null) {
                                        object.tagList[ii].val = target.val();
                                        if (page.data.drawing.object.objectId == object.objectId) {
                                            if (!page.data.drawing.object.tagList) {
                                                page.data.drawing.object.tagList = []
                                            }
                                            page.data.drawing.object.tagList[ii].val = target.val();
                                        }
                                    } else {
                                        object.tagList.splice(ii, 1);
                                        if (page.data.drawing.object.objectId == object.objectId) {
                                            if (!page.data.drawing.object.tagList) {
                                                page.data.drawing.object.tagList = []
                                            }
                                            page.data.drawing.object.tagList.splice(ii, 1);
                                        }
                                    }
                                    break;
                                }
                            }
                        }
                    }
                }
                //  page.data.event.fileIndex 사용할 경우 전역변수와 다르지만 현 이미지 태그의 값(val)을 가져와서 저장함.
                if (fileIndex != page.data.event.currentFileIndex) {
                    page.fn.drawing.resetPopupTag(fileIndex, "page.fn.focusedInputBlur Image Tag");
                }
            }
            target.attr("rollback", "");
        }
        page.fn.drawing.resetPopupTag(page.data.event.currentFileIndex, "page.fn.focusedInputBlur");
    }
}
page.fn.event.failReasonFocusInput = function () {
    page.data.event.isValidHotkey = false;
}
page.fn.event.failReasonFocusInputBlur = function () {
    page.data.event.isValidHotkey = true;
}
page.fn.event.filterValue = function (input) {
    log.info(input.value);
    let i = $(input);
    let val = input.value;
    let isFilterOfNumber = i.attr("data-filter-number") == "N" ? true : false;
    let isFilterOfLetter = i.attr("data-filter-letter") == "N" ? true : false;
    let isFilterOfSpecial = i.attr("data-filter-special") == "N" ? true : false;
    let lengthOfNumber = i.attr("data-length-number");
    let lengthOfLetter = i.attr("data-length-letter");


    if (isFilterOfNumber) {
        val = val.replace(/[0-9]/gi, '');
        log.info(val, "filtered value of number, " + input.value);
    }

    if (isFilterOfSpecial) {
        val = val.replace(/[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\]\{\}\\\|\;\:\'\"\,\<\>\.\/\?]/gi, '');
        log.info(val, "filtered value of special, " + input.value);
    }

    if (isFilterOfLetter) {
        let vals = val.split('');
        val = "";
        vals.forEach(function (v) {
            val += /[0-9]/.test(v) ? v : "";
            val += /[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\]\{\}\\\|\;\:\'\"\,\<\>\.\/\?]/.test(v) ? v : "";
        });
        log.info(val, "filtered value of letter, " + input.value);
    }
    if (!isNaN(lengthOfNumber) && !isNaN(val)) {
        if (lengthOfNumber > -1) {
            let maxlength = Number(lengthOfNumber);
            let intVal = val.length;
            let maxVal = val.substr(0, maxlength);
            if (intVal > maxlength) {
                val = maxVal;
            }
        }
    }
    if (!isNaN(lengthOfLetter)) {
        if (lengthOfLetter > -1) {
            let maxlength = Number(lengthOfLetter);
            let maxVal = val.substr(0, maxlength);
            val = maxVal;
        }
    }
    input.value = val;
}
page.fn.event.canSaveEdgeLine = function (event) {
    let canSave = true;
    let startPointId = page.data.drawing.object.location[0][2];
    let endPointId = $(event.target).attr("pointId");
    let fileIndex = page.data.drawing.object.fileIndex;
    if (endPointId == startPointId) {
        canSave = false;
    }
    for (var i = 0; i < page.data.loadTicket.fileList[fileIndex].objectList.length; i++) {
        let samePointCnt = 0;
        let object = page.data.loadTicket.fileList[fileIndex].objectList[i];
        if (object.objectType == page.constants.drawType.edgeLines
            && object.objectId != page.data.drawing.object.objectId) {
            if (object.location[0][2] == startPointId || object.location[0][2] == endPointId) {
                samePointCnt += 1;
            }
            if (object.location[1][2] == startPointId || object.location[1][2] == endPointId) {
                samePointCnt += 1;
            }
            if (samePointCnt == 2) {
                canSave = false;
                break;
            }
        }
    }
    return canSave;
}
page.fn.event.setEdgePointEvent = function (cls) {
    // cls active=그리기시작 / on=edgeLine그릴때 / arrange=정렬
    $(".edgePoint")
        .removeClass("on")
        .removeClass("active")
        .removeClass("arrange");
    if (cls != null) {
        $(".edgePoint").addClass(cls);
    }
}
page.fn.event.resetEdgePointEvent = function () {
    page.data.event.isDrawingEdgePoint = false;
    page.data.event.canMoveEdgePoint = false;
    $(".edgePoint").removeClass("on");
    $(".edgePoint").removeClass("active");
    $("#btn_drawEdgePoints").removeClass("arrange");
    page.dom.popEdgePointsArrange.hide();
    page.data.edgePointsArrangeAvailable = false;
}
page.fn.event.resetEdgePointArrangeEvent = function () {
    // edgePoint Arrange 팝업/이벤트 해제
    page.data.event.isDrawingEdgePointArrange = false;
    $("#btn_drawEdgePoints").removeClass("arrange");
    page.dom.popEdgePointsArrange.hide();
    page.data.edgePointsArrangeAvailable = false;
    $(".edgePoint").removeClass("arrange");
    $(".edgePoint").removeClass("arrangeTarget");
}
page.fn.event.showReviewFileInfo = function (fileIndex) {
    let rawFileId = page.data.loadTicket.fileList[fileIndex].rawFileId;
    $("#popReviewImageTagList").empty();
    $("#popReviewObjectTagList").empty();
    if (page.data.loadTicket.fileList[fileIndex].objectList != null && page.data.loadTicket.fileList[fileIndex].objectList.length > 0) {
        page.data.loadTicket.fileList[fileIndex].objectList.forEach(function (imgObj) {
            $("#popReviewObjectTagList").append(_common.template.parseObject("tmpl-review-object", imgObj));
            if (imgObj.tagList != null && imgObj.tagList.length > 0) {
                imgObj.tagList.forEach(function (oTag) {
                    let cTag = page.fn.data.getConstantsTag(oTag.tagId);
                    if (cTag) {
                        oTag.color = cTag.color;
                        oTag.color = oTag.color == null ? "var(--text)" : oTag.color;
                        oTag.name = cTag.name;
                        oTag.tagValueName = page.fn.data.getTagValueName(cTag, oTag.val);
                        oTag.tagValueColor = page.fn.data.getTagValueColor(oTag);
                        $("#popReviewObjectTagList").append(_common.template.parseObject("tmpl-review-tag", oTag));
                    }
                });
            }
        });
    }
    $("#popReviewImageTagList").empty();
    if (page.data.loadTicket.fileList[fileIndex].tagList != null && page.data.loadTicket.fileList[fileIndex].tagList.length > 0) {
        page.data.loadTicket.fileList[fileIndex].tagList.forEach(function (imgTag) {
            //tag name / value name
            let cTag = page.fn.data.getConstantsTag(imgTag.tagId);
            imgTag.name = cTag.name;
            imgTag.tagValueName = page.fn.data.getTagValueName(cTag, imgTag.val);
            $("#popReviewImageTagList").append(_common.template.parseObject("tmpl-review-tag", imgTag));
        });
    }
    $(".chkReviewRejectData").prop("checked", false);
    if (page.data.reviewFailDetailData.get(rawFileId) != null) {
        let reviewFailData = page.data.reviewFailDetailData.get(rawFileId);
        if (reviewFailData.objectList != null && reviewFailData.objectList.length > 0) {
            reviewFailData.objectList.forEach(function (o) {
                $("#popReview_object_" + o).prop("checked", true);
            });
        }
        if (reviewFailData.tagList != null && reviewFailData.tagList.length > 0) {
            reviewFailData.tagList.forEach(function (t) {
                $("#popReview_tag_" + t.objectId + "_" + t.tagId).prop("checked", true);
            });
        }
    }
    if (page.data.loadTicket.isValid) {
        $(".chkReviewRejectData").prop("disabled", false).css("cursor", "pointer");
        $("#popReviewFailReason").prop("disabled", false).css("cursor", "pointer");
    } else {
        $(".chkReviewRejectData").prop("disabled", true).css("cursor", "not-allowed");
        $("#popReviewFailReason").prop("disabled", true).css("cursor", "not-allowed");
    }
}
page.fn.event.rejectChoiceOnClick = function () {
    if (!_common.isEmpty(page.data.rejectReason)) {
        let ul = $(".reject-choice-ul");
    }
    if ($(".reject-choice").hasClass("on")) {
        $(".reject-choice").removeClass("on");
        $(".reject-choice-ul").removeClass("on");
    } else {
        $(".reject-choice").addClass("on");
        $(".reject-choice-ul").addClass("on");
    }
}
page.fn.event.addScrollEvent = function () {
    let nowScroll = $(t).scrollTop();
    if (nowScroll > 1) {
        $(".check-area").hide();
    } else {
        $(".check-area").show();
    }
}
page.fn.event.openTabAttachFile = function (t) {
    let uploadFileId = $(t).prev().attr("id");
    let uploadFile = $("#" + uploadFileId)[0].files;
    let dataSrc = $(t).attr("data-src");

    let img = window.open("", "_blank");
    img.document.write("<img src= '" + dataSrc + "'>");
    img.onbeforeunload = function () {
    }
}
page.fn.event.uploadAttachFile = function (t) {
    let file = $(t)[0].files;
    let multipart = new FormData();
    if (file.length == 0) {
        return false;
    }
    if (!page.fn.event.attachFileSizeCheck(file[0].size)) {
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
page.fn.event.attachFileSizeCheck = function (size) {
    let max = 10485760;
    if (size > max) {
        alert(page.message.alertFailImgFile);
        return false;
    } else {
        return true;
    }
}
page.fn.event.deleteAttachFile = function (t) {
    let fileId = $("#uploadFile").attr("data-fileId");
    let uploadFile = $(t).prev().prev().attr("id");
    $(t).prev().prev().prev().val("");
    $(t).prev().attr("data-src", "");
    $(t).prev().hide();
    $(t).hide();
    let dataTransfer = new DataTransfer();
    document.querySelector('#' + uploadFile).files = dataTransfer.files;
}
page.fn.event.downloadAttachFile = function (t) {
    let attachFileId = $(t).attr("data-fileId");

    if (_common.isNotEmpty(attachFileId)) {
        let a = document.createElement('a');
        a.target = '_blank';
        a.href = attachFileId;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        delete a;
    }
}
page.fn.event.animImageListFocus = function (ticketId) {
    try {
        let target = $(".imageListItem[data-ticketId='" + ticketId + "']");
        let scroller = $("#rootImageListWrap .imageListScroller");
        scroller.animate({scrollTop: (scroller.scrollTop() + (target.offset().top - 86))});
    } catch (E) {
        log.error(E);
        log.error(target);
    }
}
page.fn.event.chooseNextPointForTag = function () {
    if (page.dom.popPointTag.is(":visible")) {
        log.info("page.fn.chooseNextPointForTag");
        let liList = $("#rootPopPTPoints li");
        if (liList.length > 0) {
            let selIdx = -2;
            liList.each(function (idx, li) {
                if ($(li).hasClass("on")) {
                    selIdx = idx;
                }
            });
            selIdx = selIdx + 1;
            let pointId = "";
            if (selIdx < 0) {
                pointId = $(liList.get(0)).attr("data-pointId");
            } else if (selIdx < liList.length) {
                pointId = $(liList.get(selIdx)).attr("data-pointId");
            } else {
                pointId = $(liList.get(0)).attr("data-pointId");
            }
            page.fn.data.choosePTPoint(pointId, page.data.event.currentFileIndex);
        }
    }
}

page.fn.drawing = {};
page.fn.drawing.resetObjectOrderSeq = function (fileIndex) {
    let objectList = page.data.loadTicket.fileList[fileIndex].objectList;
    let orderSeq = 1;
    if (objectList != null) {
        objectList.forEach(function (object) {
            object.objectOrder = orderSeq++;
        })
    }
}
page.fn.drawing.isValidAppendPointOfEditObject = function (event) {
    let valid = {
        isValid: false
        , isCrosshair: false
    };
    if (_common.isEmpty(page.data.event.working)) {
        let keyboard = _common.getKeyboard(event);
        if (keyboard.keyName.startsWith(_common.keyboard.ctrl)) {
            if (page.data.drawing.object.objectType == page.constants.drawType.pointGroup) {
                valid.isValid = true;
                valid.isCrosshair = true;
            } else if (page.data.drawing.object.objectType == page.constants.drawType.polyline) {
                valid.isValid = true;
                valid.isCrosshair = false;
            } else if (page.data.drawing.object.objectType == page.constants.drawType.pointPolyline) {
                valid.isValid = true;
                valid.isCrosshair = false;
            } else if (page.data.drawing.object.objectType == page.constants.drawType.polygon) {
                valid.isValid = true;
                valid.isCrosshair = false;
            } else if (page.data.drawing.object.objectType == page.constants.drawType.rectangle4p) {
                if (page.data.drawing.object.location.length < 4) {
                    valid.isValid = true;
                    valid.isCrosshair = true;
                }
            } else if (page.data.drawing.object.objectType == page.constants.drawType.rectangle6p) {
                if (page.data.drawing.object.location.length < 6) {
                    valid.isValid = true;
                    valid.isCrosshair = true;
                }
            }
        }
    }
    return valid;
}
page.fn.drawing.getPositionForDrawing = function (e, isScaled, isOverfit) {
    isScaled = isScaled != false ? true : false;
    isOverfit = isOverfit == false ? false : true;
    let imageData = page.fn.data.getImageOriginalSize(page.data.event.currentFileIndex);
    let imageAngle = $(`.drawingImage[data-file-index=${page.data.event.currentFileIndex}]`).attr("data-file-rotation");
    // 이미지가 회전된 상태에서 회전된 좌표 반환을 위해 바뀐 이미지 사이즈 반환
    if (imageAngle != 0) {
        imageData = page.fn.drawing.calcRotationImageSize(imageData, imageAngle);
    }
    // Use pageX/pageY to avoid viewport vs document offsets when layout re-parents (BEV)
    let pageX = (e.pageX != null ? e.pageX : e.clientX + window.pageXOffset);
    let pageY = (e.pageY != null ? e.pageY : e.clientY + window.pageYOffset);
    const off = (page.dom.svg && page.dom.svg.offset) ? (page.dom.svg.offset() || {left: 0, top: 0}) : {
        left: 0,
        top: 0
    };
    let x = pageX - off.left;
    let y = pageY - off.top;
    if (isScaled) {
        x /= imageData.scale;
        y /= imageData.scale;
    }
    x = page.fn.drawing.limitMousePosition(x);
    y = page.fn.drawing.limitMousePosition(y);
    if (!isOverfit) {
        x = x < 0 ? 0 : x;
        y = y < 0 ? 0 : y;
        x = x > imageData.width ? imageData.width : x;
        y = y > imageData.height ? imageData.height : y;
    }
    return [x, y, page.fn.data.createTempKey()];
}
page.fn.drawing.setPositionOfCrosshair = function (event) {
    let fileIndex = page.data.event.currentFileIndex;
    let imageAngle = $(`.drawingImage[data-file-index=${fileIndex}]`).attr("data-file-rotation");
    let imageData = page.fn.data.getImageOriginalSize(fileIndex);
    try {
        page.dom.crosshairSVG.show();
        let cp = page.fn.drawing.getPositionForDrawing(event, false, true);
        // 회전된 이미지 각도에 따라 크로스헤어 위치, 너비, 높이 값 설정
        if (imageAngle == 0) {
            page.dom.crosshairVertical.attr("d", "M" + cp[0] + ",0 L" + cp[0] + "," + page.dom.crosshairSVG.height());
            page.dom.crosshairHorizon.attr("d", "M0, " + cp[1] + " L" + page.dom.crosshairSVG.width() + "," + cp[1]);
        } else if (imageAngle == 90) {
            cp[0] = (imageData.height * imageData.scale) - cp[0];
            page.dom.crosshairVertical.attr("d", "M" + cp[1] + ",0 L" + cp[1] + "," + page.dom.crosshairSVG.height());
            page.dom.crosshairHorizon.attr("d", "M0, " + cp[0] + " L" + page.dom.crosshairSVG.width() + "," + cp[0]);
        } else if (imageAngle == 180) {
            cp[0] = (imageData.width * imageData.scale) - cp[0];
            cp[1] = (imageData.height * imageData.scale) - cp[1];
            page.dom.crosshairVertical.attr("d", "M" + cp[0] + ",0 L" + cp[0] + "," + page.dom.crosshairSVG.height());
            page.dom.crosshairHorizon.attr("d", "M0, " + cp[1] + " L" + page.dom.crosshairSVG.width() + "," + cp[1]);
        } else if (imageAngle == 270) {
            cp[1] = (imageData.width * imageData.scale) - cp[1];
            page.dom.crosshairVertical.attr("d", "M" + cp[1] + ",0 L" + cp[1] + "," + page.dom.crosshairSVG.height());
            page.dom.crosshairHorizon.attr("d", "M0, " + cp[0] + " L" + page.dom.crosshairSVG.width() + "," + cp[0]);
        }
        return cp;
    } catch (E) {
        return null;
    }
}
page.fn.drawing.startFindObjectForGroup = function (event) {
    if (page.fn.event.isDrawingEvent(event) == true) {
        let position = page.fn.event.getMousePositionByTarget(event, page.dom.svg);
        let imageAngle = $(`.drawingImage[data-file-index=${page.data.event.currentFileIndex}]`).attr("data-file-rotation");
        // 이미지가 회전된 상태에서 오브젝트 그룹을 시작할 때 회전된 좌표로 출력해주기 위해
        if (imageAngle != 0) {
            let mousePosition = {x: position.svgX, y: position.svgY};
            let rotationMousePosition = page.fn.drawing.calcRotationPoint(mousePosition, page.data.event.currentFileIndex, imageAngle)
            position.svgX = rotationMousePosition.x;
            position.svgY = rotationMousePosition.y;
        }
        $("#findObjectForGroupSelector").remove();
        let selector = $(document.createElementNS("http://www.w3.org/2000/svg", 'rect'));
        selector.attr("id", "findObjectForGroupSelector");
        selector.attr("x", position.svgX);
        selector.attr("y", position.svgY);
        page.dom.svg.append(selector);
        page.data.drawing.grp.selector = selector;
        page.data.drawing.grp.mouseStart.x = position.svgX;
        page.data.drawing.grp.mouseStart.y = position.svgY;
        page.data.drawing.grp.isDrawing = true;
        page.fn.drawing.movingFindObjectForGroup(event);
    }
}
page.fn.drawing.movingFindObjectForGroup = function (event) {
    if (page.fn.event.isDrawingEvent(event) == true && page.data.drawing.grp.isDrawing == true) {
        let position = page.fn.event.getMousePositionByTarget(event, page.dom.svg);
        let imageAngle = $(`.drawingImage[data-file-index=${page.data.event.currentFileIndex}]`).attr("data-file-rotation");
        // 이미지가 회전된 상태에서 오브젝트 그룹핑 할 때 회전된 좌표로 출력해주기 위해
        if (imageAngle != 0) {
            let mousePosition = {x: position.svgX, y: position.svgY};
            let rotationMousePosition = page.fn.drawing.calcRotationPoint(mousePosition, page.data.event.currentFileIndex, imageAngle)
            position.svgX = rotationMousePosition.x;
            position.svgY = rotationMousePosition.y;
        }
        let scale = page.fn.data.getScale(page.data.event.currentFileIndex);
        let range = page.dom.svg.get(0).createSVGRect();

        let x = Math.min(page.data.drawing.grp.mouseStart.x, position.svgX);
        let y = Math.min(page.data.drawing.grp.mouseStart.y, position.svgY);
        let width = Math.max(page.data.drawing.grp.mouseStart.x, position.svgX) - x;
        let height = Math.max(page.data.drawing.grp.mouseStart.y, position.svgY) - y;
        page.data.drawing.grp.selector
            .attr("x", x)
            .attr("y", y)
            .attr("width", width)
            .attr("height", height)
        ;
        range.x = x * scale;
        range.y = y * scale;
        range.width = width * scale;
        range.height = height * scale;
        let searchedObjectList = page.dom.svg.get(0).getIntersectionList(range, null);
        for (let domObject of searchedObjectList) {
            if (domObject.tagName == "polygon" || domObject.tagName == "polyline") {
                searchedObjectList = page.fn.data.removePolyObjectForGroup(searchedObjectList, x, y, x + width, y + height, range);
                break;
            }
        }
        //log.info(searchedObjectList, "searchedObjectList");
        let oList = [];
        if (_common.isNotEmpty(searchedObjectList)) {
            $(".object-body").removeClass("watch");
            for (let obj of searchedObjectList) {
                obj = $(obj);
                if (obj.hasClass("object-body")) {
                    oList.push(obj);
                    obj.addClass("watch");
                }
            }
        }
        page.data.drawing.grp.selectedObjectList = oList;
    }
}
page.fn.drawing.endFindObjectForGroup = function (event) {
    if (page.data.drawing.grp.isDrawing == true) {
        log.info(page.data.drawing.grp.selectedObjectList, "page.data.drawing.grp.selectedObjectList");
        let fileIndex = page.data.event.currentFileIndex;
        page.data.drawing.grp.selector.remove();
        page.data.drawing.grp.isDrawing = false;
        page.gateway(page.constants.gateway.command.add, page.message.changeGroup);
        let grp = page.fn.data.getObjectGroup(page.data.drawing.grp.groupId, fileIndex);
        let key = _common.getKeyboard(event);
        $(".objectGroupHighlight").removeClass("objectGroupHighlight");
        if (_common.isNotEmpty(grp)) {
            if (key.keyName.indexOf("Ctrl") < 0) {
                grp.objectList = [];
                for (let o of page.data.drawing.grp.selectedObjectList) {
                    let objectId = o.attr("objectId");
                    grp.objectList.push(objectId)
                }
            } else {
                let removeList = [];
                for (let o of page.data.drawing.grp.selectedObjectList) {
                    let objectId = o.attr("objectId");
                    if (grp.objectList != null) {
                        if (grp.objectList.includes(objectId)) {
                            removeList.push(objectId);
                        } else {
                            grp.objectList.push(objectId)
                        }
                    }
                }
                if (page.data.drawing.grp.selectedObjectList.length > 1) {
                } else {
                    grp.objectList = _common.removeOnList(grp.objectList, removeList);
                }
            }
        }
        for (let object of page.data.event.currentFile.objectList) {
            if (_common.isNotEmpty(object)) {
                if (_common.isEmpty(object.grpObjIdx) || _common.isEmpty(object.groupId)) {
                    object.grpObjIdx = [];
                    object.groupId = [];
                }
                if (grp.objectList.includes(object.objectId)) {
                    object.groupId.push(grp.groupId);
                    object.grpObjIdx.push(grp.index);
                    $("svg .draw-object[objectId='" + object.objectId + "']").fadeOut().fadeIn().addClass("objectGroupHighlight");
                } else {
                    page.fn.data.spliceGroupInOneObject(object, grp);
                }
                object.groupId = object.groupId.filter((v, i) => object.groupId.indexOf(v) === i);
                object.grpObjIdx = object.grpObjIdx.filter((v, i) => object.grpObjIdx.indexOf(v) === i);
                page.fn.drawing.applyGroupOnObjectList(object);
            }
        }
        $(".object-body.watch").removeClass("watch");
        page.fn.drawing.renderObjectGroup(fileIndex);
        if (page.constants.selectedGrpPopupObject != null) {
            let selectedObject = page.constants.selectedGrpPopupObject;
            page.fn.drawing.renderGroupInObject(selectedObject.fileIndex, selectedObject.objectId);
        }
        page.fn.drawing.resetPopupTag(fileIndex, 'finished make group');
    }
}
page.fn.drawing.applyGroupOnObjectList = function (object) {
    // log.info(object, "page.fn.applyGroupOnObjectList");
    if (object.groupId.length == 0) {
        $("#grpObjIdx_" + object.objectId).text("");
    } else if (object.groupId.length == 1) {
        $("#grpObjIdx_" + object.objectId).html("<i class='material-icons' style='font-size: 11px; padding-top: 1px;'>qr_code_scanner</i>" + object.grpObjIdx);
        $("#grpObjIdx_" + object.objectId).css("text-decoration", "none");
    } else {
        $("#grpObjIdx_" + object.objectId).text(object.grpObjIdx.length);
        $("#grpObjIdx_" + object.objectId).css("text-decoration", "underline");
    }
}
page.fn.drawing.zoomOut = function (event) {
    try {
        if (window.__BEV_DISABLE_ZOOM__ && page?.data?.event?.currentFileIndex === 0) {
            return;
        }
        if (window.__BEV_DISABLE_ZOOM_CAM__ && page?.data?.event?.currentFileIndex !== 0) {
            return;
        }
    } catch (_) {
    }
    let target = page.fn.event.filterByClass(event, "root");
    if (target.hasTarget == true) {
        log.info(target, "page.fn.drawing.zoomOut, target");
        let image = $(".drawingImage[data-file-index='" + target.target.attr("data-file-index") + "']");
        let scale = Number.parseFloat(image.attr("data-scale"));
        let appendVal = 0;
        if (scale > 5) {
            appendVal = 0.5;
        } else if (scale > 3) {
            appendVal = 0.2;
        } else {
            appendVal = 0.1;
        }
        if (event.shiftKey) {
            appendVal *= page.data.userSetting.zoomRatio;
        }
        let before = {
            scale: Number.parseFloat(image.attr("data-scale"))
            , width: image.parent().width()
            , height: image.parent().height()
            , offsetX: image.parent().position().left
            , offsetY: image.parent().position().top
        };
        if (scale - appendVal < page.config.zoom.min) {
            scale = page.config.zoom.min;
        } else {
            scale -= appendVal;
        }
        page.fn.drawing.applyScale(before, event, image, scale);
    }
};
page.fn.drawing.zoomIn = function (event) {
    try {
        if (window.__BEV_DISABLE_ZOOM__ && page?.data?.event?.currentFileIndex === 0) {
            return;
        }
        if (window.__BEV_DISABLE_ZOOM_CAM__ && page?.data?.event?.currentFileIndex !== 0) {
            return;
        }
    } catch (_) {
    }
    let target = page.fn.event.filterByClass(event, "root");
    if (target.hasTarget == true) {
        log.info(target, "page.fn.drawing.zoomIn, target");
        let image = $(".drawingImage[data-file-index='" + target.target.attr("data-file-index") + "']");
        let scale = Number.parseFloat(image.attr("data-scale"));

        let appendVal = 0;
        if (scale < 3) {
            appendVal = 0.1;
        } else if (scale < 5) {
            appendVal = 0.2;
        } else {
            appendVal = 0.5;
        }
        if (event.shiftKey) {
            appendVal *= page.data.userSetting.zoomRatio;
        }
        let before = {
            scale: Number.parseFloat(image.attr("data-scale"))
            , width: image.parent().width()
            , height: image.parent().height()
            , offsetX: image.parent().position().left
            , offsetY: image.parent().position().top
        };
        if (scale + appendVal > page.config.zoom.max) {
            scale = page.config.zoom.max;
        } else {
            scale += appendVal;
        }
        page.fn.drawing.applyScale(before, event, image, scale);
    }
};
page.fn.drawing.setFixScale = function () {
    page.constants.userSetting.fixScale = $("#chkFixScale").is(":checked") ? "true" : "false";
    _common.cookie.set(page.constants.cookieKeys.fixScale, page.constants.userSetting.fixScale);
    if (page.constants.userSetting.fixScale == "false") {
        $("#chkFixPosition").prop("checked", false);
        _common.cookie.set(page.constants.cookieKeys.fixPosition, "false");
    }
}
page.fn.drawing.setFixPosition = function () {
    page.constants.userSetting.fixPosition = $("#chkFixPosition").is(":checked") ? "true" : "false";
    _common.cookie.set(page.constants.cookieKeys.fixPosition, page.constants.userSetting.fixPosition);
    if (page.constants.userSetting.fixPosition == "true") {
        $("#chkFixScale").prop("checked", true);
        _common.cookie.set(page.constants.cookieKeys.fixScale, "true");
    }
}
page.fn.drawing.applyScale = function (before, event, targetImage, scale) {
    log.info(before, "page.fn.applyScale, before");
    log.info(targetImage, "page.fn.applyScale, targetImage");
    scale = Math.floor(scale * 100) / 100;
    let fileIndex = targetImage.attr("data-file-index")
    let imageSize = page.fn.data.getImageOriginalSize(fileIndex);
    // before.targetImage = targetImage;
    before.imageSize = imageSize;
    before.nextScale = scale;
    before.offset = targetImage.offset();
    targetImage.attr("data-scale", scale);
    targetImage.parent().width(imageSize.width * scale);
    targetImage.parent().height(imageSize.height * scale);
    page.dom.txtImageScale.text((scale * 100).toFixed(0));
    if ($("#chkFixScale").is(":checked")) {
        if (_common.cookie.get(page.constants.cookieKeys.valueScale) == null) {
            _common.cookie.set(page.constants.cookieKeys.valueScale, '0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2');
        } else {
            let valueScale = _common.cookie.get(page.constants.cookieKeys.valueScale).split(",");
            if (valueScale.length != 8) {
                _common.cookie.set(page.constants.cookieKeys.valueScale, '0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2');
            }
        }
        let cookieValueScale = _common.cookie.get(page.constants.cookieKeys.valueScale).split(",");
        cookieValueScale[fileIndex] = scale;
        _common.cookie.set(page.constants.cookieKeys.valueScale, cookieValueScale.join(","));
    }
    // targetImage.parent().children("svg.drawingSVG").get(0).currentScale = scale;
    if (before != null && event != null) {
        page.fn.drawing.centerByMouse(event, before);
    }
    page.fn.drawing.resetPopupTag(targetImage.attr("data-file-index"), 'page.fn.applyScale');
}
page.fn.drawing.centerByMouse = function (event, before) {
    let targetImage = $(`.drawingImage[data-file-index=${page.data.event.currentFileIndex}]`);
    let wrapImageArea = targetImage.parent();
    let imageAngle = targetImage.attr("data-file-rotation");
    // Use page coordinates to keep zoom anchored to cursor regardless of scroll/layout
    let curX = (event.pageX != null ? event.pageX : event.clientX + window.pageXOffset);
    let curY = (event.pageY != null ? event.pageY : event.clientY + window.pageYOffset);
    let x = wrapImageArea.position().left;
    let y = wrapImageArea.position().top;
    let tempBefore = _common.copy(before);
    // 이미지가 회전된 상태에서 줌 인/아웃 이벤트 발생 시 회전된 이미지 정보를 가져오기 위해
    if (imageAngle == 90 || imageAngle == 270) {
        before.imageSize.height = tempBefore.imageSize.width;
        before.imageSize.width = tempBefore.imageSize.height;
        before.height = tempBefore.width;
        before.width = tempBefore.height;
    }
    let width = (before.imageSize.width * before.nextScale) - before.width;
    let height = (before.imageSize.height * before.nextScale) - before.height;
    x -= (width / 2);
    y -= (height / 2);
    let beforeX = (curX - wrapImageArea.offset().left) / before.scale;
    let beforeY = (curY - wrapImageArea.offset().top) / before.scale;
    let beforeChangeImageOffset = _common.copy(wrapImageArea.offset());
    page.fn.drawing.changeImagePosition(y, x, wrapImageArea);
    let afterX = (curX - wrapImageArea.offset().left) / before.nextScale;
    let afterY = (curY - wrapImageArea.offset().top) / before.nextScale;
    let xx = (afterX - beforeX) * before.nextScale;
    let yy = (afterY - beforeY) * before.nextScale;
    page.fn.drawing.changeImagePosition(wrapImageArea.position().top + yy, wrapImageArea.position().left + xx, wrapImageArea);
    // 이미지가 회전된 상태에서 줌 인/아웃 이벤트 발생 시 변환된 마우스 좌표에 맞는 이미지의 출력 위치를 변경 해주기 위해
    if (imageAngle == 90 || imageAngle == 270) {
        let rotateX = (curX - wrapImageArea.offset().left) / before.nextScale;
        let rotateY = (curY - wrapImageArea.offset().top) / before.nextScale;
        let rotateCoordinate = ((before.imageSize.height / before.height) / before.nextScale) - ((before.imageSize.height / before.height) * before.nextScale)
        let rotateOffsetLeft = (rotateX - beforeX) * before.nextScale + (before.offset.left - beforeChangeImageOffset.left) - (rotateCoordinate / 2)
        let rotateOffsetTop = (rotateY - beforeY) * before.nextScale + (before.offset.top - beforeChangeImageOffset.top) + rotateCoordinate
        page.fn.drawing.changeImagePosition(parseFloat(wrapImageArea.css("top")) + rotateOffsetTop, parseFloat(wrapImageArea.css("left")) + rotateOffsetLeft, wrapImageArea)
    }
}
page.fn.drawing.changeImagePosition = function (top, left, wrapImageArea) {
    wrapImageArea.css("top", top);
    wrapImageArea.css("left", left);
    _common.cookie.set(page.constants.cookieKeys.valuePosition, top + "," + left);
    page.fn.drawing.applyRulerPositionByIndex(wrapImageArea.attr("data-file-index"));
}
page.fn.drawing.setButton = function (drawType) {
    $(".btnNewDraw").removeClass("on");
    $(".btnNewDraw").removeClass("arrange"); // edgePoints icon 우클릭 때문 이건 startNewDrawing이나 endNeDrawing에서 따로 처리할 수도 있음
    $("#btn_" + drawType).addClass("on");
}
page.fn.drawing.endNewDrawing = function (callBy) {

    //;
    log.info(callBy, "page.fn.drawing.endNewDrawing, callBy");
    if (page.data.event.method == page.constants.method.magicQ) {
        page.data.event.method = page.constants.method.none;
        page.fn.data.runMagicQ(page.data.drawing.object);
        return;
    }
    $(".objectGroupHighlight").removeClass("objectGroupHighlight");
    page.fn.drawing.unRenderObjectPoint();  // 키포인트 때문
    page.fn.event.resetEdgePointEvent();
    page.fn.event.resetEdgePointArrangeEvent();
    $("svg.drawingSVG g[data-preview='vis-box-preview']").remove();
    if (page.data.drawing.isAddingObject == true) {
        let isValidObjectData = page.fn.data.isValidObjectData(page.data.drawing.object);
        console.log(isValidObjectData, "isValidObjectData");
        console.log(page.data.drawing.object, "page.data.drawing.object");
        if (page.data.drawing.object != null && isValidObjectData != true) {
            if (isValidObjectData == 'min') {
                if (page.constants.drawMin.isUse == "Y") {
                    page.fn.alert(_common.template.parseMessage(page.message.cancleDrawingMin, {
                        minX: page.constants.drawMin.x
                        , minY: page.constants.drawMin.y
                    }));
                } else if (page.constants.drawMin.isUse == "S") {
                    page.fn.alert(_common.template.parseMessage(page.message.cancleDrawingMinP, {
                        area: page.constants.drawMin.x
                    }));
                }
            }
            page.fn.data.deleteObject(page.data.drawing.object.fileIndex, page.data.drawing.object.objectId);
            page.fn.drawing.startNewDrawing(page.constants.method.moveImage);
        } else if (page.data.drawing.object == null) {
        } else {
            page.fn.drawing.renderObject(page.data.drawing.object);
        }
        page.data.drawing.isAddingObject = false;
    }
    if (page.data.drawing.isViewCorsshair == true) {
        page.data.drawing.isViewCorsshair = false;
        page.dom.crosshairSVG.hide();
    }
    if (page.data.event.isDrawing == true) {
        page.data.event.isDrawing = false;
        page.data.historyDrawData = new HashMap();
        page.data.historyDrawDataObject = new HashMap();
        if (page.data.drawing.object?.objectType !== page.constants.drawType.draw6PointCube)
            $("circle.draw-point").not(".edgePoint, .bev-rotate-handle").remove();

    }
    $(".root").css("cursor", "default");
}
page.fn.drawing.startNewDrawing = function (methodType, subParam) {
    log.info(methodType, "page.fn.drawing.startNewDrawing, methodType");
    page.fn.drawing.endNewDrawing("page.fn.drawing.startNewDrawing");
    if (methodType == page.constants.method.none) {
        methodType = page.constants.method.moveImage;
    }
    page.fn.drawing.setButton(methodType);
    page.dom.styleChooseObject.html("");
    page.data.event.method = methodType;
    page.data.event.isDrawingEdgePoint = false;
    page.data.event.isSelectedObject = false;
    if (page.data.objectKeypointId == null) {
        log.info("reset keypointId")
        page.fn.data.resetKeypointId();
    }
    if (methodType != page.constants.method.none
        && methodType != page.constants.method.moveImage
        && methodType != page.constants.method.selectObject
        && methodType != page.constants.method.editObject
        && !page.data.loadTicket.isValid
    ) {
        page.fn.alert(page.message.isInvalidEdit);
        return false;
    }
    if (methodType == page.constants.method.selectObject) {
        page.dom.styleChooseObject.html(_common.template.parseObject("tmpl_style_chooseObject", {border: page.data.userSetting.border + 2}));
        // Auto show points for all pointPolyline objects when entering select object mode
        page.fn.drawing.toggleVisiblePointPolylinePoints(true);
        // Also show generic view points for polygon/polyline/rect to allow selection by point
        page.fn.drawing.toggleVisiblePolylinePoints(true);
    } else if (methodType == page.constants.method.moveObject) {
        page.fn.data.unSelectObject("page.fn.drawing.startNewDrawing");
        page.dom.styleChooseObject.html(_common.template.parseObject("tmpl_style_moveObject", {border: page.data.userSetting.border + 2}));
    } else if (methodType == page.constants.method.drawRectangle) {
        ;
        page.data.drawing.object = page.fn.data.appendNewDrawObject({objectType: page.constants.drawType.rectangle});
        if (page.data.drawing.object == null) {
            page.fn.drawing.endNewDrawing("page.fn.drawing.startNewDrawing, fail of new rectangle.");
        } else {
            page.data.drawing.isViewCorsshair = true;
            page.data.drawing.isAddingObject = true;
            page.data.event.isDrawing = true;
            page.data.drawing.objectType = page.constants.drawType.rectangle;
        }
    } else if (methodType == page.constants.method.drawRectangle4p) {
        page.data.drawing.object = page.fn.data.appendNewDrawObject({objectType: page.constants.drawType.rectangle4p});
        if (page.data.drawing.object == null) {
            page.fn.drawing.endNewDrawing("page.fn.drawing.startNewDrawing, fail of new polyline.");
        } else {
            page.data.drawing.isViewCorsshair = false;
            page.data.drawing.isAddingObject = true;
            page.data.event.isDrawing = true;
            $(".root[data-file-index='" + page.data.event.currentFileIndex + "']").css("cursor", "crosshair");
            page.data.drawing.objectType = page.constants.drawType.rectangle4p;
        }
    } else if (methodType == page.constants.method.drawBevBox4) {
        // Start drawing a BEV 4-point box (defined by two diagonal points)
        page.data.drawing.object = page.fn.data.appendNewDrawObject({objectType: page.constants.drawType.drawBevBox4});
        if (page.data.drawing.object == null) {
            page.fn.drawing.endNewDrawing("page.fn.drawing.startNewDrawing, fail of new drawBevBox4.");
        } else {
            page.data.drawing.isViewCorsshair = true;
            page.data.drawing.isAddingObject = true;
            page.data.event.isDrawing = true;
            $(".root[data-file-index='" + page.data.event.currentFileIndex + "']").css("cursor", "crosshair");
            page.data.drawing.objectType = page.constants.drawType.drawBevBox4;
        }
    }else if (methodType == page.constants.method.drawVISBox) {
        // Start drawing VIS-Box (Visibility Box)
        page.data.drawing.object = page.fn.data.appendNewDrawObject({objectType: page.constants.drawType.drawVISBox});
        if (page.data.drawing.object == null) {
            page.fn.drawing.endNewDrawing("page.fn.drawing.startNewDrawing, fail of new VIS-Box.");
        } else {
            page.data.drawing.isViewCorsshair = true;
            page.data.drawing.isAddingObject = true;
            page.data.event.isDrawing = true;
            $(".root[data-file-index='" + page.data.event.currentFileIndex + "']").css("cursor", "crosshair");
            page.data.drawing.objectType = page.constants.drawType.drawVISBox;
        }
    } else if (methodType == page.constants.method.drawPolygon) {
        page.data.drawing.object = page.fn.data.appendNewDrawObject({objectType: page.constants.drawType.polygon});
        if (page.data.drawing.object == null) {
            page.fn.drawing.endNewDrawing("page.fn.drawing.startNewDrawing, fail of new polygon.");
        } else {
            page.data.drawing.isViewCorsshair = false;
            page.data.drawing.isAddingObject = true;
            page.data.event.isDrawing = true;
            $(".root[data-file-index='" + page.data.event.currentFileIndex + "']").css("cursor", "crosshair");
            page.data.drawing.objectType = page.constants.drawType.polygon;
        }
    } else if (methodType == page.constants.method.drawPolyline) {
        page.data.drawing.object = page.fn.data.appendNewDrawObject({objectType: page.constants.drawType.polyline});
        if (page.data.drawing.object == null) {
            page.fn.drawing.endNewDrawing("page.fn.drawing.startNewDrawing, fail of new polyline.");
        } else {
            page.data.drawing.isViewCorsshair = false;
            page.data.drawing.isAddingObject = true;
            page.data.event.isDrawing = true;
            $(".root[data-file-index='" + page.data.event.currentFileIndex + "']").css("cursor", "crosshair");
            page.data.drawing.objectType = page.constants.drawType.polyline;
        }
    } else if (methodType == page.constants.method.drawPointPolyline) {
        page.data.drawing.object = page.fn.data.appendNewDrawObject({objectType: page.constants.drawType.pointPolyline});
        if (page.data.drawing.object == null) {
            page.fn.drawing.endNewDrawing("page.fn.drawing.startNewDrawing, fail of new pointPolyline.");
        } else {
            page.data.drawing.isViewCorsshair = false;
            page.data.drawing.isAddingObject = true;
            page.data.event.isDrawing = true;
            $(".root[data-file-index='" + page.data.event.currentFileIndex + "']").css("cursor", "crosshair");
            page.data.drawing.objectType = page.constants.drawType.pointPolyline;
            // Auto show point tag popup
            if (page.dom.popPointTag && !page.dom.popPointTag.is(":visible")) {
                page.dom.popPointTag.fadeIn();
                page.dom.popPointTag.css("top", "50px");
                page.dom.popPointTag.css("left", "50px");
            }
        }
    } else if (methodType == page.constants.method.drawKeypoint) {
        page.data.drawing.object = page.fn.data.appendNewDrawObject({objectType: page.constants.drawType.keypoint});
        if (page.data.drawing.object == null) {
            page.fn.drawing.endNewDrawing("page.fn.drawing.startNewDrawing, fail of new keypoint.");
        } else {
            page.data.drawing.object.keypointId = page.data.objectKeypointId;
            page.data.drawing.isViewCorsshair = false;
            page.data.drawing.isAddingObject = true;
            page.data.event.isDrawing = true;
            $(".root[data-file-index='" + page.data.event.currentFileIndex + "']").css("cursor", "crosshair");
            page.data.drawing.objectType = page.constants.drawType.keypoint;
        }
    } else if (methodType == page.constants.method.drawPointGroup) {
        page.data.drawing.object = page.fn.data.appendNewDrawObject({objectType: page.constants.drawType.pointGroup});
        if (page.data.drawing.object == null) {
            page.fn.drawing.endNewDrawing("page.fn.drawing.startNewDrawing, fail of new pointGroup.");
        } else {
            page.data.drawing.isViewCorsshair = true;
            page.data.drawing.isAddingObject = true;
            page.data.event.isDrawing = true;
            $(".root[data-file-index='" + page.data.event.currentFileIndex + "']").css("cursor", "crosshair");
            page.data.drawing.objectType = page.constants.drawType.pointGroup;
        }
    } else if (methodType == page.constants.method.drawPoint) {
        page.data.drawing.object = page.fn.data.appendNewDrawObject({objectType: page.constants.drawType.point});
        if (page.data.drawing.object == null) {
            page.fn.drawing.endNewDrawing("page.fn.drawing.startNewDrawing, fail of new point.");
        } else {
            page.data.drawing.isViewCorsshair = true;
            page.data.drawing.isAddingObject = true;
            page.data.event.isDrawing = true;
            $(".root[data-file-index='" + page.data.event.currentFileIndex + "']").css("cursor", "crosshair");
            page.data.drawing.objectType = page.constants.drawType.point;
        }
    } else if (methodType == page.constants.method.drawSideBox) {
        page.data.drawing.object = page.fn.data.appendNewDrawObject({objectType: page.constants.drawType.sideBox});
        if (page.data.drawing.object == null) {
            page.fn.drawing.endNewDrawing("page.fn.drawing.startNewDrawing, fail of new sideBox.");
        } else {
            page.data.drawing.isViewCorsshair = true;
            page.data.drawing.isAddingObject = true;
            page.data.event.isDrawing = true;
            $(".root[data-file-index='" + page.data.event.currentFileIndex + "']").css("cursor", "crosshair");
            page.data.drawing.objectType = page.constants.drawType.sideBox;
        }
    } else if (methodType == page.constants.method.drawEdgePoints) {
        page.data.drawing.isViewCorsshair = false;
        page.data.drawing.isAddingObject = false;
        page.data.event.isDrawing = true;
        page.data.event.isDrawingEdgePoint = true;
        page.fn.drawing.renderEdgePoint(page.data.event.currentFileIndex, "active");
        $(".root[data-file-index='" + page.data.event.currentFileIndex + "']").css("cursor", "crosshair");
    } else if (methodType == page.constants.method.drawEdgeLines) {
        page.data.drawing.object = page.fn.data.appendNewDrawObject({objectType: page.constants.drawType.edgeLines});
        if (page.data.drawing.object == null) {
            page.fn.drawing.endNewDrawing("page.fn.drawing.startNewDrawing, fail of new edgeLines.");
        } else {
            page.data.drawing.isViewCorsshair = false;
            page.data.drawing.isAddingObject = true;
            page.data.event.isDrawing = true;
            page.fn.drawing.renderEdgePoint(page.data.event.currentFileIndex, "on");
            $(".root[data-file-index='" + page.data.event.currentFileIndex + "']").css("cursor", "crosshair");
            page.data.drawing.objectType = page.constants.drawType.edgeLines;
        }
    } else if (methodType == page.constants.method.drawEdgePointsArrange) {
        page.data.drawing.isViewCorsshair = false;
        page.data.drawing.isAddingObject = false;
        page.data.event.isDrawing = true;
        page.data.event.isDrawingEdgePointArrange = true;
        page.fn.drawing.renderEdgePoint(page.data.event.currentFileIndex, "arrange");
        $(".root[data-file-index='" + page.data.event.currentFileIndex + "']").css("cursor", "crosshair");
    } else if (methodType == page.constants.method.drawPaint) {
        page.data.event.lastMethodType = page.constants.method.drawPaint;
        page.data.drawing.command = page.constants.method.drawPaint;
        page.data.drawing.isViewCorsshair = false;
        paint.fn.init("drawingImage_" + page.data.event.currentFileIndex, {
            returnFunction: function (points) {
                page.fn.drawing.makePolygonByPaint(page.data.event.currentFileIndex, points);
            }, position: {left: 100, top: 100}
        });
    } else if (methodType == page.constants.method.magicPin) {
        page.data.drawing.object = page.fn.data.appendNewDrawObject({objectType: page.constants.drawType.polygon});
        if (page.data.drawing.object == null) {
            page.fn.drawing.endNewDrawing("page.fn.drawing.startNewDrawing, fail of new rectangle.");
        } else {
            page.data.drawing.isViewCorsshair = true;
            page.data.drawing.isAddingObject = true;
            page.data.event.isDrawing = true;
            page.data.drawing.objectType = page.constants.drawType.polygon;
        }
    } else if (methodType == page.constants.method.magicBox) {
        page.data.drawing.object = page.fn.data.appendNewDrawObject({objectType: page.constants.drawType.rectangle});
        if (page.data.drawing.object == null) {
            page.fn.drawing.endNewDrawing("page.fn.drawing.startNewDrawing, fail of new rectangle.");
        } else {
            page.data.drawing.isViewCorsshair = true;
            page.data.drawing.isAddingObject = true;
            page.data.event.isDrawing = true;
            page.data.drawing.objectType = page.constants.drawType.rectangle;
        }
    } else if (methodType == page.constants.method.magicQ) {
        page.data.drawing.object = page.fn.data.appendNewDrawObject({objectType: page.constants.drawType.polygon});
        if (page.data.drawing.object == null) {
            page.fn.drawing.endNewDrawing("page.fn.drawing.startNewDrawing, fail of new rectangle.");
        } else {
            page.data.drawing.isViewCorsshair = true;
            page.data.drawing.isAddingObject = true;
            page.data.event.isDrawing = true;
            page.data.drawing.objectType = page.constants.drawType.polygon;
        }
    } else if (methodType == page.constants.method.magicKey) {
        page.data.drawing.object = page.fn.data.appendNewDrawObject({objectType: page.constants.drawType.rectangle});
        if (page.data.drawing.object == null) {
            page.fn.drawing.endNewDrawing("page.fn.drawing.startNewDrawing, fail of new rectangle.");
        } else {
            page.data.drawing.isViewCorsshair = true;
            page.data.drawing.isAddingObject = true;
            page.data.event.isDrawing = true;
            page.data.drawing.objectType = page.constants.drawType.rectangle;
        }
    } else if (methodType == page.constants.method.magicAIBox
        || methodType == page.constants.method.magicAIPolygon) {
        page.fn.data.runMagicAI(methodType);
    } else if (methodType == page.constants.method.makeGroup) {
        if (!$("#btn_makeGroup").is(":visible")) {
            log.warn("deny permission, makeGroup");
            page.fn.alert(page.message.isInvalidEdit);
            return false;
        }
        if (page.data.drawing.object == null) {
            page.fn.drawing.endNewDrawing("page.fn.drawing.startNewDrawing. makeGroup");
        }
        if (page.data.event.currentFile.objectList.length == 0) {
            page.fn.alert(page.message.errorGroupNoHaveObject);
            page.fn.drawing.startNewDrawing(page.constants.method.moveImage);
            return false;
        }
        page.data.event.lastMethodType = methodType;
        page.fn.drawing.setButton(page.constants.method.makeGroup);
        page.data.drawing.command = page.constants.method.makeGroup;
        page.data.drawing.newGroupObjects = new HashMap();
        if (!$("#popObjectGroup").is(":visible")) {
            page.fn.popup.togglePopupObjectGroup();
        }
        let grpId = null;
        if (_common.isEmpty(subParam)) {
            page.gateway(page.constants.gateway.command.add, page.message.makeGroup);
            let grp = page.fn.data.makeObjectGroup(page.data.event.currentFileIndex);
            grpId = grp.groupId;
        } else {
            grpId = subParam.groupId;
        }
        $("button[data-button-type='grpUpdate']").removeClass("on");
        $("button[data-button-type='grpUpdate'][data-groupId='" + grpId + "']").addClass("on");
        page.data.drawing.isViewCorsshair = false;
        page.data.drawing.grp = {
            mouseStart: {x: 0, y: 0}
            , mouseEnd: {x: 0, y: 0}
            , isDrawing: false
            , groupId: grpId
            , isAppendMode: false
            , selector: null
            , selectedObjectList: []
        };
        log.info("start update group, " + grpId);
    } else if (methodType == page.constants.method.drawCube2D) {
        page.data.drawing.object = page.fn.data.appendNewDrawObject({objectType: page.constants.drawType.drawCube2D});
        if (page.data.drawing.object == null) {
            page.fn.drawing.endNewDrawing("page.fn.drawing.drawCube2D, fail of new drawCube2D.");
        } else {
            page.data.drawing.isViewCorsshair = true;
            page.data.drawing.isAddingObject = true;
            page.data.event.isDrawing = true;
            //$(".root[data-file-index='" + page.data.event.currentFileIndex + "']").css("cursor", "crosshair");
            page.data.drawing.objectType = page.constants.drawType.drawCube2D;
        }
    } else if (methodType == page.constants.method.drawCube2DFront) {
        page.data.drawing.object = page.fn.data.appendNewDrawObject({objectType: page.constants.drawType.drawCube2DFront});
        if (page.data.drawing.object == null) {
            page.fn.drawing.endNewDrawing("page.fn.drawing.drawCube2DFront, fail of new drawCube2DFront.");
        } else {
            page.data.drawing.isViewCorsshair = true;
            page.data.drawing.isAddingObject = true;
            page.data.event.isDrawing = true;
            //$(".root[data-file-index='" + page.data.event.currentFileIndex + "']").css("cursor", "crosshair");
            page.data.drawing.objectType = page.constants.drawType.drawCube2DFront;
        }
    } else if (methodType == page.constants.method.draw6PointCube) {
        console.log("startNewDrawing - draw6PointCube");
        page.data.drawing.object = page.fn.data.appendNewDrawObject({objectType: page.constants.drawType.draw6PointCube});
        if (page.data.drawing.object == null) {
            page.fn.drawing.endNewDrawing("page.fn.drawing.draw6PointCube, fail of new draw6PointCube.");
        } else {
            page.data.drawing.isViewCorsshair = true;
            page.data.drawing.isAddingObject = true;
            page.data.event.isDrawing = true;
            //$(".root[data-file-index='" + page.data.event.currentFileIndex + "']").css("cursor", "crosshair");
            page.data.drawing.objectType = page.constants.drawType.draw6PointCube;
        }
    }

}
page.fn.drawing.initRuler = function (target) {
    log.info(target, "page.fn.drawing.initRuler");
    let fileIndex = target.attr("data-file-index");
    let svgVertical = $("svg.ruler-vertical[data-file-index='" + fileIndex + "']").empty();
    let svgHorizontal = $("svg.ruler-horizontal[data-file-index='" + fileIndex + "']").empty();
    let imageSize = page.fn.data.getImageOriginalSize(fileIndex);
    let imageAngle = target.attr("data-file-rotation");
    // 이미지 회전 시 회전된 이미지에 맞게 눈금자의 크기를 지정해주기 위해
    if (imageAngle != 0) {
        imageSize = page.fn.drawing.calcRotationImageSize(imageSize, imageAngle);
    }
    svgVertical.attr("viewBox", "0 0 30 " + (imageSize.height + 1));
    svgHorizontal.attr("viewBox", "0 0 " + (imageSize.width + 1) + " 30");
    if (imageSize.height >= 50) {
        for (let i = 0; i <= imageSize.height; i += 50) {
            if (i % 100 == 0) {
                let y = i;
                if (imageSize.height == i) {
                    y -= 1;
                }
                let o = $(document.createElementNS("http://www.w3.org/2000/svg", 'rect'));
                o
                    .attr("x", 0)
                    .attr("y", y)
                    .addClass("ruler-vertical-100")
                    .attr("title", i)
                // .attr("width", "15")
                // .attr("height", "1")
                ;
                svgVertical.append(o);
                let t = $(document.createElementNS("http://www.w3.org/2000/svg", 'title'));
                t.text(i);
                o.append(t);
            } else if (i % 50 == 0) {
                let o = $(document.createElementNS("http://www.w3.org/2000/svg", 'rect'));
                o
                    .attr("x", 0)
                    .attr("y", (i))
                    .addClass("ruler-vertical-50")
                    .attr("title", i)
                // .attr("width", "15")
                // .attr("height", "1")
                ;
                svgVertical.append(o);
                let t = $(document.createElementNS("http://www.w3.org/2000/svg", 'title'));
                t.text(i);
                o.append(t);
            }
        }
        if (imageSize.height % 100 != 0) {
            let o = $(document.createElementNS("http://www.w3.org/2000/svg", 'rect'));
            o
                .attr("x", 0)
                .attr("y", imageSize.height - 1)
                .addClass("ruler-vertical-100")
                .attr("title", imageSize.height)
            // .attr("width", "15")
            // .attr("height", "1")
            ;
            svgVertical.append(o);
            let t = $(document.createElementNS("http://www.w3.org/2000/svg", 'title'));
            t.text(imageSize.height);
            o.append(t);
        }
    }
    if (imageSize.width >= 50) {
        for (let i = 0; i <= imageSize.width; i += 50) {
            if (i % 100 == 0) {
                let x = i;
                if (imageSize.width == i) {
                    x -= 1;
                }
                let o = $(document.createElementNS("http://www.w3.org/2000/svg", 'rect'));
                o
                    .attr("x", x)
                    .attr("y", 0)
                    .addClass("ruler-horizontal-100")
                    .attr("title", i)
                // .attr("width", "15")
                // .attr("height", "1")
                ;
                svgHorizontal.append(o);
                let t = $(document.createElementNS("http://www.w3.org/2000/svg", 'title'));
                t.text(i);
                o.append(t);
            } else if (i % 50 == 0) {
                let o = $(document.createElementNS("http://www.w3.org/2000/svg", 'rect'));
                o
                    .attr("x", i)
                    .attr("y", 0)
                    .addClass("ruler-horizontal-50")
                    .attr("title", i)
                // .attr("width", "15")
                // .attr("height", "1")
                ;
                svgHorizontal.append(o);
                let t = $(document.createElementNS("http://www.w3.org/2000/svg", 'title'));
                t.text(i);
                o.append(t);
            }
        }
        if (imageSize.width % 100 != 0) {
            let o = $(document.createElementNS("http://www.w3.org/2000/svg", 'rect'));
            o
                .attr("x", imageSize.width - 1)
                .attr("y", 0)
                .addClass("ruler-horizontal-100")
                .attr("title", imageSize.width)
            // .attr("width", "15")
            // .attr("height", "1")
            ;
            svgHorizontal.append(o);
            let t = $(document.createElementNS("http://www.w3.org/2000/svg", 'title'));
            t.text(imageSize.width);
            o.append(t);
        }
    }
}
page.fn.drawing.updateRuler = function (fileIndex, imageSize) {
    log.info(fileIndex, "page.fn.drawing.updateRuler");
    let svgVertical = $("svg.ruler-vertical[data-file-index='" + fileIndex + "']").empty();
    let svgHorizontal = $("svg.ruler-horizontal[data-file-index='" + fileIndex + "']").empty();
    svgVertical.attr("viewBox", "0 0 30 " + (imageSize.height + 1));
    svgHorizontal.attr("viewBox", "0 0 " + (imageSize.width + 1) + " 30");
    if (imageSize.height >= 50) {
        for (let i = 0; i <= imageSize.height; i += 50) {
            if (i % 100 == 0) {
                let y = i;
                if (imageSize.height == i) {
                    y -= 1;
                }
                let o = $(document.createElementNS("http://www.w3.org/2000/svg", 'rect'));
                o
                    .attr("x", 0)
                    .attr("y", y)
                    .addClass("ruler-vertical-100")
                    .attr("title", i)
                // .attr("width", "15")
                // .attr("height", "1")
                ;
                svgVertical.append(o);
                let t = $(document.createElementNS("http://www.w3.org/2000/svg", 'title'));
                t.text(i);
                o.append(t);
            } else if (i % 50 == 0) {
                let o = $(document.createElementNS("http://www.w3.org/2000/svg", 'rect'));
                o
                    .attr("x", 0)
                    .attr("y", (i))
                    .addClass("ruler-vertical-50")
                    .attr("title", i)
                // .attr("width", "15")
                // .attr("height", "1")
                ;
                svgVertical.append(o);
                let t = $(document.createElementNS("http://www.w3.org/2000/svg", 'title'));
                t.text(i);
                o.append(t);
            }
        }
        if (imageSize.height % 100 != 0) {
            let o = $(document.createElementNS("http://www.w3.org/2000/svg", 'rect'));
            o
                .attr("x", 0)
                .attr("y", imageSize.height - 1)
                .addClass("ruler-vertical-100")
                .attr("title", imageSize.height)
            // .attr("width", "15")
            // .attr("height", "1")
            ;
            svgVertical.append(o);
            let t = $(document.createElementNS("http://www.w3.org/2000/svg", 'title'));
            t.text(imageSize.height);
            o.append(t);
        }
    }
    if (imageSize.width >= 50) {
        for (let i = 0; i <= imageSize.width; i += 50) {
            if (i % 100 == 0) {
                let x = i;
                if (imageSize.width == i) {
                    x -= 1;
                }
                let o = $(document.createElementNS("http://www.w3.org/2000/svg", 'rect'));
                o
                    .attr("x", x)
                    .attr("y", 0)
                    .addClass("ruler-horizontal-100")
                    .attr("title", i)
                // .attr("width", "15")
                // .attr("height", "1")
                ;
                svgHorizontal.append(o);
                let t = $(document.createElementNS("http://www.w3.org/2000/svg", 'title'));
                t.text(i);
                o.append(t);
            } else if (i % 50 == 0) {
                let o = $(document.createElementNS("http://www.w3.org/2000/svg", 'rect'));
                o
                    .attr("x", i)
                    .attr("y", 0)
                    .addClass("ruler-horizontal-50")
                    .attr("title", i)
                // .attr("width", "15")
                // .attr("height", "1")
                ;
                svgHorizontal.append(o);
                let t = $(document.createElementNS("http://www.w3.org/2000/svg", 'title'));
                t.text(i);
                o.append(t);
            }
        }
        if (imageSize.width % 100 != 0) {
            let o = $(document.createElementNS("http://www.w3.org/2000/svg", 'rect'));
            o
                .attr("x", imageSize.width - 1)
                .attr("y", 0)
                .addClass("ruler-horizontal-100")
                .attr("title", imageSize.width)
            // .attr("width", "15")
            // .attr("height", "1")
            ;
            svgHorizontal.append(o);
            let t = $(document.createElementNS("http://www.w3.org/2000/svg", 'title'));
            t.text(imageSize.width);
            o.append(t);
        }
    }
}
page.fn.drawing.applyRulerPositionByIndex = function (fileIndex) {
    let wrapImageArea = $(".wrapImageArea[data-file-index='" + fileIndex + "']");
    let wrapWidth = wrapImageArea.width();
    let wrapHeight = wrapImageArea.height();
    let imageAngle = $(`.drawingImage[data-file-index=${fileIndex}]`).attr("data-file-rotation");
    // 회전된 이미지 규격에 맞게 눈금자의 크기를 조정해주기 위해
    if (imageAngle != 0) {
        [wrapWidth, wrapHeight] = page.fn.drawing.calcRotationImageWrapSize(wrapImageArea, imageAngle);
    }
    // let imageSize = {
    //     width: wrapWidth
    //     , height: wrapHeight
    // }
    // page.fn.drawing.updateRuler(fileIndex, imageSize);
    let position = wrapImageArea.position();
    // if(parseFloat(wrapImageArea.children("img").eq(0).attr("data-scale")) <= 1) {}
    $(".ruler-vertical[data-file-index='" + fileIndex + "']")
        .css("top", position.top + 30)
        .height(wrapHeight)
    ;
    $(".ruler-horizontal[data-file-index='" + fileIndex + "']")
        .css("left", position.left + 30)
        .width(wrapWidth)
    ;
}
page.fn.drawing.unRenderObjectPoint = function () {
    $("svg circle.draw-object.keypoint[objectId='" + page.data.event.selectedObjectId + "']").not(".bev-rotate-handle").removeClass("draw-point");
    $("svg circle.draw-point[objectId='" + page.data.event.selectedObjectId + "']").not(".circle, .bev-rotate-handle").remove();
    $("svg polyline.draw-point[objectId='" + page.data.event.selectedObjectId + "']").not(".circle").remove();
    $("svg circle.draw-point[objectId='" + page.data.event.selectedObjectId + "']").not(".bev-rotate-handle").removeClass("draw-point");
    page.data.event.renderObjectData = null;
    $(".objectSizeViewer").hide();
}
page.config.toggleVisibleAllObject = true;
page.fn.drawing.toggleVisibleAllObject = function () {
    let command = page.dom.btnVisibleAllObject.text() == page.constants.button.visibility.invisible ? true : false;
    page.config.toggleVisibleAllObject = command;
    page.dom.btnVisibleAllObject.text(command ?
        page.constants.button.visibility.visible : page.constants.button.visibility.invisible);
    for (let object of page.data.event.currentFile.objectList) {
        page.fn.drawing.toggleVisibleObject(page.data.event.currentFile.fileIndex, object.objectId, command);
    }
    if (page.config.toggleVisibleAllObject) {
        // $(".wrapObjectTag").show();
    }
}
page.fn.drawing.toggleVisibleObject = function (fileIndex, objectId, isVisible) {

    fileIndex = fileIndex != null ? fileIndex : page.data.event.currentFileIndex;
    let object = $(".draw-object[objectId='" + objectId + "']");

    let objectData = page.fn.data.getObject(fileIndex, objectId);
    let btn = $("#btnObjectVisible_" + objectId);
    log.debug(objectId, "page.fn.toggleVisibleObject");
    if (isVisible != true && isVisible != false) {
        isVisible = object.css("display") == "none" ? true : false;
    } else {
    }
    if (isVisible) {
        object.fadeIn();
        $(".wrapImageArea .wrapTag[objectId='" + objectId + "']").fadeIn();
        btn.text(page.constants.button.visibility.visible);
        objectData.isVisible = true;

    } else {
        object.fadeOut();
        $(".wrapImageArea .wrapTag[objectId='" + objectId + "']").fadeOut();
        btn.text(page.constants.button.visibility.invisible);
        objectData.isVisible = false;
    }
    if (objectData.objectType === page.constants.drawType.draw6PointCube)
        toggleVisibility6PointCube(objectData, isVisible)
}
page.fn.drawing.toggleVisiblePolylinePoints = function (isVisible) {
    if (!page.config.visiblePolylinePoints || isVisible == true) {
        page.config.visiblePolylinePoints = true;
        $("#btn_togglePolylinePoints").addClass("on");
        $("#style_polyline_points").html(".root circle.view-point {display: block;}");
    } else {
        page.config.visiblePolylinePoints = false;
        $("#btn_togglePolylinePoints").removeClass("on");
        $("#style_polyline_points").html(".root circle.view-point {display: none;}");
    }
}
page.fn.drawing.toggleVisiblePointPolylinePoints = function (isVisible) {
    if (!page.config.visiblePointPolylinePoints || isVisible == true) {
        page.config.visiblePointPolylinePoints = true;
        $("#btn_togglePointPolylinePoints").addClass("on");
        $("#style_point_polyline_points").html(".root circle.view-point-poly  {display: block;} .root circle.selectable-point {fill: #FFD700; stroke: #FFA500; stroke-width: 5; cursor: pointer;}");
    } else {
        page.config.visiblePointPolylinePoints = false;
        $("#btn_togglePointPolylinePoints").removeClass("on");
        $("#style_point_polyline_points").html(".root circle.view-point-poly  {display: none;}");
    }
}
page.fn.drawing.toggleVisibleAllEdgePoint = function () {
    let fileIndex = page.data.event.currentFileIndex;
    for (let pointId in page.data.loadTicket.fileList[fileIndex].edgePointsMap) {
        $("circle[pointId='" + pointId + "']").fadeOut().fadeIn().fadeOut().fadeIn();
    }
}
page.fn.drawing.toggleVisibleEdgePoint = function (fileIndex, pointId) {
    $("circle[pointId='" + pointId + "']").fadeOut().fadeIn().fadeOut().fadeIn();
}
page.fn.drawing.highlightGroupObject = function (groupId, fileIndex) {
    fileIndex = fileIndex == null ? page.data.event.currentFileIndex : Number.parseInt(fileIndex);
    $(".objectGroupHighlight").removeClass("objectGroupHighlight");
    let idx = page.fn.data.getObjectGroupIndex(groupId, fileIndex);
    $(".objectGroupRoot").removeClass("on");
    $("#rootObjectGroup_" + groupId).addClass('on');
    if (idx != 0) {
        let group = page.data.loadTicket.fileList[fileIndex].objectGroupInfo[idx - 1];
        for (var i = 0; i < group.objectList.length; i++) {
            let objectId = group.objectList[i];
            let isVisible = $("svg .draw-object[objectId='" + objectId + "']").is(":visible");

            if (isVisible) {
                $("svg .draw-object[objectId='" + objectId + "']").fadeOut().fadeIn().addClass("objectGroupHighlight");
            } else {
                log.warn(objectId, "This object is not visible");
            }
        }
    } else {
        log.error("can't find group");
    }
}
page.fn.drawing.highlight = function (type, objectId, tagId) {
    if (type == "obj") {
        $("g[objectId='" + objectId + "']").fadeOut().fadeIn();
        // page.fn.data.onSelectObject(objectId);
    } else if (type == "objTag") {
        $("g[objectId='" + objectId + "']").fadeOut().fadeIn();
        // page.fn.data.onSelectObject(objectId);
        $("#tag_" + objectId + "_" + tagId).fadeOut().fadeIn().fadeOut().fadeIn();
    } else if (type == "imgTag") {
        $("#tag__" + tagId).fadeOut().fadeIn().fadeOut().fadeIn();
    }
}
page.fn.drawing.highlightPoint = function (pointId) {
    // Remove highlight from all points first
    $("circle.draw-point.point-selected").removeClass("point-selected");

    // Add highlight to the selected point
    const point = $("#" + pointId);
    if (point.length > 0) {
        point.addClass("point-selected");
        // Also do a fade animation for better visibility
        const anim = 150;
        point.fadeOut(anim).fadeIn(anim);
    }
}
page.fn.drawing.renderObjectGroup = function (fileIndex) {
    page.dom.popObjectGroupList.empty();
    let fileData = page.data.loadTicket.fileList[fileIndex];
    if (fileData.objectGroupInfo != null) {
        fileData.objectGroupInfo.forEach(function (grp) {
            grp.objectList = [];
            for (var i = 0; i < fileData.objectList.length; i++) {
                let o = _common.copy(fileData.objectList[i]);
                if (o.groupId.includes(grp.groupId)) {
                    grp.objectList.push(o.objectId);
                }
            }
            page.fn.data.sortObjNumList(fileIndex, grp);
            grp.countObject = grp.objectList.length;
            page.dom.popObjectGroupList.append(_common.template.parseObject("tmpl-objectGroup", grp));
        })
        fileData.objectGroupInfo.forEach(function (grp) {

        })
    }
}
page.fn.drawing.renderGroupInObject = function (fileIndex, objectId) {
    page.dom.rootGroupListInObject.empty();
    let object = page.fn.data.getObject(fileIndex, objectId);
    if (object.groupId != null) {
        if (object.groupId.length > 0) {
            object.groupId.forEach(function (grpId) {
                let idx = page.fn.data.getObjectGroupIndex(grpId, fileIndex);
                if (idx != 0) {
                    let group = page.data.loadTicket.fileList[fileIndex].objectGroupInfo[idx - 1];
                    page.dom.rootGroupListInObject.append(
                        _common.template.parseObject("tmpl-object-grplist", {
                            groupId: group.groupId
                            , index: group.index
                            , groupName: group.groupName
                            , objectId: objectId
                            , fileIndex: fileIndex
                        })
                    );
                }
            })
        }
    }
}
page.fn.drawing.renderAllObject = function (fileIndex) {
    $(".drawingSVG[data-file-index='" + fileIndex + "']").empty()
    let fileData = page.data.loadTicket.fileList[fileIndex];
    log.info(fileData, "page.fn.drawing.renderAllObject");
    if (fileData.objectList.length > 0) {
        for (let o of fileData.objectList) {

            o.fileIndex = fileIndex;
            page.fn.drawing.renderObject(o);
            //DrawCube2d
            let objAll = JSON.parse(o.objectLocation);
            if (o.objectType == 'drawCube2D') {
                if (objAll.length > 2) {
                    objBoxSizeJson[o.objectId] = JSON.stringify(objAll[2]);
                    createCube2DSide(fileIndex, o, objAll[2]);
                }
            } else if (o.objectType == 'drawCube2DFront') {
                if (objAll.length > 2) {
                    objBoxSizeJsonFront[o.objectId] = JSON.stringify(objAll[2]);
                    createCube2DSideFront(fileIndex, o, objAll[2]);
                }
            }
            //DrawCube2d
            if (o.objectType == page.constants.drawType.rectangle && o.location.length > 2) {
                page.fn.drawing.changeRotateOfBBOX(o, 0);
            }
        }
    }
    page.fn.drawing.renderEdgePoint(fileIndex);
}
// Helper: convert 2 diagonal points to 4 corners in order [TL, TR, BR, BL]
page.fn.drawing.bevTwoToFourCorners = function (object) {
    if (!object || !Array.isArray(object.location) || object.location.length < 2) return object;
    const A = object.location[0], C = object.location[1];
    const x1 = Math.min(A[0], C[0]);
    const y1 = Math.min(A[1], C[1]);
    const x2 = Math.max(A[0], C[0]);
    const y2 = Math.max(A[1], C[1]);
    const idTL = (A && A[2]) || page.fn.data.createTempKey();
    const idBR = (C && C[2]) || page.fn.data.createTempKey();
    const idTR = page.fn.data.createTempKey();
    const idBL = page.fn.data.createTempKey();
    object.location = [
        [x1, y1, idTL], // TL
        [x2, y1, idTR], // TR
        [x2, y2, idBR], // BR
        [x1, y2, idBL]  // BL
    ];
    page.fn.data.convertObjectLocation(object);
    return object;
}
page.fn.drawing.renderObject = function (object, isMakedMagicObject) {
    try {
        let fileIndex = object.fileIndex;
        page.fn.data.unConvertObjectLocation(object);
        if (page.data.event.method == page.constants.method.magicPin && isMakedMagicObject) {
            object.objectBox = page.fn.drawing.renderRectangle(fileIndex, object);
        } else if (object.objectType == page.constants.drawType.rectangle) {
            object.objectBox = page.fn.drawing.renderRectangle(fileIndex, object);
        } else if (object.objectType == page.constants.drawType.polygon) {
            object.objectBox = page.fn.drawing.renderPolygon(fileIndex, object);
        } else if (object.objectType == page.constants.drawType.polyline) {
            object.objectBox = page.fn.drawing.renderPolyline(fileIndex, object);
        } else if (object.objectType == page.constants.drawType.pointPolyline) {
            object.objectBox = page.fn.drawing.renderPointPolyline(fileIndex, object);
        } else if (object.objectType == page.constants.drawType.rectangle4p) {
            object.objectBox = page.fn.drawing.renderRectangle4p(fileIndex, object);
        } else if (object.objectType == page.constants.drawType.keypoint) {
            if (object.keypointId == null) {
                let t = $(".multi-keypoint-btn")[0];
                let keypointId = $(t).attr("data-keypointId");
                page.data.objectKeypointId = keypointId;
                object.keypointId = keypointId;
            } else {
                page.data.objectKeypointId = object.keypointId;
            }
            object.objectBox = page.fn.drawing.renderKeypoint(fileIndex, object);
        } else if (object.objectType == page.constants.drawType.pointGroup) {
            object.objectBox = page.fn.drawing.renderPointGroup(fileIndex, object);
        } else if (object.objectType == page.constants.drawType.point) {
            object.objectBox = page.fn.drawing.renderPointGroup(fileIndex, object);
        } else if (object.objectType == page.constants.drawType.sideBox) {
            object.objectBox = page.fn.drawing.renderSideBox(fileIndex, object);
        } else if (object.objectType == page.constants.drawType.edgeLines) {
            object.objectBox = page.fn.drawing.renderEdgeLine(fileIndex, object);
        } else if (object.objectType == page.constants.drawType.drawCube2D) {
            object.objectBox = page.fn.drawing.drawCube2D(fileIndex, object);
        } else if (object.objectType == page.constants.drawType.drawCube2DFront) {
            object.objectBox = page.fn.drawing.drawCube2DFront(fileIndex, object);
        } else if (object.objectType === page.constants.drawType.draw6PointCube) {
            object.objectBox = page.fn.drawing.fn6PointCube(fileIndex, object);
        } else if (object.objectType === page.constants.drawType.drawBevBox4) {
            object.objectBox = page.fn.drawing.fnBevBox(fileIndex, object);
        }else if (object.objectType === page.constants.drawType.drawVISBox) {
            object.objectBox = page.fn.drawing.renderVISBox(fileIndex, object);
        }else {
            log.error("page.fn.drawing.renderObject(), undefined objectType.");
        }
        page.fn.drawing.setPositionOfObjectTagPopup(fileIndex, object);
        page.fn.drawing.setPositionOfObjectPointTagPopup(fileIndex, object);
    } catch (E) {
        log.error(E, "page.fn.drawing.renderObject, error");
        log.error(object, "page.fn.drawing.renderObject, object");
    }
}
// rootObjectList 전체 오브젝트 추가
page.fn.drawing.setAllRootObjectList = function (fileIndex) {
    page.dom.rootObjectList.empty();
    for (let i = 0; i < page.data.loadTicket.fileList[fileIndex].objectList.length; i++) {
        let o = page.data.loadTicket.fileList[fileIndex].objectList[i];
        page.fn.drawing.setRootObjectList(fileIndex, o);
    }
}
// rootObjectList 오브젝트 추가
page.fn.drawing.setRootObjectList = function (fileIndex, o) {
    page.dom.rootObjectList.append(_common.template.parseObject("tmpl-objectListItem", o));
    if (o.groupId == null) {
        $("#rootObject_" + o.objectId + " .grp").append(_common.template.parseObject("tmpl-objectListItemGrpZero", o))
    } else if (o.groupId.length == 0) {
        $("#rootObject_" + o.objectId + " .grp").append(_common.template.parseObject("tmpl-objectListItemGrpZero", o))
    } else if (o.groupId.length == 1) {
        $("#rootObject_" + o.objectId + " .grp").append(_common.template.parseObject("tmpl-objectListItemGrp", o))
    } else {
        $("#rootObject_" + o.objectId + " .grp").append(_common.template.parseObject("tmpl-objectListItemGrpList", o))
    }
    if (o.objectType == page.constants.drawType.drawEdgePoints) {
        page.constants.hasEdgePoints = true;
    }
    page.fn.drawing.setObjectGroupView(fileIndex, o);
}
// rootObjectList의 그룹 영역 (오브젝트의 그룹개수) 표시
page.fn.drawing.setObjectGroupView = function (fileIndex, object) {
    let groupList = page.data.loadTicket.fileList[fileIndex].objectGroupInfo;
    $("#tag_group_" + object.objectId).remove();
    if (groupList == null || groupList.length == 0) {
        object.grpObjIdx = [];
        $("#rootObject_" + object.objectId + " .grp div").text("");
    } else {
        $("#rootObject_" + object.objectId + " .grp div").show();
        $("#rootObject_" + object.objectId + " .grp").attr("title", "Group " + object.grpObjIdx);
        if (object.groupId.length == 0) {
            $("#grpObjIdx_" + object.objectId).text("");
        } else if (object.groupId.length == 1) {
            $("#grpObjIdx_" + object.objectId).html("<i class='material-icons' style='font-size: 11px; padding-top: 1px;'>qr_code_scanner</i>" + object.grpObjIdx);
            $("#grpObjIdx_" + object.objectId).css("text-decoration", "none");
        } else {
            $("#grpObjIdx_" + object.objectId).text(object.grpObjIdx.length);
            $("#grpObjIdx_" + object.objectId).css("text-decoration", "underline");
        }
        if (object.groupId.length != 0) {
            $("#wrapObjectTag_" + object.objectId).append(_common.template.parseObject("tmpl-tagObjectGroup", object));
        }
    }
    //작업권한에 따른 버튼제어 추가 2022/05/31 홍원기
    // if (!page.data.loadTicket.isCanSave && page.data.loadTicket.workType != page.constants.workType.reviewer) {
    //     $("[button-validation='true']").hide();
    // } else {
    //     $("[button-validation='true']").show();
    // }
}
page.fn.drawing.setPositionOfObjectTagPopup = function (fileIndex, object) {
    try {
        let canMove = true;
        if ((object.objectType == page.constants.drawType.rectangle && object.location.length != 2)
            || (object.objectType == page.constants.drawType.rectangle4p && object.location.length != 4)) {
            canMove = false;
        }
        if (canMove) {
            let objectPos = page.fn.data.getObjectPosition(fileIndex, object);
            let wrap = $("#wrapObjectTag_" + object.objectId);
            wrap.css("top", objectPos.y).css("left", objectPos.x)
            if (object.objectType == page.constants.drawType.edgeLines) {
                if (object.location.length == 2) {
                    let image = page.fn.data.getImageOriginalSize(fileIndex);
                    let x2 = 0, y2 = 0;
                    for (let i = 0; i < 2; i++) {
                        let pos = object.location[i];
                        x2 = Math.max(x2, pos[0]);
                        y2 = Math.max(y2, pos[1]);
                    }
                    x2 = x2 * image.scale, y2 = y2 * image.scale;
                    let width = x2 - objectPos.x;
                    let height = y2 - objectPos.y;
                    wrap.css("top", objectPos.y + height / 2).css("left", objectPos.x + width / 2);
                }
            }
        }
    } catch (E) {
        log.error(E, "page.fn.drawing.setPositionOfObjectTag, error");
        log.error(object, "page.fn.drawing.setPositionOfObjectTag, object");
    }
}
page.fn.drawing.setPositionOfObjectPointTagPopup = function (fileIndex, object) {
    try {
        let canMove = true;
        if (object.objectType != page.constants.drawType.polyline && object.objectType != page.constants.drawType.pointPolyline) {
            canMove = false;
        }
        if (canMove) {
            for (let i = 0; i < object.location.length; i++) {
                let data = object.location[i][3];
                if (_common.isNotEmpty(data) && _common.isNotEmpty(data.tags)) {
                    log.info(data.tags, "point tags");
                    let image = page.fn.data.getImageOriginalSize(fileIndex);
                    let cx = object.location[i][0] * image.scale;
                    let cy = object.location[i][1] * image.scale;
                    let wrap = $(".wrapObjectPointTag[objectId='" + object.objectId + "']");
                    wrap.css("top", cy).css("left", cx);
                } else {
                    log.info("no have point tag");
                }
            }
        }
    } catch (E) {
        log.error(E, "page.fn.drawing.setPositionOfObjectTag, error");
        log.error(object, "page.fn.drawing.setPositionOfObjectTag, object");
    }
}

page.fn.drawing.renderRectangle = function (fileIndex, object) {
    // ;
    // log.info(object, "page.fn.drawing.renderRectangle, fileIndex=" + fileIndex);
    let objectBox = {x: 0, y: 0, width: 0, height: 0};
    try {
        console.log(object.location)
        if (object.location.length < 2) {
            return false;
        }
        if (object.location.length >= 2) {
            let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
            let g = svg.children("g[objectId='" + object.objectId + "']");
            if (g.length == 0) {
                g = $(document.createElementNS("http://www.w3.org/2000/svg", 'g'));
                g.attr("objectId", object.objectId);
                g.attr("data-objectType", object.objectType);
                svg.append(g);
            }

            let x = Math.min(object.location[0][0], object.location[1][0]);
            let y = Math.min(object.location[0][1], object.location[1][1]);
            let width = Math.max(object.location[0][0], object.location[1][0]) - x;
            let height = Math.max(object.location[0][1], object.location[1][1]) - y;
            objectBox.x = x;
            objectBox.y = y;
            objectBox.width = page.fn.drawing.limitMousePosition(width);
            objectBox.height = page.fn.drawing.limitMousePosition(height);

            let r = g.children("rect.object-body");
            if (r.length == 0) {
                r = $(document.createElementNS("http://www.w3.org/2000/svg", 'rect'));
                g.append(r);
            }
            r.attr("x", x)
                .attr("y", y)
                .attr("width", width)
                .attr("height", height)
                .attr("data-file-index", fileIndex)
                .attr("class", "draw-object CLASS_" + object.classId)
                .addClass("object-body")
                .addClass("objectType_" + object.objectType)
                .attr("objectId", object.objectId)
            ;
        }
        page.fn.drawing.displaySize(object);
    } catch (E) {
        log.error(E, "page.fn.drawing.renderRectangle");
        page.fn.data.deleteObject(fileIndex, object.objectId);
    }
    return objectBox;
}
page.fn.drawing.drawCube2D = function (fileIndex, object) {
    // log.info(object, "page.fn.drawing.renderRectangle, fileIndex=" + fileIndex);
    let objectBox = {x: 0, y: 0, width: 0, height: 0};
    try {
        //console.log(object.location)
        if (object.location.length < 2) {
            return false;
        }
        if (object.location.length >= 2) {
            let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
            let g = svg.children("g[objectId='" + object.objectId + "']");
            if (g.length == 0) {
                g = $(document.createElementNS("http://www.w3.org/2000/svg", 'g'));
                g.attr("objectId", object.objectId);
                g.attr("data-objectType", object.objectType);
                svg.append(g);
            }

            let x = Math.min(object.location[0][0], object.location[1][0]);
            let y = Math.min(object.location[0][1], object.location[1][1]);
            let width = Math.max(object.location[0][0], object.location[1][0]) - x;
            let height = Math.max(object.location[0][1], object.location[1][1]) - y;
            objectBox.x = x;
            objectBox.y = y;
            objectBox.width = page.fn.drawing.limitMousePosition(width);
            objectBox.height = page.fn.drawing.limitMousePosition(height);

            let r = g.children("rect.object-body");
            if (r.length == 0) {
                r = $(document.createElementNS("http://www.w3.org/2000/svg", 'rect'));
                g.append(r);
            }
            r.attr("x", x)
                .attr("y", y)
                .attr("width", width)
                .attr("height", height)
                .attr("data-file-index", fileIndex)
                .attr("class", "draw-object CLASS_" + object.classId)
                .addClass("object-body")
                .addClass("objectType_" + object.objectType)
                .attr("objectId", object.objectId)
            ;
            r.css({
                "fill": "red",
            });

        }
        /*if(page.data.drawing.objectBoxSize) {
            updateDrawCube2D(fileIndex, object, page.data.drawing.objectBoxSize);
        }*/
        if (objBoxSizeJson) {
            if (objBoxSizeJson[object.objectId]) {
                let obj_ = JSON.parse(objBoxSizeJson[object.objectId]);
                updateDrawCube2D(fileIndex, object, obj_);
            }
        }
        page.fn.drawing.displaySize(object);
    } catch (E) {
        log.error(E, "page.fn.drawing.renderRectangle");
        page.fn.data.deleteObject(fileIndex, object.objectId);
    }
    return objectBox;
}


updateDrawCube2D = function (fileIndex, object, objectBoxSize) {
    //right
    if (objectBoxSize.direction == 'right') {
        objectBoxSize.x1 = Math.max(object.location[0][0], object.location[1][0]);
        objectBoxSize.y1 = Math.min(object.location[0][1], object.location[1][1]);
        objectBoxSize.x4 = Math.max(object.location[0][0], object.location[1][0]);
        objectBoxSize.y4 = Math.max(object.location[0][1], object.location[1][1]);
    }
    //left
    if (objectBoxSize.direction == 'left') {
        objectBoxSize.x2 = Math.min(object.location[0][0], object.location[1][0]);
        objectBoxSize.y2 = Math.min(object.location[0][1], object.location[1][1]);
        objectBoxSize.x3 = Math.min(object.location[0][0], object.location[1][0]);
        objectBoxSize.y3 = Math.max(object.location[0][1], object.location[1][1]);
    }
    let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
    let g_polygon = svg.children("g[objectId='" + object.objectId + "'][data-objectType='drawCube2D']");
    let polygon = g_polygon.children('polygon');
    if (polygon.length > 0) {
        let points = objectBoxSize.x1 + ',' + objectBoxSize.y1 + ' ' + objectBoxSize.x2 + ',' + objectBoxSize.y2 + ' ' + objectBoxSize.x3 + ',' + objectBoxSize.y3 + ' ' + objectBoxSize.x4 + ',' + objectBoxSize.y4;
        polygon.attr('points', points);
    }
    //updateDrawCube2DDismiss
    let image = g_polygon.children('image');
    if (image) {
        let meanx = (object.location[0][0] + object.location[1][0]) / 2;
        let meany = (object.location[0][1] + object.location[1][1]) / 2;
        //image.attr("x", meanx - 17.5);
        //image.attr("y", meany - 17.5);
    }
    let objectList = page.data.loadTicket.fileList[fileIndex].objectList;
    objectList.forEach(function (o) {
        if (o.objectId == object.objectId) {
            if (page.data.drawing.object) {
                if (o.objectId == page.data.drawing.object.objectId) {
                    let objectBoxSizeJson = JSON.stringify(objectBoxSize);
                    objBoxSizeJson[o.objectId] = objectBoxSizeJson;
                    //update
                    if (objectBoxSize.deleted == 'drawCube2DSide') {
                        let g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2D']");
                        let polygon = g.children('polygon');
                        polygon.attr('visibility', 'hidden');
                        g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2DSide']");
                        g.attr('visibility', 'hidden');
                    }
                    if (objectBoxSize.deleted == 'main') {
                        let g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2D']");
                        let rect = g.children('rect');
                        rect.attr('visibility', 'hidden');
                        g = svg.children("g[objectId='" + o.objectId + "'][id='group_points_" + o.objectId + "']");
                        //g.attr('visibility', 'hidden');
                        let circle = g.children('circle');
                        circle.attr('visibility', 'hidden');
                        //g.attr('visibility', 'hidden');
                        if (objectBoxSize.direction == 'right') {
                            circle = g.children('circle[index="2"]');
                            circle.attr('visibility', 'show');
                            circle = g.children('circle[index="7"]');
                            circle.attr('visibility', 'show');
                        }
                        if (objectBoxSize.direction == 'left') {
                            circle = g.children('circle[index="0"]');
                            circle.attr('visibility', 'show');
                            circle = g.children('circle[index="5"]');
                            circle.attr('visibility', 'show');
                        }
                    }
                }
            }
        }
    });

}

page.fn.drawing.drawCube2DFront = function (fileIndex, object) {
    // log.info(object, "page.fn.drawing.renderRectangle, fileIndex=" + fileIndex);
    let objectBox = {x: 0, y: 0, width: 0, height: 0};
    try {
        //console.log(object.location)
        if (object.location.length < 2) {
            return false;
        }
        if (object.location.length >= 2) {
            let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
            let g = svg.children("g[objectId='" + object.objectId + "']");
            if (g.length == 0) {
                g = $(document.createElementNS("http://www.w3.org/2000/svg", 'g'));
                g.attr("objectId", object.objectId);
                g.attr("data-objectType", object.objectType);
                svg.append(g);
            }

            let x = Math.min(object.location[0][0], object.location[1][0]);
            let y = Math.min(object.location[0][1], object.location[1][1]);
            let width = Math.max(object.location[0][0], object.location[1][0]) - x;
            let height = Math.max(object.location[0][1], object.location[1][1]) - y;
            objectBox.x = x;
            objectBox.y = y;
            objectBox.width = page.fn.drawing.limitMousePosition(width);
            objectBox.height = page.fn.drawing.limitMousePosition(height);

            let r = g.children("rect.object-body");
            if (r.length == 0) {
                r = $(document.createElementNS("http://www.w3.org/2000/svg", 'rect'));
                g.append(r);
            }
            r.attr("x", x)
                .attr("y", y)
                .attr("width", width)
                .attr("height", height)
                .attr("data-file-index", fileIndex)
                .attr("class", "draw-object CLASS_" + object.classId)
                .addClass("object-body")
                .addClass("objectType_" + object.objectType)
                .attr("objectId", object.objectId)
            ;
            r.css({
                "fill": "blue",
            });

        }
        /*if(page.data.drawing.objectBoxSize) {
            updateDrawCube2D(fileIndex, object, page.data.drawing.objectBoxSize);
        }*/
        if (objBoxSizeJsonFront) {
            if (objBoxSizeJsonFront[object.objectId]) {
                let obj_ = JSON.parse(objBoxSizeJsonFront[object.objectId]);
                updateDrawCube2DFront(fileIndex, object, obj_);
            }
        }
        page.fn.drawing.displaySize(object);
    } catch (E) {
        log.error(E, "page.fn.drawing.renderRectangle");
        page.fn.data.deleteObject(fileIndex, object.objectId);
    }
    return objectBox;

}

updateDrawCube2DFront = function (fileIndex, object, objectBoxSize) {
    //right
    if (objectBoxSize.direction == 'right') {
        objectBoxSize.x1 = Math.max(object.location[0][0], object.location[1][0]);
        objectBoxSize.y1 = Math.min(object.location[0][1], object.location[1][1]);
        objectBoxSize.x4 = Math.max(object.location[0][0], object.location[1][0]);
        objectBoxSize.y4 = Math.max(object.location[0][1], object.location[1][1]);
    }
    //left
    if (objectBoxSize.direction == 'left') {
        objectBoxSize.x2 = Math.min(object.location[0][0], object.location[1][0]);
        objectBoxSize.y2 = Math.min(object.location[0][1], object.location[1][1]);
        objectBoxSize.x3 = Math.min(object.location[0][0], object.location[1][0]);
        objectBoxSize.y3 = Math.max(object.location[0][1], object.location[1][1]);
    }
    let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
    let g_polygon = svg.children("g[objectId='" + object.objectId + "'][data-objectType='drawCube2DFront']");
    let polygon = g_polygon.children('polygon');
    if (polygon.length > 0) {
        let points = objectBoxSize.x1 + ',' + objectBoxSize.y1 + ' ' + objectBoxSize.x2 + ',' + objectBoxSize.y2 + ' ' + objectBoxSize.x3 + ',' + objectBoxSize.y3 + ' ' + objectBoxSize.x4 + ',' + objectBoxSize.y4;
        polygon.attr('points', points);
    }
    //updateDrawCube2DDismiss
    let image = g_polygon.children('image');
    if (image) {
        let meanx = (object.location[0][0] + object.location[1][0]) / 2;
        let meany = (object.location[0][1] + object.location[1][1]) / 2;
        //image.attr("x", meanx - 17.5);
        //image.attr("y", meany - 17.5);
    }
    let objectList = page.data.loadTicket.fileList[fileIndex].objectList;
    objectList.forEach(function (o) {
        if (o.objectId == object.objectId) {
            if (page.data.drawing.object) {
                if (o.objectId == page.data.drawing.object.objectId) {
                    let objectBoxSizeJson = JSON.stringify(objectBoxSize);
                    objBoxSizeJsonFront[o.objectId] = objectBoxSizeJson;
                    //update
                    if (objectBoxSize.deleted == 'drawCube2DSideFront') {
                        let g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2DFront']");
                        let polygon = g.children('polygon');
                        polygon.attr('visibility', 'hidden');
                        g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2DSideFront']");
                        g.attr('visibility', 'hidden');
                    }
                    if (objectBoxSize.deleted == 'mainFront') {
                        let g = svg.children("g[objectId='" + o.objectId + "'][data-objectType='drawCube2DFront']");
                        let rect = g.children('rect');
                        rect.attr('visibility', 'hidden');
                        g = svg.children("g[objectId='" + o.objectId + "'][id='group_points_" + o.objectId + "']");
                        //g.attr('visibility', 'hidden');
                        let circle = g.children('circle');
                        circle.attr('visibility', 'hidden');
                        //g.attr('visibility', 'hidden');
                        if (objectBoxSize.direction == 'right') {
                            circle = g.children('circle[index="2"]');
                            circle.attr('visibility', 'show');
                            circle = g.children('circle[index="7"]');
                            circle.attr('visibility', 'show');
                        }
                        if (objectBoxSize.direction == 'left') {
                            circle = g.children('circle[index="0"]');
                            circle.attr('visibility', 'show');
                            circle = g.children('circle[index="5"]');
                            circle.attr('visibility', 'show');
                        }
                    }
                }
            }
        }
    });
}
page.fn.drawing.renderVISBox = function (fileIndex, object) {
    let objectBox = {x: 0, y: 0, width: 0, height: 0};
    try {
        if (object.location.length < 2) {
            return false;
        }
        let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
        let g = svg.children("g[objectId='" + object.objectId + "']");
        if (g.length == 0) {
            g = $(document.createElementNS("http://www.w3.org/2000/svg", 'g'));
            g.attr("objectId", object.objectId);
            g.attr("data-objectType", object.objectType);
            svg.append(g);
        } else {
            g.empty();
        }
        // Lấy P1, P2, P3 từ location
        let p1 = object.location[0];
        let p2 = object.location[1];
        let p3 = object.location.length >= 3 ? object.location[2] : p2; // P3 = P2 nếu chỉ có 2 điểm
        // Tính VIS Box (từ P1, P2)
        let visX = Math.min(p1[0], p2[0]);
        let visY = Math.min(p1[1], p2[1]);
        let visWidth = Math.max(p1[0], p2[0]) - visX;
        let visHeight = Math.max(p1[1], p2[1]) - visY;
        // Constrain P3 to stay within VIS Box Y range (if P3 exists and != P2)
        let minY = Math.min(p1[1], p2[1]);
        let maxY = Math.max(p1[1], p2[1]);
        let constrainedP3 = [p3[0], Math.max(minY, Math.min(maxY, p3[1]))];
        // Tính Full Box - chỉ mở rộng theo X, P3.y bị ràng buộc trong VIS Box
        let allX = [p1[0], p2[0], constrainedP3[0]];
        let fullX = Math.min(...allX);
        let fullY = visY;  // Y giữ nguyên như VIS Box
        let fullWidth = Math.max(...allX) - fullX;
        let fullHeight = visHeight;  // Height giữ nguyên như VIS Box
        objectBox.x = fullX;
        objectBox.y = fullY;
        objectBox.width = page.fn.drawing.limitMousePosition(fullWidth);
        objectBox.height = page.fn.drawing.limitMousePosition(fullHeight);
        // Vẽ Full Box (nền màu xám nhạt)
        let fullRect = $(document.createElementNS("http://www.w3.org/2000/svg", 'rect'));
        fullRect.attr("x", fullX)
            .attr("y", fullY)
            .attr("width", fullWidth)
            .attr("height", fullHeight)
            .attr("class", "draw-object vis-full-box")
            .attr("objectId", object.objectId)
            .attr("data-objectType", object.objectType)
            .attr("data-file-index", fileIndex)
            .attr("style", "fill: #808080; fill-opacity: 0.3; stroke: #808080; stroke-width: 2; stroke-dasharray: 5,5;");
        g.append(fullRect);
        // Vẽ VIS Box (phần nhìn thấy, màu theo class)
        let visRect = $(document.createElementNS("http://www.w3.org/2000/svg", 'rect'));
        visRect.attr("x", visX)
            .attr("y", visY)
            .attr("width", visWidth)
            .attr("height", visHeight)
            .attr("class", "draw-object object-body vis-visible-box CLASS_" + object.classId)
            .attr("objectId", object.objectId)
            .attr("data-objectType", object.objectType)
            .attr("data-file-index", fileIndex);
        g.append(visRect);
        // Vẽ các điểm P1, P2, P3
        // 7107
        const isEditing = (object.location.length >= 3);  // hoặc: page.data.event.method === page.constants.method.editObject

        for (let i = 0; i < Math.min(3, object.location.length); i++) {
            const c = $(document.createElementNS("http://www.w3.org/2000/svg", "circle"));
            c.attr("cx", object.location[i][0])
                .attr("cy", object.location[i][1])
                .attr("pointNum", i + 1)
                .attr("objectId", object.objectId);

            if (object.location.length >= 3) {
                // ĐÃ vẽ xong: 3 chấm kéo được
                c.attr("index", String(i))
                    .attr("id", "C_" + object.objectId + "_" + i)
                    .attr("class", "draw-point vis-box-point CLS_" + object.classId)
                    .attr("style", "fill:#ff4d4f;stroke:#ff4d4f;");
            } else {
                // ĐANG vẽ (≤2 điểm): chấm thường, không “draw-point”
                c.attr("point-index", i)
                    .attr("class", "vis-box-point CLS_" + object.classId);
            }

            g.append(c[0]);
        }
        page.fn.drawing.displaySize(object);
    } catch (E) {
        log.error(E, "page.fn.drawing.renderVISBox");
        page.fn.data.deleteObject(fileIndex, object.objectId);
    }
    return objectBox;
}
// VIS-Box preview render function - for mousemove preview
page.fn.drawing.renderVISBoxPreview = function (fileIndex, object) {
    try {
        if (object.location.length < 3) {
            return false;
        }
        // Remove any existing preview
        let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
        svg.children("g[data-preview='vis-box-preview']").remove();
        // Create preview group
        let g = $(document.createElementNS("http://www.w3.org/2000/svg", 'g'));
        g.attr("data-preview", "vis-box-preview");
        g.attr("data-objectType", "preview");
        svg.append(g);
        // Get P1, P2, P3
        let p1 = object.location[0];
        let p2 = object.location[1];
        let p3 = object.location[2]; // This is current mouse position
        // Calculate VIS Box (P1, P2) - stays the same
        let visX = Math.min(p1[0], p2[0]);
        let visY = Math.min(p1[1], p2[1]);
        let visWidth = Math.max(p1[0], p2[0]) - visX;
        let visHeight = Math.max(p1[1], p2[1]) - visY;
        // Constrain P3 to stay within VIS Box Y range
        let minY = Math.min(p1[1], p2[1]);
        let maxY = Math.max(p1[1], p2[1]);
        let constrainedP3 = [p3[0], Math.max(minY, Math.min(maxY, p3[1]))];
        // Calculate Preview Full Box - expand horizontally, P3.y constrained to VIS Box
        let allX = [p1[0], p2[0], constrainedP3[0]];
        let fullX = Math.min(...allX);
        let fullY = visY;  // Y same as VIS Box
        let fullWidth = Math.max(...allX) - fullX;
        let fullHeight = visHeight;  // Height same as VIS Box
        // Draw Preview Full Box (light gray, dashed)
        let fullRect = $(document.createElementNS("http://www.w3.org/2000/svg", 'rect'));
        fullRect.attr("x", fullX)
            .attr("y", fullY)
            .attr("width", fullWidth)
            .attr("height", fullHeight)
            .attr("class", "vis-preview-full-box")
            .attr("style", "fill: #C0C0C0; fill-opacity: 0.2; stroke: #999999; stroke-width: 1; stroke-dasharray: 3,3;");
        g.append(fullRect);
        // Draw VIS Box (darker gray, solid)
        let visRect = $(document.createElementNS("http://www.w3.org/2000/svg", 'rect'));
        visRect.attr("x", visX)
            .attr("y", visY)
            .attr("width", visWidth)
            .attr("height", visHeight)
            .attr("class", "vis-preview-visible-box")
            .attr("style", "fill: #808080; fill-opacity: 0.4; stroke: #666666; stroke-width: 2;");
        g.append(visRect);
        // Draw connecting lines to show relationship
        if (fullX !== visX || fullWidth !== visWidth) {
            // Only draw lines if boxes are different horizontally
            let line1 = $(document.createElementNS("http://www.w3.org/2000/svg", 'line'));
            line1.attr("x1", p1[0]).attr("y1", p1[1])
                .attr("x2", constrainedP3[0]).attr("y2", constrainedP3[1])
                .attr("class", "vis-preview-line")
                .attr("style", "stroke: #888888; stroke-width: 1; stroke-dasharray: 2,2;");
            g.append(line1);
        }
    } catch (E) {
        log.error(E, "page.fn.drawing.renderVISBoxPreview");
    }
    return true;
}

page.fn.drawing.renderRectangle4p = function (fileIndex, object) {
    let objectBox = {
        x: 0, y: 0, width: 0, height: 0
    };
    try {
        let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
        let g = svg.children("g[objectId='" + object.objectId + "']");
        if (g.length == 0) {
            g = $(document.createElementNS("http://www.w3.org/2000/svg", 'g'));
            g.attr("objectId", object.objectId);
            g.attr("data-objectType", object.objectType);
            svg.append(g);
        } else {
            g.empty();
        }
        let loc = object.location;

        if (loc.length < 2) {
            log.warn(object, "page.fn.renderRectangle, can't draw");
            return false;
        }
        // log.debug(loc, "page.fn.renderRectangle");
        let minX = loc[0][0];
        let minY = loc[0][1];
        let maxX = loc[0][0];
        let maxY = loc[0][1];
        for (let i = 0; i < loc.length; i++) {
            minX = Math.min(minX, loc[i][0]);
            minY = Math.min(minY, loc[i][1]);
            maxX = Math.max(maxX, loc[i][0]);
            maxY = Math.max(maxY, loc[i][1]);
            try {
                let c = g.children("circle[point-index='" + i + "']");
                if (c.length == 0) {
                    c = $(document.createElementNS("http://www.w3.org/2000/svg", 'circle'));
                    c.attr("point-index", i)
                        .attr("pointNum", i + 1)
                    ;
                    g.append(c);
                }
                c.attr("cx", loc[i][0])
                    .attr("cy", loc[i][1])
                    .attr("class", "view-point CLS_" + object.classId)
                    .attr("objectId", object.objectId)
                ;
            } catch (E) {
                log.error(E, "page.fn.renderRectangle4p, drawing for points");
            }
        }
        let x = minX;
        let y = minY;
        let width = maxX - minX;
        let height = maxY - minY;
        objectBox.x = x;
        objectBox.y = y;
        objectBox.width = page.fn.drawing.limitMousePosition(width);
        objectBox.height = page.fn.drawing.limitMousePosition(height);

        let rect = g.children("rect.object-body");
        if (rect.length == 0) {
            rect = $(document.createElementNS("http://www.w3.org/2000/svg", 'rect'));
            rect.attr("x", x)
                .attr("y", y)
                .attr("width", width)
                .attr("height", height)
                .attr("class", "draw-object object-body CLASS_" + object.classId)
                .attr("objectId", object.objectId)
                .attr("data-objectType", object.objectType)
                .attr("data-file-index", fileIndex)
            ;
            // o.setAttribute("title", "#" + object.objectOrder);
            g.append(rect);
        } else {
            rect.attr("x", x)
                .attr("y", y)
                .attr("width", width)
                .attr("height", height)
                .attr("class", "draw-object object-body CLASS_" + object.classId)
            ;
        }
        if (object.location.length > 4) {
            page.fn.drawing.changeRotateOfBBOX(object, 0);
        }
        page.fn.drawing.displaySize(object);
    } catch (E) {
        log.error(E, "page.fn.renderRectangle");
        page.fn.data.deleteObject(fileIndex, object.objectId);
    }
    return objectBox;
}
page.fn.drawing.renderPolygon = function (fileIndex, object) {
    let objectBox = {
        x: 0, y: 0, width: 0, height: 0
    };
    let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
    let g = svg.children("g[objectId='" + object.objectId + "']");
    if (g.length == 0) {
        g = $(document.createElementNS("http://www.w3.org/2000/svg", 'g'));
        g.attr("objectId", object.objectId);
        g.attr("data-objectType", object.objectType);
        svg.append(g);
    }
    try {
        let location = object.location;
        let pointsList = [];
        let points = "";
        let minX = 9999999, minY = 9999999, maxX = -1, maxY = -1;
        location.forEach(function (p) {
            points += " " + p[0] + "," + p[1];
            minX = Math.min(minX, p[0]);
            minY = Math.min(minY, p[1]);
            maxX = Math.max(maxX, p[0]);
            maxY = Math.max(maxY, p[1]);
        });
        objectBox.x = minX;
        objectBox.y = minY;
        objectBox.width = page.fn.drawing.limitMousePosition(maxX - minX);
        objectBox.height = page.fn.drawing.limitMousePosition(maxY - minY);
        let o = g.children("polygon.object-body");
        if (o.length == 0) {
            o = $(document.createElementNS("http://www.w3.org/2000/svg", 'polygon'));
            o.attr("class", "draw-object object-body CLASS_" + object.classId)
                .attr("fill-rule", "evenodd")
                .attr("points", points)
                .attr("objectId", object.objectId)
                .attr("data-objectType", object.objectType)
                .attr("data-file-index", fileIndex)
            ;
            g.append(o);
        } else {
            o
                .attr("points", points)
                .attr("class", "draw-object object-body CLASS_" + object.classId)
            ;
        }
        page.fn.drawing.displaySize(object);
    } catch (E) {
        log.error(E, "page.fn.renderPolygon");
        page.fn.data.deleteObject(fileIndex, object.objectId);
    }
    return objectBox;
}
page.fn.drawing.renderPolyline = function (fileIndex, object) {
    let objectBox = {
        x: 0, y: 0, width: 0, height: 0
    };
    try {
        let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
        let g = svg.children("g[objectId='" + object.objectId + "']");
        if (g.length === 0) {
            g = $(document.createElementNS("http://www.w3.org/2000/svg", 'g'));
            g.attr("objectId", object.objectId);
            g.attr("data-objectType", object.objectType);
            svg.append(g);
        }
        g.children("circle.view-point").remove();
        let location = object.location;
        let pointsString = "";
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        location.forEach(function (p, index) {
            if (!p || typeof p[0] === 'undefined' || typeof p[1] === 'undefined') return;
            pointsString += p[0] + "," + p[1] + " ";
            minX = Math.min(minX, p[0]);
            minY = Math.min(minY, p[1]);
            maxX = Math.max(maxX, p[0]);
            maxY = Math.max(maxY, p[1]);

            let c = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            c.setAttribute("cx", p[0]);
            c.setAttribute("cy", p[1]);
            c.setAttribute("class", "view-point CLS_" + object.classId);

            c.setAttribute("index", index);
            c.setAttribute("pointNum", index + 1);
            c.setAttribute("objectId", object.objectId);

            g.append(c);
            if (index === 0) {
                $(c).addClass("point-start");
            } else if (index === object.location.length - 1) {
                $(c).addClass("point-end");
            }
        });
        objectBox.x = minX;
        objectBox.y = minY;
        objectBox.width = page.fn.drawing.limitMousePosition(maxX - minX);
        objectBox.height = page.fn.drawing.limitMousePosition(maxY - minY);
        let polyline = g.children("polyline.object-body");
        if (polyline.length === 0) {
            polyline = $(document.createElementNS("http://www.w3.org/2000/svg", 'polyline'));
            polyline.attr("class", "draw-object object-body CLASS_" + object.classId)
                .attr("objectId", object.objectId)
                .attr("data-objectType", object.objectType)
                .attr("data-file-index", fileIndex);
            g.append(polyline);
        }
        polyline.attr("points", pointsString.trim());
    } catch (E) {
        log.error(E, "page.fn.renderPolyline");
        page.fn.data.deleteObject(fileIndex, object.objectId);
    }
    return objectBox;
}
page.fn.drawing.renderPointPolyline = function (fileIndex, object) {
    let objectBox = { x: 0, y: 0, width: 0, height: 0 };
    try {
        let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
        let g = svg.children("g[objectId='" + object.objectId + "']");
        if (g.length === 0) {
            g = $(document.createElementNS("http://www.w3.org/2000/svg", 'g'));
            g.attr("objectId", object.objectId);
            g.attr("data-objectType", object.objectType);
            svg.append(g);
        }
        g.children("circle.view-point-poly").remove();
        g.children("polyline.object-body-pointpoly").remove();
        g.children("polyline.pointpoly-segment").remove();

        let location = object.location;
        let pointsString = "";
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        let hasPointTag = false;

        // Check if any point has tags
        for (let i = 0; i < location.length; i++) {
            if (typeof(location[i][3]) !== 'undefined' && location[i][3] && location[i][3].tags) {
                hasPointTag = true;
                break;
            }
        }

        location.forEach(function (p, index) {
            if (!p || typeof p[0] === 'undefined' || typeof p[1] === 'undefined') return;
            pointsString += p[0] + "," + p[1] + " ";
            minX = Math.min(minX, p[0]);
            minY = Math.min(minY, p[1]);
            maxX = Math.max(maxX, p[0]);
            maxY = Math.max(maxY, p[1]);

            // Create visible circle with selectable-point style (like yellow dots in edit mode)
            let c = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            c.setAttribute("cx", p[0]);
            c.setAttribute("cy", p[1]);
            c.setAttribute("class", "view-point-poly selectable-point CLS_" + object.classId);
            c.setAttribute("r", "6"); // Set radius explicitly like draw-point
            c.setAttribute("index", index);
            c.setAttribute("pointNum", index + 1);
            c.setAttribute("objectId", object.objectId);
            c.setAttribute("id", p[2]); // Set pointId as circle's id for point selection

            g.append(c);
            if (index === 0) {
                $(c).addClass("point-poly-start");
            } else if (index === object.location.length - 1) {
                $(c).addClass("point-poly-end");
            }
        });

        objectBox.x = minX;
        objectBox.y = minY;
        objectBox.width = page.fn.drawing.limitMousePosition(maxX - minX);
        objectBox.height = page.fn.drawing.limitMousePosition(maxY - minY);

        // Render lines with colors based on point tags
        if (hasPointTag) {
            // Create separate line segments for each point pair
            for (let index = 1; index < location.length; index++) {
                let prePoint = location[index - 1];
                let currentPoint = location[index];

                if (!prePoint || !currentPoint) continue;

                let points = prePoint[0] + "," + prePoint[1] + " " + currentPoint[0] + "," + currentPoint[1];
                let color = null;

                // Get color from the current point's tag (destination point)
                // Priority: first tag with value
                if (typeof(currentPoint[3]) !== 'undefined' && currentPoint[3] && currentPoint[3].tags) {
                    let data = currentPoint[3];
                    let keys = Object.keys(data.tags);

                    // Loop through all tags to find the first one with a value
                    for (let i = 0; i < keys.length; i++) {
                        let key = keys[i];
                        let tagValue = data.tags[key];

                        // Check if tag has a value (not empty/null/undefined)
                        if (_common.isNotEmpty(tagValue)) {
                            let tag = {};
                            tag[key] = tagValue;
                            color = page.fn.drawing.getTagValueColorForPoint({
                                tagId: key,
                                val: tagValue
                            });

                            // If color found, break (use first tag with value)
                            if (color) {
                                break;
                            }
                        }
                    }
                }

                let segmentPolyline = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');

                if (color) {
                    // Has tag color - use custom segment class
                    segmentPolyline.setAttribute("class", "draw-object pointpoly-segment");
                    segmentPolyline.setAttribute("stroke", color);
                } else {
                    // No tag color - use default class color
                    segmentPolyline.setAttribute("class", "draw-object pointpoly-segment CLASS_" + object.classId);
                }

                segmentPolyline.setAttribute("points", points);
                segmentPolyline.setAttribute("objectId", object.objectId);

                g.append(segmentPolyline);
            }
        } else {
            // No tags, render single polyline
            let polyline = $(document.createElementNS("http://www.w3.org/2000/svg", 'polyline'));
            polyline.attr("class", "draw-object object-body-pointpoly CLASS_" + object.classId)
                .attr("objectId", object.objectId)
                .attr("data-objectType", object.objectType)
                .attr("data-file-index", fileIndex);
            polyline.attr("points", pointsString.trim());
            g.append(polyline);
        }
    } catch (E) {
        log.error(E, "page.fn.renderPointPolyline");
        page.fn.data.deleteObject(fileIndex, object.objectId);
    }
    return objectBox;
}
page.fn.drawing.getTagValueColorForPoint = function (tag) {
    let color = null;
    if (_common.isNotEmpty(page.data.task.tags)) {
        for (let i = 0; i < page.data.task.tags.length; i++) {
            if (page.data.task.tags[i].tagId == tag.tagId) {
                if (page.data.task.tags[i].tagSelectValueVoList.length != 0) {
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
page.fn.drawing.renderKeypoint = function (fileIndex, object) {
    let objectBox = {x: 0, y: 0, width: 0, height: 0};
    let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
    try {
        let location = object.location;
        let constKey = page.data.task.keypointMap.get(object.keypointId);
        // keypoint 생성 시 마지막에 한번
        if (svg.children("g[objectId='" + object.objectId + "']").length == 0) {
            $(".keypoint[objectId='" + object.objectId + "']").remove();
            $("svg rect.keybox").remove()
            let g;
            if ($("g[objectId='" + object.objectId + "']").length == 0) {
                g = $(document.createElementNS("http://www.w3.org/2000/svg", 'g'));
                g.attr("objectId", object.objectId);
                g.attr("data-objectType", object.objectType);
                svg.append(g);
            } else {
                g = svg.children("g[objectId='" + object.objectId + "']");
            }
            // 추가
            if (_common.isNotEmpty(constKey)) {
                let m = new HashMap();
                let num = 0;
                location.forEach(function (point) {
                    if (constKey.position.length > 7) {
                        if (constKey.position[num][7] == 'off') {
                            num++;
                            return false;
                        }
                    }
                    let i = _common.nvl(point[2], 0);
                    let p = point;
                    m.put(i, point);
                    if (constKey.radiusYn == "Y") {
                        let idx = p[2];
                        let radius = constKey.defaultRadius;
                        if (p.length >= 5) {
                            radius = p[4];
                        }
                        let c = $(document.createElementNS("http://www.w3.org/2000/svg", 'circle'));
                        c.attr("class", "draw-radius circle");
                        c.attr("cx", p[0]);
                        c.attr("cy", p[1]);
                        c.attr("id", "C_" + object.objectId + "_r_" + idx);
                        c.attr("objectId", object.objectId);
                        c.attr("pointIndex", idx);
                        c.attr("pointNum", idx);
                        c.attr("index", num);
                        c.attr("objectId", object.objectId);
                        c.attr("title", "#" + object.objectOrder + " *" + idx);
                        c.css("r", radius);
                        g.append(c);
                        c.on("mousedown", function (event) {
                            page.fn.event.mouseDownOnKeypointCircle(event, object);
                        });
                    }
                    num++;
                });
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
                    let roiRect = page.fn.drawing.renderKeypointRoi(roiXList, roiYList);
                    let r = $(document.createElementNS("http://www.w3.org/2000/svg", 'rect'));
                    r.attr("x", roiRect.x);
                    r.attr("y", roiRect.y);
                    r.attr("width", roiRect.width);
                    r.attr("height", roiRect.height);
                    r.attr("objectId", object.objectId);
                    r.attr("class", "draw-object object-body keypoint roi CLASS_" + object.classId);
                    r.attr("style", "stroke:#f6ff21; fill:#f6ff21 !important;");
                    r.attr("fileIndex", fileIndex);
                    g.prepend(r);
                }
                let relIdx = 0;
                constKey.relationship.forEach(function (rel) {
                    if (m.get(rel[0]) != null && m.get(rel[1]) != null) {
                        let p1 = m.get(rel[0]);
                        let p2 = m.get(rel[1]);
                        /*// 2023/05/04 키포인트 포인트 속성에 따른 연결선 표시방법 옵션 추가 */
                        let lineStyle = "line-visible";
                        if (page.constants.keypoint.hiddenValues.includes(p1[3]) || page.constants.keypoint.hiddenValues.includes(p2[3])) {
                            lineStyle = "line-invisible";
                        }
                        /* 2023/05/04 키포인트 포인트 속성에 따른 연결선 표시방법 옵션 추가 //*/
                        let points =
                            _common.nvl(p1[0], 0)
                            + "," + _common.nvl(p1[1], 0)
                            + " " + _common.nvl(p2[0], 0)
                            + "," + _common.nvl(p2[1], 0)
                        ;
                        let o = $(document.createElementNS("http://www.w3.org/2000/svg", 'polyline'));
                        o.attr("class", "draw-object object-body keypoint relationship CLASS_" + object.classId);
                        o.attr("points", points);
                        o.attr("objectId", object.objectId);
                        o.attr("index", relIdx);
                        o.attr("fileIndex", fileIndex);
                        // o.setAttribute("title", "#" + object.objectOrder + " *" + rel[0] + " ↔ *" + rel[1]);
                        try {
                            o.addClass(lineStyle);
                            g.append(o);
                        } catch (E) {
                            log.error(E);
                            log.warn(g, "g");
                        }
                    }
                    relIdx++;
                });
                let idx = 0;
                let minX = 9999999, minY = 9999999, maxX = -1, maxY = -1;
                location.forEach(function (point) {
                    if (constKey.position.length > 7) {
                        if (constKey.position[idx][7] == 'off') {
                            idx++;
                            return false;
                        }
                    }
                    let x = _common.nvl(point[0], 0);
                    let y = _common.nvl(point[1], 0);
                    minX = Math.min(minX, x);
                    minY = Math.min(minY, y);
                    maxX = Math.max(maxX, x);
                    maxY = Math.max(maxY, y);
                    let visibility = _common.nvl(point[3], page.constants.keypoint.visibility.defaultValue);
                    page.fn.drawing.drawKeypoint({
                        x: point[0]
                        , y: point[1]
                        , objectId: object.objectId
                        , index: idx
                        , position: point[2]
                        , classId: object.classId
                        , visibility: visibility
                        , name: constKey.position[idx][4]
                        , viewIndex: (idx + 1)
                        , orderSeq: object.objectOrder
                        , g: g
                        , keypointId: object.keypointId
                        , fileIndex: fileIndex
                    });
                    idx++;
                });
                objectBox.x = minX;
                objectBox.y = minY;
                objectBox.width = page.fn.drawing.limitMousePosition(maxX - minX);
                objectBox.height = page.fn.drawing.limitMousePosition(maxY - minY);
            }
        } else { // keypoint 업데이트 시 계속 render
            let m = new HashMap();
            location.forEach(function (point) {
                let i = _common.nvl(point[2], 0);
                m.put(i, point);
            });
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
                let roiRect = page.fn.drawing.renderKeypointRoi(roiXList, roiYList);
                $("svg rect.roi[objectId='" + object.objectId + "']")
                    .attr("x", roiRect.x)
                    .attr("y", roiRect.y)
                    .attr("width", roiRect.width)
                    .attr("height", roiRect.height);
            }
            let relIdx = 0;
            $("svg polyline.relationship[objectId='" + object.objectId + "']")
                .removeClass("line-visible")
                .removeClass("line-invisible")
            ;
            constKey.relationship.forEach(function (rel) {
                if (m.get(rel[0]) != null && m.get(rel[1]) != null) {
                    let p1 = m.get(rel[0]);
                    let p2 = m.get(rel[1]);
                    /*// 2023/05/04 키포인트 포인트 속성에 따른 연결선 표시방법 옵션 추가 */
                    let lineStyle = "line-visible";
                    if (page.constants.keypoint.hiddenValues.includes(p1[3]) || page.constants.keypoint.hiddenValues.includes(p2[3])) {
                        lineStyle = "line-invisible";
                    }
                    /* 2023/05/04 키포인트 포인트 속성에 따른 연결선 표시방법 옵션 추가 //*/
                    let points =
                        _common.nvl(p1[0], 0)
                        + "," + _common.nvl(p1[1], 0)
                        + " " + _common.nvl(p2[0], 0)
                        + "," + _common.nvl(p2[1], 0)
                    ;
                    $("svg polyline.relationship[objectId='" + object.objectId + "'][index='" + relIdx + "']")
                        .attr("points", points)
                        .addClass(lineStyle)
                    ;
                }
                relIdx++;
            });
            let idx = 0;
            let minX = 9999999, minY = 9999999, maxX = -1, maxY = -1;
            location.forEach(function (point) {
                let x = _common.nvl(point[0], 0);
                let y = _common.nvl(point[1], 0);
                let visibility = _common.nvl(point[3], page.constants.keypoint.visibility.defaultValue);
                let cls = "";
                if (visibility == page.constants.keypoint.visibility.values.invisibility) {
                    cls = "invisibility";
                } else if (visibility == page.constants.keypoint.visibility.values.deletePoint) {
                    cls = "deletePoint";
                } else if (visibility == page.constants.keypoint.visibility.values.partial) {
                    cls = "partial";
                }
                $("svg circle[objectId='" + object.objectId + "'][index='" + idx + "']")
                    .removeClass("partial")
                    .removeClass("invisibility")
                    .removeClass("deletePoint")
                    .attr("cx", x)
                    .attr("cy", y)
                    .attr("visibility", visibility)
                    .addClass(cls);
                ;
                idx++;
                minX = Math.min(minX, x);
                minY = Math.min(minY, y);
                maxX = Math.max(maxX, x);
                maxY = Math.max(maxY, y);
            });
            objectBox.x = minX;
            objectBox.y = minY;
            objectBox.width = page.fn.drawing.limitMousePosition(maxX - minX);
            objectBox.height = page.fn.drawing.limitMousePosition(maxY - minY);
        }
    } catch (E) {
        log.error(E, "page.fn.drawing.renderKeypoint");
        page.fn.data.deleteObject(fileIndex, object.objectId);
    }
    return objectBox;
}
page.fn.drawing.renderKeypointRoi = function (roiXList, roiYList) {
    let objectBox = {
        x: 0, y: 0, width: 0, height: 0
    };
    let minX = Math.min(...roiXList);
    let minY = Math.min(...roiYList);
    let maxX = Math.max(...roiXList);
    let maxY = Math.max(...roiYList);
    let x = minX;
    let y = minY;
    let width = maxX - minX;
    let height = maxY - minY;
    objectBox.x = x;
    objectBox.y = y;
    objectBox.width = page.fn.drawing.limitMousePosition(width);
    objectBox.height = page.fn.drawing.limitMousePosition(height);
    log.info(objectBox, "page.fn.drawing.renderKeypointRoi, objectBox");
    return objectBox;
}
page.fn.drawing.drawKeypoint = function (point) {
    try {
        let g;
        let svg = $("svg.drawingSVG[data-file-index='" + point.fileIndex + "']");
        if (_common.isEmpty(point.g)) {
            g = document.createElementNS("http://www.w3.org/2000/svg", 'g');
            g.setAttribute("objectId", point.objectId);
            g.setAttribute("class", "draw-object object-body CLASS_" + point.classId);
            svg.append(g);
        } else {
            g = point.g;
        }
        // keypoint 의 point 만큼
        let id = "C_" + point.objectId + "_" + point.index;
        let c = $("#" + id);
        if (c.length == 0) {
            c = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            $(g).append(c);
        } else {
            c = c.get(0);
        }
        point.visibility = parseInt(point.visibility);
        if (isNaN(point.visibility)) {
            point.visibility = page.constants.keypoint.visibility.values.visible;
        }
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

        let constP = page.data.task.keypointMap.get(point.keypointId).posMap.get(point.position);
        if (constP != null) {
            if (constP.length >= 7) {
                let color = constP[6];
                color = color.startsWith("#") ? color : "#" + color;
                $(c).css("stroke", color);
            }
            c.setAttribute("title", "#" + point.orderSeq + " *" + (constP[2]) + (_common.isNotEmpty(point.name) ? " (" + point.name + ")" : ""));
            c.setAttribute("pointNum", constP[2]);

        }
        // log.info(c, "page.fn.drawing.drawKeypoint");
    } catch (E) {
        log.error(E, "page.fn.drawing.drawKeypoint, event");
        log.info(point, "page.fn.drawing.drawKeypoint, point");
    }
}
page.fn.drawing.renderKeypointBox = function (fileIndex, object) {
    if (object.location.length != 2) {
        return false;
    }
    let objectBox = {
        x: 0, y: 0, width: 0, height: 0
    };
    let imageAngle = $(`.drawingImage[data-file-index=${fileIndex}]`).attr("data-file-rotation");
    let imageSize = page.fn.data.getImageOriginalSize(fileIndex);
    // 이미지가 회전된 상태에서 keyPoint를 생성 시 회전된 방향으로 생성되는 Rect SVG가 생성되기 때문에 원래의 형태로 출력해주기 위해
    if (imageAngle != 0) {
        let tempLocation = _common.copy(object.location);
        if (imageAngle == 90) {
            object.location[0][0] = tempLocation[0][1];
            object.location[0][1] = imageSize.height - tempLocation[0][0];
            object.location[1][0] = tempLocation[1][1];
            object.location[1][1] = imageSize.width - tempLocation[1][0] - (imageSize.width - imageSize.height);
        } else if (imageAngle == 180) {
            object.location[0][0] = imageSize.width - tempLocation[0][0];
            object.location[0][1] = imageSize.height - tempLocation[0][1];
            object.location[1][0] = imageSize.width - tempLocation[1][0];
            object.location[1][1] = imageSize.height - tempLocation[1][1];
        } else if (imageAngle == 270) {
            object.location[0][0] = imageSize.height - tempLocation[0][1] + (imageSize.width - imageSize.height);
            object.location[0][1] = tempLocation[0][0];
            object.location[1][0] = imageSize.width - tempLocation[1][1];
            object.location[1][1] = tempLocation[1][0];
        }
    }

    let constKey = page.data.task.keypointMap.get(page.data.objectKeypointId);
    let x1 = Math.min(object.location[0][0], object.location[1][0]);
    let y1 = Math.min(object.location[0][1], object.location[1][1]);
    let x2 = Math.max(object.location[0][0], object.location[1][0]);
    let y2 = Math.max(object.location[0][1], object.location[1][1]);
    let width = x2 - x1;
    let height = y2 - y1;
    let reverseLeft = x1 != object.location[0][0] ? true : false;
    let reverseTop = y1 != object.location[0][1] ? true : false;

    objectBox.x = x1;
    objectBox.y = y1;
    objectBox.width = page.fn.drawing.limitMousePosition(width);
    objectBox.height = page.fn.drawing.limitMousePosition(height);

    //border
    $("svg rect.keybox").remove();
    let o = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    o.setAttribute("x", x1);
    o.setAttribute("y", y1);
    o.setAttribute("width", width);
    o.setAttribute("height", height);
    o.setAttribute("objectId", object.objectId);
    o.setAttribute("class", "draw-object keybox");
    page.dom.svg.append(o);

    let g;
    if ($("g[objectId='" + object.objectId + "']").length == 0) {
        g = document.createElementNS("http://www.w3.org/2000/svg", 'g');
        g.setAttribute("objectId", object.objectId);
        g.setAttribute("id", object.objectId);
        g.setAttribute("class", "draw-object object-body CLASS_" + object.classId);
        page.dom.svg.append(g);
    } else {
        g = $("g[objectId='" + object.objectId + "']").get(0);
    }
    let idx = 0;
    $(".keypoint[objectId='" + object.objectId + "']").remove();
    page.data.drawing.keyPoints = [];
    let m = new HashMap();
    constKey.position.forEach(function (p) {
        let pos = page.fn.drawing.calcKeyPosByBox(p, width, height, reverseLeft, reverseTop);
        let x = pos.x + x1;
        let y = pos.y + y1;
        // 이미지가 회전된 상태에서 keyPoint를 생성 시 회전된 방향으로 Point 들이 생성되기 때문에 원래의 형태로 출력해주기 위해
        if (imageAngle != 0) {
            let tempX = _common.copy(x);
            let tempY = _common.copy(y);
            if (imageAngle == 90) {
                x = imageSize.height - tempY;
                y = tempX;
            } else if (imageAngle == 180) {
                x = imageSize.width - tempX;
                y = imageSize.height - tempY;
            } else if (imageAngle == 270) {
                x = tempY;
                y = imageSize.width - tempX;
            }
        }
        page.fn.drawing.drawKeypoint({
            x: x
            , y: y
            , constants: p
            , g: g
            , objectId: object.objectId
            , objectId: object.objectId
            , index: idx
            , position: p[2]
            , classId: object.classId
            , name: constKey.position[idx][4]
            , viewIndex: (idx + 1)
            , orderSeq: object.objectOrder
            , keypointId: object.keypointId
            , fileIndex: fileIndex
        });
        let point = [x, y, p[2], page.constants.keypoint.visibility.defaultValue, page.data.task.keypointMap.get(page.data.objectKeypointId).defaultRadius];
        page.data.drawing.keyPoints.push(point);
        if (p.length > 7) {
            if (p[7] == 'off') {
                return false;
            }
        }
        m.put(p[2], point);
        idx++;
    });

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
        let roiRect = page.fn.drawing.renderKeypointRoi(roiXList, roiYList);
        let r = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        r.setAttribute("x", roiRect.x);
        r.setAttribute("y", roiRect.y);
        r.setAttribute("width", roiRect.width);
        r.setAttribute("height", roiRect.height);
        r.setAttribute("objectId", object.objectId);
        r.setAttribute("class", "draw-object object-body keypoint roi CLASS_" + object.classId);
        r.setAttribute("style", "stroke:#f6ff21; fill:#f6ff21 !important;");
        page.dom.svg.append(r);
    }
    constKey.relationship.forEach(function (rel) {
        if (m.get(rel[0]) != null && m.get(rel[1]) != null) {
            let p1 = m.get(rel[0]);
            let p2 = m.get(rel[1]);
            let points = p1[0] + "," + p1[1] + " " + p2[0] + "," + p2[1];
            let o = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
            o.setAttribute("class", "draw-object keypoint CLASS_" + object.classId);
            o.setAttribute("points", points);
            o.setAttribute("objectId", object.objectId);
            page.dom.svg.append(o);
        }
    });
    return objectBox;
}

page.fn.drawing.calcKeyPosByBox = function (p, width, height, reverseLeft, reverseTop) {
    let r = {x: Math.round(width / (100 / p[0])), y: Math.round(height / (100 / p[1]))};
    if (reverseLeft) {
        r.x = width - r.x;
    }
    if (reverseTop) {
        r.y = height - r.y;
    }
    return r;
}
page.fn.drawing.renderPointGroup = function (fileIndex, object) {
    let objectBox = {
        x: 0, y: 0, width: 0, height: 0
    };
    let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
    try {
        let g = $("g[objectId='" + object.objectId + "']");
        if (g.length == 1) {
            g.empty();
        } else {
            g.remove();
            g = $(document.createElementNS("http://www.w3.org/2000/svg", 'g'));
            g.attr("objectId", object.objectId);
            g.attr("data-objectType", object.objectType);
            g.attr("class", "draw-object object-body CLASS_" + object.classId);
            svg.append(g);
        }
        let location = object.location;
        let minX = 9999999, minY = 9999999, maxX = -1, maxY = -1;

        for (let i = 0; i < location.length; i++) {
            let point = location[i];
            let c = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            let id = "g_" + point[2];
            c.setAttribute("cx", point[0]);
            c.setAttribute("cy", point[1]);
            c.setAttribute("objectId", object.objectId);
            c.setAttribute("id", id);
            c.setAttribute("index", i);
            c.setAttribute("pointNum", i);
            c.setAttribute("data-file-index", fileIndex)
            g.append(c);
            $(c).addClass("circle").addClass("object-body");
            minX = Math.min(minX, point[0]);
            minY = Math.min(minY, point[1]);
            maxX = Math.max(maxX, point[0]);
            maxY = Math.max(maxY, point[1]);
        }
        objectBox.x = minX;
        objectBox.y = minY;
        objectBox.width = page.fn.drawing.limitMousePosition(Math.max(maxX - minX, 1));
        objectBox.height = page.fn.drawing.limitMousePosition(Math.max(maxY - minY, 1));
    } catch (E) {
        log.error(E, "page.fn.drawing.renderPointGroup");
        page.fn.data.deleteObject(fileIndex, object.objectId);
    }
    return objectBox;
}
page.fn.drawing.renderSideBox = function (fileIndex, object) {
    let objectBox = {x: 0, y: 0, width: 0, height: 0};
    let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
    let g = svg.children("g[objectId='" + object.objectId + "']").empty();
    if (g.length === 0) {
        g = $(document.createElementNS("http://www.w3.org/2000/svg", 'g'));
        g.attr("objectId", object.objectId);
        g.attr("data-objectType", object.objectType);
        svg.append(g);
    }
    if (object.location.length > 1) {
        let max = Math.min(object.location.length, 4);
        let path = "";
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
        if (object.location.length >= 4) {
            path += " ";
            path += object.location[0][0];
            path += ",";
            path += object.location[0][1];
        }
        let o = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
        o.setAttribute("class", "draw-object object-body CLASS_" + object.classId + " objectType_" + object.objectType);
        o.setAttribute("points", path);
        o.setAttribute("objectId", object.objectId);
        o.setAttribute("data-file-index", fileIndex)
        if (page.data.event.lastMethodType == page.constants.method.moveObject) {
            $(o).addClass("move-body");
        }
        g.append(o);
        // Không dùng CSS transform; toạ độ đã được cập nhật trực tiếp khi xoay
        if (object.location.length == 5) {
            let p5 = object.location[4];
            let cp = null;
            let dist = 99999;
            for (let i = 0; i < 4; i++) {
                let p = object.location[i];
                let distX = Math.abs(p[0] - p5[0]);
                let distY = Math.abs(p[1] - p5[1]);
                if (dist > distX + distY) {
                    dist = distX + distY;
                    cp = p;
                }
            }
            let o = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
            o.setAttribute("class", "draw-object object-body CLASS_" + object.classId + " objectType_" + object.objectType);
            o.setAttribute("points", cp[0] + "," + cp[1] + " " + p5[0] + "," + p5[1]);
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
            for (let i = 0; i < 4; i++) {
                let p = object.location[i];
                let distX = Math.abs(p[0] - p5[0]);
                let distY = Math.abs(p[1] - p5[1]);
                if (dist5 > distX + distY) {
                    dist5 = distX + distY;
                    cp1 = p;
                    cp1Idx = i;
                }
            }
            let avaliablePoint6 = [];
            if (cp1Idx == 0) {
                avaliablePoint6 = [1, 3];
            } else if (cp1Idx == 1) {
                avaliablePoint6 = [0, 2];
            } else if (cp1Idx == 2) {
                avaliablePoint6 = [1, 3];
            } else if (cp1Idx == 3) {
                avaliablePoint6 = [2, 0];
            }
            for (let i = 0; i < 4; i++) {
                if (avaliablePoint6.includes(i)) {
                    let p = object.location[i];
                    let distX = Math.abs(p[0] - p6[0]);
                    let distY = Math.abs(p[1] - p6[1]);
                    if (dist6 > distX + distY) {
                        dist6 = distX + distY;
                        cp2 = p;
                    }
                }
            }
            path = cp1[0] + "," + cp1[1] + " " + p5[0] + "," + p5[1];
            path += " " + p6[0] + "," + p6[1] + " " + cp2[0] + "," + cp2[1];

            let o = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
            o.setAttribute("class", "draw-object object-body CLASS_" + object.classId + " objectType_" + object.objectType);
            o.setAttribute("points", path);
            o.setAttribute("objectId", object.objectId);
            g.append(o);
            object.objectData.pointType = "6p";
        } else if (object.location.length == 4) {
            object.objectData.pointType = "4p";
        }
    }
    let xx = 0, yy = 0;
    for (let i = 0; i < object.location.length; i++) {
        let p = object.location[i];
        objectBox.x = Math.min(p[0], objectBox.x);
        objectBox.y = Math.min(p[1], objectBox.y);
        xx = Math.max(p[0], xx);
        yy = Math.max(p[1], yy);
    }
    objectBox.width = page.fn.drawing.limitMousePosition(Math.max(xx - objectBox.x, 1));
    objectBox.height = page.fn.drawing.limitMousePosition(Math.max(yy - objectBox.y, 1));
    if (!object.objectData || typeof object.objectData !== 'object') {
        object.objectData = {};
    }
    object.objectData.bbox = objectBox;
    // Ensure points array is stored for convert/unConvert to work
    try {
        object.objectData.points = object.location;
        object.objectLocation = JSON.stringify(object.objectData);
    } catch (E) {
        log.error(object);
    }
    return objectBox;
}
page.fn.drawing.renderEdgeLine = function (fileIndex, object) {
    log.info("page.fn.drawing.renderEdgeLine");
    let objectBox = {
        x: 0, y: 0, width: 0, height: 0
    };
    try {
        let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
        let g = svg.children("g[objectId='" + object.objectId + "']");
        if (g.length === 0) {
            g = $(document.createElementNS("http://www.w3.org/2000/svg", 'g'));
            g.attr("objectId", object.objectId);
            g.attr("data-objectType", object.objectType);
            svg.append(g);
        }
        let location = object.location;
        let points = "";
        let minX = 9999999, minY = 9999999, maxX = -1, maxY = -1;
        for (let i = 0; i < location.length; i++) {
            let p = location[i];
            points += " " + p[0] + "," + p[1];
            minX = Math.min(minX, p[0]);
            minY = Math.min(minY, p[1]);
            maxX = Math.max(maxX, p[0]);
            maxY = Math.max(maxY, p[1]);
        }
        objectBox.x = minX;
        objectBox.y = minY;
        objectBox.width = page.fn.drawing.limitMousePosition(maxX - minX);
        objectBox.height = page.fn.drawing.limitMousePosition(maxY - minY);
        let o = g.children("polyline.object-body");
        if (o.length == 0) {
            o = $(document.createElementNS("http://www.w3.org/2000/svg", 'polyline'));
            o.attr("class", "edgeLines draw-object object-body CLASS_" + object.classId)
                .attr("points", points)
                .attr("objectId", object.objectId)
                .attr("data-file-index", fileIndex)
                .attr("startEdgePointId", object.location[0][2])
            if (object.location.length > 1) {
                o.attr("endEdgePointId", object.location[1][2]);
            }
            g.append(o);
        } else {
            o
                .attr("points", points)
                .attr("startEdgePointId", object.location[0][2])
            ;
            if (object.location.length > 1) {
                o.attr("endEdgePointId", object.location[1][2])
            }
            ;
        }
        page.fn.drawing.renderEdgePoint(fileIndex, "on");
    } catch (E) {
        log.error(E, "page.fn.drawing.renderEdgeLine");
        page.fn.data.deleteObject(fileIndex, object.objectId);
    }
    return objectBox;
}
page.fn.drawing.renderEdgePoint = function (fileIndex, cls) {
    log.info("page.fn.renderEdgePoint");
    let objectBox = {
        x: 0, y: 0, width: 0, height: 0
    };
    try {
        let g;
        $(".edgePoints").remove();
        $(".edgePoint").remove();
        let minX = 9999999, minY = 9999999, maxX = -1, maxY = -1;
        page.data.loadTicket.fileList.forEach(function (file) {
            if (Object.keys(file.edgePointsMap) != null) {
                g = document.createElementNS("http://www.w3.org/2000/svg", 'g');
                g.setAttribute("class", "edgePoints");
                $("svg.drawingSVG[data-file-index='" + file.fileIndex + "']").append(g);
                for (let key in file.edgePointsMap) {
                    let point = file.edgePointsMap[key];
                    let c = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
                    let id = "g_" + point[2];
                    c.setAttribute("cx", point[0]);
                    c.setAttribute("cy", point[1]);
                    c.setAttribute("pointId", point[2]);
                    c.setAttribute("id", id);
                    c.setAttribute("data-file-index", file.fileIndex);
                    g.append(c);
                    $(c).addClass("circle");
                    $(c).addClass("edgePoint");
                    minX = Math.min(minX, point[0]);
                    minY = Math.min(minY, point[1]);
                    maxX = Math.max(maxX, point[0]);
                    maxY = Math.max(maxY, point[1]);
                }
                objectBox.x = minX;
                objectBox.y = minY;
                objectBox.width = page.fn.drawing.limitMousePosition(Math.max(maxX - minX, 1));
                objectBox.height = page.fn.drawing.limitMousePosition(Math.max(maxY - minY, 1));
            }
        })
        page.fn.event.setEdgePointEvent(cls);
    } catch (E) {
        log.error(E, "error : page.fn.drawing.renderEdgePoint()")
    }
    return objectBox;
}
page.fn.drawing.renderEdgePointLines = function (event, pointId) {
    let fileIndex = Number.parseInt(page.data.event.currentFileIndex);
    let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
    let point;
    if (event.isTrusted) { // edgePoint 정렬(arrange)로 인한 이벤트 호출인지 아닌지 체크
        point = page.fn.event.getPointOnFile(fileIndex, event);
    } else {
        point = event; // 정렬로 인한 함수 호출일땐 event 파라미터에 바로 x, y 값 던져줌 - page.fn.data.moveEdgePointsByArrange()
    }
    page.data.loadTicket.fileList[fileIndex].edgePointsMap[pointId] = [
        point.x, point.y, pointId
    ]
    $("circle[pointId='" + pointId + "']").attr("cx", point.x);
    $("circle[pointId='" + pointId + "']").attr("cy", point.y);
    let startPointLines = svg.find("polyline[startEdgePointId='" + pointId + "']");
    let endPointLines = svg.find("polyline[endEdgePointId='" + pointId + "']");
    for (var i = 0; i < startPointLines.length; i++) {
        let line = startPointLines[i];
        let points = $(line).attr("points").split(" ");
        let pos = point.x + "," + point.y + " " + points[1];
        $(line).attr("points", pos);
        let object = page.fn.data.getObject(fileIndex, $(line).attr("objectId"));
        object.location.splice(0, 1, page.data.loadTicket.fileList[fileIndex].edgePointsMap[pointId])
        page.fn.data.convertObjectLocation(object);
        page.fn.drawing.renderObject(object);
    }
    for (var i = 0; i < endPointLines.length; i++) {
        let line = endPointLines[i];
        let points = $(line).attr("points").split(" ");
        let pos = points[0] + " " + point.x + "," + point.y;
        $(line).attr("points", pos);
        let object = page.fn.data.getObject(fileIndex, $(line).attr("objectId"));
        object.location.splice(1, 1, page.data.loadTicket.fileList[fileIndex].edgePointsMap[pointId])
        page.fn.data.convertObjectLocation(object);
        page.fn.drawing.renderObject(object);
    }
    page.fn.event.setEdgePointEvent("active");
}
page.fn.drawing.renderImageTag = function (fileIndex) {
    page.dom.rootImageTagList.empty();
    let fileData = page.data.loadTicket.fileList[fileIndex];
    page.data.task.tags.forEach(function (tag) {
        if (tag.tagTypeCd == page.constants.tag.tagTypeCd.image) {
            tag.fileIndex = fileIndex;
            if (tag.tagValTypeCd == page.constants.tag.tagValTypeCd.input) {
                page.dom.rootImageTagList.append(_common.template.parseObject("tmpl-tagListItemInput", tag));
            } else {
                page.dom.rootImageTagList.append(_common.template.parseObject("tmpl-tagListItemSelect", tag));
                if (tag.tagSelectValueVoList != null) {
                    tag.tagSelectValueVoList.forEach(function (tagValue) {
                        $("#selectTag_" + tag.tagId).append(_common.template.parseObject("tmpl-tagListItemSelectOption", tagValue));
                    });
                }
            }
        }
    })
    let removeList = [];
    let idx = 0;
    fileData.tagList.forEach(function (tag) {
        if ($("#rootTag_" + tag.tagId).length == 1) {
            $("#selectTag_" + tag.tagId).val(tag.val);
        } else {
            removeList.push(idx);
        }
        idx++;
    });
    removeList.forEach(function (i) {
        fileData.tagList.splice(i, 1);
    });
}
page.fn.drawing.makePolygonByPaint = function (fileIndex, objectList) {
    if (objectList.length > 0) {
        page.gateway(page.constants.gateway.command.add
            , _common.template.parseMessage(page.message.startDrawing, {drawName: page.constants.drawType.paint}));
        for (let i = 0; i < objectList.length; i++) {
            let points = objectList[i];
            log.info(points, "page.fn.makePolygonByPaint");
            page.data.drawing.object = page.fn.data.appendNewDrawObject({
                objectType: page.constants.drawType.polygon
                , location: points
                , fileIndex: fileIndex
                , isCopied: true
            });
            page.fn.data.convertObjectLocation(page.data.drawing.object);
            page.fn.data.saveObject(page.data.drawing.object);
            page.fn.drawing.renderObject(page.data.drawing.object);
            page.fn.drawing.endNewDrawing("draw paint of add new object");
            page.fn.data.onSelectObject(fileIndex, page.data.drawing.object.objectId);
        }
        paint.fn.changeTool('reset');
    }
}
page.fn.drawing.renderObjectTag = function (object) {
    log.debug(object, "page.fn.renderObjectTag");
    page.dom.rootObjectTagList.empty();
    if (object == null) {
        log.debug("object is null", "page.fn.renderObjectTag");
        page.dom.rootObjectTagList.append(_common.template.parseObject("tmpl-notSelectedObject", {}));
    } else {
        let tagList = [];
        page.data.task.tags.forEach(function (tag) {
            if (tag.tagTypeCd == page.constants.tag.tagTypeCd.object && tag.matchClasses.includes(object.classId)) {
                tag.objectId = object.objectId;
                tag.fileIndex = object.fileIndex;
                if (tag.tagValTypeCd == page.constants.tag.tagValTypeCd.input) {
                    page.dom.rootObjectTagList.append(_common.template.parseObject("tmpl-tagListItemInput", tag));
                    let maxlength = 99999;
                    if (!isNaN(tag.lengthLetter)) {
                        if (tag.lengthLetter > -1) {
                            let max = Number(tag.lengthLetter);
                            maxlength = Math.min(max, maxlength);
                            $("#selectTag_" + tag.tagId).attr("maxlength", maxlength);
                        }
                    }
                    if (!isNaN(tag.lengthSpecial)) {
                        if (tag.lengthSpecial > -1) {
                            let max = Number(tag.lengthSpecial);
                            maxlength = Math.min(max, maxlength);
                            $("#selectTag_" + tag.tagId).attr("maxlength", maxlength);
                        }
                    }
                } else {
                    page.dom.rootObjectTagList.append(_common.template.parseObject("tmpl-tagListItemSelect", tag));
                    if (tag.tagSelectValueVoList != null) {
                        tag.tagSelectValueVoList.forEach(function (tagValue) {
                            tagValue.title = _common.isEmpty(tagValue.title) ? tagValue.name : tagValue.title;
                            $("#selectTag_" + tag.tagId).append(_common.template.parseObject("tmpl-tagListItemSelectOption", tagValue));
                        });
                    }
                }
                if (object.tagList != null && object.tagList.length > 0) {
                    for (let i = 0; i < object.tagList.length; i++) {
                        if (object.tagList[i].tagId == tag.tagId) {
                            let t = object.tagList[i];
                            tagList.push(t);
                            $("#selectTag_" + tag.tagId).val(t.val);
                            break;
                        }
                    }
                }
            }
        });
        object.tagList = tagList;
        if (page.dom.rootObjectTagList.children().length == 0) {
            page.dom.rootObjectTagList.append(_common.template.parseObject("tmpl-noHaveObjectTag", {}));
        }
    }
    // if (!page.data.loadTicket.isValid) {
    //     $('.tagInput').prop("disabled", "disabled");
    // } else {
    //     $('.tagInput').prop("disabled", null);
    // }
}
page.fn.drawing.refreshEdgePointList = function (fileIndex) {
    $("#popEdgePointsList").empty();
    let index = 1;
    for (let key in page.data.loadTicket.fileList[fileIndex].edgePointsMap) {
        $("#popEdgePointsList").append(_common.template.parseObject("tmpl-edgePoint", {
            pointId: key
            , index: index
            , fileIndex: fileIndex
        }));
        index++;
    }
    page.fn.drawing.renderEdgePoint(fileIndex);
}
page.fn.drawing.resetAllPopupTag = function (callBy) {
    page.data.loadTicket.fileList.forEach(function (fileData) {
        page.fn.drawing.resetPopupTag(fileData.fileIndex, callBy)
    })
}
page.fn.drawing.resetPopupTag = function (fileIndex, callBy) {
    log.info(callBy, "called, page.fn.drawing.resetPopupTag");
    const start = Date.now();
    let fileData = page.data.loadTicket.fileList[fileIndex];
    $("#wrapImageTag_" + fileIndex).empty();
    $(".root[data-file-index='" + fileIndex + "'] .TAG_group").remove();
    $(".root[data-file-index='" + fileIndex + "'] .data_tag").remove();
    $(".root[data-file-index='" + fileIndex + "'] .wrapObjectPointTag").remove();
    if (fileData.tagList != null) {
        fileData.tagList.forEach(function (tag) {
            if (tag.val != "") {
                tag.tagValueName = page.fn.data.getTagValueName(tag);
                tag.orderSeq = "";
                tag.objectId = "";
                $("#wrapImageTag_" + fileIndex).append(_common.template.parseObject("tmpl-tag", tag));
            }
        })
    }
    if (fileData.objectList != null) {
        fileData.objectList.forEach(function (object) {
            try {
                if ($(".draw-object[objectId='" + object.objectId + "']").length > 0) {
                    if (page.data.userSetting.objectTooltip == "on") {
                        $(".draw-object[objectId='" + object.objectId + "']").not(".keypoint").attr("title", "[#" + object.objectOrder + ":" + object.className + "]");
                    } else {
                        $(".draw-object[objectId='" + object.objectId + "']").not(".keypoint").attr("title", null);
                    }
                    let objectPos = page.fn.data.getObjectPosition(fileIndex, object);
                    let wrap = $("#wrapObjectTag_" + object.objectId);
                    wrap.css("top", objectPos.y).css("left", objectPos.x).css("z-index", object.objectOrder);

                    if (wrap.length == 0) {
                        wrap = $(_common.template.parseObject("tmpl-wrapObjectTag", object));
                        $(".wrapImageArea[data-file-index='" + fileIndex + "']").append(wrap);
                        wrap.css("top", objectPos.y).css("left", objectPos.x);
                    }
                    //render tag for line object
                    if (object.objectType == page.constants.drawType.edgeLines) {
                        let image = page.fn.data.getImageOriginalSize(fileIndex);
                        let x2 = 0, y2 = 0;
                        for (let i = 0; i < 2; i++) {
                            let pos = object.location[i];
                            x2 = Math.max(x2, pos[0]);
                            y2 = Math.max(y2, pos[1]);
                        }
                        x2 = x2 * image.scale, y2 = y2 * image.scale;
                        let width = x2 - objectPos.x;
                        let height = y2 - objectPos.y;
                        wrap.css("top", objectPos.y + height / 2).css("left", objectPos.x + width / 2);
                        // wrap.css("top", objectPos.y + hight / 2 - tagSize).css("left", objectPos.x + width /2 - tagSize);
                    }


                    // render tag for other object types
                    if (object.tagList && object.tagList.length > 0) {
                        //calculating wrap bbox
                        const image = page.fn.data.getImageOriginalSize(fileIndex);
                        const bbox = computeBBox(object, image);
                        const PAD = 0; // scale wrap

                        // đảm bảo parent relative để wrap định vị tuyệt đối
                        const $parent = wrap.parent();
                        if ($parent.css('position') === 'static') $parent.css('position', 'relative');

                        // set kích thước + vị trí cho wrap
                        wrap.css({
                            display: 'flex',
                            position: 'absolute',
                            left: bbox.x - PAD,
                            top: bbox.y - PAD,
                            width: bbox.w + PAD * 2,
                            height: bbox.h + PAD * 2,
                            transform: ''
                        });

                        const groups = {};
                        object.tagList.forEach(function (tag) {
                            if (page.data.userSetting.isViewTags === "false") return;
                            if (!tag.val) return;

                            let t = JSON.parse(JSON.stringify(page.fn.data.getConstantsTag(tag.tagId)));
                            t.val = tag.val;
                            t.tagValueName = page.fn.data.getTagValueName(t);
                            t.objectId = tag.objectId;
                            t.objectTagId = tag.objectTagId;
                            t.orderSeq = "#" + object.objectOrder;
                            t.tagPosition = t.tagPosition || tag.tagPosition || 'top-left';

                            // icon/text
                            t.iconPath = page.fn.data.getTagIconPath(t);
                            const baseIconUrl = page.data.imageServerURL;
                            const correctedIconUrl = baseIconUrl.replace('https://img-vn.ai-studio.co.kr', 'https://img.ai-studio.co.kr');
                            t.iconUrl = t.iconPath && !/^https?:\/\//i.test(t.iconPath) ? encodeURI(correctedIconUrl + t.iconPath) : encodeURI(t.iconPath || "");
                            t.iconDisplay = t.iconUrl ? "inline-block" : "none";
                            t.textDisplay = t.iconUrl ? "none" : "block";
                            let cc = page.fn.data.getTagValueColor(t);
                            const $tagEl = $(_common.template.parseObject("tmpl-tag", t));
                            $tagEl.css({flex: '0 0 auto'}); // mỗi tag là một item flex
                            if (cc) {
                                $tagEl.css({
                                    backgroundColor: cc
                                });
                            }
                            (groups[t.tagPosition] ||= []).push({t, $el: $tagEl});
                        });

                        Object.keys(groups).forEach(function (pos) {
                            const items = groups[pos];
                            if (!items || !items.length) return;

                            const pt = relAnchor(pos, bbox.w, bbox.h, PAD);  // điểm neo bên trong wrap
                            const cfg = flexConfigForPosition(pos);

                            // tạo container group
                            const $group = $('<div class="tag-group"></div>');
                            if (typeof window !== 'undefined' && window.__BEV_MODE__) {
                                // BEV: CSS theo yêu cầu
                                $group.css({
                                    position: 'absolute',
                                    // left: pt.x,
                                    top: 30 + 'px',
                                    transform: cfg.transform,   // canh theo góc tư / BEV center
                                    display: 'flex',
                                    justifyContent: cfg.justify,
                                    alignItems: cfg.align,
                                    padding: GROUP_PAD + 'px',
                                    // Giới hạn để không tràn bbox
                                    maxHeight: Math.max(40, Math.floor(bbox.h * 0.6)) + 'px',
                                    zIndex: GROUP_Z
                                });
                            } else {
                                // Non-BEV: giữ nguyên như cũ
                                $group.css({
                                    position: 'absolute',
                                    left: pt.x,
                                    top: pt.y,
                                    transform: cfg.transform,   // canh theo góc tư
                                    display: 'flex',
                                    flexDirection: cfg.dir,
                                    justifyContent: cfg.justify,
                                    alignItems: cfg.align,
                                    flexWrap: 'wrap',
                                    gap: GROUP_GAP + 'px',
                                    padding: GROUP_PAD + 'px',
                                    // Giới hạn để không tràn bbox
                                    maxWidth: Math.max(40, Math.floor(bbox.w * 0.6)) + 'px',
                                    maxHeight: Math.max(40, Math.floor(bbox.h * 0.6)) + 'px',
                                    zIndex: GROUP_Z
                                });
                            }

                            // thêm các tag vào group
                            items.forEach(({$el}) => $group.append($el));

                            wrap.append($group);
                        });
                    }
                    if (object.groupId != null) {
                        if (object.groupId.length != 0) {
                            let groupIds = "";
                            for (const groupId of object.groupId) {
                                groupIds += " grp_" + groupId;
                            }
                            object.groupIds = groupIds;
                            wrap.append(_common.template.parseObject("tmpl-tagObjectGroup", object));
                        }
                    }
                    let imageAngle = $(`.drawingImage[data-file-index=${fileIndex}]`).attr("data-file-rotation");
                    // 이미지가 회전되어 있을 때 팝업태그의 위치를 변경해주기 위해
                    if (imageAngle != 0) {
                        page.fn.drawing.rotatePopupTag(fileIndex, imageAngle, object, wrap);
                    } else {
                        wrap.css("transform", `rotate(${imageAngle * -1}deg)`);
                    }

                    if (object.objectType == page.constants.drawType.polyline || object.objectType == page.constants.drawType.pointPolyline) {
                        page.fn.data.castLocationToObject(object);
                        // log.info(object, "polyline");
                        for (let i = 0; i < object.location.length; i++) {
                            let data = object.location[i][3];
                            if (_common.isNotEmpty(data) && _common.isNotEmpty(data.tags)) {
                                log.info(data.tags, "point tags");
                                let image = page.fn.data.getImageOriginalSize(fileIndex);
                                let cx = object.location[i][0] * image.scale;
                                let cy = object.location[i][1] * image.scale;
                                let wrapP = $(_common.template.parseObject("tmpl-wrapPointTag", {
                                    objectId: object.objectId
                                    , pointIndex: i
                                }));
                                $(".wrapImageArea[data-file-index='" + fileIndex + "']").append(wrapP);
                                wrapP.css("top", cy).css("left", cx);

                                let keys = Object.keys(data.tags);
                                for (let j = 0; j < keys.length; j++) {
                                    let key = keys[j];
                                    let ptId = "tagPnt" + i + "_" + j;
                                    let t = JSON.parse(JSON.stringify(page.fn.data.getConstantsTag(key)));
                                    t.val = data.tags[key];
                                    t.tagId = key;
                                    t.objectTagId = ptId;
                                    t.tagValueName = page.fn.data.getTagValueName(t);
                                    t.objectId = object.objectId;
                                    t.orderSeq = "#" + object.objectOrder + "-" + (i + 1);
                                    let cc = page.fn.data.getTagValueColor(t);
                                    wrapP.append(_common.template.parseObject("tmpl-tag", t));
                                    if (cc != null) {
                                        $("#tag_" + t.objectId + "_" + ptId).css("background-color", cc);
                                    }
                                }
                            } else {
                                log.info("no have point tag");
                            }
                        }
                    }
                    if (page.data.userSetting.isViewTags != "false") {
                    } else {
                        if (page.data.userSetting.objectTooltip == "on" && fileData && fileData.objectList) {
                            fileData.objectList.forEach(function (object) {
                                if (page.data.userSetting.objectTooltip == "on") {
                                    $(".draw-object[objectId='" + object.objectId + "']").attr("title", "[#" + object.objectOrder + ":" + object.className + "]");
                                } else {
                                    $(".draw-object[objectId='" + object.objectId + "']").attr("title", null);
                                }
                            });
                        }
                    }
                }
            } catch (E) {
                page.fn.data.deleteObject(fileIndex, object.objectId);
                log.error(E, "page.fn.drawing.resetPopupTag")
            }
        })
    }
    if (page.data.userSetting.isViewTags == "half") {
        $(".data_tag").hide();
        // $(".wrapObjectTag").hide();
        let selectedObjectLi = $("#rootObjectList li.on");
        if (selectedObjectLi.length > 0) {
            let objectId = selectedObjectLi.attr("objectId");
            if (page.config.toggleVisibleAllObject) {
                $("#wrapObjectTag_" + objectId).show();
                $("#wrapObjectTag_" + objectId).children().show();
            }
        }
    } else if (page.data.userSetting.isViewTags == "false") {
        $(".data_tag").hide();
        // $(".wrapObjectTag").hide();
    } else {
        if (page.config.toggleVisibleAllObject) {
            $(".data_tag").show();
        } else {
            $(".data_tag").hide();
        }
    }

    page.fn.initTooltip("[title]");

    if (page.data.userSetting.isViewObjectGroup == "half") {
        $(".TAG_group").hide();
        $('button[data-button-type="grpVisible"]').each(function (i, o) {
            if ($(o).text() == "visibility") {
                $(".TAG_group.grp_" + $(o).attr("data-groupId")).show();
            }
        });
    } else if (page.data.userSetting.isViewObjectGroup == "true") {
        $(".TAG_group").show();
    } else {
        $(".TAG_group").hide();
    }
    $(".button-toggle-visible.visible-off").each(function (i, o) {
        log.info($(o), "view-off object");
        $(".data_tag[objectId='" + $(o).attr("objectId") + "']").hide();
        $(".TAG_group[objectId='" + $(o).attr("objectId") + "']").hide();
    });
    if ($(".objectGroupRoot.on").length > 0) {
        page.fn.drawing.highlightGroupObject($(".objectGroupRoot.on").attr("groupId"), fileIndex)
    }
    log.info(Date.now() - start, "finished, page.fn.drawing.resetPopupTag");
}

page.fn.drawing.changeRotateOfBBOX = function (o, rChange) {
    try {
        if (o && o.isBevBox === true) return;
    } catch (_) {
    }
    let isValid = false;
    let r = 0;
    if (o.objectType == page.constants.drawType.rectangle) {
        if (o.location.length == 2) {
            o.location.push([0, getUUID()]);
        } else if (o.location.length > 2) {
            r = o.location[2][0];
        }
        r = r + rChange;
        o.location[2][0] = r;
        isValid = true;
    } else if (o.objectType == page.constants.drawType.rectangle4p) {
        if (o.location.length == 4) {
            o.location.push([0, getUUID()]);
        } else if (o.location.length > 4) {
            if (o.location[4][1] == 0 || typeof (o.location[4][1]) == "string") {
                r = o.location[4][0];
            }
        }
        r = r + rChange;
        o.location[4][0] = r;
        isValid = true;
    }
    if (isValid) {
        r = page.fn.drawing.restoreRad(r);
        if (o.objectType == page.constants.drawType.rectangle4p && o.location.length > 4) {
            o.location[4][0] = r;
        } else if (o.objectType == page.constants.drawType.rectangle && o.location.length > 2) {
            o.location[2][0] = r;
        }
        o.objectLocation = JSON.stringify(o.location);
        $("g[objectId='" + o.objectId + "']").css("transform", "rotate(" + r + "deg)");
        //log.info(o.location, "page.fn.drawing.changeRotateOfBBOX, rChange=" + rChange);
        if (r != 0) {
            let hiddenList = [1, 3, 6, 8];
            hiddenList.forEach(function (idx) {
                $('circle[objectId="' + o.objectId + '"][pointNum="' + idx + '"]')
                    .prop("style", "fill-opacity:0;stroke-opacity:0;");
            });
        } else {
            let hiddenList = [1, 3, 6, 8];
            hiddenList.forEach(function (idx) {
                $('circle[objectId="' + o.objectId + '"][pointNum="' + idx + '"]')
                    .prop("style", null);
            });
        }
    }
}
page.fn.drawing.getAbsolutePosition = function (objSelector, scale) {
    // log.info(scale, "page.fn.drawing.getAbsolutePosition, " + objSelector);
    let r = {x: 0, y: 0, width: 0, height: 0, top: 0, left: 0};
    if ($(objSelector).length > 0) {
        let pos = JSON.parse(JSON.stringify($(objSelector).get(0).getBoundingClientRect()));
        r.x = pos.x;
        r.y = pos.y;
        r.width = pos.width;
        r.height = pos.height;
        r.top = pos.top;
        r.left = pos.left;
        return r;
    } else {
        log.warn("SVG Object is not exists!");
        return r;
    }
}
page.fn.drawing.restoreRad = function (r) {
    if (r > 180) {
        // log.info("convert rad");
        r = -180 + (r - 180);
    } else if (r <= -180) {
        // log.info("convert rad");
        r = 180 + (r + 180);
    }
    return r;
}
page.fn.drawing.limitMousePosition = function (num) {
    return Number.parseFloat(num.toFixed(page.data.task.dataDigit));
}
page.fn.drawing.cloneObject = function (objectSeletor) {
    let ori = $(objectSeletor);//;
    log.info(ori, "page.fn.drawing.cloneObject, " + objectSeletor);
    let cp = null;
    if (ori.prop("tagName") == "rect") {
        let style = ori.prop("style").cssText;
        if (_common.isEmpty(style)) {
            style = ori.parent().prop("style").cssText;
        }
        cp = $(document.createElementNS("http://www.w3.org/2000/svg", ori.prop("tagName")));
        cp.attr("x", ori.attr("x"));
        cp.attr("y", ori.attr("y"));
        cp.attr("width", ori.attr("width"));
        cp.attr("height", ori.attr("height"));
        cp.prop("style", style);
    }
    return cp;
}
page.fn.drawing.renderObjectPoint = function (fileIndex, objectId, isEffect, object) {
    if (_common.isEmpty(object)) {
        object = page.fn.data.getObject(fileIndex, objectId);
    } else {
        objectId = object.objectId;
    }
    if (_common.isEmpty(fileIndex)) {
        fileIndex = object.fileIndex;
    }
    // log.info(object, "page.fn.drawing.renderObjectPoint, object");
    if (_common.isNotEmpty(object)) {
        page.fn.data.unConvertObjectLocation(object);
        let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
        if (object.objectType == page.constants.drawType.rectangle) {
            if (object.location.length >= 2) {

                let x1 = Math.min(object.location[0][0], object.location[1][0]);
                let x2 = Math.max(object.location[0][0], object.location[1][0]);
                let y1 = Math.min(object.location[0][1], object.location[1][1]);
                let y2 = Math.max(object.location[0][1], object.location[1][1]);
                object.position = {
                    x1: x1
                    , x2: x2
                    , y1: y1
                    , y2: y2
                };
                $("#group_points_" + object.objectId).remove();
                let g;
                if ($("#group_points_" + object.objectId).length == 0) {
                    g = document.createElementNS("http://www.w3.org/2000/svg", 'g');
                    g.setAttribute("id", "group_points_" + object.objectId);
                    g.setAttribute("class", "canBeRotate");
                    g.setAttribute("objectId", object.objectId);
                    svg.append(g);
                } else {
                    g = $("#group_points_" + object.objectId).get(0);
                }

                // add Rotation Controller, 22-11-18
                if (page.constants.bboxRotateYn == "Y") {
                    let crx = (x1 + ((x2 - x1) / 2));
                    let cry = (y1 - 30);

                    let p = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
                    $(p).attr("points", "" + crx + "," + y1 + " " + crx + "," + cry);
                    $(p).attr("class", "draw-point set-rot CLASS_" + object.classId);
                    $(p).attr("objectId", object.objectId);
                    $(p).attr("rot-type", "visible");
                    page.dom.svg.append(p);
                    $(g).append(p);

                    p = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
                    $(p).attr("points", "" + crx + "," + y2 + " " + crx + "," + (y2 + 30));
                    $(p).attr("objectId", object.objectId);
                    $(p).attr("class", "draw-point set-rot");
                    $(p).attr("rot-type", "hidden");
                    page.dom.svg.append(p);
                    $(g).append(p);

                    let cr = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
                    $(cr).attr("cx", crx);
                    $(cr).attr("cy", cry);
                    $(cr).attr("class", "rotationCenterPoint draw-point drawing-points set-rot");
                    $(cr).attr("pointNum", "0");
                    $(cr).attr("rot", "Y");
                    $(cr).attr("rot-type", "visible");
                    $(cr).attr("objectId", object.objectId);
                    $(g).append(cr);

                    cry = (y2 + 30);
                    cr = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
                    $(cr).attr("cx", crx);
                    $(cr).attr("cy", cry);
                    $(cr).attr("pointNum", "-1");
                    $(cr).attr("class", "hidden draw-point set-rot");
                    $(cr).attr("rot-type", "hidden");
                    $(cr).attr("objectId", object.objectId);
                    $(g).append(cr);
                }

                let imageAngle = $(`.drawingImage[data-file-index=${fileIndex}]`).attr("data-file-rotation");
                for (let i = 0; i < 8; i++) {
                    let c = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
                    let addClass = "";
                    if (i == 0) {
                        c.setAttribute("cx", x1);
                        c.setAttribute("cy", y1);
                        c.setAttribute("group_x1", "true");
                        c.setAttribute("group_x2", "false");
                        c.setAttribute("group_y1", "true");
                        c.setAttribute("group_y2", "false");
                    } else if (i == 1) {
                        c.setAttribute("cx", x1 + ((x2 - x1) / 2));
                        c.setAttribute("cy", y1);
                        c.setAttribute("group_x1", "false");
                        c.setAttribute("group_x2", "false");
                        c.setAttribute("group_y1", "true");
                        c.setAttribute("group_y2", "false");
                        // 이미지가 회전된 상태에서 B.box 오브젝트 수정 시 가로, 세로 축에 해당되는 포인트의 마우스 모양을 바꿔주기 위해
                        if (imageAngle == 90 || imageAngle == 270) {
                            addClass = "vertical";
                        } else {
                            addClass = "horizon";
                        }
                    } else if (i == 2) {
                        c.setAttribute("cx", x2);
                        c.setAttribute("cy", y1);
                        c.setAttribute("group_x1", "false");
                        c.setAttribute("group_x2", "true");
                        c.setAttribute("group_y1", "true");
                        c.setAttribute("group_y2", "false");
                    } else if (i == 3) {
                        c.setAttribute("cx", x1);
                        c.setAttribute("cy", y1 + ((y2 - y1) / 2));
                        c.setAttribute("group_x1", "true");
                        c.setAttribute("group_x2", "false");
                        c.setAttribute("group_y1", "false");
                        c.setAttribute("group_y2", "false");
                        if (imageAngle == 90 || imageAngle == 270) {
                            addClass = "horizon";
                        } else {
                            addClass = "vertical";
                        }
                    } else if (i == 4) {
                        c.setAttribute("cx", x2);
                        c.setAttribute("cy", y1 + ((y2 - y1) / 2));
                        c.setAttribute("group_x1", "false");
                        c.setAttribute("group_x2", "true");
                        c.setAttribute("group_y1", "false");
                        c.setAttribute("group_y2", "false");
                        if (imageAngle == 90 || imageAngle == 270) {
                            addClass = "horizon";
                        } else {
                            addClass = "vertical";
                        }
                    } else if (i == 5) {
                        c.setAttribute("cx", x1);
                        c.setAttribute("cy", y2);
                        c.setAttribute("group_x1", "true");
                        c.setAttribute("group_x2", "false");
                        c.setAttribute("group_y1", "false");
                        c.setAttribute("group_y2", "true");
                    } else if (i == 6) {
                        c.setAttribute("cx", x1 + ((x2 - x1) / 2));
                        c.setAttribute("cy", y2);
                        c.setAttribute("group_x1", "false");
                        c.setAttribute("group_x2", "false");
                        c.setAttribute("group_y1", "false");
                        c.setAttribute("group_y2", "true");
                        if (imageAngle == 90 || imageAngle == 270) {
                            addClass = "vertical";
                        } else {
                            addClass = "horizon";
                        }
                    } else if (i == 7) {
                        c.setAttribute("cx", x2);
                        c.setAttribute("cy", y2);
                        c.setAttribute("group_x1", "false");
                        c.setAttribute("group_x2", "true");
                        c.setAttribute("group_y1", "false");
                        c.setAttribute("group_y2", "true");
                    }
                    c.setAttribute("class", addClass + " draw-point CLS_" + object.classId);
                    c.setAttribute("objectId", object.objectId);
                    c.setAttribute("index", i);
                    c.setAttribute("pointNum", (i + 1));
                    c.setAttribute("id", (object.objectId + "_" + i));
                    if ($("#" + $(c).attr("id")).length == 0) {
                        page.dom.svg.append(c);
                        $(g).append(c);
                        $(c).addClass("drawing-points").addClass("draw-point");
                    } else {
                        let cc = $("#" + $(c).attr("id"));
                        cc.attr("cx", $(c).attr("cx"));
                        cc.attr("cy", $(c).attr("cy"));
                    }
                }
                if (object.location.length >= 3) {
                    object.rotation = object.location[2][0];
                    page.fn.drawing.changeRotateOfBBOX(object, 0);
                    if (page.data.drawing.object.rotation != 0) {
                        let hiddenList = [1, 3, 6, 8];
                        hiddenList.forEach(function (idx) {
                            $('circle[pointNum="' + idx + '"][objectId="' + object.objectId + '"]').prop("style", "fill-opacity:0;stroke-opacity:0;");
                        });
                    } else {
                        let hiddenList = [1, 3, 6, 8];
                        hiddenList.forEach(function (idx) {
                            $('circle[pointNum="' + idx + '"][objectId="' + object.objectId + '"]').prop("style", null);
                        });
                    }
                }
            }
        } else if (object.objectType === page.constants.drawType.drawVISBox) {
            if (object.location.length >= 2) {
                const x1 = Math.min(object.location[0][0], object.location[1][0]);
                const x2 = Math.max(object.location[0][0], object.location[1][0]);
                const y1 = Math.min(object.location[0][1], object.location[1][1]);
                const y2 = Math.max(object.location[0][1], object.location[1][1]);
                const centerX = x1 + ((x2 - x1) / 2);
                const centerY = y1 + ((y2 - y1) / 2);

                // Tạo chấm đỏ cho P1, P2, P3 (nếu có)
                $("#group_points_" + object.objectId).remove();
                let g = document.createElementNS("http://www.w3.org/2000/svg", 'g');
                g.setAttribute("id", "group_points_" + object.objectId);
                g.setAttribute("class", "canBeRotate");
                g.setAttribute("objectId", object.objectId);
                svg.append(g);

                // Tạo chấm đỏ cho các điểm P1, P2, P3
                for (let i = 0; i < Math.min(3, object.location.length); i++) {
                    let c = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
                    c.setAttribute("cx", object.location[i][0]);
                    c.setAttribute("cy", object.location[i][1]);
                    c.setAttribute("class", "draw-point vis-box-point CLS_" + object.classId);
                    c.setAttribute("objectId", object.objectId);
                    c.setAttribute("index", String(i));
                    c.setAttribute("pointNum", (i + 1));
                    c.setAttribute("id", "C_" + object.objectId + "_" + i);
                    c.setAttribute("style", "fill:#ff4d4f;stroke:#ff4d4f;");
                    page.dom.svg.append(c);
                    $(g).append(c);
                }

                // Tạo các handle màu vàng (giữ nguyên logic cũ)
                const handleList = [
                    {type: 'edge-top', cx: centerX, cy: y1, cls: 'horizon'},
                    {type: 'edge-left', cx: x1, cy: centerY, cls: 'vertical'},
                    {type: 'edge-right', cx: x2, cy: centerY, cls: 'vertical'},
                    {type: 'edge-bottom', cx: centerX, cy: y2, cls: 'horizon'}
                ];
                if (object.location.length >= 3) {
                    const p3 = object.location[2];
                    const p3Y = Math.max(y1, Math.min(y2, centerY));
                    handleList.push({type: 'p3-center', cx: p3[0], cy: p3Y, cls: 'vis-p3'});
                }
                const groupId = "group_points_" + object.objectId + "_handles";
                $("#" + groupId).remove();
                let gHandles = document.createElementNS("http://www.w3.org/2000/svg", 'g');
                gHandles.setAttribute("id", groupId);
                gHandles.setAttribute("class", "visbox-handle-group");
                gHandles.setAttribute("objectId", object.objectId);
                svg.append(gHandles);
                handleList.forEach(function (def) {
                    const handleId = object.objectId + "_vis_" + def.type;
                    let circle = $("#" + handleId);
                    const classes = (def.cls ? def.cls + " " : "") + "draw-point drawing-points CLS_" + object.classId;
                    if (circle.length === 0) {
                        const c = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
                        $(c)
                            .attr("id", handleId)
                            .attr("objectId", object.objectId)
                            .attr("data-vis-handle", def.type)
                            .attr("index", "-1")
                            .attr("pointNum", def.type)
                            .attr("class", classes);
                        page.dom.svg.append(c);
                        $(gHandles).append(c);
                        circle = $(c);
                    } else {
                        $(gHandles).append(circle);
                        circle.attr("class", classes);
                    }
                    circle.attr("cx", def.cx).attr("cy", def.cy);
                });
            }

        } else if (object.objectType === page.constants.drawType.drawCube2D) {
            if (object.location.length >= 2) {

                let x1 = Math.min(object.location[0][0], object.location[1][0]);
                let x2 = Math.max(object.location[0][0], object.location[1][0]);
                let y1 = Math.min(object.location[0][1], object.location[1][1]);
                let y2 = Math.max(object.location[0][1], object.location[1][1]);
                object.position = {
                    x1: x1
                    , x2: x2
                    , y1: y1
                    , y2: y2
                };
                $("#group_points_" + object.objectId).remove();
                let g;
                if ($("#group_points_" + object.objectId).length == 0) {
                    g = document.createElementNS("http://www.w3.org/2000/svg", 'g');
                    g.setAttribute("id", "group_points_" + object.objectId);
                    g.setAttribute("class", "canBeRotate");
                    g.setAttribute("objectId", object.objectId);
                    svg.append(g);
                } else {
                    g = $("#group_points_" + object.objectId).get(0);
                }

                // add Rotation Controller, 22-11-18
                if (page.constants.bboxRotateYn == "Y") {
                    let crx = (x1 + ((x2 - x1) / 2));
                    let cry = (y1 - 30);

                    let p = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
                    $(p).attr("points", "" + crx + "," + y1 + " " + crx + "," + cry);
                    $(p).attr("class", "draw-point set-rot CLASS_" + object.classId);
                    $(p).attr("objectId", object.objectId);
                    $(p).attr("rot-type", "visible");
                    page.dom.svg.append(p);
                    $(g).append(p);

                    p = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
                    $(p).attr("points", "" + crx + "," + y2 + " " + crx + "," + (y2 + 30));
                    $(p).attr("objectId", object.objectId);
                    $(p).attr("class", "draw-point set-rot");
                    $(p).attr("rot-type", "hidden");
                    page.dom.svg.append(p);
                    $(g).append(p);

                    let cr = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
                    $(cr).attr("cx", crx);
                    $(cr).attr("cy", cry);
                    $(cr).attr("class", "rotationCenterPoint draw-point drawing-points set-rot");
                    $(cr).attr("pointNum", "0");
                    $(cr).attr("rot", "Y");
                    $(cr).attr("rot-type", "visible");
                    $(cr).attr("objectId", object.objectId);
                    $(g).append(cr);

                    cry = (y2 + 30);
                    cr = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
                    $(cr).attr("cx", crx);
                    $(cr).attr("cy", cry);
                    $(cr).attr("pointNum", "-1");
                    $(cr).attr("class", "hidden draw-point set-rot");
                    $(cr).attr("rot-type", "hidden");
                    $(cr).attr("objectId", object.objectId);
                    $(g).append(cr);
                }

                let imageAngle = $(`.drawingImage[data-file-index=${fileIndex}]`).attr("data-file-rotation");
                for (let i = 0; i < 8; i++) {
                    let c = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
                    let addClass = "";
                    if (i == 0) {
                        c.setAttribute("cx", x1);
                        c.setAttribute("cy", y1);
                        c.setAttribute("group_x1", "true");
                        c.setAttribute("group_x2", "false");
                        c.setAttribute("group_y1", "true");
                        c.setAttribute("group_y2", "false");
                    } else if (i == 1) {
                        c.setAttribute("cx", x1 + ((x2 - x1) / 2));
                        c.setAttribute("cy", y1);
                        c.setAttribute("group_x1", "false");
                        c.setAttribute("group_x2", "false");
                        c.setAttribute("group_y1", "true");
                        c.setAttribute("group_y2", "false");
                        // 이미지가 회전된 상태에서 B.box 오브젝트 수정 시 가로, 세로 축에 해당되는 포인트의 마우스 모양을 바꿔주기 위해
                        if (imageAngle == 90 || imageAngle == 270) {
                            addClass = "vertical";
                        } else {
                            addClass = "horizon";
                        }
                    } else if (i == 2) {
                        c.setAttribute("cx", x2);
                        c.setAttribute("cy", y1);
                        c.setAttribute("group_x1", "false");
                        c.setAttribute("group_x2", "true");
                        c.setAttribute("group_y1", "true");
                        c.setAttribute("group_y2", "false");
                    } else if (i == 3) {
                        c.setAttribute("cx", x1);
                        c.setAttribute("cy", y1 + ((y2 - y1) / 2));
                        c.setAttribute("group_x1", "true");
                        c.setAttribute("group_x2", "false");
                        c.setAttribute("group_y1", "false");
                        c.setAttribute("group_y2", "false");
                        if (imageAngle == 90 || imageAngle == 270) {
                            addClass = "horizon";
                        } else {
                            addClass = "vertical";
                        }
                    } else if (i == 4) {
                        c.setAttribute("cx", x2);
                        c.setAttribute("cy", y1 + ((y2 - y1) / 2));
                        c.setAttribute("group_x1", "false");
                        c.setAttribute("group_x2", "true");
                        c.setAttribute("group_y1", "false");
                        c.setAttribute("group_y2", "false");
                        if (imageAngle == 90 || imageAngle == 270) {
                            addClass = "horizon";
                        } else {
                            addClass = "vertical";
                        }
                    } else if (i == 5) {
                        c.setAttribute("cx", x1);
                        c.setAttribute("cy", y2);
                        c.setAttribute("group_x1", "true");
                        c.setAttribute("group_x2", "false");
                        c.setAttribute("group_y1", "false");
                        c.setAttribute("group_y2", "true");
                    } else if (i == 6) {
                        c.setAttribute("cx", x1 + ((x2 - x1) / 2));
                        c.setAttribute("cy", y2);
                        c.setAttribute("group_x1", "false");
                        c.setAttribute("group_x2", "false");
                        c.setAttribute("group_y1", "false");
                        c.setAttribute("group_y2", "true");
                        if (imageAngle == 90 || imageAngle == 270) {
                            addClass = "vertical";
                        } else {
                            addClass = "horizon";
                        }
                    } else if (i == 7) {
                        c.setAttribute("cx", x2);
                        c.setAttribute("cy", y2);
                        c.setAttribute("group_x1", "false");
                        c.setAttribute("group_x2", "true");
                        c.setAttribute("group_y1", "false");
                        c.setAttribute("group_y2", "true");
                    }
                    c.setAttribute("class", addClass + " draw-point CLS_" + object.classId);
                    c.setAttribute("objectId", object.objectId);
                    c.setAttribute("index", i);
                    c.setAttribute("pointNum", (i + 1));
                    c.setAttribute("id", (object.objectId + "_" + i));
                    if ($("#" + $(c).attr("id")).length == 0) {
                        page.dom.svg.append(c);
                        $(g).append(c);
                        $(c).addClass("drawing-points").addClass("draw-point");
                    } else {
                        let cc = $("#" + $(c).attr("id"));
                        cc.attr("cx", $(c).attr("cx"));
                        cc.attr("cy", $(c).attr("cy"));
                    }
                }
                if (object.location.length >= 3) {
                    object.rotation = object.location[2][0];
                    page.fn.drawing.changeRotateOfBBOX(object, 0);
                    if (page.data.drawing.object.rotation != 0) {
                        let hiddenList = [1, 3, 6, 8];
                        hiddenList.forEach(function (idx) {
                            $('circle[pointNum="' + idx + '"][objectId="' + object.objectId + '"]').prop("style", "fill-opacity:0;stroke-opacity:0;");
                        });
                    } else {
                        let hiddenList = [1, 3, 6, 8];
                        hiddenList.forEach(function (idx) {
                            $('circle[pointNum="' + idx + '"][objectId="' + object.objectId + '"]').prop("style", null);
                        });
                    }
                }
            }
        } else if (object.objectType === page.constants.drawType.drawCube2DFront) {
            if (object.location.length >= 2) {

                let x1 = Math.min(object.location[0][0], object.location[1][0]);
                let x2 = Math.max(object.location[0][0], object.location[1][0]);
                let y1 = Math.min(object.location[0][1], object.location[1][1]);
                let y2 = Math.max(object.location[0][1], object.location[1][1]);
                object.position = {
                    x1: x1
                    , x2: x2
                    , y1: y1
                    , y2: y2
                };
                $("#group_points_" + object.objectId).remove();
                let g;
                if ($("#group_points_" + object.objectId).length == 0) {
                    g = document.createElementNS("http://www.w3.org/2000/svg", 'g');
                    g.setAttribute("id", "group_points_" + object.objectId);
                    g.setAttribute("class", "canBeRotate");
                    g.setAttribute("objectId", object.objectId);
                    svg.append(g);
                } else {
                    g = $("#group_points_" + object.objectId).get(0);
                }

                // add Rotation Controller, 22-11-18
                if (page.constants.bboxRotateYn == "Y") {
                    let crx = (x1 + ((x2 - x1) / 2));
                    let cry = (y1 - 30);

                    let p = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
                    $(p).attr("points", "" + crx + "," + y1 + " " + crx + "," + cry);
                    $(p).attr("class", "draw-point set-rot CLASS_" + object.classId);
                    $(p).attr("objectId", object.objectId);
                    $(p).attr("rot-type", "visible");
                    page.dom.svg.append(p);
                    $(g).append(p);

                    p = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
                    $(p).attr("points", "" + crx + "," + y2 + " " + crx + "," + (y2 + 30));
                    $(p).attr("objectId", object.objectId);
                    $(p).attr("class", "draw-point set-rot");
                    $(p).attr("rot-type", "hidden");
                    page.dom.svg.append(p);
                    $(g).append(p);

                    let cr = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
                    $(cr).attr("cx", crx);
                    $(cr).attr("cy", cry);
                    $(cr).attr("class", "rotationCenterPoint draw-point drawing-points set-rot");
                    $(cr).attr("pointNum", "0");
                    $(cr).attr("rot", "Y");
                    $(cr).attr("rot-type", "visible");
                    $(cr).attr("objectId", object.objectId);
                    $(g).append(cr);

                    cry = (y2 + 30);
                    cr = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
                    $(cr).attr("cx", crx);
                    $(cr).attr("cy", cry);
                    $(cr).attr("pointNum", "-1");
                    $(cr).attr("class", "hidden draw-point set-rot");
                    $(cr).attr("rot-type", "hidden");
                    $(cr).attr("objectId", object.objectId);
                    $(g).append(cr);
                }

                let imageAngle = $(`.drawingImage[data-file-index=${fileIndex}]`).attr("data-file-rotation");
                for (let i = 0; i < 8; i++) {
                    let c = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
                    let addClass = "";
                    if (i == 0) {
                        c.setAttribute("cx", x1);
                        c.setAttribute("cy", y1);
                        c.setAttribute("group_x1", "true");
                        c.setAttribute("group_x2", "false");
                        c.setAttribute("group_y1", "true");
                        c.setAttribute("group_y2", "false");
                    } else if (i == 1) {
                        c.setAttribute("cx", x1 + ((x2 - x1) / 2));
                        c.setAttribute("cy", y1);
                        c.setAttribute("group_x1", "false");
                        c.setAttribute("group_x2", "false");
                        c.setAttribute("group_y1", "true");
                        c.setAttribute("group_y2", "false");
                        // 이미지가 회전된 상태에서 B.box 오브젝트 수정 시 가로, 세로 축에 해당되는 포인트의 마우스 모양을 바꿔주기 위해
                        if (imageAngle == 90 || imageAngle == 270) {
                            addClass = "vertical";
                        } else {
                            addClass = "horizon";
                        }
                    } else if (i == 2) {
                        c.setAttribute("cx", x2);
                        c.setAttribute("cy", y1);
                        c.setAttribute("group_x1", "false");
                        c.setAttribute("group_x2", "true");
                        c.setAttribute("group_y1", "true");
                        c.setAttribute("group_y2", "false");
                    } else if (i == 3) {
                        c.setAttribute("cx", x1);
                        c.setAttribute("cy", y1 + ((y2 - y1) / 2));
                        c.setAttribute("group_x1", "true");
                        c.setAttribute("group_x2", "false");
                        c.setAttribute("group_y1", "false");
                        c.setAttribute("group_y2", "false");
                        if (imageAngle == 90 || imageAngle == 270) {
                            addClass = "horizon";
                        } else {
                            addClass = "vertical";
                        }
                    } else if (i == 4) {
                        c.setAttribute("cx", x2);
                        c.setAttribute("cy", y1 + ((y2 - y1) / 2));
                        c.setAttribute("group_x1", "false");
                        c.setAttribute("group_x2", "true");
                        c.setAttribute("group_y1", "false");
                        c.setAttribute("group_y2", "false");
                        if (imageAngle == 90 || imageAngle == 270) {
                            addClass = "horizon";
                        } else {
                            addClass = "vertical";
                        }
                    } else if (i == 5) {
                        c.setAttribute("cx", x1);
                        c.setAttribute("cy", y2);
                        c.setAttribute("group_x1", "true");
                        c.setAttribute("group_x2", "false");
                        c.setAttribute("group_y1", "false");
                        c.setAttribute("group_y2", "true");
                    } else if (i == 6) {
                        c.setAttribute("cx", x1 + ((x2 - x1) / 2));
                        c.setAttribute("cy", y2);
                        c.setAttribute("group_x1", "false");
                        c.setAttribute("group_x2", "false");
                        c.setAttribute("group_y1", "false");
                        c.setAttribute("group_y2", "true");
                        if (imageAngle == 90 || imageAngle == 270) {
                            addClass = "vertical";
                        } else {
                            addClass = "horizon";
                        }
                    } else if (i == 7) {
                        c.setAttribute("cx", x2);
                        c.setAttribute("cy", y2);
                        c.setAttribute("group_x1", "false");
                        c.setAttribute("group_x2", "true");
                        c.setAttribute("group_y1", "false");
                        c.setAttribute("group_y2", "true");
                    }
                    c.setAttribute("class", addClass + " draw-point CLS_" + object.classId);
                    c.setAttribute("objectId", object.objectId);
                    c.setAttribute("index", i);
                    c.setAttribute("pointNum", (i + 1));
                    c.setAttribute("id", (object.objectId + "_" + i));
                    if ($("#" + $(c).attr("id")).length == 0) {
                        page.dom.svg.append(c);
                        $(g).append(c);
                        $(c).addClass("drawing-points").addClass("draw-point");
                    } else {
                        let cc = $("#" + $(c).attr("id"));
                        cc.attr("cx", $(c).attr("cx"));
                        cc.attr("cy", $(c).attr("cy"));
                    }
                }
                if (object.location.length >= 3) {
                    object.rotation = object.location[2][0];
                    page.fn.drawing.changeRotateOfBBOX(object, 0);
                    if (page.data.drawing.object.rotation != 0) {
                        let hiddenList = [1, 3, 6, 8];
                        hiddenList.forEach(function (idx) {
                            $('circle[pointNum="' + idx + '"][objectId="' + object.objectId + '"]').prop("style", "fill-opacity:0;stroke-opacity:0;");
                        });
                    } else {
                        let hiddenList = [1, 3, 6, 8];
                        hiddenList.forEach(function (idx) {
                            $('circle[pointNum="' + idx + '"][objectId="' + object.objectId + '"]').prop("style", null);
                        });
                    }
                }
            }
        } else if (object.objectType === page.constants.drawType.draw6PointCube) {

            // Xóa các điểm vẽ cũ của object
            $(`svg circle.draw-point[objectId='${object.objectId}']`).remove();

            const svg = $(`svg.drawingSVG[data-file-index='${object.fileIndex}']`);
            const g = $("g[objectId='" + object.objectId + "']");

            // vẽ box khi select class và xoá point của 6pcube khác
            if ([6, 8].includes(object.location.length ?? 0) && !object.objectId.includes('TEMP_')) {
                //

                // 🔹 Gọi hàm để cập nhật màu và có thể vẽ lại đè lên
                updateShapeColors(svg, g, object, page.constants.color6PointCube, true);
                return
            }


            // copy để thao tác trên arr copy
            const locationTemp = [...(object.location ?? [])];

            const [x1, y1, v1, id1] = object.location[0]; // đường chéo top left
            const [x2, y2, v2, id2] = object.location[1] ?? []; // đường chéo bottom right
            const [x7, y7, v7, id7] = object.location[6] ?? []; // đường chéo top right
            const [x8, y8, v8, id8] = object.location[7] ?? []; // đường chéo bottom left


            if (object.allPointListOfTheBox) {
                if (object.allPointListOfTheBox.p7 && object.allPointListOfTheBox.p8) {
                    object.allPointListOfTheBox.p7.x = x7;
                    object.allPointListOfTheBox.p7.y = y7;
                    object.allPointListOfTheBox.p7.v = v7;
                    object.allPointListOfTheBox.p7.id = id7;
                    object.allPointListOfTheBox.p8.x = x8;
                    object.allPointListOfTheBox.p8.y = y8
                    object.allPointListOfTheBox.p8.v = v8
                    object.allPointListOfTheBox.p8.id = id8;
                }
            } else {
                let allPointListOfTheBox = {
                    p1: {x: 0, y: 0, v: 1, id: 'id1'},              // top-left
                    p2: {x: 1, y: 1, v: 1, id: 'id2'},              // bottom-right
                    p3: {x: 2, y: 2, v: 1, id: 'id3'},              // p3
                    p4: {x: 3, y: 3, v: 1, id: 'id4'},              // p4
                    p5: {x: 4, y: 4, v: 1, id: 'id5'},              // p5
                    p6: {x: 5, y: 5, v: 1, id: 'id6'},              // p6
                    p7: {x: 6, y: 6, v: 1, id: 'id7'},          // top-right (giả lập)
                    p8: {x: 7, y: 7, v: 1, id: 'id8'}           // bottom-left (giả lập)
                };
                object.allPointListOfTheBox = allPointListOfTheBox;
            }

            // Tính các cạnh của hộp
            const left = Math.min(x1, x2);
            const right = Math.max(x1, x2);
            const top = Math.min(y1, y2);
            const bottom = Math.max(y1, y2);


            switch (object.location.length) {
                case 2: {
                    const rect = g.find("rect");
                    const style = rect.attr("style") || "";
                    if (style.includes("fill: none")) {
                        // Xoá fill: none khỏi style
                        const newStyle = style.replace(/fill:\s*none\s*;?/gi, "").trim();
                        rect.attr("style", newStyle);
                    }


                    object.allPointListOfTheBox.p1.x = object.location[0][0];
                    object.allPointListOfTheBox.p1.y = object.location[0][1];
                    object.allPointListOfTheBox.p1.v = object.location[0][2];
                    object.allPointListOfTheBox.p1.id = object.location[0][3];

                    object.allPointListOfTheBox.p2.x = object.location[1][0];
                    object.allPointListOfTheBox.p2.y = object.location[1][1];
                    object.allPointListOfTheBox.p2.v = object.location[1][2];
                    object.allPointListOfTheBox.p2.id = object.location[1][3];
                    break;
                }

                case 3: {
                    // TH2: Đã có 3 điểm, lấy điểm thứ 3 làm point3
                    const point3 = {x: object.location[2][0], y: object.location[2][1]};

                    // Lưu điểm này vào mảng các điểm bên cạnh hộp
                    object.pointsSide6pBox.push([point3.x, point3.y, getUUID()]);

                    object.allPointListOfTheBox.p3.x = point3.x;
                    object.allPointListOfTheBox.p3.y = point3.y;
                    object.allPointListOfTheBox.p3.v = object.location[2][2];
                    object.allPointListOfTheBox.p3.id = object.location[2][3];

                    // Vẽ đường kẻ dọc đi qua point3
                    drawLineThroughPoint(g, object, point3, "vertical", {
                        stroke: "blue",
                        strokeWidth: "3",
                        strokeDasharray: "10"
                    });
                    break;
                }

                case 4: {
                    // TH3: Có 4 điểm, lấy point4 là điểm thứ 4

                    const point4 = {x: object.location[3][0], y: object.location[3][1]};
                    object.pointsSide6pBox.push([point4.x, point4.y, getUUID()]);

                    object.allPointListOfTheBox.p4.x = point4.x;
                    object.allPointListOfTheBox.p4.y = point4.y;
                    object.allPointListOfTheBox.p4.v = object.location[3][2];
                    object.allPointListOfTheBox.p4.id = object.location[3][3];

                    $(`line[data-objectType="${object.objectType}"][objectId="${object.objectId}"]`).remove();

                    // Vẽ đường kẻ ngang đi qua point4
                    drawLineThroughPoint(g, object, point4, "horizontal", {
                        stroke: "blue",
                        strokeWidth: "3",
                        strokeDasharray: "10"
                    });
                    break;
                }

                case 5: {
                    // TH4: Có 5 điểm, lấy point5 là điểm thứ 5
                    const point3 = {x: object.location[2][0], y: object.location[2][1]};
                    const point5 = {x: object.location[4][0], y: object.location[4][1]};
                    object.pointsSide6pBox.push([point5.x, point5.y, getUUID()]);

                    // Tạo điểm tự động ở trung tâm cạnh dưới của box
                    const autoX = point3.x;
                    const autoY = bottom;

                    locationTemp.push([autoX, autoY, `psuedoPoint6`]);

                    object.allPointListOfTheBox.p5.x = point5.x;
                    object.allPointListOfTheBox.p5.y = point5.y;
                    object.allPointListOfTheBox.p5.v = object.location[4][2];
                    object.allPointListOfTheBox.p5.id = object.location[4][3];

                    $(`line[data-objectType="${object.objectType}"][objectId="${object.objectId}"]`).remove();

                    // Vẽ đường kẻ ngang đi qua point5
                    drawLineThroughPoint(g, object, point5, "horizontal", {
                        stroke: "blue",
                        strokeWidth: "3",
                        strokeDasharray: "10"
                    });
                    break;
                }

                case 8: {
                    // TH5: Có đủ 6 điểm, lấy point6 là điểm cuối cùng
                    console.log("page.render onsss");
                    const point6 = {x: object.location[5][0], y: object.location[5][1]};

                    // remove line và polygon lúc vẽ
                    $(`line[data-objectType="${object.objectType}"][objectId="${object.objectId}"]`).remove();
                    $(`polygon[data-objectType="${object.objectType}"][objectId="${object.objectId}"]`).remove();

                    if (object.pointsSide6pBox.length >= 4) {
                        object.pointsSide6pBox.pop();
                    }
                    object.pointsSide6pBox.push([point6.x, point6.y, getUUID()]);

                    object.allPointListOfTheBox.p6.x = point6.x;
                    object.allPointListOfTheBox.p6.y = point6.y;
                    object.allPointListOfTheBox.p6.v = object.location[5][2];
                    object.allPointListOfTheBox.p6.id = object.location[5][3];

                    console.log("object.pointsSide6pBox, length 6", object);

                    // 🔹 Gọi hàm để cập nhật màu và có thể vẽ lại đè lênd
                    updateShapeColors(svg, g, object, page.constants.color6PointCube, true);

                    return
                }


                default:
                    // Không làm gì nếu không khớp bất kỳ case nào ở trên
                    break;
            }
            if (object.location.length > 2)
                drawShapeFromPoints(g, object, {
                    stroke: "blue",
                    strokeWidth: "3",
                    strokeDasharray: "10" // Nét đứt dài hơn
                }, object.pointsSide6pBox);

            locationTemp.forEach((loc, index) => {
                const [xRaw, yRaw, v, pointId] = loc;
                const x = _common.nvl(xRaw, 0);
                const y = _common.nvl(yRaw, 0);

                let color = "";
                let fill = "";
                // đổ màu cho point
                if (index === 0 || index === 1) {
                    color = "#000000FF";
                    fill = "#2B2525FF";
                } else if (index === 2) {
                    color = "yellow";
                    fill = "#292B25FF";
                } else if (index === 3) {
                    color = "blue";
                    fill = "#292B25FF";
                } else if (index === 4) {
                    color = "red";
                    fill = "#292B25FF";
                } else if (index === 5) {
                    color = "green";
                    fill = "#292B25FF";
                }
                let style = `stroke: ${color} !important; fill: ${fill} !important; z-index: 9999 !important;`;
                const $circle = $(document.createElementNS("http://www.w3.org/2000/svg", 'circle'))
                    .attr({
                        cx: x,
                        cy: y,
                        class: `draw-point CLS_${object.classId} drawing-points`,
                        objectId: objectId,
                        "data-objectType": object.objectType,
                        index: index,
                        pointNum: index + 1,
                        id: pointId,
                        cursor: 'move',
                        style: style,
                        v: v
                    })

                // Nếu đây là pseudo point, thay đổi cách vẽ: ví dụ thiết lập màu fill khác.
                if (pointId?.includes("psuedoPoint")) {
                    $circle.addClass("pseudo-point");
                }


                page.dom.svg.append($circle[0]);
            });
        } else if (object.objectType === page.constants.drawType.drawBevBox4) {
            if (!object.location || object.location.length < 4) {
                // 1. Xóa tất cả các điểm vẽ cũ của đối tượng này để vẽ lại từ đầu
                $(`svg circle.draw-point[objectId='${object.objectId}']`).remove();

                // 2. Cần ít nhất 2 điểm (đường chéo) để xác định 4 góc
                if (!object.location || object.location.length < 2) {
                    return; // Thoát nếu không có đủ điểm
                }

                // 3. Lấy 2 điểm đầu tiên và tính toán tọa độ 4 góc của box
                const [pt1, pt2] = object.location;
                const left = Math.min(pt1[0], pt2[0]);
                const top = Math.min(pt1[1], pt2[1]);
                const right = Math.max(pt1[0], pt2[0]);
                const bottom = Math.max(pt1[1], pt2[1]);

                // Tạo một mảng chứa tọa độ của 4 góc
                const cornerPoints = [
                    {x: left, y: top},
                    {x: right, y: top},
                    {x: right, y: bottom},
                    {x: left, y: bottom}
                ];

                // 4. Vẽ 4 điểm (hình tròn) tại 4 góc đã xác định
                cornerPoints.forEach((point, index) => {
                    const $circle = $(document.createElementNS("http://www.w3.org/2000/svg", 'circle'))
                        .attr({
                            cx: point.x,
                            cy: point.y,
                            class: `draw-point CLS_${object.classId} drawing-points`,
                            objectId: object.objectId,
                            "data-objectType": object.objectType,
                            index: index,
                            pointNum: index + 1,
                            cursor: 'move',
                        });
                    page.dom.svg.append($circle[0]);
                });

                // --- PHẦN THÊM MỚI ĐỂ VẼ HANDLE XOAY ---
                // 5. Tính toán vị trí và vẽ handle xoay ở cạnh trên
                const hx = (left + right) / 2; // Tọa độ x là trung điểm cạnh trên
                const hy = top - 25;           // Tọa độ y dịch lên trên 25px cho dễ thấy

                const $handle = $(document.createElementNS("http://www.w3.org/2000/svg", 'circle'))
                    .attr({
                        cx: hx,
                        cy: hy,
                        r: 8,
                        // Quan trọng: Gán cả 2 class để logic xóa và nhận dạng hoạt động đúng
                        class: "draw-point bev-rotate-handle",
                        objectId: object.objectId,
                        "data-objectType": object.objectType
                    })
                    .css({
                        cursor: 'grab'
                    });

                // Gắn handle vừa tạo vào SVG
                page.dom.svg.append($handle[0]);
                // Unify preview: re-render 2-point preview into object's group using helpers
                try {
                    const corners = page.fn.drawing.bev.buildCornersFromTwoPoints(pt1, pt2);
                    const svgEl = $(`svg.drawingSVG[data-file-index='${object.fileIndex}']`);
                    let gObj = svgEl.children(`g[objectId='${object.objectId}']`);
                    if (!gObj.length) {
                        gObj = $(document.createElementNS("http://www.w3.org/2000/svg", 'g'))
                            .attr("objectId", object.objectId)
                            .attr("data-objectType", object.objectType);
                        svgEl.append(gObj);
                    }
                    // Remove temporary preview points/handle drawn directly on SVG
                    svgEl.find(`circle.draw-point[objectId='${object.objectId}']`).remove();
                    // Add preview points into group
                    corners.forEach((p, i) => {
                        const c = $(document.createElementNS("http://www.w3.org/2000/svg", 'circle')).attr({
                            cx: p[0],
                            cy: p[1],
                            class: `draw-point CLS_${object.classId} drawing-points`,
                            objectId: object.objectId,
                            "data-objectType": object.objectType,
                            index: i,
                            pointNum: i + 1,
                            cursor: 'move'
                        });
                        gObj.append(c);
                    });
                    // Add rotate handle into group (with rot:'Y')
                    page.fn.drawing.bev.addOrUpdateRotateHandle(gObj, object, corners);
                } catch (_e) {
                }
            } else {
                // Draw 4 corner points for finished BEV box
                const svg2 = $(`svg.drawingSVG[data-file-index='${fileIndex}']`);
                let g2 = svg2.children(`g[objectId='${object.objectId}']`);
                if (!g2.length) {
                    g2 = $(document.createElementNS("http://www.w3.org/2000/svg", 'g'))
                        .attr("objectId", object.objectId)
                        .attr("data-objectType", object.objectType);
                    svg2.append(g2);
                }
                g2.children(".draw-point").not(".edgePoint").remove();
                for (let i = 0; i < 4; i++) {
                    const p = object.location[i];
                    const cx = _common.nvl(p[0], 0), cy = _common.nvl(p[1], 0);
                    const c = $(document.createElementNS("http://www.w3.org/2000/svg", 'circle')).attr({
                        cx: cx,
                        cy: cy,
                        class: `draw-point CLS_${object.classId} drawing-points`,
                        objectId: object.objectId,
                        "data-objectType": object.objectType,
                        index: i,
                        pointNum: i + 1,
                        cursor: 'move'
                    });
                    g2.append(c);
                }
                // Keep rotate handle consistent
                try {
                    page.fn.drawing.bev.addOrUpdateRotateHandle(g2, object, object.location);
                } catch (_) {
                }
            }
        } else if (object.objectType !== page.constants.drawType.keypoint && object.objectType !== page.constants.drawType.drawBevBox4) {
            $("svg circle.draw-point[objectId='" + object.objectId + "']").remove();
            let index = 0;
            // log.info(object, "page.data.renderObjectPoint-2");
            let g;
            if (object.objectType == page.constants.drawType.rectangle4p) {
                if ($("#group_points_" + object.objectId).length == 0) {
                    g = document.createElementNS("http://www.w3.org/2000/svg", 'g');
                    g.setAttribute("id", "group_points_" + object.objectId);
                    g.setAttribute("class", "canBeRotate");
                    svg.append(g);
                } else {
                    g = $("#group_points_" + object.objectId).get(0);
                }
            } else {
                g = $("g[objectId='" + object.objectId + "']");
                if (g.length == 1) {
                    g.children(".draw-point").not(".edgePoint").remove();
                } else {
                    g.remove();
                    g = $(document.createElementNS("http://www.w3.org/2000/svg", 'g'));
                    g.attr("objectId", object.objectId);
                    g.attr("data-objectType", object.objectType);
                    svg.append(g);
                }
            }

            page.dom.rootPopPTPoints.empty();
            let isPolyline = false;
            let isPointPolyline = false;
            if (object.objectType == page.constants.drawType.polyline) {
                isPolyline = true;
            } else if (object.objectType == page.constants.drawType.pointPolyline) {
                isPointPolyline = true;
            } else {
                page.dom.rootPopPTPoints.append(_common.template.parseObject("tmpl-popPt-nosupport"));
            }

            if (object.objectType == page.constants.drawType.point || object.objectType == page.constants.drawType.pointGroup) {
                $('circle[objectId="' + object.objectId + '"].circle.object-body').addClass('draw-point');
            } else if (object.objectType == page.constants.drawType.edgeLines) {
                $('circle[pointId="' + object.location[0][2] + '"].circle.edgePoint').addClass('draw-point');
                $('circle[pointId="' + object.location[1][2] + '"].circle.edgePoint').addClass('draw-point');
            } else {
                object.location.forEach(function (loc) {
                    let isValid = true;
                    if (object.objectType == page.constants.drawType.rectangle && index > 1) {
                        isValid = false;
                    } else if (object.objectType == page.constants.drawType.rectangle4p && index > 3) {
                        isValid = false;
                    }
                    //log.info(index + ", isValid=" + isValid, "page.data.renderObjectPoint");
                    if (isValid) {
                        let x = _common.nvl(loc[0], 0), y = _common.nvl(loc[1], 0);
                        let c = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
                        c.setAttribute("cx", x);
                        c.setAttribute("cy", y);
                        c.setAttribute("class", "draw-point CLS_" + object.classId);
                        c.setAttribute("objectId", objectId);
                        c.setAttribute("index", index);
                        c.setAttribute("pointNum", index + 1);
                        c.setAttribute("id", loc[2]);
                        //이거 여러개 있음 포인트 전부 표시 누르면 포인트 제어가 안되기 떄문에 .draw-point는 svg 바로 하위에 놓기
                        // $(g).append(c);
                        page.dom.svg.append(c);
                        $(c).addClass("drawing-points").addClass("draw-point");
                        if (isPolyline && index == 0) {
                            $(c).addClass("point-start");
                        } else if (isPolyline && index == object.location.length - 1) {
                            $(c).addClass("point-end");
                        }

                        if (isPointPolyline && index == 0) {
                            $(c).addClass("point-poly-start");
                        } else if (isPointPolyline && index == object.location.length - 1) {
                            $(c).addClass("point-poly-end");
                        }

                        if (isPolyline) {
                            let tag = page.fn.data.stringfyObjectPointTagValues(fileIndex, object.objectId, loc[2]);
                            if (tag == "") {
                                tag = "";
                                $(c).removeClass("hasTag");
                            } else {
                                $(c).addClass("hasTag").attr("title", tag);
                            }
                            page.dom.rootPopPTPoints.append(_common.template.parseObject("tmpl-popPt-point", {
                                x: x
                                , y: y
                                , index: (index + 1)
                                , tag: tag
                                , id: loc[2]
                                , objectId: objectId
                                , fileIndex: fileIndex
                            }));
                        }

                        if (isPointPolyline) {
                            let tag = page.fn.data.stringfyObjectPointTagValues(fileIndex, object.objectId, loc[2]);
                            if (tag == "") {
                                tag = "";
                                $(c).removeClass("hasTag");
                            } else {
                                $(c).addClass("hasTag").attr("title", tag);
                            }
                            page.dom.rootPopPTPoints.append(_common.template.parseObject("tmpl-popPt-point", {
                                x: x
                                , y: y
                                , index: (index + 1)
                                , tag: tag
                                , id: loc[2]
                                , objectId: objectId
                                , fileIndex: fileIndex
                            }));
                        }
                    }
                    index++;
                });
            }

            if (object.objectType == page.constants.drawType.rectangle4p
                && object.location.length > 4) {
                if (!(object && object.isBevBox === true)) page.fn.drawing.changeRotateOfBBOX(object, 0);
            }
        } else {
            $("svg g[objectId='" + object.objectId + "']").addClass("editing");
            if (isEffect) {
                // log.info("run effect");
                $("svg circle.draw-object.keypoint[objectId='" + objectId + "']")
                    .addClass("draw-point")
                ;
            }
        }
        page.fn.initTooltip();
        if (isEffect) {
            $("svg circle.draw-point[objectId='" + objectId + "']")
                .fadeOut(page.constants.animateTime)
                .fadeIn(page.constants.animateTime)
            ;
        }
        // if (page.data.loadTicket.isValid) {
        //     $("svg circle.draw-point").mousedown(page.fn.event.mouseDown);
        //     $("svg circle.draw-point").mouseup(page.fn.event.mouseUp);
        // }
        const is6Point = object.location.length === 6;
        const is6PointCube = object.objectType === page.constants.drawType.draw6PointCube;
        const isTemp = object.objectId.includes("TEMP_");

        // 👉 THÊM điều kiện đặc biệt để bỏ qua
        const isSkipHide = !isTemp && is6PointCube && !is6Point;

        if (!(is6PointCube && isTemp && !is6Point) && !isSkipHide) {
            hideAllPointsByObjectType(
                "draw6PointCube",
                is6Point && is6PointCube ? object : null
            );
        }
    }
}
page.fn.drawing.displaySize = function (object) {
    page.fn.data.unConvertObjectLocation(object);
    if (object.objectType == page.constants.drawType.rectangle4p) {
        page.fn.drawing.displayBboxSize(object, 4);
    } else if (object.objectType == page.constants.drawType.polygon) {
        page.fn.drawing.displayPolygonSize(object);
    } else if (object.objectType == page.constants.drawType.rectangle) {
        page.fn.drawing.displayBboxSize(object, 2);
    } else if (object.objectType == page.constants.drawType.drawCube2D || object.objectType == page.constants.drawType.drawCube2DFront) {
        page.fn.drawing.displayBboxSize(object, 2);
    } else if (object.objectType == page.constants.drawType.draw6PointCube && object.location === 2) {
        page.fn.drawing.displayBboxSize(object, 2);
    } else if (object.objectType == page.constants.drawType.drawBevBox4) {
        page.fn.drawing.displayBboxSize(object, 2);
    }

}
page.fn.drawing.displayBboxSize = function (object, length) {
    let guide = page.constants.drawMin.isUse == "Y" ?
        "(" + page.constants.drawMin.x + "*" + page.constants.drawMin.y + ")" : "";
    let calc = page.fn.drawing.calcRectangleArea(object.location, length);
    $(".objectSizeViewer").eq(object.fileIndex).html(_common.template.parseMessage(page.message.calcSizeRectangle
        , {x: calc.x.format(), y: calc.y.format(), guide: guide, area: (calc.x * calc.y).format()}));
    $(".objectSizeViewer").eq(object.fileIndex).show();
}
page.fn.drawing.displayPolygonSize = function (object) {
    let guide = ""
    let calc = page.fn.drawing.calcPolygonArea(object.location);
    $(".objectSizeViewer").eq(object.fileIndex).text(_common.template.parseMessage(page.message.calcSizePolygon
        , {area: calc.format(), guide: guide}));
    $(".objectSizeViewer").eq(object.fileIndex).show();
}
page.fn.drawing.calcRectangleArea = function (vertices, max) {
    log.debug(vertices, "page.fn.calcRectangleArea, max=" + max);
    let o = {x: 0, y: 0};
    if (vertices.length == 2 || max == 2) {
        o = {
            x: Math.abs(vertices[0][0] - vertices[1][0])
            , y: Math.abs(vertices[0][1] - vertices[1][1])
        };
    } else if (vertices.length > 2) {
        let minX = vertices[0][0];
        let minY = vertices[0][1];
        let maxX = vertices[0][0];
        let maxY = vertices[0][1];
        max = max == null ? vertices.length : max;
        for (let i = 0; i < max; i++) {
            try {
                minX = Math.min(minX, vertices[i][0]);
                minY = Math.min(minY, vertices[i][1]);
                maxX = Math.max(maxX, vertices[i][0]);
                maxY = Math.max(maxY, vertices[i][1]);
            } catch (E) {
            }
        }
        o = {x: (maxX - minX), y: (maxY - minY)};
    } else {
        o = {x: 0, y: 0};
    }
    o.x = page.fn.drawing.limitMousePosition(o.x);
    o.y = page.fn.drawing.limitMousePosition(o.y);
    return o;
}
page.fn.drawing.calcPolygonArea = function (vertices) {
    let total = 0;
    for (let i = 0, l = vertices.length; i < l; i++) {
        let addX = vertices[i][0];
        let addY = vertices[i == vertices.length - 1 ? 0 : i + 1][1];
        let subX = vertices[i == vertices.length - 1 ? 0 : i + 1][0];
        let subY = vertices[i][1];

        total += (addX * addY * 0.5);
        total -= (subX * subY * 0.5);
    }
    return page.fn.drawing.limitMousePosition(Math.abs(total));
}
page.fn.drawing.eventGetCenter = function (event, object) {
    let cp = page.fn.drawing.getPositionForDrawing(event, true, false);
    let imageAngle = $(`.drawingImage[data-file-index=${object.fileIndex}]`).attr("data-file-rotation");
    let imageSize = page.fn.data.getImageOriginalSize(object.fileIndex);
    // 이미지가 회전된 상태에서 polygon, polyline 오브젝트의 포인트 사이에 포인트를 추가할 때 회전된 이미지의 규격과 마우스 좌표로 출력해주기 위해
    if (imageAngle != 0) {
        let tempCp = {x: cp[0], y: cp[1]};
        let rotationCp = page.fn.drawing.calcRotationPoint(tempCp, object.fileIndex, imageAngle);
        cp[0] = rotationCp.x;
        cp[1] = rotationCp.y;
    }
    if (cp[0] < 0) {
        cp[0] = 0;
    } else if (cp[0] > imageSize.width) {
        cp[0] = imageSize.width;
    }
    if (cp[1] < 0) {
        cp[1] = 0;
    } else if (cp[1] > imageSize.height) {
        cp[1] = imageSize.height;
    }
    event.preventDefault();
    page.data.event.isModifiedObject = true;
    page.fn.data.castLocationToObject(object);
    let index = -1;
    let interval = 999999;
    let centerPoint = null;
    for (let idx = 0; idx < object.location.length; idx++) {
        let loc = object.location[idx];
        let iInt = Math.abs(Number.parseInt(loc[0]) - Number.parseInt(cp[0]))
            + Math.abs(Number.parseInt(loc[1]) - Number.parseInt(cp[1]));
        if (iInt < interval) {
            index = idx;
            interval = iInt;
            centerPoint = loc;
        }
    }

    let beforePoint = _common.isEmpty(object.location[index - 1]) ?
        object.location[object.location.length - 1] : object.location[index - 1];
    let afterPoint = _common.isEmpty(object.location[index + 1]) ?
        object.location[0] : object.location[index + 1];
    let beforeShortDist = page.fn.drawing.calcMinDistance(centerPoint, beforePoint, cp);
    let afterShortDist = page.fn.drawing.calcMinDistance(centerPoint, afterPoint, cp);
    let begin, end;
    if (beforeShortDist < afterShortDist) {
        begin = index - 1;
        end = index;
    } else {
        begin = index;
        end = index + 1;
    }
    begin = begin < 0 ? object.location.length - 1 : begin;
    end = end >= object.location.length ? 0 : end;
    let data = {index: begin, index2: end, point: cp, d1: beforeShortDist, d2: afterShortDist};

    return data;
}
page.fn.drawing.calcMinDistance = function (point1, point2, cursor) {
    let interX = Number.parseInt(point2[0]) - Number.parseInt(point1[0]);
    let interY = Number.parseInt(point2[1]) - Number.parseInt(point1[1]);
    let minX = Number.parseInt(point1[0]);
    let minY = Number.parseInt(point1[1]);

    let distance = Math.sqrt(Math.abs(interX) + Math.abs(interY));
    interX = interX / distance;
    interY = interY / distance;
    let calcDistance = 999999;
    for (let i = 0; i < distance; i++) {
        minX += interX;
        minY += interY;
        let dist = Math.abs(Number.parseInt(cursor[0]) - minX) + Math.abs(Number.parseInt(cursor[1] - minY));
        // log.info([minX, minY, dist, interX, interY]);
        if (calcDistance > dist) {
            calcDistance = dist;
        }
    }
    return calcDistance;
}

// 회전된 x,y 좌표
page.fn.drawing.calcRotationPoint = function (mouse, fileIndex, imageAngle) {
    let imageData = page.fn.data.getImageOriginalSize(fileIndex);
    let tempMouse = _common.copy(mouse);
    if (imageAngle == 90) {
        mouse.x = tempMouse.y;
        mouse.y = imageData.height - tempMouse.x;
    } else if (imageAngle == 180) {
        mouse.x = imageData.width - tempMouse.x;
        mouse.y = imageData.height - tempMouse.y;
    } else if (imageAngle == 270) {
        mouse.x = imageData.width - tempMouse.y;
        mouse.y = tempMouse.x;
    }
    return mouse;
}
// 이미지 회전에 따른 태그 회전
page.fn.drawing.rotatePopupTag = function (fileIndex, imageAngle, object, wrap) {
    let imageWrap = $(`.wrapImageArea[data-file-index=${fileIndex}]`);
    let targetObject = $(`.draw-object[objectId=${object.objectId}]`)
    let wrapRight = imageWrap[0].getBoundingClientRect().left + imageWrap[0].getBoundingClientRect().width;
    let objectLeft = targetObject[0].getBoundingClientRect().left;
    let wrapBottom = imageWrap[0].getBoundingClientRect().top;
    let objectTop = targetObject[0].getBoundingClientRect().top;
    let tagHeight = parseFloat(wrap.css("height"))
    let tagWidth = parseFloat(wrap.css("width"))
    let rotationInterval = (tagWidth - tagHeight) / 2;
    let wrapTop, wrapLeft;
    if (imageAngle == 90) {
        wrapTop = wrapRight - objectLeft - tagHeight - rotationInterval;
        wrapLeft = objectTop - wrapBottom - rotationInterval;
    } else if (imageAngle == 180) {
        wrapBottom += imageWrap[0].getBoundingClientRect().height;
        wrapTop = wrapBottom - objectTop - tagHeight;
        wrapLeft = wrapRight - objectLeft - tagWidth;
    } else if (imageAngle == 270) {
        wrapRight -= imageWrap[0].getBoundingClientRect().width;
        wrapBottom += imageWrap[0].getBoundingClientRect().height;
        wrapTop = objectLeft - wrapRight + rotationInterval;
        wrapLeft = wrapBottom - objectTop - tagHeight - rotationInterval;
    }
    wrap.css("top", wrapTop)
        .css("left", wrapLeft)
        .css("transform", `rotate(${imageAngle * -1}deg)`)
    ;
}
// 회전된 이미지 사이즈 가져오기
page.fn.drawing.calcRotationImageSize = function (imageSize, imageAngle) {
    let tempImageSize = _common.copy(imageSize);
    if (imageAngle == 90 || imageAngle == 270) {
        imageSize.width = tempImageSize.height;
        imageSize.height = tempImageSize.width;
    }
    return imageSize;
}
// 회전된 이미지 부모 DOM객체 크기 반환
page.fn.drawing.calcRotationImageWrapSize = function (imageWrap, imageAngle) {
    let rotationWrapHeight, rotationWrapWidth;
    if (imageAngle == 90 || imageAngle == 270) {
        rotationWrapHeight = imageWrap.width();
        rotationWrapWidth = imageWrap.height();
    } else {
        rotationWrapHeight = imageWrap.height();
        rotationWrapWidth = imageWrap.width();
    }
    return [rotationWrapWidth, rotationWrapHeight];
}

page.fn.data = {};
page.fn.data.deleteAllObject = function () {
    if (!page.data.loadTicket.isValid) {
        page.fn.alert(page.message.isInvalidEdit);
        return false;
    }
    if (confirm(page.message.confirmAllDeleteObject)) {
        page.fn.drawing.endNewDrawing("page.fn.data.deleteAllObject");
        page.gateway(page.constants.gateway.command.add, page.message.allDeleteObject);
        let fileIndex = page.data.event.currentFileIndex;
        page.data.loadTicket.fileList[fileIndex].objectList = [];
        page.data.loadTicket.fileList[fileIndex].objectGroupInfo = [];
        page.dom.popObjectGroupList.empty();
        page.fn.drawing.setAllRootObjectList(fileIndex);
        page.fn.drawing.renderAllObject(fileIndex);
        page.dom.rootObjectTagList.empty();
        page.fn.drawing.resetPopupTag(fileIndex, 'deleteObject');
    }
}

// 오브젝트 자체 삭제
page.fn.data.deleteObject = function (fileIndex, objectId, isMakeHistory) {
    let object = page.fn.data.getObject(fileIndex, objectId);
    if (isMakeHistory) {
        let message = _common.template.parseMessage(page.message.oneDeleteObject, {
            index: object.objectOrder
            , className: object.className
        });
        page.gateway(page.constants.gateway.command.add, message);
    }
    $("svg [objectId='" + objectId + "']").remove();
    $("#rootObject_" + objectId).remove();
    let objectList = page.data.loadTicket.fileList[fileIndex].objectList;
    for (let idx = 0; idx < objectList.length; idx++) {
        if (objectList[idx].objectId == objectId) {
            objectList.splice(idx, 1);
            break;
        }
    }
    if (page.data.drawing.object != null) {
        if (page.data.drawing.object.objectId == objectId) {
            page.data.drawing.object = null;
            page.data.event.selectedObjectId = null;
            page.dom.rootObjectTagList.empty();
        }
    }
    if (object.objectType !== 'drawCube2D' && object.objectType !== 'drawCube2DFront') {

        page.fn.drawing.renderAllObject(fileIndex);
    }
    page.fn.drawing.resetObjectOrderSeq(fileIndex);
    page.fn.drawing.setAllRootObjectList(fileIndex);
    page.fn.data.deleteObjectInGroup(fileIndex, objectId);
    page.fn.drawing.resetPopupTag(fileIndex, 'deleteObject');
    if (object.objectType == 'drawCube2D') {
        let objectList = page.data.loadTicket.fileList[fileIndex].objectList;
        objectList.forEach(function (o) {
            if (o.objectId == object.objectId) {
                objBoxSizeJson[o.objectId] = null;
            }
            if (objBoxSizeJson[o.objectId]) {
                let obj_ = JSON.parse(objBoxSizeJson[o.objectId]);
                createCube2DSide(fileIndex, o, obj_);
                //createCube2DDismiss(fileIndex, o, obj_);
            }
        });
        objBoxSizeJson[object.objectId] = null;
    }
    if (object.objectType == 'drawCube2DFront') {
        let objectList = page.data.loadTicket.fileList[fileIndex].objectList;
        objectList.forEach(function (o) {
            if (o.objectId == object.objectId) {
                objBoxSizeJsonFront[o.objectId] = null;
            }
            if (objBoxSizeJsonFront[o.objectId]) {
                let obj_ = JSON.parse(objBoxSizeJsonFront[o.objectId]);
                createCube2DSideFront(fileIndex, o, obj_);
                //createCube2DDismiss(fileIndex, o, obj_);
            }
        });
        objBoxSizeJsonFront[object.objectId] = null;
    }
}
// 그룹 안의 오브젝트 삭제
page.fn.data.deleteObjectInGroup = function (fileIndex, objectId) {
    let grpList = page.data.loadTicket.fileList[fileIndex].objectGroupInfo;
    if (grpList != null) {
        if (grpList.length > 0) {
            grpList.forEach(function (grp) {
                if (grp.objectList.includes(objectId)) {
                    _common.removeOnList(grp.objectList, objectId);
                }
            })
        }
    }
    page.fn.drawing.renderObjectGroup(fileIndex);
    if (page.constants.selectedGrpPopupObject != null) {
        if (page.constants.selectedGrpPopupObject.objectId == objectId) {
            page.constants.selectedGrpPopupObject = null;
            page.dom.rootGroupListInObject.empty();
            page.dom.popGroupListInObject.fadeOut();
        }
    }
}
// 그룹 자체 삭제
page.fn.data.deleteObjectGroup = function (groupId, fileIndex) {
    if (!page.data.loadTicket.isValid && !page.data.loadTicket.isCanSave) {
        page.fn.alert(page.message.isInvalidEdit);
        return false;
    }
    let idx = page.fn.data.getObjectGroupIndex(groupId, fileIndex);
    if (idx > 0) {
        page.gateway(page.constants.gateway.command.add, page.message.deleteGroup);
        let group = page.data.loadTicket.fileList[fileIndex].objectGroupInfo[idx - 1];
        if (group.objectList) {
            group.objectList.forEach(function (objectId) {
                let object = page.fn.data.getObject(fileIndex, objectId);
                if (object) {
                    page.fn.data.spliceGroupInOneObject(object, group);
                    page.fn.drawing.setObjectGroupView(fileIndex, object);
                }
            });
        }
        if ($('button[data-groupId="' + groupId + '"]').hasClass("on")) {
            page.fn.drawing.endNewDrawing();
        }
        page.data.loadTicket.fileList[fileIndex].objectGroupInfo.splice(idx - 1, 1);
        page.fn.drawing.renderObjectGroup(fileIndex);
        if (page.constants.selectedGrpPopupObject != null) {
            let selectedObject = page.constants.selectedGrpPopupObject;
            page.fn.drawing.renderGroupInObject(selectedObject.fileIndex, selectedObject.objectId);
        }
        page.fn.drawing.resetPopupTag(fileIndex, 'finished make group');
    }
}
// 오브젝트 그룹 리스트 팝업 - 그룹 제거 버튼 클릭
page.fn.data.deleteGroupInObject = function (fileIndex, objectId, groupId) {
    $(".object-grp-li[objectGrpId='" + groupId + "']").remove();
    let idx = page.fn.data.getObjectGroupIndex(groupId, fileIndex);
    page.gateway(page.constants.gateway.command.add, page.message.deleteGroupInObject);
    if (idx != 0) {
        let group = page.data.loadTicket.fileList[fileIndex].objectGroupInfo[idx - 1];
        for (var i = 0; i < group.objectList.length; i++) {
            let objectId = group.objectList[i];
            if (objectId == objectId) {
                group.objectList.splice(i, 1);
                break;
            }
        }
        let object = page.fn.data.getObject(fileIndex, objectId)
        page.fn.data.spliceGroupInOneObject(object, group);

        page.fn.drawing.renderObjectGroup(fileIndex);
        page.fn.drawing.renderGroupInObject(fileIndex, objectId);
        page.fn.drawing.setObjectGroupView(fileIndex, object);
        page.fn.drawing.resetPopupTag(fileIndex, 'finished make group');
    }
}
// 오브젝트 데이터 안의 그룹정보 삭제
page.fn.data.spliceGroupInOneObject = function (object, group) {
    for (let i = 0; i < object.groupId.length; i++) {
        if (object.groupId[i] == group.groupId) {
            object.groupId.splice(i, 1);
            break;
        }
    }
    for (let i = 0; i < object.grpObjIdx.length; i++) {
        if (object.grpObjIdx[i] == group.index) {
            object.grpObjIdx.splice(i, 1);
            break;
        }
    }
}
page.fn.data.removePolyObjectForGroup = function (searchedObjectList, x1, y1, x2, y2, range) {
    let removePolyList = [];
    page.data.event.currentFile.objectList.forEach(function (object) {
        let crossLineCheck = false;
        if (object.objectType == "polyline" || object.objectType == "pointPolyline" || object.objectType == "polygon" || object.objectType == "rect6p") {
            removePolyList.push(object.objectId);
            object.location.forEach(function (loc, ii) {
                if (object.location[ii + 1]) {
                    let isUpLineCross = page.fn.data.checkLineIntersection(x1, y1, x2, y1, loc[0], loc[1], object.location[ii + 1][0], object.location[ii + 1][1])
                    let isDownLineCross = page.fn.data.checkLineIntersection(x1, y2, x2, y2, loc[0], loc[1], object.location[ii + 1][0], object.location[ii + 1][1])
                    let isLeftLineCross = page.fn.data.checkLineIntersection(x1, y1, x1, y2, loc[0], loc[1], object.location[ii + 1][0], object.location[ii + 1][1])
                    let isRightLineCross = page.fn.data.checkLineIntersection(x2, y1, x2, y2, loc[0], loc[1], object.location[ii + 1][0], object.location[ii + 1][1])
                    if (isUpLineCross || isDownLineCross || isLeftLineCross || isRightLineCross) {
                        crossLineCheck = true;
                    }
                }
            });
        }
        if (crossLineCheck) {
            removePolyList = removePolyList.filter(item => item !== object.objectId);
        }
    });

    searchedObjectList = [...searchedObjectList];
    if (removePolyList.length != 0) {
        removePolyList.forEach(function (objectId) {
            searchedObjectList.forEach(function (domObject, i) {
                if (objectId == $(domObject).attr("objectId")) {
                    searchedObjectList.splice(i, 1)
                }
            });
        });
    }
    let includeList = page.dom.svg.get(0).getEnclosureList(range, null);
    includeList = [...includeList];
    includeList.forEach(function (domObject) {
        searchedObjectList.push(domObject);
    });
    searchedObjectList = new Set(searchedObjectList);
    searchedObjectList = [...searchedObjectList];
    return searchedObjectList
}
page.fn.data.arePointsCollinear = function (x1, y1, x2, y2, x3, y3) {
    // 세 점이 평행한지 여부를 확인하는 함수
    return (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) === 0;
}
page.fn.data.checkLineIntersection = function (Ax, Ay, Bx, By, Cx, Cy, Dx, Dy) {
    // 선분 AB와 선분 CD가 평행하고, 겹치는지 확인합니다.
    if (page.fn.data.arePointsCollinear(Ax, Ay, Bx, By, Cx, Cy) && page.fn.data.arePointsCollinear(Ax, Ay, Bx, By, Dx, Dy)) {
        // 두 선분이 평행하고 겹치는 경우, 겹치는 지점을 확인합니다.
        const minAx = Math.min(Ax, Bx);
        const maxAx = Math.max(Ax, Bx);
        const minAy = Math.min(Ay, By);
        const maxAy = Math.max(Ay, By);

        const minCx = Math.min(Cx, Dx);
        const maxCx = Math.max(Cx, Dx);
        const minCy = Math.min(Cy, Dy);
        const maxCy = Math.max(Cy, Dy);

        if (minAx <= maxCx && maxAx >= minCx && minAy <= maxCy && maxAy >= minCy) {
            // 겹치는 부분이 존재하면 두 선분은 교차합니다.
            return true;
        }
    } else {
        // 선분 AB와 선분 CD가 평행하지 않은 경우, 교차하는지 확인합니다.
        const direction1 = (Cx - Ax) * (By - Ay) - (Cy - Ay) * (Bx - Ax);
        const direction2 = (Dx - Ax) * (By - Ay) - (Dy - Ay) * (Bx - Ax);
        const direction3 = (Ax - Cx) * (Dy - Cy) - (Ay - Cy) * (Dx - Cx);
        const direction4 = (Bx - Cx) * (Dy - Cy) - (By - Cy) * (Dx - Cx);

        // 서로 다른 방향으로 위치해야 교차하므로, 방향이 서로 다른 경우 교차한다고 판단합니다.
        if ((direction1 > 0 && direction2 < 0 || direction1 < 0 && direction2 > 0) &&
            (direction3 > 0 && direction4 < 0 || direction3 < 0 && direction4 > 0)) {
            return true;
        }
    }
    // 위의 조건에 해당하지 않으면 교차하지 않습니다.
    return false;
}
page.fn.data.resortingObjectList = function (event, ui, idx, objectId, isAddHistory, action) {
    log.debug("ui=" + ui + ", idx=" + idx + ", objectId=" + objectId, "page.fn.resortingObjectList");
    let beforeIndex, afterIndex = 0;
    if (ui == null) {
        beforeIndex = Number.parseInt(idx);
    } else {
        beforeIndex = Number.parseInt(ui.item.attr("index"));
    }
    if (objectId == null && ui != null) {
        objectId = ui.item.attr("objectId");
    } else {
        if (objectId == null) {
            if (page.data.event.selectedObjectId == null || page.data.event.selectedObjectId == '') {
                page.fn.alert(page.message.copyNoSelected);
                return false;
            } else {
                objectId = page.data.event.selectedObjectId;
                beforeIndex = $("#rootObjectList > li[objectId=" + objectId + "]").attr("index");
            }
        }
    }
    if (action != null) {
        if (action == 'pageUp') {
            $("#rootObject_" + objectId).insertBefore($("#rootObject_" + objectId).prev());
        } else if (action == 'pageDown') {
            $("#rootObject_" + objectId).insertAfter($("#rootObject_" + objectId).next());
        } else if (action == 'pageHome') {
            page.dom.rootObjectList.prepend($("#rootObject_" + objectId));
        } else if (action == 'pageEnd') {
            page.dom.rootObjectList.append($("#rootObject_" + objectId));
        }
    }
    let index = 0;
    let nl = []
    if (page.dom.rootObjectList.children().length == page.data.event.currentFile.objectList.length) {
        page.dom.rootObjectList.children().each(function (i, li) {
            li = $(li);
            let object = JSON.parse(JSON.stringify(page.fn.data.getObject(page.data.event.currentFileIndex, li.attr("objectId"))));
            index++;
            if (object != null) {
                if (object.objectId == objectId) {
                    afterIndex = index;
                }
                object.objectOrder = index;
                nl.push(object);
                li.children(".index").attr("title", "#" + (index)).text("#" + (index));
            }
        });
        page.data.event.currentFile.objectList = nl;
    }
    if (isAddHistory != false) {
        page.gateway(page.constants.gateway.command.add
            , _common.template.parseMessage(page.message.changeSortObject, {
                beforeIndex: beforeIndex, afterIndex: afterIndex
            }));
    }
    page.fn.drawing.renderAllObject(page.data.event.currentFileIndex);
    // page.fn.drawing.resetObjectOrderSeq(page.data.event.currentFileIndex);
    page.fn.data.renderObjectData(page.data.event.currentFileIndex);
    // page.fn.drawing.resetPopupTag(page.data.event.currentFileIndex, 'resortingObject');
    if (action != null) {
        page.fn.data.onSelectObject(page.data.event.currentFileIndex, objectId);
    }
}
page.fn.data.copyObject = function () {
    if ($("#rootObjectList .colorIcon.checked").length == 0) {
        page.fn.alert(page.message.copyNoSelected);
    } else {
        let selectObjList = [];
        let selectObjectGroupInfo = new HashMap();
        $("#rootObjectList .colorIcon.checked").each(function (i, o) {
            selectObjList.push(_common.copy(page.fn.data.getObject(page.data.event.currentFileIndex, $(o).attr("objectId"))));
        });

        selectObjList.forEach(function (object) {
            for (var i = 0; i < page.data.event.currentFile.objectGroupInfo.length; i++) {
                if (object.groupId == page.data.event.currentFile.objectGroupInfo[i].groupId) {
                    selectObjectGroupInfo.put(object.groupId, _common.copy(page.data.event.currentFile.objectGroupInfo[i]));
                    break;
                }
            }
            const js = JSON.parse(object.objectLocation);
            if (objBoxSizeJson[object.objectId]) {
                js[2] = JSON.parse(objBoxSizeJson[object.objectId]);
                object.objectLocation = JSON.stringify(js);
            }
        })
        page.data.copy = selectObjList;
        page.data.copyGrp = selectObjectGroupInfo;
        page.fn.alert(page.message.copyToClipboard);
        page.data.event.selectedCopyImgNumber = page.data.event.currentFile.rawFileId;
    }
}
page.fn.data.copyAllObject = function () {
    if (page.data.event.currentFile.objectList == null || page.data.event.currentFile.objectList.length == 0) {
        page.fn.alert(page.message.copyNoExists);
    } else {
        page.data.copy = _common.copy(page.data.event.currentFile.objectList);

        let selectObjectGroupInfo = new HashMap();
        for (var i = 0; i < page.data.event.currentFile.objectGroupInfo.length; i++) {
            var groupId = page.data.event.currentFile.objectGroupInfo[i].groupId;
            selectObjectGroupInfo.put(groupId, _common.copy(page.data.event.currentFile.objectGroupInfo[i]));
        }
        page.data.copyGrp = selectObjectGroupInfo;
        page.fn.alert(page.message.copyToClipboardAll);
        page.data.event.selectedCopyImgNumber = page.data.event.currentFile.rawFileId;
    }
}
page.fn.data.pasteObject = function () {
    if (page.data.copy == null) {
        page.fn.alert(page.message.copyNoData);
    } else {
        let fileIndex = page.data.event.currentFileIndex;
        page.fn.drawing.endNewDrawing("hotkey-esc:makeGroup");
        if ($("input[name='inputObjectGroupName']").is(':visible')) {
            page.fn.alert(page.message.isInvalidEdit);
        } else {
            page.gateway(page.constants.gateway.command.add
                , _common.template.parseMessage(page.message.copiedList, {count: page.data.copy.length}));
            page.constants.compareObjNumberMap = new HashMap();
            page.constants.compareEdgePointIdMap = new HashMap();
            let idx = 0;
            if (typeof (page.data.copy.length) == "number") {
                idx = page.data.copy.length;
                page.data.copy.forEach(function (object) {
                    page.fn.data.procPasteObject(fileIndex, object);
                });
            } else {
                idx = 1;
                page.fn.data.procPasteObject(fileIndex, page.data.copy);
            }
            page.fn.data.setEdgePointMap(fileIndex);
            // 오브젝트 그룹 세팅
            if (page.data.event.selectedCopyImgNumber != page.data.event.currentFile.rawFileId) {
                // 다른 이미지로 이동하여 복사하였을 떄.
                page.constants.compareObjGroupIdMap = new HashMap();
                page.data.copyGrp.keySet().forEach(function (groupId) {
                    let newGroup = page.fn.data.makeObjectGroup(fileIndex, page.data.copyGrp.get(groupId).groupName);
                    page.constants.compareObjGroupIdMap.put(page.data.copyGrp.get(groupId).groupId, newGroup.groupId);
                });

                page.constants.compareObjNumberMap.keySet().forEach(function (prevObjectId) {
                    let object = page.fn.data.getObject(fileIndex, page.constants.compareObjNumberMap.get(prevObjectId));
                    for (var i = 0; i < object.groupId.length; i++) {
                        let orgObjectGroupId = object.groupId[i];
                        object.groupId.splice(i, 1, page.constants.compareObjGroupIdMap.get(orgObjectGroupId));
                        object.grpObjIdx.splice(i, 1, page.fn.data.getObjectGroup(page.constants.compareObjGroupIdMap.get(orgObjectGroupId), fileIndex).index);
                    }
                })
                page.fn.drawing.setAllRootObjectList(fileIndex);
            }
            page.constants.compareObjNumberMap.keySet().forEach(function (prevObjectId) {
                let object = page.fn.data.getObject(fileIndex, page.constants.compareObjNumberMap.get(prevObjectId));
                let grpList = page.fn.data.getObjectIncludeGroupList(object.groupId, fileIndex);
            });
            // 오브젝트 그룹 세팅 END
            // page.fn.alert(_common.template.parseMessage(page.message.copiedList, {count: idx}));
        }
        page.fn.drawing.renderObjectGroup(page.data.event.currentFileIndex);
        if (page.constants.selectedGrpPopupObject != null) {
            let selectedObject = page.constants.selectedGrpPopupObject;
            page.fn.drawing.renderGroupInObject(selectedObject.fileIndex, selectedObject.objectId);
        }
    }
    page.fn.drawing.resetPopupTag(page.data.event.currentFileIndex);
}
page.fn.data.procPasteObject = function (fileIndex, object) {
    let previousObjectId = object.objectId;
    let cpObj = _common.copy(object);
    let imageSize = page.fn.data.getImageOriginalSize(fileIndex);
    cpObj.objectId = page.fn.data.createTempKey();
    cpObj.rawFileId = page.data.loadTicket.fileList[fileIndex].rawFileId;
    cpObj.fileIndex = fileIndex;
    cpObj.objectOrder = page.data.loadTicket.fileList[fileIndex].objectList.length + 1;
    page.fn.data.castLocationToObject(cpObj);
    log.info(cpObj.location, "page.fn.data.procPasteObject-before");
    cpObj.location.forEach(function (p) {
        if (p[0] > imageSize.width) {
            p[0] = imageSize.width;
        }
        if (p[1] > imageSize.height) {
            p[1] = imageSize.height;
        }
        if (cpObj.objectType == page.constants.drawType.edgeLines) {
            let orgEdgePointId = _common.copy(p[2]);
            if (page.constants.compareEdgePointIdMap.get(orgEdgePointId) == null) {
                let newPointId = page.fn.data.createTempKey();
                page.constants.compareEdgePointIdMap.put(orgEdgePointId, newPointId)
                p[2] = newPointId;
            } else {
                p[2] = page.constants.compareEdgePointIdMap.get(orgEdgePointId);
            }
        }
    });
    if (object.objectType == 'drawCube2D') {
        const js = JSON.parse(cpObj.objectLocation);
        if (js.length > 2) {
            objBoxSizeJson[cpObj.objectId] = JSON.stringify(js[2]);
        }
    }
    if (_common.isNotEmpty(cpObj.tagList)) {
        for (let i = 0; i < cpObj.tagList.length; i++) {
            let tag = cpObj.tagList[i];
            tag.projectId = cpObj.projectId;
            tag.taskId = cpObj.taskId;
            tag.rawFileId = cpObj.rawFileId;
            tag.objectId = cpObj.objectId;
            tag.objectTagId = page.fn.data.createTempKey(); // Generate new tag ID when copying
            cpObj.tagList[i] = tag;
        }
    }
    cpObj.isCopied = true;
    log.info(cpObj.location, "page.fn.procPasteObject-after");
    page.fn.data.convertObjectLocation(cpObj, cpObj.location);
    page.fn.data.appendNewDrawObject(cpObj);
    page.fn.drawing.renderObject(cpObj);
    if (cpObj.objectType == page.constants.drawType.rectangle && cpObj.location.length > 2) {
        page.fn.drawing.changeRotateOfBBOX(cpObj, 0);
    }
    page.constants.compareObjNumberMap.put(previousObjectId, cpObj.objectId);
    if (object.objectType == 'drawCube2D') {
        page.fn.data.onSelectObject(fileIndex, cpObj.objectId);
    }
}
page.fn.data.isValidObjectData = function (object) {
    let isValid = false;
    if (object != null) {
        if (object.objectType == page.constants.drawType.polygon) {
            page.fn.data.unConvertObjectLocation(object);
            if (object.location.length >= 3) {
                isValid = true;
            }
        } else if (object.objectType == page.constants.drawType.rectangle4p) {
            page.fn.data.unConvertObjectLocation(object);
            let points = JSON.parse(object.objectLocation)
            if (object.location.length >= 4) {
                if (page.constants.drawMin.isUse == "Y") {
                    let calc = page.fn.drawing.calcRectangleArea(points, 4);
                    if (calc.x >= page.constants.drawMin.x && calc.y >= page.constants.drawMin.y) {
                        isValid = true;
                    } else {
                        isValid = "min";
                        log.info(points, "page.constants.drawMin");
                    }
                } else if (page.constants.drawMin.isUse == "S") {
                    let calc = page.fn.drawing.calcRectangleArea(points, 4);
                    if (calc.x * calc.y >= page.constants.drawMin.x) {
                        isValid = true;
                    } else {
                        isValid = "min";
                        log.info(points, "page.constants.drawMin");
                    }
                } else {
                    isValid = true;
                }
            }
        } else if (object.objectType == page.constants.drawType.rectangle) {
            page.fn.data.unConvertObjectLocation(object);
            let points = JSON.parse(object.objectLocation)
            if (object.location.length == 2) {
                if (page.constants.drawMin.isUse == "Y") {
                    let calc = page.fn.drawing.calcRectangleArea(points, 2);
                    if (calc.x >= page.constants.drawMin.x && calc.y >= page.constants.drawMin.y) {
                        isValid = true;
                    } else {
                        isValid = "min";
                        log.info(points, "page.constants.drawMin");
                    }
                } else if (page.constants.drawMin.isUse == "S") {
                    let calc = page.fn.drawing.calcRectangleArea(points, 2);
                    if (calc.x * calc.y >= page.constants.drawMin.x) {
                        isValid = true;
                    } else {
                        isValid = "min";
                        log.info(points, "page.constants.drawMin");
                    }
                } else {
                    isValid = true;
                }
            } else if (object.location.length == 3) {
                if (page.constants.drawMin.isUse == "Y") {
                    let calc = page.fn.drawing.calcRectangleArea(points, 2);
                    if (calc.x >= page.constants.drawMin.x && calc.y >= page.constants.drawMin.y) {
                        isValid = true;
                    } else {
                        isValid = "min";
                        log.info(points, "page.constants.drawMin");
                    }
                } else if (page.constants.drawMin.isUse == "S") {
                    let calc = page.fn.drawing.calcRectangleArea(points, 2);
                    if (calc.x * calc.y >= page.constants.drawMin.x) {
                        isValid = true;
                    } else {
                        isValid = "min";
                        log.info(points, "page.constants.drawMin");
                    }
                } else {
                    isValid = true;
                }
            }
        } else if (object.objectType == page.constants.drawType.polyline) {
            page.fn.data.unConvertObjectLocation(object);
            if (object.location.length > 1) {
                isValid = true;
            }
        } else if (object.objectType == page.constants.drawType.pointPolyline) {
            page.fn.data.unConvertObjectLocation(object);
            if (object.location.length > 1) {
                isValid = true;
            }
        } else if (object.objectType == page.constants.drawType.keypoint) {
            page.fn.data.unConvertObjectLocation(object);
            if (object.location.length > 1) {
                isValid = true;
            }
        } else if (object.objectType == page.constants.drawType.pointGroup) {
            page.fn.data.unConvertObjectLocation(object);
            if (object.location.length > 0) {
                isValid = true;
            }
        } else if (object.objectType == page.constants.drawType.point) {
            page.fn.data.unConvertObjectLocation(object);
            if (object.location.length == 1) {
                isValid = true;
            }
        } else if (object.objectType == page.constants.drawType.sideBox) {
            page.fn.data.unConvertObjectLocation(object);
            if (object.location.length == 6) {
                isValid = true;
            }
        } else if (object.objectType == page.constants.drawType.edgeLines) {
            page.fn.data.unConvertObjectLocation(object);
            if (object.location.length == 2) {
                isValid = true;
            }
        } else if (object.objectType == page.constants.drawType.drawCube2D) {
            page.fn.data.unConvertObjectLocation(object);
            let points = JSON.parse(object.objectLocation)
            if (object.location.length == 2) {
                if (page.constants.drawMin.isUse == "Y") {
                    let calc = page.fn.drawing.calcRectangleArea(points, 2);
                    if (calc.x >= page.constants.drawMin.x && calc.y >= page.constants.drawMin.y) {
                        isValid = true;
                    } else {
                        isValid = "min";
                        log.info(points, "page.constants.drawMin");
                    }
                } else if (page.constants.drawMin.isUse == "S") {
                    let calc = page.fn.drawing.calcRectangleArea(points, 2);
                    if (calc.x * calc.y >= page.constants.drawMin.x) {
                        isValid = true;
                    } else {
                        isValid = "min";
                        log.info(points, "page.constants.drawMin");
                    }
                } else {
                    isValid = true;
                }
            } else if (object.location.length == 3) {
                if (page.constants.drawMin.isUse == "Y") {
                    let calc = page.fn.drawing.calcRectangleArea(points, 2);
                    if (calc.x >= page.constants.drawMin.x && calc.y >= page.constants.drawMin.y) {
                        isValid = true;
                    } else {
                        isValid = "min";
                        log.info(points, "page.constants.drawMin");
                    }
                } else if (page.constants.drawMin.isUse == "S") {
                    let calc = page.fn.drawing.calcRectangleArea(points, 2);
                    if (calc.x * calc.y >= page.constants.drawMin.x) {
                        isValid = true;
                    } else {
                        isValid = "min";
                        log.info(points, "page.constants.drawMin");
                    }
                } else {
                    isValid = true;
                }
            }
        } else if (object.objectType == page.constants.drawType.drawCube2DFront) {
            page.fn.data.unConvertObjectLocation(object);
            let points = JSON.parse(object.objectLocation)
            if (object.location.length == 2) {
                if (page.constants.drawMin.isUse == "Y") {
                    let calc = page.fn.drawing.calcRectangleArea(points, 2);
                    if (calc.x >= page.constants.drawMin.x && calc.y >= page.constants.drawMin.y) {
                        isValid = true;
                    } else {
                        isValid = "min";
                        log.info(points, "page.constants.drawMin");
                    }
                } else if (page.constants.drawMin.isUse == "S") {
                    let calc = page.fn.drawing.calcRectangleArea(points, 2);
                    if (calc.x * calc.y >= page.constants.drawMin.x) {
                        isValid = true;
                    } else {
                        isValid = "min";
                        log.info(points, "page.constants.drawMin");
                    }
                } else {
                    isValid = true;
                }
            } else if (object.location.length == 3) {
                if (page.constants.drawMin.isUse == "Y") {
                    let calc = page.fn.drawing.calcRectangleArea(points, 2);
                    if (calc.x >= page.constants.drawMin.x && calc.y >= page.constants.drawMin.y) {
                        isValid = true;
                    } else {
                        isValid = "min";
                        log.info(points, "page.constants.drawMin");
                    }
                } else if (page.constants.drawMin.isUse == "S") {
                    let calc = page.fn.drawing.calcRectangleArea(points, 2);
                    if (calc.x * calc.y >= page.constants.drawMin.x) {
                        isValid = true;
                    } else {
                        isValid = "min";
                        log.info(points, "page.constants.drawMin");
                    }
                } else {
                    isValid = true;
                }
            }
        }
        // validate BEV box (2 hoặc 4 điểm)
        else if (object.objectType === page.constants.drawType.drawBevBox4) {
            page.fn.data.unConvertObjectLocation(object);
            let points = JSON.parse(object.objectLocation);
            if (object.location.length >= 4) {
                const xs = object.location.map(p => p[0]);
                const ys = object.location.map(p => p[1]);
                const w = Math.max.apply(null, xs) - Math.min.apply(null, xs);
                const h = Math.max.apply(null, ys) - Math.min.apply(null, ys);
                if (page.constants.drawMin.isUse == "Y") {
                    isValid = (w >= page.constants.drawMin.x && h >= page.constants.drawMin.y) ? true : "min";
                } else if (page.constants.drawMin.isUse == "S") {
                    isValid = ((w * h) >= page.constants.drawMin.x) ? true : "min";
                } else {
                    isValid = true;
                }
            } else if (object.location.length === 2) {
                if (page.constants.drawMin.isUse == "Y") {
                    let calc = page.fn.drawing.calcRectangleArea(points, 2);
                    isValid = (calc.x >= page.constants.drawMin.x && calc.y >= page.constants.drawMin.y) ? true : "min";
                } else if (page.constants.drawMin.isUse == "S") {
                    let calc = page.fn.drawing.calcRectangleArea(points, 2);
                    isValid = ((calc.x * calc.y) >= page.constants.drawMin.x) ? true : "min";
                } else {
                    isValid = true;
                }
            }
        }
        // validateion 6 point cube
        else if (object.objectType === page.constants.drawType.draw6PointCube) {
            page.fn.data.unConvertObjectLocation(object);
            let points = JSON.parse(object.objectLocation)
            if (object.location.length >= 2 && object.location.length < 6) {
                if (page.constants.drawMin.isUse == "Y") {
                    let calc = page.fn.drawing.calcRectangleArea(points, 2);
                    if (calc.x >= page.constants.drawMin.x && calc.y >= page.constants.drawMin.y) {
                        isValid = true;
                    } else {
                        isValid = "min";
                        log.info(points, "page.constants.drawMin");
                    }
                } else if (page.constants.drawMin.isUse == "S") {
                    let calc = page.fn.drawing.calcRectangleArea(points, 2);
                    if (calc.x * calc.y >= page.constants.drawMin.x) {
                        isValid = true;
                    } else {
                        isValid = "min";
                        log.info(points, "page.constants.drawMin");
                    }
                } else {
                    isValid = true;
                }
            } else if (object.location.length === 6 || object.location.length === 8) {
                if (page.constants.drawMin.isUse == "Y") {
                    let calc = page.fn.drawing.calcRectangleArea(points, 2);
                    if (calc.x >= page.constants.drawMin.x && calc.y >= page.constants.drawMin.y) {
                        isValid = true;
                    } else {
                        isValid = "min";
                        log.info(points, "page.constants.drawMin");
                    }
                } else if (page.constants.drawMin.isUse == "S") {
                    let calc = page.fn.drawing.calcRectangleArea(points, 2);
                    if (calc.x * calc.y >= page.constants.drawMin.x) {
                        isValid = true;
                    } else {
                        isValid = "min";
                        log.info(points, "page.constants.drawMin");
                    }
                } else {
                    isValid = true;
                }
            }
        }
        else if (object.objectType === page.constants.drawType.drawVISBox) {
            page.fn.data.unConvertObjectLocation(object);
            if (object.location.length === 3) {
                isValid = true;
            }
        }
    }
    return isValid;
}
page.fn.data.appendNewDrawObject = function (param) {
    console.log(param, "page.fn.data.appendNewDrawObject");
    // TODO object list에 추가
    if (_common.isEmpty(param.objectType)) {
        log.error(param, "page.fn.data.appendNewDrawObject, param.objectType can't null.");
        return false;
    }
    let drawName = "";
    switch (param.objectType) {
        case page.constants.drawType.polyline :
            drawName = page.message.drawPolyline;
            break;
        case page.constants.drawType.pointPolyline :
            drawName = page.message.drawPointPolyline;
            break;
        case page.constants.drawType.polygon:
            drawName = page.message.drawPolygon;
            break;
        case page.constants.drawType.keypoint:
            drawName = page.message.drawKeypoint;
            break;
        case page.constants.drawType.magicKey:
            drawName = 'Magic-Key';
            break;
        // case page.constants.drawType.magicBox:
        //     drawName = page.message.drawMagicBox;
        //     break;
        // case page.constants.drawType.magicPin:
        //     drawName = page.message.drawMagicPin;
        //     break;
        // case page.constants.drawType.magicQ:
        //     drawName = page.message.drawPolygon;
        //     break;
        case page.constants.drawType.rectangle4p:
            drawName = page.message.drawRect4p;
            break;
        case page.constants.drawType.pointGroup:
            drawName = page.message.drawPointGroup;
            break;
        case page.constants.drawType.point:
            drawName = page.message.drawPoint;
            break;
        case page.constants.drawType.sideBox:
            drawName = page.message.drawSideBox;
            break;
        case page.constants.drawType.edgePoints:
            drawName = page.message.drawEdgePoints;
            break;
        case page.constants.drawType.edgeLines:
            drawName = page.message.drawEdgeLines;
            break;
        case page.constants.drawType.drawVISBox:
            drawName = "VIS-Box";
            break;
        default :
            drawName = page.message.drawRect;
    }
    if (page.data.event.method == page.constants.method.magicPin) {
        drawName = page.message.drawMagicPin;
    } else if (page.data.event.method == page.constants.method.magicKey) {
        drawName = 'Magic-Key';
    }

    param.projectId = page.data.loadTicket.projectId;
    param.taskId = page.data.loadTicket.taskId;
    param.workTicketId = page.data.loadTicket.workTicketId;
    if (_common.isEmpty(param.fileIndex)) {
        param.fileIndex = page.data.event.currentFileIndex;
    }
    if (_common.isEmpty(param.rawFileId)) {
        param.rawFileId = page.fn.data.getFileData(param.fileIndex).rawFileId;
    }
    if (_common.isEmpty(param.objectId)) {
        param.objectId = "TEMP_" + getUUID();
    }
    if (_common.isEmpty(param.classId)) {
        param.classId = page.data.drawing.lastSelectedClass.classId;
    }
    if (_common.isEmpty(param.className)) {
        param.className = page.data.drawing.lastSelectedClass.className;
    }
    if (_common.isEmpty(param.color)) {
        param.color = page.data.drawing.lastSelectedClass.classColor;
    }
    if (_common.isEmpty(param.groupId)) {
        param.groupId = [];
    }
    if (_common.isEmpty(param.objectLocation)) {
        if (param.objectType == page.constants.drawType.rectangle6p) {
            param.objectLocation = '{"points":[], "pointType": "", "bbox": {"height": 0, "width": 0, "x": 0, "y": 0}}';
        } else {
            param.objectLocation = "[]";
        }
    }
    if (_common.isEmpty(param.location)) {
        param.location = [];
    }
    if (_common.isEmpty(param.rect6pCube)) {
        param.rect6pCube = {x: 0, y: 0, top: 0, left: 0, right: 0, bottom: 0};

    }
    if (_common.isEmpty(param.isEscapePut)) {
        param.isEscapePut = false;
    }
    if (_common.isEmpty(param.isMovePoint)) {
        param.isEscapePut = false;
    }

    if (_common.isEmpty(param.pointsSide6pBox)) {
        param.pointsSide6pBox = [];

    }

    if (_common.isEmpty(param.direction6PointCube)) {
        param.direction6PointCube = 'rear';

    }

    if (_common.isEmpty(param.allPointListOfTheBox)) {
        param.allPointListOfTheBox = {
            p1: {x: 0, y: 0, v: 1, id: ""}, // đường chéo top left
            p3: {x: 0, y: 0, v: 1, id: ""},
            p7: {x: 0, y: 0, v: 1, id: ""}, //  đường chéo top right
            p4: {x: 0, y: 0, v: 1, id: ""},
            p5: {x: 0, y: 0, v: 1, id: ""},
            p2: {x: 0, y: 0, v: 1, id: ""},  // đường chéo bottom right
            p6: {x: 0, y: 0, v: 1, id: ""},
            p8: {x: 0, y: 0, v: 1, id: ""} // đường chéo bottom left
        };

    }

    if (_common.isEmpty(param.bevState)) {
        param.bevState = {
            angle: 0,
            cx: null,
            cy: null,
            h: null,
            w: null
        };

    }

    if (_common.isEmpty(param.postionCursor)) {
        param.postionCursor = {};

    }
    if (_common.isEmpty(param.keypointId)) {
        param.keypointId = null;
    }
    if (_common.isEmpty(param.objectBox)) {
        param.objectBox = {height: 0, width: 0, x: -1, y: -1};
    }
    param.isVisible = true;
    param.objectOrder = page.fn.data.getMaxOrderSeq(param.fileIndex);
    param.isValidData = false;
    log.info(param, "page.fn.data.appendNewDrawObject, object");
    if (!param.isCopied) {
        page.gateway(page.constants.gateway.command.add
            , _common.template.parseMessage(page.message.startDrawing, {drawName: drawName}));
    }
    if (page.data.event.method == page.constants.method.magicKey) {
        return param;
    } else {
        let isSaved = page.fn.data.saveObject(param);
        if (isSaved == true) {
            page.fn.drawing.setRootObjectList(param.fileIndex, param);
            return param;
        } else {
            return null;
        }
    }
}
page.fn.data.appendNewDrawMagicKeyObject = function (fileIndex) {
    let object = {};
    object.projectId = page.data.loadTicket.projectId;
    object.taskId = page.data.loadTicket.taskId;
    object.workTicketId = page.data.loadTicket.workTicketId;
    object.rawFileId = page.fn.data.getFileData(fileIndex).rawFileId;
    object.objectId = "TEMP_" + getUUID();
    object.fileIndex = fileIndex;
    object.isVisible = true;
    object.keypointId = page.data.magicKeypointId;
    object.classId = page.data.drawing.lastSelectedClass.classId;
    object.className = page.data.drawing.lastSelectedClass.className;
    object.color = page.data.drawing.lastSelectedClass.classColor
    object.groupId = []
    object.objectOrder = page.fn.data.getMaxOrderSeq(fileIndex);
    object.objectType = page.constants.drawType.keypoint
    object.magicKeypointId = page.data.magicKeypointId;

    page.fn.drawing.setRootObjectList(fileIndex, object);
    return object;
}
page.fn.data.getFileData = function (fileIndex) {
    return page.data.loadTicket.fileList[fileIndex];
}
page.fn.data.getMaxOrderSeq = function (fileIndex) {
    let max = 0;
    for (let obj of page.data.loadTicket.fileList[fileIndex].objectList) {
        max = Math.max(max, obj.objectOrder);
    }
    return max + 1;
}
page.fn.data.saveObject = function (object) {

    let isSaved = false;
    for (let fileIndex = 0; fileIndex < page.data.loadTicket.fileList.length; fileIndex++) {
        for (let objIndex = 0; objIndex < page.data.loadTicket.fileList[fileIndex].objectList.length; objIndex++) {
            if (page.data.loadTicket.fileList[fileIndex].objectList[objIndex].objectId == object.objectId) {
                page.data.loadTicket.fileList[fileIndex].objectList[objIndex] = _common.copyData(object);
                isSaved = true;
                break;
            }
        }
        if (isSaved == true) {
            break;
        }
    }
    if (isSaved == false) {
        // is New!
        try {
            page.data.loadTicket.fileList[object.fileIndex].objectList.push(object);
            isSaved = true;
        } catch (E) {
            log.error(E, "page.fn.data.saveObject, Save fail of new object, exception");
            log.error(object, "page.fn.data.saveObject, Save fail of new object, object");
        }
    }
    if (isSaved == true) {
        // TODO add history (for CTRL+Z)
    }
    return isSaved;
}
page.fn.data.getScale = function (fileIndex) {
    if (fileIndex == null) {
        fileIndex = page.data.event.currentFileIndex;
    }
    return Number.parseFloat($(".drawingImage[data-file-index='" + fileIndex + "']").attr("data-scale"));
}
page.fn.data.isSameobjectId = function (objectId, object) {
    let is = false;
    if ($(object).attr("objectId") == objectId) {
        is = true;
    }
    return is;
}
page.fn.data.getObjectPointTags = function (fileIndex, objectId, pointId) {
    let tag = null;
    let object = page.fn.data.getObject(fileIndex, objectId);
    try {
        let pointInfo = null;
        let selectedPointIndex = -1;
        for (let i = 0; i < object.location.length; i++) {
            let point = object.location[i];
            if (point[2] === pointId) {
                pointInfo = point[3];
                selectedPointIndex = i;
                break;
            }
        }
        try {
            tag = pointInfo.tags;
        } catch (E) {
        }
    } catch (E) {
        log.error(E, "page.fn.getObjectPointTags, error");
        log.error(object, "page.fn.getObjectPointTags, object");
    }
    return tag;
}
page.fn.data.stringfyObjectPointTagValues = function (fileIndex, objectId, pointId) {
    let txt = "";
    try {
        let tags = page.fn.data.getObjectPointTags(fileIndex, objectId, pointId);
        if (tags != null && typeof (tags) == "object") {
            let tagIdList = Object.keys(tags);
            tagIdList.forEach(function (tagId) {
                let constTag = page.fn.data.getConstantsTag(tagId);
                if (constTag != null) {
                    if (txt != "") {
                        txt += ", ";
                    }
                    txt += constTag.name.replace(/'/gi, '&#39;') + " : ";
                    if (constTag.tagValTypeCd == page.constants.tag.tagValTypeCd.input) {
                        txt += tags[tagId];
                    } else if (constTag.tagValTypeCd == page.constants.tag.tagValTypeCd.select) {
                        for (let i = 0; i < constTag.tagSelectValueVoList.length; i++) {
                            if (constTag.tagSelectValueVoList[i].value == tags[tagId]) {
                                txt += constTag.tagSelectValueVoList[i].name;
                                break;
                            }
                        }
                    } else {
                        log.error(constTag, "page.fn.data.stringfyObjectPointTagValues, undefined tagValTypeCd");
                    }
                }
            });
        }
    } catch (E) {
        log.error(E, "page.fn.data.stringfyObjectPointTagValues");
    }
    return txt;
}
page.fn.data.onSelectObject = function (fileIndex, objectId) {


    log.info(objectId, "page.fn.data.onSelectObject, fileIndex=" + fileIndex);
    page.fn.data.unSelectObject();
    if (page.data.event.isDrawing == true) {
        page.fn.drawing.endNewDrawing("page.fn.data.onSelectObject");
    }
    page.fn.drawing.startNewDrawing(page.constants.method.editObject);
    let object = page.fn.data.getObject(fileIndex, objectId);
    let callBy = "page.fn.data.onSelectObject()"
    if (_common.isNotEmpty(object)) {
        //page.fn.showObjectGroupInfo(objectId, false);
        page.data.loadTicket.selectedObjectIdMap.put(fileIndex, objectId);
        try {
            $("#txtPopPTObjIdx").text(object.objectOrder);
            page.data.event.selectedObjectId = object.objectId;
            page.data.drawing.object = _common.copy(object);
            $("#rootObjectList > li").removeClass("on");
            $("#rootObject_" + objectId).addClass("on");
            let rowNum = Number.parseInt($("#rootObjectList").children(".on").attr("index"));
            $("#rootObjectList").parent().scrollTop(((rowNum - 1) * 24) - 22);
            page.fn.drawing.displaySize(object);
            page.fn.drawing.renderObjectPoint(fileIndex, null, true, object);
            page.fn.drawing.renderObjectTag(object);
            page.fn.drawing.resetPopupTag(fileIndex, callBy)

            // Auto show points and popup for pointPolyline objects when selected
            if (object.objectType === page.constants.drawType.pointPolyline) {
                page.fn.drawing.toggleVisiblePointPolylinePoints(true);
                // Show point tag popup
                if (page.dom.popPointTag && !page.dom.popPointTag.is(":visible")) {
                    page.dom.popPointTag.fadeIn();
                    page.dom.popPointTag.css("top", "50px");
                    page.dom.popPointTag.css("left", "50px");
                }

                // Check if there's a pending point selection from select object mode
                if (page.data.pendingPointSelection &&
                    page.data.pendingPointSelection.objectId === objectId) {
                    let pendingPoint = page.data.pendingPointSelection;
                    setTimeout(function() {
                        page.fn.data.choosePTPointForDrawing(
                            pendingPoint.pointId,
                            pendingPoint.fileIndex,
                            pendingPoint.objectId,
                            pendingPoint.classId
                        );
                    }, 150);
                    // Clear the pending selection
                    page.data.pendingPointSelection = null;
                }
            }

            let objectList = page.data.loadTicket.fileList[fileIndex].objectList;
            objectList.forEach(function (o) {

                if (o.objectId == object.objectId) {
                    if (page.data.drawing.object && o.objectId == page.data.drawing.object.objectId) {
                        if (objBoxSizeJson[o.objectId]) {
                            let obj_ = JSON.parse(objBoxSizeJson[o.objectId]);
                            createCube2DSide(fileIndex, o, obj_);
                        }
                        if (objBoxSizeJsonFront[o.objectId]) {
                            let obj_ = JSON.parse(objBoxSizeJsonFront[o.objectId]);
                            createCube2DSideFront(fileIndex, o, obj_);
                        }
                        if (o.objectType == 'drawCube2D') {
                            let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
                            if (objBoxSizeJson[o.objectId]) {
                                let objectBoxSize = JSON.parse(objBoxSizeJson[o.objectId]);
                                for (let i = 0; i < 9; i++) {
                                    let g = svg.children("g[objectId='" + object.objectId + "'][id='group_points_" + object.objectId + "']");
                                    let circle = g.children('circle[index="' + i + '"]');
                                    if (objectBoxSize['P' + i] != undefined) {
                                        if (objectBoxSize['P' + i] == 0) {
                                            circle.css("stroke", "grey");
                                        }
                                    }
                                }
                                for (let i = 9; i <= 10; i++) {
                                    let g = svg.children("g[objectId='" + object.objectId + "'][data-objectType='drawCube2DSide']");
                                    let circle = g.children('circle[index="' + i + '"]');
                                    if (objectBoxSize['P' + i] != undefined) {
                                        if (objectBoxSize['P' + i] == 0) {
                                            circle.css("stroke", "grey");
                                        }
                                    }
                                }
                            }
                        }
                        if (o.objectType == 'drawCube2DFront') {
                            let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
                            if (objBoxSizeJsonFront[o.objectId]) {
                                let objectBoxSize = JSON.parse(objBoxSizeJsonFront[o.objectId]);
                                for (let i = 0; i < 9; i++) {
                                    let g = svg.children("g[objectId='" + object.objectId + "'][id='group_points_" + object.objectId + "']");
                                    let circle = g.children('circle[index="' + i + '"]');
                                    if (objectBoxSize['P' + i] != undefined) {
                                        if (objectBoxSize['P' + i] == 0) {
                                            circle.css("stroke", "grey");
                                        }
                                    }
                                }
                                for (let i = 9; i <= 10; i++) {
                                    let g = svg.children("g[objectId='" + object.objectId + "'][data-objectType='drawCube2DSideFront']");
                                    let circle = g.children('circle[index="' + i + '"]');
                                    if (objectBoxSize['P' + i] != undefined) {
                                        if (objectBoxSize['P' + i] == 0) {
                                            circle.css("stroke", "grey");
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });

            if (page.data.userSetting.isViewTags == "half") {
                page.fn.resize.objectToCenter(objectId);
            }
            page.data.event.isSelectedObject = true;
        } catch (E) {
            log.error(E, "page.fn.data.onSelectObject");
        }
    } else {
        page.fn.drawing.startNewDrawing(page.constants.method.moveImage);
    }
}
page.fn.data.unSelectObject = function (callBy) {
    page.dom.rootObjectTagList.empty();
    if (callBy != "page.fn.drawing.startNewDrawing") {
        page.fn.drawing.startNewDrawing(page.constants.method.none);
    }
    page.fn.drawing.unRenderObjectPoint();
    if ($("#btnObjectVisible_" + page.data.event.selectedObjectId).text() == "visibility_off") {
        page.fn.drawing.toggleVisibleObject(page.data.event.currentFileIndex, page.data.event.selectedObjectId, false);
    }
    $("#rootObject_" + page.data.event.selectedObjectId).removeClass("on");
    if (_common.isNotEmpty(page.data.event.selectedObjectId)) {
        $("#" + page.data.event.selectedObjectId).removeClass("move-body");
    }

    page.data.event.selectedObjectId = "";
    $("#btn_selectObject").removeClass("on");
    $("svg circle.draw-point").not(".bev-rotate-handle").removeClass("draw-point");
    $("svg g.editing").removeClass("editing");

    page.dom.rootPopPTPoints.empty();
    page.dom.rootPopPTPoints.append(_common.template.parseObject("tmpl-popPt-nosupport"));
    $("#rootPointTagInput li").hide();
    $("#noneObjectPointTag").show();
}
page.fn.data.selectNextObject = function () {
    let fileIndex = page.data.event.currentFileIndex;
    if (page.data.loadTicket.fileList[fileIndex].objectList
        && page.data.loadTicket.fileList[fileIndex].objectList.length > 0) {
        let currentIndex = Number.parseInt(_common.nvl($("#rootObjectList li.on").attr("index"), "0"));
        currentIndex = currentIndex >= page.data.loadTicket.fileList[fileIndex].objectList.length ? 0 : currentIndex;
        page.fn.data.onSelectObject(fileIndex, page.data.loadTicket.fileList[fileIndex].objectList[currentIndex].objectId);
    } else {
        page.fn.alert(page.message.notExistsObject);
    }
}
page.fn.data.selectNextObjectGroup = function () {
    if (page.data.event.currentFile.objectGroupInfo && page.data.event.currentFile.objectGroupInfo.length > 0) {
        let currentIndex = Number.parseInt(_common.nvl($("#popObjectGroup li.on .groupIndex").text().substring(3, 4), "0"));
        currentIndex = currentIndex >= page.data.event.currentFile.objectGroupInfo.length ? 0 : currentIndex;
        log.info(currentIndex, "page.fn.selectNextObjectGroup");
        page.fn.drawing.highlightGroupObject(page.data.event.currentFile.objectGroupInfo[currentIndex].groupId, page.data.event.currentFileIndex);
    } else {
        page.fn.alert(page.message.notExistsObjectGroup);
    }
}
page.fn.data.getObject = function (fileIndex, objectId) {
    let o = null;
    for (var i = 0; i < page.data.loadTicket.fileList[fileIndex].objectList.length; i++) {
        let object = page.data.loadTicket.fileList[fileIndex].objectList[i]
        if (object.objectId == objectId) {
            o = object;
            o.objectOrder = o.objectOrder == null ? i + 1 : o.objectOrder;
            break;
        }
    }
    return o;
}
page.fn.data.getImageTag = function (tagId, fileIndex) {
    let tag = null;
    for (let i = 0; i < page.data.loadTicket.fileList[fileIndex].tagList.length; i++) {
        if (tagId == page.data.loadTicket.fileList[fileIndex].tagList[i].tagId) {
            tag = page.data.loadTicket.fileList[fileIndex].tagList[i];
            break;
        }
    }
    return tag;
}
page.fn.data.getObjectTag = function (tagId, objectId, reviewFailFileIndex) {
    reviewFailFileIndex = reviewFailFileIndex != null ? reviewFailFileIndex : page.data.event.currentFileIndex;
    log.debug("tagId=" + tagId + ", objectId=" + objectId, "page.fn.data.getObjectTag");
    let tag = null;
    let object = page.fn.data.getObject(reviewFailFileIndex, objectId);
    if (object != null) {
        if (object.tagList != null) {
            for (let j = 0; j < object.tagList.length; j++) {
                if (tagId == object.tagList[j].tagId) {
                    tag = object.tagList[j];
                }
            }
        }
    }
    return tag;
}
page.fn.data.getConstantsTag = function (tagId) {
    let tag = null;
    for (let i = 0; i < page.data.task.tags.length; i++) {
        if (tagId == page.data.task.tags[i].tagId) {
            tag = page.data.task.tags[i];
            break;
        }
    }
    return tag;
}

page.fn.data.getObjectPosition = function (fileIndex, object) {
    let imageSize = page.fn.data.getImageOriginalSize(fileIndex);
    page.fn.data.castLocationToObject(object);

    // --- Tìm min/max tọa độ để biết kích thước object ---
    let minX = Infinity, minY = Infinity;
    let maxX = -Infinity, maxY = -Infinity;
    object.location.forEach(pos => {
        if (pos) {
            minX = Math.min(minX, pos[0]);
            minY = Math.min(minY, pos[1]);
            maxX = Math.max(maxX, pos[0]);
            maxY = Math.max(maxY, pos[1]);
        }
    });

    // Chuyển sang pixel hiển thị
    minX *= imageSize.scale;
    minY *= imageSize.scale;
    maxX *= imageSize.scale;
    maxY *= imageSize.scale;

    const objectWidth = maxX - minX;
    const objectHeight = maxY - minY;

    // --- Lấy vị trí user cấu hình ---
    const posSetting = (page?.data?.userSetting?.tagPosition) || "top-right";
    let x = minX;
    let y = minY;

    switch (posSetting) {
        case "top-right":
            x = minX + objectWidth;
            y = minY;
            break;
        case "bottom-left":
            x = minX;
            y = minY + objectHeight;
            break;
        case "bottom-right":
            x = minX + objectWidth;
            y = minY + objectHeight;
            break;
        case "top-left":
        default:
            x = minX;
            y = minY;
    }

    return {x, y};
};

page.fn.data.castLocationToObject = function (object) {
    try {
        object.objectLocation = object.objectLocation.replace(/\\/gi, "");
        object.location = JSON.parse(object.objectLocation);
        if (object.objectType == page.constants.drawType.sideBox) {
            page.fn.data.unConvertObjectLocation(object);
        }
        let idx = 0;
        if (object.location != null) {
            for (let i = 0; i < object.location.length; i++) {
                if (object.objectType == page.constants.drawType.rectangle && i > 1) {
                    break;
                } else if (object.objectType == page.constants.drawType.rectangle4p && i > 3) {
                    break;
                }
                let l = object.location[i];
                l[0] = isNaN(Number.parseInt(l[0])) ? 0 : l[0];
                l[1] = isNaN(Number.parseInt(l[1])) ? 0 : l[1];
                if (object.objectType != page.constants.drawType.keypoint) {
                    l[2] = _common.isEmpty(l[2]) ? page.fn.data.createTempKey() + "" + lpad(idx++, 5, "0") : l[2];
                }
            }
        }
    } catch (E) {
        log.error(E);
        log.error(object, "page.fn.data.castLocationToObject");
    }
    return object;
}
page.fn.data.chooseObjectAll = function (isChecked) {
    if (isChecked == false || $(".objectList .contentsListHeader .colorIcon").hasClass("checked")) {
        $(".objectList .contentsListHeader .colorIcon").removeClass("checked");
        $("#rootObjectList .colorIcon").removeClass("checked");
        $(".rootWorkFile.on svg.drawingSVG .object-body").removeClass("selectedObject");
    } else {
        $(".objectList .contentsListHeader .colorIcon").addClass("checked");
        $("#rootObjectList .colorIcon").addClass("checked");
        $(".rootWorkFile.on svg.drawingSVG .object-body").addClass("selectedObject");
    }
}
page.fn.data.chooseObject = function (objectId) {
    log.info(objectId, "page.fn.chooseObject");
    if ($("#objColorIcon_" + objectId).hasClass("checked")) {
        $("#objColorIcon_" + objectId).removeClass("checked");
        $("svg .object-body[objectId='" + objectId + "']").removeClass("selectedObject");
    } else {
        $("#objColorIcon_" + objectId).addClass("checked");
        $("svg .object-body[objectId='" + objectId + "']").addClass("selectedObject");
    }
    if ($("#rootObjectList .colorIcon.checked").length != page.data.event.currentFile.objectList.length) {
        $(".objectList .contentsListHeader .colorIcon").removeClass("checked");
    } else {
        $(".objectList .contentsListHeader .colorIcon").addClass("checked");
    }
}
page.fn.data.changeClassByMagicAI = function (classId, className, color) {
    if (!page.data.loadTicket.isValid) {
        page.fn.alert(page.message.isInvalidEdit);
        return false;
    }
    log.info("page.data.event.selectChangeClassId=" + page.data.event.selectChangeClassId + ", classId=" + classId + ", className=" + className, "page.fn.data.changeClassByMagicAI");

    let object = page.fn.data.getObject(page.data.event.currentFileIndex, page.data.event.selectChangeClassId);
    if (object != null && object.classId != classId) {
        color = color.startsWith("#") ? color : "#" + color;
        $("#rootObject_" + page.data.event.selectChangeClassId + " .colorIcon").css("background-color", color);
        $("#rootObject_" + page.data.event.selectChangeClassId + " .className").attr("title", className);
        $("#rootObject_" + page.data.event.selectChangeClassId + " .className").text(className);
        $("svg .draw-object[objectId='" + page.data.event.selectChangeClassId + "']").removeClass("CLASS_" + object.classId);
        $("svg .draw-object[objectId='" + page.data.event.selectChangeClassId + "']").addClass("CLASS_" + classId);

        object.classId = classId;
        object.className = className;
        object.color = color;
        page.fn.drawing.renderObjectTag(object);
        page.fn.data.changeDefaultClass(classId, className);
        if (object.objectId == page.data.drawing.object.objectId) {
            page.data.drawing.object = _common.copy(object);
        }
    }
    if (_common.isEmpty(page.data.event.selectedObjectId)) {
        page.dom.rootObjectTagList.empty();
    } else {
        page.fn.drawing.renderObjectTag(page.fn.data.getObject(page.data.event.currentFileIndex, page.data.event.selectedObjectId));
    }
    page.fn.drawing.resetPopupTag(page.data.event.currentFileIndex, "page.fn.data.changeClassByMagicAI");
    page.data.event.selectChangeClassId = "";
    page.fn.popup.hidePopupClass();

}
page.fn.data.changeClass = function (classId, className, color) {
    if (!page.data.loadTicket.isValid) {
        page.fn.alert(page.message.isInvalidEdit);
        return false;
    }
    log.info("page.data.event.selectChangeClassId=" + page.data.event.selectChangeClassId + ", classId=" + classId + ", className=" + className, "page.fn.data.changeClass");
    if (page.data.event.selectChangeClassId == "ALL") {
        $("#rootObjectList .colorIcon.checked").each(function (i, o) {
            let objectId = $(o).attr("objectId");
            log.info("objectId=" + objectId);
            let object = page.fn.data.getObject(page.data.event.currentFileIndex, objectId);
            if (object != null) {
                if (object.classId != classId) {
                    let message = _common.template.parseMessage(page.message.changeClass, {
                        beforeClassName: object.className
                        , orderSeq: object.objectOrder
                        , afterClassName: className
                    });
                    page.gateway(page.constants.gateway.command.add, message);
                    color = color.startsWith("#") ? color : "#" + color;
                    $("#rootObject_" + objectId + " .colorIcon").css("background-color", color);
                    $("#rootObject_" + objectId + " .className").attr("title", className);
                    $("#rootObject_" + objectId + " .className").text(className);
                    $("svg .draw-object[objectId='" + objectId + "']").removeClass("CLASS_" + object.classId);
                    $("svg .draw-object[objectId='" + objectId + "']").addClass("CLASS_" + classId);
                    object.classId = classId;
                    object.className = className;
                    object.color = color;
                    page.fn.drawing.renderObjectTag(object);
                    page.fn.data.changeDefaultClass(classId, className);
                    if (object.objectId == page.data.drawing.object.objectId) {
                        page.data.drawing.object = _common.copy(object);
                    }
                }
            }
        });
    } else {
        let object = page.fn.data.getObject(page.data.event.currentFileIndex, page.data.event.selectChangeClassId);
        if (object != null) {
            if (object.classId != classId) {
                let message = _common.template.parseMessage(page.message.changeClass, {
                    beforeClassName: object.className
                    , orderSeq: object.objectOrder
                    , afterClassName: className
                });
                page.gateway(page.constants.gateway.command.add, message);
                color = color.startsWith("#") ? color : "#" + color;
                $("#rootObject_" + page.data.event.selectChangeClassId + " .colorIcon").css("background-color", color);
                $("#rootObject_" + page.data.event.selectChangeClassId + " .className").attr("title", className);
                $("#rootObject_" + page.data.event.selectChangeClassId + " .className").text(className);
                $("svg .draw-object[objectId='" + page.data.event.selectChangeClassId + "']").removeClass("CLASS_" + object.classId);
                $("svg .draw-object[objectId='" + page.data.event.selectChangeClassId + "']").addClass("CLASS_" + classId);

                object.classId = classId;
                object.className = className;
                object.color = color;
                page.fn.drawing.renderObjectTag(object);
                page.fn.data.changeDefaultClass(classId, className);
                if (object.objectId == page.data.drawing.object.objectId) {
                    page.data.drawing.object = _common.copy(object);
                }
            }
        }
    }
    if (_common.isEmpty(page.data.event.selectedObjectId)) {
        page.dom.rootObjectTagList.empty();
    } else {
        page.fn.drawing.renderObjectTag(page.fn.data.getObject(page.data.event.currentFileIndex, page.data.event.selectedObjectId));
    }
    // page.fn.data.changeDefaultClass(classId, className);
    page.fn.drawing.resetPopupTag(page.data.event.currentFileIndex, "page.fn.data.changeClass");
    page.data.event.selectChangeClassId = "";
    page.fn.popup.hidePopupClass();
}
page.fn.data.changeDefaultClass = function (classId, className) {
    if (page.constants.config.defaultClass == "last") {
        page.data.drawing.lastSelectedClass.classId = classId;
        page.data.drawing.lastSelectedClass.className = className;
        page.data.drawing.lastSelectedClass.classColor = page.data.task.classMap.get(classId).color;
    }
}
page.fn.data.convertTicketList = function (list) {
    let r = [];
    let idx = 0;
    for (let i = 0; i < list.length; i++) {
        let d = list[i];
        let t = {};
        t.projectId = d.projectId;
        t.taskId = d.taskId;
        t.fileIndex = idx;
        t.workTicketId = d.workTicketId;
        t.annotatorId = d.annotatorId;
        t.content = d.content;
        t.countFail = d.failCount;
        t.countFailWorker = d.countFailWorker;
        t.currentDatetime = d.currentDatetime;
        t.inspectedDatetime = d.inspectedDatetime;
        t.inspErrList = d.inspErrList;
        t.inspectMessage = d.inspectMessage;
        t.inspectorId = d.inspectorId;
        t.reviewMessage = d.reviewMessage;
        t.detailData = d.reviewFailData;
        t.reviewAttachGroupSeq = d.reviewAttachGroupSeq;
        t.reviewedDatetime = d.reviewedDatetime;
        t.reviewerId = d.reviewerId;
        t.status = d.status;
        t.statusInsp = d.statusInspect;
        t.statusName = d.status;
        t.ocStatus = d.ocStatus;
        t.statusReview = d.statusReview;
        t.updateDatetime = d.modifyDatetime;
        t.workType = d.workType;
        t.workedDate = d.workedDate;
        t.workedDatetime = d.workedDatetime;
        t.attachFileId = d.reviewFileUrl;
        t.attachFileName = d.reviewFileName;
        t.fileList = [];
        for (let j = 0; j < d.fileList.length; j++) {
            t.fileList.push(page.fn.data.convertTicketData(t.workTicketId, d.fileList[j], j));
        }

        t.path = t.fileList[0].path;
        t.fileName = t.fileList[0].fileName;
        t.orgnFilePath = t.fileList[0].orgnFilePath;
        t.orgnfileName = t.fileList[0].orgnfileName;

        idx++;
        r.push(t);
    }
    return r;
}
page.fn.data.setImageItemStatus = function (o) {
    o.statusName = page.message.statusNameOpen;
    o.iconTitle = page.message.imageIconTitleInValid;
    o.isCanSave = false;
    if (page.data.permissionCode == page.constants.workType.master) {
        if (
            o.status == page.constants.imageStatus.reviewed
            && o.statusReview == page.constants.imageStatus.pass
        ) {
            if (_common.isNotEmpty(o.statusInsp)) {
                o.icon = "lock_open";
                o.iconTitle = page.message.imageIconTitleValid;
                o.isValid = true;
                o.isRejected = false;
                o.rejectedCls = "passed";
                o.isCanSave = true;
                if (o.statusInsp == 'OK') {
                    o.statusName = page.message.statusNameInspOK;
                } else if (o.statusInsp == 'NG') {
                    o.statusName = page.message.statusNameInspNG;
                }
            } else {
                o.icon = "lock";
                o.iconTitle = page.message.imageIconTitleInValid;
                o.isValid = false;
                o.isRejected = false;
                o.rejectedCls = "passed";
                o.statusName = page.message.statusNameReviewedPass;
                o.isCanSave = false;
            }
        } else if (
            o.status == page.constants.imageStatus.reviewed
            && o.statusReview == page.constants.imageStatus.fail
        ) {
            o.icon = "lock";
            o.iconTitle = page.message.imageIconTitleInValid;
            o.isValid = false;
            o.isRejected = false;
            o.rejectedCls = "rejected";
            o.statusName = page.message.statusNameReviewedFail;
            o.isCanSave = false;
        } else if (o.status == page.constants.imageStatus.open) {
            o.icon = "lock";
            o.iconTitle = page.message.imageIconTitleInValid;
            o.isValid = false;
            o.isRejected = false;
            o.rejectedCls = "open";
            o.statusName = page.message.statusNameOpen;
            o.isCanSave = false;
        } else if (o.status == page.constants.imageStatus.work_worked) {
            o.icon = "lock";
            o.iconTitle = page.message.imageIconTitleInValid;
            o.isValid = false;
            o.isRejected = false;
            o.rejectedCls = "worked";
            o.statusName = page.message.statusNameWorked;
        } else if (o.status == page.constants.imageStatus.assigned) {
            o.icon = "lock";
            o.iconTitle = page.message.imageIconTitleInValid;
            o.isValid = false;
            o.isRejected = false;
            o.rejectedCls = "worked";
            o.statusName = page.message.statusNameWorking;
        } else if (o.status == page.constants.imageStatus.review_assigned) {
            o.icon = "lock";
            o.iconTitle = page.message.imageIconTitleInValid;
            o.isValid = false;
            o.isRejected = false;
            o.rejectedCls = "assigned";
            o.statusName = page.message.statusNameReviewing;
        } else if (o.statusReview == 'master comment') {
            o.icon = 'lock_open';
            o.isValid = true;
            o.isRejected = false;
            o.rejectedCls = "open";
            o.statusName = page.message.statusNameOpen;
            o.isCanSave = true;
        } else {
            o.icon = 'lock';
            o.isValid = false;
            o.isRejected = false;
            o.rejectedCls = "open";
            o.statusName = page.message.statusNameOpen;
        }
    } else if (page.data.permissionCode == page.constants.workType.demo) {
        o.icon = "lock_open";
        o.iconTitle = page.message.imageIconTitleValid;
        o.isValid = true;
        o.isRejected = false;
        o.rejectedCls = "assigned";
        o.statusName = page.message.statusNameWorking;
        o.isCanSave = true;
    } else if (o.workType == page.constants.workType.annotator) {
        if (
            o.status == page.constants.imageStatus.assigned
        ) {
            o.icon = "lock_open";
            o.iconTitle = page.message.imageIconTitleValid;
            o.isValid = true;
            o.isRejected = false;
            o.rejectedCls = "assigned";
            o.statusName = page.message.statusNameWorking;
            o.isCanSave = true;
        } else if (o.status == page.constants.imageStatus.reviewed
            && o.statusReview == page.constants.imageStatus.fail) {
            o.icon = "lock_open";
            o.iconTitle = page.message.imageIconTitleValid;
            o.isValid = true;
            o.isRejected = true;
            o.isViewRejectReason = false;
            o.rejectedCls = "rejected";
            o.statusName = page.message.statusNameReviewedFail;
            o.isCanSave = true;
        } else if (o.status == page.constants.imageStatus.reviewed
            && o.statusReview == page.constants.imageStatus.pass) {
            o.icon = 'lock';
            o.isValid = false;
            o.isRejected = false;
            o.rejectedCls = "passed";
            o.statusName = page.message.statusNameReviewedPass;
        } else if (o.status == page.constants.imageStatus.work_worked) {
            o.icon = 'lock';
            o.isValid = false;
            o.isRejected = false;
            o.rejectedCls = "worked";
            o.statusName = page.message.statusNameWorked;
        } else if (o.status == page.constants.imageStatus.review_assigned) {
            o.icon = 'lock';
            o.isValid = false;
            o.isRejected = false;
            o.rejectedCls = "rvassigned";
            o.statusName = page.message.statusNameReviewing;
        } else {
            o.icon = 'lock';
            o.isValid = false;
            o.isRejected = false;
            o.rejectedCls = "open";
            o.statusName = page.message.statusNameOpen;
        }
    } else if (o.workType == page.constants.workType.reviewer) {
        if (
            o.status == page.constants.imageStatus.reviewed
            && o.statusReview == page.constants.imageStatus.pass
        ) {
            o.icon = "lock_open";
            o.iconTitle = page.message.imageIconTitleValid;
            o.isValid = true;
            o.isRejected = false;
            o.rejectedCls = "passed";
            o.statusName = page.message.statusNameReviewedPass;
            o.isCanSave = true;
        } else if (
            o.status == page.constants.imageStatus.reviewed
            && o.statusReview == page.constants.imageStatus.fail
        ) {
            o.icon = "lock";
            o.iconTitle = page.message.imageIconTitleInValid;
            o.isValid = false;
            o.isRejected = false;
            o.rejectedCls = "rejected";
            o.statusName = page.message.statusNameReviewedFail;
            o.isCanSave = false;
        } else if (o.status == page.constants.imageStatus.open) {
            o.icon = "lock";
            o.iconTitle = page.message.imageIconTitleInValid;
            o.isValid = false;
            o.isRejected = false;
            o.rejectedCls = "open";
            o.statusName = page.message.statusNameOpen;
        } else if (o.status == page.constants.imageStatus.work_worked) {
            o.icon = "lock";
            o.iconTitle = page.message.imageIconTitleInValid;
            o.isValid = false;
            o.isRejected = false;
            o.rejectedCls = "worked";
            o.statusName = page.message.statusNameWorked;
        } else if (o.status == page.constants.imageStatus.assigned) {
            o.icon = "lock";
            o.iconTitle = page.message.imageIconTitleInValid;
            o.isValid = false;
            o.isRejected = false;
            o.rejectedCls = "worked";
            o.statusName = page.message.statusNameWorking;
        } else if (o.status == page.constants.imageStatus.review_assigned) {
            o.icon = "lock_open";
            o.iconTitle = page.message.imageIconTitleValid;
            o.isValid = true;
            o.isRejected = false;
            o.rejectedCls = "assigned";
            o.statusName = page.message.statusNameReviewing;
        } else {
            o.icon = 'lock';
            o.isValid = false;
            o.isRejected = true;
            o.rejectedCls = "rejected";
            o.statusName = page.message.statusNameOpen;
        }
    } else if (o.workType == page.constants.workType.manager || o.workType == page.constants.workType.owner) {
        if (
            o.status == page.constants.imageStatus.reviewed
            && o.statusReview == page.constants.imageStatus.pass
        ) {
            o.icon = "lock_open";
            o.iconTitle = page.message.imageIconTitleValid;
            o.isValid = true;
            o.isRejected = false;
            o.rejectedCls = "passed";
            o.isCanSave = true;
            if (_common.isNotEmpty(o.statusInsp)) {
                if (o.statusInsp == 'OK') {
                    o.statusName = page.message.statusNameInspOK;
                } else {
                    o.statusName = page.message.statusNameInspNG;
                }
            } else {
                o.statusName = page.message.statusNameReviewedPass;
            }
        } else if (
            o.status == page.constants.imageStatus.reviewed
            && o.statusReview == page.constants.imageStatus.fail
        ) {
            o.icon = "lock";
            o.iconTitle = page.message.imageIconTitleInValid;
            o.isValid = false;
            o.isRejected = false;
            o.rejectedCls = "rejected";
            o.statusName = page.message.statusNameReviewedFail;
            o.isCanSave = false;
        } else if (o.status == page.constants.imageStatus.open) {
            o.icon = "lock";
            o.iconTitle = page.message.imageIconTitleValid;
            o.isValid = true;
            o.isRejected = false;
            o.rejectedCls = "open";
            o.statusName = page.message.statusNameOpen;
            o.isCanSave = true;
        } else if (o.status == page.constants.imageStatus.work_worked) {
            o.icon = "lock";
            o.iconTitle = page.message.imageIconTitleInValid;
            o.isValid = false;
            o.isRejected = false;
            o.rejectedCls = "worked";
            o.statusName = page.message.statusNameWorked;
        } else if (o.status == page.constants.imageStatus.assigned) {
            o.icon = "lock";
            o.iconTitle = page.message.imageIconTitleInValid;
            o.isValid = false;
            o.isRejected = false;
            o.rejectedCls = "worked";
            o.statusName = page.message.statusNameWorking;
        } else if (o.status == page.constants.imageStatus.review_assigned) {
            o.icon = "lock";
            o.iconTitle = page.message.imageIconTitleInValid;
            o.isValid = false;
            o.isRejected = false;
            o.rejectedCls = "assigned";
            o.statusName = page.message.statusNameReviewing;
        } else {
            o.icon = 'lock';
            o.isValid = false;
            o.isRejected = false;
            o.rejectedCls = "open";
            o.statusName = page.message.statusNameOpen;
        }
    } else {
        o.icon = 'lock';
        o.isValid = false;
        o.isRejected = false;
        o.rejectedCls = "open";
        o.statusName = page.message.statusNameOpen;
        log.error(o, "permission is undefined!");
    }
    if (page.constants.isCO) {
        o.isValid = false;
        o.isCanSave = false;
        o.isRejected = false;
        o.icon = "lock";
        o.iconTitle = page.message.imageIconTitleInValid;
    }
    return o;
}
page.fn.data.convertTicketData = function (ticketId, data, fileIndex) {
    // log.info(data, "page.fn.data.convertTicketData, " + ticketId);
    let t = {};
    t.projectId = data.projectId;
    t.taskId = data.taskId;
    t.rawFileId = data.rawFileId;
    t.workTicketId = ticketId;
    t.workTicketId = data.workTicketId;
    t.path = data.rawFilePath;
    t.fileName = data.rawFileName;
    t.orgnFilePath = data.originalFilePath;
    t.orgnfileName = data.originalFileName;
    t.fileIndex = fileIndex;
    t.edgePointsMap = {};
    return t;
}
page.fn.data.changeImageListPaging = function () {
    page.data.paging.pageIndex = page.dom.imageListPageIndex.val();
    page.data.paging.pageNum = page.dom.imageListPageIndex.val();
    if (page.data.permissionCode != page.constants.workType.annotator) {
        try {
            page.data.searchConditionByReview.pageIndex = page.dom.imageListPageIndex.val();
        } catch (E) {
            log.error(E);
        }
    }
    page.dom.imageListPageIndex.blur();
    log.info("page.data.paging.pageIndex=" + page.data.paging.pageIndex, "page.fn.changeImageListPaging");
    page.fn.data.getImageList(false, false, true);
}
page.fn.data.getImageListByFileName = function (target) {  // status 상관없이 파일명 정리하기 위함
    let param = {};
    target = $(target);
    param.addAssignImage = false;
    if (target.hasClass("on")) {
        target.removeClass("on");
        param.sort = null;
        target.attr("title", page.message.sortListByFileNameOn);
    } else {
        target.addClass("on");
        param.sort = 'orgnFileName';
        target.attr("title", page.message.sortListByFileNameOff);
    }
    page.fn.data.getImageList(param);
}
page.fn.data.getImageList = function (param) {
    param.addAssignImage = _common.nvl(param.addAssignImage, false);
    page.dom.ticketList.empty();
    page.data.ticketsMap = new HashMap();

    if (param.addAssignImage == true && page.data.permissionCode == page.constants.workType.annotator) {
        log.info("first, request of assign");
        page.fn.data.requestFileAssign({
            projectId: page.param.projectId
            , taskId: page.param.taskId
            // , isPaging              : isPaging
            // , isRefreshPagingInfo   : isRefreshPagingInfo
            // , isAlertNoMoreAssign   : isAlertNoMoreAssign
            // , isRefresh             : isRefresh
        });
        return false;
    }

    let data = {};
    if (page.constants.ticketFileSize === 1) {
        data = page.fn.data.getParam(param.addAssignImage);
    }
    data.projectId = page.data.task.projectId;
    data.taskId = page.data.task.taskId;
    data.addAssignImage = param.addAssignImage;
    data.pageSize = 100;
    data.reqType = page.data.permissionCode;
    data.accessType = page.data.permissionCode;
    data.pageIndex = page.data.paging.pageIndex;
    data.sort = param.sort;
    let url = "/apis/v1/workspace/annotate/list";
    if (page.data.permissionCode == page.constants.workType.reviewer) {
        url = "/apis/v1/workspace/review/multiList"
    } else if (page.data.permissionCode == page.constants.workType.inspector) {
        url = "/apis/v1/workspace/inspect/multiList"
    } else if (page.data.permissionCode == page.constants.workType.master) {
        url = "/apis/v1/workspace/master/multiList"
    }

    if (page.data.permissionCode != page.constants.workType.annotator
        && page.data.searchConditionByReview != null
    ) {
        data.sort = page.data.searchConditionByReview.sort;
    }

    page.fn.showLoading("page.fn.data.getImageList");
    _common.ajax.asyncJSON2({
        url: url
        , param: data
        , returnFunction: function (r) {
            let isRejected = false;
            let isHasAssigned = false;
            if (r && r.data != null && r.data.length > 0) {
                let firstTicketId = "";
                let index = 0;
                let list = page.fn.data.convertTicketList(r.data);
                let fid = "";
                for (let o of list) {
                    if (fid == "") {
                        fid = o.workTicketId;
                    }
                    if (page.data.ticketsMap.get(o.workTicketId) == null) {
                        o.iconTitle = page.message.isInvalidEdit;
                        o = page.fn.data.setImageItemStatus(o);
                        if (o.rejectedCls == "assigned") {
                            isHasAssigned = true;
                        }
                        o.timeInterval = _common.time.toTextByCompare(o.updateDatetime, o.currentDatetime);
                        o.imageIndex = index;
                        o.serverName = page.data.imageServerName;
                        o.host = page.data.imageServerURL;
                        page.dom.ticketList.append(_common.template.parseObject("tmpl-imageListItem", o));
                        for (let j = 0; j < o.fileList.length; j++) {
                            let f = o.fileList[j];
                            f.serverName = page.data.imageServerName;
                            f.host = page.data.imageServerURL;
                            f.cropFileName = f.host + f.path + '/crop/50x50/' + f.fileName;

                            // Only append one representative image (first file) to the thumbnail area
                            if (j === 0) {
                                $(".wrapImage[ticketId='" + o.workTicketId + "']").append(_common.template.parseObject("tmpl-imageListItem-image", f));
                            }

                            // Keep rendering file descriptions for all files
                            $(`.wrapDescription[ticketId='${o.workTicketId}']`).append(_common.template.parseObject('tmpl-imageListItem-fileDiv', f));

                            if (j === 0) {
                                $(`.wrapDescription[ticketId='${o.workTicketId}'] #fileNameDiv[fileName='${f.fileName}']`).append(_common.template.parseObject('tmpl-imageListItem-fileName', f))
                                $(`.wrapDescription[ticketId='${o.workTicketId}'] #fileNameDiv[fileName='${f.fileName}']`).append(_common.template.parseObject('tmpl-imageListItem-fileCopy', f))
                            }

                        }
                        // Safety: ensure only one thumbnail remains for this card
                        $(".wrapImage[ticketId='" + o.workTicketId + "'] .cropImage:gt(0)").remove();
                        page.data.ticketsMap.put(o.workTicketId, o);
                        // if (firstTicketId == "" && o.isValid) {
                        //     firstTicketId = o.workTicketId;
                        // }
                        $("#btnShowNgReason_" + o.workTicketId).hide();
                        if (o.rejectedCls != "rejected") {
                            $("#btnShowRejectReason_" + o.workTicketId).hide();

                        } else {
                            isRejected = true;
                        }
                        if (o.statusInsp == "NG") {
                            if (page.data.permissionCode == page.constants.workType.annotator) {
                                $("#btnShowNgReason_" + o.workTicketId).hide();
                            } else {
                                // NG 시 추가
                                $("#btnShowNgReason_" + o.workTicketId).show();
                                $("#rootImageList > li.passed[data-ticketId='" + o.workTicketId + "'] button.lock").css("color", "#de6a6f");
                            }
                        } else {
                            $("#btnShowNgReason_" + o.workTicketId).hide();
                        }
                        index++;
                    }
                }
                //페이징 처리
                page.data.paging.perPaging = 100;
                page.data.paging.pageNum = r.paging.pageIndex;
                page.data.paging.totalCount = r.paging.totalCount;
                page.data.paging.curPageLen = r.data.length;
                page.fn.resetPaging();
                if (_common.isNotEmpty(page.param.workTicketId) && $("li[data-ticketId='" + page.param.workTicketId + "']").length > 0) {
                    firstTicketId = page.param.workTicketId;
                } else {
                    if (page.data.reqType == page.constants.reqType.review || page.data.reqType == page.constants.reqType.insp) {
                        for (var i = 0; i < r.data.length; i++) {
                            if (page.data.reqType == page.constants.reqType.review) {
                                if (r.data[i].status == page.constants.imageStatus.review_assigned) {
                                    firstTicketId = r.data[i].workTicketId;
                                    break;
                                }
                            } else if (page.data.reqType == page.constants.reqType.insp) {
                                if (r.data[i].statusInsp == null || r.data[i].statusInsp == "") {
                                    firstTicketId = r.data[i].workTicketId;
                                    break;
                                }
                            }
                        }
                    }
                }
                if (firstTicketId == "") {
                    firstTicketId = r.data[0].workTicketId;
                }
                page.fn.data.changeTicket(firstTicketId, true, true);
                // Notify BEV modules (and others) that workImage initial load is ready
                try {
                    if (!window.__WORKIMAGE_READY_EMITTED__) {
                        window.__WORKIMAGE_READY_EMITTED__ = true;
                        document.dispatchEvent(new CustomEvent('workImageReady'));
                    }
                } catch (e) { /* no-op */
                }
            } else {
                if (page.data.reqType == page.constants.reqType.review || page.data.reqType == page.constants.reqType.insp) {
                    $(".drawingImage").prop("src", $(".drawingImage").eq(0).attr("data-errorImage"));
                    alert(_common.template.parseMessage(page.message.noMoreAssignImageReview));
                    page.dom.btnReviewAssign.show();
                }
            }
            if (param.isRefresh == false
                && param.isHasAssigned == false
                && param.isAlertNoMoreAssign == true
                && param.isRejected == false) {
                _common.msg(page.message.noMoreAssignImage);
            }
            if (param.addAssignImage == true) {
                page.dom.loading.children(".looking").hide();
            }
            page.fn.initTooltip();
            page.fn.hideLoading();
        }, errorFunction: function (r) {
            page.fn.alert(page.message.failOfLoadImages);
            log.error(r, "page.fn.data.getImageList");
            if (param.addAssignImage == true) {
                page.dom.loading.children(".looking").hide();
            }
            page.fn.hideLoading();
        }
    });
}
page.fn.data.getParam = function (addAssignImage) {
    let param = null;
    if ("master/co".includes(page.data.permissionCode)) {
        param = page.data.searchConditionByReview;
    } else if (
        page.data.permissionCode != page.constants.workType.manager
        && page.data.permissionCode != page.constants.workType.reviewer
        && page.data.permissionCode != page.constants.workType.inspector
        && page.data.permissionCode != page.constants.workType.master
    ) {
        param = {
            projectId: page.param.projectId
            , taskId: page.param.taskId
            , reqType: page.param.reqType
            , workTicketId: page.param.workTicketId
            , pageIndex: page.data.paging.pageIndex
            , addAssignImage: addAssignImage
        };
    } else {
        param = page.data.searchConditionByReview;
    }
    if (param.pageIndex < 1) {
        param.pageIndex = 1;
    }
    // TODO 20230608 유채씨 요구사항 (작업툴도 100장씩 불러와주세요.)
    // if (page.data.permissionCode != page.constants.workType.annotator) {
    //     page.data.paging.perPaging = 100;
    // } else {
    //     page.data.paging.perPaging = 10;
    // }
    page.data.paging.perPaging = 100;
    param.pageSize = page.data.paging.perPaging;
    return param;
}
page.fn.data.requestFileAssign = function (param) {
    page.fn.showLoading("page.fn.requestFileAssign");
    page.dom.loading.children(".looking").show();
    _common.ajax.asyncJSON2({
        url: "/apis/v1/workspace/annotate/assign"
        , param: param
        , returnFunction: function (r) {
            page.fn.data.getImageList(
                false
            );
            page.fn.hideLoading();
        }
    });
}
page.fn.data.removePoint = function (object, pointIndex) {
    object.location.splice(pointIndex, 1);
}
page.fn.data.unConvertObjectLocation = function (object) {
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
page.fn.data.convertObjectLocation = function (object) {
    let objData = JSON.parse(object.objectLocation);
    if (typeof (objData.points) != "undefined") {
        object.objectData.points = object.location
        object.objectLocation = JSON.stringify(object.objectData);
    } else {
        object.objectLocation = JSON.stringify(object.location);
    }
}
page.fn.data.changeTicket = function (ticketId) {
    if (event?.target.tagName == 'BUTTON') {
        return false;
    }
    if (page.data.extraHistoryData.getAllDataToList().length > 0) {
        if (!confirm(_common.template.parseMessage(page.message.haveNoSaveData, {
            doSomething: page.message.doSomethingRefresh
        }))) {
            return false;
        }
    }
    let ticket = page.data.ticketsMap.get(ticketId);
    page.data.loadTicket = ticket;
    if (page.data.event.currentFileIndex == null) {
        page.data.event.currentFileIndex = 0;
    }
    log.info(ticket, "page.fn.data.changeTicket");
    for (var i = 0; i < Object.keys(page.data.ticketsMap.map).length; i++) {
        if (Object.keys(page.data.ticketsMap.map)[i] == ticketId) {
            page.constants.lastTicketId = ticketId;
            page.constants.lastTicketIndex = i;
            break;
        }
    }
    $(".drawingImage").prop("src", "/image/tool/annImage/empty.png")
        .attr("file-path", "");
    $("#rootImageList li").removeClass("on");
    $("svg.drawingSVG").empty();
    if (_common.isEmpty(ticket.selectedObjectIdMap)) {
        page.data.loadTicket.selectedObjectIdMap = new HashMap();
    }
    page.data.historyData = new HashMap();
    page.data.historyDrawData = new HashMap();
    page.data.extraHistoryData = new HashMap();
    page.data.historyDrawDataObject = new HashMap();
    page.data.reviewFailDetailData = new HashMap();
    page.fn.data.checkPermission();
    page.data.event.method = page.constants.method.moveImage;
    page.fn.event.animImageListFocus(ticketId);
    if (ticket.fileList.length !== page.constants.ticketFileSize) {
        alert("ticket is not available");
    }
    if (_common.isNotEmpty(ticket)) {
        $("li[data-ticketId='" + ticketId + "']").addClass("on");
        for (let i = 0; i < ticket.fileList.length; i++) {
            let fileUrl = page.data.userSetting.imageServerUrl == "default" ? page.data.imageServerURL : edgeImageServerUrl;
            fileUrl += ticket.fileList[i].path;
            fileUrl += "/";
            fileUrl += ticket.fileList[i].fileName;
            $(".drawingImage[data-file-index='" + i + "']")
                .prop("src", fileUrl)
                .attr("file-path", fileUrl)
            ;
        }
        $("#showUploadFile").hide();
        if (ticket.workType != page.constants.workType.annotator) {
            $("#multiReviewFileName").empty();
            $("#multiImageReviewSelect").empty();
            ticket.fileList.forEach(function (file, idx) {
                file.idx = idx == 0 ? "M" : idx;
                $("#multiReviewFileName").append(_common.template.parseObject("tmpl-multiReviewFileName", file));
                $("#multiImageReviewSelect").append(_common.template.parseObject("tmpl-multiImageReviewSelect", file));
            })
            $("#popReview_status").text(ticket.statusName);
            $("#popReview_annotatorId").text(ticket.annotatorId);
            $("#popReview_countFail").text(ticket.countFail);
            $("#popReview_workedDatetime").text(ticket.workedDatetime);
            $("#popReview_reviewedDatetime").text(ticket.reviewedDatetime);
            $("#popReview_reviewerId").text(ticket.reviewerId);
            $("#popReview_inspector").text(ticket.inspectorId);
            $("#popReview_inspectedDatetime").text(ticket.inspectedDatetime);
        }
    } else {
        page.fn.alert("This ticket is wrong, ticketId=" + ticketId);
    }
}
page.fn.data.checkPermission = function () {
    // worker
    if (page.data.permissionCode == page.constants.workType.annotator) {
        page.dom.btnImageGiveup.show();
        page.dom.btnImageTempSave.show();
        page.dom.btnImageComplete.show();
        // reviewer
    } else if (page.data.permissionCode == page.constants.workType.reviewer) {
        // review ing
        $("#popReviewFailReason").val("");
        if (page.data.loadTicket.status == page.constants.imageStatus.review_assigned) {
            $("#popReview_rejectArea").show();
            $(".imageSelect-area").show();
            $("#popReview_downloadFile").text("");
            $("#popReview_downloadFile").attr("data-fileId", "");
            $("#popReview_btnPass").show();
            $("#popReview_btnFail").show();
            $(".reject-choice").show();
            $("#rejectCheckBox").show();
            $(".filebox-wrap").show();
            page.dom.btnImageTempSave.hide();
            // review pass
        } else if (page.data.loadTicket.statusReview == page.constants.imageStatus.pass) {
            $("#popReview_rejectArea").hide();
            $("#popReview_btnPass").hide();
            $(".imageSelect-area").hide();
            $(".reject-choice").hide();
            $("#rejectCheckBox").hide();
            $(".filebox-wrap").hide();
            page.dom.btnImageTempSave.show();
            // review fail
        } else if (page.data.loadTicket.statusReview == page.constants.imageStatus.fail) {
            $("#popReview_rejectArea").show();
            $(".imageSelect-area").show();
            $("#popReviewFailReason").val(page.data.loadTicket.reviewMessage);
            $("#popReview_downloadFile").text(page.data.loadTicket.attachFileName);
            $("#popReview_downloadFile").attr("data-fileId", page.data.loadTicket.attachFileId);
            $(".reject-choice").hide();
            $("#rejectCheckBox").hide();
            $(".filebox-wrap").hide();
        } else {
            $(".imageSelect-area").hide();
        }
        page.dom.btnImageGiveup.hide();
        page.dom.btnImageComplete.hide();
        page.dom.btnReviewAssign.show();
        // inspector
    } else if (page.data.permissionCode == page.constants.workType.inspector) {
        $("#popReview_ngArea").hide();
        $("#btnPopReviewNGConfirm").hide();
        $("#popReview_btnInspOK").hide();
        $("#popReview_btnInspNG").hide();
        $(".reject-choice").hide(); // 사유 선택 select bar
        $("#ngReason").val("");
        $(".inspectionErrorForReviewNg").prop("checked", false);
        if (page.data.loadTicket.statusInsp == "OK") {
            $("#btnPopReviewNGConfirm").hide();
        } else if (page.data.loadTicket.statusInsp == "NG") {
            // NG 버튼 누를 때
            if (page.data.loadTicket.inspErrList != null) {
                let inspectErrList = page.data.loadTicket.inspErrList.split(",");
                inspectErrList.forEach(function (errCode) {
                    $("#inspErr_" + errCode).prop("checked", true);
                })
            }
            $(".inspectionErrorForReviewNg").prop("disabled", true).css("cursor", "not-allowed");
            $("#ngReason").prop("disabled", true).css("cursor", "not-allowed");
            $("#popReview_ngArea").show();
            $("#ngReason").val(page.data.loadTicket.inspectMessage);
        } else {
            $(".inspectionErrorForReviewNg").prop("disabled", false).css("cursor", "pointer");
            $("#ngReason").prop("disabled", false).css("cursor", "pointer");
            $(".reject-choice").show();
            $("#btnPopReviewNGConfirm").show();
            $("#popReview_btnInspOK").show();
            $("#popReview_btnInspNG").show();
        }
        $("#popReview_rejectArea").hide();
        $("#popReview_btnPass").hide();
        $(".imageSelect-area").hide();
        $("#rejectCheckBox").hide();
        page.dom.btnImageGiveup.hide();
        page.dom.btnImageTempSave.show();
        page.dom.btnImageComplete.hide();
        page.dom.btnReviewAssign.show();

        // master
    } else if (page.data.permissionCode == page.constants.workType.master) {
        if (page.data.loadTicket.statusInsp == "OK" || page.data.loadTicket.statusInsp == "NG") {
            page.dom.btnImageTempSave.show();
        } else {
            page.dom.btnImageTempSave.hide();
        }
        // page.dom.btnImageGiveup.hide();
        // page.dom.btnImageTempSave.hide();
        // page.dom.btnImageComplete.hide();
    }
    // reject object / tag
    if (page.data.loadTicket.statusReview == page.constants.imageStatus.fail) {
        try {
            if (typeof (page.data.loadTicket.detailData) == "string") {
                page.data.loadTicket.detailData = JSON.parse(page.data.loadTicket.detailData);
            }
            if (page.data.loadTicket.detailData != null) {
                if (!Array.isArray(page.data.loadTicket.detailData)) {    // 기존 멀티리뷰툴(단일이미지)에서는 리스트 형태가 아니므로 여기서 강제로 추가
                    page.data.loadTicket.detailData.fileIndex = 0;
                    page.data.loadTicket.detailData.rawFileId = page.data.loadTicket.fileList[page.data.loadTicket.detailData.fileIndex].rawFileId;
                    page.data.loadTicket.detailData = [page.data.loadTicket.detailData];
                }
                if (page.data.loadTicket.detailData.length > 0) {
                    page.data.loadTicket.detailData.forEach(function (d) {
                        page.data.reviewFailDetailData.put(d.rawFileId, d);
                    })
                }
            } else {
                page.data.loadTicket.fileList.forEach(function (file) {
                    let detailData = {
                        rawFileId: file.rawFileId
                        , fileIndex: file.fileIndex
                        , objectList: []
                        , tagList: []
                    }
                    page.data.loadTicket.detailData = [detailData]
                })
            }
        } catch (err) {
            log.info(err);
        }
    }

    if (!page.data.loadTicket.isValid) {
        page.dom.btnImageGiveup.hide();
        page.dom.btnImageTempSave.hide();
        page.dom.btnImageComplete.hide();
        $("#popReview_btnPass").hide();
        $("#popReview_btnFail").hide();
        $("#popReview_btnInspOK").hide();
        $("#popReview_btnInspNG").hide();
    }
}
page.fn.data.getConstantsClass = function (classId) {
    return page.data.task.classMap.get(classId);
}
page.fn.data.getImageOriginalSize = function (fileIndex) {
    let img = $("img.drawingImage[data-file-index='" + fileIndex + "']");
    return {
        width: Number.parseInt(img.attr("data-origin-width"))
        , height: Number.parseInt(img.attr("data-origin-height"))
        , scale: Number.parseFloat(img.attr("data-scale"))
        , index: Number.parseInt(img.attr("data-file-index"))
    };
}
page.fn.data.createTempKey = function () {
    let key = "TEMP_";
    key += getUUID();
    return key;
}
page.fn.data.changeFileIndex = function (fileIndex) {
    if (paint.data.isDrawingPaint) {
        paint.fn.stop();
    }
    page.fn.layout.topToFileLayout(fileIndex);
    page.data.event.beforeToolMethod = page.data.event.method;
    page.fn.data.chooseObjectAll(false);
    page.fn.data.unSelectObject();
    page.fn.popup.hideGroupListInObject();
    $("div.workIndexFileSelector button").removeClass("on").text("check_box_outline_blank");
    $("div.rootWorkFile").removeClass("on");
    $("div.workIndexFileSelector button[data-file-index='" + fileIndex + "']").addClass("on").text("check_box");
    $("div.rootWorkFile[data-file-index='" + fileIndex + "']").addClass("on");
    page.data.event.currentFileIndex = Number.parseInt(fileIndex);
    page.dom.svg = $("svg.drawingSVG[data-file-index='" + page.data.event.currentFileIndex + "']");
    page.dom.crosshairSVG = $("svg.crosshairSVG[data-file-index='" + page.data.event.currentFileIndex + "']");
    page.dom.crosshairVertical = page.dom.crosshairSVG.children(".crosshairVertical");
    page.dom.crosshairHorizon = page.dom.crosshairSVG.children(".crosshairHorizon");
    page.dom.txtImageScale.text(($("#drawingImage_" + fileIndex).attr("data-scale") * 100).toFixed(0));
    if (_common.isNotEmpty(page.data.loadTicket) && _common.isNotEmpty(page.data.loadTicket.fileList)) {
        page.data.event.currentFile = {};
        page.data.event.currentFile = page.data.loadTicket.fileList[fileIndex];
        page.fn.data.renderObjectData(fileIndex);
    }
    if (page.data.loadTicket.fileList != null) {
        if (page.data.loadTicket.fileList[fileIndex].workType != page.constants.workType.annotator) {
            $("#multiImageReviewSelect").val(fileIndex);
            page.fn.event.showReviewFileInfo(fileIndex);
        }
    }
    if (page.data.loadTicket.selectedObjectIdMap && _common.isNotEmpty(page.data.loadTicket.selectedObjectIdMap.get(fileIndex))) {
        page.fn.data.onSelectObject(fileIndex, page.data.loadTicket.selectedObjectIdMap.get(fileIndex));
    } else {
        page.data.event.beforeToolMethod = page.constants.method.moveImage;
        page.fn.drawing.startNewDrawing(page.data.event.beforeToolMethod);
    }
    page.fn.initTooltip();
    if (window.__BEV_MODE__ === true && typeof window.reprojectAllBevObjects === 'function') {
        try {
            setTimeout(function () {
                window.reprojectAllBevObjects();
            }, 0);
        } catch (_) {}
    }
}
page.fn.data.renderObjectData = function (fileIndex) {
    page.dom.rootImageTagList.empty();
    page.dom.rootObjectList.empty();
    if (_common.isEmpty(page.data.loadTicket.fileList[fileIndex].objectList)) {
        page.data.loadTicket.fileList[fileIndex].objectList = [];
    }
    for (let i = 0; i < page.data.loadTicket.fileList[fileIndex].objectList.length; i++) {
        let o = page.data.loadTicket.fileList[fileIndex].objectList[i];
        o.objectOrder = i + 1;
        o.isVisible = true;
        o.className = page.fn.data.getConstantsClass(o.classId).className;
        o.fileIndex = fileIndex;
        page.fn.drawing.setRootObjectList(fileIndex, o);
    }
    page.fn.drawing.renderImageTag(fileIndex);
    page.fn.drawing.renderObjectGroup(fileIndex);
    page.fn.drawing.refreshEdgePointList(fileIndex);
    log.info(page.data.loadTicket.fileList[fileIndex], "page.fn.data.renderObjectData, page.data.loadTicket.fileList[fileIndex]");
}
page.fn.data.getTagIconPath = function (tag, value) {
    if (tag != null) {
        value = value == null ? tag.val : value;
    }
    let iconPath;
    for (let i = 0; i < page.data.task.tags.length; i++) {
        if (page.data.task.tags[i].tagId == tag.tagId) {
            let t = page.data.task.tags[i];
            for (let j = 0; j < t.tagSelectValueVoList.length; j++) {
                if (t.tagSelectValueVoList[j].value == value) {
                    iconPath = t.tagSelectValueVoList[j].iconPath;
                }
            }
        }
    }
    return iconPath;
}

page.fn.data.getTagValueName = function (tag, value) {
    if (tag != null) {
        value = value == null ? tag.val : value;
    }
    if (tag.tagValTypeCd == page.constants.TagValueType.input) {
        if (tag == null) return "";
        else return value;
    } else if (tag.tagValTypeCd == page.constants.TagValueType.select) {
        for (let i = 0; i < page.data.task.tags.length; i++) {
            if (page.data.task.tags[i].tagId == tag.tagId) {
                let t = page.data.task.tags[i];
                for (let j = 0; j < t.tagSelectValueVoList.length; j++) {
                    if (t.tagSelectValueVoList[j].value == value) {
                        return t.tagSelectValueVoList[j].name;
                    }
                }
            }
        }
        // log.warn("tag value is not defined!", "page.fn.data.getTagValueName");
        return page.message.noSelectedOfSelect;
    }
}
page.fn.data.getTagValueColor = function (tag, value) {
    let color = null;
    if (tag != null) {
        value = value == null ? tag.val : value;
    }
    for (let i = 0; i < page.data.task.tags.length; i++) {
        if (page.data.task.tags[i].tagId == tag.tagId) {
            let t = page.data.task.tags[i];
            for (let j = 0; j < t.tagSelectValueVoList.length; j++) {
                if (t.tagSelectValueVoList[j].value == value) {
                    color = t.tagSelectValueVoList[j].color;
                }
            }
        }
    }
    log.debug("tag=" + tag.tagId + ", value=" + value + ", color=" + color, "page.fn.data.getTagValueColor")
    return color;
}
page.fn.data.makeObjectGroup = function (fileIndex, isCopiedName) {
    let groupName = isCopiedName == null ? "New" : isCopiedName;
    let grpList = page.data.event.currentFile.objectGroupInfo;
    let grp = _common.copy(page.constants.objectGroup);
    let grpId = getUUID();
    grp.groupId = grpId;
    grp.groupName = groupName;
    grp.objectList = [];
    grp.index = page.fn.data.setObjectGroupIndex(grpList);
    grp.fileIndex = fileIndex;
    grpList.push(grp);
    page.dom.popObjectGroupList.append(
        _common.template.parseObject("tmpl-objectGroup", grp)
    );
    return grp;
};
page.fn.data.setObjectGroup = function (fileIndex) {
    let file = page.data.loadTicket.fileList[fileIndex];
    let grpList = file.objectGroupInfo;
    if (grpList != null) {
        grpList.forEach(function (grp) {
            grp.fileIndex = fileIndex;
            grp.index = grp.index != null ? grp.index : grpList.length > 0 ? grpList.length + 1 : 1;
            if (grp.objectList == null) {
                grp.objectList = [];
            }
        })
    }
    for (let object of file.objectList) {
        if (object.groupId != null) {
            if (object.groupId.length != 0) {
                object.groupId = object.groupId.split(",");
                let grpList = page.fn.data.getObjectIncludeGroupList(object.groupId, fileIndex);
                if (grpList != null && grpList.length != 0) {
                    if (object.grpObjIdx == null) {
                        object.grpObjIdx = [];
                    }
                    grpList.forEach(function (grp) {
                        if (object.groupId.includes(grp.groupId)) {
                            object.grpObjIdx.push(grp.index)
                        }
                    });
                } else {
                    object.groupId = [];
                    object.grpObjIdx = [];
                }
            } else {
                object.groupId = [];
                object.grpObjIdx = [];
            }
        } else {
            object.groupId = [];
            object.grpObjIdx = [];
        }
    }
    if (grpList != null) {
        grpList.forEach(function (grp) {
            page.fn.data.sortObjNumList(fileIndex, grp);
        })
    }
}
page.fn.data.getObjectIncludeGroupList = function (groupIds, fileIndex) {
    let grp = [];
    let file = page.data.loadTicket.fileList[fileIndex];
    if (groupIds != null) {
        for (let i = 0; i < file.objectGroupInfo.length; i++) {
            if (groupIds.includes(file.objectGroupInfo[i].groupId)) {
                grp.push(file.objectGroupInfo[i]);
            }
        }
    }
    return grp;
}
page.fn.data.setObjectGroupIndex = function (grpList) {
    let idx = 1;
    if (_common.isNotEmpty(grpList)) {
        idx = grpList[page.data.event.currentFile.objectGroupInfo.length - 1].index + 1;
    } else {
        idx = 1;
    }
    return idx;
}
page.fn.data.getObjectGroup = function (groupId, fileIndex) {
    let grp = null;
    let file = page.data.loadTicket.fileList[fileIndex];
    if (groupId != null) {
        for (let i = 0; i < file.objectGroupInfo.length; i++) {
            if (file.objectGroupInfo[i].groupId == groupId) {
                grp = file.objectGroupInfo[i];
            }
        }
    }
    return grp;
}
page.fn.data.getObjectGroupIndex = function (groupId, fileIndex) {
    let file = page.data.loadTicket.fileList[fileIndex];
    let idx = 0;
    for (let i = 0; i < file.objectGroupInfo.length; i++) {
        if (file.objectGroupInfo[i].groupId == groupId) {
            idx = (i + 1);
            break;
        }
    }
    return idx;
}
page.fn.data.sortObjNumList = function (fileIndex, grp) {
    let objNumList = [];
    for (const objectId of grp.objectList) {
        let object = page.fn.data.getObject(fileIndex, objectId);
        if (object != null) {
            objNumList.push(object.objectOrder);
        }
    }
    if (objNumList.length > 0) {
        objNumList.sort(function (a, b) {
            if (a > b) return 1;
            if (a === b) return 0;
            if (a < b) return -1;
        });
        grp.objNumList = "#" + objNumList.join(", #");
    } else {
        grp.objNumList = "";
    }
}
page.fn.data.resetKeypointId = function () {
    page.data.objectKeypointId = null;
    page.dom.popKeyPoint.hide();
    page.data.keypointHotkeyAvailable = false;
}
page.fn.data.getKeypointId = function (t) {
    let keypointId = $(t).attr("data-keypointId");
    if (page.data.objectKeypointId != keypointId) {
        page.fn.drawing.endNewDrawing();
    }
    page.data.objectKeypointId = keypointId;
    page.dom.popKeyPoint.hide();
    page.data.keypointHotkeyAvailable = false;
    if (keypointId == page.data.magicKeypointId) {
        page.fn.drawing.startNewDrawing(page.constants.method.magicKey)
    } else {
        page.fn.drawing.startNewDrawing(page.constants.method.drawKeypoint);
    }
}
page.fn.data.updateObjectGroup = function (groupId, fileIndex) {
    if (!page.data.loadTicket.isValid && !page.data.loadTicket.isCanSave) {
        page.fn.alert(page.message.isInvalidEdit);
        return false;
    }
    if ($('button[data-groupId="' + groupId + '"]').hasClass("on")) {
        page.fn.drawing.endNewDrawing();
    } else {
        page.fn.drawing.startNewDrawing(page.constants.method.makeGroup, {
            changeIndex: page.fn.data.getObjectGroupIndex(groupId, fileIndex)
            , groupId: groupId
        });
        // page.constants.gateway.isMakeHistory = true;
    }
}
page.fn.data.changeGroupName = function (groupId, fileIndex) {
    log.info("page.fn.changeGrpName");
    $("#viewGrpName_" + groupId).hide();
    let groupName = $("#viewGrpName_" + groupId).attr("data-groupname");
    $("#inputGrpName_" + groupId).show().focus().val("").val(groupName);
    page.data.event.isValidHotkey = false;
}
page.fn.data.applyChangeGroupName = function (groupId, fileIndex) {
    log.info(groupId, "page.fn.applyChangeGrpName");
    let groupName = $("#inputGrpName_" + groupId).val();
    if (_common.isEmpty(groupName)) {
        groupName = $("#inputGrpName_" + groupId).attr("data-groupname");
    }
    $("#viewGrpName_" + groupId).text(groupName).show().attr("data-groupname", groupName);
    $("#inputGrpName_" + groupId).hide();
    let grp = page.fn.data.getObjectGroup(groupId, fileIndex);
    grp.groupName = groupName;
    page.data.event.isValidHotkey = true;
}
page.fn.data.choosePTPoint = function (pointId, fileIndex) {
    page.fn.drawing.highlightPoint(pointId);
    $("#rootPopPTPoints li").removeClass("on");
    $("#li_pt_" + pointId).addClass("on");
    page.data.event.selectedPointNumber = pointId;
    if (page.data.task.tags && page.data.task.tags.length > 0) {
        let object = page.fn.data.getObject(fileIndex, page.data.event.selectedObjectId);

        page.data.task.tags.forEach(function (tag) {
            if (tag.tagTypeCd === page.constants.tag.tagTypeCd.point) {
                if (tag.matchClasses == "ALL" || tag.matchClasses.includes(object.classId)) {
                    $("#noneObjectPointTag").hide();
                    $("#rootTag_" + tag.tagId).show();

                    let value = page.fn.data.getObjectPointTagValue(tag.tagId, object.objectId, pointId, fileIndex);
                    $("#selectTag_" + tag.tagId).val(value);
                }
            }
        });
    }
}
page.fn.data.savePointTagImmediately = function (target) {
    let tagId = $(target).attr("tagId");
    let fileIndex = $(target).attr("data-file-index");
    let objectId = $(target).attr("objectId");
    let tagValue = $(target).val();

    if (!fileIndex) fileIndex = page.data.event.currentFileIndex;
    if (!objectId) objectId = page.data.event.selectedObjectId;
    if (!objectId && page.data.drawing.object) objectId = page.data.drawing.object.objectId;

    let object = page.fn.data.getObject(fileIndex, objectId);
    if (!object && page.data.drawing.object && page.data.drawing.object.objectId === objectId) {
        object = page.data.drawing.object;
    }

    let selectedPointId = $("#rootPopPTPoints li.on").attr("data-pointId");
    if (!selectedPointId) selectedPointId = page.data.event.selectedPointNumber;

    if (object && selectedPointId) {
        let selectedPointIndex = -1;
        for (let i = 0; i < object.location.length; i++) {
            if (object.location[i][2] === selectedPointId) {
                selectedPointIndex = i;
                break;
            }
        }

        if (selectedPointIndex >= 0) {
            let pointInfo = object.location[selectedPointIndex][3];
            if (!pointInfo) {
                pointInfo = { tags: {} };
            } else if (!pointInfo.tags) {
                pointInfo.tags = {};
            }

            if (_common.isEmpty(tagValue)) {
                delete pointInfo.tags[tagId];
            } else {
                pointInfo.tags[tagId] = tagValue;
            }

            object.location[selectedPointIndex][3] = pointInfo;
            page.fn.data.convertObjectLocation(object);

            if (page.data.drawing.object && page.data.drawing.object.objectId === objectId) {
                page.data.drawing.object.location[selectedPointIndex][3] = pointInfo;
                page.fn.data.convertObjectLocation(page.data.drawing.object);
            }

            let view = page.fn.data.stringfyObjectPointTagValues(fileIndex, objectId, selectedPointId);
            $("#li_pt_" + selectedPointId + " div.tagValue").html(view).attr("title", view);
            $("#" + selectedPointId).attr("title", view);
            if (view == "") {
                $("#" + selectedPointId).removeClass("hasTag");
            } else {
                $("#" + selectedPointId).addClass("hasTag");
            }
        }
    }
}
page.fn.data.choosePTPointForDrawing = function (pointId, fileIndex, objectId, classId) {
    // Save current point tag values before switching to new point
    if (page.data.event.selectedPointNumber && page.data.task.tags) {
        page.data.task.tags.forEach(function (tag) {
            if (tag.tagTypeCd === page.constants.tag.tagTypeCd.point) {
                let selectTag = $("#selectTag_" + tag.tagId);
                if (selectTag.length > 0) {
                    // Trigger blur to save current value
                    selectTag.blur();
                }
            }
        });
    }

    page.fn.drawing.highlightPoint(pointId);
    $("#rootPopPTPoints li").removeClass("on");
    $("#li_pt_" + pointId).addClass("on");
    page.data.event.selectedPointNumber = pointId;
    if (page.data.task.tags && page.data.task.tags.length > 0) {
        page.data.task.tags.forEach(function (tag) {
            if (tag.tagTypeCd === page.constants.tag.tagTypeCd.point) {
                if (tag.matchClasses == "ALL" || tag.matchClasses.includes(classId)) {
                    $("#noneObjectPointTag").hide();
                    $("#rootTag_" + tag.tagId).show();

                    let value = page.fn.data.getObjectPointTagValue(tag.tagId, objectId, pointId, fileIndex);
                    $("#selectTag_" + tag.tagId).val(value);
                }
            }
        });
    }
}
page.fn.data.getObjectPointTagValue = function (tagId, objectId, pointId, fileIndex) {
    let value = "";
    try {
        let tags = page.fn.data.getObjectPointTags(fileIndex, objectId, pointId);
        try {
            value = tags[tagId];
        } catch (E) {
        }
    } catch (E) {
        log.error(E, "page.fn.getObjectPointTagValue");
    }
    return value;
}
page.fn.data.setEdgePointMap = function (fileIndex) {
    let file = page.data.loadTicket.fileList[fileIndex];
    // edgePoints를 /list에서만 초기화 하기 때문에 이미지 전환 후 이미지 재전환 시 edge-point가 계속 있는 문제로 인해 초기화
    file.edgePointsMap = {};
    if (file.objectList != null
        && file.objectList.length > 0) {
        file.objectList.forEach(function (object) {
            if (object.objectType == page.constants.drawType.edgeLines) {
                object = page.fn.data.castLocationToObject(object);
                object.location.forEach(function (loc) {
                    let p1 = loc[0];
                    let p2 = loc[1];
                    let edgePointId = loc[2];
                    file.edgePointsMap[edgePointId] = [p1, p2, edgePointId];
                })
            }
        });
    }
    page.fn.drawing.renderEdgePoint(fileIndex);
    page.fn.drawing.refreshEdgePointList(fileIndex)
}
page.fn.data.insertEdgePoint = function (event, fileIndex) {
    let point = page.fn.event.getPointOnFile(fileIndex, event);
    let pointId = getUUID();
    if (page.data.loadTicket.fileList[fileIndex].edgePointsMap == null) {
        page.data.loadTicket.fileList[fileIndex].edgePointsMap = {};
    }
    page.gateway(page.constants.gateway.command.add, page.message.insertEdgePoint);
    page.data.loadTicket.fileList[fileIndex].edgePointsMap[pointId] = [point.x, point.y, pointId];
    $("#popEdgePointsList").append(_common.template.parseObject("tmpl-edgePoint", {
        pointId: pointId
        , index: Object.keys(page.data.loadTicket.fileList[fileIndex].edgePointsMap).indexOf(pointId) + 1
        , fileIndex: fileIndex
    }));
}
page.fn.data.deleteAllEdgePoint = function () {
    let fileIndex = page.data.event.currentFileIndex;
    for (let pointId in page.data.loadTicket.fileList[fileIndex].edgePointsMap) {
        delete page.data.loadTicket.fileList[fileIndex].edgePointsMap[pointId];
        let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
        let startPointLines = svg.find("polyline[startEdgePointId='" + pointId + "']");
        let endPointLines = svg.find("polyline[endEdgePointId='" + pointId + "']");
        for (var i = 0; i < startPointLines.length; i++) {
            let line = startPointLines[i];
            let object = page.fn.data.getObject(fileIndex, $(line).attr("objectId"));
            if (object != null) {
                page.fn.data.deleteObject(fileIndex, object.objectId);
            }
        }
        for (var i = 0; i < endPointLines.length; i++) {
            let line = endPointLines[i];
            let object = page.fn.data.getObject(fileIndex, $(line).attr("objectId"));
            if (object != null) {
                page.fn.data.deleteObject(fileIndex, object.objectId);
            }
        }
    }
    page.fn.drawing.refreshEdgePointList(fileIndex);
}
page.fn.data.deleteEdgePoint = function (fileIndex, pointId) {
    delete page.data.loadTicket.fileList[fileIndex].edgePointsMap[pointId];
    let svg = $("svg.drawingSVG[data-file-index='" + fileIndex + "']");
    let startPointLines = svg.find("polyline[startEdgePointId='" + pointId + "']");
    let endPointLines = svg.find("polyline[endEdgePointId='" + pointId + "']");
    for (var i = 0; i < startPointLines.length; i++) {
        let line = startPointLines[i];
        let object = page.fn.data.getObject(fileIndex, $(line).attr("objectId"));
        page.fn.data.deleteObject(fileIndex, object.objectId);
    }
    for (var i = 0; i < endPointLines.length; i++) {
        let line = endPointLines[i];
        let object = page.fn.data.getObject(fileIndex, $(line).attr("objectId"));
        page.fn.data.deleteObject(fileIndex, object.objectId);
    }
    page.fn.drawing.refreshEdgePointList(fileIndex);
}
page.fn.data.runMagicPin = function (object) {
    page.data.event.isDrawing = false;
    page.data.event.isValidHotkey = false;
    let fileIndex = object.fileIndex;
    page.fn.showLoading("page.fn.runMagicPin");
    let points = JSON.parse(object.objectLocation);
    let x1 = Math.min(points[0][0], points[1][0]);
    let x2 = Math.max(points[0][0], points[1][0]);
    let y1 = Math.min(points[0][1], points[1][1]);
    let y2 = Math.max(points[0][1], points[1][1]);
    let param = {
        boxLocation: {
            x1: x1
            , x2: x2
            , y1: y1
            , y2: y2
        }, imgPath: page.data.loadTicket.fileList[fileIndex].path
        , imgNm: page.data.loadTicket.fileList[fileIndex].fileName
    };
    log.debug(param, "page.fn.runMagicPin()");
    _common.ajax.asyncJSON("/apis/v1/workspace/magicBox"
        , JSON.stringify(param)
        , function (r) {
            if (r && r.result) {
                let j = JSON.parse(r.data);
                if (!j.success || j.message) {
                    page.fn.data.excuteFailOfMagicBox("Error", "Magic Pin");
                } else if (j.segmentation == null) {
                    page.fn.data.excuteFailOfMagicBox("None", "Magic Pin");
                } else {
                    // let object = page.constants.getNewObject();
                    let points = [];
                    let anip = [];
                    let idx = 0;
                    let len25 = j.segmentation[0].length / 4;
                    let len50 = len25 * 2;
                    let len75 = len25 * 3;
                    let w = x2 - x1, h = y2 - y1;
                    let wi = Math.round(w / len25);
                    let hi = Math.round(h / len25);
                    j.segmentation[0].forEach(function (o) {
                        points.push([o.x, o.y, getUUID()]);
                        let sx, sy;
                        if (idx < len25) {
                            sx = x1;
                            sy = y1 + (hi * (idx));
                        } else if (idx < len50) {
                            sy = y2;
                            sx = x1 + (wi * (idx - len25));
                        } else if (idx < len75) {
                            sx = x2;
                            sy = y2 - (hi * (idx - len50));
                        } else {
                            sy = y1;
                            sx = x1 + (wi * (idx - len75));
                        }

                        anip.push([o.x, o.y, sx, sy]);
                        idx++;
                    });

                    object.points = points;
                    object.objectType = page.constants.drawType.polygon;
                    object.objectLocation = JSON.stringify(points);
                    $("svg [objectId='" + object.objectId + "']").remove();
                    page.fn.addAnimateToPolygon({
                        points: anip, objectId: object.objectId
                    }, function () {
                        page.fn.data.unConvertObjectLocation(object);
                        page.fn.data.saveObject(object);
                        page.fn.drawing.endNewDrawing("MagicPin");
                        page.fn.data.onSelectObject(object.fileIndex, object.objectId);
                    });
                    page.fn.hideLoading();
                }
            } else {
                page.fn.data.excuteFailOfMagicBox("None", "Magic Pin");
            }
            page.data.event.isValidHotkey = true;
        }, function () {
            page.fn.data.excuteFailOfMagicBox("Error", "Magic Pin");
            page.data.event.isValidHotkey = true;
        }, true
        , "application/json"
    );
}
page.fn.data.runMagicQ = function (object) {
    page.data.event.isDrawing = false;
    page.data.event.isValidHotkey = false;
    let fileIndex = object.fileIndex;
    page.fn.showLoading("page.fn.runMagicPin");
    let points = JSON.parse(object.objectLocation);
    let ps = [];
    points.forEach(function (p) {
        ps.push(Number.parseInt(p[0]));
        ps.push(Number.parseInt(p[1]));
    });
    let param = {
        polygonLocationList: JSON.stringify(ps)
        , imgPath: page.data.loadTicket.fileList[fileIndex].path
        , imgNm: page.data.loadTicket.fileList[fileIndex].fileName
    };
    log.info(param, "page.fn.runMagicQ");
    _common.ajax.asyncJSON("/apis/v1/workspace/magicQ"
        , JSON.stringify(param)
        , function (r) {
            if (r && r.result) {
                let j = JSON.parse(r.data);
                log.info(j);
                if (j.success != "true") {
                    log.info("MagicQ fail");
                    page.fn.data.excuteFailOfMagicBox("Error", "MagicQ");
                } else if (j.segmentation == null || j.cnt == 0) {
                    page.fn.data.excuteFailOfMagicBox("None", "MagicQ");
                } else {
                    j.segmentation = j.segmentation[0];
                    log.info(j.segmentation, "MagicQ-Source");
                    let points = [];
                    let anip = [];
                    let sx, sy;
                    try {
                        sx = object.points[0][0];
                        sy = object.points[0][1];
                    } catch (E) {
                        sx = 0;
                        sy = 0;
                    }
                    for (let i = 0; i < j.segmentation.length; i++) {
                        let px = j.segmentation[i][0], py = j.segmentation[i][1];
                        points.push([px, py, getUUID()]);
                        anip.push([px, py, sx, sy]);
                    }
                    object.points = points;
                    object.objectType = page.constants.drawType.polygon;
                    object.objectLocation = JSON.stringify(points);
                    $("svg [objectId='" + object.objectId + "']").remove();
                    page.fn.addAnimateToPolygon({
                        points: anip, objectId: object.objectId
                    }, function () {
                        page.fn.data.unConvertObjectLocation(object);
                        page.fn.data.saveObject(object);
                        page.fn.drawing.endNewDrawing("MagicQ");
                        page.fn.data.onSelectObject(object.fileIndex, object.objectId);
                    });
                    page.fn.hideLoading();
                }
            } else {
                page.fn.data.excuteFailOfMagicBox("Error", "MagicQ");
            }
            page.data.event.isValidHotkey = true;
        }, function () {
            page.fn.data.excuteFailOfMagicBox("Error", "MagicQ");
            page.data.event.isValidHotkey = true;
        }, true
        , "application/json"
    );
}
page.fn.data.runMagicBox = function (object) {
    log.info("page.fn.data.runMagicBox()");
    page.data.event.isDrawing = false;
    page.data.event.isValidHotkey = false;
    let fileIndex = object.fileIndex;
    page.fn.showLoading("page.fn.runMagicBox");
    let points = JSON.parse(object.objectLocation);
    let x1 = Math.min(points[0][0], points[1][0]);
    let x2 = Math.max(points[0][0], points[1][0]);
    let y1 = Math.min(points[0][1], points[1][1]);
    let y2 = Math.max(points[0][1], points[1][1]);
    let param = {
        boxLocation: {
            x1: x1
            , x2: x2
            , y1: y1
            , y2: y2
        }, imgPath: page.data.loadTicket.fileList[fileIndex].path
        , imgNm: page.data.loadTicket.fileList[fileIndex].fileName
    };
    _common.ajax.asyncJSON("/apis/v1/workspace/magicBox"
        , JSON.stringify(param)
        , function (r) {
            if (r && r.result) {
                let j = JSON.parse(r.data);
                log.debug(j);
                if (!j.success || j.message) {
                    page.fn.data.excuteFailOfMagicBox("Error", "Magic Box");
                } else if (j.segmentation == null) {
                    page.fn.data.excuteFailOfMagicBox("None", "Magic Box");
                } else {
                    let points = [];
                    let xx1 = x2, xx2 = x1, yy1 = y2, yy2 = y1;
                    j.segmentation[0].forEach(function (o) {
                        xx1 = Math.min(o.x, xx1);
                        yy1 = Math.min(o.y, yy1);
                        xx2 = Math.max(o.x, xx2);
                        yy2 = Math.max(o.y, yy2);
                    });
                    points.push([xx1, yy1, getUUID()]);
                    points.push([xx2, yy2, getUUID()]);
                    object.points = points;
                    object.objectLocation = JSON.stringify(points);
                    object.objectType = page.constants.drawType.rectangle;
                    // $("svg [objectId='"+object.objectId+"']").remove();
                    page.fn.addAnimateToRect({
                        xs: x1, xe: xx1
                        , ys: y1, ye: yy1
                        , ws: (x2 - x1), we: (xx2 - xx1)
                        , hs: (y2 - y1), he: (yy2 - yy1)
                        , objectId: object.objectId
                        , c2xs: x2, c2xe: xx2, c2ys: y2, c2ye: yy2
                    });
                    setTimeout(function () {
                        $("animate").remove();
                        page.fn.data.unConvertObjectLocation(object);
                        page.fn.data.saveObject(object);
                        page.fn.drawing.endNewDrawing("MagicPin");
                        page.fn.data.onSelectObject(object.fileIndex, object.objectId);
                    }, page.constants.animateTime);
                }
                page.fn.hideLoading();
            } else {
                page.fn.data.excuteFailOfMagicBox("Error", "Magic Box");
            }
            page.data.event.isValidHotkey = true;
        }, function () {
            page.fn.data.excuteFailOfMagicBox("Error", "Magic Box");
            page.data.event.isValidHotkey = true;
        }, true
        , "application/json"
    );
}
page.fn.data.runMagicKey = function (tempObject) {
    page.fn.showLoading("page.fn.runMagicKey");
    let points = JSON.parse(tempObject.objectLocation);
    let x1 = Math.min(points[0][0], points[1][0]);
    let x2 = Math.max(points[0][0], points[1][0]);
    let y1 = Math.min(points[0][1], points[1][1]);
    let y2 = Math.max(points[0][1], points[1][1]);
    let fileIndex = tempObject.fileIndex;
    let param = {
        boxLocation: {
            x1: x1
            , x2: x2
            , y1: y1
            , y2: y2
        }, imgPath: page.data.loadTicket.fileList[fileIndex].path
        , imgNm: page.data.loadTicket.fileList[fileIndex].fileName
    };
    if (page.data.magicKeypointId != null) {
        _common.ajax.asyncJSON("/apis/v1/workspace/magicKey"
            , JSON.stringify(param)
            , function (r) {
                if (r && r.result) {
                    $("svg [objectId='" + page.data.drawing.object.objectId + "']").remove();
                    r.data = r.data.replace(/"segmentation"/gi, '\"segmentation_old\"');
                    r.data = r.data.replace(/"2dkey"/gi, '\"segmentation\"');
                    let j = JSON.parse(r.data);
                    if (!j.success || j.message) {
                        page.fn.data.excuteFailOfMagicBox("Error", "Magic Key");
                    } else if (_common.isEmpty(j.segmentation) || j.segmentation == null) {
                        page.fn.data.excuteFailOfMagicBox("None", "Magic Key");
                    } else {
                        page.fn.data.deleteObject(fileIndex, page.data.drawing.object.objectId);
                        if (j.segmentation.length > 0) {
                            for (let i = 0; j.segmentation.length > i; i++) {
                                let object = _common.copy(page.fn.data.appendNewDrawMagicKeyObject(fileIndex));
                                let points = [];
                                let idx = 0;
                                j.segmentation[i].forEach(function (o) {
                                    const magicKeyStructure = page.data.task.keypointMap.get(page.data.magicKeypointId);
                                    if (magicKeyStructure != null && magicKeyStructure.position.length > 7) {
                                        if (magicKeyStructure.position[idx][7] == 'off') {
                                            idx++;
                                            points.push([-999, -999, idx, 2, 10]);
                                        } else {
                                            idx++;
                                            if (o[2] <= 0) {
                                                if (page.constants.magicKey.topRight.includes(idx - 1)) {
                                                    points.push([o[0] + x2, o[1] + y1, idx, 2, 10]);
                                                } else if (page.constants.magicKey.bottomLeft.includes(idx - 1)) {
                                                    points.push([o[0] + x1, o[1] + y2, idx, 2, 10]);
                                                } else if (page.constants.magicKey.bottomRight.includes(idx - 1)) {
                                                    points.push([o[0] + x2, o[1] + y2, idx, 2, 10]);
                                                } else {
                                                    points.push([o[0] + x1, o[1] + y1, idx, 2, 10]);
                                                }
                                            } else {
                                                points.push([o[0] + x1, o[1] + y1, idx, 2, 10]);
                                            }
                                        }
                                    }
                                });
                                if (points.length > 0) {
                                    page.data.drawing.isAddingObject = true;
                                    object.points = points;
                                    object.objectLocation = JSON.stringify(points);
                                    page.fn.data.unConvertObjectLocation(object);
                                    page.fn.data.saveObject(object);
                                    page.data.drawing.object = _common.copy(object);
                                    page.fn.drawing.endNewDrawing("MagicKey");
                                    page.fn.data.onSelectObject(object.fileIndex, object.objectId);
                                }
                            }
                        }
                        page.fn.hideLoading();
                    }
                } else {
                    page.fn.data.excuteFailOfMagicBox("Error", "Magic Key");
                }
            }, function (e) {
                page.fn.data.excuteFailOfMagicBox("Error", "Magic Key");
            }, true
            , "application/json"
        );
    } else {
        page.fn.data.excuteFailOfMagicBox("Error", "Magic Key");
    }
    $("svg [objectId='" + tempObject.objectId + "']").remove();
}
page.fn.data.runMagicAI = function (magicAIType) {
    let fileIndex = page.data.event.currentFileIndex;
    page.data.event.isDrawing = false;
    page.data.event.isValidHotkey = false;
    let canDrawMagicAI = false;
    let haveAIObject = false;
    for (var i = 0; i < page.data.loadTicket.fileList[fileIndex].objectList.length; i++) {
        let object = page.data.loadTicket.fileList[fileIndex].objectList[i];
        if (object.fromMagicAI != null) {
            haveAIObject = true;
            if (confirm(page.message.confirmMagicAI)) {
                canDrawMagicAI = true;
                break;
            } else {
                break;
            }
        }
    }
    if (page.data.loadTicket.fileList[fileIndex].objectList.length == 0) {
        canDrawMagicAI = true;
    }
    if (!canDrawMagicAI && haveAIObject) {
        return false;
    }
    page.fn.showLoading("page.fn.runMagicAI");
//	page.gateway(page.constants.gateway.command.add, _common.template.parseMessage(page.message.startDrawing, {
//        drawName: "magicAI"
//    }));
    let param = {
        projectId: page.data.loadTicket.projectId
        , taskId: page.data.loadTicket.taskId
        , workTicketId: page.data.loadTicket.workTicketId
        , rawFileId: page.data.loadTicket.fileList[fileIndex].rawFileId
    };

    log.debug(param, "page.fn.data.runMagicAI()");
    _common.ajax.asyncJSON("/apis/v1/workspace/inference"
        , JSON.stringify(param)
        , function (r) {
            try {
                if (r && r.result) {
                    let j = r.data;
                    log.debug(j);
                    if (!j.success || j.message) {
                        page.fn.data.excuteFailOfMagicBox("Error", "Magic AI");
                    } else if (j.segmentation == null) {
                        page.fn.data.excuteFailOfMagicBox("None", "Magic AI");
                    } else {
                        let objNumList = [];
                        page.data.loadTicket.fileList[fileIndex].objectList.forEach(function (object) {
                            if (object.fromMagicAI != null) {
                                objNumList.push(object.objectId);
                            }
                        });
                        objNumList.forEach(function (o) {
                            page.fn.data.deleteObject(fileIndex, o);
                        });
                        let imageSize = page.fn.data.getImageOriginalSize(fileIndex);
                        if (magicAIType == "magicAIBox") {
                            j.segmentation.forEach(function (o) {
                                let object = page.fn.data.appendNewDrawObject({objectType: page.constants.drawType.rectangle});
                                let points = [];
                                let anip = [];
                                let sx, sy;
                                let x1, y1, x2, y2;
                                sx = imageSize.width / 2;
                                sy = imageSize.height / 2;
                                x1 = parseInt(o.bbox[0].x);
                                y1 = parseInt(o.bbox[0].y);
                                x2 = parseInt(o.bbox[1].x);
                                y2 = parseInt(o.bbox[1].y);
                                anip.push([x1, y1, sx, sy]);
                                anip.push([x2, y2, sx, sy]);

                                points.push([x1, y1]);
                                points.push([x2, y2]);
                                object.points = points;
                                // object.classId = o.classNumber;
                                object.objectType = page.constants.drawType.rectangle;
                                object.objectLocation = JSON.stringify(points);
                                object.fromMagicAI = true;


                                page.fn.addAnimateToPolygon({
                                    points: anip, objectId: object.objectId
                                }, function () {
                                    page.data.drawing.isAddingObject = true;
                                    page.fn.data.unConvertObjectLocation(object);
                                    page.fn.data.saveObject(object);
                                    page.data.drawing.object = _common.copy(object);
                                    page.data.event.selectChangeClassId = page.data.drawing.object.objectId;
                                    let updateClass = page.data.task.classes.find(cls => cls.classId == o.classNumber)
                                    page.fn.data.changeClassByMagicAI(updateClass.classId, updateClass.className, updateClass.color)
                                    page.fn.drawing.endNewDrawing("MagicAI");
                                    page.fn.data.onSelectObject(object.fileIndex, object.objectId);
                                });
                            });
                        } else {
                            j.segmentation.forEach(function (o) {
                                let object = page.fn.data.appendNewDrawObject({objectType: page.constants.drawType.polygon});
                                let points = [];
                                let anip = [];
                                let sx, sy;
                                sx = imageSize.width / 2;
                                sy = imageSize.height / 2;
                                o.points.forEach(function (p) {
                                    points.push([parseInt(p.x), parseInt(p.y), getUUID()]);
                                    anip.push([parseInt(p.x), parseInt(p.y), sx, sy]);
                                })
                                object.points = points;
                                // object.classId = o.classId;
                                object.objectType = page.constants.drawType.polygon;
                                object.objectLocation = JSON.stringify(points);
                                object.fromMagicAI = true;
                                page.fn.addAnimateToPolygon({
                                    points: anip, objectId: object.objectId
                                }, function () {
                                    page.data.drawing.isAddingObject = true;
                                    page.fn.data.unConvertObjectLocation(object);
                                    page.fn.data.saveObject(object);
                                    page.data.drawing.object = _common.copy(object);
                                    page.data.event.selectChangeClassId = page.data.drawing.object.objectId;
                                    let updateClass = page.data.task.classes.find(cls => cls.classId == o.classNumber)
                                    page.fn.data.changeClassByMagicAI(updateClass.classId, updateClass.className, updateClass.color)
                                    page.fn.drawing.endNewDrawing("MagicAI");
                                    page.fn.data.onSelectObject(object.fileIndex, object.objectId);
                                });
                            });
                        }
                    }
                } else {
                    page.fn.alert(page.message.notFoundObject);
                }
            } catch (E) {
                log.error(E);
            }
            page.fn.hideLoading();
            page.data.event.isValidHotkey = true;
        }, function () {
            page.fn.data.excuteFailOfMagicBox("Error", "Magic AI");
            page.fn.hideLoading();
            page.data.event.isValidHotkey = true;
        }, true
        , "application/json"
    );
}
page.fn.data.excuteFailOfMagicBox = function (errorType, functionName) {
    let msg = page.message.notFoundObject;
    let object = page.data.drawing.object;
    if (errorType == "Error") {
        msg = _common.template.parseMessage(page.message.errorMagin, {"funcName": _common.nvl(functionName, "")});
    }
    page.fn.alert(msg);
    $("svg .draw-object[objectId='" + object.objectId + "']").css("fill", "#841313").animate({
        "fill-opacity": "1"
    }, page.constants.animateTime / 2).animate({
        "fill-opacity": "0"
    }, page.constants.animateTime / 2);
    setTimeout(function () {
        page.fn.data.deleteObject(object.fileIndex, object.objectId);
        page.data.drawing.object = null;
        page.fn.drawing.endNewDrawing();
        page.fn.drawing.startNewDrawing(page.constants.method.moveImage);
    }, page.constants.animateTime);
    page.fn.hideLoading();
}
page.fn.data.createLocalForageKey = function () {
    let localForageKey = page.data.task.projectId + "_" + page.data.task.taskId;
    if ("review/reviewer".includes(page.param.reqType)) {
        page.data.localforageKey = "review_" + localForageKey;
        page.fn.data.getRejectReasonToLocal();
    } else if ("manager/inspector/modifyInsp".includes(page.param.reqType)) {
        page.data.localforageKey = "insp_" + localForageKey;
        page.fn.data.getinspNGReasonToLocal();
    }
}
page.fn.data.getRejectReasonToLocal = function () {
    localforage.getItem(page.data.localforageKey).then(function (value) {
        if (value) {
            page.data.rejectReason = value;
            page.fn.data.rejectReasonTmpl();
        }
    })
}
page.fn.data.saveRejectReason = function (rejectReason) {
    if ($("#textarea-check").prop("checked")) {
        if (!page.data.rejectReason.includes(rejectReason)) {
            page.data.rejectReason.unshift(rejectReason);
            if (page.data.rejectReason.length > 5) {
                page.data.rejectReason.pop();
            }
            page.fn.data.setLocalForageData();
        }
    }
}
page.fn.data.rejectReasonTmpl = function () {
    let ul = $(".reject-choice-ul");
    ul.empty();
    page.data.rejectReason.forEach(function (r) {
        ul.append(
            _common.template.parseObject("tmpl-choiceRejectMsg", {"rejectReason": r})
        )
    })
}
page.fn.data.removeRejectReason = function (t) {
    let target = t.parentNode;
    let innertext = target.innerText;
    let index = page.data.rejectReason.indexOf(innertext);
    target.remove();
    if (index > -1) {
        page.data.rejectReason.splice(index, 1);
        page.fn.data.setLocalForageData();
    }
}
page.fn.data.selectRejectReason = function (t) {
    let innertext = t.innerText;
    let parent = t.parentNode.parentNode;
    let textArea = $(parent).next().find("textarea");

    $(textArea).val(innertext);
    $(".reject-choice").removeClass("on");
    $(".reject-choice-ul").removeClass("on");
}
page.fn.data.isCheckedSaveInspNG = function (inspNGReason) {
    if (inspNGReason != '') {
        if ($("#textarea-ngCheck").prop("checked")) {
            page.fn.data.saveinspNGReason(inspNGReason);
        }
    }
}
page.fn.data.getinspNGReasonToLocal = function () {
    localforage.getItem(page.data.localforageKey).then(function (value) {
        if (value) {
            page.data.inspNGReason = value;
            page.fn.data.inspNGReasonTmpl();
        }
    });
}
page.fn.data.saveinspNGReason = function (inspNGReason) {
    if (!page.data.inspNGReason.includes(inspNGReason)) {
        page.data.inspNGReason.unshift(inspNGReason);
        if (page.data.inspNGReason.length > 8) {
            page.data.inspNGReason.pop();
        }
        page.fn.data.setLocalForageData();
    }
}
page.fn.data.inspNGReasonTmpl = function () {
    let ul = $(".reject-choice-ul");
    ul.empty();
    page.data.inspNGReason.forEach(function (r) {
        ul.append(
            _common.template.parseObject("tmpl-choiceinspNGMsg", {"inspNGReason": r})
        )
    });
}
page.fn.data.removeinspNGReason = function (t) {
    let target = t.parentNode;
    let innertext = target.innerText;
    let index = page.data.inspNGReason.indexOf(innertext);
    if (index > -1) {
        page.data.inspNGReason.splice(index, 1);
        page.fn.data.setLocalForageData();
    }
}
page.fn.data.setLocalForageData = function () {
    if ("review/reviewer".includes(page.param.reqType)) {
        if (page.data.rejectReason.length < 6) {
            localforage.setItem(page.data.localforageKey, page.data.rejectReason);
            page.fn.data.rejectReasonTmpl();
        }
    } else if ("manager/inspector".includes(page.param.reqType)) {
        if (page.data.inspNGReason.length < 9) {
            localforage.setItem(page.data.localforageKey, page.data.inspNGReason);
            page.fn.data.inspNGReasonTmpl();
        }
    }
}
page.fn.data.checkRejectData = function (target) {
    let t = $(target);
    let dataType = t.attr("data-type");
    let rawFileId = t.attr("data-rawFileId");
    let objectId = t.attr("data-objectId");
    let tagId = t.attr("data-tagId");
    let rawFileData = page.data.reviewFailDetailData.get(rawFileId);
    if (t.is(":checked")) {
        if (rawFileData == null) {
            let detailData = {
                rawFileId: rawFileId
                , objectList: []
                , tagList: []
            }
            page.data.reviewFailDetailData.put(rawFileId, detailData);
            rawFileData = page.data.reviewFailDetailData.get(rawFileId);
        }
        if (dataType == "object") {
            if (!rawFileData.objectList.includes(objectId)) {
                rawFileData.objectList.push(objectId)
            }
        } else {
            if (!Object.keys(rawFileData.tagList).includes(tagId)) {
                let tagData = {
                    objectId: objectId
                    , tagId: tagId
                }
                rawFileData.tagList.push(tagData)
            }
        }
    } else {
        if (rawFileData != null) {
            if (dataType == "object") {
                for (let idx = 0; idx < rawFileData.objectList.length; idx++) {
                    if (objectId == rawFileData.objectList[idx]) {
                        rawFileData.objectList.splice(idx, 1)
                        break;
                    }
                }
            } else {
                for (let idx = 0; idx < rawFileData.tagList.length; idx++) {
                    if (tagId == rawFileData.tagList[idx].tagId) {
                        rawFileData.tagList.splice(idx, 1)
                        break;
                    }
                }
            }
            if (rawFileData.objectList.length == 0 && rawFileData.tagList.length == 0) {
                page.data.reviewFailDetailData.remove(rawFileId);
            }
        }
    }
}
page.fn.data.moveImageCommand = function (command) {
    if ($(':focus').attr('id') == "imageListPageIndex") {
        page.dom.imageListPageIndex.blur();
    }
    let cur = Number.parseInt($(".imageListItem.on").data("index"));
    let next = null;
    let max = page.data.ticketsMap.getAllDataToList().length - 1;
    if (command == page.constants.moveImageMethod.first) {
        if (cur > 0) {
            next = 0;
        }
    } else if (command == page.constants.moveImageMethod.previous) {
        if (cur > 0) {
            next = cur - 1;
        }
    } else if (command == page.constants.moveImageMethod.next) {
        if (cur < max) {
            next = cur + 1;
        }
    } else if (command == page.constants.moveImageMethod.last) {
        if (cur < max) {
            next = max;
        }
    }
    if (next != null) {
        page.fn.data.changeTicket(page.data.ticketsMap.getAllDataToList()[next].workTicketId, true);
    }
}
page.fn.data.moveEdgePointsByArrange = function (direction) {
    let targetPoints = $(".edgePoint.arrangeTarget");
    if (targetPoints.length < 2) {
        page.fn.alert(page.message.selectMoreThanTwoEdgePoints);
    } else {
        let xPointList = [];
        let yPointList = [];
        targetPoints.each(function (idx, targetPoint) {
            targetPoint = $(targetPoint);
            let point = page.data.event.currentFile.edgePointsMap[targetPoint.attr("pointId")];
            xPointList.push(point[0])
            yPointList.push(point[1])
        })
        let message = _common.template.parseMessage(page.message.arrangeEdgePoints, {
            pointCount: targetPoints.length
            , direction: direction
        });
        page.gateway(page.constants.gateway.command.add, message);
        targetPoints.each(function (idx, targetPoint) {
            targetPoint = $(targetPoint);
            let pointId = targetPoint.attr("pointId");
            let edgePoint = page.data.event.currentFile.edgePointsMap[pointId]
            let position = {
                x: edgePoint[0]
                , y: edgePoint[1]
            }
            if (direction == "LEFT") {
                position.x = page.fn.drawing.limitMousePosition(Math.min(...xPointList));
            } else if (direction == "RIGHT") {
                position.x = page.fn.drawing.limitMousePosition(Math.max(...xPointList));
            } else if (direction == "TOP") {
                position.y = page.fn.drawing.limitMousePosition(Math.min(...yPointList));
            } else if (direction == "BOTTOM") {
                position.y = page.fn.drawing.limitMousePosition(Math.max(...yPointList));
            }
            page.fn.drawing.renderEdgePointLines(position, pointId)
        })
        page.fn.drawing.endNewDrawing("page.fn.data.moveEdgePointsByArrange()")
    }
}

page.fn.popup = {};
page.fn.popup.togglePopupObjectGroup = function () {
    if (page.dom.popObjectGroup.is(":visible")) {
        if ($('button[data-button-type="grpUpdate"].on').length > 0) {
            page.fn.drawing.endNewDrawing();
        }
        page.dom.popObjectGroup.fadeOut();
        $(".objectGroupRoot").removeClass("on");
        $("#btnTogglePopupObjectGroup").removeClass("on");
        if ($('button[data-groupId].on').length > 0) {
            page.fn.drawing.endNewDrawing();
        }
    } else {
        if (page.dom.popObjectGroup.position().left == 0 && page.dom.popObjectGroup.position().top == 0) {
            let pos = $(".objectListLi").offset();
            page.dom.popObjectGroup.css("top", pos.top).css("left", (pos.left - 100));
        }
        $("#btnTogglePopupObjectGroup").addClass("on");
        page.dom.popObjectGroup.fadeIn();
    }
}
page.fn.popup.togglePopMessageHistory = function () {
    if (page.dom.popMessageHistory.css("display") == "block") {
        page.dom.popMessageHistory.fadeOut();
        $("#btnTogglePopupHistory").removeClass("on");
    } else {
        page.dom.popMessageHistory.fadeIn();
        $("#btnTogglePopupHistory").addClass("on");
        $(".layer-popUp-wrap").css("z-index", page.constants.popupZindex - 1);
        page.dom.popMessageHistory.css("z-index", page.constants.popupZindex);
        if (page.dom.popMessageHistory.position().left == -1 && page.dom.popMessageHistory.position().top == -1) {
            page.dom.popMessageHistory.css("top", "calc(100vh - 250px)");
            page.dom.popMessageHistory.css("left", "50px");
        }
    }
}
page.fn.popup.togglePopupEdgePoints = function () {
    if (page.dom.popEdgePoints.is(":visible")) {
        if ($('button[data-button-type="grpUpdate"].on').length > 0) {
            page.fn.drawing.endNewDrawing();
        }
        page.dom.popEdgePoints.fadeOut();
        $("#btnToggleViewEdgePointsInfo").removeClass("on");
        if ($('button[data-groupId].on').length > 0) {
            page.fn.drawing.endNewDrawing();
        }
    } else {
        if (page.dom.popEdgePoints.position().left == 0 && page.dom.popEdgePoints.position().top == 0) {
            let pos = $(".objectListLi").offset();
            page.dom.popEdgePoints.css("top", pos.top).css("left", (pos.left - 100));
        }
        $("#btnToggleViewEdgePointsInfo").addClass("on");
        page.dom.popEdgePoints.fadeIn();
    }
}
page.fn.popup.changeTabOfHotkey = function (tab) {
    if (tab == "system") {
        $("#tab_system").addClass("on");
        $("#tab_task").removeClass("on");
        page.dom.rootHotkeySystem.show();
        page.dom.rootHotkeyTask.hide();
    } else {
        $("#tab_task").addClass("on");
        $("#tab_system").removeClass("on");
        page.dom.rootHotkeyTask.show();
        page.dom.rootHotkeySystem.hide();
    }
}
page.fn.popup.togglePointTag = function () {
    if (page.dom.popPointTag.is(":visible")) {
        page.dom.popPointTag.fadeOut();
    } else {
        page.dom.popPointTag.fadeIn();
        page.dom.popPointTag.css("top", "50px");
        page.dom.popPointTag.css("left", "50px");
    }
}
page.fn.popup.togglePopupOfHotkey = function () {
    if (page.dom.popHotkey.css("display") == "block") {
        page.dom.popHotkey.fadeOut();
        $("#btnTogglePopupHotkey").removeClass("on");
    } else {
        $(".layer-popUp-wrap[style*='z-index: " + page.constants.popupZindex + "']").css("z-index", page.constants.popupZindex - 1);
        page.dom.popHotkey.css("z-index", page.constants.popupZindex);
        page.dom.popHotkey.fadeIn();
        $("#btnTogglePopupHotkey").addClass("on");
        if (page.dom.popHotkey.position().left == -1 && page.dom.popHotkey.position().top == -1) {
            page.dom.popHotkey.css("top", "50px");
            page.dom.popHotkey.css("left", $(window).width() - 560 + "px");
        }
    }
}
page.fn.popup.toggleControlbar = function () {
    if (page.dom.popControlbar.css("display") == "block") {
        page.dom.popControlbar.fadeOut();
        $("#btnTogglePopupControlbar").removeClass("on");
    } else {
        $(".layer-popUp-wrap[style*='z-index: " + page.constants.popupZindex + "']").css("z-index", page.constants.popupZindex - 1);
        page.dom.popControlbar.css("z-index", page.constants.popupZindex);
        page.dom.popControlbar.fadeIn();
        $("#btnTogglePopupControlbar").addClass("on");
        if (page.dom.popControlbar.position().left == -1 && page.dom.popControlbar.position().top == -1) {
            page.dom.popControlbar.css("top", "50px");
            page.dom.popControlbar.css("left", $(window).width() - 450 + "px");
        }
    }
}
page.fn.popup.toggleGuide = function () {
    if (page.dom.popGuide.css("display") == "block") {
        page.dom.popGuide.fadeOut();
        $("#btnTogglePopupGuide").removeClass("on");
    } else {
        $(".layer-popUp-wrap[style*='z-index: " + page.constants.popupZindex + "']").css("z-index", page.constants.popupZindex - 1);
        page.dom.popGuide.css("z-index", page.constants.popupZindex);
        page.dom.popGuide.fadeIn();
        $("#btnTogglePopupGuide").addClass("on");
        if (page.dom.popGuide.position().left == 0 && page.dom.popGuide.position().top == 0) {
            page.dom.popGuide.css("left", ($(window).width() - page.dom.popGuide.width()) / 2);
            page.dom.popGuide.css("top", ($(window).height() - page.dom.popGuide.height()) / 2)
        }
    }
}
page.fn.popup.togglePopupClass = function (objectId, target) {
    if (objectId == "ALL" && $("#rootObjectList .colorIcon.checked").length == 0) {
        page.fn.alert(page.message.copyNoSelected);
        return false;
    }
    log.debug(target, "page.fn.popup.togglePopupClass");
    page.dom.changeClassModalContents.css("top", page.dom.pannelTitleOfOBJECT.offset().top - 80);
    $("#changeClassModal .modal-content .classList").css("max-height", $(window).height() - page.dom.rootObjectList.parent(".objectListScroller").offset().top - 50);
    page.dom.rootChangeClassList.empty();

    let object = page.fn.data.getObject(page.data.event.currentFileIndex, objectId);
    page.data.task.classes.forEach(function (cls) {
        cls.color = cls.color.startsWith("#") ? cls.color : "#" + cls.color;
        cls.cls = object != null && object.classId == cls.classId ? "on" : "";
        page.dom.rootChangeClassList.append(_common.template.parseObject("tmpl-changeClassItem", cls));
    });

    page.data.event.selectChangeClassId = objectId;
    page.dom.changeClassModal.fadeIn(page.constants.animateTime);
    page.fn.initTooltip();
}
page.fn.popup.hidePopupClass = function () {
    page.dom.changeClassModal.fadeOut(page.constants.animateTime);
}
page.fn.popup.toggleGroupListInObject = function (fileIndex, objectId, isVisible) {
    isVisible = isVisible == false ? false : true;
    page.constants.selectedGrpPopupObject = page.fn.data.getObject(fileIndex, objectId);
    page.fn.drawing.renderGroupInObject(fileIndex, objectId);
    if (page.dom.popGroupListInObject.position().left == 0 && page.dom.popGroupListInObject.position().top == 0) {
        let pos = $(".objectListLi").offset();
        page.dom.popGroupListInObject.css("top", pos.top).css("left", (pos.left - 100));
    }

    if (isVisible && !page.dom.popGroupListInObject.is(":visible")) {
        page.dom.popGroupListInObject.fadeIn();
    }
}
page.fn.popup.hideGroupListInObject = function () {
    page.constants.selectedGrpPopupObject = null;
    page.dom.popGroupListInObject.fadeOut(page.constants.animateTime);
}
page.fn.popup.toggleKeypoint = function () {
    page.data.objectKeypointId = null;
    page.data.keypointHotkeyAvailable = true;
    if ($(".multi-keypoint-btn").length == 1) {
        let t = $(".multi-keypoint-btn")[0];
        page.fn.data.getKeypointId(t);
    } else {
        if (page.dom.popKeyPoint.is(":visible")) {
            page.dom.popKeyPoint.hide();
            page.data.keypointHotkeyAvailable = false;
        } else {
            page.dom.popKeyPoint.css("top", $("#btn_drawKeypoint").offset().top);
            page.dom.popKeyPoint.show();
        }
    }
}
page.fn.popup.toggleReviewPopup = function () {
    let pop = $("#popReview");
    if (pop.is(":visible")) {
        pop.fadeOut();
        $("#btnTogglePopupReview").removeClass("on");
    } else {
        $("#btnTogglePopupReview").addClass("on");
        $(".layer-popUp-wrap[style*='z-index: " + page.constants.popupZindex + "']").css("z-index", page.constants.popupZindex - 1);
        pop.css("z-index", page.constants.popupZindex);
        pop.fadeIn();
        pop.css("left", $(window).width() - (pop[0].clientWidth + 20) + "px");
        if (pop.position().left == -1 && pop.position().top == -1) {
            pop.css("top", "50px");
        }
    }
}
page.fn.popup.makeRejectReasonPopup = function () {
    let reviewFailData = page.data.loadTicket.detailData;
    $("#rejectSelectedImageTagBody").empty();
    $("#rejectSelectedObjectBody").empty();
    page.data.loadTicket.fileList.forEach(function (file, idx) {
        file.idx = idx == 0 ? "M" : idx;
        $("#rejectSelectedImageTagBody").append(_common.template.parseObject("tmpl-popAlert_rejectImageTagBody", file));
        $("#rejectSelectedObjectBody").append(_common.template.parseObject("tmpl-popAlert_rejectObjectTagBody", file));
    })

    if (reviewFailData != null) {
        if (typeof (reviewFailData) == "string") {
            reviewFailData = JSON.parse(page.data.loadTicket.detailData);
        }
    } else {
    }
    // if(!Array.isArray(reviewFailData)) {    이거 checkPermission에서 미리 해줄거임 (리뷰 fail 데이터가 기존툴 {} 멀티툴 []라 변경해주는 작업)
    //     reviewFailData.fileIndex = 0;
    //     reviewFailData.rawFileId = page.data.loadTicket.fileList[reviewFailData.fileIndex].rawFileId;
    //     reviewFailData = [reviewFailData];
    // }
    reviewFailData.forEach(function (fd) {
        for (var i = 0; i < page.data.loadTicket.fileList.length; i++) {
            if (page.data.loadTicket.fileList[i].rawFileId == fd.rawFileId) {
                fd.fileIndex = page.data.loadTicket.fileList[i].fileIndex;
                break;
            }
        }
        fd.objectList.forEach(function (objectId) {
            let object = _common.copy(page.fn.data.getObject(fd.fileIndex, objectId));
            $("#rejectSelectedObjectTagList_" + fd.rawFileId).append(_common.template.parseObject("tmpl-popAlert_rejectObject", object))
        })

        fd.tagList.forEach(function (tagInfo) {
            let cTag = page.fn.data.getConstantsTag(tagInfo.tagId);
            if (tagInfo.objectId == "null" || tagInfo.objectId == '') {
                let tag = _common.copy(page.fn.data.getImageTag(tagInfo.tagId, fd.fileIndex));
                tag.name = cTag.name;
                $("#rejectSelectedImageTagList_" + fd.rawFileId).append(_common.template.parseObject("tmpl-popAlert_rejectImageTag", tag));
            } else {
                let object = _common.copy(page.fn.data.getObject(fd.fileIndex, tagInfo.objectId));
                let tag = _common.copy(page.fn.data.getObjectTag(tagInfo.tagId, tagInfo.objectId, fd.fileIndex));
                if (tag != null) {
                    tag.name = cTag.name;
                    tag.objectOrder = object.objectOrder;
                    tag.objectClassName = object.className;
                    $("#rejectSelectedObjectTagList_" + fd.rawFileId).append(_common.template.parseObject("tmpl-popAlert_rejectObjectTag", tag))
                }
            }
        })
    })
    let subTitle;
    if (page.data.task.rejectYN == "Y") {
        subTitle = [
            page.message.subTitleReject_1
            , page.message.subTitleReject_2
        ];
    } else if (page.data.task.rejectYN == "T") {
        subTitle = [page.message.subTitleReject_2];
    }
    let messageUl = $("#alertModalSubTitleWrap ul");
    messageUl.empty();
    if (_common.isNotEmpty(subTitle) && subTitle.length > 0) {
        subTitle.forEach(function (title) {
            messageUl.append("<li>※ " + title + "</li>");
        });
    }

    $("#alertModalMessage").html(page.data.loadTicket.reviewMessage);
    if (_common.isEmpty(page.data.loadTicket.attachFileId)) {
        $("#downloadAttachFile").text("");
        $("#downloadAttachFile").attr("data-fileId", "");

    } else {
        $("#downloadAttachFile").attr("data-fileId", page.data.loadTicket.attachFileId);
        $("#downloadAttachFile").text("" + page.data.loadTicket.attachFileName);
    }
}
page.fn.popup.makeNGReasonPopup = function () {
    let reviewFailData = page.data.loadTicket.detailData;
    $("#rejectSelectedImageTagBody").empty();
    $("#rejectSelectedObjectBody").empty();
    page.data.loadTicket.fileList.forEach(function (file, idx) {
        file.idx = idx == 0 ? "M" : idx;
        $("#rejectSelectedImageTagBody").append(_common.template.parseObject("tmpl-popAlert_rejectImageTagBody", file));
        $("#rejectSelectedObjectBody").append(_common.template.parseObject("tmpl-popAlert_rejectObjectTagBody", file));
    })

    let subTitle;
    if (page.data.task.rejectYN == "Y") {
        subTitle = [
            page.message.subTitleReject_1
            , page.message.subTitleReject_2
        ];
    } else if (page.data.task.rejectYN == "T") {
        subTitle = [page.message.subTitleReject_2];
    }
    let messageUl = $("#alertModalSubTitleWrap ul");
    messageUl.empty();
    if (_common.isNotEmpty(subTitle) && subTitle.length > 0) {
        subTitle.forEach(function (title) {
            messageUl.append("<li>※ " + title + "</li>");
        });
    }

    $("#alertModalMessage").html(page.data.loadTicket.inspectMessage);
}
page.fn.popup.toggleEdgePointsArrange = function () {
    if (!page.dom.popEdgePointsArrange.is(":visible")) {
        page.fn.drawing.startNewDrawing(page.constants.method.drawEdgePointsArrange);   // 팝업이 열린 상태로는 새로운 작업Type이니 startNewDrawing이 맞을듯
        $("#btn_drawEdgePoints").addClass("arrange");
        page.dom.popEdgePointsArrange.css("top", $("#btn_drawEdgePoints").offset().top);
        page.dom.popEdgePointsArrange.show();
        page.data.edgePointsArrangeAvailable = true;
    }
    // page.fn.drawing.startNewDrawing(page.constants.method.drawEdgePointsArrange);   // 팝업이 열린 상태로는 새로운 작업Type이니 startNewDrawing이 맞을듯
    // if (page.dom.popEdgePointsArrange.is(":visible")) {
    //     page.dom.popEdgePointsArrange.hide();
    //     page.data.edgePointsArrangeAvailable = false;
    //     $("#btn_drawEdgePoints").removeClass("arrange");
    //     $(".edgePoint").removeClass("arrangeTarget");
    // } else {
    // }
}
page.fn.popup.showRejectReason = function (workTicketId) {
    if (workTicketId != page.data.loadTicket.workTicketId) {
        page.fn.alert("load target ticket first");
        return false;
    }
    if (page.constants.refreshFailData) {
        page.constants.refreshFailData = false;
        page.fn.popup.makeRejectReasonPopup();
    }
    let title = _common.isEmpty(page.message.titleReject) ? "Notifications" : page.message.titleReject;
    $("#popAlertTitle").html(title);
    page.dom.popRejectAlertModal
        .css("left", ($(window).width() - page.dom.popRejectAlertModal.width()) / 2)
        .css("top", ($(window).height() - page.dom.popRejectAlertModal.height()) / 4)
        .fadeIn(page.constants.animateTime);
}
page.fn.popup.hideRejectReason = function () {
    $("#alertModalBtnConfirm").prop("checked", null);
    page.dom.popRejectAlertModal.fadeOut(page.constants.animateTime);
}
page.fn.popup.showNgReason = function (workTicketId) {
    if (workTicketId != page.data.loadTicket.workTicketId) {
        page.fn.alert("load target ticket first");
        return false;
    }
    if (page.constants.refreshFailData) {
        page.constants.refreshFailData = false;
        page.fn.popup.makeRejectReasonPopup();
    }
    let title = _common.isEmpty(page.message.titleReject) ? "Notifications" : page.message.titleReject;
    $("#popAlertTitle").html(title);
    page.dom.popRejectAlertModal
        .css("left", ($(window).width() - page.dom.popRejectAlertModal.width()) / 2)
        .css("top", ($(window).height() - page.dom.popRejectAlertModal.height()) / 4)
        .fadeIn(page.constants.animateTime);
}

page.fn.config = {};
page.fn.config.toggleDefaultClass = function () {
    setTimeout(function () {
        page.constants.config.defaultClass = $("input[name='defaultClass']:checked").val();
        if (page.constants.config.defaultClass == "default") {
            let cls = page.data.task.classMap.get(page.data.task.defaultClassId);
            page.data.drawing.lastSelectedClass.classId = cls.classId;
            page.data.drawing.lastSelectedClass.className = cls.className;
            page.data.drawing.lastSelectedClass.classColor = cls.color;
        }
    }, 100);
}
page.fn.config.toggleDefaultUrl = function () {
    setTimeout(function () {
        page.data.userSetting.imageServerUrl = $("input[name='defaultUrl']:checked").val();
        _common.cookie.set(page.constants.cookieKeys.imageServerUrl, page.data.userSetting.imageServerUrl);
        page.fn.data.changeTicket(page.data.loadTicket.workTicketId)
    }, 100);
}
page.fn.config.toggleKeypointLineStyle = function () {
    setTimeout(function () {
        page.data.userSetting.keypointLineStyle = $("input[name='keypointLineStyle']:checked").val();
        _common.cookie.set(page.constants.cookieKeys.keypointLineStyle, page.data.userSetting.keypointLineStyle);
        $("#style_keypoint_invisible_line").html($("#tmpl_style_keypoint_invisible_line_" + page.data.userSetting.keypointLineStyle).html());
    }, 100);
}
page.fn.config.setChangedControlbar = function (name, bar_value) {
    let etc = "";
    if (name == "brightness") {
        page.data.userSetting.brightness = bar_value;
        _common.cookie.set(page.constants.cookieKeys.brightness, bar_value);
        $("#style_imageFilter").html(_common.template.parseObject("tmpl_style_imageFilter", {
            "brightness": page.data.userSetting.brightness
            , "contrast": page.data.userSetting.contrast
        }));
        etc = "%";
    } else if (name == "contrast") {
        page.data.userSetting.contrast = bar_value;
        _common.cookie.set(page.constants.cookieKeys.contrast, bar_value);
        $("#style_imageFilter").html(_common.template.parseObject("tmpl_style_imageFilter", {
            "brightness": page.data.userSetting.brightness
            , "contrast": page.data.userSetting.contrast
        }));
        etc = "%";
    } else if (name == "opacity") {
        page.data.userSetting.opacity = bar_value;
        _common.cookie.set(page.constants.cookieKeys.opacity, bar_value);
        $("#style_opacity").html(_common.template.parseObject("tmpl_style_opacity", {
            "opacity": page.data.userSetting.opacity * 0.01
        }));
        etc = "%";
    } else if (name == "border") {
        page.data.userSetting.border = bar_value;
        _common.cookie.set(page.constants.cookieKeys.border, bar_value);
        $("#style_watch").html(_common.template.parseObject("tmpl_style_watch", {border: page.data.userSetting.border + 2}));
        $("#style_objectGroupHighlight").html(_common.template.parseObject("tmpl_style_objectGroupHighlight", {border: page.data.userSetting.border + 2}));
        $("#style_border").html(_common.template.parseObject("tmpl_style_border", {border: page.data.userSetting.border}));
        etc = "px";
    } else if (name == "point") {
        page.data.userSetting.point = bar_value;
        _common.cookie.set(page.constants.cookieKeys.point, bar_value);
        $("#style_point_size").html(_common.template.parseObject("tmpl_style_point_size", {point_size: page.data.userSetting.point}));
        etc = "px";
    } else if (name == "zoomRatio") {
        page.data.userSetting.zoomRatio = bar_value;
        _common.cookie.set(page.constants.cookieKeys.zoomRatio, bar_value);
        etc = "x";
    } else if (name == "subtagSize") {
        page.data.userSetting.subtagSize = bar_value;
        _common.cookie.set(page.constants.cookieKeys.subtagSize, bar_value);
        etc = "";
        page.fn.applySubtagOptions(true);
    } else if (name == "subtagOpacity") {
        page.data.userSetting.subtagOpacity = parseInt(bar_value) / 100;
        _common.cookie.set(page.constants.cookieKeys.subtagOpacity, bar_value);
        etc = "";
        page.fn.applySubtagOptions(true);
    }
    $("#txtSlider_" + name).text(bar_value + etc);
    $(".ui-slider-handle").blur();
}
page.fn.config.setCircleColorStart = function (color) {
    log.info(color, "page.fn.setCircleColorStart");
    page.config.color.circleStart = color;
    $("#style_circle_color_start").html(".drawingSVG circle.point-start {stroke: " + color + ";}");
    _common.cookie.set(page.constants.cookieKeys.pointColorStart, color);
}
page.fn.config.setCircleColor = function (color) {
    log.info(color, "page.fn.setCircleColor");
    page.config.color.circle = color;
    $("#style_circle_color").html(".drawingSVG circle.draw-point {stroke: " + color + ";} .drawingSVG circle.view-point {stroke: " + color + ";}");
    _common.cookie.set(page.constants.cookieKeys.pointColor, color);
}
page.fn.config.setCircleColorEnd = function (color) {
    log.info(color, "page.fn.setCircleColorEnd");
    page.config.color.circleEnd = color;
    $("#style_circle_color_end").html(".drawingSVG circle.point-end {stroke: " + color + ";}");
    _common.cookie.set(page.constants.cookieKeys.pointColorEnd, color);
}
page.fn.config.setSelectedCircleColor = function (color) {
    log.info(color, "page.fn.setCircleColor");
    page.config.color.circleSelected = color;
    $("#style_selected_circle_color").html(".drawingSVG circle {stroke: " + color + ";}");
    _common.cookie.set(page.constants.cookieKeys.pointColorSelected, color);
}
page.fn.config.setCrossHairColor = function (color) {
    log.info(color, "page.fn.setCrossHairColor");
    page.config.color.crossHair = color;
    $("#style_crosshair_color").html(".crosshairSVG .crosshairVertical {color: " + color + "; stroke: " + color + ";}" +
        ".crosshairSVG .crosshairHorizon {color: " + color + "; stroke: " + color + ";}"
    );
    _common.cookie.set(page.constants.cookieKeys.crossHairColor, color);
}
page.fn.config.setObjectFillDefaultColor = function (colorCode) {
    page.data.userSetting.tagValueNoneColor = colorCode;
    let styles = "";
    styles += "svg.drawingSVG rect.object-body.tag_none";
    styles += ", svg.drawingSVG circle.object-body.tag_none";
    styles += ", svg.drawingSVG polygon.object-body.tag_none";
    styles += " { ";
    styles += "fill: " + page.data.userSetting.tagValueNoneColor + " !important;"
    styles += " } ";

    styles += "svg.drawingSVG polyline.object-body.tag_none {";
    styles += "stroke: " + page.data.userSetting.tagValueNoneColor + " !important;"
    styles += " } ";
    $("#style_tag_default_color").html(styles);
}
page.fn.config.setDefaultControlbar = function (name) {
    let defVal;
    if (name == "brightness") {
        defVal = page.constants.userSetting.brightness;
    } else if (name == "contrast") {
        defVal = page.constants.userSetting.contrast;
    } else if (name == "opacity") {
        defVal = page.constants.userSetting.opacity;
    } else if (name == "border") {
        defVal = page.constants.userSetting.border;
    } else if (name == "point") {
        defVal = page.constants.userSetting.point;
    } else if (name == "point_color") {
        defVal = "#FC3C3C";
        $("#inputCircleColor").minicolors("value", {color: "#FC3C3C"});
    } else if (name == "point_color_selected") {
        defVal = "#FC3C3C";
        $("#inputSelectedCircleColor").minicolors("value", {color: "#FC3C3C"});
    } else if (name == "crosshair_color") {
        defVal = "#FC3C3C";
        $("#inputCrossHairColor").minicolors("value", {color: "#FC3C3C"});
    }
    nName = name.substr(0, 1).toUpperCase() + name.substr(1, name.length - 1);
    $("#slider" + nName).slider("value", defVal);
    page.fn.config.setChangedControlbar(name, defVal);
}
page.fn.config.setDefaultZoomRatio = function () {
    page.fn.config.setChangedControlbar("zoomRatio", 5);
    $("#sliderZoomRatio").slider("value", page.data.userSetting.zoomRatio);
}


page.fn.layout = {};
page.fn.layout.toggleFullscreen = function (index) {
    let target = $(".rootWorkFile[data-file-index='" + index + "']");
    if (target.attr("data-layout-fullscreen") == "off") {
        let before = target.attr("data-layout-type");
        if (before == "docking") {
            page.fn.layout.toggleDocking(index);
        }
        let posParent = target.parent().offset();
        let width = $(window).width()
            - page.constants.layout.marginLeft
            - page.constants.layout.marginRight
            - (page.constants.layout.marginBorder / 2)
        ;
        let height = $(window).height()
            - page.constants.layout.marginTop
            - page.constants.layout.marginBottom
            - (page.constants.layout.marginBorder / 2)
        ;
        let top = posParent.top * -1 + page.constants.layout.marginTop;
        let left = posParent.left * -1 + page.constants.layout.marginLeft;
        target
            .attr("data-layout-fullscreen", "on")
            .attr("data-layout-fullscreen-before", before)
            .css("top", top)
            .css("left", left)
            .css("width", width + "px")
            .css("height", height + "px")
        ;
        $('button[data-button-type="layout-workfile-fullscreen"][data-file-index="' + index + '"]').text("fullscreen_exit");
    } else {
        if (target.attr("data-layout-fullscreen-before") == "docking") {
            target.attr("data-layout-fullscreen", "off");
            page.fn.layout.toggleDocking(index);
        } else {
            target
                .attr("data-layout-fullscreen", "off")
                .css("top", target.attr("data-layout-top"))
                .css("left", target.attr("data-layout-left"))
                .css("width", target.attr("data-layout-width"))
                .css("height", target.attr("data-layout-height"))
            ;
        }
        $('button[data-button-type="layout-workfile-fullscreen"][data-file-index="' + index + '"]').text("fullscreen");
    }
    page.fn.resize.centerToFit($(".drawingImage[data-file-index='" + index + "']")[0]);
}
page.fn.layout.startResize = function (event, index) {
    page.data.event.workFileMover.isResizing = true;
    page.data.event.workFileMover.target = $(".rootWorkFile[data-file-index='" + index + "']").css("opacity", 0.7);
    page.data.event.workFileMover.startX = event.pageX;
    page.data.event.workFileMover.startY = event.pageY;
    page.data.event.workFileMover.ogirinWidth = page.data.event.workFileMover.target.width();
    page.data.event.workFileMover.ogirinHeight = page.data.event.workFileMover.target.height();
    page.fn.layout.topToFileLayout(Number.parseInt(index));
}
page.fn.layout.moveUndockingLayout = function (event, index) {
    log.info(event, "page.fn.layout.moveUndockingLayout");
    page.data.event.workFileMover.isMoving = true;
    page.data.event.workFileMover.target = $(".rootWorkFile[data-file-index='" + index + "']").css("opacity", 0.7);
    let pos = page.data.event.workFileMover.target.position();
    let posParent = page.data.event.workFileMover.target.parent().offset();

    page.data.event.workFileMover.startX = event.pageX;
    page.data.event.workFileMover.startY = event.pageY;
    page.data.event.workFileMover.ogirinX = pos.left;
    page.data.event.workFileMover.ogirinY = pos.top;
    page.data.event.workFileMover.minX = posParent.left * -1;
    page.data.event.workFileMover.minY = posParent.top * -1;
    page.data.event.workFileMover.maxX = $(window).width()
        - page.data.event.workFileMover.target.width()
        - posParent.left
        - page.constants.layout.marginBorder
    ;
    page.data.event.workFileMover.maxY = $(window).height()
        - page.data.event.workFileMover.target.height()
        - posParent.top
        - page.constants.layout.marginBorder
    ;
    page.fn.layout.topToFileLayout(Number.parseInt(index));
}
page.fn.layout.toggleDocking = function (index) {
    // TODO
    // FULL SCREEN 창 최소화 버튼 (index 0번쨰 버튼) 에 의존하는 방식 제거
    let layout = $(".rootWorkFile[data-file-index='" + index + "']");
    let current = layout.attr("data-layout-type");
    if (current == "docking") {
        // to undocking
        $("button[data-button-type='layout-workfile-docking'][data-file-index='" + index + "']").text("highlight_alt");
        layout.attr("data-layout-type", "undocking");
        let parent = layout.parent();

        let width = layout.attr("data-layout-width");
        if (_common.isEmpty(width)) width = parent.width() + "px";

        let height = layout.attr("data-layout-height");
        if (_common.isEmpty(height)) height = parent.height() + "px";

        layout
            .css("width", width)
            .css("height", height)
            .css("top", layout.attr("data-layout-top"))
            .css("left", layout.attr("data-layout-left"))
            .attr("data-layout-width", width)
            .attr("data-layout-height", height)
        ;
        page.fn.data.changeFileIndex(index);
    } else {
        // to docking
        $("button[data-button-type='layout-workfile-docking'][data-file-index='" + index + "']").text("open_in_new");
        layout.attr("data-layout-type", "docking");
        layout.css("width", '').css("height", "").css("top", "").css("left", "");
        if (layout.attr("data-layout-fullscreen") == "on") {
            layout.attr("data-layout-fullscreen", "off");
        }
    }
    page.fn.resize.centerToFit($(".drawingImage[data-file-index='" + index + "']")[0]);
}
page.fn.layout.topToFileLayout = function (index) {
    let filterArr = page.data.layout.undockingList.filter(function (data) {
        return data != index;
    });
    filterArr.push(index);
    page.data.layout.undockingList = filterArr;
    for (let i = 0; i < page.data.layout.undockingList.length; i++) {
        let idx = page.data.layout.undockingList[i];
        $('.rootWorkFile[data-file-index="' + idx + '"]').css("z-index", 50 + i);
    }
}
page.fn.layout.toggleMinimize = function (fileIndex) {
    let btn = $('button[data-button-type="layout-workfile-minimize"][data-file-index="' + fileIndex + '"]');
    let workArea = btn.parents(".rootWorkFile");
    if (workArea.hasClass("minimize")) {
        btn.text("minimize");
        workArea.removeClass("minimize");
    } else {
        btn.text("expand");
        workArea.addClass("minimize");
    }
    page.fn.resize.centerToFit($(".drawingImage[data-file-index='" + fileIndex + "']")[0]);
}
// 이미지 회전
page.fn.layout.rotateImage = function (fileIndex) {
    page.fn.data.changeFileIndex(fileIndex);
    let imageAngle = page.fn.layout.getImageRotationAngle(fileIndex);

    let rotateAngle = 90;
    let nextAngle = Number(imageAngle) + rotateAngle;

    if (page.constants.ticketFileSize !== 1) {
        page.data.rotationData[fileIndex] = nextAngle;
        let date = new Date();
        date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000 / 12));
        let rotationExpires = "; expires=" + date.toUTCString();
        document.cookie = `${page.data.task.taskId}_loc` + "=" + JSON.stringify(page.data.rotationData) + rotationExpires + "; path=/";

    }
    let imageWrap = $(".wrapImageArea[data-file-index='" + fileIndex + "']");
    let image = $(".drawingImage[data-file-index='" + fileIndex + "']");
    image.attr("data-file-rotation", nextAngle);
    imageWrap.css("transform", "rotate(" + nextAngle + "deg)");
    page.fn.data.onSelectObject(fileIndex, page.data.event.selectedObjectId);
    page.fn.resize.centerToFit(image);
    page.fn.drawing.initRuler(image);
    page.fn.drawing.resetPopupTag(fileIndex);
}
// 현재 이미지 회전 각도
page.fn.layout.getImageRotationAngle = function (fileIndex) {
    let transformValue = $(".wrapImageArea[data-file-index='" + fileIndex + "']").css("transform");
    let matrix = transformValue.match(/^matrix\((.+)\)$/);
    let angleDeg;
    if (matrix) {
        let matrixValues = matrix[1].split(', ');
        let a = parseFloat(matrixValues[0]);
        let b = parseFloat(matrixValues[1]);
        let angleRad = Math.atan2(b, a);
        angleDeg = (angleRad * 180) / Math.PI;
    } else {
        angleDeg = 0;
    }
    return angleDeg;
}


page.fn.toggle = {};
page.fn.toggle.toggleVisibleRightPannel = function (index) {
    let btn = $($(".btnVisibleRightPannel").get(index));
    let now = btn.text();
    if ($(".btnVisibleRightPannel.on").length < 2 && now == "keyboard_arrow_down") {
        return false;
    }

    let pannel = $($("#rightPannelRoot > li > .contentsPannel").get(index));
    log.debug(pannel, "page.fn.toggleVisibleRightPannel");
    let btnIcon;
    if (now == "keyboard_arrow_down") {
        btnIcon = "keyboard_arrow_up";
        btn.addClass("off");
        btn.removeClass("on");
        pannel.hide();
    } else {
        btnIcon = "keyboard_arrow_down";
        btn.addClass("on");
        btn.removeClass("off");
        pannel.show();
    }
    btn.text(btnIcon);
    $("#rightPannelRoot").removeClass(page.data.pannelRootClass);
    page.data.pannelRootClass = "on" + $(".btnVisibleRightPannel.on").length;
    $("#rightPannelRoot").addClass(page.data.pannelRootClass);
}
page.fn.toggle.toggleViewObjectGroup = function () {
    log.info("page.fn.toggleViewObjectGroup");
    page.fn.drawing.resetAllPopupTag('page.fn.toggleViewObjectGroup');
    if (page.data.userSetting.isViewObjectGroup == "true") {
        _common.cookie.set(page.constants.cookieKeys.isViewObjectGroup, "half");
        page.data.userSetting.isViewObjectGroup = "half";
        page.dom.btnToggleViewObjectGroup.removeClass("on");
        page.dom.btnToggleViewObjectGroup.addClass("onHalf");
        $(".TAG_group").hide();
        page.fn.drawing.resetAllPopupTag();
    } else if (page.data.userSetting.isViewObjectGroup == "half") {
        _common.cookie.set(page.constants.cookieKeys.isViewObjectGroup, "false");
        page.data.userSetting.isViewObjectGroup = "false";
        page.dom.btnToggleViewObjectGroup.removeClass("onHalf");
        page.dom.btnToggleViewObjectGroup.removeClass("on");
        $(".TAG_group").hide();
    } else {
        _common.cookie.set(page.constants.cookieKeys.isViewObjectGroup, "true");
        page.data.userSetting.isViewObjectGroup = "true";
        page.dom.btnToggleViewObjectGroup.removeClass("onHalf");
        page.dom.btnToggleViewObjectGroup.addClass("on");
        $(".TAG_group").show();
    }
}
page.fn.toggle.toggleViewTag = function () {
    log.info("page.fn.toggleViewTag");
    if (page.data.userSetting.isViewTags == "true") {
        _common.cookie.set(page.constants.cookieKeys.isViewTags, "half");
        page.data.userSetting.isViewTags = "half";
        page.dom.wrapImageTags.show();
        page.dom.btnToggleViewTag.removeClass("on");
        page.dom.btnToggleViewTag.addClass("onHalf");
    } else if (page.data.userSetting.isViewTags == "half") {
        _common.cookie.set(page.constants.cookieKeys.isViewTags, "false");
        page.data.userSetting.isViewTags = "false";
        page.dom.wrapImageTags.hide();
        page.dom.btnToggleViewTag.removeClass("onHalf");
        page.dom.btnToggleViewTag.removeClass("on");
        $(".wrapTag").remove();
        $(".tagForObject").remove();
    } else {
        _common.cookie.set(page.constants.cookieKeys.isViewTags, "true");
        page.data.userSetting.isViewTags = "true";
        page.dom.wrapImageTags.show();
        page.dom.btnToggleViewTag.removeClass("onHalf");
        page.dom.btnToggleViewTag.addClass("on");
    }
    page.fn.drawing.resetAllPopupTag('page.fn.toggleViewTag');
}
page.fn.initTooltip = function () {
    $('[title]').each(function (i, o) {
        o = $(o);
        if (!o.hasClass("setTooltip")) {
            o.tooltip({
                boundary: 'window'
                , html: true
                , track: true
                , content: function () {
                    let title = "";
                    if (_common.isNotEmpty($(this).attr("hotkey"))) {
                        title = $("<span class='tooltipin title'>" + $(this).attr("title") + "</span><span class='tooltipin hotkey'>" + $(this).attr("hotkey") + "</span>")
                    } else {
                        title = $("<span class='tooltipin title'>" + $(this).attr("title") + "</span>")
                    }
                    return title;
                }, close: function () {
                    //log.debug("tooltip close");
                    $("div[role='log'][aria-relevant='additions']").remove();
                    $('[data-toggle="tooltip"]').remove();
                }, open: function () {
                    try {
                        $('[data-toggle="tooltip"]').not(this).remove();
                    } catch (E) {
                    }
                }
            });
            o.addClass("setTooltip");
        }
    });
}
page.fn.animate = function () {

    requestAnimationFrame(page.fn.animate);
    page.dom.stat.update();
}
page.fn.addAnimateToPolygon = function (object, revF) {
    let ps = [];
    object.points.forEach(function (p) {
        let c = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        c.setAttribute("cx", p[2]);
        c.setAttribute("cy", p[3]);
        c.setAttribute("r", page.data.userSetting.point);
        c.setAttribute("class", "draw-point magic-temp-circle");
        c.setAttribute("objectId", object.objectId);
        c.setAttribute("fileIndex", object.fileIndex);
        page.dom.svg.append(c);
        $(c).append(page.fn.createAnimate({attr: "cx", from: p[2], to: p[0]}))
            .append(page.fn.createAnimate({attr: "cy", from: p[3], to: p[1]}))
            .focus().delay(page.constants.animateTime); //.remove();
        ps.push(c);
    });
    setTimeout(function () {
        try {
            revF();
            // $(".magic-temp-circle").remove();
            $(ps).remove();
        } catch (E) {
            log.error(E);
        }
    }, page.constants.animateTime);
}
page.fn.addAnimateToRect = function (object) {
    let x = page.fn.createAnimate({attr: "x", from: object.xs, to: object.xe});
    let y = page.fn.createAnimate({attr: "y", from: object.ys, to: object.ye});
    let w = page.fn.createAnimate({attr: "width", from: object.ws, to: object.we});
    let h = page.fn.createAnimate({attr: "height", from: object.hs, to: object.he});
    let c1x = page.fn.createAnimate({attr: "cx", from: object.xs, to: object.xe});
    let c1y = page.fn.createAnimate({attr: "cy", from: object.ys, to: object.ye});
    let c2x = page.fn.createAnimate({attr: "cx", from: object.c2xs, to: object.c2xe});
    let c2y = page.fn.createAnimate({attr: "cy", from: object.c2ys, to: object.c2ye});

    $("circle[objectId='" + object.objectId + "'][index='0']").append(c1x).append(c1y).focus();
    $("circle[objectId='" + object.objectId + "'][index='1']").append(c2x).append(c2y).focus().focusout();
    $("svg .draw-object[objectId='" + object.objectId + "']").append(x).append(y).append(w).append(h).focus();
}
page.fn.createAnimate = function (ani) {
    let x = document.createElementNS("http://www.w3.org/2000/svg", 'animate');
    x.setAttribute("attributeType", "XML");
    x.setAttribute("attributeName", ani.attr);
    x.setAttribute("from", ani.from);
    x.setAttribute("to", ani.to);
    x.setAttribute("dur", (page.constants.animateTime / 1000) + "s");
    x.setAttribute("begin", "focus");
    x.setAttribute("fill", "freeze");
    return x;
}
page.fn.checkInValidObjectList = function () {
    let decideSaveData = true;
    let inValidFileObjectIndexList = [];
    let inValidFileList = [];
    let canSave = true;
    page.data.loadTicket.fileList.forEach(function (file) {
        if (inValidFileList[file.fileIndex] == null) {
            inValidFileList[file.fileIndex] = [];
        }
        if (inValidFileObjectIndexList[file.fileIndex] == null) {
            inValidFileObjectIndexList[file.fileIndex] = "";
        }
        if (file.objectList.length > 0) {
            file.objectList.forEach(function (object) {
                let isValid = page.fn.data.isValidObjectData(object);
                if (!isValid && page.data.drawing.isAddingObject && page.data.drawing.object != null) {
                    page.fn.data.deleteObject(object.fileIndex, object.objectId);
                } else if (!isValid) {
                    canSave = false;
                    inValidFileList[file.fileIndex].push(object);
                    if (inValidFileObjectIndexList[file.fileIndex] == "") {
                        inValidFileObjectIndexList[file.fileIndex] = object.objectOrder;
                    } else {
                        inValidFileObjectIndexList[file.fileIndex] = inValidFileObjectIndexList[file.fileIndex] + ", " + object.objectOrder;
                    }
                }
            })
        }
    })
    if (!canSave) {
        let message = "";
        inValidFileObjectIndexList.forEach(function (inValidObjectIndexList, idx) {
            if (inValidObjectIndexList != "") {
                message = message + _common.template.parseMessage(page.message.confirmDeleteInvalidObject, {
                    fileIndex: idx + 1
                    , objectOrder: inValidObjectIndexList
                })
            }
        })
        message = message + page.message.confirmDeleteInvalidObjectCheck;
        if (confirm(message)) {
            inValidFileList.forEach(function (inValidObjectList) {
                inValidObjectList.forEach(function (object) {
                    page.fn.data.deleteObject(object.fileIndex, object.objectId);
                })
            })
            log.info("delete object filter by page.fn.saveTemp()");
        } else {
            decideSaveData = false;
        }
    }
    return decideSaveData;
}
page.fn.validateCube2DFront = function (object) {
    let obj25 = JSON.parse(object.objectLocation);
    let obj25Json = JSON.parse(objBoxSizeJson[object.objectId] || '{}');
    console.log("OBJECT 25 drawCube2DFront", obj25)
    console.log("OBJECT 25 JSON drawCube2DFront", obj25Json)
    // Chuyển tất cả giá trị y trong obj25Json thành số
    let yValues = [
        parseInt(obj25Json.y1),
        parseInt(obj25Json.y2),
        parseInt(obj25Json.y3),
        parseInt(obj25Json.y4)
    ].filter(val => !isNaN(val));

    // Tìm giá trị nhỏ nhất trong các giá trị y
    let minYSide = Math.min(...yValues);
    let minYBox = Math.min(parseFloat(obj25[0][1]), parseFloat(obj25[1][1]));

    console.log(`maxYSide: ${minYSide}, maxYBox: ${minYBox}`);
    console.log('yValues', yValues)
    //so sánh giá trị âm, vì phương tọa độ đi xuống
    if (-minYSide > -minYBox) {
        return false;
    }
    return true;
}

page.fn.saveTemp = function (nextFunction) {

    if (page.data.permissionCode != page.constants.workType.demo) {
        if (!page.data.loadTicket.isCanSave) {
            page.fn.alert(page.message.isInvalidEdit);
            return false;
        }
        let decideSaveData = page.fn.checkInValidObjectList();
        if (!decideSaveData) {
            return false;
        }
        let loadTicketData = _common.copy(page.data.loadTicket);
        const list2DCubeFail = []
        loadTicketData.fileList.forEach(function (file) {
            file.objectGroupInfo = JSON.stringify(file.objectGroupInfo);
            if (file.objectList.length > 0) {
                file.objectList.forEach(function (object) {

                    object.fromMagicAI = null;
                    if (object.groupId == null) {
                        object.groupId = null;
                        object.grpObjIdx = null;
                    } else if (object.groupId.length == 0) {
                        object.groupId = null;
                        object.grpObjIdx = null;
                    } else {
                        object.groupId = object.groupId.join(",")
                        object.grpObjIdx = object.grpObjIdx.join(",")
                    }
                    if (_common.isNotEmpty(object.tagList)) {
                        for (let t of object.tagList) {
                            t.projectId = object.projectId;
                            t.taskId = object.taskId;
                            t.rawFileId = object.rawFileId;
                            t.objectId = object.objectId;
                        }
                    } else {
                        object.tagList = [];
                    }
                    if (object.objectType == 'drawCube2D') {
                        if (objBoxSizeJson[object.objectId]) {
                            //object.objBoxSizeJson = objBoxSizeJson[object.objectId];
                            let obj25 = JSON.parse(object.objectLocation);
                            let obj25Json = JSON.parse(objBoxSizeJson[object.objectId]);
                            obj25[2] = obj25Json;
                            //update location box
                            let obj25d = [];
                            obj25d[0] = [];
                            obj25d[1] = [];
                            obj25d[2] = obj25Json;

                            obj25d[0][0] = Math.min(obj25[0][0], obj25[1][0]);
                            obj25d[0][1] = Math.min(obj25[0][1], obj25[1][1]);
                            obj25d[1][0] = Math.max(obj25[0][0], obj25[1][0]);
                            obj25d[1][1] = Math.max(obj25[0][1], obj25[1][1]);

                            const index = list2DCubeFail.findIndex(obj => obj.objectId === object.objectId);

                            if (!page.fn.validateCube2DFront(object)) {
                                list2DCubeFail.push(object);
                            }

                            object.objectLocation = JSON.stringify(obj25d);
                        }
                    } else if (object.objectType == 'drawCube2DFront') {
                        if (objBoxSizeJsonFront[object.objectId]) {
                            //object.objBoxSizeJson = objBoxSizeJson[object.objectId];
                            let obj25 = JSON.parse(object.objectLocation);
                            let obj25Json = JSON.parse(objBoxSizeJsonFront[object.objectId]);
                            obj25[2] = obj25Json;

                            //update location box
                            let obj25d = [];
                            obj25d[0] = [];
                            obj25d[1] = [];
                            obj25d[2] = obj25Json;
                            obj25d[0][0] = Math.min(obj25[0][0], obj25[1][0]);
                            obj25d[0][1] = Math.min(obj25[0][1], obj25[1][1]);
                            obj25d[1][0] = Math.max(obj25[0][0], obj25[1][0]);
                            obj25d[1][1] = Math.max(obj25[0][1], obj25[1][1]);

                            if (!page.fn.validateCube2DFront(object)) {
                                list2DCubeFail.push(object);
                            }

                            object.objectLocation = JSON.stringify(obj25d);
                        }
                    }
                })
            }
        })
        if (list2DCubeFail.length > 0) {
            const failedNames = list2DCubeFail.map(obj => `no#${obj.objectOrder}`).join(', ');
            list2DCubeFail.length = 0; // Xóa tất cả phần tử trong mảng
            alert(`Check 2D Cube object failed : ${failedNames}`)
            return;
        }
        console.log("loadTicketData.fileList", loadTicketData.fileList);
        let paramSave = JSON.stringify({
            projectId: page.data.task.projectId
            , taskId: page.data.task.taskId
            , workTicketId: page.data.loadTicket.workTicketId
            , fileList: loadTicketData.fileList
            , reqType: page.param.reqType
            , accessType: page.param.reqType
        });

        let url = "/apis/v1/workspace/annotate/save";
        if (page.data.permissionCode == page.constants.workType.reviewer) {
            url = "/apis/v1/workspace/review/save"
        } else if (page.data.permissionCode == page.constants.workType.inspector) {
            url = "/apis/v1/workspace/inspect/save"
        } else if (page.data.permissionCode == page.constants.workType.master) {
            url = "/apis/v1/workspace/master/save"
        }

        _common.ajax.asyncJSON2({
            url: url
            , param: paramSave
            , contentType: "application/json"
            , isLoading: true
            , returnFunction: function (r) {
                if (r.isAuthError == true) {
                    page.fn.alert(page.message.errorAuth);
                } else if (r) {
                    if (r.result) {

                        page.constants.gateway.isMakeHistory = false;
                        page.data.extraHistoryData = new HashMap();
                        if (typeof (nextFunction) == "function") {
                            nextFunction();
                        } else {
                            page.fn.alert(page.message.resultSaveTempSuccess);
                            // page.fn.data.changeTicket(page.data.loadTicket.workTicketId);
                        }
                    } else {
                        if (r.code == "ERROR") {
                            alert(r.message);
                        } else {
                            if (typeof (nextFunction) == "function") {
                                page.fn.alert(page.message.resultSaveTempSuccess);
                                alert(r.message);
                            } else {
                                page.fn.alert(page.message.resultSaveTempSuccess);
                            }
                        }
                    }
                } else {
                    page.fn.alert(page.message.resultSaveTempFail);
                }
            }, errorFunction: function () {
                page.fn.alert(page.message.resultSaveTempFail);
            }
        });
    } else {
        alert("Is demo page.");
        // page.fn.confirmUserCompleteDemo(false);
    }
}
page.fn.confirmUserComplete = function () {
    if (page.data.loadTicket.isValid) {
        if (_common.cookie.get(page.constants.cookieKeys.confirmPass) == "yes") {
            page.fn.userComplete();
        } else {
            page.fn.showConfirmModal({
                title: "Message"
                , message: _common.template.parseMessage(page.message.imageCompleteConfirm, {
                    orgnFileName: page.data.loadTicket.fileName
                })
                , nextFunction: function () {
                    page.fn.userComplete();
                }
                , checkboxMessage: page.message.completeCheckbox
                , maxWidth: 350
            });
        }
    }
}
page.fn.newReviewAssign = function () {
    let url = "/apis/v1/workspace/review/assign";
    if (page.data.permissionCode == page.constants.workType.inspector) {
        url = "/apis/v1/workspace/inspect/assign";
    }
    _common.ajax.asyncJSON2({
        url: url
        , param: {
            projectId: page.data.task.projectId
            , taskId: page.data.task.taskId
            , reqType: page.param.reqType
        }, returnFunction: function (r) {
            if (r.data == -1) {
                page.fn.alert(page.message.fullRvAssignImage);
            } else if (r.data == 0) {
                page.fn.alert(page.message.noMoreRvassigned);
            } else {
                page.data.paging.pageIndex = "1";
                page.data.paging.pageNum = "1";
                page.fn.data.getImageList(false);
            }
        }, isLoading: true
    });
}
page.fn.showConfirmModal = function (data) {
    data.title = _common.isEmpty(data.title) ? "Confirm" : data.title;
    $("#popConfirmTitle").html(data.title);
    $("#confirmModalMessage").html(data.message);
    if (typeof (data.nextFunction) != "function") {
        $("#confirmModalBtnConfirm").hide();
    } else {
        $("#confirmModalBtnConfirm").show().unbind().bind("click", data.nextFunction);
    }
    if (_common.isEmpty(data.checkboxMessage)) {
        $("#confirmModalCheckboxWrap").hide();
    } else {
        $("#confirmModalCheckboxWrap").show();
        $("#confirmModalCheckboxTxt").html(data.checkboxMessage);
    }
    if (!_common.isEmpty(data.maxWidth)) {
        $("#confirmModal").children(".modal-body").css("max-width", data.maxWidth);
    } else {
        $("#confirmModal").children(".modal-body").css("max-width", "50%");
    }
    page.dom.confirmModal.fadeIn(page.constants.animateTime);
}
page.fn.hideConfirmModal = function () {
    $("#confirmModalCheckbox").prop("checked", null);
    page.dom.confirmModal.fadeOut(page.constants.animateTime);
}
page.fn.userComplete = function () {
    page.fn.showLoading();
    log.debug("page.fn.userComplete()");
    if ($("#confirmModalCheckbox").prop("checked")) {
        _common.cookie.set(page.constants.cookieKeys.confirmPass, "yes");
    }
    page.fn.hideConfirmModal();
    page.fn.saveTemp(function () {
        // if(confirm(_common.template.parseMessage(page.message.imageCompleteConfirm, {orgnFileName:page.data.imageData.orgnFileName}))) {
        _common.ajax.asyncJSON2({
            url: "/apis/v1/workspace/annotate/complete"
            , param: {
                projectId: page.data.task.projectId
                , taskId: page.data.task.taskId
                , workTicketId: page.data.loadTicket.workTicketId
                , reqType: page.param.reqType
            }, returnFunction: function (r) {
                if (r && r.result) {
                    page.fn.alert(page.message.imageCompleteSuccess);
                } else {
                    page.fn.alert(page.message.imageCompleteFail);
                }
                page.param.workTicketId = "";
                page.fn.data.getImageList({
                    addAssignImage: true
                });
            }, isLoading: true
            , errorFunction: function () {
                page.fn.alert(page.message.serverError);
                page.fn.data.getImageList(false);
            }
        });
    });
// }
}
page.fn.userGiveup = function () {
    if (page.data.loadTicket.isValid) {
        log.debug("page.fn.userGiveup()");
        if (confirm(page.message.imageGiveupConfirm)) {
            _common.ajax.asyncJSON2({
                url: "/apis/v1/workspace/annotate/giveup"
                , param: {
                    projectId: page.data.task.projectId
                    , taskId: page.data.task.taskId
                    , workTicketId: page.data.loadTicket.workTicketId
                    , reqType: page.param.reqType
                }, returnFunction: function (r) {
                    if (r && r.result) {
                        page.fn.alert(page.message.imageGiveupSuccess);
                    } else {
                        page.fn.alert(page.message.imageCompleteFail);
                    }
                    page.fn.data.getImageList({
                        addAssignImage: true
                    });
                }, isLoading: true
                , errorFunction: function () {
                    page.fn.alert(page.message.serverError);
                    page.fn.data.getImageList(false);
                }
            });
        }
    }
}
page.fn.reviewProcFail = function () {
    let rejectReason = $("#popReviewFailReason").val();
    if (_common.isEmpty(rejectReason)) {
        page.fn.alert(page.message.inputReason);
        return false;
    } else {
        page.fn.data.saveRejectReason(rejectReason);
    }
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
        if (attachFile.length > 0) {
            if (!page.fn.event.attachFileSizeCheck(attachFile[0].size)) {
                alert(page.message.alert.failImgFile);
                return false;
            } else {
                multipart.append('uploadFile', $("#uploadFile").get(0).files[0]);
            }
        }
    }
    multipart.append('uploadType', $("#uploadType").val());
    multipart.append('projectId', page.data.task.projectId);
    multipart.append('taskId', page.data.task.taskId);
    multipart.append('workTicketId', page.data.loadTicket.workTicketId);
    multipart.append('reviewMessage', rejectReason);
    multipart.append('reviewFailData', JSON.stringify(page.data.reviewFailDetailData.getAllDataToList()));

    _common.ajax.asyncMultipart2({
        url: "/apis/v1/workspace/review/fail"
        , data: multipart
        , success: function (rv) {
            if (rv && rv.result) {
                page.param.workTicketId = page.data.loadTicket.workTicketId;
                page.fn.data.getImageList(false);
                $("#uploadFile").attr("data-fileId", "");
            } else {
                page.fn.alert(page.message.alertReviewFail);
            }
        }, error: function () {
            page.fn.alert(page.message.alertReviewFail);
        }
    });
}
page.fn.reviewProcPass = function () {
    _common.ajax.asyncJSON2({
        url: "/apis/v1/workspace/review/pass"
        , param: {
            projectId: page.data.task.projectId
            , taskId: page.data.task.taskId
            , workTicketId: page.data.loadTicket.workTicketId
        }, returnFunction: function (rv) {
            if (rv && rv.result) {
                if (page.data.historyData.getAllDataToList().length > 0) {
                    page.param.workTicketId = page.data.loadTicket.workTicketId;
                    page.data.loadTicket.isCanSave = true;
                    page.fn.saveTemp(function () {
                        page.param.workTicketId = page.data.loadTicket.workTicketId;
                        page.fn.data.getImageList(false);
                    });
                } else {
                    page.param.workTicketId = page.data.loadTicket.workTicketId;
                    page.fn.data.getImageList(false);
                }
            } else {
                page.fn.alert(page.message.alertReviewPass);
            }
        }, errorFunction: function () {
            page.fn.alert(page.message.alertReviewPass);
        }
    });
}
page.fn.procAllPass = function () {
    if (confirm(page.message.confirmAllPass)) {
        page.fn.showLoading();
        _common.ajax.asyncJSON2({
            url: "/apis/v1/workspace/review/passAll"
            , param: {
                projectId: page.param.projectId
                , taskId: page.param.taskId
                , reqType: page.param.reqType
            }, returnFunction: function (r) {
                if (r && r.result) {
                    page.param.workTicketId = page.data.loadTicket.workTicketId;
                    page.fn.data.getImageList(false);
                } else if (r && r.message == "auth") {
                    page.fn.alert(page.message.alert.noHavePermission);
                } else if (r && _common.isNotEmpty(r.message)) {
                    page.fn.alert(r.message);
                } else {
                    page.fn.alert(page.message.alert.failOfAllPass);
                }
                page.fn.hideLoading();
            }, errorFunction: function () {
                page.fn.alert(page.message.alert.failOfAllPass);
                page.fn.hideLoading();
            }
        });
    }
}
page.fn.reviewProcOK = function () {
    let message = _common.template.parseMessage(page.message.haveNoSaveData, {
        doSomething: page.message.doSomethingChangeImage
    });
    if (page.data.extraHistoryData.getAllDataToList().length > 0 && !confirm(message)) {
        return;
    } else {
        page.constants.gateway.isMakeHistory = false;
    }
    _common.ajax.asyncJSON2({
        url: "/apis/v1/workspace/inspect/ok"
        , param: {
            projectId: page.data.task.projectId
            , taskId: page.data.task.taskId
            , workTicketId: page.data.loadTicket.workTicketId
        }, returnFunction: function (r) {
            if (r && r.result) {
                page.param.workTicketId = page.data.loadTicket.workTicketId;
                page.fn.data.getImageList(false);
            } else if (r && r.message == "auth") {
                page.fn.alert(page.message.noHavePermission);
            } else if (r && _common.isNotEmpty(r.message)) {
                page.fn.alert(r.message);
            } else {
                page.fn.alert(page.message.failOfImageOK);
            }
        }, errorFunction: function () {
            page.fn.alert(page.message.failOfImageOK);
        }
    });
}
page.fn.procAllOK = function () {
    if (confirm(page.message.confirmAllOK)) {
        page.fn.showLoading();
        _common.ajax.asyncJSON2({
            url: "/apis/v1/workspace/inspect/okAll"
            , param: {
                projectId: page.param.projectId
                , taskId: page.param.taskId
                , reqType: page.param.reqType
            }, returnFunction: function (r) {
                if (r && r.result) {
                    page.param.workTicketId = page.data.loadTicket.workTicketId;
                    page.fn.data.getImageList(false);
                } else if (r && r.message == "auth") {
                    page.fn.alert(page.message.noHavePermission);
                } else if (r && _common.isNotEmpty(r.message)) {
                    page.fn.alert(r.message);
                } else {
                    page.fn.alert(page.message.failOfAllOK);
                }
                page.fn.hideLoading();
            }, errorFunction: function () {
                page.fn.alert(page.message.failOfAllOK);
                page.fn.hideLoading();
            }
        });
    }
}
page.fn.viewNGReasonForm = function () {
    $("#popReview_ngArea").show();
}
page.fn.getErrorCodeList = function (type) {
    let errorCodeList = [];
    $("#popReviewErrorCodeList input[type='checkbox']:checked").each(function (i, o) {
        errorCodeList.push(o.value);
    });
    return errorCodeList;
}
page.fn.reviewProcNG = function () {
    let errs = page.fn.getErrorCodeList();
    let inspNGmessage = $("#ngReason").val();
    let checkEmptyMsg = inspNGmessage.replaceAll("\n", '');
    if (_common.isEmpty(checkEmptyMsg)) {
        $("#ngReason").val("");
        inspNGmessage = null;
    }
    if (inspNGmessage != null) {
        page.fn.data.isCheckedSaveInspNG($("#ngReason").val(), false);
    }
    if (inspNGmessage == null && errs.length == 0) {
        if (!confirm(page.message.confirmNg)) {
            return false;
        }
    }
    _common.ajax.asyncJSON2({
        url: "/apis/v1/workspace/inspect/ng"
        , param: {
            projectId: page.data.task.projectId
            , taskId: page.data.task.taskId
            , workTicketId: page.data.loadTicket.workTicketId
            , inspectNgPrjInspErNums: errs
            , inspectMessage: inspNGmessage
        }, returnFunction: function (r) {
            if (r && r.result) {
                page.param.workTicketId = page.data.loadTicket.workTicketId;
                page.fn.data.getImageList(false);
            } else if (r && r.message == "auth") {
                page.fn.alert(page.message.noHavePermission);
            } else if (r && _common.isNotEmpty(r.message)) {
                page.fn.alert(r.message);
            } else {
                page.fn.alert(page.message.failOfImageNG);
            }
        }, errorFunction: function () {
            page.fn.alert(page.message.failOfImageNG);
        }
    });
}

page.fn.gotoReviewTool = function () {
    sessionStorage.reviewSearch = JSON.stringify(page.data.searchConditionByReview);

    let reqType = "reviewer";
    if ("review/reviewer".includes(page.data.permissionCode)) {
        reqType = "reviewer";
    } else if ("manager/insp/inspector".includes(page.data.permissionCode)) {
        reqType = "inspector";
    } else if ("master".includes(page.data.permissionCode)) {
        reqType = "master";
    } else if ("co/client".includes(page.data.permissionCode)) {
        reqType = "client";
    }
    _common.postForm("/annotation/reviewImage", {
        reqType: reqType
        , projectId: page.param.projectId
        , taskId: page.param.taskId
        , workTicketId: page.data.loadTicket ? page.data.loadTicket.workTicketId : ""
        , token: page.param.token
    }, "POST");
}

page.gateway = function (command, message, isChanged) {
    // edgePoint 그리기 상태나 edgePointArrange 상태일 떈 isDrawing 무조건 false (오브젝트가 아니기 때문에)
    let isDrawing = page.data.event.isDrawingEdgePoint ? false : page.data.event.isDrawingEdgePointArrange ? false : page.data.event.isDrawing;
    if (isDrawing) {
        if (command == page.constants.gateway.command.add) {
            if (message == null) {
                message = "";
            }
            message = "[" + moment().format('YYYY-MM-DD HH:mm:ss') + "] " + message;
            let key = page.data.historyDrawData.createKey();
            page.data.historyDrawData.put(key, _common.copyData(page.data.loadTicket.fileList));
            page.dom.txtHistoryMsg.clearQueue().stop().show().attr("key", key).text(message).fadeOut(page.constants.animateTime / 2).fadeIn(page.constants.animateTime / 2);
            page.dom.txtHistoryMsg.removeClass("removed");
            page.data.historyDrawDataObject.put(key, _common.copyData(page.data.drawing.object));
            let p = $("<p class='history' id='hist_" + key + "'></p>");
            p.text(message);
            page.dom.popMsgHisContents.append(p);
            page.dom.popMsgHisContents.scrollTop(page.dom.popMsgHisContents.get(0).scrollHeight);
        } else if (command == page.constants.gateway.command.back) {
            if (page.data.historyDrawData.length() > 0) {
                let key = page.data.historyDrawData.getLastKey();
                page.data.loadTicket.fileList = _common.copy(page.data.historyDrawData.getLastData());
                page.data.drawing.object = _common.copy(page.data.historyDrawDataObject.getLastData());
                page.data.historyDrawData.remove(key);
                page.data.extraHistoryData.remove(key);
                page.data.historyDrawDataObject.remove(key);
                if (key == page.dom.txtHistoryMsg.attr("key")) {
                    page.dom.txtHistoryMsg.addClass("removed");
                }
                page.data.loadTicket.fileList.forEach(function (file) {
                    page.fn.drawing.renderAllObject(file.fileIndex);
                    if (page.data.event.currentFileIndex == file.fileIndex) {
                        page.data.event.currentFile = file;
                        page.fn.data.renderObjectData(file.fileIndex);
                    }
                    page.fn.drawing.resetPopupTag(file.fileIndex, "page.constants.gateway.command.back")
                })
                $("#hist_" + key).addClass("removed");
            } else {
                log.info("page.data.event.isDrawing && !isNewDrawing")
            }
        }
    } else {
        if (command == page.constants.gateway.command.add) {
            try {
                let key = page.data.historyData.createKey();
                page.data.historyData.put(key, _common.copy(page.data.loadTicket.fileList));
                page.data.extraHistoryData.put(key, "");
                message = "[" + moment().format('YYYY-MM-DD HH:mm:ss') + "] " + message;
                page.dom.txtHistoryMsg.clearQueue().stop().show().attr("key", key).text(message).fadeOut(page.constants.animateTime / 2).fadeIn(page.constants.animateTime / 2);
                page.dom.txtHistoryMsg.removeClass("removed");
                let p = $("<p class='history' id='hist_" + key + "'></p>");
                p.text(message);
                page.dom.popMsgHisContents.append(p);
                page.dom.popMsgHisContents.scrollTop(page.dom.popMsgHisContents.get(0).scrollHeight);
            } catch (E) {
                log.error(E);
            }
        } else if (command == page.constants.gateway.command.back) {
            if (page.data.historyData.length() > 0) {
                let key = page.data.historyData.getLastKey();
                page.data.loadTicket.fileList = _common.copy(page.data.historyData.getLastData());
                page.data.historyData.remove(key);
                if (key == page.dom.txtHistoryMsg.attr("key")) {
                    page.dom.txtHistoryMsg.addClass("removed");
                }
                page.data.loadTicket.fileList.forEach(function (file) {
                    page.fn.drawing.renderAllObject(file.fileIndex);
                    if (page.data.event.currentFileIndex == file.fileIndex) {
                        page.data.event.currentFile = file;
                        page.fn.data.renderObjectData(file.fileIndex);
                    }
                    page.fn.drawing.resetPopupTag(file.fileIndex, "page.constants.gateway.command.back")
                })
                $("#hist_" + key).addClass("removed");
                let canSelectObject = false;
                if (page.data.event.selectedObjectId != "" && page.data.event.selectedObjectId != null) {
                    for (var i = 0; i < page.data.event.currentFile.objectList.length; i++) {
                        if (page.data.event.selectedObjectId == page.data.event.currentFile.objectList[i].objectId) {
                            canSelectObject = true;
                            break;
                        }
                    }
                }
                if (canSelectObject) {
                    page.fn.data.onSelectObject(page.data.event.currentFileIndex, page.data.event.selectedObjectId);
                    page.fn.drawing.renderGroupInObject(page.data.event.currentFileIndex, page.data.event.selectedObjectId);
                } else {
                    page.dom.rootObjectTagList.empty();
                    page.fn.drawing.startNewDrawing(page.constants.method.moveImage);
                }
            }
        }
    }
}

// #region 6 point cube
page.fn.drawing.fn6PointCube = function (fileIndex, object) {
    // Khởi tạo objectBox trả về
    //
    let objectBox = {x: 0, y: 0, width: 0, height: 0};

    try {
        // Nếu không có đủ điểm, trả về false
        if (!object.location || object.location.length < 2) {
            return false;
        }


        // Lấy đối tượng SVG theo fileIndex
        const svg = $(`svg.drawingSVG[data-file-index='${fileIndex}']`);

        if (object.isEscapePut) {
            $(svg)
                .find(`[objectId='${object.objectId}'][data-objectType='${object.objectType}']`)
                .each(function () {
                    const tag = this.tagName.toLowerCase();

                    if (tag === "rect") {
                        return;
                    }
                    // ▸ 2. Nhóm <g>: xoá mọi con không phải rect,
                    //    đồng thời tô xanh rect (nếu có) bên trong
                    if (tag === "g") {
                        $(this)
                            .children()
                            .each(function () {
                                if (this.tagName.toLowerCase() === "rect") {
                                    this.style.fill = "blue";
                                } else {
                                    this.remove();           // xoá polygon / circle / line …
                                }
                            });
                        return;                        // giữ lại thẻ <g> exit ech now
                    }
                    $(this).remove();
                });

            object.isEscapePut = false;
        }

        // Tìm hoặc tạo group chứa object dựa theo objectId
        let g = svg.children(`g[objectId='${object.objectId}']`);

        if (!g.length) {
            g = $(document.createElementNS("http://www.w3.org/2000/svg", "g"))
                .attr("objectId", object.objectId)
                .attr("data-objectType", object.objectType);
            svg.append(g);
        }

        // Tính tọa độ top-left và kích thước dựa trên 2 điểm đầu tiên
        const [pt1, pt2] = object.location;
        const x = Math.min(pt1[0], pt2[0]);
        const y = Math.min(pt1[1], pt2[1]);
        const width = Math.max(pt1[0], pt2[0]) - x;
        const height = Math.max(pt1[1], pt2[1]) - y;

        // Cập nhật objectBox với kích thước giới hạn
        objectBox = {
            x,
            y,
            width: page.fn.drawing.limitMousePosition(width),
            height: page.fn.drawing.limitMousePosition(height)
        };

        // Tìm hoặc tạo phần tử <rect> dùng làm box gốc
        let r = g.children("rect.object-body");
        if (!r.length) {
            r = $(document.createElementNS("http://www.w3.org/2000/svg", "rect"));
            g.append(r);
        }
        // Cập nhật các thuộc tính cho box gốc
        r.attr({
            x,
            y,
            width,
            height,
            "data-file-index": fileIndex,
            objectId: object.objectId,
            "data-group": "6pointCube",
            "data-objectType": object.objectType,
            class: "draw-object CLASS_" + object.classId,
            "stroke-width": 1,
            "fill-opacity": 0.5,
        }).css("pointer-events", "all")
            .css("fill", "red")
            .addClass("object-body");


        object.direction6PointCube =
            object.tagList
                ?.find(({tagName}) => tagName?.trim().toLowerCase() === 'direction')
                ?.val
                ?.trim() ?? '';

        if (object.direction6PointCube?.trim().toLowerCase() === 'front')
            r.css("fill", "blue");


        let pointsSide6pBox = [...(object.pointsSide6pBox ?? [])]

        // vẽ box khi load từ db và cho trường hợp delete object và trường hợp khi đã vẽ xong ở fe
        if ([6, 8].includes(object.location.length ?? 0) && (pointsSide6pBox?.length === 4 || pointsSide6pBox.length === 0)) {
            //
            console.log("page.fn.drawing.fn6PointCube", object.objectId, object.location.length, pointsSide6pBox.length);

            const [x1, y1, v1, id1] = object.location[0]; // P1 – top-left
            const [x2, y2, v2, id2] = object.location[1]; // P2 – bottom-right
            const [x3, y3, v3, id3] = object.location[2]; // P3 – điểm thứ ba
            const [x4, y4, v4, id4] = object.location[3]; // P4 – điểm thứ tư
            const [x5, y5, v5, id5] = object.location[4]; // P5 – điểm thứ năm
            const [x6, y6, v6, id6] = object.location[5]; // P6 – điểm thứ sáu
            const [x7, y7, v7, id7] = object.location[6]; // P7 - top-right
            const [x8, y8, v8, id8] = object.location[7]; // P8 - bottom-left

            let allPointListOfTheBox = {
                p1: {x: x1, y: y1, v: v1, id: id1},              // top-left
                p2: {x: x2, y: y2, v: v2, id: id2},              // bottom-right
                p3: {x: x3, y: y3, v: v3, id: id3},              // p3
                p4: {x: x4, y: y4, v: v4, id: id4},              // p4
                p5: {x: x5, y: y5, v: v5, id: id5},              // p5
                p6: {x: x6, y: y6, v: v6, id: id6},              // p6
                p7: {x: x7, y: y7, v: v7, id: id7},          // top-right
                p8: {x: x8, y: y8, v: v8, id: id8}           // bottom-left
            };

            object.allPointListOfTheBox = {...allPointListOfTheBox}

            // 🔹 Gọi hàm để cập nhật màu và có thể vẽ lại đè lên
            updateShapeColors(svg, g, object, page.constants.color6PointCube, false);
        } else if (object.location.length > 2 && pointsSide6pBox.length >= 0) {
            const a = object.postionCursor ?? {}

            const p1 = object.location[0]
            const p2 = object.location[1]
            const p4 = object.location[3]
            const centerX = p1[0] + (p2[0] - p1[0]) / 2;

            let isRight = false
            if (a.svgX >= centerX)
                isRight = true

            if (pointsSide6pBox.length === 0) {
                pointsSide6pBox.push([a.svgX, p1[1], getUUID()])

            } else if (pointsSide6pBox.length === 1) {
                pointsSide6pBox.push([isRight ? p2[0] : p1[0], a.svgY, getUUID()])

            } else if (pointsSide6pBox.length === 2) {
                pointsSide6pBox.push([p4[0], a.svgY, getUUID()])

            } else if (pointsSide6pBox.length === 3) {

                pointsSide6pBox.push([a.svgX, p2[1], getUUID()])
            }


            drawShapeFromPoints(g, object, {
                stroke: "blue",
                strokeWidth: "3",
                strokeDasharray: "10" // Nét đứt dài hơn
            }, pointsSide6pBox);
        }

        if ([6, 8].includes(object.location.length ?? 0) && object.pointsSide6pBox?.length === 4) {
            $(svg).find(`[objectId='${object.objectId}'][data-group='side-edge-6pointCube']`).remove();
            $(svg).find(`[objectId='${object.objectId}'][data-group='circle-pseudo-6pointCube']`).remove();
        }

        page.fn.drawing.displayBboxSize(object);
    } catch (E) {
        log.error(E, "page.fn.drawing.6pointCube");
        page.fn.data.deleteObject(fileIndex, object.objectId);
    }

    return objectBox;
};

/**
 * Vẽ một đối tượng BEV Box, có thể là hình chữ nhật (khi đang vẽ)
 * hoặc hình đa giác 4 đỉnh có tay cầm xoay (khi đã vẽ xong).
 * @param {number} fileIndex - Chỉ số của file SVG.
 * @param {object} object - Đối tượng chứa thông tin vị trí và thuộc tính.
 * @returns {object|boolean} - Trả về objectBox {x, y, width, height} hoặc false nếu lỗi.
 */
page.fn.drawing.fnBevBox = function (fileIndex, object) {
    let objectBox = {x: 0, y: 0, width: 0, height: 0};

    try {
        // --- Hàm chính (Main Function Logic) ---
        if (!object.location || object.location.length < 2) {
            return false;
        }

        const svg = $(`svg.drawingSVG[data-file-index='${fileIndex}']`);
        let g = svg.children(`g[objectId='${object.objectId}']`);
        if (!g.length) {
            g = $(document.createElementNS("http://www.w3.org/2000/svg", "g"))
                .attr("objectId", object.objectId)
                .attr("data-objectType", object.objectType);
            svg.append(g);
        }

        // Trường hợp 1: Đã có 4 điểm, vẽ polygon trực tiếp
        if (object.location.length >= 4) {
            g.children("rect.object-body").remove();
            objectBox = page.fn.drawing.bev.drawPolygon(g, object, object.location, fileIndex);
        }
        // Trường hợp 2: Có 2 điểm
        else if (object.location.length === 2) {
            // Nếu đã vẽ xong (không phải đang kéo thả), chuyển 2 điểm thành 4 và vẽ polygon
            if (page.data?.drawing?.isAddingObject !== true) {
                try {
                    page.fn.drawing.bevTwoToFourCorners(object);
                } catch (err) {
                    // Ghi lại lỗi thay vì bỏ qua trong im lặng
                    log.error(`Lỗi khi chuyển 2 điểm thành 4 cho objectId: ${object.objectId}`, err);
                    return false; // Dừng hàm nếu chuyển đổi lỗi
                }
                g.children("rect.object-body").remove();
                objectBox = page.fn.drawing.bev.drawPolygon(g, object, object.location, fileIndex);
            }
            // Ngược lại, nếu đang trong quá trình vẽ, chỉ vẽ hình chữ nhật tạm thời
            else {
                const [pt1, pt2] = object.location;
                objectBox = page.fn.drawing.bev.drawTempRect(g, object, pt1, pt2, fileIndex);
            }
        }

        page.fn.drawing.displayBboxSize(object);

    } catch (E) {
        log.error(E, "page.fn.drawing.fnBevBox");
        page.fn.data.deleteObject(fileIndex, object.objectId);
    }

    return objectBox;
};

/**
 * Vẽ một đường thẳng đi qua điểm cho trước trong phần tử SVG theo hướng xác định.
 *
 * @param {SVGElement|jQuery} svgEl - Phần tử SVG (hoặc jQuery object chứa SVG) mà bạn muốn vẽ đường.
 * @param {Object} point - Đối tượng chứa tọa độ của điểm, dạng { x: Number, y: Number }.
 * @param {String} orientation - Hướng của đường: "vertical", "horizontal" hay "diagonal".
 * @param {Object} [options] - Các tùy chọn thêm cho đường (màu, độ dày, kiểu nét, v.v).
 *   - options.stroke: màu của đường, mặc định "#ff6600".
 *   - options.strokeWidth: độ dày đường, mặc định "1".
 *   - options.strokeDasharray: kiểu nét gạch đứt, mặc định "5,5".
 *   - options.angle: nếu orientation là "diagonal", đây là góc nghiêng tính theo độ (optional).
 *
 * @returns {SVGLineElement} Phần tử dòng vừa được tạo.
 */
function drawLineThroughPoint(svgEl, obj, point, orientation, options = {}) {
    if (svgEl instanceof jQuery) svgEl = svgEl[0];

    const stroke = options.stroke || "#ff6600";
    const strokeWidth = options.strokeWidth || "1";
    const strokeDasharray = options.strokeDasharray || "5,5";

    // Chiều dài mặc định cho đường (rất dài)
    const LENGTH = 9999;

    let x1, y1, x2, y2;

    switch (orientation) {
        case "vertical":
            x1 = x2 = point.x;
            y1 = point.y - LENGTH;
            y2 = point.y + LENGTH;
            break;

        case "horizontal":
            y1 = y2 = point.y;
            x1 = point.x - LENGTH;
            x2 = point.x + LENGTH;
            break;

        case "diagonal":
            const angle = options.angle !== undefined ? options.angle : 45;
            const rad = angle * Math.PI / 180;
            const dx = (LENGTH / 2) * Math.cos(rad);
            const dy = (LENGTH / 2) * Math.sin(rad);

            x1 = point.x - dx;
            y1 = point.y - dy;
            x2 = point.x + dx;
            y2 = point.y + dy;
            break;

        default:
            console.warn("Orientation không xác định, mặc định vertical.");
            x1 = x2 = point.x;
            y1 = point.y - LENGTH;
            y2 = point.y + LENGTH;
    }

    const lineEl = document.createElementNS("http://www.w3.org/2000/svg", "line");
    lineEl.setAttribute("x1", x1);
    lineEl.setAttribute("y1", y1);
    lineEl.setAttribute("x2", x2);
    lineEl.setAttribute("y2", y2);
    lineEl.setAttribute("stroke", stroke);
    lineEl.setAttribute("stroke-width", strokeWidth);
    lineEl.setAttribute("stroke-dasharray", strokeDasharray);
    lineEl.setAttribute("data-objectType", obj.objectType);
    lineEl.setAttribute("data-group", "line-6pointCube");
    lineEl.setAttribute("objectId", obj.objectId);
    lineEl.classList.add("pseudo-line");

    svgEl.appendChild(lineEl);

    return lineEl;
}


/**
 * Draws either a line or polygon based on points array,
 * and draws a single point (circle) at the last point position.
 * Trước khi vẽ, sẽ xóa các shape và point cũ ứng với objectId.
 *
 * @param {SVGElement|jQuery} svgEl - SVG container (thẻ <svg>)
 * @param {Object} obj - Object chứa objectId và objectType
 * @param {Object} options - Các tùy chọn: stroke, strokeWidth, fill, strokeDasharray
 * @param {Array<[number, number]>} points - Mảng điểm cần vẽ (ít nhất 2)
 * @returns {SVGElement|null} - Phần tử shape được tạo (line hoặc polygon)
 */
function drawShapeFromPoints(svgEl, obj, options = {}, points) {
    if (!points || points.length === 0) return null;

    if (svgEl instanceof jQuery) svgEl = svgEl[0];

    const stroke = options.stroke || "blue";
    const strokeWidth = options.strokeWidth || "3";
    const fill = options.fill || "none";
    const strokeDasharray = options.strokeDasharray || "10";

    // ❗ Xóa shape & point cũ liên quan đến objectId
    $(svgEl).find(`[objectId='${obj.objectId}'][data-group='side-edge-6pointCube']`).remove();

    let shapeEl;
    if (points.length > 1) {
        if (points.length === 2) {
            // 🎯 Vẽ đoạn thẳng
            shapeEl = document.createElementNS("http://www.w3.org/2000/svg", "line");
            shapeEl.setAttribute("x1", points[0][0]);
            shapeEl.setAttribute("y1", points[0][1]);
            shapeEl.setAttribute("x2", points[1][0]);
            shapeEl.setAttribute("y2", points[1][1]);

        } else if (points.length > 2) {
            // 🎯 Vẽ polygon (3+ điểm)
            shapeEl = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            shapeEl.setAttribute("points", points.map(pt => `${pt[0]},${pt[1]}`).join(" "));
            shapeEl.setAttribute("fill", fill);
            shapeEl.setAttribute("stroke-linejoin", "round");
            shapeEl.setAttribute("shape-rendering", "geometricPrecision");
        }

        // ⚙️ Gán các thuộc tính chung cho shape
        shapeEl.setAttribute("stroke", stroke);
        shapeEl.setAttribute("style", `stroke-width: ${strokeWidth} !important`);
        shapeEl.setAttribute("stroke-dasharray", strokeDasharray);
        shapeEl.setAttribute("data-group", "side-edge-6pointCube");
        shapeEl.setAttribute("data-objectType", obj.objectType);
        shapeEl.setAttribute("objectId", obj.objectId);

        svgEl.appendChild(shapeEl);

    }
    if (obj.objectId.includes('TEMP_')) {
        // ❌ Xóa point cũ (nếu có)
        $(svgEl).find(`[objectId='${obj.objectId}'][data-group='circle-pseudo-6pointCube']`).remove();

        // ✅ Vẽ point cuối
        const lastPt = points[points.length - 1];
        const pointEl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        pointEl.setAttribute("cx", lastPt[0]);
        pointEl.setAttribute("cy", lastPt[1]);
        pointEl.setAttribute("r", 4);
        pointEl.setAttribute("style", 'fill: #000 !important; stroke: #95e2e5 !important');
        pointEl.setAttribute("data-group", "circle-pseudo-6pointCube");
        pointEl.setAttribute("data-objectType", obj.objectType);
        pointEl.setAttribute("objectId", obj.objectId);

        svgEl.appendChild(pointEl);
    }


    return shapeEl;
}


/**
 * Push a calculated point (p3–p6) into the object's location array
 * based on its position in the 6-point box logic.
 *
 * Dựa trên chỉ số pointIndex (p3–p6), tính toán và đẩy tọa độ vào mảng `object.location`
 *
 * @param {Object} object - The object containing the location array (Đối tượng chứa mảng location)
 * @param {{x: number, y: number}} topCorner - Top-left corner of the box (Góc trên bên trái của box)
 * @param {{x: number, y: number}} bottomCorner - Bottom-right corner of the box (Góc dưới bên phải của box)
 * @param {number} pointIndex - Index representing which point to calculate (3 → p3, 4 → p4, ...)
 * @param {{x: number, y: number}} cursorPosition - Current cursor position for reference (Vị trí chuột hiện tại)
 * @param {{x: number, y: number}=} p3 - Optional existing point p3 (tùy chọn)
 * @param {{x: number, y: number}=} p4 - Optional existing point p4 (tùy chọn)
 */
function pushPointByIndex(object, topCorner, bottomCorner, pointIndex, cursorPosition, p3, p4) {
    let point = {x: 0, y: 0};

    const pointIndexOfTheBox = {p3: 3, p4: 4, p5: 5, p6: 6};

    // 🧮 Trung điểm cạnh trên
    const centerX = topCorner.x + (bottomCorner.x - topCorner.x) / 2;

    // ⚠️ Hàm thông báo và ngắt khi gặp lỗi
    const throwWarning = (msg, type = page.constants.messageType.warning) => {
        showToastMessage(msg, type);
        throw new Error(msg);
    };

    switch (pointIndex) {
        case pointIndexOfTheBox.p3: {
            // ✅ p3 phải nằm trong cạnh trên (x nằm giữa 2 góc)
            if (cursorPosition.x <= topCorner.x || cursorPosition.x >= bottomCorner.x) {
                throwWarning("⚠️ Cảnh báo! \n Điểm p3 phải nằm trong cạnh trên của box.");
            }

            point = {
                x: cursorPosition.x,
                y: topCorner.y
            };
            break;
        }

        case pointIndexOfTheBox.p4: {
            // ✅ p4 phải nằm trong cạnh bên (y nằm giữa 2 góc)
            if (cursorPosition.y <= topCorner.y || cursorPosition.y >= bottomCorner.y) {
                throwWarning("⚠️ Cảnh báo! \n Điểm p4 phải nằm trong cạnh bên của box.");
            }

            point = {
                x: cursorPosition.x >= centerX ? bottomCorner.x : topCorner.x,
                y: cursorPosition.y
            };
            break;
        }

        case pointIndexOfTheBox.p5: {
            if (!p4) {
                throwWarning("❌ Có lỗi xảy ra \n Điểm p4 không tồn tại", page.constants.messageType.error);
            }

            // ✅ p5 phải nằm thấp hơn p4 và trong box
            if (cursorPosition.y <= p4.y) {
                throwWarning("⚠️ Cảnh báo! \n Điểm p5 phải thấp hơn điểm p4.");
            }

            if (cursorPosition.y >= bottomCorner.y) {
                throwWarning("⚠️ Cảnh báo! \n Điểm p5 phải nằm trong cạnh bên của box.");
            }

            point = {
                x: p4.x,
                y: cursorPosition.y
            };
            break;
        }

        case pointIndexOfTheBox.p6: {
            if (!p3) {
                throwWarning("❌ Có lỗi xảy ra \n Điểm p3 không tồn tại", page.constants.messageType.error);
            }

            // ✅ p6 luôn ở dưới đáy theo x của p3
            point = {
                x: p3.x,
                y: bottomCorner.y
            };


            break;
        }

        default:
            throwWarning("❌ Có lỗi xảy ra \n Không xác định", page.constants.messageType.error);
    }

    // ✅ Đẩy điểm vào object.location dưới dạng [x, y, UUID]
    object.location.push([point.x, point.y, page.constants.visibility6PointCube.visible, getUUID()]);

    if (pointIndexOfTheBox.p6 === pointIndex) {
        object.location.push([bottomCorner.x, topCorner.y, page.constants.visibility6PointCube.visible, getUUID()]); // p7 aka p7
        object.location.push([topCorner.x, bottomCorner.y, page.constants.visibility6PointCube.visible, getUUID()]); // p8 aka p8
    }
}


/**
 * Cập nhật hình dạng và màu sắc của khối 6 điểm (6-point cube) trên SVG.
 * - Xác định mặt trước của khối dựa vào vị trí điểm.
 * - Vẽ lại các polygon tương ứng với mặt front và side.
 * - Tô màu và hiển thị các điểm đặc trưng nếu chưa có.
 *
 * @param {SVGElement | jQuery} svgEl - SVG element hoặc jQuery object chứa SVG.
 * @param {Object} obj - Đối tượng chứa thông tin các điểm location và id.
 * @param {Object} options - Tùy chọn màu sắc từng phần (front, side, point color, ...).
 * @param {boolean} [callByInit=false] - Đánh dấu đang gọi khi khởi tạo để tô màu ban đầu.
 */
function updateShapeColors(svgEl, g, obj, options, showPoint = true) {

    // 1. Lấy các điểm góc trên, dưới và một điểm cạnh bên để xác định hướng khối
    const [x1, y1] = obj.location[0];
    const [x2, y2] = obj.location[1];
    const [x4] = obj.location[3]; // Dùng để xác định mặt front lệch trái hay phải
    const centerX = x1 + (x2 - x1) / 2; // Trung điểm theo trục X

    const pointList = obj.allPointListOfTheBox; // Lấy danh sách tất cả các điểm cần vẽ

    // Nếu là jQuery object thì chuyển sang DOM element
    if (svgEl instanceof jQuery) svgEl = svgEl[0];
    const $svg = $(svgEl);

    // 2. Xóa các polygon tạm thời thuộc nhóm 'pseudo-6pointCube'
    $svg.find(`polygon[data-group='pseudo-6pointCube'][objectId='${obj.objectId}']`).remove();

    // 3. Làm trong suốt hình chữ nhật gốc nếu có (đã được vẽ trước đó)
    $svg.find(`rect[data-group='6pointCube'][objectId='${obj.objectId}']`).attr({
        style: 'fill: none',
        stroke: "red",
        "fill-opacity": 0
    });

    // 4. Xác định 4 điểm tạo mặt trước của khối tùy vào hướng (trái/phải)
    const isRightSide = x4 >= centerX;
    const pointsFrontBox = isRightSide
        ? [pointList.p1, pointList.p3, pointList.p6, pointList.p8] // mặt trước hướng phải
        : [pointList.p3, pointList.p7, pointList.p2, pointList.p6]; // mặt trước hướng trái

    // 5. Vẽ hai polygon đại diện cho mặt front và side

    obj.direction6PointCube =
        obj.tagList
            ?.find(({tagName}) => tagName?.trim().toLowerCase() === 'direction')
            ?.val
            ?.trim() ?? '';

    drawPolygonIfMissing(g, obj, "quad1-6pointCube", pointsFrontBox, obj.direction6PointCube?.trim().toLowerCase() === 'front' ? options.front : options.rear, 0, true);
    drawPolygonIfMissing(g, obj, "quad2-6pointCube", [pointList.p3, pointList.p4, pointList.p5, pointList.p6], options.side, 0, false);

    // 6. Danh sách các điểm và màu sắc tương ứng
    const pointStyles = {
        p1: {color: "#000000FF", fill: "#2B2525FF"},
        p2: {color: "#000000FF", fill: "#2B2525FF"},
        p3: {color: "yellow", fill: "#292B25FF"},
        p4: {color: "blue", fill: "#292B25FF"},
        p5: {color: "red", fill: "#292B25FF"},
        p6: {color: "green", fill: "#292B25FF"},
        p7: {color: "#000000FF", fill: "#2B2525FF"},
        p8: {color: "#000000FF", fill: "#2B2525FF"}
    };

    // ✅ 7. VẼ THEO THỨ TỰ ĐỂ ĐIỀU KHIỂN Z-INDEX
    // Thứ tự vẽ: p7, p8 → p1, p2 → p3, p4, p5, p6
    // (điểm vẽ sau sẽ hiển thị trên điểm vẽ trước)

    const drawingOrder = [
        // Vẽ trước (ở dưới)
        "p7", "p8",    // Back points - vẽ đầu tiên
        "p1", "p2",    // Middle layer points
        // Vẽ sau (ở trên)
        "p3", "p4", "p5", "p6"  // Front points - vẽ cuối cùng để luôn hiển thị trên cùng
    ];

    // Hàm helper để vẽ một điểm
    function drawPoint(key) {
        const point = pointList[key];
        if (!point) return;

        // Xóa điểm cũ nếu có
        $svg.find(`circle[id='${point.id}']`).remove();

        const {color, fill} = pointStyles[key];
        const circle = $(document.createElementNS("http://www.w3.org/2000/svg", "circle"))
            .attr({
                cx: point.x,
                cy: point.y,
                r: 5,
                id: point.id,
                v: point.v,
                "data-id": key,
                "data-objectType": obj.objectType,
                "data-group": 'circle-6pointCube',
                objectId: obj.objectId,
                class: `draw-point CLS_${obj.classId} drawing-points`,
                style: showPoint
                    ? `fill: ${point.v === 0 ? page.constants.color6PointCube.hiddenColor : fill}; stroke: ${point.v === 0 ? page.constants.color6PointCube.hiddenColor : color}`
                    : "stroke: none !important; fill: none !important"
            });

        // Luôn vẽ ngoài <g>
        $svg.append(circle);

        console.log(`✅ Drawn point ${key} - order: ${drawingOrder.indexOf(key) + 1}`);
    }

    // Vẽ theo thứ tự đã định
    drawingOrder.forEach(drawPoint);

    console.log("🎯 Drawing completed in order:", drawingOrder.join(" → "));
    console.log("📋 Z-Index layers (bottom to top):", {
        bottom: "p7, p8 (back points)",
        middle: "p1, p2 (middle points)",
        top: "p3, p4, p5, p6 (front points - always visible)"
    });

    // 8. Xóa các circle nằm trong <g> (chỉ giữ lại circle ngoài svg)
    $svg.find(`circle[objectId='${obj.objectId}']`).each(function () {
        const circle = this;
        const parent = circle.parentNode;

        const isInsideG = parent.tagName.toLowerCase() === 'g';

        if (isInsideG) {
            circle.remove();
        }
    });

    const $g = $(`g[objectId=${obj.objectId}][data-objectType=${obj.objectType}]`);
    const $rect = $g.find('rect[data-group="6pointCube"]');

    // Di chuyển <rect> xuống dưới cùng trong <g>
    $rect.appendTo($g);
}

/**
 * Draws a polygon on the given SVG element if all points are valid.
 * Replaces any existing polygon with the same group and objectId.
 *
 * Vẽ một polygon lên SVG nếu tất cả các điểm hợp lệ.
 * Sẽ xóa polygon cũ nếu tồn tại cùng `groupName` và `objectId`.
 *
 * @param {SVGElement|jQuery} svgEl - The SVG container to draw on (thẻ <svg> cần vẽ vào)
 * @param {Object} obj - Object data containing objectId and objectType (Thông tin đối tượng, gồm objectId và objectType)
 * @param {string} groupName - Value for `data-group` to group polygons (Tên nhóm để phân biệt polygon trong SVG)
 * @param {Array<{x: number, y: number}>} points - List of points {x, y} to draw the polygon (Danh sách điểm {x, y} tạo nên hình)
 * @param {string} color - Fill color for the polygon (Màu nền của polygon)
 * @param {number} [opacity=0] - Opacity of the fill color (Độ trong suốt của màu nền, mặc định là 0)
 * @param {boolean} [isSolidLine=true] - Whether the polygon border is solid (true) or dashed (false)
 *                                        Có phải là đường liền hay không (true: liền, false: đứt)
 */
function drawPolygonIfMissing(svgEl, obj, groupName, points, color, opacity = 0, isSolidLine = true) {
    if (points.some(p => !p)) return; // ❌ Nếu có điểm thiếu → bỏ qua

    // 🔄 Xóa polygon cũ nếu tồn tại cùng groupName và objectId
    $(svgEl).find(`polygon[data-group='${groupName}'][objectId='${obj.objectId}']`).remove();

    // 🖌️ Vẽ polygon mới
    const polygon = $(document.createElementNS("http://www.w3.org/2000/svg", "polygon"))
        .attr("data-group", groupName)
        .attr("data-objectType", obj.objectType)
        .attr("objectId", obj.objectId)
        .attr("points", points.map(p => `${p.x},${p.y}`).join(" "))
        .attr("stroke-width", "1")
        .attr("stroke", `${!isSolidLine ? 'red' : ''}`) // Nếu là đường đứt → có stroke
        .attr("main_edge_box", `${isSolidLine ? 'true' : ''}`) // Gắn cờ main_edge_box nếu là đường liền
        .attr(
            "style",
            `fill: ${color};${isSolidLine ? 'stroke: none;' : ''} stroke-dasharray: ${isSolidLine ? 'none' : '10'};`
        )
        .attr("fill-opacity", opacity)
        .attr("z-index", 1)
        .attr("stroke-linejoin", "round")
        .attr("class", "draw-object object-body CLASS_" + obj.classId);

    $(svgEl).append(polygon); // ✅ Thêm vào SVG
}


function hideAllPointsByObjectType(objectType, obj = null) {
    let selector = `circle[data-objectType="${objectType}"]`;

    if (obj && obj.objectId) {
        // Trừ ra những circle có objectId trùng obj.objectId
        selector += `:not([objectId="${obj.objectId}"])`;
    }

    const $points = $(selector);
    $points.fadeOut();
}


function showToastMessage(message, type = 'info') {
    const el = document.createElement('div');
    el.className = `custom-toast toast-${type}`;
    el.textContent = message;

    document.body.appendChild(el);

    // Tự động xóa sau animation (~3s)
    setTimeout(() => {
        el.remove();
    }, 3000);
}

function toggleVisibility6PointCube(obj, isVisible) {
    const $elements = $(`g[objectId="${obj.objectId}"][data-objectType="${obj.objectType}"]`);
    const $point = $(`circle[objectId="${obj.objectId}"][data-objectType="${obj.objectType}"]`);

    if (isVisible) {
        $elements.fadeIn();  // tương đương display: block
        $point.fadeIn();  // tương đương display: block
    } else {
        $elements.hide();  // tương đương display: none
        $point.hide();  // tương đương display: none
    }
}

function updateDependentPointsIn6Cube(p1, p2, p3, p4, p5, p6, p7, p8, isRight, isMovePoint12) {

    if (isMovePoint12)
        return [
            [p3[0], p1[1], p3[2], p3[3]],
            [isRight ? p2[0] : p1[0], p4[1], p4[2], p4[3]],
            [isRight ? p2[0] : p1[0], p5[1], p5[2], p5[3]],
            [p6[0], p2[1], p6[2], p6[3]],
            [p2[0], p1[1], p7[2], p7[3]],
            [p1[0], p2[1], p8[2], p8[3]],
        ];
    else
        return [
            [p8[0], p7[1], p1[2], p1[3]],
            [p7[0], p8[1], p2[2], p2[3]],
            [p3[0], p7[1], p3[2], p3[3]],
            [isRight ? p7[0] : p8[0], p4[1], p4[2], p4[3]],
            [isRight ? p7[0] : p8[0], p5[1], p5[2], p5[3]],
            [p6[0], p8[1], p6[2], p6[3]],
        ];
}

/**
 * Update only the `fill` color in the `style` attribute of a <polygon> element when change direction,
 * keeping other styles (like stroke, opacity) unchanged.
 * @param {number|string} object - Index of the SVG container (attribute `data-file-index`)
 * @param {string} groupName - The value of `data-group` used to identify the polygon
 * @param {boolean} isFrontDirection - If true, fill = red; if false, fill = blue
 */
function updatePolygonFillColor(object, groupName, isFrontDirection) {
    // find SVG by fileIndex
    const svg = $(`svg.drawingSVG[data-file-index='${object.fileIndex}']`);

    // find polygon
    let targetPolygon;
    if (object.location.length === 8)
        targetPolygon = svg.find(
            `polygon[data-group='${groupName}'][data-objectType='draw6PointCube'][objectId='${object.objectId}'][main_edge_box="true"]`
        );
    else
        targetPolygon = svg.find(
            `rect[data-objectType='draw6PointCube'][objectId='${object.objectId}']`
        );

    // get current style
    const currentStyle = targetPolygon.attr("style") || "";


    // Determine fill color based on direction (front: red, rear: blue)
    const newFill = isFrontDirection ? page.constants.color6PointCube.front : page.constants.color6PointCube.rear;

    // Replace old fill or add new one if it doesn't exist
    let updatedStyle;
    if (currentStyle.includes("fill:")) {
        updatedStyle = currentStyle.replace(/fill:\s*[^;]+;/, `fill: ${newFill};`);
    } else {
        updatedStyle = `fill: ${newFill};` + currentStyle;
    }

    // Cập nhật style mới vào polygon
    // update style into polygon
    targetPolygon.attr("style", updatedStyle);
}


page.fn.event.getMousePositionByTargetCustom = function (event) {
    let position = {};
    // Lấy phần tử đang tương tác từ event
    let eventTarget = $(event.target);

    // Tìm element cha có class wrapImageArea
    let layout = eventTarget.closest(".wrapImageArea");
    if (layout.length === 0) {
        layout = $(".wrapImageArea[data-file-index='" + page.data.event.currentFileIndex + "']");
    }

    let image = layout.children(".drawingImage");
    let scale = page.fn.data.getScale(image.attr("data-file-index"));
    let offset = layout.offset();
    if (_common.isEmpty(offset)) {
        offset = {left: 0, top: 0};
    }

    let imageData = page.fn.data.getImageOriginalSize(page.data.event.currentFileIndex);
    let imageAngle = image.attr("data-file-rotation");

    if (imageAngle != 0) {
        imageData = page.fn.drawing.calcRotationImageSize(imageData, imageAngle);
    }

    position.targetId = eventTarget.attr("id");
    // Use pageX/pageY to account for page scroll (fixes BEV offset)
    position.mouseX = (event.pageX != null ? event.pageX : event.clientX + window.pageXOffset);
    position.mouseY = (event.pageY != null ? event.pageY : event.clientY + window.pageYOffset);
    position.layout = layout;
    position.layoutX = offset.left;
    position.layoutY = offset.top;
    position.svgX = (position.mouseX - position.layoutX) / scale;
    position.svgY = (position.mouseY - position.layoutY) / scale;

    // Giới hạn trong vùng ảnh
    position.svgX = Math.max(0, Math.min(position.svgX, imageData.width));
    position.svgY = Math.max(0, Math.min(position.svgY, imageData.height));

    return position;
}

// #endregion

/**
 * Ninhld
 helper methods for render tag position
 */
function toPixels(pos, image) {
    let x = pos[0], y = pos[1];
    const sc = (image && image.scale) || 1;
    const iw = image.displayWidth || image.width || image.originalWidth || 1;
    const ih = image.displayHeight || image.height || image.originalHeight || 1;

    if (x >= 0 && x <= 1 && y >= 0 && y <= 1) {
        x = x * iw * sc;
        y = y * ih * sc;
    } else {
        x = x * sc;
        y = y * sc;
    }
    return [x, y];
}

function computeBBox(object, image) {
    let minX = Infinity, minY = Infinity;
    let maxX = -Infinity, maxY = -Infinity;

    (object.location || []).forEach((p) => {
        const [x, y] = toPixels(p, image);
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
    });

    // fallback nếu thiếu location
    if (!isFinite(minX)) {
        const x = object.objectPos?.x || 0;
        const y = object.objectPos?.y || 0;
        const w = object.width || 1, h = object.height || 1;
        minX = x;
        minY = y;
        maxX = x + w;
        maxY = y + h;
    }
    return {x: minX, y: minY, w: Math.max(1, maxX - minX), h: Math.max(1, maxY - minY)};
}

function relAnchor(tagPosition, w, h, pad) {
    switch (tagPosition) {
        case 'top-left':
            return {x: pad + 0, y: pad + 0};
        case 'top-right':
            return {x: pad + w, y: pad + 0};
        case 'bottom-left':
            return {x: pad + 0, y: pad + h};
        case 'bottom-right':
            return {x: pad + w, y: pad + h};
        case 'center':
        default:
            return {x: pad + w / 2, y: pad + h / 2};
    }
}

// helper: chọn hướng dàn flex & transform theo vị trí neo
function flexConfigForPosition(pos) {
    switch (pos) {
        case 'top-left':
            return {dir: 'row', justify: 'flex-start', align: 'flex-start', transform: 'translate(0,0)'};
        case 'top-right':
            return {dir: 'row-reverse', justify: 'flex-start', align: 'flex-start', transform: 'translate(-100%,0)'};
        case 'bottom-left':
            return {dir: 'row', justify: 'flex-start', align: 'flex-end', transform: 'translate(0,-100%)'};
        case 'bottom-right':
            return {dir: 'row-reverse', justify: 'flex-start', align: 'flex-end', transform: 'translate(-100%,-100%)'};
        case 'center':
            return {dir: 'row', justify: 'center', align: 'center', transform: 'translate(-50%,-50%)'};
        default:
            return {dir: 'row', justify: 'flex-start', align: 'flex-start', transform: 'translate(0,0)'};
    }
}

const GROUP_GAP = 8;     // px giữa các tag
const GROUP_PAD = 2;     // px padding nhẹ cho group
const GROUP_Z = -10;    // z-index cho group
// #end ninhld tag position

// ===============================
// BEV helpers (drawBevBox4)
// ===============================
if (!page.fn) page.fn = {};
if (!page.fn.drawing) page.fn.drawing = {};
if (!page.fn.drawing.bev) page.fn.drawing.bev = {};

// Tạo 4 đỉnh [TL, TR, BR, BL] từ 2 điểm đường chéo A, C
page.fn.drawing.bev.buildCornersFromTwoPoints = function (A, C) {
    if (!A || !C) return [];
    const x1 = Math.min(A[0], C[0]);
    const y1 = Math.min(A[1], C[1]);
    const x2 = Math.max(A[0], C[0]);
    const y2 = Math.max(A[1], C[1]);
    return [
        [x1, y1, (A && A[2])], // TL
        [x2, y1],              // TR
        [x2, y2, (C && C[2])], // BR
        [x1, y2]               // BL
    ];
};

// Tính bbox từ mảng 4 đỉnh
page.fn.drawing.bev.computeBBox = function (loc) {
    if (!Array.isArray(loc) || loc.length === 0) return {x: 0, y: 0, width: 0, height: 0};
    const xs = loc.map(p => p[0]);
    const ys = loc.map(p => p[1]);
    const x = Math.min.apply(null, xs);
    const y = Math.min.apply(null, ys);
    const width = Math.max.apply(null, xs) - x;
    const height = Math.max.apply(null, ys) - y;
    return {x, y, width, height};
};

// Tạo/cập nhật handle xoay trên cạnh phải của loc4
page.fn.drawing.bev.addOrUpdateRotateHandle = function (g, obj, loc4) {
    if (!g || !obj || !Array.isArray(loc4) || loc4.length < 3) return;
    const TR = loc4[1], BR = loc4[2];

    // Midpoint of the right edge (ordering TR->BR)
    const mx = (TR[0] + BR[0]) / 2;
    const my = (TR[1] + BR[1]) / 2;

    // Edge vector and outward normal
    const ux = BR[0] - TR[0];
    const uy = BR[1] - TR[1];
    const len = Math.hypot(ux, uy) || 1;
    let nx = -uy / len, ny = ux / len;
    const OFFSET = 20; // px away from the edge along its normal
    // Choose outward side: pick the side farther from box center
    let cx = mx, cy = my;
    try {
        if (obj?.bevState && Number.isFinite(obj.bevState.cx) && Number.isFinite(obj.bevState.cy)) {
            cx = obj.bevState.cx; cy = obj.bevState.cy;
        } else if (Array.isArray(loc4) && loc4.length >= 4) {
            cx = (loc4[0][0] + loc4[1][0] + loc4[2][0] + loc4[3][0]) / 4;
            cy = (loc4[0][1] + loc4[1][1] + loc4[2][1] + loc4[3][1]) / 4;
        }
    } catch(_) {}
    const p1x = mx + nx * OFFSET, p1y = my + ny * OFFSET;
    const p2x = mx - nx * OFFSET, p2y = my - ny * OFFSET;
    const d1 = Math.hypot(p1x - cx, p1y - cy);
    const d2 = Math.hypot(p2x - cx, p2y - cy);
    const hx = d1 >= d2 ? p1x : p2x;
    const hy = d1 >= d2 ? p1y : p2y;
    let handle = g.children("circle.bev-rotate-handle");
    if (!handle.length) {
        handle = $(document.createElementNS("http://www.w3.org/2000/svg", 'circle'));
        g.append(handle);
    }
    handle.attr({
        cx: hx,
        cy: hy,
        r: 8,
        class: "draw-point bev-rotate-handle",
        objectId: obj.objectId,
        rot: 'Y',
        "data-objectType": obj.objectType
    }).css({cursor: 'grab'});
};

// Vẽ polygon BEV và handle; trả về bbox
page.fn.drawing.bev.drawPolygon = function (g, obj, loc4, fileIndex) {
    if (!g || !obj || !Array.isArray(loc4) || loc4.length < 4) return {x: 0, y: 0, width: 0, height: 0};
    const pts = loc4.map(p => `${p[0]},${p[1]}`).join(' ');
    let poly = g.children("polygon.object-body");
    if (!poly.length) {
        poly = $(document.createElementNS("http://www.w3.org/2000/svg", "polygon"));
        g.append(poly);
    }
    poly.attr({
        points: pts,
        "data-file-index": fileIndex,
        objectId: obj.objectId,
        "data-group": "bevBox",
        "data-objectType": obj.objectType,
        class: "draw-object CLASS_" + obj.classId,
        "stroke-width": 1.5,
        stroke: obj.color || 'red',
        fill: obj.color || 'red',
        "fill-opacity": 0.2
    }).css({"pointer-events": "all"}).addClass("object-body");

    // Handle xoay
    page.fn.drawing.bev.addOrUpdateRotateHandle(g, obj, loc4);

    return page.fn.drawing.bev.computeBBox(loc4);
};

// Vẽ hình chữ nhật tạm thời từ 2 điểm (khi đang kéo)
page.fn.drawing.bev.drawTempRect = function (g, obj, A, C, fileIndex) {
    if (!g || !obj || !A || !C) return {x: 0, y: 0, width: 0, height: 0};
    const x = Math.min(A[0], C[0]);
    const y = Math.min(A[1], C[1]);
    const width = Math.abs(A[0] - C[0]);
    const height = Math.abs(A[1] - C[1]);

    const box = {
        x,
        y,
        width: page.fn.drawing.limitMousePosition(width),
        height: page.fn.drawing.limitMousePosition(height)
    };
    let r = g.children("rect.object-body");
    if (!r.length) {
        r = $(document.createElementNS("http://www.w3.org/2000/svg", "rect"));
        g.append(r);
    }
    r.attr({
        x: box.x,
        y: box.y,
        width: box.width,
        height: box.height,
        "data-file-index": fileIndex,
        objectId: obj.objectId,
        "data-group": "bevBox",
        "data-objectType": obj.objectType,
        class: "draw-object CLASS_" + obj.classId,
        "stroke-width": 1.5,
        "fill-opacity": 0.5,
    }).css({"pointer-events": "all", "fill": obj.color || "red"}).addClass("object-body");

    return box;
};

// --- BEV state helpers to avoid floating-point drift ---
// Store canonical params: center (cx, cy), size (w, h), rotation (angle)
page.fn.drawing.bev.stateFromCorners = function (loc4) {
    if (!Array.isArray(loc4) || loc4.length < 4) return null;
    const [p1, p2, p3, p4] = loc4; // TL, TR, BR, BL
    const cx = (p1[0] + p2[0] + p3[0] + p4[0]) / 4;
    const cy = (p1[1] + p2[1] + p3[1] + p4[1]) / 4;
    // angle from top edge p1->p2
    const angle = Math.atan2(p2[1] - p1[1], p2[0] - p1[0]);
    // width, height as edge lengths
    const w = Math.hypot(p2[0] - p1[0], p2[1] - p1[1]);
    const h = Math.hypot(p4[0] - p1[0], p4[1] - p1[1]);
    return {cx, cy, w: Math.max(1, w), h: Math.max(1, h), angle};
};

page.fn.drawing.bev.getState = function (object) {
    if (!object) return null;
    const isNum = (v) => typeof v === 'number' && isFinite(v);
    let s = object.bevState;
    // If existing state is incomplete (null/undefined), rebuild from corners
    if (!s || !isNum(s.cx) || !isNum(s.cy) || !isNum(s.w) || !isNum(s.h) || !isNum(s.angle)) {
        const derived = page.fn.drawing.bev.stateFromCorners(object.location);
        if (!derived) return null;
        // Preserve angle if valid, otherwise use derived
        if (s && isNum(s.angle)) derived.angle = s.angle;
        object.bevState = derived;
        return derived;
    }
    return s;
};

page.fn.drawing.bev.cornersFromState = function (state, metas) {
    if (!state) return [];
    const {cx, cy, w, h, angle} = state;
    const cosA = Math.cos(angle), sinA = Math.sin(angle);
    // local corners: TL, TR, BR, BL
    const halfW = w / 2, halfH = h / 2;
    const locals = [
        [-halfW, -halfH],
        [halfW, -halfH],
        [halfW, halfH],
        [-halfW, halfH]
    ];
    const toWorld = (lx, ly) => {
        const x = cx + (cosA * lx - sinA * ly);
        const y = cy + (sinA * lx + cosA * ly);
        return [page.fn.drawing.limitMousePosition(x), page.fn.drawing.limitMousePosition(y)];
    };
    return locals.map((l, idx) => {
        const wpt = toWorld(l[0], l[1]);
        const meta = metas && metas[idx] != null ? metas[idx] : undefined;
        return meta !== undefined ? [wpt[0], wpt[1], meta] : [wpt[0], wpt[1]];
    });
};

page.fn.drawing.bev.updateByCornerDrag = function (object, targetId, mouseX, mouseY) {
    const s = page.fn.drawing.bev.getState(object);
    if (!s) return null;
    const cosA = Math.cos(s.angle), sinA = Math.sin(s.angle);
    const toLocal = (x, y) => {
        const ox = x - s.cx, oy = y - s.cy;
        const lx = cosA * ox + sinA * oy;
        const ly = -sinA * ox + cosA * oy;
        return [lx, ly];
    };
    const LM = toLocal(mouseX, mouseY);
    // opposite corner in local
    let ax = 0, ay = 0;
    const halfW = s.w / 2, halfH = s.h / 2;
    if (targetId === "1") {
        ax = halfW;
        ay = halfH;
    } // TL vs BR
    else if (targetId === "2") {
        ax = -halfW;
        ay = halfH;
    } // TR vs BL
    else if (targetId === "3") {
        ax = -halfW;
        ay = -halfH;
    } // BR vs TL
    else if (targetId === "4") {
        ax = halfW;
        ay = -halfH;
    } // BL vs TR
    else return null;

    // new center offset in local and new size
    const cLocalX = (LM[0] + ax) / 2;
    const cLocalY = (LM[1] + ay) / 2;
    const newW = Math.max(1, Math.abs(ax - LM[0]));
    const newH = Math.max(1, Math.abs(ay - LM[1]));

    // convert center offset local -> world and update state
    s.cx = s.cx + (cosA * cLocalX - sinA * cLocalY);
    s.cy = s.cy + (sinA * cLocalX + cosA * cLocalY);
    s.w = newW;
    s.h = newH;

    // Thay đổi ở đây: không return trực tiếp corners
    const metas = object.location ? [object.location[0]?.[2], object.location[1]?.[2], object.location[2]?.[2], object.location[3]?.[2]] : null;
    const newCorners = page.fn.drawing.bev.cornersFromState(s, metas);

    // Trả về một object chứa cả state và corners
    return {newState: s, newCorners: newCorners};
};

// Rotate current BEV object by delta angle (radians) around its center
page.fn.drawing.bev.rotateByAngle = function (object, deltaRad, fileIndex) {
    try {
        if (!object || object.objectType !== page.constants.drawType.drawBevBox4) return false;
        // Work in unconverted (pixel) space
        page.fn.data.unConvertObjectLocation(object);
        if (!Array.isArray(object.location) || object.location.length < 4) return false;
        // Always derive center and size from current corners to avoid stale/converted state
        const base = page.fn.drawing.bev.stateFromCorners(object.location);
        if (!base) return false;
        // Keep previous angle if present, else use computed
        const prevAngle = (object.bevState && typeof object.bevState.angle === 'number') ? object.bevState.angle : base.angle;
        base.angle = prevAngle + deltaRad;
        object.bevState = base;
        const metas = [object.location[0]?.[2], object.location[1]?.[2], object.location[2]?.[2], object.location[3]?.[2]];
        object.location = page.fn.drawing.bev.cornersFromState(base, metas);
        page.fn.data.convertObjectLocation(object);
        const fi = fileIndex != null ? fileIndex : object.fileIndex;
        page.fn.drawing.renderObject(object);
        page.fn.drawing.renderObjectPoint(fi, object.objectId, false, object);
        try {
            if (window.projectBevFromObject) {
                window.projectBevFromObject(object);
            } else if (window.projectBevLiveFromCurrent) {
                window.projectBevLiveFromCurrent();
            }
        } catch (_) {
        }
        return true;
    } catch (_) {
        return false;
    }
};

// (removed) BEV preview wrapper – logic integrated directly in BEV branch
