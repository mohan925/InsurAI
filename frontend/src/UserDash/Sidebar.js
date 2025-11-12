import React from "react";
import { FaThLarge, FaLeaf, FaUserCircle, FaHeadset } from "react-icons/fa";
import "./Dash.css";

function Sidebar({ setActiveSection, activeSection }) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <FaThLarge /> },
    { id: "plans", label: "Plans", icon: <FaLeaf /> },
    { id: "profile", label: "Profile", icon: <FaUserCircle /> },
    { id: "support", label: "Support", icon: <FaHeadset /> },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">🌿 Insur AI</div>
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={activeSection === item.id ? "active" : ""}
            onClick={() => setActiveSection(item.id)}
          >
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
