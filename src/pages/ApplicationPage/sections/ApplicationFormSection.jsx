import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  ShieldCheck,
  CheckSquare,
  Sparkles,
  Users,
  Maximize2,
  ChevronDown,
} from 'lucide-react';
import { triggerHaptic } from '../../../utils/haptics';
import './ApplicationFormSection.css';

const PORTAL_TABS = [
  { id: 'all', label: 'All Portals' },
  { id: 'internal', label: 'Internal Students' },
  { id: 'external', label: 'External Participants' },
];

export const ApplicationFormSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [embeddedFormUrl, setEmbeddedFormUrl] = useState(null);

  const handleTabSelect = (tabId) => {
    triggerHaptic('selection');
    setActiveTab(tabId);
  };

  const showInternal = activeTab === 'all' || activeTab === 'internal';
  const showExternal = activeTab === 'all' || activeTab === 'external';

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
            Application <span className="app-form-title-accent">Forms</span>
          </h2>

          <p className="app-form-body">
            Official registration and submission portals for internal students and external challenge teams.
          </p>

          <p className="app-form-body-sub">
            Please select your respective category below and complete all required verification fields accurately.
          </p>
        </div>

        {/* Portal Filter Tabs */}
        <div className="app-portal-tabs" role="tablist" aria-label="Application Categories">
          {PORTAL_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => handleTabSelect(tab.id)}
                className={`app-portal-tab-pill ${isActive ? 'active' : ''}`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Triple Access Grid: Internal Student + External Prototype Quest + Vendor */}
        <div className="app-portal-grid">
          {/* 1. Internal Student Application Form (The Next School Students Only) */}
          {showInternal && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="app-portal-card student-card"
            >
              <div className="app-portal-badge student">
                <ShieldCheck size={14} />
                <span>INTERNAL NETWORK USE ONLY</span>
              </div>

              <h3 className="app-portal-heading">Odyssey Student Application</h3>

              <p className="app-portal-description">
                Exclusively for students of The Next School network. Complete your application, register your project team, and upload your customised project proposal.
              </p>

              <ul className="app-portal-checklist">
                <li>
                  <CheckSquare size={16} />
                  <span>Exclusively for The Next School network</span>
                </li>
                <li>
                  <CheckSquare size={16} />
                  <span>Attach completed Proposal (.DOCX)</span>
                </li>
                <li>
                  <CheckSquare size={16} />
                  <span>Internal campus authentication required</span>
                </li>
                <li>
                  <CheckSquare size={16} />
                  <span>Free registration for internal students</span>
                </li>
              </ul>

              <div className="app-portal-card-footer">
                <a
                  href="https://forms.gle/YJ5Kq8DQetGw3hKh6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-portal-btn primary"
                  onClick={() => triggerHaptic('pop')}
                >
                  <span>Open Student Form</span>
                  <ExternalLink size={16} />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    triggerHaptic('selection');
                    setEmbeddedFormUrl(
                      embeddedFormUrl === 'https://forms.gle/YJ5Kq8DQetGw3hKh6'
                        ? null
                        : 'https://forms.gle/YJ5Kq8DQetGw3hKh6'
                    );
                  }}
                  className="app-portal-embed-toggle"
                >
                  <span>
                    {embeddedFormUrl === 'https://forms.gle/YJ5Kq8DQetGw3hKh6'
                      ? 'Hide Embedded View'
                      : 'Preview Form on Site'}
                  </span>
                  <ChevronDown
                    size={14}
                    style={{
                      transform:
                        embeddedFormUrl === 'https://forms.gle/YJ5Kq8DQetGw3hKh6'
                          ? 'rotate(180deg)'
                          : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                    }}
                  />
                </button>
              </div>
            </motion.div>
          )}

          {/* 2. External Participant Form (Prototype Quest for External Participants) */}
          {showExternal && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="app-portal-card external-card"
            >
              <div className="app-portal-badge external">
                <Users size={14} />
                <span>EXTERNAL PARTICIPANTS // OPEN ACCESS</span>
              </div>

              <h3 className="app-portal-heading">Prototype Quest for External Participants</h3>

              <p className="app-portal-description">
                Open to candidates, independent innovator teams, and guest school delegations from outside the organization competing in Prototype Quest: The Big Fix.
              </p>

              <ul className="app-portal-checklist">
                <li>
                  <CheckSquare size={16} />
                  <span>Accessible to candidates outside the organization</span>
                </li>
                <li>
                  <CheckSquare size={16} />
                  <span>Registration Fee: PKR 8,000/- per team</span>
                </li>
                <li>
                  <CheckSquare size={16} />
                  <span>Submit responses directly through official form</span>
                </li>
                <li>
                  <CheckSquare size={16} />
                  <span>Official design sprint mentorship &amp; judging</span>
                </li>
              </ul>

              <div className="app-portal-card-footer">
                <a
                  href="https://forms.gle/oXR65aNEx2ZjSJsF9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-portal-btn primary external-btn"
                  onClick={() => triggerHaptic('pop')}
                >
                  <span>Open External Form</span>
                  <ExternalLink size={16} />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    triggerHaptic('selection');
                    setEmbeddedFormUrl(
                      embeddedFormUrl === 'https://forms.gle/oXR65aNEx2ZjSJsF9'
                        ? null
                        : 'https://forms.gle/oXR65aNEx2ZjSJsF9'
                    );
                  }}
                  className="app-portal-embed-toggle"
                >
                  <span>
                    {embeddedFormUrl === 'https://forms.gle/oXR65aNEx2ZjSJsF9'
                      ? 'Hide Embedded View'
                      : 'Preview Form on Site'}
                  </span>
                  <ChevronDown
                    size={14}
                    style={{
                      transform:
                        embeddedFormUrl === 'https://forms.gle/oXR65aNEx2ZjSJsF9'
                          ? 'rotate(180deg)'
                          : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                    }}
                  />
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Optional Embedded Form Frame (Smooth Expansion) */}
        <AnimatePresence>
          {embeddedFormUrl && (
            <motion.div
              className="app-embedded-form-stage"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="app-embedded-form-container">
                <div className="app-embedded-form-header">
                  <div className="app-embedded-meta">
                    <span className="app-embedded-dot" />
                    <span>EMBEDDED RESPONSE VIEW</span>
                  </div>
                  <div className="app-embedded-actions">
                    <a
                      href={embeddedFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="app-embedded-popout"
                    >
                      <span>Open in Full Tab</span>
                      <Maximize2 size={13} />
                    </a>
                    <button
                      onClick={() => setEmbeddedFormUrl(null)}
                      className="app-embedded-close"
                      aria-label="Close embedded form"
                    >
                      Close View
                    </button>
                  </div>
                </div>

                <div className="app-iframe-wrap">
                  <iframe
                    src={embeddedFormUrl}
                    title="Odyssey Application Google Form"
                    className="app-google-form-iframe"
                    loading="lazy"
                  >
                    Loading application form...
                  </iframe>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

