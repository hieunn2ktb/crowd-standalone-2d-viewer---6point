package com.infiniq.ams.standalone.domain.vo;

import lombok.*;

import java.util.HashMap;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(callSuper = true)
@EqualsAndHashCode(callSuper = false)
public class WorkTicketApiResponseVo {
    private long totalCount; // 데이타 Data Count

    private String projectId;
    private String taskNumber;
    private String taskId;
    private String taskName;
    private String workTicketId;
    private List workFileList;
    private String rawFileId;

    private String         objGrpList;
    private String         objectGroupInfo;
    private List<ImageObjectVo>   objectList;
    private List<ImageObjectTagVo>   tagList;
    private List<String>   classList;
    private List<LidarDataVo> cameraImageList;

    //Used in annotate/list
    private String imgNumber;
    private String path;
    private String fileName;
    private String orgnFilePath;
    private String orgnfileName;
    private String annotatorId;
    private String reviewerId;
    private String inspectorId;
    private String updateDatetime;
    private String currentDatetime;
    private String workType;
    private String status;
    private String statusReview;
    private String countFail;
    private String workedDatetime;
    private String reviewedDatetime;
    private String statusName;

    private String firstSearchFileName;
    private String message;
    private String workedDate;
    private String reviewAttachGroupSeq;
    private String fileOrgnName;
    private String detailData;

    private String uploadUrl;
    private String statusInsp;
    private String inspNgMessage;
    private String inspErrList;

    private String currentLocaleNm;
    private String userLocation;
    private List<String> imageServerNames;
    private List<String> imageServerUrls;
    List<HashMap<String, String>> imageServers;
    private String projectVo;
    private Integer countFailWorker;
    private String inspDatetime;
    private String[] classes;
    private boolean isMatchClass;
    private String statusOc;
    private String content;

    //

}
