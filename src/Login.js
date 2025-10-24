import React, { useState } from "react";
import "./Login.css";
import Signup from "./Signup";

function Login() {
  const [showSignup, setShowSignup] = useState(false);
  const [loginInput, setLoginInput] = useState("");
  const [password, setPassword] = useState("");

  if (showSignup) {
    return <Signup goToLogin={() => setShowSignup(false)} />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login attempted with username/email: ${loginInput}`);
  };

  return (
    <div className="login-container">
      <h2>User Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>Username or Email</label>
        <input
          type="text"
          placeholder="Enter username or email"
          value={loginInput}
          onChange={(e) => setLoginInput(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <p className="signup-link">
          New user? <span onClick={() => setShowSignup(true)}>Register here</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
