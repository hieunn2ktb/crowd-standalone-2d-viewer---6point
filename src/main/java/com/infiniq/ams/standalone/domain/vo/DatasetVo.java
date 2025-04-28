package com.infiniq.ams.standalone.domain.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class DatasetVo {
    private String datasetName;
    private String datasetPath;
    private String datasetUrl;
    private String issuedDatetime;
}
