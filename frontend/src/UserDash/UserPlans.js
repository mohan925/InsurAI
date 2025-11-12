// src/components/UserPlans.js
import React, { useEffect, useState } from "react";
import "./Dash.css";

function UserPlans({ user }) {
  const [userPlans, setUserPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserPlans = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/userplans/user/${user.id}`);
        const data = await res.json();
        setUserPlans(data);
      } catch (err) {
        console.error("Error fetching user plans:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) fetchUserPlans();
  }, [user]);

  if (loading) return <p>Loading your plans...</p>;

  if (!userPlans.length) {
    return (
      <div className="userplans-container">
        <h2>📋 My Plans</h2>
        <p>You haven’t purchased any plans yet.</p>
      </div>
    );
  }

  return (
    <div className="userplans-container">
      <h2>📋 My Plans</h2>
      <div className="table-wrapper">
        <table className="userplans-table">
          <thead>
            <tr>
              <th></th>
              <th>Plan Name</th>
              <th>Description</th>
              <th>Coverage</th>
              <th>Purchase Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {userPlans.map((p, index) => (
              <tr key={p.id}>
                <td>{index + 1}</td>
                <td>{p.plan.planName}</td>
                <td>{p.plan.description}</td>
                <td>{p.plan.coverageAmount}</td>
                <td>{p.purchaseDate}</td>
                <td>
                <span className={`status-badge ${p.plan.status === 'Active' ? 'status-active' : 'status-inactive'}`}>
                    {p.plan.status}
                </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserPlans;
