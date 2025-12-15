import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Signup from "./Signup";

function Login() {
  const [showSignup, setShowSignup] = useState(false);
  const [loginInput, setLoginInput] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  if (showSignup) {
    return <Signup goToLogin={() => setShowSignup(false)} />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const isEmail = loginInput.includes("@");
    const payload = isEmail
      ? { email: loginInput, password }
      : { username: loginInput, password };

    try {
      const res = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);

      if (data && data.username && data.role==="User") {
        navigate("/user", { state: { user: data } });
      }
      if(data && data.username && data.role==="Admin"){
        navigate("/admin", { state: { user: data } });
      }
      else {
        setErrorMsg("Invalid username/email or password!");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMsg("Something went wrong. Try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
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

        {errorMsg && <p className="error-text">{errorMsg}</p>}

        <p className="signup-link">
          New user? <span onClick={() => setShowSignup(true)}>Register here</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
