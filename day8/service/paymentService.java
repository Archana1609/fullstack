package com.example.arc1.arch.service;

import com.example.arc1.arch.dto.response.BasicResponse;
//import com.example.arc1.arch.dto.response.BookingResponse;
import com.example.arc1.arch.dto.response.PaymentResponse;

public interface paymentService {

     BasicResponse<PaymentResponse> getAllPayment();

}
