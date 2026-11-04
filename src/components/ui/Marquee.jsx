import React from 'react';
import './Marquee.css';

export const Marquee = ({ children, speed = 40 }) => {
  return (
    <div className="relative w-full overflow-hidden marquee-mask">
      <div className="animate-scroll" style={{ animationDuration: `${speed}s` }}>
        <div className="marquee-content">{children}</div>
        <div className="marquee-content" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
};
