/**
 * Shubham Pawar // Portfolio Vector Logo System
 * Clean, lightweight, authentic SVG brand & platform logos
 */

const LOGOS = {
  // Brand & Social
  github: `<svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
  
  linkedin: `<svg class="w-4 h-4 fill-current shrink-0 text-[#0A66C2]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
  
  xTwitter: `<svg class="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,

  // Custom Founder Platforms
  suranyx: `<svg class="w-5 h-5 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#D8CBB3" fill-opacity="0.15" stroke="#D8CBB3" stroke-width="1.5"/>
    <path d="M8 16L13 21L24 10" stroke="#D8CBB3" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="24" cy="10" r="2.5" fill="#D8CBB3"/>
  </svg>`,

  vadhuVar: `<svg class="w-5 h-5 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#A855F7" fill-opacity="0.15" stroke="#C084FC" stroke-width="1.5"/>
    <path d="M12 16C12 13.79 13.79 12 16 12C18.21 12 20 13.79 20 16C20 18.21 18.21 20 16 20C13.79 20 12 18.21 12 16Z" stroke="#C084FC" stroke-width="2"/>
    <path d="M9 16C9 12.13 12.13 9 16 9C19.87 9 23 12.13 23 16C23 19.87 19.87 23 16 23" stroke="#D8CBB3" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"/>
  </svg>`,

  rodimus: `<svg class="w-5 h-5 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#3B82F6" fill-opacity="0.15" stroke="#60A5FA" stroke-width="1.5"/>
    <path d="M16 8L24 13V19L16 24L8 19V13L16 8Z" stroke="#60A5FA" stroke-width="2" stroke-linejoin="round"/>
    <circle cx="16" cy="16" r="2.5" fill="#D8CBB3"/>
  </svg>`,

  vcare: `<svg class="w-5 h-5 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#10B981" fill-opacity="0.15" stroke="#34D399" stroke-width="1.5"/>
    <path d="M16 9V23M9 16H23" stroke="#34D399" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="16" cy="16" r="3" fill="#D8CBB3"/>
  </svg>`,

  postman: `<svg class="w-5 h-5 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#FF6C37" fill-opacity="0.15" stroke="#FF6C37" stroke-width="1.5"/>
    <path d="M16 7L24 13L16 19L8 13L16 7Z" fill="#FF6C37"/>
    <path d="M8 13V19L16 25V19L8 13Z" fill="#FF6C37" fill-opacity="0.7"/>
    <path d="M24 13V19L16 25V19L24 13Z" fill="#FF6C37" fill-opacity="0.5"/>
  </svg>`,

  dypatil: `<svg class="w-5 h-5 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#EAB308" fill-opacity="0.15" stroke="#FACC15" stroke-width="1.5"/>
    <path d="M16 8L8 13L16 18L24 13L16 8Z" stroke="#FACC15" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M11 15V21C11 23 13.5 24 16 24C18.5 24 21 23 21 21V15" stroke="#FACC15" stroke-width="1.8"/>
  </svg>`,

  // Core Tech Stack Logos
  python: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.752h5.814v.825H3.885S0 5.762 0 11.884c0 6.12 3.398 5.908 3.398 5.908h2.03v-2.857s-.109-3.398 3.344-3.398h5.762s3.236.052 3.236-3.183V2.656S18.246 0 11.914 0zm-3.29 1.696a1.01 1.01 0 11.002 2.02 1.01 1.01 0 01-.002-2.02zM12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.752H11.98v-.825h8.135s3.885.471 3.885-5.65c0-6.123-3.398-5.91-3.398-5.91h-2.03v2.856s.109 3.399-3.344 3.399H9.465s-3.236-.053-3.236 3.182v5.702S5.754 24 12.086 24zm3.29-1.696a1.01 1.01 0 11-.002-2.02 1.01 1.01 0 01.002 2.02z" fill="#3776AB"/></svg>`,

  pytorch: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.754 0L11.51 1.258l4.383 4.43a8.887 8.887 0 012.33 3.916 9.07 9.07 0 01-3.882 10.748 8.927 8.927 0 01-11.378-1.57A8.995 8.995 0 011.5 8.358a9.076 9.076 0 015.65-8.083l-.707 1.666a7.272 7.272 0 00-4.526 6.478 7.207 7.207 0 001.171 8.36 7.152 7.152 0 009.116 1.259 7.266 7.266 0 003.11-8.611 7.123 7.123 0 00-1.868-3.137L9.948 2.84 8.705 4.099l4.05 4.091-2.482 2.509a2.71 2.71 0 00-.787 1.916 2.74 2.74 0 002.714 2.745 2.71 2.71 0 001.915-.795l2.49-2.517-3.85-3.89z" fill="#EE4C2C"/></svg>`,

  fastapi: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" fill="#009688"/></svg>`,

  postgresql: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.968 0C5.358 0 0 5.358 0 11.968c0 6.61 5.358 11.968 11.968 11.968 6.61 0 11.968-5.358 11.968-11.968C23.936 5.358 18.578 0 11.968 0zm6.918 17.514c-.378.182-1.006.33-1.66.33-2.127 0-3.31-1.248-3.31-3.418v-4.94h-1.636V7.47h1.636V4.992l2.002-.603v3.08h2.968v2.016h-2.968v4.615c0 1.23.593 1.83 1.628 1.83.472 0 .847-.077 1.09-.165v1.746z" fill="#4169E1"/></svg>`,

  supabase: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.362 9.354H12V.396a.396.396 0 00-.716-.247L2.456 12.39a.396.396 0 00.321.637H12v8.958a.396.396 0 00.716.247l8.828-12.241a.396.396 0 00-.182-.637z" fill="#3ECF8E"/></svg>`,

  react: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9.387c1.443 0 2.613 1.17 2.613 2.613s-1.17 2.613-2.613 2.613c-1.443 0-2.613-1.17-2.613-2.613S10.557 9.387 12 9.387zm0-9.387c2.316 0 4.545.342 6.545.975 1.547.49 2.825 1.218 3.754 2.147.93.93 1.657 2.207 2.147 3.754.633 2 .975 4.229.975 6.545s-.342 4.545-.975 6.545c-.49 1.547-1.218 2.825-2.147 3.754-.93.93-2.207 1.657-3.754 2.147-2 .633-4.229.975-6.545.975s-4.545-.342-6.545-.975c-1.547-.49-2.825-1.218-3.754-2.147-.93-.93-1.657-2.207-2.147-3.754C.342 16.545 0 14.316 0 12s.342-4.545.975-6.545c.49-1.547 1.218-2.825 2.147-3.754.93-.93 2.207-1.657 3.754-2.147C7.455.342 9.684 0 12 0z" fill="#61DAFB"/></svg>`,

  typescript: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#3178C6"/><path d="M14.5 10.5v1.8h2.3v6.7h2.2v-6.7h2.3v-1.8h-6.8zm-9.5 5.5c.5.8 1.4 1.3 2.4 1.3 1.3 0 2.1-.7 2.1-1.7 0-1.1-.8-1.5-2.2-2.1-1.7-.7-2.8-1.5-2.8-3.2 0-1.8 1.4-3.1 3.5-3.1 1.5 0 2.6.5 3.3 1.6l-1.6 1.1c-.4-.6-1-1-1.7-1-.9 0-1.4.5-1.4 1.2 0 .8.6 1.2 1.9 1.7 1.9.8 3.1 1.6 3.1 3.5 0 2-1.6 3.3-4.1 3.3-1.8 0-3.1-.7-3.9-2l1.4-1.6z" fill="#FFF"/></svg>`,

  docker: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.954 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.145a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m5.884 2.714h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.145a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185M23.77 9.94c-.452-.303-1.424-.46-2.502-.4-1.026.06-1.92.366-2.61.94-.486.404-.798.887-.96 1.433-.314-.07-.63-.11-.95-.11H1.5c-.32 0-.635.04-.95.11-.295 1.05-.295 2.215 0 3.265.55 1.95 2.11 3.55 4.15 4.28 2.04.73 4.31.73 6.35 0 2.04-.73 3.6-2.33 4.15-4.28.16-.546.16-1.12 0-1.666.66-.54 1.5-.82 2.37-.82.26 0 .52.03.77.08.3-.39.73-.67 1.23-.83z" fill="#2496ED"/></svg>`,

  linux: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.012 0c-3.13 0-5.32 2.2-5.32 5.56 0 1.25.32 2.78.89 4.13C6.312 10.74 5 12.35 5 15.22c0 2.93 1.97 4.9 4.94 4.9 1.14 0 2.1-.31 2.87-.78.78.47 1.74.78 2.88.78 2.97 0 4.94-1.97 4.94-4.9 0-2.87-1.31-4.48-2.58-5.53.57-1.35.89-2.88.89-4.13 0-3.36-2.19-5.56-5.32-5.56h-.61zm-1.8 4.75a.94.94 0 110 1.88.94.94 0 010-1.88zm3.6 0a.94.94 0 110 1.88.94.94 0 010-1.88zM12 7.8c1.3 0 2.1.8 2.1 1.7 0 1.2-1.3 1.8-2.1 1.8s-2.1-.6-2.1-1.8c0-.9.8-1.7 2.1-1.7z" fill="#FCC624"/></svg>`,

  vercel: `<svg class="w-3.5 h-3.5 shrink-0 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1L24 22H0L12 1Z"/></svg>`,

  tailwind: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8"/></svg>`,

  nvidia: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.747 18.895v-2.078c.883.336 1.834.507 2.853.507 2.378 0 3.737-.951 3.737-2.65 0-3.907-5.912-2.31-5.912-6.184 0-2.378 1.903-4.043 4.858-4.043 1.087 0 2.106.204 2.922.544l-.612 2.072a7.11 7.11 0 00-2.378-.442c-1.699 0-2.582.747-2.582 1.835 0 3.533 5.912 2.106 5.912 6.183 0 2.515-1.97 4.248-5.3 4.248-1.325 0-2.548-.272-3.498-.792z" fill="#76B900"/></svg>`,

  opencv: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="6" r="4.5" fill="#EE2C2C"/><circle cx="5.5" cy="17" r="4.5" fill="#4B82F6"/><circle cx="18.5" cy="17" r="4.5" fill="#22C55E"/></svg>`
};

/**
 * Returns matching SVG logo or fallback icon
 */
function getTechLogo(name) {
  const n = (name || "").toLowerCase();
  if (n.includes("python")) return LOGOS.python;
  if (n.includes("pytorch") || n.includes("torchscript")) return LOGOS.pytorch;
  if (n.includes("fastapi")) return LOGOS.fastapi;
  if (n.includes("postgres")) return LOGOS.postgresql;
  if (n.includes("supabase")) return LOGOS.supabase;
  if (n.includes("react") || n.includes("next")) return LOGOS.react;
  if (n.includes("typescript")) return LOGOS.typescript;
  if (n.includes("docker")) return LOGOS.docker;
  if (n.includes("linux") || n.includes("posix") || n.includes("shell")) return LOGOS.linux;
  if (n.includes("vercel")) return LOGOS.vercel;
  if (n.includes("tailwind")) return LOGOS.tailwind;
  if (n.includes("cuda") || n.includes("nvidia") || n.includes("jetson")) return LOGOS.nvidia;
  if (n.includes("opencv") || n.includes("vision")) return LOGOS.opencv;
  if (n.includes("suranyx")) return LOGOS.suranyx;
  if (n.includes("vadhu") || n.includes("vv")) return LOGOS.vadhuVar;
  if (n.includes("rodimus")) return LOGOS.rodimus;
  if (n.includes("vcare")) return LOGOS.vcare;
  if (n.includes("postman")) return LOGOS.postman;
  
  // Default micro circuit icon
  return `<svg class="w-3.5 h-3.5 text-[#D8CBB3] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>`;
}

window.PORTFOLIO_LOGOS = LOGOS;
window.getTechLogo = getTechLogo;
