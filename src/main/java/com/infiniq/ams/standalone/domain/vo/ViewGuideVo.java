package com.infiniq.ams.standalone.domain.vo;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class ViewGuideVo {

    private Boolean isLoading = false;
//    private Boolean isBlank = false;
//    private Boolean isCookie = false;
    private String option = "default";
}
