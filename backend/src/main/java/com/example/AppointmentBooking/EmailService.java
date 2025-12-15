package com.example.AppointmentBooking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
	@Autowired
	private JavaMailSender mail;
	
	public void SendEmail(Appointmentdetails det) {
		SimpleMailMessage mes=new SimpleMailMessage();
		//user
		mes.setTo(det.getUserEmail());
		mes.setSubject("Appointment booked successfully...");
		String userMes="Hello " + det.getUserName() + ",\n\n" +"Your appointment with agent " + det.getAgentName() +" is confirmed on " + det.getDate() + ".\n\n" +"Thank you!";
		mes.setText(userMes);
		mail.send(mes);
		
		//agent
		mes.setTo(det.getAgentEmail());
		mes.setSubject("Appointment booked successfully...");
		String agentMes="Hello " + det.getAgentName() + ",\n\n" +"You have appointment with user " + det.getUserName() +" on " + det.getDate() + ".\n\n" +"Thank you!";
		mes.setText(agentMes);
		mail.send(mes);
	}
}
