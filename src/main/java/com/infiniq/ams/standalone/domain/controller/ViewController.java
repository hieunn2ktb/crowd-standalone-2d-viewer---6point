package com.infiniq.ams.standalone.domain.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.infiniq.ams.standalone.domain.service.ProjectService;
import com.infiniq.ams.standalone.domain.service.WorkDataService;
import com.infiniq.ams.standalone.domain.vo.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.infiniq.ams.standalone.domain.service.DataSelectService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/view")
public class ViewController {

    private final DataSelectService  dataSelectService;
    private final ProjectService     projectService;
    private final WorkDataService    workDataService;

    private final static String TASK_INFO_KEY = "TaskInformation";
    private final static String DATA_LIST_KEY = "DataList";
    private final static String FILE_NAME_KEY = "fileName";

    @Value("${standalone.data.path}")
    private String rootPath;

    @RequestMapping("/loading")
    public ModelAndView loading(ViewGuideVo viewGuideVo) {
        ModelAndView mv = new ModelAndView();
        mv.addObject("info",viewGuideVo);
        mv.setViewName("/view/loadingGuide");
        return mv;
    }

    //guide view
    @RequestMapping("/guide")
    public ModelAndView guide() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("/view/blankGuide");
        return mv;
    }

    //data selector view
    @RequestMapping("/dataSelector")
    public ModelAndView dataSelector() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("/view/dataSelector");
        mv.addObject("dataPath",rootPath);
        return mv;
    }

    @RequestMapping("/procListOfDataset")
    @ResponseBody
    public CommonResponseVo<List<DatasetVo>> procListOfDataset(HttpServletRequest request) {
        CommonResponseVo<List<DatasetVo>> res = new CommonResponseVo<>();

        HttpSession session = request.getSession();
        session.removeAttribute(TASK_INFO_KEY);
        session.removeAttribute(DATA_LIST_KEY);

        List<DatasetVo> dataList = dataSelectService.listOfDataset();
        res.setData(dataList);

        return res;
    }

    @RequestMapping("/procListOfSubDataset")
    @ResponseBody
    public CommonResponseVo<List<DatasetVo>> procListOfSubDataset(String datasetName,HttpServletRequest request) {
        CommonResponseVo<List<DatasetVo>> res = new CommonResponseVo<>();

        HttpSession session = request.getSession();
        session.removeAttribute(TASK_INFO_KEY);
        session.removeAttribute(DATA_LIST_KEY);

        List<DatasetVo> dataList = dataSelectService.listOfDataset(datasetName);
        res.setData(dataList);

        return res;
    }


    //just return view
    @RequestMapping("/dataDetail")
    public String dataDetail(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        TaskVo data = (TaskVo) session.getAttribute(TASK_INFO_KEY);
        if (data == null) {
            return "redirect:/view/dataSelector";
        }
        model.addAttribute("totalFiles",data.getTotalCnt());
        model.addAttribute("totalObjects",data.getTotalObj());
        model.addAttribute("rootPath",rootPath + File.separator);
        model.addAttribute("fileName",data.getTaskName());

        return "/view/dataDetail";
    }

    @RequestMapping("/procListOfClassset")
    @ResponseBody
    public CommonResponseVo<TaskVo> procListOfClassset(String fileName,HttpServletRequest request) {
        CommonResponseVo<TaskVo> res = new CommonResponseVo<>();

        try {
            HttpSession session = request.getSession();
            session.removeAttribute(DATA_LIST_KEY);
            session.removeAttribute(FILE_NAME_KEY);
            session.removeAttribute(TASK_INFO_KEY);

            // prepare project data for showing information
            TaskVo taskVo     = projectService.getProjectInfo(fileName);
            List<ReviewImageVo>  workedList = workDataService.getWorkedList(taskVo, fileName);
            taskVo.setTotalObj(workDataService.getTotalObj());
            session.setAttribute(TASK_INFO_KEY, taskVo);
            session.setAttribute(FILE_NAME_KEY, fileName);
            session.setAttribute(DATA_LIST_KEY, workedList);
            // prepare work data for opening tool
            res.setData(taskVo);
            res.setResult(true);
        } catch (Exception e) {
            res.setResult(false);
            res.setMessage(e.getMessage());
        }
        return res;
    }

    @RequestMapping("/procListOfClass")
    @ResponseBody
    public CommonResponseVo<HashMap<String,Integer>> procListOfClass(HttpServletRequest request) {
        CommonResponseVo<HashMap<String,Integer>> res = new CommonResponseVo<>();

        try {
            HttpSession session = request.getSession();
            TaskVo taskVo   = (TaskVo) session.getAttribute(TASK_INFO_KEY);
            String fileName = session.getAttribute(FILE_NAME_KEY).toString();

            HashMap<String,Integer> classMap = workDataService.getClassList(taskVo, fileName);

            res.setData(classMap);
            res.setResult(true);
        } catch (Exception e) {
            res.setResult(false);
            res.setMessage(e.getMessage());
        }
        return res;
    }

    @RequestMapping("/procListOfClassTag")
    @ResponseBody
    public CommonResponseVo<ClassVo> procListOfClassTag(String className,HttpServletRequest request) {
        CommonResponseVo<ClassVo> res = new CommonResponseVo<>();

        try {
            HttpSession session = request.getSession();
            TaskVo taskVo   = (TaskVo) session.getAttribute(TASK_INFO_KEY);
            String fileName = session.getAttribute(FILE_NAME_KEY).toString();

            ClassVo classTagList = workDataService.getClassTagList(className, taskVo, fileName);
//            ClassVo classTagList = new ClassVo();

            res.setData(classTagList);
            res.setResult(true);
        } catch (Exception e) {
            res.setResult(false);
            res.setMessage(e.getMessage());
        }
        return res;
    }

    @RequestMapping("/procListOfTag")
    @ResponseBody
    public CommonResponseVo<List<TagVo>> procListOfTag(@RequestParam String classId,@RequestParam String folderPath , HttpServletRequest request) {
        CommonResponseVo<List<TagVo>> res = new CommonResponseVo<>();

        try {
            HttpSession session  = request.getSession();
            TaskVo      taskVo   = (TaskVo) session.getAttribute(TASK_INFO_KEY);

            List<TagVo> tagList  = workDataService.getTagList(classId,folderPath,taskVo);
//            List<TagVo> tagList  = new ArrayList<>();

            res.setData(tagList);
            res.setResult(true);
        } catch (Exception e) {
            res.setResult(false);
            res.setMessage(e.getMessage());
        }
        return res;
    }

}
