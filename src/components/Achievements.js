import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      name: 'RAHUL SHARMA',
      achievement: 'U19 National Team',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      // description: 'Selected for U19 National Cricket Team after outstanding performance in domestic tournaments.'
    },
    {
      id: 2,
      name: 'PRIYA PATEL',
      achievement: 'State Team Captain',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      // description: 'Appointed as State Team Captain, leading the team to victory in inter-state championship.'
    },
    {
      id: 3,
      name: 'ARJUN MEHTA',
      achievement: 'U19 State Team',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      // description: 'Earned selection to U19 State Team with exceptional bowling performance.'
    },
    // {
    //   id: 4,
    //   name: 'SANA KHAN',
    //   achievement: 'State Team',
    //   year: '2024',
    //   image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    //   description: 'Selected for State Team as opening batsman, scoring 500+ runs in the selection tournament.'
    // },
    // {
    //   id: 5,
    //   name: 'VIKASH SINGH',
    //   achievement: 'U19 National Team',
    //   year: '2023',
    //   image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    //   description: 'Represented U19 National Team in international series, taking 15 wickets in 5 matches.'
    // },
    // {
    //   id: 6,
    //   name: 'ANJALI REDDY',
    //   achievement: 'State Team',
    //   year: '2024',
    //   image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    //   description: 'Selected for State Team as wicket-keeper, showcasing exceptional skills behind the stumps.'
    // }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-accent my-component-text">Our</span> Achievers
          </h2>
          <p className="section-subtitle">Players selected to U19 and State teams</p>
        </div>
        <div className="achievements-grid">
          {achievements.map((player) => (
            <div key={player.id} className="achievement-card">
              <div className="achievement-image-wrapper">
                <img src={player.image} alt={player.name} className="achievement-image" />
                <div className="achievement-overlay"></div>
                <div className="achievement-badge">{player.year}</div>
              </div>
              <div className="achievement-content">
                {/* <div className="achievement-icon">🏏</div> */}
                <h3 className="achievement-name">{player.name}</h3>
                <p className="achievement-title">{player.achievement}</p>
                {/* <p className="achievement-description">{player.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
