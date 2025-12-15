import React, { useEffect, useState } from "react";
import "./Appointment.css";

function AgentAppointments({ agent }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (!agent || !agent.id) return;

    fetch(`http://localhost:8080/appointment/agent/${agent.id}`)
      .then((res) => res.json())
      .then((data) => setAppointments(data))
      .catch((err) => console.error("Fetch error:", err));
  }, [agent]);

  if (!agent) {
    return <p className="loading">Loading agent...</p>;
  }

  return (
    <div className="agent-appointments-wrapper">
      <h2 className="appointments-title">Your Appointments</h2>

      {appointments.length === 0 ? (
        <p className="no-appointments">No appointments booked yet.</p>
      ) : (
        <table className="appointments-table">
          <thead>
            <tr>
              <th>User Name</th>
              <th>User Email</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((ap) => (
              <tr key={ap.id}>
                <td>{ap.userName}</td>
                <td>{ap.userEmail}</td>
                <td>{ap.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AgentAppointments;
