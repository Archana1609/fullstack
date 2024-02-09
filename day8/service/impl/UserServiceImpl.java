package com.example.arc1.arch.service.impl;

import java.util.List;

import java.util.stream.Collectors;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.arc1.arch.dto.response.BasicResponse;
import com.example.arc1.arch.dto.response.UserResponse;
import com.example.arc1.arch.model.User;
import com.example.arc1.arch.repository.UserRepository;
import com.example.arc1.arch.service.UserService;

import lombok.RequiredArgsConstructor;



@Service
@RequiredArgsConstructor

public class UserServiceImpl implements UserService{

 private final  UserRepository userRepository;

    @Override
    public BasicResponse<UserResponse> getAllUser() {
        List<User>users = userRepository.findAll();
        List<UserResponse>userResponses=users.stream()
        .map(user -> UserResponse
        .builder()
        .id(user.getId())
        .username(user.getUsername())
        .email(user.getEmail())
        .role(user.getRole())
        .image(user.getImage())
        .Address(user.getAddress())
        .phoneNumber(user.getPhoneNumber())
        .build())
        .collect(Collectors.toList());
        return BasicResponse.<UserResponse>builder()
        .message("User data fetched successfully")
        .data(userResponses).build();
        
    }

}
