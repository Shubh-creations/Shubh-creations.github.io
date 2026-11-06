/**
 * Shubham Pawar Neural Digital Twin & Query Engine
 * Co-founder (COO) at Rodimus Tech (rodimus-tech.com)
 * Founder & Systems Architect | Twitter: @builtfor101 | LinkedIn: in/shubhampawar-in
 */

class NeuralAssistant {
  constructor() {
    this.knowledgeBase = [
      {
        triggers: ["who", "shubham", "pawar", "founder", "background", "bio", "experience", "story", "about"],
        response: "Shubham Pawar is a founder, systems architect, and the Co-founder & Chief Operating Officer (COO) at Rodimus Tech (rodimus-tech.com). He specializes in edge AI, robotics, CUDA GPU acceleration, and counter-drone defense (C-UAS). He is studying Automation & Robotics at Dr. D. Y. Patil Institute of Technology, Pune.",
        badge: "Founder Identity"
      },
      {
        triggers: ["rodimus", "coo", "co-founder", "cofounder", "reality", "layer", "venture"],
        response: "Shubham is Co-founder & COO at Rodimus Tech (https://www.rodimus-tech.com), which is building the 'Reality Layer for AI'. Rodimus unites spatial world perception, sensor hardware, and edge intelligence to ground autonomous systems in the physical world.",
        badge: "Rodimus Tech // COO"
      },
      {
        triggers: ["cuas", "drone", "counter", "uav", "defense", "jetson", "aerial"],
        response: "Shubham engineered the Counter - Unmanned Aerial System (C-UAS). Deployed on NVIDIA Jetson Nano, it uses CUDA-accelerated OpenCV in Python combined with low-level C/C++ firmware and onboard sensors to detect and track drones at 30+ FPS with sub-second (<1.0s) latency on live video feeds.",
        badge: "C-UAS Defense Tech"
      },
      {
        triggers: ["vehicle", "tracking", "adas", "cuda", "opencv", "fps", "speedup"],
        response: "Shubham designed a real-time Vehicle Detection and Tracking system for ADAS and smart city infrastructure. By integrating CUDA-enabled GPU acceleration into OpenCV Haar cascade pipelines, he achieved a 2–3x inference speedup, sustaining 30+ FPS video processing on edge devices.",
        badge: "ADAS & Vision AI"
      },
      {
        triggers: ["linkedin", "profile", "connect", "network", "link"],
        response: "You can connect with Shubham on LinkedIn at https://www.linkedin.com/in/shubhampawar-in/ to discuss deep tech, robotics, AI systems, and venture partnerships.",
        badge: "LinkedIn Profile"
      },
      {
        triggers: ["twitter", "x", "builtfor101", "social", "follow", "handle"],
        response: "Follow Shubham on X/Twitter at @builtfor101 (https://x.com/builtfor101), where he shares insights on edge AI, robotics architecture, systems design, and 0-to-1 founder execution.",
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
        response: "Click 'Dossier' in the navbar or press 'D' on your keyboard to open Shubham's 8-slide executive presentation covering Rodimus Tech, C-UAS Defense, Edge Vision, Robotics Pedigree, and Founder Contact.",
        badge: "Executive Dossier"
      }
    ];

    this.defaultResponse = "I'm Shubham Pawar's Neural Digital Twin. Ask me about his role as Co-founder (COO) at Rodimus Tech, C-UAS drone defense, ADAS computer vision, robotics background, LinkedIn, or Twitter @builtfor101. What would you like to explore?";
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
