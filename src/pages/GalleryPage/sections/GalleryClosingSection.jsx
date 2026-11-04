import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { triggerHaptic } from '../../../utils/haptics';
import { navigateTo } from '../../../utils/navigation';
import './GalleryClosingSection.css';

export const GalleryClosingSection = () => {
  return (
    <section className="gallery-closing-section">
      <div className="gallery-closing-container">
        {/* =========================================================
            Section 4: Closing Statement
            (Commanding Bold Editorial Typography — NOT a pill)
            ========================================================= */}
        <div className="gallery-closing-statement-wrap">
          <span className="gallery-statement-eyebrow">ODYSSEY 2027 • THE ETHOS</span>
          <h2 className="gallery-closing-statement">
            The Big Fix. Big Problems. Bold Solutions.
          </h2>
        </div>

        {/* Quick Navigation Footer Row */}
        <div className="gallery-closing-actions">
          <a
            href="/events"
            className="gallery-nav-cta-btn secondary"
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
            href="/register"
            className="gallery-nav-cta-btn primary"
            onClick={(e) => {
              e.preventDefault();
              triggerHaptic('selection');
              navigateTo('/register');
            }}
          >
            <span>Register for Odyssey 2027</span>
          </a>
        </div>
      </div>
    </section>
  );
};

