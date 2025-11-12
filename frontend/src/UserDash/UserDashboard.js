// src/components/Dashboard.js
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import PlansList from "./PlansList";
import Profile from "./Profile";
import UserPlans from "./UserPlans";
import Support from "./Support"
import "./Topbar.css"
import "./Sidebar.css"
import "./UserPlan.css"
import "./Profile.css"
import "./Dash.css";
function Dashboard() {
  const { state } = useLocation();
  const user = state?.user;
  const [activeSection, setActiveSection] = useState("dashboard"); // Default dashboard view

  return (
    <div className="dashboard-container">
      <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
      <div className="dashboard-main">
        <Topbar user={user} setActiveSection={setActiveSection} />
        <div className="dashboard-content">
          {activeSection === "dashboard" && <UserPlans user={user} />}
          {activeSection === "plans" && <PlansList />}
          {activeSection === "profile" && <Profile user={user} />}
          {activeSection === "support" && <Support/>}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
