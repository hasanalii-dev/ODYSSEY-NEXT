import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGsapParallax } from '../../../utils/useGsapParallax';
import { triggerHaptic } from '../../../utils/haptics';

export const PureBazaarSection = () => {
  const [dossierOpen, setDossierOpen] = useState(false);
  const parallaxImgRef = useGsapParallax(20, 1);

  const toggleDossier = () => {
    triggerHaptic('selection');
    setDossierOpen((prev) => !prev);
  };

  return (
    <section className="event-flow-section" id="pure-bazaar">
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
              <span className="index-num">06</span>
              <span className="index-line" />
              <span>STUDENT ENTERPRISE</span>
            </div>

            {/* Exact Section Title */}
            <h2 className="event-flow-title">
              Pure <span className="event-flow-title-accent">Bazaar</span>
            </h2>

            {/* Exact Official Description */}
            <p className="event-flow-body">
              A student-led entrepreneurship experience where students own developing, presenting, marketing, and selling their own products and services.
            </p>

            {/* Minimalist Editorial Spec Strip */}
            <div className="event-flow-spec-strip">
              <div className="flow-spec-entry">
                <span className="flow-spec-bullet">/ 01</span>
                <span className="flow-spec-text">100% Student-Led Operations</span>
              </div>
              <div className="flow-spec-entry">
                <span className="flow-spec-bullet">/ 02</span>
                <span className="flow-spec-text">Product Dev, Marketing &amp; Sales</span>
              </div>
              <div className="flow-spec-entry">
                <span className="flow-spec-bullet">/ 03</span>
                <span className="flow-spec-text">Live Marketplace Commerce</span>
              </div>
            </div>

            {/* Action / Dossier Toggle Button */}
            <div className="event-flow-actions">
              <button
                onClick={toggleDossier}
                className="event-flow-dossier-btn"
                aria-expanded={dossierOpen}
              >
                <span>{dossierOpen ? 'Hide Bazaar Dossier' : 'View Entrepreneurship Guidelines'}</span>
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
                      <span className="dossier-stage-tag">VENTURE OWNERSHIP</span>
                      <div className="dossier-stage-text">
                        <strong>End-to-End Execution:</strong> Students conceptualize original sustainable products or artisanal services, manage inventory ledger, branding, and dynamic customer pricing.
                      </div>
                    </div>
                    <div className="dossier-stage-row">
                      <span className="dossier-stage-tag">MERCHANDISING</span>
                      <div className="dossier-stage-text">
                        <strong>Booth Architecture:</strong> Student teams design interactive uncurved display kiosks optimized for ergonomic buyer journeys, signage hierarchy, and cashless/token payment systems.
                      </div>
                    </div>
                    <div className="dossier-stage-row">
                      <span className="dossier-stage-tag">STEWARDSHIP</span>
                      <div className="dossier-stage-text">
                        <strong>Ethical Commerce:</strong> Emphasis on zero-waste packaging, sustainable material sourcing, and transparent financial reconciliation.
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
                  src="https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-6/487461277_1107127624768536_2956459387362441883_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=pmPe3bRqA_8Q7kNvwHINUxB&_nc_oc=Adp899HqPuOpAIlalgYxZ2uUWpRuwjba_URZCBviIO2ylXseyjP9JWehBVV2Qo7Ko9A&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=i59pJXu5AIUg1e8TqhRoCg&_nc_ss=7b2a8&oh=00_AQQfa2p8HRqdhaDUYxd9bJ1iiVe1CwTn0ReMts7IPYDTLQ&oe=6AF92547"
                  alt="Student entrepreneurship booth presenting handcrafted and engineered products"
                  className="event-flow-parallax-img"
                />
                <div className="event-flow-scrim" />
              </div>
              <div className="event-flow-frame-border" aria-hidden="true" />
              <div className="event-flow-caption">
                <span>PURE BAZAAR // COMMERCE &amp; VENTURE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
