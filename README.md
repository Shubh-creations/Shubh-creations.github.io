# Shubh // Super Intelligent Personnel OS & Investor Hub

> **Awwwards / Linear / Apple grade personal operating system & investor brief built specifically for https://shubh.github.io**

Designed with an ultra-minimalist, high-luxury cyber-obsidian aesthetic, combining tactile micro-interactions, an interactive neural canvas, real-time telemetry, a natural-language AI digital twin, and a live investor allocation calculator.

---

## 💎 Elite Architecture & System Features

### 1. 🌌 Interactive Neural Constellation Canvas (`js/canvas-bg.js`)
- 60fps GPU-accelerated HTML5 Canvas with fluid physics.
- Responsive to mouse attraction, repulsion, and touch physics with dynamic DPI scaling.

### 2. 🤖 Shubh Neural Digital Twin (`js/ai-assistant.js`)
- Real-time interactive intelligence console for investors and partners.
- Answers questions about:
  - **Fundraising & Terms**: Stage, SAFE cap, capital deployment, runway.
  - **Technical Moat**: Deterministic state machine architecture, sub-30ms pipelines.
  - **Verified Metrics**: $48.5K MRR, 14 pilots, 1.2M users scaled.
  - **Founder Pedigree**: Systems leadership, past exits/roles, 0-to-1 building.
- Streaming typewriter animation with synthesized acoustic cues.

### 3. 🧮 Interactive SAFE Check & Allocation Calculator (`js/main.js`)
- Dynamic slider from **$25,000 to $500,000**.
- Real-time computation of:
  - **Ownership %** (based on $12M Post-Money Valuation Cap)
  - **Runway Months Unlocked** (based on $55k/mo target burn)
  - **Strategic Milestone Impact** (e.g., "Funds 1 Senior Distributed Systems Engineer for 12 months")
- "Reserve Allocation" button pre-populates note directly into the investor inquiry form.

### 4. ⚡ Command Palette (`⌘K` / `Ctrl+K`) (`js/main.js`)
- High-speed fuzzy search menu with keyboard shortcuts:
  - `D`: Open interactive pitch deck
  - `AI`: Query neural twin
  - `C`: Schedule intro call
  - `M`: Toggle audio HUD
  - `@`: Copy founder email

### 5. 💡 Spotlight Cursor Card Tracking (`css/styles.css`)
- Dynamic CSS mouse tracking on every card (`--mouse-x`, `--mouse-y`) rendering smooth Apple/Linear-style radial border highlights.

### 6. 🔊 Synthetic Acoustic Engine (`js/audio.js`)
- Pure Web Audio API synthesizers (zero external audio files or MP3 network requests).
- Tactile micro-clicks, harmonic chord chimes, and modal swooshes.
- Muted by default with an instant HUD toggle in the top telemetry bar.

### 7. 🛰️ Real-Time Telemetry HUD
- Live ticking UTC clock.
- Simulated node latency ping (`18ms // OPTIMUM`).
- Live round status indicator: `🟢 $1.2M SAFE Round // 45% Committed`.

### 8. 📊 Interactive 8-Slide Pitch Deck Modal
- Executive presentation with progress bar, keyboard arrow navigation (`←`/`→`/`Esc`), and direct data room requests.

### 9. 🖨️ High-Contrast Executive Print Mode
- Custom `@media print` stylesheet. Investors can press `Ctrl + P` to export a clean, ink-friendly 1-page/2-page executive memo for offline partner meetings.

---

## 🚀 How to Deploy to `shubh.github.io`

The local repository is already initialized and committed on branch `main`.

### Step 1: Create the Repository on GitHub
1. Log into your GitHub account: `https://github.com/shubh`
2. Create a new public repository named:
   ```
   shubh.github.io
   ```

### Step 2: Push Your Code
Open PowerShell or Terminal in this folder (`c:\My web github.io`) and execute:

```powershell
git remote add origin https://github.com/shubh/shubh.github.io.git
git push -u origin main
```

### Step 3: Enjoy Your Live Site
Within 60 seconds, your site will be live worldwide at:
👉 **`https://shubh.github.io`**

---

## 🛠️ Personalization in 2 Minutes

All data, numbers, milestones, and AI knowledge are stored cleanly in **[`js/config.js`](file:///c:/My%20web%20github.io/js/config.js)**:
- `SITE_CONFIG.founder`: Name, title, links (Calendly, LinkedIn, GitHub, email).
- `SITE_CONFIG.investmentRound`: Valuation cap, target raise, committed %, burn rate.
- `SITE_CONFIG.ventures`: Add or edit your companies, tech tags, and traction points.
- `SITE_CONFIG.pitchDeckSlides`: Customize your 8-slide pitch narrative.

---

## 📁 Repository Structure

```
c:\My web github.io\
├── index.html           # Main semantic HTML5 structure + HUD + Modals
├── favicon.svg          # Modern high-res SVG favicon
├── README.md            # Architecture & deployment documentation
├── css/
│   └── styles.css       # Spotlight hover, noise texture, custom slider, animations
├── js/
│   ├── config.js        # Centralized profile & investor parameters
│   ├── canvas-bg.js     # 60fps interactive neural constellation canvas
│   ├── audio.js         # Web Audio API synthetic acoustic feedback engine
│   ├── ai-assistant.js  # Natural-language digital twin query engine
│   └── main.js          # Master orchestrator (Command menu, calculator, modals)
└── assets/
    └── avatar.svg       # Vector monogram avatar badge
```
