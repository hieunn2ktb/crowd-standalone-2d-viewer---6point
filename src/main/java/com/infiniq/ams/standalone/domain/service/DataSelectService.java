package com.infiniq.ams.standalone.domain.service;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Instant;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import com.infiniq.ams.standalone.domain.vo.DatasetVo;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class DataSelectService {
    private final Environment environment;

    //main dataset
    public List<DatasetVo> listOfDataset() {
        String dataPath = environment.getProperty("standalone.data.path");

        File dataPathFile = new File(dataPath);
        if (dataPathFile.getParentFile().exists()) {
            if (!dataPathFile.exists()) {
                dataPathFile.mkdir();
            }
        }

        return _listOfDataset();
    }

    private List<DatasetVo> _listOfDataset() {
        String dataPath = environment.getProperty("standalone.data.path");

        List<DatasetVo> dataList = new ArrayList<>();
        try (
                Stream<Path> streamResult = Files.walk(Paths.get(dataPath), 1)
        ) {
            dataList = streamResult
                    .filter(Files::isDirectory)
                    .filter(datasetPath -> {
                        return !datasetPath.equals(Paths.get(dataPath));
                    })
                    .sorted()
                    .map(datasetPath -> {
                        return DatasetVo.builder()
                                .datasetName(datasetPath.getFileName().toString())
                                .datasetPath(dataPath.toString())
                                .issuedDatetime(Instant.ofEpochMilli(datasetPath.toFile().lastModified()).atZone(ZoneId.systemDefault()).toLocalDateTime()
                                        .format(DateTimeFormatter.ofPattern("yyyy-MM-dd E ahh:mm").withLocale(Locale.US)))
                                .build();
                    })
                    .collect(Collectors.toList());
        } catch (Exception ex) {
            log.error(ex.getMessage(), ex);
        }

        return dataList;
    }

    //sub dataset
    public List<DatasetVo> listOfDataset(String path) {
        String dataPath = environment.getProperty("standalone.data.path") + File.separator + path;

        File dataPathFile = new File(dataPath);
        if (dataPathFile.getParentFile().exists()) {
            if (!dataPathFile.exists()) {
                dataPathFile.mkdir();
            }
        }

        return _listOfDataset(path);
    }

    private List<DatasetVo> _listOfDataset(String path) {
        String dataPath = environment.getProperty("standalone.data.path") + File.separator + path;

        List<DatasetVo> dataList = new ArrayList<>();
        try (
                Stream<Path> streamResult = Files.walk(Paths.get(dataPath), 1)
        ) {
            dataList = streamResult
                    .filter(Files::isDirectory)
                    .filter(datasetPath -> {
                        return !datasetPath.equals(Paths.get(dataPath));
                    })
                    .sorted()
                    .map(datasetPath -> {
                        return DatasetVo.builder()
                                .datasetName(datasetPath.getFileName().toString())
                                .datasetPath(dataPath.toString())
                                .datasetUrl(path)
                                .issuedDatetime(Instant.ofEpochMilli(datasetPath.toFile().lastModified()).atZone(ZoneId.systemDefault()).toLocalDateTime()
                                        .format(DateTimeFormatter.ofPattern("yyyy-MM-dd E ahh:mm").withLocale(Locale.US)))
                                .build();
                    })
                    .collect(Collectors.toList());
        } catch (Exception ex) {
            log.error(ex.getMessage(), ex);
        }

        return dataList;
    }
}
