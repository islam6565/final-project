import React from 'react';
import "./footer.css"; // Create and style this CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            At Men's Style Hub, we provide premium men's clothing designed to suit your lifestyle. Quality, style, and comfort are our top priorities.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@mensstylehub.com</p>
          <p>Phone: +1 800 123 4567</p>
          <p>Location: 123 Fashion Ave, Style City</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Men's Style Hub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
