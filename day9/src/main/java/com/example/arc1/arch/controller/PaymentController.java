// package com.example.arc1.arch.controller;

// import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
// import static org.springframework.http.HttpStatus.OK;

// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.GetMapping;

// import com.example.arc1.arch.dto.response.BasicResponse;
// import com.example.arc1.arch.dto.response.BookingResponse;
// //import com.example.arc1.arch.service.paymentService;
// import com.example.arc1.arch.service.paymentService;

// public class PaymentController {
//     @GetMapping
//         public ResponseEntity<BasicResponse<BookingResponse>> create() {
//             BasicResponse<BookingResponse>response =new BasicResponse<>();
//             try {
//                 response = paymentService.getAllPayment();
//                 return new ResponseEntity<>(response, OK);
//             } catch (Exception e) {
//                 response.setMessage("Something went wrong");
//                 return new ResponseEntity<>(response, EXPECTATION_FAILED);
//             }
//         }

// }
