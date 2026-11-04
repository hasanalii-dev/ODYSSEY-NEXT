// =========================================================
// ODYSSEY 2027 — iOS 120 FPS HAPTIC & TACTILE ENGINE
// Provides authentic Web Vibration API haptics + ProMotion feedback
// =========================================================

export const triggerHaptic = (type = 'light') => {
  if (typeof window === 'undefined' || !window.navigator || !window.navigator.vibrate) {
    return;
  }
  try {
    switch (type) {
      case 'selection':
        window.navigator.vibrate(6); // 6ms micro-tick
        break;
      case 'light':
        window.navigator.vibrate(10); // Standard light tap
        break;
      case 'medium':
        window.navigator.vibrate(18); // Button press
        break;
      case 'heavy':
        window.navigator.vibrate(28); // Strong impact
        break;
      case 'pop':
        window.navigator.vibrate([8, 25, 12]); // Dynamic Island expansion pop
        break;
      case 'success':
        window.navigator.vibrate([10, 40, 15]);
        break;
      default:
        window.navigator.vibrate(10);
    }
  } catch {
    // Fail silently on devices without vibration support
  }
};

/**
 * Initializes global 120fps tactile haptics across all interactive elements
 */
export const initGlobalHaptics = () => {
  if (typeof window === 'undefined') return () => {};

  const handlePointerDown = (e) => {
    const target = e.target.closest(
      'a, button, input[type="submit"], [role="button"], .hero-floating-tab, .hero-btn-explore, .nav-island-link'
    );
    if (!target) return;

    if (
      target.matches('.hero-btn-explore, [href="#participation"], .nav-island-cta, button[type="submit"]')
    ) {
      triggerHaptic('medium');
    } else {
      triggerHaptic('selection');
    }
  };

  document.addEventListener('pointerdown', handlePointerDown, { passive: true });

  return () => {
    document.removeEventListener('pointerdown', handlePointerDown);
  };
};

