import React from 'react';
import './CyberVideoHero.css';

export const CyberVideoHero = () => {
  return (
    <header className="odyssey-hero-root" id="hero">
      {/* =========================================================
          1. BACKGROUND VIDEO (LOOPING & MUTED) + DARK OVERLAY
          ========================================================= */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video-element"
        src="/videos/hero-earth.webm"
      />

      {/* Normal Dark Overlay on Video */}
      <div className="hero-video-dark-overlay" />

      {/* Subtle Coordinate Grid Lines */}
      <div className="hero-grid-pattern" />

      {/* =========================================================
          2. UPPER SHAPED NOTCH BORDER (SVG OVERLAY)
          ========================================================= */}
      <div className="hero-shaped-frame-top">
        <svg
          viewBox="0 0 1000 160"
          preserveAspectRatio="none"
          className="hero-svg-notch-top"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0 0 L 1000 0 L 1000 60 L 745 60 C 725 60, 715 80, 700 105 C 685 130, 675 150, 645 150 L 355 150 C 325 150, 315 130, 300 105 C 285 80, 275 60, 255 60 L 0 60 Z"
          />
        </svg>

        {/* Triple Dash Indicators in Upper Notch */}
        <div className="hero-notch-indicators-top">
          <div className="notch-dash-bar" />
          <div className="notch-dash-bar red-active" />
          <div className="notch-dash-bar" />
        </div>
      </div>

      {/* =========================================================
          3. MAIN CONTENT: HEADLINE & SUB-PARAGRAPHS
          ========================================================= */}
      <div className="hero-content-wrapper">
        {/* Bold Condensed Headline */}
        <h1 className="hero-title-big">
          THE BIG FIX. BIG PROBLEMS.<br />
          BOLD SOLUTIONS.
        </h1>

        {/* Sub-paragraphs */}
        <div className="hero-paragraph-stack">
          <p className="hero-paragraph-lead">
            The Next School is excited to bring back Odyssey, where Science, Technology,
            Engineering, Arts, and Mathematics (STEAM) unite to tackle today’s environmental
            challenges!
          </p>

          <p className="hero-paragraph-body">
            This year, we celebrate The Big Fix: exploring how human ingenuity can transform
            everyday problems into meaningful solutions. Discover how science, technology,
            engineering, and creativity come together to tackle the challenges around us, from
            healthier lives and safer communities to smarter cities and a more sustainable future.
          </p>
        </div>
      </div>

      {/* =========================================================
          4. LOWER SHAPED NOTCH BORDER (SVG OVERLAY)
          ========================================================= */}
      <div className="hero-shaped-frame-bottom">
        {/* Triple Dash Indicators in Lower Notch */}
        <div className="hero-notch-indicators-bottom">
          <div className="notch-dash-bar" />
          <div className="notch-dash-bar red-active" />
          <div className="notch-dash-bar" />
        </div>

        <svg
          viewBox="0 0 1000 160"
          preserveAspectRatio="none"
          className="hero-svg-notch-bottom"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0 160 L 1000 160 L 1000 100 L 745 100 C 725 100, 715 80, 700 55 C 685 30, 675 10, 645 10 L 355 10 C 325 10, 315 30, 300 55 C 285 80, 275 100, 255 100 L 0 100 Z"
          />
        </svg>
      </div>
    </header>
  );
};
