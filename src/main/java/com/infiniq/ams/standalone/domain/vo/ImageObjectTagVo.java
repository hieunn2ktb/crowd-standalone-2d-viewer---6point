package com.infiniq.ams.standalone.domain.vo;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class ImageObjectTagVo {
    private String projectId;
    private String taskNumber;
    private String taskId;
    private String tagNumber;
    private String tagId;
    private String imgNumber;
    private String workTicketId;
    private String imgObjectTagNumber;
    private String objectTagId;
    private String taskImgNumber;
    private String imgObjectNumber;
    private String objectId;
    private String imgObjectDivCd;
    private String tagTypeCd;
    private String val;
    private String name;
    private String tagName;
    private String color;
    private String tagValTypeCd;
    private String tagValueName;
    private String taskWorkTicketId;
}
