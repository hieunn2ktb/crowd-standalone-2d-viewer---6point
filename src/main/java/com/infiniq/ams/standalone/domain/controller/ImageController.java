package com.infiniq.ams.standalone.domain.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api/images")
public class ImageController {


    @Value("${standalone.data.path}")
    private String rootPath;


    @GetMapping
    public ResponseEntity<Resource> getImage(@RequestParam String filePath) throws IOException {
        // Loại bỏ dấu "/" ở đầu filePath nếu có
        if (filePath.startsWith("/")) {
            filePath = filePath.substring(1);
        }
        Path fullPath = Paths.get(rootPath, filePath);
        Resource resource = new UrlResource(fullPath.toUri());

        if (resource.exists() && resource.isReadable()) {
            String contentType = Files.probeContentType(fullPath);
            return ResponseEntity
                    .ok()
                    .contentType(MediaType.parseMediaType(contentType))
                    .body(resource);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
