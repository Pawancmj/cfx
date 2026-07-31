"use client";

import { MotionValue, useTransform, motion } from "framer-motion";

// Simple deterministic PRNG — identical on server and client (integer LCG)
function seeded(i: number): number {
  i = (i * 1664525 + 1013904223) & 0xffffffff;
  return (i >>> 0) / 4294967296;
}

const nodes = [
  { x: 12, y: 20 }, { x: 28, y: 55 }, { x: 48, y: 25 }, { x: 52, y: 68 },
  { x: 72, y: 35 }, { x: 80, y: 62 }, { x: 88, y: 22 }, { x: 38, y: 42 },
  { x: 62, y: 52 }, { x: 18, y: 78 }, { x: 68, y: 18 }, { x: 42, y: 78 },
  { x: 92, y: 50 }, { x: 22, y: 42 }, { x: 58, y: 85 }, { x: 35, y: 15 },
  { x: 78, y: 78 }, { x: 5,  y: 50 }, { x: 95, y: 75 }, { x: 50, y: 50 },
];

const connections: [number, number][] = [
  [0,1],[0,7],[0,13],[1,3],[1,7],[1,9],[2,4],[2,7],[2,8],[2,15],
  [3,5],[3,9],[3,11],[4,5],[4,8],[4,14],[5,6],[5,16],[6,12],[7,8],
  [7,13],[8,10],[8,14],[9,11],[9,14],[10,12],[11,16],[12,6],[12,18],
  [13,15],[14,16],[14,19],[15,0],[16,18],[17,0],[17,13],[18,12],[19,2],[19,8],
];

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: seeded(i) * 100,
  y: seeded(i + 100) * 100,
  size: 0.8 + seeded(i + 200) * 2,
  duration: 20 + seeded(i + 300) * 15,
  delay: seeded(i + 400) * 10,
  xDrift: (seeded(i + 500) - 0.5) * 8,
  yDrift: (seeded(i + 501) - 0.5) * 8,
  opacity: 0.15 + seeded(i + 600) * 0.25,
}));

const streaks = [
  { angle: 35, delay: 0, duration: 18 },
  { angle: -25, delay: 6, duration: 22 },
  { angle: 45, delay: 12, duration: 16 },
  { angle: -40, delay: 18, duration: 20 },
];

// --- Component ---

export default function TechBackground({
  mouseX,
  mouseY,
  reduced,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  reduced: boolean;
}) {
  const deepX = useTransform(mouseX, [0, 1], [-3, 3]);
  const deepY = useTransform(mouseY, [0, 1], [-3, 3]);
  const midX = useTransform(mouseX, [0, 1], [-8, 8]);
  const midY = useTransform(mouseY, [0, 1], [-8, 8]);
  const surfX = useTransform(mouseX, [0, 1], [-14, 14]);
  const surfY = useTransform(mouseY, [0, 1], [-14, 14]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* ── LAYER 1: Deep ambient glows ── */}
      <motion.div
        className="absolute inset-0"
        style={reduced ? {} : { x: deepX, y: deepY }}
      >
        <motion.div
          className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[min(80vw,800px)] h-[min(80vw,800px)] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(109,40,217,0.05) 0%, transparent 70%)" }}
          animate={reduced ? {} : { scale: [1, 1.08, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[min(60vw,500px)] h-[min(60vw,500px)] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(167,139,250,0.04) 0%, transparent 70%)" }}
          animate={reduced ? {} : { scale: [1, 1.12, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-2/3 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[min(50vw,400px)] h-[min(50vw,400px)] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.03) 0%, transparent 70%)" }}
          animate={reduced ? {} : { scale: [1, 1.15, 1], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
      </motion.div>

      {/* ── LAYER 2: Mid-depth network graph ── */}
      <motion.div
        className="absolute inset-0"
        style={reduced ? {} : { x: midX, y: midY }}
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07]"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <filter id="tb-blur"><feGaussianBlur stdDeviation="0.3" /></filter>
          </defs>
          <g filter="url(#tb-blur)">
            {connections.map(([from, to]) => (
              <motion.line
                key={`${from}-${to}`}
                x1={nodes[from].x} y1={nodes[from].y}
                x2={nodes[to].x} y2={nodes[to].y}
                stroke="#6d28d9" strokeWidth={0.2}
                animate={reduced ? {} : { opacity: [0.08, 0.4, 0.08] }}
                transition={{
                  duration: 6 + ((from + to) % 6),
                  repeat: Infinity, ease: "easeInOut",
                  delay: (from * 0.3) % 4,
                }}
              />
            ))}
            {nodes.map((node, i) => (
              <motion.circle
                key={i} r={0.9} fill="#a78bfa"
                animate={reduced ? {} : {
                  cx: [node.x, node.x + 1.8, node.x - 1, node.x],
                  cy: [node.y, node.y - 1.3, node.y + 1.2, node.y],
                }}
                transition={{
                  duration: 12 + (i % 6) * 2,
                  repeat: Infinity, ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </g>
        </svg>

        {/* Second network layer — rotated / offset */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {nodes.slice(0, 12).map((node, i) => (
            <motion.circle
              key={`alt-${i}`} r={0.6} fill="#7c3aed"
              animate={reduced ? {} : {
                cx: [node.x + 5, node.x + 3, node.x + 7, node.x + 5],
                cy: [node.y + 3, node.y + 5, node.y + 2, node.y + 3],
              }}
              transition={{
                duration: 18 + i * 3,
                repeat: Infinity, ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* ── LAYER 3: Light streaks ── */}
      <motion.div
        className="absolute inset-0"
        style={reduced ? {} : { x: midX, y: midY }}
      >
        {!reduced && streaks.map((s, i) => (
          <motion.div
            key={i}
            className="absolute w-[min(50vw,300px)] h-[1px]"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(167,139,250,0.18) 50%, transparent 100%)",
              transformOrigin: "center",
              rotate: `${s.angle}deg`,
            }}
            animate={{
              x: ["-30vw", "130vw"],
              y: ["-20vh", "120vh"],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              ease: "linear",
              delay: s.delay,
            }}
          />
        ))}
      </motion.div>

      {/* ── LAYER 4: Surface particles ── */}
      <motion.div
        className="absolute inset-0"
        style={reduced ? {} : { x: surfX, y: surfY }}
      >
        {!reduced && particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              width: p.size, height: p.size,
              left: `${p.x}%`, top: `${p.y}%`,
              background: `rgba(167, 139, 250, ${p.opacity})`,
              boxShadow: `0 0 ${p.size * 2}px rgba(109, 40, 217, ${p.opacity * 0.5})`,
            }}
            animate={{
              x: [0, p.xDrift, -p.xDrift * 0.5, 0],
              y: [0, p.yDrift, -p.yDrift * 0.5, 0],
              opacity: [0, p.opacity, p.opacity * 0.3, 0],
              scale: [1, 1.3, 0.8, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </motion.div>

      {/* ── Depth gradient masks ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/50 pointer-events-none" />
    </div>
  );
}
