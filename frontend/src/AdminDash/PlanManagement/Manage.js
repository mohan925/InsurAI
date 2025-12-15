import React, { useState } from "react";
import AddPlan from "./Add";
import ViewPlans from "./View";
import DeletePlan from "./Del";
import UpdatePlan from "./Update";
import "./Manage.css";

function ManagePlans() {
  const [tab, setTab] = useState("add");

  return (
    <div className="manage-container">
      <h2>Plan Management</h2>

      {/* Tab Buttons */}
      <div className="manage-tabs">
        <button
          className={tab === "add" ? "active" : ""}
          onClick={() => setTab("add")}
        >
          ➕ Add Plan
        </button>

        <button
          className={tab === "view" ? "active" : ""}
          onClick={() => setTab("view")}
        >
          📄 View Plans
        </button>
        <button
          className={tab === "delete" ? "active" : ""}
          onClick={() => setTab("delete")}
        >
          📄 Delete Plan 
        </button>
        <button
          className={tab === "update" ? "active" : ""}
          onClick={() => setTab("update")}
        >
          📄 Update Plan 
        </button>
        
      </div>

      {/* Tab Content */}
      <div className="manage-content">
        {tab === "add" && <AddPlan/>}
        {tab === "view" && <ViewPlans/>}
        {tab === "delete" && <DeletePlan/>}
        {tab === "update" && <UpdatePlan/>}
      </div>
    </div>
  );
}

export default ManagePlans;
