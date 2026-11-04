import React, { useRef, useState, useEffect } from 'react';
import './TextRevealSection.css';

const PARAGRAPH_1 =
  "The Next School is excited to bring back Odyssey, where Science, Technology, Engineering, Arts, and Mathematics (STEAM) unite to tackle today’s environmental challenges!";

const PARAGRAPH_2 =
  "This year, we celebrate The Big Fix: exploring how human ingenuity can transform everyday problems into meaningful solutions. Discover how science, technology, engineering, and creativity come together to tackle the challenges around us, from healthier lives and safer communities to smarter cities and a more sustainable future.";

// Special keywords to highlight with vibrant cyan/teal when revealed
const HIGHLIGHT_WORDS = new Set([
  'odyssey,',
  'steam',
  '(steam)',
  'big',
  'fix:',
  'environmental',
  'challenges!',
  'ingenuity',
  'meaningful',
  'solutions.',
  'creativity',
  'sustainable',
  'future.',
]);

export const TextRevealSection = () => {
  const sectionRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // One-time observer: triggers once when scrolled into view, then disconnects permanently
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect(); // One-time trigger: never resets or scrubs back
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  const words1 = PARAGRAPH_1.split(' ');
  const words2 = PARAGRAPH_2.split(' ');

  let wordIndex = 0;

  return (
    <section className="text-reveal-root" id="theme-story" ref={sectionRef}>
      <div className="text-reveal-container">
        {/* Paragraph 1 */}
        <p className="text-reveal-para">
          {words1.map((word, i) => {
            const index = wordIndex++;
            const normalized = word.toLowerCase().replace(/[^a-z0-9():,!]/g, '');
            const isHighlight = HIGHLIGHT_WORDS.has(normalized);

            return (
              <span
                key={`w1-${i}`}
                className={`text-word ${isRevealed ? 'revealed' : ''} ${isHighlight ? 'highlight' : ''}`}
                style={{ '--word-delay': `${index * 22}ms` }}
              >
                {word}
              </span>
            );
          })}
        </p>

        {/* Paragraph 2 */}
        <p className="text-reveal-para text-reveal-para-secondary">
          {words2.map((word, i) => {
            const index = wordIndex++;
            const normalized = word.toLowerCase().replace(/[^a-z0-9():,!]/g, '');
            const isHighlight = HIGHLIGHT_WORDS.has(normalized);

            return (
              <span
                key={`w2-${i}`}
                className={`text-word ${isRevealed ? 'revealed' : ''} ${isHighlight ? 'highlight' : ''}`}
                style={{ '--word-delay': `${index * 22}ms` }}
              >
                {word}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
};
