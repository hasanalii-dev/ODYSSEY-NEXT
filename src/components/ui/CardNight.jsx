import React from 'react';
import './CardNight.css';

export const CardNight = ({ children, className = '', glowColor = 'teal', ...props }) => {
  return (
    <div className={`card-night card-night--glow-${glowColor} ${className}`} {...props}>
      {children}
    </div>
  );
};
