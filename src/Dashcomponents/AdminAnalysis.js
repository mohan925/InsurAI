import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./Analysis.css";

function Analysis() {
  const [stats, setStats] = useState({
    users: 0,
    agents: 0,
    plans: 0,
  });

  // const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/admin/dashboard-counts")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("Error fetching admin stats:", err));
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:8080/api/admin/users-per-plan")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setChartData(data);
  //     })
  //     .catch((err) => console.error("Error fetching chart data:", err));
  // }, []);

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

      {/* <div className="chart-wrapper">
        <h3>Users in Each Plan</h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="planName" tick={{ fontSize: 12 }} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="userCount" fill="#4A90E2" />
          </BarChart>
        </ResponsiveContainer>
      </div> */}
    </div>
  );
}

export default Analysis;
