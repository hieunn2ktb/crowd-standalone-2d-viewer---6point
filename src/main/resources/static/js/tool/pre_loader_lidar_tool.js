
/**
 * pre loader of project and task data
 * @param data
 * @private
 */
function _pre_loader_data(data) {
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
            , isUse: _common.nvl(data.minPixelType, "N")
        };
        page.constants.reviewSystemHost = _common.nvl(data.reviewSystemHost, "N");
        page.constants.userLocation = _common.nvl(data.userLocation, "");
        page.constants.currentLocale = _common.nvl(data.country, "kor");
        page.constants.isReviewer = _common.nvl(data.isReviewer, true);
        page.constants.imageServer = [];
        for (let i = 0; i < data.imageServers.length; i++) {
            let imgServerUrl = data.imageServers[i];
            let imgServerName = data.imageServers[i];
            page.constants.imageServer.push({
                name: imgServerName
                , url: imgServerUrl
                , title: imgServerName
            });
            if(page.constants.userLocation.toUpperCase() == imgServerName.toUpperCase()) {
                page.data.imageServerURL = imgServerUrl;
                page.data.imageServerName = imgServerName;
                // page.constants.imageServerURL = imgServerUrl;
            }
        }
        if (_common.isEmpty(page.constants.imageServerURL)) {
            page.constants.imageServerURL = page.constants.imageServer[0].url;
        }
        if (_common.isEmpty(page.data.imageServerURL)) {
            page.data.imageServerURL = page.data.imageServer[0].url;
        }

        page.data.imageServer = page.constants.imageServerURL;
        page.constants.authToken = _common.nvl(data.authToken, "");
        page.data.task.projectId = _common.nvl(data.projectId, "");
        page.data.task.projectName = _common.nvl(data.projectName, "");
        page.data.task.taskId = _common.nvl(data.taskId, "");
        page.data.task.taskName = _common.nvl(data.taskName, "");
        page.data.task.defaultClassNumber = _common.nvl(data.defTaskClassId, "");
        page.data.task.rejectYN = _common.nvl(data.reworkYn, "");
        page.data.task.taskType = _common.nvl(data.taskType, "");
        page.data.task.taskDescHTML = _common.nvl(data.taskDescHTML, "");
        page.data.task.reworkYn = _common.nvl(data.reworkYn, "N");
        page.data.task.limitWorkCnt = _common.nvl(data.limitWorkCnt, 0);
        page.data.task.attachedFileSrc = data.uploadLinkUrl + data.desFile;
        page.data.task.attachedFileName = data.desOrgnFile;
        page.data.task.isExistsGuide = false;
        if(_common.isNotEmpty(page.data.task.taskDescHTML) || _common.isNotEmpty(page.data.task.attachedFileName)) {
            page.data.task.isExistsGuide = true;
        }
        page.data.task.rewardPoint = _common.nvl(data.rewardPoint, "");
        page.data.task.reviewRewardPoint = _common.nvl(data.reviewRewardPoint, "");
        page.data.task.camList = [];
        if(_common.isNotEmpty(data.camList)) {
            data.camList.forEach(function(cam){
                page.data.task.camList.push({
                    camId   : cam.camId
                    , name      : cam.name
                    , position  : cam.position
                    , fov       : cam.fov
                    , lookat    : cam.lookat
                    , far       : cam.far
                    , near      : cam.near
                    , up        : cam.up
                    , aspect    : cam.aspect
                    , path      : cam.path
                    , fileExt   : cam.fileExt
                    , sort      : cam.near
                    , isInit    : false
                    , domId     : "wrapCam_" + cam.camId
                    , rotation  : cam.rotation
                    , isUseControl: false
                    , calibrationTxt  : cam.calibration
                });
            });
        }

        page.data.task.taskInfo.taskCode = page.data.task.taskId;
        page.data.task.taskInfo.taskName = page.data.task.taskName;
        page.data.task.taskInfo.taskDescHTML = page.data.task.taskDescHTML;
        page.data.task.taskInfo.desFiles = data.desFil;
        page.data.task.taskInfo.uploadLinkUrl = data.uploadLinkUrl;
        page.data.task.taskInfo.desOrgnFile = page.data.task.attachedFileName;
        page.data.task.taskInfo.isSegmentation = data.prjWorkType == "3D" ? true : false;

        page.data.permissionCode = _common.nvl(data.permissionCode, "");
        page.data.permissionName = _common.nvl(data.permissionName, "");
        page.data.reqType = _common.nvl(data.reqType, "");

        page.param.projectId    = _common.nvl(data.projectId, "");
        page.param.taskId   = _common.nvl(data.taskId, "");

        page.constants.env = _common.nvl(data.activeProfile, "local");
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
        for (let i = 0; i < data.classVoList.length; i++) {
            let cls = data.classVoList[i];
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

            page.data.task.classes.push({
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
        }

        page.data.task.tags = [];
        if(data.tagList != null) {
            for (let i = 0; i < data.tagList.length; i++) {
                let tag = data.tagList[i];
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
                page.data.task.tags.push(tagData);
            }
        }
        page.data.task.errorCodeList = null;
        if (data.inspectionErrorList != null) {
            page.data.task.inspectionErrorList = data.inspectionErrorList;
        }
        page.data.authToken = _common.nvl(data.authToken, "");

        if(page.data.permissionCode != 'crowdWorker' && page.data.permissionCode != 'compWorker' && page.data.permissionCode != 'worker') {
            page.data.paging.perPaging = 100;
        } else {
            page.data.paging.perPaging = 10;
        }
    } catch (E) {
        log.error(E, "_pre_loader_data()");
    }
}
export { _pre_loader_data }