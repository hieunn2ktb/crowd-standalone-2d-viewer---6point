package com.infiniq.ams.standalone.domain.service;

import com.infiniq.ams.standalone.domain.vo.*;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.ByteOrder;
import java.nio.MappedByteBuffer;
import java.nio.channels.FileChannel;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.*;

@Slf4j
@Service
public class WorkspaceService {

    public List<String> checkFile1(String folderPath) throws Exception {
        String imagePath = null;
        String cocoPath = null;
        File dir = new File(folderPath);
        if (!dir.exists() || !dir.isDirectory()) {
            throw new Exception("Invalid folder path: " + folderPath);
        }
        List<String> imagePaths = new ArrayList<>();
        //Scan folder and its subfolders
        Queue<File> queue = new LinkedList<>();
        queue.add(dir);
        while (!queue.isEmpty()) {
            File currentFolder = queue.poll();
            File[] files = currentFolder.listFiles();
            if (files != null) {
                for (File file : files) {
                    if (file.isDirectory()) {
                        queue.add(file);
                    } else {
                        String fileName = file.getName().toLowerCase();
                        //check if the file is an image file ( based on its name suffix)
                        if (isImageFile(fileName)) {
                            imagePaths.add(file.getPath());
                        }
                    }
                }
            }
        }
        return imagePaths;
    }


    public boolean checkFile(String folderPath) throws Exception {
        String imagePath = null;
        String cocoPath = null;
        File dir = new File(folderPath);
        if (!dir.exists() || !dir.isDirectory()) {
            throw new Exception("Invalid folder path: " + folderPath);
        }
        String[] folderList = dir.list();
        for (String folder : folderList) {
            if (folder.contains("coco")) {
                cocoPath = folderPath + File.separator + folder;
            }
        }
        if(cocoPath == null) {
            throw new Exception("Coco file not found in the specified path.");
        }

        List<String> imagePaths = new ArrayList<>();
        //Scan folder and its subfolders
        Queue<File> queue = new LinkedList<>();
        queue.add(dir);
        while (!queue.isEmpty()) {
            File currentFolder = queue.poll();
            File[] files = currentFolder.listFiles();
            if (files != null) {
                for (File file : files) {
                    if (file.isDirectory()) {
                        queue.add(file);
                    } else {
                        String fileName = file.getName().toLowerCase();
                        //check if the file is an image file ( based on its name suffix)
                        if (isImageFile(fileName)) {
                            imagePaths.add(file.getName());
                        }
                    }
                }
            }
        }
        return true;
    }


    private boolean isImageFile(String fileName) {
        return fileName.endsWith(".jpg") || fileName.endsWith(".jpeg") ||
                fileName.endsWith(".png");
    }

    public List<ReviewImageVo> getPagingData(TaskVo taskVo, List<ReviewImageVo>  sessionTask){
        List<ReviewImageVo> result = new ArrayList<>();
        int pageSize = 100;
        long pageIndex = taskVo.getPageIndex() - 1;

        //Calculate the start and end index for the current page
        int start = (int) (pageIndex * pageSize);
        int end = Math.min(start + pageSize, sessionTask.size());

        //check if the start index is within bounds
        if(start < sessionTask.size()) {
            result = sessionTask.subList(start, end);
        }
        return new ArrayList<>(result);
    }


 }
