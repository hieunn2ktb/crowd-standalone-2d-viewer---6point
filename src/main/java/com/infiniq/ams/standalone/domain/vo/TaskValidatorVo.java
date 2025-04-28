package com.infiniq.ams.standalone.domain.vo;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.sql.Timestamp;
import java.util.List;

@Data
@EqualsAndHashCode(callSuper = false)
public class TaskValidatorVo extends AbstractPagingRequestVo {
    private Long projectSeq;
    private Long taskSeq;
    private Integer orderSeq;
    private String projectId;
    private String taskId;
    private String taskName;
    private String workRuleApplyYn;
    private String ruleId;
    private String workRuleType;
    private String classId;
    private String tagId;
    private String numbering;
    private String letter;
    private String specialCharacter;
    private String registerDatetime;
    private String registerId;
    private String tagValue;
    private String redundancyCheck;
    private String name;
    private String tagName;
    private String className;
    private String tagClassName;
    private String procDatetime;
    private String reqStatus;
    private String reqType;
    private String statusOpen;
    private String searchType;
    private String searchVal;
    private String ruleType; /* 나중 제거 */
    private int passCnt;
    private int dataCount;

    private Timestamp startDatetime;


    private boolean result = false;

    private String origenTaskNumber;

    private String userId;
    private long totalCount;
    private List<String> rearrangeList;
    private List<String> minPicelCheckList;

    private String ruleName;

    private String classNumber;
    private String tagNumber;

}
