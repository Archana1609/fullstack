// package com.example.arc1.arch.controller;

// //import static com.example.arc1.arch.utils.MyConstant.AUTH;
// import static com.example.arc1.arch.utils.MyConstant.BOOK;
// //import static com.example.arc1.arch.utils.MyConstant.BOOKING;
// import static com.example.arc1.arch.utils.MyConstant.BOOKINGList;

// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.arc1.arch.dto.request.BookingRequest;
// import com.example.arc1.arch.dto.response.BasicResponse;
// import com.example.arc1.arch.dto.response.BookingResponse;
// import com.example.arc1.arch.dto.response.RegisterResponse;
// import com.example.arc1.arch.model.Booking;
// import com.example.arc1.arch.repository.bookingRepository;
// import com.example.arc1.arch.service.bookingService;

// import io.swagger.v3.oas.annotations.parameters.RequestBody;
// import lombok.RequiredArgsConstructor;
//  import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
//  import static org.springframework.http.HttpStatus.OK;

// import java.util.Optional;


// @RestController
// @RequestMapping(BOOK)
// @RequiredArgsConstructor
// public class BookingController {
//     private final bookingService bookingService;
//     private final bookingRepository bookingRepository;
//     @GetMapping(BOOKINGList)
//         public ResponseEntity<BasicResponse<BookingRequest>> create() {
//             BasicResponse<BookingRequest> response =new BasicResponse<>();
//             try {
//                 response = bookingService.getAllBooking();
//                 return new ResponseEntity<>(response,OK);
//             } catch (Exception e) {
//                 response.setMessage("Something wrong!!");
//                 return new ResponseEntity<>(response,EXPECTATION_FAILED);
//             }
//         }
//     @PostMapping(ADDBOOK)
//     public ResponseEntity<RegisterResponse>addcourse(@RequestBody BookingRequest booking)
//     {
//         RegisterResponse response=new RegisterResponse();
//         try{
//             response=bookingService.addBooking(booking);
//             return new ResponseEntity<>(response,ACCEPTED);
//         }catch (Exception e)
//         {
            
//             response.setMessage("Something went wrong!");
//             return new ResponseEntity<>(response,EXPECTATION_FAILED);
//         }
//     }

//     @PutMapping("/editCourse/{courseId}")
//     public ResponseEntity<RegisterResponse> editCourse(@PathVariable String courseId, @RequestBody BookingRequest request) {
//         RegisterResponse response = new RegisterResponse();
//         try {
//             // Check if the course with the given courseId exists
//             Optional<Booking> optionalCourse = bookingRepository.findById(id);
//             if (optionalCourse.isPresent()) {
//                 Booking existingBooking = optionalBooking.get();
//                 // Update the existing course details
//                 existingBooking.setName(request.getName());
//                 existingBooking.setEmail(request.getEmail());
                
//                 bookingRepository.save(existingBooking);
//                 response.setMessage("Course updated successfully");
//                 return ResponseEntity.status(HttpStatus.ACCEPTED).body(response);
//             } else {
//                 response.setMessage("Course not found");
//                 return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
//             }
//         } catch (Exception e) {
//             response.setMessage("Something went wrong");
//             return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(response);
//         }
//     }

//     @DeleteMapping("/deleteCourse/{courseId}")
//     public ResponseEntity<RegisterResponse> deleteCourse(@PathVariable String courseId) {
//         RegisterResponse response = bookingService.deleteBooking(courseId);
//         if (response.getMessage().equals("Course deleted successfully")) {
//             return ResponseEntity.status(HttpStatus.ACCEPTED).body(response);
//         } else if (response.getMessage().equals("Course not found")) {
//             return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
//         } else {
//             return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(response);
//         }
//     }

// }
