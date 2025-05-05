package com.infiniq.ams.standalone.domain.vo;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

import java.sql.Timestamp;
import java.util.List;

@Slf4j
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class ImageObjectVo implements Comparable<ImageObjectVo> {
    private String    projectId;
    private String    taskNumber;
    private String    taskId;
    private String    imgNumber;
    private String    workTicketId;
    private String    imgObjectNumber;
    private String    objectId;
    private String    imgObjectLocation;
    private String    objectLocation;
    private String    objectTypeCd;
    private String    objectType;
    private String    statusOc;
    private long      orderSeq;
    private long      objectOrder;
    private Timestamp registerDatetime;
    private String    registerId;
    private Timestamp modifyDatetime;
    private String    modifyId;
    private String    groupId;
    private String    keypointNumber;
    private String    keypointId;

    private String classNumber;
    private String classId;
    private String className;
    private String color;
    private String hk;

    private String imgObjectBoxLocation;
    private String imgObjectPolygonLocation;
    private float iouPercent;
    private String matchtaskId;
    private String matchworkTicketId;
    private String matchObjectNumber;
    private boolean isMatchClass;
    private String status;

    private List<ImageObjectTagVo> tagList;

    @Override
    public int compareTo(ImageObjectVo o) {
        int resultInt = -1;
        if (Long.parseLong(this.imgObjectNumber.substring(3, 20)) > Long.parseLong(o.imgObjectNumber.substring(3, 20))) {
            resultInt = 1;
        } else if (Long.parseLong(this.imgObjectNumber.substring(3, 20)) == Long.parseLong(o.imgObjectNumber.substring(3, 20))) {
            resultInt = 0;
        }

        return resultInt;
    }
}
