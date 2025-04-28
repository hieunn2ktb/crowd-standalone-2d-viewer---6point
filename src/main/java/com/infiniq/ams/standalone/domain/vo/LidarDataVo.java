package com.infiniq.ams.standalone.domain.vo;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper=false)
public class LidarDataVo {
    private String projectId;
    private String workTicketId;
    private String rawFileId;
    private String imgNumber;
    private String camNumber;
    private String taskId;
    private String camId;
    private String path;
    private String cameraName;
    private String fileName;
    private String originalFileName;
    private String originalFilePath;
    private String orgnFileName;
    private String orgnFilePath;

    private String rowNum;
    private String position;
    private String fov;
    private String lookat;
    private String far;
    private String near;
    private String up;
    private String aspect;
    private String name;
    private String fileExt;
    private int countUseTask;
    private String calibration;
    private String calibrationTxt;
    private String rotation;

}
