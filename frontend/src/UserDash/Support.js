import React, { useState } from "react";
import "./Support.css";

function Support() {
  const [tickets, setTickets] = useState([
    { id: 1, subject: "Billing Issue", status: "Open", date: "2025-11-05" },
    { id: 2, subject: "Login Problem", status: "Closed", date: "2025-11-02" },
    { id: 3, subject: "Plan Upgrade", status: "Pending", date: "2025-11-01" },
  ]);

  return (
    <div className="support-container">
      <h2>💬 Support Center</h2>

      {/* Create new ticket button */}
      <div className="new-ticket-section">
        <button className="new-ticket-btn">+ Create New Ticket</button>
      </div>

      {/* Tickets Table */}
      {tickets.length > 0 ? (
        <table className="support-table">
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Date Created</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="ticket-row">
                <td>#{ticket.id}</td>
                <td>{ticket.subject}</td>
                <td>
                  <span
                    className={`status-badge status-${ticket.status.toLowerCase()}`}
                  >
                    {ticket.status}
                  </span>
                </td>
                <td>{ticket.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-tickets">No tickets found. Create one to get support.</p>
      )}
    </div>
  );
}

export default Support;
