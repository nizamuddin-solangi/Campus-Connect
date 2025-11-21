import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sitemapOpen, setSitemapOpen] = useState(false);

  return (
    <header className="app-header">
      <div className="app-logo">
        <img src="/EzwipS.png" alt="CampusConnect Logo" className="app-logo-img" />
      </div>

      <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        ☰
      </button>

      <nav className={`app-nav ${mobileMenuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/events">Events</Link>
        <Link to="/eventcalendar">Event Calendar</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/contact">Contact Us</Link>

        <div className={`app-dropdown ${sitemapOpen ? "open" : ""}`}>
          <button
            className="app-dropbtn"
            onClick={() => setSitemapOpen(!sitemapOpen)}
          >
            Sitemap ▼
          </button>
          <div className="app-dropdown-content">
            <Link to="">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/events">Events</Link>
            <Link to="/eventcalendar">Event Calendar</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/feedback">Feedback</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
