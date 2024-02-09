package com.example.arc1.arch.service;

import com.example.arc1.arch.dto.response.BasicResponse;
import com.example.arc1.arch.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();

}
