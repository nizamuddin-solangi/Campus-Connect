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
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/events">Events</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact Us</a>
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
