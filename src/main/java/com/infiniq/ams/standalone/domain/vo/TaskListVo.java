package com.infiniq.ams.standalone.domain.vo;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(callSuper = true)
@EqualsAndHashCode(callSuper = false)
public class TaskListVo extends AbstractPagingRequestVo {

    private String                    projectId;
    private String                    taskId;
    private String                    workTicketId;
    private String                    rawFileId;
    private String                    workPosition;
    private String                    reqType;
    private String[]                  workTicketIds;
    private String[]                  filterValidation;

    private Integer                   objectCount;
    private String                    inspectionSysType;
    private String                    sort;
    private String[]                  classes;
    private String[]                  imgNumbers;
    private String[]                  imgNumberList;
    private List<String>              fileNameList;

    // file Upload
    private MultipartFile              uploadFile;
    private String                     uploadType;
    private String                     message;
    private String                     detailData;
    private String                     accessType;
    private Long                       attachGroupSeq;

    private String                     inspNgMessage;
    private String                     filterStatus;
    private String                     filterClass;
    private String                     filterTag;
    private String                     filterTagValue;
    private String                     filterObjectCount;
    private String                     fileName;
    private String                     orgnFilePath;
    private String                     orgnfileName;
    private String                     inspectMessage;
    private long                       perPage;
    private long                       totalCount;
    private List<LidarDataVo>          cameraImageList;
    private List<String>               errorCodeList;
    private List<String>               inspectNgPrjInspErNums;
}
