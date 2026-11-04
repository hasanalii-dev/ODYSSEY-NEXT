import React from 'react';
import { Badge } from './Badge';
import './SectionHeading.css';

export const SectionHeading = ({
  badge,
  badgeIcon,
  badgeVariant = 'accent',
  title,
  highlight,
  subtitle,
  align = 'center',
  className = ''
}) => {
  return (
    <div className={`ody-section-header ody-section-header--${align} ${className}`}>
      {badge && (
        <div className="ody-section-badge-wrap">
          <Badge variant={badgeVariant} icon={badgeIcon}>
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="ody-section-title">
        {title}{' '}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {subtitle && <p className="ody-section-subtitle">{subtitle}</p>}
    </div>
  );
};
