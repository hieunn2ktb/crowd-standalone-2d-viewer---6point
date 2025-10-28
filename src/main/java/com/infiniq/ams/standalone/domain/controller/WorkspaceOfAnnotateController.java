package com.infiniq.ams.standalone.domain.controller;

import com.infiniq.ams.standalone.domain.service.WorkspaceOfAnnotateService;
import com.infiniq.ams.standalone.domain.service.WorkDataService;
import com.infiniq.ams.standalone.domain.vo.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@Slf4j
@RequiredArgsConstructor
@Controller
@RequestMapping("/annotate")
public class WorkspaceOfAnnotateController {

    private final WorkspaceOfAnnotateService workspaceOfAnnotateService;
    private final WorkDataService workDataService;

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

    @RequestMapping(value = {"/getComment"}, method = {RequestMethod.GET, RequestMethod.POST})
    @ResponseBody
    public CommonResponseVo<List<Map<String,Object>>> getComment(HttpServletRequest request){
        log.info("##########################################/apis/v1/workspace/annotate/getComment##########################################");
        CommonResponseVo<List<Map<String,Object>>> r = new CommonResponseVo<>();
        try{
            HttpSession                   session     = request.getSession();
            TaskVo                        sessionTask = (TaskVo) session.getAttribute(TASK_INFO_KEY);
            List<Map<String,Object>> listComment = workspaceOfAnnotateService.getComment(sessionTask);

            r.setResult(true);
            r.setData(listComment);
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
            r.setMessage("Invalid data.");
            r.setResult(false);
        }

        return r;
    }

    @RequestMapping(value = { "/save" }, method = { RequestMethod.POST })
    @ResponseBody
    public CommonResponseVo<Boolean> save(@RequestBody SaveAnnotationRequestVo req, HttpServletRequest request) {
        CommonResponseVo<Boolean> r = new CommonResponseVo<>();
        try {
            HttpSession session = request.getSession();
            TaskVo sessionTask = (TaskVo) session.getAttribute(TASK_INFO_KEY);
            List<ReviewImageVo> list = (List<ReviewImageVo>) session.getAttribute(DATA_LIST_KEY);
            boolean ok = workDataService.saveCocoAnnotations(sessionTask, req, list);
            r.setResult(ok);
            r.setData(ok);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            r.setMessage(e.getMessage());
            r.setResult(false);
        }
        return r;
    }

}
