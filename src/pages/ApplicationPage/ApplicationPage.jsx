import React, { useEffect } from 'react';
import {
  ApplicationHeroSection,
  ApplicationStepsSection,
  ProposalTemplateSection,
  ApplicationFormSection,
  ApplicationClosingSection,
} from './sections';
import './ApplicationPage.css';

export const ApplicationPage = ({ onOpenMenu }) => {
  // Ensure page starts at top upon mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="app-page-main">
      {/* Section 1: Page Hero & Internal Portal Introduction */}
      <ApplicationHeroSection onOpenMenu={onOpenMenu} />

      {/* Section 4: Submission Process (How to Apply) */}
      <ApplicationStepsSection />

      {/* Section 3: Proposal Template (.DOCX Download) */}
      <ProposalTemplateSection />

      {/* Section 2: Application Form (Student Form + Vendor Form) */}
      <ApplicationFormSection />

      {/* Section 5: Ethos Closing Statement */}
      <ApplicationClosingSection />
    </main>
  );
};

