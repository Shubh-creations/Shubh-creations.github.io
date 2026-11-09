/**
 * Shubham Pawar // AI Startup Founder & Systems Engineer - Master Orchestrator
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
          <div class="text-xs font-mono text-zinc-500 mb-3">${p.num} // PRINCIPLE</div>
          <h3 class="text-lg font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors">${p.title}</h3>
          <p class="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">${p.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // Render Milestones (Track Record)
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

  // Render Technical Essays & Notes
  const essaysContainer = document.getElementById("essays-list");
  if (essaysContainer && config.essays) {
    essaysContainer.innerHTML = config.essays.map((e) => `
      <div class="minimal-card p-6 sm:p-7 flex flex-col justify-between group">
        <div>
          <div class="flex items-center justify-between text-xs font-mono text-zinc-500 mb-3">
            <span>${e.date}</span>
            <span>${e.readTime}</span>
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-zinc-200 transition-colors">${e.title}</h3>
          <p class="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed mb-4">${e.snippet}</p>
          <div class="p-3.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-zinc-300 font-mono text-[11px] leading-relaxed">
            ${e.body}
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
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              ${f.status}
            </span>
          </div>
          <span class="text-xs font-mono text-zinc-500 uppercase tracking-wider">${f.category}</span>
        </div>

        <!-- Title & Subtitle -->
        <div class="mb-4">
          <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
            <span>${f.name}</span>
            <a href="${f.url}" target="_blank" rel="noopener noreferrer" class="text-zinc-500 hover:text-white transition-colors" title="Visit ${f.displayUrl}">
              <i data-lucide="external-link" class="w-4 h-4"></i>
            </a>
          </h3>
          <div class="text-xs font-mono text-emerald-400 mt-1">${f.role}</div>
        </div>

        <!-- Tagline & Description -->
        <p class="text-zinc-200 text-sm sm:text-base font-medium mb-3 leading-snug">${f.tagline}</p>
        <p class="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">${f.description}</p>

        <!-- Technical Metrics Grid -->
        <div class="grid grid-cols-3 gap-2.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 mb-6">
          ${f.metrics.map(m => `
            <div class="text-center">
              <div class="text-[9px] font-mono text-zinc-500 uppercase tracking-wider truncate">${m.label}</div>
              <div class="text-xs sm:text-sm font-bold text-white font-mono mt-0.5 truncate">${m.val}</div>
            </div>
          `).join('')}
        </div>

        <!-- Invariants & Highlights -->
        <div class="space-y-2 mb-6">
          <div class="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold">Production Invariants &amp; Architecture:</div>
          ${f.highlights.map(h => `
            <div class="flex items-start gap-2.5 text-xs text-zinc-300 font-light leading-relaxed">
              <i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"></i>
              <span>${h}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div>
        <!-- Tech Stack Pills -->
        <div class="flex flex-wrap gap-1.5 mb-6">
          ${f.stack.map(s => `
            <span class="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-zinc-300 border border-white/10">
              ${s}
            </span>
          `).join('')}
        </div>

        <!-- Interactive CTAs -->
        <div class="flex items-center gap-3 pt-5 border-t border-white/10 flex-wrap">
          <a href="${f.url}" target="_blank" rel="noopener noreferrer" class="btn-emerald text-xs py-2 px-4 inline-flex items-center gap-1.5">
            <span>Launch ${f.name}</span>
            <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
          </a>

          <button onclick="openSpecDrawer('${f.id}')" class="btn-ghost text-xs py-2 px-3.5 inline-flex items-center gap-1.5 text-zinc-300 hover:text-white">
            <i data-lucide="terminal" class="w-3.5 h-3.5 text-zinc-400"></i>
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
        <div class="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
          <span>0${idx + 1} // DOMAIN MATRIX</span>
          <span class="text-emerald-400 font-semibold">${domain.technologies.length} Shipped Primitives</span>
        </div>
        <h3 class="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <i data-lucide="${domain.icon}" class="w-4 h-4 text-zinc-400"></i>
          <span>${domain.category}</span>
        </h3>
        <p class="text-zinc-400 text-xs sm:text-sm font-light mt-1 leading-relaxed">${domain.summary}</p>
      </div>

      <div class="space-y-2.5 pt-3 border-t border-white/5">
        ${domain.technologies.map(tech => `
          <div class="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors">
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono font-bold text-white">${tech.name}</span>
            </div>
            <p class="text-[11px] text-zinc-400 font-light mt-0.5 leading-snug">${tech.desc}</p>
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
          <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-white/5 text-zinc-300 border border-white/10">
            0${idx + 1} // ${sys.status}
          </span>
          <span class="text-xs font-mono text-zinc-500 uppercase tracking-widest">${sys.category}</span>
        </div>

        <h3 class="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors flex items-center justify-between">
          <span>${sys.name}</span>
        </h3>
        <p class="text-zinc-300 text-xs sm:text-sm font-medium mb-3">${sys.tagline}</p>
        <p class="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">${sys.description}</p>

        <!-- Metrics Row -->
        <div class="grid grid-cols-3 gap-2 p-3 rounded-lg bg-white/[0.02] border border-white/5 mb-6">
          ${sys.metrics.map(m => `
            <div class="text-center">
              <div class="text-[9px] font-mono text-zinc-500 uppercase truncate">${m.label}</div>
              <div class="text-xs sm:text-sm font-bold text-white font-mono mt-0.5 truncate">${m.val}</div>
            </div>
          `).join('')}
        </div>

        <!-- Highlights -->
        <div class="space-y-2 mb-6">
          <div class="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold">Engineering Highlights:</div>
          ${sys.highlights.map(h => `
            <div class="flex items-start gap-2 text-xs text-zinc-300 font-light leading-relaxed">
              <i data-lucide="check" class="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5"></i>
              <span>${h}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div>
        <div class="flex flex-wrap gap-1.5 mb-5">
          ${sys.tags.map(t => `<span class="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-zinc-400 border border-white/5">${t}</span>`).join('')}
        </div>

        <div class="flex items-center gap-3 pt-4 border-t border-white/5 flex-wrap">
          ${sys.links.site ? `
            <a href="${sys.links.site}" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 transition-colors">
              <i data-lucide="globe" class="w-3.5 h-3.5"></i>
              <span>Website</span>
            </a>
          ` : ''}
          ${sys.links.github ? `
            <a href="${sys.links.github}" target="_blank" rel="noopener noreferrer" class="text-xs text-zinc-300 hover:text-white inline-flex items-center gap-1 transition-colors">
              <i data-lucide="github" class="w-3.5 h-3.5"></i>
              <span>Source</span>
            </a>
          ` : ''}
          ${sys.links.specId ? `
            <button onclick="openSpecDrawer('${sys.links.specId}')" class="text-xs font-mono text-zinc-400 hover:text-white inline-flex items-center gap-1 transition-colors ml-auto">
              <span>View Specs</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
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
        b.classList.remove("bg-white", "text-black");
        b.classList.add("bg-white/[0.03]", "text-zinc-400");
      });
      btn.classList.add("bg-white", "text-black");
      btn.classList.remove("bg-white/[0.03]", "text-zinc-400");

      const filter = btn.getAttribute("data-filter") || "all";
      renderDeepTechSystems(filter);
      if (window.soundEngine) window.soundEngine.playClick(800, 0.02);
    });
  });
}

/* ==========================================================================
   5. Interactive Architecture Spec Drawer
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
        <div class="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
          <span>SYSTEM ARCHITECTURE SPECIFICATION</span>
          <span class="text-emerald-400 font-bold">${spec.primaryInvariants.length} Production Invariants</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">${spec.title}</h2>
        <p class="text-zinc-400 text-xs sm:text-sm font-light mt-1">${spec.subtitle}</p>
      </div>

      <!-- Topology Diagram (Ascii / SVG block) -->
      <div>
        <div class="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-2">
          <i data-lucide="network" class="w-3.5 h-3.5 text-emerald-400"></i>
          <span>Execution Topology &amp; Boundary Flow</span>
        </div>
        <pre class="spec-topology-diagram">${spec.topologyText}</pre>
      </div>

      <!-- Production Invariants -->
      <div class="space-y-2.5">
        <div class="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Security &amp; Structural Invariants</div>
        <div class="space-y-2">
          ${spec.primaryInvariants.map(inv => `
            <div class="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-zinc-300 font-light">
              <i data-lucide="shield-check" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
              <span>${inv}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Code Snippet -->
      <div>
        <div class="flex items-center justify-between text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
          <span class="flex items-center gap-1.5">
            <i data-lucide="code-2" class="w-3.5 h-3.5 text-blue-400"></i>
            <span>Production Implementation Snippet</span>
          </span>
          <span class="text-zinc-500 font-mono text-[10px]">${spec.codeSnippet.lang}</span>
        </div>
        <pre class="p-4 rounded-xl bg-zinc-950 border border-white/10 text-emerald-300 font-mono text-xs overflow-x-auto leading-relaxed"><code>${escapeHtml(spec.codeSnippet.code)}</code></pre>
      </div>

      <!-- Engineering Trade-Offs -->
      <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
        <div class="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Engineering Trade-Offs &amp; Decision Record</div>
        <p class="text-xs text-zinc-300 font-light leading-relaxed">${spec.tradeOffs}</p>
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
   6. Live GitHub Engineering Pulse
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
    // Graceful fallback to verified cache
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
      <div class="flex items-center gap-4 text-xs font-mono text-zinc-400">
        <div><span class="text-white font-bold">${user.public_repos}</span> Public Repos</div>
        <div><span class="text-white font-bold">${user.followers}</span> Followers</div>
      </div>
    `;
  }

  if (pulseContainer && repos) {
    pulseContainer.innerHTML = repos.map(repo => `
      <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="minimal-card p-5 border border-white/10 flex flex-col justify-between group hover:border-white/30 transition-all">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-mono font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-1.5 truncate">
              <i data-lucide="git-branch" class="w-3.5 h-3.5 text-zinc-500 shrink-0"></i>
              <span class="truncate">${repo.name}</span>
            </span>
            <i data-lucide="external-link" class="w-3.5 h-3.5 text-zinc-600 group-hover:text-white transition-colors shrink-0"></i>
          </div>
          <p class="text-xs text-zinc-400 font-light leading-relaxed mb-4 line-clamp-2">${repo.description}</p>
        </div>

        <div class="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-3 border-t border-white/5">
          <span class="flex items-center gap-1.5 text-zinc-300">
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
            ${repo.language}
          </span>
          <div class="flex items-center gap-3">
            <span class="flex items-center gap-1"><i data-lucide="star" class="w-3 h-3 text-amber-400"></i> ${repo.stars}</span>
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
   7. Command Palette (⌘K / Ctrl+K)
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
      } else if (action === "open-spec-myconet") {
        openSpecDrawer("myconet");
      } else if (action === "open-sarvaflow") {
        openDeckToSlide(2);
      } else if (action === "open-linkedin") {
        window.open("https://www.linkedin.com/in/shubhampawar-in/", "_blank");
      } else if (action === "open-cuas") {
        window.open("https://github.com/Shubh-creations/Counter-UAS", "_blank");
      } else if (action === "open-devprime") {
        window.open("https://github.com/Shubh-creations/Devprime-adk", "_blank");
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
      } else if (action === "toggle-sound") {
        toggleSoundHUD();
      } else if (action === "copy-email") {
        const email = window.SITE_CONFIG?.founder?.links?.email || "shubhampawar0610@gmail.com";
        navigator.clipboard.writeText(email);
        showToast("Copied email: " + email, "success");
      }
    });
  });
}

/* ==========================================================================
   8. Founder AI Assistant (Digital Twin)
   ========================================================================== */
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
      badgeEl.className = "px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20";
    }

    if (window.soundEngine) window.soundEngine.playClick();

    setTimeout(() => {
      const res = window.neuralAssistant.query(query);

      if (badgeEl) {
        badgeEl.textContent = res.badge || "Verified";
        badgeEl.className = "px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20";
      }

      window.neuralAssistant.typewriter(responseBox, res.text, () => {
        if (badgeEl) {
          setTimeout(() => {
            badgeEl.textContent = "Ready";
            badgeEl.className = "px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-400 border border-white/10";
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
   9. Interactive Founder Dossier Modal
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
            <div class="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold">Key Architecture Points:</div>
            ${slide.bullets.map(b => `
              <div class="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 font-light">
                <i data-lucide="check" class="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5"></i>
                <span>${b}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500 font-mono flex-wrap gap-2">
          <div>SHUBHAM PAWAR // @builtfor101</div>
          <div class="flex items-center gap-3">
            <a href="https://suranyx.com" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline">Suranyx</a>
            <a href="https://vadhu-var.vercel.app" target="_blank" rel="noopener noreferrer" class="text-purple-400 hover:underline">Vadhu-Var</a>
            <a href="https://www.linkedin.com/in/shubhampawar-in/" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:underline">LinkedIn</a>
            <a href="https://github.com/Shubh-creations" target="_blank" rel="noopener noreferrer" class="text-zinc-300 hover:underline">GitHub</a>
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
   10. Contact Modal & Audio Toggle
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
   11. FAQ Accordion & Copy Buttons
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
   12. Developer Console Easter Egg
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
  
  Press ⌘K or Ctrl+K anywhere on the site for instant Command Palette.
  System Status: Optimal | Multi-Tenant RLS: Active | SHA-256 Ledger: Verified
  `;

  console.log(
    banner,
    "background: #090A0F; color: #10B981; font-weight: bold; font-size: 14px; padding: 6px 10px; border-left: 3px solid #10B981;",
    "background: #090A0F; color: #E4E4E7; font-size: 12px; line-height: 1.6;"
  );
}
