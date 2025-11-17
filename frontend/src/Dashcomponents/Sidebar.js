import React from "react";
import { 
  FaThLarge, 
  FaLeaf, 
  FaUserCircle, 
  FaHeadset, 
  FaClipboardList 
} from "react-icons/fa";
import "./Sidebar.css";

function Sidebar({ setActiveSection, activeSection, role }) {

  const adminMenu = [
    { id: "dashboard", label: "Dashboard", icon: <FaThLarge /> },
    { id: "plans", label: "Plans", icon: <FaLeaf /> },
    { id: "profile", label: "Admin Profile", icon: <FaUserCircle /> },
    { id: "planmanage", label: "Manage Plans", icon: <FaClipboardList /> },
  ];

  const userMenu = [
    { id: "dashboard", label: "Dashboard", icon: <FaThLarge /> },
    { id: "plans", label: "My Plans", icon: <FaLeaf /> },
    { id: "profile", label: "Profile", icon: <FaUserCircle /> },
    { id: "support", label: "Support", icon: <FaHeadset /> },
  ];

  const menuItems = role === "admin" ? adminMenu : userMenu;

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
