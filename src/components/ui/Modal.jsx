import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import './Modal.css';

export const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="ody-modal-backdrop" onClick={onClose}>
      <div className="ody-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="ody-modal-header">
          {title && <h3 className="ody-modal-title">{title}</h3>}
          <button className="ody-modal-close-btn" onClick={onClose} aria-label="Close Modal">
            <X size={20} />
          </button>
        </div>
        <div className="ody-modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};
