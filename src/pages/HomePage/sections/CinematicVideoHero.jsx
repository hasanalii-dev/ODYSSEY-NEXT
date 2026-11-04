import React from 'react';
import './CinematicVideoHero.css';

export const CinematicVideoHero = () => {
  return (
    <header className="cinematic-hero-root" id="hero">
      {/* =========================================================
          1. TOP CONTINUOUS MARQUEE TICKER
          ========================================================= */}
      <div className="cinematic-ticker-bar" aria-hidden="true">
        <div className="cinematic-ticker-track">
          <span className="ticker-item">NOW OPEN</span>
          <span className="ticker-dot">&bull;</span>
          <span className="ticker-item">ODYSSEY 2027: THE BIG FIX</span>
          <span className="ticker-dot">&bull;</span>
          <span className="ticker-item">STEAM &amp; CONTEMPORARY INNOVATION</span>
          <span className="ticker-dot">&bull;</span>
          <span className="ticker-item">THE NEXT SCHOOL KARACHI</span>
          <span className="ticker-dot">&bull;</span>
          <span className="ticker-item">WHERE IDEAS TRANSFORM THE WORLD</span>
          <span className="ticker-dot">&bull;</span>
          <span className="ticker-item">BIG PROBLEMS. BOLD SOLUTIONS.</span>
          <span className="ticker-dot">&bull;</span>
          {/* Duplicate loop for infinite continuous marquee */}
          <span className="ticker-item">NOW OPEN</span>
          <span className="ticker-dot">&bull;</span>
          <span className="ticker-item">ODYSSEY 2027: THE BIG FIX</span>
          <span className="ticker-dot">&bull;</span>
          <span className="ticker-item">STEAM &amp; CONTEMPORARY INNOVATION</span>
          <span className="ticker-dot">&bull;</span>
          <span className="ticker-item">THE NEXT SCHOOL KARACHI</span>
          <span className="ticker-dot">&bull;</span>
          <span className="ticker-item">WHERE IDEAS TRANSFORM THE WORLD</span>
          <span className="ticker-dot">&bull;</span>
          <span className="ticker-item">BIG PROBLEMS. BOLD SOLUTIONS.</span>
        </div>
      </div>

      {/* =========================================================
          2. TOP NAVIGATION BAR WITH OUR OFFICIAL LOGO
          ========================================================= */}
      <nav className="cinematic-nav" aria-label="Main Navigation">
        {/* Brand Logo: Our Official Logo */}
        <a href="#" className="cinematic-logo" title="Odyssey '27">
          <img
            src="/img/odessey-logo1.png"
            alt="Odyssey Logo"
            className="cinematic-logo-img"
          />
          <div className="flex flex-col leading-tight">
            <span className="cinematic-logo-title">
              ODYSSEY &apos;27
            </span>
            <span className="text-[9px] font-mono tracking-widest uppercase text-slate-400">
              The Next School
            </span>
          </div>
        </a>

        {/* Center Nav Links */}
        <div className="cinematic-nav-links">
          <a href="#overview" className="cinematic-nav-link active">
            Home
          </a>
          <a href="#highlights" className="cinematic-nav-link">
            About
          </a>
          <a href="#competitions" className="cinematic-nav-link">
            Categories
          </a>
          <a href="#participation" className="cinematic-nav-link">
            Gallery
          </a>
        </div>

        {/* Right CTA Button */}
        <div className="flex items-center gap-3">
          <a href="#participation" className="cinematic-cta-btn">
            <span>GET STARTED</span>
            <span>&rarr;</span>
          </a>
        </div>
      </nav>

      {/* =========================================================
          3. FULL-BLEED BACKGROUND VIDEO + CRIMSON VIGNETTE
          ========================================================= */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="cinematic-bg-video"
        src="/videos/hero-earth.webm"
      />
      <div className="cinematic-vignette-overlay" aria-hidden="true" />
      <div className="cinematic-ambient-gradient" aria-hidden="true" />

      {/* =========================================================
          4. MAIN HERO CONTENT (OUR EXACT HEADLINE & SUB-PARAGRAPH)
          ========================================================= */}
      <div className="cinematic-content-wrapper">
        {/* Eyebrow */}
        <div className="cinematic-eyebrow">
          <span>The Next School&apos;s Celebration of STEAM &amp; Innovation</span>
          <span className="cinematic-eyebrow-arrow">&rarr;</span>
        </div>

        {/* Mixed Typography Headline matching image style */}
        <h1 className="cinematic-headline">
          The Big <span className="cinematic-headline-italic">Fix.</span> Big Problems.<br />
          Bold <span className="cinematic-headline-italic">Solutions.</span>
        </h1>

        {/* Sub-paragraph */}
        <p className="cinematic-description">
          We are delighted to introduce Odyssey, The Next School&apos;s celebration of
          Science, Technology, Engineering, Arts, and Mathematics (STEAM), contemporary
          ideas, and human ingenuity. An invitation for our students to think deeply,
          create boldly, and tackle today&apos;s environmental challenges into meaningful solutions.
        </p>

        {/* Action Button Group matching image */}
        <div className="cinematic-btn-group">
          <a href="#participation" className="btn-primary-red">
            <span>JOIN THE FESTIVAL</span>
            <span>&rarr;</span>
          </a>
          <a href="#overview" className="btn-secondary-white">
            VIEW EXHIBITIONS
          </a>
        </div>
      </div>

      <div />
    </header>
  );
};
