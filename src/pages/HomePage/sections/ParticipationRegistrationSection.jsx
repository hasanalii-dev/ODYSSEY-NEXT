import React, { useState, useRef, useEffect } from 'react';
import { CardSpaceStarfield } from '../../../components/ui';
import './ParticipationRegistrationSection.css';

export const ParticipationRegistrationSection = () => {
  const sectionRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect(); // One-time trigger: stays revealed permanently
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="participation"
      ref={sectionRef}
      className={`participation-section-root ${isRevealed ? 'is-revealed' : ''}`}
    >
      {/* Ambient background glow */}
      <div className="participation-ambient-glow" aria-hidden="true" />

      <div className="participation-container">
        {/* =========================================================
            1. SECTION HEADER (Center-Aligned with 1-Time Reveal)
            ========================================================= */}
        <div className="participation-header">
          <div className="participation-eyebrow">
            <span className="participation-eyebrow-text">
              Access &bull; Odyssey 2027
            </span>
          </div>

          <h2 className="participation-title">
            Participation and <span className="participation-title-accent">Registrations</span>
          </h2>

          <p className="participation-subtitle">
            Essential information regarding campus participation, attendance policies, and open access for all families.
          </p>
        </div>

        {/* =========================================================
            2. FOUR PARTICIPATION CARDS (iOS Frosted Black + 3 Sine Wave Gradients)
            Card 1: Blue Wave Gradient (Campuses)
            Card 2: Red Wave Gradient (Donation Drive - Box 1)
            Card 3: Red-Orange Wave Gradient (Prototype Quest - Box 2)
            Card 4: Orange Wave Gradient (Fraternity Welcome)
            ========================================================= */}
        <div className="participation-cards-grid">
          {/* Point 1: Next Schools STEAM Exhibit (BLUE Wave Gradient + Space Theme) */}
          <div className="participation-card part-card-blue">
            {/* Space Theme Starfield with Dots Twinkling in Light */}
            <CardSpaceStarfield variant="blue" />

            {/* Wave Gradient Layer: 3 sine waves with same amplitude, different Y, blurred */}
            <div className="part-wave-bg" aria-hidden="true">
              <svg
                viewBox="0 0 800 450"
                preserveAspectRatio="none"
                className="part-wave-svg"
              >
                {/* Top Wave: Darker Blue */}
                <path
                  d="M 0,110 C 130,60 270,160 400,110 C 530,60 670,160 800,110 L 800,450 L 0,450 Z"
                  fill="#084d5f"
                  opacity="0.95"
                />
                {/* Middle Wave: Lighter Cyan / Blue */}
                <path
                  d="M 0,195 C 130,145 270,245 400,195 C 530,145 670,245 800,195 L 800,450 L 0,450 Z"
                  fill="#1494B4"
                  opacity="0.95"
                />
                {/* Bottom Wave: White */}
                <path
                  d="M 0,285 C 130,235 270,335 400,285 C 530,235 670,335 800,285 L 800,450 L 0,450 Z"
                  fill="#ffffff"
                  opacity="0.85"
                />
              </svg>
            </div>

            <div className="participation-card-content">
              <div>
                <div className="participation-card-top">
                  <div className="participation-icon-box" aria-hidden="true">
                    <i className="bi bi-buildings"></i>
                  </div>
                  <span className="participation-badge-pill">Campuses</span>
                </div>

                <div className="participation-card-body">
                  <h3 className="participation-card-title">Campus Exhibits</h3>
                  <p className="participation-card-bullet">
                    All Next schools will be expected to participate in the STEAM exhibit.
                  </p>
                </div>
              </div>

              <div className="participation-card-footer">
                <span className="participation-footer-pill">
                  <i className="bi bi-check-circle" aria-hidden="true"></i> STEAM Showcase
                </span>
              </div>
            </div>
          </div>

          {/* Point 2: Donation Drive (Box 1: PKR 200 per person) */}
          <div className="participation-card part-card-red">
            {/* Space Theme Starfield with Dots Twinkling in Light */}
            <CardSpaceStarfield variant="crimson" />

            {/* Wave Gradient Layer: 3 sine waves with same amplitude, different Y, blurred */}
            <div className="part-wave-bg" aria-hidden="true">
              <svg
                viewBox="0 0 800 450"
                preserveAspectRatio="none"
                className="part-wave-svg"
              >
                {/* Top Wave: Darker Red */}
                <path
                  d="M 0,110 C 130,60 270,160 400,110 C 530,60 670,160 800,110 L 800,450 L 0,450 Z"
                  fill="#991b1b"
                  opacity="0.95"
                />
                {/* Middle Wave: Bright Odyssey Red */}
                <path
                  d="M 0,195 C 130,145 270,245 400,195 C 530,145 670,245 800,195 L 800,450 L 0,450 Z"
                  fill="#D34E3F"
                  opacity="0.95"
                />
                {/* Bottom Wave: White */}
                <path
                  d="M 0,285 C 130,235 270,335 400,285 C 530,235 670,335 800,285 L 800,450 L 0,450 Z"
                  fill="#ffffff"
                  opacity="0.85"
                />
              </svg>
            </div>

            <div className="participation-card-content">
              <div>
                <div className="participation-card-top">
                  <div className="participation-icon-box" aria-hidden="true">
                    <i className="bi bi-heart-fill"></i>
                  </div>
                  <span className="participation-badge-pill">Donation Drive</span>
                </div>

                <div className="participation-card-body">
                  <h3 className="participation-card-title">Donation Drive</h3>
                  <div className="participation-fee-tag">
                    PKR 200 <span>/ person</span>
                  </div>
                  <p className="participation-card-bullet">
                    Entry Fee: PKR 200 per person. Amount collected will be used for donation purposes.
                  </p>
                </div>
              </div>

              <div className="participation-card-footer">
                <span className="participation-footer-pill">
                  <i className="bi bi-heart" aria-hidden="true"></i> Charitable Cause
                </span>
              </div>
            </div>
          </div>

          {/* Point 3: Prototype Quest Registration Fee (Box 2: PKR 8,000/-) */}
          <div className="participation-card part-card-red">
            {/* Space Theme Starfield with Dots Twinkling in Light */}
            <CardSpaceStarfield variant="crimson" />

            {/* Wave Gradient Layer: 3 sine waves with same amplitude, different Y, blurred */}
            <div className="part-wave-bg" aria-hidden="true">
              <svg
                viewBox="0 0 800 450"
                preserveAspectRatio="none"
                className="part-wave-svg"
              >
                {/* Top Wave: Darker Crimson */}
                <path
                  d="M 0,110 C 130,60 270,160 400,110 C 530,60 670,160 800,110 L 800,450 L 0,450 Z"
                  fill="#7f1d1d"
                  opacity="0.95"
                />
                {/* Middle Wave: Warm Odyssey Red-Orange */}
                <path
                  d="M 0,195 C 130,145 270,245 400,195 C 530,145 670,245 800,195 L 800,450 L 0,450 Z"
                  fill="#ea580c"
                  opacity="0.95"
                />
                {/* Bottom Wave: White */}
                <path
                  d="M 0,285 C 130,235 270,335 400,285 C 530,235 670,335 800,285 L 800,450 L 0,450 Z"
                  fill="#ffffff"
                  opacity="0.85"
                />
              </svg>
            </div>

            <div className="participation-card-content">
              <div>
                <div className="participation-card-top">
                  <div className="participation-icon-box" aria-hidden="true">
                    <i className="bi bi-cpu"></i>
                  </div>
                  <span className="participation-badge-pill">Prototype Quest</span>
                </div>

                <div className="participation-card-body">
                  <h3 className="participation-card-title">Prototype Quest</h3>
                  <div className="participation-fee-tag">
                    PKR 8,000/- <span>REGISTRATION FEE</span>
                  </div>
                  <p className="participation-card-bullet">
                    Registration Fee: PKR 8,000/- clearly designated for Prototype Quest participants.
                  </p>
                </div>
              </div>

              <div className="participation-card-footer">
                <span className="participation-footer-pill">
                  <i className="bi bi-trophy" aria-hidden="true"></i> Participant Fee
                </span>
              </div>
            </div>
          </div>

          {/* Point 4: Open to Everyone (ORANGE Wave Gradient + Space Theme) */}
          <div className="participation-card part-card-orange">
            {/* Space Theme Starfield with Dots Twinkling in Light */}
            <CardSpaceStarfield variant="orange" />

            {/* Wave Gradient Layer: 3 sine waves with same amplitude, different Y, blurred */}
            <div className="part-wave-bg" aria-hidden="true">
              <svg
                viewBox="0 0 800 450"
                preserveAspectRatio="none"
                className="part-wave-svg"
              >
                {/* Top Wave: Darker Burnt Orange */}
                <path
                  d="M 0,110 C 130,60 270,160 400,110 C 530,60 670,160 800,110 L 800,450 L 0,450 Z"
                  fill="#c2410c"
                  opacity="0.95"
                />
                {/* Middle Wave: Warm Odyssey Orange */}
                <path
                  d="M 0,195 C 130,145 270,245 400,195 C 530,145 670,245 800,195 L 800,450 L 0,450 Z"
                  fill="#D75E30"
                  opacity="0.95"
                />
                {/* Bottom Wave: White */}
                <path
                  d="M 0,285 C 130,235 270,335 400,285 C 530,235 670,335 800,285 L 800,450 L 0,450 Z"
                  fill="#ffffff"
                  opacity="0.85"
                />
              </svg>
            </div>

            <div className="participation-card-content">
              <div>
                <div className="participation-card-top">
                  <div className="participation-icon-box" aria-hidden="true">
                    <i className="bi bi-people"></i>
                  </div>
                  <span className="participation-badge-pill">Community</span>
                </div>

                <div className="participation-card-body">
                  <h3 className="participation-card-title">Fraternity Welcome</h3>
                  <p className="participation-card-bullet">
                    Open to everyone, including parents and siblings of The Next School fraternity.
                  </p>
                </div>
              </div>

              <div className="participation-card-footer">
                <span className="participation-footer-pill">
                  <i className="bi bi-heart" aria-hidden="true"></i> Open Invitation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
