import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../Login.css';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
    const handleLogin = () => {
      // Do authentication logic (e.g., call API, validate credentials)
      
      // On success, redirect to Job Seeker page
      navigate('/jobseeker');
    };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:2005/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        alert("Login failed: " + errorText);
        return;
      }

      const user = await response.json();
      alert("Login successful!");

      switch (user.role.toLowerCase()) {
        case "admin":
          navigate("/admin");
          break;
        case "recruiter":
          navigate("/recruiter");
          break;
        case "jobseeker":
          navigate("/jobseeker");
          break;
        default:
          alert("Unknown role: " + user.role);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div>
      {/* Header */}
      <header>
        <div className="logo">Job Craft</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/contactus">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login as Job Seeker</button>
    </div>
      {/* Hero Section */}
      <section className="hero">
        <h1>Login to Job Craft</h1>
        <p>Access your account to continue your job search or manage your hiring process.</p>
      </section>

      {/* Login Form */}
      <section className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>

        <p>Don't have an account? <Link to="/signup">Sign up here</Link>.</p>
      </section>

      {/* Footer */}
      <footer>
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

export default Login;
