import React, { useState } from "react";
import "./Profile.css";

function Profile({ user }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email || "",
    password: user?.password || "",
  });
  const [message, setMessage] = useState("");

  if (!user) return <h3>No user data found. Please log in again.</h3>;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/users/update/${user.username}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const msg = await res.text();
      setMessage(msg);
      setShowModal(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Failed to update profile. Please try again.");
    }
  };

  return (
    <div className="profile-container">
      <h2>👤 My Profile</h2>
      <div className="profile-card">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <div className="profile-password">
          <strong>Password:</strong>
          <input
            type="password"
            value={user.password}
            readOnly
            className="password-field"
          />
        </div>
        <button className="update-btn" onClick={() => setShowModal(true)}>
          Update Profile
        </button>
      </div>

      {message && <p className="update-msg">{message}</p>}

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Update Profile</h3>
            <label>Username</label>
            <input type="text" value={formData.username} disabled />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <div className="profile-btn-group">
              <button className="save-btn" onClick={handleSave}>
                Save Changes
              </button>
              <button className="cancel-btn" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
