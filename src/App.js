import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./LOGIN/HomePage";
import UserDashboard from "./UserDash/UserDashboard"; 
import AdminDashboard from "./AdminDash/AdminDashboard";
import AgentDashboard from "./Agentdashboard/Agentdashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/agent" element={<AgentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
