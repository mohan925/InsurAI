import React, { useState } from "react";
import "./Login.css";

function Signup({ goToLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(""); 
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const res = await fetch("http://localhost:8080/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
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
    <div className="login-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>Username</label>
        <input
          type="text"
          placeholder="Choose a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {errorMsg.includes("Username") && (
          <p className="error-text">{errorMsg}</p>
        )}

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errorMsg.includes("Email") && <p className="error-text">{errorMsg}</p>}

        <label>Password</label>
        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>

        {successMsg && <p className="success-text">{successMsg}</p>}
        {errorMsg && !errorMsg.includes("Username") && !errorMsg.includes("Email") && (
          <p className="error-text">{errorMsg}</p>
        )}

        <p className="signup-link">
          Already have an account? <span onClick={goToLogin}>Login here</span>
        </p>
      </form>
    </div>
  );
}

export default Signup;
