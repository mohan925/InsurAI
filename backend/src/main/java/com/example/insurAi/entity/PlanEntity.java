package com.example.insurAi.entity;

import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
@Table(name = "plans")
public class PlanEntity {
      @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)
      private Long planId;
      
      @Column(nullable=false)
      private String planName;
      
      @Column(nullable=false)
      private String planType;
      
      @Column(nullable=false)
      private Double coverageAmount;
      
      @Column(nullable=false)
      private Double Premium;
      
      @Column(nullable=false)
      private String Duration;
      
      @Column(length=1000)
      private String Description;
      
      private LocalDate CreateDate=LocalDate.now();
      
      
      private String Status="Active";
       
      public PlanEntity() {}

		public PlanEntity(String planName, String planType, Double coverageAmount, Double premium,String duration,String Description) {
			super();
			this.planName = planName;
			this.planType = planType;
			this.coverageAmount = coverageAmount;
			Premium = premium;
			Duration = duration;
			this.Description=Description;
			CreateDate = LocalDate.now();
			Status = "Active";
		}


		public String getDescription() {
			return Description;
		}


		public void setDescription(String description) {
			Description = description;
		}


		public Long getPlanId() {
			return planId;
		}
		public void setPlanId(Long planId) {
			this.planId = planId;
		}
		public String getPlanName() {
			return planName;
		}
		public void setPlanName(String planName) {
			this.planName = planName;
		}
		public String getPlanType() {
			return planType;
		}
		public void setPlanType(String planType) {
			this.planType = planType;
		}
		public Double getCoverageAmount() {
			return coverageAmount;
		}
		public void setCoverageAmount(Double coverageAmount) {
			this.coverageAmount = coverageAmount;
		}
		public Double getPremium() {
			return Premium;
		}
		public void setPremium(Double premium) {
			Premium = premium;
		}
		public String getDuration() {
			return Duration;
		}
		public void setDuration(String duration) {
			Duration = duration;
		}
		public LocalDate getCreateDate() {
			return CreateDate;
		}
		public void setCreateDate(LocalDate createDate) {
			CreateDate = createDate;
		}
		public String getStatus() {
			return Status;
		}
		public void setStatus(String status) {
			Status = status;
		}
}
