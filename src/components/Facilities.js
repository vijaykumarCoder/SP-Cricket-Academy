import React from 'react';
import './Facilities.css';

const Facilities = () => {
  const facilities = [
    {
      id: 1,
      title: 'BATTING PRACTICE',
      description: 'Professional batting nets with advanced coaching techniques',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      number: '#1'
    },
    {
      id: 2,
      title: 'BOWLING COACHING',
      description: 'State-of-the-art bowling machines and expert guidance',
      image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      number: '#2'
    },
    {
      id: 3,
      title: 'FIELDING TRAINING',
      description: 'Comprehensive fielding drills and agility development',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      number: '#3'
    },
    {
      id: 4,
      title: 'NIGHT SESSIONS',
      description: 'Floodlit facilities for evening practice sessions',
      image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      number: '#4'
    }
  ];

  return (
    <section id="facilities" className="facilities-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-accent my-component-text">Our</span> Facilities
          </h2>
          <p className="section-subtitle">World-class training infrastructure for excellence</p>
        </div>
        <div className="facilities-grid">
          {facilities.map((facility) => (
            <div key={facility.id} className="facility-card">
              <div className="facility-image-wrapper">
                <img src={facility.image} alt={facility.title} className="facility-image" />
                <div className="facility-overlay"></div>
              </div>
              <div className="facility-content">
                <span className="facility-number">{facility.number}</span>
                <h3 className="facility-title">{facility.title}</h3>
                <p className="facility-description">{facility.description}</p>
                <div className="facility-arrow">→</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
