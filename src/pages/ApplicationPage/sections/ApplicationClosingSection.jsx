import React from 'react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { triggerHaptic } from '../../../utils/haptics';
import { navigateTo } from '../../../utils/navigation';
import './ApplicationClosingSection.css';

export const ApplicationClosingSection = () => {
  return (
    <section className="app-closing-section">
      <div className="app-closing-container">
        {/* Ethos Typography Statement */}
        <div className="app-closing-statement-wrap">
          <span className="app-statement-eyebrow">ODYSSEY 2027 &bull; THE ETHOS</span>
          <h2 className="app-closing-statement">
            The Big Fix. Big Problems. Bold Solutions.
          </h2>
        </div>

        {/* Quick Navigation Footer Row */}
        <div className="app-closing-actions">
          <a
            href="/events"
            className="app-nav-cta-btn secondary"
            onClick={(e) => {
              e.preventDefault();
              triggerHaptic('selection');
              navigateTo('/events');
            }}
          >
            <span>Explore Events & Challenges</span>
            <ArrowRight size={16} />
          </a>

          <a
            href="/gallery"
            className="app-nav-cta-btn secondary"
            onClick={(e) => {
              e.preventDefault();
              triggerHaptic('selection');
              navigateTo('/gallery');
            }}
          >
            <span>View Gallery</span>
            <ArrowRight size={16} />
          </a>

          <a
            href="/"
            className="app-nav-cta-btn home"
            onClick={(e) => {
              e.preventDefault();
              triggerHaptic('selection');
              navigateTo('/');
            }}
          >
            <span>Back to Home</span>
          </a>
        </div>
      </div>
    </section>
  );
};

