<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@taglib prefix="aistudio" uri="/WEB-INF/taglibs/aistudio.tld" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@taglib uri="/WEB-INF/taglibs/aistudio.tld" prefix="aistudio" %>
<%--<aistudio:setPageEnveriment />--%>
<c:set var="nowD" value="<%=new java.util.Date()%>" />
<c:set var="now"><fmt:formatDate value="${nowD}" pattern="yyyyMMddHHmmss" /></c:set>
<c:set var="isReviewer" value="false"/>
<c:set var="isCO" value="false"/>
<c:choose>
    <c:when test="${param.reqType eq 'reviewer'}">
        <c:set var="reqType" value="reviewer" />
        <c:set var="isReviewer" value="true"/>
    </c:when>
    <c:when test="${param.reqType eq 'inspector'}">
        <c:set var="reqType" value="inspector" />
    </c:when>
    <c:when test="${param.reqType eq 'manager'}">
        <c:set var="reqType" value="manager" />
    </c:when>
    <c:when test="${param.reqType eq 'master'}">
        <c:set var="reqType" value="master" />
    </c:when>
    <c:when test="${param.reqType eq 'co'}">
        <c:set var="reqType" value="co" />
        <c:set var="isCO" value="true" />
    </c:when>
</c:choose>
<html><head>
    <title>Image Data Viewer Tool</title>
    <meta charset="utf-8">
    <meta http-equiv="Cache-control" content="no-cache">
    <meta name="_csrf" content="${_csrf.token}"/>
    <meta name="_csrf_header" content="${_csrf.headerName}"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="google" content="notranslate">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="AI Studio Suite,#MYCROWD,#AISTUDIO,#AI,#Deepleaning,#Annotation,#AnnotationTool,#Annotation Tool,#Image Annotation,#DataAnnotation">

    <!-- css -->
    <link rel="stylesheet" type="text/css" href="../css/tool/material-icons.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Outlined|Material+Icons+Round|Material+Icons+Sharp">
    <link rel="stylesheet" type="text/css" href="../css/tool/lidar2/jquery-ui.min.css"/>
    <link rel="stylesheet" type="text/css" href="../css/tool/lidar2/style.css"/>
    <link rel="stylesheet" href="../lib/jquery/jquery-ui-1.12.1.min.css">
    <link rel="stylesheet" href="../css/tool/reviewImage.css">
    <link rel="stylesheet" href="../css/tool/imageToolConfig.css">
    <link rel="stylesheet" type="text/css" href="../css/tool/guide-editor.css">
    <link href="../lib/jquery/jquery.minicolors.css" rel="stylesheet">
    <style id="style_circle_color">
        svg circle.polyline-point {
            stroke: #fcf63c;
        }
    </style>
    <style id="style_circle_color_start">
        svg circle.polyline-point.point-start {
            stroke: #fc3c3c;
        }
    </style>
    <style id="style_circle_color_end">
        svg circle.polyline-point.point-end {
            stroke: #364fff;
        }
    </style>
    <style id="style_classes"></style>
    <style id="style_keypoint_dash">
        polyline.dash {stroke-dasharray: 1 2%;}
    </style>
    <!-- js -->

    <script src="../lib/jquery/jquery-3.5.1.min.js"></script>
    <script src="../lib/jquery/jquery-ui-1.12.1.min.js"></script>
    <script src="../js/tool/moment.min.js"></script>
    <script src="../js/tool/log.js"></script>
    <script src="../js/tool/common.js"></script>
    <script src="../js/tool/chatting.js?p=${now}"></script>
    <script src="../js/tool/image/reviewImage.js"></script>
    <script src="../js/tool/pre_loader_image_review.js"></script>
    <script src="../js/tool/image/custom_tags.js"></script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-174572993-1"></script>
    <script src="../lib/storage/localforage.min.js"></script>
    <script src="../lib/jquery/jquery.minicolors.min.js"></script>
    <script src="../js/tool/clipboard.min.js"></script>

    <!-- icons -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-174572993-1');
    </script>

    <script>
        page.constants.defaultImageStatus
            = "${ param.reqType == null || param.reqType == 'reviewer' ? 'filter_status_rvassign' : 'filter_status_all' }";

        page.constants.srcErrorImage = '../images/tool/annImage/empty.png';
        page.data.param = {};
        page.data.param.token = "${token}";
        page.data.param.projectId = "${param.projectId}";
        page.data.param.taskId = "${param.taskId}";
        page.data.param.workTicketId = "${param.workTicketId}";
        page.data.param.reqType = "${param.reqType}";
        page.param = page.data.param;

        page.message.dropdown = {};
        page.message.dropdown.allSelect     ="<spring:message code="option.tool.image.review.dropdown.allSelect" />";
        page.message.dropdown.allDeSelect   ="<spring:message code="option.tool.image.review.dropdown.allDeSelect" />";
        page.message.dropdown.allSelected   ="<spring:message code="option.tool.image.review.dropdown.allSelected" />";
        page.message.dropdown.allDeSelected ="<spring:message code="option.tool.image.review.dropdown.allDeSelected" />";
        page.message.dropdown.selected      ="<spring:message code="option.tool.image.review.dropdown.selected" />";
        page.message.dropdown.validationAlert = "<spring:message code="alert.tool.image.review.vcExecuting" />";

        page.message.taskWorkRuleType = new HashMap();
        page.message.taskWorkRuleType.put("11", "<spring:message code="label.tool.image.review.vaildationMissingObjectCheck" />");
        page.message.taskWorkRuleType.put("21", "<spring:message code="label.tool.image.review.vaildationRequiredClassCheck" />");
        page.message.taskWorkRuleType.put("31", "<spring:message code="label.tool.image.review.vaildationCheckRequiredTagOBJ" />");
        page.message.taskWorkRuleType.put("41", "<spring:message code="label.tool.image.review.vaildationCheckRequiredTagOMG" />");
        page.message.taskWorkRuleType.put("51", "<spring:message code="label.tool.image.review.vaildationTagValueDuplicateCheck" />");
        page.message.taskWorkRuleType.put("61", "<spring:message code="label.tool.image.review.vaildationExcludingTagAttributeValues" />");
        page.message.taskWorkRuleType.put("71", "<spring:message code="label.tool.image.review.validationLimitTagValues" />");
        page.message.taskWorkRuleType.put("81", "<spring:message code="label.tool.image.review.forRuleType_81" />");
        page.message.taskWorkRuleType.put("91", "<spring:message code="label.tool.image.review.forRuleType_91" />");

        page.message.status = {};
        page.message.status.open            ="<spring:message code="label.tool.status.open" />";
        page.message.status.assigned        ="<spring:message code="label.tool.status.assigned" />";
        page.message.status.worked          ="<spring:message code="label.tool.status.worked" />";
        page.message.status.rvAssigned      ="<spring:message code="label.tool.status.rvAssigned" />";
        page.message.status.reviewedPass    ="<spring:message code="label.tool.status.reviewedPass" />";
        page.message.status.reviewedFail    ="<spring:message code="label.tool.status.reviewedFail" />";
        page.message.status.inspOK          ="<spring:message code="label.tool.status.inspOK" />";
        page.message.status.inspNG          ="<spring:message code="label.tool.status.inspNG" />";

        page.message.button = {};
        page.message.button.selectAll       = "<spring:message code="button.tool.image.review.selectAll" />";
        page.message.button.deSelectAll     = "<spring:message code="button.tool.image.review.deSelectAll" />";

        page.message.alert = {};
        page.message.alert.notExistsRvAssigned  = "<spring:message code="alert.tool.image.review.notExistsRvAssigned" />";
        page.message.alert.requiredFailReason   = "<spring:message code="alert.tool.image.review.requiredFailReason" />";
        page.message.alert.notSelectedImage     = "<spring:message code="alert.tool.image.review.notSelectedImage" />";
        page.message.alert.noHavePermission     = "<spring:message code="alert.tool.image.review.noHavePermission" />";
        page.message.alert.failOfImagePass      = "<spring:message code="alert.tool.image.review.failOfImagePass" />";
        page.message.alert.failOfImageFail      = "<spring:message code="alert.tool.image.review.failOfImageFail" />";
        page.message.alert.noMoreRvassigned     = "<spring:message code="alert.tool.image.review.noMoreRvassigned" />";
        page.message.alert.noMoreInspectionAssigned     = "<spring:message code="alert.tool.image.inspect.noMoreRvassigned" />";
        page.message.alert.fullRvAssignImage    = "<spring:message code="alert.tool.image.review.fullNewAssign" />";
        page.message.alert.fullIPAssignImage    = "<spring:message code="alert.tool.image.inspect.fullNewAssign" />";
        page.message.alert.failOfImageOK        = "<spring:message code="alert.tool.image.review.failOfImageOK" />";
        page.message.alert.failOfImageNG        = "<spring:message code="alert.tool.image.review.failOfImageNG" />";
        page.message.alert.failOfAllPass        = "<spring:message code="alert.tool.image.review.failOfAllPass" />";
        page.message.alert.failOfAllOK          = "<spring:message code="alert.tool.image.review.failOfAllOK" />";
        page.message.alert.inspNoSelectedCode   = "<spring:message code="alert.tool.image.review.inspNoSelectedCode" />";
        page.message.confirmNg                  = "<spring:message code="alert.tool.image.review.confirmNG" />";
        page.message.confirm = {};
        page.message.confirm.allPass            = "<spring:message code="confirm.tool.image.review.allPass" />";
        page.message.confirm.allOK              = "<spring:message code="confirm.tool.image.review.allOK" />";
        page.message.confirm.ng                 = "<spring:message code="confirm.tool.image.review.ng" />";
        page.message.letter                     = "<spring:message code="label.validator.letter" />";
        page.message.numbering                  = "<spring:message code="label.validator.number" />";
        page.message.specialCharacter           = "<spring:message code="label.validator.special" />";

        page.message.noClassData ="<spring:message code="label.tool.image.review.vaildationNoClassData" />";
        page.message.noObjData ="<spring:message code="label.tool.image.review.vaildationNoObjectData" />";
        page.message.noImgData ="<spring:message code="label.tool.image.review.vaildationNoImageData" />";
        page.message.noValue ="<spring:message code="label.tool.image.review.vaildationNoValue" />";

        page.message.validation = {};
        page.message.validation.useIt = "<spring:message code="label.tool.image.review.vaildationUseIt" />";
        page.message.validation.notUseIt = "<spring:message code="label.tool.image.review.vaildationNotUseIt" />";
        page.message.validation.vcExecuting = "<spring:message code="alert.tool.image.review.vcExecuting" />";
        page.message.noSelectFailImg = "<spring:message code="label.tool.image.review.noseleteFile" />";
        page.message.alert.failImgFile = "<spring:message code="alert.tool.image.review.failImgFile" />";
        page.message.copyClip = "<spring:message code="message.tool.image.ann.copyClip" />";
        page.message.copyFileClip = "<spring:message code="button.tool.image.ann.copyFileInfoToClipboard" />";


        page.message.guide = {};
        page.message.guide.limit = {};
        page.message.guide.limit.unlimit = "<spring:message code="label.tool.guide.workLimit.unlimit" />";
        page.message.guide.limit.limit = " <spring:message code="label.tool.guide.workLimit.unit" />";
        page.message.hotkeyObjectClass = "<spring:message code="message.tool.image.ann.hotkeyObjectClass" />";

        page.message.history = {};
        page.message.history.workHistory = "<spring:message code="label.tool.history.workHistory"/>";
        page.message.history.reviewHistory = "<spring:message code="label.tool.history.reviewHistory"/>";
        page.message.history.worker = "<spring:message code="label.tool.historyType.worker"/>";
        page.message.history.reviewer = "<spring:message code="label.tool.historyType.reviewer"/>";
        page.message.history.worked = "<spring:message code="label.tool.history.worked"/>";
        page.message.history.pass = "<spring:message code="label.tool.history.pass"/>";
        page.message.history.fail = "<spring:message code="label.tool.history.fail"/>";
        page.message.history.status = "<spring:message code="label.tool.history.workStatus"/>";
        page.message.history.reviewStatus = "<spring:message code="label.tool.history.reviewStatus"/>";
        page.message.history.none =  '<spring:message code="label.tool.history.none"/>'
        page.hotkey = [
            {
                keyCode : "112" //F1
                , keyName : "F1"
                , excuteFunction : function() {
                    page.fn.toggleGuide();
                }, type : page.constants.hotkeyType.defaultKey
                , description: '<spring:message code="button.tool.image.ann.viewGuide" />'
                , isVisible : true
                , isCheckPermission : false
                , isCanInput : false
            }, {
                keyCode : "113" //F2
                , keyName : "F2"
                , excuteFunction : function() {
                    page.fn.toggleViewTag();
                }, type : page.constants.hotkeyType.defaultKey
                , description: '<spring:message code="button.tool.tagHint" />'
                , isVisible : true
                , isCheckPermission : false
                , isCanInput : false
            }, {
                keyCode : "114" //F3
                , keyName : "F3"
                , excuteFunction : function() {
                    page.fn.gotoDetailView();
                }, type : page.constants.hotkeyType.defaultKey
                , description: '<spring:message code="button.tool.image.review.moveToDetailReview" />'
                , isVisible : true
                , isCheckPermission : false
                , isCanInput : false
            }, {
                keyCode : "115" //F4
                , keyName : "F4"
                , excuteFunction : function() {
                    page.fn.gotoDetailViewNew();
                }, type : page.constants.hotkeyType.defaultKey
                , description: '<spring:message code="button.tool.image.review.moveToDetailReview" />'
                , isVisible : true
                , isCheckPermission : false
                , isCanInput : false
            }, {
                keyCode : "116" //F4
                , keyName : "F5"
                , excuteFunction : function() {
                    page.fn.refreshPage();
                }, type : page.constants.hotkeyType.defaultKey
                , description: ''
                , isVisible : false
                , isCheckPermission : false
                , isCanInput : false
            }, {
                keyCode : "117" //F6
                , keyName : "F6"
                , excuteFunction : function() {
                    page.fn.toggleAllObjectView();
                }, type : page.constants.hotkeyType.defaultKey
                , description: '<spring:message code="button.tool.image.review.toggleAllObjectView" />'
                , isVisible : true
                , isCheckPermission : false
                , isCanInput : false
            }, {
                keyCode : "118" //F6
                , keyName : "F7"
                , excuteFunction : function() {
                    page.fn.toggleClassFilterPopup();
                }, type : page.constants.hotkeyType.defaultKey
                , description: '<spring:message code="button.tool.image.review.toggleClassFilterPopup" />'
                , isVisible : true
                , isCheckPermission : false
                , isCanInput : false
            }, {
                keyCode: "120"
                , keyName : "F9"
                , excuteFunction : function () {
                    page.fn.toggleFunctionZoomer();
                }, type : page.constants.hotkeyType.defaultKey
                , description: '<spring:message code="label.tool.image.review.hotkey.zoomer" />'
                , isVisible : true
                , isCheckPermission : false
                , isCanInput : false
            }, {
                keyCode : "123" //F12
                , keyName : "F12"
                , excuteFunction : function() {
                    page.fn.togglePopup('.modal-configure');
                }, type : page.constants.hotkeyType.defaultKey
                , description: '<spring:message code="button.tool.configHint" />'
                , isVisible : true
                , isCheckPermission : false
                , isCanInput : false
            }, {
                keyCode: "37" //
                , keyName : "ARROWLEFT"
                , excuteFunction : function () {
                    page.fn.changeImageFile('up');
                }, type : page.constants.hotkeyType.defaultKey
                , description: '<spring:message code="label.tool.image.review.hotkey.arrowLeft" />'
                , isVisible : true
                , isCheckPermission : false
                , isCanInput : false
            }, {
                keyCode: "39" //
                , keyName : "ARROWRIGHT"
                , excuteFunction : function () {
                    page.fn.changeImageFile('down');
                }, type : page.constants.hotkeyType.defaultKey
                , description: '<spring:message code="label.tool.image.review.hotkey.arrowRight" />'
                , isVisible : true
                , isCheckPermission : false
                , isCanInput : false
            }, {
                keyCode: "38"
                , keyName : "ARROWUP"
                , excuteFunction : function () {
                    page.fn.applyOpacityStep('up');
                }, type : page.constants.hotkeyType.defaultKey
                , description: '<spring:message code="label.tool.image.review.hotkey.arrowUp" />'
                , isVisible : true
                , isCheckPermission : false
                , isCanInput : false
            }, {
                keyCode: "40"
                , keyName : "ARROWDOWN"
                , excuteFunction : function () {
                    page.fn.applyOpacityStep('down');
                }, type : page.constants.hotkeyType.defaultKey
                , description: '<spring:message code="label.tool.image.review.hotkey.arrowDown" />'
                , isVisible : true
                , isCheckPermission : false
                , isCanInput : false
            }, {
                keyCode: "120"
                , keyName : "="
                , excuteFunction : function () {
                    page.fn.resizeZoomer("up");
                }, type : page.constants.hotkeyType.defaultKey
                , description: '<spring:message code="label.tool.image.review.hotkey.zoomerBigger" />'
                , isVisible : true
                , isCheckPermission : false
                , isCanInput : false
            }, {
                keyCode: "120"
                , keyName : "-"
                , excuteFunction : function () {
                    page.fn.resizeZoomer("down");
                }, type : page.constants.hotkeyType.defaultKey
                , description: '<spring:message code="label.tool.image.review.hotkey.zoomerSmaller" />'
                , isVisible : true
                , isCheckPermission : false
                , isCanInput : false
            }
        ];

        const api_host = "${apisUrl}";
        const edgeImageServerUrl = "${edgeImageServerUrl}";

        <%--$(document).ready(function(){--%>
        <%--    page.constants.env = "${activeProfile}";--%>
        <%--    page.data.task.keypointVoList = [];--%>
        <%--    page.data.task.keypointMap = new HashMap();--%>

        <%--    _pre_loader();--%>
        <%--});--%>

        $(document.body).ready(function() {
            _common.ajax.token_front = page.param.token;
            _common.ajax.api_host = "${frontApiUrl}";
            let param = {
                url : "/task/get"
                , param : {
                    "projectId"     : page.param.projectId
                    , "taskId"  : page.param.taskId
                    , "reqType"     : page.param.reqType
                }, returnFunction : function(rev){
                    if(rev && rev.result) {
                        _pre_loader_2d_data(rev.data);
                        _pre_loader_hotkey();
                        page.fn.init();
                        page.fn.hideLoading();
                    }
                }
            };
            _common.ajax.asyncJSON2(param);
        });

        /**
         * pre loader of project and task data
         * @param data
         * @private
         */
        const _pre_loader_2d_data = function(data) {
            console.log('DATA PRE LOADER', data);
            try {
                page.constants.isCO = _common.nvl(data.isCO, false);
                page.constants.taskTalkYn = _common.nvl(data.taskTalkYn, "N");
                page.constants.bboxRotateYn = _common.nvl(data.bboxRotateYn, "N");
                page.constants.serverCoApiAddQna = _common.nvl(data.serverCoApiAddQna, "");
                page.constants.co = {
                    coProjectKey: _common.nvl(data.coProjectKey, "")
                    , coTaskKey: _common.nvl(data.coTaskKey, "")
                    , coUserId: _common.nvl(data.coUserId, "")
                    , coProjectName: _common.nvl(data.coProjectName, "")
                    , coTaskName: _common.nvl(data.coTaskName, "")
                };
                page.constants.drawMin = {
                    x: _common.nvl(data.minPixelX, -1)
                    , y: _common.nvl(data.minPixelY, -1)
                    , isUse: _common.nvl(data.minPixelSet, "N")
                };
                page.constants.reviewSystemHost = _common.nvl(data.reviewSystemHost, "N");
                page.constants.userLocation = _common.nvl(data.userLocation, "kr");
                page.constants.currentLocale = _common.nvl(data.country, "kr");
                page.constants.isReviewer = _common.nvl(data.isReviewer, true);
                page.constants.imageServer = [];
                for (let i = 0; i < data.imageServers.length; i++) {
                    let imgServerUrl = data.imageServers[i].url;
                    let imgServerName = data.imageServers[i].name;
                    page.constants.imageServer.push({
                        name: imgServerName
                        , url: imgServerUrl
                        , title: imgServerName
                    });
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

                page.constants.serverChattingApi = _common.nvl(data.serverChattingApi, "");
                page.constants.authToken = _common.nvl(data.authToken, "");
                page.constants.serverChattingStorageUrl = [];
                for (let chatStorageURL in data.serverChattingStorageUrl) {
                    page.constants.serverChattingStorageUrl.push(chatStorageURL);
                }
                page.constants.serverChattingStorageHost = [];
                for (let chatStorageHost in data.serverChattingStorageHost) {
                    page.constants.serverChattingStorageHost.push(chatStorageHost);
                }

                page.data.task.projectId = _common.nvl(data.projectId, "");
                page.data.task.projectName = _common.nvl(data.projectName, "");
                document.getElementById("txt_projectName").innerText = page.data.task.projectName;
                page.data.task.taskId = _common.nvl(data.taskId, "");
                page.data.task.taskName = _common.nvl(data.taskName, "");
                document.getElementById("txt_taskName").innerText = page.data.task.taskName;
                $("#txt_prjTskTooltip").text(page.data.task.projectName + " > " + page.data.task.taskName);
                $("#btnCopyTaskCode").attr("data-clipboard-text", "["+data.taskCode+"] " + page.data.task.projectName + " > " + page.data.task.taskName);

                page.data.task.defaultClassNumber = _common.nvl(data.defTaskClassId, "");
                page.data.task.rejectYN = _common.nvl(data.reworkYn, "");
                page.data.task.taskType = _common.nvl(data.taskType, "");

                page.data.task.taskDesc = _common.nvl(data.taskDesc, "");
                page.data.task.reworkYn = _common.nvl(data.reworkYn, "N");
                $("#taskInfoReworkDesc").html($("#tmpl-taskInfo-rework-"+page.data.task.reworkYn).html());

                page.data.task.limitWorkCnt = _common.nvl(data.limitWorkCnt, 0);
                if(page.data.task.limitWorkCnt == 0) {
                    $("#txtLimitWorkCnt").text(page.message.guide.limit.unlimit);
                } else {
                    $("#txtLimitWorkCnt").text(page.data.task.limitWorkCnt + page.message.guide.limit.limit);
                }
                page.data.task.attachedFileSrc = data.uploadLinkUrl + data.attachFilePath;
                page.data.task.attachedFileName = data.attachedFileName;
                //$("#viewTaskGuideContents").html(page.data.task.taskDesc);
                $("#popGuide_downloadFotter button").attr("onclick", "chat.fn.download('"+page.data.task.attachedFileSrc+"', '"+page.data.task.attachedFileName+"');");
                page.data.task.isExistsGuide = false;

                if(_common.isNotEmpty(page.data.task.taskDesc) || _common.isNotEmpty(page.data.task.attachedFileName)) {
                    page.data.task.isExistsGuide = true;
                    if(_common.isNotEmpty(data.attachedFileName)) {
                        $("#txtDesOrgnFileName").text(page.data.task.attachedFileName);
                        $("#popGuide_downloadFotter button").attr("onclick", "chat.fn.download('"+page.data.task.attachedFileSrc+"', '"+page.data.task.attachedFileName+"');");
                        $("#viewTaskGuideContents").append(_common.template.parseObject("tmpl-taskDesFile", {"src" : page.data.task.attachedFileSrc}));
                    } else {
                        $("#viewTaskGuideContents").html(page.data.task.taskDesc);
                    }
                }

                page.data.task.workPoint = _common.nvl(data.workPoint, "");
                page.data.task.reviewPoint = _common.nvl(data.reviewPoint, "");
                if(page.param.reqType == "review") {
                    $("#txtRewardPoint").text(page.data.task.reviewPoint);
                } else {
                    $("#txtRewardPoint").text(page.data.task.workPoint);
                }

                page.data.permissionCode = _common.nvl(data.permissionCode, "");
                page.data.permissionName = _common.nvl(data.permissionName, "");
                document.getElementById("txt_permissionName").innerText = "[" + page.data.permissionName + "]";
                page.data.reqType = _common.nvl(data.reqType, "");

                page.param.projectId = _common.nvl(data.projectId, "");
                page.param.taskId = _common.nvl(data.taskId, "");

                page.constants.env = _common.nvl(data.activeProfile, "local");

                try {
                    page.data.task.taskWorkRuleType = _common.nvl(data.taskWorkRuleType, []);
                } catch (E) {
                    page.data.task.taskWorkRuleType = [];
                }

                if(_common.isNotEmpty(page.data.task.taskWorkRuleType)) {
                    for(let r of page.data.task.taskWorkRuleType) {
                        let rule = {
                            workRuleType    : r
                            , ruleName  : page.message.taskWorkRuleType.get(r+"")
                        };
                        $("#forValidationCheckList").append(_common.template.parseObject("tmpl-taskWorkRuleType", rule));
                    }
                }

                page.data.task.keypointVoList = [];
                page.data.task.keypointMap = new HashMap();
                page.data.magicKeypointNumber = null;
                //keypoints

                // Khởi tạo keypoint template giả
                const dummyKeypointId = "dummyKeypointId";

                // 1. Tạo keypointVoList nếu chưa có
                if (!page.data.task.keypointVoList) {
                    page.data.task.keypointVoList = [];
                }

                // 2. Tạo keypointMap nếu chưa có
                if (!page.data.task.keypointMap) {
                    page.data.task.keypointMap = new HashMap();
                }

                // 3. Tạo KeypointVo giả
                let dummyKeypointVo = {
                    keypointId: dummyKeypointId,
                    keypointName: "DummyKeypoint",
                    pointLength: 8,
                    position: [],
                    relationship: [],
                    radiusYn: "N",
                    roi: [],
                    posMap: null,
                    defaultRadius: 10,
                    magicYn: "N"
                };

                // 4. Gán position giả (8 điểm, id từ 1 -> 8)
                for (let i = 1; i <= 8; i++) {
                    dummyKeypointVo.position.push([
                        0, 0, // x, y mặc định là (0, 0)
                        i,   // index: 1..8
                        2,   // visibility: default = 2
                        "p" + i, // name: p1, p2, ...
                        (i-1).toString(), // order: "0", "1", ...
                        "#ff0000" // color: đỏ cho dễ nhìn
                    ]);
                }

                // 5. Gán relationship giả (nối điểm liên tiếp 1-2, 2-3,...)
                for (let i = 1; i < 8; i++) {
                    dummyKeypointVo.relationship.push([
                        i.toString(),
                        (i+1).toString(),
                        i // relationship id
                    ]);
                }

                // 6. Add vào hệ thống
                page.data.task.keypointVoList.push(dummyKeypointVo);
                page.data.task.keypointMap.put(dummyKeypointId, dummyKeypointVo);

                // 7. Gán dummyKeypointId làm objectKeypointNumber để đảm bảo vẽ đúng
                page.data.objectKeypointNumber = dummyKeypointId;
                console.log("✅ Dummy KeypointVo created successfully");
                <%--for (let i = 0; i < data.keypointVoList.length; i++) {--%>
                <%--    let kp = data.keypointVoList[i];--%>
                <%--    log.info(kp, "keypoint");--%>
                <%--    try {--%>
                <%--        let roi = kp.roi;--%>
                <%--        if(_common.isNotEmpty(roi)) {--%>
                <%--            roi = JSON.parse(roi);--%>
                <%--        }--%>
                <%--        page.data.task.keypointVoList.push({--%>
                <%--            keypointId: kp.keypointId--%>
                <%--            , keypointName: kp.keypointName--%>
                <%--            , pointLength: kp.pointsLength--%>
                <%--            , position: JSON.parse(kp.pointsPosition)--%>
                <%--            , relationship: JSON.parse(kp.relationship)--%>
                <%--            , radiusYn: kp.radiusYn--%>
                <%--            , roi: roi--%>
                <%--            , posMap: null--%>
                <%--            , defaultRadius: 10--%>
                <%--            , magicYn: kp.magicYn--%>
                <%--        });--%>
                <%--        page.data.task.keypointMap.put(kp.keypointId, {--%>
                <%--            keypointId: kp.keypointId--%>
                <%--            , keypointName: kp.keypointName--%>
                <%--            , pointLength: kp.pointsLength--%>
                <%--            , position: JSON.parse(kp.pointsPosition)--%>
                <%--            , relationship: JSON.parse(kp.relationship)--%>
                <%--            , radiusYn: kp.radiusYn--%>
                <%--            , roi: roi--%>
                <%--            , posMap: null--%>
                <%--            , defaultRadius: 10--%>
                <%--            , magicYn: kp.magicYn--%>
                <%--        });--%>
                <%--        if (kp.magicYn == "Y") {--%>
                <%--            page.data.magicKeypointNumber = '${kp.keypointId}';--%>
                <%--        }--%>
                <%--    } catch(E) {--%>
                <%--        log.error(E, "_pre_loader_data, convert of keypointVoList");--%>
                <%--        log.error(kp, "_pre_loader_data, convert of keypointVoList");--%>
                <%--    }--%>
                <%--}--%>
                page.data.task.tool = [];
                page.data.useMagicAI = "N";
                if(data.drawingToolList != null) {
                    for (let i = 0; i < data.drawingToolList.length; i++) {
                        let tool = data.drawingToolList[i];
                        page.data.task.tool.push(tool);
                        if (tool == "MagicAI") {
                            page.data.useMagicAI = "Y";
                        }
                    }
                }
                page.data.task.classes = [];
                page.data.rejectReason = [];
                page.data.task.classMap = new HashMap();
                page.data.classVoList = [];
                let styleClasses = "";
                for (let i = 0; i < data.classVoList.length; i++) {
                    let cls = data.classVoList[i];
                    $("#rootToggleClasses").append(_common.template.parseObject("tmpl-toggleClass", cls));
                    page.hotkey.push({
                        keyCode : cls.hotkey
                        , keyName : cls.hkName
                        , excuteFunction : function() {
                            $("#chkToggleClass_"+cls.classId).click();
                        }, description : _common.template.parseMessage(page.message.hotkeyObjectClass, {className: cls.className})
                        , isVisible: true
                        , type: page.constants.hotkeyType.classesForObject
                        , isCheckPermission: false
                    });

                    page.data.classVoList.push({
                        classId: cls.classId
                        , className: cls.className
                        , hotkey: cls.hk
                        , hotkeyName: cls.hkName
                        , color: cls.color
                    });
                    page.data.task.classMap.put(cls.classId, {
                        classId: cls.classId
                        , className: cls.className
                        , hotkey: cls.hk
                        , hotkeyName: cls.hkName
                        , color: cls.color
                    });

                    styleClasses += _common.template.parseObject("tmpl-pre-class", cls);
                    $("#parentSearchClassList").append(_common.template.parseObject("tmpl-search-classVoList", cls))
                }

                $("#style_classes").html(styleClasses);
                page.data.task.tags = [];
                let styleTags = "";
                const tmpl_style_tag = ".TAG_#tagId# { background-color: #color# }"
                if(data.tagVoList != null) {
                    for (let i = 0; i < data.tagVoList.length; i++) {
                        let tag = data.tagVoList[i];
                        let tagData = {
                            tagId: tag.tagId
                            , name: tag.tagName
                            , hotkey: tag.hk
                            , hotkeyName: tag.hkName
                            , color: tag.color
                            , tagTypeCd: tag.tagTypeCd
                            , tagValTypeCd: tag.tagValTypeCd
                            , tagSelectValueVoList: []
                            , matchClasses: tag.matchClass
                            , valueFilterNumber: tag.numbering
                            , valueFilterLetter: tag.letter
                            , valueFilterSpecial: tag.specialCharacter
                            , lengthNumber: tag.numberingLength
                            , lengthLetter: tag.letterLength
                            , lengthSpecial: tag.specialCharacterLength
                        };
                        if (tag.tagSelectValueVoList != null) {
                            for (let i = 0; i < tag.tagSelectValueVoList.length; i++) {
                                let tv = tag.tagSelectValueVoList[i];
                                tagData.tagSelectValueVoList.push({
                                    name: tv.selectName
                                    , value: tv.selectVal
                                    , color: tv.color
                                    , tagValueIdx: i + 1
                                });
                            }
                        }
                        styleTags += _common.template.parseMessage(tmpl_style_tag, tag);
                        $("#style_tags").html(styleTags);
                        page.data.task.tags.push(tagData);
                    }
                }
                if (data.inspectionErrorList != null) {
                    //page.data.inspNGReason = data.inspectionErrorList;
                    $("#rootErrorCodeList").append(_common.template.parseList("tmpl-inspection-error", data.inspectionErrorList));
                    $("#popRootErrorCodeList").append(_common.template.parseList("tmpl-inspection-error-popup", data.inspectionErrorList));
                }
                page.data.authToken = _common.nvl(data.authToken, "");
                $("#authToken").val(page.data.authToken);

                if("compReviewer/reviewer/manager/master".includes(page.data.permissionCode)) {
                    $("#reviewInfo_reviewerId").show();
                    $("#reviewInfo_reviewerDate").show();
                    $("#btnTogglePopupReview").show();
                }
                if("manager/master".includes(page.data.permissionCode)) {
                    $("#reviewInfo_inspector").show();
                    $("#reviewInfo_inspectedDatetime").show();
                }
                if("manager" != page.data.permissionCode) {
                    $("#popReview_btnInspOK").remove();
                    $("#popReview_btnInspNG").remove();
                }
                if("co" != page.data.permissionCode) {
                    $("#wrapTaskInfo").show();
                    $("#btnToggleCoQna").remove();
                } else {
                    //TODO co 테스크 정보 표현 추가필요
                    $("#wrapTaskInfo_co").show();
                    $("#btnTogglePopupGuide").hide();
                }
                if(page.constants.taskTalkYn == "N" || 'compReviewer/manager/master/demo'.includes(page.data.permissionCode)) {
                    $("#btnTogglePopupChat").hide();
                }
                if("compWorker" != page.data.permissionCode && page.data.task.taskType != "private") {
                    $("#btnImageGiveup").show();
                }
                if("demo" == page.data.permissionCode) {
                    $("#btnImageCompleteDemo").show();
                    $("#btnReviewAssign").hide();
                    $("#btnImageTempSave").hide();
                    $("#btnImageComplete").hide();
                }
                if("co" == page.data.permissionCode) {
                    $("#wrapWorkButtons").hide();
                }
            } catch (E) {
                log.error(E, "_pre_loader_data()");
            }
        }
    </script>

    <script type="text/html" id="tmpl-pre-class">
        svg g.CLASS_#classId# circle
        , svg circle.CLASS_#classId#
        , svg polygon.CLASS_#classId#
        , svg rect.CLASS_#classId# {
        fill: #color#;
        stroke: #color#;
        }
        svg polyline.CLASS_#classId# {
        stroke: #color#;
        }
        ul.BLANK_CLS_#classId# polygon.CLS_#classId# {
        display: none;
        }
        ul.BLANK_CLS_#classId# polyline.CLS_#classId# {
        display: none;
        }
        ul.BLANK_CLS_#classId# rect.CLS_#classId# {
        display: none;
        }
        #root.HIDE_#classId# polygon.CLASS_#classId#
        , #root.HIDE_#classId# polyline.CLASS_#classId#
        , #root.HIDE_#classId# circle.CLASS_#classId#
        , #root.HIDE_#classId# rect.CLASS_#classId# {
        display: none;
        }
        .classColor.CLASS_#classId# {
        background-color: #color#;
        }
    </script>

    <script type="text/html" id="tmpl-vcModal-workRuleType_11">
        <li><spring:message code="label.tool.image.review.vaildationUseIt" /></li>
    </script>
    <script type="text/html" id="tmpl-vcModal-workRuleType_21">
        <li data-value="#classId#"> #className# </li>
    </script>
    <script type="text/html" id="tmpl-vcModal-workRuleType_31">
        <li data-value="#classId#_#tagId#"> #tagClassName# </li>
    </script>
    <script type="text/html" id="tmpl-vcModal-workRuleType_41">
        <li data-value="#tagId#"> #name# </li>
    </script>
    <script type="text/html" id="tmpl-vcModal-workRuleType_51">
        <li data-value="#classId#_#tagId#"> #tagClassName# </li>
    </script>
    <script type="text/html" id="tmpl-vcModal-workRuleType_61">
        <li data-value="#classId#"> #tagClassName#(#typeList#) </li>
    </script>
    <script type="text/html" id="tmpl-vcModal-workRuleType_71">
        <li data-value="#classId#"> #tagClassName#(#tagValType#) </li>
    </script>
    <script type="text/html" id="tmpl-vcModal-workRuleType_81">
        <li data-value="#classId#"><spring:message code="label.tool.image.review.vaildationUseIt" /></li>
    </script>
    <script type="text/html" id="tmpl-vcModal-workRuleType_91">
        <li><spring:message code="label.tool.image.review.vaildationUseIt" /></li>
    </script>
    <script type="text/html" id="tmpl-choiceRejectMsg">
        <li value="#rejectReason#" onclick='page.fn.selectRejectReason(this);'>
            <span class='choiceRejectMsg'>#rejectReason#</span>
            <button onclick='page.fn.removeRejectReason(this);'></button>
        </li>
    </script>
    <script type="text/html" id="tmpl-choiceinspNGMsg">
        <li value="#inspNGReason#" onclick='page.fn.selectRejectReason(this);'>
            <span class='choiceinspNGMsg'>#inspNGReason#</span>
            <button onclick='page.fn.removeinspNGReason(this);'></button>
        </li>
    </script>
    <script type="text/html" id="tmpl-labelInspOK">
        <div class="data-option" data-option="1"><spring:message code="label.tool.insp.ok" /></div>
    </script>
    <script type="text/html" id="tmpl-labelInspNG">
        <div class="data-option" data-option="2"><spring:message code="label.tool.insp.ng" /></div>
    </script>

    <script type="text/html" id="tmpl-btnServers">
        <button class="btnFlag"
                style="background-image: url('../images/tool/flags32/#name#.png');"
                title="#title#"
                id="btnServer_#name#"
                onclick="page.fn.changeServer('#name#');"
        ></button>
    </script>
    <script type="text/html" id="tmpl-paging-option">
        <option value="#pageNum#" #selected#>#pageNum#</option>
    </script>

    <script type="html/template" id="tmpl-image-open">
        <li class="status_review_open">
            <div class="data-box" onclick="page.fn.viewDetailInfo('#workTicketId#');" data-workTicketId="#workTicketId#">
                <div class="check-area">
                </div>
                <div class="img-area">
                    <img
                src="#"
                onerror="page.fn.onErrorImageLoad(this);"
                data-src="/api/images?filePath=#path#/#fileName#"
                class="lazy"
                id="img_#workTicketId#"
                data-workTicketId="#workTicketId#"
<%--                data-api-url="/api/images?filePath=#path#/#fileName#"--%>
<%--                onload="loadImageFromApi(this)"--%>
<%--                data-loaded="false"--%>
            />
            <svg id="svg_#workTicketId#"></svg>
                </div>
            </div>
        </li>
    </script>


    <script type="html/template" id="tmpl-hightlightImage">
        <div class="icoViewed"><i class="material-icons">visibility</i></div>
    </script>
    <script type="html/template" id="tmpl-rejectImage-object">
        <li><input type="checkbox"
                   name="rejectObject"
                   id="rejectObject_#objectId#"
                   value="#objectId#"
                   onchange="page.fn.animObject('#workTicketId#', '#objectId#');"
        ><label for="rejectObject_#objectId#"
                class="curPoint">##objectOrder# #className#</label></li>
    </script>

    <script type="html/template" id="tmpl-rejectImage-tag">
        <li><input type="checkbox"
                   name="rejectTag"
                   objectId="#objectId#"
                   tagId="#tagId#"
                   onchange="page.fn.animObject('#workTicketId#', '#objectId#');"
                   id="rejectObject_#objectId#_#tagId#"><label for="rejectObject_#objectId#_#tagId#"
                                                               class="curPoint">└ <span style="color:#color#;">#tagName#</span> : <span
                style="#tagValueStyle#">#tagValueName#</span></label></li>
    </script>
    <script type="html/template" id="tmpl-search-classVoList">
        <div class="dropdown-option">
            <input type="checkbox"
                   id="searchClass_#classId#"
                   name="searchClass"
                   value="#classId#">
            <label for="searchClass_#classId#" class="curPoint">#className#</label>
        </div>
    </script>
    <script type="html/template" id="tmpl-taskInfo-rework-Y">
        <spring:message code="label.tool.guide.reject.caseY.title" />
        <div class="tooltip2 top left">
            <span class="btn-info th">정보</span>
            <div class="tooltip-con">
                <p><spring:message code="label.tool.guide.reject.caseY.hint" /></p>
            </div>
        </div>
    </script>
    <script type="text/html" id="tmpl-taskDesFile">
        <p></p>
        <img id="popGuide_image"
             src="#src#"
             onerror="page.fn.onErrorLoadGuideImage();"
             onload="page.fn.showDownloadGuideFile();"
        />
    </script>
    <script type="html/template" id="tmpl-taskInfo-rework-N">
        <spring:message code="label.tool.guide.reject.caseN.title" />
        <div class="tooltip2 top left">
            <span class="btn-info th">정보</span>
            <div class="tooltip-con">
                <p><spring:message code="label.tool.guide.reject.caseN.hint" /></p>
            </div>
        </div>
    </script>
    <script type="html/template" id="tmpl-taskInfo-rework-T">
        <spring:message code="label.tool.guide.reject.caseT.title" />
    </script>
    <script>
        $( function() {
            $( document ).tooltip();
        });
    </script>
    <script type="html/template" id="tmpl-inspection-error">
        <li><input type="checkbox"
                   id="inspErr_#prjInspErNum#"
                   class="curPoint"
                   value="#prjInspErNum#"
        ><label for="inspErr_#prjInspErNum#"
                class="curPoint"
        >#inspErMsg#</label></li>
    </script>
    <script type="html/template" id="tmpl-inspection-error-popup">
        <li style="height: 27px;background: #6d6d6d;">
            <input type="checkbox"
                   id="inspErrChk_#prjInspErNum#"
                   class="curPoint"
                   value="#prjInspErNum#"
            ><label for="inspErrChk_#prjInspErNum#"
                    class="curPoint"
        >#inspErMsg#</label></li>
    </script>
    <script type="text/html" id="tmpl-hotkey-wrap">
        <li>
            <div class="hotkey"></div>
            <div class="description">#description#</div>
        </li>
    </script>
    <script type="text/html" id="tmpl-hotkey-icon-plus">
        <span class="plus">+</span>
    </script>
    <script type="text/html" id="tmpl-fileInfo-fileCopy">
        <button class="material-icons"
                id="copyFileBtn"
                title="<spring:message code="button.tool.image.ann.copyFileInfoToClipboard" />"
                style="font-size: 18px;"
                data-clipboard-text="#originalFileName#"
                data-clipboard-action="copy"
        >library_books</button>
    </script>
    <script type="text/html" id="tmpl-historyList">
        <tr>
            <td>#userId#</td>
            <td class="#historyCSS#">#historyData#<br><p style="max-width: 97px;white-space: nowrap;overflow: hidden;" class="setTooltip" title="#workedIdTooltip#">#workedId#</p></td>
            <td>#registerDate#<br>#registerTime#</td>
        </tr>
    </script>
    <script type="text/html" id="tmpl-historyNone">
        <span><spring:message code="label.tool.history.none"/></span>
    </script>
</head>
<body>
<div class="header-area">
    <div>
        <div class="header-left">
            <h1 title="provide by AISTUDIO">AISTUDIO</h1>
            <div class="title-area">
                <h2>
                    <button class="material-icons"
                            title="<spring:message code="button.tool.image.ann.copyTaskInfoToClipboard" />"
                            style="font-size: 12px;"
                            data-clipboard-text=""
                            data-clipboard-action="copy"
                            id="btnCopyTaskCode"
                    >library_books</button>
                    <span id="txt_permissionName"></span>
                    <span id="txt_projectName"></span>
                    >
                    <span id="txt_taskName"></span>
                </h2>
                <div class="title-tooltip" id="txt_prjTskTooltip"></div>
            </div>
        </div>
        <div class="header-right">
            <h3 class="a11y-hidden"><spring:message code="label.tool.image.review.configArea" /></h3>

            <c:if test="${param.reqType != 'co'}">
                <button type="button"
                        class="material-icons materialBtns help btn-m-guide btn-invalid-co"
                        id="btnTogglePopupGuide"
                        hotkey="F1"
                        title="<spring:message code="button.tool.image.ann.viewGuide" />"
                        onclick="page.fn.toggleGuide();">help</button>
            </c:if>
            <button type="button"
                    class="btn-m-tag"
                    onclick="page.fn.toggleViewTag();"
                    id="btnToggleTag"
                    hotkey="F2"
                    title="<spring:message code="button.tool.tagHint" />"
            ><spring:message code="button.tool.tag" /></button><!-- 활성화 on-->
            <button type="button"
                    class="btn-m-reviewDetail"
                    onclick="page.fn.gotoDetailView();"
                    hotkey="F3"
                    title="<spring:message code="button.tool.image.review.moveToDetailReview" />"
            ><spring:message code="button.tool.image.review.moveToDetailReview" /></button><!-- 활성화 on-->
            <button type="button"
                    class="material-icons btn-m"
                    onclick="page.fn.gotoDetailViewNew();"
                    hotkey="F4"
                    title="<spring:message code="button.tool.image.review.moveToDetailReviewPopup" />"
            >open_in_new</button>
            <button type="button"
                    class="material-icons btn-m"
                    onclick="page.fn.toggleAllObjectView();"
                    hotkey="F6"
                    title="<spring:message code="button.tool.image.review.toggleAllObjectView" />"
                    id="btnToggleAllObjectView"
            >visibility</button>
            <button type="button"
                    class="material-icons btn-m"
                    onclick="page.fn.toggleClassFilterPopup();"
                    hotkey="F7"
                    title="<spring:message code="button.tool.image.review.toggleClassFilterPopup" />"
                    id="btnToggleClassFilterPopup"
            >add_task</button>
            <button type="button"
                    class="material-icons btn-m"
                    hotkey="F9"
                    title="<spring:message code="label.tool.image.review.button.zoomer" />"
                    onclick="page.fn.toggleFunctionZoomer();"
                    id="btnToggleZoomer"
            >pageview</button>
            <button class="material-icons materialBtns"
                    title="<spring:message code="button.tool.image.ann.toggleViewHotkeyGuide" />"
                    onclick="page.fn.togglePopupOfHotkey();"
                    id="btnTogglePopupHotkey"
            >keyboard</button>

            <c:if test="${param.reqType != 'co'}">
                <button type="button"
                        class="btn-m-vc setTooltip btn-invalid-co"
                        title="<spring:message code="title.tool.image.review.viewVCList" />"
                        onclick="page.fn.toggleVcModal();"
                >VC</button>
            </c:if>
            <button type="button"
                    class="material-icons materialBtns"
                    id="btnDownloadFilelist"
                    title="<spring:message code="button.tool.download_file_list_hint" />"
                    onclick="page.fn.downloadImageFileList();">file_download</button>
            <button type="button"
                    class="btn-m-option"
                    id="btnToggleConfigure"
                    hotkey="F12"
                    onclick="page.fn.togglePopup('.modal-configure');"
                    title="<spring:message code="button.tool.configHint" />"
            ><spring:message code="button.tool.config" /></button><!-- 활성화 on-->
        </div>
    </div>
</div>

<div class="search-area">
    <h3 class="a11y-hidden"><spring:message code="label.tool.image.review.searchArea" /></h3>
    <div>
        <div class="search-left">
<%--            <div>--%>
<%--                <c:if test="${ !isCO }">--%>
<%--                    <div>--%>
<%--                        <div class="btn-m-searchOpen searchOpen curPoint"><spring:message code="button.tool.image.review.searchOpen" /></div>--%>
<%--                    </div>--%>
<%--                </c:if>--%>
<%--                <c:if test="${ !isCO }">--%>
<%--                    <div class="form-item setTooltip">--%>
<%--                        <label for="searchStatus" title="<spring:message code="title.tool.image.review.search.imageStatus" />"><spring:message code="label.tool.image.review.search.imageStatus" /></label>--%>
<%--                        <div class="select-style">--%>
<%--                            <select id="searchStatus"--%>
<%--                                    class="curPoint"--%>
<%--                            >--%>
<%--                                <c:if test="${reqType == 'reviewer' }">--%>
<%--                                    <option class="rang" value="filter_status_all_reviewer"--%>
<%--                                            title="<spring:message code="option.tool.image.review.search.imageStatus.all.hint" />"--%>
<%--                                    ><spring:message code="option.tool.image.review.search.all" /></option>--%>
<%--                                </c:if>--%>
<%--                                <c:if test="${reqType != 'reviewer' }">--%>
<%--                                    <option class="rang" value="filter_status_all" <c:if test="${reqType == 'master'}">selected</c:if>--%>
<%--                                            title="<spring:message code="option.tool.image.review.search.imageStatus.all.hint" />"--%>
<%--                                    ><spring:message code="option.tool.image.review.search.all" /></option>--%>
<%--                                    <c:if test="${reqType == 'master'}">--%>
<%--                                        <option value="filter_status_open"--%>
<%--                                                title="<spring:message code="option.tool.image.review.search.imageStatus.workOpen.hint" />"--%>
<%--                                        ><spring:message code="option.tool.image.review.search.imageStatus.workOpen" /></option>--%>
<%--                                        <option value="filter_status_assign"--%>
<%--                                                title="<spring:message code="option.tool.image.review.search.imageStatus.workAssign.hint" />"--%>
<%--                                        ><spring:message code="option.tool.image.review.search.imageStatus.workAssign" /></option>--%>
<%--                                        <option value="filter_status_worked"--%>
<%--                                                title="<spring:message code="option.tool.image.review.search.imageStatus.worked.hint" />"--%>
<%--                                        ><spring:message code="option.tool.image.review.search.imageStatus.worked" /></option>--%>
<%--                                    </c:if>--%>
<%--                                </c:if>--%>
<%--                                <c:if test="${reqType == 'master' || reqType == 'reviewer'}">--%>
<%--                                    <option value="filter_status_rvassign" <c:if test="${reqType == 'reviewer'}">selected</c:if>--%>
<%--                                            title="<spring:message code="option.tool.image.review.search.imageStatus.reviewAssign.hint" />"--%>
<%--                                    ><spring:message code="option.tool.image.review.search.imageStatus.reviewAssign" /></option>--%>
<%--                                </c:if>--%>
<%--                                <option value="filter_status_pass"  <c:if test="${reqType == 'inspector'}">selected</c:if>--%>
<%--                                        title="<spring:message code="option.tool.image.review.search.imageStatus.reviewPass.hint" />"--%>
<%--                                ><spring:message code="option.tool.image.review.search.imageStatus.reviewPass" /></option>--%>
<%--                                <c:if test="${reqType == 'master' || reqType == 'reviewer'}">--%>
<%--                                    <option value="filter_status_fail"--%>
<%--                                            title="<spring:message code="option.tool.image.review.search.imageStatus.reviewFail.hint" />"--%>
<%--                                    ><spring:message code="option.tool.image.review.search.imageStatus.reviewFail" /></option>--%>
<%--                                </c:if>--%>
<%--                                <option value="filter_status_insp"--%>
<%--                                        title="<spring:message code="option.tool.image.review.search.imageStatus.inspComplete.hint" />"--%>
<%--                                ><spring:message code="option.tool.image.review.search.imageStatus.inspComplete" /></option>--%>
<%--                                <option value="filter_status_insp_ok"--%>
<%--                                        title="<spring:message code="option.tool.image.review.search.imageStatus.inspCompleteOk.hint" />"--%>
<%--                                ><spring:message code="option.tool.image.review.search.imageStatus.inspCompleteOk" /></option>--%>
<%--                                <option value="filter_status_insp_ng"--%>
<%--                                        title="<spring:message code="option.tool.image.review.search.imageStatus.inspCompleteNg.hint" />"--%>
<%--                                ><spring:message code="option.tool.image.review.search.imageStatus.inspCompleteNg" /></option>--%>
<%--                                <option value="filter_status_master_comment"--%>
<%--                                        title="Master Comment"--%>
<%--                                ><spring:message code="Master Comment" /></option>--%>
<%--                            </select>--%>
<%--                        </div>--%>
<%--                    </div>--%>
<%--                </c:if>--%>
<%--                <div class="form-item">--%>
<%--                    <label title="<spring:message code="title.tool.image.review.search.classes" />"><spring:message code="label.tool.image.review.search.classes" /></label>--%>
<%--                    <div class="dropdown" data-control="checkbox-dropdown">--%>
<%--                        <div class="dropdown-label"><spring:message code="button.tool.image.review.dropdown.select" /></div>--%>
<%--                        <div class="dropdown-list" id="parentSearchClassList">--%>
<%--                            <a href="#" data-toggle="check-all" class="dropdown-option">--%>
<%--                            </a>--%>
<%--                        </div>--%>
<%--                    </div>--%>
<%--                </div>--%>
<%--                <div class="form-item">--%>
<%--                    <label title="<spring:message code="title.tool.image.review.search.objectCount" />"><spring:message code="label.tool.image.review.search.objectCount" /></label>--%>
<%--                    <div class="select-style">--%>
<%--                        <select id="searchObjectCount">--%>
<%--                            <option value=""><spring:message code="option.tool.image.review.search.all" /></option>--%>
<%--                            <option value="0">0</option>--%>
<%--                            <option value="1">1</option>--%>
<%--                            <option value="2">2</option>--%>
<%--                            <option value="3">3</option>--%>
<%--                            <option value="4">4</option>--%>
<%--                            <option value="5">5</option>--%>
<%--                            <option value="6">6</option>--%>
<%--                            <option value="7">7</option>--%>
<%--                            <option value="8">8</option>--%>
<%--                            <option value="9">9</option>--%>
<%--                            <option value="10"><spring:message code="option.tool.image.review.search.objectCountOver10" /></option>--%>
<%--                        </select>--%>
<%--                    </div>--%>
<%--                </div>--%>
<%--                <div class="form-item">--%>
<%--                    <label title="<spring:message code="title.tool.image.review.search.sort" />" style="min-width:73px;"><spring:message code="label.tool.image.review.search.sort" /></label>--%>
<%--                    <div class="select-style">--%>
<%--                        <select id="searchSort">--%>
<%--                            <option value="orgnFileName"><spring:message code="option.tool.image.review.search.sort.fileName" /></option>--%>
<%--                            <option value="workerId"><spring:message code="option.tool.image.review.search.sort.workerId" /></option>--%>
<%--                            <option value="workedDatetimeAsc"><spring:message code="option.tool.image.review.search.sort.workedDatetimeAsc" /></option>--%>
<%--                            <option value="workedDatetime"><spring:message code="option.tool.image.review.search.sort.workedDatetime" /></option>--%>
<%--                            <option value="reviewedDatetime"><spring:message code="option.tool.image.review.search.sort.reviewedDatetime" /></option>--%>
<%--                            <c:if test="${reqType == 'master' || reqType == 'inspector'}">--%>
<%--                                <option value="inspDatetime"><spring:message code="option.tool.image.review.search.sort.inspDatetime" /></option>--%>
<%--                            </c:if>--%>
<%--                        </select>--%>
<%--                    </div>--%>
<%--                </div>--%>
<%--                &lt;%&ndash;<c:if test="${reqType == 'manager'}">&ndash;%&gt;--%>
<%--                &lt;%&ndash;                <div class="form-item">&ndash;%&gt;--%>
<%--                &lt;%&ndash;                    <input type="checkbox" id="box-check">&ndash;%&gt;--%>
<%--                &lt;%&ndash;                    <label for="box-check"><div><spring:message code="label.tool.image.review.search.objectCheck" /></div></label>&ndash;%&gt;--%>
<%--                &lt;%&ndash;                </div>&ndash;%&gt;--%>
<%--                &lt;%&ndash;</c:if>&ndash;%&gt;--%>
<%--                <c:if test="${reqType == 'master' or reqType == 'co'}">--%>
<%--                    <div class="form-item multi-search-area">--%>
<%--                        <label for="searchFileName" style="width: auto;"><spring:message code="label.tool.image.review.search.fileName" /></label>--%>
<%--                        <div class="multi-search">--%>
<%--                            <c:choose>--%>
<%--                                <c:when test="${fileName != '' && fileName != null}">--%>
<%--                                    <textarea id="searchFileName" rows="1"><c:out value="${fileName}"/></textarea>--%>
<%--                                </c:when>--%>
<%--                                <c:otherwise>--%>
<%--                                    <textarea id="searchFileName" rows="1"></textarea>--%>
<%--                                </c:otherwise>--%>
<%--                            </c:choose>--%>
<%--                        </div>--%>
<%--                        <button type="button"--%>
<%--                                title="<spring:message code="placeholder.tool.image.review.search.fileNames" />"--%>
<%--                                class="setTooltip"></button>--%>
<%--                    </div>--%>
<%--                </c:if>--%>
<%--            </div>--%>
            <div class="search-option searcItems" style="display: none;">

                <div class="form-item">
                    <label title="">
                        <spring:message code="label.tool.image.review.reviewSystem" />
                    </label>
                    <div class="select-style">
                        <select id="inspectionSysType" onchange="page.fn.toggleValidationOption();">
                            <option value=""><spring:message code="label.tool.image.review.search.selection" /></option>
                            <option value="filterObjectCheck"><spring:message code="label.tool.image.review.search.objectCheck" /></option>
                            <option value="filterValidation"><spring:message code="label.tool.image.review.viewValidationCheck" /></option>
                            <option value="filterClassCheck"><spring:message code="label.tool.image.review.viewClassCheck" /></option>
                        </select>
                    </div>
                </div>

                <script type="template/html" id="tmpl-taskWorkRuleType">
                    <div id="taskWorkRuleType#workRuleType#" class="dropdown-option">
                        <input type="checkbox"
                               id='workRuleType_#workRuleType#'
                               name="vcOption"
                               value="#workRuleType#">
                        <label for='workRuleType_#workRuleType#'>#ruleName#</label>
                    </div>
                </script>
                <div id="forValidationCheck" class="form-item" style="display:none;">
                    <label><spring:message code="label.tool.image.review.search.vcSelection" /></label>
                    <div class="dropdown" data-control="checkbox-dropdown" style="width: 200px;">
                        <div class="dropdown-label"><spring:message code="label.tool.image.review.search.selection" /></div>
                        <div class="dropdown-list" id="forValidationCheckList"></div>
                    </div>
                </div>

                <div class="form-item">
                    <label for="searchWorkerId"
                           style="min-width:62px;"
                           title="<spring:message code="title.tool.image.review.search.workerId" />"
                    ><spring:message code="label.tool.image.review.search.workerId" /></label>
                    <input type="text"
                           id="searchWorkerId"
                           style="width:117px;"
                           placeholder="<spring:message code="placeholder.tool.image.review.search.workerId" />"
                    />
                </div>
                <c:if test="${reqType != 'reviewer'}">
                    <div class="form-item">
                        <label for="searchReviewerId"
                               style="min-width:62px;"
                               title="<spring:message code="title.tool.image.review.search.reviewerId" />"
                        ><spring:message code="label.tool.image.review.search.reviewerId" /></label>
                        <input type="text"
                               id="searchReviewerId"
                               style="width:117px;"
                               placeholder="<spring:message code="placeholder.tool.image.review.search.reviewerId" />"
                        />
                    </div>
                </c:if>
                <c:if test="${reqType == 'master'}">
                    <div class="form-item">
                        <label for="searchInspectorId"
                               style="min-width:62px;"
                               title="<spring:message code="title.tool.image.review.search.inspectorId" />"
                        ><spring:message code="label.tool.image.review.search.inspectorId" /></label>
                        <input type="text"
                               id="searchInspectorId"
                               style="width:117px;"
                               placeholder="<spring:message code="placeholder.tool.image.review.search.inspectorId" />"
                        />
                    </div>
                </c:if>
                <div class="form-item" style="display: none;">
                    <label style="min-width:75px;"
                           title="<spring:message code="title.tool.image.review.search.tagImage" />"
                    ><spring:message code="label.tool.image.review.search.tagImage" /></label>
                    <div class="dropdown"
                         data-control="checkbox-dropdown"
                    >
                        <div class="dropdown-label"><spring:message code="button.tool.image.review.dropdown.select" /></div>
                        <div class="dropdown-list">
                            <a href="#" data-toggle="check-all" class="dropdown-option">
                            </a>
                            <c:forEach var="tag" items="${taskInfo.tagList}" varStatus="status">
                                <c:if test="${tag.tagTypeCd == 'IMG'}">
                                    <c:choose>
                                        <c:when test="${tag.tagValTypeCd == '20'}">
                                            <div class="dropdown-option">
                                                <input type="checkbox"
                                                       id="searchTagImage_${tag.tagId}_yes"
                                                       name="searchTagImage"
                                                       value="${tag.tagId}|yes">
                                                <label for="searchTagImage_${tag.tagId}_yes" class="curPoint">
                                                    <c:out value="${tag.name}"/>
                                                    -
                                                    <spring:message code="option.tool.image.review.search.tag.inputYes" />
                                                </label>
                                            </div>
                                            <div class="dropdown-option">
                                                <input type="checkbox"
                                                       id="searchTagImage_${tag.tagId}_no"
                                                       name="searchTagImage"
                                                       value="${tag.tagId}|no">
                                                <label for="searchTagImage_${tag.tagId}_no" class="curPoint">
                                                    <c:out value="${tag.name}"/>
                                                    -
                                                    <spring:message code="option.tool.image.review.search.tag.inputNo" />
                                                </label>
                                            </div>
                                        </c:when>
                                        <c:when test="${tag.tagValTypeCd == '30'}">
                                            <c:forEach var="tv" items="${tag.tagSelectValueVoList}" varStatus="statusV">
                                                <div class="dropdown-option">
                                                    <input type="checkbox"
                                                           id="searchTagImage_${tag.tagId}_${tv.val}"
                                                           name="searchTagImage"
                                                           value="${tag.tagId}|${tv.val}">
                                                    <label for="searchTagImage_${tag.tagId}_${tv.val}" class="curPoint">
                                                        <c:out value="${tag.name}"/>
                                                        -
                                                        <c:out value="${tv.name}"/>
                                                    </label>
                                                </div>
                                            </c:forEach>
                                        </c:when>
                                    </c:choose>
                                </c:if>
                            </c:forEach>
                        </div>
                    </div>
                </div>
                <div class="form-item" style="display: none;">
                    <label style="min-width:75px;"
                           title="<spring:message code="title.tool.image.review.search.tagObject" />"
                    ><spring:message code="label.tool.image.review.search.tagObject" /></label>
                    <div class="dropdown"
                         data-control="checkbox-dropdown"
                    >
                        <div class="dropdown-label"><spring:message code="button.tool.image.review.dropdown.select" /></div>
                        <div class="dropdown-list">
                            <a href="#" data-toggle="check-all" class="dropdown-option">
                            </a>
                            <c:forEach var="tag" items="${taskInfo.tagList}" varStatus="status">
                                <c:if test="${tag.tagTypeCd == 'OBJ'}">
                                    <c:choose>
                                        <c:when test="${tag.tagValTypeCd == '20'}">
                                            <div class="dropdown-option">
                                                <input type="checkbox"
                                                       id="searchTagObject_${tag.tagId}_yes"
                                                       name="searchTagObject"
                                                       value="${tag.tagId}|yes">
                                                <label for="searchTagObject_${tag.tagId}_yes" class="curPoint">
                                                    <c:out value="${tag.name}"/>
                                                    -
                                                    <spring:message code="option.tool.image.review.search.tag.inputYes" />
                                                </label>
                                            </div>
                                            <div class="dropdown-option">
                                                <input type="checkbox"
                                                       id="searchTagObject_${tag.tagId}_no"
                                                       name="searchTagObject"
                                                       value="${tag.tagId}|no">
                                                <label for="searchTagObject_${tag.tagId}_no" class="curPoint">
                                                    <c:out value="${tag.name}"/>
                                                    -
                                                    <spring:message code="option.tool.image.review.search.tag.inputNo" />
                                                </label>
                                            </div>
                                        </c:when>
                                        <c:when test="${tag.tagValTypeCd == '30'}">
                                            <c:forEach var="tv" items="${tag.tagSelectValueVoList}" varStatus="statusV">
                                                <div class="dropdown-option">
                                                    <input type="checkbox"
                                                           id="searchTagObject_${tag.tagId}_${tv.val}"
                                                           name="searchTagObject"
                                                           value="${tag.tagId}|${tv.val}">
                                                    <label for="searchTagObject_${tag.tagId}_${tv.val}" class="curPoint">
                                                        <c:out value="${tag.name}"/>
                                                        -
                                                        <c:out value="${tv.name}"/>
                                                    </label>
                                                </div>
                                            </c:forEach>
                                        </c:when>
                                    </c:choose>
                                </c:if>
                            </c:forEach>
                        </div>
                    </div>
                </div>
                <c:if test="${reqType != 'master' and reqType != 'co'}">
                    <div class="form-item">
                        <label for="searchFileName"
                               title="<spring:message code="title.tool.image.review.search.fileName" />"
                        ><spring:message code="label.tool.image.review.search.fileName" /></label>
                        <input type="text"
                               name="searchFileName"
                               id="searchFileName"
                               style="width:200px;"
                               class="setTooltip"
                               placeholder="<spring:message code="placeholder.tool.image.review.search.fileName" />"
                        />
                    </div>
                </c:if>
            </div>
        </div>
<%--        <div class="search-right">--%>
<%--            <button type="button"--%>
<%--                    class="btn-search"--%>
<%--                    onclick="page.fn.searchFromUI(1);"--%>
<%--            ><span><span><spring:message code="button.tool.image.review.searchProc" /></span></span></button>--%>
<%--            <button type="button"--%>
<%--                    class="btn-reset"--%>
<%--                    onclick="page.fn.resetSearchForm();"--%>
<%--            ><span><span><spring:message code="button.tool.image.review.searchInit" /></span></span></button>--%>
<%--        </div>--%>
    </div>
</div>

<div class="body-area">
    <div class="body-left">
        <h3 class="a11y-hidden"><spring:message code="label.tool.image.review.contents.imageList" /></h3>
        <ul id="root" class="data-list size_400"><!-- size_400, size_800, size_1600 -->
        </ul>
        <div id="wrap-fullsize-locator">
            <span id="txt-file-locator-current">1</span> / <span id="txt-file-locator-total">100</span>
        </div>
    </div>
    <div class="body-right">
        <h3><spring:message code="label.tool.image.review.contents.fileDetail" />
            <button class="data-info-btn"
                    onclick="page.fn.viewDataInfo();">상세보기</button>
        </h3>
        <div class="data-info <c:if test="${reqType != 'reviewer'}">ins</c:if>">
            <div>
                <ul style="display: none;">
                    <li>
                        <strong><spring:message code="label.tool.image.review.contents.fileName" /> : </strong> <span
                            id="viewDetail_fileName"></span>
                        <div id="copyBtnDiv"></div>
                        <div class="title-tooltip" style="top:5px;width:240px;left: 5px;"></div></li>
<%--                    <li><strong><spring:message code="label.tool.image.review.contents.fileStatus" /> : </strong> <span--%>
<%--                            id="viewDetail_status"></span></li>--%>
<%--                    <li><strong><spring:message code="label.tool.image.review.contents.worker" /> : </strong> <span--%>
<%--                    ><span id="viewDetail_annotatorId"></span><strong> (<span--%>
<%--                            id="viewDetail_failCount"></span>)</strong></span></li>--%>
<%--                    <li><strong><spring:message code="label.tool.image.review.contents.workedDate" /> : </strong> <span--%>
<%--                            id="viewDetail_workedDate"></span></li>--%>
<%--                    <li><strong><spring:message code="label.tool.image.review.contents.reviewer" /> : </strong><span--%>
<%--                            id="viewDetail_reviewerId"></span></li>--%>
<%--                    <li><strong><spring:message code="label.tool.image.review.contents.reviewedDate" /> : </strong> <span--%>
<%--                            id="viewDetail_reviewedDate"></span></li>--%>
<%--                    <c:if test="${reqType != 'reviewer'}">--%>
<%--                        <li><strong><spring:message code="label.tool.image.review.contents.inspector" /> : </strong><span--%>
<%--                                id="viewDetail_inspectorId"></span></li>--%>
<%--                        <li><strong><spring:message code="label.tool.image.review.contents.inspectedDatetime" /> : </strong><span--%>
<%--                                id="viewDetail_inspectedDate"></span></li>--%>
<%--                    </c:if>--%>
                </ul>
            </div>
            <div class="btn-area">
                <button type="button"
                        class="btn-approve btnsReview reviewer"
                        onclick="page.fn.procReviewPass();"
                        style="margin-bottom: 5px; margin-top: 5px;"
                ><spring:message code="button.tool.image.review.approve" /></button>
                <c:if test="${!isCO}">
                    <button type="button"
                            class="btn-reject btn-modify btnsReviewPass"
                            onclick="page.fn.togoAnnotationTool();"
                            id="btnGotoModifyImage"
                            style="margin-bottom:9px;"
                    ><spring:message code="button.tool.image.review.modify" /></button>
                </c:if>
                <c:if test="${isCO}">
                    <button type="button"
                            class="btn-reject btn-modify btnsReviewPass"
                            onclick="page.fn.togoAnnotationTool();"
                            id="btnGotoModifyImage"
                            style="margin-bottom:9px;"
                    ><spring:message code="button.tool.image.review.moveToDetailReview" /></button>
                </c:if>
                <button type="button"
                        class="btn-approve btnsReview inspector"
                        onclick="page.fn.procInspectionOK();"
                ><spring:message code="button.tool.image.review.inspOK" /></button>
                <button type="button"
                        class="btn-reject btnsReview inspector"
                        onclick="page.fn.viewDetailInspection();"
                        style="margin-bottom: 9px;"
                ><spring:message code="button.tool.image.review.inspNG" /></button>
            </div>
        </div>
        <c:if test="${reqType == 'master'}">
            <h3><spring:message code="label.tool.history.title"/>
                <button class="data-info-btn his" onclick="page.fn.viewHistoryInfo()">상세보기</button>
            </h3>
            <div class="data-his-info" id="">
                <div id="historyDiv" class="">
                    <div class="btn-history">
                        <button type="button"
                                class="btn-history-work on"
                                id="historyWork"
                                onclick="page.fn.viewHistoryData('work')"
                        ><spring:message code="label.tool.history.workHistory"/></button>
                        <button type="button"
                                class="btn-history-work "
                                id="historyReview"
                                onclick="page.fn.viewHistoryData('review')"
                        ><spring:message code="label.tool.history.reviewHistory"/></button>
                    </div>
                    <div id="masterViewHistoryData">
                        <table class="tbl-history">
                            <colgroup>
                                <col width="30%">
                                <col width="35%">
                                <col width="35%">
                            </colgroup>
                            <thead>
                            <tr>
                                <th id="historyUser" ><spring:message code="label.viewer.pannel.image.worker"/></th>
                                <th id="historyStatus"><spring:message code="label.tool.history.workStatus"/></th>
                                <th><spring:message code="label.tool.history.date"/></th>
                            </tr>
                            </thead>
                            <tbody id="historyData">

                            </tbody>
                        </table>
                        <div id="noneData">
                            <p><spring:message code="label.tool.history.none"/></p>
                        </div>
                    </div>
                </div>
            </div>
        </c:if>
        <div class="reject-area rejectItem<c:if test="${!isReviewer}"> cutRejectArea</c:if>" style="display:none;" id="detailReject">
            <h3 class="a11y-hidden"><spring:message code="label.tool.image.review.contents.rejectForm" /></h3>
            <p><spring:message code="label.tool.image.review.contents.rejectReasonDescript" /></p>
            <h4>
                <spring:message code="label.tool.image.review.contents.objectClassTag" />
                <button class="data-info-btn" style="position: absolute;right: 30px;" onclick="page.fn.toggleRejectClassList(this);"></button>
            </h4>
            <div id="wrapRejectObjectData" class="scroll-able" style="max-height: 150px;">
                <ul id="rootRejectObjectData">
                </ul>
            </div>

            <h4># <spring:message code="label.tool.image.review.contents.imageTagList" /></h4>
            <div>
                <ul id="rootRejectImageData">
                </ul>
            </div>
            <h4># <spring:message code="title.tool.image.review.failReason" /></h4>
            <div class="reject-choice-wrap">
                <button class="reject-choice" onclick="page.fn.rejectChoiceOnClick(this);"><spring:message code="button.tool.image.selectRejectReason" /></button>
                <ul class="reject-choice-ul">
                </ul>
            </div>
            <div style="position: relative;z-index: 1;">
                <div id="rejectCheck" class="check-area" style="position: absolute;top: 12px;left: 10px;">
                    <input id="textarea-check" type="checkbox" checked><label for="textarea-check"><div></div></label>
                </div>
                <textarea id="failReason"
                          rows="4"
                          onscroll="page.fn.addScrollEvent(this);"
                          placeholder="<spring:message code="placeholder.tool.image.review.inputReason" />"></textarea>
            </div>
            <!-- 220720 filebox 추가 -->
            <h4> # <spring:message code="label.tool.image.review.AttachFile" /></h4>
            <div class="filebox-wrap">
                <div class="filebox">
                    <input type="hidden" id="uploadType" value="failImg">
                    <input type="hidden" id="authToken" value="${authToken}">
                    <label for="uploadFile"><spring:message code="label.tool.image.review.seleteFile" /></label>
                    <input class="upload-name" id="uploadFileName" readonly placeholder="<spring:message code="label.tool.image.review.noseleteFile" />">
                    <input type="file" accept=".gif, .jpg, .png" id="uploadFile" data-fileId="" class="upload-hidden" onchange="page.fn.uploadAttachFile(this);">
                    <!-- 220818 -->
                    <button class="material-icons btn-image setTooltip" id="showUploadFile" title="이미지보기" onclick="page.fn.openTabAttachFile(this);">image</button>
                    <button type="button" id="deleteFile" class="btn-del"style="display:none;" onclick="page.fn.deleteAttachFile(this);">삭제</button>
                </div>
            </div>
            <!-- 220726 첨부파일영역 추가 -->
            <div class="attached-file">
                <button type="button" id="downloadOldFile" data-fileId="" onclick="page.fn.downloadAttachFile(this);"></button>
            </div>
            <button type="button"
                    class="btn-reject btnsReview reviewer"
                    onclick="page.fn.procReviewFail();"
            ><spring:message code="button.tool.image.review.reject" /></button>
        </div>
        <div class="reject-area error-code rejectItem" style="display:none;" id="detailInspection">
            <h4># <spring:message code="label.tool.image.review.contents.errorCodeList" /></h4>
            <div>
                <ul id="rootErrorCodeList"></ul>
            </div>
            <h4># <spring:message code="title.tool.image.review.ngReason" /></h4>
            <div>
                <div class="reject-choice-wrap">
                    <button class="reject-choice" onclick="page.fn.rejectChoiceOnClick(this);"><spring:message code="button.tool.image.selectNgReason" /></button>
                    <ul class="reject-choice-ul">
                    </ul>
                </div>
                <div style="position: relative;z-index: 1;">
                    <div class="check-area" style="position: absolute;top: 12px;left: 10px;">
                        <input id="textarea-ngCheck" type="checkbox" checked><label for="textarea-ngCheck"><div></div></label>
                    </div>
                    <textarea id="ngReason"
                              rows="4"
                              onscroll="page.fn.addScrollEvent(this);"
                              placeholder="<spring:message code="placeholder.tool.image.review.inputNgReason" />"></textarea>
                </div>
            </div>
            <button type="button"
                    class="btn-reject btnsReview inspector"
                    onclick="page.fn.procInspectionNG();"
            ><spring:message code="button.tool.confirmSpace" /></button>
        </div>
<%--        tạm thời bỏ display:none, bỏ qua phần comment --%>
        <div class="reject-area" style=" padding-left:0; padding-right:0;" id="wrapInspImageInfo">
<%--            <h4 class="cmtListTitle"># <spring:message code="spec.detail.comment" /><span class="cmtCount"></span><button class="data-info-btn cmtList" onclick="page.fn.viewMastercommentList()" style="top: -5px;">상세보기</button></h4>--%>
<%--            <div id="masterCommentList">--%>
<%--                <ul id="viewDetail_masterCommentList">--%>
<%--                </ul>--%>
<%--            </div>--%>
<%--            <div style="position: relative;z-index: 1;">--%>
<%--      				<textarea id="masterCommentContents"--%>
<%--                              rows="4"--%>
<%--                              onscroll="page.fn.addScrollEvent(this);"--%>
<%--                              placeholder=""--%>
<%--                              style="text-indent: 0;"></textarea>--%>
<%--            </div>--%>
<%--            <button type="button"--%>
<%--                    class="btn-approve btnMasterComment reviewer"--%>
<%--                    onclick="page.fn.procMasterComment();"--%>
<%--                    style="margin-bottom: 5px; margin-top: 5px;"--%>
<%--            ><spring:message code="spec.detail.comment" /></button>--%>
            <h4># <spring:message code="label.tool.image.review.contents.imageTagList" /></h4>
            <div>
                <script type="text/html" id="tmpl-inspImageTag">
                    <li><strong style="color:#color#;" title="#name#">#tagName#</strong> : <span style="#tagValueStyle#" title="#tagValueName#">#tagValueName#</span></li>
                </script>
                <ul id="rootInspImageTagList"></ul>
            </div>
            <h4><spring:message code="label.tool.image.review.contents.objectClassTag" /></h4>
            <div class="object-area">
                <script type="text/html" id="tmpl-inspObj">
                    <li id="li_inspObj_#objectId#" title="##objectOrder# #className#"><strong>##objectOrder# #className#</strong></li>
                </script>
                <script type="text/html" id="tmpl-inspObjTag">
                    <div>
<%--                        tagname : tagvalue --%>
                        <span style="color:#color#;" title="#tagName#">#tagName#</span> : <span style="#tagValueStyle#" title="#tagValueName#">#tagValueName#</span>
                    </div>
                </script>
                <ul id="rootInspObjTagList"></ul>
            </div>
        </div>
    </div>
</div>

<div class="footer-area">
    <div class="footer-left">
        <h3 class="a11y-hidden"><spring:message code="label.tool.image.review.searchInfo" /></h3>
<%--        <c:if test="${param.reqType != 'master' and !isCO}">--%>
<%--            <c:choose>--%>
<%--                <c:when test="${isReviewer}">--%>
<%--                    <button type="button" id="procAllPassBtn" class="btn-pass" onclick="page.fn.procAllPass();"><spring:message code="button.tool.image.review.allPass" /></button>--%>
<%--                </c:when>--%>
<%--                <c:when test="${!isReviewer}">--%>
<%--                    <button type="button" class="btn-pass" onclick="page.fn.procAllOK();"><spring:message code="button.tool.image.review.allOK" /></button>--%>
<%--                </c:when>--%>
<%--            </c:choose>--%>
<%--        </c:if>--%>
        <div class="search-result">
      <span title="<spring:message code="title.tool.image.review.searchInfo" />"
            class="setTooltip"><spring:message code="label.tool.image.review.searchInfo" /> : </span>
            <span title="<spring:message code="title.tool.image.review.pageTotalCount" />"
                  class="setTooltip"
                  id="pagingCurrentCount">0</span>
            [<span title="Preloaded Image Count" class="setTooltip" id="loadedImageCount">0</span>]
            [<span title="<spring:message code="title.tool.image.review.searchTotalCount" />"
                   class="setTooltip"
                   id="pagingTotalCount">0</span>]
        </div>
    </div>
    <div class="footer-center">
<%--        hide --%>
<%--        <div class="footer-center-left">--%>
<%--            <c:if test="${param.reqType != 'master' and param.reqType != 'co' }">--%>
<%--            <h3 class="a11y-hidden"><spring:message code="button.tool.image.review.selectFile" /></h3>--%>
<%--            <button type="button"--%>
<%--                    class="btn-pass"--%>
<%--                    id="btnSelectAll"--%>
<%--                    onclick="page.fn.toggleAllImageSelect();"--%>
<%--            ><spring:message code="button.tool.image.review.selectAll" /></button>--%>
<%--            <c:choose>--%>
<%--                <c:when test="${param.reqType == 'reviewer'}">--%>
<%--                    <button type="button"--%>
<%--                            class="btn-approve"--%>
<%--                            onclick="page.fn.procPassSelected();"--%>
<%--                    ><spring:message code="button.tool.image.review.selectedApprove" /></button>--%>
<%--                    <button type="button"--%>
<%--                            class="btn-reject open-pop"--%>
<%--                            onclick="page.fn.togglePopup('#modal-fail');"--%>
<%--                    ><spring:message code="button.tool.image.review.selectedReject" /></button>--%>
<%--                </c:when>--%>
<%--                <c:otherwise>--%>
<%--                    <button type="button"--%>
<%--                            class="btn-approve"--%>
<%--                            onclick="page.fn.procInspOKSelected();"--%>
<%--                    ><spring:message code="button.tool.image.review.selectedInspOK" /></button>--%>
<%--                    <button type="button"--%>
<%--                            class="btn-reject open-pop"--%>
<%--                            onclick="page.fn.togglePopup('#modal-ng');"--%>
<%--                    ><spring:message code="button.tool.image.review.selectedInspNG" /></button>--%>
<%--                </c:otherwise>--%>
<%--            </c:choose>--%>
<%--            <span><spring:message code="title.tool.image.review.countSelectedFile" /> : <strong--%>
<%--                    class="point-color"--%>
<%--                    id="viewCheckedImageCount">0</strong>--%>
<%--                <div class="modal-fail layerPop" id="modal-fail">--%>
<%--                    <div class="modal-fail-header">--%>
<%--                        <h3><spring:message code="title.tool.image.review.failReason" /></h3>--%>
<%--                        <button type="button"--%>
<%--                                class="btn-close pop-close"--%>
<%--                                onclick="page.fn.togglePopup('#modal-fail');"></button>--%>
<%--                    </div>--%>
<%--                    <div class="reject-choice-wrap">--%>
<%--                        <button class="reject-choice" onclick="page.fn.rejectChoiceOnClick(this);"><spring:message code="button.tool.image.selectRejectReason" /></button>--%>
<%--                        <ul class="reject-choice-ul">--%>
<%--                        </ul>--%>
<%--                    </div>--%>
<%--                    <div style="position: relative;z-index: 1;">--%>
<%--                        <div class="check-area" style="position: absolute;top: 12px;left: 10px;">--%>
<%--                            <input id="textarea-check01" type="checkbox" checked><label for="textarea-check01"><div></div></label>--%>
<%--                        </div>--%>
<%--                        <div>--%>
<%--                            <textarea rows="3"--%>
<%--                                      placeholder="<spring:message code="placeholder.tool.image.review.inputReason" />"--%>
<%--                                      id="failReasonForSelected"--%>
<%--                                      onscroll="page.fn.addScrollEvent(this);"--%>
<%--                            ></textarea>--%>
<%--                        </div>--%>
<%--                        <!-- 220720 filebox 추가 -->--%>
<%--                        <div class="filebox-wrap">--%>
<%--                    <div class="filebox">--%>
<%--                        <input type="hidden" id="uploadTypeSelected" value="failImg">--%>
<%--                        <input type="hidden" id="authTokenSelected" value="${authToken}">--%>
<%--                        <label for="uploadFileSelected"><spring:message code="label.tool.image.review.seleteFile" /></label>--%>
<%--                        <input class="upload-name" id="uploadFileNameSelected" readonly placeholder="<spring:message code="label.tool.image.review.noseleteFile" />">--%>
<%--                        <input type="file" accept=".gif, .jpg, .png" id="uploadFileSelected" data-fileId="" class="upload-hidden" onchange="page.fn.uploadAttachFile(this);">--%>
<%--                        <button class="material-icons btn-image setTooltip"id="showUploadFileSelected" title="이미지보기" onclick="page.fn.openTabAttachFile(this);">image</button>--%>
<%--                        <button type="button" id="deleteFileSelected" class="btn-del" onclick="page.fn.deleteAttachFile(this);"style="display: none;">삭제</button>--%>
<%--                    </div>--%>
<%--                </div>--%>
<%--                        <div class="modal-fail-bottom">--%>
<%--                            <button type="button"--%>
<%--                                    class="btn-gray"--%>
<%--                                    onclick="page.fn.procFailSelected();"--%>
<%--                            ><spring:message code="button.tool.confirm" /></button>--%>
<%--                            <button type="button"--%>
<%--                                    class="btn-gray"--%>
<%--                                    onclick="page.fn.togglePopup('#modal-fail');"--%>
<%--                            ><spring:message code="button.tool.cancel" /></button>--%>
<%--                        </div>--%>
<%--                    </div>--%>
<%--                </div>--%>
<%--                <div class="modal-fail layerPop" style="display: none;" id="modal-ng">--%>
<%--                    <div class="modal-fail-header">--%>
<%--                        <h3><spring:message code="label.tool.image.review.contents.errorCodeList" /></h3>--%>
<%--                        <button type="button"--%>
<%--                                class="btn-close pop-close"--%>
<%--                                onclick="page.fn.togglePopup('#modal-ng');"></button>--%>
<%--                    </div>--%>
<%--                    <div class="reject-area">--%>
<%--                        <ul>--%>
<%--<c:forEach items="${inspectionErrorList}" var="err">--%>
<%--                    <li><input type="checkbox"--%>
<%--                               id="inspErrChk_<c:out value="${err.prjInspErNum}" />"--%>
<%--                               class="curPoint"--%>
<%--                               value="<c:out value="${err.prjInspErNum}" />"--%>
<%--                    ><label for="inspErrChk_<c:out value="${err.prjInspErNum}" />"--%>
<%--                            class="curPoint"--%>
<%--                    ><c:out value="${err.inspErMsg}" /></label></li>--%>
<%--</c:forEach>--%>
<%--                        </ul>--%>
<%--                    </div>--%>
<%--    end hide--%>
                    <div class="reject-choice-wrap" style="z-index: 10;" id="errorcodeSelect">
                        <button class="reject-choice" onclick="page.fn.rejectChoiceOnClick(this);"><spring:message code="button.tool.image.review.selectInspErrorCode" /></button>
<%--                        <div class="reject-area">--%>
                            <ul id="popRootErrorCodeList"></ul>
<%--                        </div>--%>
                    </div>
                    <div class="reject-choice-wrap" style="z-index: 9;">
                        <button class="reject-choice" onclick="page.fn.rejectChoiceOnClick(this);"><spring:message code="button.tool.image.selectNgReason" /></button>
                        <ul class="reject-choice-ul">
                        </ul>
                    </div>
<%--    hide--%>
<%--                    <div style="position: relative;z-index: 1;">--%>
<%--                        <div class="check-area" style="position: absolute;top: 12px;left: 10px;">--%>
<%--                                <input id="textarea-ngCheck01" type="checkbox" checked><label for="textarea-ngCheck01"><div></div></label>--%>
<%--                        </div>--%>
<%--                        <div>--%>
<%--                            <textarea rows="3"--%>
<%--                                      placeholder="<spring:message code="placeholder.tool.image.review.inputNgReason" />"--%>
<%--                                      id="ngReasonForSelected"--%>
<%--                                      onscroll="page.fn.addScrollEvent(this);"--%>
<%--                            ></textarea>--%>
<%--                        </div>--%>
<%--                    </div>--%>
<%--                    <div class="modal-fail-bottom">--%>
<%--                        <button type="button"--%>
<%--                                class="btn-gray"--%>
<%--                                onclick="page.fn.procInspNGSelected();"--%>
<%--                        ><spring:message code="button.tool.confirm" /></button>--%>
<%--                        <button type="button"--%>
<%--                                class="btn-gray"--%>
<%--                                onclick="page.fn.togglePopup('#modal-ng');"--%>
<%--                        ><spring:message code="button.tool.cancel" /></button>--%>
<%--                    </div>--%>
<%--                </div>--%>
<%--</c:if>--%>
<%--        </div>--%>
    <%--    end hide--%>

    </div>
    <div class="footer-center-right">
<%--        hide--%>
<%--        <div class="paging-area" id="pagingArea">--%>
<%--            <h3 class="a11y-hidden"><spring:message code="label.tool.image.review.paging" /></h3>--%>
<%--            <button class="btn-m-first setTooltip btnPaging"--%>
<%--                    title="<spring:message code="button.tool.image.review.paging.gotoFirstPage" />"--%>
<%--                    onclick="page.fn.changePage('first');"--%>
<%--                    disabled--%>
<%--            >&lt;&lt;</button>--%>
<%--            <button class="btn-m-pre setTooltip btnPaging"--%>
<%--                    title="<spring:message code="button.tool.image.review.paging.gotoPrevPage" />"--%>
<%--                    onclick="page.fn.changePage('pre');"--%>
<%--                    disabled--%>
<%--            >&lt;</button>--%>
<%--            <div class="select-style">--%>
<%--                <select id="selPaging"--%>
<%--                        class="setTooltip btnPaging curPoint"--%>
<%--                        title="<spring:message code="button.tool.image.review.paging.gotoSelectPage" />"--%>
<%--                        onchange="page.fn.changePageIndex();"--%>
<%--                        disabled--%>
<%--                >--%>
<%--                </select>--%>
<%--            </div>--%>
<%--            <button class="btn-m-next setTooltip btnPaging"--%>
<%--                    title="<spring:message code="button.tool.image.review.paging.gotoNextPage" />"--%>
<%--                    onclick="page.fn.changePage('next');"--%>
<%--                    disabled--%>
<%--            >&gt;</button>--%>
<%--            <button class="btn-m-last setTooltip btnPaging"--%>
<%--                    title="<spring:message code="button.tool.image.review.paging.gotoLastPage" />"--%>
<%--                    onclick="page.fn.changePage('last');"--%>
<%--                    disabled--%>
<%--            >&gt;&gt;</button>--%>
<%--        </div>--%>
<%--    </div>--%>
<%--    <c:if test="${param.reqType != 'master' and param.reqType != 'co' }">--%>
<%--        <div class="footer-right">--%>
<%--            <button class="btn-pass2"--%>
<%--                    onclick="page.fn.newReviewAssign();this.blur();"--%>
<%--            ><span><span><spring:message code="button.tool.image.review.aissignReview" /></span></span>--%>
<%--            </button>--%>
<%--        </div>--%>
<%--    </c:if>--%>
<%--        end hide--%>
</div>
</div>
<div class="loading-wrap" id="div_loading">
    <img src="../images/tool/image_loading.gif">
</div>
<div class="modal-configure layerPop">
    <div class="modal-header">
        <h3><div class="btn-m-option icon on"></div><div class="title"><spring:message code="label.tool.config.title" /></div></h3>
        <button type="button"
                class="btn-close pop-close"
                onclick="page.fn.togglePopup('.modal-configure');"></button>
    </div>
    <div><ul>
        <li>
            <div class="label curPoint"
                 title="<spring:message code="title.tool.image.review.search.viewSize" />"
            ><spring:message code="label.tool.image.review.search.viewSize" /></div>
            <div class="select-style">
                <select id="configImageSize" onchange="page.fn.changeImageSize();" class="curPoint">
                    <option value="full">Full</option>
                    <option value="400">400px</option>
                    <option value="800">800px</option>
                    <option value="1600">1600px</option>
                </select>
            </div>
        </li>
        <li>
            <div class="label curPoint"
                 title="<spring:message code="label.tool.config.configOpacityHint" />"
                 onclick="page.fn.setDefaultControlbar('opacity');"
            ><spring:message code="label.tool.config.configOpacity" /></div>
            <div>
                <input type="number" class="config_num" id="opacity_step_0" onchange="page.fn.changeOpacityStep(0);" value="0">
                <input type="number" class="config_num" id="opacity_step_1" onchange="page.fn.changeOpacityStep(1);" value="50">
                <input type="number" class="config_num" id="opacity_step_2" onchange="page.fn.changeOpacityStep(2);" value="100">
            </div>
        </li>
        <li>
            <div class="label curPoint"
                 title="<spring:message code="label.tool.config.configOpacityHint" />"
                 onclick="page.fn.setDefaultControlbar('opacity');"
            ><spring:message code="label.tool.config.configOpacity" /> (<span id="txtOpacity">100</span>%)</div>
            <div class="slider" id="sliderOpacity"></div>
        </li>
        <li>
            <div class="label curPoint"
                 title="<spring:message code="title.tool.config.configOpacityType.hint" />"
            ><spring:message code="title.tool.config.configOpacityType.label" /></div>
            <div id="wrapOpacityType">
                <input type="radio"
                       id="opacityType_overlay"
                       name="opacityType"
                       value="individual"
                       checked="checked"
                       onchange="page.fn.toggleOpacityType();this.blur();">
                <label for="opacityType_overlay"
                ><spring:message code="button.tool.lidar.ann.config.each" /></label>
                <input type="radio"
                       id="opacityType_none"
                       name="opacityType"
                       value="absorption"
                       onchange="page.fn.toggleOpacityType();this.blur();">
                <label for="opacityType_none"
                ><spring:message code="button.tool.lidar.ann.config.once" /></label>
            </div>
        </li>
        <li>
            <div class="label curPoint"
                 title="<spring:message code="label.tool.config.configBorderHint" />"
                 onclick="page.fn.setDefaultControlbar('border');"
            ><spring:message code="label.tool.config.configBorder" /> (<span id="txtBorder">100</span>px)</div>
            <div class="slider" id="sliderBorder"></div>
        </li>
        <li>
            <div class="label curPoint"
                 title="<spring:message code="label.tool.config.configCircleSizeHint" />"
                 onclick="page.fn.setDefaultControlbar('point');"
            ><spring:message code="label.tool.config.configCircleSize" /> (<span id="txtPoint">100</span>px)</div>
            <div class="slider" id="sliderPoint"></div>
        </li>
        <li>
            <div class="label curPoint"
                 title="<spring:message code="label.tool.config.configTagSizeHint" />"
                 onclick="page.fn.setDefaultControlbar('tagSize');"
            ><spring:message code="label.tool.config.configTagSize" /> (<span id="txtTagSize">100</span>)</div>
            <div class="slider" id="sliderTagSize"></div>
        </li>
        <li>
            <div class="label curPoint"
                 title="<spring:message code="label.tool.config.configBrightHint" />"
                 onclick="page.fn.setDefaultControlbar('brightness');"
            ><spring:message code="label.tool.config.configBright" /> (<span id="txtBrightness">100</span>%)</div>
            <div class="slider" id="sliderBrightness"></div>
        </li>
        <li>
            <div class="label curPoint"
                 title="<spring:message code="label.tool.config.configContrastHint" />"
                 onclick="page.fn.setDefaultControlbar('contrast');"
            ><spring:message code="label.tool.config.configContrast" /> (<span id="txtContrast">100</span>%)</div>
            <div class="slider" id="sliderContrast"></div>
        </li>
        <li>
            <div class="label curPoint"
                 title="<spring:message code="title.tool.config.viewPointPolyline" />"
            ><spring:message code="label.tool.config.viewPointPolyline" /></div>
            <div id="groupViewPolylinePoint">
                <input type="radio"
                       id="cpViewPolylinePoint_on"
                       name="cpViewPolylinePoint"
                       value="on"
                       onchange="page.fn.toggleViewPolylinePoint();this.blur();">
                <label for="cpViewPolylinePoint_on"
                ><spring:message code="button.tool.lidar.ann.config.viewCloudpointOn" /></label>
                <input type="radio"
                       id="cpViewPolylinePoint_off"
                       name="cpViewPolylinePoint"
                       value="off"
                       checked="checked"
                       onchange="page.fn.toggleViewPolylinePoint();this.blur();">
                <label for="cpViewPolylinePoint_off"
                ><spring:message code="button.tool.lidar.ann.config.viewCloudpointOff" /></label>
            </div>
        </li>
        <li>
            <div class="label curPoint"
                 title="<spring:message code="title.tool.config.view4pBoxPoint" />"
            ><spring:message code="label.tool.config.view4pBoxPoint" /></div>
            <div id="groupView4pBoxPoint">
                <input type="radio"
                       id="cpView4pBoxPoint_on"
                       name="cpView4pBoxPoint"
                       value="on"
                       onchange="page.fn.toggleView4pBoxPoint();this.blur();">
                <label for="cpView4pBoxPoint_on"
                ><spring:message code="button.tool.lidar.ann.config.viewCloudpointOn" /></label>
                <input type="radio"
                       id="cpView4pBoxPoint_off"
                       name="cpView4pBoxPoint"
                       value="off"
                       checked="checked"
                       onchange="page.fn.toggleView4pBoxPoint();this.blur();">
                <label for="cpView4pBoxPoint_off"
                ><spring:message code="button.tool.lidar.ann.config.viewCloudpointOff" /></label>
            </div>
        </li>
        <li>
            <div class="label curPoint"
                 title="<spring:message code="title.tool.config.colorPointPolyline" />"
            ><spring:message code="label.tool.config.colorPointPolyline" /></div>
            <div id="groupColorPolylinePoint">
                <input id="inputCircleColorStart" class="colorPicker circleColor" readonly>
                <input id="inputCircleColor" class="colorPicker circleColor" readonly>
                <input id="inputCircleColorEnd" class="colorPicker circleColor" readonly>
            </div>
        </li>
        <li>
            <div class="label curPoint"
                 title="<spring:message code="label.tool.config.keypoint.lineStyle.hint" />"
            ><spring:message code="label.tool.config.keypoint.lineStyle.title" /></div>
            <div id="groupKeypointLineStyle">
                <input type="radio"
                       id="cpKeypointLineStyle_line"
                       name="keypointLineStyle"
                       value="line"
                       onchange="page.fn.toggleKeypointLineStyle();this.blur();">
                <label for="cpKeypointLineStyle_line" title="<spring:message code="label.tool.config.keypoint.lineStyle.line.hint" />"
                ><spring:message code="label.tool.config.keypoint.lineStyle.line" /></label>
                <input type="radio"
                       id="cpKeypointLineStyle_noline"
                       name="keypointLineStyle"
                       value="noline"
                       onchange="page.fn.toggleKeypointLineStyle();this.blur();">
                <label for="cpKeypointLineStyle_noline" title="<spring:message code="label.tool.config.keypoint.lineStyle.noline.hint" />"
                ><spring:message code="label.tool.config.keypoint.lineStyle.noline" /></label>
                <input type="radio"
                       id="cpKeypointLineStyle_dash"
                       name="keypointLineStyle"
                       value="dash"
                       checked="checked"
                       onchange="page.fn.toggleKeypointLineStyle();this.blur();">
                <label for="cpKeypointLineStyle_dash" title="<spring:message code="label.tool.config.keypoint.lineStyle.dash.hint" />"
                ><spring:message code="label.tool.config.keypoint.lineStyle.dash" /></label>
            </div>
        </li>
        <%--<li>
          <div class="label curPoint"
               title="Select Image Server URL."
          >Image Server Url</div>
          <div id="groupImageServerUrl">
            <input type="radio"
                   id="imageServerUrl_default"
                   name="imageServerUrl"
                   value="default"
                   onchange="page.fn.toggleDefaultUrl();this.blur();">
            <label for="imageServerUrl_default">Default</label>
            <input type="radio"
                   id="imageServerUrl_edge"
                   name="imageServerUrl"
                   value="edge"
                   onchange="page.fn.toggleDefaultUrl();this.blur();">
            <label for="imageServerUrl_edge">Edge</label>
          </div>
        </li>--%>
    </ul></div>
</div>

<!-- 가이드 모달-->
<div class="layer-popUp-wrap" style="display: none;" id="guide-modal">
    <div class="popUp-header">
        <i class="material-icons help" style="color:#D3676C;">help</i>
        <div class="popupHeaderText fontSize_12"><spring:message code="label.tool.image.ann.toolTipTitle" /></div>
        <button onclick="page.fn.hideGuide();" class="material-icons">clear</button>
    </div>
    <div class="popUp-body">
        <c:if test="${param.reqType != 'master' && param.reqType != 'inspector'}">
            <div class="task-info">
                <div><spring:message code="label.tool.guide.reward.title" /><span class="reward" id="txtRewardPoint"></span></div>
                <div>
                    <spring:message code="label.tool.guide.workLimit.title" />
                    <strong><span id="txtLimitWorkCnt"></span>
                        <div class="tooltip2 top">
                            <span class="btn-info th">정보</span>
                            <div class="tooltip-con">
                                <spring:message code="label.tool.guide.workLimit.hint" />
                            </div>
                        </div>
                    </strong>
                </div>
                <div>
                    <spring:message code="label.tool.guide.reject.title" />
                    <strong id="taskInfoReworkDesc"></strong>
                </div>
            </div>
        </c:if>
        <div class="guide-area">
            <div class="guide-editor" id="viewTaskGuideContents"></div>
            <div id="popGuide_downloadDesc"
                 class="attachment-file"
                 style="display:none;">
                <p><spring:message code="label.tool.image.ann.guide.downloadFile" /></p>
            </div>
        </div>
        <div id="popGuide_downloadFotter"
             class="guide-bottom" style="display:none;">
            <span class="file-text" id="txtDesOrgnFileName"></span>
            <button type="button"
                    class="btn-download"
                    onclick=""
            ><spring:message code="button.tool.image.ann.downloadGuide" /></button>
        </div>
    </div>
</div>
<!-- vc모달 -->

<div class="layer-popUp-wrap vcModal" style="top: -1px; left: -1px; display: none; z-index: 100; position: absolute;" id="vcModal">
    <div class="popUp-header" style="background:#4b4b4b; text-align: center; display: block;">
        <div class="popupHeaderText fontSize_12" style="position: relative; left: auto; top: auto; margin: 0px">validation check list</div>
        <button onclick="page.fn.hideVcModal();" class="material-icons">clear</button>
    </div>
    <div class="popUp-body">
        <table>
            <colgroup>
                <col width="150px">
                <col width="*">
            </colgroup>
            <tbody>
            <tr>
                <th><spring:message code="label.tool.image.review.vaildationMissingObjectCheck" /></th>
                <td>
                    <ul class="VC-check" id="forRuleType_11">
                        <span><spring:message code="label.tool.image.review.vaildationNotUseIt" /></span>
                    </ul>
                </td>
            </tr>
            <tr>
                <th><spring:message code="label.tool.image.review.vaildationRequiredClassCheck" /></th>
                <td>
                    <ul class="VC-check"id="forRuleType_21">
                        <span><spring:message code="label.tool.image.review.vaildationNoClassData" /></span>
                    </ul>
                </td>
            </tr>
            <tr>
                <th><spring:message code="label.tool.image.review.forRuleType_81" /></th>
                <td>
                    <ul class="VC-check" id="forRuleType_81">
                        <span><spring:message code="label.tool.image.review.vaildationNotUseIt" /></span>
                    </ul>
                </td>
            </tr>
            <tr>
                <th><spring:message code="label.tool.image.review.vaildationCheckRequiredTag" /></th>
                <td>
                    <h4 class="VC-check-title">OBJECT TAG</h4>
                    <ul class="VC-check"id="forRuleType_31">
                        <span><spring:message code="label.tool.image.review.vaildationNoObjectData" /></span>
                    </ul>
                    <h4 class="VC-check-title">IMAGE TAG</h4>
                    <ul class="VC-check"id="forRuleType_41">
                        <span><spring:message code="label.tool.image.review.vaildationNoImageData" />
                    </ul>
                </td>
            </tr>
            <tr>
                <th><spring:message code="label.tool.image.review.vaildationTagValueDuplicateCheck" /></th>
                <td>
                    <ul class="VC-check"id="forRuleType_51">
                        <span><spring:message code="label.tool.image.review.vaildationNoValue" /></span>
                    </ul>
                </td>
            </tr>
            <tr>
                <th><spring:message code="label.tool.image.review.vaildationExcludingTagAttributeValues" /></th>
                <td>
                    <ul class="VC-check" id="forRuleType_61">
                        <span><spring:message code="label.tool.image.review.vaildationNoValue" /></span>
                    </ul>
                </td>
            </tr>
            <tr>
                <th><spring:message code="label.tool.image.review.validationLimitTagValues" /></th>
                <td>
                    <ul class="VC-check" id="forRuleType_71">
                        <span><spring:message code="label.tool.image.review.vaildationNoValue" /></span>
                    </ul>
                </td>
            </tr>
            <tr>
                <th><spring:message code="label.tool.image.review.forRuleType_91" /></th>
                <td>
                    <ul class="VC-check" id="forRuleType_91">
                        <span><spring:message code="label.tool.image.review.vaildationNotUseIt" /></span>
                    </ul>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
<!-- vc모달 끝 -->
<div id="popupImageZoomer">
    <div id="wrapZoomer">
        <img id="imgZoomer" onload="page.fn.initZoomerImage();"/>
        <svg id="svgZoomer" viewBox="0 0 0 0"/>
    </div>
    <div id="wrapZoomerRatio">x2.0</div>
</div>
<style id="style_config_opacity"></style>
<style id="style_config_border"></style>
<style id="style_config_point"></style>
<style id="style_config_brightness"></style>
<style id="style_config_zoomer"></style>
<style id="style_classFilter"></style>
<script>
    let _IS_EXISTS_GUIDE = "${isExistsGuide}";
    page.data.task.taskDescHTML			= '${taskInfo.taskDescHTML}';
</script>
<!-- 가이드 모달-->
<!-- hotkey layer popUp-->
<script type="text/html" id="tmpl-hotkey-key">
    <span class="key" title="#key#">#key#</span>
</script>
<div class="layer-popUp-wrap" style="top:-1px; left:-1px;display: none;" id="popHotkey">
    <div class="popUp-header">
        <div class="material-icons materialBtns fontSize_24 on">keyboard</div>
        <div class="popupHeaderText"><spring:message code="label.tool.image.ann.hotkey" />(<spring:message code="label.tool.image.ann.hotkeyHint" />)</div>
        <button onclick="page.fn.togglePopupOfHotkey();"
                class="modal-close material-icons"
                title="<spring:message code="button.tool.closePopupHint" />">clear</button>
    </div>
    <div class="popUp-body">
        <div class="wrap header">
            <div class="tab on"
                 title="<spring:message code="label.tool.image.ann.tabHotkeySystemHint" />"
                 id="tab_system"
                 onclick="page.fn.changeTabOfHoykey('system')"
                 style="border-right: none;"
            >SYSTEM</div>
            <div class="tab"
                 onclick="page.fn.changeTabOfHoykey('task')"
                 id="tab_task"
                 title="<spring:message code="label.tool.image.ann.tabHotkeyTaskHint" />"
            >TASK</div>
        </div>
        <div class="wrap header">
            <ul style="margin-top: 30px;">
                <li style="min-height: 20px;border-top: 1px solid #666;padding-top: 5px;">
                    <div class="hotkey"><spring:message code="label.tool.image.ann.hotkey" />(<spring:message code="label.tool.image.ann.hotkeyHint" />)</div>
                    <div class="description"><spring:message code="label.tool.image.ann.discription" /></div>
                </li>
            </ul>
        </div>
        <div class="wrap contents scroll-able" style="width: 504px;">
            <ul id="rootHotkeySystem">
            </ul>
            <ul id="rootHotkeyTask" style="display: none;">
            </ul>
        </div>
    </div>
</div>
<!-- hotkey popUp-->
<!-- class filter layer popUp-->
<script type="html/template" id="tmpl-toggleClass">
    <li>
        <input type="checkbox"
               name="chkToggleClasses"
               id="chkToggleClass_#classId#"
               onchange="page.fn.applyToggleClasses();"
               checked
               value="#classId#"
        />
        <label for="chkToggleClass_#classId#" >
            <div class="classText">[#hkName#] #className#</div>
            <div class="classColor CLASS_#classId#"></div>
        </label>
    </li>
</script>
<script type="html/template" id="tmpl-toggleClassStyle">
    svg .CLASS_#classId#, svg [data-class='#classId#'] { display: none !important; }
</script>
<div class="layer-popUp-wrap" style="top:-1px; left:-1px;display: none;" id="classFilterPopup">
    <div class="popUp-header">
        <div class="material-icons materialBtns fontSize_24 on">add_task</div>
        <div class="popupHeaderText"><spring:message code="button.tool.image.review.toggleClassFilterPopup" /></div>
        <button onclick="page.fn.toggleClassFilterPopup();"
                class="modal-close material-icons"
                title="<spring:message code="button.tool.closePopupHint" />">clear</button>
    </div>
    <div class="popUp-body">
        <div class="wrap contents scroll-disable" style="height: 20px; padding-top: 5px;">
            <input type="checkbox" id="allToggleClasses" checked onclick="page.fn.applyToggleAllClasses(this)" />
            <label for="allToggleClasses">All</label>
        </div>
        <div id="wrapToggleClasses" class="wrap contents scroll-able">
            <ul id="rootToggleClasses">
            </ul>
        </div>
    </div>
</div>
<!-- class filter layer popUp-->
</body>
</html>
