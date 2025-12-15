import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1 className="about-title">About InsurAI</h1>
        <p className="about-tagline">
          Redefining the Future of Insurance with Artificial Intelligence
        </p>

        <p className="about-description">
          <strong>InsurAI</strong> brings users, agents, and administrators together on
          one unified platform — making insurance management seamless, secure, and
          data-driven. We combine automation, analytics, and intelligent insights to
          simplify complex insurance processes, ensuring that users make smarter and
          faster decisions.
        </p>

        <p className="about-description">
          With our AI-powered recommendations and real-time tracking, InsurAI
          transforms traditional insurance into an effortless digital experience for
          everyone.
        </p>
      </div>

      <div className="about-highlights">
        <div className="highlight-box">
          <h3>🤖 AI Intelligence</h3>
          <p>Personalized recommendations designed by smart algorithms.</p>
        </div>

        <div className="highlight-box">
          <h3>🔒 Trusted Security</h3>
          <p>Advanced encryption ensures your data remains fully protected.</p>
        </div>

        <div className="highlight-box">
          <h3>⚡ Automation</h3>
          <p>Claims, renewals, and support — simplified and streamlined.</p>
        </div>

        <div className="highlight-box">
          <h3>📈 Live Insights</h3>
          <p>Monitor your insurance performance with real-time analytics.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
