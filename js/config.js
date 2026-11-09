/**
 * Shubham Pawar // AI Startup Founder & Systems Engineer
 * Flagship Production Platforms:
 * 1. Suranyx (https://suranyx.com) — AI-Native Financial Operating System
 * 2. Vadhu-Var / VV (https://vadhu-var.vercel.app) — Trilingual Matrimony PWA
 * GitHub: https://github.com/Shubh-creations
 * Twitter / X: https://x.com/builtfor101 | LinkedIn: https://www.linkedin.com/in/shubhampawar-in/
 */

const SITE_CONFIG = {
  founder: {
    name: "Shubham Pawar",
    shortName: "Shubham",
    title: "AI Startup Founder & Systems Engineer",
    tagline: "Co-Founder @ Suranyx • Creator of Vadhu-Var (VV) • Distributed & Autonomous Systems Architect",
    location: "Pune, India // Remote",
    status: "Building Suranyx (suranyx.com) & Vadhu-Var (VV)",
    headline: "AI Startup Founder & Systems Engineer building production-grade platforms, multi-tenant financial infrastructure, and sovereign distributed systems.",
    subheadline: "Co-Founder & Lead Systems Architect at Suranyx (AI-Native Financial OS & B2B compliance) and Creator of Vadhu-Var (trilingual matrimony PWA with atomic PostgreSQL RPCs). Deeply focused on tamper-evident SHA-256 audit ledgers, sub-millisecond RLS InitPlan policies, and reinforcement learning agent toolkits (Devprime ADK).",
    avatar: "assets/avatar.svg",
    links: {
      suranyx: "https://suranyx.com",
      vadhuVar: "https://vadhu-var.vercel.app",
      github: "https://github.com/Shubh-creations",
      repo: "https://github.com/Shubh-creations/Shubh-creations.github.io",
      siteUrl: "https://shubh-creations.github.io",
      linkedin: "https://www.linkedin.com/in/shubhampawar-in/",
      twitter: "https://x.com/builtfor101",
      twitterHandle: "@builtfor101",
      email: "shubhampawar0610@gmail.com",
      phone: "+91 9623422350",
      rodimus: "https://www.rodimus-tech.com",
      dossierUrl: "#deck-modal"
    }
  },

  principles: [
    {
      num: "01",
      title: "Deterministic Integrity Over Probabilistic Wrappers",
      desc: "Financial data, identity graphs, and defense telemetry demand zero-trust mathematical invariants. We enforce tamper-evident SHA-256 ledgers, atomic RPC transactions, and multi-tenant RLS boundary isolation."
    },
    {
      num: "02",
      title: "Hardware-Accelerated Latency Discipline",
      desc: "Every millisecond of overhead is a failure of craftsmanship. We compile PyTorch models to TorchScript, optimize PostgreSQL execution plans via RLS InitPlan, and leverage CUDA to run vision systems at 30+ FPS."
    },
    {
      num: "03",
      title: "Composability & Fault-Tolerant State Machines",
      desc: "Distributed systems scale through modular, idempotent primitives. Decouple orchestration from execution with durable state graphs and cryptographic verification."
    },
    {
      num: "04",
      title: "Physical-World Grounding & Shipped Reality",
      desc: "Real engineering defensibility exists where software touches the real world: Indian SME financial reconciliation, culturally grounded matrimony communities, and hardware edge micro-controllers."
    }
  ],

  keyMetrics: [
    { label: "Flagship FinTech OS", value: "Suranyx", change: "suranyx.com", detail: "Cash runway intelligence & RBI ReBIT AA consent" },
    { label: "Live Trilingual PWA", value: "Vadhu-Var", change: "vadhu-var.vercel.app", detail: "Sub-ms RLS InitPlan & atomic PostgreSQL RPCs" },
    { label: "Audit Integrity", value: "SHA-256", change: "Hash-Chained", detail: "Cryptographic tamper-evident balance ledgers" },
    { label: "Tactical Edge Defense", value: "92.4% mAP", change: "<100ms Threat", detail: "AI-native C-UAS drone interception on Jetson" }
  ],

  // FLAGSHIP PRODUCTION PLATFORMS
  flagships: [
    {
      id: "suranyx",
      name: "Suranyx",
      badge: "Flagship Production System",
      role: "Co-Founder & Lead Systems Architect",
      tagline: "AI-Native Financial Operating System, Cash Runway Intelligence & Automated B2B Compliance Infrastructure.",
      url: "https://suranyx.com",
      displayUrl: "suranyx.com",
      status: "Production Live",
      category: "FinTech & Compliance OS",
      description: "Engineered from day zero for Indian SMEs and high-growth enterprise operators. Suranyx unifies multi-bank real-time liquidity telemetries, automated reconciliation, and predictive cash runway modeling into an airtight, audit-ready operating system.",
      highlights: [
        "Multi-Tenant Row-Level Security (RLS) isolation guaranteeing zero cross-tenant leakage across enterprise boundaries",
        "Tamper-evident SHA-256 hash-chained financial audit ledgers with cryptographic balance verification on every mutation",
        "Idempotent financial mutation workflows and RBI ReBIT Account Aggregator (Setu / Finvu) consent pipeline architecture",
        "Durable workflow orchestration, multi-account automated reconciliation, and predictive burn rate forecasting"
      ],
      stack: ["FastAPI", "Python", "React", "TypeScript", "PostgreSQL", "Supabase", "Vercel", "Tailwind CSS"],
      metrics: [
        { label: "Data Isolation", val: "Multi-Tenant RLS" },
        { label: "Audit Trail", val: "SHA-256 Chained" },
        { label: "Open Banking", val: "RBI ReBIT AA" }
      ],
      links: {
        live: "https://suranyx.com",
        specAction: "open-spec-suranyx"
      }
    },
    {
      id: "vadhu-var",
      name: "Vadhu-Var (VV)",
      badge: "Flagship Production PWA",
      role: "Creator & Lead Full-Stack Architect",
      tagline: "Culturally Grounded Trilingual Matrimony Progressive Web Platform (PWA).",
      url: "https://vadhu-var.vercel.app",
      displayUrl: "vadhu-var.vercel.app",
      status: "Production Live",
      category: "Consumer PWA & Database Engineering",
      description: "A modern, Hinge-inspired matchmaking progressive web application architected with deep cultural intentionality. Built with runtime trilingual localization (English, Marathi, Hindi), 36 conversation prompts, and strict verification trust mechanics.",
      highlights: [
        "Custom atomic PostgreSQL stored procedures and RPC functions: send_contextual_interest, respond_to_interest, close_match_gracefully, and swap_or_replace_profile_media",
        "RLS InitPlan optimization: parameterized (SELECT auth.uid()) execution, eliminating per-row subplan evaluations and delivering sub-millisecond policy checks",
        "Strict media invariant constraints: 1 compulsory primary photo, max 3 slots with atomic media swap and covering B-tree compound indexes",
        "Trilingual runtime internationalization with zero layout shift and offline-first PWA caching on Vercel Edge"
      ],
      stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Supabase", "PWA", "Tailwind CSS", "Vercel"],
      metrics: [
        { label: "Database RPCs", val: "Atomic Stored Procs" },
        { label: "Policy Speed", val: "Sub-ms InitPlan" },
        { label: "Localization", val: "Trilingual (EN/MR/HI)" }
      ],
      links: {
        live: "https://vadhu-var.vercel.app",
        specAction: "open-spec-vadhu-var"
      }
    }
  ],

  // PRODUCTION STACK & SYSTEMS MATRIX
  productionStack: [
    {
      category: "AI, ML & Autonomous Pipelines",
      icon: "cpu",
      summary: "Deep learning models, reinforcement learning harnesses, explainable computer vision, and media processing pipelines.",
      technologies: [
        { name: "PyTorch & TorchScript", desc: "Deep neural net training, model compilation & zero-overhead C++ export" },
        { name: "VLA & RL Agents", desc: "DQN & PPO algorithms for GridWorld and PyBullet robotic simulation" },
        { name: "CNNs & Grad-CAM", desc: "High-precision vision classifiers with visual gradient explainability heatmaps" },
        { name: "OpenCV & CUDA", desc: "Hardware-accelerated edge computer vision at 30+ FPS with sub-1s latency" },
        { name: "YOLOv8 & ViT", desc: "Object detection, aerial trajectory tracking, and vision transformer backbones" },
        { name: "OCR & Barcode Parsing", desc: "Tesseract OCR and multi-format packaging scanning pipelines" },
        { name: "FFmpeg Automation", desc: "High-throughput asynchronous video rendering and audio normalization" },
        { name: "MLflow Drift Mitigation", desc: "Real-time dataset shift detection with automated retraining triggers" }
      ]
    },
    {
      category: "Backend, Distributed Systems & Databases",
      icon: "database",
      summary: "Mission-critical backend architectures, row-level multi-tenancy, cryptographic ledgers, and atomic database transactions.",
      technologies: [
        { name: "FastAPI & Python 3.11+", desc: "High-throughput asynchronous REST APIs with Pydantic type safety" },
        { name: "PostgreSQL & Supabase", desc: "Relational modeling, covering B-tree indexes & connection pooling" },
        { name: "Multi-Tenant RLS", desc: "Kernel-level tenant isolation via Postgres Row-Level Security policies" },
        { name: "Atomic Stored Procs & RPCs", desc: "Encapsulated database procedures preventing state race conditions" },
        { name: "SHA-256 Hash-Chained Ledgers", desc: "Tamper-evident cryptographic audit logs for immutable financial records" },
        { name: "RBI ReBIT Account Aggregator", desc: "FIU/FIP open-banking consent pipelines (Setu / Finvu architecture)" },
        { name: "Idempotent Mutation Pipelines", desc: "Unique idempotency keys preventing double-billing and replay attacks" },
        { name: "Distributed Workflow DAGs", desc: "Directed Acyclic Graph orchestrators with self-healing retry logic" }
      ]
    },
    {
      category: "Frontend, PWA & Cloud Infrastructure",
      icon: "layout",
      summary: "High-craft user interfaces, trilingual localization engines, progressive web apps, and modern CI/CD deployment pipelines.",
      technologies: [
        { name: "React 18+ & Next.js", desc: "Server components, streaming hydration, and responsive component design" },
        { name: "TypeScript", desc: "Strict end-to-end type safety spanning API contracts and UI states" },
        { name: "Progressive Web Apps (PWA)", desc: "Service workers, installable mobile manifests, and offline-first caching" },
        { name: "Tailwind CSS", desc: "Utility-first design tokens, obsidian surfaces, and responsive layouts" },
        { name: "Vercel Edge Platform", desc: "Global edge network deployment with sub-50ms TTFB worldwide" },
        { name: "GitHub Actions CI/CD", desc: "Automated linting, testing, and continuous deployment workflows" },
        { name: "Linux & Shell Automation", desc: "Bash orchestration, POSIX compliance, and system monitoring" },
        { name: "Docker Containers", desc: "Reproducible containerized environments for simulation and deployment" }
      ]
    }
  ],

  // CORE AI & DEEP-TECH ENGINEERING SHOWCASE
  deepTechSystems: [
    {
      id: "devprime-adk",
      name: "Devprime ADK (Benchmark-ADK)",
      tagline: "Modular Reinforcement Learning agent toolkit and benchmarking suite for GridWorld & PyBullet robotics.",
      category: "Reinforcement Learning & Robotics",
      filterGroup: "agents-rl",
      description: "Architected a reproducible RL benchmarking suite allowing researchers and engineers to train, evaluate, and benchmark RL policy models under deterministic simulation conditions. Features DQN and PPO agents with TorchScript export for zero-latency execution.",
      metrics: [
        { label: "Algorithms", val: "DQN & PPO" },
        { label: "Simulators", val: "GridWorld / PyBullet" },
        { label: "Compilation", val: "TorchScript" }
      ],
      tags: ["Reinforcement Learning", "PyTorch", "PyBullet", "Gym", "DQN", "PPO", "TorchScript"],
      highlights: [
        "Modular RL toolkit for simulated GridWorld and PyBullet physics-based robotic environments",
        "Supports DQN and PPO agents with TorchScript compilation for high-performance deployment",
        "Built-in evaluation suite with reward curve visualization and multi-agent coordination"
      ],
      links: {
        github: "https://github.com/Shubh-creations/Devprime-adk",
        specAction: "open-spec-devprime"
      }
    },
    {
      id: "myconet",
      name: "MycoNet — Microscopic Fungal Vision AI",
      tagline: "Deep Learning Convolutional Neural Network with Grad-CAM visual explainability heatmaps.",
      category: "Deep Learning & Explainable AI",
      filterGroup: "agents-rl",
      description: "Engineered a high-precision medical imaging vision system that classifies microscopic fungal species. Implemented Grad-CAM (Gradient-weighted Class Activation Mapping) to produce visual saliency heatmaps highlighting the exact morphological structures driving classification decisions.",
      metrics: [
        { label: "Model Architecture", val: "Custom CNN" },
        { label: "Explainability", val: "Grad-CAM Saliency" },
        { label: "Diagnostic UI", val: "Streamlit Web" }
      ],
      tags: ["PyTorch", "CNNs", "Grad-CAM", "OpenCV", "Streamlit", "Diagnostic AI"],
      highlights: [
        "Deep convolutional network trained on microscopic fungal spore datasets with data augmentation",
        "Grad-CAM feature maps providing transparent visual verification for clinical mycologists",
        "Interactive Streamlit web console enabling one-click diagnostic image inference"
      ],
      links: {
        github: "https://github.com/Shubh-creations/ml-dl-projects",
        specAction: "open-spec-myconet"
      }
    },
    {
      id: "allergy-detection",
      name: "Intelligent Food Allergy Detection (Patent-Authored)",
      tagline: "Multi-modal allergen detection integrating OCR, barcode decoding, and conversational AI.",
      category: "Multi-Modal HealthTech AI",
      filterGroup: "defense-vision",
      description: "Patent-authored multi-modal food safety detection platform. Ingests consumer packaging images, executes OCR and barcode parsing, cross-references international ingredient and allergen databases, and interacts through a conversational assistant to prevent anaphylactic reactions.",
      metrics: [
        { label: "Ingestion", val: "OCR + Barcode" },
        { label: "Status", val: "Patent-Authored" },
        { label: "Interface", val: "Dialogflow AI" }
      ],
      tags: ["Tesseract OCR", "OpenCV", "Dialogflow", "Python", "REST APIs", "Patent"],
      highlights: [
        "Multi-modal pipeline extracting hidden food additives from noisy, curved package surfaces",
        "Algorithmic cross-referencing against structured global allergen taxonomies",
        "Conversational advisory interface generating instant personalized safety warnings"
      ],
      links: {
        github: "https://github.com/Shubh-creations",
        demo: "https://x.com/builtfor101"
      }
    },
    {
      id: "media-pipeline",
      name: "Automated AI Video & Media Remastering Pipeline",
      tagline: "High-throughput asynchronous media transformation and neural frame restoration workflow.",
      category: "Media Engineering & Distributed Workflows",
      filterGroup: "agents-rl",
      description: "Constructed an automated media orchestration system in Python leveraging PyTorch and FFmpeg. Automates audio spectrum normalization, neural super-resolution upscaling, and adaptive bitrate transcoding with zero manual operator intervention.",
      metrics: [
        { label: "Throughput", val: "Async Pipeline" },
        { label: "Core Engine", val: "FFmpeg + PyTorch" },
        { label: "Automation", val: "Zero-Touch" }
      ],
      tags: ["Python", "FFmpeg", "PyTorch", "CUDA", "FastAPI", "AsyncIO"],
      highlights: [
        "Asynchronous video chunking and parallel neural frame upscaling pipelines",
        "Lossless audio dynamic range compression and acoustic spectrum normalization",
        "Robust error boundaries with automatic retry and degradation handling"
      ],
      links: {
        github: "https://github.com/Shubh-creations/ml-dl-projects",
        demo: "https://x.com/builtfor101"
      }
    },
    {
      id: "cuas-defense",
      name: "CUAS - Counter-Unmanned Aerial System",
      tagline: "AI-native autonomous counter-drone framework detecting, tracking, and neutralizing rogue drones.",
      category: "Autonomous Defense & Robotics",
      filterGroup: "defense-vision",
      description: "An AI-native counter-UAS framework designed to detect, classify, track, and neutralize rogue drones using YOLOv8, Vision Transformers (ViT), and CLIP. Deployed on NVIDIA Jetson Nano / Xavier with low-level C/C++ firmware integration, RF signal triangulation, and MLflow real-time drift monitoring.",
      metrics: [
        { label: "Detection Acc", val: "92.4% mAP@0.5" },
        { label: "Threat Latency", val: "<100 ms" },
        { label: "Path Error", val: "±0.8s" }
      ],
      tags: ["NVIDIA Jetson", "YOLOv8", "ViT", "CLIP", "CUDA", "OpenCV", "C/C++", "MLflow"],
      highlights: [
        "Achieved 92.4% mAP@0.5 detection accuracy with <100ms threat-to-action neutralization latency",
        "Integrated multi-sensor intelligence: visual camera, infrared, and RF signal triangulation",
        "Real-time MLflow model monitoring with automated data drift triggers and retraining"
      ],
      links: {
        github: "https://github.com/Shubh-creations/Counter-UAS",
        demo: "https://x.com/builtfor101"
      }
    },
    {
      id: "vehicle-detection-adas",
      name: "Advanced Vehicle Detection & ADAS Telemetry",
      tagline: "Real-time GPU-accelerated vehicle perception pipeline with centroid tracking & traffic analytics.",
      category: "Computer Vision & ADAS",
      filterGroup: "defense-vision",
      description: "Real-time vehicle detection and tracking system using OpenCV with CUDA GPU acceleration. Sustains >30 FPS processing speed with <1s latency and ~90% detection accuracy on live video feeds, incorporating centroid tracking to eliminate double-counting.",
      metrics: [
        { label: "Processing Speed", val: ">30 FPS" },
        { label: "Inference Latency", val: "<1.0s Sub-Sec" },
        { label: "Accuracy", val: "~90% Live Feeds" }
      ],
      tags: ["OpenCV", "CUDA GPU", "Python", "Centroid Tracking", "ADAS", "NVIDIA Jetson"],
      highlights: [
        "Sustained >30 FPS with GPU acceleration on edge devices (NVIDIA Jetson Nano, Raspberry Pi)",
        "Engineered centroid-based tracking algorithm preventing duplicate counts under dense congestion",
        "Integrated configurable JSON-based settings management and live visual telemetry tracking trails"
      ],
      links: {
        github: "https://github.com/Shubh-creations/Vehicle-detection-and-tracking",
        demo: "https://x.com/builtfor101"
      }
    },
    {
      id: "sarvaflow-stealth",
      name: "Sarvaflow (Stealth Startup)",
      tagline: "Automated workflows marketplace — Distributed orchestration engine for composable automations.",
      category: "Distributed Systems & Orchestration",
      filterGroup: "ventures",
      description: "Dedicated one full year to building Sarvaflow, an ambitious stealth marketplace for automated workflows. Engineered distributed DAG execution engines, modular integration connectors, and workflow orchestration graphs enabling developers to publish, deploy, and monetize intelligent multi-step workflows.",
      metrics: [
        { label: "Tenure", val: "1 Full Year" },
        { label: "Architecture", val: "DAG Orchestrator" },
        { label: "Focus", val: "Workflows Marketplace" }
      ],
      tags: ["Distributed Systems", "Workflow Engines", "Python", "DAG Graphs", "APIs", "Sandboxing"],
      highlights: [
        "Architected distributed execution graphs for multi-step automated workflows with self-healing retries",
        "Engineered modular connector standard allowing third-party developers to publish and monetize workflows",
        "Built secure sandboxed execution environments ensuring deterministic, leak-free task evaluation"
      ],
      links: {
        github: "https://github.com/Shubh-creations",
        demo: "https://x.com/builtfor101"
      }
    },
    {
      id: "rodimus-tech",
      name: "Rodimus Tech (Co-Founder & COO)",
      tagline: "Reality Layer for AI — Bridging physical perception with autonomous cognitive intelligence.",
      category: "Robotics & Spatial AI",
      filterGroup: "ventures",
      description: "Served as Co-founder and Chief Operating Officer (COO). Rodimus is architecting the foundational Reality Layer for AI—uniting real-time spatial world models, sensor perception, and edge computing to ground artificial intelligence in the physical world.",
      metrics: [
        { label: "Role", val: "Co-founder (COO)" },
        { label: "Domain", val: "Spatial AI & Robotics" },
        { label: "Platform", val: "rodimus-tech.com" }
      ],
      tags: ["Robotics", "Edge AI", "Computer Vision", "Systems Architecture", "Spatial Computing"],
      highlights: [
        "Executive leadership orchestrating deep-tech engineering, operational roadmap, and product delivery",
        "Pioneering the Reality Layer connecting physical world sensors with high-level cognitive models",
        "Driving partnerships, robotics integration strategy, and cross-functional team execution"
      ],
      links: {
        site: "https://www.rodimus-tech.com",
        github: "https://github.com/Shubh-creations",
        linkedin: "https://www.linkedin.com/in/shubhampawar-in/"
      }
    }
  ],

  // ARCHITECTURAL SPEC DRAWERS DATA
  architectureSpecs: {
    suranyx: {
      title: "Suranyx // System Architecture & Security Primitives",
      subtitle: "AI-Native Financial OS & Cash Runway Intelligence",
      badge: "FastAPI • PostgreSQL • Supabase RLS",
      topologyText: `[Client Browser / Next.js Dashboard]
       │
       ▼ (HTTPS / WSS / JWT)
[Vercel Edge Gateway / Reverse Proxy]
       │
       ▼ (Private API Token)
[FastAPI Asynchronous Gateway (Python 3.11)]
  ├── Idempotency Key Validator (Redis / PG Table)
  ├── ReBIT Account Aggregator Consent Bridge (Setu/Finvu)
  └── Reconciliation & Burn Modeling Worker (AsyncIO)
       │
       ▼ (Connection Pool / Prepared Statements)
[Supabase Managed PostgreSQL]
  ├── Multi-Tenant Row-Level Security Policies (Tenant_ID JWT)
  ├── SHA-256 Hash-Chained Audit Ledger Table (Immutable Trigger)
  └── Daily Cash Balance Snapshots & Forecasting View`,
      invariants: [
        {
          name: "Multi-Tenant Row-Level Security (RLS)",
          desc: "Every database query executes in the context of the authenticated tenant. Policies enforce: tenant_id = (auth.jwt() ->> 'tenant_id')::uuid, rendering cross-tenant data leakage mathematically impossible at the database engine level."
        },
        {
          name: "Cryptographic SHA-256 Hash-Chained Ledgers",
          desc: "Every financial balance mutation writes to an immutable ledger table where row(N).prev_hash = SHA256(row(N-1).id + row(N-1).amount + row(N-1).balance + row(N-1).prev_hash). Any out-of-band record tampering breaks the cryptographic chain immediately."
        },
        {
          name: "RBI ReBIT Account Aggregator Consent Pipeline",
          desc: "Consent artifact lifecycles strictly conform to RBI Master Directions. Ephemeral session tokens request encrypted financial data from FIPs (Financial Information Providers) via AA handles without persisting raw credentials."
        },
        {
          name: "Idempotent Mutation Guarantees",
          desc: "Financial operations mandate a client-supplied UUIDv4 Idempotency-Key. Redis distributed locks and unique database constraints guarantee that duplicate network submissions execute exactly once."
        }
      ],
      codeSnippetTitle: "PostgreSQL: Multi-Tenant RLS Policy & SHA-256 Hash Chaining",
      codeSnippet: `-- 1. Zero-Trust Multi-Tenant RLS Isolation
ALTER TABLE financial_transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY tenant_isolation_policy ON financial_transactions
FOR ALL
TO authenticated
USING (tenant_id = (SELECT auth.jwt() ->> 'tenant_id')::uuid)
WITH CHECK (tenant_id = (SELECT auth.jwt() ->> 'tenant_id')::uuid);

-- 2. Immutable SHA-256 Hash Chaining Trigger
CREATE OR REPLACE FUNCTION verify_and_chain_ledger_entry()
RETURNS TRIGGER AS $$
DECLARE
  v_last_hash TEXT;
BEGIN
  SELECT hash INTO v_last_hash 
  FROM financial_audit_ledger 
  WHERE tenant_id = NEW.tenant_id 
  ORDER BY sequence_id DESC LIMIT 1;
  
  IF v_last_hash IS NULL THEN
    v_last_hash := 'GENESIS_BLOCK_00000000000000000000000000000000';
  END IF;
  
  NEW.previous_hash := v_last_hash;
  NEW.hash := encode(digest(
    NEW.tenant_id::text || NEW.account_id::text || 
    NEW.amount::text || NEW.balance_after::text || 
    NEW.previous_hash || NEW.created_at::text, 'sha256'
  ), 'hex');
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;`
    },

    "vadhu-var": {
      title: "Vadhu-Var (VV) // Database & RPC Engineering Specs",
      subtitle: "Culturally Grounded Trilingual Matrimony PWA",
      badge: "PostgreSQL • Atomic RPCs • RLS InitPlan",
      topologyText: `[Mobile Browser / Installed PWA]
       │
       ▼ (Edge Static Cache + Service Worker)
[Vercel Global Edge Network]
  └── Trilingual Runtime i18n Engine (English / Marathi / Hindi)
       │
       ▼ (Sub-50ms REST / RPC Request)
[Supabase Managed PostgreSQL Instance]
  ├── RLS Engine with (SELECT auth.uid()) InitPlan Optimizations
  ├── Atomic RPC: send_contextual_interest(...)
  ├── Atomic RPC: swap_or_replace_profile_media(...)
  ├── Strict Constraint: 1 Compulsory Photo, Max 3 Slots
  └── Covering B-Tree Index: idx_interests_participants_status`,
      invariants: [
        {
          name: "Atomic PostgreSQL Stored Procedures (RPCs)",
          desc: "All matching state mutations (sending interest with contextual prompts, accepting, graceful declination) execute within single ACID PostgreSQL transactions. Eliminates race conditions and invalid intermediary matching states."
        },
        {
          name: "Sub-Millisecond RLS InitPlan Optimization",
          desc: "Replaced naive auth.uid() checks with (SELECT auth.uid()). This allows the PostgreSQL query planner to evaluate the user identity once via an InitPlan rather than re-evaluating for every single row scanned in candidate feeds, slashing query latency from ~85ms to <1ms."
        },
        {
          name: "Strict Profile Media Constraints",
          desc: "Enforced at the schema level: Minimum 1 verified portrait photograph required before profile activation, maximum 3 media slots. The swap_or_replace_profile_media RPC atomically swaps media order and handles S3 object deletion cleanly."
        },
        {
          name: "Trilingual Zero-FOUC Architecture",
          desc: "Locale dictionaries (English, Marathi, Hindi) are pre-bundled and hydrated synchronously at the layout boundary, ensuring zero layout shift or flash of unlocalized content across 36 conversational prompts."
        }
      ],
      codeSnippetTitle: "PostgreSQL: Atomic Contextual Interest RPC & RLS InitPlan",
      codeSnippet: `-- 1. Optimized RLS Policy with InitPlan Parameterization
CREATE POLICY pwa_profiles_read_policy ON user_profiles
FOR SELECT
TO authenticated
USING (
  is_verified = TRUE 
  AND user_id != (SELECT auth.uid()) -- InitPlan: Evaluated exactly ONCE
);

-- 2. Atomic RPC: Send Contextual Interest with Invariant Checks
CREATE OR REPLACE FUNCTION send_contextual_interest(
  p_receiver_id UUID,
  p_prompt_id INT,
  p_contextual_note TEXT
)
RETURNS JSONB AS $$
DECLARE
  v_sender_id UUID := auth.uid();
  v_new_interest_id UUID;
BEGIN
  -- Invariant Check: Sender cannot match with themselves
  IF v_sender_id = p_receiver_id THEN
    RAISE EXCEPTION 'Self-interest is forbidden.';
  END IF;
  
  -- Invariant Check: Mandatory verified photo before matching
  IF NOT EXISTS (
    SELECT 1 FROM profile_media 
    WHERE user_id = v_sender_id AND is_primary = TRUE
  ) THEN
    RAISE EXCEPTION 'A verified primary profile photograph is compulsory.';
  END IF;
  
  -- Insert match attempt with atomic conflict handling
  INSERT INTO match_interests (sender_id, receiver_id, prompt_id, note, status)
  VALUES (v_sender_id, p_receiver_id, p_prompt_id, p_contextual_note, 'PENDING')
  ON CONFLICT (sender_id, receiver_id) DO UPDATE
    SET updated_at = NOW()
  RETURNING id INTO v_new_interest_id;

  RETURN jsonb_build_object('status', 'SUCCESS', 'interest_id', v_new_interest_id);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;`
    },

    "devprime": {
      title: "Devprime ADK // Reinforcement Learning Architecture",
      subtitle: "Reproducible RL Toolkit for GridWorld & PyBullet Robotics",
      badge: "PyTorch • TorchScript • Gym Environments",
      topologyText: `[Experiment Runner / Benchmark Script]
       │
       ▼
[Gym-Compatible Simulation Environment]
  ├── GridWorld Discrete Navigation
  └── PyBullet Continuous Robotic Arm / Locomotion Physics
       │
       ▼ (State Observations, Rewards, Done Signals)
[RL Agent Policy Core]
  ├── Deep Q-Network (DQN) with Prioritized Experience Replay
  └── Proximal Policy Optimization (PPO) with Clipped Surrogate Loss
       │
       ▼
[TorchScript Compilation Pipeline]
  └── Exported Zero-Overhead C++ Model Artifacts for Real-Time Execution`,
      invariants: [
        {
          name: "TorchScript Zero-Overhead Export",
          desc: "Trained policies are converted to TorchScript intermediate representations via torch.jit.script, allowing execution in pure C++ embedded robotics runtimes without Python interpreter overhead."
        },
        {
          name: "Deterministic Simulation Harness",
          desc: "Seeded state generation ensures 100% reproducible benchmark comparisons across agent training iterations and environmental stress tests."
        }
      ],
      codeSnippetTitle: "PyTorch: TorchScript Policy Export & PPO Clipped Objective",
      codeSnippet: `import torch
import torch.nn as nn

class PolicyNetwork(nn.Module):
    def __init__(self, obs_dim: int, act_dim: int):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(obs_dim, 128),
            nn.LayerNorm(128),
            nn.ReLU(),
            nn.Linear(128, 64),
            nn.ReLU(),
            nn.Linear(64, act_dim)
        )
    
    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return torch.softmax(self.net(x), dim=-1)

# Export to TorchScript for production robotics execution
policy = PolicyNetwork(obs_dim=16, act_dim=4)
scripted_policy = torch.jit.script(policy)
scripted_policy.save("exported_robotics_policy.pt")`
    },

    myconet: {
      title: "MycoNet // CNN Feature Saliency & Grad-CAM Pipeline",
      subtitle: "Microscopic Fungal Species Classification with Explainable AI",
      badge: "PyTorch • Grad-CAM • OpenCV • Streamlit",
      topologyText: `[Microscopic Fungal Specimen Image]
       │
       ▼
[Preprocessing & Multi-Scale Augmentation Pipeline]
       │
       ▼
[Deep Convolutional Neural Network (PyTorch)]
  ├── Convolutional Feature Extractors & BatchNorm
  ├── Global Average Pooling (GAP)
  └── Multi-Class Fungal Taxa Classification Head
       │
       ▼
[Grad-CAM Heatmap Computation Engine]
  ├── Backward Gradient Flow to Final Conv Layer
  ├── Spatial Weighting of Positive Activation Gradients
  └── Heatmap Color Blending via OpenCV (Jet ColorMap)
       │
       ▼
[Clinical Streamlit Diagnostic Dashboard]`,
      invariants: [
        {
          name: "Grad-CAM Gradient-Weighted Class Activation",
          desc: "Computes gradients of the target class score with respect to feature activation maps of the last convolutional layer. Produces coarse localization maps highlighting the key fungal morphology governing the diagnostic prediction."
        },
        {
          name: "Clinical Explainability Verification",
          desc: "Enables mycologists to confirm that the neural network is identifying biological spore morphology rather than spurious slide preparation artifacts."
        }
      ],
      codeSnippetTitle: "PyTorch & OpenCV: Grad-CAM Saliency Computation",
      codeSnippet: `import torch
import cv2
import numpy as np

def compute_gradcam(model, image_tensor, target_class):
    model.eval()
    activations = []
    gradients = []

    def forward_hook(module, input, output):
        activations.append(output)

    def backward_hook(module, grad_in, grad_out):
        gradients.append(grad_out[0])

    target_layer = model.features[-1]
    target_layer.register_forward_hook(forward_hook)
    target_layer.register_backward_hook(backward_hook)

    output = model(image_tensor)
    loss = output[0, target_class]
    loss.backward()

    grads = gradients[0].cpu().data.numpy()[0]
    acts = activations[0].cpu().data.numpy()[0]
    weights = np.mean(grads, axis=(1, 2))

    cam = np.zeros(acts.shape[1:], dtype=np.float32)
    for i, w in enumerate(weights):
        cam += w * acts[i]

    cam = np.maximum(cam, 0)
    cam = cv2.resize(cam, (224, 224))
    cam = (cam - cam.min()) / (cam.max() - cam.min() + 1e-8)
    return cam`
    }
  },

  // FOUNDER DOSSIER SLIDES
  founderDossier: [
    {
      slideNumber: 1,
      title: "Suranyx: AI-Native Financial OS",
      subtitle: "Multi-Tenant B2B Compliance & Runway Intelligence",
      keyMetric: "suranyx.com",
      content: "Engineered from day zero for Indian SMEs and high-growth enterprise operators. Suranyx unifies multi-bank real-time liquidity telemetries, automated reconciliation, and predictive cash runway modeling.",
      bullets: [
        "Multi-Tenant Row-Level Security (RLS) isolation guaranteeing zero cross-tenant leakage",
        "Tamper-evident SHA-256 hash-chained financial audit ledgers verifying every balance mutation",
        "Idempotent financial workflows and RBI ReBIT Account Aggregator consent pipeline integration"
      ]
    },
    {
      slideNumber: 2,
      title: "Vadhu-Var (VV): Trilingual Matrimony PWA",
      subtitle: "Culturally Grounded Matchmaking with Atomic RPCs",
      keyMetric: "vadhu-var.vercel.app",
      content: "A modern, Hinge-inspired matchmaking progressive web application architected with deep cultural intentionality, runtime trilingual localization (English, Marathi, Hindi), and 36 conversational prompts.",
      bullets: [
        "Custom atomic PostgreSQL stored procedures and RPC functions eliminating race conditions",
        "RLS InitPlan optimization: parameterized (SELECT auth.uid()) cutting query times to <1ms",
        "Strict media constraints: 1 compulsory photo, max 3 slots with atomic media swap routines"
      ]
    },
    {
      slideNumber: 3,
      title: "Devprime ADK & RL Robotics",
      subtitle: "Reproducible RL Toolkit for PyBullet",
      keyMetric: "DQN & PPO / TorchScript",
      content: "Architected a reproducible reinforcement learning benchmarking suite allowing researchers and engineers to train, evaluate, and benchmark RL policy models under deterministic simulation conditions.",
      bullets: [
        "Modular RL toolkit for GridWorld and PyBullet physics-based robotic environments",
        "Supports DQN and PPO agents with TorchScript compilation for zero-overhead C++ execution",
        "Automated reward curve visualization and multi-agent coordination benchmarks"
      ]
    },
    {
      slideNumber: 4,
      title: "AI-Native C-UAS Edge Defense",
      subtitle: "Tactical Drone Neutralization",
      keyMetric: "92.4% mAP / <100ms",
      content: "Engineered an AI-native counter-drone detection and tracking system deployed on NVIDIA Jetson Nano / Xavier with low-level C/C++ firmware integration.",
      bullets: [
        "YOLOv8 + Vision Transformers (ViT) + CLIP with <100ms threat-to-action response",
        "Synthesized C/C++ firmware directly with onboard multi-sensor payloads and RF triangulation",
        "Real-time MLflow model monitoring with automated data drift triggers and retraining"
      ]
    },
    {
      slideNumber: 5,
      title: "Sarvaflow: Automated Workflows Marketplace",
      subtitle: "1 Full Year Stealth Architecture",
      keyMetric: "1 Year Stealth Build",
      content: "Spent one full year architecting and engineering Sarvaflow, a stealth marketplace for automated, intelligent workflows.",
      bullets: [
        "Built distributed DAG execution engine with self-healing retry mechanics",
        "Created modular connector architecture for publishing and monetizing workflows",
        "Engineered secure sandboxed environments for deterministic task execution"
      ]
    },
    {
      slideNumber: 6,
      title: "Rodimus Tech: Reality Layer for AI",
      subtitle: "Co-Founder & COO Experience",
      keyMetric: "Reality Layer",
      content: "Served as Co-founder and Chief Operating Officer (COO). Rodimus is architecting the foundational Reality Layer for AI—uniting real-time spatial world models, sensor perception, and edge computing.",
      bullets: [
        "Executive leadership orchestrating deep-tech engineering, operational roadmap, and product delivery",
        "Pioneering the Reality Layer connecting physical world sensors with high-level cognitive models",
        "Driving partnerships, robotics integration strategy, and cross-functional team execution"
      ]
    },
    {
      slideNumber: 7,
      title: "Academic & Robotics Pedigree",
      subtitle: "Dr. D. Y. Patil Institute of Technology",
      keyMetric: "Automation & Robotics",
      content: "Bachelor of Engineering in Automation and Robotics (2022 – 2026) at Dr. D. Y. Patil Institute of Technology, Pimpri, Pune.",
      bullets: [
        "Core Coursework: Artificial Intelligence in Robots, Modeling and Simulation",
        "Sensors and Vision Systems in Robots, Numerical & Statistical Methods",
        "Extensive practical synthesis of control systems, embedded hardware, and AI"
      ]
    },
    {
      slideNumber: 8,
      title: "Founder Network & Verified Channels",
      subtitle: "Shubham Pawar (@builtfor101)",
      keyMetric: "Direct Connect",
      content: "Building software that moves metrics, scales under extreme load, and creates enduring enterprise value. Connect directly for technical partnerships and venture collaborations.",
      bullets: [
        "GitHub: github.com/Shubh-creations",
        "LinkedIn: linkedin.com/in/shubhampawar-in",
        "Twitter / X: @builtfor101 | Email: shubhampawar0610@gmail.com"
      ]
    }
  ],

  // MILESTONES & PEDIGREE
  milestones: [
    {
      period: "2025 — Present",
      role: "Co-Founder & Lead Systems Architect",
      organization: "Suranyx (suranyx.com)",
      summary: "Architecting Suranyx, an AI-native financial operating system for Indian SMEs and high-growth operators. Leading FastAPI and PostgreSQL engineering, multi-tenant RLS data isolation, SHA-256 hash-chained audit ledgers, and RBI ReBIT Account Aggregator consent pipelines."
    },
    {
      period: "2024 — Present",
      role: "Creator & Lead Full-Stack Architect",
      organization: "Vadhu-Var (vadhu-var.vercel.app)",
      summary: "Built and launched Vadhu-Var, a modern trilingual matrimony progressive web application (PWA). Engineered custom atomic PostgreSQL RPCs (send_contextual_interest), optimized RLS InitPlan execution for sub-millisecond policy evaluation, and implemented runtime trilingual localization (EN/MR/HI)."
    },
    {
      period: "2025 — Present",
      role: "Co-founder & Chief Operating Officer (COO)",
      organization: "Rodimus Tech (rodimus-tech.com)",
      summary: "Building the Reality Layer for AI. Orchestrating operational execution, robotics and spatial perception roadmap, cross-functional engineering delivery, and strategic deep-tech partnerships."
    },
    {
      period: "2023 — 2024 (1 Full Year)",
      role: "Stealth Founder / Core Systems Architect",
      organization: "Sarvaflow (Stealth Startup)",
      summary: "Spent one full year building Sarvaflow, an automated workflows marketplace. Architected distributed DAG execution engines, modular integration connectors, and workflow orchestration graphs for automated multi-step pipelines."
    },
    {
      period: "Jan 2025 — Present",
      role: "Postman API Student Instructor",
      organization: "Postman (Pune, IN)",
      summary: "Mentored student developers on RESTful API architecture, automated testing collections, and production API design using Postman."
    },
    {
      period: "Sept 2024 — Dec 2024",
      role: "AI Intern (Computer Vision & MLflow)",
      organization: "Pantech.AI (Pune, IN)",
      summary: "Implemented CNNs and OpenCV in 5+ computer vision projects, achieving 90%+ accuracy in detection and image classification tasks. Led model monitoring efforts using MLflow, introducing automated data drift detection and retraining triggers."
    },
    {
      period: "Nov 2022 — Jun 2026",
      role: "B.E. in Automation and Robotics",
      organization: "Dr. D. Y. Patil Institute of Technology, Pimpri, Pune",
      summary: "Specialized engineering program in Automation & Robotics. Rigorous coursework in Artificial Intelligence in Robots, Modeling & Simulation, Sensors & Vision Systems, and Statistical Data Analysis."
    }
  ],

  // ESSAYS / TECHNICAL NOTES
  essays: [
    {
      id: "essay-01",
      date: "November 2026",
      readTime: "5 min read",
      title: "Building Tamper-Evident Ledgers with SHA-256 Hash Chaining in PostgreSQL",
      snippet: "How we guarantee financial audit integrity and zero reconciliation delta at Suranyx using database triggers and cryptographic chaining.",
      body: "In financial operating systems, trusting application logic alone to protect mutation history is an anti-pattern. By introducing row-level cryptographic hash chaining inside PostgreSQL triggers, every row's hash is bound to the preceding row's cryptographic digest. Any attempt to modify, reorder, or delete historic ledger entries breaks the chain instantly, providing immutable verification at zero external infrastructure cost."
    },
    {
      id: "essay-02",
      date: "October 2026",
      readTime: "4 min read",
      title: "Sub-Millisecond RLS: Optimizing Supabase Row-Level Security with InitPlan",
      snippet: "Why naive auth.uid() checks destroy query performance, and how parameterized InitPlan evaluation achieved 85x speedups in Vadhu-Var.",
      body: "Naive RLS policies like 'user_id = auth.uid()' force PostgreSQL to re-evaluate the auth helper on every single row candidate. By rewriting the policy as 'user_id = (SELECT auth.uid())', the query planner hoists the authentication lookup into a single-pass InitPlan executed once per statement, collapsing candidate feed query latencies from 85ms to sub-millisecond times."
    },
    {
      id: "essay-03",
      date: "September 2026",
      readTime: "4 min read",
      title: "Tactical Edge Defense at 30+ FPS: Inside the C-UAS Architecture",
      snippet: "Optimizing YOLOv8, Vision Transformers, and C/C++ firmware on NVIDIA Jetson Nano for sub-100ms response.",
      body: "In counter-drone defense, a 500ms delay is the difference between interception and perimeter breach. By compiling YOLOv8 and Vision Transformers through CUDA TensorRT, handling raw frame buffers in C/C++, and fusing RF triangulation with visual tracking, we achieve <100ms threat-to-action response on lightweight edge hardware."
    }
  ],

  // FAQ & CLARITY
  faq: [
    {
      q: "What is Suranyx and what was your role in architecting it?",
      a: "Suranyx (suranyx.com) is an AI-native financial operating system, cash runway intelligence, and automated B2B compliance platform for Indian SMEs. As Co-Founder & Lead Systems Architect, I engineered the multi-tenant PostgreSQL and Supabase RLS data isolation layer, implemented tamper-evident SHA-256 hash-chained audit ledgers, built idempotent mutation workflows, and architected the RBI ReBIT Account Aggregator consent pipelines."
    },
    {
      q: "What is Vadhu-Var (VV) and how is its database architected?",
      a: "Vadhu-Var (vadhu-var.vercel.app) is a culturally grounded, trilingual matrimony progressive web application (PWA). I architected it with Next.js, React, and Supabase PostgreSQL. Key architectural primitives include custom atomic stored procedures (send_contextual_interest, respond_to_interest) that eliminate race conditions, RLS InitPlan optimizations delivering sub-millisecond policy evaluation, strict media constraints (1 compulsory photo, max 3 slots), and runtime trilingual localization (English, Marathi, Hindi)."
    },
    {
      q: "What is Devprime ADK and what does it benchmark?",
      a: "Devprime ADK (Benchmark-ADK) is an open-source Reinforcement Learning agent development and benchmarking toolkit I created for GridWorld and PyBullet robotic simulation environments. It supports DQN and PPO agents with TorchScript export for zero-latency execution in real-time robotic control systems."
    },
    {
      q: "What did you build at Sarvaflow and Rodimus Tech?",
      a: "I spent one full year (2023–2024) building Sarvaflow, a stealth automated workflows marketplace with distributed DAG orchestration. At Rodimus Tech (rodimus-tech.com), I served as Co-founder and Chief Operating Officer (COO), driving the engineering and operational roadmap for the 'Reality Layer for AI' bridging physical robotics perception with cognitive models."
    },
    {
      q: "How can I connect with you for technical leadership or collaborations?",
      a: "You can reach me directly via Email at shubhampawar0610@gmail.com, on LinkedIn at https://www.linkedin.com/in/shubhampawar-in/, or on Twitter/X at @builtfor101 (https://x.com/builtfor101). My GitHub is https://github.com/Shubh-creations."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
} else {
  window.SITE_CONFIG = SITE_CONFIG;
}
