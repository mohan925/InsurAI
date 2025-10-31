import React, { useState } from "react";
import Login from "./Login";
import About from "./About";
import Features from "./Features";
import "./HomePage.css";

function HomePage() {
  const [activeModule, setActiveModule] = useState("home");

  return (
    <div
      className={
        activeModule === "home"
          ? "homepage-container home-background"
          : "homepage-container"
      }
    >
      <nav className="navbar">
        <div className="nav-left">
          <h2>Insur AI</h2>
        </div>

        <div className="nav-right">
          <div className="nav-item" onClick={() => setActiveModule("home")}>
            Home
          </div>
          <div className="nav-item" onClick={() => setActiveModule("login")}>
            Login
          </div>
          <div className="nav-item" onClick={() => setActiveModule("about")}>
            About
          </div>
          <div className="nav-item" onClick={() => setActiveModule("features")}>
            Features
          </div>
        </div>
      </nav>

      <div className="module-container">
        {activeModule === "home" && (
          <div className="home-content">
            <h1>Welcome to InsurAI</h1>
            <p>Your AI-powered Insurance Assistant</p>
          </div>
        )}
        {activeModule === "login" && <Login />}
        {activeModule === "about" && <About />}
        {activeModule === "features" && <Features />}
      </div>
    </div>
  );
}

export default HomePage;
