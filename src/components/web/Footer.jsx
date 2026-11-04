import React from 'react';
import { triggerHaptic } from '../../utils/haptics';
import { navigateTo } from '../../utils/navigation';
import { CardSpaceStarfield } from '../ui';
import './Footer.css';

export const Footer = () => {
  const scrollToTop = () => {
    triggerHaptic('medium');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer-info" className="footer-root">
      {/* =========================================================
          BLUE WAVE GRADIENT BACKGROUND
          Perfect balanced amplitude (A = 35) + CSS Blur (No Hard Lines)
          ========================================================= */}
      <div className="footer-wave-bg" aria-hidden="true">
        <svg
          viewBox="0 0 1200 450"
          preserveAspectRatio="none"
          className="footer-wave-svg"
        >
          {/* Top Wave: Darker Blue (Balanced Amplitude A = 35) */}
          <path
            d="M 0,180 C 200,145 400,215 600,180 C 800,145 1000,215 1200,180 L 1200,450 L 0,450 Z"
            fill="#084d5f"
            opacity="0.95"
          />
          {/* Middle Wave: Lighter Cyan / Blue (Balanced Amplitude A = 35) */}
          <path
            d="M 0,245 C 200,210 400,280 600,245 C 800,210 1000,280 1200,245 L 1200,450 L 0,450 Z"
            fill="#1494B4"
            opacity="0.95"
          />
          {/* Bottom Wave: White Specular Wave (Balanced Amplitude A = 35) */}
          <path
            d="M 0,310 C 200,275 400,345 600,310 C 800,275 1000,345 1200,310 L 1200,450 L 0,450 Z"
            fill="#ffffff"
            opacity="0.85"
          />
        </svg>
      </div>

      {/* Atmospheric radial glow overlay */}
      <div className="footer-ambient-radial" aria-hidden="true" />

      {/* Cosmic Space Starfield in Footer with Pure Light-Twinkling Dots */}
      <div className="footer-starfield-wrap" aria-hidden="true">
        <CardSpaceStarfield variant="footer" mode="section" />
      </div>

      <div className="footer-container">
        {/* =========================================================
            MAIN FOOTER GRID
            ========================================================= */}
        <div className="footer-main-grid">
          {/* Column 1: Odyssey 2027 Brand & Philosophy */}
          <div className="footer-col-brand">
            {/* Brand Logo Row: Next School (Uncurved) + Divider + Odyssey Brand Mark */}
            <div className="footer-brand-header">
              <a
                href="https://thenextschool.edu.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-next-logo-link"
                title="The Next School"
                onClick={() => triggerHaptic('selection')}
              >
                <img
                  src="/img/next-school.png"
                  alt="The Next School"
                  className="footer-next-img"
                />
              </a>
              <div className="footer-brand-divider" />
              <div className="footer-brand-lockup">
                <img
                  src="/img/odessey-logo2.png"
                  alt="Odyssey Logo"
                  className="footer-odyssey-wheel"
                />
                <span className="footer-brand-title">ODYSSEY 2027</span>
              </div>
            </div>

            {/* Tagline */}
            <h3 className="footer-tagline">
              The Big Fix. Big Problems. Bold Solutions.
            </h3>

            {/* Motto */}
            <p className="footer-motto">
              Where problems become possibilities.
            </p>

            {/* Social Links Pill Row (DARK Glassmorphism Frosted Glass) */}
            <div className="footer-social-row">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Instagram"
                onClick={() => triggerHaptic('selection')}
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Facebook"
                onClick={() => triggerHaptic('selection')}
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://thenextschool.edu.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="The Next School Website"
                onClick={() => triggerHaptic('selection')}
              >
                <i className="bi bi-globe2"></i>
              </a>
            </div>
          </div>

          {/* Column 2: QUICK LINKS */}
          <div className="footer-col-links">
            {/* DARK Glassmorphism Section Pill */}
            <div className="footer-heading-pill">
              <span className="footer-heading-text">QUICK LINKS</span>
            </div>
            <ul className="footer-links-list">
              <li>
                <a
                  href="/"
                  className="footer-link-item"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo('/');
                  }}
                >
                  <i className="bi bi-chevron-right footer-link-icon"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="footer-link-item"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo('/about');
                  }}
                >
                  <i className="bi bi-chevron-right footer-link-icon"></i>
                  <span>About Odyssey</span>
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="footer-link-item"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo('/events');
                  }}
                >
                  <i className="bi bi-chevron-right footer-link-icon"></i>
                  <span>Events &amp; Challenges</span>
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="footer-link-item"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo('/gallery');
                  }}
                >
                  <i className="bi bi-chevron-right footer-link-icon"></i>
                  <span>Gallery</span>
                </a>
              </li>
              <li>
                <a
                  href="/register"
                  className="footer-link-item"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo('/register');
                  }}
                >
                  <i className="bi bi-chevron-right footer-link-icon"></i>
                  <span>Register</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: THE NEXT SCHOOL */}
          <div className="footer-col-school">
            {/* DARK Glassmorphism Section Pill */}
            <div className="footer-heading-pill">
              <span className="footer-heading-text">THE NEXT SCHOOL</span>
            </div>

            <p className="footer-school-desc">
              Odyssey, our flagship STEAM event, organized by The Next School for the Next Schools.
            </p>

            {/* DARK Glassmorphism Badge Pill */}
            <div className="footer-school-badge">
              <div className="footer-school-badge-inner">
                <i className="bi bi-award"></i>
                <span className="footer-school-badge-text">STEAM Center of Excellence</span>
              </div>
            </div>

            {/* DARK Glassmorphism Action Button (NOT COLORED) */}
            <a
              href="https://thenextschool.edu.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-school-portal-link"
              onClick={() => triggerHaptic('selection')}
            >
              <span>Visit Official Website</span>
              <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>
        </div>

        {/* =========================================================
            BOTTOM COPYRIGHT BAR & BACK TO TOP
            ========================================================= */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; 2027 The Next School. All rights reserved.
          </p>

          {/* DARK Glassmorphism Back-to-Top Button */}
          <button
            onClick={scrollToTop}
            className="footer-back-to-top-btn"
            title="Scroll back to top"
          >
            <span>Back to Top</span>
            <i className="bi bi-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};
