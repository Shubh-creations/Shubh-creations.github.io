/**
 * Shubham Pawar Neural Digital Twin & Query Engine
 * Co-Founder @ Suranyx (https://suranyx.com)
 * Creator @ Vadhu-Var / VV (https://vadhu-var.vercel.app)
 * Co-founder (COO) @ Rodimus Tech (rodimus-tech.com)
 * 1 Year Stealth Founder @ Sarvaflow (Automated Workflows Marketplace)
 * GitHub: https://github.com/Shubh-creations | Twitter: @builtfor101 | LinkedIn: in/shubhampawar-in
 */

class NeuralAssistant {
  constructor() {
    this.knowledgeBase = [
      {
        triggers: ["suranyx", "fintech", "compliance", "runway", "reconciliation", "rebit", "account aggregator", "audit", "sha-256", "ledger"],
        response: "Suranyx (https://suranyx.com) is an AI-native financial operating system, cash runway intelligence, and automated B2B compliance platform for Indian SMEs. As Co-Founder & Lead Systems Architect, Shubham engineered multi-tenant PostgreSQL/Supabase Row-Level Security (RLS) isolation, tamper-evident SHA-256 hash-chained audit ledgers with trigger-based balance verification, idempotent financial mutation workflows, and RBI ReBIT Account Aggregator (Setu / Finvu) consent pipeline architectures.",
        badge: "Flagship // Suranyx"
      },
      {
        triggers: ["vadhu-var", "vadhu var", "vv", "matrimony", "pwa", "marathi", "hindi", "trilingual", "rpc", "initplan", "atomic"],
        response: "Vadhu-Var (https://vadhu-var.vercel.app) is a modern, culturally grounded trilingual matrimony progressive web application (PWA) created by Shubham. Technical highlights: custom atomic PostgreSQL RPC functions (send_contextual_interest, respond_to_interest, close_match_gracefully, swap_or_replace_profile_media), RLS InitPlan optimizations ((SELECT auth.uid())) collapsing query latencies from 85ms to sub-millisecond times, strict media invariants, and seamless runtime localization in English, Marathi, and Hindi.",
        badge: "Flagship // Vadhu-Var (VV)"
      },
      {
        triggers: ["sarvaflow", "sarva", "workflow", "marketplace", "stealth", "automation", "dag"],
        response: "Shubham spent one full year (2023–2024) building Sarvaflow, a stealth startup creating an automated workflows marketplace. He architected distributed DAG execution engines, modular third-party integration connectors, and workflow orchestration graphs for automated multi-step enterprise pipelines.",
        badge: "Sarvaflow // 1 Year Stealth"
      },
      {
        triggers: ["who", "shubham", "pawar", "founder", "background", "bio", "experience", "story", "about"],
        response: "Shubham Pawar is an AI Startup Founder and Systems Engineer. He is Co-Founder & Lead Systems Architect at Suranyx (AI-native financial OS at suranyx.com), Creator of Vadhu-Var (trilingual matrimony PWA at vadhu-var.vercel.app), and Co-founder & COO at Rodimus Tech (rodimus-tech.com). He also spent a full year building Sarvaflow (automated workflows marketplace). His technical stack spans multi-tenant PostgreSQL RLS, cryptographic ledgers, PyTorch, TorchScript, RL agent benchmarks (Devprime ADK), and NVIDIA Jetson edge systems.",
        badge: "Founder Identity"
      },
      {
        triggers: ["rodimus", "coo", "co-founder", "cofounder", "reality", "layer", "venture"],
        response: "Shubham served as Co-founder & COO at Rodimus Tech (https://www.rodimus-tech.com), which builds the 'Reality Layer for AI'. Rodimus unifies spatial perception, sensor hardware, and edge intelligence to ground autonomous systems in the physical world.",
        badge: "Rodimus Tech // COO"
      },
      {
        triggers: ["cuas", "drone", "counter", "uav", "defense", "jetson", "aerial", "yolov8", "vit"],
        response: "CUAS is an AI-native counter-drone defense framework engineered by Shubham. Running on NVIDIA Jetson Nano / Xavier, it uses YOLOv8, Vision Transformers (ViT), and CUDA acceleration. Benchmarks: 92.4% mAP@0.5 detection accuracy, <100ms threat-to-action latency, RF triangulation, and MLflow real-time drift monitoring.",
        badge: "C-UAS Defense Tech"
      },
      {
        triggers: ["devprime", "adk", "benchmark", "rl", "reinforcement", "gridworld", "pybullet", "dqn", "ppo"],
        response: "Devprime ADK (Benchmark-ADK) is an open-source, modular Reinforcement Learning agent development and benchmarking toolkit built by Shubham for GridWorld and PyBullet robotic simulation environments. It supports DQN and PPO agents with TorchScript export for zero-latency execution in real-time robotic control systems.",
        badge: "Devprime ADK // RL"
      },
      {
        triggers: ["myconet", "fungal", "fungi", "grad-cam", "gradcam", "microscopic", "heatmap"],
        response: "MycoNet is a Deep Learning CNN architecture engineered by Shubham for classifying microscopic fungal pathogens. It features Grad-CAM visual explainability heatmaps overlaid directly onto microscopic slide inputs, providing interpretable diagnostic evidence for clinical microbiologists.",
        badge: "MycoNet // Explainable AI"
      },
      {
        triggers: ["allergy", "food", "patent", "dialogflow", "ocr", "barcode", "ingredient"],
        response: "Shubham is the patent author of an Intelligent Food Allergy Detection System that integrates multi-modal input channels (Tesseract OCR, barcode scanning, and conversational Dialogflow AI) to cross-reference packaged food ingredients against global allergen databases and personal immuno-profiles in real time.",
        badge: "Patent-Authored System"
      },
      {
        triggers: ["video", "pipeline", "remastering", "ffmpeg", "transcoding"],
        response: "Shubham developed an Automated AI Video & Media Remastering Pipeline leveraging Python, PyTorch, and FFmpeg. It automates high-throughput batch transcoding, resolution upscaling, dynamic range enhancement, and multi-format distribution.",
        badge: "Media Pipeline"
      },
      {
        triggers: ["vehicle", "tracking", "adas", "cuda", "opencv", "fps", "speedup"],
        response: "Shubham designed a real-time Vehicle Detection and Tracking system for ADAS and smart city infrastructure. It achieves >30 FPS with <1s latency and ~90% accuracy using CUDA-accelerated OpenCV and centroid tracking to prevent double-counting.",
        badge: "ADAS & Vision AI"
      },
      {
        triggers: ["github", "repos", "commits", "open source", "code"],
        response: "Explore Shubham's open-source repositories and engineering activity at https://github.com/Shubh-creations. Key repos include Counter-UAS, CUAS-MAin-, Devprime-adk, Vehicle-detection-and-tracking, and Vcare.",
        badge: "GitHub // Shubh-creations"
      },
      {
        triggers: ["linkedin", "profile", "connect", "network", "link"],
        response: "You can connect with Shubham on LinkedIn at https://www.linkedin.com/in/shubhampawar-in/ to discuss systems architecture, AI platforms, and venture collaborations.",
        badge: "LinkedIn Profile"
      },
      {
        triggers: ["twitter", "x", "builtfor101", "social", "follow", "handle"],
        response: "Follow Shubham on X/Twitter at @builtfor101 (https://x.com/builtfor101), where he shares technical deep dives on distributed systems, multi-tenant RLS, edge AI, and 0-to-1 founder execution.",
        badge: "Twitter / @builtfor101"
      },
      {
        triggers: ["education", "college", "degree", "robotics", "automation", "patil", "pimpri"],
        response: "Shubham is pursuing a Bachelor of Engineering in Automation and Robotics (2022–2026) at Dr. D. Y. Patil Institute of Technology, Pimpri, Pune. Core coursework includes AI in Robots, Modeling & Simulation, Sensors & Vision Systems, and Statistical Data Analysis.",
        badge: "Robotics Pedigree"
      },
      {
        triggers: ["postman", "api", "instructor", "testing"],
        response: "Shubham serves as a Postman API Student Instructor (Jan 2025 – Present), designing and testing RESTful APIs for student applications and automating API testing workflows with automated test suites.",
        badge: "Postman Instructor"
      },
      {
        triggers: ["pantech", "intern", "mlflow", "drift", "cnn"],
        response: "At Pantech.AI (Sept 2024 – Dec 2024), Shubham implemented CNNs and OpenCV across 5+ vision projects with 90%+ accuracy, and spearheaded MLflow model monitoring with automated data drift detection and retraining triggers.",
        badge: "Vision & MLflow"
      },
      {
        triggers: ["contact", "email", "phone", "reach", "call", "schedule"],
        response: "Reach Shubham directly via Email at shubhampawar0610@gmail.com, Phone: +91 9623422350, LinkedIn: https://www.linkedin.com/in/shubhampawar-in/, or Twitter DM: @builtfor101.",
        badge: "Direct Contact"
      },
      {
        triggers: ["dossier", "deck", "slides", "keynote"],
        response: "Click 'Dossier' in the navbar or press 'D' on your keyboard to open Shubham's executive presentation covering Suranyx, Vadhu-Var, Rodimus Tech, Sarvaflow (1-year stealth), C-UAS Defense, Edge Vision, and Systems Architecture.",
        badge: "Executive Dossier"
      }
    ];

    this.defaultResponse = "I'm Shubham Pawar's Neural Digital Twin. Ask me about his flagship platforms Suranyx (suranyx.com) and Vadhu-Var (vadhu-var.vercel.app), his role as Co-founder (COO) at Rodimus Tech, 1 year building Sarvaflow, Devprime ADK, C-UAS drone defense, or systems architecture. What would you like to explore?";
  }

  query(userQuery) {
    const q = (userQuery || "").toLowerCase();

    for (const item of this.knowledgeBase) {
      if (item.triggers.some(t => q.includes(t))) {
        return {
          text: item.response,
          badge: item.badge
        };
      }
    }

    return {
      text: this.defaultResponse,
      badge: "Core OS"
    };
  }

  typewriter(element, text, onComplete) {
    element.innerHTML = "";
    let i = 0;
    const speed = 12;

    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        if (i % 6 === 0 && window.soundEngine) {
          window.soundEngine.playClick(1200, 0.015);
        }
        setTimeout(type, speed);
      } else {
        if (onComplete) onComplete();
      }
    }

    type();
  }
}

window.neuralAssistant = new NeuralAssistant();
