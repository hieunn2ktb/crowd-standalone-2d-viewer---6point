package com.infiniq.ams.standalone.domain.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.infiniq.ams.standalone.domain.vo.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FilenameUtils;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.io.*;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;


@Slf4j
@Service
@RequiredArgsConstructor
public class WorkDataService {

    @Value("${standalone.data.path}")
    private String rootPath;

    private final IdGenerateService idGenerateService;
    private final UtilService utilService;
    @Getter
    private int totalObj = 0;
    private static final AtomicInteger OBJECT_COUNTER = new AtomicInteger(100000);
    private static final AtomicInteger TAG_COUNTER = new AtomicInteger(100000);
    private static final AtomicInteger TAG_ID_GENERATOR = new AtomicInteger(100000);
    private static final String[] COLOR_POOL = {
            "#FF5733", "#33FF57", "#3357FF", "#F0A500", "#6A1B9A", "#00838F", "#C62828", "#2E7D32"
    };

    public List<ReviewImageVo> getWorkedList(TaskVo task, String fileName) throws Exception {
        JSONArray jsonArray = getJsonArray(fileName);
        if (jsonArray == null || jsonArray.isEmpty()) {
            throw new IllegalArgumentException("Invalid JSON structure: empty or missing frames");
        }
        // Build class map from objects
        Map<String, ReviewImageVo> imageMap = new HashMap<>();
        Map<String, List<ImageObjectVo>> imageObjectMap = new HashMap<>();
        Map<String, Integer> imageObjectOrderMap = new HashMap<>();
        Map<String, Integer> classMap = extractClassMap(jsonArray);


        //lưu trữ danh sách index của images để check valid
        Set<String> validImageIndices = new HashSet<>();
        for (int i = 0; i < jsonArray.length(); i++) {
            JSONObject frame = jsonArray.getJSONObject(i);
            String frameIndex = frame.optString("index", "");
            validImageIndices.add(frameIndex);
        }

        // Step 1: Scan folder for images and create ReviewImageVo
            //scan and sort image
        List<String> imagePaths = getImagePaths(rootPath + File.separator + fileName);
        imagePaths.sort((path1, path2) -> {
            String index1 = getImageIndexFromFileName(new File(path1).getName());
            String index2 = getImageIndexFromFileName(new File(path2).getName());
            return Integer.compare(Integer.parseInt(index1), Integer.parseInt(index2));
        });

        List<ReviewImageVo> orderedImageList = new ArrayList<>();
        for(String path : imagePaths) {
            String nameOnly = Paths.get(path).getFileName().toString();
            String imageIndex = getImageIndexFromFileName(nameOnly);
            if (!validImageIndices.contains(imageIndex)) continue;

            ReviewImageVo imageVo = buildReviewImageVo(task, path, nameOnly);
            imageMap.put(imageIndex, imageVo);
            orderedImageList.add(imageVo);
        }

        //Step 2 : Process objects as annotations
        for(int i = 0; i < jsonArray.length(); i ++) {
            JSONObject frame;
            try{
                frame = jsonArray.getJSONObject(i);
            } catch (JSONException e) {
                System.err.println("Error processing frame " + i + ": " + e.getMessage());
                continue;
            }

            String imageIndex;
            try{
                imageIndex = frame.getString("index");
            } catch (JSONException e) {
                System.err.println("Missing 'index' in frame " + i + ": " + e.getMessage());
                continue;
            }

            ReviewImageVo imageVo = imageMap.get(imageIndex);
            if (imageVo == null) continue;

            JSONArray objects;
            try{
                objects = frame.getJSONArray("objects");
            } catch (JSONException e) {
                System.err.println("Missing 'objects' in frame " + i + ": " + e.getMessage());
                continue;
            }

            for( int j = 0 ; j < objects.length(); j ++) {
                JSONObject ann;
                try{
                    ann = objects.getJSONObject(j);
                } catch (JSONException e) {
                    System.err.println("Error processing object " + j + " in frame " + i + ": " + e.getMessage());
                    continue;
                }
                int objectOrder = imageObjectOrderMap.merge(imageIndex, 1, Integer::sum);

                ImageObjectVo objectVo = buildImageObjectVo(task, imageVo, ann, classMap, objectOrder);
                imageObjectMap.computeIfAbsent(imageIndex, k -> new ArrayList<>()).add(objectVo);
                this.totalObj ++;
            }
        }

        // Step 3: Assign objectList and tagList to each ReviewImageVo
        for (ReviewImageVo imageVo : orderedImageList) {
            String imageIndex = getImageIndexFromFileName(imageVo.getFileName());
            List<ImageObjectVo> objList = imageObjectMap.getOrDefault(imageIndex, new ArrayList<>());
            imageVo.setObjectList(objList);

            List<ImageObjectTagVo> allTags = objList.stream()
                    .filter(obj -> obj.getTagList() != null)
                    .flatMap(obj -> obj.getTagList().stream())
                    .collect(Collectors.toList());

            imageVo.setTagList(allTags);
        }

        return orderedImageList;
    }

    private JSONArray getJsonArray(String fileName) throws FileNotFoundException {
        File dir = new File(rootPath + File.separator + fileName);
        String[] folderList = dir.list();
        String jsonPath = "";
        if (folderList != null) {
            for (String folder : folderList) {
                if (folder.contains(".json")) {
                    jsonPath = dir + File.separator + folder;
                    break;
                }
            }
        }
        if (jsonPath.isEmpty()) {
            throw new FileNotFoundException("JSON file not found in " + dir);
        }

        try (FileInputStream inputStream = new FileInputStream(new File(jsonPath))) {
            String jsonContent = new BufferedReader(new InputStreamReader(inputStream))
                    .lines()
                    .collect(StringBuilder::new, StringBuilder::append, StringBuilder::append)
                    .toString();
            return new JSONArray(jsonContent);
        } catch (IOException | JSONException e) {
            throw new FileNotFoundException("Error reading or parsing JSON: " + e.getMessage());
        }
    }


//    public List<ReviewImageVo> getWorkedListCoco(TaskVo task, String fileName) throws Exception {
//        JSONObject cocoJSON = getCocoJsonObject(fileName);
//        JSONArray imageArray = cocoJSON.optJSONArray("images");
//        JSONArray annotationArray = cocoJSON.optJSONArray("annotations");
//        JSONArray classArray = cocoJSON.optJSONArray("categories");
//
//        if (classArray == null || imageArray == null || annotationArray == null) {
//            throw new IllegalArgumentException("Invalid COCO JSON structure: missing categories, images or annotations");
//        }
//
//        Map<Integer, String> classMap = extractClassMap(classArray);
//        Map<Integer, ReviewImageVo> imageMap = new HashMap<>();
//        Map<Integer, List<ImageObjectVo>> imageObjectMap = new HashMap<>();
//        Map<Integer, Integer> imageObjectOrderMap = new HashMap<>();
//
//        // Step 1: Duyệt theo thứ tự ảnh trong folder và tạo ReviewImageVo theo thứ tự
//        List<String> imagePaths = getImagePaths(rootPath + File.separator + fileName);
//        List<ReviewImageVo> orderedImageList = new ArrayList<>();
//
//        for (String path : imagePaths) {
//            String nameOnly = new File(path).getName();
//            Integer imageId = findImageIdByFileName(imageArray, nameOnly);
//            if (imageId == null) continue;
//
//            ReviewImageVo imageVo = buildReviewImageVo(task, path, nameOnly);
//            imageMap.put(imageId, imageVo);
//            orderedImageList.add(imageVo);
//        }
//
//        // Step 2: Xử lý annotation gán vào imageObjectMap
//        for (int i = 0; i < annotationArray.length(); i++) {
//            JSONObject ann = annotationArray.getJSONObject(i);
//            int imageId = ann.getInt("image_id");
//            ReviewImageVo imageVo = imageMap.get(imageId);
//            if (imageVo == null) continue;
//
//            // image order
//            int objectOrder = imageObjectOrderMap.getOrDefault(imageId, 0) + 1;
//            imageObjectOrderMap.put(imageId, objectOrder);
//
//            ImageObjectVo objectVo = buildImageObjectVo(task, imageVo, ann, classMap, objectOrder);
//            imageObjectMap.computeIfAbsent(imageId, k -> new ArrayList<>()).add(objectVo);
//        }
//
//        // Step 3: Gán objectList và tagList vào từng ReviewImageVo theo imageId
//        for (ReviewImageVo imageVo : orderedImageList) {
//            List<ImageObjectVo> objList = imageObjectMap.getOrDefault(findImageIdByFileName(imageArray, imageVo.getFileName()), new ArrayList<>());
//            imageVo.setObjectList(objList);
//
//            List<ImageObjectTagVo> allTags = objList.stream()
//                    .filter(obj -> obj.getTagList() != null)
//                    .flatMap(obj -> obj.getTagList().stream())
//                    .collect(Collectors.toList());
//
//            imageVo.setTagList(allTags);
//        }
//
//        return orderedImageList;
//    }

    private Map<String, Integer> extractClassMap(JSONArray jsonArray) {
        Map<String, Integer> classMap = new HashMap<>();
        Set<String> classSet = new HashSet<>();
        int nextId = 1;

        for (int i = 0; i < jsonArray.length(); i++) {
            JSONObject frame;
            try {
                frame = jsonArray.getJSONObject(i);
                JSONArray objects = frame.getJSONArray("objects");
                for (int j = 0; j < objects.length(); j++) {
                    JSONObject obj = objects.getJSONObject(j);
                    JSONObject attributes = obj.getJSONObject("attributes");
                    int outerType = obj.getInt("type");
                    int innerType = attributes.getInt("type");
                    String className = this.utilService.getClassName(outerType, innerType);
                    classSet.add(className);
                }
            } catch (JSONException e) {
                System.err.println("Error extracting classes from frame " + i + ": " + e.getMessage());
            }
        }

        for (String className : classSet) {
            classMap.put(className, nextId++);
        }
        return classMap;
    }

    private Map<Integer, String> extractClassMapCoco(JSONArray classArray) {
        Map<Integer, String> classMap = new HashMap<>();
        for (int i = 0; i < classArray.length(); i++) {
            JSONObject cls = classArray.getJSONObject(i);
            classMap.put(cls.getInt("id"), cls.getString("name"));
        }
        return classMap;
    }

    private Integer findImageIdByFileName(JSONArray imageArray, String nameOnly) {
        for (int i = 0; i < imageArray.length(); i++) {
            JSONObject img = imageArray.getJSONObject(i);
            String cocoFileName = Paths.get(img.getString("file_name")).getFileName().toString();
            if (cocoFileName.equals(nameOnly)) {
                return img.getInt("id");
            }
        }
        return null;
    }

    private ReviewImageVo buildReviewImageVo(TaskVo task, String actualPath, String nameOnly) {
        ReviewImageVo imageVo = new ReviewImageVo();
        imageVo.setProjectId(task.getProjectId());
        imageVo.setTaskId(task.getTaskId());
        imageVo.setWorkTicketId(idGenerateService.generateWorkTicketId());

        String relativeFilePath = Paths.get(rootPath).relativize(Paths.get(actualPath)).toString().replace("\\", "/");
        String relativeParentPath = Paths.get(rootPath).relativize(Paths.get(new File(actualPath).getParent())).toString().replace("\\", "/");

        imageVo.setFileName(nameOnly);
        imageVo.setOriginalFileName(nameOnly);
        imageVo.setOriginalFilePath(relativeFilePath);
        imageVo.setPath(relativeParentPath);
        imageVo.setObjectList(new ArrayList<>());
        imageVo.setTagList(new ArrayList<>());

        return imageVo;
    }
    boolean isValidKeypoint(JSONObject kp) {
        return kp != null && kp.has("x") && kp.has("y") &&
                kp.getDouble("x") != -1 && kp.getDouble("y") != -1;
    }

    private String detectObjectType(JSONObject keypoints) {
        // Lấy từng keypoint
        JSONObject kp1 = keypoints.optJSONObject("keypoint1");
        JSONObject kp2 = keypoints.optJSONObject("keypoint2");
        JSONObject kp3 = keypoints.optJSONObject("keypoint3");
        JSONObject kp4 = keypoints.optJSONObject("keypoint4");
        JSONObject kp5 = keypoints.optJSONObject("keypoint5");
        JSONObject kp6 = keypoints.optJSONObject("keypoint6");

        boolean hasSidePoints = isValidKeypoint(kp1) && isValidKeypoint(kp2) && isValidKeypoint(kp3) && isValidKeypoint(kp4);
        boolean hasFront = isValidKeypoint(kp5);
        boolean hasRear = isValidKeypoint(kp6);

        if (hasSidePoints && hasFront && !hasRear) {
            return "drawCube2DFront";
        }  else if (hasSidePoints && !hasFront && hasRear) {
            return "drawCube2D";
        } else if (!isValidKeypoint(kp1) && !isValidKeypoint(kp2) && !isValidKeypoint(kp3) && !isValidKeypoint(kp4)) {
            return "rect";
        }
        return "rect";
    }

    public double[] findFirstKeypointMatchingY(JSONObject keypoints, double targetY) {
        for (int i = 1; i <= 6; i++) {
            String keyName = "keypoint" + i;
            JSONObject kp = keypoints.optJSONObject(keyName);

            if (kp != null && kp.has("y") && kp.has("x")) {
                double y = kp.getDouble("y");
                double x = kp.getDouble("x");

                if (Math.abs(y - targetY) < 0.001) {
                    return new double[]{x, y}; // trả về tọa độ [x, y]
                }
            }
        }
        return null;
    }

    private String determineDirection(JSONObject box, JSONObject keypoints) {
        // Calculate the midpoint x-coordinate of the bounding box
        double boxMidpointX = box.getDouble("x") + (box.getDouble("width") / 2.0);

        // Calculate the average x-coordinate of valid keypoints
        double sumX = 0.0;
        int validKeypointCount = 0;

        // Iterate through all keys in the JSONObject
        for (String key : keypoints.keySet()) {
            try {
                JSONObject kp = keypoints.getJSONObject(key);
                double x = kp.getDouble("x");
                double y = kp.getDouble("y");

                // Ignore invalid keypoints (e.g., x: -1, y: -1)
                if (x >= 0 && y >= 0) {
                    sumX += x;
                    validKeypointCount++;
                }
            } catch (JSONException e) {
                // Skip malformed keypoints
                continue;
            }
        }

        // If no valid keypoints, return "unknown"
        if (validKeypointCount == 0) {
            return "unknown";
        }

        double avgX = sumX / validKeypointCount;

        // Compare average x-coordinate of keypoints to the box's midpoint
        if (avgX > boxMidpointX) {
            return "right"; // Keypoints are biased toward the right side
        } else {
            return "left"; // Keypoints are biased toward the left side
        }
    }

    private ImageObjectVo buildImageObjectVo(TaskVo task, ReviewImageVo imageVo, JSONObject ann, Map<String, Integer> classMap, int objectOrder) {
        ImageObjectVo objectVo = new ImageObjectVo();

        objectVo.setObjectId(generateObjectId());
        objectVo.setProjectId(task.getProjectId());
        objectVo.setTaskId(task.getTaskId());
        objectVo.setWorkTicketId(imageVo.getWorkTicketId());
        objectVo.setColor(getRandomHexColor());
        objectVo.setObjectOrder(objectOrder);

        if(ann.has("attributes")) {
            try {

                JSONObject attrs = ann.getJSONObject("attributes");
                int outerType = ann.getInt("type");
                int innerType = attrs.getInt("type");
                String className = this.utilService.getClassName(outerType, innerType);

                Integer categoryId = classMap.getOrDefault(className, 0);
                objectVo.setClassId("cls" + categoryId);
                objectVo.setClassName(className);
                if (ann.has("box") && ann.has("keypoints")) {
                    JSONObject box = ann.getJSONObject("box");
                    JSONObject keypoints = ann.optJSONObject("keypoints");
                    //object type
                    String objectType = detectObjectType(keypoints);
                    objectVo.setObjectType(objectType);

                    String objectLocation = getObjectLocation(box, keypoints, objectType);
                    objectVo.setObjectLocation(objectLocation);
                }

                // Tags from attributes comment tag cho đỡ lag
//                List<ImageObjectTagVo> tagList = new ArrayList<>();
//                for (String key : attrs.keySet()) {
//                    Object value = attrs.opt(key);
//                    if (value == null) continue;
//
//                    ImageObjectTagVo tag = new ImageObjectTagVo();
//                    tag.setProjectId(task.getProjectId());
//                    tag.setTaskId(task.getTaskId());
//                    tag.setWorkTicketId(imageVo.getWorkTicketId());
//                    tag.setObjectId(objectVo.getObjectId());
//                    tag.setTagName(key);
//
//                    String tagValue = value.toString();
//                    tag.setTagValueName(tagValue);
//                    tag.setVal(tagValue);
//                    tag.setColor(getRandomHexColor());
//                    tag.setTagId(generateTagId());
//
//                    tagList.add(tag);
//                }
//                objectVo.setTagList(tagList);

            } catch (JSONException e) {
                System.err.println("Missing 'class' in annotation: " + e.getMessage());
            }
        }
        return objectVo;
    }

    private String getObjectLocation(JSONObject box, JSONObject keypoints, String objectType) {

        JSONArray objectLocation = new JSONArray();

            double x = box.optDouble("x");
            double y = box.optDouble("y");
            double w = box.optDouble("width");
            double h = box.optDouble("height");
            JSONObject kp1 = keypoints.optJSONObject("keypoint1");
            JSONObject kp2 = keypoints.optJSONObject("keypoint2");
            JSONObject kp3 = keypoints.optJSONObject("keypoint3");
            JSONObject kp4 = keypoints.optJSONObject("keypoint4");

            //nếu objectType là "rect", không có tọa độ boxSide
            if(objectType.equals("rect")) {
                JSONArray p1 = new JSONArray().put(x).put(y).put(UUID.randomUUID().toString().substring(0, 10));
                JSONArray p2 = new JSONArray().put(x + w).put(y + h).put(UUID.randomUUID().toString().substring(0, 10));
                objectLocation.put(p1);
                objectLocation.put(p2);
                return objectLocation.toString();
            }

            String determineDirection = determineDirection(box,keypoints);
            //nếu là side bên phải sẽ lấy 2 tọa độ khác
            if(determineDirection.equals("right")) {

                JSONArray topLeft = new JSONArray()
                        .put(x)
                        .put(y)
                        .put(UUID.randomUUID().toString().substring(0, 10));
                objectLocation.put(topLeft);

                //tìm điểm có tọa độ y trùng với tọa độ y của box
                double[] matched = findFirstKeypointMatchingY(keypoints, y + h);
                if (matched != null) {
                    JSONArray bottomRight = new JSONArray()
                            .put(matched[0])
                            .put(matched[1])
                            .put(UUID.randomUUID().toString().substring(0, 10));
                    objectLocation.put(bottomRight);
                }
                //nếu là side bên trái sẽ lấy 2 tọa độ khác
            } else if(determineDirection.equals("left")){
                double[] matched = findFirstKeypointMatchingY(keypoints,y);
                if (matched != null) {
                    JSONArray bottomRight = new JSONArray()
                            .put(matched[0])
                            .put(matched[1])
                            .put(UUID.randomUUID().toString().substring(0, 10));
                    objectLocation.put(bottomRight);
                }
                JSONArray topLeft = new JSONArray()
                        .put(x + w)
                        .put(y + h)
                        .put(UUID.randomUUID().toString().substring(0, 10));
                objectLocation.put(topLeft);
            }

            // Phần tử thứ 2 của objectLocation: tọa độ các điểm cạnh (boxSide)
            JSONObject boxSide = new JSONObject();
            boxSide.put("x1", kp1.getDouble("x"));
            boxSide.put("y1", kp1.getDouble("y"));
            boxSide.put("x2", kp2.getDouble("x"));
            boxSide.put("y2", kp2.getDouble("y"));
            boxSide.put("x3", kp3.getDouble("x"));
            boxSide.put("y3", kp3.getDouble("y"));
            boxSide.put("x4", kp4.getDouble("x"));
            boxSide.put("y4", kp4.getDouble("y"));

            boxSide.put("direction", determineDirection);
            objectLocation.put(boxSide);
            return objectLocation.toString();
    }

    private ImageObjectVo buildImageObjectVoCoco(TaskVo task, ReviewImageVo imageVo, JSONObject ann, Map<Integer, String> classMap, int objectOrder) {
        ImageObjectVo objectVo = new ImageObjectVo();
        objectVo.setObjectId("dobj" + UUID.randomUUID().toString().replace("-", "").substring(0, 14));
        objectVo.setProjectId(task.getProjectId());
        objectVo.setTaskId(task.getTaskId());
        objectVo.setWorkTicketId(imageVo.getWorkTicketId());
        objectVo.setColor(getRandomHexColor());
        objectVo.setObjectOrder(objectOrder);

        int categoryId = ann.getInt("category_id");
        objectVo.setClassId("cls" + categoryId);
        objectVo.setClassName(classMap.getOrDefault(categoryId, "unknown_class_" + categoryId));
        objectVo.setObjectType(ann.optString("type", "unknown"));

        // Segmentation
        if (ann.has("segmentation")) {
            objectVo.setImgObjectPolygonLocation(ann.getJSONArray("segmentation").toString());
        }

        // boxSide
        if (ann.has("boxSide")) {
            objectVo.setImgObjectBoxLocation(ann.getJSONObject("boxSide").toString());
        }

        // BBox xử lý thêm objectLocation
        if (ann.has("bbox")) {
            JSONArray bbox = ann.getJSONArray("bbox");
            if (bbox.length() == 4) {
                double x = bbox.getDouble(0), y = bbox.getDouble(1), w = bbox.getDouble(2), h = bbox.getDouble(3);
                JSONArray p1 = new JSONArray().put(x).put(y).put(UUID.randomUUID().toString().substring(0, 10));
                JSONArray p2 = new JSONArray().put(x + w).put(y + h).put(UUID.randomUUID().toString().substring(0, 10));
                JSONArray converted = new JSONArray().put(p1).put(p2);

                //hit
                if (ann.has("boxSide")) {
                    converted.put(ann.getJSONObject("boxSide"));
                }
                objectVo.setObjectLocation(converted.toString());
            } else {
                objectVo.setObjectLocation(bbox.toString());
            }
        }

        // Tags
        List<ImageObjectTagVo> tagList = new ArrayList<>();
        if (ann.has("attributes") && ann.get("attributes") instanceof JSONArray) {
            JSONArray attrs = ann.getJSONArray("attributes");
            for (int j = 0; j < attrs.length(); j++) {
                JSONObject attr = attrs.getJSONObject(j);
                for (String key : attr.keySet()) {
                    ImageObjectTagVo tag = new ImageObjectTagVo();
                    tag.setProjectId(task.getProjectId());
                    tag.setTaskId(task.getTaskId());
                    tag.setWorkTicketId(imageVo.getWorkTicketId());
                    tag.setObjectId(objectVo.getObjectId());
                    tag.setTagName(key);
                    tag.setTagValueName(attr.getString(key));
                    tag.setVal(attr.getString(key));
                    tag.setColor(getRandomHexColor());
                    tag.setTagId("tag" + UUID.randomUUID().toString().replace("-", "").substring(0, 12));
                    tagList.add(tag);
                }
            }
        }
        objectVo.setTagList(tagList);

        return objectVo;
    }

    public HashMap<String, Integer> getClassList(TaskVo taskVo, String fileName) throws FileNotFoundException {
        HashMap<String, Integer> classMap = new HashMap<>();
        JSONArray jsonArray = getJsonArray(fileName);

        for (int i = 0; i < jsonArray.length(); i++) {
            try {
                JSONObject frame = jsonArray.getJSONObject(i);
                JSONArray objects = frame.getJSONArray("objects");
                for (int j = 0; j < objects.length(); j++) {
                    JSONObject obj = objects.getJSONObject(j);
                    String className = obj.getString("class");
                    for (ClassVo classVo : taskVo.getClassVoList()) {
                        if (classVo.getClassName().equals(className)) {
                            classMap.compute(className, (key, value) -> (value == null) ? 1 : value + 1);
                            break;
                        }
                    }
                }
            } catch (JSONException e) {
                System.err.println("Error processing frame " + i + ": " + e.getMessage());
            }
        }
        return classMap;
    }

    public HashMap<String,Integer> getClassListCoco (TaskVo taskVo, String fileName) throws FileNotFoundException {
        HashMap<String,Integer> classMap = new HashMap<>();

        JSONObject jsonObject = getCocoJsonObject(fileName);
        // Get "annotations" array safely
        JSONArray annotations;
        try {
            annotations = jsonObject.getJSONArray("annotations");
        } catch (JSONException e) {
            System.out.println("Error: 'annotations' key not found or is not a valid JSONArray.");
            return classMap;  // Return empty map if annotations are missing
        }

        for (Object anno : annotations) {
            if (!(anno instanceof JSONObject)) continue;

            JSONObject  annoObject = (JSONObject) anno;

            if (!annoObject.has("category_id")) continue;

            // Convert category_id to String
            String classId = String.valueOf(annoObject.getInt("category_id"));

            for (ClassVo classVo : taskVo.getClassVoList()) {
                if (classVo.getClassId().equals(classId)) {
                    // Increment count in classMap
                    classMap.compute(classVo.getClassName(), (key, value) -> (value == null) ? 1 : value + 1);
                    break;  // Found the matching class, no need to check further
                }
            }
        }
        return classMap;
    }

    public ClassVo getClassTagList(String className, TaskVo taskVo, String fileName) throws FileNotFoundException {
        ClassVo classVo = new ClassVo();
        classVo.setClassName(className);
        classVo.setTotalCnt(taskVo.getTotCnt());
        classVo.setTotalObj(taskVo.getTotalObj());
        classVo.setTagCnt(taskVo.getTagList().size());
        classVo.setClassTagList(taskVo.getTagList());

        for (TagVo tagVo : classVo.getClassTagList()) {
            List<TagClassVo> tagClassVoList = new ArrayList<>();
            if (tagVo.getTagValueList() != null) {
                for (Object tagValueObj : tagVo.getTagValueList()) {
                    String tagValue = String.valueOf(tagValueObj);
                    TagClassVo tagClassVo = new TagClassVo();
                    tagClassVo.setTagName(tagValue);
                    tagClassVoList.add(tagClassVo);
                }
            }
            tagVo.setTagList(tagClassVoList);
        }

        JSONArray jsonArray = getJsonArray(fileName);
        String classId = retrieveClassId(className, jsonArray);

        for (TagVo tagVo : classVo.getClassTagList()) {
            String tagName = tagVo.getTagName().equals("side") ? "direction" : tagVo.getTagName();
            for (int i = 0; i < jsonArray.length(); i++) {
                try {
                    JSONObject frame = jsonArray.getJSONObject(i);
                    JSONArray objects = frame.getJSONArray("objects");
                    for (int j = 0; j < objects.length(); j++) {
                        JSONObject obj = objects.getJSONObject(j);
                        String jsonClassName = obj.getString("class");
                        if (!jsonClassName.equals(className)) continue;

                        JSONObject attributes = obj.optJSONObject("attributes");
                        if (attributes != null && attributes.has(tagName)) {
                            String attributeVal = String.valueOf(attributes.get(tagName));
                            for (TagClassVo tagClassVo : tagVo.getTagList()) {
                                if (attributeVal.equals(tagClassVo.getTagName())) {
                                    tagClassVo.setDataQty(tagClassVo.getDataQty() + 1);
                                }
                            }
                        }
                    }
                } catch (JSONException e) {
                    System.err.println("Error processing frame " + i + ": " + e.getMessage());
                }
            }
        }
        return classVo;
    }

    // get tag list value for project information
//    public ClassVo getClassTagListCoco (String className,TaskVo taskVo, String fileName) throws FileNotFoundException {
//        ClassVo  classVo      = new ClassVo();
//        classVo.setClassName(className);
//        classVo.setTotalCnt(taskVo.getTotCnt());
//        classVo.setTotalObj(taskVo.getTotalObj());
//        classVo.setTagCnt(taskVo.getTagList().size());
//        classVo.setClassTagList(taskVo.getTagList());
//
//        // hàm này dùng để set giá trị cho tagVo.setTagList() thông qua tagVo.getTagValueList()
//        for (TagVo tagVo : classVo.getClassTagList()) {
//            List<TagClassVo> tagClassVoList = new ArrayList<>();
//            if (tagVo.getTagValueList() != null && tagVo.getTagValueList().size() > 0) {
//                for (String tagValue : tagVo.getTagValueList()) {
//                    TagClassVo tagClassVo = new TagClassVo();
//                    tagClassVo.setTagName(tagValue);
//                    tagClassVoList.add(tagClassVo);
//                }
//            }
//            tagVo.setTagList(tagClassVoList);
//        }
//
//        JSONObject jsonObject = getCocoJsonObject(fileName);
//        String classId = retrieveClassId(className, jsonObject);
//        // Get "annotations" array safely, avoid NullPointerException by using opt() instead of get()
//        JSONArray  annotations     = (JSONArray) jsonObject.opt("annotations");
//
//        // This block of code sets the data quantity for each element in tagVo.getTagList()
//        for (TagVo tagVo : classVo.getClassTagList()) {
//            for (Object anno : annotations) {
//                if (anno instanceof JSONObject) {
//                    JSONObject  annoObject = (JSONObject) anno;
//                    String      jsonClassId = annoObject.getNumber("category_id").toString();
//
//                    JSONArray attributeArray = annoObject.optJSONArray("attributes");
//                    if (attributeArray != null) {
//                        String attributeVal = null;
//
//                        for (Object attr : attributeArray) {
//                            if (attr instanceof JSONObject) {
//                                JSONObject attrObj = (JSONObject) attr;
//                                if (attrObj.has(tagVo.getTagName()) ) {
//                                    attributeVal = attrObj.optString(tagVo.getTagName());
//                                    break;
//                                }
//                            }
//                        }
//                        if (attributeVal != null && jsonClassId.equals(classId)) {
//                            for (TagClassVo tagClassVo : tagVo.getTagList()) {
//                                if (attributeVal.equals(tagClassVo.getTagName())) {
//                                    tagClassVo.setDataQty(tagClassVo.getDataQty() + 1);
//                                }
//                            }
//                        }
//                    }
//                }
//            }
//        }
//        return classVo;
//    }

    public List<TagVo> getTagList(String classId, String folderPath, TaskVo taskVo) throws FileNotFoundException {
        File dir = new File(folderPath);
        String[] folderList = dir.list();
        String cocoPath = "";
        if (folderList != null) {
            for (String folder : folderList) {
                if (folder.contains("coco")) {
                    cocoPath = folderPath + File.separator + folder;
                    break;
                }
            }
        }
        if (cocoPath.isEmpty()) {
            throw new FileNotFoundException("COCO JSON file not found in " + folderPath);
        }

        List<String> occlusionList = new ArrayList<>();
        List<String> truncationList = new ArrayList<>();
        List<String> sideList = new ArrayList<>();

        try (FileInputStream inputStream = new FileInputStream(new File(cocoPath))) {
            String jsonContent = new BufferedReader(new InputStreamReader(inputStream))
                    .lines()
                    .collect(StringBuilder::new, StringBuilder::append, StringBuilder::append)
                    .toString();
            JSONArray jsonArray = new JSONArray(jsonContent);

            for (int i = 0; i < jsonArray.length(); i++) {
                JSONObject frame = jsonArray.getJSONObject(i);
                JSONArray objects = frame.getJSONArray("objects");
                for (int j = 0; j < objects.length(); j++) {
                    JSONObject obj = objects.getJSONObject(j);
                    String className = obj.getString("class");
                    String jsonClassId = retrieveClassId(className, jsonArray);
                    if (!classId.equals(jsonClassId)) continue;

                    JSONObject attributes = obj.optJSONObject("attributes");
                    if (attributes == null) continue;

                    if (attributes.has("occlusion")) {
                        String occlusionVal = String.valueOf(attributes.get("occlusion"));
                        if (!occlusionList.contains(occlusionVal)) {
                            occlusionList.add(occlusionVal);
                        }
                    }
                    if (attributes.has("truncation")) {
                        String truncationVal = String.valueOf(attributes.get("truncation"));
                        if (!truncationList.contains(truncationVal)) {
                            truncationList.add(truncationVal);
                        }
                    }
                    if (attributes.has("direction")) {
                        String sideVal = String.valueOf(attributes.get("direction"));
                        if (!sideList.contains(sideVal)) {
                            sideList.add(sideVal);
                        }
                    }
                }
            }
        } catch (IOException | JSONException e) {
            throw new FileNotFoundException("Error reading or parsing JSON: " + e.getMessage());
        }

        List<TagVo> tagList = getTagList(classId, taskVo);
        for (TagVo tagVo : tagList) {
            if (tagVo.getTagName().equals("Occlusion")) {
                tagVo.setTagValueList(new ArrayList<>(occlusionList));
            } else if (tagVo.getTagName().equals("Truncation")) {
                tagVo.setTagValueList(new ArrayList<>(truncationList));
            } else if (tagVo.getTagName().equals("side")) {
                tagVo.setTagValueList(new ArrayList<>(sideList));
            }
        }
        return tagList;
    }

    // get tag list value for project information
//    public List<TagVo> getTagListCoco (String classId,String folderPath,TaskVo taskVo) throws FileNotFoundException {
//        File        dir          = new File(folderPath);
//        String[]    folderList   = dir.list();
//        String      cocoPath     = "";
//
//
//        List<TagVo> tagList      = getTagList(classId,taskVo);
//        for (String folder : folderList) {
//            if (folder.contains("coco")) {
//                cocoPath = dir.toString() + File.separator + folder;
//                break;
//            }
//        }
//
//        File            cocoFile  = new File(cocoPath);
//        FileInputStream inputStream = new FileInputStream(cocoFile);
//
//        // Convert to JSON string using InputStream
//        String jsonContent = new BufferedReader(new InputStreamReader(inputStream))
//                .lines().collect(StringBuilder::new, StringBuilder::append, StringBuilder::append).toString();
//
//        JSONObject jsonObject = new JSONObject(jsonContent);
//        JSONArray  annotations     = (JSONArray) jsonObject.get("annotations");
//
//        List<String> occlusionList          = new ArrayList<>();
//        List<String> sideList               = new ArrayList<>();
//        List<String> truncationList         = new ArrayList<>();
//
//        for (Object anno : annotations) {
//            JSONObject  annoObject = (JSONObject) anno;
//            String      jsonClassId = annoObject.getNumber("category_id").toString();
//
//            if (!annoObject.has("attributes") || !(annoObject.get("attributes") instanceof JSONArray)) {
//                continue; // Skip objects without "attributes"
//            }
//            if(!Objects.equals(jsonClassId, classId)) { continue;}
//
//            // Get the "attributes" array
//            JSONArray   attributes  = (JSONArray) annoObject.get("attributes");
//            for (Object attr : attributes) {
//                JSONObject  objects       = (JSONObject) attr;
//                if(objects.has("Occlusion")) {
//                    String occlusionVal = objects.getString("Occlusion");
//                    if (!occlusionList.contains(String.valueOf(occlusionVal))) {
//                        occlusionList.add(String.valueOf(occlusionVal));
//                    }
//                }
//
//                if(objects.has("Truncation")) {
//                    String truncationVal = objects.getString("Truncation");
//                    if (!truncationList.contains(String.valueOf(truncationVal))) {
//                        truncationList.add(String.valueOf(truncationVal));
//                    }
//                }
//
//                if(objects.has("side")) {
//                    String sideVal = objects.getString("side");
//                    if (!sideList.contains(String.valueOf(sideVal))) {
//                        sideList.add(String.valueOf(sideVal));
//                    }
//                }
//            }
//        }
//
//        for (TagVo tagVo : tagList) {
//            if (tagVo.getTagName().equals("Occlusion")) {
//                tagVo.setTagValueList(occlusionList);
//            } else if (tagVo.getTagName().equals("Truncation")) {
//                tagVo.setTagValueList(truncationList);
//            } else if (tagVo.getTagName().equals("side")) {
//                tagVo.setTagValueList(sideList);
//            }
//        }
//        return tagList;
//    }


    // hard generate tag list
    private List<TagVo> getTagList (String classId,TaskVo taskVo) {
        List<String> classIdList = new ArrayList<>();
        classIdList.add(classId);

        List<TagVo>  tagList = new ArrayList<>();

        // Tag Name : Truncation
        TagVo truncationTag = new TagVo();
        truncationTag.setProjectId(taskVo.getProjectId());
        truncationTag.setTaskId(taskVo.getTaskId());
        truncationTag.setTagId(idGenerateService.generateTagId());
        truncationTag.setTagName("Truncation");
        truncationTag.setTagTypeCd("OBJ");
        truncationTag.setTagValTypeCd("20");
        truncationTag.setColor(getRandomHexColor());
        truncationTag.setMatchClass(String.join(", ", classIdList));
        tagList.add(truncationTag);

        // Tag Name : Occlusion
        TagVo occlusionTag = new TagVo();
        occlusionTag.setProjectId(taskVo.getProjectId());
        occlusionTag.setTaskId(taskVo.getTaskId());
        occlusionTag.setTagId(idGenerateService.generateTagId());
        occlusionTag.setTagName("Occlusion");
        occlusionTag.setTagTypeCd("OBJ");
        occlusionTag.setTagValTypeCd("20");
        occlusionTag.setColor(getRandomHexColor());
        occlusionTag.setMatchClass(String.join(", ", classIdList));
        tagList.add(occlusionTag);

        // Tag Name : side
        TagVo typeTag = new TagVo();
        typeTag.setProjectId(taskVo.getProjectId());
        typeTag.setTaskId(taskVo.getTaskId());
        typeTag.setTagId(idGenerateService.generateTagId());
        typeTag.setTagName("side");
        typeTag.setTagTypeCd("OBJ");
        typeTag.setTagValTypeCd("20");
        typeTag.setColor(getRandomHexColor());
        typeTag.setMatchClass(String.join(", ", classIdList));
        tagList.add(typeTag);

        return tagList;
    }


    //helper method to get the list of image files in a folder
    private List<String> getImages(String folderPath) throws Exception {
        File dir = new File(folderPath);
        List<String> imagePaths = new ArrayList<>();

        if (!dir.exists() || !dir.isDirectory()) {
            throw new Exception("Invalid folder path: " + folderPath);
        }
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
                        if (fileName.endsWith(".jpg") || fileName.endsWith(".jpeg") ||
                                fileName.endsWith(".png")) {
                            imagePaths.add(file.getName());
                        }
                    }
                }
            }
        }
        return imagePaths;
    }

    //helper method to get the coco json object
    private JSONObject getCocoJsonObject(String fileName) throws FileNotFoundException {
        File     dir          = new File(rootPath + File.separator + fileName);
        String[] folderList   = dir.list();
        String   cocoPath   = "";
        assert folderList != null;
        for (String folder : folderList) {
            if (folder.contains("coco")) {
                cocoPath = dir + File.separator + folder;
                break;
            }
        }
        File            cocoFile  = new File(cocoPath);
        FileInputStream inputStream = new FileInputStream(cocoFile);

        // Convert to JSON string using InputStream
        String jsonContent = new BufferedReader(new InputStreamReader(inputStream))
                .lines().collect(StringBuilder::new, StringBuilder::append, StringBuilder::append).toString();

        return new JSONObject(jsonContent);
    }



    private String retrieveClassId(String className, JSONArray jsonArray) {
        Map<String, Integer> classMap = extractClassMap(jsonArray);
        Integer classId = classMap.get(className);
        return classId != null ? String.valueOf(classId) : null;
    }

    //helper method to get the classId based on className
    private String retrieveClassIdCoco (String className, JSONObject cocoJSON) {
        JSONArray classes = cocoJSON.getJSONArray("categories");
        if (classes != null && classes.isEmpty()) {
            return null;
        }
        for (Object cls : classes) {
            if (cls instanceof JSONObject) {
                JSONObject classObj = (JSONObject) cls;
                if (classObj.has("name") && classObj.has("id")) {
                    String comparedName = classObj.getString("name");
                    if (comparedName.equals(className)) {
                        return String.valueOf(classObj.get("id")); // Return classId as String
                    }
                }
            }
        }
        return null;
    }

    public List<String> getImagePaths(String folderPath) throws Exception {
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
                        if ( fileName.endsWith(".jpg") || fileName.endsWith(".jpeg") ||
                                fileName.endsWith(".png")) {
                            imagePaths.add(file.getPath());
                        }
                    }
                }
            }
        }
        return imagePaths;
    }

    //helper method to generate a random hex color
    private static String getRandomHexColor() {
        int idx = ThreadLocalRandom.current().nextInt(COLOR_POOL.length);
        return COLOR_POOL[idx];
    }

    private String getImageIndexFromFileName(String fileName) {
        return fileName.replaceAll("^frame_(\\d+)\\.(jpg|jpeg|png)$", "$1");
    }

    private boolean hasFrameWithIndex(JSONArray jsonArray, String imageIndex) {
        for (int i = 0; i < jsonArray.length(); i++) {
            JSONObject frame = jsonArray.getJSONObject(i);
            if (imageIndex.equals(frame.getString("index"))) {
                return true;
            }
        }
        return false;
    }

    private String generateTagId() {
        return "tag" + TAG_COUNTER.getAndIncrement();
    }

    private String generateObjectId() {
        return "dobj" + OBJECT_COUNTER.getAndIncrement();
    }



}
