import React, { useState } from "react";
import "../contactus.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:2005/api/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.text();
      alert(data); // Show backend message
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Error submitting message: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Header */}
      <header>
        <div className="logo">Job Craft</div>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/contactus" className="active">Contact Us</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup" className="signup-btn">Sign Up</a></li>
          </ul>
        </nav>
      </header>

      {/* Contact Section */}
      <main className="main-content" style={{ padding: "2rem" }}>
        <section className="contact-section" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#0033cc" }}>
            📞 Contact Us
          </h2>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center"
          }}>
            
            {/* Contact Form */}
            <div style={{
              flex: "1 1 400px",
              background: "#fff",
              padding: "2rem",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}>
              <h3 style={{ marginBottom: "1rem" }}>Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%", padding: "10px", marginBottom: "1rem",
                    borderRadius: "5px", border: "1px solid #ccc"
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%", padding: "10px", marginBottom: "1rem",
                    borderRadius: "5px", border: "1px solid #ccc"
                  }}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%", padding: "10px", marginBottom: "1rem",
                    borderRadius: "5px", border: "1px solid #ccc", height: "120px"
                  }}
                ></textarea>
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: "#0033cc",
                    color: "#fff",
                    fontWeight: "bold",
                    cursor: "pointer"
                  }}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
               
              </form>
            </div>

            {/* Contact Info */}
            <div style={{
              flex: "1 1 300px",
              background: "#f7f9fc",
              padding: "2rem",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
            }}>
              <h3 style={{ marginBottom: "1rem" }}>Get in Touch</h3>
              <p><i className="fas fa-map-marker-alt"></i> Hyderabad, India</p>
              <p><i className="fas fa-phone"></i> +91 98765 43210</p>
              <p><i className="fas fa-envelope"></i> support@jobcraft.com</p>
              <div className="social-icons" style={{ marginTop: "1rem" }}>
                <a href="#"><i className="fab fa-facebook" style={{ marginRight: "10px" }}></i></a>
                <a href="#"><i className="fab fa-twitter" style={{ marginRight: "10px" }}></i></a>
                <a href="#"><i className="fab fa-linkedin" style={{ marginRight: "10px" }}></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <p>&copy; 2025 Job Craft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
