import React from 'react';
import {
  HeroSection,
  TextRevealSection,
  EventOverviewSection,
  EventHighlightsSection,
  ParticipationRegistrationSection,
} from './sections';
import './HomePage.css';

export const HomePage = ({ isLoaded, onOpenMenu }) => {
  return (
    <main className="homepage-main">
      {/* 1. Hero: iOS Blur Fade Up Single Hero */}
      <HeroSection isLoaded={isLoaded} onOpenMenu={onOpenMenu} />

      {/* 2. Text Reveal Section: Only text with scroll reveal animation */}
      <TextRevealSection />

      {/* 3. Event Overview */}
      <EventOverviewSection />

      {/* 4. Event Highlights & Flagship Experiences */}
      <EventHighlightsSection />

      {/* 5. Participation and Registrations */}
      <ParticipationRegistrationSection />
    </main>
  );
};
