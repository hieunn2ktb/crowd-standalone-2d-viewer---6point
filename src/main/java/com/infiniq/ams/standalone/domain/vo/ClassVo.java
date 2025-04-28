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
public class ClassVo {
    private String projectId;
    private String taskId;
    private String classId;
    private String className;
    private String classValue;
    private String color;
    private String hk;
    private String hkName;
    private String value;

    private String registerId;
    private String modifyId;
    private Timestamp registerDatetime;
    private Timestamp modifyDatetime;

    private String desc;
    private String hkey;
    private String name;
    private String hkeyCode;
    private String taskYN;

    public int num;

    private String width;
    private String height;
    private String depth;

    private List<TagVo> classTagList;
    private Integer totalCnt;
    private Integer totalObj;
    private Integer tagCnt;

}
