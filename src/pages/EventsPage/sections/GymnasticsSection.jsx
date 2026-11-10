import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGsapParallax } from '../../../utils/useGsapParallax';
import { triggerHaptic } from '../../../utils/haptics';

export const GymnasticsSection = () => {
  const [dossierOpen, setDossierOpen] = useState(false);
  const parallaxImgRef = useGsapParallax(20, 1);

  const toggleDossier = () => {
    triggerHaptic('selection');
    setDossierOpen((prev) => !prev);
  };

  return (
    <section className="event-flow-section" id="gymnastics">
      <div className="event-flow-ambient-glow" aria-hidden="true" />

      <div className="event-flow-container">
        <div className="event-split-grid">
          {/* Left Content Column */}
          <motion.div
            className="event-flow-content"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Section Index Indicator */}
            <div className="event-index-tag">
              <span className="index-num">04</span>
              <span className="index-line" />
              <span>ATHLETIC EXPRESSION</span>
            </div>

            {/* Exact Section Title */}
            <h2 className="event-flow-title">
              Gymnastics <span className="event-flow-title-accent">Display</span>
            </h2>

            {/* Exact Theme Subtitle */}
            <div className="event-flow-theme-badge">
              <span>Problem to Solution: The Big Fix Through Movement</span>
            </div>

            {/* Exact Lead */}
            <h3 className="event-flow-subtitle">The Big Fix Through Movement</h3>

            {/* Exact Official Description */}
            <p className="event-flow-body">
              Bring The Big Fix to life through gymnastics, showing challenges overcome via adaptation, teamwork, balance, creativity, and problem-solving.
            </p>

            {/* Minimalist Editorial Spec Strip */}
            <div className="event-flow-spec-strip">
              <div className="flow-spec-entry">
                <span className="flow-spec-bullet">/ 01</span>
                <span className="flow-spec-text">Adaptation &amp; Agility</span>
              </div>
              <div className="flow-spec-entry">
                <span className="flow-spec-bullet">/ 02</span>
                <span className="flow-spec-text">Teamwork &amp; Balance</span>
              </div>
              <div className="flow-spec-entry">
                <span className="flow-spec-bullet">/ 03</span>
                <span className="flow-spec-text">Problem-Solving In Motion</span>
              </div>
            </div>

            {/* Action / Dossier Toggle Button */}
            <div className="event-flow-actions">
              <button
                onClick={toggleDossier}
                className="event-flow-dossier-btn"
                aria-expanded={dossierOpen}
              >
                <span>{dossierOpen ? 'Hide Routine Dossier' : 'View Performance Guidelines & Rules'}</span>
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
                      <span className="dossier-stage-tag">NARRATIVE ARC</span>
                      <div className="dossier-stage-text">
                        <strong>Movement Metaphor:</strong> The performance must visually structure a transition from disorder/struggle (The Problem) through collaborative synchronization to triumphant harmony (The Fix).
                      </div>
                    </div>
                    <div className="dossier-stage-row">
                      <span className="dossier-stage-tag">SAFETY &amp; RIGOR</span>
                      <div className="dossier-stage-text">
                        <strong>Floor Performance:</strong> Routines conducted on certified gymnastics floor under coach supervision with age-appropriate acrobatic elevations and formations.
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Visual: Parallax Imagery */}
          <motion.div
            className="event-flow-visual"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="event-flow-frame">
              <div className="event-flow-parallax-box">
                <img
                  ref={parallaxImgRef}
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
                  alt="Gymnastics display embodying balance, agility, and teamwork"
                  className="event-flow-parallax-img"
                />
                <div className="event-flow-scrim" />
              </div>
              <div className="event-flow-frame-border" aria-hidden="true" />
              <div className="event-flow-caption">
                <span>GYMNASTICS // MOVEMENT IN MOTION</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
