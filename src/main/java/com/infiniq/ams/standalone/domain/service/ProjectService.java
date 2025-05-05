package com.infiniq.ams.standalone.domain.service;

import com.infiniq.ams.standalone.domain.vo.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.List;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Slf4j
@Service
@RequiredArgsConstructor
public class ProjectService {

    @Value("${standalone.data.path}")
    private String rootPath;

    private final IdGenerateService idGenerateService;
    private final UtilService utilService;

    private List<String> truncationList           = new ArrayList<>();
    private List<String> occlusionList            = new ArrayList<>();
    private List<String> sideList                 = new ArrayList<>();

    // read tag from json file ( based on "attribute")
    private final Set<String> tagListString            = new HashSet<>();
    private final Map<String, Set<String>> tagValueMap = new HashMap<>();

    public TaskVo getProjectInfo(String fileName) throws Exception {
        int totalObj     = 0;
        String folderPath = rootPath + File.separator + fileName;
        List<KeypointVo> keypointVoList = new ArrayList<>();
        TaskVo taskVo = new TaskVo();

        taskVo.setProjectId(idGenerateService.generateProjectId());
        taskVo.setTaskId(idGenerateService.generateTaskId());

        String[] pathSpl  = folderPath.split(Pattern.quote("\\"));
        String   taskName = pathSpl[pathSpl.length -1];
        taskVo.setTaskName(taskName);
        taskVo.setPermissionName("Mster");
        taskVo.setPermissionCode("master");
        taskVo.setReqType("master");

        // Temporary due to image path
        List<String> imageServerNams = new ArrayList<>();
        imageServerNams.add("kr");
        taskVo.setImageServerNams(imageServerNams);

        List<String> imageServerUrls = new ArrayList<>();
        imageServerUrls.add("");
        taskVo.setImageServerUrls(imageServerUrls);

        HashMap<String, String> imageServer = new HashMap<>();
        imageServer.put("name","KR");
        imageServer.put("url","");

        List<HashMap<String, String>> imageServers = new ArrayList<>();
        imageServers.add(imageServer);
        taskVo.setImageServers(imageServers);

        //Retrieve the folder list, read the json export file
        File     dir        = new File(folderPath);
        String[] folderList = dir.list();
        String cocoExportPath           = "";
        assert folderList != null;
        for (String file : folderList) {
            if (file.contains(".json")) {
                cocoExportPath = folderPath + File.separator + file;
                break;
            }
        }
        //Read json file
        File            jsonFile        = new File(cocoExportPath);
        FileInputStream inputStream = new FileInputStream(jsonFile);
        // Convert to JSON string using InputStream
        String jsonContent = new BufferedReader(new InputStreamReader(inputStream))
                .lines().collect(StringBuilder::new, StringBuilder::append, StringBuilder::append).toString();

        //Parse JSON as a JSONArray (since the root is an array)
        JSONArray jsonArray;
        try {
            jsonArray = new JSONArray(jsonContent);
        } catch (JSONException e) {
            throw new JSONException("Invalid JSON format: Expected an array at root", e);
        }

        // Set to store unique classes (replacing "categories")
        Set<String> classSet = new HashSet<>();
        List<JSONObject> allAnnotations = new ArrayList<>();

        for (int i = 0; i < jsonArray.length(); i++) {
            try {
                JSONObject frame = jsonArray.getJSONObject(i);
                JSONArray objects = frame.getJSONArray("objects");

                // Collect classes and annotations
                for (int j = 0; j < objects.length(); j++) {
                    JSONObject obj = objects.getJSONObject(j);
                    try {
                        JSONObject attributes = obj.getJSONObject("attributes");
                        //quét tags
                        attributes.keys().forEachRemaining(this.tagListString::add);
                        for (String tag: tagListString) {
                            tagValueMap.put(tag, new HashSet<>());
                        }

                        //quét class
                        int outerType = obj.getInt("type");
                        int innerType = attributes.getInt("type");
                        String className = this.utilService.getClassName(outerType, innerType);

                        classSet.add(className);
                        allAnnotations.add(obj); // Store for annotation processing


                    } catch (JSONException e) {
                        System.err.println("Missing or invalid 'class' in object " + j + " of frame " + i + ": " + e.getMessage());
                    }
                }
            } catch (JSONException e) {
                System.err.println("Error processing frame " + i + ": " + e.getMessage());
            }
        }

        // Convert classSet to JSONArray for getClassList
        JSONArray classes = new JSONArray(getClassSet(classSet));
        // Set class for task
        if (!classes.isEmpty()) {
            List<ClassVo> classList = getClassList(classes, taskVo);
            if (taskVo.getClassVoList() != null && !taskVo.getClassVoList().isEmpty()) {
                for (ClassVo classVo : classList) {
                    boolean isClass = false;
                    for (ClassVo taskClass : taskVo.getClassVoList()){
                        if(taskClass.getClassName().equals(classVo.getClassName())){
                            isClass = true;
                            break;
                        }
                    }
                    if(!isClass) {
                        taskVo.getClassVoList().add(classVo);
                    }
                }
            } else {
                taskVo.setClassVoList(classList);
                taskVo.setDefTaskClassId(classList.get(0).getClassId());
            }
        }

        // Set annotations for task
        List<WorkTicketApiResponseVo> workTicketApiResponseList = new ArrayList<>();
        if(!allAnnotations.isEmpty()) {
            for(JSONObject annoObj : allAnnotations) {
                WorkTicketApiResponseVo workTicketApiResponseVo = setWorkTicketApiResponseVo(annoObj, taskVo);
                workTicketApiResponseList.add(workTicketApiResponseVo);

                //===========NEW =========================
                // Create TagVo list dynamically
                List<TagVo> tagList = new ArrayList<>();
                for(String tagString: tagListString) {
                    TagVo tagVo = new TagVo();
                    tagVo.setProjectId(taskVo.getProjectId());
                    tagVo.setTaskId(taskVo.getTaskId());
                    tagVo.setTagId(idGenerateService.generateTagId());
                    tagVo.setTagName(tagString);
                    tagVo.setTagTypeCd("IMG");
                    tagVo.setTagValTypeCd("20");
                    tagVo.setColor(getRandomHexColor());
                    tagVo.setTagValueList(new ArrayList<>(tagValueMap.get(tagString)));
                    if(taskVo.getClassVoList() != null && !taskVo.getClassVoList().isEmpty()) {
                        tagVo.setMatchClass(taskVo.getClassVoList().stream().map(ClassVo::getClassId).collect(Collectors.joining(",")));
                        tagVo.setTagClassVoList(tagClassVoList(taskVo.getClassVoList(), tagVo, taskVo));
                    }
                    tagList.add(tagVo);
                }

                // Update taskVo tag list
                if (taskVo.getTagList() != null && !taskVo.getTagList().isEmpty()) {
                    for (TagVo tagVo : tagList) {
                        boolean isTag = false;
                        for (TagVo taskTag : taskVo.getTagList()) {
                            if (taskTag.getTagName().equals(tagVo.getTagName())) {
                                isTag = true;
                                break;
                            }
                        }
                        if (!isTag) {
                            taskVo.getTagList().add(tagVo);
                        }
                    }
                } else {
                    taskVo.setTagList(tagList);
                }
            }
            taskVo.setWorkTicketApiResponseList(workTicketApiResponseList);
            taskVo.setTotalObj(totalObj);
        }

        // Count total files
        Path startPath = Paths.get(folderPath);
        long fileCount;
        try (Stream<Path> stream = Files.walk(startPath)) {
            fileCount = stream
                    .filter(Files::isRegularFile)
                    .count();
        }
        Integer totalCont = Math.toIntExact(fileCount);
        taskVo.setTotalCnt(totalCont);

        return taskVo;
    }

    private static Set<String> getClassSet(Set<String> classSet) {
        return classSet;
    }

    private WorkTicketApiResponseVo setWorkTicketApiResponseVo(JSONObject annoObject, TaskVo taskVo) {
        WorkTicketApiResponseVo workTicketApiResponseVo = new WorkTicketApiResponseVo();
        if (annoObject != null && !annoObject.isEmpty()) {
            workTicketApiResponseVo.setProjectId(taskVo.getProjectId());
            workTicketApiResponseVo.setTaskId(taskVo.getTaskId());
            workTicketApiResponseVo.setWorkTicketId(idGenerateService.generateWorkTicketId());
            workTicketApiResponseVo.setWorkType("master");

            Date today = new Date();
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String format = dateFormat.format(today);
            workTicketApiResponseVo.setCurrentDatetime(format);

            // Get the "attributes" object (not array)
            try {
                JSONObject attributes = annoObject.getJSONObject("attributes");
                for(String tagName: tagListString){
                    if(attributes.has(tagName)){
                        String tagValue = String.valueOf(attributes.get(tagName));
                        tagValueMap.get(tagName).add(tagValue);
                    }
                }
            } catch (JSONException e) {
                System.err.println("Error processing attributes in annotation: " + e.getMessage());
            }

            return workTicketApiResponseVo;
        }
        return null;
    }


    private List<TagVo> getTagList(List<ClassVo> classList, TaskVo taskVo) {
        List<String> classIdList = new ArrayList<>();
        if (!classList.isEmpty()) {
            for (ClassVo classVo : classList) {
                classIdList.add(classVo.getClassId());
            }
        }

        List<TagVo> tagList = new ArrayList<>();

        for (String tag : this.tagListString) {
            TagVo tagVo = new TagVo();
            tagVo.setProjectId(taskVo.getProjectId());
            tagVo.setTaskId(taskVo.getTaskId());
            tagVo.setTagId(idGenerateService.generateTagId());
            tagVo.setTagName(tag);
            tagVo.setTagTypeCd("OBJ");
            tagVo.setTagValTypeCd("20");
            tagVo.setColor(getRandomHexColor());
            tagVo.setMatchClass(String.join(", ", classIdList));
            if (!classList.isEmpty()) {
                tagVo.setTagClassVoList(tagClassVoList(classList, tagVo, taskVo));
            }
            tagList.add(tagVo);
        }
        return tagList;
    }

        private List<ClassVo> getClassList (JSONArray classes, TaskVo taskVo) {
        List<ClassVo> classList = new ArrayList<>();
        for (int i = 0; i < classes.length(); i++) {
            String className;
            try {
                className = classes.getString(i); // Classes is now an array of strings (e.g., ["vehicle"])
            } catch (JSONException e) {
                log.error("Error processing class at index " + i + ": " + e.getMessage());
                continue;
            }

            boolean isSame = false;
            // Exclude duplicate classes
            for (ClassVo classVo : classList) {
                if (classVo.getClassName().equals(className)) {
                    isSame = true;
                    break;
                }
            }

            if (!isSame) {
                ClassVo classVo = new ClassVo();
                classVo.setProjectId(taskVo.getProjectId());
                classVo.setTaskId(taskVo.getTaskId());
                classVo.setClassId(idGenerateService.generateClassId()); // Generate ID since JSON lacks "id"
                classVo.setClassName(className);
                classVo.setClassValue(className);
                classVo.setColor(getRandomHexColor());
                classList.add(classVo);
            }
        }
        return classList;
    }

    private List<TagClassVo> tagClassVoList (List<ClassVo> classList,TagVo tag,TaskVo taskVo) {
        List<TagClassVo> tagClassVoList = new ArrayList<>();

        for (ClassVo classVo : classList) {
            TagClassVo tagClassVo = new TagClassVo();
            tagClassVo.setProjectId(taskVo.getProjectId());
            tagClassVo.setClassId(classVo.getClassId());
            tagClassVo.setClassName(classVo.getClassName());
            tagClassVo.setTagId(tag.getTagId());

            tagClassVoList.add(tagClassVo);
        }

        return tagClassVoList;
    }

    private static String getRandomHexColor() {
        Random random = new Random();
        // Generate random RGB components (0-255)
        int r = random.nextInt(256);
        int g = random.nextInt(256);
        int b = random.nextInt(256);

        // Convert each component to 2-digit hex and format as #RRGGBB
        return String.format("#%02X%02X%02X", r, g, b);
    }

}
