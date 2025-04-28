package com.infiniq.ams.standalone.domain.vo;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class SearchTaskDataVo {
    public final static Integer PAGE_PER = 10;

    public enum ACCESS_TYPE {
        TASK("task"), TASK_IMAGE("taskImg");

        final private String code;

        private ACCESS_TYPE(String code) {
            this.code = code;
        }

        public String getCode() {
            return this.code;
        }
    };

    public enum PERMISSION_TYPE {
        WORKER("worker", "Worker")
        , REVIEWER("reviewer", "Reviewer")
        , INSPECTOR("inspector", "Inspector")
        , MANAGER("manager", "Manager")
        , MASTER("master", "Master")
        ;
        final private String code;
        final private String name;

        private PERMISSION_TYPE(String code, String name) {
            this.code = code;
            this.name = name;
        }

        public String getCode() {
            return this.code;
        }

        public String getName() {
            return this.name;
        }

        public boolean equals(String code) {
            return this.code.equals(code);
        }
    };

    private String projectId;
    private String taskId;
    private String workTicketId;
    private String rawFileId;
    private String objectId;
    private String reviewMessage;

    private String  accessType;
    private String  userNumber;
    private String  userId;
    private String  companyCode;
    private boolean isDemo          = false;
    private boolean isTaskOwner     = false; // Task Inspector 권한(OLD) - 최종삭제 예정
    private boolean isCompReviewer  = false; // Task Reviewer 여부
    private boolean isCompanyWorker = false; // Private Task Worker 여부
    private boolean isCrowdWorker   = false; // Public Task Worker 여부
    private boolean addAssignImage  = false;

    private boolean isCompMaster    = false; // 기업 마스터 여부 (신규)
    private boolean isProjectOwner  = false; // 프로젝트 매니저 여부 (신규)
    private boolean isCompInspector = false; // Task Inspector 여부(신규)

    private String reqType;

    private Integer      taskReviewAssignAmount;
    private List<String> imgNumberList;
    private List<String> fileNameList;

    private String   filterStatus;
    private String   filterClass;
    private String   filterObjectCount;
    private Integer  pageIndex;
    private String[] imgNumbers;
    private boolean filterObjectCheck = false;
    private boolean filterClassCheck = false;

    private TaskVo taskInfo;

    private String annotatorId;
    private String reviewerId;
    private String inspectorId;
    private String historyStatus;
    private String attachFileId;

    private String[] classes;
    private Integer  objectCount;
    private String   fileName;
    private Integer  perPage;
    private String   sort;

    private String detailData;

    private String inspectionId;

    private String viewType;
    private Integer perPaging;

    private String[] filterValidation;
    private String inspectionSysType;

    // CO 관련 항목 추가, 홍원기, 2022-06-03
    private String coProjectKey;
    private String coTaskKey;
    private String coUserId;
    private String coProjectName;
    private String coTaskName;

    // file Upload
    private MultipartFile uploadFile;
    private String uploadType;

    private String currentLocaleNm;

}
