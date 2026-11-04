import React from 'react';
import './Button.css';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconRight: IconRight,
  fullWidth = false,
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`ody-btn ody-btn--${variant} ody-btn--${size} ${fullWidth ? 'ody-btn--full' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon className="ody-btn-icon" size={size === 'sm' ? 16 : 18} />}
      <span className="ody-btn-text">{children}</span>
      {IconRight && <IconRight className="ody-btn-icon-right" size={size === 'sm' ? 16 : 18} />}
    </button>
  );
};
