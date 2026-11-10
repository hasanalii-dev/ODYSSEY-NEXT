import React from 'react';
import { motion } from 'framer-motion';
import { useGsapParallax } from '../../../utils/useGsapParallax';
import { triggerHaptic } from '../../../utils/haptics';
import { navigateTo } from '../../../utils/navigation';
import { CardSpaceStarfield } from '../../../components/ui';
import './AboutHeroSection.css';

export const AboutHeroSection = ({ onOpenMenu }) => {
  // GSAP ScrollTrigger parallax scrub on uncurved vertical rectangular image
  const parallaxImgRef = useGsapParallax(22, 1);

  return (
    <section className="about-hero-section">
      {/* =========================================================
          TOP NAVBAR FOR ABOUT PAGE (Transparent, sleek Apple style)
          Links: about, events, gallery, register button
          ========================================================= */}
      <nav className="about-top-nav" aria-label="Main Navigation">
        {/* Left: Next School Logo + Divider + Odyssey Brand (UNCURVED) */}
        <div className="about-nav-left">
          <a
            href="https://nextschool.edu.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="about-next-box"
            title="The Next School"
            onClick={() => triggerHaptic('selection')}
          >
            <img
              src="/img/next-school.png"
              alt="The Next School"
              className="about-next-img"
            />
          </a>

          <div className="about-nav-divider" />

          <a
            href="/"
            className="about-nav-brand"
            title="Odyssey 2027"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/');
            }}
          >
            <img
              src="/img/odessey-logo2.png"
              alt="Odyssey Logo"
              className="about-nav-wheel"
            />
            <span className="about-nav-brand-text">ODYSSEY &apos;27</span>
          </a>
        </div>

        {/* Center Links: About, Events, Gallery */}
        <div className="about-nav-links">
          <a
            href="/about"
            className="about-nav-link active"
            onClick={(e) => {
              e.preventDefault();
              triggerHaptic('selection');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            About
          </a>
          <a
            href="/events"
            className="about-nav-link"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/events');
            }}
          >
            Events
          </a>
          <a
            href="/gallery"
            className="about-nav-link"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/gallery');
            }}
          >
            Gallery
          </a>
        </div>

        {/* Right: Register Button (Pure White with Black Font) & Mobile Toggle */}
        <div className="about-nav-right">
          <a
            href="/register"
            className="island-register-btn"
            title="Register for Odyssey 2027"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/register');
            }}
          >
            <span>Register</span>
          </a>

          <button
            onClick={() => {
              triggerHaptic('medium');
              onOpenMenu?.();
            }}
            className="about-nav-mobile-btn"
            aria-label="Open navigation menu"
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
      </nav>

      {/* =========================================================
          BLUE WAVE GRADIENT BACKGROUND
          Increased amplitude (A = 75) + GPU-Accelerated Fluid Flow
          ========================================================= */}
      <div className="about-hero-wave-bg" aria-hidden="true">
        <svg
          viewBox="0 0 1200 450"
          preserveAspectRatio="none"
          className="about-wave-svg"
        >
          {/* Top Wave: Darker Blue (High Amplitude A = 75) */}
          <path
            d="M 0,170 C 200,95 400,245 600,170 C 800,95 1000,245 1200,170 L 1200,450 L 0,450 Z"
            fill="#084d5f"
            opacity="0.95"
          />
          {/* Middle Wave: Lighter Cyan / Blue (High Amplitude A = 75) */}
          <path
            d="M 0,240 C 200,165 400,315 600,240 C 800,165 1000,315 1200,240 L 1200,450 L 0,450 Z"
            fill="#1494B4"
            opacity="0.95"
          />
          {/* Bottom Wave: White Specular Wave (High Amplitude A = 75) */}
          <path
            d="M 0,310 C 200,235 400,385 600,310 C 800,235 1000,385 1200,310 L 1200,450 L 0,450 Z"
            fill="#ffffff"
            opacity="0.82"
          />
        </svg>
      </div>

      {/* Atmospheric radial glow */}
      <div className="about-hero-ambient-glow" aria-hidden="true" />

      {/* Space Theme Starfield with Pure Light-Twinkling Dots (Upper Sky Only) */}
      <div className="about-hero-starfield-wrap" aria-hidden="true">
        <CardSpaceStarfield variant="hero" mode="section" />
      </div>

      <div className="about-hero-container">
        {/* Left Column: Typography & Headings with Framer Motion */}
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 35, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="about-hero-badge-pill"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="about-hero-badge-text">Odyssey 2027</span>
          </motion.div>

          <motion.h1
            className="about-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            About <span className="about-hero-title-accent">Odyssey</span>
          </motion.h1>

          <motion.p
            className="about-hero-tagline"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            The Big Fix. Big Problems. Bold Solutions.
          </motion.p>

          <motion.p
            className="about-hero-intro-text"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Step inside our flagship STEAM journey, where curiosity meets engineering, and students transform ambitious ideas into functional breakthroughs.
          </motion.p>

          <motion.div
            className="about-hero-action-row"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <a href="#overview" className="about-hero-scroll-btn">
              <span>Explore Overview</span>
              <i className="bi bi-arrow-down"></i>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Parallax Vertical Rectangular Uncurved Image Showcase */}
        <motion.div
          className="about-hero-visual"
          initial={{ opacity: 0, scale: 0.94, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-hero-frame">
            <div className="about-parallax-container">
              <img
                ref={parallaxImgRef}
                src="https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-6/487758518_1107127648101867_6285843284761430893_n.jpg?stp=dst-jpg_tt6&cstp=mx1523x2048&ctp=s1523x2048&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=VSLcOoaE69MQ7kNvwGGJKch&_nc_oc=AdrO9M6EBMT1Ir0fE6WEdDNgjmrGLFsRxhgfKKg5TrvsAFZNyXGkBtz2gheOXhIuIO4&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=4vsqQivI-vY5OJvprxk8Gw&_nc_ss=7b2a8&oh=00_AQStjKDaFRsxTVzTbWYbdN7fL5OUUQ9oeURiFS01fubKUg&oe=6AF91715"
                alt="Odyssey 2027 STEAM Innovation"
                className="about-parallax-img"
              />
              <div className="about-hero-img-gradient-scrim" />
            </div>

            {/* Specular hairline frame overlay (Uncurved) */}
            <div className="about-frame-border" aria-hidden="true" />

            <div className="about-hero-frame-caption">
              <span className="about-frame-num">ODYSSEY // 27</span>
              <span className="about-frame-label">INNOVATION LAB</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gradient fade mask at bottom of About Hero */}
      <div className="about-hero-bottom-mask" aria-hidden="true" />
    </section>
  );
};
