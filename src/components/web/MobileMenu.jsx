import React from 'react';
import { navigateTo } from '../../utils/navigation';

export const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div id="mobile-menu" className={isOpen ? 'open' : ''}>
      <div className="menu-backdrop" onClick={onClose} />
      <div className="menu-card">
        <button
          id="close-menu"
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white text-lg hover:bg-white/20 transition-all"
          onClick={onClose}
          aria-label="Close menu"
        >
          <i className="bi bi-chevron-down"></i>
        </button>

        <div className="flex flex-col items-center gap-7 text-center">
          <span
            className="menu-item text-xs text-slate-400 font-mono uppercase tracking-widest mb-1"
            style={{ transitionDelay: '0.1s' }}
          >
            Odyssey 2027 &bull; The Big Fix
          </span>

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              navigateTo('/');
            }}
            className="menu-item text-3xl md:text-4xl font-display font-bold text-white hover:text-slate-300 transition-colors"
            style={{ transitionDelay: '0.12s' }}
          >
            Home
          </a>

          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              navigateTo('/about');
            }}
            className="menu-item text-3xl md:text-4xl font-display font-bold text-white hover:text-slate-300 transition-colors"
            style={{ transitionDelay: '0.18s' }}
          >
            About
          </a>

          <a
            href="/events"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              navigateTo('/events');
            }}
            className="menu-item text-3xl md:text-4xl font-display font-bold text-white hover:text-slate-300 transition-colors"
            style={{ transitionDelay: '0.24s' }}
          >
            Events
          </a>

          <a
            href="/gallery"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              navigateTo('/gallery');
            }}
            className="menu-item text-3xl md:text-4xl font-display font-bold text-white hover:text-slate-300 transition-colors"
            style={{ transitionDelay: '0.3s' }}
          >
            Gallery
          </a>

          <a
            href="/register"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              navigateTo('/register');
            }}
            className="menu-item text-3xl md:text-4xl font-display font-bold text-white hover:text-slate-300 transition-colors"
            style={{ transitionDelay: '0.36s' }}
          >
            Register
          </a>

          <div
            className="menu-item mt-6 flex flex-col items-center gap-2"
            style={{ transitionDelay: '0.45s' }}
          >
            <span className="text-white/40 text-[10px] uppercase tracking-widest font-mono">Organized By</span>
            <img
              src="/img/next-school.png"
              alt="The Next School"
              className="h-8 w-auto object-contain"
              style={{ borderRadius: 0 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
