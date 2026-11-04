import React, { useEffect } from 'react';
import {
  GalleryHeroSection,
  GalleryGridSection,
  GalleryClosingSection,
} from './sections';
import './GalleryPage.css';

export const GalleryPage = ({ onOpenMenu }) => {
  // Ensure page starts at top upon mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="gallery-page-main">
      {/* Section 1: Page Hero & Section 2: Introduction */}
      <GalleryHeroSection onOpenMenu={onOpenMenu} />

      {/* Section 3: Gallery Categories & Interactive Exhibition Grid */}
      <GalleryGridSection />

      {/* Section 4: Closing Statement & Archival Notice */}
      <GalleryClosingSection />
    </main>
  );
};

