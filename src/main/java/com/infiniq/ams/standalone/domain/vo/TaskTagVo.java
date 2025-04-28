package com.infiniq.ams.standalone.domain.vo;

import lombok.Data;

import java.util.List;

@Data
public class TaskTagVo {
    private Long projectSeq;
    private Long taskSeq;
    private String tagId;
    private String color;
    private String hk;
    private String hkName;
    private String tagTypeCd;
    private String tagName;
    private String tagTypeCdNm;
    private String tagValTypeCd;
    private String tagValTypeCdNm;
    private String matchClass;
    private String numbering;
    private String letter;
    private String specialCharacter;
    private String numberingLength;
    private String letterLength;
    private String specialCharacterLength;
    private String projectId;
    private String taskId;
    private List<TagSelectVo> tagSelectValueVoList;
    private List<ClassTagVo> tagClassVoList;
}
