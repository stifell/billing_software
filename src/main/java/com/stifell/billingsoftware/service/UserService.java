package com.stifell.billingsoftware.service;

import com.stifell.billingsoftware.io.UserRequest;
import com.stifell.billingsoftware.io.UserResponse;

import java.util.List;

public interface UserService {
    UserResponse createUser(UserRequest request);
    String getUserRole(String email);
    List<UserResponse> readUsers();
    void deleteUser(String userId);
}
