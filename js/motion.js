/**
 * js/motion.js — Critically Damped Spring Spotlight Controller
 * Linear / Paco Coursey grade tactile physics with exponential damping.
 * Interpolates pointer coordinates through a critically damped spring loop
 * and updates CSS custom properties (--mouse-x, --mouse-y, --spotlight-opacity).
 */

export function initSpringSpotlights() {
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const selector = '.bento-card, .minimal-card, .flagship-card, .spec-card';
  let cards = [];

  function attachCards() {
    const elements = Array.from(document.querySelectorAll(selector));
    cards = elements.map((el) => {
      if (el._springAttached) return el._springCard;

      const card = {
        el,
        targetX: -999,
        targetY: -999,
        currentX: -999,
        currentY: -999,
        active: false,
      };

      el.addEventListener('pointerenter', () => {
        card.active = true;
        card.el.style.setProperty('--spotlight-opacity', '1');
      });

      el.addEventListener('pointermove', (e) => {
        const rect = card.el.getBoundingClientRect();
        card.targetX = e.clientX - rect.left;
        card.targetY = e.clientY - rect.top;
        if (card.currentX === -999) {
          card.currentX = card.targetX;
          card.currentY = card.targetY;
        }
      }, { passive: true });

      el.addEventListener('pointerleave', () => {
        card.active = false;
        card.el.style.setProperty('--spotlight-opacity', '0');
      });

      el._springAttached = true;
      el._springCard = card;
      return card;
    });
  }

  attachCards();

  // Watch for dynamically rendered cards from main.js
  const observer = new MutationObserver(() => {
    attachCards();
  });
  observer.observe(document.body, { childList: true, subtree: true });

  function tick() {
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      if (!card || !card.active) continue;

      // Exponential spring damping (k = 0.18)
      card.currentX += (card.targetX - card.currentX) * 0.18;
      card.currentY += (card.targetY - card.currentY) * 0.18;

      card.el.style.setProperty('--mouse-x', `${card.currentX.toFixed(1)}px`);
      card.el.style.setProperty('--mouse-y', `${card.currentY.toFixed(1)}px`);
    }
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

// Global hook for non-module script tag inclusion
if (typeof window !== 'undefined') {
  window.initSpringSpotlights = initSpringSpotlights;
}
