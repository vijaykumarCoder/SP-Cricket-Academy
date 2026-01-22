import React from 'react';
import './Hero.css';
import '../index.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line1 my-component-text">Welcome to</span>
              <span className="title-line2">SP CRICKET ACADEMY</span>
            </h1>
            <p className="hero-subtitle">
              Where Champions Are Made
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary btn-hero">
                Join Now
              </a>
            </div>
            <p className="hero-description">
              Premier cricket coaching academy dedicated to nurturing talent and 
              developing world-class cricketers. Join us to elevate your game to the next level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
