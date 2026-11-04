import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { triggerHaptic } from '../../../utils/haptics';
import './OtherHighlightsSection.css';

const OTHER_HIGHLIGHTS = [
  {
    num: '01',
    title: "NEXTER'S LABORATORY",
    category: 'Interactive STEAM',
    icon: 'bi-cpu',
    summary: 'An open experimental discovery sandbox where students engage with hands-on robotics, rapid digital prototyping, algorithmic logic, and experiential STEAM demonstrations.',
    details: [
      'Interactive workstations with micro-controllers, sensors, and modular electronic kits.',
      'Guided live experiments led by student science demonstrators and STEAM mentors.',
      'Drop-in challenges where visitors can code, simulate, and calibrate mechanical systems in real time.',
    ],
  },
  {
    num: '02',
    title: 'Psych it out (Interactive psychology)',
    category: 'Behavioral Lab',
    icon: 'bi-lightbulb',
    summary: 'An experiential exploration of cognitive science, optical illusions, perception bias, and emotional problem-solving through live interactive psychological exhibits.',
    details: [
      'Sensory perception tests and optical illusion corridors testing visual cognitive processing.',
      'Social problem-solving games and empathy-mapping interactive challenges.',
      'Student-curated demonstrations illustrating how behavioral insights solve societal frictions.',
    ],
  },
  {
    num: '03',
    title: 'Food Area',
    category: 'Culinary Commons',
    icon: 'bi-cup-hot',
    summary: 'A curated social hub offering wholesome culinary options, student refreshments, and casual seating where participants, educators, and guests gather to recharge.',
    details: [
      'Multi-cuisine refreshment stations managed under strict hygiene and health standards.',
      'Eco-friendly compostable packaging with designated recycling separation zones.',
      'Open seating commons fostering spontaneous dialogues and post-challenge discussions.',
    ],
  },
];

export const OtherHighlightsSection = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (idx) => {
    triggerHaptic('selection');
    setActiveItem((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="event-flow-section other-highlights-open-section" id="other-highlights">
      <div className="event-flow-ambient-glow" aria-hidden="true" />

      <div className="event-flow-container">
        {/* Section Header */}
        <motion.div
          className="other-highlights-editorial-header"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="event-index-tag">
            <span className="index-num">07</span>
            <span className="index-line" />
            <span>EXPANDED DISCOVERY</span>
          </div>

          <h2 className="event-flow-title">
            Other Event <span className="event-flow-title-accent">Highlights</span>
          </h2>

          <p className="other-highlights-editorial-note">
            These are listed in the official event highlights, but the manual does not provide dedicated event descriptions or rules for them.
          </p>
        </motion.div>

        {/* Minimalist Apple-Style Interactive Directory List (NO CARDS!) */}
        <div className="other-directory-list">
          {OTHER_HIGHLIGHTS.map((item, idx) => {
            const isOpen = activeItem === idx;
            return (
              <div
                key={idx}
                className={`directory-row ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="directory-header-btn"
                  aria-expanded={isOpen}
                >
                  <div className="directory-left-meta">
                    <span className="directory-num">{item.num}</span>
                    <div className="directory-title-block">
                      <h3 className="directory-title">{item.title}</h3>
                      <span className="directory-category">{item.category}</span>
                    </div>
                  </div>

                  <div className="directory-right-action">
                    <span className="directory-action-label">
                      {isOpen ? 'Close' : 'Explore'}
                    </span>
                    <div className="directory-icon-pill">
                      <i className={`bi ${isOpen ? 'bi-dash' : 'bi-plus'}`}></i>
                    </div>
                  </div>
                </button>

                {/* Inline Accordion Expansion */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="directory-content-drawer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="directory-drawer-inner">
                        <p className="directory-summary-text">{item.summary}</p>

                        <div className="directory-specs-list">
                          {item.details.map((detail, dIdx) => (
                            <div key={dIdx} className="directory-spec-point">
                              <span className="point-bullet">&bull;</span>
                              <span className="point-text">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Action Row */}
        <div className="other-highlights-action-row">
          <a
            href="/register"
            className="events-register-cta-btn"
            onClick={(e) => {
              e.preventDefault();
              triggerHaptic('medium');
              navigateTo('/register');
            }}
          >
            <span>Register For Challenges</span>
            <i className="bi bi-arrow-right"></i>
          </a>
          <a
            href="#hero"
            className="events-back-home-btn"
            onClick={() => triggerHaptic('selection')}
          >
            <span>Back to Home</span>
          </a>
        </div>
      </div>
    </section>
  );
};
