import React, { useEffect } from 'react';
import {
  EventsHeroSection,
  SteamscapeSection,
  PrototypeQuestSection,
  PhotographySection,
  GymnasticsSection,
  ArtCompetitionSection,
  PureBazaarSection,
  OtherHighlightsSection,
} from './sections';
import './EventsPage.css';

export const EventsPage = ({ onOpenMenu }) => {
  // Ensure page starts at top upon mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="events-page-main">
      {/* Section 1: Page Hero & Quick Jump Navigation */}
      <EventsHeroSection onOpenMenu={onOpenMenu} />

      {/* Section 2: STEAMSCAPE Flagship Exhibition */}
      <SteamscapeSection />

      {/* Section 3: Prototype Quest: The Big Fix Challenge */}
      <PrototypeQuestSection />

      {/* Section 4: Photography Exhibition: What Would You Fix? */}
      <PhotographySection />

      {/* Section 5: Gymnastics Display: The Big Fix Through Movement */}
      <GymnasticsSection />

      {/* Section 6: Art Competition: See the Problem. Imagine the Possibility */}
      <ArtCompetitionSection />

      {/* Section 7: Pure Bazaar: Student Entrepreneurship */}
      <PureBazaarSection />

      {/* Section 8: Other Event Highlights & Implementation Note */}
      <OtherHighlightsSection />
    </main>
  );
};

