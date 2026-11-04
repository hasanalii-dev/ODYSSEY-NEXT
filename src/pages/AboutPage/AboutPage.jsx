import React, { useEffect } from 'react';
import {
  AboutHeroSection,
  AboutOverviewSection,
  TheBigFixSection,
  EventPartsSection,
  WelcomeOutroSection,
} from './sections';
import './AboutPage.css';

export const AboutPage = ({ onOpenMenu }) => {
  // Ensure page begins at top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="about-page-main">
      {/* 1. Hero: About Odyssey & Odyssey 2027 with Top Navbar */}
      <AboutHeroSection onOpenMenu={onOpenMenu} />

      {/* 2. Event Overview */}
      <AboutOverviewSection />

      {/* 3. The Big Fix: Human Ingenuity & Student Problem Solvers */}
      <TheBigFixSection />

      {/* 4. Two Exciting Parts: Project Exhibition & Team Challenges */}
      <EventPartsSection />

      {/* 5. Welcome to The Big Fix: Community Outro & Possibilities */}
      <WelcomeOutroSection />
    </main>
  );
};
