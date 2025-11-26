import React, { useEffect, useState } from "react";
import "./Appointment.css";

function BookAppointment({ user }) {
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState("");
  const [agentName, setagentName] = useState("");
  const [agentEmail, setagentEmail] = useState("");
  const [date, setDate] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  useEffect(() => {
  fetch("http://localhost:8080/api/users/agents")
  .then((response) => response.json())
  .then((data) => setAgents(data))
  .catch((error) => console.error("Error fetching agents:", error))
}, []);
    
  const handleSubmit = async (e) => {
    e.preventDefault();
     const data={
        userName : user.username,
        userEmail : user.email,
        uid : selectedAgent,
        agentName : agentName,
        agentEmail : agentEmail,
        date : date
     };
     const res = await fetch("http://localhost:8080/appointment/book", {
        method: "POST",
        headers:{"Content-Type" :"application/json"},
        body:JSON.stringify(data)
     });
     if(res.ok){
          setSuccessMsg("Appointment booked successfully");
    }
    else{
       setSuccessMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="appointment-wrapper">
      <div className="appointment-card">
        <h2>Book Appointment</h2>

        <form onSubmit={handleSubmit} className="appointment-form">

          <label>User Name</label>
          <input type="text" value={user.username} disabled/>

          <label>Email</label>
          <input type="email" value={user.email} disabled />

          <label>Select Agent</label>
          <select
            value={selectedAgent}
            onChange={(e) =>{
                    const agentname = Number(e.target.value);
                    setSelectedAgent(agentname);
                    const agent = agents.find((a) => a.id === agentname);
                    setagentEmail(agent ? agent.email : "");
                    setagentName(agent ? agent.userName : "");
                    console.log(agentEmail);
               }
            } 
            required
          >
            <option value="">-- Choose an agent --</option>
            {agents.map((agent) => (
              <option key={agent.id} value={agent.id}>
                {agent.username}
              </option>
            ))}
          </select>

          <label>Agent Email</label>
          <input type="email" value={agentEmail} disabled/>

          <label>Select Date</label>
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button type="submit">Book Appointment</button>

          {successMsg && <p className="success">{successMsg}</p>}
        </form>
      </div>
    </div>
  );
}

export default BookAppointment;
