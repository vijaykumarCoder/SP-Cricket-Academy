import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🏏</span>
              <span className="logo-text">SP Cricket Academy</span>
            </div>
            <p className="footer-description">
              Premier cricket coaching academy dedicated to nurturing talent and 
              developing world-class cricketers. Join us to elevate your game.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">▶️</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#facilities">Facilities</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#achievements">Achievements</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Programs</h4>
            <ul className="footer-links">
              <li><a href="#">Batting Coaching</a></li>
              <li><a href="#">Bowling Training</a></li>
              <li><a href="#">Fielding Practice</a></li>
              <li><a href="#">Night Sessions</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              <li>📍 123 Cricket Ground, Sports City</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ info@spcricketacademy.com</li>
              <li>🕐 Mon-Sat: 6 AM - 9 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 SP Cricket Academy. All rights reserved.</p>
          <p>Designed with ❤️ for Cricket Excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
