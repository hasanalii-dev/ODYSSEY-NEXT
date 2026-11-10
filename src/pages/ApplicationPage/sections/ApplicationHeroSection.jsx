import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Download, FileText, Users } from 'lucide-react';
import { triggerHaptic } from '../../../utils/haptics';
import { navigateTo } from '../../../utils/navigation';
import { CardSpaceStarfield } from '../../../components/ui';
import './ApplicationHeroSection.css';

export const ApplicationHeroSection = ({ onOpenMenu }) => {
  return (
    <section className="app-hero-section" id="application-hero">
      {/* Balanced Celestial Blue Wave Gradient Background */}
      <div className="app-hero-wave-layer" aria-hidden="true">
        <svg
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          className="app-hero-wave-svg"
        >
          <defs>
            {/* Wave 1: Cyan / Deep Teal Gradient */}
            <linearGradient id="appWaveGradCyan" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#053b49" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#0891b2" stopOpacity="0.88" />
              <stop offset="85%" stopColor="#38d6f8" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#030508" stopOpacity="0" />
            </linearGradient>

            {/* Wave 2: Deep Sapphire / Azure Blue Gradient */}
            <linearGradient id="appWaveGradAzure" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0a2540" stopOpacity="0.92" />
              <stop offset="50%" stopColor="#0284c7" stopOpacity="0.82" />
              <stop offset="85%" stopColor="#60a5fa" stopOpacity="0.70" />
              <stop offset="100%" stopColor="#030508" stopOpacity="0" />
            </linearGradient>

            {/* Wave 3: Luminous White / Ice Blue Specular Rim Gradient */}
            <linearGradient id="appWaveGradWhite" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#38d6f8" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          {/* Top Wave: Rolling Cyan / Teal Fluid Wave (Balanced Harmonic Amplitude A = 200) */}
          <path
            d="M 0,260 C 360,160 720,360 1080,240 C 1260,180 1380,280 1440,250 L 1440,600 L 0,600 Z"
            fill="url(#appWaveGradCyan)"
          />

          {/* Middle Wave: Deep Azure / Royal Blue Wave (Balanced Harmonic Amplitude A = 200) */}
          <path
            d="M 0,320 C 360,420 720,220 1080,340 C 1260,400 1380,300 1440,320 L 1440,600 L 0,600 Z"
            fill="url(#appWaveGradAzure)"
          />

          {/* Bottom Wave: White / Ice Blue Specular Accent Wave */}
          <path
            d="M 0,300 C 360,200 720,380 1080,270 C 1260,210 1380,310 1440,280 L 1440,600 L 0,600 Z"
            fill="url(#appWaveGradWhite)"
            opacity="0.45"
          />
        </svg>
      </div>

      {/* Twinkling micro-starfield in upper dark sky */}
      <div className="app-hero-starfield-wrap" aria-hidden="true">
        <CardSpaceStarfield variant="hero" mode="section" />
      </div>

      {/* Atmospheric radial ambient glow */}
      <div className="app-hero-ambient-glow" aria-hidden="true" />

      {/* =========================================================
          TOP NAVBAR FOR APPLICATION PAGE (Transparent Apple style)
          ========================================================= */}
      <nav className="app-top-nav" aria-label="Portal Navigation">
        {/* Left: Next School Logo + Divider + Odyssey Brand */}
        <div className="app-nav-left">
          <a
            href="https://nextschool.edu.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="app-next-box"
            title="The Next School"
            onClick={() => triggerHaptic('selection')}
          >
            <img
              src="/img/next-school.png"
              alt="The Next School"
              className="app-next-img"
            />
          </a>

          <div className="app-nav-divider" />

          <a
            href="/"
            className="app-nav-brand"
            title="Odyssey 2027"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/');
            }}
          >
            <img
              src="/img/odessey-logo2.png"
              alt="Odyssey Logo"
              className="app-nav-wheel"
            />
            <span className="app-nav-brand-text">ODYSSEY &apos;27</span>
          </a>
        </div>

        {/* Center: Clean URL Links: about, events, gallery */}
        <div className="app-nav-links">
          <a
            href="/about"
            className="app-nav-link"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/about');
            }}
          >
            about
          </a>
          <a
            href="/events"
            className="app-nav-link"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/events');
            }}
          >
            events
          </a>
          <a
            href="/gallery"
            className="app-nav-link"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/gallery');
            }}
          >
            gallery
          </a>
        </div>

        {/* Right: Events Quick Action & Mobile Drawer Toggle */}
        <div className="app-nav-right">
          <a
            href="/events"
            className="island-register-btn"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/events');
            }}
            title="Explore Events & Challenges"
          >
            <span>Events</span>
          </a>

          <button
            onClick={() => {
              triggerHaptic('medium');
              onOpenMenu?.();
            }}
            className="app-mobile-btn"
            aria-label="Open navigation menu"
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
      </nav>

      {/* Main Hero Content Container */}
      <div className="app-hero-container">
        <motion.div
          className="app-hero-content"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow Pill with Overhead Specular Lighting */}
          <div className="app-eyebrow-pill">
            <span className="app-eyebrow-text">INTERNAL NETWORK USE ONLY</span>
          </div>

          {/* Section 1 Heading */}
          <h1 className="app-hero-title">
            Odyssey Student <span className="app-hero-title-accent">Application</span>
          </h1>

          {/* Section 1 Tagline */}
          <p className="app-hero-tagline">
            An internal application portal for The Next School students.
          </p>

          {/* Section 1 Subtitle */}
          <p className="app-hero-subtitle">
            Complete your application and submit your customised project proposal through the form below.
          </p>

          {/* Hero Fast-Action CTAs */}
          <div className="app-hero-action-row">
            <a
              href="https://forms.gle/YJ5Kq8DQetGw3hKh6"
              target="_blank"
              rel="noopener noreferrer"
              className="app-cta-primary"
              onClick={() => triggerHaptic('pop')}
            >
              <span>Open Google Form</span>
              <ExternalLink size={16} />
            </a>

            <a
              href="/Prototype-proposal.docx"
              download="Prototype-proposal.docx"
              className="app-cta-secondary"
              onClick={() => triggerHaptic('selection')}
            >
              <Download size={16} />
              <span>Download Proposal (.DOCX)</span>
            </a>

            <a
              href="https://forms.gle/oXR65aNEx2ZjSJsF9"
              target="_blank"
              rel="noopener noreferrer"
              className="app-cta-external"
              onClick={() => triggerHaptic('pop')}
              title="Prototype Quest for External Participants"
            >
              <Users size={15} />
              <span>External Form</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade Mask */}
      <div className="app-hero-bottom-mask" aria-hidden="true" />
    </section>
  );
};

