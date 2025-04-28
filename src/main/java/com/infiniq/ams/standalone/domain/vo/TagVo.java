package com.infiniq.ams.standalone.domain.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.sql.Timestamp;
import java.util.List;

@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class TagVo {
    private String projectId;
    private String taskId;
    private String taskTagId;
    private String tagId;
    private String tagTypeCd;
    private String tagTypeCdNm;
    private String tagValTypeCd;
    private String tagValTypeCdNm;
    private String tagName;
    private String hk;
    private String color;

    private String tagCode;
    private String hkName;

    private List<TagClassVo> tagClassVoList;
    private List<TagSelectValueVo> tagSelectValueVoList;

    private String numbering = "N";
    private String letter = "N";
    private String specialCharacter = "N";

    private int numberingLength = -1;
    private int letterLength = -1;
    private int specialCharacterLength = -1;

    private Timestamp registerDatetime;
    private String registerId;
    private Timestamp modifyDatetime;
    private String modifyId;
    private String matchClass;
    private List<String> tagValueList;
    private List<TagClassVo> tagList;
}
