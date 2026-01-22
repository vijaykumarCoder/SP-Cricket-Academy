import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🏏</span>
            {/* <span className="logo-text">SP Cricket Academy</span> */}
          </div>
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#home" onClick={closeMobileMenu}>Home</a>
            <a href="#facilities" onClick={closeMobileMenu}>Facilities</a>
            <a href="#reviews" onClick={closeMobileMenu}>Reviews</a>
            <a href="#achievements" onClick={closeMobileMenu}>Achievements</a>
            <a href="#contact" onClick={closeMobileMenu}>Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
