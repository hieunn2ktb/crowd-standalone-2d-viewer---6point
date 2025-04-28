package com.infiniq.ams.standalone.domain.vo;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class AccessToolsRequestVo {

    private String type;
    private String accessType;
    private String reqType;
    private String projectGroupId;
    private String projectId;
    private String taskId;
    private String taskNumber;
    private String token;
    private String pageNum;
    private String imgNumber;
    private String fileName;
    private String appType;
    private String aggregateSeq;
    private String componentSeq;
    private String workType;
    private String angle = "0";
    private String coordinatesYn = "N";

}
