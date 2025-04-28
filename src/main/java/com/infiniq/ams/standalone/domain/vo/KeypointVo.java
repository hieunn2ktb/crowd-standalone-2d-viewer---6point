package com.infiniq.ams.standalone.domain.vo;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class KeypointVo {
    private String  projectId;
    private String  taskId;
    private String  keypointId;
    private String  keypointName;
    private Integer pointsLength;
    private String  pointsPosition;
    private String  relationship;
    private String  registerId;
    private String  modifyId;
    private Integer countUseTask;

    @Builder.Default
    private String radiusYn = "N";

    private String magicYn;

    private String roi;
}
