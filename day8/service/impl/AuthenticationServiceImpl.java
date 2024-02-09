package com.example.arc1.arch.service.impl;

import static com.example.arc1.arch.Enumerated.Role.USER;


import java.util.Optional;

//import javax.management.relation.Role;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.arc1.arch.dto.request.BookingRequest;
import com.example.arc1.arch.dto.request.LoginRequest;
import com.example.arc1.arch.dto.request.RegisterRequest;
import com.example.arc1.arch.dto.response.BookingResponse;
import com.example.arc1.arch.dto.response.LoginResponse;
import com.example.arc1.arch.dto.response.RegisterResponse;
import com.example.arc1.arch.model.Booking;
import com.example.arc1.arch.model.User;
import com.example.arc1.arch.repository.UserRepository;
import com.example.arc1.arch.repository.bookingRepository;
//import com.example.arc1.arch.repository.bookingRepository;
import com.example.arc1.arch.service.AuthenticationService;
import com.example.arc1.arch.utils.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class AuthenticationServiceImpl implements AuthenticationService{
    private final UserRepository userRepository;
    private final bookingRepository bookingRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    @Override
    public RegisterResponse register(RegisterRequest request) {
      //System.out.println("asdfgh");
     Optional<User>isUserExists = userRepository.findByEmail(request.getEmail());
     if(isUserExists.isPresent()){
        return RegisterResponse.builder().message("User with mail id "+request.getEmail()+" is already exists!").build();
     }var user=User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(USER)
                .build();
        userRepository.save(user);
        return RegisterResponse.builder().message("User created successfully!").build();
    }
@Override
public LoginResponse login(LoginRequest request) {
    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));
    var user=userRepository.findByEmail(request.getEmail()).orElseThrow();
    String token=jwtUtil.generateToken(user);
    return LoginResponse.builder().message("User logged in successfully!").token(token).build();

}

@Override
public BookingResponse book(BookingRequest request) {
    Optional<Booking>isBookingExists = bookingRepository.findByEmail(request.getEmail());
     if(isBookingExists.isPresent()){
        return BookingResponse.builder().message("User with mail id "+request.getEmail()+" is already booked!").build();
     }var booking=Booking.builder()
                .id(request.getId())
                .name(request.getName())
                .email(request.getEmail())
                .build();
        bookingRepository.save(booking);
        return BookingResponse.builder().message("Booked successfully!").build();
}

}
