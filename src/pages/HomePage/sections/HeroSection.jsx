import React, { useState, useEffect } from 'react';
import { FractalGlassBg } from './FractalGlassBg';
import { navigateTo } from '../../../utils/navigation';
import './HeroSection.css';

export const HeroSection = ({ isLoaded = false, onOpenMenu }) => {
  return (
    <header className={`hero-root ${isLoaded ? 'hero-loaded' : 'hero-primed'}`} id="hero">
      {/* Fractal Fluted Glass Refraction Background (FluxEdit style) */}
      <FractalGlassBg isLoaded={isLoaded} />

      {/* Subtle Noise Texture */}
      <div className="hero-noise-overlay" aria-hidden="true" />

      {/* =========================================================
          1. TOP NAVBAR (Transparent, no body / capsule container)
          Links: about, events, gallery, register button
          ========================================================= */}
      <nav className="hero-nav" aria-label="Main Navigation">
        {/* Left: Next School Logo + Divider + Odyssey Brand (NOT CURVED) */}
        <div className="hero-nav-left">
          <a
            href="https://nextschool.edu.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-next-box"
            title="The Next School"
          >
            <img
              src="/img/next-school.png"
              alt="The Next School"
              className="hero-next-img"
            />
          </a>

          <div className="hero-nav-divider" />

          <a
            href="/"
            className="hero-nav-brand"
            title="Odyssey 2027"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/');
            }}
          >
            <img
              src="/img/odessey-logo2.png"
              alt="Odyssey Logo"
              className="hero-nav-wheel"
            />
            <span className="hero-nav-brand-text">ODYSSEY &apos;27</span>
          </a>
        </div>

        {/* Center Links: about, events, gallery */}
        <div className="hero-nav-links">
          <a
            href="/about"
            className="hero-nav-link"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/about');
            }}
          >
            about
          </a>
          <a
            href="/events"
            className="hero-nav-link"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/events');
            }}
          >
            events
          </a>
          <a
            href="/gallery"
            className="hero-nav-link"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/gallery');
            }}
          >
            gallery
          </a>
        </div>

        {/* Right: Register Button & Mobile Toggle */}
        <div className="hero-nav-right">
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
            onClick={() => onOpenMenu?.()}
            className="hero-nav-mobile-btn"
            aria-label="Open navigation menu"
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
      </nav>

      {/* =========================================================
          2. HERO CONTENT GRID
          Left: Sleek Glass Pill, 1-line Headline, Tagline, CTA Group
          Right: Large STEAM Wheel + Spec Tags
          ========================================================= */}
      <div className="hero-main-container">
        <div className="hero-grid">
          {/* LEFT COLUMN: Content */}
          <div className="hero-content-col">
            {/* Sleek Glassmorphism Pill Badge (No Dot) */}
            <div className="hero-eyebrow-pill">
              <span className="hero-eyebrow-text">A NEXT SCHOOL INITIATIVE</span>
              <span className="hero-eyebrow-sep" aria-hidden="true">&bull;</span>
              <span className="hero-eyebrow-edition">ODYSSEY 2027</span>
            </div>

            {/* 1-Line Bold Headline (Tightened Spacing) */}
            <h1 className="hero-headline">
              <span className="hero-hl-white">THE</span>
              <span className="hero-hl-teal">BIG</span>
              <span className="hero-hl-white">FIX.</span>
            </h1>

            {/* Sub-heading / Tagline */}
            <p className="hero-tagline">
              The Big Fix. Big Problems. Bold Solutions.
            </p>

            {/* iOS Style CTA Button Group */}
            <div className="hero-cta-group">
              <a href="#theme-story" className="hero-btn-primary">
                <span>Explore The Theme</span>
                <i className="bi bi-arrow-right hero-btn-arrow" aria-hidden="true"></i>
              </a>

              <a href="#highlights" className="hero-btn-secondary">
                <span>View Exhibits</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: STEAM Wheel Artwork + iOS Dynamic Widgets */}
          <div className="hero-wheel-col">
            <div className="hero-wheel-wrapper">
              {/* Crisp structural orbital rings behind the wheel */}
              <div className="hero-wheel-ambient" aria-hidden="true" />

              {/* Complete Odyssey STEAM wheel artwork with load rotation animation */}
              <img
                src="/img/odessey-logo2.png"
                alt="Odyssey 2027 STEAM"
                className={`hero-wheel-image ${isLoaded ? 'wheel-animate-load' : ''}`}
              />

              {/* iOS Widget 1: Biomimicry (Top-Left) */}
              <div className="hero-ios-widget widget-biomimicry">
                <div className="widget-icon-box box-biomimicry">
                  <i className="bi bi-flower1" aria-hidden="true"></i>
                </div>
                <div className="widget-text-col">
                  <span className="widget-title">BIOMIMICRY</span>
                  <span className="widget-subtitle">Nature Inspired</span>
                </div>
                <div className="widget-indicator ind-biomimicry" />
              </div>

              {/* iOS Widget 2: Math (Middle-Right) */}
              <div className="hero-ios-widget widget-math">
                <div className="widget-icon-box box-math">
                  <i className="bi bi-infinity" aria-hidden="true"></i>
                </div>
                <div className="widget-text-col">
                  <span className="widget-title">MATHEMATICS</span>
                  <span className="widget-subtitle">Core Patterns</span>
                </div>
                <div className="widget-indicator ind-math" />
              </div>

              {/* iOS Widget 3: Robotics (Bottom-Left) */}
              <div className="hero-ios-widget widget-robotics">
                <div className="widget-icon-box box-robotics">
                  <i className="bi bi-cpu" aria-hidden="true"></i>
                </div>
                <div className="widget-text-col">
                  <span className="widget-title">ROBOTICS</span>
                  <span className="widget-subtitle">Autonomous Tech</span>
                </div>
                <div className="widget-indicator ind-robotics" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};