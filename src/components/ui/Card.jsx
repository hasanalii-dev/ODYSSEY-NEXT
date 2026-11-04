import React from 'react';
import './Card.css';

export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  interactive = false,
  onClick,
  ...props
}) => {
  return (
    <div
      className={`ody-card ${hoverEffect ? 'ody-card--hover' : ''} ${glow ? 'ody-card--glow' : ''} ${interactive ? 'ody-card--interactive' : ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      <div className="ody-card-inner">
        {children}
      </div>
    </div>
  );
};
