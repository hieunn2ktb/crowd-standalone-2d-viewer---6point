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

                // Handle occlusion
                if (attributes.has("occlusion")) {
                    String occlusionVal = String.valueOf(attributes.getInt("occlusion"));
                    if (!occlusionList.contains(occlusionVal)) {
                        occlusionList.add(occlusionVal);
                    }
                }

                // Handle truncation
                if (attributes.has("truncation")) {
                    String truncationVal = String.valueOf(attributes.getInt("truncation"));
                    if (!truncationList.contains(truncationVal)) {
                        truncationList.add(truncationVal);
                    }
                }

                // Handle direction (mapped to side)
                if (attributes.has("direction")) {
                    String sideVal = String.valueOf(attributes.getInt("direction"));
                    if (!sideList.contains(sideVal)) {
                        sideList.add(sideVal);
                    }
                }
            } catch (JSONException e) {
                System.err.println("Error processing attributes in annotation: " + e.getMessage());
            }

            return workTicketApiResponseVo;
        }
        return null;
    }

    // For coco
    private WorkTicketApiResponseVo setWorkTicketApiResponseVoCoco(JSONObject annoObject, TaskVo taskVo) {
        WorkTicketApiResponseVo workTicketApiResponseVo = new WorkTicketApiResponseVo();
        if (annoObject != null && !annoObject.isEmpty()) {
            workTicketApiResponseVo.setProjectId(taskVo.getProjectId());
            workTicketApiResponseVo.setTaskId(taskVo.getTaskId());
            workTicketApiResponseVo.setWorkTicketId(idGenerateService.generateWorkTicketId());
            workTicketApiResponseVo.setWorkType("master");

            Date today      = new Date();
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String           format     = dateFormat.format(today);
            workTicketApiResponseVo.setCurrentDatetime(format);

            // Get the "attributes" array
            JSONArray   attributes  = (JSONArray) annoObject.get("attributes");
            for (Object attr : attributes) {
                JSONObject  objects       = (JSONObject) attr;
                if(objects.has("Occlusion")) {
                    String occlusionVal = objects.getString("Occlusion");
                    if (!occlusionList.contains(String.valueOf(occlusionVal))) {
                        occlusionList.add(String.valueOf(occlusionVal));
                    }
                }
                if(objects.has("Truncation")) {
                    String truncationVal = objects.getString("Truncation");
                    if (!truncationList.contains(String.valueOf(truncationVal))) {
                        truncationList.add(String.valueOf(truncationVal));
                    }
                }

                if(objects.has("side")) {
                    String sideVal = objects.getString("side");
                    if (!sideList.contains(String.valueOf(sideVal))) {
                        sideList.add(String.valueOf(sideVal));
                    }
                }
            }
            return workTicketApiResponseVo;
        }
        return null;
    }

    public TaskVo getProjectInfo(String fileName) throws Exception {
        int totalObj     = 0;
        String folderPath = rootPath + File.separator + fileName;

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

                // // Collect classes and annotations
                for (int j = 0; j < objects.length(); j++) {
                    JSONObject obj = objects.getJSONObject(j);
                    try {
                        JSONObject attributes = obj.getJSONObject("attributes");
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
        JSONArray classes = new JSONArray(classSet);
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

                //Process attributes( new a JSONObject, not JSONArray)
                JSONObject attributes;
                try{
                    attributes = annoObj.getJSONObject("attributes");
                } catch (JSONException e) {
                    System.err.println("Missing or invalid 'attributes' in annotation: " + e.getMessage());
                    continue;
                }

                // Extract tags from attributes
                List<TagVo> tagList = getTagList(taskVo.getClassVoList(), taskVo);
                if (attributes.has("occlusion")) {
                    TagVo occlusionTag = new TagVo();
                    occlusionTag.setTagName("Occlusion");
                    occlusionTag.setTagValueList(occlusionList);
                    tagList.add(occlusionTag);
                }
                if (attributes.has("truncation")) {
                    TagVo truncationTag = new TagVo();
                    truncationTag.setTagName("Truncation");
                    truncationTag.setTagValueList(truncationList);
                }
                if (attributes.has("direction")) {
                    TagVo sideTag = new TagVo();
                    sideTag.setTagName("side");
                    sideTag.setTagValueList(sideList);
                    tagList.add(sideTag);
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
            // Set tag value lists for specific tags
            for (TagVo tagVo : taskVo.getTagList()) {
                if (tagVo.getTagName().equals("Occlusion")) {
                    tagVo.setTagValueList(occlusionList);
                } else if (tagVo.getTagName().equals("Truncation")) {
                    tagVo.setTagValueList(truncationList);
                } else if (tagVo.getTagName().equals("side")) {
                    tagVo.setTagValueList(sideList);
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




    public TaskVo getProjectInfoCoco(String fileName) throws Exception {
        int totalObj     = 0;
        String folderPath = rootPath + File.separator + fileName;

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

        //Retrieve the folder list, read the coco export file
        File     dir        = new File(folderPath);
        String[] folderList = dir.list();
        String cocoExportPath           = "";
        for (String file : folderList) {
            if (file.contains("coco")) {
                cocoExportPath = folderPath + File.separator + file;
                break;
            }
        }
        // coco export
        File            json        = new File(cocoExportPath);
        FileInputStream inputStream = new FileInputStream(json);
        // Convert to JSON string using InputStream
        String jsonContent = new BufferedReader(new InputStreamReader(inputStream))
                .lines().collect(StringBuilder::new, StringBuilder::append, StringBuilder::append).toString();
        JSONObject jsonObject = new JSONObject(jsonContent);

        //set class for task
        JSONArray classes = new JSONArray();
        try {
            classes = jsonObject.getJSONArray("categories");
        } catch (JSONException e) {
            System.out.println("categories key not found or not a valid JSONArray");
        }
        if (classes != null && !classes.isEmpty()) {
            List<ClassVo> classList = getClassList(classes, taskVo);
            if (taskVo.getClassVoList() != null && !taskVo.getClassVoList().isEmpty()) {
                for (ClassVo classVo : classList) {
                    boolean isClass = false;
                    for (ClassVo taskClass : taskVo.getClassVoList()) {
                        if (taskClass.getClassName().equals(classVo.getClassName())) {
                            isClass = true;
                            break;
                        }
                    }
                    if (!isClass) {
                        taskVo.getClassVoList().add(classVo);
                    }
                }
            } else {
                taskVo.setClassVoList(classList);
                taskVo.setDefTaskClassId(classList.get(0).getClassId());
            }
        }

        //set annotation for task
        JSONArray annotations = new JSONArray();
        try {
            annotations = jsonObject.getJSONArray("annotations");
        } catch (JSONException e) {
            System.out.println("annotations key not found or not a valid JSONArray");
        }

        List<WorkTicketApiResponseVo> workTicketApiResponseList = new ArrayList<>();
        if (annotations != null && !annotations.isEmpty()) {
            for (Object anno : annotations) {

                if (!(anno instanceof JSONObject)) {
                    continue; // Skip invalid objects
                }
                totalObj ++;
                WorkTicketApiResponseVo workTicketApiResponseVo = new WorkTicketApiResponseVo();
                JSONObject annoObj   = (JSONObject) anno;
                if (!annoObj.has("attributes") || !(annoObj.get("attributes") instanceof JSONArray)) {
                    continue; // Skip objects without "attributes"
                }
                workTicketApiResponseVo = setWorkTicketApiResponseVo(annoObj, taskVo);
                workTicketApiResponseList.add(workTicketApiResponseVo);

                JSONArray  attributeList   = annoObj.getJSONArray("attributes");
                if (attributeList != null && !attributeList.isEmpty()) {
                    List<TagVo>       tagList;
                    // tag
                    tagList = getTagList(taskVo.getClassVoList(), taskVo);
                    if (taskVo.getTagList() != null && taskVo.getTagList().size() > 0) {
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
            }
            for (TagVo tagVo : taskVo.getTagList()) {
                if (tagVo.getTagName().equals("Occlusion")) {
                    tagVo.setTagValueList(occlusionList);
                } else if (tagVo.getTagName().equals("Truncation")) {
                    tagVo.setTagValueList(truncationList);
                } else if(tagVo.getTagName().equals("side")) {
                    tagVo.setTagValueList(sideList);
                }
            }
            taskVo.setWorkTicketApiResponseList(workTicketApiResponseList);
            taskVo.setTotalObj(totalObj);
        }

        Path startPath = Paths.get(folderPath);
        long fileCount;
        try (Stream<Path> stream = Files.walk(startPath)) {
            fileCount = stream
                    .filter(Files::isRegularFile)  // just count files (ignore directories/folders)
                    .count();
        }
       Integer totalCont  = Math.toIntExact(fileCount);

       taskVo.setTotalCnt(totalCont);

       return taskVo;
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

    private List<ClassVo> getClassListCoco (JSONArray classes,TaskVo taskVo) {
        List<ClassVo>  classList = new ArrayList<>();
        for (Object obj : classes) {
            JSONObject attributes = (JSONObject) obj;

            String className = attributes.getString("name");
            Integer classId = attributes.getInt("id");
            boolean isSame = false;
            // Excluding duplicate classes
            if (!classList.isEmpty()) {
                for (ClassVo classVo : classList) {
                    if (classVo.getClassName().equals(className)) {
                        isSame = true;
                        break;
                    }
                }
            }
            if(!isSame) {
                ClassVo    classVo   = new ClassVo();
                classVo.setProjectId(taskVo.getProjectId());
                classVo.setTaskId(taskVo.getTaskId());
                classVo.setClassId(classId.toString());
                classVo.setClassName(className);
                classVo.setClassValue(className);
                classVo.setColor(getRandomHexColor());
                classList.add(classVo);
            }
        }
        return classList;
    }

    private List<TagVo> getTagList(List<ClassVo> classList, TaskVo taskVo) {
        List<String> classIdList = new ArrayList<>();
        if (!classList.isEmpty()) {
            for (ClassVo classVo : classList) {
                classIdList.add(classVo.getClassId());
            }
        }

        List<TagVo> tagList = new ArrayList<>();

        // Tag Name: Occlusion
        TagVo occlusionTag = new TagVo();
        occlusionTag.setProjectId(taskVo.getProjectId());
        occlusionTag.setTaskId(taskVo.getTaskId());
        occlusionTag.setTagId(idGenerateService.generateTagId());
        occlusionTag.setTagName("Occlusion");
        occlusionTag.setTagTypeCd("IMG");
        occlusionTag.setTagValTypeCd("20");
        occlusionTag.setColor(getRandomHexColor());
        occlusionTag.setMatchClass(String.join(", ", classIdList));
        if (!classList.isEmpty()) {
            occlusionTag.setTagClassVoList(tagClassVoList(classList, occlusionTag, taskVo));
        }
        tagList.add(occlusionTag);

        // Tag Name: Truncation
        TagVo truncationTag = new TagVo();
        truncationTag.setProjectId(taskVo.getProjectId());
        truncationTag.setTaskId(taskVo.getTaskId());
        truncationTag.setTagId(idGenerateService.generateTagId());
        truncationTag.setTagName("Truncation");
        truncationTag.setTagTypeCd("IMG");
        truncationTag.setTagValTypeCd("20");
        truncationTag.setColor(getRandomHexColor());
        truncationTag.setMatchClass(String.join(", ", classIdList));
        if (!classList.isEmpty()) {
            truncationTag.setTagClassVoList(tagClassVoList(classList, truncationTag, taskVo));
        }
        tagList.add(truncationTag);

        // Tag Name: side (mapped from direction)
        TagVo side = new TagVo();
        side.setProjectId(taskVo.getProjectId());
        side.setTaskId(taskVo.getTaskId());
        side.setTagId(idGenerateService.generateTagId());
        side.setTagName("side");
        side.setTagTypeCd("IMG");
        side.setTagValTypeCd("20");
        side.setColor(getRandomHexColor());
        side.setMatchClass(String.join(", ", classIdList));
        if (!classList.isEmpty()) {
            side.setTagClassVoList(tagClassVoList(classList, side, taskVo));
        }
        tagList.add(side);

        return tagList;
    }

    private List<TagVo> getTagListCoco (List<ClassVo> classList,TaskVo taskVo) {
        List<String> classIdList = new ArrayList<>();
        if (!classList.isEmpty()) {
            for (ClassVo classVo : classList) {
                classIdList.add(classVo.getClassId());
            }
        }

        List<TagVo>  tagList = new ArrayList<>();

        // Tag Name : Occlusion
        TagVo occlusionTag = new TagVo();
        occlusionTag.setProjectId(taskVo.getProjectId());
        occlusionTag.setTaskId(taskVo.getTaskId());
        occlusionTag.setTagId(idGenerateService.generateTagId());
        occlusionTag.setTagName("Occlusion");
        occlusionTag.setTagTypeCd("IMG");
        occlusionTag.setTagValTypeCd("20");
        occlusionTag.setColor(getRandomHexColor());
        occlusionTag.setMatchClass(String.join(", ", classIdList));
        // Tag_Class
        if (!classList.isEmpty()) {
            occlusionTag.setTagClassVoList(tagClassVoList(classList,occlusionTag,taskVo));
        }
        tagList.add(occlusionTag);

        // Tag Name : Truncation
        TagVo truncationTag = new TagVo();
        truncationTag.setProjectId(taskVo.getProjectId());
        truncationTag.setTaskId(taskVo.getTaskId());
        truncationTag.setTagId(idGenerateService.generateTagId());
        truncationTag.setTagName("Truncation");
        truncationTag.setTagTypeCd("IMG");
        truncationTag.setTagValTypeCd("20");
        truncationTag.setColor(getRandomHexColor());
        truncationTag.setMatchClass(String.join(", ", classIdList));
        // Tag_Class
        if (!classList.isEmpty()) {
            truncationTag.setTagClassVoList(tagClassVoList(classList,truncationTag,taskVo));
        }
        tagList.add(truncationTag);

        // Tag Name : side
        TagVo side = new TagVo();
        side.setProjectId(taskVo.getProjectId());
        side.setTaskId(taskVo.getTaskId());
        side.setTagId(idGenerateService.generateTagId());
        side.setTagName("side");
        side.setTagTypeCd("IMG");
        side.setTagValTypeCd("20");
        side.setColor(getRandomHexColor());
        side.setMatchClass(String.join(", ", classIdList));
        // Tag_Class
        if (!classList.isEmpty()) {
            side.setTagClassVoList(tagClassVoList(classList,side,taskVo));
        }
        tagList.add(side);

        return tagList;
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

        float  hue        = random.nextFloat();
        float  saturation = (random.nextInt(2000) + 1000) / 10000f;
        float  luminance  = 0.9f;

        Color  color      = Color.getHSBColor(hue, saturation, luminance);

        return '#' + Integer.toHexString(
                (color.getRGB() & 0xffffff) | 0x1000000).substring(1);
    }
}
