import React from 'react';
import { motion } from 'framer-motion';
import { useGsapParallax } from '../../../utils/useGsapParallax';
import { CardSpaceStarfield } from '../../../components/ui';
import './AboutOverviewSection.css';

export const AboutOverviewSection = () => {
  // Parallax hook for uncurved vertical rectangular image (aspect ratio 3:4)
  const parallaxImgRef = useGsapParallax(22, 1);

  return (
    <section id="overview" className="about-overview-section">
      <div className="about-overview-container">
        {/* Left Column: Uncurved Vertical Rectangular Parallax Image */}
        <motion.div
          className="about-overview-visual"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-overview-frame">
            <div className="about-overview-parallax-box">
              <img
                ref={parallaxImgRef}
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
                alt="Student inventing prototype in laboratory"
                className="about-overview-img"
              />
              <div className="about-overview-scrim" />
            </div>

            {/* Specular hairline frame overlay (Uncurved) */}
            <div className="about-overview-border" aria-hidden="true" />

            {/* Architectural badge */}
            <div className="about-overview-badge">
              <span className="about-overview-badge-tag">STEAM EXHIBIT // 2027</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Event Overview Copy */}
        <motion.div
          className="about-overview-content"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-overview-pill">
            <span className="about-overview-pill-text">Discovery &bull; Architecture</span>
          </div>

          <h2 className="about-overview-heading">Event Overview</h2>

          <p className="about-overview-lead">
            Odyssey, our flagship STEAM event, organized by The Next School for the Next Schools, features two exciting parts: project exhibition and team challenges.
          </p>

          <div className="about-overview-features-list">
            <motion.div
              className="about-overview-feature-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <CardSpaceStarfield variant="blue" />
              <div className="about-feature-indicator">01</div>
              <div className="about-feature-text-group">
                <h4 className="about-feature-title">Project Exhibition</h4>
                <p className="about-feature-desc">
                  Curated showcases demonstrating multidisciplinary breakthroughs in science, computing, and creative problem-solving.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="about-overview-feature-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <CardSpaceStarfield variant="orange" />
              <div className="about-feature-indicator">02</div>
              <div className="about-feature-text-group">
                <h4 className="about-feature-title">Team Challenges</h4>
                <p className="about-feature-desc">
                  High-stakes collaborative engineering sprints designed to test quick ideation, rapid fabrication, and real-time agility.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
