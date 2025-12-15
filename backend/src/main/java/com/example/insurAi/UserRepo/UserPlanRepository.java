package com.example.insurAi.UserRepo;

import com.example.insurAi.entity.UserPlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface UserPlanRepository extends JpaRepository<UserPlan, Long> {
    List<UserPlan> findByUserId(Long userId);
}
