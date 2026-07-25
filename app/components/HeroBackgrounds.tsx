"use client";

import React from "react";
import { motion } from "framer-motion";

/* ==========================================================
   Slide 1 — DevWorkspace: Custom Software Development
   Flowing code lines + abstract gradient ribbons.
   Horizontal lines slide at staggered speeds; soft ribbons
   sweep diagonally. No dots, no grid, no geometric shapes.
   ========================================================== */
export function DevWorkspace({ active, reduced }: { active: boolean; reduced: boolean }) {

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          className="absolute h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-indigo-400/25 to-transparent"
          style={{
            width: `${40 + i * 12}%`,
            left: `${5 + i * 3}%`,
            top: `${15 + i * 12}%`,
            willChange: "transform",
          }}
          initial={false}
          animate={active && !reduced ? { x: [`-${30 + i * 8}%`, `${30 + i * 8}%`] } : { x: 0 }}
          transition={{ duration: 7 + i * 2, repeat: Infinity, ease: "linear", delay: i * 0.6 }}
        />
      ))}
      <motion.div
        className="absolute -top-[10%] -right-[10%] w-[50%] h-[60%] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle at 30% 50%, rgba(99,102,241,0.5) 0%, transparent 70%)",
          willChange: "transform",
        }}
        initial={false}
        animate={active && !reduced ? { x: [0, 30, 0], y: [0, -20, 0] } : { x: 0, y: 0 }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[50%] rounded-full opacity-[0.03]"
        style={{
          background: "radial-gradient(circle at 70% 50%, rgba(129,140,248,0.4) 0%, transparent 70%)",
          willChange: "transform",
        }}
        initial={false}
        animate={active && !reduced ? { x: [0, -20, 0], y: [0, 15, 0] } : { x: 0, y: 0 }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* ==========================================================
   Slide 2 — ForensicsScan: Digital Forensics
   Hexagonal forensic grid + scanning beam + evidence markers.
   SVG hex grid, a bright horizontal scan line sweeps top-down,
   and evidence markers appear along the scan path.
   No circles, no concentric rings, no dot grid.
   ========================================================== */
export function ForensicsScan({ active, reduced }: { active: boolean; reduced: boolean }) {

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <pattern id="hex-grid" width="60" height="104" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
            <path d="M30 0 L60 17 L60 52 L30 69 L0 52 L0 17 Z" fill="none" stroke="#22d3ee" strokeWidth="0.3" opacity="0.5" />
            <path d="M30 104 L60 87 L60 52 L30 69 L0 52 L0 87 Z" fill="none" stroke="#22d3ee" strokeWidth="0.3" opacity="0.3" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#hex-grid)" />
      </svg>
      <motion.div
        className="absolute left-0 right-0 h-[2px] z-10"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(34,211,238,0.4) 15%, rgba(167,139,250,0.5) 50%, rgba(34,211,238,0.4) 85%, transparent 100%)",
          willChange: "transform",
          boxShadow: "0 0 30px rgba(34,211,238,0.15)",
        }}
        initial={false}
        animate={active && !reduced ? { top: ["-2%", "102%"] } : { top: "-2%" }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
      />
      {active && !reduced && [0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/50 rounded-full"
          style={{ left: `${18 + i * 30}%`, willChange: "transform" }}
          initial={{ top: "-2%", opacity: 1 }}
          animate={{ top: ["-2%", "102%"], opacity: [1, 0.6, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 0.3 + i * 0.4 }}
        />
      ))}
      <div className="absolute left-[5%] top-[22%] opacity-[0.06]">
        <svg viewBox="0 0 140 80" width="140" aria-hidden="true">
          <rect x="0" y="0" width="140" height="80" rx="3" stroke="#22d3ee" strokeWidth="0.4" fill="none" />
          <text x="6" y="12" fill="#22d3ee" fontSize="5" fontFamily="monospace" opacity="0.5">EVIDENCE_SCAN</text>
          {[20, 35, 50, 65].map((y, j) => (
            <line key={j} x1="6" y1={y} x2="134" y2={y} stroke="#22d3ee" strokeWidth="0.2" opacity={0.3 - j * 0.05} />
          ))}
        </svg>
      </div>
    </div>
  );
}

/* ==========================================================
   Slide 3 — CyberSOC: Cybersecurity Solutions
   Encrypted diamond mesh + shield pulse + threat nodes.
   Diamond/lozenge mesh pattern, shield outline center-left,
   pulsing red/purple threat markers. No simple circle nodes.
   ========================================================== */
export function CyberSOC({ active, reduced }: { active: boolean; reduced: boolean }) {

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <pattern id="diamond-mesh" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="#a78bfa" strokeWidth="0.2" opacity="0.4" />
            <path d="M40 0 L40 80 M0 40 L80 40" stroke="#a78bfa" strokeWidth="0.1" opacity="0.2" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#diamond-mesh)" />
      </svg>
      <motion.div
        className="absolute top-[35%] left-[6%]"
        initial={false}
        animate={active && !reduced ? { opacity: [0.06, 0.14, 0.06] } : { opacity: 0.06 }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="130" height="150" viewBox="0 0 130 150" fill="none" aria-hidden="true">
          <path d="M65 5 L125 35 L125 95 C125 145 95 145 65 150 C35 145 5 145 5 95 L5 35 Z" stroke="#a78bfa" strokeWidth="0.5" fill="none" opacity="0.4" />
          <path d="M65 15 L115 40 L115 95 C115 130 90 132 65 138 C40 132 15 130 15 95 L15 40 Z" stroke="#a78bfa" strokeWidth="0.3" fill="none" opacity="0.25" />
          <rect x="53" y="65" width="24" height="18" rx="3" stroke="#a78bfa" strokeWidth="0.4" fill="none" opacity="0.3" />
          <path d="M58 65 L58 58 C58 54 61 52 65 52 C69 52 72 54 72 58 L72 65" stroke="#a78bfa" strokeWidth="0.4" fill="none" opacity="0.3" />
          {active && !reduced && [0, 1, 2].map((j) => (
            <circle key={j} r="2" fill="#ef4444" opacity="0.4">
              <animateMotion dur={5 + j * 2} repeatCount="indefinite" path={`M65,75 C${90 + j * 8},${60 - j * 6} ${100 + j * 8},${40 - j * 4} ${65 + j * 4},${28 - j * 3} C${40 - j * 8},${40 - j * 4} ${40 - j * 8},${60 - j * 6} 65,75`} />
            </circle>
          ))}
        </svg>
      </motion.div>
      <motion.div
        className="absolute top-[15%] right-[6%]"
        initial={false}
        animate={active && !reduced ? { y: [-3, 3, -3] } : { y: 0 }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 160 100" width="160" aria-hidden="true" className="opacity-[0.06]">
          <rect x="0" y="0" width="72" height="44" rx="3" stroke="#a78bfa" strokeWidth="0.3" fill="none" />
          <rect x="0" y="0" width="72" height="8" rx="3" fill="#a78bfa" fillOpacity="0.03" />
          <text x="3" y="6" fill="#a78bfa" fontSize="3" fontFamily="monospace" opacity="0.5">SOC-01</text>
          <rect x="88" y="0" width="72" height="44" rx="3" stroke="#a78bfa" strokeWidth="0.3" fill="none" />
          <rect x="88" y="0" width="72" height="8" rx="3" fill="#a78bfa" fillOpacity="0.03" />
          <text x="91" y="6" fill="#a78bfa" fontSize="3" fontFamily="monospace" opacity="0.5">THREAT</text>
          <rect x="0" y="52" width="72" height="48" rx="3" stroke="#6d28d9" strokeWidth="0.3" fill="none" />
          <rect x="88" y="52" width="72" height="48" rx="3" stroke="#6d28d9" strokeWidth="0.3" fill="none" />
        </svg>
      </motion.div>
      {active && !reduced && (
        <motion.div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(109,40,217,0.2) 50%, transparent 100%)",
            height: "120%",
            willChange: "transform",
          }}
          animate={{ top: ["-10%", "-50%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      )}
    </div>
  );
}

/* ==========================================================
   Slide 4 — DataAnnotation: Intelligent Data Annotation
   AI neural network layers + data clusters + connections.
   Three vertical columns of varying node counts connected by
   horizontal lines — like a neural network architecture diagram.
   No flowing dots on curved paths, no bounding boxes.
   ========================================================== */
export function DataAnnotation({ active, reduced }: { active: boolean; reduced: boolean }) {

  const layers = [
    { x: 8, nodes: 6 },
    { x: 38, nodes: 4 },
    { x: 68, nodes: 5 },
  ];

  const nodePositions: { x: number; y: number; layer: number }[] = [];
  layers.forEach((layer, li) => {
    for (let i = 0; i < layer.nodes; i++) {
      const spacing = 100 / (layer.nodes + 1);
      nodePositions.push({ x: layer.x, y: spacing * (i + 1), layer: li });
    }
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {nodePositions.map((n, i) => (
        <motion.div
          key={i}
          className="absolute w-[3px] h-[3px] rounded-full"
          style={{
            left: `${n.x}%`,
            top: `${n.y}%`,
            background: n.layer % 2 === 0 ? "#818cf8" : "#a78bfa",
            willChange: "transform, opacity",
          }}
          initial={false}
          animate={active && !reduced ? { scale: [0.5, 1.2, 0.5], opacity: [0.15, 0.5, 0.15] } : { scale: 1, opacity: 0.2 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
        />
      ))}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {layers.slice(0, -1).map((layer, li) => {
          const next = layers[li + 1];
          const connections: React.ReactNode[] = [];
          for (let i = 0; i < layer.nodes; i++) {
            for (let j = 0; j < next.nodes; j++) {
              const y1 = (100 / (layer.nodes + 1)) * (i + 1);
              const y2 = (100 / (next.nodes + 1)) * (j + 1);
              connections.push(
                <line key={`${li}-${i}-${j}`} x1={layer.x} y1={y1} x2={next.x} y2={y2}
                  stroke="#a78bfa" strokeWidth="0.15" opacity="0.15" />
              );
            }
          }
          return connections;
        })}
      </svg>
      {active && !reduced && (
        <motion.div
          className="absolute w-[100px] h-[70px] border border-indigo-500/10 rounded-lg opacity-[0.05]"
          style={{ left: "50%", top: "20%", willChange: "transform" }}
          animate={{ scale: [1, 1.03, 1], rotate: [-1, 1, -1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}

/* ==========================================================
   Slide 5 — MarketingGrowth: Digital Marketing
   Analytics curves + growth waves + dashboard elements.
   Multiple SVG sine waves slide horizontally at different
   speeds. Small dashboard widget with bar chart.
   No tags, no floating keywords.
   ========================================================== */
export function MarketingGrowth({ active, reduced }: { active: boolean; reduced: boolean }) {

  const waves = [
    { amplitude: 20, frequency: 0.004, phase: 0, color: "#f59e0b", y: 55, speed: 20 },
    { amplitude: 14, frequency: 0.006, phase: 1.5, color: "#a78bfa", y: 40, speed: 15 },
    { amplitude: 10, frequency: 0.005, phase: 3, color: "#22c55e", y: 70, speed: 25 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute bottom-[18%] right-[5%] opacity-[0.06]"
        initial={false}
        animate={active && !reduced ? { opacity: [0.04, 0.1, 0.04] } : { opacity: 0.05 }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 120 80" width="120" aria-hidden="true">
          <rect x="0" y="0" width="120" height="80" rx="3" stroke="#f59e0b" strokeWidth="0.3" fill="none" />
          <rect x="4" y="4" width="112" height="5" rx="2" fill="#f59e0b" fillOpacity="0.06" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x={10 + i * 22} y={55 - i * 7} width="12" height={15 + i * 7} rx="1.5"
              fill={i % 2 === 0 ? "#f59e0b" : "#a78bfa"} opacity={0.15 - i * 0.02}>
              {active && !reduced && <animate attributeName="height" values={`${15 + i * 7};${22 + i * 9};${15 + i * 7}`} dur={2.5 + i * 0.3} repeatCount="indefinite" />}
            </rect>
          ))}
          <polyline points="16,58 38,52 60,47 82,43 104,38" stroke="#f59e0b" strokeWidth="0.5" fill="none" opacity="0.25" />
        </svg>
      </motion.div>
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {waves.map((w, i) => (
          <g key={i}>
            {active && !reduced ? (
              <path d={generateWavePath(1200, w.y, w.amplitude, w.frequency, w.phase, 0)}
                stroke={w.color} strokeWidth="0.4" fill="none" opacity="0.2">
                <animate attributeName="d"
                  values={`${generateWavePath(1200, w.y, w.amplitude, w.frequency, w.phase, 0)};${generateWavePath(1200, w.y, w.amplitude, w.frequency, w.phase, 20)};${generateWavePath(1200, w.y, w.amplitude, w.frequency, w.phase, 40)}`}
                  dur={w.speed} repeatCount="indefinite" />
              </path>
            ) : (
              <path d={generateWavePath(1200, w.y, w.amplitude, w.frequency, w.phase, 0)}
                stroke={w.color} strokeWidth="0.4" fill="none" opacity="0.1" />
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}

function generateWavePath(width: number, baseY: number, amplitude: number, freq: number, phase: number, offset: number): string {
  let d = "";
  for (let x = 0; x <= width; x += 20) {
    const y = baseY + amplitude * Math.sin((x + offset) * freq + phase);
    d += x === 0 ? `M${x},${y.toFixed(4)}` : ` L${x},${y.toFixed(4)}`;
  }
  return d;
}

/* ==========================================================
   Slide 6 — TrainingAcademy: Training & Internship
   Geometric knowledge network + learning pathways.
   Triangles, diamonds, and hexagons connected by faint
   lines form a knowledge graph. Stair-step pathway.
   No cards, no progress bars, no rectangles.
   ========================================================== */
export function TrainingAcademy({ active, reduced }: { active: boolean; reduced: boolean }) {

  const shapes = [
    { type: "triangle", x: 10, y: 30, size: 30, delay: 0 },
    { type: "hexagon", x: 65, y: 18, size: 25, delay: 0.6 },
    { type: "diamond", x: 45, y: 55, size: 22, delay: 1.2 },
    { type: "triangle", x: 80, y: 60, size: 28, delay: 0.3 },
    { type: "hexagon", x: 25, y: 70, size: 20, delay: 0.9 },
  ];

  const connections = [
    [10, 30, 45, 55],
    [45, 55, 65, 18],
    [45, 55, 80, 60],
    [65, 18, 80, 60],
    [10, 30, 25, 70],
    [25, 70, 45, 55],
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full opacity-[0.025]" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {connections.map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#a78bfa" strokeWidth="0.15" opacity="0.25" />
        ))}
      </svg>
      {shapes.map((shape, i) => {
          const f2 = (n: number) => n.toFixed(2);
          const paths: Record<string, string> = {
            triangle: `M${shape.size},0 L${f2(shape.size * 2)},${f2(shape.size * 1.73)} L0,${f2(shape.size * 1.73)} Z`,
            hexagon: `M${f2(shape.size * 0.5)},0 L${f2(shape.size * 1.5)},0 L${f2(shape.size * 2)},${f2(shape.size * 0.87)} L${f2(shape.size * 1.5)},${f2(shape.size * 1.73)} L${f2(shape.size * 0.5)},${f2(shape.size * 1.73)} L0,${f2(shape.size * 0.87)} Z`,
            diamond: `M${shape.size},0 L${shape.size * 2},${shape.size} L${shape.size},${shape.size * 2} L0,${shape.size} Z`,
          };
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: shape.size * 2,
              height: shape.type === "diamond" ? shape.size * 2 : Number((shape.size * 1.73).toFixed(2)),
              willChange: "transform, opacity",
            }}
            initial={false}
            animate={active && !reduced
              ? { scale: [1, 1.06, 1], opacity: [0.04, 0.1, 0.04], rotate: [0, 5, 0] }
              : { scale: 1, opacity: 0.04, rotate: 0 }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: shape.delay }}
          >
            <svg viewBox={`0 0 ${shape.size * 2} ${(shape.size * 1.73).toFixed(2)}`} aria-hidden="true" className="w-full h-full">
              <path d={paths[shape.type]} stroke="#a78bfa" strokeWidth="0.3" fill="none" opacity="0.5" />
              <path d={paths[shape.type]} stroke="#a78bfa" strokeWidth="0.15" fill="none" opacity="0.2" transform={`scale(0.70) translate(${(shape.size * 0.43).toFixed(2)}, ${(shape.size * 0.26).toFixed(2)})`} />
            </svg>
          </motion.div>
        );
      })}
      <motion.div
        className="absolute bottom-[10%] left-[55%] opacity-[0.04]"
        initial={false}
        animate={active && !reduced ? { y: [0, -3, 0] } : { y: 0 }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 60 80" width="60" aria-hidden="true">
          {[0, 1, 2, 3].map((s) => (
            <rect key={s} x={s * 14} y={80 - (s + 1) * 16} width="10" height={(s + 1) * 16} rx="1.5"
              stroke="#a78bfa" strokeWidth="0.3" fill="none" opacity={0.3 - s * 0.05} />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}


