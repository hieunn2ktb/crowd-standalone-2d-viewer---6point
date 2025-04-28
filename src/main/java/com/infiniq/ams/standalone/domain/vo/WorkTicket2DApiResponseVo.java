package com.infiniq.ams.standalone.domain.vo;
import lombok.*;

import java.util.HashMap;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class WorkTicket2DApiResponseVo {
    public final static Integer DEFAULT_REVIEW_COUNT = 1;

    private String projectId;
    private String projectName;
    private String taskId;
    private String taskName;
    private String workTicketId;

    private String defTaskClassId;
    private String registerDatetime;
    private String registerId;
    private String modifyDatetime;
    private String statusOpen;
    private String taskDesc;

    private String prjWorkType;
    private String prjWorkDivision;

    // class, tag
    private List<TaskClassVo> classVoList;
    private List<TaskTagVo> tagVoList;
//
//    // dataVView Class, tag
//    private List<DataViewClassVo> classList;
//    private List<DataViewTagVo> tagList;

    private String compnayCode;
    private String taskType;
    private Integer startDatetimeInt;
    private Integer endDatetimeInt;
    private Integer workPoint;
    private Integer reviewPoint;
    private String attachFileName;

    // 검색 영역
    private String userNumber;
    private String userId;
    private String searchStatus;
    private String again;

    private Long totalImgCount;
    private Long openImgCount;
    private String attachFilePath;
    private String attachedFileName;
    private KeypointVo keypoint;

    // keypoint
    private List<KeypointVo> keypointVoList;

    // dataView keypoint
//    private List<DataViewKeyPointVo> keypointList;

    private Integer reviewAssignCnt;
    private String fileName;
    private String OriginalFileName;
    private String attachFileId;
    private String reworkYn;
    private String fileExt;
    private List<String> drawingToolList;
    private String taskCode;
    private String taskTalkYn = "N";
    private String minPixelSet;
    private Integer minPixelX;
    private Integer minPixelY;
    private String country;
    private String searchValue;
    private String searchType;
    private String inferenceUseYn = "N";
    private String modelNo;
    private String bboxRotateYn; // B.box, 4P.box 회전 YN
    private String reviewEndDatetime;
    private Integer ticketFileSize;
    private int dataDigit;
    private int limitWorkCnt;
    private int taskLevel = 1;

    // Task Async Request 관련
    private String reqId;        // 요청아이디
    private String reqType;      // Task 비동기 요청유형[]
    private String reqTypeStr;   // Task 비동기 요청유형[]
    private String reqUserId;    // 요청자아이디
    private String reqDatetime;  // 요청일시
    private String reqStatus;    // 요청상태코드[]
    private String reqStatusStr; // 요청상태코드[]
    private String procDatetime; // 처리일시
    private List<String> targetTaskNumberList;
//    private List<TaskInspectionErrVo> inspectionErrorList;

    // tool 관련 추가
    private boolean isDemo = false;
    private boolean isTaskOwner = false; // Task Inspector 권한(OLD) - 최종삭제 예정
    private boolean isCompReviewer = false; // Task Reviewer 여부
    private boolean isCompanyWorker = false; // Private Task Worker 여부
    private boolean isCrowdWorker = false; // Public Task Worker 여부
    private boolean addAssignImage = false;

    private boolean isCompMaster = false; // 기업 마스터 여부 (신규)
    private boolean isProjectOwner = false; // 프로젝트 매니저 여부 (신규)
    private boolean isCompInspector = false; // Task Inspector 여부(신규)

    private String permissionCode;
    private String permissionName;
    private String uploadLinkUrl;
    private List<String> imageServerNames;
    private List<String> imageServerUrls;
    private String userServer;
    private String userLocation;
    private String firstSearchFileName;
    private boolean reviewer = true;

    // inference
    private String tsIdx;
    private String imgPath;
    private String imgFileName;

    // ObjectCheck
    private String currentLocaleNm;

    private List<HashMap<String, String>> imageServers;
//    private List<TaskCameraVo> camList;
//    private List<TaskWorkRuleVo> taskValidatorList;
    private List<String> taskWorkRuleType;
    private List<TaskVo> taskList;
}
