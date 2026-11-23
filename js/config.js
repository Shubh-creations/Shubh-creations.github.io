/**
 * Shubham Pawar // 4x Founder & Systems Architect
 * Design System: Matte Black (#0B0B0D) + Warm Sand (#D8CBB3)
 * Active Flagships & Systems:
 * 1. Suranyx (https://suranyx.com) — CEO & Co-Founder
 * 2. Vadhu-Var (https://vadhu-var.vercel.app) — Solo Founder
 * 3. CUAS (Counter-UAS) — Edge Defense AI
 * 4. AI-Shorts-Factory — Automated Media Pipeline
 * 5. Sarva Flow — Venture Architecture (Stealth Toggleable)
 * 6. Rodimus Tech (https://rodimus-tech.com) — Co-Founder & COO
 */

const SITE_CONFIG = {
  // Stealth venture toggle for Sarva Flow
  showSarvaFlowName: true,

  founder: {
    name: "Shubham Pawar",
    shortName: "Shubham",
    title: "Founder & Systems Architect",
    eyebrow: "4x AI Founder · Pune, India / Global",
    headline: "Shubham Pawar.",
    highlight: "Founder & Systems Architect.",
    bioLine1: "Building deterministic financial infrastructure, high-trust consumer platforms, and edge AI systems.",
    bioLine2: "AI-native founder shipping production architecture at vibe-coded velocity with zero-hallucination rigor.",
    location: "Pune, India // Global Remote",
    avatar: "assets/avatar.svg",
    links: {
      suranyx: "https://suranyx.com",
      vadhuVar: "https://vadhu-var.vercel.app",
      rodimus: "https://rodimus-tech.com",
      github: "https://github.com/Shubh-creations",
      cuasGithub: "https://github.com/Shubh-creations/Counter-UAS",
      devprimeGithub: "https://github.com/Shubh-creations/Devprime-adk",
      linkedin: "https://www.linkedin.com/in/shubhampawar-in/",
      twitter: "https://x.com/builtfor101",
      twitterHandle: "@builtfor101",
      email: "shubhampawar0610@gmail.com",
      phone: "+91 9623422350"
    }
  },

  // 1. EXACT 5 ACTIVE WORKSPACE SYSTEMS + RODIMUS TECH (SECTION 2 BENTO)
  venturesAndBuilds: [
    {
      id: "suranyx",
      name: "Suranyx",
      role: "CEO & Co-Founder · Live",
      tagline: "AI-native financial OS, 13-week cash runway intelligence, GST reconciliation & RBI Account Aggregator compliance for Indian SMEs.",
      url: "https://suranyx.com",
      displayUrl: "suranyx.com",
      status: "Production Live",
      isLive: true,
      tags: ["FastAPI", "SHA-256 Ledger", "Multi-Tenant RLS"],
      specId: "suranyx",
      featured: true
    },
    {
      id: "vadhu-var",
      name: "Vadhu-Var (VV)",
      role: "Solo Founder · Live",
      tagline: "Verified trilingual matrimony PWA (EN / MR / HI) engineered with atomic PostgreSQL RPCs and sub-millisecond RLS InitPlan policies.",
      url: "https://vadhu-var.vercel.app",
      displayUrl: "vadhu-var.vercel.app",
      status: "Production Live",
      isLive: true,
      tags: ["PostgreSQL", "Atomic RPCs", "<1ms InitPlan"],
      specId: "vadhu-var",
      featured: true
    },
    {
      id: "cuas",
      name: "CUAS (Counter-UAS)",
      role: "Edge Defense AI",
      tagline: "Multi-sensor autonomous drone detection, tracking, and tactical C2 decision-support fusing mmWave radar, RF, and TensorRT YOLO/ViT on NVIDIA Jetson.",
      url: "https://github.com/Shubh-creations/Counter-UAS",
      displayUrl: "github.com/Counter-UAS",
      status: "Defense Edge AI",
      isLive: false,
      tags: ["Jetson / TensorRT", "mmWave + Vision", "<100ms Loop"],
      specId: "cuas",
      featured: false
    },
    {
      id: "ai-shorts-factory",
      name: "AI-Shorts-Factory",
      role: "Automated Media Pipeline",
      tagline: "Local high-throughput Python, FFmpeg, and PyTorch automation pipeline for end-to-end remastering, compositing, and original short/long-form video production.",
      url: "https://github.com/Shubh-creations",
      displayUrl: "Autonomous Pipeline",
      status: "Internal Active",
      isLive: false,
      tags: ["Python + FFmpeg", "Automated Pipeline", "Zero-Touch Render"],
      specId: "ai-shorts-factory",
      featured: false
    },
    {
      id: "sarva-flow",
      name: "Sarva Flow",
      stealthName: "Stealth Venture",
      role: "Venture Architecture",
      tagline: "End-to-end workflow automation and modular systems venture built for high-leverage operational execution.",
      url: "https://github.com/Shubh-creations",
      displayUrl: "Venture Architecture",
      status: "Active R&D",
      isLive: false,
      tags: ["Workflow Engine", "Modular Systems", "AI-Native"],
      specId: "sarva-flow",
      featured: false
    },
    {
      id: "rodimus",
      name: "Rodimus Tech",
      role: "Co-Founder & COO",
      tagline: "Architecting the \"Reality Layer for AI\" — grounding spatial world models and physical perception in edge robotics hardware.",
      url: "https://rodimus-tech.com",
      displayUrl: "rodimus-tech.com",
      status: "Spatial AI Venture",
      isLive: true,
      tags: ["Spatial AI", "Robotics Edge", "Operations"],
      specId: "rodimus",
      featured: false
    }
  ],

  // 2. AI-NATIVE VELOCITY STRIP (SECTION 3)
  velocityPrinciples: [
    {
      step: "01",
      title: "Agentic Velocity",
      desc: "Spec-driven multi-phase vibe coding powered by structured .cursorrules and autonomous build loops—compressing months of full-stack & edge R&D into days."
    },
    {
      step: "02",
      title: "Deterministic Rigor",
      desc: "Every AI-accelerated system is locked down with hand-verified golden test sets, ACID database invariants, and tamper-evident audit trails."
    },
    {
      step: "03",
      title: "Zero-Bloat Infra",
      desc: "Lean, self-hosted, and edge-native architectures (PostgreSQL, FastAPI, Jetson/CUDA, static ES6+) built to scale without SaaS bloat."
    }
  ],

  // 3. FOUNDER & LEADERSHIP TRACK RECORD (SECTION 5 LEFT COLUMN)
  founderExperience: [
    {
      role: "CEO & Co-Founder",
      organization: "Suranyx",
      period: "2025 — Present",
      url: "https://suranyx.com",
      detail: "AI-native financial operating system & B2B compliance. Leading multi-tenant PostgreSQL/Supabase RLS, SHA-256 hash-chained ledgers, and RBI ReBIT AA consent architecture."
    },
    {
      role: "Solo Founder",
      organization: "Vadhu-Var (VV)",
      period: "2024 — Present",
      url: "https://vadhu-var.vercel.app",
      detail: "Verified trilingual matrimony consumer PWA. Custom atomic stored procedures (send_contextual_interest), sub-millisecond RLS InitPlan optimizations, and trilingual i18n."
    },
    {
      role: "Co-Founder & COO",
      organization: "Rodimus Tech",
      period: "2025 — Present",
      url: "https://rodimus-tech.com",
      detail: "Building the Reality Layer for AI. Orchestrating operations, robotics and spatial perception roadmap, cross-functional delivery, and strategic deep-tech partnerships."
    },
    {
      role: "Postman API Student Instructor",
      organization: "Postman (Pune, IN)",
      period: "Jan 2025 — Present",
      url: "https://www.postman.com",
      detail: "Mentoring student engineers on RESTful API architecture, automated testing collections, and production API design."
    },
    {
      role: "B.E. in Automation & Robotics",
      organization: "Dr. D. Y. Patil Institute of Technology, Pimpri, Pune",
      period: "Nov 2022 — Jun 2026",
      url: "",
      detail: "Specialized engineering program in Automation & Robotics. Rigorous training in AI in Robots, Modeling & Simulation, Sensors & Vision Systems, and Statistical Analysis."
    }
  ],

  // 4. VERIFIED OPEN-SOURCE GITHUB INDEX (SECTION 5 RIGHT COLUMN)
  openSourceIndex: [
    {
      name: "Devprime-adk",
      desc: "RL Agent Dev Kit (DQN/PPO, PyBullet, TorchScript for real-time control)",
      language: "Python",
      stars: 12,
      url: "https://github.com/Shubh-creations/Devprime-adk",
      tags: ["PyTorch", "TorchScript", "RL"]
    },
    {
      name: "Counter-UAS",
      desc: "Multi-sensor autonomous UAV detection & C2 (<100ms decision loop on Jetson)",
      language: "C++ / Python",
      stars: 18,
      url: "https://github.com/Shubh-creations/Counter-UAS",
      tags: ["Jetson", "CUDA", "YOLOv8"]
    },
    {
      name: "Vehicle-detection-and-tracking",
      desc: "CUDA-accelerated >30 FPS ADAS vehicle detection with centroid tracking",
      language: "Python",
      stars: 9,
      url: "https://github.com/Shubh-creations/Vehicle-detection-and-tracking",
      tags: ["OpenCV", "CUDA", "ADAS"]
    },
    {
      name: "Vcare",
      desc: "TypeScript multi-domain autonomous agent orchestration & state graphs",
      language: "TypeScript",
      stars: 7,
      url: "https://github.com/Shubh-creations/Vcare",
      tags: ["TypeScript", "Agents", "Tools"]
    }
  ],

  // 5. ARCHITECTURAL SPEC DRAWERS (FOR ALL 6 ACTIVE SYSTEMS)
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
          desc: "Consent artifact lifecycles strictly conform to RBI Master Directions. Ephemeral session tokens request encrypted financial data from FIPs without persisting raw banking credentials."
        }
      ],
      codeSnippetTitle: "PostgreSQL: Multi-Tenant RLS Policy & SHA-256 Hash Chaining",
      codeSnippet: `-- 1. Zero-Trust Multi-Tenant RLS Isolation
ALTER TABLE financial_transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY tenant_isolation_policy ON financial_transactions
FOR ALL TO authenticated
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
          desc: "Enforced at schema level: Minimum 1 verified portrait photograph required before profile activation, maximum 3 media slots. The swap_or_replace_profile_media RPC atomically swaps media order cleanly."
        }
      ],
      codeSnippetTitle: "PostgreSQL: Atomic Contextual Interest RPC & RLS InitPlan",
      codeSnippet: `-- 1. Optimized RLS Policy with InitPlan Parameterization
CREATE POLICY pwa_profiles_read_policy ON user_profiles
FOR SELECT TO authenticated
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
  IF v_sender_id = p_receiver_id THEN
    RAISE EXCEPTION 'Self-interest is forbidden.';
  END IF;
  
  INSERT INTO match_interests (sender_id, receiver_id, prompt_id, note, status)
  VALUES (v_sender_id, p_receiver_id, p_prompt_id, p_contextual_note, 'PENDING')
  ON CONFLICT (sender_id, receiver_id) DO UPDATE SET updated_at = NOW()
  RETURNING id INTO v_new_interest_id;

  RETURN jsonb_build_object('status', 'SUCCESS', 'interest_id', v_new_interest_id);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;`
    },

    cuas: {
      title: "CUAS // Edge Autonomous Drone Defense Specs",
      subtitle: "Multi-Sensor Fusion & C2 Decision Support on Jetson",
      badge: "NVIDIA Jetson • CUDA • YOLOv8 • TensorRT",
      topologyText: `[Sensory Payloads: mmWave Radar + Visual / IR Camera + RF Triangulation]
       │
       ▼ (Raw DMA Frame Buffers / V4L2)
[NVIDIA Jetson Edge Inference Unit (Orin / Xavier)]
  ├── TensorRT Hardware Compilation Pipeline (FP16 / INT8)
  ├── YOLOv8 Spatial Bounding Box & Centroid Tracker
  ├── RF Signal Peak Matching & Azimuth Estimator
  └── Temporal Fusion Filter (<100ms Target Acquisition)
       │
       ▼ (Zero-Copy Shared Memory / ROS2 Nodes)
[Tactical Command & Control (C2) Decision Loop]
  └── Directional Countermeasure Trigger (RF Jamming / Kinetic Lock)`,
      invariants: [
        {
          name: "Sub-100ms Threat-to-Action Decision Loop",
          desc: "Raw video and radar sensor data are processed through hardware-accelerated TensorRT execution pipelines, maintaining under 100 milliseconds end-to-end latency from target entry to countermeasure lock."
        },
        {
          name: "Multi-Modal Sensor Disambiguation",
          desc: "Fusing mmWave radar point-clouds with high-resolution visual tracking prevents false positives from birds, clouds, or electromagnetic interference."
        }
      ],
      codeSnippetTitle: "Python / TensorRT: Low-Latency Inference Pipeline",
      codeSnippet: `import tensorrt as trt
import pycuda.driver as cuda
import numpy as np

def execute_cuas_inference(context, d_input, d_output, stream, input_batch):
    # Asynchronous zero-copy memory transfer to GPU
    cuda.memcpy_htod_async(d_input, input_batch, stream)
    # Execute hardware TensorRT engine in <12ms
    context.execute_async_v2(bindings=[int(d_input), int(d_output)], stream_handle=stream.handle)
    # Return telemetry coordinates to C2 decision loop
    output = np.empty((1, 84, 8400), dtype=np.float32)
    cuda.memcpy_dtoh_async(output, d_output, stream)
    stream.synchronize()
    return output`
    },

    "ai-shorts-factory": {
      title: "AI-Shorts-Factory // Automated Media Pipeline Specs",
      subtitle: "High-Throughput Local Video Synthesis & Audio Compositing",
      badge: "Python • FFmpeg • PyTorch • PyAV",
      topologyText: `[Raw Content Inputs / Topic Prompts / Transcript Artifacts]
       │
       ▼
[Audio Processing & Voice Engine (PyTorch / TTS)]
  ├── Speech Synthesis & Audio Normalization (EBU R128)
  └── Precise Millisecond Word-Level Alignment (Whisper Timestamps)
       │
       ▼
[Video Assembly & Layout Worker (FFmpeg / PyAV)]
  ├── Dynamic Subtitle Animation & B-Roll Layering
  ├── GPU-Accelerated Hardware Transcoding (NVENC h264/hevc)
  └── Zero-Touch Final Master Delivery (9:16 & 16:9 Multi-Format)`,
      invariants: [
        {
          name: "Zero-Touch Automated Rendering",
          desc: "Generates fully rendered, color-graded, and subtitled media outputs from raw structured JSON scripts without requiring manual timeline intervention."
        },
        {
          name: "Hardware-Accelerated Encoding (NVENC)",
          desc: "Utilizes NVIDIA NVENC hardware filters for compositing, scaling, and subtitle burning at up to 5x real-time speed."
        }
      ],
      codeSnippetTitle: "Python: FFmpeg Hardware Filtergraph Orchestration",
      codeSnippet: `import ffmpeg

def assemble_short(video_track, voice_track, srt_file, output_path):
    # Construct hardware-accelerated NVENC compositing filtergraph
    video = ffmpeg.input(video_track, hwaccel='cuda')
    audio = ffmpeg.input(voice_track)
    
    # Burn subtitles and apply subtle cinematic grade
    filtered_video = (
        video
        .filter('subtitles', srt_file, force_style='FontName=Inter,FontSize=18,PrimaryColour=&H00D8CBB3')
        .filter('scale', 1080, 1920)
    )
    
    out = ffmpeg.output(filtered_video, audio, output_path, vcodec='h264_nvenc', cq=20, acodec='aac')
    out.run(overwrite_output=True)`
    },

    "sarva-flow": {
      title: "Sarva Flow // Modular Venture Architecture Specs",
      subtitle: "Deterministic Distributed State Graphs & Workflow Orchestration",
      badge: "FastAPI • Redis • DAG Engine • Worker Nodes",
      topologyText: `[Workflow Trigger / Webhook / API Ingestion]
       │
       ▼
[Deterministic DAG Compiler & Scheduler]
  ├── Dependency Topology Resolution (Kahn's Algorithm)
  └── Distributed Idempotency Key Lock (Redis Lease)
       │
       ▼ (Event Bus / Work Queue)
[Fault-Tolerant Worker Pool]
  ├── Step Execution with Automatic Retry & Exponential Backoff
  ├── State Snapshotting & Event Ledger Persistence
  └── Terminal Notification & Webhook Dispatch`,
      invariants: [
        {
          name: "Idempotent Execution Invariant",
          desc: "Every step in a directed acyclic graph (DAG) enforces client-supplied idempotency tokens. Duplicate triggers or network retries are guaranteed to produce zero duplicate side-effects."
        },
        {
          name: "Durable State Persistence",
          desc: "Workflow execution state is checkpoints at every step transition, allowing instantaneous recovery following worker failure or node restarts."
        }
      ],
      codeSnippetTitle: "Python: Atomic Step Execution & Idempotency Lock",
      codeSnippet: `import asyncio
import uuid

class WorkflowEngine:
    def __init__(self, redis_pool, db):
        self.redis = redis_pool
        self.db = db
        
    async def execute_step(self, step_id: str, idempotency_key: str, action):
        # Acquire atomic execution lock with 60s lease
        lock_acquired = await self.redis.set(f"lock:{idempotency_key}", "locked", nx=True, ex=60)
        if not lock_acquired:
            return {"status": "SKIPPED_DUPLICATE_TRIGGER"}
            
        try:
            result = await action()
            await self.db.record_step_success(step_id, result)
            return {"status": "SUCCESS", "result": result}
        except Exception as e:
            await self.db.record_step_retry(step_id, str(e))
            raise`
    },

    rodimus: {
      title: "Rodimus Tech // Reality Layer for AI Architecture",
      subtitle: "Spatial World Modeling & Physical AI Perception Hardware",
      badge: "Spatial AI • Edge Robotics • Sensor Fusion",
      topologyText: `[Physical Environment / Multi-Modal Sensors (LiDAR, ToF, Stereo Vision)]
       │
       ▼ (Low-Latency SPI / CAN / Ethernet Bus)
[Edge Perception Preprocessor]
  ├── Point Cloud Temporal Filtering & Voxel Downsampling
  └── Real-Time Surface Normal & Depth Estimation
       │
       ▼
[Spatial World Model Engine]
  ├── Continuous Occupancy Grid Mapping
  ├── Object Affordance & Volumetric Bounding
  └── Hardware-Grounded Latent Feature Embedding
       │
       ▼
[Cognitive Intelligence & Action Interface]
  └── Zero-Latency Path Planning & Robotic Actuation`,
      invariants: [
        {
          name: "Physical-to-Digital Grounding",
          desc: "Aligns high-level generative AI reasoning with deterministic spatial metric maps, eliminating perceptual hallucinations in physical robotic operations."
        },
        {
          name: "Real-Time Spatial World Model",
          desc: "Continuously maintains a 3D volumetric map of the operating envelope at sub-50ms refresh rates on edge compute."
        }
      ],
      codeSnippetTitle: "C++ / ROS2: Spatial Point Cloud Voxel Filter Node",
      codeSnippet: `#include <rclcpp/rclcpp.hpp>
#include <sensor_msgs/msg/point_cloud2.hpp>
#include <pcl/filters/voxel_grid.h>

class RealityLayerVoxelNode : public rclcpp::Node {
public:
  RealityLayerVoxelNode() : Node("reality_layer_voxel") {
    sub_ = this->create_subscription<sensor_msgs::msg::PointCloud2>(
      "/sensors/lidar_raw", 10, std::bind(&RealityLayerVoxelNode::process, this, std::placeholders::_1));
    pub_ = this->create_publisher<sensor_msgs::msg::PointCloud2>("/spatial/world_model", 10);
  }
private:
  void process(const sensor_msgs::msg::PointCloud2::SharedPtr cloud) {
    // Voxel filtering downsampling to 2cm resolution in <15ms
    pcl::VoxelGrid<pcl::PointXYZ> sor;
    // Publish clean geometric state to autonomous controller
  }
  rclcpp::Subscription<sensor_msgs::msg::PointCloud2>::SharedPtr sub_;
  rclcpp::Publisher<sensor_msgs::msg::PointCloud2>::SharedPtr pub_;
};`
    }
  },

  // 6. EXECUTIVE DOSSIER MODAL SLIDES (ACCESSIBLE VIA ⌘K)
  founderDossier: [
    {
      slideNumber: 1,
      title: "Suranyx: AI-Native Financial OS",
      subtitle: "Multi-Tenant B2B Compliance & Runway Intelligence",
      keyMetric: "suranyx.com",
      content: "As CEO & Co-Founder, Shubham engineered Suranyx for Indian SMEs and high-growth enterprise operators. Suranyx unifies multi-bank real-time liquidity telemetries, automated reconciliation, and predictive cash runway modeling.",
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
      content: "As Solo Founder, Shubham built Vadhu-Var, a modern progressive web application architected with deep cultural intentionality, runtime trilingual localization (English, Marathi, Hindi), and 36 conversational prompts.",
      bullets: [
        "Custom atomic PostgreSQL stored procedures and RPC functions eliminating race conditions",
        "RLS InitPlan optimization: parameterized (SELECT auth.uid()) cutting query times to <1ms",
        "Strict media constraints: 1 compulsory photo, max 3 slots with atomic media swap routines"
      ]
    },
    {
      slideNumber: 3,
      title: "CUAS: AI-Native Edge Defense",
      subtitle: "Tactical Drone Neutralization on Jetson",
      keyMetric: "92.4% mAP / <100ms",
      content: "Engineered an AI-native counter-drone detection and tracking system deployed on NVIDIA Jetson with low-level firmware integration and TensorRT hardware acceleration.",
      bullets: [
        "YOLOv8 + Vision Transformers (ViT) with <100ms threat-to-action response",
        "Synthesized sensor firmware directly with onboard multi-sensor payloads and RF triangulation",
        "Deterministic real-time decision loop under active electronic interference"
      ]
    },
    {
      slideNumber: 4,
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
      slideNumber: 5,
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
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
} else {
  window.SITE_CONFIG = SITE_CONFIG;
}
