import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { triggerHaptic } from '../../../utils/haptics';

export const PhotographySection = () => {
  const [dossierOpen, setDossierOpen] = useState(false);

  const toggleDossier = () => {
    triggerHaptic('selection');
    setDossierOpen((prev) => !prev);
  };

  return (
    <section className="event-flow-section" id="photography">
      <div className="event-flow-ambient-glow" aria-hidden="true" />

      <div className="event-flow-container">
        {/* Full-Width Museum Gallery Spread (Breaks the two-column monotony!) */}
        <div className="event-gallery-spread">
          <motion.div
            className="event-gallery-header"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Index Tag */}
            <div className="event-index-tag">
              <span className="index-num">03</span>
              <span className="index-line" />
              <span>VISUAL STORYTELLING</span>
            </div>

            {/* Exact Section Title */}
            <h2 className="event-flow-title">
              Photography <span className="event-flow-title-accent">Exhibition</span>
            </h2>

            {/* Exact Subtitle */}
            <h3 className="event-flow-subtitle">What Would You Fix?</h3>

            {/* Large Italic Central Quote Callout */}
            <div className="gallery-quote-highlight">
              &ldquo;Look around you. If you could fix ONE thing in the world you see, what would it be?&rdquo;
            </div>

            {/* Exact Official Description */}
            <p className="event-flow-body" style={{ margin: '0 auto 2rem' }}>
              A photographic journey into the problems, possibilities, and solutions around us.
            </p>

            {/* Minimalist Editorial Spec Strip */}
            <div className="event-flow-spec-strip" style={{ justifyContent: 'center' }}>
              <div className="flow-spec-entry">
                <span className="flow-spec-bullet">/ 01</span>
                <span className="flow-spec-text">Original Digital Photography</span>
              </div>
              <div className="flow-spec-entry">
                <span className="flow-spec-bullet">/ 02</span>
                <span className="flow-spec-text">What Would You Fix? Focus</span>
              </div>
              <div className="flow-spec-entry">
                <span className="flow-spec-bullet">/ 03</span>
                <span className="flow-spec-text">Visual Narrative + Artist Statement</span>
              </div>
            </div>

            {/* Action / Dossier Toggle Button */}
            <div className="event-flow-actions" style={{ justifyContent: 'center' }}>
              <button
                onClick={toggleDossier}
                className="event-flow-dossier-btn"
                aria-expanded={dossierOpen}
              >
                <span>{dossierOpen ? 'Hide Exhibition Dossier' : 'View Submission Guidelines & Rules'}</span>
                <i className={`bi ${dossierOpen ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
              </button>
            </div>
          </motion.div>

          {/* Widescreen Cinematic Panorama Gallery Stage (Directly on canvas) */}
          <motion.div
            className="gallery-panorama-stage"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1600&q=80"
              alt="Photographer observing and capturing environmental and technological change"
              className="gallery-panorama-img"
            />
            <div className="event-flow-scrim" />
            <div className="gallery-panorama-border" aria-hidden="true" />
            <div className="event-flow-caption">
              <span>EXHIBITION PAVILION // WHAT WOULD YOU FIX?</span>
            </div>
          </motion.div>

          {/* Seamless Expandable Dossier Drawer */}
          <AnimatePresence>
            {dossierOpen && (
              <motion.div
                className="event-flow-dossier-drawer"
                style={{ width: '100%', maxWidth: '860px' }}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="dossier-drawer-content" style={{ textAlign: 'left' }}>
                  <div className="dossier-stage-row">
                    <span className="dossier-stage-tag">MANDATE</span>
                    <div className="dossier-stage-text">
                      <strong>Original Photography:</strong> All submissions must be original, high-resolution photographs captured by the student without generative AI synthesis.
                    </div>
                  </div>
                  <div className="dossier-stage-row">
                    <span className="dossier-stage-tag">NARRATIVE</span>
                    <div className="dossier-stage-text">
                      <strong>Artist Statement:</strong> Each photograph must be accompanied by a 100-word written reflection answering the core question: what problem is being framed and what future solution is envisioned?
                    </div>
                  </div>
                  <div className="dossier-stage-row">
                    <span className="dossier-stage-tag">CURATION</span>
                    <div className="dossier-stage-text">
                      <strong>Exhibition Gallery:</strong> Selected photographs will be displayed in the central uncurved gallery pavilion throughout Odyssey 2027.
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
