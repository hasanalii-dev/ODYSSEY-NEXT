import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsapParallax } from '../../../utils/useGsapParallax';
import { CardSpaceStarfield } from '../../../components/ui';
import './TheBigFixSection.css';

gsap.registerPlugin(ScrollTrigger);

export const TheBigFixSection = () => {
  const sectionRef = useRef(null);
  const framePrimaryRef = useRef(null);
  const frameSecondaryRef = useRef(null);

  // Parallax hooks for dual uncurved vertical rectangular images (aspect ratio 3:4)
  const imgRef1 = useGsapParallax(20, 1);
  const imgRef2 = useGsapParallax(26, 1);

  // Dual frame scrub: Primary moves up, Secondary moves down during scroll
  useEffect(() => {
    const section = sectionRef.current;
    const f1 = framePrimaryRef.current;
    const f2 = frameSecondaryRef.current;
    if (!section || !f1 || !f2) return;

    const ctx = gsap.context(() => {
      // Primary frame glides up (-40px)
      gsap.fromTo(
        f1,
        { y: 35 },
        {
          y: -45,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        }
      );

      // Secondary frame glides down (+50px)
      gsap.fromTo(
        f2,
        { y: -35 },
        {
          y: 55,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="the-big-fix-section">
      {/* Warm Balanced Wave Gradient Background (Amplitude A=34) — Zero Hard Lines */}
      <div className="big-fix-wave-layer" aria-hidden="true">
        <svg
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          className="big-fix-wave-svg"
        >
          <defs>
            <linearGradient id="bigFixGrad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#991b1b" stopOpacity="0" />
              <stop offset="25%" stopColor="#991b1b" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#D34E3F" stopOpacity="0.82" />
              <stop offset="100%" stopColor="#030508" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="bigFixGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D75E30" stopOpacity="0" />
              <stop offset="30%" stopColor="#D75E30" stopOpacity="0.9" />
              <stop offset="65%" stopColor="#F5D6BA" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#030508" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 0,160 C 360,126 720,194 1080,160 C 1260,143 1380,177 1440,160 L 1440,600 L 0,600 Z"
            fill="url(#bigFixGrad1)"
          />
          <path
            d="M 0,220 C 320,254 680,186 1040,220 C 1240,237 1360,203 1440,220 L 1440,600 L 0,600 Z"
            fill="url(#bigFixGrad2)"
          />
        </svg>
      </div>

      {/* Atmospheric ambient radial glow */}
      <div className="big-fix-ambient-glow" aria-hidden="true" />

      <div className="the-big-fix-container">
        {/* Header Block with Framer Motion */}
        <motion.div
          className="the-big-fix-header"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="the-big-fix-badge-pill">
            <span className="the-big-fix-badge-text">Core Philosophy &bull; The Theme</span>
          </div>

          <h2 className="the-big-fix-title">
            The <span className="the-big-fix-title-accent">Big</span> Fix
          </h2>

          <p className="the-big-fix-tagline">
            Where problems become possibilities through human ingenuity.
          </p>
        </motion.div>

        {/* Content & Imagery Grid */}
        <div className="the-big-fix-grid">
          {/* Left Text Block: The Narrative */}
          <div className="the-big-fix-content">
            <motion.div
              className="the-big-fix-card"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Space Theme Starfield with Twinkling Stars */}
              <CardSpaceStarfield variant="crimson" />
              <div className="card-relative-content">
                <span className="the-big-fix-step-tag">TRANSFORMATION</span>
                <p className="the-big-fix-paragraph">
                  This year, we celebrate The Big Fix: exploring how human ingenuity can transform everyday problems into meaningful solutions. Discover how science, technology, engineering, and creativity come together to tackle the challenges around us, from healthier lives and safer communities to smarter cities and a more sustainable future.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="the-big-fix-card"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Space Theme Starfield with Twinkling Stars */}
              <CardSpaceStarfield variant="orange" />
              <div className="card-relative-content">
                <span className="the-big-fix-step-tag">STUDENT IMPACT</span>
                <p className="the-big-fix-paragraph">
                  At The Big Fix, students become problem-solvers, innovators, and engineers. They will identify real-world challenges, question existing solutions, experiment with ideas, and build functional prototypes designed to make life better. Every problem is an opportunity to think differently, create boldly, and make an impact.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Dual Visual Gallery: Two Uncurved Vertical Rectangular Parallax Images */}
          {/* Scrolled Up & Down in opposite directions */}
          <div className="the-big-fix-gallery">
            {/* Primary Image: Aspect ratio 3:4 (Uncurved) — moves up */}
            <div ref={framePrimaryRef} className="big-fix-frame frame-primary">
              <div className="big-fix-parallax-box">
                <img
                  ref={imgRef1}
                  src="https://scontent.fkhi11-2.fna.fbcdn.net/v/t39.30808-6/487769142_1107127921435173_6078268032149726610_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=PfDGcaAnTU8Q7kNvwHE8HSX&_nc_oc=AdoVFJVfKkaG-hQO1WIealkJp43EZnxffwtqjImecgE6zJkQFS7fqqnz_92XTwhCWUU&_nc_zt=23&_nc_ht=scontent.fkhi11-2.fna&_nc_gid=RSayBlILr40EA8drlHGwUw&_nc_ss=7b2a8&oh=00_AQRVXlyeAWqqqodJbiZ7VfKOsk8oa1MakMdBK2UTHfPBVQ&oe=6AF91CF2"
                  alt="Young engineers collaborating and problem solving"
                  className="big-fix-parallax-img"
                />
                <div className="big-fix-scrim" />
              </div>
              <div className="big-fix-border" aria-hidden="true" />
              <div className="big-fix-caption">
                <span>COLLABORATION // LAB 01</span>
              </div>
            </div>

            {/* Secondary Floating Image: Staggered Parallax (Uncurved, Aspect ratio 3:4) — moves down */}
            <div ref={frameSecondaryRef} className="big-fix-frame frame-secondary">
              <div className="big-fix-parallax-box">
                <img
                  ref={imgRef2}
                  src="https://scontent.fkhi6-2.fna.fbcdn.net/v/t39.30808-6/487542115_1107127944768504_3941264642126644960_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=zaZbXQgyMngQ7kNvwG6hPO1&_nc_oc=Ado9s7x3vRxRyEPIJmA64aRObb_4vz5Mow2X-RJ-RhCmmOjy1L8UiALJuA47jEXHflA&_nc_zt=23&_nc_ht=scontent.fkhi6-2.fna&_nc_gid=A5hcGF852kzHZJWMUxycKw&_nc_ss=7b2a8&oh=00_AQSO5NI5WrR1Xmfx4LLOf3EGtA8GFhrxwwlyF8aj1prLJA&oe=6AF92955"
                  alt="Creative science and technology experiments"
                  className="big-fix-parallax-img"
                />
                <div className="big-fix-scrim" />
              </div>
              <div className="big-fix-border" aria-hidden="true" />
              <div className="big-fix-caption">
                <span>PROTOTYPING // 2027</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient fade mask overlay at bottom of The Big Fix */}
      <div className="big-fix-bottom-mask" aria-hidden="true" />
    </section>
  );
};
