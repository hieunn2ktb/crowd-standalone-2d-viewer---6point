package com.infiniq.ams.standalone.domain.vo;

import lombok.Data;

import java.util.List;

@Data
public class ClassCheckTaskVo {
    private long projectSeq;
    private long taskSeq;
    private String projectId;
    private String taskId;
    private String workTicketId;
    private String classes;
    private List<String> classList;
    private List<String> workTicketList;
}
