import React, { useState } from "react";
import "./Del.css";
function DeletePlan() {
  const [planId, setPlanId] = useState("");
  const [planName, setPlanName] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = () => {
    if (!planId || !planName) {
      setMessage("⚠ Please enter both Plan ID and Plan Name.");
      return;
    }

    fetch(`http://localhost:8080/api/plans/delete/${planId}`, {
      method: "DELETE",
    })
      .then((res) => res.text())
      .then((data) => {
        setMessage(data);
        setPlanId("");
        setPlanName("");
      })
      .catch(() => setMessage("❌ Error deleting plan"));
  };

  return (
    <div className="delete-plan-container">
      <h3>Delete a Plan</h3>

      <div className="form-group">
        <label>Plan ID</label>
        <input 
          type="number" 
          value={planId} 
          onChange={(e) => setPlanId(e.target.value)} 
          placeholder="Enter Plan ID"
        />
      </div>

      <div className="form-group">
        <label>Plan Name</label>
        <input 
          type="text" 
          value={planName} 
          onChange={(e) => setPlanName(e.target.value)} 
          placeholder="Enter Plan Name"
        />
      </div>

      <button className="delete-btn" onClick={handleDelete}>
        Delete Plan
      </button>

      {message && <p className="msg">{message}</p>}
    </div>
  );
}

export default DeletePlan;
