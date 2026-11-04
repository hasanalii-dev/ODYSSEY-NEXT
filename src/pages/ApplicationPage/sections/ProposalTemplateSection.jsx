import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, AlertCircle } from 'lucide-react';
import { triggerHaptic } from '../../../utils/haptics';
import './ProposalTemplateSection.css';

export const ProposalTemplateSection = () => {
  return (
    <section className="app-proposal-section" id="proposal-template">
      <div className="app-proposal-container">
        {/* Section Header */}
        <div className="app-proposal-header">
          <div className="app-proposal-eyebrow">
            <span className="app-proposal-eyebrow-dot" />
            <span>REQUIRED DOCUMENTATION</span>
          </div>

          <h2 className="app-proposal-title">
            Odyssey Proposal <span className="app-proposal-title-accent">Template</span>
          </h2>

          <p className="app-proposal-body">
            Download the editable proposal template and customise it with your personal information and project-related details.
          </p>

          <p className="app-proposal-body-sub">
            Once completed, upload your proposal along with your application.
          </p>
        </div>

        {/* Central Proposal Download Card */}
        <div className="app-proposal-card">
          <div className="app-proposal-card-left">
            <div className="app-proposal-icon-box">
              <FileText size={30} />
              <span className="app-doc-badge">.DOCX</span>
            </div>

            <div className="app-proposal-card-meta">
              <span className="app-file-type">EDITABLE MICROSOFT WORD DOCUMENT</span>
              <h3 className="app-file-name">Prototype-proposal.docx</h3>
              <p className="app-file-desc">
                Contains official Odyssey 2027 design sprint prompts, student subtheme sections, and technical submission guidelines.
              </p>
            </div>
          </div>

          <div className="app-proposal-card-right">
            <a
              href="/Prototype-proposal.docx"
              download="Prototype-proposal.docx"
              className="app-download-btn"
              onClick={() => triggerHaptic('selection')}
            >
              <Download size={18} />
              <span>Download Template</span>
            </a>
          </div>
        </div>

        {/* Important Submission Note (Red-Orange Accent, Zero Yellow) */}
        <div className="app-proposal-important">
          <div className="app-important-icon">
            <AlertCircle size={20} />
          </div>
          <div className="app-important-text">
            <strong>Important:</strong> Submit your completed proposal together with your application form.
          </div>
        </div>
      </div>
    </section>
  );
};
