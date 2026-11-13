/**
 * Shubham Pawar // AI Startup Founder & Systems Engineer - Master Orchestrator
 * Palette: Gray (#2B2D31), Silver (#D9DADC), Yellow (#FFC93C)
 * Co-Founder @ Suranyx (https://suranyx.com)
 * Creator @ Vadhu-Var / VV (https://vadhu-var.vercel.app)
 * Co-founder (COO) @ Rodimus Tech (rodimus-tech.com)
 * 1 Year Stealth Founder @ Sarvaflow (Automated Workflows Marketplace)
 * GitHub: https://github.com/Shubh-creations | Twitter: @builtfor101 | LinkedIn: in/shubhampawar-in
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

  // 3. Initialize Site Data, Flagships, Production Stack, Deep-Tech Systems
  initSiteData();
  setupSpotlightCards();
  setupHeroDeviceSwitcher();
  setupDeepTechFilter();
  setupArchitectureDrawer();
  renderGitHubPulse();

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

  // 10. Developer Console Easter Egg
  setupConsoleEasterEgg();
});

window.addEventListener("load", () => {
  if (window.lucide) window.lucide.createIcons();
});

/* ==========================================================================
   1. Data Binding & Flagship / Systems Renderers
   ========================================================================== */
function initSiteData() {
  const config = window.SITE_CONFIG;
  if (!config) return;

  document.title = `${config.founder.name} — AI Startup Founder & Systems Engineer | Suranyx & VV`;

  // Dynamically reflect current host in telemetry bar
  const currentHost = window.location.hostname || "shubh-creations.github.io";
  const navDomain = document.getElementById("nav-domain-label");
  if (navDomain && currentHost !== "localhost" && currentHost !== "127.0.0.1") {
    navDomain.textContent = currentHost;
  }

  // Render Flagship Production Platforms (Suranyx & Vadhu-Var)
  renderFlagships();

  // Render Production Stack & Systems Matrix
  renderProductionStack();

  // Initial Render of Deep-Tech Systems
  renderDeepTechSystems("all");

  // Render Founder Principles
  const principlesContainer = document.getElementById("principles-list");
  if (principlesContainer && config.principles) {
    principlesContainer.innerHTML = config.principles.map(p => `
      <div class="minimal-card p-6 flex flex-col justify-between group">
        <div>
          <div class="text-xs font-mono text-[#FFC93C] font-bold mb-3">${p.num} // PRINCIPLE</div>
          <h3 class="text-lg font-bold text-white mb-2 group-hover:text-[#FFC93C] transition-colors">${p.title}</h3>
          <p class="text-[#D9DADC] text-xs sm:text-sm leading-relaxed font-light">${p.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // Render Milestones (Track Record)
  const timelineContainer = document.getElementById("timeline-list");
  if (timelineContainer && config.milestones) {
    timelineContainer.innerHTML = config.milestones.map((m) => `
      <div class="relative pl-6 pb-8 last:pb-2 border-l border-white/10 group">
        <div class="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[#18191C] border border-[#FFC93C] group-hover:scale-125 transition-transform"></div>
        <div class="text-[11px] font-mono text-[#FFC93C] font-semibold mb-1">${m.period}</div>
        <h4 class="text-base font-bold text-white group-hover:text-[#FFC93C] transition-colors">${m.role} <span class="text-[#8E9297] font-normal">at ${m.organization}</span></h4>
        <p class="text-[#D9DADC] text-xs sm:text-sm mt-1.5 leading-relaxed font-light">${m.summary}</p>
      </div>
    `).join('');
  }

  // Render Technical Essays & Notes
  const essaysContainer = document.getElementById("essays-list");
  if (essaysContainer && config.essays) {
    essaysContainer.innerHTML = config.essays.map((e) => `
      <div class="minimal-card p-6 sm:p-7 flex flex-col justify-between group">
        <div>
          <div class="flex items-center justify-between text-xs font-mono text-[#8E9297] mb-3">
            <span>${e.date}</span>
            <span class="text-[#FFC93C] font-semibold">${e.readTime}</span>
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#FFC93C] transition-colors">${e.title}</h3>
          <p class="text-[#D9DADC] text-xs sm:text-sm font-light leading-relaxed mb-4">${e.snippet}</p>
          <div class="p-3.5 rounded-xl bg-[#18191C] border border-white/5 text-xs text-[#D9DADC] font-mono text-[11px] leading-relaxed">
            ${e.body}
          </div>
        </div>
        <div class="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
          <a href="https://x.com/builtfor101" target="_blank" rel="noopener noreferrer" class="text-xs font-mono text-[#D9DADC] hover:text-[#FFC93C] inline-flex items-center gap-1.5 transition-colors">
            <span>Discuss on X</span>
            <i data-lucide="external-link" class="w-3 h-3 text-[#FFC93C]"></i>
          </a>
          <span class="text-[10px] font-mono text-[#8E9297]">@builtfor101</span>
        </div>
      </div>
    `).join('');
  }

  // Render FAQs
  const faqContainer = document.getElementById("faq-accordion");
  if (faqContainer && config.faq) {
    faqContainer.innerHTML = config.faq.map((item, idx) => `
      <div class="minimal-card rounded-xl overflow-hidden border border-white/5">
        <button type="button" class="faq-btn w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors" data-faq="${idx}">
          <span class="text-sm font-semibold text-white">${item.q}</span>
          <i data-lucide="chevron-down" class="accordion-chevron w-4 h-4 text-[#FFC93C] shrink-0"></i>
        </button>
        <div class="accordion-content px-5 pb-4 text-[#D9DADC] text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-3 font-light">
          ${item.a}
        </div>
      </div>
    `).join('');
  }

  if (window.lucide) window.lucide.createIcons();
}

/* ==========================================================================
   2. Render Flagship Platforms (Suranyx & Vadhu-Var)
   ========================================================================== */
function renderFlagships() {
  const container = document.getElementById("flagships-list");
  const config = window.SITE_CONFIG;
  if (!container || !config?.flagships) return;

  container.innerHTML = config.flagships.map((f, idx) => `
    <article class="flagship-card p-6 sm:p-9 flex flex-col justify-between group">
      <div>
        <!-- Card Header Badges -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div class="flex items-center gap-2">
            <span class="flagship-badge">${f.badge}</span>
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[#FFC93C] bg-[#FFC93C]/10 border border-[#FFC93C]/30 font-bold">
              <span class="w-1.5 h-1.5 rounded-full bg-[#FFC93C] animate-pulse"></span>
              ${f.status}
            </span>
          </div>
          <span class="text-xs font-mono text-[#8E9297] uppercase tracking-wider">${f.category}</span>
        </div>

        <!-- Title & Subtitle -->
        <div class="mb-4">
          <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
            <span>${f.name}</span>
            <a href="${f.url}" target="_blank" rel="noopener noreferrer" class="text-zinc-400 hover:text-[#FFC93C] transition-colors" title="Visit ${f.displayUrl}">
              <i data-lucide="external-link" class="w-4 h-4"></i>
            </a>
          </h3>
          <div class="text-xs font-mono text-[#FFC93C] font-semibold mt-1">${f.role}</div>
        </div>

        <!-- Tagline & Description -->
        <p class="text-white text-sm sm:text-base font-medium mb-3 leading-snug">${f.tagline}</p>
        <p class="text-[#D9DADC] text-xs sm:text-sm leading-relaxed mb-6 font-light">${f.description}</p>

        <!-- Technical Metrics Grid -->
        <div class="grid grid-cols-3 gap-2.5 p-3.5 rounded-xl bg-[#18191C] border border-white/5 mb-6">
          ${f.metrics.map(m => `
            <div class="text-center">
              <div class="text-[9px] font-mono text-[#8E9297] uppercase tracking-wider truncate">${m.label}</div>
              <div class="text-xs sm:text-sm font-bold text-white font-mono mt-0.5 truncate">${m.val}</div>
            </div>
          `).join('')}
        </div>

        <!-- Invariants & Highlights -->
        <div class="space-y-2 mb-6">
          <div class="text-[10px] font-mono uppercase tracking-widest text-[#FFC93C] font-bold">Production Invariants &amp; Architecture:</div>
          ${f.highlights.map(h => `
            <div class="flex items-start gap-2.5 text-xs text-[#D9DADC] font-light leading-relaxed">
              <i data-lucide="shield-check" class="w-3.5 h-3.5 text-[#FFC93C] shrink-0 mt-0.5"></i>
              <span>${h}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div>
        <!-- Tech Stack Pills -->
        <div class="flex flex-wrap gap-1.5 mb-6">
          ${f.stack.map(s => `
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/[0.04] text-[#D9DADC] border border-white/10">
              ${s}
            </span>
          `).join('')}
        </div>

        <!-- Interactive CTAs (Using .btn-yellow for primary action!) -->
        <div class="flex items-center gap-3 pt-5 border-t border-white/10 flex-wrap">
          <a href="${f.url}" target="_blank" rel="noopener noreferrer" class="btn-yellow text-xs py-2 px-5 inline-flex items-center gap-1.5">
            <span>Launch ${f.name}</span>
            <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
          </a>

          <button onclick="openSpecDrawer('${f.id}')" class="btn-ghost text-xs py-2 px-4 inline-flex items-center gap-1.5 text-[#D9DADC] hover:text-white">
            <i data-lucide="terminal" class="w-3.5 h-3.5 text-[#FFC93C]"></i>
            <span>View Architecture Spec</span>
          </button>
        </div>
      </div>
    </article>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

/* ==========================================================================
   3. Render Production Stack & Systems Matrix
   ========================================================================== */
function renderProductionStack() {
  const container = document.getElementById("production-stack-container");
  const config = window.SITE_CONFIG;
  if (!container || !config?.productionStack) return;

  container.innerHTML = config.productionStack.map((domain, idx) => `
    <div class="minimal-card p-6 sm:p-7 border border-white/10 space-y-5 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between text-xs font-mono text-[#8E9297] mb-2">
          <span>0${idx + 1} // DOMAIN MATRIX</span>
          <span class="text-[#FFC93C] font-bold">${domain.technologies.length} Shipped Primitives</span>
        </div>
        <h3 class="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <i data-lucide="${domain.icon}" class="w-4 h-4 text-[#FFC93C]"></i>
          <span>${domain.category}</span>
        </h3>
        <p class="text-[#D9DADC] text-xs sm:text-sm font-light mt-1 leading-relaxed">${domain.summary}</p>
      </div>

      <div class="space-y-2.5 pt-3 border-t border-white/5">
        ${domain.technologies.map(tech => `
          <div class="p-2.5 rounded-xl bg-[#18191C] border border-white/5 hover:border-[#FFC93C]/30 transition-colors">
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono font-bold text-white">${tech.name}</span>
            </div>
            <p class="text-[11px] text-[#D9DADC] font-light mt-0.5 leading-snug">${tech.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

/* ==========================================================================
   4. Render Deep-Tech Systems with Filtering
   ========================================================================== */
function renderDeepTechSystems(filter = "all") {
  const container = document.getElementById("deep-tech-list");
  const config = window.SITE_CONFIG;
  if (!container || !config?.deepTechSystems) return;

  const filtered = config.deepTechSystems.filter(sys => {
    if (filter === "all") return true;
    if (filter === "ai-ml") return sys.categoryKey === "ai-ml";
    if (filter === "robotics-defense") return sys.categoryKey === "robotics-defense";
    if (filter === "ventures") return sys.categoryKey === "ventures";
    return true;
  });

  container.innerHTML = filtered.map((sys, idx) => `
    <div class="minimal-card p-6 sm:p-7 flex flex-col justify-between group">
      <div>
        <div class="flex items-start justify-between gap-4 mb-4">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-[#FFC93C]/10 text-[#FFC93C] border border-[#FFC93C]/30">
            0${idx + 1} // ${sys.status}
          </span>
          <span class="text-xs font-mono text-[#8E9297] uppercase tracking-widest">${sys.category}</span>
        </div>

        <h3 class="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#FFC93C] transition-colors flex items-center justify-between">
          <span>${sys.name}</span>
        </h3>
        <p class="text-white text-xs sm:text-sm font-medium mb-3">${sys.tagline}</p>
        <p class="text-[#D9DADC] text-xs sm:text-sm leading-relaxed mb-6 font-light">${sys.description}</p>

        <!-- Metrics Row -->
        <div class="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#18191C] border border-white/5 mb-6">
          ${sys.metrics.map(m => `
            <div class="text-center">
              <div class="text-[9px] font-mono text-[#8E9297] uppercase truncate">${m.label}</div>
              <div class="text-xs sm:text-sm font-bold text-white font-mono mt-0.5 truncate">${m.val}</div>
            </div>
          `).join('')}
        </div>

        <!-- Highlights -->
        <div class="space-y-2 mb-6">
          <div class="text-[10px] font-mono uppercase tracking-widest text-[#FFC93C] font-bold">Engineering Highlights:</div>
          ${sys.highlights.map(h => `
            <div class="flex items-start gap-2 text-xs text-[#D9DADC] font-light leading-relaxed">
              <i data-lucide="check" class="w-3.5 h-3.5 text-[#FFC93C] shrink-0 mt-0.5"></i>
              <span>${h}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div>
        <div class="flex flex-wrap gap-1.5 mb-5">
          ${sys.tags.map(t => `<span class="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/[0.04] text-[#D9DADC] border border-white/5">${t}</span>`).join('')}
        </div>

        <div class="flex items-center gap-3 pt-4 border-t border-white/5 flex-wrap">
          ${sys.links.site ? `
            <a href="${sys.links.site}" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-[#FFC93C] hover:underline inline-flex items-center gap-1 transition-colors">
              <i data-lucide="globe" class="w-3.5 h-3.5"></i>
              <span>Website</span>
            </a>
          ` : ''}
          ${sys.links.github ? `
            <a href="${sys.links.github}" target="_blank" rel="noopener noreferrer" class="text-xs text-[#D9DADC] hover:text-white inline-flex items-center gap-1 transition-colors">
              <i data-lucide="github" class="w-3.5 h-3.5"></i>
              <span>Source</span>
            </a>
          ` : ''}
          ${sys.links.specId ? `
            <button onclick="openSpecDrawer('${sys.links.specId}')" class="text-xs font-mono text-[#8E9297] hover:text-[#FFC93C] inline-flex items-center gap-1 transition-colors ml-auto">
              <span>View Specs</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5 text-[#FFC93C]"></i>
            </button>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

function setupDeepTechFilter() {
  const buttons = document.querySelectorAll(".tech-filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => {
        b.classList.remove("bg-[#FFC93C]", "text-black", "font-bold");
        b.classList.add("bg-white/[0.04]", "text-[#D9DADC]");
      });
      btn.classList.add("bg-[#FFC93C]", "text-black", "font-bold");
      btn.classList.remove("bg-white/[0.04]", "text-[#D9DADC]");

      const filter = btn.getAttribute("data-filter") || "all";
      renderDeepTechSystems(filter);
      if (window.soundEngine) window.soundEngine.playClick(800, 0.02);
    });
  });
}

/* ==========================================================================
   5. Interactive Hero Device Screen Switcher (Matches Video Phone Preview!)
   ========================================================================== */
function setupHeroDeviceSwitcher() {
  const tabs = document.querySelectorAll(".hero-device-tab");
  const screenContent = document.getElementById("hero-device-screen");
  if (!tabs.length || !screenContent) return;

  const views = {
    suranyx: `
      <!-- Phone Header -->
      <div class="flex items-center justify-between text-xs text-zinc-400 pb-2 border-b border-white/10 w-full">
        <div class="flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-[#FFC93C] animate-pulse"></span>
          <span class="font-mono text-white text-[11px] font-bold">Suranyx Intelligence</span>
        </div>
        <span class="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-[#FFC93C]/15 text-[#FFC93C] border border-[#FFC93C]/30">● LIVE</span>
      </div>

      <!-- Main Metric with Glow Curve -->
      <div class="py-1 w-full text-left">
        <div class="text-[10px] font-mono text-[#8E9297] uppercase">Projected Cash Runway</div>
        <div class="flex items-baseline gap-2 mt-0.5">
          <span class="text-3xl font-extrabold text-white font-mono">₹4.2M</span>
          <span class="text-xs font-mono font-bold text-[#FFC93C]">+8.4 mo</span>
        </div>
      </div>

      <!-- Route / Graph Line SVG (With signature electric yellow curve!) -->
      <div class="relative h-28 w-full bg-[#202225] rounded-xl p-2 border border-white/5 overflow-hidden flex items-center justify-center">
        <div class="absolute inset-0 bg-[radial-gradient(rgba(217,218,220,0.08)_1px,transparent_1px)] [background-size:12px_12px] opacity-40"></div>
        <svg class="w-full h-full" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 10 65 Q 40 60, 70 45 T 130 30 T 190 12" stroke="#FFC93C" stroke-width="3" stroke-linecap="round" class="hero-svg-path" />
          <circle cx="190" cy="12" r="4" fill="#FFC93C" />
          <circle cx="10" cy="65" r="3" fill="#D9DADC" />
        </svg>
      </div>

      <!-- Telemetry Ledger Row -->
      <div class="grid grid-cols-3 gap-1.5 p-2 rounded-lg bg-[#202225] border border-white/5 text-center w-full">
        <div>
          <div class="text-[8px] font-mono text-[#8E9297] uppercase">NET BURN</div>
          <div class="text-[11px] font-bold text-white font-mono mt-0.5">₹3.2L/mo</div>
        </div>
        <div>
          <div class="text-[8px] font-mono text-[#8E9297] uppercase">RLS LEVEL</div>
          <div class="text-[11px] font-bold text-[#FFC93C] font-mono mt-0.5">Tenant</div>
        </div>
        <div>
          <div class="text-[8px] font-mono text-[#8E9297] uppercase">LEDGER</div>
          <div class="text-[11px] font-bold text-white font-mono mt-0.5">SHA-256</div>
        </div>
      </div>

      <!-- Action Button (Matching yellow action button in reference!) -->
      <div class="flex items-center justify-between pt-1 w-full">
        <div class="text-[10px] font-mono text-[#D9DADC]">Reconciliation: 100%</div>
        <a href="https://suranyx.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#FFC93C] hover:bg-[#ffbe1a] text-black font-bold flex items-center justify-center shadow-lg transition-transform hover:scale-105" title="Launch Suranyx">
          <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
        </a>
      </div>
    `,
    vadhuvar: `
      <!-- Phone Header -->
      <div class="flex items-center justify-between text-xs text-zinc-400 pb-2 border-b border-white/10 w-full">
        <div class="flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-[#FFC93C] animate-pulse"></span>
          <span class="font-mono text-white text-[11px] font-bold">Vadhu-Var PWA</span>
        </div>
        <span class="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">● TRILINGUAL</span>
      </div>

      <!-- Profile & Matching Card -->
      <div class="py-1 w-full text-left">
        <div class="text-[10px] font-mono text-[#8E9297] uppercase">Match Interface &amp; Prompts</div>
        <div class="flex items-baseline gap-2 mt-0.5">
          <span class="text-2xl font-extrabold text-white font-mono">36 Prompts</span>
          <span class="text-xs font-mono font-bold text-[#FFC93C]">Sub-ms RLS</span>
        </div>
      </div>

      <!-- Matrimony Match Mockup -->
      <div class="relative h-28 w-full bg-[#202225] rounded-xl p-3 border border-white/5 flex flex-col justify-between">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full bg-[#FFC93C]/20 border border-[#FFC93C] flex items-center justify-center text-xs font-bold text-[#FFC93C]">VV</div>
          <div>
            <div class="text-xs font-bold text-white">Ananya, 26 • Pune</div>
            <div class="text-[9px] text-[#D9DADC] font-mono">Software Architect // Verified ID</div>
          </div>
        </div>
        <div class="flex gap-1.5">
          <span class="px-2 py-0.5 rounded text-[9px] font-mono bg-white/10 text-[#D9DADC]">English</span>
          <span class="px-2 py-0.5 rounded text-[9px] font-mono bg-[#FFC93C]/15 text-[#FFC93C] border border-[#FFC93C]/30">मराठी</span>
          <span class="px-2 py-0.5 rounded text-[9px] font-mono bg-white/10 text-[#D9DADC]">हिंदी</span>
        </div>
      </div>

      <!-- Atomic RPC Telemetry -->
      <div class="grid grid-cols-3 gap-1.5 p-2 rounded-lg bg-[#202225] border border-white/5 text-center w-full">
        <div>
          <div class="text-[8px] font-mono text-[#8E9297] uppercase">RPC FUNCTION</div>
          <div class="text-[10px] font-bold text-white font-mono mt-0.5 truncate">send_interest</div>
        </div>
        <div>
          <div class="text-[8px] font-mono text-[#8E9297] uppercase">POLICY EXEC</div>
          <div class="text-[10px] font-bold text-[#FFC93C] font-mono mt-0.5">0.8ms InitPlan</div>
        </div>
        <div>
          <div class="text-[8px] font-mono text-[#8E9297] uppercase">MEDIA LIMIT</div>
          <div class="text-[10px] font-bold text-white font-mono mt-0.5">Max 3 Slots</div>
        </div>
      </div>

      <!-- Action Button -->
      <div class="flex items-center justify-between pt-1 w-full">
        <div class="text-[10px] font-mono text-[#D9DADC]">Family Co-Sign Invariant</div>
        <a href="https://vadhu-var.vercel.app" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#FFC93C] hover:bg-[#ffbe1a] text-black font-bold flex items-center justify-center shadow-lg transition-transform hover:scale-105" title="Explore Vadhu-Var">
          <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
        </a>
      </div>
    `,
    devprime: `
      <!-- Phone Header -->
      <div class="flex items-center justify-between text-xs text-zinc-400 pb-2 border-b border-white/10 w-full">
        <div class="flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-[#FFC93C] animate-pulse"></span>
          <span class="font-mono text-white text-[11px] font-bold">Devprime ADK // PyBullet</span>
        </div>
        <span class="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">● RL BENCHMARK</span>
      </div>

      <!-- Main Metric with Glow Curve -->
      <div class="py-1 w-full text-left">
        <div class="text-[10px] font-mono text-[#8E9297] uppercase">Episodic Return / Reward</div>
        <div class="flex items-baseline gap-2 mt-0.5">
          <span class="text-3xl font-extrabold text-white font-mono">+842.6</span>
          <span class="text-xs font-mono font-bold text-[#FFC93C]">TorchScript</span>
        </div>
      </div>

      <!-- Reward Curve SVG -->
      <div class="relative h-28 w-full bg-[#202225] rounded-xl p-2 border border-white/5 overflow-hidden flex items-center justify-center">
        <div class="absolute inset-0 bg-[radial-gradient(rgba(217,218,220,0.08)_1px,transparent_1px)] [background-size:12px_12px] opacity-40"></div>
        <svg class="w-full h-full" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 10 70 Q 30 65, 60 50 T 110 32 T 150 20 T 190 8" stroke="#FFC93C" stroke-width="3" stroke-linecap="round" class="hero-svg-path" />
          <circle cx="190" cy="8" r="4" fill="#FFC93C" />
          <circle cx="10" cy="70" r="3" fill="#D9DADC" />
        </svg>
      </div>

      <!-- Telemetry Ledger Row -->
      <div class="grid grid-cols-3 gap-1.5 p-2 rounded-lg bg-[#202225] border border-white/5 text-center w-full">
        <div>
          <div class="text-[8px] font-mono text-[#8E9297] uppercase">ENV</div>
          <div class="text-[10px] font-bold text-white font-mono mt-0.5">PyBullet</div>
        </div>
        <div>
          <div class="text-[8px] font-mono text-[#8E9297] uppercase">POLICY</div>
          <div class="text-[10px] font-bold text-[#FFC93C] font-mono mt-0.5">PPO / DQN</div>
        </div>
        <div>
          <div class="text-[8px] font-mono text-[#8E9297] uppercase">EXPORT</div>
          <div class="text-[10px] font-bold text-white font-mono mt-0.5">Zero-Latency</div>
        </div>
      </div>

      <!-- Action Button -->
      <div class="flex items-center justify-between pt-1 w-full">
        <div class="text-[10px] font-mono text-[#D9DADC]">TorchScript C++ Engine</div>
        <a href="https://github.com/Shubh-creations/Devprime-adk" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#FFC93C] hover:bg-[#ffbe1a] text-black font-bold flex items-center justify-center shadow-lg transition-transform hover:scale-105" title="View Devprime ADK">
          <i data-lucide="github" class="w-4 h-4"></i>
        </a>
      </div>
    `
  };

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("bg-[#FFC93C]", "text-black");
        t.classList.add("bg-white/5", "text-[#D9DADC]");
      });
      tab.classList.add("bg-[#FFC93C]", "text-black");
      tab.classList.remove("bg-white/5", "text-[#D9DADC]");

      const view = tab.getAttribute("data-tab");
      if (views[view]) {
        screenContent.innerHTML = views[view];
        if (window.lucide) window.lucide.createIcons();
        if (window.soundEngine) window.soundEngine.playClick(900, 0.02);
      }
    });
  });

  // Initial load
  screenContent.innerHTML = views.suranyx;
  if (window.lucide) window.lucide.createIcons();
}

/* ==========================================================================
   6. Interactive Architecture Spec Drawer
   ========================================================================== */
function setupArchitectureDrawer() {
  const drawerBackdrop = document.getElementById("architecture-drawer");
  const closeBtn = document.getElementById("close-spec-drawer");

  if (!drawerBackdrop) return;

  if (closeBtn) {
    closeBtn.addEventListener("click", closeSpecDrawer);
  }

  drawerBackdrop.addEventListener("click", (e) => {
    if (e.target === drawerBackdrop) {
      closeSpecDrawer();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !drawerBackdrop.classList.contains("hidden")) {
      closeSpecDrawer();
    }
  });
}

window.openSpecDrawer = function(specId) {
  const config = window.SITE_CONFIG;
  const drawerBackdrop = document.getElementById("architecture-drawer");
  const content = document.getElementById("spec-drawer-content");
  if (!drawerBackdrop || !content || !config?.architectureSpecs) return;

  const spec = config.architectureSpecs[specId];
  if (!spec) return;

  content.innerHTML = `
    <div class="space-y-6">
      <!-- Header -->
      <div class="border-b border-white/10 pb-5">
        <div class="flex items-center justify-between text-xs font-mono text-[#8E9297] mb-2">
          <span>SYSTEM ARCHITECTURE SPECIFICATION</span>
          <span class="text-[#FFC93C] font-bold">${spec.primaryInvariants.length} Production Invariants</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">${spec.title}</h2>
        <p class="text-[#D9DADC] text-xs sm:text-sm font-light mt-1">${spec.subtitle}</p>
      </div>

      <!-- Topology Diagram (Ascii / SVG block) -->
      <div>
        <div class="text-[11px] font-mono text-[#FFC93C] uppercase tracking-wider mb-2 flex items-center gap-2 font-bold">
          <i data-lucide="network" class="w-3.5 h-3.5 text-[#FFC93C]"></i>
          <span>Execution Topology &amp; Boundary Flow</span>
        </div>
        <pre class="spec-topology-diagram">${spec.topologyText}</pre>
      </div>

      <!-- Production Invariants -->
      <div class="space-y-2.5">
        <div class="text-[11px] font-mono text-[#FFC93C] uppercase tracking-wider font-bold">Security &amp; Structural Invariants</div>
        <div class="space-y-2">
          ${spec.primaryInvariants.map(inv => `
            <div class="flex items-start gap-2.5 p-3 rounded-xl bg-[#18191C] border border-white/5 text-xs text-[#D9DADC] font-light">
              <i data-lucide="shield-check" class="w-4 h-4 text-[#FFC93C] shrink-0 mt-0.5"></i>
              <span>${inv}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Code Snippet -->
      <div>
        <div class="flex items-center justify-between text-[11px] font-mono text-[#D9DADC] uppercase tracking-wider mb-2">
          <span class="flex items-center gap-1.5 font-bold text-white">
            <i data-lucide="code-2" class="w-3.5 h-3.5 text-[#FFC93C]"></i>
            <span>Production Implementation Snippet</span>
          </span>
          <span class="text-[#8E9297] font-mono text-[10px]">${spec.codeSnippet.lang}</span>
        </div>
        <pre class="p-4 rounded-xl bg-[#18191C] border border-white/10 text-[#FFC93C] font-mono text-xs overflow-x-auto leading-relaxed"><code>${escapeHtml(spec.codeSnippet.code)}</code></pre>
      </div>

      <!-- Engineering Trade-Offs -->
      <div class="p-4 rounded-xl bg-[#18191C] border border-white/5 space-y-2">
        <div class="text-[11px] font-mono text-[#FFC93C] uppercase tracking-wider font-bold">Engineering Trade-Offs &amp; Decision Record</div>
        <p class="text-xs text-[#D9DADC] font-light leading-relaxed">${spec.tradeOffs}</p>
      </div>
    </div>
  `;

  drawerBackdrop.classList.remove("hidden");
  drawerBackdrop.classList.add("flex");
  document.body.style.overflow = "hidden";

  if (window.lucide) window.lucide.createIcons();
  if (window.soundEngine) window.soundEngine.playOpen();
};

window.closeSpecDrawer = function() {
  const drawerBackdrop = document.getElementById("architecture-drawer");
  if (!drawerBackdrop) return;
  drawerBackdrop.classList.add("hidden");
  drawerBackdrop.classList.remove("flex");
  document.body.style.overflow = "";
};

function escapeHtml(string) {
  return String(string)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ==========================================================================
   7. Live GitHub Engineering Pulse
   ========================================================================== */
async function renderGitHubPulse() {
  const pulseContainer = document.getElementById("github-repos-grid");
  const statsContainer = document.getElementById("github-user-stats");
  const fallback = window.SITE_CONFIG?.githubPulseFallback;
  if (!pulseContainer) return;

  // Render static cache first for instant load
  if (fallback) {
    renderGitHubUI(fallback.user, fallback.pinnedRepos);
  }

  // Attempt live asynchronous fetch
  try {
    const userRes = await fetch("https://api.github.com/users/Shubh-creations");
    if (!userRes.ok) throw new Error("GitHub user API rate limited");
    const userData = await userRes.json();

    const reposRes = await fetch("https://api.github.com/users/Shubh-creations/repos?sort=updated&per_page=6");
    if (!reposRes.ok) throw new Error("GitHub repos API rate limited");
    const reposData = await reposRes.json();

    const formattedRepos = reposData.map(r => ({
      name: r.name,
      description: r.description || "Core systems engineering repository by Shubham Pawar.",
      language: r.language || "Python",
      stars: r.stargazers_count,
      forks: r.forks_count,
      url: r.html_url
    }));

    const formattedUser = {
      login: userData.login,
      public_repos: userData.public_repos,
      followers: userData.followers,
      avatar_url: userData.avatar_url
    };

    renderGitHubUI(formattedUser, formattedRepos);
  } catch (err) {
    console.info("GitHub API fetch fallback engaged:", err.message);
  }
}

function renderGitHubUI(user, repos) {
  const pulseContainer = document.getElementById("github-repos-grid");
  const statsContainer = document.getElementById("github-user-stats");

  if (statsContainer && user) {
    statsContainer.innerHTML = `
      <div class="flex items-center gap-3">
        <a href="https://github.com/Shubh-creations" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <i data-lucide="github" class="w-5 h-5 text-white"></i>
          <span class="font-mono font-bold text-white text-sm">@${user.login}</span>
        </a>
      </div>
      <div class="flex items-center gap-4 text-xs font-mono text-[#D9DADC]">
        <div><span class="text-[#FFC93C] font-bold">${user.public_repos}</span> Public Repos</div>
        <div><span class="text-[#FFC93C] font-bold">${user.followers}</span> Followers</div>
      </div>
    `;
  }

  if (pulseContainer && repos) {
    pulseContainer.innerHTML = repos.map(repo => `
      <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="minimal-card p-5 border border-white/10 flex flex-col justify-between group hover:border-[#FFC93C]/40 transition-all">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-mono font-bold text-white group-hover:text-[#FFC93C] transition-colors flex items-center gap-1.5 truncate">
              <i data-lucide="git-branch" class="w-3.5 h-3.5 text-[#FFC93C] shrink-0"></i>
              <span class="truncate">${repo.name}</span>
            </span>
            <i data-lucide="external-link" class="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#FFC93C] transition-colors shrink-0"></i>
          </div>
          <p class="text-xs text-[#D9DADC] font-light leading-relaxed mb-4 line-clamp-2">${repo.description}</p>
        </div>

        <div class="flex items-center justify-between text-[11px] font-mono text-[#8E9297] pt-3 border-t border-white/5">
          <span class="flex items-center gap-1.5 text-white">
            <span class="w-2 h-2 rounded-full bg-[#FFC93C]"></span>
            ${repo.language}
          </span>
          <div class="flex items-center gap-3">
            <span class="flex items-center gap-1"><i data-lucide="star" class="w-3 h-3 text-[#FFC93C]"></i> ${repo.stars}</span>
            <span class="flex items-center gap-1"><i data-lucide="git-fork" class="w-3 h-3 text-zinc-400"></i> ${repo.forks}</span>
          </div>
        </div>
      </a>
    `).join('');
  }

  if (window.lucide) window.lucide.createIcons();
}

/* Mouse spotlight calculation on minimal cards */
function setupSpotlightCards() {
  document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".minimal-card, .flagship-card").forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}

/* Real-Time HUD Telemetry & Clock */
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
   8. Command Palette (⌘K / Ctrl+K)
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

      if (action === "open-suranyx") {
        window.open("https://suranyx.com", "_blank");
      } else if (action === "open-vadhuvar") {
        window.open("https://vadhu-var.vercel.app", "_blank");
      } else if (action === "open-spec-suranyx") {
        openSpecDrawer("suranyx");
      } else if (action === "open-spec-vadhuvar") {
        openSpecDrawer("vadhu-var");
      } else if (action === "open-spec-devprime") {
        openSpecDrawer("devprime-adk");
      } else if (action === "open-sarvaflow") {
        openDeckToSlide(2);
      } else if (action === "open-linkedin") {
        window.open("https://www.linkedin.com/in/shubhampawar-in/", "_blank");
      } else if (action === "open-cuas") {
        window.open("https://github.com/Shubh-creations/Counter-UAS", "_blank");
      } else if (action === "open-rodimus") {
        window.open("https://www.rodimus-tech.com", "_blank");
      } else if (action === "open-github") {
        window.open("https://github.com/Shubh-creations", "_blank");
      } else if (action === "open-deck") {
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
      } else if (action === "copy-email") {
        const email = window.SITE_CONFIG?.founder?.links?.email || "shubhampawar0610@gmail.com";
        navigator.clipboard.writeText(email);
        showToast("Copied email: " + email, "success");
      }
    });
  });
}

/* ==========================================================================
   9. Founder AI Assistant (Digital Twin)
   ========================================================================= */
function setupAIAssistant() {
  const input = document.getElementById("ai-query-input");
  const submitBtn = document.getElementById("ai-submit-btn");
  const responseBox = document.getElementById("ai-response-text");
  const badgeEl = document.getElementById("ai-response-badge");

  if (!input || !submitBtn || !responseBox) return;

  function runQuery(queryString) {
    const query = queryString || input.value.trim();
    if (!query) return;

    if (badgeEl) {
      badgeEl.textContent = "Processing...";
      badgeEl.className = "px-2 py-0.5 rounded text-[10px] font-mono bg-[#FFC93C]/20 text-[#FFC93C] border border-[#FFC93C]/40 font-bold";
    }

    if (window.soundEngine) window.soundEngine.playClick();

    setTimeout(() => {
      const res = window.neuralAssistant.query(query);

      if (badgeEl) {
        badgeEl.textContent = res.badge || "Verified";
        badgeEl.className = "px-2 py-0.5 rounded text-[10px] font-mono bg-[#FFC93C]/15 text-[#FFC93C] border border-[#FFC93C]/30 font-bold";
      }

      window.neuralAssistant.typewriter(responseBox, res.text, () => {
        if (badgeEl) {
          setTimeout(() => {
            badgeEl.textContent = "Ready";
            badgeEl.className = "px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-[#D9DADC] border border-white/10";
          }, 3000);
        }
      });
    }, 180);
  }

  submitBtn.addEventListener("click", () => runQuery());
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") runQuery();
  });

  document.querySelectorAll(".ai-query-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const q = chip.getAttribute("data-query");
      input.value = q;
      runQuery(q);
    });
  });
}

/* ==========================================================================
   10. Interactive Founder Dossier Modal
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
            <span class="text-xs font-mono text-[#8E9297] uppercase tracking-widest font-bold">
              0${slide.slideNumber} // ${slide.subtitle}
            </span>
            <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FFC93C]/10 text-[#FFC93C] border border-[#FFC93C]/30">
              ${slide.keyMetric}
            </span>
          </div>

          <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">${slide.title}</h2>
          <p class="text-[#D9DADC] text-sm sm:text-base leading-relaxed mb-6 font-light">${slide.content}</p>

          <div class="space-y-2.5 p-5 rounded-2xl bg-[#18191C] border border-white/5">
            <div class="text-[10px] font-mono uppercase tracking-widest text-[#FFC93C] font-bold">Key Architecture Points:</div>
            ${slide.bullets.map(b => `
              <div class="flex items-start gap-3 text-xs sm:text-sm text-[#D9DADC] font-light">
                <i data-lucide="check" class="w-3.5 h-3.5 text-[#FFC93C] shrink-0 mt-0.5"></i>
                <span>${b}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#8E9297] font-mono flex-wrap gap-2">
          <div>SHUBHAM PAWAR // @builtfor101</div>
          <div class="flex items-center gap-3">
            <a href="https://suranyx.com" target="_blank" rel="noopener noreferrer" class="text-[#FFC93C] hover:underline">Suranyx</a>
            <a href="https://vadhu-var.vercel.app" target="_blank" rel="noopener noreferrer" class="text-purple-300 hover:underline">Vadhu-Var</a>
            <a href="https://www.linkedin.com/in/shubhampawar-in/" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:underline">LinkedIn</a>
            <a href="https://github.com/Shubh-creations" target="_blank" rel="noopener noreferrer" class="text-[#D9DADC] hover:underline">GitHub</a>
          </div>
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
   11. Contact Modal & Audio Toggle
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
      const name = document.getElementById("investor-name")?.value || "Colleague";
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
      ? `<i data-lucide="volume-x" class="w-3.5 h-3.5 text-zinc-400"></i><span class="text-[11px] font-mono text-zinc-400">Audio: OFF</span>`
      : `<i data-lucide="volume-2" class="w-3.5 h-3.5 text-[#FFC93C]"></i><span class="text-[11px] font-mono text-[#FFC93C] font-bold">Audio: ON</span>`;
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

/* ==========================================================================
   12. FAQ Accordion & Copy Buttons
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
      const email = window.SITE_CONFIG?.founder?.links?.email || "shubhampawar0610@gmail.com";
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

/* ==========================================================================
   13. Developer Console Easter Egg
   ========================================================================== */
function setupConsoleEasterEgg() {
  const banner = `
%c  ▲ SHUBHAM PAWAR // FOUNDER & SYSTEMS ARCHITECT  
%c  Co-Founder @ Suranyx (suranyx.com)  
  Creator @ Vadhu-Var / VV (vadhu-var.vercel.app)  
  Co-founder (COO) @ Rodimus Tech (rodimus-tech.com)  
  1 Year Stealth Founder @ Sarvaflow (Workflows Marketplace)  
  GitHub: https://github.com/Shubh-creations  
  Twitter: @builtfor101 | LinkedIn: in/shubhampawar-in  
  
  Color Palette: Gray (#2B2D31), Silver (#D9DADC), Yellow (#FFC93C)
  Press ⌘K or Ctrl+K anywhere on the site for instant Command Palette.
  System Status: Optimal | Multi-Tenant RLS: Active | SHA-256 Ledger: Verified
  `;

  console.log(
    banner,
    "background: #202225; color: #FFC93C; font-weight: bold; font-size: 14px; padding: 6px 10px; border-left: 3px solid #FFC93C;",
    "background: #24262A; color: #D9DADC; font-size: 12px; line-height: 1.6;"
  );
}
