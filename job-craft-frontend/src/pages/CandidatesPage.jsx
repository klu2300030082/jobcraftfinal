// ManageCandidates.jsx

import React, { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManageCandidates = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Sample candidates data (replace with real data later)
  const candidates = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", status: "Active" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", status: "Inactive" },
    { id: 3, name: "Carol Lee", email: "carol@example.com", status: "Active" },
  ];

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: isCollapsed ? "60px" : "230px",
          background: "#2f3e47",
          color: "#fff",
          padding: "10px 0",
          transition: "width 0.3s",
          boxSizing: "border-box",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <button
          onClick={toggleSidebar}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "20px",
            cursor: "pointer",
            marginLeft: "15px",
            marginBottom: "15px",
          }}
        >
          ☰
        </button>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li style={{ padding: "10px 20px" }}>
            <Link to="/admin" style={{ color: "#fff", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
              🏠 {!isCollapsed && "Dashboard"}
            </Link>
          </li>

          <li style={{ padding: "10px 20px" }}>
            <Link to="/employers" style={{ color: "#fff", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
              🏢 {!isCollapsed && "Manage Employers"}
            </Link>
          </li>

          <li style={{ padding: "10px 20px" }}>
            <Link to="/candidates" style={{ color: "#fff", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
              👤 {!isCollapsed && "Manage Candidates"}
            </Link>
          </li>

          {/* Other sections */}
          {[
            { label: "Job Listings", icon: "📄", link: "/jobs" },
            { label: "Applications", icon: "📥", link: "/applications" },
            { label: "Shortlisting", icon: "✅", link: "/shortlisting" },
            { label: "Interviews", icon: "🎤", link: "/interviews" },
            { label: "Reports", icon: "📊", link: "/reports" },
            { label: "Notifications", icon: "🔔", link: "/notifications" },
            { label: "Settings", icon: "⚙", link: "/settings", bigIcon: true },
          ].map((item, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 20px",
                cursor: "pointer",
                transition: "background 0.2s",
                borderBottom: "1px solid #3c4b52",
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#3c4b52")}
              onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <Link
                to={item.link}
                style={{ display: "flex", alignItems: "center", gap: "10px", color: "#fff", textDecoration: "none", flex: 1 }}
              >
                <span style={{ fontSize: item.bigIcon ? "32px" : "16px" }}>{item.icon}</span>
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
              {!isCollapsed && <span style={{ fontSize: "14px" }}>›</span>}
            </li>
          ))}

          <li
            style={{
              padding: "10px 20px",
              display: "flex",
              alignItems: "center",
              color: "#f88",
              cursor: "pointer",
            }}
          >
            <FaSignOutAlt style={{ marginRight: "10px" }} />
            {!isCollapsed && <span>Logout</span>}
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, background: "#f0f2f5", padding: "30px" }}>
        <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Manage Candidates</h1>

        <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff", borderRadius: "10px", overflow: "hidden" }}>
          <thead>
            <tr style={{ background: "#2f3e47", color: "#fff" }}>
              <th style={{ padding: "12px", textAlign: "left" }}>ID</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Name</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Email</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "12px" }}>{candidate.id}</td>
                <td style={{ padding: "12px" }}>{candidate.name}</td>
                <td style={{ padding: "12px" }}>{candidate.email}</td>
                <td style={{ padding: "12px" }}>{candidate.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ManageCandidates;
