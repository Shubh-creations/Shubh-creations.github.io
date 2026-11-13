/**
 * Shubham Pawar Neural Digital Twin & Query Engine
 * 4x Founder // CEO @ Suranyx (https://suranyx.com)
 * Solo Founder @ Vadhu-Var / VV (https://vadhu-var.vercel.app)
 * Co-founder (COO) @ Rodimus Tech (rodimus-tech.com)
 * GitHub: https://github.com/Shubh-creations | Twitter: @builtfor101 | LinkedIn: in/shubhampawar-in
 */

class NeuralAssistant {
  constructor() {
    this.knowledgeBase = [
      {
        triggers: ["suranyx", "fintech", "compliance", "runway", "reconciliation", "rebit", "account aggregator", "audit", "sha-256", "ledger"],
        response: "Suranyx (https://suranyx.com) is an AI-native financial operating system, cash runway intelligence, and automated B2B compliance platform for Indian SMEs. As CEO & Co-Founder, Shubham engineered multi-tenant PostgreSQL/Supabase Row-Level Security (RLS) isolation, tamper-evident SHA-256 hash-chained audit ledgers with trigger-based balance verification, idempotent financial mutation workflows, and RBI ReBIT Account Aggregator (Setu / Finvu) consent pipeline architectures.",
        badge: "Flagship // Suranyx"
      },
      {
        triggers: ["vadhu-var", "vadhu var", "vv", "matrimony", "pwa", "marathi", "hindi", "trilingual", "rpc", "initplan", "atomic"],
        response: "Vadhu-Var (https://vadhu-var.vercel.app) is a modern, culturally grounded trilingual matrimony progressive web application (PWA) created by Shubham as Solo Founder. Technical highlights: custom atomic PostgreSQL RPC functions (send_contextual_interest, respond_to_interest, close_match_gracefully, swap_or_replace_profile_media), RLS InitPlan optimizations ((SELECT auth.uid())) collapsing query latencies to sub-millisecond times, strict media invariants, and seamless runtime localization in English, Marathi, and Hindi.",
        badge: "Flagship // Vadhu-Var (VV)"
      },
      {
        triggers: ["who", "shubham", "pawar", "founder", "background", "bio", "experience", "story", "about"],
        response: "Shubham Pawar is a 4x Founder and Systems Engineer. He is CEO & Co-Founder at Suranyx (AI-native financial OS at suranyx.com), Solo Founder of Vadhu-Var (trilingual matrimony PWA at vadhu-var.vercel.app), and Co-founder & COO at Rodimus Tech (rodimus-tech.com). His technical systems span multi-tenant PostgreSQL RLS, cryptographic ledgers, PyTorch, TorchScript, RL agent benchmarks (Devprime ADK), and NVIDIA Jetson edge systems.",
        badge: "4x Founder Identity"
      },
      {
        triggers: ["rodimus", "coo", "co-founder", "cofounder", "reality", "layer", "venture"],
        response: "Shubham served as Co-founder & COO at Rodimus Tech (https://www.rodimus-tech.com), which builds the 'Reality Layer for AI'. Rodimus unifies spatial perception, sensor hardware, and edge intelligence to ground autonomous systems in the physical world.",
        badge: "Rodimus Tech // COO"
      },
      {
        triggers: ["cuas", "drone", "counter", "uav", "defense", "jetson", "aerial", "yolov8", "vit"],
        response: "CUAS is an AI-native counter-drone defense framework engineered by Shubham (https://github.com/Shubh-creations/Counter-UAS). Running on NVIDIA Jetson Nano / Xavier, it uses YOLOv8, Vision Transformers (ViT), and CUDA acceleration. Benchmarks: 92.4% mAP@0.5 detection accuracy, <100ms threat-to-action latency, RF triangulation, and MLflow real-time drift monitoring.",
        badge: "C-UAS Defense Tech"
      },
      {
        triggers: ["devprime", "adk", "benchmark", "rl", "reinforcement", "gridworld", "pybullet", "dqn", "ppo"],
        response: "Devprime ADK (Benchmark-ADK) is an open-source, modular Reinforcement Learning agent development and benchmarking toolkit built by Shubham for GridWorld and PyBullet robotic simulation environments (https://github.com/Shubh-creations/Devprime-adk). It supports DQN and PPO agents with TorchScript export for zero-latency execution in real-time robotic control systems.",
        badge: "Devprime ADK // RL"
      },
      {
        triggers: ["vcare", "agent", "super agent", "assistive", "orchestration"],
        response: "Vcare (https://github.com/Shubh-creations/Vcare) is an intelligent autonomous super agent architecture engineered by Shubham in TypeScript. It routes complex user intents across multiple operational domains with modular tool-calling and structured conversational state memory.",
        badge: "Vcare // Autonomous Agent"
      },
      {
        triggers: ["vehicle", "tracking", "adas", "cuda", "opencv", "fps", "speedup"],
        response: "Shubham designed a real-time Vehicle Detection and Tracking system for ADAS and smart city infrastructure (https://github.com/Shubh-creations/Vehicle-detection-and-tracking). It achieves >30 FPS with <1s latency and ~90% accuracy using CUDA-accelerated OpenCV and centroid tracking to prevent double-counting.",
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
        triggers: ["contact", "email", "phone", "reach", "call", "schedule"],
        response: "Reach Shubham directly via Email at shubhampawar0610@gmail.com, Phone: +91 9623422350, LinkedIn: https://www.linkedin.com/in/shubhampawar-in/, or Twitter DM: @builtfor101.",
        badge: "Direct Contact"
      },
      {
        triggers: ["dossier", "deck", "slides", "keynote"],
        response: "Click 'Dossier' in the navbar or press 'D' on your keyboard to open Shubham's executive presentation covering Suranyx, Vadhu-Var, Rodimus Tech, Devprime ADK, C-UAS Defense, and Systems Architecture.",
        badge: "Executive Dossier"
      }
    ];

    this.defaultResponse = "I'm Shubham Pawar's Neural Digital Twin. Ask me about his flagship platforms Suranyx (suranyx.com) and Vadhu-Var (vadhu-var.vercel.app), his role as Co-founder (COO) at Rodimus Tech, Devprime ADK, C-UAS drone defense, or systems architecture. What would you like to explore?";
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
      badge: "Founder OS"
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
