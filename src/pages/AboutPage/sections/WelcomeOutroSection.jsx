import React from 'react';
import { motion } from 'framer-motion';
import { useGsapParallax } from '../../../utils/useGsapParallax';
import { triggerHaptic } from '../../../utils/haptics';
import { CardSpaceStarfield } from '../../../components/ui';
import './WelcomeOutroSection.css';

export const WelcomeOutroSection = () => {
  // Parallax hook for uncurved vertical rectangular image (aspect ratio 3:4)
  const parallaxImgRef = useGsapParallax(22, 1);

  return (
    <section className="welcome-outro-section">
      {/* Ambient background glow */}
      <div className="welcome-outro-glow" aria-hidden="true" />

      <div className="welcome-outro-container">
        <motion.div
          className="welcome-outro-card"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Space Theme Starfield: Pin-Sharp Dots strictly in Dark Space, Never on Wave */}
          <div className="welcome-starfield-wrap" aria-hidden="true">
            <CardSpaceStarfield variant="cosmic" mode="section" />
          </div>

          {/* High-Opacity Wave Gradient Layer inside Card */}
          <div className="welcome-wave-layer" aria-hidden="true">
            <svg viewBox="0 0 1200 400" preserveAspectRatio="none" className="welcome-wave-svg">
              <defs>
                <linearGradient id="welcomeGrad1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0369a1" stopOpacity="0.88" />
                  <stop offset="50%" stopColor="#38d6f8" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="welcomeGrad2" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#dc2626" stopOpacity="0.85" />
                  <stop offset="60%" stopColor="#ea580c" stopOpacity="0.65" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M 0,220 C 300,186 600,254 900,220 C 1050,203 1150,237 1200,220 L 1200,400 L 0,400 Z"
                fill="url(#welcomeGrad1)"
              />
              <path
                d="M 0,260 C 280,294 580,226 880,260 C 1040,277 1140,243 1200,260 L 1200,400 L 0,400 Z"
                fill="url(#welcomeGrad2)"
              />
            </svg>
          </div>

          {/* Left Text Block */}
          <div className="welcome-outro-content">
            <div className="welcome-outro-pill">
              <span className="welcome-outro-pill-text">An Open Invitation</span>
            </div>

            <h2 className="welcome-outro-title">
              Welcome to The <span className="welcome-outro-title-accent">Big</span> Fix
            </h2>

            <p className="welcome-outro-tagline">
              Where problems become possibilities.
            </p>

            <p className="welcome-outro-body">
              Whether you're a young innovator, an educator, a professional, or simply curious about what the future could look like, there's something for everyone at The Big Fix.
            </p>

            <div className="welcome-outro-action-row">
              <a
                href="/register"
                className="welcome-register-btn"
                onClick={(e) => {
                  e.preventDefault();
                  triggerHaptic('medium');
                  navigateTo('/register');
                }}
              >
                <span>Join Odyssey 2027</span>
                <i className="bi bi-arrow-right"></i>
              </a>

              <a
                href="/"
                className="welcome-home-btn"
                onClick={() => triggerHaptic('selection')}
              >
                <span>Back to Home</span>
              </a>
            </div>
          </div>

          {/* Right Visual: Uncurved Vertical Rectangular Parallax Image */}
          <div className="welcome-outro-visual">
            <div className="welcome-outro-frame">
              <div className="welcome-outro-parallax-box">
                <img
                  ref={parallaxImgRef}
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
                  alt="Future technology and possibilities"
                  className="welcome-outro-parallax-img"
                />
                <div className="welcome-outro-scrim" />
              </div>
              <div className="welcome-outro-frame-border" aria-hidden="true" />
              <div className="welcome-outro-badge">
                <span>WHERE PROBLEMS BECOME POSSIBILITIES</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
