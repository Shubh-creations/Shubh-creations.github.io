/**
 * Shubh Portfolio & Investor Hub - Main JavaScript
 * Handles interactive elements, slide deck modal, counter animations, FAQ accordions, and meeting booking.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons if available
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 1. Initialize Dynamic Data from SITE_CONFIG
  initSiteData();

  // 2. Setup Slide Deck Modal Interactions
  setupPitchDeckModal();

  // 3. Setup Contact / Meeting Modal
  setupContactModal();

  // 4. Setup FAQ Accordions
  setupFAQ();

  // 5. Setup Animated Number Counters on Scroll
  setupCounterAnimations();

  // 6. Setup Mobile Navigation Drawer
  setupMobileNav();

  // 7. Setup Copy Link & Email Triggers
  setupCopyButtons();
});

/* ==========================================================================
   Site Data Binding
   ========================================================================== */
function initSiteData() {
  const config = window.SITE_CONFIG;
  if (!config) return;

  // Set page title and basic texts
  document.title = `${config.founder.name} | Founder Portfolio & Investor Hub`;

  // Render Ventures Bento Grid
  const venturesContainer = document.getElementById("ventures-list");
  if (venturesContainer && config.ventures) {
    venturesContainer.innerHTML = config.ventures.map((v, idx) => `
      <div class="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative group overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/20 transition-all"></div>
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
          <div class="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-900/60 border border-white/5 mb-6">
            ${v.metrics.map(m => `
              <div class="text-center">
                <div class="text-xs text-slate-400">${m.label}</div>
                <div class="text-base font-bold text-white font-mono-val mt-0.5">${m.val}</div>
              </div>
            `).join('')}
          </div>

          <!-- Traction Bullet Highlights -->
          <div class="space-y-2 mb-6">
            <div class="text-xs font-semibold uppercase tracking-wider text-slate-400">Proof Points & Moat:</div>
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
              <span>GitHub / Architecture</span>
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Render Milestones / Track Record
  const timelineContainer = document.getElementById("timeline-list");
  if (timelineContainer && config.milestones) {
    timelineContainer.innerHTML = config.milestones.map((m, idx) => `
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
      <div class="glass-panel rounded-xl overflow-hidden border border-white/5">
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

  // Refresh Lucide icons for dynamically added HTML
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/* ==========================================================================
   Interactive Pitch Deck Modal & Slides
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

  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      closeDeckModal();
    });
  });

  // Close modal on click outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeDeckModal();
    }
  });

  // Navigation handlers
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      navigateSlide(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      navigateSlide(1);
    });
  }

  // Keyboard navigation
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

  renderSlide(currentSlideIndex);
}

function renderSlide(index) {
  const slides = window.SITE_CONFIG?.pitchDeckSlides || [];
  if (!slides.length || !slides[index]) return;

  const slide = slides[index];
  const total = slides.length;

  // Counter indicator
  const indicator = document.getElementById("slide-indicator");
  if (indicator) indicator.textContent = `Slide ${index + 1} of ${total}`;

  // Progress Bar
  const progressBar = document.getElementById("slide-progress-bar");
  if (progressBar) {
    const percent = ((index + 1) / total) * 100;
    progressBar.style.width = `${percent}%`;
  }

  // Render Slide Content
  const slideContent = document.getElementById("deck-slide-content");
  if (slideContent) {
    slideContent.innerHTML = `
      <div class="flex flex-col justify-between h-full space-y-6 animate-fadeIn">
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

          <div class="space-y-3 p-5 rounded-2xl bg-slate-900/80 border border-white/5">
            <div class="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">Strategic Highlights:</div>
            ${slide.bullets.map(b => `
              <div class="flex items-start gap-3 text-sm text-slate-200">
                <i data-lucide="shield-check" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
                <span>${b}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <div>CONFIDENTIAL // STRICTLY FOR QUALIFIED INVESTORS</div>
          <div>FOUNDER: SHUBH</div>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  }

  // Update button states
  const prevBtn = document.getElementById("deck-prev-btn");
  const nextBtn = document.getElementById("deck-next-btn");
  if (prevBtn) prevBtn.disabled = index === 0;
  if (nextBtn) nextBtn.disabled = index === total - 1;
}

/* ==========================================================================
   Contact / Meeting Scheduler Modal
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
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.style.overflow = "hidden";
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.style.overflow = "";
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.style.overflow = "";
    }
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("investor-name")?.value || "Investor";
      const firm = document.getElementById("investor-firm")?.value || "";
      const email = document.getElementById("investor-email")?.value || "";
      const note = document.getElementById("investor-note")?.value || "";

      // Construct mailto link
      const subject = encodeURIComponent(`Investor Inquiry: ${name} (${firm})`);
      const body = encodeURIComponent(`Hi Shubh,\n\nI reviewed your portfolio & deck at shubh.github.io and would like to connect.\n\nFirm / Angel: ${firm}\nEmail: ${email}\n\nNote:\n${note}\n\nBest regards,\n${name}`);
      
      window.location.href = `mailto:${window.SITE_CONFIG.founder.links.email}?subject=${subject}&body=${body}`;

      showToast("Redirecting to email client... Thanks for reaching out!", "success");
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.style.overflow = "";
    });
  }
}

/* ==========================================================================
   FAQ Accordions
   ========================================================================== */
function setupFAQ() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".faq-btn");
    if (!btn) return;

    const content = btn.nextElementSibling;
    const chevron = btn.querySelector(".accordion-chevron");

    const isOpen = content.classList.contains("open");

    // Close all other accordions
    document.querySelectorAll(".accordion-content").forEach(c => c.classList.remove("open"));
    document.querySelectorAll(".accordion-chevron").forEach(ch => ch.classList.remove("rotate"));

    if (!isOpen) {
      content.classList.add("open");
      if (chevron) chevron.classList.add("rotate");
    }
  });
}

/* ==========================================================================
   Animated Number Counters on Scroll
   ========================================================================== */
function setupCounterAnimations() {
  const metricCards = document.querySelectorAll("[data-counter-target]");
  if (!metricCards.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const targetStr = card.getAttribute("data-counter-target") || "";
        obs.unobserve(card);
      }
    });
  }, { threshold: 0.3 });

  metricCards.forEach(c => observer.observe(c));
}

/* ==========================================================================
   Mobile Nav Drawer
   ========================================================================== */
function setupMobileNav() {
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!menuToggle || !mobileMenu) return;

  menuToggle.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.contains("hidden");
    if (isHidden) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

/* ==========================================================================
   Copy Link & Toast Notification
   ========================================================================== */
function setupCopyButtons() {
  const copyEmailButtons = document.querySelectorAll("[data-copy-email]");
  const copyLinkButtons = document.querySelectorAll("[data-copy-link]");

  copyEmailButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = window.SITE_CONFIG?.founder?.links?.email || "founder@shubh.github.io";
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied email (${email}) to clipboard!`, "success");
      }).catch(() => {
        showToast("Email: " + email, "info");
      });
    });
  });

  copyLinkButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const url = window.location.href;
      navigator.clipboard.writeText(url).then(() => {
        showToast("Portfolio link copied to clipboard!", "success");
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

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.classList.add("hidden"), 300);
  }, 3500);
}
window.showToast = showToast;
