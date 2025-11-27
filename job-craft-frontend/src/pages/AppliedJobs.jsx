import React, { useState } from "react";
import "../applications.css"; // reuse CSS

const AppliedJobs = () => {
  // Demo applied jobs
  const [appliedJobs, setAppliedJobs] = useState([
    { id: 1, title: "Frontend Developer", company: "TechCorp", description: "Frontend role", status: "Applied", appliedDate: "2025-09-20" },
    { id: 2, title: "Backend Developer", company: "DataFlow", description: "Backend role", status: "Interview Scheduled", appliedDate: "2025-09-18" },
  ]);

  const handleStatusChange = (jobId, newStatus) => {
    setAppliedJobs(
      appliedJobs.map((job) =>
        job.id === jobId ? { ...job, status: newStatus } : job
      )
    );
  };

  const handleRemoveJob = (jobId) => {
    if (window.confirm("Are you sure you want to remove this job application?")) {
      setAppliedJobs(appliedJobs.filter((job) => job.id !== jobId));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Applied":
        return "status-applied";
      case "Interview Scheduled":
        return "status-interview";
      case "Rejected":
        return "status-rejected";
      case "Accepted":
        return "status-accepted";
      default:
        return "status-applied";
    }
  };

  return (
    <div className="page-section" style={{ paddingTop: "80px" }}>
      <div className="container">
        <div className="page-header">
          <h1>Applied Jobs</h1>
          <p>Track the status of your job applications</p>
        </div>

        {appliedJobs.length === 0 ? (
          <div style={{ textAlign: "center", padding: "3rem" }}>
            <h3>No Applied Jobs Yet</h3>
            <p>Start applying to jobs from the Applications page to see them here.</p>
            <a href="/applications" className="btn btn-primary" style={{ marginTop: "1rem" }}>
              Browse Jobs
            </a>
          </div>
        ) : (
          <div className="grid grid-2">
            {appliedJobs.map((job) => (
              <div key={job.id} className="applied-job-card">
                <div className="applied-job-header">
                  <div className="applied-job-info">
                    <h3>{job.title}</h3>
                    <p><strong>{job.company}</strong></p>
                    <p className="applied-date">Applied on: {job.appliedDate}</p>
                  </div>
                </div>

                <p className="job-description">{job.description}</p>

                <div className="status-controls">
                  <div>
                    <label htmlFor={`status-${job.id}`} style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                      Status:
                    </label>
                    <select
                      id={`status-${job.id}`}
                      className="status-select"
                      value={job.status}
                      onChange={(e) => handleStatusChange(job.id, e.target.value)}
                    >
                      <option value="Applied">Applied</option>
                      <option value="Interview Scheduled">Interview Scheduled</option>
                      <option value="Rejected">Rejected</option>
                      <option value="Accepted">Accepted</option>
                    </select>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <span className={`status-badge ${getStatusColor(job.status)}`}>
                      {job.status}
                    </span>
                    <button
                      onClick={() => handleRemoveJob(job.id)}
                      className="btn btn-danger"
                      style={{ padding: "0.5rem 1rem", fontSize: "0.875rem" }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
