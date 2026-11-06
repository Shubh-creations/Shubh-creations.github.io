/**
 * Shubham Pawar // Founder & Systems Architect - Master Orchestrator
 * High-performance, clean, editorial interactions with zero visual clutter.
 * Twitter: @builtfor101
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Minimalist Canvas Background
  if (window.NeuralCanvas) {
    window.neuralMesh = new NeuralCanvas("neural-canvas");
  }

  // 2. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 3. Setup Dynamic Data & Minimal Card Spotlight Tracking
  initSiteData();
  setupSpotlightCards();

  // 4. Setup Real-Time HUD Clock & Telemetry
  setupHUDTelemetry();

  // 5. Setup Command Palette (⌘K / Ctrl+K)
  setupCommandPalette();

  // 6. Setup Founder AI Assistant (Digital Twin)
  setupAIAssistant();

  // 7. Setup Interactive Founder Dossier Modal
  setupDossierModal();

  // 8. Setup Contact Modal & Audio Toggle
  setupContactModal();
  setupAudioHUDToggle();

  // 9. Setup FAQ Accordion & Copy Buttons
  setupFAQ();
  setupCopyButtons();
});

window.addEventListener("load", () => {
  if (window.lucide) window.lucide.createIcons();
});

/* ==========================================================================
   1. Data Binding & Minimalist Spotlight Cards
   ========================================================================== */
function initSiteData() {
  const config = window.SITE_CONFIG;
  if (!config) return;

  document.title = `${config.founder.name} // Founder & Systems Architect (@builtfor101)`;

  // Dynamically reflect current host
  const currentHost = window.location.hostname || "shubh-creations.github.io";
  const navDomain = document.getElementById("nav-domain-label");
  const footerDomain = document.getElementById("footer-domain-link");
  if (navDomain && currentHost !== "localhost" && currentHost !== "127.0.0.1") {
    navDomain.textContent = currentHost;
  }
  if (footerDomain && currentHost !== "localhost" && currentHost !== "127.0.0.1") {
    footerDomain.textContent = currentHost;
    footerDomain.href = window.location.origin + window.location.pathname;
  }

  // Render Founder Principles
  const principlesContainer = document.getElementById("principles-list");
  if (principlesContainer && config.principles) {
    principlesContainer.innerHTML = config.principles.map(p => `
      <div class="minimal-card p-6 flex flex-col justify-between group">
        <div>
          <div class="text-xs font-mono text-zinc-500 mb-3">${p.num} // PRINCIPLE</div>
          <h3 class="text-lg font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors">${p.title}</h3>
          <p class="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">${p.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // Render Ventures List
  const venturesContainer = document.getElementById("ventures-list");
  if (venturesContainer && config.ventures) {
    venturesContainer.innerHTML = config.ventures.map((v, idx) => `
      <div class="minimal-card p-6 sm:p-8 flex flex-col justify-between group">
        <div>
          <div class="flex items-start justify-between gap-4 mb-4">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-white/5 text-zinc-300 border border-white/10">
              0${idx + 1} // ${v.status}
            </span>
            <span class="text-xs font-mono text-zinc-500 uppercase tracking-widest">${v.category}</span>
          </div>

          <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors">${v.name}</h3>
          <p class="text-zinc-300 text-sm font-medium mb-3">${v.tagline}</p>
          <p class="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">${v.description}</p>

          <!-- Metrics Ledger Row -->
          <div class="grid grid-cols-3 gap-2 p-3 rounded-lg bg-white/[0.02] border border-white/5 mb-6">
            ${v.metrics.map(m => `
              <div class="text-center">
                <div class="text-[10px] font-mono text-zinc-500 uppercase">${m.label}</div>
                <div class="text-sm sm:text-base font-bold text-white font-mono-val mt-0.5">${m.val}</div>
              </div>
            `).join('')}
          </div>

          <!-- Proof points -->
          <div class="space-y-2 mb-6">
            <div class="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold">Key Highlights:</div>
            ${v.tractionPoints.map(point => `
              <div class="flex items-start gap-2 text-xs text-zinc-300 font-light">
                <i data-lucide="check" class="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5"></i>
                <span>${point}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${v.tags.map(t => `<span class="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-zinc-400 border border-white/5">${t}</span>`).join('')}
          </div>

          <div class="flex items-center gap-3 pt-4 border-t border-white/5">
            <button onclick="openDeckToSlide(1)" class="text-xs font-semibold text-white hover:text-zinc-300 inline-flex items-center gap-1 transition-colors">
              <span>View Dossier</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </button>
            <span class="text-zinc-700">•</span>
            <a href="${v.links.github}" target="_blank" rel="noopener" class="text-xs text-zinc-400 hover:text-white inline-flex items-center gap-1 transition-colors">
              <i data-lucide="github" class="w-3.5 h-3.5"></i>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Render Essays
  const essaysContainer = document.getElementById("essays-list");
  if (essaysContainer && config.essays) {
    essaysContainer.innerHTML = config.essays.map((e, idx) => `
      <div class="minimal-card p-6 sm:p-7 flex flex-col justify-between group">
        <div>
          <div class="flex items-center justify-between text-xs font-mono text-zinc-500 mb-3">
            <span>${e.date}</span>
            <span>${e.readTime}</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-3 group-hover:text-zinc-200 transition-colors">${e.title}</h3>
          <p class="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed mb-4">${e.snippet}</p>
          <div class="p-3.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-zinc-300 font-light leading-relaxed">
            "${e.body}"
          </div>
        </div>
        <div class="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
          <a href="https://x.com/builtfor101" target="_blank" rel="noopener" class="text-xs font-mono text-zinc-400 hover:text-white inline-flex items-center gap-1.5 transition-colors">
            <span>Discuss on X</span>
            <i data-lucide="external-link" class="w-3 h-3"></i>
          </a>
          <span class="text-[10px] font-mono text-zinc-600">@builtfor101</span>
        </div>
      </div>
    `).join('');
  }

  // Render Milestones
  const timelineContainer = document.getElementById("timeline-list");
  if (timelineContainer && config.milestones) {
    timelineContainer.innerHTML = config.milestones.map((m) => `
      <div class="relative pl-6 pb-8 last:pb-2 border-l border-white/10 group">
        <div class="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-900 border border-white/40 group-hover:scale-125 transition-transform"></div>
        <div class="text-[11px] font-mono text-zinc-500 mb-1">${m.period}</div>
        <h4 class="text-base font-bold text-white group-hover:text-zinc-300 transition-colors">${m.role} <span class="text-zinc-500 font-normal">at ${m.organization}</span></h4>
        <p class="text-zinc-400 text-xs sm:text-sm mt-1.5 leading-relaxed font-light">${m.summary}</p>
      </div>
    `).join('');
  }

  // Render FAQs
  const faqContainer = document.getElementById("faq-accordion");
  if (faqContainer && config.faq) {
    faqContainer.innerHTML = config.faq.map((item, idx) => `
      <div class="minimal-card rounded-lg overflow-hidden border border-white/5">
        <button type="button" class="faq-btn w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors" data-faq="${idx}">
          <span class="text-sm font-medium text-zinc-200">${item.q}</span>
          <i data-lucide="chevron-down" class="accordion-chevron w-4 h-4 text-zinc-500 shrink-0"></i>
        </button>
        <div class="accordion-content px-5 pb-4 text-zinc-400 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-3 font-light">
          ${item.a}
        </div>
      </div>
    `).join('');
  }

  if (window.lucide) window.lucide.createIcons();
}

/* Mouse spotlight calculation on minimal cards */
function setupSpotlightCards() {
  document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".minimal-card").forEach((card) => {
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

  input.addEventListener("input", (e) => filterItems(e.target.value));

  function filterItems(query) {
    const q = query.toLowerCase().trim();
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = (!q || text.includes(q)) ? "flex" : "none";
    });
  }

  items.forEach(item => {
    item.addEventListener("click", () => {
      const action = item.getAttribute("data-action");
      closeCMD();
      if (window.soundEngine) window.soundEngine.playClick();

      if (action === "open-deck") {
        openDeckModal();
      } else if (action === "open-contact") {
        openContactModal();
      } else if (action === "open-twitter") {
        window.open("https://x.com/builtfor101", "_blank");
      } else if (action === "query-ai") {
        const input = document.getElementById("ai-query-input");
        if (input) {
          input.scrollIntoView({ behavior: "smooth" });
          input.focus();
        }
      } else if (action === "toggle-sound") {
        toggleSoundHUD();
      } else if (action === "copy-email") {
        const email = window.SITE_CONFIG?.founder?.links?.email || "founder@shubh-creations.github.io";
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
    responseBox.textContent = "Querying founder core...";

    if (window.soundEngine) window.soundEngine.playClick(900, 0.04);

    setTimeout(() => {
      const result = window.neuralAssistant.query(q);
      if (badgeEl) badgeEl.textContent = result.badge;

      window.neuralAssistant.typewriter(responseBox, result.text, () => {
        submitBtn.disabled = false;
        if (window.soundEngine) window.soundEngine.playSuccess();
      });
    }, 200);
  }

  submitBtn.addEventListener("click", () => runQuery(input.value));
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") runQuery(input.value);
  });

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      runQuery(chip.getAttribute("data-query"));
    });
  });
}

/* ==========================================================================
   5. Interactive Founder Dossier Modal
   ========================================================================== */
let currentSlideIndex = 0;

function setupDossierModal() {
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
  const slides = window.SITE_CONFIG?.founderDossier || [];
  if (!slides.length) return;

  currentSlideIndex += direction;
  if (currentSlideIndex < 0) currentSlideIndex = 0;
  if (currentSlideIndex >= slides.length) currentSlideIndex = slides.length - 1;

  if (window.soundEngine) window.soundEngine.playClick();
  renderSlide(currentSlideIndex);
}

function renderSlide(index) {
  const slides = window.SITE_CONFIG?.founderDossier || [];
  if (!slides.length || !slides[index]) return;

  const slide = slides[index];
  const total = slides.length;

  const indicator = document.getElementById("slide-indicator");
  if (indicator) indicator.textContent = `0${index + 1} / 0${total}`;

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
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              0${slide.slideNumber} // ${slide.subtitle}
            </span>
            <span class="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-white/5 text-white border border-white/10">
              ${slide.keyMetric}
            </span>
          </div>

          <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">${slide.title}</h2>
          <p class="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-light">${slide.content}</p>

          <div class="space-y-2.5 p-5 rounded-xl bg-white/[0.02] border border-white/5">
            <div class="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold">Strategic Highlights:</div>
            ${slide.bullets.map(b => `
              <div class="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 font-light">
                <i data-lucide="check" class="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5"></i>
                <span>${b}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
          <div>SHUBHAM PAWAR // @builtfor101</div>
          <div>FOUNDER DOSSIER</div>
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
   6. Contact Modal & Audio Toggle
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
      const name = document.getElementById("investor-name")?.value || "Builder";
      const firm = document.getElementById("investor-firm")?.value || "";
      const email = document.getElementById("investor-email")?.value || "";
      const note = document.getElementById("investor-note")?.value || "";

      const subject = encodeURIComponent(`Founder Connect: ${name} (${firm})`);
      const body = encodeURIComponent(`Hi Shubham,\n\nI reviewed your portfolio at shubh-creations.github.io.\n\nFrom: ${name} (${firm})\nEmail: ${email}\n\nNote:\n${note}\n\nBest,\n${name}`);

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
      ? `<i data-lucide="volume-x" class="w-3.5 h-3.5 text-zinc-500"></i><span class="text-[11px] font-mono text-zinc-500">Audio: OFF</span>`
      : `<i data-lucide="volume-2" class="w-3.5 h-3.5 text-emerald-400"></i><span class="text-[11px] font-mono text-emerald-400">Audio: ON</span>`;
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
        ? `<i data-lucide="volume-x" class="w-3.5 h-3.5 text-zinc-500"></i><span class="text-[11px] font-mono text-zinc-500">Audio: OFF</span>`
        : `<i data-lucide="volume-2" class="w-3.5 h-3.5 text-emerald-400"></i><span class="text-[11px] font-mono text-emerald-400">Audio: ON</span>`;
      if (window.lucide) window.lucide.createIcons();
    }
  }
};

/* ==========================================================================
   7. FAQ Accordion & Copy Buttons
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
      const email = window.SITE_CONFIG?.founder?.links?.email || "founder@shubh-creations.github.io";
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied ${email} to clipboard`, "success");
      });
    });
  });

  document.querySelectorAll("[data-copy-link]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(window.location.href).then(() => {
        showToast("URL copied to clipboard", "success");
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
    setTimeout(() => toast.classList.add("hidden"), 250);
  }, 3000);
}
window.showToast = showToast;
