package com.infiniq.ams.standalone.domain.service;

import com.infiniq.ams.standalone.domain.vo.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.*;
import java.math.BigDecimal;
import java.nio.file.Paths;
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

    private static final AtomicInteger OBJECT_COUNTER = new AtomicInteger(100000);
    private static final AtomicInteger TAG_COUNTER = new AtomicInteger(100000);

    @Getter
    private int totalObj = 0;
    public List<ReviewImageVo> getWorkedList(TaskVo task, String fileName) throws Exception {
        this.totalObj = 0;
        // Load all json files in folder and aggregate
        List<Object> roots = readAllJsonRoots(fileName);
        boolean hasCoco = roots.stream().anyMatch(o -> o instanceof JSONObject);
        if (hasCoco) {
            List<ReviewImageVo> result = new ArrayList<>();
            for (Object r : roots) {
                if (r instanceof JSONObject) {
                    result.addAll(getWorkedListFromCoco((JSONObject) r, task));
                }
            }
            return result;
        }
        // Legacy frames format (concatenate)
        JSONArray jsonArray = new JSONArray();
        for (Object r : roots) {
            if (r instanceof JSONArray) {
                JSONArray arr = (JSONArray) r;
                for (int i = 0; i < arr.length(); i++) jsonArray.put(arr.get(i));
            }
        }
        if (jsonArray.isEmpty()) {
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

    /**
     * Read JSON root as either JSONArray (legacy) or JSONObject (COCO-like)
     */
    private Object readJsonRoot(String fileName) throws FileNotFoundException {
        File dir = new File(rootPath + File.separator + fileName);
        String[] folderList = dir.list();
        String jsonPath = "";
        if (folderList != null) {
            for (String folder : folderList) {
                if (folder.toLowerCase().endsWith(".json")) {
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
            try {
                return new JSONArray(jsonContent);
            } catch (JSONException ex) {
                // Try object format
                return new JSONObject(jsonContent);
            }
        } catch (IOException | JSONException e) {
            throw new FileNotFoundException("Error reading or parsing JSON: " + e.getMessage());
        }
    }

    private List<Object> readAllJsonRoots(String fileName) throws FileNotFoundException {
        File dir = new File(rootPath + File.separator + fileName);
        if (!dir.exists() || !dir.isDirectory()) {
            throw new FileNotFoundException("Invalid folder path: " + dir);
        }
        List<Object> result = new ArrayList<>();
        Queue<File> q = new LinkedList<>();
        q.add(dir);
        while (!q.isEmpty()) {
            File cur = q.poll();
            File[] files = cur.listFiles();
            if (files == null) continue;
            for (File f : files) {
                if (f.isDirectory()) {
                    q.add(f);
                } else if (f.getName().toLowerCase().endsWith(".json")) {
                    try (FileInputStream inputStream = new FileInputStream(f)) {
                        String jsonContent = new BufferedReader(new InputStreamReader(inputStream))
                                .lines()
                                .collect(StringBuilder::new, StringBuilder::append, StringBuilder::append)
                                .toString();
                        try {
                            result.add(new JSONArray(jsonContent));
                        } catch (JSONException ex) {
                            try {
                                result.add(new JSONObject(jsonContent));
                            } catch (JSONException ex2) {
                                // ignore invalid json
                            }
                        }
                    } catch (IOException e) {
                        // ignore
                    }
                }
            }
        }
        if (result.isEmpty()) {
            throw new FileNotFoundException("JSON file not found under " + dir);
        }
        return result;
    }

    private List<ReviewImageVo> getWorkedListFromCoco(JSONObject root, TaskVo task) {
        Map<Integer, String> catIdToName = new HashMap<>();
        if (root.has("categories")) {
            JSONArray cats = root.getJSONArray("categories");
            for (int i = 0; i < cats.length(); i++) {
                JSONObject c = cats.getJSONObject(i);
                int id = c.getInt("id");
                String name = c.optString("name", "");
                catIdToName.put(id, name);
            }
        }

        // Build image map
        Map<Long, ReviewImageVo> imageMap = new LinkedHashMap<>();
        if (root.has("images")) {
            JSONArray imgs = root.getJSONArray("images");
            for (int i = 0; i < imgs.length(); i++) {
                JSONObject im = imgs.getJSONObject(i);
                long imageId = im.getLong("id");
                String filePathRaw = im.getString("file_name");
                String filePath = filePathRaw.startsWith("/") ? filePathRaw.substring(1) : filePathRaw;
                String nameOnly = Paths.get(filePath).getFileName().toString();
                String parent = new File(filePath).getParent();
                parent = parent == null ? "" : parent.replace("\\", "/");

                ReviewImageVo imageVo = new ReviewImageVo();
                imageVo.setProjectId(task.getProjectId());
                imageVo.setTaskId(task.getTaskId());
                imageVo.setWorkTicketId(idGenerateService.generateWorkTicketId());
                imageVo.setFileName(nameOnly);
                imageVo.setOriginalFileName(nameOnly);
                imageVo.setOriginalFilePath(filePath);
                imageVo.setPath(parent);
                imageVo.setObjectList(new ArrayList<>());
                imageVo.setTagList(new ArrayList<>());
                imageMap.put(imageId, imageVo);
            }
        }

        // Group annotations by image
        if (root.has("annotations")) {
            JSONArray anns = root.getJSONArray("annotations");
            for (int i = 0; i < anns.length(); i++) {
                JSONObject ann = anns.getJSONObject(i);
                long imageId = ann.getLong("image_id");
                ReviewImageVo imageVo = imageMap.get(imageId);
                if (imageVo == null) continue;

                ImageObjectVo objectVo = new ImageObjectVo();
                objectVo.setObjectId(generateObjectId());
                objectVo.setProjectId(task.getProjectId());
                objectVo.setTaskId(task.getTaskId());
                objectVo.setWorkTicketId(imageVo.getWorkTicketId());
                objectVo.setObjectOrder(imageVo.getObjectList().size() + 1);

                int catId = ann.optInt("category_id", -1);
                String className = catIdToName.getOrDefault(catId, "");
                objectVo.setClassName(className);
                objectVo.setClassId(findClassIdyClassName(task, className));
                objectVo.setColor(utilService.getClassColorByClassName(className));

                // Determine object type: default rect when bbox exists
                String type = ann.optString("type", "");
                if (ann.has("bbox")) {
                    objectVo.setObjectType("rect");
                    JSONArray bbox = ann.getJSONArray("bbox");
                    double x = bbox.optDouble(0);
                    double y = bbox.optDouble(1);
                    double w = bbox.optDouble(2);
                    double h = bbox.optDouble(3);
                    JSONArray loc = new JSONArray();
                    loc.put(new JSONArray().put(x).put(y).put(UUID.randomUUID().toString().substring(0, 10)));
                    loc.put(new JSONArray().put(x + w).put(y + h).put(UUID.randomUUID().toString().substring(0, 10)));
                    objectVo.setObjectLocation(loc.toString());
                } else if ("rect".equalsIgnoreCase(type)) {
                    // fallback: if only type rect and segmentation is 2 points [x1,y1,x2,y2]
                    JSONArray segs = ann.optJSONArray("segmentation");
                    if (segs != null && segs.length() > 0) {
                        JSONArray p = segs.getJSONArray(0);
                        if (p.length() >= 4) {
                            double x1 = p.getDouble(0), y1 = p.getDouble(1), x2 = p.getDouble(2), y2 = p.getDouble(3);
                            JSONArray loc = new JSONArray();
                            loc.put(new JSONArray().put(x1).put(y1).put(UUID.randomUUID().toString().substring(0, 10)));
                            loc.put(new JSONArray().put(x2).put(y2).put(UUID.randomUUID().toString().substring(0, 10)));
                            objectVo.setObjectType("rect");
                            objectVo.setObjectLocation(loc.toString());
                        }
                    }
                }
                objectVo.setTagList(new ArrayList<>());
                imageVo.getObjectList().add(objectVo);
                this.totalObj++;
            }
        }

        // Flatten tags per image
        for (ReviewImageVo iv : imageMap.values()) {
            List<ImageObjectTagVo> allTags = iv.getObjectList().stream()
                    .filter(obj -> obj.getTagList() != null)
                    .flatMap(obj -> obj.getTagList().stream())
                    .collect(Collectors.toList());
            iv.setTagList(allTags);
        }
        return new ArrayList<>(imageMap.values());
    }


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

    private String determineObjectType(JSONObject keypoints) {
        // Lấy từng keypoint
        JSONObject kp1 = keypoints.optJSONObject("keypoint1");
        JSONObject kp2 = keypoints.optJSONObject("keypoint2");
        JSONObject kp3 = keypoints.optJSONObject("keypoint3");
        JSONObject kp4 = keypoints.optJSONObject("keypoint4");
        JSONObject kp5 = keypoints.optJSONObject("keypoint5");
        JSONObject kp6 = keypoints.optJSONObject("keypoint6");
        JSONObject kp7 = keypoints.optJSONObject("keypoint7");
        JSONObject kp8 = keypoints.optJSONObject("keypoint8");

        boolean hasSidePoints = isValidKeypoint(kp1) && isValidKeypoint(kp2) && isValidKeypoint(kp3) && isValidKeypoint(kp4);
        boolean hasFront = isValidKeypoint(kp5);
        boolean hasRear = isValidKeypoint(kp6);
        if(kp5 == null && kp6 == null) {
            return "rect";
        }
        else if(kp7 != null && kp8 != null) {
            return "keypoint";
        }
        else if(!hasSidePoints && hasFront && !hasRear) {
            return "draw6PointCube";
        }
        else if(!hasSidePoints && !hasFront && hasRear) {
            return "draw6PointCube";
        }
        else if (hasSidePoints && hasFront && !hasRear) {
            return "draw6PointCube";
        }
        else if (hasSidePoints && !hasFront && hasRear) {
            return "draw6PointCube";
        }
        else if (hasSidePoints && !hasFront && !hasRear) {
            return "draw6PointCube";
        }
        else if (!hasSidePoints && !hasFront && !hasRear) {
            return "draw6PointCube";
        }
        return "undefined";
    }

    private ImageObjectVo buildImageObjectVo(TaskVo task, ReviewImageVo imageVo, JSONObject ann, Map<String, Integer> classMap, int objectOrder) {
        ImageObjectVo objectVo = new ImageObjectVo();

        objectVo.setObjectId(generateObjectId());
        objectVo.setProjectId(task.getProjectId());
        objectVo.setTaskId(task.getTaskId());
        objectVo.setWorkTicketId(imageVo.getWorkTicketId());
        objectVo.setObjectOrder(objectOrder);

        if(ann.has("attributes")) {
            try {
                JSONObject attrs = ann.getJSONObject("attributes");
                int outerType = ann.getInt("type");
                int innerType = attrs.getInt("type");
                String className = this.utilService.getClassName(outerType, innerType);
                String color = this.utilService.getClassColorByClassName(className);
                String classId = findClassIdyClassName(task, className);
                objectVo.setClassId(classId);
                objectVo.setClassName(className);
                objectVo.setColor(color);

                if (ann.has("box") && ann.has("keypoints")) {
                    JSONObject box = ann.getJSONObject("box");
                    JSONObject keypoints = ann.optJSONObject("keypoints");
                    //object type
                    String objectType = determineObjectType(keypoints);
                    objectVo.setObjectType(objectType);

                    //object Location
                    String objectLocation = getObjectLocation(box, keypoints, objectType);
                    objectVo.setObjectLocation(objectLocation);
                    //add bounding box (roi) for keypoint object
                    if(objectType.equals("keypoint")){
                        JSONObject boundingBox = new JSONObject().put("x", box.get("x")).put("y", box.get("y")).put("w", box.get("width")).put("h", box.get("height"));
                        objectVo.setObjectBoundingBox(boundingBox.toString());
                    }
                    // Tags from attributes
                    List<ImageObjectTagVo> tagList = new ArrayList<>();
                    for (String key : attrs.keySet()) {
                        Object value = attrs.opt(key);
                        // chỉ lấy tag truncation và occlusion
                        if (value == null || value.equals(0) || (!Objects.equals(key, "truncation") && !Objects.equals(key, "occlusion"))) continue;
                        ImageObjectTagVo tag = new ImageObjectTagVo();
                        tag.setProjectId(task.getProjectId());
                        tag.setTaskId(task.getTaskId());
                        tag.setWorkTicketId(imageVo.getWorkTicketId());
                        tag.setObjectId(objectVo.getObjectId());
                        tag.setTagName(key);

                        String tagValue = value.toString();
                        tag.setTagValueName(tagValue);
                        tag.setVal(tagValue);
                        tag.setColor(this.utilService.getTagColorByTagNameAndTagValue(key,tagValue));
                        tag.setTagId(generateTagId());

                        tagList.add(tag);
                    }
                    //get direction (front/rear) tag
                    if(objectType != null && objectType == "draw6PointCube") {
                        new ImageObjectTagVo();
                        ImageObjectTagVo directionTag;
                        directionTag = getDirectionTag(task, imageVo, objectVo, keypoints);
                        if (directionTag != null) {
                            tagList.add(directionTag);
                        }
                    }
                    objectVo.setTagList(tagList);
                }
            } catch (JSONException e) {
                System.err.println("Missing 'class' in annotation: " + e.getMessage());
            }
        }
        return objectVo;
    }

    private ImageObjectTagVo getDirectionTag(TaskVo task, ReviewImageVo imageVo,ImageObjectVo objectVo,JSONObject keypoints) {
        JSONObject kp5 = keypoints.optJSONObject("keypoint5");
        JSONObject kp6 = keypoints.optJSONObject("keypoint6");

        if(isValidKeypoint(kp5) && !isValidKeypoint(kp6)) {
            return ImageObjectTagVo.builder()
                    .projectId(task.getProjectId())
                    .taskId(task.getTaskId())
                    .workTicketId(imageVo.getWorkTicketId())
                    .objectId(objectVo.getObjectId())
                    .tagName("direction")
                    .tagValueName("front")
                    .val("front")
                    .color("#76ddee")
                    .tagId(generateTagId())
                    .build();
        }
        else if (!isValidKeypoint(kp5) && isValidKeypoint(kp6)){
            return ImageObjectTagVo.builder()
                    .projectId(task.getProjectId())
                    .taskId(task.getTaskId())
                    .workTicketId(imageVo.getWorkTicketId())
                    .objectId(objectVo.getObjectId())
                    .tagName("direction")
                    .tagValueName("rear")
                    .val("rear")
                    .color("#ffc654")
                    .tagId(generateTagId())
                    .build();
        }
        else if (!isValidKeypoint(kp5) && !isValidKeypoint(kp6)){
            return ImageObjectTagVo.builder()
                    .projectId(task.getProjectId())
                    .taskId(task.getTaskId())
                    .workTicketId(imageVo.getWorkTicketId())
                    .objectId(objectVo.getObjectId())
                    .tagName("direction")
                    .tagValueName("side")
                    .val("side")
                    .color("#008000")
                    .tagId(generateTagId())
                    .build();
        }
        return null;
    }

    private boolean isLeftSide(double x, double w, JSONObject sidePoint) {
        double cx = ((x + w) + x) / 2;
        double sideX = ((BigDecimal) sidePoint.get("x")).doubleValue();
        return cx <= sideX;
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
            JSONObject kp5 = keypoints.optJSONObject("keypoint5");
            JSONObject kp6 = keypoints.optJSONObject("keypoint6");
            JSONObject kp7 = keypoints.optJSONObject("keypoint7");
            JSONObject kp8 = keypoints.optJSONObject("keypoint8");

        //nếu objectType là "rect", không có tọa độ boxSide
        if(objectType.equals("rect")) {
            JSONArray p1 = new JSONArray().put(x).put(y).put(UUID.randomUUID().toString().substring(0, 10));
            JSONArray p2 = new JSONArray().put(x + w).put(y + h).put(UUID.randomUUID().toString().substring(0, 10));
            objectLocation.put(p1);
            objectLocation.put(p2);
            return objectLocation.toString();
        }

        if(objectType.equals("draw6PointCube")) {
            // case : front
            if(isValidKeypoint(kp5) && !isValidKeypoint(kp6)) {
                boolean leftSide = isLeftSide(x, w, kp5);
                // -> front + left side
                if( leftSide) {
                    // create function to handle fake x, y for kp 1, 2, 3, 4
                    if(!isValidKeypoint(kp1)){
                        kp1.put("x", 2 * (kp5.getDouble("x")) - x);
                        kp1.put("y", y);
                    }

                    if(!isValidKeypoint(kp2)){
                        kp2.put("x", kp1.get("x"));
                        kp2.put("y", y + h);
                    }
                    if(!isValidKeypoint(kp3)){
                        kp3.put("x", x );
                        kp3.put("y", y + h);
                    }

                    if(!isValidKeypoint(kp4)){
                        kp4.put("x", x);
                        kp4.put("y", y);
                    }
                    JSONArray p1 = new JSONArray().put(x).put(y + h).put(1).put(UUID.randomUUID().toString().substring(0, 10));
                    JSONArray p2 = new JSONArray().put(x + w).put(y).put(1).put(UUID.randomUUID().toString().substring(0, 10));
                    JSONArray p7 = new JSONArray().put(x + w).put(y + h).put(1).put(UUID.randomUUID().toString().substring(0, 10));
                    JSONArray p8 = new JSONArray().put(x).put(y).put(1).put(UUID.randomUUID().toString().substring(0, 10));

                    JSONArray p4 = new JSONArray().put(kp3.get("x")).put(kp3.get("y")).put(isValidKeypoint(kp3) ? 1 : 0).put(UUID.randomUUID().toString().substring(0, 10));
                    JSONArray p5 = new JSONArray().put(kp4.get("x")).put(kp4.get("y")).put(isValidKeypoint(kp4) ? 1 : 0).put(UUID.randomUUID().toString().substring(0, 10));

                    JSONArray p3 = new JSONArray().put(kp2.get("x")).put(kp2.get("y")).put(isValidKeypoint(kp2) ? 1 : 0).put(UUID.randomUUID().toString().substring(0, 10));
                    JSONArray p6 = new JSONArray().put(kp1.get("x")).put(kp1.get("y")).put(isValidKeypoint(kp1) ? 1 : 0).put(UUID.randomUUID().toString().substring(0, 10));

                    objectLocation.put(p1);
                    objectLocation.put(p2);
                    objectLocation.put(p3);
                    objectLocation.put(p4);
                    objectLocation.put(p5);
                    objectLocation.put(p6);
                    objectLocation.put(p7);
                    objectLocation.put(p8);
                    return objectLocation.toString();
                }
                else {
                    if(!isValidKeypoint(kp1)){
                        kp1.put("x", (3 * x )+ (2 * w ) - (2 * (kp5.getDouble("x"))));
                        kp1.put("y", y);
                    }

                    if(!isValidKeypoint(kp2)){
                        kp2.put("x", kp1.get("x"));
                        kp2.put("y", y + h);
                    }
                    if(!isValidKeypoint(kp3)){
                        kp3.put("x", x + w );
                        kp3.put("y", y + h);
                    }

                    if(!isValidKeypoint(kp4)){
                        kp4.put("x", x + w);
                        kp4.put("y", y);
                    }

                    JSONArray p1 = new JSONArray().put(x).put(y + h).put(1).put(UUID.randomUUID().toString().substring(0, 10));
                    JSONArray p2 = new JSONArray().put(x + w).put(y).put(1).put(UUID.randomUUID().toString().substring(0, 10));
                    JSONArray p7 = new JSONArray().put(x + w).put(y + h).put(1).put(UUID.randomUUID().toString().substring(0, 10));
                    JSONArray p8 = new JSONArray().put(x).put(y).put(1).put(UUID.randomUUID().toString().substring(0, 10));

                    JSONArray p4 = new JSONArray().put(kp3.get("x")).put(kp3.get("y")).put(isValidKeypoint(kp3) ? 1 : 0).put(UUID.randomUUID().toString().substring(0, 10));
                    JSONArray p5 = new JSONArray().put(kp4.get("x")).put(kp4.get("y")).put(isValidKeypoint(kp4) ? 1 : 0).put(UUID.randomUUID().toString().substring(0, 10));

                    JSONArray p3 = new JSONArray().put(kp2.get("x")).put(kp2.get("y")).put(isValidKeypoint(kp2) ? 1 : 0).put(UUID.randomUUID().toString().substring(0, 10));
                    JSONArray p6 = new JSONArray().put(kp1.get("x")).put(kp1.get("y")).put(isValidKeypoint(kp1) ? 1 : 0).put(UUID.randomUUID().toString().substring(0, 10));

                    objectLocation.put(p1);
                    objectLocation.put(p2);
                    objectLocation.put(p3);
                    objectLocation.put(p4);
                    objectLocation.put(p5);
                    objectLocation.put(p6);
                    objectLocation.put(p7);
                    objectLocation.put(p8);
                    return objectLocation.toString();
                }
            }
            // case : rear
//            else {
            if( !isValidKeypoint(kp5) && isValidKeypoint(kp6)){
                boolean leftSide = isLeftSide(x, w, kp6);
                if(!isValidKeypoint(kp1) && !isValidKeypoint(kp2) && !isValidKeypoint(kp3) && !isValidKeypoint(kp4) && !isValidKeypoint(kp5)){
                    JSONArray p1 = new JSONArray().put(x).put(y + h).put(1).put(UUID.randomUUID().toString().substring(0, 10));
                    JSONArray p2 = new JSONArray().put(x + w).put(y).put(1).put(UUID.randomUUID().toString().substring(0, 10));
                    objectLocation.put(p1);
                    objectLocation.put(p2);
                    return objectLocation.toString();
                }
                if( leftSide ) {
                    // create function to handle fake x, y for kp 1, 2, 3, 4
                    if(!isValidKeypoint(kp1)){
                        kp1.put("x", 2 * (kp6.getDouble("x")) - (x + w));
                        kp1.put("y", y);
                    }

                    if(!isValidKeypoint(kp2)){
                        kp2.put("x", kp1.get("x"));
                        kp2.put("y", y + h);
                    }
                    if(!isValidKeypoint(kp3)){
                        kp3.put("x", x );
                        kp3.put("y", y + h);
                    }

                    if(!isValidKeypoint(kp4)){
                        kp4.put("x", x);
                        kp4.put("y", y);
                    }
                    JSONArray p1 = new JSONArray().put(x).put(y + h).put(1).put(UUID.randomUUID().toString().substring(0, 10));
                    JSONArray p2 = new JSONArray().put(x + w).put(y).put(1).put(UUID.randomUUID().toString().substring(0, 10));
                    JSONArray p7 = new JSONArray().put(x + w).put(y + h).put(1).put(UUID.randomUUID().toString().substring(0, 10));
                    JSONArray p8 = new JSONArray().put(x).put(y).put(1).put(UUID.randomUUID().toString().substring(0, 10));

                    JSONArray p4 = new JSONArray().put(kp3.get("x")).put(kp3.get("y")).put(isValidKeypoint(kp3) ? 1 : 0).put(UUID.randomUUID().toString().substring(0, 10));
                    JSONArray p5 = new JSONArray().put(kp4.get("x")).put(kp4.get("y")).put(isValidKeypoint(kp4) ? 1 : 0).put(UUID.randomUUID().toString().substring(0, 10));

                    JSONArray p3 = new JSONArray().put(kp2.get("x")).put(kp2.get("y")).put(isValidKeypoint(kp2) ? 1 : 0).put(UUID.randomUUID().toString().substring(0, 10));
                    JSONArray p6 = new JSONArray().put(kp1.get("x")).put(kp1.get("y")).put(isValidKeypoint(kp1) ? 1 : 0).put(UUID.randomUUID().toString().substring(0, 10));

                    objectLocation.put(p1);
                    objectLocation.put(p2);
                    objectLocation.put(p3);
                    objectLocation.put(p4);
                    objectLocation.put(p5);
                    objectLocation.put(p6);
                    objectLocation.put(p7);
                    objectLocation.put(p8);
                    return objectLocation.toString();
                }
                if( !leftSide ) {
                    // create function to handle fake x, y for kp 1, 2, 3, 4
                    if(!isValidKeypoint(kp1)){
                        kp1.put("x", (3 * x )+ (2 * w ) - (2 * (kp6.getDouble("x"))));
                        kp1.put("y", y);
                    }

                    if(!isValidKeypoint(kp2)){
                        kp2.put("x", kp1.get("x"));
                        kp2.put("y", y + h);
                    }
                    if(!isValidKeypoint(kp3)){
                        kp3.put("x", x + w );
                        kp3.put("y", y + h);
                    }

                    if(!isValidKeypoint(kp4)){
                        kp4.put("x", x);
                        kp4.put("y", y);
                    }
                    JSONArray p1 = new JSONArray().put(x).put(y + h).put(1).put(UUID.randomUUID().toString().substring(0, 10));
                    JSONArray p2 = new JSONArray().put(x + w).put(y).put(1).put(UUID.randomUUID().toString().substring(0, 10));
                    JSONArray p7 = new JSONArray().put(x + w).put(y + h).put(1).put(UUID.randomUUID().toString().substring(0, 10));
                    JSONArray p8 = new JSONArray().put(x).put(y).put(1).put(UUID.randomUUID().toString().substring(0, 10));

                    JSONArray p4 = new JSONArray().put(kp3.get("x")).put(kp3.get("y")).put(isValidKeypoint(kp3) ? 1 : 0).put(UUID.randomUUID().toString().substring(0, 10));
                    JSONArray p5 = new JSONArray().put(kp4.get("x")).put(kp4.get("y")).put(isValidKeypoint(kp4) ? 1 : 0).put(UUID.randomUUID().toString().substring(0, 10));

                    JSONArray p3 = new JSONArray().put(kp2.get("x")).put(kp2.get("y")).put(isValidKeypoint(kp2) ? 1 : 0).put(UUID.randomUUID().toString().substring(0, 10));
                    JSONArray p6 = new JSONArray().put(kp1.get("x")).put(kp1.get("y")).put(isValidKeypoint(kp1) ? 1 : 0).put(UUID.randomUUID().toString().substring(0, 10));

                    objectLocation.put(p1);
                    objectLocation.put(p2);
                    objectLocation.put(p3);
                    objectLocation.put(p4);
                    objectLocation.put(p5);
                    objectLocation.put(p6);
                    objectLocation.put(p7);
                    objectLocation.put(p8);
                    return objectLocation.toString();
                }
            }
            // case : side only
            if(!isValidKeypoint(kp5) && !isValidKeypoint(kp6) ) {
                JSONArray p1 = new JSONArray().put(x).put(y + h).put(1).put(UUID.randomUUID().toString().substring(0, 10));
                JSONArray p2 = new JSONArray().put(x + w).put(y).put(1).put(UUID.randomUUID().toString().substring(0, 10));
                objectLocation.put(p1);
                objectLocation.put(p2);
                return objectLocation.toString();
            }
        }

        //nếu objectType là "keypoint" thì có 8 điểm
        if (objectType.equals("keypoint")) {
            JSONObject[] keypointsArray = {kp1, kp2, kp3, kp4, kp5, kp6, kp7, kp8};
            int index = 1; // index bắt đầu từ 1
            int objectOrder = 10; // fixed objectOrder
            for (JSONObject kp : keypointsArray) {
                if (kp != null) {
                    double px = kp.optDouble("x", -1);
                    double py = kp.optDouble("y", -1);
                    int visibility = 2; // Default visibility nếu không có
                    JSONArray point = new JSONArray()
                            .put(px)
                            .put(py)
                            .put(index)
                            .put(visibility)
                            .put(objectOrder);
                    objectLocation.put(point);
                } else {
                    // Nếu keypoint không tồn tại, điền giá trị mặc định
                    JSONArray point = new JSONArray()
                            .put(-1)
                            .put(-1)
                            .put(index)
                            .put(2)
                            .put(objectOrder);
                    objectLocation.put(point);
                }
                index++;
            }
            return objectLocation.toString();
        }
            return objectLocation.toString();
    }

    public HashMap<String, Integer> getClassList(TaskVo taskVo, String fileName) throws FileNotFoundException {
        HashMap<String, Integer> classMap = new HashMap<>();
        List<Object> roots = readAllJsonRoots(fileName);
        boolean hasCoco = roots.stream().anyMatch(o -> o instanceof JSONObject);
        if (hasCoco) {
            for (Object r : roots) {
                if (!(r instanceof JSONObject)) continue;
                JSONObject objRoot = (JSONObject) r;
                Map<Integer, String> catIdToName = new HashMap<>();
                if (objRoot.has("categories")) {
                    JSONArray cats = objRoot.getJSONArray("categories");
                    for (int i = 0; i < cats.length(); i++) {
                        JSONObject c = cats.getJSONObject(i);
                        catIdToName.put(c.getInt("id"), c.optString("name", ""));
                    }
                }
                if (objRoot.has("annotations")) {
                    JSONArray anns = objRoot.getJSONArray("annotations");
                    for (int i = 0; i < anns.length(); i++) {
                        JSONObject a = anns.getJSONObject(i);
                        int catId = a.optInt("category_id", -1);
                        String className = catIdToName.getOrDefault(catId, "");
                        if (className == null || className.isEmpty()) continue;
                        for (ClassVo classVo : taskVo.getClassVoList()) {
                            if (classVo.getClassName().equals(className)) {
                                classMap.compute(className, (key, value) -> (value == null) ? 1 : value + 1);
                                break;
                            }
                        }
                    }
                }
            }
            return classMap;
        }
        // legacy arrays
        for (Object r : roots) {
            if (!(r instanceof JSONArray)) continue;
            JSONArray jsonArray = (JSONArray) r;
            for (int i = 0; i < jsonArray.length(); i++) {
                try {
                    JSONObject frame = jsonArray.getJSONObject(i);
                    JSONArray objects = frame.getJSONArray("objects");
                    for (int j = 0; j < objects.length(); j++) {
                        JSONObject obj = objects.getJSONObject(j);
                        JSONObject attributes = obj.getJSONObject("attributes");
                        int outerType = obj.getInt("type");
                        int innerType = attributes.getInt("type");
                        String className = this.utilService.getClassName(outerType, innerType);
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
        for (TagVo tagVo : classVo.getClassTagList()) {
            String tagName = tagVo.getTagName().equals("side") ? "direction" : tagVo.getTagName();
            for (int i = 0; i < jsonArray.length(); i++) {
                try {
                    JSONObject frame = jsonArray.getJSONObject(i);
                    JSONArray objects = frame.getJSONArray("objects");
                    for (int j = 0; j < objects.length(); j++) {
                        JSONObject obj = objects.getJSONObject(j);
                        JSONObject attributes = obj.optJSONObject("attributes");
                        int outerType = obj.getInt("type");
                        int innerType = attributes.getInt("type");
                        String jsonClassName = this.utilService.getClassName(outerType, innerType);
                        if (!jsonClassName.equals(className)) continue;
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

    public List<TagVo> getTagList(String classId, String folderPath, TaskVo taskVo) throws FileNotFoundException {
        File dir = new File(folderPath);
        String[] folderList = dir.list();
        String jsonPath = "";
        if (folderList != null) {
            for (String folder : folderList) {
                if (folder.contains(".json")) {
                    jsonPath = folderPath + File.separator + folder;
                    break;
                }
            }
        }
        if (jsonPath.isEmpty()) {
            throw new FileNotFoundException("JSON file not found in " + folderPath);
        }

        List<String> occlusionList = new ArrayList<>();
        List<String> truncationList = new ArrayList<>();
        List<String> sideList = new ArrayList<>();

        try (FileInputStream inputStream = new FileInputStream(jsonPath)) {
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
            }
        }
        return tagList;
    }


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
        truncationTag.setTagName("truncation");
        truncationTag.setTagTypeCd("OBJ");
        truncationTag.setTagValTypeCd("20");
        truncationTag.setMatchClass(String.join(", ", classIdList));
        tagList.add(truncationTag);

        // Tag Name : Occlusion
        TagVo occlusionTag = new TagVo();
        occlusionTag.setProjectId(taskVo.getProjectId());
        occlusionTag.setTaskId(taskVo.getTaskId());
        occlusionTag.setTagId(idGenerateService.generateTagId());
        occlusionTag.setTagName("occlusion");
        occlusionTag.setTagTypeCd("OBJ");
        occlusionTag.setTagValTypeCd("20");
        occlusionTag.setMatchClass(String.join(", ", classIdList));
        tagList.add(occlusionTag);
        return tagList;
    }


    private String retrieveClassId(String className, JSONArray jsonArray) {
        Map<String, Integer> classMap = extractClassMap(jsonArray);
        Integer classId = classMap.get(className);
        return classId != null ? String.valueOf(classId) : null;
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



    private String getImageIndexFromFileName(String fileName) {
        return fileName.replaceAll("^frame_(\\d+)\\.(jpg|jpeg|png)$", "$1");
    }

    private String generateTagId() {
        return "tag" + TAG_COUNTER.getAndIncrement();
    }

    private String generateObjectId() {
        return "dobj" + OBJECT_COUNTER.getAndIncrement();
    }

    private String findClassIdyClassName(TaskVo taskVo, String inputClassName) {
        if(taskVo == null || taskVo.getClassVoList() == null || inputClassName == null) {
            return null;
        }
        for (ClassVo classVo : taskVo.getClassVoList()) {
            if(classVo != null && inputClassName.equals(classVo.getClassName())) {
                return classVo.getClassId();
            }
        }
        return null;
    }
}
