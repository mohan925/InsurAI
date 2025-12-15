package com.example.insurAi.UserController;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.insurAi.UserRepo.PlanRepository;
import com.example.insurAi.UserRepo.UserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private PlanRepository planRepository;

    @GetMapping("/dashboard-counts")
    public Map<String, Long> getDashboardCounts() {
        long userCount = userRepository.countByRole("user");
        long agentCount = userRepository.countByRole("agent");
        long planCount = planRepository.count();

        Map<String, Long> counts = new HashMap<>();
        counts.put("users", userCount);
        counts.put("agents", agentCount);
        counts.put("plans", planCount);

        return counts;
    }
}