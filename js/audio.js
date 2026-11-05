/**
 * Synthetic Micro-Acoustic Audio Engine
 * Uses pure Web Audio API oscillators to generate subtle, ultra-luxury tactile clicks and sound cues.
 * No external MP3/WAV files required. Muted by default with an explicit HUD toggle.
 */

class SoundEngine {
  constructor() {
    this.audioCtx = null;
    this.muted = localStorage.getItem("shubh_sound_enabled") !== "true";
  }

  getAudioContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  toggleSound() {
    this.muted = !this.muted;
    localStorage.setItem("shubh_sound_enabled", (!this.muted).toString());
    if (!this.muted) {
      this.playSuccess();
    }
    return !this.muted;
  }

  isMuted() {
    return this.muted;
  }

  playClick(freq = 800, duration = 0.035) {
    if (this.muted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  playOpen() {
    if (this.muted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(740, ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch (e) {}
  }

  playSuccess() {
    if (this.muted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      
      const now = ctx.currentTime;
      // Dual harmonic chime
      [523.25, 659.25, 783.99].forEach((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(f, now + i * 0.04);
        gain.gain.setValueAtTime(0.025, now + i * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0005, now + i * 0.04 + 0.18);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.04);
        osc.stop(now + i * 0.04 + 0.18);
      });
    } catch (e) {}
  }
}

window.soundEngine = new SoundEngine();
