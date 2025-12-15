import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import "./Topbar.css"; 

function Topbar({ user, setActiveSection }) {
  const navigate = useNavigate();
   console.log(user);
  return (
    <header className="topbar">
      <h1 className="topbar-title">User Dashboard</h1>
      <div className="topbar-actions">
        <div
          className="user-icon-wrapper"
          onClick={() => setActiveSection("profile")}
          title={user?.username || "Profile"}
        >
          {user?.avatarUrl ? (
            <img src={user.avatarUrl} alt="Profile" className="user-icon-img" />
          ) : (
            <span className="user-icon-text">{user?.username?.charAt(0).toUpperCase() || "U"}</span>
          )}
        </div>
        <button
          className="logout-btn"
          onClick={() => navigate("/")}
          title="Logout to Home"
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </header>
  );
}

export default Topbar;
