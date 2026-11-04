import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGsapParallax } from '../../../utils/useGsapParallax';
import { triggerHaptic } from '../../../utils/haptics';
import './SteamscapeSection.css';

export const SteamscapeSection = () => {
  const [dossierOpen, setDossierOpen] = useState(false);
  const parallaxImgRef = useGsapParallax(20, 1);

  const toggleDossier = () => {
    triggerHaptic('selection');
    setDossierOpen((prev) => !prev);
  };

  return (
    <section className="event-flow-section" id="steamscape">
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
              <span className="index-num">01</span>
              <span className="index-line" />
              <span>FLAGSHIP EXHIBITION</span>
            </div>

            {/* Exact Section Title */}
            <h2 className="event-flow-title">
              STEAM<span className="event-flow-title-accent">SCAPE</span>
            </h2>

            {/* Exact Official Description */}
            <p className="event-flow-body">
              Each school will be assigned a real-world challenge as a subtheme. Students will identify problems, explore innovative ideas, design functional STEAM models and solutions, and bring The Big Fix theme to life.
            </p>

            {/* Minimalist Editorial Spec Strip */}
            <div className="event-flow-spec-strip">
              <div className="flow-spec-entry">
                <span className="flow-spec-bullet">/ 01</span>
                <span className="flow-spec-text">Real-World Subtheme Assignment</span>
              </div>
              <div className="flow-spec-entry">
                <span className="flow-spec-bullet">/ 02</span>
                <span className="flow-spec-text">Functional STEAM Models</span>
              </div>
              <div className="flow-spec-entry">
                <span className="flow-spec-bullet">/ 03</span>
                <span className="flow-spec-text">The Big Fix In Action</span>
              </div>
            </div>

            {/* Action / Dossier Toggle Button */}
            <div className="event-flow-actions">
              <button
                onClick={toggleDossier}
                className="event-flow-dossier-btn"
                aria-expanded={dossierOpen}
              >
                <span>{dossierOpen ? 'Hide Event Dossier' : 'View Event Dossier & Rules'}</span>
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
                      <span className="dossier-stage-tag">STAGE 1</span>
                      <div className="dossier-stage-text">
                        <strong>Problem Identification:</strong> Teams investigate their assigned campus subtheme, formulating rigorous root-cause problem statements based on community needs.
                      </div>
                    </div>
                    <div className="dossier-stage-row">
                      <span className="dossier-stage-tag">STAGE 2</span>
                      <div className="dossier-stage-text">
                        <strong>STEAM Synthesis:</strong> Multi-disciplinary integration combining Science, Technology, Engineering, Art, and Mathematics into a unified hypothesis.
                      </div>
                    </div>
                    <div className="dossier-stage-row">
                      <span className="dossier-stage-tag">STAGE 3</span>
                      <div className="dossier-stage-text">
                        <strong>Model Fabrication:</strong> Construction of safe, working, physical models demonstrating functional mechanics or digital automation.
                      </div>
                    </div>
                    <div className="dossier-stage-row">
                      <span className="dossier-stage-tag">JUDGING</span>
                      <div className="dossier-stage-text">
                        <strong>Evaluation Criteria:</strong> Problem clarity (25%), STEAM integration (30%), Model functionality &amp; durability (25%), Presentation &amp; defense (20%).
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Visual: Uncurved Floating Parallax Frame */}
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
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
                  alt="STEAMSCAPE functional engineering and robotics model"
                  className="event-flow-parallax-img"
                />
                <div className="event-flow-scrim" />
              </div>
              <div className="event-flow-frame-border" aria-hidden="true" />
              <div className="event-flow-caption">
                <span>STEAMSCAPE // INNOVATION ARENA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
