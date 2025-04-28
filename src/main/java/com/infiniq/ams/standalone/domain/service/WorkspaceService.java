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
//        String[] folderList = dir.list();
//        for (String folder : folderList) {
//            if (folder.contains("coco")) {
//                cocoPath = folderPath + File.separator + folder;
//            }
//        }
//        if(cocoPath == null) {
//            throw new Exception("Coco file not found in the specified path.");
//        }

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


    public List<String> checkFile1Coco(String folderPath) throws Exception {
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
//        String[] folderList = dir.list();
//        // image
//        File     imageDir  = new File(imagePath);
//        String[] imageList = imageDir.list();


//        for (String folder : folderList) {
//            if (folder.contains("RGB")) {
//                imagePath = folderPath + File.separator + folder;
//            } else if (folder.contains("Correction")) {
//                pcdPath = folderPath + File.separator + folder;
//            }
//        }
            //find the pcd folder
//        File     binDir  = new File(folderPath + File.separator + "pcd");
//        String[] binList = binDir.list();
//        List<String> pcdList = new ArrayList<>();
//
//        for (int i = 0; i < binList.length; i++) {
//            if (binList[i].contains(".pcd")) {
//                pcdList.add(binList[i]);
//            }
//        }
//        //check the image and pcd file count
//        if (!(imageList.length == pcdList.size())) {
//            throw new Exception("The number of files does not match.");
//        }
//        return true;
//    }

    private boolean isImageFile(String fileName) {
        return fileName.endsWith(".jpg") || fileName.endsWith(".jpeg") ||
                fileName.endsWith(".png");
    }

    private List<String> createPcdFile(String pcdPath) throws Exception {
        List<String> createdFiles = new ArrayList<>();

        File     binDir       = new File(pcdPath);
        String[] binList      = binDir.list();
        String   binFolder    = "";
        String   subBinFolder = "";

        for (int i = 0; i < binList.length; i++) {
            if (binList[i].contains("Roof_Center_2")) {
                binFolder = binList[i];
            } else if (binList[i].contains("Roof_Center")) {
                subBinFolder = binList[i];
            }
        }

        String[] pacPathSub = pcdPath.split("/");

        // JSON calibration 파일에서 보정값을 읽어온다
        String   calibinFilePath = pacPathSub[0] + File.separator + pacPathSub[1];
        File     calDir          = new File(calibinFilePath);
        String[] calList         = calDir.list();
        String   calFile         = "";


        // "Roof_Center"와 "Roof_Center_2" calibration 값 추출
        double[][] roof1Rotation    = null;
        double[][] roof1Translation = null;
        double[][] roof2Rotation    = null;
        double[][] roof2Translation = null;

        roof1Rotation    = parseRotation("-0.009930, -0.999897, 0.010376, 0.005331, -0.010429, -0.999931, 0.999936, -0.009874, 0.005434");
        roof1Translation = parseTranslation("-0.094798, 1.424245, 1.734368");
        roof2Rotation    = parseRotation("-0.014728, 0.006644, 0.999869, 0.006313, -0.999957, 0.006737, 0.999872, 0.006412, 0.014685");
        roof2Translation = parseTranslation("-1.973545, -0.004244, 2.164399");


        // 두 서브폴더 경로 설정
        File folderRoof1 = new File(pcdPath + File.separator + binFolder);
        File folderRoof2 = new File(pcdPath + File.separator + subBinFolder);

        if (!folderRoof1.exists() || !folderRoof2.exists()) {
            throw new Exception("필수 폴더(Roof_Center 또는 Roof_Center_2)가 존재하지 않습니다.");
        }

        // 각 폴더에서 .bin 파일 목록 읽기
        File[] filesRoof1 = folderRoof1.listFiles((dir, name) -> name.toLowerCase().endsWith(".bin"));
        File[] filesRoof2 = folderRoof2.listFiles((dir, name) -> name.toLowerCase().endsWith(".bin"));

        if (filesRoof1 == null || filesRoof2 == null) {
            throw new Exception("bin 파일 목록을 읽어오지 못했습니다.");
        }

        // Roof_Center_2 폴더의 파일들을, 센서 구분 문자열을 제거한 이름을 key로 하는 Map에 저장
        Map<String, File> roof2Map = new HashMap<>();
        for (File file : filesRoof2) {
            String normName = normalizeFilename(file.getName());
            roof2Map.put(normName, file);
        }

        // Roof_Center 폴더의 각 파일에 대해, 동일한 이름(센서 구분 제거 후)이 있는지 확인
        for (File file1 : filesRoof1) {
            String normName = normalizeFilename(file1.getName());
            if (roof2Map.containsKey(normName)) {
                File file2 = roof2Map.get(normName);

                // 두 파일에 대해 bin 데이터를 읽어온다.
                double[][] bin1 = readBinFile(file1.getAbsolutePath());
                double[][] bin2 = readBinFile(file2.getAbsolutePath());

                // 변환 로직 적용
                // 1. XYZ2 = Rot_2.T @ (bin2 - Trans_2)
                double[][] bin2Sub = subtractColumnVector(bin2, roof2Translation);
                double[][] roof2Rot_T = transpose(roof2Rotation);
                double[][] XYZ2 = multiplyMatrix(roof2Rot_T, bin2Sub);

                // 2. XYZ1 = (Rot_1 @ XYZ2) + Trans_1
                double[][] temp = multiplyMatrix(roof1Rotation, XYZ2);
                double[][] XYZ1 = addColumnVector(temp, roof1Translation);

                // 3. 두 데이터(bin1, XYZ1)를 가로로 결합
                double[][] concatenated = concatenateMatrices(bin1, XYZ1);

                // 4. 추가 변환 행렬 A 적용 후 전치: XYZ = (A @ concatenated).T
                double[][] A = { {0, 0, 1}, {0, -1, 0}, {1, 0, 0} };
                double[][] transformed = multiplyMatrix(A, concatenated);
                double[][] finalPoints = transpose(transformed);

                // 5. PCD 파일 생성
                File outputDir = new File(pcdPath + File.separator + "pcd_output");
                if (!outputDir.exists()) {
                    outputDir.mkdirs();
                }

                String pcdFileName = normName.replaceAll(".bin","") + ".pcd";
                String resultPath = outputDir.getAbsolutePath() + File.separator + pcdFileName;
                writePcdFile(resultPath, finalPoints);
                createdFiles.add(resultPath);
            }
        }
        return createdFiles;
    }

    /**
     * 파일 이름에서 "Roof_Center"와 "Roof_Center_2" 문자열을 제거하여 비교용 정규화된 이름을 반환
     */
    private String normalizeFilename(String fileName) {
        return fileName.replace("Roof_Center_2", "").replace("Roof_Center", "");
    }

    public double[][] readBinFile(String binFilePath) throws IOException {
        File file = new File(binFilePath);
        long fileSize = file.length();

        int totalFloats = (int)(fileSize / 4);

        int totalRows = totalFloats / 6;

        int n = totalRows - 1;

        double[][] result = new double[3][n];

        try (FileInputStream fis = new FileInputStream(file);
             FileChannel channel = fis.getChannel()) {

            MappedByteBuffer buffer = channel.map(FileChannel.MapMode.READ_ONLY, 0, fileSize);
            buffer.order(ByteOrder.LITTLE_ENDIAN);

            // 첫 행(헤더) 6개의 float 건너뛰기
            for (int i = 0; i < 6; i++) {
                buffer.getFloat();
            }
            // 각 행마다 앞 3개의 float 값을 읽어서 result에 저장
            for (int col = 0; col < n; col++) {
                for (int row = 0; row < 3; row++) {
                    result[row][col] = buffer.getFloat();
                }
                // 현재 행의 나머지 3개의 float 건너뛰기
                for (int k = 0; k < 3; k++) {
                    buffer.getFloat();
                }
            }
        }
        return result;
    }

    private double[][] parseRotation(String rotationStr) {
        String[] tokens = rotationStr.split(",");
        double[][] matrix = new double[3][3];
        for (int i = 0; i < 9; i++) {
            matrix[i / 3][i % 3] = Double.parseDouble(tokens[i].trim());
        }
        return matrix;
    }

    private double[][] parseTranslation(String translationStr) {
        String[] tokens = translationStr.split(",");
        double[][] vector = new double[3][1];
        for (int i = 0; i < 3; i++) {
            vector[i][0] = Double.parseDouble(tokens[i].trim());
        }
        return vector;
    }

    /**
     * 각 열(포인트)에 대해, matrix (3xn)에서 각 열에 colVector(3x1)를 빼준다.
     */
    private double[][] subtractColumnVector(double[][] matrix, double[][] colVector) {
        int cols = matrix[0].length;
        double[][] result = new double[3][cols];
        for (int j = 0; j < cols; j++) {
            for (int i = 0; i < 3; i++) {
                result[i][j] = matrix[i][j] - colVector[i][0];
            }
        }
        return result;
    }

    /**
     * 행렬의 전치(transpose)를 계산한다.
     */
    private double[][] transpose(double[][] A) {
        int m = A.length;
        int n = A[0].length;
        double[][] result = new double[n][m];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                result[j][i] = A[i][j];
            }
        }
        return result;
    }

    /**
     * 두 행렬 A (m x n)와 B (n x p)의 곱을 계산하여 (m x p) 행렬 반환.
     */
    private double[][] multiplyMatrix(double[][] A, double[][] B) {
        int m = A.length;
        int n = A[0].length;
        int p = B[0].length;
        double[][] result = new double[m][p];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < p; j++) {
                double sum = 0;
                for (int k = 0; k < n; k++) {
                    sum += A[i][k] * B[k][j];
                }
                result[i][j] = sum;
            }
        }
        return result;
    }

    /**
     * 각 열에 대해, matrix (3xn)에 colVector (3x1)를 더해준다.
     */
    private double[][] addColumnVector(double[][] matrix, double[][] colVector) {
        int cols = matrix[0].length;
        double[][] result = new double[3][cols];
        for (int j = 0; j < cols; j++) {
            for (int i = 0; i < 3; i++) {
                result[i][j] = matrix[i][j] + colVector[i][0];
            }
        }
        return result;
    }

    /**
     * 두 개의 3xn 행렬을 좌우로(concatenate) 결합하여 3 x (n1+n2) 행렬 반환.
     */
    private double[][] concatenateMatrices(double[][] m1, double[][] m2) {
        int n1 = m1[0].length;
        int n2 = m2[0].length;
        double[][] result = new double[3][n1 + n2];
        for (int i = 0; i < 3; i++) {
            System.arraycopy(m1[i], 0, result[i], 0, n1);
            System.arraycopy(m2[i], 0, result[i], n1, n2);
        }
        return result;
    }

    /**
     * double[][] 형태의 포인트 배열(finalPoints)을 ASCII 형식의 PCD 파일로 저장.
     * 최종 finalPoints는 (numPoints, 3) 형태.
     */
    private void writePcdFile(String outputFilePath, double[][] finalPoints) throws IOException {
        int numPoints = finalPoints.length;
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(outputFilePath))) {
            writer.write("# .PCD v0.7 - Point Cloud Data file format\n");
            writer.write("VERSION 0.7\n");
            writer.write("FIELDS x y z\n");
            writer.write("SIZE 4 4 4\n");
            writer.write("TYPE F F F\n");
            writer.write("COUNT 1 1 1\n");
            writer.write("WIDTH " + numPoints + "\n");
            writer.write("HEIGHT 1\n");
            writer.write("VIEWPOINT 0 0 0 1 0 0 0\n");
            writer.write("POINTS " + numPoints + "\n");
            writer.write("DATA ascii\n");

            for (int i = 0; i < numPoints; i++) {
                writer.write(String.format(Locale.US, "%f %f %f\n",
                        finalPoints[i][0], finalPoints[i][1], finalPoints[i][2]));
            }
        }
    }
 }
