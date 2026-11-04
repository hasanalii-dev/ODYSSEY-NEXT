import React from 'react';
import { motion } from 'framer-motion';
import { triggerHaptic } from '../../../utils/haptics';
import { navigateTo } from '../../../utils/navigation';
import { CardSpaceStarfield } from '../../../components/ui';
import './GalleryHeroSection.css';

export const GalleryHeroSection = ({ onOpenMenu }) => {
  return (
    <section className="gallery-hero-section" id="gallery-hero">
      {/* Celestial Blue Wave Gradient Background */}
      <div className="gallery-hero-wave-layer" aria-hidden="true">
        <svg
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          className="gallery-hero-wave-svg"
        >
          <defs>
            {/* Wave 1: Cyan / Deep Teal Gradient */}
            <linearGradient id="galleryWaveGradCyan" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#053b49" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#0891b2" stopOpacity="0.88" />
              <stop offset="85%" stopColor="#38d6f8" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#030508" stopOpacity="0" />
            </linearGradient>

            {/* Wave 2: Deep Sapphire / Azure Blue Gradient */}
            <linearGradient id="galleryWaveGradAzure" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0a2540" stopOpacity="0.92" />
              <stop offset="50%" stopColor="#0284c7" stopOpacity="0.82" />
              <stop offset="85%" stopColor="#60a5fa" stopOpacity="0.70" />
              <stop offset="100%" stopColor="#030508" stopOpacity="0" />
            </linearGradient>

            {/* Wave 3: Luminous White / Ice Blue Specular Rim Gradient */}
            <linearGradient id="galleryWaveGradWhite" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#38d6f8" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          {/* Top Wave: Rolling Cyan / Teal Fluid Wave (Balanced Harmonic Amplitude A = 200) */}
          <path
            d="M 0,260 C 360,160 720,360 1080,240 C 1260,180 1380,280 1440,250 L 1440,600 L 0,600 Z"
            fill="url(#galleryWaveGradCyan)"
          />

          {/* Middle Wave: Deep Azure / Royal Blue Wave (Balanced Harmonic Amplitude A = 200) */}
          <path
            d="M 0,320 C 360,420 720,220 1080,340 C 1260,400 1380,300 1440,320 L 1440,600 L 0,600 Z"
            fill="url(#galleryWaveGradAzure)"
          />

          {/* Bottom Wave: White / Ice Blue Specular Accent Wave */}
          <path
            d="M 0,300 C 360,200 720,380 1080,270 C 1260,210 1380,310 1440,280 L 1440,600 L 0,600 Z"
            fill="url(#galleryWaveGradWhite)"
            opacity="0.45"
          />
        </svg>
      </div>

      {/* Twinkling micro-starfield strictly in upper dark sky */}
      <div className="gallery-hero-starfield-wrap" aria-hidden="true">
        <CardSpaceStarfield variant="hero" mode="section" />
      </div>

      {/* Atmospheric radial ambient glow */}
      <div className="gallery-hero-ambient-glow" aria-hidden="true" />

      {/* =========================================================
          TOP NAVBAR FOR GALLERY PAGE (Transparent, sleek Apple style)
          ========================================================= */}
      <nav className="gallery-top-nav" aria-label="Gallery Navigation">
        {/* Left: Next School Logo + Divider + Odyssey Brand */}
        <div className="gallery-nav-left">
          <a
            href="https://nextschool.edu.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="gallery-next-box"
            title="The Next School"
            onClick={() => triggerHaptic('selection')}
          >
            <img
              src="/img/next-school.png"
              alt="The Next School"
              className="gallery-next-img"
            />
          </a>

          <div className="gallery-nav-divider" />

          <a
            href="/"
            className="gallery-nav-brand"
            title="Odyssey 2027"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/');
            }}
          >
            <img
              src="/img/odessey-logo2.png"
              alt="Odyssey Logo"
              className="gallery-nav-wheel"
            />
            <span className="gallery-nav-brand-text">ODYSSEY &apos;27</span>
          </a>
        </div>

        {/* Center: Clean URL Links: about, events, gallery (active) */}
        <div className="gallery-nav-links">
          <a
            href="/about"
            className="gallery-nav-link"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/about');
            }}
          >
            about
          </a>
          <a
            href="/events"
            className="gallery-nav-link"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/events');
            }}
          >
            events
          </a>
          <a
            href="/gallery"
            className="gallery-nav-link active"
            onClick={(e) => {
              e.preventDefault();
              triggerHaptic('selection');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            gallery
          </a>
        </div>

        {/* Right: Dynamic Register Button & Mobile Drawer Toggle */}
        <div className="gallery-nav-right">
          <a
            href="/register"
            className="gallery-register-btn"
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
            className="gallery-mobile-btn"
            aria-label="Open navigation menu"
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
      </nav>

      {/* Main Gallery Hero Content Container */}
      <div className="gallery-hero-container">
        <motion.div
          className="gallery-hero-content"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow Pill with Overhead Specular Lighting */}
          <div className="gallery-eyebrow-pill">
            <span className="gallery-eyebrow-text">ODYSSEY 2027 &bull; VISUAL ARCHIVE</span>
          </div>

          {/* Section 1 Heading (Exact Specification) */}
          <h1 className="gallery-hero-title">
            Gallery
          </h1>

          {/* Section 1 Subtitle */}
          <p className="gallery-hero-tagline">
            A glimpse into Odyssey 2027: The Big Fix.
          </p>

          {/* Section 2: Gallery Introduction */}
          <p className="gallery-intro-text">
            Explore the moments, creativity, projects, and experiences that bring Odyssey to life.
          </p>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade Mask */}
      <div className="gallery-hero-bottom-mask" aria-hidden="true" />
    </section>
  );
};
