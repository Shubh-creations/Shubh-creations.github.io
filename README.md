# Shubh — Founder Portfolio & Investor Hub

> High-impact personal portfolio, venture track record, and interactive investor deck built specifically for **https://shubh.github.io**.

Designed with a modern Silicon Valley deep-tech aesthetic (Stripe / Linear / Vercel grade), optimized for angels, venture capitalists, technical partners, and enterprise customers.

---

## 🌟 Key Features

1. **Executive Investor Pitch Deck & Memo Viewer**:
   - Built-in slide modal featuring 8 strategic slides (Vision, Problem, Solution & Moat, TAM/SAM, Traction, Business Model, Roadmap, The Ask).
   - Includes progress tracking, keyboard navigation (`←` / `→` arrows, `Esc`), and direct slide links.
2. **Fundraising Status & Round Dynamics**:
   - Live visual round tracker ($1.2M Pre-Seed/Seed raise, 45% allocated).
   - Transparent Use of Funds breakdown bar (Engineering 55%, GTM 25%, Compliance 12%, Runway 8%).
3. **Traction & Metrics Bento Grid**:
   - 1.2M+ Scaled Active Users.
   - $1.8M+ Historical ARR Scaled.
   - 99.99% Systems Uptime (&lt;20ms p99 latency).
   - 12,400+ GitHub Stars & Open Source Community reach.
4. **Venture Showcase & Moat Deep Dive**:
   - Highlights current flagship venture (`Nexus Core AI`), scaled data platforms (`HyperStream DB`), and open source protocols (`Synapse Protocol`).
   - Detailed breakdown of technical defensibility: Deterministic graphs, sub-30ms streaming engines, and enterprise enclaves.
5. **Career Milestones & Operator Pedigree**:
   - Chronological track record showing 0-to-1 founder execution and engineering leadership.
6. **Due Diligence FAQ Accordion**:
   - Transparent answers to round dynamics, defensibility, capital allocation, and data room access.
7. **Meeting & Data Room Modal**:
   - Direct integration link with Calendly / Cal.com for 20-minute intro calls.
   - Direct note submission with pre-formatted email templates.
8. **Print & PDF Export Mode**:
   - Custom `@media print` stylesheet. Investors can press `Ctrl + P` (or click "Print / Save 1-Pager") to instantly export a clean, high-contrast, print-friendly executive brief.
9. **Zero Build Step Required**:
   - Pure, lightning-fast static HTML5, modern CSS, and vanilla JS. Fully compatible with GitHub Pages right out of the box.

---

## 🚀 How to Publish to GitHub Pages (`shubh.github.io`)

### Step 1: Create the GitHub Repository
1. Log into your GitHub account: `https://github.com/shubh`
2. Create a new public repository named exactly:
   ```
   shubh.github.io
   ```
   *(GitHub automatically serves repositories named `<username>.github.io` directly at `https://<username>.github.io`)*

### Step 2: Initialize and Push Your Code
Open your terminal (PowerShell or Bash) in this project folder (`c:\My web github.io`) and run:

```bash
# 1. Initialize git
git init

# 2. Stage all files
git add .

# 3. Create your initial commit
git commit -m "feat: launch founder portfolio and investor hub"

# 4. Set default branch to main
git branch -M main

# 5. Link your GitHub remote
git remote add origin https://github.com/shubh/shubh.github.io.git

# 6. Push to GitHub
git push -u origin main
```

### Step 3: Verify GitHub Pages Settings
1. Go to your repository on GitHub: `https://github.com/shubh/shubh.github.io`
2. Navigate to **Settings** → **Pages** (under the "Code and automation" sidebar).
3. Ensure **Build and deployment** is set to:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` / `/ (root)`
4. Click **Save** (if not already set). Within 30–60 seconds, your site will be live at:
   👉 **`https://shubh.github.io`**

---

## 🛠️ How to Customize Your Details

All profile content, metrics, venture details, pitch deck slides, and FAQs are centralized in **[`js/config.js`](file:///c:/My%20web%20github.io/js/config.js)**.

To customize:
1. Open [`js/config.js`](file:///c:/My%20web%20github.io/js/config.js) in your editor.
2. Update:
   - `founder.name`, `title`, `location`, `status`
   - `founder.links` (your Calendly URL, LinkedIn, Twitter, Email)
   - `investmentRound` (target raise, committed amount, use of funds)
   - `keyMetrics` (your specific numbers and growth rates)
   - `ventures` (names, descriptions, and metrics of your companies or projects)
   - `pitchDeckSlides` (bullet points and takeaways for your pitch)
   - `faq` (custom answers to questions you frequently get from investors)
3. Save the file and commit your changes (`git commit -am "update config" && git push`). GitHub Pages updates automatically!

---

## 🌐 Custom Domain (Optional)

If you wish to use a custom domain like `shubh.com`, `shubh.ai`, or `shubh.tech`:
1. Create a file named `CNAME` in the root folder containing your domain (e.g. `shubh.com`).
2. In your DNS provider (Cloudflare, Namecheap, GoDaddy):
   - Add **A Records** pointing `@` to GitHub's IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Add a **CNAME Record** pointing `www` to `shubh.github.io`.
3. In GitHub repo **Settings → Pages**, enter your custom domain and enable **Enforce HTTPS**.

---

## 📁 Project Structure

```
c:\My web github.io\
├── index.html           # Main semantic HTML5 page with Tailwind + Lucide
├── favicon.svg          # Modern high-res SVG favicon
├── README.md            # Deployment & customization guide
├── css/
│   └── styles.css       # Glowing gradients, glassmorphism, animations & print styling
├── js/
│   ├── config.js        # Central profile, metrics, deck & investor config
│   └── main.js          # Interactive modals, slide deck viewer, accordions, counters
└── assets/
    └── avatar.svg       # SVG Avatar graphic placeholder
```
