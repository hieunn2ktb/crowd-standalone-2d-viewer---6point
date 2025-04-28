package com.infiniq.ams.standalone.domain.controller;

import com.infiniq.ams.standalone.domain.service.WorkspaceService;
import com.infiniq.ams.standalone.domain.vo.CommonResponseVo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RequestMapping("/validation")
@Controller
public class ValidationController {

        private final WorkspaceService workspaceService;

        @Value("${standalone.data.path}")
        private String rootPath;

        @RequestMapping(value = { "/checkFile" }, method = { RequestMethod.GET, RequestMethod.POST })
        @ResponseBody
        public CommonResponseVo<List<String>> checkProjectJson(String fileName, HttpServletRequest request) {
            log.info("##########################################/validation/checkFile##########################################");
            CommonResponseVo<List<String>> r = new CommonResponseVo<>();
            try {
                
                // pcd 생성 및 파일 검사
                List<String> result = workspaceService.checkFile1(rootPath + File.separator + fileName);
                r.setData(result);
            } catch (Exception e) {
                log.info(e.getMessage());
                r.setMessage(e.getMessage());
                r.setResult(false);
            }
            return r;
        }

    @RequestMapping(value = { "/checkFile2d" }, method = { RequestMethod.GET, RequestMethod.POST })
    @ResponseBody
    public CommonResponseVo<String> checkProjectJson2d(String fileName, HttpServletRequest request) {
        log.info("##########################################/validation/checkFile##########################################");
        CommonResponseVo<String> r = new CommonResponseVo<>();
        try {

            // Create and inspect pcd files
            boolean result = workspaceService.checkFile(rootPath + File.separator + fileName);
            r.setResult(result);

        } catch (Exception e) {
            log.info(e.getMessage());
            r.setMessage(e.getMessage());
            r.setResult(false);
        }

        return r;
    }

}
