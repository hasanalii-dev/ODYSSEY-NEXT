import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck, Store, CheckSquare, Sparkles } from 'lucide-react';
import { triggerHaptic } from '../../../utils/haptics';
import './ApplicationFormSection.css';

export const ApplicationFormSection = () => {
  return (
    <section className="app-form-section" id="application-form">
      <div className="app-form-container">
        {/* Section Header */}
        <div className="app-form-header">
          <div className="app-form-eyebrow">
            <span className="app-form-eyebrow-dot" />
            <span>OFFICIAL ACCESS PORTALS</span>
          </div>

          <h2 className="app-form-title">
            Application <span className="app-form-title-accent">Form</span>
          </h2>

          <p className="app-form-body">
            This application is exclusively for students of The Next School network.
          </p>

          <p className="app-form-body-sub">
            Please complete all required fields and ensure that your information is accurate.
          </p>
        </div>

        {/* Dual Access Grid: Student Form + Vendor Registration */}
        <div className="app-portal-grid">
          {/* 1. Student Application Form (Primary) */}
          <div className="app-portal-card student-card">
            <div className="app-portal-badge student">
              <ShieldCheck size={14} />
              <span>THE NEXT SCHOOL STUDENTS</span>
            </div>

            <h3 className="app-portal-heading">Google Application Form</h3>

            <p className="app-portal-description">
              The official portal for all Next School student innovators. Submit your team roster,
              subtheme selection, and attach your completed proposal template.
            </p>

            <ul className="app-portal-checklist">
              <li>
                <CheckSquare size={16} />
                <span>Exclusively for The Next School network</span>
              </li>
              <li>
                <CheckSquare size={16} />
                <span>Attach your completed Proposal (.DOCX)</span>
              </li>
              <li>
                <CheckSquare size={16} />
                <span>Verification required via school credentials</span>
              </li>
            </ul>

            <a
              href="https://forms.gle/YJ5Kq8DQetGw3hKh6"
              target="_blank"
              rel="noopener noreferrer"
              className="app-portal-btn primary"
              onClick={() => triggerHaptic('pop')}
            >
              <span>Launch Student Form</span>
              <ExternalLink size={16} />
            </a>
          </div>

          {/* 2. Vendor Registration Form (Commercial & Partner Access) */}
          <div className="app-portal-card vendor-card">
            <div className="app-portal-badge vendor">
              <Store size={14} />
              <span>PARTNERS & EXHIBITORS</span>
            </div>

            <h3 className="app-portal-heading">Vendor Registration Form</h3>

            <p className="app-portal-description">
              Food stall partners, merchandise vendors, STEAM demonstrators, and corporate sponsors
              can register their booths and experiential spaces for Odyssey 2027.
            </p>

            <ul className="app-portal-checklist">
              <li>
                <CheckSquare size={16} />
                <span>Food & beverage stall applications</span>
              </li>
              <li>
                <CheckSquare size={16} />
                <span>Pure Bazaar exhibition booth allotment</span>
              </li>
              <li>
                <CheckSquare size={16} />
                <span>Event sponsorship & partner inquiries</span>
              </li>
            </ul>

            <a
              href="https://forms.gle/PtY3zXrERCyYkw8Z6"
              target="_blank"
              rel="noopener noreferrer"
              className="app-portal-btn secondary"
              onClick={() => triggerHaptic('selection')}
            >
              <span>Launch Vendor Form</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

