import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import './ApplicationStepsSection.css';

const STEPS = [
  {
    num: '01',
    title: 'Visit Portal',
    desc: 'Visit the Odyssey Student Application page.',
  },
  {
    num: '02',
    title: 'Access Form',
    desc: 'Access the application form.',
  },
  {
    num: '03',
    title: 'Template Review',
    desc: 'Review and download the proposal template.',
  },
  {
    num: '04',
    title: 'Complete Proposal',
    desc: 'Complete the proposal with your personal and project-related information.',
  },
  {
    num: '05',
    title: 'Final Submission',
    desc: 'Complete the application form and submit it along with your customised proposal.',
  },
];

export const ApplicationStepsSection = () => {
  return (
    <section className="app-steps-section" id="how-to-apply">
      <div className="app-steps-container">
        {/* Section Header */}
        <div className="app-steps-header">
          <div className="app-steps-eyebrow">
            <span className="app-steps-eyebrow-dot" />
            <span>SUBMISSION PROCESS</span>
          </div>

          <h2 className="app-steps-title">
            How to <span className="app-steps-title-accent">Apply</span>
          </h2>
        </div>

        {/* 5-Step Editorial Workflow Grid */}
        <div className="app-steps-grid">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.num}
              className="app-step-item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="app-step-top">
                <span className="app-step-num">{step.num}</span>
                {idx < STEPS.length - 1 && (
                  <div className="app-step-connector" aria-hidden="true">
                    <ArrowRight size={14} />
                  </div>
                )}
              </div>

              <h3 className="app-step-heading">{step.title}</h3>
              <p className="app-step-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

