import React, { useState } from 'react';
import { Sparkles, X, ArrowRight } from 'lucide-react';
import './AnnouncementBar.css';

export const AnnouncementBar = ({ onExploreClick }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="ody-announcement-bar">
      <div className="container ody-announcement-content">
        <div className="ody-announcement-left">
          <span className="ody-announcement-icon-badge">
            <Sparkles size={13} />
          </span>
          <span className="ody-announcement-text">
            <strong>Cycle 2046 Reservations Live:</strong> Priority clearance now open for Titan & Europa Expeditions.
          </span>
        </div>
        <div className="ody-announcement-right">
          <button className="ody-announcement-link" onClick={onExploreClick}>
            <span>View Flight Manifest</span>
            <ArrowRight size={13} />
          </button>
          <button
            className="ody-announcement-close"
            onClick={() => setVisible(false)}
            aria-label="Close notification"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
