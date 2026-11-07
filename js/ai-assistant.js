/**
 * Shubham Pawar Neural Digital Twin & Query Engine
 * Co-founder (COO) at Rodimus Tech (rodimus-tech.com)
 * 1 Year Stealth Founder @ Sarvaflow (Automated Workflows Marketplace)
 * Founder & Systems Architect | Twitter: @builtfor101 | LinkedIn: in/shubhampawar-in
 */

class NeuralAssistant {
  constructor() {
    this.knowledgeBase = [
      {
        triggers: ["sarvaflow", "sarva", "workflow", "marketplace", "stealth", "automation", "dag"],
        response: "Shubham spent one whole year (2023–2024) building Sarvaflow, a stealth startup creating an automated workflows marketplace. He architected distributed DAG execution engines, modular third-party connectors, and sandboxed execution environments allowing developers to publish, discover, and monetize automated workflows.",
        badge: "Sarvaflow // 1 Year Stealth"
      },
      {
        triggers: ["who", "shubham", "pawar", "founder", "background", "bio", "experience", "story", "about"],
        response: "Shubham Pawar is a founder, systems architect, and the Co-founder & Chief Operating Officer (COO) at Rodimus Tech (rodimus-tech.com). He also spent one full year building Sarvaflow (automated workflows marketplace in stealth). He specializes in edge AI, robotics, CUDA GPU acceleration, and counter-drone defense (C-UAS). He studies Automation & Robotics at Dr. D. Y. Patil Institute of Technology, Pune.",
        badge: "Founder Identity"
      },
      {
        triggers: ["rodimus", "coo", "co-founder", "cofounder", "reality", "layer", "venture"],
        response: "Shubham is Co-founder & COO at Rodimus Tech (https://www.rodimus-tech.com), which is building the 'Reality Layer for AI'. Rodimus unites spatial world perception, sensor hardware, and edge intelligence to ground autonomous systems in the physical world.",
        badge: "Rodimus Tech // COO"
      },
      {
        triggers: ["cuas", "drone", "counter", "uav", "defense", "jetson", "aerial", "yolov8", "vit"],
        response: "CUAS is an AI-native counter-drone defense framework engineered by Shubham. Running on NVIDIA Jetson Nano / Xavier, it uses YOLOv8, Vision Transformers (ViT), and CLIP with CUDA acceleration. Benchmarks: 92.4% mAP@0.5 detection accuracy, <100ms threat-to-action latency, RF triangulation, and MLflow real-time drift monitoring.",
        badge: "C-UAS Defense Tech"
      },
      {
        triggers: ["devprime", "adk", "benchmark", "rl", "reinforcement", "gridworld", "pybullet", "dqn", "ppo"],
        response: "Devprime-ADK (Benchmark-ADK) is a modular, reproducible Reinforcement Learning toolkit built by Shubham for GridWorld and PyBullet robotics environments. It supports DQN and PPO agents with TorchScript export, multi-agent evaluation, and automated reward curve visualization.",
        badge: "Devprime-ADK // RL"
      },
      {
        triggers: ["vcare", "life-os", "life os", "agent", "super-agent", "cognitive"],
        response: "Life-OS Prime (Vcare) is a self-evolving, multi-domain cognitive architecture interface engineered by Shubham to optimize biological, financial, and psychological trajectories with conversational AI, stateful execution, and modular service integrations.",
        badge: "Life-OS Prime"
      },
      {
        triggers: ["vehicle", "tracking", "adas", "cuda", "opencv", "fps", "speedup"],
        response: "Shubham designed a real-time Vehicle Detection and Tracking system for ADAS and smart city infrastructure. It achieves >30 FPS with <1s latency and ~90% accuracy using CUDA-accelerated OpenCV and centroid tracking to prevent double-counting.",
        badge: "ADAS & Vision AI"
      },
      {
        triggers: ["research", "xgboost", "energy", "meter", "ad", "ucb", "svm"],
        response: "Shubham's ML/DL research suite includes XGBoost tumor classification, Upper Confidence Bound (UCB) reinforcement learning for web ad optimization, IoT smart energy meter consumption modeling, and SVM regression algorithms.",
        badge: "ML/DL Research"
      },
      {
        triggers: ["linkedin", "profile", "connect", "network", "link"],
        response: "You can connect with Shubham on LinkedIn at https://www.linkedin.com/in/shubhampawar-in/ to discuss deep tech, robotics, AI systems, and venture partnerships.",
        badge: "LinkedIn Profile"
      },
      {
        triggers: ["twitter", "x", "builtfor101", "social", "follow", "handle"],
        response: "Follow Shubham on X/Twitter at @builtfor101 (https://x.com/builtfor101), where he shares regular technical breakdowns on edge AI, robotics architecture, systems design, and 0-to-1 founder execution.",
        badge: "Twitter / @builtfor101"
      },
      {
        triggers: ["education", "college", "degree", "robotics", "automation", "patil", "pimpri"],
        response: "Shubham is pursuing a Bachelor of Engineering in Automation and Robotics (2022–2026) at Dr. D. Y. Patil Institute of Technology, Pimpri, Pune. Core coursework includes AI in Robots, Modeling & Simulation, Sensors & Vision Systems, and Numerical Methods.",
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
        triggers: ["certifications", "certificate", "udemy", "ibm", "matlab", "bcgx"],
        response: "Shubham's certifications include: 1) Machine Learning A-Z (Udemy), 2) Python for Data Science (IBM), 3) Simulink & Onramp Certified (MATLAB MathWorks), and 4) Generative AI Virtual Experience (BCGX Forage).",
        badge: "Certifications"
      },
      {
        triggers: ["contact", "email", "phone", "reach", "call", "schedule"],
        response: "Reach Shubham directly via Email at shubhampawar0610@gmail.com, Phone: +91 9623422350, LinkedIn: https://www.linkedin.com/in/shubhampawar-in/, or Twitter DM: @builtfor101.",
        badge: "Direct Contact"
      },
      {
        triggers: ["dossier", "deck", "slides", "keynote"],
        response: "Click 'Dossier' in the navbar or press 'D' on your keyboard to open Shubham's 8-slide executive presentation covering Rodimus Tech, Sarvaflow (1-year stealth startup), C-UAS Defense, Edge Vision, Robotics Pedigree, and Founder Contact.",
        badge: "Executive Dossier"
      }
    ];

    this.defaultResponse = "I'm Shubham Pawar's Neural Digital Twin. Ask me about his role as Co-founder (COO) at Rodimus Tech, 1 year building Sarvaflow (automated workflows marketplace), C-UAS drone defense, Devprime-ADK, ADAS vision, robotics background, or LinkedIn. What would you like to explore?";
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
