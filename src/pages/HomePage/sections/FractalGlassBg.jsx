import React from 'react';
import './FractalGlassBg.css';

// Celestial star sparkle dots placed across the cosmic deep space field
const STAR_DATA = [
  { top: '6%', left: '10%', size: 2, delay: '0s', dur: '2.8s', opacity: 0.85 },
  { top: '12%', left: '22%', size: 1.5, delay: '1.2s', dur: '3.4s', opacity: 0.7 },
  { top: '5%', left: '38%', size: 2.5, delay: '0.4s', dur: '2.5s', opacity: 0.95, glow: true },
  { top: '16%', left: '46%', size: 1.5, delay: '1.8s', dur: '4s', opacity: 0.75 },
  { top: '9%', left: '60%', size: 2, delay: '0.8s', dur: '3.1s', opacity: 0.85 },
  { top: '14%', left: '72%', size: 2.5, delay: '1.5s', dur: '2.7s', opacity: 0.95, glow: true },
  { top: '6%', left: '85%', size: 1.5, delay: '2.1s', dur: '3.6s', opacity: 0.75 },
  { top: '20%', left: '94%', size: 2, delay: '0.3s', dur: '2.9s', opacity: 0.8 },
  { top: '24%', left: '6%', size: 1.5, delay: '1.7s', dur: '3.5s', opacity: 0.7 },
  { top: '30%', left: '16%', size: 2, delay: '0.9s', dur: '2.6s', opacity: 0.85 },
  { top: '26%', left: '32%', size: 1.5, delay: '2.4s', dur: '3.8s', opacity: 0.65 },
  { top: '34%', left: '50%', size: 2.5, delay: '0.6s', dur: '2.4s', opacity: 0.95, glow: true },
  { top: '28%', left: '66%', size: 1.5, delay: '1.4s', dur: '3.3s', opacity: 0.75 },
  { top: '24%', left: '80%', size: 2, delay: '2.0s', dur: '3s', opacity: 0.85 },
  { top: '36%', left: '88%', size: 1.5, delay: '0.5s', dur: '4.2s', opacity: 0.7 },
  { top: '42%', left: '12%', size: 2, delay: '1.1s', dur: '3.2s', opacity: 0.8 },
  { top: '46%', left: '24%', size: 1.5, delay: '2.3s', dur: '3.7s', opacity: 0.6 },
  { top: '40%', left: '40%', size: 2, delay: '0.7s', dur: '2.8s', opacity: 0.9, glow: true },
  { top: '44%', left: '56%', size: 1.5, delay: '1.9s', dur: '3.4s', opacity: 0.7 },
  { top: '38%', left: '74%', size: 2, delay: '1.0s', dur: '2.9s', opacity: 0.85 },
  { top: '48%', left: '84%', size: 1.5, delay: '2.5s', dur: '3.9s', opacity: 0.7 },
  { top: '52%', left: '95%', size: 2, delay: '0.2s', dur: '2.7s', opacity: 0.8 },
  { top: '10%', left: '4%', size: 2, delay: '1.6s', dur: '3.3s', opacity: 0.8 },
  { top: '15%', left: '30%', size: 1.5, delay: '0.8s', dur: '3.5s', opacity: 0.7 },
  { top: '19%', left: '54%', size: 2, delay: '2.2s', dur: '2.8s', opacity: 0.85 },
  { top: '35%', left: '3%', size: 1.5, delay: '1.3s', dur: '4.1s', opacity: 0.65 },
  { top: '43%', left: '64%', size: 2.5, delay: '0.4s', dur: '2.5s', opacity: 0.95, glow: true },
  { top: '50%', left: '36%', size: 1.5, delay: '1.7s', dur: '3.6s', opacity: 0.7 },
  { top: '56%', left: '70%', size: 2, delay: '0.9s', dur: '3.0s', opacity: 0.8 },
  { top: '60%', left: '86%', size: 1.5, delay: '2.1s', dur: '3.8s', opacity: 0.6 },
  { top: '58%', left: '18%', size: 2, delay: '1.5s', dur: '3.2s', opacity: 0.75 },
  { top: '54%', left: '28%', size: 1.5, delay: '0.7s', dur: '4.0s', opacity: 0.6 },
  { top: '64%', left: '44%', size: 2, delay: '1.3s', dur: '3.3s', opacity: 0.7 },
  { top: '62%', left: '62%', size: 1.5, delay: '2.0s', dur: '3.7s', opacity: 0.65 },
  { top: '66%', left: '78%', size: 2, delay: '0.5s', dur: '2.9s', opacity: 0.75 },
];

export const FractalGlassBg = ({ isLoaded = true }) => {
  return (
    <div
      className={`fractal-glass-root ${isLoaded ? 'fractal-glass-visible' : ''}`}
      aria-hidden="true"
    >
      {/* 1. Luminous Odyssey Teal Radial Nebula — Spreading UPWARDS ONLY (Color #1494B4) */}
      <div className="nebula-bottom-glow" />

      {/* 2. Crisp Pin-Sharp Celestial Star Dots in Deep Space (No Top Gradient) */}
      <div className="fractal-stars-container">
        {STAR_DATA.map((star, idx) => (
          <div
            key={`star-${idx}`}
            className={`fractal-star-dot ${star.glow ? 'has-glow' : ''}`}
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              '--star-dur': star.dur,
              '--star-delay': star.delay,
              '--star-opacity': star.opacity,
            }}
          />
        ))}
      </div>

      {/* 3. Bottom Curved Horizon Arc — Subtle, Soft Blurred & Delicate */}
      <div className="hero-bottom-arc-wrapper">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="hero-bottom-arc-svg"
        >
          <defs>
            {/* Horizontal gradient fading softly from both ends — subtle crest */}
            <linearGradient id="arcStrokeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1494B4" stopOpacity="0" />
              <stop offset="25%" stopColor="#1494B4" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#38d6f8" stopOpacity="0.4" />
              <stop offset="75%" stopColor="#1494B4" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#1494B4" stopOpacity="0" />
            </linearGradient>

            {/* Soft optical blur filter for the arc edge */}
            <filter id="arcGlow" x="-10%" y="-40%" width="120%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Soft blurred ambient glow along the arc */}
          <path
            d="M0,90 Q720,0 1440,90"
            fill="none"
            stroke="url(#arcStrokeGrad)"
            strokeWidth="1.8"
            filter="url(#arcGlow)"
          />

          {/* Soft specular hairline along the crest */}
          <path
            d="M0,90 Q720,0 1440,90"
            fill="none"
            stroke="url(#arcStrokeGrad)"
            strokeWidth="0.75"
          />

          {/* Solid fill blending seamlessly into the next section */}
          <path
            d="M0,90 Q720,0 1440,90 L1440,90 L0,90 Z"
            fill="#05070A"
          />
        </svg>
      </div>

      {/* 4. Bottom Gradient Fade Mask Layer */}
      <div className="hero-bottom-fade-mask" />
    </div>
  );
};
