import React, { useEffect } from 'react';
import { triggerHaptic } from '../../utils/haptics';
import { navigateTo } from '../../utils/navigation';
import './Navbar.css';

export const Navbar = ({ onOpenMenu, isVisible = true, currentRoute = 'home' }) => {
  // Trigger subtle haptic pop when Dynamic Island expands into view
  useEffect(() => {
    if (isVisible) {
      triggerHaptic('pop');
    }
  }, [isVisible]);

  return (
    <div
      className={`dynamic-island-wrapper ${isVisible ? 'island-active' : 'island-hidden'}`}
      id="navbar-wrapper"
      aria-hidden={!isVisible}
    >
      <nav className="dynamic-island-nav" aria-label="Quick Navigation">
        {/* Left: Next School Uncurved Logo + Divider + Odyssey Brand */}
        <div className="island-left">
          <a
            href="https://nextschool.edu.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="island-next-logo"
            title="The Next School"
            onClick={() => triggerHaptic('selection')}
          >
            <img
              src="/img/next-school.png"
              alt="The Next School"
              className="island-next-img"
            />
          </a>

          <div className="island-divider" />

          <a
            href="/"
            className="island-brand"
            title="Odyssey 2027"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/');
            }}
          >
            <img
              src="/img/odessey-logo2.png"
              alt="Odyssey Logo"
              className="island-wheel"
            />
            <span className="island-brand-text">ODYSSEY</span>
          </a>
        </div>

        {/* Center: Clean URL Links: About, Events, Gallery */}
        <div className="island-links">
          <a
            href="/about"
            className={`island-link ${currentRoute === 'about' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/about');
            }}
          >
            About
          </a>
          <a
            href="/events"
            className={`island-link ${currentRoute === 'events' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/events');
            }}
          >
            Events
          </a>
          <a
            href="/gallery"
            className={`island-link ${currentRoute === 'gallery' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/gallery');
            }}
          >
            Gallery
          </a>
        </div>

        {/* Right: Dynamic Island Register Button & Mobile Toggle */}
        <div className="island-right">
          <a
            href="/register"
            className="island-register-btn"
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
            className="island-mobile-btn"
            aria-label="Open navigation menu"
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
      </nav>
    </div>
  );
};
