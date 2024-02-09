package com.example.arc1.arch.service;


public interface BookingService {
    BasicResponse<BookingResponse>getAllUser();

    BookingResponse createBook(BookingRequest request);

    BasicResponse<BookingResponse> deletebook(String giftid);

    BookingResponse updatebook(String giftid, BookingRequest giftRequest);
}
