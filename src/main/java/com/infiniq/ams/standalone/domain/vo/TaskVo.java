package com.infiniq.ams.standalone.domain.vo;

import lombok.*;

import java.util.HashMap;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class TaskVo extends AbstractPagingRequestVo  {
    public final static Integer DEFAULT_REVIEW_COUNT = 1;

    private String    projectId;
    private String    projectName;
    private String    taskId;
    private String    taskName;
    private String    defTaskClassId;
    private String    workTicketId;
    private Long      cntImg;

    private String prjWorkType;
    private String prjWorkDivision;

    private List<ClassVo>   classVoList;
    private List<TagVo>     tagList;

    private String companyName;
    private String companyCode;
    private String companyType;
    private String taskType;

    private Integer totCnt;
    private Integer jobCnt;
    private Integer compCnt;
    private Integer per;
    private Integer num;
    private String  userId;
    private String  orgnFileName;
    private String  orgnFilePath;
    private String  attachFileId;

    private String reworkYn;
    private String fileext;
    private String taskCode;
    private String  minPixelSet;
    private Integer minPixelX;
    private Integer minPixelY;

    private KeypointVo keypoint;
    private List<KeypointVo> keypointVoList;

    private String permissionCode;
    private String permissionName;
    private List<String> imageServerNams;
    private List<String> imageServerUrls;
    private String  userServer;
    private String  userLocation;
    private Integer totalObj;
    private Integer totalCnt;
    private String  angle = "0";
    private String  coordinatesYn = "N";
    private String  reqType;
    private String  contents;

    List<HashMap<String, String>> imageServers;
    List<LidarDataVo> camList;
    List<WorkTicketApiResponseVo> workTicketApiResponseList;
}
