package com.example.insurAi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan({"com.example.insurAi", "com.example.AppointmentBooking"})
public class InsurAiApplication {

    public static void main(String[] args) {
        SpringApplication.run(InsurAiApplication.class, args);
    }
}
