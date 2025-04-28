let page = {};

page.constants = {};
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
}
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
    , magicAI: "magicAI"
    , keypoint: "keypoint"
    , rectangle4p: "rect4p"
    , pointGroup: "points"
    , point: "point"
    , paint: "paint"
    , sideBox: "rect6p"
    , edgePoints: "edgePoints"
    , edgeLines: "edgeLines"
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
    , drawPolyline: "drawPolyline"
    , drawKeypoint: "drawKeypoint"
    , drawRectangle4p: "drawRectangle4p"
    , drawPointGroup: "drawPointGroup"
    , makeGroup: "makeGroup"
    , drawPoint: "drawPoint"
    , drawPaint: "drawPaint"
    , drawSideBox: "drawSideBox"
    , drawEdgePoints: "drawEdgePoints"
    , drawEdgeLines: "drawEdgeLines"
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
    topLeft : [0, 1, 2, 3, 5, 7]
    , bottomLeft : [14, 12, 10]
    , topRight : [4, 6, 8, 9]
    , bottomRight : [15, 13, 11]
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

page.data = {};
page.data.countLoading = 0;
page.data.task = {};
page.data.loadTicket = {};
page.data.layout = {};
page.data.layout.undockingList = [];
page.data.event = {};
page.data.event.workFileMover = {};
page.data.event.workFileMover.isMoving = false;
page.data.event.isValidHotkey = true;
page.data.historyData = new HashMap();
page.data.historyDrawData = new HashMap();
page.data.historyDrawDataObject = new HashMap();
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

page.dom = {}
page.init = function () {
    document.oncontextmenu = function () { return false; };
    window.ondragstart = function () { return false; };
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
    // page.fn.data.changeFileIndex(0);

    //init events
    page.fn.event.addEvent(window, "mousedown", page.fn.event.mouseDown, false);
    page.fn.event.addEvent(window, "mousemove", page.fn.event.mouseMove, false);
    page.fn.event.addEvent(window, "mouseup", page.fn.event.mouseUp, false);
    page.fn.event.addEvent(window, "wheel", page.fn.event.mouseWheel, true);
    page.fn.event.addEvent(window, "keydown", page.fn.event.keyDown, true);
    page.fn.event.addEvent(window, "keyup", page.fn.event.keyUp, true);
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

    page.data.userSetting.border = page.data.userSetting.border.min > page.constants.config.border.min ? page.constants.config.border.min : page.data.userSetting.border;
    page.data.userSetting.border = page.data.userSetting.border.max < page.constants.config.border.max ? page.constants.config.border.max : page.data.userSetting.border;
    page.data.userSetting.point = page.data.userSetting.point.min > page.constants.config.point.min ? page.constants.config.point.min : page.data.userSetting.point;
    page.data.userSetting.point = page.data.userSetting.point.max < page.constants.config.point.max ? page.constants.config.point.max : page.data.userSetting.point;

    if (page.data.userSetting.isViewObjectGroup == "true") {
        page.dom.btnToggleViewObjectGroup.addClass("on");
    } else if (page.data.userSetting.isViewObjectGroup == "half") {
        page.dom.btnToggleViewObjectGroup.addClass("onHalf");
    }

    $("#wrapObjectTooltipOnOff input[name='objectTooltipOnOff'][value='" + page.data.userSetting.objectTooltip + "']").click();
    $("#wrapObjectTooltipOnOff").buttonset();
    $("#wrapDefaultClass").buttonset();
    $("#keypointLineStyle_" + page.data.userSetting.keypointLineStyle).prop("checked", true);
    $("#wrapKeypointLineStyle").buttonset();
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
            keyCode: key.hotkey || ''
            , keyName: key.hotkeyName || ''
            , isCheckPermission: true
            , type: page.constants.hotkeyType.classesForObject
            , isVisible: true
            , description: _common.template.parseMessage(page.message.hotkeyObjectClass, {className: key.className})
            , excuteFunction: function (event) {
                if(!page.data.loadTicket.isValid) {
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
                    if(!page.data.loadTicket.isValid) {
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
                    if(!page.data.loadTicket.isValid) {
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
                    if(!page.data.loadTicket.isValid) {
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


    page.fn.drawing.startNewDrawing(page.constants.method.moveImage);
    page.data.paging = {};

    page.fn.data.getImageList({
        addAssignImage: true
    });
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
    page.data.countLoading--;
    if (page.data.countLoading <= 0) {
        page.dom.loading.removeClass("on");
    } else {
        log.info(page.data.countLoading, "page.data.countLoading, hide");
    }
}
page.fn.onErrorLoadGuideImage = function() {
    $("#popGuide_image").hide();
    if(page.data.task.taskDescHTML == "") {
        $("#popGuide_downloadDesc").show();
    }
    $("#popGuide_downloadFotter").show();
}
page.fn.showDownloadGuideFile = function () {
    $("#popGuide_downloadFotter").show();
}

page.fn.alert = function (message) {
    // $("#popAlert2Title").text("알림");
    // $("#alertModal2Message").html(message);
    // let left = (window.innerWidth / 2) - ($("#alertModal2").width() / 2);
    // let height = (window.innerHeight / 2) - ($("#alertModal2").height() / 2);
    // $("#alertModal2").css("left", left).css("top", height).fadeIn();
    //
    // let p = $("<p class='alert fontSize_12'></p>");
    // message = "[" + moment().format('YYYY-MM-DD HH:mm:ss') + "] " + message;
    //
    // page.dom.txtHistoryMsg.attr("key", "").text(message);
    // p.text(message);
    // page.dom.popMsgHisContents.append(p);
    // page.dom.popMsgHisContents.scrollTop(page.dom.popMsgHisContents.get(0).scrollHeight);
}
page.fn.hideAlert = function () {
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
    let iw = widthWrap - imageSize.width;
    let ih = heightWrap - imageSize.height;
    let scale = 0;
    if(iw > 0) {
        if (iw < ih) {
            //가로기준 축소
            scale = (drawingArea.width() - 10) / imageSize.width;
        } else {
            //세로기준 축소
            scale = (drawingArea.height() - 10) / imageSize.height;
        }
    } else {
        if (iw > ih) {
            //세로기준 축소
            scale = (drawingArea.height() - 10) / imageSize.height;
        } else {
            // if (imageSize.width > imageSize.height) {
            //     //세로기준 축소
            //     scale = (drawingArea.height() - 10) / imageSize.height;
            // } else {
            // 가로기준 축소
            scale = (drawingArea.width() - 10) / imageSize.width;
            // }
        }
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
    if (object.objectType == "point") {
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
    isCapture = isCapture == true ? true : false;
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
            if ($(event.path[i]).hasClass(targetClass) == true) {
                if (fileIndex != null) {
                    if ($(event.path[i]).attr("data-file-index") == fileIndex) {
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
            if (page.constants.hotkeys[i].keyName == hotkey.keyName && hotkey.keyName != '') {
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
            if (sel.length == 0) {
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
                            if (tag.tagSelectValueVoList.length == (i + 1)) {
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
        if($("#rootPopPTPoints li.on").length == 0) {
            page.fn.alert(page.message.copyNoSelected);
            return false;
        }
        let sel = $("#selectTag_" + tagId);
        if (sel.length == 0) {
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
                        if (tag.tagSelectValueVoList.length == (i + 1)) {
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
    if (page.fn.event.isDrawingEvent(event)) {
        if (event.deltaY > 0) {
            page.fn.drawing.zoomOut(event);
        } else {
            page.fn.drawing.zoomIn(event);
        }
        if (page.data.drawing.isViewCorsshair == true) {
            page.fn.drawing.setPositionOfCrosshair(event);
        }
    } else {
        log.info("This is not image area");
    }
}
page.fn.event.mouseDownOnKeypointCircle = function (event, object) {
    if (page.data.event.selectedObjectId == object.objectId) {
        let isRightMB = false;
        event = event || window.event;
        page.data.event.isRemoverMoving = false;
        $("#removerRange").remove();
        if ("which" in event)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
            isRightMB = event.which == 3;
        else if ("button" in event)  // IE, Opera
            isRightMB = event.button == 2;

        let t = $(event.target);
        if (!isRightMB) {
            page.data.event.isResizingRadius = true;
        }
        page.data.event.resizeingRadiusIndex = Number.parseInt(t.attr("pointNum"));
        page.data.event.resizeingRadiusNum = Number.parseInt(t.attr("index"));
        page.data.event.movePointIndex = Number.parseInt(t.attr("index"));
        $("#objectSizeViewer").show().text("*" + t.attr("pointNum") + " Radius : " + t.css("r"));
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
        if ($("#chkFixScale").is(":checked") == false) {
            page.fn.resize.centerToFit(target);
        } else {
            if(_common.cookie.get(page.constants.cookieKeys.valueScale) == null) {
                _common.cookie.set(page.constants.cookieKeys.valueScale, '0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2');
            } else {
                let valueScale = _common.cookie.get(page.constants.cookieKeys.valueScale).split(",");
                if(valueScale.length != 8) {
                    _common.cookie.set(page.constants.cookieKeys.valueScale, '0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2');
                }
            }
            let scale = cookieValueScale[fileIndex];
            t.attr("data-scale", scale);
            page.fn.resize.applyScaleImage(target);
            if ($("#chkFixPosition").is(":checked") == false) {
                page.fn.resize.toCenter(target);
            } else {
                let valuePosition = _common.cookie.get(page.constants.cookieKeys.valuePosition).split(",");
                if(valuePosition != null && page.constants.ticketFileSize == 1) {
                    t.parent().css("top", parseFloat(valuePosition[0])).css("left", parseFloat(valuePosition[1]));
                } else {
                    page.fn.resize.toCenter(target);
                }
                page.fn.drawing.applyRulerPositionByIndex(t.attr("data-file-index"));
            }
        }
        page.fn.showLoading("page.fn.data.onLoadImage, getFileData");
        let file = page.data.loadTicket.fileList[fileIndex];
        let url = "/apis/v1/imageDataView/annotate/get";
        _common.ajax.asyncJSON2({
            url: url
            , param: {
                groupId: page.data.task.projectId
                , deliveryId: page.data.task.taskId
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
                    file.tagList = rv.data.tagList;
                    file.objectGroupInfo = JSON.parse(_common.nvl(rv.data.objectGroupInfo, "[]"));
                    if (page.data.task.tool.includes("Edge-Points")) {
                        page.fn.data.setEdgePointMap(fileIndex);
                    }
                    page.fn.drawing.renderAllObject(file.fileIndex);
                    page.fn.data.setObjectGroup(fileIndex);
                    if (page.data.event.currentFileIndex == fileIndex) {
                        page.fn.data.changeFileIndex(fileIndex);
                    }
                } catch (E) {
                    log.error(E, "page.fn.data.onLoadImage, getData");
                }
                if(page.data.loadTicket.statusReview == page.constants.imageStatus.fail
                    && page.data.loadTicket.fileList.length - 1 == fileIndex) {
                    if(page.data.loadTicket.fileList[fileIndex].objectList == null) {
                        page.constants.refreshFailData = true;
                    } else {
                        page.fn.popup.makeRejectReasonPopup(page.data.loadTicket.workTicketId);
                        if(page.data.reqType == page.constants.workType.annotator) {
                            page.fn.popup.showRejectReason(page.data.loadTicket.workTicketId);
                        }
                    }
                }
                page.fn.drawing.resetPopupTag(fileIndex, "page.fn.data.onLoadImage");
                page.fn.hideLoading();

            }
        });
    }
}
page.fn.event.onErrorImageLoad = function (img) {
    if ($(img).prop("src").startsWith(page.data.imageServerURL)) {
        if ($(img).attr("id") == "drawingImage") {
            alert(page.message.refreshLoadImage);
        }
        $(img).attr("server-name", "empty")
            .prop("src", "/images/tool/annImage/empty.png")
        ;
    } else if ($(img).attr("server-name") != "empty") {
        $(img).attr("server-name", "KR")
            .prop("src", page.data.imageServerURL + $(img).attr("file-path"))
        ;
    }
}
page.fn.event.mouseDown = function (event) {
    // log.info(event, "page.fn.event.mouseDown");
    let target = page.fn.event.filterByClass(event, "root");
    let isRightClick = page.fn.event.isMouseRightClick(event);
    if (isRightClick) {
        if (target.hasTarget == true) {
            page.fn.event.moveImageStart(event, target.target);
        }
    } else {
        if (target.hasTarget == true && page.data.event.method == page.constants.method.moveImage) {
            page.fn.event.moveImageStart(event, target.target);
        }
        target = page.fn.event.filterByClass(event, "popUp-header");
        if (target.hasTarget == true) {
            page.fn.event.popupMoveStart(event, target.target);
        } else if (page.data.event.method == page.constants.method.selectObject) {
            target = page.fn.event.filterByClass(event, "object-body");
            if (target.hasTarget == true) {
                let objectId = target.target.attr("objectId");
                if ($("#rootObject_" + objectId).length > 0) {
                    log.info("selectedObject = " + objectId);
                    page.fn.data.onSelectObject(page.data.event.currentFileIndex, objectId, true);
                }
            }
        }
    }
}
page.fn.event.mouseMove = function (event) {
    if (page.data.drawing.isViewCorsshair == true) {
        page.fn.drawing.setPositionOfCrosshair(event);
    }
    if (page.data.event.workFileMover.isMoving == true) {
        // log.info(event, "moving workfile-layout");
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
    if (page.data.event.working == page.constants.method.moveImage) {
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
    } else if (_common.isNotEmpty(page.data.event.popup) && page.data.event.popup.isMoving == true) {
        let pos = page.fn.event.getMousePositionByTarget(event, page.data.event.popup.target);
        page.data.event.popup.target
            .css("left", page.data.event.popup.position.startTargetX + (pos.mouseX - page.data.event.popup.position.startMouseX))
            .css("top", page.data.event.popup.position.startTargetY + (pos.mouseY - page.data.event.popup.position.startMouseY))
        ;
    }
}
page.fn.event.mouseUp = function (event) {
    log.info(event, "page.fn.event.mouseUp");
    if (page.data.event.working == page.constants.method.moveImage) {
        page.data.event.working = null;
    } else if (_common.isNotEmpty(page.data.event.popup) && page.data.event.popup.isMoving == true) {
        page.data.event.popup.isMoving = false;
    } else if (page.data.event.working == page.constants.method.movePoint) {
        page.data.event.working = null;
        page.fn.event.movePointEnd(event);
        $("#clonedObj").remove();
        $("#clonedObj2").remove();
    } else if (page.data.event.method == page.constants.method.moveObject && page.data.event.isMovingObject == true) {
        page.fn.event.moveObjectEnd(event);
    } else if (page.data.event.workFileMover.isMoving == true) {
        page.data.event.workFileMover.isMoving = false;
        page.data.event.workFileMover.target.css("opacity", 1);
    } else if (page.data.event.workFileMover.isResizing == true) {
        page.data.event.workFileMover.isResizing = false;
        page.data.event.workFileMover.target.css("opacity", 1);
    } else if (page.data.event.method == page.constants.method.makeGroup) {
        page.fn.drawing.endFindObjectForGroup(event);
    }
    page.data.event.canMoveEdgePoint = false;
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
page.fn.event.getPointOnFile = function (fileIndex, event) {
    let imageSize = page.fn.data.getImageOriginalSize(fileIndex);
    let targetFile = $(".drawingSVG[data-file-index='" + fileIndex + "']");
    let position = page.fn.event.getMousePositionByTarget(event, targetFile);
    log.info(position, "page.fn.event.getPointOnFile, position");
    let x = (position.mouseX - position.targetX) / imageSize.scale;
    let y = (position.mouseY - position.targetY) / imageSize.scale;
    let imageAngle = $(`.drawingImage[data-file-index=${fileIndex}]`).attr("data-file-rotation");

    //Convert coordinate values output on the image according to the rotation angle of the rotated image
    if (imageAngle != 0) {
        let mousePosition = { x : x, y : y };
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
    page.gateway(page.constants.gateway.command.add, _common.template.parseMessage(page.message.newPoint, {orderSeq: object.orderSeq}));
    object.location.push([
        point.x, point.y, getUUID()
    ]);
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
    }
    page.fn.data.convertObjectLocation(page.data.drawing.object);
    page.fn.drawing.renderObject(page.data.drawing.object);
}
page.fn.event.moveObjectEnd = function (event) {
    page.data.event.isMovingObject = false;
    page.gateway(page.constants.gateway.command.add, page.message.moveObject);
    page.fn.data.saveObject(page.data.drawing.object);
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
    // 이미지가 회전된 상태에서 회전된 좌표 반환을 위해 바뀐 이미지 사이즈 반환
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
page.fn.event.keyUp = function () {
    if (page.data.event.method == page.constants.method.editObject) {
        page.dom.crosshairSVG.hide();
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
        let value = page.fn.data.getObjectPointTagValue(target.attr("tagId"), page.data.event.selectedObjectId, $("#rootPopPTPoints li.on").attr("data-pointnumber"), fileIndex);
        tag = {val: value};
        log.info(tag, "page.fn.rollbackInput, tagTypeCd.point");
    }
    target.val(tag == null ? "" : tag.val);
}
page.fn.event.focusedInputBlur = function (target) {
    if(page.data.loadTicket.isValid) {
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
                            object.tagList.push(tag);
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
                } else if (target.attr("tagTypeCd") == page.constants.tag.tagTypeCd.point) {
                    let object = page.fn.data.getObject(fileIndex, objectId);
                    if (object == null) {
                        object = page.fn.data.getObject(fileIndex, page.data.event.selectedObjectId);
                    }
                    let selectedPointId = $("#rootPopPTPoints li.on").attr("data-pointnumber");
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
                                    } else {
                                        object.tagList.splice(ii, 1);
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
page.fn.event.failReasonFocusInput = function() {
    page.data.event.isValidHotkey = false;
}
page.fn.event.failReasonFocusInputBlur = function() {
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
    if (cls != null) {
        $(".edgePoint").addClass(cls);
    }
}
page.fn.event.resetEdgePointEvent = function () {
    page.data.event.isDrawingEdgePoint = false;
    page.data.event.canMoveEdgePoint = false;
    $(".edgePoint").removeClass("on");
    $(".edgePoint").removeClass("active");
}
page.fn.event.showReviewFileInfo = function(fileIndex) {
    let rawFileId = page.data.loadTicket.fileList[fileIndex].rawFileId;
    $("#popReviewImageTagList").empty();
    $("#popReviewObjectTagList").empty();
    if (page.data.loadTicket.fileList[fileIndex].objectList != null && page.data.loadTicket.fileList[fileIndex].objectList.length > 0) {
        page.data.loadTicket.fileList[fileIndex].objectList.forEach(function (imgObj) {
            $("#popReviewObjectTagList").append(_common.template.parseObject("tmpl-review-object", imgObj));
            if (imgObj.tagList != null && imgObj.tagList.length > 0) {
                imgObj.tagList.forEach(function (oTag) {
                    let cTag = page.fn.data.getConstantsTag(oTag.tagId);
                    if(cTag) {
                        oTag.color = cTag.color;
                        oTag.color = oTag.color == null ? "var(--text)" : oTag.color;
                        oTag.tagName = cTag.tagName;
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
            console.log('this is imgTag' ,imgTag)
            let cTag = page.fn.data.getConstantsTag(imgTag.tagId);
            console.log('this is cTag', cTag)
            imgTag.tagName = cTag.tagName;
            imgTag.tagValueName = page.fn.data.getTagValueName(cTag, imgTag.val);
            $("#popReviewImageTagList").append(_common.template.parseObject("tmpl-review-tag", imgTag));
        });
    }
    $(".chkReviewRejectData").prop("checked", false);
    if(page.data.reviewFailDetailData.get(rawFileId) != null) {
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
    if(page.data.loadTicket.isValid) {
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
page.fn.event.addScrollEvent = function() {
    let nowScroll = $(t).scrollTop();
    if (nowScroll > 1) {
        $(".check-area").hide();
    } else {
        $(".check-area").show();
    }
}
page.fn.event.openTabAttachFile = function (t) {
    let uploadFileId = $(t).prev().attr("id");
    let uploadFile = $("#"+uploadFileId)[0].files;
    let dataSrc = $(t).attr("data-src");

    let img = window.open("", "_blank");
    img.document.write("<img src= '"+dataSrc+"'>");
    img.onbeforeunload = function () {
    }
}
page.fn.event.uploadAttachFile = function (t) {
    let file = $(t)[0].files;
    let multipart = new FormData();
    if (file.length ==0) {
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
    document.querySelector('#'+ uploadFile).files = dataTransfer.files;
}
page.fn.event.downloadAttachFile = function (t) {
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
page.fn.event.animImageListFocus = function(ticketId) {
    try {
        let target = $(".imageListItem[data-ticketId='" + ticketId + "']");
        let scroller = $("#rootImageListWrap .imageListScroller");
        scroller.animate({scrollTop: (scroller.scrollTop() + (target.offset().top - 86))});
    } catch (E) {
        log.error(E);
        log.error(target);
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
                valid.isCrosshair = true;
            } else if (page.data.drawing.object.objectType == page.constants.drawType.polygon) {
                valid.isValid = true;
                valid.isCrosshair = true;
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
    let x = e.clientX;
    let y = e.clientY;
    x -= page.dom.svg.offset().left;
    y -= page.dom.svg.offset().top;
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
            let mousePosition = { x : position.svgX, y : position.svgY };
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
            let mousePosition = { x : position.svgX, y : position.svgY };
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
page.fn.drawing.setFixScale = function() {
    page.constants.userSetting.fixScale = $("#chkFixScale").is(":checked") ? "true" : "false";
    _common.cookie.set(page.constants.cookieKeys.fixScale, page.constants.userSetting.fixScale);
    if(page.constants.userSetting.fixScale == "false") {
        $("#chkFixPosition").prop("checked", false);
        _common.cookie.set(page.constants.cookieKeys.fixPosition, "false");
    }
}
page.fn.drawing.setFixPosition = function() {
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
        if(_common.cookie.get(page.constants.cookieKeys.valueScale) == null) {
            _common.cookie.set(page.constants.cookieKeys.valueScale, '0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2');
        } else {
            let valueScale = _common.cookie.get(page.constants.cookieKeys.valueScale).split(",");
            if(valueScale.length != 8) {
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
    let curX = event.clientX;
    let curY = event.clientY;
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
    $("#btn_" + drawType).addClass("on");
}
page.fn.drawing.endNewDrawing = function (callBy) {
    log.info(callBy, "page.fn.drawing.endNewDrawing, callBy");
    if (page.data.event.method == page.constants.method.magicQ) {
        page.data.event.method = page.constants.method.none;
        page.fn.data.runMagicQ(page.data.drawing.object);
        return;
    }
    $(".objectGroupHighlight").removeClass("objectGroupHighlight");
    page.fn.drawing.unRenderObjectPoint();  // 키포인트 때문
    page.fn.event.resetEdgePointEvent();
    if (page.data.drawing.isAddingObject == true) {
        let isValidObjectData = page.fn.data.isValidObjectData(page.data.drawing.object);
        if (page.data.drawing.object != null && isValidObjectData != true) {
            if(isValidObjectData == 'min') {
                if(page.constants.drawMin.isUse == "Y") {
                    page.fn.alert(_common.template.parseMessage(page.message.cancleDrawingMin, {
                        minX: page.constants.drawMin.x
                        , minY: page.constants.drawMin.y
                    }));
                } else if(page.constants.drawMin.isUse == "S") {
                    page.fn.alert(_common.template.parseMessage(page.message.cancleDrawingMinP, {
                        area: page.constants.drawMin.x
                    }));
                }
            }
            page.fn.data.deleteObject(page.data.drawing.object.fileIndex, page.data.drawing.object.objectId);
        } else if(page.data.drawing.object == null) {
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
        $("circle.draw-point").not(".edgePoint").remove();
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
    if (methodType != page.constants.method.drawKeypoint) {
        page.fn.data.resetKeypointId();
    }
    if (methodType != page.constants.method.none
        && methodType != page.constants.method.moveImage
        && methodType != page.constants.method.selectObject
        && methodType != page.constants.method.selectObject
        && !page.data.loadTicket.isValid
    ) {
        page.fn.alert(page.message.isInvalidEdit);
        return false;
    }
    if (methodType == page.constants.method.selectObject) {
        page.dom.styleChooseObject.html(_common.template.parseObject("tmpl_style_chooseObject", {border: page.data.userSetting.border + 5}));
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
page.fn.drawing.applyRulerPositionByIndex = function (fileIndex) {
    let wrapImageArea = $(".wrapImageArea[data-file-index='" + fileIndex + "']");
    let wrapWidth = wrapImageArea.width();
    let wrapHeight = wrapImageArea.height();
    let imageAngle = $(`.drawingImage[data-file-index=${fileIndex}]`).attr("data-file-rotation");
    // 회전된 이미지 규격에 맞게 눈금자의 크기를 조정해주기 위해
    if (imageAngle != 0) {
        [wrapWidth, wrapHeight] = page.fn.drawing.calcRotationImageWrapSize(wrapImageArea, imageAngle);
    }
    let position = wrapImageArea.position();
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
    $("svg circle.draw-object.keypoint[objectId='" + page.data.event.selectedObjectId + "']").removeClass("draw-point");
    $("svg circle.draw-point[objectId='" + page.data.event.selectedObjectId + "']").not(".circle").remove();
    $("svg polyline.draw-point[objectId='" + page.data.event.selectedObjectId + "']").not(".circle").remove();
    $("svg circle.draw-point[objectId='" + page.data.event.selectedObjectId + "']").removeClass("draw-point");
    page.data.event.renderObjectData = null;
    $("#objectSizeViewer").hide();
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
    const anim = 150;
    $("#" + pointId).fadeOut(anim).fadeIn(anim).fadeOut(anim).fadeIn(anim).fadeOut(anim).fadeIn(anim);
}
page.fn.drawing.renderObjectGroup = function (fileIndex) {
    page.dom.popObjectGroupList.empty();
    let fileData = page.data.loadTicket.fileList[fileIndex];
    if (fileData.objectGroupInfo != null) {
        fileData.objectGroupInfo.forEach(function (grp) {
            grp.objectList = [];
            for(var i = 0; i < fileData.objectList.length; i++) {
                let o = _common.copy(fileData.objectList[i]);
                if(o.groupId.includes(grp.groupId)) {
                    grp.objectList.push(o.objectId);
                }
            }
            page.fn.data.sortObjNumList(fileIndex, grp);
            grp.countObject = grp.objectList.length;
            page.dom.popObjectGroupList.append(_common.template.parseObject("tmpl-objectGroup", grp));
        })
        fileData.objectGroupInfo.forEach(function(grp) {

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
    if(fileData.objectList.length > 0) {
        for (let o of fileData.objectList) {
            o.fileIndex = fileIndex;
            page.fn.drawing.renderObject(o);
            if (o.objectType == page.constants.drawType.rectangle && o.location.length > 2) {
                page.fn.drawing.changeRotateOfBBOX(o, 0);
            }
        }
    }
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
        } else {
            log.error("page.fn.drawing.renderObject(), undefined objectType.");
        }
        page.fn.drawing.setPositionOfObjectTagPopup(fileIndex, object);
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

page.fn.drawing.renderRectangle = function (fileIndex, object) {
    // log.info(object, "page.fn.drawing.renderRectangle, fileIndex=" + fileIndex);
    let objectBox = {x: 0, y: 0, width: 0, height: 0};
    try {
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
    } catch (E) {
        log.error(E, "page.fn.drawing.renderRectangle");
        page.fn.data.deleteObject(fileIndex, object.objectId);
    }
    return objectBox;
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
        if (g.length == 0) {
            g = $(document.createElementNS("http://www.w3.org/2000/svg", 'g'));
            g.attr("objectId", object.objectId);
            g.attr("data-objectType", object.objectType);
            svg.append(g);
        }
        let location = object.location;
        let pointsList = [];
        let points = "";
        let minX = 9999999, minY = 9999999, maxX = -1, maxY = -1;
        let index = 0;
        g.children("circle.view-point").remove();
        location.forEach(function (p) {
            points += " " + p[0] + "," + p[1];
            minX = Math.min(minX, p[0]);
            minY = Math.min(minY, p[1]);
            maxX = Math.max(maxX, p[0]);
            maxY = Math.max(maxY, p[1]);

            let x = _common.nvl(p[0], 0), y = _common.nvl(p[1], 0);
            let c = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            c.setAttribute("cx", x);
            c.setAttribute("cy", y);
            c.setAttribute("class", "view-point CLS_" + object.classId);
            //c.setAttribute("objectId", object.objectId);
            c.setAttribute("index", index);
            c.setAttribute("pointNum", index + 1);
            c.setAttribute("objectId", object.objectId);
            //c.setAttribute("id", loc[2]);
            g.append(c);
            if (index == 0) {
                $(c).addClass("point-start");
            } else if (index == object.location.length - 1) {
                $(c).addClass("point-end");
            }
            index++;
        });
        objectBox.x = minX;
        objectBox.y = minY;
        objectBox.width = page.fn.drawing.limitMousePosition(maxX - minX);
        objectBox.height = page.fn.drawing.limitMousePosition(maxY - minY);
        let o = g.children("polyline.object-body");
        if (o.length == 0) {
            let o = $(document.createElementNS("http://www.w3.org/2000/svg", 'polyline'));
            o.attr("class", "draw-object object-body CLASS_" + object.classId)
                .attr("points", points)
                .attr("objectId", object.objectId)
                .attr("data-objectType", object.objectType)
                .attr("data-file-index", fileIndex)
            ;
            g.append(o);
        } else {
            o.attr("points", points);
        }
    } catch (E) {
        log.error(E, "page.fn.renderPolyline");
        page.fn.data.deleteObject(fileIndex, object.objectId);
    }
    return objectBox;
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
                $("svg circle[objectId='" + object.objectId + "'][index='" + idx + "']")
                    .attr("cx", x)
                    .attr("cy", y)
                    .attr("visibility", visibility)
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
        let roiRect = page.fn.renderKeypointRoi(roiXList, roiYList);
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
    if (g.length == 0) {
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
    object.objectData.bbox = objectBox;

    try {
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
        if (g.length == 0) {
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
    let point = page.fn.event.getPointOnFile(fileIndex, event);
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
            if ($(".draw-object[objectId='" + object.objectId + "']").length > 0) {
                if (page.data.userSetting.objectTooltip == "on") {
                    $(".draw-object[objectId='" + object.objectId + "']").attr("title", "[#" + object.objectOrder + ":" + object.className + "]");
                } else {
                    $(".draw-object[objectId='" + object.objectId + "']").attr("title", null);
                }
                let objectPos = page.fn.data.getObjectPosition(fileIndex, object);
                let wrap = $("#wrapObjectTag_" + object.objectId);
                wrap.css("top", objectPos.y).css("left", objectPos.x).css("z-index", object.objectOrder);

                if (wrap.length == 0) {
                    wrap = $(_common.template.parseObject("tmpl-wrapObjectTag", object));
                    $(".wrapImageArea[data-file-index='" + fileIndex + "']").append(wrap);
                    wrap.css("top", objectPos.y).css("left", objectPos.x);
                }
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
                if (object.tagList != null && object.tagList.length > 0) {
                    object.tagList.forEach(function (tag) {
                        if (page.data.userSetting.isViewTags != "false") {
                            if (tag.val != "") {
                                let t = JSON.parse(JSON.stringify(page.fn.data.getConstantsTag(tag.tagId)));
                                t.val = tag.val;
                                t.tagValueName = page.fn.data.getTagValueName(t);
                                t.objectId = tag.objectId;
                                t.objectTagId = tag.objectTagId;
                                t.orderSeq = "#" + object.objectOrder;
                                let cc = page.fn.data.getTagValueColor(t);
                                wrap.append(_common.template.parseObject("tmpl-tag", t));
                                if (cc != null) {
                                    $("#tag_" + tag.objectId + "_" + tag.objectTagId).css("background-color", cc);
                                }
                            }
                        }
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

                if (object.objectType == page.constants.drawType.polyline) {
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
                $(".TAG_group.grp_" + $(o).attr("data-groupid")).show();
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
        page.fn.drawing.highlightGroupObject($(".objectGroupRoot.on").attr("groupid"), fileIndex)
    }
    log.info(Date.now() - start, "finished, page.fn.drawing.resetPopupTag");
}

page.fn.drawing.changeRotateOfBBOX = function (o, rChange) {
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
        if (rChange != 0 && page.data.event.renderObjectData.objectId == o.objectId) {
            page.data.event.renderObjectData.rotation = r;
            page.data.event.renderObjectData.location = o.location;
            page.data.event.renderObjectData.objectLocation = o.objectLocation;
        }
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
                    $(g).append(p);

                    p = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
                    $(p).attr("points", "" + crx + "," + y2 + " " + crx + "," + (y2 + 30));
                    $(p).attr("objectId", object.objectId);
                    $(p).attr("class", "draw-point set-rot");
                    $(p).attr("rot-type", "hidden");
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
        } else if (object.objectType != page.constants.drawType.keypoint) {
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
            if (object.objectType == page.constants.drawType.polyline) {
                isPolyline = true;
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
                        $(g).append(c);
                        $(c).addClass("drawing-points").addClass("draw-point");
                        if (isPolyline && index == 0) {
                            $(c).addClass("point-start");
                        } else if (isPolyline && index == object.location.length - 1) {
                            $(c).addClass("point-end");
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
                    }
                    index++;
                });
            }

            if (object.objectType == page.constants.drawType.rectangle4p
                && object.location.length > 4) {
                page.fn.drawing.changeRotateOfBBOX(object, 0);
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
    }
}
page.fn.drawing.displayBboxSize = function (object, length) {
    let guide = page.constants.drawMin.isUse == "Y" ?
        "(" + page.constants.drawMin.x + "*" + page.constants.drawMin.y + ")" : "";
    let calc = page.fn.drawing.calcRectangleArea(object.location, length);
    $("#objectSizeViewer").html(_common.template.parseMessage(page.message.calcSizeRectangle
        , {x: calc.x.format(), y: calc.y.format(), guide: guide, area: (calc.x * calc.y).format()}));
    $("#objectSizeViewer").show();
}
page.fn.drawing.displayPolygonSize = function (object) {
    let guide = ""
    let calc = page.fn.drawing.calcPolygonArea(object.location);
    $("#objectSizeViewer").text(_common.template.parseMessage(page.message.calcSizePolygon
        , {area: calc.format(), guide: guide}));
    $("#objectSizeViewer").show();
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
        for (let i = 1; i < max; i++) {
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
        let tempCp = { x : cp[0], y : cp[1] };
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
page.fn.drawing.calcRotationPoint = function(mouse, fileIndex, imageAngle) {
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
page.fn.drawing.rotatePopupTag = function(fileIndex, imageAngle, object, wrap) {
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
page.fn.drawing.calcRotationImageSize = function(imageSize, imageAngle) {
    let tempImageSize = _common.copy(imageSize);
    if (imageAngle == 90 || imageAngle == 270) {
        imageSize.width = tempImageSize.height;
        imageSize.height = tempImageSize.width;
    }
    return imageSize;
}
// 회전된 이미지 부모 DOM객체 크기 반환
page.fn.drawing.calcRotationImageWrapSize = function(imageWrap, imageAngle) {
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
page.fn.data.deleteAllObject = function() {
    if (!page.data.loadTicket.isValid) {
        page.fn.alert(page.message.isInvalidEdit);
        return false;
    }
    if(confirm(page.message.confirmAllDeleteObject)) {
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
    if(page.data.drawing.object != null) {
        if(page.data.drawing.object.objectId == objectId) {
            page.data.drawing.object = null;
            page.data.event.selectedObjectId = null;
            page.dom.rootObjectTagList.empty();
        }
    }
    page.fn.drawing.renderAllObject(fileIndex);
    page.fn.drawing.resetObjectOrderSeq(fileIndex);
    page.fn.drawing.setAllRootObjectList(fileIndex);
    page.fn.data.deleteObjectInGroup(fileIndex, objectId);
    page.fn.drawing.resetPopupTag(fileIndex, 'deleteObject');
}
// 그룹 안의 오브젝트 삭제
page.fn.data.deleteObjectInGroup = function (fileIndex, objectId) {
    let grpList = page.data.loadTicket.fileList[fileIndex].objectGroupInfo;
    if (grpList != null) {
        grpList.forEach(function (grp) {
            if (grp.objectList.includes(objectId)) {
                _common.removeOnList(grp.objectList, objectId);
            }
        })
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
                }
            });
        }
        if ($('button[data-groupid="' + groupId + '"]').hasClass("on")) {
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
    page.data.event.currentFile.objectList.forEach(function (object){
        let crossLineCheck = false;
        if (object.objectType == "polyline" || object.objectType == "polygon" || object.objectType == "rect6p") {
            removePolyList.push(object.objectId);
            object.location.forEach(function (loc, ii){
                if (object.location[ii+1]) {
                    let isUpLineCross = page.fn.data.checkLineIntersection(x1, y1, x2, y1, loc[0],loc[1], object.location[ii+1][0], object.location[ii+1][1])
                    let isDownLineCross = page.fn.data.checkLineIntersection(x1, y2, x2, y2, loc[0],loc[1], object.location[ii+1][0], object.location[ii+1][1])
                    let isLeftLineCross = page.fn.data.checkLineIntersection(x1, y1, x1, y2, loc[0],loc[1], object.location[ii+1][0], object.location[ii+1][1])
                    let isRightLineCross = page.fn.data.checkLineIntersection(x2, y1, x2, y2, loc[0],loc[1], object.location[ii+1][0], object.location[ii+1][1])
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
        removePolyList.forEach(function (objectId){
            searchedObjectList.forEach(function (domObject, i){
                if (objectId == $(domObject).attr("objectId")) {
                    searchedObjectList.splice(i, 1)
                }
            });
        });
    }
    let includeList = page.dom.svg.get(0).getEnclosureList(range, null);
    includeList = [...includeList];
    includeList.forEach(function (domObject){
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
    if (_common.isNotEmpty(cpObj.tagList)) {
        for (let i = 0; i < cpObj.tagList.length; i++) {
            let tag = cpObj.tagList[i];
            tag.projectId = cpObj.projectId;
            tag.taskId = cpObj.taskId;
            tag.rawFileId = cpObj.rawFileId;
            tag.objectId = cpObj.objectId;
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
            }
        } else if (object.objectType == page.constants.drawType.polyline) {
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
        }
    }
    return isValid;
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
                page.data.loadTicket.fileList[fileIndex].objectList[objIndex] = _common.copy(object);
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
                    txt += constTag.tagName.replace(/'/gi, '&#39;') + " : ";
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

            if (page.data.userSetting.isViewTags == "half") {
                page.fn.resize.objectToCenter(objectId);
            }
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
    $("svg circle.draw-point").removeClass("draw-point");
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
    if (object.tagList != null) {
        for (let j = 0; j < object.tagList.length; j++) {
            if (tagId == object.tagList[j].tagId) {
                tag = object.tagList[j];
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
    let x = 999999, y = 999999;
    page.fn.data.castLocationToObject(object);
    let max = object.location.length;
    if (object.objectType == page.constants.drawType.rectangle) {
        max = 2;
    } else if (object.objectType == page.constants.drawType.rectangle4p) {
        max = 4;
    }
    for (let i = 0; i < max; i++) {
        let pos = object.location[i];
        x = Math.min(x, pos[0]);
        y = Math.min(y, pos[1]);
    }
    return {x: x * imageSize.scale, y: y * imageSize.scale};
}
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
                    if(object.objectId == page.data.drawing.object.objectId) {
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
                if(object.objectId == page.data.drawing.object.objectId) {
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
}
page.fn.data.convertTicketList = function (list) {
    let r = [];
    let idx = 0;
    for (let i = 0; i < list.length; i++) {
        let d = list[i];
        let t = {};
        t.projectId = d.groupId;
        t.taskId = d.deliveryId;
        t.fileIndex = idx;
        t.workTicketId = d.workTicketId;
        t.annotatorId = d.annotatorId;
        t.content = d.content;
        t.countFail = d.failCount;
        t.countFailWorker = d.countFailWorker;
        t.currentDatetime = d.currentDatetime;
        t.inspDatetime = d.inspDatetime;
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
    o.icon = "lock";
    o.iconTitle = page.message.imageIconTitleInValid;
    o.isValid = false;
    o.isRejected = false;
    o.rejectedCls = "worked";
    o.statusName = page.message.statusNameWorked;

    return o;
}
page.fn.data.convertTicketData = function (ticketId, data, fileIndex) {
    // log.info(data, "page.fn.data.convertTicketData, " + ticketId);
    let t = {};
    t.projectId = data.groupId;
    t.taskId = data.deliveryId;
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
            page.data.paging.pageIndex = page.dom.imageListPageIndex.val();
        } catch (E) {
            log.error(E);
        }
    }
    page.dom.imageListPageIndex.blur();
    log.info("page.data.paging.pageIndex=" + page.data.paging.pageIndex, "page.fn.changeImageListPaging");
    page.fn.data.getImageList(false, false, true);
}
page.fn.data.getImageList = function (param) {
    param.addAssignImage = _common.nvl(param.addAssignImage, false);
    page.dom.ticketList.empty();
    page.data.ticketsMap = new HashMap();

    let data = {};
    data.pageIndex = page.data.paging.pageIndex;
    data.groupId = page.data.task.projectId;
    data.deliveryId = page.data.task.taskId;
    data.addAssignImage = param.addAssignImage;
    data.pageSize = 40;
    data.reqType = page.data.permissionCode;
    data.accessType = page.data.permissionCode;
    let url = "/apis/v1/imageDataView/annotate/list";
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
                        for (let f of o.fileList) {
                            f.serverName = page.data.imageServerName;
                            f.host = page.data.imageServerURL;
                            $(".wrapImage[ticketId='" + o.workTicketId + "']").append(_common.template.parseObject("tmpl-imageListItem-image", f));
                            $(".wrapDescription[ticketId='" + o.workTicketId + "']").append(_common.template.parseObject("tmpl-imageListItem-fileName", f));
                        }
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
                            // NG 시 추가
                            $("#btnShowNgReason_" + o.workTicketId).show();
                            $("#rootImageList > li.passed[data-ticketId='" + o.workTicketId + "'] button.lock").css("color", "#de6a6f");
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
                }
                if (page.data.reqType == page.constants.reqType.review || page.data.reqType == page.constants.reqType.insp) {
                    for(var i = 0; i < r.data.length; i++) {
                        if(page.data.reqType == page.constants.reqType.review) {
                            if(r.data[i].status == page.constants.imageStatus.review_assigned) {
                                firstTicketId = r.data[i].workTicketId;
                                break;
                            }
                        } else if(page.data.reqType == page.constants.reqType.insp) {
                            if(r.data[i].statusInsp == null || r.data[i].statusInsp == "") {
                                firstTicketId = r.data[i].workTicketId;
                                break;
                            }
                        }
                    }
                }
                if (firstTicketId == "") {
                    firstTicketId = r.data[0].workTicketId;
                }
                page.fn.data.changeTicket(firstTicketId, true, true);
            } else {
                if (page.data.reqType == page.constants.reqType.review || page.data.reqType == page.constants.reqType.insp) {
                    $(".drawingImage").prop("src", $(".drawingImage").eq(0).attr("data-errorImage"));
                    alert(_common.template.parseMessage(page.message.noMoreAssignImageReview));
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
    let ticket = page.data.ticketsMap.get(ticketId);
    page.data.loadTicket = ticket;
    page.data.event.currentFileIndex = 0;
    log.info(ticket, "page.fn.data.changeTicket");
    for (var i = 0; i < Object.keys(page.data.ticketsMap.map).length; i++) {
        if (Object.keys(page.data.ticketsMap.map)[i] == ticketId) {
            page.constants.lastTicketId = ticketId;
            page.constants.lastTicketIndex = i;
            break;
        }
    }
    $("#rootImageList li").removeClass("on");
    $("svg.drawingSVG").empty();
    if (_common.isEmpty(ticket.selectedObjectIdMap)) {
        page.data.loadTicket.selectedObjectIdMap = new HashMap();
    }
    page.data.historyData = new HashMap();
    page.data.historyDrawData = new HashMap();
    page.data.historyDrawDataObject = new HashMap();
    page.data.reviewFailDetailData = new HashMap();
    page.fn.data.checkPermission();
    page.data.event.method = page.constants.method.moveImage;
    page.fn.event.animImageListFocus(ticketId);
    if (_common.isNotEmpty(ticket)) {
        $("li[data-ticketId='" + ticketId + "']").addClass("on");
        for (let i = 0; i < ticket.fileList.length; i++) {
            let fileUrl = page.constants.imageServerURL;
            fileUrl += ticket.fileList[i].path;
            fileUrl += "/";
            fileUrl += ticket.fileList[i].fileName;
            $(".drawingImage[data-file-index='" + i + "']")
                .prop("src", fileUrl)
                .attr("file-path", fileUrl)
            ;
        }
        $("#showUploadFile").hide();
        if(ticket.workType != page.constants.workType.annotator) {
            $("#multiReviewFileName").empty();
            $("#multiImageReviewSelect").empty();
            ticket.fileList.forEach(function(file, idx) {
                file.idx = idx == 0 ? "M": idx;
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
        }

    } else {
        page.fn.alert("This ticket is wrong, ticketId=" + ticketId);
    }
}
page.fn.data.checkPermission = function() {
    // worker
    if(page.data.permissionCode == page.constants.workType.annotator) {
        page.dom.btnImageGiveup.show();
        page.dom.btnImageTempSave.show();
        page.dom.btnImageComplete.show();
    // reviewer
    } else if(page.data.permissionCode == page.constants.workType.reviewer) {
        // review ing
        $("#popReviewFailReason").val("");
        if(page.data.loadTicket.status == page.constants.imageStatus.review_assigned) {
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
    // inspector
    } else if(page.data.permissionCode == page.constants.workType.inspector) {
        $("#popReview_ngArea").hide();
        $("#btnPopReviewNGConfirm").hide();
        $("#popReview_btnInspOK").hide();
        $("#popReview_btnInspNG").hide();
        $(".reject-choice").hide(); // 사유 선택 select bar
        $("#ngReason").val("");
        $(".inspectionErrorForReviewNg").prop("checked", false);
        if(page.data.loadTicket.statusInsp == "OK") {
            $("#btnPopReviewNGConfirm").hide();
        } else if(page.data.loadTicket.statusInsp == "NG") {
            // NG 버튼 누를 때
            let inspectErrList = page.data.loadTicket.inspErrList.split(",");
            inspectErrList.forEach(function(errCode) {
                $("#inspErr_" + errCode).prop("checked", true);
            })
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

    // master
    } else if(page.data.permissionCode == page.constants.workType.master) {
        // page.dom.btnImageGiveup.hide();
        // page.dom.btnImageTempSave.hide();
        // page.dom.btnImageComplete.hide();
    }

    // reject object / tag
    if(page.data.loadTicket.statusReview == page.constants.imageStatus.fail) {
        try {
            if(typeof(page.data.loadTicket.detailData) == "string") {
                page.data.loadTicket.detailData = JSON.parse(page.data.loadTicket.detailData);
            }
            if(page.data.loadTicket.detailData != null) {
                if(page.data.loadTicket.detailData.length > 0) {
                    page.data.loadTicket.detailData.forEach(function(d) {
                        page.data.reviewFailDetailData.put(d.rawFileId, d);
                    })
                }
            }
        } catch (err) {
            log.info(err);
        }
    }
    if(!page.data.loadTicket.isValid) {
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
    if(page.data.loadTicket.fileList != null) {
        if(page.data.loadTicket.fileList[fileIndex].workType != page.constants.workType.annotator) {
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
        o.color = page.fn.data.getConstantsClass(o.classId).color;
        o.fileIndex = fileIndex;
        page.fn.drawing.setRootObjectList(fileIndex, o);
    }
    page.fn.drawing.renderImageTag(fileIndex);
    page.fn.drawing.renderObjectGroup(fileIndex);
    page.fn.drawing.refreshEdgePointList(fileIndex);
    log.info(page.data.loadTicket.fileList[fileIndex], "page.fn.data.renderObjectData, page.data.loadTicket.fileList[fileIndex]");
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
            grp.index = grp.index != null ? grp.index: grpList.length > 0 ? grpList.length + 1 : 1;
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
        if(object != null) {
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
    page.data.objectKeypointId = keypointId;
    $("#popKeyPointLayer").hide();
    page.data.keypointHotkeyAvailable = false;
    if(keypointId == page.data.magicKeypointId) {
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
    if ($('button[data-groupid="' + groupId + '"]').hasClass("on")) {
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
                    } else if(_common.isEmpty(j.segmentation) ||j.segmentation == null) {
                        page.fn.data.excuteFailOfMagicBox("None", "Magic Key");
                    } else {
                        page.fn.data.deleteObject(fileIndex, page.data.drawing.object.objectId);
                        if (j.segmentation.length > 0) {
                            for (let i=0; j.segmentation.length> i; i++) {
                                let object = _common.copy(page.fn.data.appendNewDrawMagicKeyObject(fileIndex));
                                let points =[];
                                let idx= 0;
                                j.segmentation[i].forEach(function (o) {
                                    const magicKeyStructure = page.data.task.keypointMap.get(page.data.magicKeypointId);
                                    if (magicKeyStructure != null && magicKeyStructure.position.length >7) {
                                        if (magicKeyStructure.position[idx][7] =='off') {
                                            idx++;
                                            points.push([-999, -999, idx, 2, 10]);
                                        }
                                        else {
                                            idx ++;
                                            if (o[2]<=0) {
                                                if (page.constants.magicKey.topRight.includes(idx-1)) {
                                                    points.push([o[0]+x2, o[1]+y1, idx, 2, 10]);
                                                } else if (page.constants.magicKey.bottomLeft.includes(idx-1)) {
                                                    points.push([o[0]+x1, o[1]+y2, idx, 2, 10]);
                                                } else if (page.constants.magicKey.bottomRight.includes(idx-1)) {
                                                    points.push([o[0]+x2, o[1]+y2, idx, 2, 10]);
                                                } else {
                                                    points.push([o[0]+x1, o[1]+y1, idx, 2, 10]);
                                                }
                                            } else {
                                                points.push([o[0]+x1, o[1]+y1, idx, 2, 10]);
                                            }
                                        }
                                    }
                                });
                                if(points.length > 0) {
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
                                object.classId = o.classId;
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
                                object.classId = o.classId;
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
                                    page.fn.drawing.endNewDrawing("MagicAI");
                                    page.fn.data.onSelectObject(object.fileIndex, object.objectId);
                                });
                            });
                        }
                    }
                } else {
                    page.fn.alert(page.message.notFoundObject);
                }
            } catch(E) {
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
page.fn.data.checkRejectData = function(target) {
    let t = $(target);
    let dataType = t.attr("data-type");
    let rawFileId = t.attr("data-rawFileId");
    let objectId = t.attr("data-objectId");
    let tagId = t.attr("data-tagId");
    let rawFileData = page.data.reviewFailDetailData.get(rawFileId);
    if(t.is(":checked")) {
        if(rawFileData == null) {
            let detailData = {
                rawFileId: rawFileId
                , objectList: []
                , tagList: []
            }
            page.data.reviewFailDetailData.put(rawFileId, detailData);
            rawFileData = page.data.reviewFailDetailData.get(rawFileId);
        }
        if(dataType == "object") {
            if(!rawFileData.objectList.includes(objectId)) {
                rawFileData.objectList.push(objectId)
            }
        } else {
            if(!Object.keys(rawFileData.tagList).includes(tagId)) {
                let tagData = {
                    objectId: objectId
                    , tagId: tagId
                }
                rawFileData.tagList.push(tagData)
            }
        }
    } else {
        if(rawFileData != null) {
            if(dataType == "object") {
                for(let idx = 0; idx < rawFileData.objectList.length; idx++) {
                    if (objectId == rawFileData.objectList[idx]) {
                        rawFileData.objectList.splice(idx, 1)
                        break;
                    }
                }
            } else {
                for(let idx = 0; idx < rawFileData.tagList.length; idx++) {
                    if (tagId == rawFileData.tagList[idx].tagId) {
                        rawFileData.tagList.splice(idx, 1)
                        break;
                    }
                }
            }
            if(rawFileData.objectList.length == 0 && rawFileData.tagList.length == 0) {
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

page.fn.popup = {};
page.fn.popup.togglePopupObjectGroup = function () {
    if (page.dom.popObjectGroup.is(":visible")) {
        if ($('button[data-button-type="grpUpdate"].on').length > 0) {
            page.fn.drawing.endNewDrawing();
        }
        page.dom.popObjectGroup.fadeOut();
        $("#btnTogglePopupObjectGroup").removeClass("on");
        if ($('button[data-groupid].on').length > 0) {
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
        if ($('button[data-groupid].on').length > 0) {
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
    // if (page.data.loadTicket.isValid) {
    //     page.fn.alert(page.message.isInvalidEdit);
    //     return false;
    // }
    if (objectId == "ALL" && $("#rootObjectList .colorIcon.checked").length == 0) {
        page.fn.alert(page.message.copyNoSelected);
        return false;
    }
    log.debug(target, "page.fn.popup.togglePopupClass");
    page.dom.changeClassModalContents.css("top", page.dom.pannelTitleOfOBJECT.offset().top - 80);
    $("#changeClassModal .modal-content .classList").css("max-height", $(window).height() - page.dom.rootObjectList.offset().top - 50);
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
            page.fn.data.resetKeypointId();
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
    page.data.loadTicket.fileList.forEach(function(file, idx) {
        file.idx = idx == 0 ? "M": idx;
        $("#rejectSelectedImageTagBody").append(_common.template.parseObject("tmpl-popAlert_rejectImageTagBody", file));
        $("#rejectSelectedObjectBody").append(_common.template.parseObject("tmpl-popAlert_rejectObjectTagBody", file));
    })

    if(reviewFailData != null) {
        if(typeof(reviewFailData) == "string") {
            reviewFailData = JSON.parse(page.data.loadTicket.detailData);
        }
    }
    if(reviewFailData == {}) {
        reviewFailData = []
    }
    reviewFailData.forEach(function(fd) {
        for(var i = 0; i < page.data.loadTicket.fileList.length; i++) {
            if(page.data.loadTicket.fileList[i].rawFileId == fd.rawFileId) {
                fd.fileIndex = page.data.loadTicket.fileList[i].fileIndex;
                break;
            }
        }
        fd.objectList.forEach(function(objectId) {
            let object = _common.copy(page.fn.data.getObject(fd.fileIndex, objectId));
            $("#rejectSelectedObjectTagList_" + fd.rawFileId).append(_common.template.parseObject("tmpl-popAlert_rejectObject", object))
        })

        fd.tagList.forEach(function(tagInfo) {
            if(tagInfo.objectId == "null" || tagInfo.objectId == '') {
                let tag = _common.copy(page.fn.data.getImageTag(tagInfo.tagId, fd.fileIndex));
                $("#rejectSelectedImageTagList_" + fd.rawFileId).append(_common.template.parseObject("tmpl-popAlert_rejectImageTag", tag));
            } else {
                let object = _common.copy(page.fn.data.getObject(fd.fileIndex, tagInfo.objectId));
                let tag = _common.copy(page.fn.data.getObjectTag(tagInfo.tagId, tagInfo.objectId, fd.fileIndex));
                tag.objectOrder = object.objectOrder;
                tag.objectClassName = object.className;
                $("#rejectSelectedObjectTagList_" + fd.rawFileId).append(_common.template.parseObject("tmpl-popAlert_rejectObjectTag", tag))
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
        subTitle = [ page.message.subTitleReject_2 ];
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
page.fn.popup.showRejectReason = function (workTicketId) {
    if(workTicketId != page.data.loadTicket.workTicketId) {
        page.fn.alert("load target ticket first");
        return false;
    }
    if(page.constants.refreshFailData) {
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
page.fn.popup.hideRejectReason = function() {
    $("#alertModalBtnConfirm").prop("checked", null);
    page.dom.popRejectAlertModal.fadeOut(page.constants.animateTime);
}
page.fn.popup.showNgReason = function (workTicketId) {
    if(workTicketId != page.data.loadTicket.workTicketId) {
        page.fn.alert("load target ticket first");
        return false;
    }
    if(page.constants.refreshFailData) {
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
page.fn.layout.rotateImage = function(fileIndex) {
    page.fn.data.changeFileIndex(fileIndex);
    let imageAngle = page.fn.layout.getImageRotationAngle(fileIndex);
    let rotateAngle = 90;
    let nextAngle = Number(imageAngle) + rotateAngle;
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
page.fn.layout.getImageRotationAngle = function(fileIndex) {
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
page.fn.saveTemp = function (nextFunction) {
    if (page.data.permissionCode != page.constants.workType.demo) {
        if (!page.data.loadTicket.isCanSave) {
            page.fn.alert(page.message.errorAuth);
            return false;
        }
        let loadTicketData = _common.copy(page.data.loadTicket);
        loadTicketData.fileList.forEach(function(file) {
            file.objectGroupInfo = JSON.stringify(file.objectGroupInfo);
            if(file.objectList.length > 0) {
                file.objectList.forEach(function(object) {
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
                })
            }
        })
        let paramSave = JSON.stringify({
            projectId: page.data.task.projectId
            , taskId: page.data.task.taskId
            , workTicketId: page.data.loadTicket.workTicketId
            , fileList: loadTicketData.fileList
            , reqType: page.param.reqType
            , accessType: page.param.reqType
        });
        let url = "/apis/v1/workspace/annotate/save";
        if(page.data.permissionCode == page.constants.workType.reviewer) {
            url = "/apis/v1/workspace/review/save"
        } else if(page.data.permissionCode == page.constants.workType.inspector) {
            url = "/apis/v1/workspace/inspect/save"
        } else if(page.data.permissionCode == page.constants.workType.master) {
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
                        if (typeof (nextFunction) == "function") {
                            nextFunction();
                        } else {
                            page.fn.alert(page.message.resultSaveTempSuccess);
                            page.fn.data.changeTicket(page.data.loadTicket.workTicketId);
                        }
                    } else {
                        if (typeof (nextFunction) == "function") {
                            page.fn.alert(page.message.resultSaveTempSuccess);
                            alert(r.message);
                        } else {
                            page.fn.alert(page.message.resultSaveTempSuccess);
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
                    , reqType : page.param.reqType
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
        if (attachFile.length >0) {
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
    multipart.append('detailData', JSON.stringify(page.data.reviewFailDetailData.getAllDataToList()));

    _common.ajax.asyncMultipart2({
        url: "/apis/v1/workspace/review/fail"
        , data : multipart
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
page.fn.reviewProcOK = function () {
    let message = _common.template.parseMessage(page.message.haveNoSaveData, {
        doSomething: page.message.doSomethingChangeImage
    });
    if (page.data.historyData.getAllDataToList().length > 0 && !confirm(message)) {
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

page.gateway = function (command, message, isChanged) {
    isChanged = isChanged == false ? false : true;
    let isDrawing = page.data.event.isDrawingEdgePoint ? false : page.data.event.isDrawing;
    if (isDrawing) {
        if (command == page.constants.gateway.command.add) {
            message = "[" + moment().format('YYYY-MM-DD HH:mm:ss') + "] " + message;
            let key = page.data.historyDrawData.createKey();
            page.data.historyDrawData.put(key, _common.copy(page.data.loadTicket.fileList));
            page.dom.txtHistoryMsg.clearQueue().stop().show().attr("key", key).text(message).fadeOut(page.constants.animateTime / 2).fadeIn(page.constants.animateTime / 2);
            page.dom.txtHistoryMsg.removeClass("removed");
            page.data.historyDrawDataObject.put(key, _common.copy(page.data.drawing.object));
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