/**
 * Shubh - Super Intelligent Personnel OS & Master Orchestrator
 * Integrates Spotlight Cards, Command Palette (⌘K), Neural Canvas, AI Assistant, and Investor Calculator.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Canvas Neural Background
  if (window.NeuralCanvas) {
    window.neuralMesh = new NeuralCanvas("neural-canvas");
  }

  // 2. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 3. Setup Dynamic Data & Spotlight Card Tracking
  initSiteData();
  setupSpotlightCards();

  // 4. Setup Real-Time HUD Clock & Telemetry
  setupHUDTelemetry();

  // 5. Setup Command Palette (⌘K / Ctrl+K)
  setupCommandPalette();

  // 6. Setup Super Intelligent AI Assistant
  setupAIAssistant();

  // 7. Setup Investor Allocation Calculator
  setupInvestorCalculator();

  // 8. Setup Interactive Pitch Deck Modal
  setupPitchDeckModal();

  // 9. Setup Contact Modal & Audio Toggle
  setupContactModal();
  setupAudioHUDToggle();

  // 10. Setup FAQ Accordion & Copy Buttons
  setupFAQ();
  setupCopyButtons();
});

// Fallback icon re-render on window load
window.addEventListener("load", () => {
  if (window.lucide) window.lucide.createIcons();
});

/* ==========================================================================
   1. Data Binding & Spotlight Card Hover
   ========================================================================== */
function initSiteData() {
  const config = window.SITE_CONFIG;
  if (!config) return;

  document.title = `${config.founder.name} // Super Intelligent Personnel OS & Investor Hub`;

  // Render Ventures Bento Grid
  const venturesContainer = document.getElementById("ventures-list");
  if (venturesContainer && config.ventures) {
    venturesContainer.innerHTML = config.ventures.map((v) => `
      <div class="spotlight-card p-6 sm:p-8 flex flex-col justify-between group">
        <div>
          <div class="flex items-start justify-between gap-4 mb-4">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              ${v.status}
            </span>
            <span class="text-xs font-mono text-slate-400 uppercase tracking-wider">${v.category}</span>
          </div>

          <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">${v.name}</h3>
          <p class="text-indigo-200/80 text-sm font-medium mb-3">${v.tagline}</p>
          <p class="text-slate-400 text-sm leading-relaxed mb-6">${v.description}</p>

          <!-- Metrics Sub-row -->
          <div class="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-900/80 border border-white/5 mb-6">
            ${v.metrics.map(m => `
              <div class="text-center">
                <div class="text-[11px] text-slate-400">${m.label}</div>
                <div class="text-base font-bold text-white font-mono-val mt-0.5">${m.val}</div>
              </div>
            `).join('')}
          </div>

          <!-- Traction Bullet Highlights -->
          <div class="space-y-2 mb-6">
            <div class="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">Moat & Validations:</div>
            ${v.tractionPoints.map(point => `
              <div class="flex items-start gap-2 text-xs text-slate-300">
                <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
                <span>${point}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${v.tags.map(t => `<span class="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700/50">${t}</span>`).join('')}
          </div>

          <div class="flex items-center gap-3 pt-4 border-t border-white/5">
            <button onclick="openDeckToSlide(1)" class="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 transition-colors">
              <span>View In Pitch Deck</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </button>
            <span class="text-slate-600">•</span>
            <a href="${v.links.github}" target="_blank" rel="noopener" class="text-xs text-slate-400 hover:text-slate-200 inline-flex items-center gap-1 transition-colors">
              <i data-lucide="github" class="w-3.5 h-3.5"></i>
              <span>GitHub Core</span>
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Render Milestones
  const timelineContainer = document.getElementById("timeline-list");
  if (timelineContainer && config.milestones) {
    timelineContainer.innerHTML = config.milestones.map((m) => `
      <div class="relative pl-8 pb-10 last:pb-2 border-l border-indigo-500/20 group">
        <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-500 group-hover:scale-125 group-hover:border-indigo-400 transition-transform"></div>
        <div class="text-xs font-mono text-indigo-400 font-semibold mb-1">${m.period}</div>
        <h4 class="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors">${m.role} <span class="text-slate-400 font-normal">at ${m.organization}</span></h4>
        <p class="text-slate-400 text-sm mt-2 leading-relaxed">${m.summary}</p>
      </div>
    `).join('');
  }

  // Render FAQs
  const faqContainer = document.getElementById("faq-accordion");
  if (faqContainer && config.faq) {
    faqContainer.innerHTML = config.faq.map((item, idx) => `
      <div class="spotlight-card rounded-xl overflow-hidden border border-white/5">
        <button type="button" class="faq-btn w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors" data-faq="${idx}">
          <span class="text-base font-semibold text-slate-200">${item.q}</span>
          <i data-lucide="chevron-down" class="accordion-chevron w-5 h-5 text-indigo-400 shrink-0"></i>
        </button>
        <div class="accordion-content px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
          ${item.a}
        </div>
      </div>
    `).join('');
  }

  if (window.lucide) window.lucide.createIcons();
}

/* Mouse spotlight calculation on all spotlight cards */
function setupSpotlightCards() {
  document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".spotlight-card").forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}

/* ==========================================================================
   2. Real-Time HUD Telemetry & Clock
   ========================================================================== */
function setupHUDTelemetry() {
  const clockEl = document.getElementById("hud-time");
  if (clockEl) {
    const updateTime = () => {
      const now = new Date();
      clockEl.textContent = now.toUTCString().slice(17, 25) + " UTC";
    };
    updateTime();
    setInterval(updateTime, 1000);
  }
}

/* ==========================================================================
   3. Command Palette (⌘K / Ctrl+K)
   ========================================================================== */
function setupCommandPalette() {
  const modal = document.getElementById("cmd-modal");
  const input = document.getElementById("cmd-search-input");
  const triggerBtns = document.querySelectorAll("[data-open-cmd]");
  const closeBtns = document.querySelectorAll("[data-close-cmd]");
  const items = document.querySelectorAll(".cmd-item");

  if (!modal || !input) return;

  function openCMD() {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    input.value = "";
    input.focus();
    filterItems("");
    if (window.soundEngine) window.soundEngine.playOpen();
    document.body.style.overflow = "hidden";
  }

  function closeCMD() {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
  }

  // Keyboard shortcut listener
  window.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (modal.classList.contains("hidden")) {
        openCMD();
      } else {
        closeCMD();
      }
    } else if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeCMD();
    }
  });

  triggerBtns.forEach(btn => btn.addEventListener("click", openCMD));
  closeBtns.forEach(btn => btn.addEventListener("click", closeCMD));
  modal.addEventListener("click", (e) => { if (e.target === modal) closeCMD(); });

  // Filtering actions
  input.addEventListener("input", (e) => {
    filterItems(e.target.value);
  });

  function filterItems(query) {
    const q = query.toLowerCase().trim();
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (!q || text.includes(q)) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  }

  // Command Click Handlers
  items.forEach(item => {
    item.addEventListener("click", () => {
      const action = item.getAttribute("data-action");
      closeCMD();
      if (window.soundEngine) window.soundEngine.playClick();

      if (action === "open-deck") {
        openDeckModal();
      } else if (action === "open-contact") {
        openContactModal();
      } else if (action === "query-ai") {
        const input = document.getElementById("ai-query-input");
        if (input) {
          input.scrollIntoView({ behavior: "smooth" });
          input.focus();
        }
      } else if (action === "toggle-sound") {
        toggleSoundHUD();
      } else if (action === "copy-email") {
        const email = window.SITE_CONFIG?.founder?.links?.email || "founder@shubhcreations.github.io";
        navigator.clipboard.writeText(email);
        showToast("Copied email: " + email, "success");
      }
    });
  });
}

/* ==========================================================================
   4. Super Intelligent AI Assistant
   ========================================================================== */
function setupAIAssistant() {
  const input = document.getElementById("ai-query-input");
  const submitBtn = document.getElementById("ai-submit-btn");
  const responseBox = document.getElementById("ai-response-text");
  const badgeEl = document.getElementById("ai-response-badge");
  const chips = document.querySelectorAll(".ai-query-chip");

  if (!input || !submitBtn || !responseBox) return;

  function runQuery(q) {
    if (!q) return;
    input.value = q;
    submitBtn.disabled = true;
    responseBox.textContent = "Synthesizing verified system response...";

    if (window.soundEngine) window.soundEngine.playClick(900, 0.05);

    setTimeout(() => {
      const result = window.neuralAssistant.query(q);
      if (badgeEl) badgeEl.textContent = result.badge;

      window.neuralAssistant.typewriter(responseBox, result.text, () => {
        submitBtn.disabled = false;
        if (window.soundEngine) window.soundEngine.playSuccess();
      });
    }, 250);
  }

  submitBtn.addEventListener("click", () => runQuery(input.value));
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") runQuery(input.value);
  });

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const q = chip.getAttribute("data-query");
      runQuery(q);
    });
  });
}

/* ==========================================================================
   5. Interactive Investor Allocation Calculator
   ========================================================================== */
function setupInvestorCalculator() {
  const slider = document.getElementById("check-size-slider");
  const checkDisplay = document.getElementById("calc-check-display");
  const ownershipDisplay = document.getElementById("calc-ownership-display");
  const runwayDisplay = document.getElementById("calc-runway-display");
  const milestoneDisplay = document.getElementById("calc-milestone-display");
  const reserveBtn = document.getElementById("calc-reserve-btn");

  if (!slider || !checkDisplay) return;

  const config = window.SITE_CONFIG.investmentRound;
  const valuationCap = config.valuationCap || 12000000; // $12M SAFE cap
  const burnRate = config.burnRateTarget || 55000;

  function updateCalculator() {
    const checkVal = parseInt(slider.value, 10);
    checkDisplay.textContent = `$${checkVal.toLocaleString()}`;

    // Calculate ownership: (check / cap) * 100
    const ownershipPct = ((checkVal / valuationCap) * 100).toFixed(2);
    ownershipDisplay.textContent = `${ownershipPct}%`;

    // Runway added
    const months = (checkVal / burnRate).toFixed(1);
    runwayDisplay.textContent = `+${months} Months`;

    // Dynamic Milestone badge based on check tier
    if (checkVal < 50000) {
      milestoneDisplay.textContent = "Unlocks 6 months of cloud compute & AI model inference fine-tuning.";
    } else if (checkVal < 150000) {
      milestoneDisplay.textContent = "Fully funds 1 dedicated Senior Distributed Systems Engineer for 12 months.";
    } else if (checkVal < 300000) {
      milestoneDisplay.textContent = "Unlocks SOC2 Type II compliance & enterprise pilot pipeline acceleration.";
    } else {
      milestoneDisplay.textContent = "Secures lead angel/institutional allocation with pro-rata & advisory board observer rights.";
    }

    if (window.soundEngine) window.soundEngine.playClick(1400, 0.01);
  }

  slider.addEventListener("input", updateCalculator);
  updateCalculator();

  if (reserveBtn) {
    reserveBtn.addEventListener("click", () => {
      const checkVal = slider.value;
      const noteInput = document.getElementById("investor-note");
      if (noteInput) {
        noteInput.value = `Hi Shubh, I'm interested in reviewing your $1.2M round materials and potentially reserving an allocation of $${parseInt(checkVal).toLocaleString()} via SAFE note.`;
      }
      openContactModal();
    });
  }
}

/* ==========================================================================
   6. Interactive Pitch Deck Modal
   ========================================================================== */
let currentSlideIndex = 0;

function setupPitchDeckModal() {
  const modal = document.getElementById("deck-modal");
  const openButtons = document.querySelectorAll("[data-open-deck]");
  const closeButtons = document.querySelectorAll("[data-close-deck]");
  const prevBtn = document.getElementById("deck-prev-btn");
  const nextBtn = document.getElementById("deck-next-btn");

  if (!modal) return;

  openButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openDeckModal();
    });
  });

  closeButtons.forEach(btn => btn.addEventListener("click", closeDeckModal));
  modal.addEventListener("click", (e) => { if (e.target === modal) closeDeckModal(); });

  if (prevBtn) prevBtn.addEventListener("click", () => navigateSlide(-1));
  if (nextBtn) nextBtn.addEventListener("click", () => navigateSlide(1));

  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("hidden")) {
      if (e.key === "Escape") closeDeckModal();
      if (e.key === "ArrowLeft") navigateSlide(-1);
      if (e.key === "ArrowRight") navigateSlide(1);
    }
  });
}

function openDeckModal() {
  const modal = document.getElementById("deck-modal");
  if (!modal) return;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
  if (window.soundEngine) window.soundEngine.playOpen();
  renderSlide(currentSlideIndex);
}

function closeDeckModal() {
  const modal = document.getElementById("deck-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
}

window.openDeckToSlide = function(slideNumber) {
  currentSlideIndex = Math.max(0, slideNumber - 1);
  openDeckModal();
};

function navigateSlide(direction) {
  const slides = window.SITE_CONFIG?.pitchDeckSlides || [];
  if (!slides.length) return;

  currentSlideIndex += direction;
  if (currentSlideIndex < 0) currentSlideIndex = 0;
  if (currentSlideIndex >= slides.length) currentSlideIndex = slides.length - 1;

  if (window.soundEngine) window.soundEngine.playClick();
  renderSlide(currentSlideIndex);
}

function renderSlide(index) {
  const slides = window.SITE_CONFIG?.pitchDeckSlides || [];
  if (!slides.length || !slides[index]) return;

  const slide = slides[index];
  const total = slides.length;

  const indicator = document.getElementById("slide-indicator");
  if (indicator) indicator.textContent = `Slide ${index + 1} of ${total}`;

  const progressBar = document.getElementById("slide-progress-bar");
  if (progressBar) {
    const percent = ((index + 1) / total) * 100;
    progressBar.style.width = `${percent}%`;
  }

  const slideContent = document.getElementById("deck-slide-content");
  if (slideContent) {
    slideContent.innerHTML = `
      <div class="flex flex-col justify-between h-full space-y-6">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              0${slide.slideNumber} // ${slide.subtitle}
            </span>
            <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              ${slide.keyMetric}
            </span>
          </div>

          <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">${slide.title}</h2>
          <p class="text-slate-300 text-base leading-relaxed mb-6 font-normal">${slide.content}</p>

          <div class="space-y-3 p-5 rounded-2xl bg-slate-900/90 border border-white/5">
            <div class="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">Strategic Execution Highlights:</div>
            ${slide.bullets.map(b => `
              <div class="flex items-start gap-3 text-sm text-slate-200">
                <i data-lucide="shield-check" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
                <span>${b}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
          <div>CONFIDENTIAL // QUALIFIED INVESTORS ONLY</div>
          <div>FOUNDER: SHUBH</div>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  }

  const prevBtn = document.getElementById("deck-prev-btn");
  const nextBtn = document.getElementById("deck-next-btn");
  if (prevBtn) prevBtn.disabled = index === 0;
  if (nextBtn) nextBtn.disabled = index === total - 1;
}

/* ==========================================================================
   7. Contact Modal & Audio Toggle
   ========================================================================== */
function setupContactModal() {
  const modal = document.getElementById("contact-modal");
  const openButtons = document.querySelectorAll("[data-open-contact]");
  const closeButtons = document.querySelectorAll("[data-close-contact]");
  const form = document.getElementById("investor-contact-form");

  if (!modal) return;

  openButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openContactModal();
    });
  });

  closeButtons.forEach(btn => btn.addEventListener("click", closeContactModal));
  modal.addEventListener("click", (e) => { if (e.target === modal) closeContactModal(); });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("investor-name")?.value || "Investor";
      const firm = document.getElementById("investor-firm")?.value || "";
      const email = document.getElementById("investor-email")?.value || "";
      const note = document.getElementById("investor-note")?.value || "";

      const subject = encodeURIComponent(`Investor Inquiry: ${name} (${firm})`);
      const body = encodeURIComponent(`Hi Shubh,\n\nI reviewed your portfolio & round details at shubhcreations.github.io.\n\nFirm/Angel: ${firm}\nEmail: ${email}\n\nNote:\n${note}\n\nBest regards,\n${name}`);

      window.location.href = `mailto:${window.SITE_CONFIG.founder.links.email}?subject=${subject}&body=${body}`;

      showToast("Redirecting to email client... Thank you!", "success");
      closeContactModal();
    });
  }
}

function openContactModal() {
  const modal = document.getElementById("contact-modal");
  if (!modal) return;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
  if (window.soundEngine) window.soundEngine.playOpen();
}

function closeContactModal() {
  const modal = document.getElementById("contact-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
}

function setupAudioHUDToggle() {
  const toggleBtn = document.getElementById("hud-audio-toggle");
  if (!toggleBtn) return;

  function updateAudioHUDIcon() {
    const isMuted = window.soundEngine ? window.soundEngine.isMuted() : true;
    toggleBtn.innerHTML = isMuted 
      ? `<i data-lucide="volume-x" class="w-4 h-4 text-slate-400"></i><span class="text-[11px] font-mono text-slate-400">Audio: OFF</span>`
      : `<i data-lucide="volume-2" class="w-4 h-4 text-emerald-400"></i><span class="text-[11px] font-mono text-emerald-400">Audio: ON</span>`;
    if (window.lucide) window.lucide.createIcons();
  }

  toggleBtn.addEventListener("click", () => {
    if (window.soundEngine) {
      window.soundEngine.toggleSound();
      updateAudioHUDIcon();
    }
  });

  updateAudioHUDIcon();
}

window.toggleSoundHUD = function() {
  if (window.soundEngine) {
    window.soundEngine.toggleSound();
    const toggleBtn = document.getElementById("hud-audio-toggle");
    if (toggleBtn) {
      const isMuted = window.soundEngine.isMuted();
      toggleBtn.innerHTML = isMuted 
        ? `<i data-lucide="volume-x" class="w-4 h-4 text-slate-400"></i><span class="text-[11px] font-mono text-slate-400">Audio: OFF</span>`
        : `<i data-lucide="volume-2" class="w-4 h-4 text-emerald-400"></i><span class="text-[11px] font-mono text-emerald-400">Audio: ON</span>`;
      if (window.lucide) window.lucide.createIcons();
    }
  }
};

/* ==========================================================================
   8. FAQ Accordion & Copy Buttons
   ========================================================================== */
function setupFAQ() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".faq-btn");
    if (!btn) return;

    const content = btn.nextElementSibling;
    const chevron = btn.querySelector(".accordion-chevron");
    const isOpen = content.classList.contains("open");

    document.querySelectorAll(".accordion-content").forEach(c => c.classList.remove("open"));
    document.querySelectorAll(".accordion-chevron").forEach(ch => ch.classList.remove("rotate"));

    if (!isOpen) {
      content.classList.add("open");
      if (chevron) chevron.classList.add("rotate");
      if (window.soundEngine) window.soundEngine.playClick(650, 0.02);
    }
  });
}

function setupCopyButtons() {
  document.querySelectorAll("[data-copy-email]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = window.SITE_CONFIG?.founder?.links?.email || "founder@shubhcreations.github.io";
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied email (${email}) to clipboard!`, "success");
      });
    });
  });

  document.querySelectorAll("[data-copy-link]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(window.location.href).then(() => {
        showToast("Portfolio URL copied to clipboard!", "success");
      });
    });
  });
}

function showToast(message, type = "info") {
  const toast = document.getElementById("toast-notification");
  const toastText = document.getElementById("toast-message");
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.remove("hidden");
  toast.classList.add("show");

  if (window.soundEngine) window.soundEngine.playSuccess();

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.classList.add("hidden"), 300);
  }, 3500);
}
window.showToast = showToast;
