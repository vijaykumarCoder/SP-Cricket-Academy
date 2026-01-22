import React from 'react';
import './CricketHighlights.css';

const CricketHighlights = () => {
  const highlights = [
    {
      id: 1,
      title: 'PERSONAL TRAINING',
      description:
        'One-to-one coaching sessions focused on technique, fitness and mindset for every player.',
      icon: '🏋️‍♂️',
    },
    {
      id: 2,
      title: 'TEAM COMPETITION',
      description:
        'Regular intra-academy and inter-academy matches to build match temperament and teamwork.',
      icon: '🏏',
    },
    {
      id: 3,
      title: 'LEAGUES',
      description:
        'Participation in local and state-level leagues to give players real tournament exposure.',
      icon: '🏆',
    },
    {
      id: 4,
      title: 'TOP EQUIPMENT',
      description:
        'High-quality cricket gear, bowling machines and training aids that match professional standards.',
      icon: '🎯',
    },
  ];

  return (
    <section className="highlights-section">
      <div className="container">
        <div className="highlights-header">
          <h2 className="highlights-title">
            SHARE THE <span className="my-component-text">PASSION OF CRICKET</span>
          </h2>
          <p className="highlights-subtitle">
            World-class coaching, competitive environment and the best facilities to help every
            player reach their full potential.
          </p>
        </div>

        <div className="highlights-grid">
          {highlights.map((item) => (
            <div key={item.id} className="highlight-card">
              <div className="highlight-icon">
                <span>{item.icon}</span>
              </div>
              <div className="highlight-content">
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CricketHighlights;

// import React from 'react';
// import './CricketHighlights.css';

// const IconBall = () => (
//   <svg viewBox="0 0 64 64" aria-hidden="true">
//     <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="3" />
//     <path
//       d="M24 18c4 5 12 5 16 0M24 46c4-5 12-5 16 0"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="3"
//       strokeLinecap="round"
//     />
//     <path
//       d="M30 14c-2 6-2 30 0 36M34 14c2 6 2 30 0 36"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       opacity="0.9"
//     />
//   </svg>
// );

// const IconBats = () => (
//   <svg viewBox="0 0 64 64" aria-hidden="true">
//     <path
//       d="M38 12l6 6-20 20-6-6z"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="3"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M22 30l-6 6c-2 2-2 5 0 7s5 2 7 0l6-6"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="3"
//       strokeLinecap="round"
//     />
//     <path
//       d="M26 14l24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="3"
//       strokeLinecap="round"
//       opacity="0.9"
//     />
//   </svg>
// );

// const IconTrophy = () => (
//   <svg viewBox="0 0 64 64" aria-hidden="true">
//     <path
//       d="M22 14h20v10c0 8-5 14-10 14s-10-6-10-14V14z"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="3"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M22 18h-6c0 8 3 12 10 12M42 18h6c0 8-3 12-10 12"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="3"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M26 52h12M24 48h16M28 38v10h8V38"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="3"
//       strokeLinecap="round"
//     />
//   </svg>
// );

// const IconStumps = () => (
//   <svg viewBox="0 0 64 64" aria-hidden="true">
//     <path
//       d="M22 16v34M32 16v34M42 16v34"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="3"
//       strokeLinecap="round"
//     />
//     <path
//       d="M18 16h28M18 50h28"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="3"
//       strokeLinecap="round"
//     />
//     <path
//       d="M25 14h6M33 14h6"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="3"
//       strokeLinecap="round"
//     />
//   </svg>
// );

// const CricketHighlights = () => {
//   const highlights = [
//     {
//       id: 1,
//       title: 'Personal training',
//       description: 'Focused one-to-one sessions to improve technique and confidence.',
//       icon: <IconBall />,
//       active: false,
//     },
//     {
//       id: 2,
//       title: 'Team competitions',
//       description: 'Match practice to build teamwork, temperament, and game sense.',
//       icon: <IconBats />,
//       active: false,
//     },
//     {
//       id: 3,
//       title: 'Junior league',
//       description: 'League exposure to develop consistency and performance mindset.',
//       icon: <IconTrophy />,
//       active: true, // highlighted tile like your screenshot
//     },
//     {
//       id: 4,
//       title: 'Top equipment',
//       description: 'Premium gear and training aids for professional-level practice.',
//       icon: <IconStumps />,
//       active: false,
//     },
//   ];

//   return (
//     <section className="highlights-section">
//       <div className="container">
//         <div className="highlights-grid-2x2">
//           {highlights.map((item) => (
//             <div key={item.id} className={`highlight-tile ${item.active ? 'is-active' : ''}`}>
//               <div className="highlight-tile-inner">
//                 <div className="highlight-line-icon">{item.icon}</div>
//                 <h3 className="highlight-tile-title">{item.title}</h3>
//                 <p className="highlight-tile-desc">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CricketHighlights;