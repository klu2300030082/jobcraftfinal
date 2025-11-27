import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../jobseeker.css";
import "../ManageProfile.css";

const ManageProfile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    skills: "",
    experience: "",
    education: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [id]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const saveProfile = (e) => {
    e.preventDefault();
    alert("✅ Profile saved successfully!");
    // You can also handle API submission here
    console.log(formData);
  };

  return (
    <div className="container">
      <header>
        <h1>Manage Your Profile</h1>
        <button onClick={() => navigate("/jobseeker")} className="back-btn">
          ← Back to Dashboard
        </button>
      </header>

      <div className="profile-header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
          alt="Profile"
          className="profile-pic"
        />
        <h1>Your Profile</h1>
      </div>

      <form onSubmit={saveProfile} className="profile-form">
        <div className="form-section">
          <h2>Personal Info</h2>
          <input type="text" id="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" id="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="tel" id="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
          <input type="text" id="location" placeholder="Your Location" value={formData.location} onChange={handleChange} />
        </div>

        <div className="form-section">
          <h2>Professional Info</h2>
          <input type="text" id="skills" placeholder="Skills (e.g. Java, React, SQL)" value={formData.skills} onChange={handleChange} />
          <textarea id="experience" placeholder="Experience Details" rows="4" value={formData.experience} onChange={handleChange}></textarea>
          <textarea id="education" placeholder="Education Details" rows="4" value={formData.education} onChange={handleChange}></textarea>
        </div>

        <div className="form-section">
          <h2>Resume</h2>
          <input type="file" id="resume" onChange={handleChange} />
        </div>

        <button type="submit" className="save-btn">💾 Save Profile</button>
      </form>
    </div>
  );
};

export default ManageProfile;
