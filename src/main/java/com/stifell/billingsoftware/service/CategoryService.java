package com.stifell.billingsoftware.service;

import com.stifell.billingsoftware.io.CategoryRequest;
import com.stifell.billingsoftware.io.CategoryResponse;

import java.util.List;

public interface CategoryService {
    CategoryResponse add(CategoryRequest request);
    List<CategoryResponse> read();
    void delete(String categoryId);
}
