package com.example.AppointmentBooking;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/appointment")
public class AppointmentController {
     @Autowired
     EmailService send;
     
     @PostMapping("/book")
     public String bookApp(@RequestBody Appointmentdetails det) {
    	 send.SendEmail(det);
    	 return "Appointment";
     }
}
