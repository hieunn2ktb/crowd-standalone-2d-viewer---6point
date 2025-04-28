package com.infiniq.ams.standalone.domain.controller;

import com.infiniq.ams.standalone.domain.vo.*;
import com.infiniq.ams.standalone.helper.ObjectCopyHelper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Controller
@RequestMapping("/task")
public class WorkspaceController {

    private final ObjectCopyHelper objectCopyHelper;

    private final static String TASK_INFO_KEY = "TaskInformation";
    private final static String DATA_LIST_KEY = "DataList";

    @RequestMapping(value = { "/get" }, method = { RequestMethod.GET, RequestMethod.POST })
    @ResponseBody
    public CommonResponseVo<WorkTicket2DApiResponseVo> get(HttpServletRequest request){
        CommonResponseVo<WorkTicket2DApiResponseVo> r = new CommonResponseVo<>();
        try {
            WorkTicket2DApiResponseVo task = new WorkTicket2DApiResponseVo();
            HttpSession session = request.getSession();
            TaskVo taskInfo = (TaskVo) session.getAttribute(TASK_INFO_KEY);

            TaskVo data = new TaskVo();
            data.setProjectId(taskInfo.getProjectId());
            data.setTaskId(taskInfo.getTaskId());
            task = objectCopyHelper.copyObject(taskInfo, WorkTicket2DApiResponseVo.class);
            task.setTaskId(taskInfo.getTaskId());
            task.setDefTaskClassId(taskInfo.getDefTaskClassId());

            r.setData(task);
            r.setResult(true);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            r.setResult(false);
            r.setMessage(e.getMessage());
        }
        return r;
    }

    //List task image, classes, tags
    @RequestMapping(value = { "/image-detail" }, method = { RequestMethod.GET, RequestMethod.POST })
    @ResponseBody
    public CommonResponseVo<ReviewImageListVo> imagesDetail(TaskVo taskVo, HttpServletRequest request) {
        log.info("##########################################/apis/v1/workspace/annotate/list##########################################");
        CommonResponseVo<ReviewImageListVo> r = new CommonResponseVo<>();
        try {
            ReviewImageListVo reviewImageListVo = new ReviewImageListVo();

            HttpSession                   session     = request.getSession();
            List<ReviewImageVo> sessionTask = (List<ReviewImageVo>) session.getAttribute(DATA_LIST_KEY);
            reviewImageListVo.setReviewImageList(sessionTask);
            r.setResult(true);
            r.setData(reviewImageListVo);

        } catch (Exception e) {
            log.info(e.getMessage());
            r.setMessage("Invalid data.");
            r.setResult(false);
        }

        return r;
    }

    @RequestMapping(value = { "/get3d" }, method = { RequestMethod.GET, RequestMethod.POST })
    @ResponseBody
    public CommonResponseVo<TaskVo> getTaskInfo(HttpServletRequest request) {
        log.info("##########################################/apis/v1/workspace/task/get##########################################");
        CommonResponseVo<TaskVo> r = new CommonResponseVo<>();
        try {

            HttpSession session = request.getSession();
            TaskVo taskInfo = (TaskVo) session.getAttribute(TASK_INFO_KEY);

            if (taskInfo != null) {
                r.setResult(true);
                r.setData(taskInfo);
            } else {
                r.setResult(false);
                r.setMessage("Invalid data.");
            }

        } catch (Exception e) {
            log.info(e.getMessage());
            r.setMessage("Invalid data.");
            r.setResult(false);
        }

        return r;
    }

}
