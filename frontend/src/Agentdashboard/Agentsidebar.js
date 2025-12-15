import React from "react";
import "./Agentsidebar.css";

function AgentSidebar({ active, setActiveSection }) {
  return (
    <div className="sidebar">
      <h2>Agent Panel</h2>

      <ul>
        <li
          className={active === "appointments" ? "active" : ""}
          onClick={() => setActiveSection("appointments")}
        >
          Appointments
        </li>
      </ul>
    </div>
  );
}

export default AgentSidebar;
