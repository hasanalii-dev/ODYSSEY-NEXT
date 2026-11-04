import React, { useState, useEffect } from 'react';
import './BlockLoader.css';

// 9 Constellation Stars (Nodes) mapped to 320x320 SVG space (Representing the 9 Experiences)
const CONSTELLATION_STARS = [
  { id: 'polaris', cx: 160, cy: 46, r: 3.4, isMajor: true, delay: '0.12s' },
  { id: 'shoulder-left', cx: 96, cy: 102, r: 2.4, isMajor: false, delay: '0.22s' },
  { id: 'shoulder-right', cx: 224, cy: 102, r: 2.4, isMajor: false, delay: '0.25s' },
  { id: 'heart', cx: 160, cy: 156, r: 3.8, isMajor: true, delay: '0.35s' },
  { id: 'wing-left', cx: 52, cy: 178, r: 2.2, isMajor: false, delay: '0.45s' },
  { id: 'wing-right', cx: 268, cy: 178, r: 2.2, isMajor: false, delay: '0.48s' },
  { id: 'core-lower', cx: 160, cy: 224, r: 2.6, isMajor: false, delay: '0.58s' },
  { id: 'anchor-left', cx: 108, cy: 274, r: 2.3, isMajor: false, delay: '0.70s' },
  { id: 'anchor-right', cx: 212, cy: 274, r: 2.3, isMajor: false, delay: '0.72s' },
];

// Luminous celestial connection lines with sequential draw delays
const CONSTELLATION_LINES = [
  // Central vertical spine
  { id: 'spine-top', x1: 160, y1: 46, x2: 160, y2: 156, delay: '0.38s', duration: '0.5s' },
  // Upper triangle
  { id: 'top-left', x1: 160, y1: 46, x2: 96, y2: 102, delay: '0.42s', duration: '0.45s' },
  { id: 'top-right', x1: 160, y1: 46, x2: 224, y2: 102, delay: '0.44s', duration: '0.45s' },
  { id: 'shoulder-l-to-heart', x1: 96, y1: 102, x2: 160, y2: 156, delay: '0.56s', duration: '0.42s' },
  { id: 'shoulder-r-to-heart', x1: 224, y1: 102, x2: 160, y2: 156, delay: '0.58s', duration: '0.42s' },
  // Lateral wings
  { id: 'shoulder-l-to-wing', x1: 96, y1: 102, x2: 52, y2: 178, delay: '0.68s', duration: '0.45s' },
  { id: 'shoulder-r-to-wing', x1: 224, y1: 102, x2: 268, y2: 178, delay: '0.70s', duration: '0.45s' },
  { id: 'wing-l-to-heart', x1: 52, y1: 178, x2: 160, y2: 156, delay: '0.80s', duration: '0.42s' },
  { id: 'wing-r-to-heart', x1: 268, y1: 178, x2: 160, y2: 156, delay: '0.82s', duration: '0.42s' },
  // Lower spine & anchor base
  { id: 'heart-to-lower', x1: 160, y1: 156, x2: 160, y2: 224, delay: '0.90s', duration: '0.40s' },
  { id: 'lower-to-anchor-l', x1: 160, y1: 224, x2: 108, y2: 274, delay: '1.02s', duration: '0.42s' },
  { id: 'lower-to-anchor-r', x1: 160, y1: 224, x2: 212, y2: 274, delay: '1.04s', duration: '0.42s' },
  { id: 'anchor-base-cross', x1: 108, y1: 274, x2: 212, y2: 274, delay: '1.14s', duration: '0.38s' },
];

// Fixed scattered ambient stars across deep space backdrop
const AMBIENT_STARS = [
  { x: 12, y: 18, size: 1.1, dur: 2.1, delay: 0.1 },
  { x: 22, y: 35, size: 1.4, dur: 1.8, delay: 0.5 },
  { x: 8, y: 62, size: 0.9, dur: 2.4, delay: 0.8 },
  { x: 28, y: 80, size: 1.2, dur: 2.0, delay: 0.3 },
  { x: 86, y: 16, size: 1.3, dur: 2.2, delay: 0.4 },
  { x: 78, y: 42, size: 1.0, dur: 1.9, delay: 0.7 },
  { x: 92, y: 68, size: 1.5, dur: 2.5, delay: 0.2 },
  { x: 82, y: 88, size: 0.9, dur: 2.1, delay: 0.9 },
  { x: 38, y: 12, size: 1.2, dur: 1.7, delay: 0.6 },
  { x: 64, y: 10, size: 1.0, dur: 2.3, delay: 0.3 },
  { x: 42, y: 92, size: 1.3, dur: 1.8, delay: 0.4 },
  { x: 62, y: 90, size: 1.1, dur: 2.0, delay: 0.8 },
  { x: 18, y: 72, size: 0.8, dur: 2.6, delay: 0.2 },
  { x: 74, y: 25, size: 1.2, dur: 1.9, delay: 0.5 },
  { x: 32, y: 55, size: 0.9, dur: 2.2, delay: 1.0 },
  { x: 70, y: 60, size: 1.0, dur: 2.1, delay: 0.6 },
  { x: 88, y: 38, size: 1.2, dur: 2.4, delay: 0.1 },
  { x: 15, y: 86, size: 1.1, dur: 1.8, delay: 0.7 },
];

export const BlockLoader = ({ onComplete }) => {
  const [hiding, setHiding] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Stage 1: Constellation aligns at 1850ms, unleash cosmic warp out animation & wake up hero
    const timer1 = setTimeout(() => {
      setHiding(true);
      if (onComplete) onComplete();
    }, 1850);

    // Stage 2: Completely hide after the 650ms hyperwarp out animation completes
    const timer2 = setTimeout(() => {
      setRemoved(true);
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []); // Run once on mount

  return (
    <div
      id="loader-wrapper"
      className={`${hiding ? 'loader-hidden' : ''} ${removed ? 'loader-removed' : ''}`}
      style={{ display: removed ? 'none' : 'flex' }}
      aria-hidden={hiding}
    >
      {/* Matte Obsidian Backdrop */}
      <div className="loader-backdrop" />

      {/* Atmospheric Celestial Core Glow */}
      <div className="loader-nebula-glow" />

      {/* Ambient Deep Space Twinkling Stars */}
      <div className="loader-ambient-sky">
        {AMBIENT_STARS.map((s, idx) => (
          <div
            key={`amb-${idx}`}
            className="loader-ambient-star"
            style={{
              top: `${s.y}%`,
              left: `${s.x}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDuration: `${s.dur}s`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Centered Constellation Formation (NO LOGO) */}
      <div className="loader-content">
        <div className="constellation-stage">
          <svg
            viewBox="0 0 320 320"
            className="constellation-svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Constellation Connecting Energy Lines */}
            <g className="constellation-lines-group" filter="url(#lineGlow)">
              {CONSTELLATION_LINES.map((line) => (
                <line
                  key={line.id}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  pathLength="1"
                  className="constellation-line"
                  style={{
                    animationDelay: line.delay,
                    animationDuration: line.duration,
                  }}
                />
              ))}
            </g>

            {/* Diffraction Sparkle Cross Spikes on Polaris (160, 46) & Heart (160, 156) */}
            <g className="constellation-spikes-group">
              {/* Polaris Spikes */}
              <polygon
                points="160,32 161.4,45 174,46 161.4,47 160,60 158.6,47 146,46 158.6,45"
                className="constellation-spike spike-polaris"
              />
              {/* Heart Spikes */}
              <polygon
                points="160,138 161.8,154.5 178,156 161.8,157.5 160,174 158.2,157.5 142,156 158.2,154.5"
                className="constellation-spike spike-heart"
              />
            </g>

            {/* Constellation Star Nodes */}
            <g className="constellation-stars-group" filter="url(#starGlow)">
              {CONSTELLATION_STARS.map((star) => (
                <g key={star.id} className="constellation-star-wrap">
                  {/* Outer pulse aura */}
                  <circle
                    cx={star.cx}
                    cy={star.cy}
                    r={star.r * 2.4}
                    className="star-node-aura"
                    style={{ animationDelay: star.delay }}
                  />
                  {/* Brilliant core */}
                  <circle
                    cx={star.cx}
                    cy={star.cy}
                    r={star.r}
                    className={`star-node-core ${star.isMajor ? 'star-node-major' : ''}`}
                    style={{ animationDelay: star.delay }}
                  />
                </g>
              ))}
            </g>
          </svg>
        </div>

        {/* Minimalist Celestial Caption */}
        <div className="constellation-caption">
          <span className="constellation-caption-title">ODYSSEY 2027</span>
          <span className="constellation-caption-sub">THE BIG FIX</span>
        </div>
      </div>
    </div>
  );
};
