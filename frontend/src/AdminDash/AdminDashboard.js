// src/components/Dashboard.js
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Dashcomponents/Sidebar";
import Topbar from "../Dashcomponents/Topbar";
import PlansList from "../Dashcomponents/PlansList";
import Analysis from "../Dashcomponents/AdminAnalysis";
import Profile from "../Dashcomponents/Profile";
import ManagePlans from "./PlanManagement/Manage";
function Dashboard() {
  const { state } = useLocation();
  const user = state?.user;
  const [activeSection, setActiveSection] = useState("dashboard"); 

  return (
    <div className="dashboard-container">
      <Sidebar role="admin" setActiveSection={setActiveSection} activeSection={activeSection} />
      <div className="dashboard-main">
        <Topbar user={user} setActiveSection={setActiveSection} />
        <div className="dashboard-content">
          {activeSection === "dashboard" &&  <Analysis />}
          {activeSection === "plans" && <PlansList />}
          {activeSection === "profile" && <Profile user={user} />}
          {activeSection === "planmanage" && <ManagePlans/>}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
