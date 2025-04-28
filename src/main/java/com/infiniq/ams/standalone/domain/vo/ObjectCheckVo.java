package com.infiniq.ams.standalone.domain.vo;

import lombok.Data;

import java.util.List;

@Data
public class ObjectCheckVo {
    private String projectId;
    private String taskId;
    private String workTicketId;
    private String objectId;
    private String userId;
    private String detectObjectId;
    private long inferenceObjectSeq;
    private long projectSeq;
    private List<String> taskIdList;
}
