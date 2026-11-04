import React from 'react';
import './Badge.css';

export const Badge = ({ children, variant = 'default', size = 'md', icon: Icon, className = '' }) => {
  return (
    <span className={`ody-badge ody-badge--${variant} ody-badge--${size} ${className}`}>
      {Icon && <Icon className="ody-badge-icon" size={size === 'sm' ? 12 : 14} />}
      <span className="ody-badge-text">{children}</span>
    </span>
  );
};
