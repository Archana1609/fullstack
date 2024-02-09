// package com.example.arc1.arch.service.impl;

// import java.util.List;
// import java.util.stream.Collectors;

// import org.springframework.stereotype.Service;

// import com.example.arc1.arch.dto.request.BookingRequest;
// import com.example.arc1.arch.dto.response.BasicResponse;
// import com.example.arc1.arch.dto.response.BookingResponse;
// import com.example.arc1.arch.dto.response.RegisterResponse;
// import com.example.arc1.arch.model.Booking;
// import com.example.arc1.arch.repository.bookingRepository;
// import com.example.arc1.arch.service.bookingService;

// @Service
// public class BookingServiceImpl implements bookingService{
//     private final bookingRepository bookingRepository;

//     @Override
//     public BasicResponse <BookingRequest> getAllBooking(){
//          List<Booking>courses=bookingRepository.findAll();
//          List<BookingRequest>BookingResponses=courses.stream().map(course->CourseRequest
//          .builder()
//          .courseId(course.getCourseId())
//          .courseName(course.getCourseName())
//          .description(course.getDescription())
//          .duration(course.getDuration())
//          .fee(course.getFee())
//          .build())
//          .collect(Collectors.toList());
//          return BasicResponse.<BookingRequest>builder().message("Course data fetched successfully")
//          .data(courseResponses)
//          .build();
//     }

//     @Override
//     public RegisterResponse addCourse(BookingRequest request)
//     { 
//         var add =Booking.builder() 
//         .id(booking.getId())
//         .courseName(course.getCourseName())
//         .description(course.getDescription())
//         .duration(course.getDuration())
//         .fee(course.getFee())
//         .build();
//         courseRepository.save(add);
//         return RegisterResponse.builder()
//         .message("Course added successfully!")
//         .build();
//     } 

//     @Override
//     public RegisterResponse deleteCourse(String courseId) {
//     RegisterResponse response = new RegisterResponse();
//     try {
//         // Check if the course with the given courseId exists
//         Optional<Course> optionalCourse = courseRepository.findById(courseId);
//         if (optionalCourse.isPresent()) {
//             courseRepository.deleteById(courseId);
//             response.setMessage("Course deleted successfully");
//             return response;
//         } else {
//             response.setMessage("Course not found");
//             return response;
//         }
//     } catch (Exception e) {
//         response.setMessage("Something went wrong");
//         return response;
//     }
// }

//     @Override
//     public BasicResponse<BookingResponse> getAllBooking() {
//         // TODO Auto-generated method stub
//         throw new UnsupportedOperationException("Unimplemented method 'getAllBooking'");
//     }

// }

