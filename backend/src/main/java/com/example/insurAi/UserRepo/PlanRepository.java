package com.example.insurAi.UserRepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.insurAi.entity.PlanEntity;

@Repository
public interface PlanRepository extends JpaRepository<PlanEntity, Long> {
    PlanEntity findByPlanName(String planName);
}
