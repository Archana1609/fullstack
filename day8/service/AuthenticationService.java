package com.example.arc1.arch.service;

import com.example.arc1.arch.dto.request.BookingRequest;
import com.example.arc1.arch.dto.request.LoginRequest;
import com.example.arc1.arch.dto.request.RegisterRequest;
import com.example.arc1.arch.dto.response.BookingResponse;
import com.example.arc1.arch.dto.response.LoginResponse;
import com.example.arc1.arch.dto.response.RegisterResponse;

public interface AuthenticationService {

    RegisterResponse register(RegisterRequest request);
    LoginResponse login(LoginRequest request);
    BookingResponse book(BookingRequest request);


}
