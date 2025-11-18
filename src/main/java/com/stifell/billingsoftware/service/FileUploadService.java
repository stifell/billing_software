package com.stifell.billingsoftware.service;

import org.springframework.web.multipart.MultipartFile;

public interface FileUploadService {
    String upload(MultipartFile file);
    boolean deleteFile(String imgUrl);
}
