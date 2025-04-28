package com.infiniq.ams.standalone.domain.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class IdGenerateService {
    private final int PROJECT_ID_LENGTH     = 20;
    private final int TASK_ID_LENGTH        = 20;
    private final int WORK_TICKET_ID_LENGTH = 20;
    private final int CLASS_ID_LENGTH       = 20;
    private final int TAG_ID_LENGTH         = 20;
    private final int CAM_ID_LENGTH         = 20;
    private final int OBJ_ID_LENGTH         = 20;
    private final int OBJ_TAG_ID_LENGTH     = 20;



    public String generateProjectId() {
        String prefix = "p" + Long.toString(System.currentTimeMillis());
        return prefix + RandomStringUtils.randomAlphanumeric(PROJECT_ID_LENGTH - prefix.length()).toLowerCase();
    }

    public String generateTaskId() {
        String prefix = "t" + Long.toString(System.currentTimeMillis());
        return prefix + RandomStringUtils.randomAlphanumeric(TASK_ID_LENGTH - prefix.length()).toLowerCase();
    }

    public String generateWorkTicketId() {
        String prefix = "w" + Long.toString(System.currentTimeMillis());
        return prefix + RandomStringUtils.randomAlphanumeric(WORK_TICKET_ID_LENGTH - prefix.length()).toLowerCase();
    }

    public String generateClassId() {
        String prefix = "cls" + Long.toString(System.currentTimeMillis());
        return prefix + RandomStringUtils.randomAlphanumeric(CLASS_ID_LENGTH - prefix.length()).toLowerCase();
    }

    public String generateTagId() {
        String prefix = "tag" + Long.toString(System.currentTimeMillis());
        return prefix + RandomStringUtils.randomAlphanumeric(TAG_ID_LENGTH - prefix.length()).toLowerCase();
    }

    public String generateCamId() {
        String prefix = "wc" + Long.toString(System.currentTimeMillis());
        return prefix + RandomStringUtils.randomAlphanumeric(CAM_ID_LENGTH - prefix.length()).toLowerCase();
    }

    public String generateOjbectId() {
        String prefix = "dobj" + Long.toString(System.currentTimeMillis());
        return prefix + RandomStringUtils.randomAlphanumeric(OBJ_ID_LENGTH - prefix.length()).toLowerCase();
    }


    public String generateObjectTagId() {
        String prefix = "dtag" + Long.toString(System.currentTimeMillis());
        return prefix + RandomStringUtils.randomAlphanumeric(OBJ_TAG_ID_LENGTH - prefix.length()).toLowerCase();
    }



}
