package com.infiniq.ams.standalone.domain.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.infiniq.ams.standalone.domain.vo.*;
import com.infiniq.ams.standalone.helper.ObjectCopyHelper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.regex.Pattern;

@Slf4j
@Service
@RequiredArgsConstructor
public class WorkspaceOfAnnotateService {

    @Value("${standalone.data.path}")
    private String rootPath;

    private final IdGenerateService idGenerateService;
    private final ObjectCopyHelper objectCopyHelper;

    //Đọc thông tin từ file COCO JSON và trả ra response có format giống như trên main-web
//    public CommonResponseVo<ReviewImageListVo> get (TaskVo taskVo, List<WorkTicketApiResponseVo> list,TaskVo sessionTask) throws JsonProcessingException, FileNotFoundException {
//        CommonResponseVo<ReviewImageListVo> r = new CommonResponseVo<>();
//        try {
////            TaskWorkTicketVo ticketVo = objectCopyHelper.copyObject(requestVo, TaskWorkTicketVo.class);
////            ticketVo.setPageSize(100);
//
////            List<WorkspaceTaskTicketVo> reviewImageList = new ArrayList<>();
//            ReviewImageListVo res = new ReviewImageListVo();
////            res.setPageIndex(requestVo.getPageIndex());
//            List<ReviewImageVo> tempReviewImageList = new ArrayList<>();
//
//        } catch (Exception e) {
//            log.info(e.getMessage());
//            r.setResult(false);
//        }
//
//        /////////////////////////////////////////////////////////////////////
//        WorkTicketApiResponseVo workTicket = new WorkTicketApiResponseVo();
//        for(WorkTicketApiResponseVo workTicketApiResponseVo : list){
//            if(taskVo.getWorkTicketId().equals(workTicketApiResponseVo.getWorkTicketId())){
//                workTicket = workTicketApiResponseVo;
//                break;
//            }
//        }
//        workTicket.setProjectId(taskVo.getProjectId());
//        workTicket.setTaskId(taskVo.getTaskId());
//        workTicket.setWorkTicketId(taskVo.getWorkTicketId());
//
//        String   folderName = sessionTask.getTaskName();
//        String   folderPath = rootPath + File.separator + folderName;
//        File     dir        = new File(folderPath);
//        String[] folderList = dir.list();
//
//        // Object, tag, class information
//        String cocoPath      = "";
//        String imgTagPath      = "";
//
//        for (String folder : folderList) {
//            if (folder.contains("coco")) {
//                cocoPath = folderPath + File.separator + folder;
//            } else if (folder.contains("CMR")){
//                imgTagPath = folderPath + File.separator + folder;
//            }
//        }
//        File            cocoFile  = new File(cocoPath);
//        FileInputStream inputStream = new FileInputStream(cocoFile);
//
//        // Convert to JSON string using InputStream
//        String jsonContent = new BufferedReader(new InputStreamReader(inputStream))
//                .lines().collect(StringBuilder::new, StringBuilder::append, StringBuilder::append).toString();
//
//        JSONObject jsonObject    = new JSONObject(jsonContent);
//        //set class for task
//        JSONArray classes = new JSONArray();
//        try {
//            classes = jsonObject.getJSONArray("categories");
//        } catch (JSONException e) {
//            System.out.println("categories key not found or not a valid JSONArray");
//        }
//        String     fileIndexName = "";
//        for (Object cls : classes) {
//            JSONObject classObj = (JSONObject) cls;
//            fileIndexName = (String) classObj.get("index");
//
//        }
//        return null;
//    }
    public WorkTicketApiResponseVo get (TaskVo taskVo, List<WorkTicketApiResponseVo> list,TaskVo sessionTask) throws JsonProcessingException, FileNotFoundException {
        WorkTicketApiResponseVo workTicket = new WorkTicketApiResponseVo();
        for (WorkTicketApiResponseVo workTicketApiResponseVo : list) {
            if (taskVo.getWorkTicketId().equals(workTicketApiResponseVo.getWorkTicketId())) {
                workTicket = workTicketApiResponseVo;
                break;
            }
        }

        workTicket.setProjectId(taskVo.getProjectId());
        workTicket.setTaskId(taskVo.getTaskId());
        workTicket.setWorkTicketId(taskVo.getWorkTicketId());

        String   folderName = sessionTask.getTaskName();
        String   folderPath = rootPath + File.separator + folderName;
        File     dir        = new File(folderPath);
        String[] folderList = dir.list();

        // Object, tag, class information
        String exportPath      = "";
        String imgTagPath      = "";

        for (String folder : folderList) {
            if (folder.contains("obj")) {
                exportPath = folderPath + File.separator + folder;
            } else if (folder.contains("CMR")){
                imgTagPath = folderPath + File.separator + folder;
            }
        }

        File            exportFile  = new File(exportPath);
        FileInputStream inputStream = new FileInputStream(exportFile);

        // Convert to JSON string using InputStream
        String jsonContent = new BufferedReader(new InputStreamReader(inputStream))
                .lines().collect(StringBuilder::new, StringBuilder::append, StringBuilder::append).toString();

        JSONObject jsonObject    = new JSONObject(jsonContent);
        JSONArray  frames        = jsonObject.getJSONArray("frames");
        String     fileIndexName = "";

        for (Object frame : frames) {
            JSONObject frameObj = (JSONObject) frame;
            fileIndexName = (String) frameObj.get("index");
            if (workTicket.getFileName().contains((CharSequence) frameObj.get("index"))) {
                List<ImageObjectVo>  objectTagList = new ArrayList<>();
                JSONArray objects = frameObj.getJSONArray("objects");

                for (int i = 0; i < objects.length(); i++) {
                    JSONObject object  = (JSONObject) objects.get(i);

                    ImageObjectVo imageObjectVo = new ImageObjectVo();
                    imageObjectVo.setProjectId(taskVo.getProjectId());
                    imageObjectVo.setTaskId(taskVo.getTaskId());
                    imageObjectVo.setWorkTicketId(taskVo.getWorkTicketId());
                    imageObjectVo.setObjectOrder(i);
                    imageObjectVo.setObjectId(idGenerateService.generateOjbectId());

                    for (ClassVo classVo : sessionTask.getClassVoList()) {
                        if (classVo.getClassName().equals(object.getString("class"))) {
                            imageObjectVo.setClassName(classVo.getClassName());
                            imageObjectVo.setColor(classVo.getColor());
                            imageObjectVo.setClassId(classVo.getClassId());
                            break;
                        }
                    }

                    JSONObject   objectLocation = new JSONObject();
                    ObjectMapper objectMapper   = new ObjectMapper();

                    JSONObject cuboid = (JSONObject) object.get("cuboid");
                    // Generates JSON data.
                    ObjectNode rootNode = objectMapper.createObjectNode();
                    ArrayNode rotationArray = rootNode.putArray("rotation");
                    rotationArray.add(0);
                    rotationArray.add(0);
                    rotationArray.add(cuboid.get("yaw").toString());
                    rotationArray.add("XYZ");

                    objectLocation.put("rotation", rotationArray);

                    // Read coordinates and size
                    double x3d = cuboid.getDouble("x3d");
                    double y3d = cuboid.getDouble("y3d");
                    double z3d = cuboid.getDouble("z3d");
                    double width = cuboid.getDouble("width");
                    double length = cuboid.getDouble("length");
                    double height = cuboid.getDouble("height");

                    // Coordinate System Convert
                    double[][] M = {
                            {0, 0, 1},
                            {0, -1, 0},
                            {1, 0, 0}
                    };

                    double[] transformed = matrixVectorMultiply(M, new double[]{x3d, y3d, z3d});

                    // objectLocation configuration
                    objectLocation.put("x", transformed[0]);
                    objectLocation.put("y", transformed[1]);
                    objectLocation.put("z", transformed[2]);
                    objectLocation.put("w", width);
                    objectLocation.put("h", length);
                    objectLocation.put("d", height);
                    objectLocation.put("calibratedPointList",new ArrayList<>());
                    objectLocation.put("pcdPoints",new ArrayList<>());

                    JSONObject bbox = (JSONObject) object.get("box");

                    JSONObject bboxList = new JSONObject();
                    bboxList.put("x", bbox.get("x"));
                    bboxList.put("y", bbox.get("y"));
                    bboxList.put("width", bbox.get("width"));
                    bboxList.put("height", bbox.get("height"));
                    bboxList.put("camId", sessionTask.getCamList().get(0).getCamId());
                    bboxList.put("imgObjNumber", imageObjectVo.getObjectId());
                    bboxList.put("cameraName", sessionTask.getCamList().get(0).getCameraName());
                    List<JSONObject> bboxObjList = new ArrayList<>();
                    bboxObjList.add(bboxList);

                    objectLocation.put("bboxList", bboxObjList);
                    objectLocation.put("shape", "cube");

                    imageObjectVo.setObjectLocation(objectLocation.toString());

                    JSONObject attribute = (JSONObject) object.get("attributes");

                    int     attribute3DVal          = attribute.getInt("3d");
                    int     brakeLightStatusVal     = attribute.getInt("brake_light_status");
                    double  directionVal            = attribute.getDouble("direction");
                    int     emergencyVal            = attribute.getInt("emergency");
                    int     indicatorStatusVal      = attribute.getInt("indicator_status");
                    int     movingStatusVal         = attribute.getInt("moving_status");
                    int     occlusionVal            = attribute.getInt("occlusion");
                    int     trackIdVal              = attribute.getInt("track_id");
                    int     poseVal                 = attribute.getInt("pose");
                    int     typeVal                 = attribute.getInt("type");
                    String  classVal                = (String) object.get("class");
                    String  lockedVal               = String.valueOf(object.getBoolean("locked"));
                    String  visibleVal              = String.valueOf(object.getBoolean("visible"));

                    List<ImageObjectTagVo> tagList = new ArrayList<>();

                    ImageObjectTagVo classValTagVo = new ImageObjectTagVo();
                    classValTagVo.setProjectId(taskVo.getProjectId());
                    classValTagVo.setTaskId(taskVo.getTaskId());
                    classValTagVo.setWorkTicketId(taskVo.getWorkTicketId());
                    classValTagVo.setObjectTagId(idGenerateService.generateObjectTagId());
                    classValTagVo.setObjectId(imageObjectVo.getObjectId());
                    classValTagVo.setTagTypeCd("OBJ");
                    classValTagVo.setVal(classVal);

                    for (TagVo tag : sessionTask.getTagList()) {
                        if (tag.getTagName() == "class") {
                            classValTagVo.setTagId(tag.getTagId());
                            classValTagVo.setColor(tag.getColor());
                            break;
                        }
                    }

                    tagList.add(classValTagVo);

                    ImageObjectTagVo attribute3DValTagVo = new ImageObjectTagVo();
                    attribute3DValTagVo.setProjectId(taskVo.getProjectId());
                    attribute3DValTagVo.setTaskId(taskVo.getTaskId());
                    attribute3DValTagVo.setWorkTicketId(taskVo.getWorkTicketId());
                    attribute3DValTagVo.setObjectTagId(idGenerateService.generateObjectTagId());
                    attribute3DValTagVo.setObjectId(imageObjectVo.getObjectId());
                    attribute3DValTagVo.setTagTypeCd("OBJ");
                    attribute3DValTagVo.setVal(String.valueOf(attribute3DVal));

                    for (TagVo tag : sessionTask.getTagList()) {
                        if (tag.getTagName() == "3d") {
                            attribute3DValTagVo.setTagId(tag.getTagId());
                            attribute3DValTagVo.setColor(tag.getColor());
                            break;
                        }
                    }

                    tagList.add(attribute3DValTagVo);

                    ImageObjectTagVo brakeLightStatusValVo = new ImageObjectTagVo();
                    brakeLightStatusValVo.setProjectId(taskVo.getProjectId());
                    brakeLightStatusValVo.setTaskId(taskVo.getTaskId());
                    brakeLightStatusValVo.setWorkTicketId(taskVo.getWorkTicketId());
                    brakeLightStatusValVo.setObjectTagId(idGenerateService.generateObjectTagId());
                    brakeLightStatusValVo.setObjectId(imageObjectVo.getObjectId());
                    brakeLightStatusValVo.setTagTypeCd("OBJ");
                    brakeLightStatusValVo.setVal(String.valueOf(brakeLightStatusVal));

                    for (TagVo tag : sessionTask.getTagList()) {
                        if (tag.getTagName() == "brake_light_status") {
                            brakeLightStatusValVo.setTagId(tag.getTagId());
                            brakeLightStatusValVo.setColor(tag.getColor());
                            break;
                        }
                    }

                    tagList.add(brakeLightStatusValVo);

                    ImageObjectTagVo directionValVo = new ImageObjectTagVo();
                    directionValVo.setProjectId(taskVo.getProjectId());
                    directionValVo.setTaskId(taskVo.getTaskId());
                    directionValVo.setWorkTicketId(taskVo.getWorkTicketId());
                    directionValVo.setObjectTagId(idGenerateService.generateObjectTagId());
                    directionValVo.setObjectId(imageObjectVo.getObjectId());
                    directionValVo.setTagTypeCd("OBJ");
                    directionValVo.setVal(String.valueOf(directionVal));

                    for (TagVo tag : sessionTask.getTagList()) {
                        if (tag.getTagName() == "direction") {
                            directionValVo.setTagId(tag.getTagId());
                            directionValVo.setColor(tag.getColor());
                            break;
                        }
                    }

                    tagList.add(directionValVo);

                    ImageObjectTagVo emergencyValTagVo = new ImageObjectTagVo();
                    emergencyValTagVo.setProjectId(taskVo.getProjectId());
                    emergencyValTagVo.setTaskId(taskVo.getTaskId());
                    emergencyValTagVo.setWorkTicketId(taskVo.getWorkTicketId());
                    emergencyValTagVo.setObjectTagId(idGenerateService.generateObjectTagId());
                    emergencyValTagVo.setObjectId(imageObjectVo.getObjectId());
                    emergencyValTagVo.setTagTypeCd("OBJ");
                    emergencyValTagVo.setVal(String.valueOf(emergencyVal));

                    for (TagVo tag : sessionTask.getTagList()) {
                        if (tag.getTagName() == "emergency") {
                            emergencyValTagVo.setTagId(tag.getTagId());
                            emergencyValTagVo.setColor(tag.getColor());
                            break;
                        }
                    }

                    tagList.add(emergencyValTagVo);

                    ImageObjectTagVo indicatorStatusValTagVo = new ImageObjectTagVo();
                    indicatorStatusValTagVo.setProjectId(taskVo.getProjectId());
                    indicatorStatusValTagVo.setTaskId(taskVo.getTaskId());
                    indicatorStatusValTagVo.setWorkTicketId(taskVo.getWorkTicketId());
                    indicatorStatusValTagVo.setObjectTagId(idGenerateService.generateObjectTagId());
                    indicatorStatusValTagVo.setObjectId(imageObjectVo.getObjectId());
                    indicatorStatusValTagVo.setTagTypeCd("OBJ");
                    indicatorStatusValTagVo.setVal(String.valueOf(indicatorStatusVal));

                    for (TagVo tag : sessionTask.getTagList()) {
                        if (tag.getTagName() == "indicator_status") {
                            indicatorStatusValTagVo.setTagId(tag.getTagId());
                            indicatorStatusValTagVo.setColor(tag.getColor());
                            break;
                        }
                    }

                    tagList.add(indicatorStatusValTagVo);

                    ImageObjectTagVo movingStatusValTagVo = new ImageObjectTagVo();
                    movingStatusValTagVo.setProjectId(taskVo.getProjectId());
                    movingStatusValTagVo.setTaskId(taskVo.getTaskId());
                    movingStatusValTagVo.setWorkTicketId(taskVo.getWorkTicketId());
                    movingStatusValTagVo.setObjectTagId(idGenerateService.generateObjectTagId());
                    movingStatusValTagVo.setObjectId(imageObjectVo.getObjectId());
                    movingStatusValTagVo.setTagTypeCd("OBJ");
                    movingStatusValTagVo.setVal(String.valueOf(movingStatusVal));

                    for (TagVo tag : sessionTask.getTagList()) {
                        if (tag.getTagName() == "moving_status") {
                            movingStatusValTagVo.setTagId(tag.getTagId());
                            movingStatusValTagVo.setColor(tag.getColor());
                            break;
                        }
                    }

                    tagList.add(movingStatusValTagVo);


                    ImageObjectTagVo occlusionValTagVo = new ImageObjectTagVo();
                    occlusionValTagVo.setProjectId(taskVo.getProjectId());
                    occlusionValTagVo.setTaskId(taskVo.getTaskId());
                    occlusionValTagVo.setWorkTicketId(taskVo.getWorkTicketId());
                    occlusionValTagVo.setObjectTagId(idGenerateService.generateObjectTagId());
                    occlusionValTagVo.setObjectId(imageObjectVo.getObjectId());
                    occlusionValTagVo.setTagTypeCd("OBJ");
                    occlusionValTagVo.setVal(String.valueOf(occlusionVal));

                    for (TagVo tag : sessionTask.getTagList()) {
                        if (tag.getTagName() == "occlusion") {
                            occlusionValTagVo.setTagId(tag.getTagId());
                            occlusionValTagVo.setColor(tag.getColor());
                            break;
                        }
                    }

                    tagList.add(occlusionValTagVo);

                    ImageObjectTagVo trackIdValTagVo = new ImageObjectTagVo();
                    trackIdValTagVo.setProjectId(taskVo.getProjectId());
                    trackIdValTagVo.setTaskId(taskVo.getTaskId());
                    trackIdValTagVo.setWorkTicketId(taskVo.getWorkTicketId());
                    trackIdValTagVo.setObjectTagId(idGenerateService.generateObjectTagId());
                    trackIdValTagVo.setObjectId(imageObjectVo.getObjectId());
                    trackIdValTagVo.setTagTypeCd("OBJ");
                    trackIdValTagVo.setVal(String.valueOf(trackIdVal));

                    for (TagVo tag : sessionTask.getTagList()) {
                        if (tag.getTagName() == "track_id") {
                            trackIdValTagVo.setTagId(tag.getTagId());
                            trackIdValTagVo.setColor(tag.getColor());
                            break;
                        }
                    }

                    tagList.add(trackIdValTagVo);

                    ImageObjectTagVo poseValTagVo = new ImageObjectTagVo();
                    poseValTagVo.setProjectId(taskVo.getProjectId());
                    poseValTagVo.setTaskId(taskVo.getTaskId());
                    poseValTagVo.setWorkTicketId(taskVo.getWorkTicketId());
                    poseValTagVo.setObjectTagId(idGenerateService.generateObjectTagId());
                    poseValTagVo.setObjectId(imageObjectVo.getObjectId());
                    poseValTagVo.setTagTypeCd("OBJ");
                    poseValTagVo.setVal(String.valueOf(poseVal));

                    for (TagVo tag : sessionTask.getTagList()) {
                        if (tag.getTagName() == "pose") {
                            poseValTagVo.setTagId(tag.getTagId());
                            poseValTagVo.setColor(tag.getColor());
                            break;
                        }
                    }

                    tagList.add(poseValTagVo);

                    ImageObjectTagVo typeValTagVo = new ImageObjectTagVo();
                    typeValTagVo.setProjectId(taskVo.getProjectId());
                    typeValTagVo.setTaskId(taskVo.getTaskId());
                    typeValTagVo.setWorkTicketId(taskVo.getWorkTicketId());
                    typeValTagVo.setObjectTagId(idGenerateService.generateObjectTagId());
                    typeValTagVo.setObjectId(imageObjectVo.getObjectId());
                    typeValTagVo.setTagTypeCd("OBJ");
                    typeValTagVo.setVal(String.valueOf(typeVal));

                    for (TagVo tag : sessionTask.getTagList()) {
                        if (tag.getTagName() == "type") {
                            typeValTagVo.setTagId(tag.getTagId());
                            typeValTagVo.setColor(tag.getColor());
                            break;
                        }
                    }
                    tagList.add(typeValTagVo);

                    ImageObjectTagVo lockedValTagVo = new ImageObjectTagVo();
                    lockedValTagVo.setProjectId(taskVo.getProjectId());
                    lockedValTagVo.setTaskId(taskVo.getTaskId());
                    lockedValTagVo.setWorkTicketId(taskVo.getWorkTicketId());
                    lockedValTagVo.setObjectTagId(idGenerateService.generateObjectTagId());
                    lockedValTagVo.setObjectId(imageObjectVo.getObjectId());
                    lockedValTagVo.setTagTypeCd("OBJ");
                    lockedValTagVo.setVal(String.valueOf(lockedVal));

                    for (TagVo tag : sessionTask.getTagList()) {
                        if (tag.getTagName() == "locked") {
                            lockedValTagVo.setTagId(tag.getTagId());
                            lockedValTagVo.setColor(tag.getColor());
                            break;
                        }
                    }
                    tagList.add(lockedValTagVo);

                    ImageObjectTagVo visibleValTagVo = new ImageObjectTagVo();
                    visibleValTagVo.setProjectId(taskVo.getProjectId());
                    visibleValTagVo.setTaskId(taskVo.getTaskId());
                    visibleValTagVo.setWorkTicketId(taskVo.getWorkTicketId());
                    visibleValTagVo.setObjectTagId(idGenerateService.generateObjectTagId());
                    visibleValTagVo.setObjectId(imageObjectVo.getObjectId());
                    visibleValTagVo.setTagTypeCd("OBJ");
                    visibleValTagVo.setVal(String.valueOf(visibleVal));

                    for (TagVo tag : sessionTask.getTagList()) {
                        if (tag.getTagName() == "visible") {
                            visibleValTagVo.setTagId(tag.getTagId());
                            visibleValTagVo.setColor(tag.getColor());
                            break;
                        }
                    }
                    tagList.add(visibleValTagVo);


                    imageObjectVo.setTagList(tagList);
                    objectTagList.add(imageObjectVo);
                }

                workTicket.setObjectList(objectTagList);
                break;
            }
        }

        File            imgTagFile      = new File(imgTagPath);
        FileInputStream fileInputStream = new FileInputStream(imgTagFile);

        // Convert to JSON string using InputStream
        String fileContent = new BufferedReader(new InputStreamReader(fileInputStream))
                .lines().collect(StringBuilder::new, StringBuilder::append, StringBuilder::append).toString();

        JSONArray imageObject = new JSONArray(fileContent);
        List<ImageObjectTagVo> tagList = new ArrayList<>();

        for (Object imageTag : imageObject) {
            JSONObject img = (JSONObject) imageTag;
            if (String.valueOf(img.get("Frame")).contains(Integer.valueOf(fileIndexName).toString())) {
                String imgTagId = idGenerateService.generateOjbectId();

                ImageObjectTagVo frameTag = new ImageObjectTagVo();
                frameTag.setProjectId(taskVo.getProjectId());
                frameTag.setTaskId(taskVo.getTaskId());
                frameTag.setWorkTicketId(taskVo.getWorkTicketId());
                frameTag.setObjectTagId(idGenerateService.generateObjectTagId());
                frameTag.setObjectId(imgTagId);
                frameTag.setTagTypeCd("IMG");
                frameTag.setVal((String) img.get("Frame"));

                for (TagVo tag : sessionTask.getTagList()) {
                    if (tag.getTagName() == "Frame") {
                        frameTag.setTagId(tag.getTagId());
                        frameTag.setColor(tag.getColor());
                        break;
                    }
                }
                tagList.add(frameTag);

                ImageObjectTagVo timeTag = new ImageObjectTagVo();
                timeTag.setProjectId(taskVo.getProjectId());
                timeTag.setTaskId(taskVo.getTaskId());
                timeTag.setWorkTicketId(taskVo.getWorkTicketId());
                timeTag.setObjectTagId(idGenerateService.generateObjectTagId());
                timeTag.setObjectId(imgTagId);
                timeTag.setTagTypeCd("IMG");
                timeTag.setVal((String) img.get("Time"));

                for (TagVo tag : sessionTask.getTagList()) {
                    if (tag.getTagName() == "Time") {
                        timeTag.setTagId(tag.getTagId());
                        timeTag.setColor(tag.getColor());
                        break;
                    }
                }
                tagList.add(timeTag);

                ImageObjectTagVo weatherTag = new ImageObjectTagVo();
                weatherTag.setProjectId(taskVo.getProjectId());
                weatherTag.setTaskId(taskVo.getTaskId());
                weatherTag.setWorkTicketId(taskVo.getWorkTicketId());
                weatherTag.setObjectTagId(idGenerateService.generateObjectTagId());
                weatherTag.setObjectId(imgTagId);
                weatherTag.setTagTypeCd("IMG");
                weatherTag.setVal((String) img.get("Weather"));

                for (TagVo tag : sessionTask.getTagList()) {
                    if (tag.getTagName() == "Weather") {
                        weatherTag.setTagId(tag.getTagId());
                        weatherTag.setColor(tag.getColor());
                        break;
                    }
                }
                tagList.add(weatherTag);

                ImageObjectTagVo roadSurfaceTag = new ImageObjectTagVo();
                roadSurfaceTag.setProjectId(taskVo.getProjectId());
                roadSurfaceTag.setTaskId(taskVo.getTaskId());
                roadSurfaceTag.setWorkTicketId(taskVo.getWorkTicketId());
                roadSurfaceTag.setObjectTagId(idGenerateService.generateObjectTagId());
                roadSurfaceTag.setObjectId(imgTagId);
                roadSurfaceTag.setTagTypeCd("IMG");
                roadSurfaceTag.setVal((String) img.get("RoadSurface"));

                for (TagVo tag : sessionTask.getTagList()) {
                    if (tag.getTagName() == "RoadSurface") {
                        roadSurfaceTag.setTagId(tag.getTagId());
                        roadSurfaceTag.setColor(tag.getColor());
                        break;
                    }
                }
                tagList.add(roadSurfaceTag);

                ImageObjectTagVo roadSlopeTag = new ImageObjectTagVo();
                roadSlopeTag.setProjectId(taskVo.getProjectId());
                roadSlopeTag.setTaskId(taskVo.getTaskId());
                roadSlopeTag.setWorkTicketId(taskVo.getWorkTicketId());
                roadSlopeTag.setObjectTagId(idGenerateService.generateObjectTagId());
                roadSlopeTag.setObjectId(imgTagId);
                roadSlopeTag.setTagTypeCd("IMG");
                roadSlopeTag.setVal((String) img.get("RoadSlope"));

                for (TagVo tag : sessionTask.getTagList()) {
                    if (tag.getTagName() == "RoadSlope") {
                        roadSlopeTag.setTagId(tag.getTagId());
                        roadSlopeTag.setColor(tag.getColor());
                        break;
                    }
                }
                tagList.add(roadSlopeTag);

                ImageObjectTagVo shadeConditionTag = new ImageObjectTagVo();
                shadeConditionTag.setProjectId(taskVo.getProjectId());
                shadeConditionTag.setTaskId(taskVo.getTaskId());
                shadeConditionTag.setWorkTicketId(taskVo.getWorkTicketId());
                shadeConditionTag.setObjectTagId(idGenerateService.generateObjectTagId());
                shadeConditionTag.setObjectId(imgTagId);
                shadeConditionTag.setTagTypeCd("IMG");
                shadeConditionTag.setVal((String) img.get("ShadeCondition"));

                for (TagVo tag : sessionTask.getTagList()) {
                    if (tag.getTagName() == "ShadeCondition") {
                        shadeConditionTag.setTagId(tag.getTagId());
                        shadeConditionTag.setColor(tag.getColor());
                        break;
                    }
                }
                tagList.add(shadeConditionTag);

                ImageObjectTagVo cameraConditionTag = new ImageObjectTagVo();
                cameraConditionTag.setProjectId(taskVo.getProjectId());
                cameraConditionTag.setTaskId(taskVo.getTaskId());
                cameraConditionTag.setWorkTicketId(taskVo.getWorkTicketId());
                cameraConditionTag.setObjectTagId(idGenerateService.generateObjectTagId());
                cameraConditionTag.setObjectId(imgTagId);
                cameraConditionTag.setTagTypeCd("IMG");
                cameraConditionTag.setVal((String) img.get("CameraCondition"));

                for (TagVo tag : sessionTask.getTagList()) {
                    if (tag.getTagName() == "CameraCondition") {
                        cameraConditionTag.setTagId(tag.getTagId());
                        cameraConditionTag.setColor(tag.getColor());
                        break;
                    }
                }
                tagList.add(cameraConditionTag);
                break;
            }
        }

        workTicket.setTagList(tagList);

        return workTicket;
    }

    private double[] matrixVectorMultiply(double[][] matrix, double[] vector) {
        double[] result = new double[3];
        for (int i = 0; i < 3; i++) {
            result[i] = matrix[i][0] * vector[0] + matrix[i][1] * vector[1] + matrix[i][2] * vector[2];
        }
        return result;
    }

    public Boolean saveComment(TaskVo sessionTask, TaskVo taskVo) throws Exception {


        String commentPath = rootPath + File.separator + sessionTask.getTaskName() + File.separator + "comment";

        File file = new File(commentPath);

        if (!file.exists()) {
            boolean mkdirsResult = file.mkdirs(); // Create all folders up to the parent folder
            if (!mkdirsResult) {
                return false;
            }
        }

        Date             today      = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String           format     = dateFormat.format(today);

        JSONObject jsonObject = new JSONObject();
        jsonObject.put("file_name", taskVo.getOrgnFileName());
        jsonObject.put("comment", taskVo.getContents());
        jsonObject.put("register_datetime", format);

        // File name composition (add extension)
        String jsonFileName = taskVo.getOrgnFileName().replace(".pcd", "") + ".json";
        File jsonFile = new File(commentPath, jsonFileName);

        // JSON 파일 저장
        try (OutputStreamWriter writer = new OutputStreamWriter(new FileOutputStream(jsonFile), StandardCharsets.UTF_8)) {
            writer.write(jsonObject.toString(4));
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }

        return true;
    }

    public List<WorkTicketApiResponseVo> selectComment(List<WorkTicketApiResponseVo> workTicketApiResponseVoList, TaskVo sessionTask) throws FileNotFoundException, UnsupportedEncodingException {

        String commentPath = rootPath + File.separator + sessionTask.getTaskName() + File.separator + "comment";
        File   commentDir  = new File(commentPath);

        if (!commentDir.exists()) {
            return workTicketApiResponseVoList;
        }

        String[] commentList = commentDir.list();


        if (commentList != null && commentList.length > 0) {
            for (String commentFile : commentList) {

                File file = new File(commentPath + File.separator +  commentFile);

                FileInputStream inputStream = new FileInputStream(file);

                // Convert to JSON string using InputStream
                String jsonContent = new BufferedReader(
                        new InputStreamReader(new FileInputStream(file), StandardCharsets.UTF_8))
                        .lines()
                        .collect(StringBuilder::new, StringBuilder::append, StringBuilder::append)
                        .toString();

                JSONObject commentJSON = new JSONObject(jsonContent);

                for (WorkTicketApiResponseVo workTicketApiResponseVo : workTicketApiResponseVoList) {
                    if (commentFile.contains(workTicketApiResponseVo.getFileName().replace(".pcd",""))) {

                        workTicketApiResponseVo.setContent(commentJSON.getString("comment"));
                        workTicketApiResponseVo.setReviewedDatetime(commentJSON.getString("register_datetime"));
                        workTicketApiResponseVo.setReviewerId("admin");
                        workTicketApiResponseVo.setStatusReview("fail");
                        workTicketApiResponseVo.setStatus("reviewed");
                    }

                }

            }

        }

        return workTicketApiResponseVoList;
    }

}
