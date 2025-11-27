// AdminDashboard.jsx
import React, { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const AdminDashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const dataCards = [
    { title: "Active Employers", count: 34, color: "#4e73df" },
    { title: "Active Job Seekers", count: 128, color: "#1cc88a" },
    { title: "Jobs Posted", count: 480, color: "#36b9cc" },
    { title: "Applications", count: 1225, color: "#f6c23e" },
  ];

  const regStatusData = [
    { name: "Approved", value: 102, color: "#2ecc71" },
    { name: "Pending", value: 45, color: "#f1c40f" },
    { name: "Rejected", value: 13, color: "#e74c3c" },
  ];

  const jobStatusData = [
    { name: "Active", value: 320 },
    { name: "Inactive", value: 160 },
  ];

  const lineChartData = [
    { month: "Jan", jobs: 80 },
    { month: "Feb", jobs: 120 },
    { month: "Mar", jobs: 110 },
    { month: "Apr", jobs: 150 },
    { month: "May", jobs: 90 },
  ];

  const jobColors = ["#f77f00", "#003049"];

  // Sidebar items with routes
  const sidebarItems = [
    { label: "Dashboard", icon: "🏠", path: "/admin" },
    { label: "Manage Employers", icon: "🏢", path: "/employers" },
    { label: "Manage Candidates", icon: "👤", path: "/candidates" },
    { label: "Job Listings", icon: "📄", path: "/job-listings" },
    // { label: "Applications", icon: "📥", path: "/applications" },
    { label: "Shortlisting", icon: "✅", path: "/shortlisting" },
    { label: "Interviews", icon: "🎤", path: "/interviews" },
    { label: "Reports", icon: "📊", path: "/reports" },
    { label: "Notifications", icon: "🔔", path: "/notifications" },
    { label: "Settings", icon: "⚙", path: "/settings", bigIcon: true },
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
          {sidebarItems.map((item, i) => (
            <li key={i} style={{ padding: "10px 20px" }}>
              <Link
                to={item.path}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span style={{ fontSize: item.bigIcon ? "32px" : "16px" }}>{item.icon}</span>
                {!isCollapsed && item.label}
              </Link>
            </li>
          ))}

          {/* Logout */}
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
        <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Admin Dashboard</h1>

        {/* Info Cards */}
        <div style={{ display: "flex", gap: "20px", marginBottom: "30px", flexWrap: "wrap" }}>
          {dataCards.map((card, i) => (
            <div
              key={i}
              style={{
                flex: "1 1 200px",
                background: card.color,
                color: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ color: "#fff" }}>{card.title}</h3>
              <p style={{ fontSize: "28px", fontWeight: "bold", color: "#fff" }}>{card.count}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
          {/* Pie Chart - Registration Status */}
          <div
            style={{
              flex: "1 1 300px",
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h4 style={{ marginBottom: "15px" }}>Registration Status</h4>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={regStatusData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {regStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart - Job Status */}
          <div
            style={{
              flex: "1 1 300px",
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h4 style={{ marginBottom: "15px" }}>Job Status</h4>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={jobStatusData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {jobStatusData.map((entry, index) => (
                    <Cell key={`job-${index}`} fill={jobColors[index % jobColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Line Chart */}
          <div
            style={{
              flex: "1 1 600px",
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h4 style={{ marginBottom: "15px" }}>Jobs Posted Over Time</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="jobs" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
