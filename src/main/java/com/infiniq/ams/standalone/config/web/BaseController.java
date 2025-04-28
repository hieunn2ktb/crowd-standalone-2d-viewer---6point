package com.infiniq.ams.standalone.config.web;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.URLConnection;

import org.springframework.core.env.Environment;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequiredArgsConstructor
public class BaseController {
    private final Environment environment;

    @RequestMapping({ "/", "/index" })
    public ModelAndView index() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("index");
        return mv;
    }

    @RequestMapping("/image/{folderName}/{number}/{mainFolder}/{rgbFolder}/{fileName}")
    public ResponseEntity<Resource> getImageFile(@PathVariable String folderName, @PathVariable String number, @PathVariable String mainFolder
            , @PathVariable String rgbFolder, @PathVariable String fileName) {
        String dataPath = environment.getProperty("standalone.data.path");

        String              contentType = null;
        InputStreamResource resource    = null;
        try {
            contentType = URLConnection.guessContentTypeFromName(fileName);

            File file = new File(dataPath + File.separator + folderName  +  File.separator + number + File.separator + mainFolder  + File.separator +  rgbFolder  + File.separator + fileName);
            if (!file.exists()) {
                return ResponseEntity.noContent().build();
            }

            resource = new InputStreamResource(new FileInputStream(file));
        } catch (IOException ex) {
            log.warn("Could not determine file type.");
        }

        if (contentType == null) {
            contentType = "application/octet-stream";
        }

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileName + "\"")
                .body(resource);
    }

    @RequestMapping("/pcd/{folderName}/{number}/{mainFolder}/{lidarFolder}/{fileName}")
    public ResponseEntity<Resource> getPcdFile(@PathVariable String folderName, @PathVariable String number, @PathVariable String mainFolder,
                                               @PathVariable String lidarFolder, @PathVariable String fileName) {
        String dataPath = environment.getProperty("standalone.data.path");

        String              contentType = null;
        InputStreamResource resource    = null;
        try {
            contentType = URLConnection.guessContentTypeFromName(fileName);

            File file = new File(dataPath + File.separator + folderName + File.separator + number
                    + File.separator + mainFolder + File.separator + lidarFolder + File.separator + fileName);
            if (!file.exists()) {
                return ResponseEntity.noContent().build();
            }

            resource = new InputStreamResource(new FileInputStream(file));
        } catch (IOException ex) {
            log.warn("Could not determine file type.");
        }

        if (contentType == null) {
            contentType = "application/octet-stream";
        }

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileName + "\"")
                .body(resource);
    }
}
