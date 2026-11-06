/**
 * Shubh - Super Intelligent Personnel OS & Investor Configuration
 * Powers dynamic calculations, AI digital twin queries, metrics, and command palette.
 */

const SITE_CONFIG = {
  founder: {
    name: "Shubh",
    fullName: "Shubh",
    title: "Founder & Systems Architect",
    location: "Global Remote",
    status: "Raising Pre-Seed & Seed Round",
    headline: "Engineering autonomous enterprise systems & deterministic AI infrastructure at scale.",
    subheadline: "Proven track record taking technical products from 0 to 1, scaling distributed systems to 1.2M+ users, and generating tangible enterprise value.",
    avatar: "assets/avatar.svg",
    links: {
      github: "https://github.com/Shubh-creations",
      repo: "https://github.com/Shubh-creations/Shubhcreations.github.io",
      siteUrl: "https://shubh.github.io",
      linkedin: "https://linkedin.com/in/shubh",
      twitter: "https://twitter.com/shubh",
      email: "founder@shubh.github.io",
      calendly: "https://calendly.com",
      deckUrl: "#deck-modal"
    }
  },

  investmentRound: {
    stage: "Pre-Seed / Seed Stage",
    targetRaise: "$1,200,000",
    committed: "45% Committed ($540,000)",
    valuationCap: 12000000, // $12M Post-Money Cap for calculator
    burnRateTarget: 55000,   // $55k/mo target burn rate
    useOfFunds: [
      { category: "Core Deep Tech & Engineering", percentage: 55, desc: "Distributed systems, AI model fine-tuning & infrastructure" },
      { category: "Enterprise GTM & Pilots", percentage: 25, desc: "Sales engineering, developer evangelism & strategic enterprise pilots" },
      { category: "Security, Compliance & Ops", percentage: 12, desc: "SOC2 Type II, ISO27001, legal & security certifications" },
      { category: "Operational Runway & Reserves", percentage: 8, desc: "Maintaining a lean 22+ month operating runway" }
    ],
    terms: "Post-Money SAFE Note with standard MFN / Pro-Rata rights"
  },

  keyMetrics: [
    { label: "Active Users Scaled", value: "1.2M+", change: "+140% YoY", detail: "Across consumer & enterprise systems" },
    { label: "Historical ARR Scaled", value: "$1.8M+", change: "0 to $1M in 14 Mo", detail: "Enterprise contract subscription value" },
    { label: "Infrastructure SLA", value: "99.99%", change: "<20ms p99 latency", detail: "Multi-region distributed Kubernetes cloud" },
    { label: "Open Source Stars", value: "12,400+", change: "Global Top 1%", detail: "Developer community adoption & tools" }
  ],

  aiSuggestedQueries: [
    "What are your current round terms and target raise?",
    "Explain your technical moat and defensibility",
    "Show verified revenue and active user metrics",
    "What is Shubh's background and execution track record?"
  ],

  ventures: [
    {
      id: "nexus-ai",
      name: "Nexus Core AI",
      tagline: "Autonomous multi-agent enterprise automation engine with deterministic reliability.",
      status: "Flagship / Raising",
      category: "Enterprise AI & Infrastructure",
      description: "Enterprises struggle with brittle LLM workflows that hallucinate and fail compliance. Nexus Core combines deterministic graph solvers with multi-agent models to execute mission-critical enterprise operations with 99.7% execution accuracy.",
      metrics: [
        { label: "Early MRR", val: "$48,500" },
        { label: "Paying Pilots", val: "14 Closed" },
        { label: "Task Latency", val: "320ms p95" }
      ],
      tags: ["Python", "Rust", "LLMs", "Distributed Systems", "PostgreSQL", "Next.js"],
      tractionPoints: [
        "Signed 14 paying pilot agreements with Fortune 500 & mid-market firms",
        "Proprietary cognitive graph solver eliminates probabilistic hallucinations",
        "Over 850,000 autonomous enterprise tasks executed in Q3 alone"
      ],
      links: {
        demo: "https://github.com/Shubh-creations",
        github: "https://github.com/Shubh-creations"
      }
    },
    {
      id: "hyperstream",
      name: "HyperStream DB",
      tagline: "Ultra-low-latency real-time event analytics engine built for streaming telemetries.",
      status: "Scaled & Proven",
      category: "Cloud Data Architecture",
      description: "Architected a custom distributed streaming engine capable of ingesting and querying 10 billion events daily with sub-second aggregate responses. Adopted by high-frequency trading and logistics clients.",
      metrics: [
        { label: "Daily Events", val: "10B+" },
        { label: "Cloud Cost", val: "-48%" },
        { label: "Peak Ingestion", val: "180k/sec" }
      ],
      tags: ["Go", "Kafka", "ClickHouse", "Kubernetes", "gRPC", "Prometheus"],
      tractionPoints: [
        "Architected from scratch, handling 180k writes/sec with sub-40ms latency",
        "Cut monthly cloud compute bills by $24,000 through zero-copy serialization",
        "Featured in top engineering tech conferences and system design blogs"
      ],
      links: {
        demo: "https://github.com/Shubh-creations",
        github: "https://github.com/Shubh-creations"
      }
    },
    {
      id: "synapse-mesh",
      name: "Synapse Protocol",
      tagline: "Decentralized peer-to-peer data synchronization network for edge environments.",
      status: "Open Source Milestone",
      category: "Protocols & Systems",
      description: "An open-source real-time sync protocol allowing collaborative applications to work offline-first with zero conflict resolution delays using state-based CRDTs and WebRTC data channels.",
      metrics: [
        { label: "GitHub Stars", val: "8,200+" },
        { label: "Contributors", val: "150+" },
        { label: "Weekly Downloads", val: "45k+" }
      ],
      tags: ["TypeScript", "WebAssembly", "CRDTs", "WebRTC", "Rust"],
      tractionPoints: [
        "Ranked #1 trending repository on GitHub for 4 consecutive days",
        "Integrated into 200+ production applications globally",
        "Active community with zero security vulnerabilities across 2 audits"
      ],
      links: {
        demo: "https://github.com/Shubh-creations",
        github: "https://github.com/Shubh-creations"
      }
    }
  ],

  pitchDeckSlides: [
    {
      slideNumber: 1,
      title: "Executive Summary & Vision",
      subtitle: "Autonomous Enterprise Intelligence at Scale",
      keyMetric: "TAM $85B by 2028",
      content: "Enterprises are drowning in fragmented tools and brittle generative AI wrappers. We are building the deterministic agent operating system that replaces multi-hour manual workflows with verifiable, auditable software agents.",
      bullets: [
        "Single unified orchestration layer for complex multi-step enterprise workflows",
        "Proprietary cognitive graph solver eliminating unconstrained hallucinations",
        "Led by seasoned builders with deep technical infrastructure backgrounds"
      ]
    },
    {
      slideNumber: 2,
      title: "The Problem",
      subtitle: "Why Traditional Automation and GenAI Fail in Enterprise",
      keyMetric: "78% Enterprise AI Proofs Fail",
      content: "Current LLM implementations are probabilistic, unpredictable, and insecure. Enterprise leaders refuse to put customer data or mission-critical transactions through black-box systems without guarantees.",
      bullets: [
        "Unpredictable hallucinations in high-stakes legal, financial, and ops decisions",
        "High latency and ballooning API costs ($50k+/mo with zero caching or state reuse)",
        "Zero compliance or audit trails required by SOC2, GDPR, and HIPAA standards"
      ]
    },
    {
      slideNumber: 3,
      title: "The Solution & Moat",
      subtitle: "Deterministic Multi-Agent State Machine",
      keyMetric: "99.7% Execution Fidelity",
      content: "Nexus combines deterministic state machines with task-specialized SLMs and verifiable execution gates. If an agent hits uncertainty, it triggers deterministic fallback paths rather than hallucinating.",
      bullets: [
        "Dual-engine architecture: Fast deterministic solver + intelligent reasoning layer",
        "Zero-knowledge data enclaves protecting proprietary corporate knowledge",
        "Self-healing workflows that adapt to third-party API mutations automatically"
      ]
    },
    {
      slideNumber: 4,
      title: "Market Opportunity (TAM)",
      subtitle: "A Generational Shift in Enterprise Automation",
      keyMetric: "$14.2B Serviceable Available Market",
      content: "The global enterprise automation and agentic software market is expanding at a 34.2% CAGR as businesses migrate from static RPA to dynamic autonomous agents.",
      bullets: [
        "TAM: $85B+ Global Enterprise Workflow & Process Automation by 2028",
        "SAM: $14.2B Mid-market & Enterprise Knowledge Automation in NA/EU",
        "SOM: $420M Target across FinTech, HealthTech, and Cloud Services"
      ]
    },
    {
      slideNumber: 5,
      title: "Traction & Early Validation",
      subtitle: "Real Velocity, Paying Customers, High Retention",
      keyMetric: "$48.5K MRR in 4 Months",
      content: "We launched our closed pilot with 5 customers and have quickly expanded to 14 active production contracts, demonstrating organic product-market pull and strong negative churn potential.",
      bullets: [
        "14 Enterprise Pilot Accounts with average ACV of $38,000",
        "118% Net Revenue Retention (NRR) across early cohort",
        "Over 850,000 transactions verified and executed end-to-end"
      ]
    },
    {
      slideNumber: 6,
      title: "Business Model & Unit Economics",
      subtitle: "Predictable SaaS + Usage Expansion",
      keyMetric: "82% Gross Margin",
      content: "Hybrid commercial structure combining predictable annual platform subscriptions with consumption credits for high-throughput autonomous executions.",
      bullets: [
        "Base Enterprise License: $2,500 - $10,000/month",
        "Task-based consumption tiers above base allocation (80%+ gross margin)",
        "Sales-assisted self-serve funnel targeting CTOs and Engineering VP leads"
      ]
    },
    {
      slideNumber: 7,
      title: "Roadmap & Milestones",
      subtitle: "18-Month Execution Blueprint",
      keyMetric: "Target: $2.5M ARR in 18 Months",
      content: "Capital will be deployed efficiently towards deep engineering, SOC2 Type II certification, expanding the enterprise sales pipeline, and establishing market leadership.",
      bullets: [
        "Q1-Q2: SOC2 Type II compliance, enterprise SSO, self-hosted deployment options",
        "Q3-Q4: Launch Agent Marketplace & developer SDK; scale to 50 enterprise logos",
        "Q5-Q6: Expand international sales force, achieve $2.5M ARR run-rate"
      ]
    },
    {
      slideNumber: 8,
      title: "The Ask & Allocation",
      subtitle: "Join Us in Redefining Enterprise Computing",
      keyMetric: "Raising $1.2M",
      content: "We are raising $1.2M on a founder-friendly convertible note / SAFE to aggressively capture our initial market segment and reach cashflow inflection.",
      bullets: [
        "Round Size: $1,200,000 (Post-Money SAFE Note)",
        "Use of Funds: 55% Engineering, 25% GTM & Customer Success, 20% Ops & Runway",
        "Current Runway Target: 22 Months of runway to Series A milestone"
      ]
    }
  ],

  milestones: [
    {
      period: "2024 - Present",
      role: "Founder & CEO",
      organization: "Nexus Core AI",
      summary: "Leading technical vision, architecture, and investor relations. Scaled from napkin prototype to $48.5K MRR with 14 enterprise pilot contracts."
    },
    {
      period: "2022 - 2024",
      role: "VP of Engineering & Principal Architect",
      organization: "Enterprise Scale Systems (Series B)",
      summary: "Led a team of 24 engineers across infrastructure, backend, and security. Scaled distributed cluster from 200k to 1.2M active users while reducing latency by 45%."
    },
    {
      period: "2020 - 2022",
      role: "Lead Systems Engineer",
      organization: "CloudFlow Data Corp",
      summary: "Designed high-throughput data processing pipelines ingesting 10B+ daily events. Spearheaded migration to Kubernetes and cut AWS spend by $300k annually."
    },
    {
      period: "2018 - 2020",
      role: "Senior Full Stack & Distributed Software Engineer",
      organization: "TechVanguard Labs",
      summary: "Built 0-to-1 web applications, authored popular open-source libraries (8k+ GitHub stars), and collaborated with tier-1 venture capital backed founders."
    }
  ],

  faq: [
    {
      q: "What is your current fundraising status and round dynamics?",
      a: "We are currently raising a $1.2M Pre-Seed/Seed round via standard Post-Money SAFE notes. We have 45% ($540k) committed from strategic angels and tech operators. The round will remain open for value-add partners."
    },
    {
      q: "What is your primary moat against big tech or open-source models?",
      a: "Foundation models are commodities; our value lives in the deterministic orchestration layer, proprietary business logic state machine, enterprise compliance guardrails, and deep integration with legacy enterprise systems that LLMs alone cannot handle."
    },
    {
      q: "What is the capital allocation plan for this raise?",
      a: "55% is allocated directly to world-class deep systems engineers, 25% to enterprise customer acquisition and dedicated pilot support, and 20% for security audits (SOC2 Type II) and cloud infrastructure, securing 22+ months of runway."
    },
    {
      q: "Can I review the complete financial model and technical data room?",
      a: "Yes! Click the 'Request Full Data Room' button in the investor deck viewer or book an intro call directly on this site to receive instant access to our cap table, financial projections, customer interview transcripts, and code architecture overview."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
} else {
  window.SITE_CONFIG = SITE_CONFIG;
}
