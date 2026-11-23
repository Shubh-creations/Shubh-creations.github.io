/**
 * Shubham Pawar // 4x Founder & Systems Architect
 * Ultra-Minimalist Founder Portfolio Engine
 * Benchmarked: Paco Coursey, Rauno Freiberg, Linear
 * Palette: Matte Black (#0B0B0D) + Warm Sand (#D8CBB3)
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Canvas Background (Subtle Warm Sand Dot Grid)
  if (window.NeuralCanvas) {
    window.neuralMesh = new NeuralCanvas("neural-canvas");
  }

  // 2. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 3. Initialize Specular Spring Spotlights
  if (window.initSpringSpotlights) {
    window.initSpringSpotlights();
  }

  // 4. Initialize Core Data & UI Renderers
  initSiteData();
  setupHeroDeviceSwitcher();
  setupArchitectureDrawer();
  setupCommandPalette();
  setupVimNavigation();
  setupDossierModal();
  setupContactModal();
  setupCopyButtons();

  // 5. Mount Systems Lab (Compact 2-Tab Interactive Proofs)
  if (window.mountSystemsLab) {
    window.mountSystemsLab("systems-lab-container");
  } else if (window.mountLedgerSimulation) {
    window.mountLedgerSimulation("suranyx-ledger-sim");
    if (window.mountInitPlanSimulation) {
      window.mountInitPlanSimulation("vadhuvar-initplan-sim");
    }
  }

  // 6. Developer Console Easter Egg
  setupConsoleEasterEgg();
});

window.addEventListener("load", () => {
  if (window.lucide) window.lucide.createIcons();
});

/* ==========================================================================
   1. Core Data Initialization & Renderers
   ========================================================================== */
function initSiteData() {
  const config = window.SITE_CONFIG;
  if (!config) return;

  document.title = `${config.founder.name} — ${config.founder.title}`;

  // Render Section 2: Flagship Ventures & Active Builds (5 Active Systems + Rodimus)
  renderVenturesAndBuilds();

  // Render Section 3: AI-Native Velocity (3-Column Strip)
  renderVelocityStrip();

  // Render Section 5: Founder Experience & Open-Source Index
  renderFounderTrackRecord();
  renderOpenSourceIndex();
}

/**
 * Section 2: Flagship Ventures & Active Builds (Bento Grid)
 */
function renderVenturesAndBuilds() {
  const container = document.getElementById("ventures-grid");
  const config = window.SITE_CONFIG;
  if (!container || !config?.venturesAndBuilds) return;

  const showSarvaFlow = config.showSarvaFlowName !== false;

  container.innerHTML = config.venturesAndBuilds.map((item) => {
    const isLive = item.isLive;
    const displayName = (item.id === "sarva-flow" && !showSarvaFlow)
      ? item.stealthName
      : item.name;

    const hasLiveUrl = item.url && item.url.startsWith("http");
    const isGithub = item.url && item.url.includes("github.com");

    const linkLabel = isGithub
      ? "GitHub ↗"
      : isLive
      ? "Live Platform ↗"
      : "View System ↗";

    return `
      <article class="bento-card p-6 sm:p-7 flex flex-col justify-between group">
        <div>
          <!-- Header Row -->
          <div class="flex items-center justify-between gap-3 mb-3">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full ${isLive ? 'bg-emerald-400' : 'bg-[var(--accent)]'} ${isLive ? 'animate-pulse' : ''}"></span>
              <span class="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider">${item.role}</span>
            </div>
            <span class="text-[10px] font-mono text-[#71717A] bg-white/[0.03] px-2 py-0.5 rounded border border-white/5">
              ${item.status}
            </span>
          </div>

          <!-- Title & Tagline -->
          <h3 class="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 flex items-center gap-2">
            <span>${displayName}</span>
          </h3>

          <p class="text-sm text-[#A1A1AA] font-normal leading-relaxed mb-5">
            ${item.tagline}
          </p>
        </div>

        <div>
          <!-- 3 Monospace Invariant Tags -->
          <div class="flex flex-wrap items-center gap-1.5 mb-5 font-mono text-[11px]">
            ${item.tags.map(tag => `
              <span class="px-2 py-0.5 rounded bg-white/[0.04] text-[var(--accent)] border border-white/[0.06]">
                ${tag}
              </span>
            `).join('')}
          </div>

          <!-- Action Buttons -->
          <div class="flex items-center gap-2.5 pt-4 border-t border-white/[0.06]">
            ${hasLiveUrl ? `
              <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn-sand text-xs py-1.5 px-3.5 inline-flex items-center gap-1.5">
                <span>${linkLabel}</span>
              </a>
            ` : ''}

            <button onclick="openSpecDrawer('${item.specId}')" class="btn-ghost text-xs py-1.5 px-3 inline-flex items-center gap-1.5" title="View Technical Architecture">
              <i data-lucide="terminal" class="w-3.5 h-3.5 text-[var(--accent)]"></i>
              <span>Architecture</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

/**
 * Section 3: AI-Native Velocity (3-Column Strip)
 */
function renderVelocityStrip() {
  const container = document.getElementById("velocity-strip-container");
  const config = window.SITE_CONFIG;
  if (!container || !config?.velocityPrinciples) return;

  container.innerHTML = config.velocityPrinciples.map((item) => `
    <div class="bento-card p-6 flex flex-col justify-between group">
      <div>
        <div class="text-xs font-mono text-[var(--accent)] font-bold mb-2">
          ${item.step} // PRINCIPLE
        </div>
        <h3 class="text-lg font-bold text-white tracking-tight mb-2">
          ${item.title}
        </h3>
        <p class="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-normal">
          ${item.desc}
        </p>
      </div>
    </div>
  `).join('');
}

/**
 * Section 5 Left: Founder Track Record
 */
function renderFounderTrackRecord() {
  const container = document.getElementById("founder-experience-list");
  const config = window.SITE_CONFIG;
  if (!container || !config?.founderExperience) return;

  container.innerHTML = config.founderExperience.map((item) => `
    <div class="relative pl-6 pb-6 last:pb-1 border-l border-white/[0.08] group">
      <div class="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[var(--accent)] ring-4 ring-[#0B0B0D]"></div>
      <div class="text-[11px] font-mono text-[var(--accent)] mb-0.5">${item.period}</div>
      <h4 class="text-sm sm:text-base font-bold text-white group-hover:text-[var(--accent)] transition-colors">
        ${item.role} <span class="text-[#71717A] font-normal">at ${item.organization}</span>
      </h4>
      <p class="text-xs text-[#A1A1AA] mt-1.5 leading-relaxed font-normal">
        ${item.detail}
      </p>
    </div>
  `).join('');
}

/**
 * Section 5 Right: Verified Open-Source GitHub Index
 */
async function renderOpenSourceIndex() {
  const container = document.getElementById("opensource-index-list");
  const config = window.SITE_CONFIG;
  if (!container || !config?.openSourceIndex) return;

  // Render static cache first
  container.innerHTML = config.openSourceIndex.map((repo) => `
    <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="bento-card p-4 sm:p-5 flex flex-col justify-between group block transition-all">
      <div>
        <div class="flex items-center justify-between gap-2 mb-1.5">
          <div class="flex items-center gap-2">
            <i data-lucide="folder-git-2" class="w-4 h-4 text-[var(--accent)] shrink-0"></i>
            <span class="font-mono font-bold text-sm text-white group-hover:text-[var(--accent)] transition-colors">${repo.name}</span>
          </div>
          <span class="text-[10px] font-mono text-[#A1A1AA] flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
            ${repo.language}
          </span>
        </div>
        <p class="text-xs text-[#A1A1AA] leading-relaxed mb-3">
          ${repo.desc}
        </p>
      </div>
      <div class="flex items-center justify-between text-[11px] font-mono text-[#71717A] pt-2 border-t border-white/[0.05]">
        <div class="flex items-center gap-1 text-[var(--accent)]">
          <i data-lucide="star" class="w-3 h-3"></i>
          <span class="repo-star-count" data-repo="${repo.name}">★ Active</span>
        </div>
        <span class="group-hover:text-white transition-colors">View Source ↗</span>
      </div>
    </a>
  `).join('');

  if (window.lucide) window.lucide.createIcons();

  // Async GitHub API verification (rate-limit safe)
  try {
    const res = await fetch("https://api.github.com/users/Shubh-creations/repos?sort=updated&per_page=20");
    if (!res.ok) return;
    const data = await res.json();
    if (Array.isArray(data)) {
      data.forEach((r) => {
        const starEl = document.querySelector(`.repo-star-count[data-repo="${r.name}"]`);
        if (starEl && typeof r.stargazers_count === "number") {
          starEl.textContent = `★ ${r.stargazers_count}`;
        }
      });
    }
  } catch (err) {
    // Graceful fallback to static cache
  }
}

/* ==========================================================================
   2. Hero Live Device Switcher (Suranyx, Vadhu-Var, CUAS)
   ========================================================================== */
function setupHeroDeviceSwitcher() {
  const container = document.getElementById("hero-device-screen");
  if (!container) return;

  const devices = [
    {
      id: "suranyx",
      name: "Suranyx",
      badge: "LIVE FINANCIAL OS",
      metricLabel: "Runway Security",
      metricVal: "100% Invariant",
      subMetric: "SHA-256 Ledger Verified",
      telemetry: "Multi-Tenant RLS · ReBIT AA · FastAPI",
      color: "var(--accent)"
    },
    {
      id: "vadhu-var",
      name: "Vadhu-Var (VV)",
      badge: "LIVE MATRIMONY PWA",
      metricLabel: "Policy Latency",
      metricVal: "<0.42 ms",
      subMetric: "RLS InitPlan Cached",
      telemetry: "PostgreSQL · Atomic RPCs · Trilingual",
      color: "var(--accent)"
    },
    {
      id: "cuas",
      name: "CUAS Tactical",
      badge: "EDGE DEFENSE AI",
      metricLabel: "Threat Latency",
      metricVal: "<100 ms",
      subMetric: "TensorRT 92.4% mAP",
      telemetry: "Jetson Orin · mmWave Radar + YOLOv8",
      color: "var(--accent)"
    }
  ];

  let currentIdx = 0;

  function renderDevice(idx) {
    const dev = devices[idx];
    container.innerHTML = `
      <!-- Device Top Status Bar -->
      <div class="flex items-center justify-between text-[10px] font-mono text-[#A1A1AA] pb-2 border-b border-white/[0.08]">
        <div class="flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="font-bold text-white">${dev.name}</span>
        </div>
        <span class="text-[9px] uppercase tracking-wider text-[var(--accent)] font-semibold">${dev.badge}</span>
      </div>

      <!-- Center Metric Hero Box -->
      <div class="p-3.5 rounded-xl bg-[#08080A] border border-white/[0.06] text-center space-y-1 my-1">
        <div class="text-[10px] font-mono uppercase tracking-widest text-[#71717A]">${dev.metricLabel}</div>
        <div class="text-2xl font-black font-mono text-white tracking-tight">${dev.metricVal}</div>
        <div class="text-[11px] font-mono text-emerald-400 font-medium">${dev.subMetric}</div>
      </div>

      <!-- Architecture Telemetry Row -->
      <div class="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] text-[10px] font-mono text-[#A1A1AA] space-y-1">
        <div class="text-[9px] text-[#71717A] uppercase tracking-wider font-semibold">Active Invariant Stack</div>
        <div class="text-white font-medium truncate">${dev.telemetry}</div>
      </div>

      <!-- Bottom Interactive Switcher Tabs -->
      <div class="pt-2 border-t border-white/[0.08] flex items-center justify-between gap-1 text-[10px] font-mono">
        ${devices.map((d, i) => `
          <button data-device-idx="${i}" class="px-2 py-1 rounded transition-colors ${
            i === idx
              ? 'bg-[var(--accent)] text-[var(--accent-fg)] font-bold'
              : 'text-[#71717A] hover:text-white bg-white/[0.02]'
          }">
            ${d.name.split(' ')[0]}
          </button>
        `).join('')}
      </div>
    `;

    container.querySelectorAll('[data-device-idx]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const i = Number(e.currentTarget.getAttribute('data-device-idx'));
        currentIdx = i;
        if (window.soundEngine) window.soundEngine.playClick(750, 0.02);
        renderDevice(currentIdx);
      });
    });
  }

  renderDevice(currentIdx);

  // Auto-cycle device previews every 8 seconds when tab is active
  setInterval(() => {
    if (document.hidden) return;
    currentIdx = (currentIdx + 1) % devices.length;
    renderDevice(currentIdx);
  }, 8000);
}

/* ==========================================================================
   3. Interactive Architecture Spec Drawer
   ========================================================================== */
function setupArchitectureDrawer() {
  const drawer = document.getElementById("architecture-drawer");
  const closeBtn = document.getElementById("close-spec-drawer");
  if (!drawer) return;

  function closeDrawer() {
    drawer.classList.add("hidden");
    drawer.classList.remove("flex");
    document.body.style.overflow = "";
  }

  closeBtn?.addEventListener("click", closeDrawer);
  drawer.addEventListener("click", (e) => {
    if (e.target === drawer) closeDrawer();
  });

  window.openSpecDrawer = (specId) => {
    const config = window.SITE_CONFIG;
    if (!config?.architectureSpecs || !drawer) return;
    const spec = config.architectureSpecs[specId];
    if (!spec) return;

    const content = document.getElementById("spec-drawer-content");
    if (!content) return;

    content.innerHTML = `
      <div class="space-y-6">
        <!-- Header -->
        <div class="pb-4 border-b border-white/[0.08]">
          <div class="flex items-center gap-2 mb-2">
            <span class="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
            <span class="text-xs font-mono text-[var(--accent)] uppercase tracking-wider">${spec.badge}</span>
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-white tracking-tight">${spec.title}</h3>
          <p class="text-xs sm:text-sm text-[#A1A1AA] mt-1">${spec.subtitle}</p>
        </div>

        <!-- Topology Diagram -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-[#71717A] mb-2 font-semibold">Topology & Execution Flow</h4>
          <pre class="spec-topology-diagram"><code>${escapeHtml(spec.topologyText)}</code></pre>
        </div>

        <!-- Architectural Invariants -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-[#71717A] mb-3 font-semibold">Core Invariants & Guarantees</h4>
          <div class="space-y-2.5">
            ${spec.invariants.map(inv => `
              <div class="p-3.5 rounded-xl bg-[#0E0E12] border border-white/[0.06]">
                <h5 class="text-sm font-bold text-white mb-1">${inv.name}</h5>
                <p class="text-xs text-[#A1A1AA] leading-relaxed font-normal">${inv.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Code Snippet -->
        <div>
          <div class="flex items-center justify-between mb-2">
            <h4 class="text-xs font-mono uppercase tracking-wider text-[#71717A] font-semibold">${spec.codeSnippetTitle}</h4>
            <button onclick="navigator.clipboard.writeText(document.getElementById('drawer-code-block').innerText); showToast('Code copied');" class="text-[11px] font-mono text-[var(--accent)] hover:underline">
              Copy Code
            </button>
          </div>
          <pre class="p-4 rounded-xl bg-[#08080A] border border-white/[0.08] text-xs font-mono text-[#A1A1AA] overflow-x-auto"><code id="drawer-code-block">${escapeHtml(spec.codeSnippet)}</code></pre>
        </div>
      </div>
    `;

    drawer.classList.remove("hidden");
    drawer.classList.add("flex");
    document.body.style.overflow = "hidden";
    if (window.soundEngine) window.soundEngine.playOpen();
  };
}

function escapeHtml(string) {
  const entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  return String(string).replace(/[&<>"']/g, s => entityMap[s]);
}

/* ==========================================================================
   4. Command Palette (⌘K / Ctrl+K)
   ========================================================================== */
function setupCommandPalette() {
  const modal = document.getElementById("cmd-modal");
  const input = document.getElementById("cmd-search-input");
  const itemsContainer = document.getElementById("cmd-items-list");
  if (!modal || !input || !itemsContainer) return;

  const commands = [
    // Navigation Anchors
    { title: "Jump to Flagship Ventures", section: "Ventures & Systems", shortcut: "G V", action: () => scrollToSection("#ventures") },
    { title: "Jump to Active Builds & Tooling", section: "Ventures & Systems", shortcut: "G B", action: () => scrollToSection("#builds") },
    { title: "Jump to Interactive Systems Lab", section: "Proof of Work", shortcut: "G L", action: () => scrollToSection("#lab") },
    { title: "Jump to Founder Track Record", section: "Pedigree", shortcut: "G E", action: () => scrollToSection("#experience") },
    { title: "Jump to Direct Contact", section: "Connect", shortcut: "G C", action: () => scrollToSection("#contact") },

    // Live Production Platforms
    { title: "Launch Suranyx ↗ (Financial OS)", section: "Live Platforms", shortcut: "↵", action: () => window.open("https://suranyx.com", "_blank", "noopener,noreferrer") },
    { title: "Explore Vadhu-Var ↗ (Matrimony PWA)", section: "Live Platforms", shortcut: "↵", action: () => window.open("https://vadhu-var.vercel.app", "_blank", "noopener,noreferrer") },
    { title: "Visit Rodimus Tech ↗ (Spatial AI)", section: "Live Platforms", shortcut: "↵", action: () => window.open("https://rodimus-tech.com", "_blank", "noopener,noreferrer") },
    { title: "View GitHub (@Shubh-creations) ↗", section: "Verified Links", shortcut: "G G", action: () => window.open("https://github.com/Shubh-creations", "_blank", "noopener,noreferrer") },
    { title: "View LinkedIn Profile ↗", section: "Verified Links", shortcut: "↵", action: () => window.open("https://www.linkedin.com/in/shubhampawar-in/", "_blank", "noopener,noreferrer") },
    { title: "View Twitter / X (@builtfor101) ↗", section: "Verified Links", shortcut: "↵", action: () => window.open("https://x.com/builtfor101", "_blank", "noopener,noreferrer") },

    // Interactive Architecture Actions
    { title: "Architecture Spec: Suranyx (RLS & SHA-256)", section: "Architecture", shortcut: "SPEC", action: () => { closeModal(); window.openSpecDrawer("suranyx"); } },
    { title: "Architecture Spec: Vadhu-Var (Atomic RPCs)", section: "Architecture", shortcut: "SPEC", action: () => { closeModal(); window.openSpecDrawer("vadhu-var"); } },
    { title: "Architecture Spec: CUAS (Jetson & TensorRT)", section: "Architecture", shortcut: "SPEC", action: () => { closeModal(); window.openSpecDrawer("cuas"); } },
    { title: "Architecture Spec: AI-Shorts-Factory (FFmpeg)", section: "Architecture", shortcut: "SPEC", action: () => { closeModal(); window.openSpecDrawer("ai-shorts-factory"); } },
    { title: "Architecture Spec: Sarva Flow (DAG Engine)", section: "Architecture", shortcut: "SPEC", action: () => { closeModal(); window.openSpecDrawer("sarva-flow"); } },
    { title: "Architecture Spec: Rodimus Tech (Spatial AI)", section: "Architecture", shortcut: "SPEC", action: () => { closeModal(); window.openSpecDrawer("rodimus"); } },

    // Communication Actions
    { title: "Copy Email: shubhampawar0610@gmail.com", section: "Actions", shortcut: "COPY", action: () => copyText("shubhampawar0610@gmail.com", "Email copied to clipboard") },
    { title: "Copy Direct Phone / WhatsApp: +91 9623422350", section: "Actions", shortcut: "COPY", action: () => copyText("+919623422350", "Phone copied to clipboard") },
    { title: "Open Executive Presentation Dossier", section: "Actions", shortcut: "D", action: () => { closeModal(); window.openDeckModal(); } }
  ];

  let selectedIndex = 0;
  let filteredCommands = [...commands];

  function openModal() {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    input.value = "";
    selectedIndex = 0;
    filterCommands("");
    document.body.style.overflow = "hidden";
    setTimeout(() => input.focus(), 50);
    if (window.soundEngine) window.soundEngine.playOpen();
  }

  function closeModal() {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
  }

  function renderList() {
    if (filteredCommands.length === 0) {
      itemsContainer.innerHTML = `
        <div class="p-6 text-center text-xs font-mono text-[#71717A]">
          No matching command found. Press Esc to close.
        </div>
      `;
      return;
    }

    itemsContainer.innerHTML = filteredCommands.map((cmd, idx) => `
      <div data-cmd-idx="${idx}" class="cmd-item px-4 py-2.5 flex items-center justify-between cursor-pointer rounded-lg text-xs font-mono ${
        idx === selectedIndex ? 'bg-[var(--accent)]/15 text-[var(--accent)]' : 'text-[#A1A1AA] hover:bg-white/[0.03] hover:text-white'
      }">
        <div class="flex items-center gap-2.5 truncate">
          <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-[var(--accent)] shrink-0 ${idx === selectedIndex ? 'opacity-100' : 'opacity-0'}"></i>
          <span class="truncate font-medium text-white">${cmd.title}</span>
          <span class="text-[10px] text-[#71717A] hidden sm:inline">(${cmd.section})</span>
        </div>
        ${cmd.shortcut ? `<span class="kbd-badge shrink-0">${cmd.shortcut}</span>` : ''}
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();

    itemsContainer.querySelectorAll('.cmd-item').forEach(el => {
      el.addEventListener('click', () => {
        const idx = Number(el.getAttribute('data-cmd-idx'));
        filteredCommands[idx].action();
        closeModal();
      });
    });
  }

  function filterCommands(query) {
    const q = (query || "").toLowerCase().trim();
    if (!q) {
      filteredCommands = [...commands];
    } else {
      filteredCommands = commands.filter(c =>
        c.title.toLowerCase().includes(q) ||
        c.section.toLowerCase().includes(q) ||
        (c.shortcut && c.shortcut.toLowerCase().includes(q))
      );
    }
    selectedIndex = 0;
    renderList();
  }

  input.addEventListener("input", (e) => filterCommands(e.target.value));

  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % Math.max(1, filteredCommands.length);
      renderList();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length);
      renderList();
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
        closeModal();
      }
    } else if (e.key === "Escape") {
      closeModal();
    }
  });

  document.querySelectorAll("[data-open-cmd]").forEach(btn => {
    btn.addEventListener("click", openModal);
  });

  document.getElementById("close-cmd-modal")?.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (modal.classList.contains("hidden")) openModal();
      else closeModal();
    }
  });
}

function scrollToSection(selector) {
  const el = document.querySelector(selector);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

/* ==========================================================================
   5. Vim-Style Single-Key Navigation
   ========================================================================== */
function setupVimNavigation() {
  let lastKey = "";
  let keyTimeout = null;

  window.addEventListener("keydown", (e) => {
    // Ignore when focus is inside form input, textarea, or contentEditable
    if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName) || document.activeElement?.isContentEditable) {
      return;
    }

    if (e.key === "Escape") {
      document.getElementById("cmd-modal")?.classList.add("hidden");
      document.getElementById("architecture-drawer")?.classList.add("hidden");
      document.getElementById("deck-modal")?.classList.add("hidden");
      document.getElementById("contact-modal")?.classList.add("hidden");
      document.body.style.overflow = "";
      return;
    }

    const key = e.key.toLowerCase();

    if (key === "d" && !e.metaKey && !e.ctrlKey) {
      window.openDeckModal?.();
      return;
    }

    if (lastKey === "g") {
      if (key === "v") scrollToSection("#ventures");
      else if (key === "b") scrollToSection("#builds");
      else if (key === "l") scrollToSection("#lab");
      else if (key === "e") scrollToSection("#experience");
      else if (key === "c") scrollToSection("#contact");
      else if (key === "t") scrollToSection("#top");
      else if (key === "g") window.open("https://github.com/Shubh-creations", "_blank", "noopener,noreferrer");
      lastKey = "";
      clearTimeout(keyTimeout);
      return;
    }

    if (key === "g") {
      lastKey = "g";
      keyTimeout = setTimeout(() => { lastKey = ""; }, 1000);
    }
  });
}

/* ==========================================================================
   6. Executive Dossier Modal
   ========================================================================== */
function setupDossierModal() {
  const modal = document.getElementById("deck-modal");
  const config = window.SITE_CONFIG;
  if (!modal || !config?.founderDossier) return;

  let currentSlide = 0;
  const slides = config.founderDossier;

  function renderSlide(idx) {
    const slide = slides[idx];
    const content = document.getElementById("deck-slide-content");
    const indicator = document.getElementById("slide-indicator");
    const progressBar = document.getElementById("slide-progress-bar");

    if (indicator) indicator.textContent = `0${idx + 1} / 0${slides.length}`;
    if (progressBar) progressBar.style.width = `${((idx + 1) / slides.length) * 100}%`;

    if (content) {
      content.innerHTML = `
        <div class="space-y-5">
          <div class="pb-3 border-b border-white/[0.08]">
            <div class="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">${slide.keyMetric}</div>
            <h3 class="text-2xl font-bold text-white tracking-tight mt-1">${slide.title}</h3>
            <p class="text-xs text-[#A1A1AA] mt-0.5">${slide.subtitle}</p>
          </div>
          <p class="text-sm text-[#F4F4F5] leading-relaxed font-normal">${slide.content}</p>
          <div class="p-4 rounded-xl bg-[#08080A] border border-white/[0.06] space-y-2">
            <div class="text-[10px] font-mono uppercase tracking-wider text-[#71717A] font-semibold">Key Architecture Invariants</div>
            <ul class="space-y-1.5 text-xs text-[#A1A1AA]">
              ${slide.bullets.map(b => `<li class="flex items-start gap-2"><span class="text-[var(--accent)] shrink-0 font-bold">•</span><span>${b}</span></li>`).join('')}
            </ul>
          </div>
        </div>
      `;
    }
  }

  window.openDeckModal = () => {
    currentSlide = 0;
    renderSlide(currentSlide);
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
    if (window.soundEngine) window.soundEngine.playOpen();
  };

  window.closeDeckModal = () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
  };

  document.querySelectorAll("[data-open-deck]").forEach(btn => {
    btn.addEventListener("click", window.openDeckModal);
  });

  document.getElementById("close-deck-modal")?.addEventListener("click", window.closeDeckModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) window.closeDeckModal();
  });

  document.getElementById("prev-slide-btn")?.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    renderSlide(currentSlide);
    if (window.soundEngine) window.soundEngine.playClick(600, 0.02);
  });

  document.getElementById("next-slide-btn")?.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    renderSlide(currentSlide);
    if (window.soundEngine) window.soundEngine.playClick(800, 0.02);
  });
}

/* ==========================================================================
   7. Contact Modal & 1-Click Copy Buttons
   ========================================================================== */
function setupContactModal() {
  const modal = document.getElementById("contact-modal");
  if (!modal) return;

  window.openContactModal = () => {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
    if (window.soundEngine) window.soundEngine.playOpen();
  };

  window.closeContactModal = () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
  };

  document.querySelectorAll("[data-open-contact]").forEach(btn => {
    btn.addEventListener("click", window.openContactModal);
  });

  document.getElementById("close-contact-modal")?.addEventListener("click", window.closeContactModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) window.closeContactModal();
  });
}

function setupCopyButtons() {
  document.querySelectorAll("[data-copy-email]").forEach(btn => {
    btn.addEventListener("click", () => {
      copyText("shubhampawar0610@gmail.com", "Email copied: shubhampawar0610@gmail.com");
    });
  });

  document.querySelectorAll("[data-copy-phone]").forEach(btn => {
    btn.addEventListener("click", () => {
      copyText("+919623422350", "WhatsApp / Phone copied: +91 9623422350");
    });
  });
}

function copyText(text, successMessage) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage);
      if (window.soundEngine) window.soundEngine.playSuccess();
    });
  } else {
    showToast(successMessage);
  }
}

function showToast(message) {
  const toast = document.getElementById("toast-notification");
  const msgEl = document.getElementById("toast-message");
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.remove("hidden");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.classList.add("hidden"), 300);
  }, 2400);
}

if (typeof window !== "undefined") {
  window.showToast = showToast;
  window.copyText = copyText;
}

/* ==========================================================================
   8. Console Easter Egg (Principal Engineer Handshake)
   ========================================================================== */
function setupConsoleEasterEgg() {
  const styles = [
    "color: #D8CBB3",
    "background: #0B0B0D",
    "font-size: 13px",
    "padding: 10px 16px",
    "border-radius: 8px",
    "border: 1px solid rgba(216, 203, 179, 0.4)",
    "font-family: monospace"
  ].join(";");

  console.log(
    "%c⚡ Shubham Pawar // 4x AI Founder & Systems Architect\nSuranyx (suranyx.com) • Vadhu-Var (vadhu-var.vercel.app) • Rodimus Tech (rodimus-tech.com)\nDirect: shubhampawar0610@gmail.com | 𝕏: @builtfor101 | GitHub: github.com/Shubh-creations",
    styles
  );
}
