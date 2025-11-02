'use client';

import { useEffect, useState } from 'react';

const Starfield = () => {
  const [starStyles, setStarStyles] = useState({
    stars: '',
    stars1: '',
    stars2: ''
  });

  useEffect(() => {
    const createStars = (n: number) => {
      let stars = '';
      for (let i = 0; i < n; i++) {
        const x = Math.floor(Math.random() * 2560);
        const y = Math.floor(Math.random() * 2560);
        stars += `${x}px ${y}px #FFF${i < n - 1 ? ', ' : ''}`;
      }
      return stars;
    };

    setStarStyles({
      stars: createStars(1700),
      stars1: createStars(700),
      stars2: createStars(200)
    });
  }, []);

  return (
    <div className="starfield-container">
      <div 
        className="stars" 
        style={{ boxShadow: starStyles.stars }}
      />
      <div 
        className="stars1" 
        style={{ boxShadow: starStyles.stars1 }}
      />
      <div 
        className="stars2" 
        style={{ boxShadow: starStyles.stars2 }}
      />
      {/* Generate 10 shooting stars */}
      {Array.from({ length: 10 }, (_, i) => (
        <div 
          key={i} 
          className="shooting-stars"
          style={{
            animationDelay: `${i * 1}s`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  );
};

export default Starfield;
