import React, { useState, useEffect, useCallback } from 'react';
import { Navbar, Footer, MobileMenu, BlockLoader } from './components/web';
import { HomePage, AboutPage, EventsPage, GalleryPage, ApplicationPage } from './pages';
import { initGlobalHaptics } from './utils/haptics';
import { initSmoothScroll, getLenis } from './utils/smoothScroll';
import { getActiveRoute } from './utils/navigation';
import './App.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Stable memoized loader callback to prevent re-instantiating effect timers
  const handleLoaderComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // Client-side route detection (clean paths: '/', '/about', '/events')
  const [currentRoute, setCurrentRoute] = useState(getActiveRoute);

  useEffect(() => {
    // Initialize authentic 120fps tactile haptics engine
    const cleanupHaptics = initGlobalHaptics();

    // Initialize GSAP-driven Lenis smooth scrolling across the entire site
    const cleanupScroll = initSmoothScroll();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Route listener for browser history (popstate) and hash events
    const handleRouteChange = () => {
      const nextRoute = getActiveRoute();
      setCurrentRoute(nextRoute);

      const lenis = getLenis();
      const hash = window.location.hash;

      if (nextRoute === 'home') {
        if (hash && hash !== '#' && hash !== '#hero' && hash !== '') {
          setTimeout(() => {
            const el = document.querySelector(hash);
            if (el) {
              if (lenis) {
                lenis.scrollTo(el, { offset: -40, duration: 1.2 });
              } else {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }, 80);
        } else {
          if (lenis) {
            lenis.scrollTo(0, { duration: 0.8 });
          } else {
            window.scrollTo(0, 0);
          }
        }
      } else {
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo(0, 0);
        }
      }
    };

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
      cleanupHaptics?.();
      cleanupScroll?.();
    };
  }, []);

  return (
    <div className="odyssey-app min-h-screen relative bg-night text-slate-300">
      {/* Apple iOS-Grade Page Loader */}
      <BlockLoader key="site-loader" onComplete={handleLoaderComplete} />

      {/* iOS Dynamic Island Scroll Navbar (with 120fps spring transitions) */}
      <Navbar
        key="site-navbar"
        isVisible={isScrolled}
        currentRoute={currentRoute}
        onOpenMenu={() => setMobileMenuOpen(true)}
      />

      {/* Slide-up Mobile Drawer Menu */}
      <MobileMenu
        key="site-mobile-menu"
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Page Content: Switch between HomePage, AboutPage, EventsPage, GalleryPage, and ApplicationPage */}
      {currentRoute === 'about' ? (
        <AboutPage key="route-about" onOpenMenu={() => setMobileMenuOpen(true)} />
      ) : currentRoute === 'events' ? (
        <EventsPage key="route-events" onOpenMenu={() => setMobileMenuOpen(true)} />
      ) : currentRoute === 'gallery' ? (
        <GalleryPage key="route-gallery" onOpenMenu={() => setMobileMenuOpen(true)} />
      ) : currentRoute === 'register' ? (
        <ApplicationPage key="route-register" onOpenMenu={() => setMobileMenuOpen(true)} />
      ) : (
        <HomePage key="route-home" isLoaded={isLoaded} onOpenMenu={() => setMobileMenuOpen(true)} />
      )}

      {/* Web Footer */}
      <Footer key="site-footer" />
    </div>
  );
}

export default App;
