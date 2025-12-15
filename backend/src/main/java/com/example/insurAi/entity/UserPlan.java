package com.example.insurAi.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "user_plans")
public class UserPlan{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    @ManyToOne
    @JoinColumn(name = "plan_id", nullable = false)
    private PlanEntity plan;

    @Column(nullable = false)
    private String purchaseDate;

    private String status = "Active";

    public UserPlan() {}

    public UserPlan(UserEntity user, PlanEntity plan, String purchaseDate) {
        this.user = user;
        this.plan = plan;
        this.purchaseDate = purchaseDate;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public UserEntity getUser() { return user; }
    public void setUser(UserEntity user) { this.user = user; }

    public PlanEntity getPlan() { return plan; }
    public void setPlan(PlanEntity plan) { this.plan = plan; }

    public String getPurchaseDate() { return purchaseDate; }
    public void setPurchaseDate(String purchaseDate) { this.purchaseDate = purchaseDate; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
