/**
 * Shubham Pawar Neural Digital Twin & Query Engine
 * Founder & Systems Architect | Twitter: @builtfor101
 */

class NeuralAssistant {
  constructor() {
    this.knowledgeBase = [
      {
        triggers: ["who", "shubham", "pawar", "founder", "background", "bio", "experience", "story"],
        response: "Shubham Pawar (@builtfor101) is a founder and principal systems architect. He specializes in 0-to-1 product execution, high-concurrency distributed systems, and deterministic AI infrastructure. He previously led engineering teams scaling clusters to 1.2M+ users and architected streaming data engines ingesting 10B+ daily events.",
        badge: "Founder Identity"
      },
      {
        triggers: ["twitter", "x", "builtfor101", "social", "follow", "handle"],
        response: "You can follow Shubham Pawar on X/Twitter at @builtfor101 (https://x.com/builtfor101), where he shares regular technical breakdowns on distributed systems, autonomous agents, and founder execution.",
        badge: "Twitter / @builtfor101"
      },
      {
        triggers: ["moat", "defensibility", "differentiate", "architecture", "llm", "deterministic"],
        response: "Shubham's core technical thesis: Foundation models are commodities; real defensibility lives in low-level distributed performance, custom deterministic state machines, and zero-knowledge enterprise enclaves. Nexus Core AI uses formal graph solvers to eliminate hallucinations and achieve 99.7% execution fidelity.",
        badge: "Systems Architecture"
      },
      {
        triggers: ["traction", "revenue", "arr", "mrr", "metric", "users", "scale", "customers"],
        response: "Verified founder metrics: $48.5K MRR generated in 4 months with 14 paying enterprise pilots at Nexus Core AI. Over 1.2M+ active users scaled across production systems, $1.8M+ in historical ARR scaled, and 12,400+ GitHub stars across open-source distributed protocols.",
        badge: "Verified Traction"
      },
      {
        triggers: ["philosophy", "principles", "manifesto", "velocity", "craft", "speed"],
        response: "Shubham's core founder principles: 1) Speed is the ultimate moat. 2) Deterministic core over brittle wrappers. 3) Product craft is non-negotiable. 4) Asymmetric leverage via code—small elite teams out-execute legacy corporations every time.",
        badge: "Founder Manifesto"
      },
      {
        triggers: ["contact", "email", "meeting", "call", "schedule", "reach", "collaborate"],
        response: "You can reach Shubham Pawar directly on X/Twitter at @builtfor101 or via email at founder@shubh-creations.github.io. He is always open to connecting with ambitious builders, engineers, and technical partners.",
        badge: "Direct Connect"
      },
      {
        triggers: ["dossier", "deck", "vision", "slides", "keynote"],
        response: "You can open Shubham's Founder Dossier right now by clicking 'Founder Dossier' in the navigation bar or pressing 'D' on your keyboard! It covers Vision, Architecture Moat, 0-to-1 Playbook, Systems Scale, and the 18-Month Horizon.",
        badge: "Founder Dossier"
      }
    ];

    this.defaultResponse = "I'm Shubham Pawar's Neural Digital Twin. Ask me about his current venture (Nexus Core AI), technical architecture, verified traction, founder philosophy, or his essays. What would you like to explore?";
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
