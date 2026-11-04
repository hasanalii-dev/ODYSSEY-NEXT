import React from 'react';
import { motion } from 'framer-motion';
import { triggerHaptic } from '../../../utils/haptics';
import { navigateTo } from '../../../utils/navigation';
import { CardSpaceStarfield } from '../../../components/ui';
import './EventsHeroSection.css';

export const EventsHeroSection = ({ onOpenMenu }) => {
  const scrollToSection = (id) => {
    triggerHaptic('selection');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="events-hero-section" id="events-hero">
      {/* Balanced Fluid Wave Gradient Background (Harmonic 200px Amplitude) */}
      <div className="events-hero-wave-layer" aria-hidden="true">
        <svg
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          className="events-hero-wave-svg"
        >
          <defs>
            {/* Wave 1: Cyan / Teal Gradient */}
            <linearGradient id="eventsWaveGradCyan" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#084d5f" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#1494B4" stopOpacity="0.88" />
              <stop offset="85%" stopColor="#38d6f8" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#030508" stopOpacity="0" />
            </linearGradient>

            {/* Wave 2: Crimson / Warm Orange Gradient */}
            <linearGradient id="eventsWaveGradOrange" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#dc2626" stopOpacity="0.90" />
              <stop offset="50%" stopColor="#ea580c" stopOpacity="0.80" />
              <stop offset="85%" stopColor="#f97316" stopOpacity="0.68" />
              <stop offset="100%" stopColor="#030508" stopOpacity="0" />
            </linearGradient>

            {/* Wave 3: Luminous Specular Rim Gradient */}
            <linearGradient id="eventsWaveGradWhite" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#38d6f8" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#fdba74" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          {/* Top Wave 1: Cyan / Teal Fluid Wave (Balanced Harmonic Amplitude A = 200) */}
          <path
            d="M 0,260 C 360,160 720,360 1080,240 C 1260,180 1380,280 1440,250 L 1440,600 L 0,600 Z"
            fill="url(#eventsWaveGradCyan)"
          />

          {/* Middle Wave 2: Counter-Phase Orange Wave (Balanced Harmonic Amplitude A = 200) */}
          <path
            d="M 0,320 C 360,420 720,220 1080,340 C 1260,400 1380,300 1440,320 L 1440,600 L 0,600 Z"
            fill="url(#eventsWaveGradOrange)"
          />

          {/* Bottom Wave 3: Subtle Specular Accent Wave */}
          <path
            d="M 0,300 C 360,200 720,380 1080,270 C 1260,210 1380,310 1440,280 L 1440,600 L 0,600 Z"
            fill="url(#eventsWaveGradWhite)"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Micro-starfield strictly in upper dark sky */}
      <div className="events-hero-starfield-wrap" aria-hidden="true">
        <CardSpaceStarfield variant="hero" mode="section" />
      </div>

      {/* Atmospheric radial ambient glow */}
      <div className="events-hero-ambient-glow" aria-hidden="true" />

      {/* =========================================================
          TOP NAVBAR FOR EVENTS PAGE (Transparent, sleek Apple style)
          ========================================================= */}
      <nav className="events-top-nav" aria-label="Events Navigation">
        {/* Left: Next School Logo + Divider + Odyssey Brand */}
        <div className="events-nav-left">
          <a
            href="https://nextschool.edu.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="events-next-box"
            title="The Next School"
            onClick={() => triggerHaptic('selection')}
          >
            <img
              src="/img/next-school.png"
              alt="The Next School"
              className="events-next-img"
            />
          </a>

          <div className="events-nav-divider" />

          <a
            href="/"
            className="events-nav-brand"
            title="Odyssey 2027"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/');
            }}
          >
            <img
              src="/img/odessey-logo2.png"
              alt="Odyssey Logo"
              className="events-nav-wheel"
            />
            <span className="events-nav-brand-text">ODYSSEY &apos;27</span>
          </a>
        </div>

        {/* Center: Clean URL Links: about, events (active), gallery */}
        <div className="events-nav-links">
          <a
            href="/about"
            className="events-nav-link"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/about');
            }}
          >
            about
          </a>
          <a
            href="/events"
            className="events-nav-link active"
            onClick={(e) => {
              e.preventDefault();
              triggerHaptic('selection');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            events
          </a>
          <a
            href="/gallery"
            className="events-nav-link"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/gallery');
            }}
          >
            gallery
          </a>
        </div>

        {/* Right: Register Button & Mobile Drawer Toggle */}
        <div className="events-nav-right">
          <a
            href="/register"
            className="events-register-btn"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/register');
            }}
            title="Register for Odyssey 2027"
          >
            <span>Register</span>
          </a>

          <button
            onClick={() => {
              triggerHaptic('medium');
              onOpenMenu?.();
            }}
            className="events-mobile-btn"
            aria-label="Open navigation menu"
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
      </nav>

      {/* Main Events Hero Content Container */}
      <div className="events-hero-container">
        <motion.div
          className="events-hero-content"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow Pill with Overhead Specular Lighting */}
          <div className="events-eyebrow-pill">
            <span className="events-eyebrow-text">ODYSSEY 2027 &bull; THE ARENA</span>
          </div>

          {/* Section 1 Heading (Official Title) */}
          <h1 className="events-hero-title">
            Events &amp; <span className="events-hero-title-accent">Challenges</span>
          </h1>

          {/* Official Subtitle */}
          <p className="events-hero-tagline">
            Explore the events and challenges of Odyssey 2027.
          </p>

          {/* Official Theme Statement (Clean Bold Typography — NOT a pill) */}
          <p className="events-hero-theme-statement">
            The Big Fix. Big Problems. Bold Solutions.
          </p>

          {/* Interactive Fast-Jump Filter Pills to Each Challenge */}
          <div className="events-jump-nav" aria-label="Jump to specific challenge">
            <button
              onClick={() => scrollToSection('steamscape')}
              className="events-jump-pill"
            >
              STEAMSCAPE
            </button>
            <button
              onClick={() => scrollToSection('prototype-quest')}
              className="events-jump-pill"
            >
              Prototype Quest
            </button>
            <button
              onClick={() => scrollToSection('photography')}
              className="events-jump-pill"
            >
              Photography
            </button>
            <button
              onClick={() => scrollToSection('gymnastics')}
              className="events-jump-pill"
            >
              Gymnastics
            </button>
            <button
              onClick={() => scrollToSection('art-competition')}
              className="events-jump-pill"
            >
              Art Competition
            </button>
            <button
              onClick={() => scrollToSection('pure-bazaar')}
              className="events-jump-pill"
            >
              Pure Bazaar
            </button>
            <button
              onClick={() => scrollToSection('other-highlights')}
              className="events-jump-pill"
            >
              Other Highlights
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade Mask */}
      <div className="events-hero-bottom-mask" aria-hidden="true" />
    </section>
  );
};

