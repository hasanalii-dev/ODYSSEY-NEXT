import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGsapParallax } from '../../../utils/useGsapParallax';
import { triggerHaptic } from '../../../utils/haptics';

export const ArtCompetitionSection = () => {
  const [dossierOpen, setDossierOpen] = useState(false);
  const parallaxImgRef = useGsapParallax(26, 1);

  const toggleDossier = () => {
    triggerHaptic('selection');
    setDossierOpen((prev) => !prev);
  };

  return (
    <section className="event-flow-section" id="art-competition">
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
                  src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80"
                  alt="Creative art workshop exploring colors, moodboards, and problem solving"
                  className="event-flow-parallax-img"
                />
                <div className="event-flow-scrim" />
              </div>
              <div className="event-flow-frame-border" aria-hidden="true" />
              <div className="event-flow-caption">
                <span>ART COMPETITION // MOODBOARDS</span>
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
              <span className="index-num">05</span>
              <span className="index-line" />
              <span>CREATIVE SYNTHESIS</span>
            </div>

            {/* Exact Section Title */}
            <h2 className="event-flow-title">
              Art <span className="event-flow-title-accent">Competition</span>
            </h2>

            {/* Exact Subtitle */}
            <h3 className="event-flow-subtitle">See the Problem. Imagine the Possibility.</h3>

            {/* Exact Official Description */}
            <p className="event-flow-body">
              Encourage students to observe real-world challenges, think creatively, and visualise innovative solutions through art. Choose a problem, explore ideas through images, sketches, colours, words, and design elements, and create a moodboard showing the solution.
            </p>

            {/* Minimalist Editorial Spec Strip */}
            <div className="event-flow-spec-strip">
              <div className="flow-spec-entry">
                <span className="flow-spec-bullet">/ 01</span>
                <span className="flow-spec-text">Curated Solution Moodboard</span>
              </div>
              <div className="flow-spec-entry">
                <span className="flow-spec-bullet">/ 02</span>
                <span className="flow-spec-text">Sketches, Colors &amp; Design Elements</span>
              </div>
              <div className="flow-spec-entry">
                <span className="flow-spec-bullet">/ 03</span>
                <span className="flow-spec-text">Visualizing The Solution</span>
              </div>
            </div>

            {/* Action / Dossier Toggle Button */}
            <div className="event-flow-actions">
              <button
                onClick={toggleDossier}
                className="event-flow-dossier-btn"
                aria-expanded={dossierOpen}
              >
                <span>{dossierOpen ? 'Hide Moodboard Dossier' : 'View Moodboard Criteria & Rules'}</span>
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
                      <span className="dossier-stage-tag">MOODBOARD RULES</span>
                      <div className="dossier-stage-text">
                        <strong>Physical Canvas:</strong> Submissions created on standard A2 mounting board. Must incorporate mixed media: hand sketches, photographic references, color swatches, textures, and key analytical keywords.
                      </div>
                    </div>
                    <div className="dossier-stage-row">
                      <span className="dossier-stage-tag">NARRATIVE DUALITY</span>
                      <div className="dossier-stage-text">
                        <strong>Contrast:</strong> The moodboard must communicate a distinct visual journey from the raw friction of the problem to the elevated aesthetic and utility of the proposed fix.
                      </div>
                    </div>
                    <div className="dossier-stage-row">
                      <span className="dossier-stage-tag">CRITERIA</span>
                      <div className="dossier-stage-text">
                        <strong>Judging Rubric:</strong> Conceptual innovation (35%), composition &amp; aesthetic hierarchy (25%), multi-sensory materials (20%), oral defense (20%).
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
