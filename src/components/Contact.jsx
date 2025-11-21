import { useState } from "react";
import contactInfo from "../data/contact-info.json";
import "./../css/contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaQuoteLeft
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
//validation
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const emailRegex = /^[A-Za-z]{3,}[A-Za-z0-9._]*@[A-Za-z0-9.-]+\.[A-Za-z]{1,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    switch (name) {
      case "name":
        setErrors((prev) => ({
          ...prev,
          name: /^[A-Za-z\s]{3,}$/.test(value) ? "" : "Only letters allowed (min. 3)"
        }));
        break;
      case "email":
        setErrors((prev) => ({
          ...prev,
          email: emailRegex.test(value) ? "" : "Email must start with at least 3 letters and contain @"
        }));
        break;
      case "subject":
        setErrors((prev) => ({
          ...prev,
          subject: value.trim() ? "" : "Subject cannot be empty"
        }));
        break;
      case "message":
        setErrors((prev) => ({
          ...prev,
          message: value.trim() ? "" : "Message cannot be empty"
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!/^[A-Za-z\s]{3,}$/.test(formData.name)) valid = false;
    if (!emailRegex.test(formData.email)) valid = false;
    if (!formData.subject.trim()) valid = false;
    if (!formData.message.trim()) valid = false;

    if (valid) {
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setTimeout(() => setSuccess(false), 5000);
    } else {
      setErrors((prev) => ({ ...prev, form: "Please fix the errors above." }));
    }
  };

  return (
    <>
      <div className="about-header">
        <div className="header-content">
          <h1>Get In Touch</h1>
          <p>Let's start a conversation and build something amazing together</p>
        </div>
      </div>

      <section className="contact-highlight" aria-label="quick contact">
        <div className="highlight-card">
          <FaEnvelope className="icon" />
          <h4>Email Us</h4>
          <p>nizamuddinsolangi614@gmail.com</p>
          <span className="tag">24/7 Response</span>
        </div>
        <div className="highlight-card">
          <FaPhoneAlt className="icon" />
          <h4>Call Us</h4>
          <p>+92 315 2373656</p>
          <span className="tag">Direct Line</span>
        </div>
        <div className="highlight-card">
          <FaMapMarkerAlt className="icon" />
          <h4>Visit Us</h4>
          <p>Karachi, Pakistan</p>
          <span className="tag">Head Office</span>
        </div>
        <div className="highlight-card">
          <FaClock className="icon" />
          <h4>Office Hours</h4>
          <p>Mon - Sat: 9AM - 6PM</p>
          <span className="tag">Available</span>
        </div>
      </section>

      <div className="contact-wrapper">
        <div className="contact-card">
          <div className="contact-visual">
            <div className="quote-section">
              <FaQuoteLeft className="quote-icon" />
              <p className="quote-text">
                "Innovation distinguishes between a leader and a follower. Let's innovate together."
              </p>
            </div>

            <h2 className="creator-title">Creator Information</h2>

            <ul className="creator-info">
              {contactInfo.map((item, idx) => (
                <li key={`${item.type}-${idx}`} className="creator-item">
                  <span className="creator-type">{item.type}</span>
                  <span className="creator-value">{item.value}</span>
                </li>
              ))}
            </ul>

            <div className="info-boxes">
              <div className="info-box">
                <h4>🎯 Quick Response</h4>
                <p>We respond to all inquiries within 24 hours</p>
              </div>
              <div className="info-box">
                <h4>🔒 Privacy First</h4>
                <p>Your information is secure and confidential</p>
              </div>
            </div>

            <div className="social-links">
              <h3>Connect With Me</h3>
              <div className="icons">
                <a href="https://www.facebook.com/nizamuddin.solangi.269069" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/solangi_nizamuddin/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/nizamuddin-solangi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send a Message</h2>
            <p className="subtitle">We value your feedback and inquiries. Let's connect and make something great!</p>

            {success && (
              <div className="success-msg">
                <FaPaperPlane /> Your message has been sent successfully!
              </div>
            )}
            {errors.form && <div className="contact-error">{errors.form}</div>}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="contact-input">
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="John Doe" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                  {errors.name && <small>{errors.name}</small>}
                </div>

                <div className="contact-input">
                  <label>Email Address *</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="john@example.com" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                  {errors.email && <small>{errors.email}</small>}
                </div>
              </div>

              <div className="contact-input">
                <label>Subject *</label>
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="What's this about?" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                />
                {errors.subject && <small>{errors.subject}</small>}
              </div>

              <div className="contact-input">
                <label>Your Message *</label>
                <textarea 
                  name="message" 
                  placeholder="Tell us more about your project or inquiry..." 
                  rows="6" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                />
                {errors.message && <small>{errors.message}</small>}
              </div>

              <button type="submit">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="map-section" role="region" aria-label="map">
        
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/d/u/0/embed?mid=1WH_hPb6b0dJJ3rx9Y_r338fwUwN-5NE&ehbc=2E312F&noprof=1"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}

export default Contact;