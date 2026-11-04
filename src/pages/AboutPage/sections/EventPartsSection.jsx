import React from 'react';
import { motion } from 'framer-motion';
import { useGsapParallax } from '../../../utils/useGsapParallax';
import { CardSpaceStarfield } from '../../../components/ui';
import './EventPartsSection.css';

export const EventPartsSection = () => {
  // GSAP Parallax hooks for both uncurved vertical rectangular images (aspect ratio 3:4)
  const parallaxImgRef1 = useGsapParallax(20, 1);
  const parallaxImgRef2 = useGsapParallax(20, 1);

  return (
    <section className="event-parts-section">
      <div className="event-parts-container">
        {/* Section Header */}
        <motion.div
          className="event-parts-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="event-parts-pill">
            <span className="event-parts-pill-text">Two Core Pillars</span>
          </div>

          <h2 className="event-parts-heading">
            Odyssey features two exciting parts:
          </h2>
        </motion.div>

        {/* Dual Bento Grid: Part 1 and Part 2 with Uncurved Vertical Rectangular Parallax Imagery */}
        <div className="event-parts-grid">
          {/* Card 1: Project Exhibition (Embedded Blue Wave Gradient + Space Theme) */}
          <motion.div
            className="event-part-card card-part-1"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Space Theme Starfield with Stars & Sparkles */}
            <CardSpaceStarfield variant="blue" />

            {/* High-Opacity Blue Wave Gradient layer */}
            <div className="card-wave-layer" aria-hidden="true">
              <svg viewBox="0 0 600 300" preserveAspectRatio="none" className="card-wave-svg">
                <defs>
                  <linearGradient id="part1Grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0369a1" stopOpacity="0.88" />
                    <stop offset="60%" stopColor="#38d6f8" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0,160 C 150,126 300,194 450,160 C 520,143 570,177 600,160 L 600,300 L 0,300 Z"
                  fill="url(#part1Grad)"
                />
              </svg>
            </div>

            <div className="event-part-visual-wrap">
              <div className="event-part-parallax-box">
                <img
                  ref={parallaxImgRef1}
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                  alt="Student Project Exhibition"
                  className="event-part-parallax-img"
                />
                <div className="event-part-scrim" />
              </div>
              <div className="event-part-frame-border" aria-hidden="true" />
              <div className="event-part-floating-tag">
                <span>PART // 01</span>
              </div>
            </div>

            <div className="event-part-body">
              <div className="event-part-num-badge">01</div>
              <h3 className="event-part-title">Project Exhibition</h3>
              <p className="event-part-description">
                Students present original, research-backed functional prototypes addressing tangible real-world problems. Attendees experience firsthand how engineering, design, and scientific discovery converge into working technology.
              </p>
              <div className="event-part-tags-row">
                <span className="event-part-tag">Original Prototypes</span>
                <span className="event-part-tag">Interactive Demos</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Team Challenges (Embedded Orange/Red Wave Gradient + Space Theme) */}
          <motion.div
            className="event-part-card card-part-2"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Space Theme Starfield with Stars & Sparkles */}
            <CardSpaceStarfield variant="orange" />

            {/* High-Opacity Orange/Red Wave Gradient layer */}
            <div className="card-wave-layer" aria-hidden="true">
              <svg viewBox="0 0 600 300" preserveAspectRatio="none" className="card-wave-svg">
                <defs>
                  <linearGradient id="part2Grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#dc2626" stopOpacity="0.88" />
                    <stop offset="55%" stopColor="#ea580c" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0,160 C 150,194 300,126 450,160 C 520,177 570,143 600,160 L 600,300 L 0,300 Z"
                  fill="url(#part2Grad)"
                />
              </svg>
            </div>

            <div className="event-part-visual-wrap">
              <div className="event-part-parallax-box">
                <img
                  ref={parallaxImgRef2}
                  src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
                  alt="Students participating in team engineering challenges"
                  className="event-part-parallax-img"
                />
                <div className="event-part-scrim" />
              </div>
              <div className="event-part-frame-border" aria-hidden="true" />
              <div className="event-part-floating-tag">
                <span>PART // 02</span>
              </div>
            </div>

            <div className="event-part-body">
              <div className="event-part-num-badge">02</div>
              <h3 className="event-part-title">Team Challenges</h3>
              <p className="event-part-description">
                Live, fast-paced collaborative problem-solving arenas where student squads test their design agility, rapid fabrication, and engineering instincts under time-boxed sprint conditions.
              </p>
              <div className="event-part-tags-row">
                <span className="event-part-tag">Sprint Challenges</span>
                <span className="event-part-tag">Collaborative STEAM</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
