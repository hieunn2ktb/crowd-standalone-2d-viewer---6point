package com.infiniq.ams.standalone.domain.controller;

import com.infiniq.ams.standalone.domain.vo.AccessToolsRequestVo;
import com.infiniq.ams.standalone.domain.vo.TaskVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
@Slf4j
@RequestMapping("/annotation")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AnnotationController {

    private final static String TASK_INFO_KEY = "TaskInformation";

    @RequestMapping(value = "/tool", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView workLidar(AccessToolsRequestVo param, HttpServletRequest request) {

        HttpSession session = request.getSession();

        TaskVo taskInfo = (TaskVo) session.getAttribute(TASK_INFO_KEY);
        taskInfo.setAngle(param.getAngle());
        taskInfo.setCoordinatesYn(param.getCoordinatesYn());
        session.setAttribute(TASK_INFO_KEY, taskInfo);

        ModelAndView mv = new ModelAndView();
        mv.setViewName("/tool/tool2d");
        mv.addObject("param", param);
        log.debug(param.toString());
        return mv;
    }

    @RequestMapping(value = "/tool2d", method = {RequestMethod.POST,RequestMethod.GET})
    public ModelAndView tool2d(AccessToolsRequestVo param, HttpServletRequest request) {

        HttpSession session = request.getSession();

        TaskVo taskInfo = (TaskVo) session.getAttribute(TASK_INFO_KEY);
        taskInfo.setAngle(param.getAngle());
        taskInfo.setCoordinatesYn(param.getCoordinatesYn());
        session.setAttribute(TASK_INFO_KEY, taskInfo);

        ModelAndView mv = new ModelAndView();
        mv.setViewName("/tool/tool2d");
        mv.addObject("param", param);
        log.debug(param.toString());
        return mv;
    }


}
