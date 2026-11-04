import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { triggerHaptic } from '../../../utils/haptics';
import { useGsapParallax } from '../../../utils/useGsapParallax';
import './GalleryGridSection.css';

const CATEGORIES = [
  'All Moments',
  'STEAMSCAPE',
  'Prototype Quest',
  'Photography Exhibition',
  'Gymnastics Display',
  'Art Competition',
  'Pure Bazaar',
];

const GALLERY_ITEMS = [
  {
    id: 'steam-01',
    category: 'STEAMSCAPE',
    title: 'Autonomous Robotics & Circuit Systems',
    subtitle: 'STEAM Flagship Exhibition',
    src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    aspect: 'panoramic',
    frameId: 'FRAME // 01',
    parallaxSpeed: 16,
  },
  {
    id: 'proto-01',
    category: 'Prototype Quest',
    title: 'Rapid Engineering & Functional Prototyping',
    subtitle: 'The Big Fix Challenge',
    src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    aspect: 'portrait',
    frameId: 'FRAME // 02',
    parallaxSpeed: 14,
  },
  {
    id: 'photo-01',
    category: 'Photography Exhibition',
    title: 'Urban Architecture & Human Ecology',
    subtitle: 'What Would You Fix?',
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    aspect: 'landscape',
    frameId: 'FRAME // 03',
    parallaxSpeed: 18,
  },
  {
    id: 'gym-01',
    category: 'Gymnastics Display',
    title: 'Athletic Motion & Adaptability Through Movement',
    subtitle: 'The Big Fix Through Movement',
    src: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    aspect: 'landscape',
    frameId: 'FRAME // 04',
    parallaxSpeed: 15,
  },
  {
    id: 'art-01',
    category: 'Art Competition',
    title: 'Visualizing Problem Solving Through Mixed Media',
    subtitle: 'See the Problem. Imagine the Possibility',
    src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80',
    aspect: 'portrait',
    frameId: 'FRAME // 05',
    parallaxSpeed: 16,
  },
  {
    id: 'bazaar-01',
    category: 'Pure Bazaar',
    title: 'Student Enterprise, Branding & Creative Marketplace',
    subtitle: 'Youth Innovation Enterprise',
    src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
    aspect: 'landscape',
    frameId: 'FRAME // 06',
    parallaxSpeed: 17,
  },
  {
    id: 'steam-02',
    category: 'STEAMSCAPE',
    title: 'Microcontroller Architecture & Sensor Integration',
    subtitle: 'Applied Technical Science',
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    aspect: 'landscape',
    frameId: 'FRAME // 07',
    parallaxSpeed: 15,
  },
  {
    id: 'proto-02',
    category: 'Prototype Quest',
    title: 'Collaborative Design Sprint & Kinematic Testing',
    subtitle: 'Special Award Competition',
    src: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    aspect: 'landscape',
    frameId: 'FRAME // 08',
    parallaxSpeed: 18,
  },
  {
    id: 'photo-02',
    category: 'Photography Exhibition',
    title: 'Environmental Balance & Perspective Study',
    subtitle: 'What Would You Fix?',
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    aspect: 'portrait',
    frameId: 'FRAME // 09',
    parallaxSpeed: 16,
  },
  {
    id: 'gym-02',
    category: 'Gymnastics Display',
    title: 'Precision Kinematics, Balance & Kinetic Teamwork',
    subtitle: 'Overcoming Friction & Tension',
    src: 'https://images.unsplash.com/photo-1508215885820-4523e431397e?auto=format&fit=crop&w=1200&q=80',
    aspect: 'landscape',
    frameId: 'FRAME // 10',
    parallaxSpeed: 15,
  },
  {
    id: 'art-02',
    category: 'Art Competition',
    title: 'Chromatic Moodboard & Structural Design Mapping',
    subtitle: 'Visualizing Tomorrow',
    src: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    aspect: 'landscape',
    frameId: 'FRAME // 11',
    parallaxSpeed: 17,
  },
  {
    id: 'bazaar-02',
    category: 'Pure Bazaar',
    title: 'Sustainable Merchandising & Prototype Showcase',
    subtitle: 'Student Entrepreneurship Floor',
    src: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
    aspect: 'panoramic',
    frameId: 'FRAME // 12',
    parallaxSpeed: 14,
  },
];

/**
 * Individual Gallery Card with Dedicated Skeleton Loader & GSAP Parallax Scrub
 */
const GalleryCard = ({ item, onOpenLightbox }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const parallaxImgRef = useGsapParallax(item.parallaxSpeed || 15, 1);

  return (
    <div className={`gallery-card-item ${item.aspect}`} onClick={() => onOpenLightbox(item)}>
      {/* 1. Rectangular Visual Window (Parallax viewport with Skeleton) */}
      <div className="gallery-card-viewport">
        {/* Shimmering Obsidian Skeleton Loader */}
        {!isLoaded && <div className="gallery-skeleton-shimmer" />}

        {/* Parallax Image element */}
        <img
          ref={parallaxImgRef}
          src={item.src}
          alt={item.title}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`gallery-parallax-image ${isLoaded ? 'is-loaded' : 'is-loading'}`}
        />

        {/* Subtle Specular Vignette Scrim */}
        <div className="gallery-card-scrim" />

        {/* Hover Zoom Icon Indicator */}
        <div className="gallery-zoom-pill" aria-hidden="true">
          <Maximize2 size={16} />
        </div>
      </div>

      {/* 2. Structured Editorial Information Block (Clean Spacing, NO overlap) */}
      <div className="gallery-card-details">
        {/* Meta Header Row */}
        <div className="gallery-meta-row">
          <span className="gallery-frame-badge">{item.frameId}</span>
          <span className="gallery-cat-separator">&bull;</span>
          <span className="gallery-cat-badge">{item.category}</span>
        </div>

        {/* Editorial Title */}
        <h3 className="gallery-card-title">{item.title}</h3>

        {/* Subtitle */}
        <p className="gallery-card-subtitle">{item.subtitle}</p>
      </div>
    </div>
  );
};

export const GalleryGridSection = () => {
  const [activeCategory, setActiveCategory] = useState('All Moments');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === 'All Moments'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectCategory = (category) => {
    triggerHaptic('selection');
    setActiveCategory(category);
  };

  const handleOpenLightbox = (item) => {
    triggerHaptic('pop');
    setSelectedImage(item);
  };

  const handleNavigateLightbox = (direction) => {
    if (!selectedImage) return;
    triggerHaptic('selection');
    const currentIndex = filteredItems.findIndex((img) => img.id === selectedImage.id);
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = filteredItems.length - 1;
    if (nextIndex >= filteredItems.length) nextIndex = 0;
    setSelectedImage(filteredItems[nextIndex]);
  };

  return (
    <section className="gallery-grid-section" id="explore">
      <div className="gallery-grid-container">
        {/* Section Header: Section 3 Title */}
        <div className="gallery-section-header">
          <div className="gallery-section-eyebrow">
            <span className="gallery-eyebrow-dot" />
            <span>DISCIPLINE ARCHIVES</span>
          </div>

          <h2 className="gallery-section-title">
            Explore the <span className="gallery-section-title-accent">Gallery</span>
          </h2>
        </div>

        {/* Minimalist Dark Glass Category Filter Bar */}
        <div className="gallery-filter-bar" role="tablist" aria-label="Gallery Categories">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                onClick={() => handleSelectCategory(category)}
                className={`gallery-filter-pill ${isActive ? 'active' : ''}`}
              >
                <span>{category}</span>
              </button>
            );
          })}
        </div>

        {/* Editorial Masonry Visual Exhibition Grid with Parallax & Skeleton Loaders */}
        <div className="gallery-masonry-grid">
          {filteredItems.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onOpenLightbox={handleOpenLightbox}
            />
          ))}
        </div>
      </div>

      {/* =========================================================
          FULL-SCREEN DARK GLASS LIGHTBOX MODAL
          ========================================================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="gallery-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="gallery-lightbox-content"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="gallery-lightbox-close"
                onClick={() => setSelectedImage(null)}
                aria-label="Close fullscreen view"
              >
                <X size={20} />
              </button>

              {/* Lightbox Stage with Nav Arrows */}
              <div className="gallery-lightbox-stage">
                <button
                  className="gallery-lightbox-arrow prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigateLightbox(-1);
                  }}
                  aria-label="Previous photograph"
                >
                  <ChevronLeft size={24} />
                </button>

                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="gallery-lightbox-img"
                />

                <button
                  className="gallery-lightbox-arrow next"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigateLightbox(1);
                  }}
                  aria-label="Next photograph"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Lightbox Metadata Bar */}
              <div className="gallery-lightbox-meta">
                <span className="gallery-lightbox-category">{selectedImage.category}</span>
                <h3 className="gallery-lightbox-title">{selectedImage.title}</h3>
                <p className="gallery-lightbox-subtitle">{selectedImage.subtitle}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
