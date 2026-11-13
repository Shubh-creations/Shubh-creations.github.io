/**
 * Shubham Pawar // 4x Founder & Systems Architect
 * Flagship Production Platforms:
 * 1. Suranyx (https://suranyx.com) — CEO & Co-Founder | AI-Native Financial Operating System
 * 2. Vadhu-Var / VV (https://vadhu-var.vercel.app) — Solo Founder | Trilingual Matrimony PWA
 * 3. Rodimus Tech (https://rodimus-tech.com) — Co-Founder (COO) | Reality Layer for AI
 * GitHub: https://github.com/Shubh-creations
 * Twitter / X: https://x.com/builtfor101 | LinkedIn: https://www.linkedin.com/in/shubhampawar-in/
 */

const SITE_CONFIG = {
  founder: {
    name: "Shubham Pawar",
    shortName: "Shubham",
    title: "4x Founder & Systems Engineer",
    badge: "4x Founder",
    tagline: "4x Founder • CEO @ Suranyx • Solo Founder @ Vadhu-Var (VV) • Co-Founder (COO) @ Rodimus Tech",
    location: "Pune, India // Remote",
    status: "CEO @ Suranyx (suranyx.com) • Solo Founder @ Vadhu-Var (VV)",
    headline: "Shubham Pawar — 4x AI Founder & Systems Architect.",
    subheadline: "CEO & Co-Founder at Suranyx (AI-Native Financial OS & B2B compliance) • Solo Founder of Vadhu-Var (trilingual matrimony PWA with atomic PostgreSQL RPCs) • Co-Founder (COO) at Rodimus Tech (rodimus-tech.com). Architect of multi-tenant RLS, tamper-evident SHA-256 ledgers, Devprime ADK, and tactical edge perception systems.",
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
      role: "CEO & Co-Founder",
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
      role: "Solo Founder",
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
        "Trilingual runtime localization with zero layout shift and offline-first PWA caching on Vercel Edge"
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
        { name: "YOLOv8 & ViT", desc: "Object detection, aerial trajectory tracking, and vision transformer backbones" },
        { name: "OpenCV & CUDA", desc: "Hardware-accelerated edge computer vision at 30+ FPS with sub-1s latency" },
        { name: "Autonomous Agents", desc: "Multi-domain agent routing, tool-calling pipelines, and state graph orchestration" },
        { name: "C/C++ Embedded Firmware", desc: "Microcontroller sensor acquisition and low-latency motor control integration" },
        { name: "MLflow Model Telemetry", desc: "Automated drift monitoring, metric logging, and performance benchmark triggers" },
        { name: "Edge Inference (Jetson)", desc: "NVIDIA Jetson Nano/Xavier deployment with TensorRT hardware acceleration" }
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
        { name: "State Machine Graphs", desc: "Durable distributed transactions and self-healing workflow orchestrators" }
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
        { name: "Tailwind CSS", desc: "Utility-first design tokens, charcoal/sand surfaces, and responsive layouts" },
        { name: "Vercel Edge Platform", desc: "Global edge network deployment with sub-50ms TTFB worldwide" },
        { name: "GitHub Actions CI/CD", desc: "Automated linting, testing, and continuous deployment workflows" },
        { name: "Linux & Shell Automation", desc: "Bash orchestration, POSIX compliance, and system monitoring" },
        { name: "Docker Containers", desc: "Reproducible containerized environments for simulation and deployment" }
      ]
    }
  ],

  // CORE AI & DEEP-TECH ENGINEERING SHOWCASE (LEGITIMATE GITHUB PROJECTS ONLY)
  deepTechSystems: [
    {
      id: "devprime-adk",
      name: "Devprime ADK (Benchmark-ADK)",
      tagline: "Modular Reinforcement Learning agent toolkit and benchmarking suite for GridWorld & PyBullet robotics.",
      category: "Reinforcement Learning & Robotics",
      categoryKey: "ai-ml",
      status: "Open Source // Active",
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
        specId: "devprime"
      }
    },
    {
      id: "cuas-defense",
      name: "CUAS - Counter-Unmanned Aerial System",
      tagline: "AI-native autonomous counter-drone framework detecting, tracking, and neutralizing rogue drones.",
      category: "Autonomous Defense & Robotics",
      categoryKey: "robotics-defense",
      status: "Defense Core // Active",
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
      categoryKey: "robotics-defense",
      status: "Vision Core // Shipped",
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
      id: "vcare-agent",
      name: "Vcare — Multi-Domain Assistive Super Agent",
      tagline: "Autonomous agent orchestration framework with intelligent task routing and multimodal reasoning.",
      category: "Autonomous Agents & AI Systems",
      categoryKey: "ai-ml",
      status: "Agent Core // Active",
      description: "Engineered an intelligent agent architecture capable of routing complex user requests across multiple domains. Features modular tool-calling execution, structured conversational state memory, and real-time execution pipelines.",
      metrics: [
        { label: "Architecture", val: "Super Agent" },
        { label: "Stack", val: "TypeScript" },
        { label: "Execution", val: "Async Tooling" }
      ],
      tags: ["TypeScript", "Autonomous Agents", "LLMs", "Tool Calling", "Multimodal", "APIs"],
      highlights: [
        "Multi-domain autonomous agent routing workflows across healthcare and assistive domains",
        "Modular tool-calling integrations and structured conversational memory",
        "Robust safety guards and zero-latency response pipelines"
      ],
      links: {
        github: "https://github.com/Shubh-creations/Vcare",
        demo: "https://x.com/builtfor101"
      }
    },
    {
      id: "rodimus-tech",
      name: "Rodimus Tech (Co-Founder & COO)",
      tagline: "Reality Layer for AI — Bridging physical perception with autonomous cognitive intelligence.",
      category: "Robotics & Spatial AI",
      categoryKey: "ventures",
      status: "Executive Venture",
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
    }
  },

  // FOUNDER DOSSIER SLIDES
  founderDossier: [
    {
      slideNumber: 1,
      title: "Suranyx: AI-Native Financial OS",
      subtitle: "Multi-Tenant B2B Compliance & Runway Intelligence",
      keyMetric: "suranyx.com",
      content: "As CEO & Co-Founder, Shubham engineered Suranyx from day zero for Indian SMEs and high-growth enterprise operators. Suranyx unifies multi-bank real-time liquidity telemetries, automated reconciliation, and predictive cash runway modeling.",
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
      content: "As Solo Founder, Shubham built Vadhu-Var, a modern, Hinge-inspired matchmaking progressive web application architected with deep cultural intentionality, runtime trilingual localization (English, Marathi, Hindi), and 36 conversational prompts.",
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
      title: "Vcare: Multi-Domain Assistive Super Agent",
      subtitle: "Autonomous Agent Orchestration Framework",
      keyMetric: "Autonomous Agents",
      content: "Engineered an intelligent agent architecture capable of routing complex user requests across multiple domains with modular tool calling and structured conversational memory.",
      bullets: [
        "Multi-domain autonomous agent routing workflows in TypeScript",
        "Modular tool-calling integrations and structured conversational memory",
        "Deterministic execution with strict safety guards and sub-second execution"
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
      role: "CEO & Co-Founder",
      organization: "Suranyx (suranyx.com)",
      summary: "Architecting Suranyx, an AI-native financial operating system for Indian SMEs and high-growth operators. Leading FastAPI and PostgreSQL engineering, multi-tenant RLS data isolation, SHA-256 hash-chained audit ledgers, and RBI ReBIT Account Aggregator consent pipelines."
    },
    {
      period: "2024 — Present",
      role: "Solo Founder",
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
      period: "Jan 2025 — Present",
      role: "Postman API Student Instructor",
      organization: "Postman (Pune, IN)",
      summary: "Mentored student developers on RESTful API architecture, automated testing collections, and production API design using Postman."
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

  // FAQ & CLARITY (ACCURATE FOUNDER ROLES)
  faq: [
    {
      q: "What is Suranyx and what was your role in architecting it?",
      a: "Suranyx (suranyx.com) is an AI-native financial operating system, cash runway intelligence, and automated B2B compliance platform for Indian SMEs. As CEO & Co-Founder, I lead product vision and systems architecture: engineering the multi-tenant PostgreSQL and Supabase RLS data isolation layer, implementing tamper-evident SHA-256 hash-chained audit ledgers, building idempotent mutation workflows, and architecting the RBI ReBIT Account Aggregator consent pipelines."
    },
    {
      q: "What is Vadhu-Var (VV) and how is its database architected?",
      a: "Vadhu-Var (vadhu-var.vercel.app) is a culturally grounded, trilingual matrimony progressive web application (PWA). As Solo Founder, I architected it with Next.js, React, and Supabase PostgreSQL. Key architectural primitives include custom atomic stored procedures (send_contextual_interest, respond_to_interest) that eliminate race conditions, RLS InitPlan optimizations delivering sub-millisecond policy evaluation, strict media constraints (1 compulsory photo, max 3 slots), and runtime trilingual localization (English, Marathi, Hindi)."
    },
    {
      q: "What is Devprime ADK and what does it benchmark?",
      a: "Devprime ADK (Benchmark-ADK) is an open-source Reinforcement Learning agent development and benchmarking toolkit I created for GridWorld and PyBullet robotic simulation environments. It supports DQN and PPO agents with TorchScript export for zero-latency execution in real-time robotic control systems."
    },
    {
      q: "What is your role and architectural vision at Rodimus Tech?",
      a: "At Rodimus Tech (rodimus-tech.com), I serve as Co-founder and Chief Operating Officer (COO), driving the engineering and operational roadmap for the 'Reality Layer for AI' bridging physical robotics perception with cognitive models."
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
