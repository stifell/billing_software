package com.stifell.billingsoftware.service;

import com.stifell.billingsoftware.io.ItemRequest;
import com.stifell.billingsoftware.io.ItemResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ItemService {
    ItemResponse add(ItemRequest request, MultipartFile file);
    List<ItemResponse> fetchItems();
    void deleteItem(String itemId);
}
