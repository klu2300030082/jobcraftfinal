import { useState } from "react";

const EmployersPage = () => {
  // Sample data
  const [employers, setEmployers] = useState([
    { id: 1, name: "TechCorp Inc.", email: "hr@techcorp.com", jobs: 12 },
    { id: 2, name: "InnoSoft Ltd.", email: "careers@innosoft.com", jobs: 8 },
    { id: 3, name: "FutureWorks", email: "jobs@futureworks.com", jobs: 5 },
  ]);

  const [search, setSearch] = useState("");

  // Filtered list
  const filteredEmployers = employers.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  // Handlers
  const handleDelete = (id) => {
    setEmployers(employers.filter((emp) => emp.id !== id));
  };

  const handleAdd = () => {
    const newEmployer = {
      id: employers.length + 1,
      name: "New Employer",
      email: "new@company.com",
      jobs: 0,
    };
    setEmployers([...employers, newEmployer]);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Manage Employers</h1>
        <button
          onClick={handleAdd}
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          + Add Employer
        </button>
      </div>

      {/* Search Bar */}
      <div style={{ margin: "15px 0" }}>
        <input
          type="text"
          placeholder="Search employers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "300px",
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "10px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Company Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Jobs Posted</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployers.length > 0 ? (
            filteredEmployers.map((emp) => (
              <tr key={emp.id} style={{ textAlign: "center" }}>
                <td style={tdStyle}>{emp.id}</td>
                <td style={tdStyle}>{emp.name}</td>
                <td style={tdStyle}>{emp.email}</td>
                <td style={tdStyle}>{emp.jobs}</td>
                <td style={tdStyle}>
                  <button style={editBtn}>Edit</button>
                  <button
                    style={deleteBtn}
                    onClick={() => handleDelete(emp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", padding: "10px" }}>
                No employers found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Styles
const thStyle = {
  padding: "10px",
  borderBottom: "1px solid #ddd",
};

const tdStyle = {
  padding: "10px",
  borderBottom: "1px solid #eee",
};

const editBtn = {
  marginRight: "8px",
  padding: "5px 10px",
  backgroundColor: "#28a745",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const deleteBtn = {
  padding: "5px 10px",
  backgroundColor: "#dc3545",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default EmployersPage;
    