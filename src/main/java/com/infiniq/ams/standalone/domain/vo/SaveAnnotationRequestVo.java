package com.infiniq.ams.standalone.domain.vo;

import lombok.Data;

import java.util.List;

@Data
public class SaveAnnotationRequestVo {
    private String workTicketId;
    private List<ImageObjectVo> objectList;
}

