package com.infiniq.ams.standalone.domain.vo;


import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class ReviewImageVo {

    private String projectId;
    private String taskId;
    private String workTicketId;
    private String rawFileId;

    private String status;
    private String statusReview;
    private String statusInspect;

    private String annotatorId;
    private Integer countFail;
    private Integer countFailWorker;
    private String reviewerId;
    private String inspectorId;

    private String rawFilePath;
    private String rawFileName;
    private String path;
    private String fileName;
    private String originalFileName;
    private String originalFilePath;

    private String reviewMessage;
    private String reviewFailData;

    private String workedDatetime;
    private String reviewedDatetime;
    private String inspectedDatetime;

    private String currentDatetime;
    private String modifyDatetime;

    private List<ImageObjectVo> objectList;
    private List<ImageObjectTagVo> tagList;

    private List<ImageObjectVo> detectObjectList;
    private String inspErrList;
    private String objectGroupInfo;

    private String ocStatus;
    private String ocDatetime;
    private String ocId;

    private String inspectMessage;
    private String reviewFileName;
    private String attachFileId;
    private String workedDate;
    private String reviewFileUrl;

    private String classes;
    private String objectType;
    private Integer rn;
    private String content;
    private String reqType;
    private List<ClassCheckTaskVo> taskList;
//    private List<GlobalCameraVo> cameraImageList;

    @Data
    public static class workHistoryTypeVo {
        private String projectId;
        private String taskId;
        private String workTicketId;
        private String workHistoryType;
        private String annotatorId;
        private String reviewerId;
        private String registerDatetime;
    }
    private String masterId;
    private String masterComment;
    private String registerId;
//    private List<WorkspaceTaskTicketVo> listComment;
}

