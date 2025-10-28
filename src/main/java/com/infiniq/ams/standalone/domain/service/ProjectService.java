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
        String jsonPath           = "";
        assert folderList != null;
        for (String file : folderList) {
            if (file.contains(".json")) {
                jsonPath = folderPath + File.separator + file;
                break;
            }
        }
        //Read json file
        File            jsonFile        = new File(jsonPath);
        FileInputStream inputStream = new FileInputStream(jsonFile);
        // Convert to JSON string using InputStream
        String jsonContent = new BufferedReader(new InputStreamReader(inputStream))
                .lines().collect(StringBuilder::new, StringBuilder::append, StringBuilder::append).toString();
        // Support multiple JSON files and both formats
        Set<String> classSet = new HashSet<>();
        List<JSONObject> allAnnotations = new ArrayList<>();
        // Walk all JSONs under folderPath
        try (Stream<Path> stream = Files.walk(Paths.get(folderPath))) {
            List<Path> jsonFiles = stream
                    .filter(Files::isRegularFile)
                    .filter(p -> p.getFileName().toString().toLowerCase().endsWith(".json"))
                    .collect(Collectors.toList());
            for (Path p : jsonFiles) {
                String content = Files.readString(p);
                boolean legacy = true;
                JSONArray ja = null;
                try {
                    ja = new JSONArray(content);
                } catch (JSONException ex) {
                    legacy = false;
                }
                if (legacy && ja != null) {
                    for (int i = 0; i < ja.length(); i++) {
                        try {
                            JSONObject frame = ja.getJSONObject(i);
                            JSONArray objects = frame.getJSONArray("objects");
                            for (int j = 0; j < objects.length(); j++) {
                                JSONObject obj = objects.getJSONObject(j);
                                try {
                                    JSONObject attributes = obj.getJSONObject("attributes");
                                    attributes.keys().forEachRemaining(this.tagListString::add);
                                    for (String tag : tagListString) {
                                        tagValueMap.put(tag, new HashSet<>());
                                    }
                                    int outerType = obj.getInt("type");
                                    int innerType = attributes.getInt("type");
                                    String className = this.utilService.getClassName(outerType, innerType);
                                    classSet.add(className);
                                    allAnnotations.add(obj);
                                } catch (JSONException e) {
                                    System.err.println("Missing or invalid 'class' in object: " + e.getMessage());
                                }
                            }
                        } catch (JSONException e) {
                            System.err.println("Error processing frame: " + e.getMessage());
                        }
                    }
                } else {
                    try {
                        JSONObject rootObj = new JSONObject(content);
                        if (rootObj.has("categories")) {
                            JSONArray cats = rootObj.getJSONArray("categories");
                            for (int i = 0; i < cats.length(); i++) {
                                JSONObject c = cats.getJSONObject(i);
                                String name = c.optString("name", "");
                                if (name != null && !name.isEmpty()) classSet.add(name);
                            }
                        }
                    } catch (JSONException e) {
                        // skip invalid JSON
                    }
                }
            }
        } catch (Exception e) {
            log.error("scan json error", e);
        }

        // Convert classSet to JSONArray for getClassList
        JSONArray classes = new JSONArray(getClassSet(classSet));
        if (!classes.isEmpty()) {
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

        // Add default tags (truncation, occlusion) once
        List<TagVo> tagList = new ArrayList<>();
        TagVo truncationTag = new TagVo();
        truncationTag.setProjectId(taskVo.getProjectId());
        truncationTag.setTaskId(taskVo.getTaskId());
        truncationTag.setTagId(idGenerateService.generateTagId());
        truncationTag.setTagName("truncation");
        truncationTag.setTagTypeCd("IMG");
        truncationTag.setTagValTypeCd("20");
        truncationTag.setColor("#0aa57d");
        truncationTag.setTagValueList(new ArrayList<>(Arrays.asList("1", "2", "3")));
        if (taskVo.getClassVoList() != null && !taskVo.getClassVoList().isEmpty()) {
            truncationTag.setMatchClass(taskVo.getClassVoList().stream().map(ClassVo::getClassId).collect(Collectors.joining(",")));
            truncationTag.setTagClassVoList(tagClassVoList(taskVo.getClassVoList(), truncationTag, taskVo));
        }
        tagList.add(truncationTag);

        TagVo occlusionTag = new TagVo();
        occlusionTag.setProjectId(taskVo.getProjectId());
        occlusionTag.setTaskId(taskVo.getTaskId());
        occlusionTag.setTagId(idGenerateService.generateTagId());
        occlusionTag.setTagName("occlusion");
        occlusionTag.setTagTypeCd("IMG");
        occlusionTag.setTagValTypeCd("20");
        occlusionTag.setColor("#b5eb8d");
        occlusionTag.setTagValueList(new ArrayList<>(Arrays.asList("1", "2", "3")));
        if (taskVo.getClassVoList() != null && !taskVo.getClassVoList().isEmpty()) {
            occlusionTag.setMatchClass(taskVo.getClassVoList().stream().map(ClassVo::getClassId).collect(Collectors.joining(",")));
            occlusionTag.setTagClassVoList(tagClassVoList(taskVo.getClassVoList(), occlusionTag, taskVo));
        }
        tagList.add(occlusionTag);

        if (taskVo.getTagList() != null && !taskVo.getTagList().isEmpty()) {
            for (TagVo tv : tagList) {
                boolean exists = false;
                for (TagVo t2 : taskVo.getTagList()) {
                    if (t2.getTagName().equals(tv.getTagName())) { exists = true; break; }
                }
                if (!exists) taskVo.getTagList().add(tv);
            }
        } else {
            taskVo.setTagList(tagList);
        }

        // Count total files
        Path startPath = Paths.get(folderPath);
        long imageFileCount;
        try (Stream<Path> stream = Files.walk(startPath)) {
            imageFileCount = stream
                    .filter(Files::isRegularFile)
                    .filter(path -> {
                        String imageFileName = path.getFileName().toString().toLowerCase();
                        return imageFileName.endsWith(".jpg")
                                || imageFileName.endsWith(".jpeg")
                                || imageFileName.endsWith(".png")
                                || imageFileName.endsWith(".gif");
                    })
                    .count();
        }
        Integer totalCont = Math.toIntExact(imageFileCount);
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
                classVo.setColor(this.utilService.getClassColorByClassName(className));
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

}
