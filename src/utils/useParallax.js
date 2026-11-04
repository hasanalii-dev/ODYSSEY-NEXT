import { useEffect, useRef } from 'react';

/**
 * useParallax Hook
 * High-performance 120fps scroll parallax hook for uncurved vertical rectangular imagery.
 * @param {number} speed - Rate of parallax translation (e.g., 0.12 = gentle, 0.22 = dramatic)
 * @returns {React.RefObject} ref to attach to the inner image element
 */
export const useParallax = (speed = 0.14) => {
  const ref = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.parentElement?.getBoundingClientRect() || el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only compute while element is in or near viewport
      if (rect.top < windowHeight + 100 && rect.bottom > -100) {
        const centerDistance = rect.top + rect.height / 2 - windowHeight / 2;
        const translateY = centerDistance * speed;
        el.style.transform = `translate3d(0, ${translateY}px, 0) scale(1.12)`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    handleScroll(); // Initial run

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return ref;
};

