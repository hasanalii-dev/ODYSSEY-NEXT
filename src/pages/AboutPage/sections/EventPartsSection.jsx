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
                  src="https://scontent.fkhi11-2.fna.fbcdn.net/v/t39.30808-6/487553805_1107127638101868_4048418912339009535_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=LVW8RjulnP4Q7kNvwE3wg1G&_nc_oc=Ado7QtNUplrNZvSPDopddEmvmxWSUx89w8e7jUNImmes2DuKcfjIFvAhefa7HMjmm2o&_nc_zt=23&_nc_ht=scontent.fkhi11-2.fna&_nc_gid=RYAZ3sStmpttEPy2ZHl4hw&_nc_ss=7b2a8&oh=00_AQRymq6v-ym0_o6NyNNZnlD45tdzsuHmVwDLQNrAaqhi4Q&oe=6AF91E38"
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
                  src="https://scontent.fkhi11-2.fna.fbcdn.net/v/t39.30808-6/487793744_1107127968101835_8863822752964392907_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=lCL5Izur_4IQ7kNvwGepwGj&_nc_oc=AdromCoo37MjlxNUB_uxyofT5l2U09row2O8VoSUiZCfqQ4IlniUmrg2B-Lkv8hEviE&_nc_zt=23&_nc_ht=scontent.fkhi11-2.fna&_nc_gid=6lHMyiQvgEmi7Jv11QPGqg&_nc_ss=7b2a8&oh=00_AQTjmHX40559xxWCorM2zE6ft300ZIJkK_TUfZ9oNY0TQw&oe=6AF91773"
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
