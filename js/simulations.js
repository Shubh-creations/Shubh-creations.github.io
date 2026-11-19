/**
 * js/simulations.js — Live In-Browser Architecture Simulations
 * Native browser primitives: Web Crypto API (SubtleCrypto SHA-256) & Real-Time Telemetry.
 * 1. Suranyx: Live Cryptographic SHA-256 Hash-Chained Financial Ledger
 * 2. Vadhu-Var: PostgreSQL RLS InitPlan Latency & Query Optimizer Benchmark
 * 3. Counter-UAS: Edge Multi-Sensor Fusion Telemetry Loop (<100ms on Jetson)
 */

async function sha256Hex(message) {
  if (typeof crypto !== 'undefined' && crypto.subtle) {
    const data = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  }
  // Fallback djb2-based hash hex if crypto.subtle is unavailable
  let hash = 5381;
  for (let i = 0; i < message.length; i++) {
    hash = ((hash << 5) + hash) + message.charCodeAt(i);
  }
  return Math.abs(hash).toString(16).padStart(64, '0');
}

/**
 * 1. Suranyx — Live SHA-256 Hash-Chained Ledger Verifier
 */
export async function mountLedgerSimulation(containerId = 'suranyx-ledger-sim') {
  const root = document.getElementById(containerId);
  if (!root) return;

  const genesisPrev = '0000000000000000000000000000000000000000000000000000000000000000';
  const defaultBlocks = [
    { id: 'TXN-091', tenant: 'org_sme_pune_01', type: 'VENDOR_SETTLEMENT', amount: 485000, sealedHash: '' },
    { id: 'TXN-092', tenant: 'org_sme_pune_01', type: 'GST_INPUT_RECON', amount: 120000, sealedHash: '' },
    { id: 'TXN-093', tenant: 'org_sme_pune_01', type: 'ESCROW_DISBURSEMENT', amount: 940000, sealedHash: '' },
  ];

  const blocks = JSON.parse(JSON.stringify(defaultBlocks));

  // Seal initial valid cryptographic chain
  let prev = genesisPrev;
  for (const b of blocks) {
    b.sealedHash = await sha256Hex(`${prev}|${b.id}|${b.tenant}|${b.amount}`);
    prev = b.sealedHash;
  }

  async function render() {
    let runningPrev = genesisPrev;
    let chainBroken = false;
    let breakIndex = -1;
    const rowsHtml = [];

    for (let i = 0; i < blocks.length; i++) {
      const b = blocks[i];
      const computedHash = await sha256Hex(`${runningPrev}|${b.id}|${b.tenant}|${b.amount}`);
      const isValid = !chainBroken && computedHash === b.sealedHash;

      if (!isValid && !chainBroken) {
        chainBroken = true;
        breakIndex = i;
      }

      rowsHtml.push(`
        <div class="p-3.5 rounded-xl border font-mono text-xs transition-all ${
          isValid
            ? 'bg-[#171715] border-[#D8CBB3]/15 text-[#D8CBB3]'
            : 'bg-red-950/30 border-red-500/50 text-red-300 ring-1 ring-red-500/30'
        }">
          <div class="flex items-center justify-between gap-2 mb-2">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full ${isValid ? 'bg-emerald-400 animate-pulse' : 'bg-red-500'}"></span>
              <span class="font-bold text-white tracking-wide">${b.id}</span>
              <span class="text-[10px] text-[#9E9889] bg-white/[0.04] px-1.5 py-0.5 rounded border border-white/5">${b.type}</span>
            </div>
            <span class="px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold ${
              isValid
                ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                : 'bg-red-500/20 text-red-300 border border-red-500/40 animate-pulse'
            }">${isValid ? 'CHAIN VERIFIED' : 'TAMPER DETECTED'}</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center mb-2">
            <div class="sm:col-span-6 flex items-center gap-1.5">
              <label class="text-[#9E9889] text-[11px] shrink-0 font-medium">Mutate INR:</label>
              <div class="relative w-full">
                <span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#9E9889] text-xs">₹</span>
                <input
                  type="number"
                  data-idx="${i}"
                  value="${b.amount}"
                  aria-label="Edit amount for ${b.id}"
                  class="ledger-amt-input w-full bg-[#1E1E1C] border border-[#D8CBB3]/25 rounded-lg pl-6 pr-2 py-1 text-white font-mono text-xs focus:outline-none focus:border-[#D8CBB3] focus:ring-1 focus:ring-[#D8CBB3]/40 transition"
                />
              </div>
            </div>
            <div class="sm:col-span-6 text-[10px] text-[#9E9889] truncate">
              <span class="text-white/40">prev:</span> ${runningPrev.slice(0, 16)}…
            </div>
          </div>

          <div class="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-[#9E9889]">
            <span class="truncate">
              <span class="text-[#D8CBB3]/60">sha256:</span> <span class="font-mono ${isValid ? 'text-emerald-400/90' : 'text-red-400 font-bold'}">${computedHash.slice(0, 32)}…</span>
            </span>
            <span class="shrink-0 text-[9px] px-1.5 py-0.5 rounded bg-white/[0.03] text-white/50">Block 0${i + 1}</span>
          </div>
        </div>
      `);
      runningPrev = computedHash;
    }

    root.innerHTML = `
      <div class="space-y-3">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono pb-2 border-b border-white/[0.08]">
          <div class="flex items-center gap-2">
            <span class="text-[#D8CBB3] font-bold">Suranyx SHA-256 Ledger Audit:</span>
            <span class="text-[11px] text-[#9E9889]">${chainBroken ? `Breach at Block 0${breakIndex + 1}` : 'Zero Tamper Delta'}</span>
          </div>
          <button id="reseal-ledger-btn" class="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-[#D8CBB3] text-[#1E1E1C] font-bold text-xs hover:bg-[#E5DAC4] transition shadow-md shadow-[#D8CBB3]/20">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>
            <span>Re-Seal Chain</span>
          </button>
        </div>

        <div class="space-y-2">
          ${rowsHtml.join('')}
        </div>

        <div class="p-2.5 rounded-lg bg-[#171715] border border-white/[0.06] text-[11px] font-mono text-[#9E9889] flex items-center justify-between">
          <span>Formula: <code>SHA256(prev_hash + id + tenant + amount)</code></span>
          <span class="text-[#D8CBB3]">Cryptographic Invariant #02</span>
        </div>
      </div>
    `;

    root.querySelectorAll('.ledger-amt-input').forEach((input) => {
      input.addEventListener('input', (e) => {
        const idx = Number(e.target.dataset.idx);
        blocks[idx].amount = Number(e.target.value || 0);
        if (window.soundEngine) window.soundEngine.playClick(900, 0.02);
        render();
      });
    });

    root.querySelector('#reseal-ledger-btn')?.addEventListener('click', async () => {
      let p = genesisPrev;
      for (const b of blocks) {
        b.sealedHash = await sha256Hex(`${p}|${b.id}|${b.tenant}|${b.amount}`);
        p = b.sealedHash;
      }
      if (window.soundEngine) window.soundEngine.playSuccess();
      render();
    });
  }

  await render();
}

/**
 * 2. Vadhu-Var — PostgreSQL RLS InitPlan Latency Benchmark
 */
export function mountInitPlanSimulation(containerId = 'vadhuvar-initplan-sim') {
  const root = document.getElementById(containerId);
  if (!root) return;

  let mode = 'optimized'; // 'naive' | 'optimized'

  function render() {
    const isOptimized = mode === 'optimized';
    const latencyMs = isOptimized ? 0.38 : 84.6;
    const latencyPct = isOptimized ? 1.5 : 98;
    const queryCost = isOptimized ? '8.40' : '1,480.20';
    const scanStrategy = isOptimized ? 'Index Only Scan (InitPlan Cached)' : 'Seq Scan + SubPlan (50,000x re-eval)';

    root.innerHTML = `
      <div class="space-y-3 font-mono text-xs">
        <div class="flex items-center justify-between pb-2 border-b border-white/[0.08]">
          <span class="text-[#D8CBB3] font-bold">PostgreSQL RLS Execution Optimizer:</span>
          <div class="flex items-center p-0.5 rounded-full bg-[#171715] border border-white/10 text-[11px]">
            <button id="mode-naive-btn" class="px-3 py-1 rounded-full transition-all ${
              !isOptimized ? 'bg-red-500/20 text-red-300 font-bold border border-red-500/30' : 'text-[#9E9889] hover:text-white'
            }">Naive (auth.uid())</button>
            <button id="mode-opt-btn" class="px-3 py-1 rounded-full transition-all ${
              isOptimized ? 'bg-[#D8CBB3] text-[#1E1E1C] font-bold shadow-md shadow-[#D8CBB3]/20' : 'text-[#9E9889] hover:text-white'
            }">Hoisted InitPlan</button>
          </div>
        </div>

        <!-- Latency Visual Meter -->
        <div class="p-3.5 rounded-xl bg-[#171715] border border-white/[0.06] space-y-2">
          <div class="flex items-center justify-between text-xs">
            <span class="text-[#9E9889]">Query Latency (50k profiles scanned):</span>
            <span class="font-black text-sm ${isOptimized ? 'text-emerald-400' : 'text-red-400'}">
              ${latencyMs} ms ${isOptimized ? '(222x Speedup)' : '(Severe Latency)'}
            </span>
          </div>

          <div class="w-full bg-[#1E1E1C] h-2.5 rounded-full overflow-hidden p-0.5 border border-white/5">
            <div
              class="h-full rounded-full transition-all duration-500 ${isOptimized ? 'bg-emerald-400' : 'bg-red-500'}"
              style="width: ${latencyPct}%"
            ></div>
          </div>

          <div class="grid grid-cols-2 gap-2 pt-2 text-[11px] text-[#9E9889]">
            <div>
              <span class="text-white/40">Query Cost:</span> <span class="text-white font-bold">${queryCost}</span>
            </div>
            <div class="text-right">
              <span class="text-white/40">Strategy:</span> <span class="text-[#D8CBB3]">${scanStrategy}</span>
            </div>
          </div>
        </div>

        <!-- Explanatory SQL Code Snippet -->
        <div class="p-3 rounded-xl bg-[#1E1E1C] border border-white/[0.06] text-[11px] text-[#D8CBB3] overflow-x-auto leading-relaxed">
          ${isOptimized
            ? `<span class="text-emerald-400 font-bold">-- ⚡ OPTIMIZED: Evaluated ONCE via single-pass InitPlan</span>\nCREATE POLICY feed_read ON profiles FOR SELECT\nUSING (user_id != <span class="bg-[#D8CBB3]/20 text-[#D8CBB3] px-1 py-0.5 rounded font-bold">(SELECT auth.uid())</span>);`
            : `<span class="text-red-400 font-bold">-- ❌ NAIVE: Evaluates auth.uid() on EVERY single row scanned</span>\nCREATE POLICY feed_read ON profiles FOR SELECT\nUSING (user_id != <span class="bg-red-500/20 text-red-300 px-1 py-0.5 rounded font-bold">auth.uid()</span>);`
          }
        </div>
      </div>
    `;

    root.querySelector('#mode-naive-btn')?.addEventListener('click', () => {
      mode = 'naive';
      if (window.soundEngine) window.soundEngine.playClick(600, 0.03);
      render();
    });

    root.querySelector('#mode-opt-btn')?.addEventListener('click', () => {
      mode = 'optimized';
      if (window.soundEngine) window.soundEngine.playSuccess();
      render();
    });
  }

  render();
}

/**
 * 3. Counter-UAS — Edge Multi-Sensor Fusion Latency Breakdown
 */
export function mountCuasSimulation(containerId = 'cuas-telemetry-sim') {
  const root = document.getElementById(containerId);
  if (!root) return;

  let droneVelocity = 28; // m/s

  function render() {
    const yoloTime = 24;
    const vitTime = 38;
    const rfTime = 18;
    const loopDecision = 12;
    const totalLatency = yoloTime + vitTime + rfTime + loopDecision; // 92ms
    const interceptDist = (droneVelocity * (totalLatency / 1000)).toFixed(2); // meters moved during compute
    const confidence = (94.2 - (droneVelocity * 0.05)).toFixed(1);

    root.innerHTML = `
      <div class="space-y-3 font-mono text-xs">
        <div class="flex items-center justify-between pb-2 border-b border-white/[0.08]">
          <span class="text-[#D8CBB3] font-bold">Jetson Xavier Sensor Fusion Pipeline:</span>
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
            92ms &lt; 100ms BUDGET
          </span>
        </div>

        <!-- Sensor Timings Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
          <div class="p-2.5 rounded-lg bg-[#171715] border border-white/5">
            <div class="text-[10px] text-[#9E9889]">RGB YOLOv8</div>
            <div class="text-sm font-bold text-white mt-0.5">${yoloTime} ms</div>
            <div class="text-[9px] text-[#D8CBB3]">Frame Buffer</div>
          </div>
          <div class="p-2.5 rounded-lg bg-[#171715] border border-white/5">
            <div class="text-[10px] text-[#9E9889]">Thermal ViT</div>
            <div class="text-sm font-bold text-white mt-0.5">${vitTime} ms</div>
            <div class="text-[9px] text-[#D8CBB3]">TensorRT Core</div>
          </div>
          <div class="p-2.5 rounded-lg bg-[#171715] border border-white/5">
            <div class="text-[10px] text-[#9E9889]">RF Triangulation</div>
            <div class="text-sm font-bold text-white mt-0.5">${rfTime} ms</div>
            <div class="text-[9px] text-[#D8CBB3]">SDR Spectrum</div>
          </div>
          <div class="p-2.5 rounded-lg bg-[#171715] border border-white/5">
            <div class="text-[10px] text-[#9E9889]">Interception Lock</div>
            <div class="text-sm font-bold text-white mt-0.5">${loopDecision} ms</div>
            <div class="text-[9px] text-emerald-400">Lock Confirmed</div>
          </div>
        </div>

        <!-- Target Velocity Slider -->
        <div class="p-3 rounded-xl bg-[#171715] border border-white/[0.06] space-y-2">
          <div class="flex items-center justify-between text-[11px]">
            <span class="text-[#9E9889]">Target UAV Velocity: <strong class="text-white">${droneVelocity} m/s</strong> (~${Math.round(droneVelocity * 3.6)} km/h)</span>
            <span class="text-[#D8CBB3] font-bold">mAP: ${confidence}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="60"
            value="${droneVelocity}"
            id="uav-velocity-slider"
            class="w-full accent-[#D8CBB3] bg-[#1E1E1C] cursor-pointer"
          />
          <div class="flex items-center justify-between text-[10px] text-[#9E9889] pt-1">
            <span>UAV Displacement in 92ms Compute: <strong class="text-white">${interceptDist} m</strong></span>
            <span class="text-emerald-400">Neutralization Feasible</span>
          </div>
        </div>
      </div>
    `;

    root.querySelector('#uav-velocity-slider')?.addEventListener('input', (e) => {
      droneVelocity = Number(e.target.value);
      render();
    });
  }

  render();
}

// Global hooks
if (typeof window !== 'undefined') {
  window.mountLedgerSimulation = mountLedgerSimulation;
  window.mountInitPlanSimulation = mountInitPlanSimulation;
  window.mountCuasSimulation = mountCuasSimulation;
}
