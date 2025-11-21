import { Link } from "react-router-dom";
import './../css/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/EzwipS.png" alt="CampusConnect Logo" />
          <p>CampusConnect – Stay Updated, Stay Involved!</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/events">Events</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: nizamuddinsolangi614@gmail.com</p>
          <p>Phone: +92 315 2373656</p>
          <p>Address: Aptech Campus, Karachi</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CampusConnect | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
