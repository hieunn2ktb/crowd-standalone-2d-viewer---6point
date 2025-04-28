// const _pre_loader = function() {
//     token_front = page.param.token;
//     let param = {
//         url : "/task/get"
//         , param : {
//             "projectId"     : page.param.projectId
//             , "taskId"  : page.param.taskId
//             , "reqType"     : page.param.reqType
//         }, returnFunction : function(rev){
//             if(rev && rev.result) {
//                 _pre_loader_data(rev.data);
//                 _pre_loader_hotkey();
//                 page.fn.init();
//                 page.fn.hideLoading();
//             }
//         }
//     };
//     _common.ajax.asyncJSON2(param);
// }
/**
 * pre loader of project and task data
 * @param data
 * @private
 */
const _pre_loader_2dd_data = function(data) {
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
        // for (let i = 0; i < data.keypointVoList.length; i++) {
        //     let kp = data.keypointVoList[i];
        //     log.info(kp, "keypoint");
        //     try {
        //         let roi = kp.roi;
        //         if(_common.isNotEmpty(roi)) {
        //             roi = JSON.parse(roi);
        //         }
        //         page.data.task.keypointVoList.push({
        //             keypointId: kp.keypointId
        //             , keypointName: kp.keypointName
        //             , pointLength: kp.pointsLength
        //             , position: JSON.parse(kp.pointsPosition)
        //             , relationship: JSON.parse(kp.relationship)
        //             , radiusYn: kp.radiusYn
        //             , roi: roi
        //             , posMap: null
        //             , defaultRadius: 10
        //             , magicYn: kp.magicYn
        //         });
        //         page.data.task.keypointMap.put(kp.keypointId, {
        //             keypointId: kp.keypointId
        //             , keypointName: kp.keypointName
        //             , pointLength: kp.pointsLength
        //             , position: JSON.parse(kp.pointsPosition)
        //             , relationship: JSON.parse(kp.relationship)
        //             , radiusYn: kp.radiusYn
        //             , roi: roi
        //             , posMap: null
        //             , defaultRadius: 10
        //             , magicYn: kp.magicYn
        //         });
        //         if (kp.magicYn == "Y") {
        //             page.data.magicKeypointNumber = '${kp.keypointId}';
        //         }
        //     } catch(E) {
        //         log.error(E, "_pre_loader_data, convert of keypointVoList");
        //         log.error(kp, "_pre_loader_data, convert of keypointVoList");
        //     }
        // }
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

const _pre_loader_hotkey = function() {
    //HOTKEY

}