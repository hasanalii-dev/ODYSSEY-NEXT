import React from 'react';
import './GlassTab.css';

export const GlassTab = ({ iconClass, label, delay = '0s', positionClass = '', iconColorClass = '' }) => {
  return (
    <div
      className={`glass-tab animate-float ${positionClass}`}
      style={{ animationDelay: delay }}
    >
      <i className={`${iconClass} glass-tab-icon ${iconColorClass}`}></i>
      <div className="glass-tab-label">{label}</div>
    </div>
  );
};
