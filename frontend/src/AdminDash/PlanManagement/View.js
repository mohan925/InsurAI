import React, { useEffect, useState } from "react";
import "./View.css";
function ViewPlans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/plans/all")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);

  return (
    <div>
      <h3>Available Plans</h3>

      <table className="plans-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Plan Name</th>
            <th>Type</th>
            <th>Coverage</th>
            <th>Premium</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((p) => (
            <tr key={p.planId}>
              <td>{p.planId}</td>
              <td>{p.planName}</td>
              <td>{p.planType}</td>
              <td>{p.coverageAmount}</td>
              <td>{p.premium}</td>
              <td>{p.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewPlans;
