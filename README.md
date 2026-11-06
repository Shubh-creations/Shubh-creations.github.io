# Shubh // Super Intelligent Personnel OS & Investor Hub

> **Awwwards / Linear / Apple grade personal operating system & investor brief**
> **Repository:** [https://github.com/Shubh-creations/Shubhcreations.github.io](https://github.com/Shubh-creations/Shubhcreations.github.io)
> **Live Site:** [https://shubhcreations.github.io](https://shubhcreations.github.io)

---

## ⚡ Quick Deploy (How to Fix the System32 Error)

If you saw:
```
PS C:\WINDOWS\system32> git remote add origin ...
fatal: not a git repository (or any of the parent directories): .git
```
**Why this happened:** Your PowerShell prompt was running inside `C:\WINDOWS\system32` instead of your project directory `C:\My web github.io`.

### Option A: Run 2 Commands in PowerShell
Copy and paste this directly into your PowerShell:
```powershell
cd "C:\My web github.io"
git push -u origin main --force
```

### Option B: 1-Click Batch File
Double-click **`push-to-github.bat`** located inside `C:\My web github.io`. It automatically navigates to your folder and pushes both `main` and `master` branches to GitHub with `--force`.

---

## 💎 What Was Extracted & Transformed from `Shubhcreations.github.io`

| Component | Source / Transformation | Benefit |
| :--- | :--- | :--- |
| **PWA & Favicon Suite** | Extracted from remote `public/` (16x16, 32x32, 192x192, 384x384, Apple Touch Icon, Safari Pinned SVG) | Crisp high-res icons across iPhones, Android, Mac, and Windows. |
| **`manifest.json`** | Re-architected for *Shubh // Personnel OS* with theme `#030712` | Installable as a standalone progressive web application. |
| **Automated Deploy Pipeline** | Replaced fragile legacy Node 18 build with modern `.github/workflows/deploy.yml` | Zero npm build errors; deploys directly via GitHub Pages official actions. |
| **SEO & Crawlers** | Modernized `robots.txt` and created `sitemap.xml` | Instant indexability on Google and Bing. |
| **Developer Standards** | `.gitignore`, `.gitattributes` (LF normalization), `LICENSE` (MIT) | Professional repository presentation matching tier-1 open source projects. |
| **Verified Identifiers** | All URLs updated to `Shubh-creations` & `shubhcreations.github.io` | Zero broken links or placeholder domains. |

---

## 🌟 Interactive Features Included

1. **🌌 Neural Constellation Canvas (`js/canvas-bg.js`)**: 60fps GPU-accelerated canvas with particle drift and cursor attraction physics.
2. **🤖 Neural Digital Twin (`js/ai-assistant.js`)**: Real-time streaming answers to investor and technical due diligence questions.
3. **🧮 Interactive SAFE Allocation Calculator (`js/main.js`)**: Dynamic slider ($25K–$500K) calculating equity %, runway months, and milestone impact.
4. **⚡ Command Palette (`⌘K` / `Ctrl+K`)**: Fast fuzzy search menu with keyboard shortcuts.
5. **💡 Spotlight Cursor Tracking (`css/styles.css`)**: Dynamic Apple/Linear card hover highlights following mouse position.
6. **🔊 Synthetic Acoustic Engine (`js/audio.js`)**: Pure Web Audio API tactile clicks and chimes (muted by default with HUD toggle).
7. **🛰️ Real-Time Telemetry HUD**: Live UTC clock, simulated 18ms latency diagnostic, and round status tracker.
8. **📊 8-Slide Pitch Deck Modal**: Complete investor deck presentation with keyboard arrow navigation.
9. **🖨️ High-Contrast Print / PDF Mode**: Press `Ctrl + P` to export a clean, ink-friendly 1-pager summary.

---

## 📁 Repository Structure

```
c:\My web github.io\
├── index.html                  # Master semantic HTML5 + HUD + Modals
├── favicon.svg                 # High-res vector favicon
├── favicon.ico                 # Standard legacy ICO favicon
├── favicon-16x16.png           # PWA 16px favicon
├── favicon-32x32.png           # PWA 32px favicon
├── apple-touch-icon.png        # iOS home screen touch icon
├── android-chrome-192x192.png  # Android PWA 192px icon
├── android-chrome-384x384.png  # Android PWA 384px icon
├── safari-pinned-tab.svg       # macOS Safari pinned tab vector
├── manifest.json               # Progressive Web App manifest
├── robots.txt                  # Search engine crawl directives
├── sitemap.xml                 # XML sitemap for SEO
├── LICENSE                     # MIT Open Source License
├── push-to-github.bat          # 1-click push script
├── push-to-github.ps1          # PowerShell push script
├── .gitattributes              # Line ending normalization
├── .gitignore                  # Clean developer ignore rules
├── .github/workflows/
│   └── deploy.yml              # Official GitHub Pages deployment workflow
├── css/
│   └── styles.css              # Spotlight cards, noise grain, slider & animations
├── js/
│   ├── config.js               # Central profile, metrics & investor parameters
│   ├── canvas-bg.js            # 60fps interactive neural constellation canvas
│   ├── audio.js                # Web Audio API synthetic acoustic feedback engine
│   ├── ai-assistant.js         # Natural-language digital twin query engine
│   └── main.js                 # Master orchestrator (Command menu, calculator, modals)
└── assets/
    ├── avatar.svg              # Vector monogram avatar badge
    └── illustrations/          # Extracted tech SVGs from remote repository
```
