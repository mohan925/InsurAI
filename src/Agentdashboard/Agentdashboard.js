import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AgentSidebar from "./Agentsidebar";
import AgentAppointments from "./Appointment";
import AgentTopbar from "./AgentTopbar";

function AgentDashboard() {
  const { state } = useLocation();
  const agent = state?.user;

  const [activeSection, setActiveSection] = useState("appointments");

  if (!agent) {
    return <h2>Loading agent...</h2>;
  }

  return (
    <div className="dashboard-container">
      <AgentSidebar setActiveSection={setActiveSection} active={activeSection} />

      <div className="dashboard-main">
        <AgentTopbar agent={agent} />

        <div className="dashboard-content">
          {activeSection === "appointments" && <AgentAppointments agent={agent} />}
        </div>
      </div>
    </div>
  );
}

export default AgentDashboard;
