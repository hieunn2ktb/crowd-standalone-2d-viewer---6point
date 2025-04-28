package com.infiniq.ams.standalone.domain.vo;

import lombok.Data;

@Data
public class TaskClassVo {
    private Long projectSeq;
    private Long taskSeq;
    private String classId;
    private String color;
    private String hk;
    private String hkName;
    private int taskClassOrder;
    private String className;
    private String classValue;
    private Integer priority;
    private String width;
    private String height;
    private String depth;
    private String projectId;
    private String taskId;
}
