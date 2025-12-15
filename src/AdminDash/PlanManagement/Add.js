import React, { useState } from "react";
import "./Add.css";

function AddPlan() {
  const [formData, setFormData] = useState({
    planName: "",
    planType: "",
    coverageAmount: "",
    premium: "",
    duration: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/plans/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.text())
      .then((msg) => {
        alert(msg);
        setFormData({
          planName: "",
          planType: "",
          coverageAmount: "",
          premium: "",
          duration: "",
          description: "",
        });
      })
      .catch((err) => console.log("Error:", err));
  };

  return (
    <div className="add-plan-container">
      <h2>Add New Insurance Plan</h2>

      <form className="add-plan-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="planName"
          placeholder="Plan Name"
          value={formData.planName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="planType"
          placeholder="Plan Type (Health, Life, Vehicle...)"
          value={formData.planType}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="coverageAmount"
          placeholder="Coverage Amount"
          value={formData.coverageAmount}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="premium"
          placeholder="Premium"
          value={formData.premium}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g., 1 Year, 6 Months)"
          value={formData.duration}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Plan Description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Add Plan</button>
      </form>
    </div>
  );
}

export default AddPlan;
