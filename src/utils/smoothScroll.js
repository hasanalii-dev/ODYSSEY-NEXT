import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

/**
 * Initializes GSAP-synchronized Lenis smooth scrolling across the website.
 * Tuned for 120fps fluid response with intelligent frame-drop compensation.
 * @returns {Function} cleanup function to destroy smooth scroll instance
 */
export const initSmoothScroll = () => {
  if (typeof window === 'undefined') return;

  // Prevent multiple duplicate instances
  if (lenisInstance) {
    lenisInstance.destroy();
  }

  const lenis = new Lenis({
    duration: 1.0,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth Apple-style exponential deceleration
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.4,
  });

  lenisInstance = lenis;

  // Synchronize Lenis scroll position with GSAP ScrollTrigger updates
  lenis.on('scroll', ScrollTrigger.update);

  // Drive Lenis tick via GSAP ticker for 120fps fluid synchronization
  const tickerCallback = (time) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(tickerCallback);
  // Re-enable GSAP lag smoothing to smoothly absorb any micro-frame drops instead of stuttering
  gsap.ticker.lagSmoothing(500, 33);

  // Return cleanup function
  return () => {
    gsap.ticker.remove(tickerCallback);
    lenis.destroy();
    lenisInstance = null;
  };
};

/**
 * Get current active Lenis instance
 */
export const getLenis = () => lenisInstance;
