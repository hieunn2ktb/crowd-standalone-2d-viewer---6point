package com.infiniq.ams.standalone.domain.vo;

import lombok.*;

import java.sql.Timestamp;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class TagSelectValueVo {
    private String    projectId;
    private String    tagId;
    private String    selectId;
    private String    selectName;
    private String    selectVal;
    private String    color;

    private String    registerId;
    private String    modifyId;
    private Timestamp registerDatetime;
    private Timestamp modifyDatetime;
}
