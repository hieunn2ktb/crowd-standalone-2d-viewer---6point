package com.infiniq.ams.standalone.domain.controller;

import com.infiniq.ams.standalone.domain.service.WorkspaceOfAnnotateService;
import com.infiniq.ams.standalone.domain.vo.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Controller
@RequestMapping("/annotate")
public class WorkspaceOfAnnotateController {

    private final WorkspaceOfAnnotateService workspaceOfAnnotateService;

    private final static String TASK_INFO_KEY = "TaskInformation";
    private final static String DATA_LIST_KEY = "DataList";

    @RequestMapping(value = { "/list" }, method = { RequestMethod.GET, RequestMethod.POST })
    @ResponseBody
    public CommonResponseVo<List<WorkTicketApiResponseVo>> list(TaskVo taskVo,HttpServletRequest request) {
        log.info("##########################################/apis/v1/workspace/annotate/list##########################################");
        CommonResponseVo<List<WorkTicketApiResponseVo>> r = new CommonResponseVo<>();
        try {
            HttpSession                   session     = request.getSession();
            TaskVo                        sessionTask = (TaskVo) session.getAttribute(TASK_INFO_KEY);

            List<WorkTicketApiResponseVo> list = workspaceOfAnnotateService.selectComment((List<WorkTicketApiResponseVo>) session.getAttribute(DATA_LIST_KEY), sessionTask);

            if (list.size() > 0) {
                long totalCount = list.size();

                PagingVo paging = new PagingVo(totalCount, taskVo);
                r.setPaging(paging);
            }

            r.setResult(true);
            r.setData(list);

        } catch (Exception e) {
            log.info(e.getMessage());
            r.setMessage("유효하지 않은 데이터입니다.");
            r.setResult(false);
        }

        return r;
    }

    @RequestMapping(value = { "/get" }, method = { RequestMethod.GET, RequestMethod.POST })
    @ResponseBody
    public CommonResponseVo<WorkTicketApiResponseVo> get(TaskVo taskVo,HttpServletRequest request) {
        log.info("##########################################/apis/v1/workspace/annotate/get##########################################");
        CommonResponseVo<WorkTicketApiResponseVo> r = new CommonResponseVo<>();
        try {

            HttpSession session = request.getSession();
            List<WorkTicketApiResponseVo> list = (List<WorkTicketApiResponseVo>) session.getAttribute(DATA_LIST_KEY);
            TaskVo sessionTask = (TaskVo) session.getAttribute(TASK_INFO_KEY);

            WorkTicketApiResponseVo WorkTicketApiResponseVo = workspaceOfAnnotateService.get(taskVo,list,sessionTask);

            r.setData(WorkTicketApiResponseVo);
            r.setResult(true);
        } catch (Exception e) {
            log.info(e.getMessage());
            r.setMessage("Invalid data.");
            r.setResult(false);
        }

        return r;
    }

    @RequestMapping(value = { "/saveComment" }, method = { RequestMethod.GET, RequestMethod.POST })
    @ResponseBody
    public CommonResponseVo<Boolean> saveComment(TaskVo taskVo,HttpServletRequest request) {
        log.info("##########################################/apis/v1/workspace/annotate/saveComment##########################################");
        CommonResponseVo<Boolean> r = new CommonResponseVo<>();
        try {

            HttpSession session = request.getSession();
            TaskVo sessionTask = (TaskVo) session.getAttribute(TASK_INFO_KEY);

            Boolean result = workspaceOfAnnotateService.saveComment(sessionTask, taskVo);

            r.setData(result);
            r.setResult(result);
        } catch (Exception e) {
            log.info(e.getMessage());
            r.setMessage("유효하지 않은 데이터입니다.");
            r.setResult(false);
        }

        return r;
    }

}
