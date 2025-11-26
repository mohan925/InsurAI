// src/components/Dashboard.js
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Dashcomponents/Sidebar";
import Topbar from "../Dashcomponents/Topbar";
import PlansList from "../Dashcomponents/PlansList";
import Profile from "../Dashcomponents/Profile";
import UserPlans from "./UserPlans";
import Appointment from "./Appointment";
import Support from "./Support"

function Dashboard() {
  const { state } = useLocation();
  const user = state?.user;
  const [activeSection, setActiveSection] = useState("dashboard"); 

  return (
    <div className="dashboard-container">
      <Sidebar role="user" setActiveSection={setActiveSection} activeSection={activeSection} />
      <div className="dashboard-main">
        <Topbar user={user} setActiveSection={setActiveSection} />
        <div className="dashboard-content">
          {activeSection === "dashboard" && <UserPlans user={user} />}
          {activeSection === "plans" && <PlansList />}
          {activeSection === "profile" && <Profile user={user} />}
          {activeSection === "support" && <Support/>}
          {activeSection === "appointment" && <Appointment user={user}/>}
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
