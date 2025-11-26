package com.example.insurAi.UserController;

import com.example.insurAi.entity.PlanEntity;
import com.example.insurAi.UserRepo.PlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000") 
@RestController
@RequestMapping("/api/plans")
public class PlanController {

    @Autowired
    private PlanRepository planRepository;

    @PostMapping("/add")
    public String addPlan(@RequestBody PlanEntity plan) {
        planRepository.save(plan);
        return "Plan added successfully!";
    }

    @GetMapping("/all")
    public List<PlanEntity> getAllPlans() {
        return planRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public Optional<PlanEntity> getPlanById(@PathVariable Long id) {
        return planRepository.findById(id);
    }

    @PutMapping("/update/{id}")
    public String updatePlan(@PathVariable Long id, @RequestBody PlanEntity updatedPlan) {
        Optional<PlanEntity> existingPlan = planRepository.findById(id);
        if (existingPlan.isPresent()) {
            PlanEntity plan = existingPlan.get();
            plan.setPlanName(updatedPlan.getPlanName());
            plan.setPlanType(updatedPlan.getPlanType());
            plan.setCoverageAmount(updatedPlan.getCoverageAmount());
            plan.setPremium(updatedPlan.getPremium());
            plan.setDuration(updatedPlan.getDuration());
            plan.setDescription(updatedPlan.getDescription());
            plan.setStatus(updatedPlan.getStatus());
            planRepository.save(plan);
            return "Plan updated successfully!";
        } else {
            return "Plan not found!";
        }
    }

    @DeleteMapping("/delete/{id}")
    public String deletePlan(@PathVariable Long id) {
        planRepository.deleteById(id);
        return "Plan deleted successfully!";
    }
}
