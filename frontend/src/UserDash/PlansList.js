import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaShieldAlt,
  FaMoneyBillWave,
  FaClock,
  FaInfoCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import "./Plans.css";

function PlansList() {
  const [plans, setPlans] = useState([]);
  const [expandedPlanId, setExpandedPlanId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/plans/all")
      .then((res) => setPlans(res.data))
      .catch((err) => console.error(err));
  }, []);

  const toggleExpand = (planId) => {
    setExpandedPlanId(expandedPlanId === planId ? null : planId);
  };

  return (
    <div className="plans-wrapper">
      <h2 className="plans-title">Available Insurance Plans</h2>
      <div className="plans-grid">
        {plans.map((plan) => {
          const isExpanded = expandedPlanId === plan.planId;
          return (
            <div className="plan-box" key={plan.planId}>
              <div className="plan-badge">
                {plan.status === "Active" ? "Active" : "Inactive"}
              </div>
              <div className="plan-header">
                <FaShieldAlt className="plan-icon" />
                <span>{plan.planName}</span>
                <button
                  className="expand-btn"
                  onClick={() => toggleExpand(plan.planId)}
                  aria-expanded={isExpanded}
                  aria-label={isExpanded ? "Collapse details" : "Expand details"}
                >
                  {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>

              <div className="plan-summary">
                <p className="plan-desc">
                  {plan.description.length > 100
                    ? `${plan.description.slice(0, 100)}...`
                    : plan.description}
                </p>

                <div className="plan-fields-compact">
                  <p>
                    <FaInfoCircle className="icon" /> <b>Type:</b>{" "}
                    {plan.planType}
                  </p>
                  <p>
                    <FaMoneyBillWave className="icon" /> <b>Premium:</b> ₹
                    {plan.premium.toLocaleString()}
                  </p>
                  <p>
                    <FaClock className="icon" /> <b>Duration:</b> {plan.duration}
                  </p>
                </div>
              </div>

              {isExpanded && (
                <div className="plan-details-expanded">
                  <p>
                    <strong>Coverage Amount:</strong> ₹
                    {plan.coverageAmount.toLocaleString()}
                  </p>
                  <p>
                    <strong>Status:</strong> {plan.status}
                  </p>
                  <p>
                    <strong>Description:</strong> {plan.description}
                  </p>
                  <p>
                    <strong>Created Date:</strong> {plan.createDate}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PlansList;
