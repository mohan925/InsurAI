package com.example.insurAi.UserController;

import com.example.insurAi.entity.*;
import com.example.insurAi.UserRepo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/userplans")
public class UserPlanController {

    @Autowired
    private UserPlanRepository userPlanRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PlanRepository planRepository;
    
    @PostMapping("/purchase")
    public String purchasePlan(@RequestParam Long userId, @RequestParam Long planId) {
        Optional<UserEntity> userOpt = userRepository.findById(userId);
        Optional<PlanEntity> planOpt = planRepository.findById(planId);

        if (userOpt.isPresent() && planOpt.isPresent()) {
            UserPlan userPlan = new UserPlan(userOpt.get(),planOpt.get(),java.time.LocalDate.now().toString());
            userPlanRepository.save(userPlan);
            return "Plan purchased successfully!";
        }
        return "Invalid user or plan ID!";
    }
    @GetMapping("/user/{userId}")
    public List<UserPlan> getUserPlans(@PathVariable Long userId) {
        return userPlanRepository.findByUserId(userId);
    }
}
