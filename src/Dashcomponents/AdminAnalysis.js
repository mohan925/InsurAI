import React, { useEffect, useState } from "react";
import "./Analysis.css";

function Analysis() {
  const [stats, setStats] = useState({
    users: 0,
    agents: 0,
    plans: 0,
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/admin/dashboard-counts")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("Error fetching admin stats:", err));
  }, []);

  return (
    <div className="admin-dashboard">
      <h2 className="admin-title">Admin Dashboard</h2>

      <div className="stats-container">
        <div className="stat-card users">
          <h3>Users</h3>
          <p>{stats.users}</p>
        </div>

        <div className="stat-card agents">
          <h3>Agents</h3>
          <p>{stats.agents}</p>
        </div>

        <div className="stat-card plans">
          <h3>Plans</h3>
          <p>{stats.plans}</p>
        </div>
      </div>
    </div>
  );
}

export default Analysis;
