import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * useGsapParallax Hook
 * High-performance GSAP ScrollTrigger parallax scrubbing with dedicated GPU layer promotion.
 * @param {number} yPercent - Percentage of vertical travel (e.g. 18 for noticeable motion)
 * @param {number} scrub - Smooth scrubbing lag (e.g. 1s for fluid Apple-like physics)
 * @returns {React.RefObject} ref to attach to the inner image element
 */
export const useGsapParallax = (yPercent = 16, scrub = 1) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const parent = el.parentElement || el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          yPercent: -yPercent,
          force3D: true,
        },
        {
          yPercent: yPercent,
          ease: 'none',
          force3D: true,
          scrollTrigger: {
            trigger: parent,
            start: 'top bottom',
            end: 'bottom top',
            scrub: scrub,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [yPercent, scrub]);

  return imageRef;
};
