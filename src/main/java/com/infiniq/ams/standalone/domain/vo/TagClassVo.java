package com.infiniq.ams.standalone.domain.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.sql.Timestamp;

@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class TagClassVo {
    private String    projectId;
    private String    tagId;
    private String    tagName;
    private String    classId;
    private String    className;
    private String    number;
    private String    taskTagNumber;
    private String    registerId;
    private String    modifyId;
    private Integer   dataQty = 0;
    private Timestamp registerDatetime;
    private Timestamp modifyDatetime;
}
