import { triggerHaptic } from './haptics';
import { getLenis } from './smoothScroll';

/**
 * Returns active route identifier based on current window location
 * Supports clean paths: '/', '/about', '/events', '/gallery'
 * Also supports backward compatibility for legacy hash links: '#about', '#events', '#gallery'
 */
export const getActiveRoute = () => {
  if (typeof window === 'undefined') return 'home';
  const path = (window.location.pathname.replace(/\/+$/, '') || '/').toLowerCase();
  const hash = (window.location.hash || '').toLowerCase();

  if (path.endsWith('/about') || hash === '#about' || hash.startsWith('#about') || hash.startsWith('#/about')) {
    return 'about';
  }
  if (path.endsWith('/events') || hash === '#events' || hash.startsWith('#events') || hash.startsWith('#/events')) {
    return 'events';
  }
  if (path.endsWith('/gallery') || hash === '#gallery' || hash.startsWith('#gallery') || hash.startsWith('#/gallery') || path.includes('/gallery')) {
    return 'gallery';
  }
  if (
    path.endsWith('/register') ||
    path.endsWith('/application') ||
    path.includes('/register') ||
    path.includes('/application') ||
    hash === '#register' ||
    hash.startsWith('#register') ||
    hash.startsWith('#/register')
  ) {
    return 'register';
  }
  return 'home';
};

/**
 * Seamless client-side navigation using the HTML5 History API.
 * Ensures clean paths ('/', '/about', '/events') and eliminates broken paths like '/about#events'.
 * Handles anchor scrolling within the Home page or cross-page seamlessly.
 */
export const navigateTo = (target) => {
  if (typeof window === 'undefined') return;

  triggerHaptic('selection');
  const lenis = getLenis();

  // If target is an in-page anchor (e.g. '#participation', '#competitions', '#highlights')
  if (target.startsWith('#')) {
    const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';

    if (currentPath !== '/' && currentPath !== '') {
      // Coming from /about or /events: transition to home page with the hash
      window.history.pushState({}, '', '/' + target);
      window.dispatchEvent(new PopStateEvent('popstate'));
    } else {
      // Already on home page: update hash cleanly and smooth scroll to section
      if (window.location.hash !== target) {
        window.history.pushState({}, '', target);
      }
      const el = document.querySelector(target);
      if (el) {
        if (lenis) {
          lenis.scrollTo(el, { offset: -40, duration: 1.2 });
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    return;
  }

  // Target is a clean path: '/', '/about', '/events'
  const cleanPath = target === '/' ? '/' : target.replace(/\/+$/, '');

  if (window.location.pathname !== cleanPath || window.location.hash) {
    window.history.pushState({}, '', cleanPath);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  // Always reset scroll to the top of the newly mounted page
  if (lenis) {
    lenis.scrollTo(0, { immediate: true });
  } else {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }
};

