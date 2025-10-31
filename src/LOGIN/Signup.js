import React, { useState } from "react";
import "./Login.css";

function Signup({ goToLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const res = await fetch("http://localhost:8080/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
    body: JSON.stringify({"username":username, "email":email, "password":password}),
  });
  if (res.ok) {
    console.log("Signup successful! Please login.");
  }
  else{
    console.error("Signup failed.");
  }
} 
    catch (error) {
      console.error("Error during signup:", error);
    }
};
  return (
    <div className="login-container">
      <h2>RRegister</h2>
      <form onSubmit={handleSubmit} className="login-form">
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
        <button type="submit">Sign Up</button>
        <p className="signup-link">
          Already have an account? <span onClick={goToLogin}>Login here</span>
        </p>
      </form>
    </div>
  );
}

export default Signup;