import React, { useState } from 'react';
import '../Signup.css';
import { Link } from "react-router-dom";
const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    role: 'jobseeker'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:2005/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName: formData.fullname,
          email: formData.email,
          password: formData.password,
          role: formData.role
        })
      });

      if (response.ok) {
        alert('Signup successful! Please login.');
        window.location.href = '/login';
      } else {
        const errorText = await response.text();
        alert('Signup failed: ' + errorText);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">Job Craft</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/contactus">Contact Us</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Signup for Job Craft</h1>
        <p>Create an account to start your journey with us.</p>
      </section>

      {/* Signup Form */}
      <section className="signup-form">
        <div className="form-container">
          <h2>Signup</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label htmlFor="role">Select Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="jobseeker">Job Seeker</option>
              <option value="recruiter">Recruiter</option>
              <option value="admin">Admin</option>
            </select>

            <button type="submit">Signup</button>
          </form>

          <p>Already have an account? <Link to="/login">Login here</Link>.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="about-us">
            <h3>About Us</h3>
            <p>We are a leading job portal connecting job seekers and recruiters worldwide.</p>
          </div>
          <div className="feedback">
            <h3>Feedback</h3>
            <textarea placeholder="Your feedback"></textarea>
            <button>Submit</button>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Job Craft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Signup;
