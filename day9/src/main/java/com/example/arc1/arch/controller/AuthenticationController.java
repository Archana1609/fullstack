package com.example.arc1.arch.controller;

import static com.example.arc1.arch.utils.MyConstant.AUTH;
import static com.example.arc1.arch.utils.MyConstant.BOOKING;
import static com.example.arc1.arch.utils.MyConstant.LOGIN;
import static com.example.arc1.arch.utils.MyConstant.REGISTER;
import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.arc1.arch.dto.request.BookingRequest;
import com.example.arc1.arch.dto.request.LoginRequest;
import com.example.arc1.arch.dto.request.RegisterRequest;
import com.example.arc1.arch.dto.response.BookingResponse;
import com.example.arc1.arch.dto.response.LoginResponse;
import com.example.arc1.arch.dto.response.RegisterResponse;
import com.example.arc1.arch.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(AUTH)
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    @PostMapping(REGISTER)
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request){
        RegisterResponse response = new RegisterResponse();
        try {
            response = authenticationService.register(request);
            return new ResponseEntity<>(response,ACCEPTED);
            
        } catch (Exception e) {
            response.setMessage("something went wrong");
            return new ResponseEntity<>(response,EXPECTATION_FAILED);

        }
    }
    @PostMapping(LOGIN)
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request){
        LoginResponse response =new LoginResponse();
        try {
          response=authenticationService.login(request);
          return new ResponseEntity<>(response,ACCEPTED);
            
        } catch (Exception e) {
            System.out.println(e);
           response.setMessage("Somethig went wrong");
           response.setToken("");
           return new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }
    @PostMapping(BOOKING)
    public ResponseEntity<BookingResponse> book(@RequestBody BookingRequest request){
        BookingResponse response = new BookingResponse();
        try {
            response = authenticationService.book(request);
            return new ResponseEntity<>(response,ACCEPTED);
            
        } catch (Exception e) {
            response.setMessage("something went wrong");
            return new ResponseEntity<>(response,EXPECTATION_FAILED);

        }
    }

}
