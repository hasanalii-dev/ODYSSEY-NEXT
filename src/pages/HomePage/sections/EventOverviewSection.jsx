import React from 'react';
import './EventOverviewSection.css';

export const EventOverviewSection = () => {
  return (
    <section id="overview" className="philosophy-section-root">
      {/* Subtle background atmospheric glow */}
      <div className="philosophy-ambient-glow" aria-hidden="true" />

      <div className="philosophy-container">
        {/* --- 1. SECTION HEADER --- */}
        <div className="philosophy-header">
          <div className="philosophy-eyebrow">
            <span className="philosophy-eyebrow-dot" />
            <span className="philosophy-eyebrow-text">The Philosophy &bull; Odyssey 2027</span>
          </div>

          <h2 className="philosophy-title">
            Where Problems Become <span className="philosophy-title-accent">Possibilities.</span>
          </h2>

          <p className="philosophy-subtitle">
            Exploring how human ingenuity, bold creativity, and purpose-driven engineering unite to build solutions for today and tomorrow.
          </p>
        </div>

        {/* --- 2. BENTO CARDS GRID --- */}
        <div className="philosophy-bento-grid">
          {/* Card 1: Blue & Cyan Wave Gradient (3 Blurred Sine Waves) */}
          <div className="philosophy-card">
            {/* Wave Gradient Layer: 3 sin waves with same amplitude, different Y, blurred */}
            <div className="card-wave-bg" aria-hidden="true">
              <svg
                viewBox="0 0 800 450"
                preserveAspectRatio="none"
                className="card-wave-svg"
              >
                {/* Top Wave: Darker Blue */}
                <path
                  d="M 0,110 C 130,60 270,160 400,110 C 530,60 670,160 800,110 L 800,450 L 0,450 Z"
                  fill="#084d5f"
                  opacity="0.85"
                />
                {/* Middle Wave: Lighter Cyan */}
                <path
                  d="M 0,195 C 130,145 270,245 400,195 C 530,145 670,245 800,195 L 800,450 L 0,450 Z"
                  fill="#1494B4"
                  opacity="0.9"
                />
                {/* Bottom Wave: White */}
                <path
                  d="M 0,285 C 130,235 270,335 400,285 C 530,235 670,335 800,285 L 800,450 L 0,450 Z"
                  fill="#ffffff"
                  opacity="0.75"
                />
              </svg>
            </div>

            <div className="philosophy-card-inner">
              <div>
                <div className="philosophy-card-top">
                  <span className="philosophy-card-part-tag">Core Mission &bull; Innovation</span>
                  <div className="philosophy-card-icon-box" aria-hidden="true">
                    <i className="bi bi-lightbulb"></i>
                  </div>
                </div>

                <h3 className="philosophy-card-heading">The Innovator&apos;s Mindset</h3>

                <p className="philosophy-card-body">
                  At The Big Fix, students become problem-solvers, innovators, and engineers. They will identify real-world challenges, question existing solutions, experiment with ideas, and build functional prototypes designed to make life better. Every problem is an opportunity to think differently, create boldly, and make an impact.
                </p>
              </div>

              <div className="philosophy-card-tags">
                <span className="philosophy-tag-pill">
                  <i className="bi bi-tools" aria-hidden="true"></i> Functional Prototypes
                </span>
                <span className="philosophy-tag-pill">
                  <i className="bi bi-gear-wide-connected" aria-hidden="true"></i> Real-World Challenges
                </span>
                <span className="philosophy-tag-pill">
                  <i className="bi bi-stars" aria-hidden="true"></i> Creative Engineering
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Orange & Red Wave Gradient (3 Blurred Sine Waves) */}
          <div className="philosophy-card">
            {/* Wave Gradient Layer: 3 sin waves with same amplitude, different Y, blurred */}
            <div className="card-wave-bg" aria-hidden="true">
              <svg
                viewBox="0 0 800 450"
                preserveAspectRatio="none"
                className="card-wave-svg"
              >
                {/* Top Wave: Darker Red */}
                <path
                  d="M 0,110 C 130,60 270,160 400,110 C 530,60 670,160 800,110 L 800,450 L 0,450 Z"
                  fill="#991b1b"
                  opacity="0.85"
                />
                {/* Middle Wave: Lighter Orange */}
                <path
                  d="M 0,195 C 130,145 270,245 400,195 C 530,145 670,245 800,195 L 800,450 L 0,450 Z"
                  fill="#D75E30"
                  opacity="0.9"
                />
                {/* Bottom Wave: White */}
                <path
                  d="M 0,285 C 130,235 270,335 400,285 C 530,235 670,335 800,285 L 800,450 L 0,450 Z"
                  fill="#ffffff"
                  opacity="0.75"
                />
              </svg>
            </div>

            <div className="philosophy-card-inner">
              <div>
                <div className="philosophy-card-top">
                  <span className="philosophy-card-part-tag">Community &bull; Exploration</span>
                  <div className="philosophy-card-icon-box" aria-hidden="true">
                    <i className="bi bi-compass"></i>
                  </div>
                </div>

                <h3 className="philosophy-card-heading">A Place for Everyone</h3>

                <p className="philosophy-card-body">
                  Whether you&apos;re a young innovator, an educator, a professional, or simply curious about what the future could look like, there&apos;s something for everyone at The Big Fix. Together, let&apos;s discover how powerful ideas can emerge when curiosity meets creativity and purpose.
                </p>
              </div>

              <div className="philosophy-card-tags">
                <span className="philosophy-tag-pill">
                  <i className="bi bi-people" aria-hidden="true"></i> Young Innovators
                </span>
                <span className="philosophy-tag-pill">
                  <i className="bi bi-mortarboard" aria-hidden="true"></i> Educators &amp; Mentors
                </span>
                <span className="philosophy-tag-pill">
                  <i className="bi bi-eye" aria-hidden="true"></i> Curious Minds
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* --- 3. WELCOME STATEMENT BANNER (FULL WIDTH) --- */}
        <div className="philosophy-welcome-banner">
          <div className="philosophy-welcome-content">
            <div className="philosophy-welcome-badge">
              <i className="bi bi-patch-check" aria-hidden="true"></i>
              <span>Odyssey 2027 Flagship Experience</span>
            </div>
            <p className="philosophy-welcome-text">
              Welcome to <span className="philosophy-welcome-highlight">The Big Fix</span> — Where problems become possibilities.
            </p>
          </div>

          <a href="#highlights" className="philosophy-welcome-cta">
            <span>Explore Exhibits</span>
            <i className="bi bi-arrow-right philosophy-welcome-arrow" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
