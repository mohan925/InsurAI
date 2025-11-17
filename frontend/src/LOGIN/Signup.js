import React, { useState } from "react";
import "./Signup.css";

function Signup({ goToLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    console.log("Submitting signup with:", { username, email, password, role });
    try {
      const res = await fetch("http://localhost:8080/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
          role,
        }),
      });
      
      const message = await res.text();
      if (message === "Signup successful!") {
        setSuccessMsg("Signup successful! Please login.");
        setUsername("");
        setEmail("");
        setPassword("");
      } else {
        setErrorMsg(message);
      }
    } catch (error) {
      setErrorMsg("Something went wrong. Please try again.");
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h2>Create Your Account</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <label>Username</label>
          <input
            type="text"
            placeholder="Choose a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="agent">Agent</option>
          </select>

          <button type="submit">Sign Up</button>

          {successMsg && <p className="success-text">{successMsg}</p>}
          {errorMsg && <p className="error-text">{errorMsg}</p>}

          <p className="login-link">
            Already have an account? <span onClick={goToLogin}>Login here</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
