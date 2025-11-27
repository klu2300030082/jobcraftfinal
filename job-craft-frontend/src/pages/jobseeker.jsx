import React, { useEffect, useRef, useState } from "react";
import "../home.css";
import "../jobseeker.css";
import { Link } from "react-router-dom";

const JobSeeker = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const jobs = [
    {
      id: 1,
      title: "Senior UX Designer",
      company: "UpWork",
      type: "Contract Base",
      location: "Australia",
      salary: "$30K–$35K",
      logo: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Apple",
      type: "Full Time",
      location: "China",
      salary: "$50K–$60K",
      logo: "https://cdn-icons-png.flaticon.com/512/888/888857.png",
    },
    {
      id: 3,
      title: "Front-End Developer",
      company: "YouTube",
      type: "Remote",
      location: "USA",
      salary: "$45K–$55K",
      logo: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    },
    {
      id: 4,
      title: "Cloud Solutions Architect",
      company: "Microsoft",
      type: "Full Time",
      location: "USA",
      salary: "$80K–$95K",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    },
  ];

  const trends = [
    {
      id: 1,
      title: "Top Growing Industry",
      stat: "AI & Machine Learning",
      description: "AI roles have seen a 74% growth rate over the last year.",
      icon: "🤖",
    },
    {
      id: 2,
      title: "Most In-Demand Skill",
      stat: "Cloud Computing",
      description: "Cloud-related job postings have increased by 38%.",
      icon: "☁️",
    },
    {
      id: 3,
      title: "Top Remote Role",
      stat: "Frontend Developer",
      description: "Remote frontend roles lead in global postings.",
      icon: "💻",
    },
    {
      id: 4,
      title: "Highest Paying Domain",
      stat: "Blockchain",
      description: "Average salaries in blockchain exceed $150K/year.",
      icon: "🔗",
    },
  ];

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const signOut = () => {
    if (window.confirm("Are you sure you want to sign out?")) {
      window.location.href = "/";
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

  return (
    <div style={{ paddingTop: "80px" }}>
      <header>
        <div className="logo">Job Craft</div>
        <nav>
          <ul>
            <li><Link to="/jobseeker">Home</Link></li>
            <li><Link to="/applications">Available Jobs</Link></li>
            <li><Link to="/AppliedJobs">Applied Jobs</Link></li>


            {/* <li><a href="#">Upload Resume</a></li> */}
            <li className="dropdown" ref={dropdownRef}>
              <span className="profile-icon" onClick={toggleDropdown}>👤 Profile</span>
              {showDropdown && (
                <div className="dropdown-content">
                  <Link to="/manage-profile">Manage Profile</Link>
                  <a href="/AppliedJobs">Applied Jobs</a>
                  <a href="/AccountSettings">Account Settings</a>
                  <a href="/" onClick={signOut}>Sign Out</a>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Find a job that suits your interest & skills.</h1>
            <p>
              Transform your career with our cutting-edge job portal. Search for jobs, connect
              with employers, and unlock new opportunities for growth and success.
            </p>

            <div className="search-box">
              <input type="text" placeholder="Job title, Keyword..." />
              <input type="text" placeholder="Your Location" />
              <button><Link to="/applications">Find Jobs</Link> </button>

            </div>

            <p className="suggestions">
              Suggestion: <span>Designer</span>, <span>Programming</span>, <span className="highlight">Digital Marketing</span>, <span>Video</span>, <span>Animation</span>
            </p>
          </div>

          <div className="hero-image">
            <img src="https://cdn-icons-png.flaticon.com/512/921/921347.png" alt="Job Search" />
          </div>
        </div>

        <div className="stats">
          <div className="stat-box">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png" alt="Live Jobs" />
            <h2>1,75,324</h2>
            <p>Live Job</p>
          </div>
          <div className="stat-box">
            <img src="https://cdn-icons-png.flaticon.com/512/263/263115.png" alt="Companies" />
            <h2>97,354</h2>
            <p>Companies</p>
          </div>
          <div className="stat-box">
            <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="Candidates" />
            <h2>38,47,154</h2>
            <p>Candidates</p>
          </div>
          <div className="stat-box">
            <img src="https://cdn-icons-png.flaticon.com/512/2312/2312711.png" alt="New Jobs" />
            <h2>7,532</h2>
            <p>New Jobs</p>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="featured-jobs">
        <h2 className="section-title">Featured Jobs Circulars</h2>

        <div className="filter-sort">
          <select>
            <option>Trending</option>
            <option>Newest</option>
            <option>High Salary</option>
          </select>
        </div>

        <div className="jobs-grid">
          {jobs.map((job) => (
            <div className="job-card-modern" key={job.id}>
              <div className="job-tags">
                <span className="tag">{job.type}</span>
                <span className="tag">{job.location}</span>
              </div>

              <div className="job-info">
                <img src={job.logo} alt={`${job.company} logo`} className="job-logo" />
                <div>
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-company">{job.company}</p>
                  <p className="job-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum.</p>
                </div>
              </div>

              <div className="job-meta-modern">
                <span>🕒 05 hours ago</span>
                <span>💰 {job.salary}</span>
              </div>

              <button className="apply-button">Apply for this Job</button>
            </div>
          ))}
        </div>

        <div className="load-more-container">
          <button className="load-more-button">Load More Jobs</button>
        </div>
      </section>

      {/* Career Trends */}
      <section className="career-trends">
        <h2 className="section-title">Career Insights & Market Trends</h2>
        <div className="trends-grid">
          {trends.map((trend) => (
            <div key={trend.id} className="trend-card">
              <div className="trend-icon">{trend.icon}</div>
              <h3>{trend.title}</h3>
              <h4>{trend.stat}</h4>
              <p>{trend.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="about-us">
            <h3>About Us</h3>
            <p>We connect job seekers and recruiters worldwide, making hiring seamless and efficient.</p>
          </div>
          <div className="feedback">
            <h3>Feedback</h3>
            <textarea placeholder="Your feedback"></textarea>
            <button>Submit</button>
          </div>
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="social-media">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p>&copy; 2025 Job Craft. All rights reserved. | Connecting talent with opportunity globally.</p>
        </div>
      </footer>
    </div>
  );
};

export default JobSeeker;
