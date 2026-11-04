import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Atom,
  Boxes,
  Camera,
  Palette,
  Activity,
  Store,
  Microscope,
  Brain,
  Utensils,
} from 'lucide-react';
import { CardSpaceStarfield } from '../../../components/ui';
import './EventHighlightsSection.css';

const HIGHLIGHTS_DATA = [
  {
    num: '01',
    title: 'STEAMSCAPE',
    subtitle: 'Flagship Showcase',
    description:
      'Discover innovative projects that showcase the fusion of science, technology, engineering, arts, and mathematics.',
    accentColor: '#38d6f8',
    Icon: Atom,
  },
  {
    num: '02',
    title: 'Prototype Quest',
    subtitle: 'Design Thinking Sprint',
    description:
      'Apply design thinking to create innovative models that showcase how ideas can take shape and solve real-world challenges.',
    accentColor: '#D34E3F',
    Icon: Boxes,
  },
  {
    num: '03',
    title: 'What would you fix?',
    subtitle: 'Photography Contest',
    description:
      'Look around you. If you could fix ONE thing in the world you see, what would it be?',
    accentColor: '#D75E30',
    Icon: Camera,
  },
  {
    num: '04',
    title: 'See the Problem. Imagine the Possibility',
    subtitle: 'Art Competition',
    description:
      'Students explore a problem and create/draw a mood board showing their solution.',
    accentColor: '#F5D6BA',
    Icon: Palette,
  },
  {
    num: '05',
    title: 'Problem to Solution',
    subtitle: 'Gymnastics Display',
    description: 'The Big Fix Through Movement',
    accentColor: '#ef4444',
    Icon: Activity,
  },
  {
    num: '06',
    title: 'Pure bazaar',
    subtitle: 'Student Marketplace',
    description:
      'A lively student marketplace where young entrepreneurs showcase, market, and sell their own creative products and ideas.',
    accentColor: '#f97316',
    Icon: Store,
  },
  {
    num: '07',
    title: "NEXTER'S LABORATORY",
    subtitle: 'Hands-On Science Lab',
    description:
      'Dive into hands-on science projects where budding scientists explore, experiment, and engage with interactive models, quizzes, and puzzles, breaking codes as they unlock the wonders of science and innovation.',
    accentColor: '#1494B4',
    Icon: Microscope,
  },
  {
    num: '08',
    title: 'Psych it out',
    subtitle: 'Interactive Psychology',
    description: "What if the problem isn't the problem?",
    accentColor: '#fed7aa',
    Icon: Brain,
  },
  {
    num: '09',
    title: 'Food Area',
    subtitle: 'Community Dining & Vendors',
    description:
      'Enjoy delicious offerings from local vendors, fueling your creativity throughout the day.',
    accentColor: '#fb923c',
    Icon: Utensils,
  },
];

export const EventHighlightsSection = () => {
  const sectionRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // One-time scroll reveal observer for Event Overview text
  const overviewRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  // Sticky dock state: visible when user is scrolled inside #highlights
  const [isDockVisible, setIsDockVisible] = useState(false);

  // Active highlighted module (defaults to 0: STEAMSCAPE)
  const [activeIndex, setActiveIndex] = useState(0);

  // Physical mouse tracking for macOS dock magnification physics
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // IntersectionObserver for 1-time text reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (overviewRef.current) {
      observer.observe(overviewRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Monitor scroll position to control sticky dock appearance
  useEffect(() => {
    const checkDockVisibility = () => {
      if (!sectionRef.current) return;
      // Dock is strictly desktop-only: mobile (< 769px) has full cards list laid out
      if (typeof window !== 'undefined' && window.innerWidth <= 768) {
        setIsDockVisible(false);
        return;
      }
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Section is active on screen: dock should appear smoothly
      // Visible once the header approaches viewport, disappears once past section bottom
      const inView = rect.top < windowHeight * 0.75 && rect.bottom > windowHeight * 0.25;
      setIsDockVisible(inView);
    };

    window.addEventListener('scroll', checkDockVisibility, { passive: true });
    window.addEventListener('resize', checkDockVisibility, { passive: true });
    checkDockVisibility();

    return () => {
      window.removeEventListener('scroll', checkDockVisibility);
      window.removeEventListener('resize', checkDockVisibility);
    };
  }, []);

  const activeItem = HIGHLIGHTS_DATA[activeIndex] || HIGHLIGHTS_DATA[0];

  return (
    <section id="highlights" ref={sectionRef} className="highlights-section-root">
      {/* Ambient background horizon glow */}
      <div className="highlights-ambient-glow" aria-hidden="true" />

      <div className="highlights-container">
        {/* =========================================================
            1. EVENT OVERVIEW: CENTER-ALIGNED TEXT (NOT A CARD)
            With one-time reveal animation & dark glassmorphic pills
            ========================================================= */}
        <div
          ref={overviewRef}
          className={`overview-text-section ${isRevealed ? 'is-revealed' : ''}`}
        >
          <div className="overview-eyebrow-pill">
            <span className="overview-eyebrow-text">Event Overview &bull; Odyssey 2027</span>
          </div>

          <h2 className="overview-heading">
            Event <span className="overview-heading-accent">Overview</span>
          </h2>

          <p className="overview-body-text">
            Odyssey, our flagship STEAM event, organized by The Next School for the Next Schools, features two exciting parts: project exhibition and team challenges.
          </p>

          <div className="overview-parts-row">
            <div className="overview-part-pill">
              <span className="overview-part-tag">Part 01</span>
              <span className="overview-part-label">Project Exhibition</span>
            </div>
            <div className="overview-part-pill">
              <span className="overview-part-tag">Part 02</span>
              <span className="overview-part-label">Team Challenges</span>
            </div>
          </div>
        </div>

        {/* =========================================================
            2. HIGHLIGHTS HEADER
            ========================================================= */}
        <div id="competitions" />
        <div className="highlights-header-wrap">
          <h2 className="highlights-title">
            Event <span className="highlights-title-accent">Highlights</span>
          </h2>

          {/* Pill with dark glassmorphism */}
          <div className="highlights-count-pill">
            <span>9 Flagship Experiences</span>
          </div>
        </div>

        {/* =========================================================
            3. DESKTOP: POP-UP MODULE CARD + STICKY MACOS DOCK
            ========================================================= */}
        <div className="desktop-dock-experience">
          {/* POP-UP PREVIEW CARD (Displays active module info with refined glass styling) */}
          <div className="dock-popup-stage">
            <div
              key={`popup-${activeIndex}`}
              className="dock-popup-card"
            >
              {/* Space Theme Starfield with Dots Twinkling in Light */}
              <CardSpaceStarfield />

              <div className="dock-popup-top">
                <div className="dock-popup-badge-group">
                  <span className="dock-popup-num">
                    {activeItem.num}
                  </span>
                  <span className="dock-popup-subtitle">
                    {activeItem.subtitle}
                  </span>
                </div>

                <div
                  className="dock-popup-icon-box"
                  aria-hidden="true"
                >
                  <activeItem.Icon className="dock-popup-icon-svg" strokeWidth={1.75} />
                </div>
              </div>

              <div className="dock-popup-body">
                <h3 className="dock-popup-title">{activeItem.title}</h3>
                <p className="dock-popup-desc">{activeItem.description}</p>
              </div>

              {/* Minimal Monochrome Watermark Vector at Bottom Right */}
              <div
                className="dock-popup-watermark"
                aria-hidden="true"
              >
                <activeItem.Icon strokeWidth={1.1} />
              </div>
            </div>
          </div>

          {/* THE STICKY MACOS GLASS DOCK TRAY: Rendered via Portal to document.body
              so it is never trapped in section stacking contexts and animates cleanly on top */}
          {mounted &&
            createPortal(
              <div
                className={`dock-sticky-anchor ${
                  isDockVisible ? 'dock-sticky-visible' : 'dock-sticky-hidden'
                }`}
              >
                <div
                  className="macos-dock-tray"
                  onMouseLeave={() => setHoveredIndex(null)}
                  role="toolbar"
                  aria-label="Module Dock"
                >
                  {HIGHLIGHTS_DATA.map((item, idx) => {
                    // Physical magnification ONLY occurs when user hovers over the dock
                    let scale = 1;
                    let translateY = 0;
                    let zIndex = 10;

                    if (hoveredIndex !== null) {
                      const dist = Math.abs(hoveredIndex - idx);
                      if (dist === 0) {
                        scale = 1.38;
                        translateY = -14;
                        zIndex = 30;
                      } else if (dist === 1) {
                        scale = 1.18;
                        translateY = -7;
                        zIndex = 20;
                      } else if (dist === 2) {
                        scale = 1.06;
                        translateY = -3;
                        zIndex = 15;
                      }
                    }

                    const isActive = activeIndex === idx;
                    const isHovered = hoveredIndex === idx;

                    return (
                      <div
                        key={`dock-item-${idx}`}
                        className={`dock-item-wrapper ${isActive ? 'is-active' : ''} ${isHovered ? 'is-hovered' : ''}`}
                        onMouseEnter={() => {
                          setHoveredIndex(idx);
                          setActiveIndex(idx);
                        }}
                        onClick={() => setActiveIndex(idx)}
                      >
                        {/* Clean Dark Glass Tooltip on hover */}
                        <div className="dock-item-tooltip">
                          {item.title}
                        </div>

                        {/* Magnified & Popped Up Tile Container */}
                        <div
                          className="dock-item-tile-animator"
                          style={{
                            transform: `scale(${scale}) translateY(${translateY}px)`,
                            zIndex: zIndex,
                          }}
                        >
                          <div
                            className="dock-item-tile"
                            aria-hidden="true"
                          >
                            <item.Icon className="dock-tile-icon-svg" strokeWidth={1.65} />
                          </div>
                        </div>

                        {/* Anchored Dock Floor Dot — refined minimal white pill */}
                        <div
                          className={`dock-active-dot ${isActive ? 'dot-active' : ''}`}
                          aria-hidden="true"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>,
              document.body
            )}
        </div>

        {/* =========================================================
            4. MOBILE SCREENS: CLEAN RESPONSIVE CARDS (WITH ACCENTS)
            ========================================================= */}
        <div className="mobile-cards-grid">
          {HIGHLIGHTS_DATA.map((item, idx) => (
            <div
              key={`mobile-card-${idx}`}
              className="mobile-card"
            >
              <CardSpaceStarfield />
              <div className="mobile-card-top">
                <span className="mobile-num-pill">
                  {item.num}
                </span>
                <div
                  className="mobile-icon-box"
                  aria-hidden="true"
                >
                  <item.Icon className="mobile-icon-svg" strokeWidth={1.75} />
                </div>
              </div>

              <div className="mobile-card-content">
                <h3 className="mobile-card-title">{item.title}</h3>
                <span className="mobile-card-subtitle">{item.subtitle}</span>
                <p className="mobile-card-desc">{item.description}</p>
              </div>

              {/* Mobile Subtle Watermark */}
              <div
                className="mobile-watermark-wrap"
                aria-hidden="true"
              >
                <item.Icon strokeWidth={1.1} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
