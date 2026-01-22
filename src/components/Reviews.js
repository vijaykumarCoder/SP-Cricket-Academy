import React, { useState, useEffect } from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'RAHUL SHARMA',
      role: 'U19 Team Player',
      rating: 5,
      text: 'SP Cricket Academy transformed my game completely. The coaches are world-class and the facilities are outstanding. I improved my batting average by 40% in just 6 months.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      background: 'https://images.pexels.com/photos/3718433/pexels-photo-3718433.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80'
    },
    {
      id: 2,
      name: 'PRIYA PATEL',
      role: 'State Team Player',
      rating: 5,
      text: 'The personalized coaching and attention to detail here is unmatched. The night sessions helped me balance my studies and cricket practice perfectly.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      background: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80'
    },
    {
      id: 3,
      name: 'AMIT KUMAR',
      role: 'Parent',
      rating: 5,
      text: 'My son has been training here for 2 years and the improvement is remarkable. The academy not only teaches cricket but also builds character and discipline.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      background: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play infinite carousel (fade)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % reviews.length);
    }, 6000); // 6s each slide

    return () => clearInterval(interval);
  }, [reviews.length]);

  const currentReview = reviews[currentIndex];

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="reviews" className="reviews-section">
      <div className="reviews-hero"
           style={{ backgroundImage: `url(${currentReview.background})` }}>
        <div className="reviews-hero-overlay" />

        <div className="reviews-inner container">
          <div
            key={currentIndex} // re-trigger animation on change
            className="review-card-hero"
          >
            <div className="review-photo-wrapper">
              <div className="review-photo-bg" />
              <img
                src={currentReview.image}
                alt={currentReview.name}
                className="review-photo"
              />
            </div>

            <div className="review-main-content">
              <div className="review-stars-row">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>

              <p className="review-quote">
                {currentReview.text}
              </p>

              <div className="review-signature">
                <span className="review-name">{currentReview.name}</span>
                <span className="review-role">{currentReview.role}</span>
              </div>
            </div>
          </div>

          {/* Dots only (no left/right icons) */}
          <div className="reviews-dots">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`reviews-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;