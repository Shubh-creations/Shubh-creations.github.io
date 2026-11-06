/**
 * Shubh Neural Digital Twin & Intelligence Query Engine
 * Allows investors and visitors to query verified founder intelligence with real-time streaming answers.
 */

class NeuralAssistant {
  constructor() {
    this.knowledgeBase = [
      {
        triggers: ["raise", "fund", "round", "safe", "invest", "terms", "valuation", "check", "stage"],
        response: "We are currently raising a $1.2M Pre-Seed/Seed round on standard Post-Money SAFE notes. 45% ($540K) is already committed by strategic angels and operators. Capital is allocated: 55% Deep Tech Engineering, 25% Enterprise GTM & Pilots, 12% Compliance (SOC2/ISO), and 8% Runway Reserves, maintaining a 22+ month operating runway.",
        badge: "Fundraising Intelligence"
      },
      {
        triggers: ["moat", "defensibility", "differentiate", "llm", "competitor", "unique", "why you", "architecture"],
        response: "Our defensibility lies at the systems level: deterministic graph execution gates that eliminate LLM hallucinations, sub-30ms zero-copy streaming pipelines, and zero-knowledge enterprise enclaves for strict SOC2/HIPAA compliance. Foundation models are commodities; our value is the deterministic execution layer.",
        badge: "Technical Defensibility"
      },
      {
        triggers: ["traction", "revenue", "arr", "mrr", "metric", "users", "scale", "customer"],
        response: "Verified traction: $48.5K MRR generated in 4 months with 14 paying enterprise pilots. 1.2M+ active users scaled across previous production systems, over $1.8M in historical ARR scaled, and 12,400+ GitHub stars across open-source infrastructure protocols.",
        badge: "Verified Metrics"
      },
      {
        triggers: ["background", "who", "experience", "shubh", "founder", "bio", "story", "pedigree"],
        response: "Shubh is a founder and principal systems architect with 8+ years building high-throughput distributed systems and 0-to-1 ventures. Previous leadership includes VP of Engineering at Series B scale (24 engineers, 1.2M users) and founding engineer on distributed data engines processing 10B+ daily events.",
        badge: "Founder Pedigree"
      },
      {
        triggers: ["deck", "pitch", "slides", "presentation", "memo"],
        response: "You can view our 8-slide interactive pitch deck right now by clicking 'Pitch Deck' in the navbar or pressing 'D' on your keyboard! It covers Vision, Problem, Solution, Moat, TAM, Traction, Unit Economics, and The Ask.",
        badge: "Pitch Deck Access"
      },
      {
        triggers: ["contact", "email", "meeting", "call", "schedule", "calendly", "reach"],
        response: "You can book a direct 20-minute intro call via our calendar scheduler, or reach Shubh directly at founder@shubh-creations.github.io. Responses are typically returned within 2-4 hours.",
        badge: "Direct Contact"
      }
    ];

    this.defaultResponse = "I'm Shubh's Neural System Assistant. You can ask me about our current $1.2M fundraising round, enterprise AI architecture, verified traction metrics ($48.5K MRR, 1.2M users), or career milestones. What would you like to explore?";
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
      badge: "System Core"
    };
  }

  typewriter(element, text, onComplete) {
    element.innerHTML = "";
    let i = 0;
    const speed = 12; // ms per char

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
