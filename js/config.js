/**
 * Shubham Pawar // Founder & Systems Architect Configuration
 * Co-founder (COO) at Rodimus Tech (rodimus-tech.com)
 * Twitter / X: @builtfor101 | LinkedIn: in/shubhampawar-in | GitHub: Shubh-creations
 */

const SITE_CONFIG = {
  founder: {
    name: "Shubham Pawar",
    shortName: "Shubham",
    title: "Founder & Systems Architect // Co-founder (COO) at Rodimus",
    tagline: "Building the Reality Layer for AI & Autonomous Edge Robotics",
    location: "Pune, India",
    status: "Co-founder (COO) @ Rodimus Tech // Building Autonomy",
    headline: "Co-founder & COO at Rodimus Tech. Architecting the Reality Layer for AI, edge robotics, and GPU-accelerated vision systems.",
    subheadline: "Obsessed with low-latency edge AI, counter-drone defense (C-UAS), autonomous agent architectures, and physical-world robotics. Engineering at the boundary of hardware sensors, CUDA acceleration, and sovereign intelligence.",
    avatar: "assets/avatar.svg",
    links: {
      twitter: "https://x.com/builtfor101",
      twitterHandle: "@builtfor101",
      linkedin: "https://www.linkedin.com/in/shubhampawar-in/",
      github: "https://github.com/Shubh-creations",
      repo: "https://github.com/Shubh-creations/Shubh-creations.github.io",
      siteUrl: "https://shubh-creations.github.io",
      email: "shubhampawar0610@gmail.com",
      phone: "+91 9623422350",
      rodimus: "https://www.rodimus-tech.com",
      dossierUrl: "#deck-modal"
    }
  },

  principles: [
    {
      num: "01",
      title: "Physical-World Grounding",
      desc: "Real AI defensibility isn't in thin API wrappers—it is where software meets physical reality: cameras, sensors, edge micro-controllers, and hard real-time latency bounds."
    },
    {
      num: "02",
      title: "Hardware-Accelerated Velocity",
      desc: "Don't settle for unoptimized pipelines. Synthesize C/C++ firmware, CUDA GPU acceleration, and zero-copy memory transfers to run vision systems at 30+ FPS with sub-second response."
    },
    {
      num: "03",
      title: "Deterministic Safety Over Probabilistic Hype",
      desc: "In defense, robotics, and edge autonomy, hallucinations cause catastrophic failure. We build with formal verification gates, drift monitoring (MLflow), and deterministic state machines."
    },
    {
      num: "04",
      title: "First-Principles Execution",
      desc: "From fundamental physics and sensor payloads to production edge deployment on Jetson platforms: iterate obsessively, compress cycles, and deploy solutions that protect and empower."
    }
  ],

  keyMetrics: [
    { label: "C-UAS Latency", value: "<1.0s", change: "Sub-Second Response", detail: "Real-time edge drone detection on Jetson Nano" },
    { label: "Inference Speedup", value: "2–3x", change: "CUDA GPU Accelerated", detail: "Real-time 30+ FPS OpenCV vehicle & aerial tracking" },
    { label: "Vision Accuracy", value: "90%+", change: "5+ Projects Deployed", detail: "CNN detection models with MLflow drift triggers" },
    { label: "Executive Role", value: "COO", change: "Co-founder @ Rodimus", detail: "Building the Reality Layer for Physical AI" }
  ],

  ventures: [
    {
      id: "rodimus-tech",
      name: "Rodimus Tech",
      tagline: "Reality Layer for AI — Bridging physical perception with autonomous cognitive intelligence.",
      status: "Flagship Venture // Co-founder (COO)",
      category: "Robotics & Spatial AI",
      description: "Serving as Co-founder and Chief Operating Officer (COO). Rodimus is architecting the foundational Reality Layer for AI—uniting real-time spatial world models, sensor perception, and edge computing to ground artificial intelligence in the physical world.",
      metrics: [
        { label: "Role", val: "Co-founder (COO)" },
        { label: "Domain", val: "Spatial AI & Robotics" },
        { label: "Platform", val: "rodimus-tech.com" }
      ],
      tags: ["Robotics", "Edge AI", "Computer Vision", "Systems Architecture", "COO", "Spatial Computing"],
      tractionPoints: [
        "Executive leadership orchestrating deep-tech engineering, operational roadmap, and product delivery",
        "Pioneering the Reality Layer connecting physical world sensors with high-level cognitive models",
        "Driving partnerships, robotics integration strategy, and cross-functional team execution"
      ],
      links: {
        site: "https://www.rodimus-tech.com",
        github: "https://github.com/Shubh-creations",
        linkedin: "https://www.linkedin.com/in/shubhampawar-in/"
      }
    },
    {
      id: "cuas-defense",
      name: "Counter - Unmanned Aerial System (C-UAS)",
      tagline: "Tactical real-time drone detection, tracking, and counter-UAS edge defense on NVIDIA Jetson.",
      status: "Defense & Edge Tech",
      category: "Autonomous Defense",
      description: "Developed an edge-deployable counter-drone detection and tracking system using OpenCV (Python) accelerated with NVIDIA CUDA. Achieves >30 FPS processing speed with sub-second latency on live video streams, combining C/C++ firmware with onboard sensors on NVIDIA Jetson Nano for tactical defense applications.",
      metrics: [
        { label: "Frame Rate", val: "30+ FPS" },
        { label: "Latency", val: "<1.0s Sub-Sec" },
        { label: "Hardware", val: "Jetson Nano" }
      ],
      tags: ["NVIDIA Jetson", "CUDA", "OpenCV", "C/C++ Firmware", "Python", "Defense Tech", "Sensors"],
      tractionPoints: [
        "Delivered continuous 30+ FPS aerial drone tracking with sub-second detection latency on live streams",
        "Synthesized low-level C/C++ firmware directly with onboard Jetson sensors for field-ready autonomy",
        "Engineered for lightweight, edge-deployable counter-UAS security and perimeter defense"
      ],
      links: {
        github: "https://github.com/Shubh-creations/CUAS-MAin-",
        demo: "https://x.com/builtfor101"
      }
    },
    {
      id: "vehicle-detection-adas",
      name: "Vehicle Detection & Tracking (ADAS)",
      tagline: "High-framerate real-time vehicle perception pipeline accelerated 2-3x via CUDA GPU parallelism.",
      status: "Smart Mobility & Vision",
      category: "Computer Vision",
      description: "Designed and deployed a real-time vehicle detection and tracking system using OpenCV and Haar cascade classifiers in Python. Integrated CUDA-enabled GPU processing to achieve a 2–3x inference speedup, delivering consistent 30+ FPS feeds for smart city infrastructure and Advanced Driver Assistance Systems (ADAS).",
      metrics: [
        { label: "GPU Speedup", val: "2–3x Faster" },
        { label: "Throughput", val: "30+ FPS" },
        { label: "Domain", val: "ADAS & Traffic" }
      ],
      tags: ["OpenCV", "CUDA GPU", "Python", "Haar Cascades", "ADAS", "NVIDIA Jetson", "Edge AI"],
      tractionPoints: [
        "Boosted inference throughput by 2–3x leveraging CUDA-accelerated OpenCV pipelines",
        "Maintained 30+ FPS on edge computing devices under dense vehicular traffic feeds",
        "Built modular tracking metrics adaptable for smart highway telemetry and ADAS integration"
      ],
      links: {
        github: "https://github.com/Shubh-creations/Vehicle-detection-and-tracking",
        demo: "https://x.com/builtfor101"
      }
    },
    {
      id: "vcare-super-agent",
      name: "Vcare: Multi-Domain Super-Agent",
      tagline: "Autonomous multi-domain cognitive agent architecture with deterministic tool dispatch.",
      status: "Agent Architecture",
      category: "Autonomous Systems",
      description: "Engineered a sovereign multi-domain autonomous agent system capable of contextual reasoning, goal decomposition, dynamic tool orchestration, and resilient self-healing state transitions across complex distributed environments.",
      metrics: [
        { label: "Architecture", val: "Super-Agent" },
        { label: "Workflow", val: "Multi-Domain" },
        { label: "Execution", val: "Stateful" }
      ],
      tags: ["LangChain", "Autonomous Agents", "Python", "Tool Calling", "Multi-Agent AI", "State Machines"],
      tractionPoints: [
        "Constructed multi-domain tool execution layer with dynamic validation gates",
        "Engineered resilient fallback mechanisms to maintain mission continuity across API shifts",
        "Modular architecture easily extensible to customer support, healthcare, and enterprise automation"
      ],
      links: {
        github: "https://github.com/Shubh-creations/Vcare",
        demo: "https://x.com/builtfor101"
      }
    },
    {
      id: "devprime-adk",
      name: "Devprime-ADK",
      tagline: "Standardized Reinforcement Learning benchmarking suite and Agent Development Kit.",
      status: "Developer Infrastructure",
      category: "Benchmarking",
      description: "Architected Benchmark-ADK to empower researchers and machine learning engineers to reliably train, evaluate, and benchmark Reinforcement Learning agents and policy models under reproducible, deterministic simulation conditions.",
      metrics: [
        { label: "Framework", val: "Benchmark-ADK" },
        { label: "Target", val: "RL Policies" },
        { label: "Evaluation", val: "Deterministic" }
      ],
      tags: ["Reinforcement Learning", "Python", "Benchmarking", "PyTorch", "Gym", "Evaluation Harness"],
      tractionPoints: [
        "Created unified harness for comparative evaluation of complex reinforcement learning policies",
        "Streamlined metric extraction and reproducible performance stress-testing",
        "Open-source tool powering transparent agent verification"
      ],
      links: {
        github: "https://github.com/Shubh-creations/Devprime-adk",
        demo: "https://x.com/builtfor101"
      }
    },
    {
      id: "sentiment-opinion-mining",
      name: "Sentimental Intelligence & Opinion Mining",
      tagline: "Automated NLP sentiment pipeline classifying trending topics with 80%+ accuracy.",
      status: "NLP Intelligence",
      category: "Natural Language AI",
      description: "Developed an automated opinion mining and sentiment classification pipeline utilizing TF-IDF vectorization and logistic regression. Achieved 80%+ accuracy on trending public topics, reducing manual content moderation by 30% and enabling real-time social listening.",
      metrics: [
        { label: "Classification", val: "80%+ Acc" },
        { label: "Labor Saved", val: "-30% Manual" },
        { label: "Processing", val: "Real-Time NLP" }
      ],
      tags: ["NLP", "TF-IDF", "Logistic Regression", "Python", "Scikit-learn", "Pandas", "Text Mining"],
      tractionPoints: [
        "Achieved 80%+ accuracy classifying nuanced sentiment on trending social topic streams",
        "Automated continuous opinion ingestion, feature extraction, and reporting pipelines",
        "Decreased human moderation workload by 30% via automated confidence thresholding"
      ],
      links: {
        github: "https://github.com/Shubh-creations/ml-dl-projects",
        demo: "https://x.com/builtfor101"
      }
    }
  ],

  essays: [
    {
      id: "essay-01",
      date: "October 2026",
      readTime: "4 min read",
      title: "Edge Compute & The Reality Layer for AI",
      snippet: "Why software without physical grounding will commoditize, and how edge robotics creates insurmountable moats.",
      body: "Most AI products remain trapped behind cloud API latency and synthetic text tokens. The defining technological frontier is the Reality Layer—marrying perception, low-level sensors, and edge accelerators (NVIDIA Jetson, CUDA) so that autonomous systems can see, decide, and act in the physical world under sub-second latency constraints."
    },
    {
      id: "essay-02",
      date: "August 2026",
      readTime: "5 min read",
      title: "Real-Time Vision at 30+ FPS on Resource-Constrained Hardware",
      snippet: "Engineering principles for optimizing CUDA pipelines, OpenCV, and C/C++ firmware on edge defense systems.",
      body: "Achieving 30+ FPS with sub-second latency on an NVIDIA Jetson Nano requires stripping away unnecessary abstractions. By leveraging CUDA-accelerated OpenCV, managing memory buffers carefully to eliminate CPU-GPU copying bottlenecks, and writing direct C/C++ sensor interfaces, we deliver tactical counter-drone tracking on lightweight, battery-operated platforms."
    },
    {
      id: "essay-03",
      date: "May 2026",
      readTime: "3 min read",
      title: "The 0-to-1 Velocity Law for Founders",
      snippet: "How relentless iteration speed and hands-on systems craftsmanship out-execute legacy corporations.",
      body: "Large organizations do not fail for lack of compute or capital; they fail due to coordination latency. An obsessive founder with deep systems fluency can prototype, validate, and deploy a full-stack edge defense or autonomous agent architecture while a committee is still drafting requirements. Compress the feedback loop, ship daily, and let execution speak."
    }
  ],

  founderDossier: [
    {
      slideNumber: 1,
      title: "The Vision: Reality Layer for AI",
      subtitle: "Physical AI & Robotics Frontier",
      keyMetric: "Reality Layer",
      content: "The next era of technological dominance belongs to artificial intelligence that interacts directly with physical reality. At Rodimus Tech (rodimus-tech.com), we are building the foundational Reality Layer for AI.",
      bullets: [
        "Bridging spatial world perception with autonomous cognitive models",
        "Hardware-in-the-loop edge compute, robotics, and sensory integration",
        "Executive operational leadership as Co-founder and Chief Operating Officer (COO)"
      ]
    },
    {
      slideNumber: 2,
      title: "Counter-UAS Edge Defense",
      subtitle: "Tactical Aerial Protection",
      keyMetric: "<1.0s Latency / 30+ FPS",
      content: "Engineered a real-time counter-drone detection and tracking system deployed on NVIDIA Jetson Nano, delivering sub-second response on live video feeds.",
      bullets: [
        "CUDA-accelerated OpenCV vision pipeline achieving 30+ FPS continuously",
        "Synthesized C/C++ firmware directly with onboard multi-sensor payloads",
        "Lightweight, battery-efficient, edge-deployable counter-UAS defense"
      ]
    },
    {
      slideNumber: 3,
      title: "GPU Acceleration & ADAS Telemetry",
      subtitle: "2–3x Speedup via CUDA",
      keyMetric: "2–3x Inference Speedup",
      content: "Designed and deployed a real-time vehicle perception pipeline for smart mobility, autonomous driving (ADAS), and urban traffic telemetry.",
      bullets: [
        "Integrated CUDA GPU acceleration with OpenCV Haar cascade classifiers",
        "Sustained 30+ FPS throughput under dense multi-vehicle camera feeds",
        "Scalable architecture tested on NVIDIA Jetson embedded hardware"
      ]
    },
    {
      slideNumber: 4,
      title: "Autonomous Agent Architectures",
      subtitle: "Vcare & Devprime-ADK",
      keyMetric: "Deterministic Autonomy",
      content: "Pioneered sovereign agent systems and reinforcement learning evaluation harnesses designed to eliminate unconstrained hallucinations and ensure verifiable task execution.",
      bullets: [
        "Vcare Super-Agent: Stateful multi-domain cognitive reasoning and tool dispatch",
        "Devprime-ADK: Unified RL benchmarking suite for deterministic policy evaluation",
        "Dynamic self-healing state transitions across complex distributed environments"
      ]
    },
    {
      slideNumber: 5,
      title: "Engineering Leadership & Operations",
      subtitle: "Co-founder (COO) at Rodimus Tech",
      keyMetric: "Deep-Tech Execution",
      content: "Proven track record bridging deep-tech software architecture with operational execution, cross-functional engineering management, and strategic delivery.",
      bullets: [
        "Co-founder & COO at Rodimus Tech driving the Reality Layer for AI",
        "Hands-on technical leadership across robotics, vision, and hardware integration",
        "Spearheading product execution, partner ecosystems, and founder vision"
      ]
    },
    {
      slideNumber: 6,
      title: "API Ecosystems & Machine Learning",
      subtitle: "Postman & Pantech.AI Track Record",
      keyMetric: "90%+ Vision Accuracy",
      content: "Demonstrated technical rigor across API design, automated testing, computer vision, and production MLflow pipeline monitoring.",
      bullets: [
        "Postman API Student Instructor: Developing, testing, and automating RESTful APIs",
        "Pantech.AI: Implemented CNNs and OpenCV in 5+ projects with 90%+ accuracy",
        "Led model monitoring with MLflow, introducing automated drift detection and retraining"
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
      title: "Founder Network & Contact",
      subtitle: "Shubham Pawar (@builtfor101)",
      keyMetric: "Connect Directly",
      content: "Obsessed with building transformative technology that moves physical and digital worlds forward. Connect directly for partnerships, deep-tech engineering, and ventures.",
      bullets: [
        "Twitter / X: @builtfor101 (x.com/builtfor101)",
        "LinkedIn: linkedin.com/in/shubhampawar-in",
        "Email: shubhampawar0610@gmail.com | Phone: +91 9623422350"
      ]
    }
  ],

  milestones: [
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
      summary: "Developed and tested RESTful APIs using Postman for student-focused applications. Automated API testing flows by creating comprehensive test collections and automated execution scripts within Postman."
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

  skillsArsenal: [
    {
      category: "Core Languages & Systems",
      items: ["Python", "C/C++", "CUDA", "R", "SQL", "Bash", "Git", "Linux", "NVIDIA Jetson Nano", "ADAS Telemetry"]
    },
    {
      category: "AI, Vision & Frameworks",
      items: ["OpenCV", "PyTorch", "TensorFlow", "Keras", "Scikit-learn", "XGBoost", "LangChain", "MLflow", "Airflow", "PySpark"]
    },
    {
      category: "Robotics, APIs & Analytics",
      items: ["Postman", "RESTful APIs", "Sensors & Vision Systems", "Pandas", "NumPy", "Power BI", "Tableau", "Seaborn", "Matplotlib"]
    }
  ],

  certifications: [
    {
      title: "Machine Learning A–Z™: Hands-On Python and R in Data Science",
      issuer: "UDEMY",
      highlight: "Algorithms, Predictive Modeling & Statistical Learning"
    },
    {
      title: "Python for Data Science",
      issuer: "IBM",
      highlight: "Data Pipelines, Analytics & Scientific Computing"
    },
    {
      title: "Simulink and Onramp Certified",
      issuer: "MATLAB by MathWorks",
      highlight: "Dynamic Systems Simulation, Control Loops & Modeling"
    },
    {
      title: "Generative AI Virtual Experience",
      issuer: "BCGX (Forage)",
      highlight: "Applied Enterprise LLMs & Cognitive Strategy"
    }
  ],

  faq: [
    {
      q: "What is your primary venture and executive role right now?",
      a: "I am the Co-founder and Chief Operating Officer (COO) at Rodimus Tech (rodimus-tech.com). We are building the Reality Layer for AI—bridging real-world sensory perception, robotics, and edge intelligence so artificial systems can reliably understand and navigate the physical world."
    },
    {
      q: "What is the Counter-UAS (C-UAS) project and its technical specs?",
      a: "C-UAS is an edge-deployable counter-drone detection and tracking defense system. Powered by CUDA-accelerated OpenCV running on an NVIDIA Jetson Nano, it processes live video streams at 30+ FPS with sub-second latency, integrating C/C++ firmware directly with onboard sensors."
    },
    {
      q: "What is your technical education and foundation?",
      a: "I am pursuing my Bachelor of Engineering in Automation and Robotics at Dr. D. Y. Patil Institute of Technology, Pimpri, Pune (2022–2026). My coursework focuses on Artificial Intelligence in Robots, Modeling and Simulation, and Sensors and Vision Systems."
    },
    {
      q: "How can someone connect with you for opportunities or collaboration?",
      a: "You can connect with me on LinkedIn at https://www.linkedin.com/in/shubhampawar-in/, follow me on X/Twitter @builtfor101 (https://x.com/builtfor101), or email me directly at shubhampawar0610@gmail.com (+91 9623422350)."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
} else {
  window.SITE_CONFIG = SITE_CONFIG;
}
