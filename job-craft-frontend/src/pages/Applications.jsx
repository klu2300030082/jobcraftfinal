import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import '../applications.css';

const Applications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const jobs = [
    { id: 1, title: "Frontend Developer", company: "TechCorp Inc.", description: "We are looking for a skilled Frontend Developer to join our team." },
    { id: 2, title: "Backend Developer", company: "DataFlow Systems", description: "Join our backend team to build scalable applications." },
    { id: 3, title: "UI/UX Designer", company: "Creative Studio", description: "We need a creative UI/UX Designer to design intuitive user interfaces." },
    { id: 4, title: "Data Scientist", company: "Analytics Pro", description: "Analyze datasets and build ML models. Python/R experience required." },
    { id: 5, title: "Product Manager", company: "Innovation Labs", description: "Lead product development and strategy with cross-functional teams." },
    { id: 6, title: "DevOps Engineer", company: "CloudTech Solutions", description: "Manage infrastructure and CI/CD pipelines with AWS/Docker/K8s." },
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const signOut = () => {
    if (window.confirm("Are you sure you want to sign out?")) {
      window.location.href = "/jobseeker";
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleApply = (job) => {
    alert(`Applied to ${job.title} at ${job.company}!`);
  };

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Navbar */}
      <header>
        <div className="logo">Job Craft</div>
        <nav>
          <ul>
            <li><Link to="/jobseeker">Home</Link></li>
            <li><Link to="/applications">Available Jobs</Link></li>
            <li><Link to="/AppliedJobs">Applied Jobs</Link></li>
            <li className="dropdown" ref={dropdownRef}>
              <span className="profile-icon" onClick={toggleDropdown}>👤 Profile</span>
              {showDropdown && (
                <div className="dropdown-content">
                  <Link to="/manage-profile">Manage Profile</Link>
                  <a href="#">Saved Jobs</a>
                  <a href="#">Applied Jobs</a>
                  <a href="#">Account Settings</a>
                  <a href="#" onClick={signOut}>Sign Out</a>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </header>

      {/* Page Content */}
      <div className="page-section">
        <div className="container">
          <div className="page-header">
            <h1>Available Jobs</h1>
            <p>Browse and apply to job opportunities</p>
          </div>

          <input
            type="text"
            placeholder="Search jobs by title or company..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="grid grid-2">
            {filteredJobs.map((job) => (
              <div key={job.id} className="job-card">
                <h3 className="job-title">{job.title}</h3>
                <p className="job-company">{job.company}</p>
                <p className="job-description">{job.description}</p>
                <button
                  onClick={() => handleApply(job)}
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <p>No jobs found matching your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Applications;
