/**
 * js/canvas-bg.js — Spatial Reality Layer Topological Wave
 * Subtle, GPU-friendly LiDAR depth-grid ripple aligned with Rodimus Tech's
 * "Reality Layer for AI" motif.
 * Palette: Deep Dark Grey (#0B0D13) & Crimson (#80182A).
 * Automatically pauses on document.hidden (visibilitychange) to preserve CPU/battery.
 */

export function initSpatialField(canvasId = 'neural-canvas') {
  if (typeof window === 'undefined') return null;

  const canvas = document.getElementById(canvasId);
  if (!canvas) return null;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return null;
  }

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return null;

  let width = 0;
  let height = 0;
  let rafId = null;
  let mouse = { x: -1000, y: -1000 };

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  window.addEventListener('resize', resize, { passive: true });

  window.addEventListener('pointermove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener('pointerleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  window.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches[0]) {
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden && rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    } else if (!document.hidden && !rafId) {
      rafId = requestAnimationFrame(draw);
    }
  });

  resize();
  const spacing = window.innerWidth < 768 ? 52 : 46;

  function draw(t) {
    ctx.clearRect(0, 0, width, height);
    const time = t * 0.0008;

    for (let x = spacing / 2; x < width; x += spacing) {
      for (let y = spacing / 2; y < height; y += spacing) {
        const dx = x - mouse.x;
        const dy = y - mouse.y;
        const dist = Math.hypot(dx, dy);
        const proximity = Math.max(0, 1 - dist / 220);
        const wave = Math.sin(x * 0.015 + time) * Math.cos(y * 0.015 + time);

        const alpha = 0.035 + proximity * 0.24 + wave * 0.018;
        const radius = 0.85 + proximity * 1.4;

        ctx.fillStyle = `rgba(168, 38, 61, ${Math.max(0.02, alpha).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    rafId = requestAnimationFrame(draw);
  }

  rafId = requestAnimationFrame(draw);

  return {
    destroy: () => {
      if (rafId) cancelAnimationFrame(rafId);
    }
  };
}

// Backwards-compatible class wrapper for existing call in main.js
class NeuralCanvas {
  constructor(canvasId = 'neural-canvas') {
    this.field = initSpatialField(canvasId);
  }
  destroy() {
    if (this.field && this.field.destroy) {
      this.field.destroy();
    }
  }
}

if (typeof window !== 'undefined') {
  window.NeuralCanvas = NeuralCanvas;
  window.initSpatialField = initSpatialField;
}
