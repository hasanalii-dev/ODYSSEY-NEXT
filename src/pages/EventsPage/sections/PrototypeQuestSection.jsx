import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGsapParallax } from '../../../utils/useGsapParallax';
import { triggerHaptic } from '../../../utils/haptics';

export const PrototypeQuestSection = () => {
  const [dossierOpen, setDossierOpen] = useState(false);
  const parallaxImgRef = useGsapParallax(24, 1);

  const toggleDossier = () => {
    triggerHaptic('selection');
    setDossierOpen((prev) => !prev);
  };

  return (
    <section className="event-flow-section" id="prototype-quest">
      <div className="event-flow-ambient-glow" aria-hidden="true" />

      <div className="event-flow-container">
        {/* Reversed layout rhythm: Visual on Left, Copy on Right */}
        <div className="event-split-grid reversed">
          {/* Visual Column */}
          <motion.div
            className="event-flow-visual"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="event-flow-frame">
              <div className="event-flow-parallax-box">
                <img
                  ref={parallaxImgRef}
                  src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=900&q=80"
                  alt="Prototype Quest circuit fabrication and testing"
                  className="event-flow-parallax-img"
                />
                <div className="event-flow-scrim" />
              </div>
              <div className="event-flow-frame-border" aria-hidden="true" />
              <div className="event-flow-caption">
                <span>PROTOTYPE QUEST // THE BIG FIX</span>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="event-flow-content"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Section Index Indicator */}
            <div className="event-index-tag">
              <span className="index-num">02</span>
              <span className="index-line" />
              <span>SPECIAL AWARD COMPETITION</span>
            </div>

            {/* Exact Section Title */}
            <h2 className="event-flow-title">
              Prototype <span className="event-flow-title-accent">Quest</span>: The Big Fix Challenge
            </h2>

            {/* Exact Official Theme Tag */}
            <div className="event-flow-theme-badge">
              <span>Theme: The Big Fix</span>
            </div>

            {/* Exact Official Description */}
            <p className="event-flow-body">
              Each campus identifies a real-world problem within its assigned subtheme and designs and presents one functional prototype, a practical and innovative solution that demonstrates creativity, usability, and STEAM. The best project wins a special award.
            </p>

            {/* Minimalist Editorial Spec Strip */}
            <div className="event-flow-spec-strip">
              <div className="flow-spec-entry">
                <span className="flow-spec-bullet">/ 01</span>
                <span className="flow-spec-text">1 Functional Prototype per Campus</span>
              </div>
              <div className="flow-spec-entry">
                <span className="flow-spec-bullet">/ 02</span>
                <span className="flow-spec-text">Focus: Creativity, Usability, STEAM</span>
              </div>
              <div className="flow-spec-entry">
                <span className="flow-spec-bullet">/ 03</span>
                <span className="flow-spec-text">Special Award for Best Project</span>
              </div>
            </div>

            {/* Action / Dossier Toggle Button */}
            <div className="event-flow-actions">
              <button
                onClick={toggleDossier}
                className="event-flow-dossier-btn"
                aria-expanded={dossierOpen}
              >
                <span>{dossierOpen ? 'Hide Challenge Dossier' : 'View Prototype Criteria & Rules'}</span>
                <i className={`bi ${dossierOpen ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
              </button>
            </div>

            {/* Seamless Expandable Dossier Drawer */}
            <AnimatePresence>
              {dossierOpen && (
                <motion.div
                  className="event-flow-dossier-drawer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="dossier-drawer-content">
                    <div className="dossier-stage-row">
                      <span className="dossier-stage-tag">MANDATE</span>
                      <div className="dossier-stage-text">
                        <strong>Functional Operation:</strong> Prototypes must not be static displays; they must feature interactive mechanisms, sensors, kinetic circuits, or demonstrable physical operation.
                      </div>
                    </div>
                    <div className="dossier-stage-row">
                      <span className="dossier-stage-tag">DEFENSE</span>
                      <div className="dossier-stage-text">
                        <strong>Live Demonstration:</strong> Student team must present a 3-minute operational pitch demonstrating how their prototype tackles the assigned subtheme problem.
                      </div>
                    </div>
                    <div className="dossier-stage-row">
                      <span className="dossier-stage-tag">CRITERIA</span>
                      <div className="dossier-stage-text">
                        <strong>Judging Matrix:</strong> Real-world applicability (30%), engineering complexity (25%), user ergonomics &amp; aesthetic design (25%), team defense &amp; documentation (20%).
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
