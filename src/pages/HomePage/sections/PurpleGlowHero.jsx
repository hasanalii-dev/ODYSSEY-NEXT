import React from 'react';
import elipseSvg from '../../../assets/elipse.svg';
import './PurpleGlowHero.css';

export const PurpleGlowHero = () => {
  return (
    <header className="purple-hero-root" id="hero">
      {/* =========================================================
          1. GLOWING PURPLE / VIOLET ELLIPSE BACKGROUND
          Directly uses assets/elipse.svg
          ========================================================= */}
      <img
        src={elipseSvg}
        alt=""
        aria-hidden="true"
        className="purple-ellipse-bg"
      />
      <div className="purple-ambient-fallback" aria-hidden="true" />

      {/* Subtle Star Sparkle Dots */}
      <div className="sparkle-dot" style={{ top: '22%', right: '40%' }} />
      <div className="sparkle-dot" style={{ top: '42%', right: '43%' }} />
      <div className="sparkle-dot" style={{ top: '42%', right: '32%' }} />
      <div className="sparkle-dot" style={{ bottom: '38%', left: '35%' }} />

      {/* =========================================================
          2. TOP NAVIGATION BAR (WITH OUR OFFICIAL LOGO)
          ========================================================= */}
      <nav className="purple-nav" aria-label="Main Navigation">
        {/* Brand Logo: Our Official Odyssey / The Next School Logo */}
        <a href="#" className="purple-logo" title="Odyssey '27">
          <img
            src="/img/odessey-logo1.png"
            alt="Odyssey Logo"
            className="w-8 h-8 object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-display font-black text-base md:text-lg tracking-tight text-white">
              ODYSSEY &apos;27
            </span>
            <span className="text-[9px] font-mono tracking-widest uppercase text-slate-400">
              The Next School
            </span>
          </div>
        </a>

        {/* Center Navigation Links */}
        <div className="purple-nav-links">
          <a href="#overview" className="purple-nav-link">
            Home
          </a>
          <a href="#highlights" className="purple-nav-link">
            About us
          </a>
          <a href="#competitions" className="purple-nav-link">
            Research area
          </a>
        </div>

        {/* Right Action CTA & Circular Menu Button */}
        <div className="purple-nav-actions">
          <a href="#participation" className="purple-nav-talk">
            LET&apos;S TALK
          </a>
          <button
            type="button"
            className="purple-menu-btn"
            aria-label="Toggle navigation menu"
          >
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="1" x2="18" y2="1" stroke="currentColor" strokeWidth="2" />
              <line y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth="2" />
              <line y1="11" x2="18" y2="11" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </nav>

      {/* =========================================================
          3. MAIN HERO HEADLINE
          Exact user content with tall condensed typography and ® / ■ accents
          ========================================================= */}
      <div className="purple-headline-wrapper">
        <h1 className="purple-headline-text">
          THE BIG FIX.
          <span className="accent-r-badge" aria-label="Registered">®</span>
          <br />
          BIG PROBLEMS.
          <span className="accent-grey-square" aria-hidden="true" />
          <br />
          BOLD SOLUTIONS.
        </h1>
      </div>

      {/* =========================================================
          4. MID ROW: INDEX 001 + EXACT SUB-PARAGRAPHS + ROTATING BADGE
          ========================================================= */}
      <div className="purple-mid-row">
        {/* Left: Index number */}
        <div className="purple-index-tag">001</div>

        {/* Center: Exact Sub-paragraphs */}
        <div className="purple-subcontent">
          <p className="purple-lead-paragraph">
            The Next School is excited to bring back Odyssey, where Science, Technology,
            Engineering, Arts, and Mathematics (STEAM) unite to tackle today’s environmental
            challenges!
          </p>
          <p className="purple-body-paragraph">
            This year, we celebrate The Big Fix: exploring how human ingenuity can transform
            everyday problems into meaningful solutions. Discover how science, technology,
            engineering, and creativity come together to tackle the challenges around us, from
            healthier lives and safer communities to smarter cities and a more sustainable future.
          </p>
        </div>

        {/* Right: Rotating "SCROLL DOWN" circular badge */}
        <div className="scroll-badge-wrapper">
          <svg className="scroll-badge-svg" viewBox="0 0 120 120">
            <path
              id="circlePath"
              d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
              fill="none"
            />
            <text fill="#cbd5e1" fontSize="9.5" fontFamily="Space Grotesk, monospace" letterSpacing="2.2">
              <textPath href="#circlePath" startOffset="0%">
                &bull; SCROLL DOWN &bull; SCROLL DOWN &bull;
              </textPath>
            </text>
          </svg>
          <div className="scroll-badge-arrow">
            &darr;
          </div>
        </div>
      </div>

      {/* =========================================================
          5. BOTTOM PARTNER / HOSPITAL LOGOS RIBBON
          Matches the reference image monochrome logo bar
          ========================================================= */}
      <div className="purple-logos-ribbon">
        {/* Logo 1: Gouverneur Hospital */}
        <div className="partner-logo-item">
          <div className="partner-logo-text font-serif italic text-base">
            Gouverneur<br />
            <span className="text-xs uppercase tracking-wider not-italic font-sans">Hospital</span>
          </div>
        </div>

        {/* Logo 2: Sierra Vista Hospital */}
        <div className="partner-logo-item">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15 8H9L12 2ZM6 14L9 8H3L6 14ZM18 14L21 8H15L18 14ZM12 22L15 16H9L12 22Z"/>
            </svg>
            <div className="partner-logo-text">
              <strong className="tracking-wide text-xs">Sierra Vista</strong><br />
              <span className="text-[9px] uppercase tracking-widest text-slate-400">Hospital</span>
            </div>
          </div>
        </div>

        {/* Logo 3: Boston Children's Hospital */}
        <div className="partner-logo-item">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full border border-white/60 flex items-center justify-center text-[10px]">
              &hearts;
            </div>
            <div className="partner-logo-text">
              <strong className="text-xs">Boston Children&apos;s</strong><br />
              <span className="text-[9px] uppercase tracking-widest text-slate-400">Hospital</span>
            </div>
          </div>
        </div>

        {/* Logo 4: Barton Heights Veterinary Hospital */}
        <div className="partner-logo-item">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 7V17M7 12H17"/>
            </svg>
            <div className="partner-logo-text">
              <strong className="text-xs uppercase tracking-wider">BARTON HEIGHTS</strong><br />
              <span className="text-[9px] uppercase tracking-widest text-slate-400">VETERINARY HOSPITAL</span>
            </div>
          </div>
        </div>

        {/* Logo 5: Belleville General Hospital Foundation */}
        <div className="partner-logo-item">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 flex items-center justify-center text-[#94a3b8]">
              &#10047;
            </div>
            <div className="partner-logo-text">
              <strong className="text-xs">Belleville General</strong><br />
              <span className="text-[9px] uppercase tracking-widest text-slate-400">Hospital Foundation</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
