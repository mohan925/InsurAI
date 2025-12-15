import React, { useState } from "react";
import "./Update.css";
function UpdatePlan() {
  const [planId, setPlanId] = useState("");
  const [planData, setPlanData] = useState(null);
  const [message, setMessage] = useState("");

  // Step 1: Fetch the existing plan
  const fetchPlan = () => {
    if (!planId) {
      setMessage("⚠ Please enter a Plan ID.");
      return;
    }

    fetch(`http://localhost:8080/api/plans/${planId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setPlanData(data);
          setMessage("");
        } else {
          setMessage("❌ Plan not found");
        }
      })
      .catch(() => setMessage("❌ Error fetching plan"));
  };

  // Step 2: Update plan
  const updatePlan = () => {
    fetch(`http://localhost:8080/api/plans/update/${planId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(planData),
    })
      .then((res) => res.text())
      .then((msg) => {
        setMessage(msg);
        setPlanId("");
        setPlanData(null);
      })
      .catch(() => setMessage("❌ Error updating plan"));
  };

  // Handle input updates
  const handleChange = (field, value) => {
    setPlanData({ ...planData, [field]: value });
  };

  return (
    <div className="update-plan-container">
      <h3>Update a Plan</h3>

      {/* Step 1: Enter Plan ID */}
      <div className="form-group">
        <label>Plan ID</label>
        <input
          type="number"
          value={planId}
          onChange={(e) => setPlanId(e.target.value)}
          placeholder="Enter Plan ID"
        />
      </div>

      <button className="fetch-btn" onClick={fetchPlan}>Fetch Plan</button>

      {/* Step 2: Display Editable Fields */}
      {planData && (
        <div className="edit-section">
          <h4>Edit Plan Details</h4>

          <div className="form-group">
            <label>Plan Name</label>
            <input
              type="text"
              value={planData.planName}
              onChange={(e) => handleChange("planName", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Plan Type</label>
            <input
              type="text"
              value={planData.planType}
              onChange={(e) => handleChange("planType", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Coverage Amount</label>
            <input
              type="number"
              value={planData.coverageAmount}
              onChange={(e) => handleChange("coverageAmount", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Premium</label>
            <input
              type="number"
              value={planData.premium}
              onChange={(e) => handleChange("premium", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Duration</label>
            <input
              type="text"
              value={planData.duration}
              onChange={(e) => handleChange("duration", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={planData.description}
              onChange={(e) => handleChange("description", e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <label>Status</label>
            <select
              value={planData.status}
              onChange={(e) => handleChange("status", e.target.value)}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <button className="update-btn" onClick={updatePlan}>
            Update Plan
          </button>
        </div>
      )}

      {message && <p className="msg">{message}</p>}
    </div>
  );
}

export default UpdatePlan;
