import React from "react";
import "./Features.css";
import {
  FaBrain,
  FaRobot,
  FaShieldAlt,
  FaChartLine,
  FaUserShield,
  FaHandsHelping,
} from "react-icons/fa";

function Features() {
  const featureData = [
    {
      icon: <FaBrain className="feature-icon" />,
      title: "AI-Driven Insights",
      desc: "Get intelligent plan recommendations based on your lifestyle, risk profile, and budget.",
    },
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "Advanced Data Security",
      desc: "Your sensitive data is safeguarded using enterprise-grade encryption and strict privacy policies.",
    },
    {
      icon: <FaRobot className="feature-icon" />,
      title: "Smart Automation",
      desc: "Automate renewals, reminders, and claims with AI-based workflow systems for effortless insurance management.",
    },
    {
      icon: <FaChartLine className="feature-icon" />,
      title: "Real-Time Analytics",
      desc: "Track your plan performance and coverage insights instantly with dynamic data visualization tools.",
    },
    {
      icon: <FaUserShield className="feature-icon" />,
      title: "Multi-User Protection",
      desc: "Enable multiple family members under a single account, ensuring everyone’s safety and benefits.",
    },
    {
      icon: <FaHandsHelping className="feature-icon" />,
      title: "24/7 AI Support",
      desc: "Get instant responses and assistance through our AI-powered chat support system anytime, anywhere.",
    },
  ];

  return (
    <div className="features-section">
      <div className="features-header">
        <h1 className="features-title">Our Key Features</h1>
        <p className="features-subtitle">
          Empowering insurance management with intelligence, security, and
          simplicity.
        </p>
      </div>

      <div className="features-grid">
        {featureData.map((feature, index) => (
          <div key={index} className="feature-card">
            {feature.icon}
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
