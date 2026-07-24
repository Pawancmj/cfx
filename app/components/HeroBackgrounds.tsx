"use client";

import { useRef, useEffect } from "react";

/* =============================================
   Network Lines — flowing fiber-optic data graph
   ============================================= */
export function NetworkLines({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full opacity-[0.1]"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="nl-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6d28d9" stopOpacity="0" />
            <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6d28d9" stopOpacity="0" />
          </linearGradient>
          <filter id="nl-blur">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        <g filter="url(#nl-blur)">
          {/* Horizontal data lines */}
          <line
            x1="5%" y1="25%" x2="95%" y2="25%"
            stroke="url(#nl-glow)" strokeWidth="1.5"
            strokeDasharray="8 16"
            className={active ? "animate-data-flow-1" : "animate-paused"}
          />
          <line
            x1="8%" y1="45%" x2="92%" y2="45%"
            stroke="url(#nl-glow)" strokeWidth="1"
            strokeDasharray="6 20"
            className={active ? "animate-data-flow-2" : "animate-paused"}
          />
          <line
            x1="3%" y1="65%" x2="97%" y2="65%"
            stroke="url(#nl-glow)" strokeWidth="1.2"
            strokeDasharray="10 24"
            className={active ? "animate-data-flow-3" : "animate-paused"}
          />
          <line
            x1="12%" y1="80%" x2="88%" y2="80%"
            stroke="url(#nl-glow)" strokeWidth="0.8"
            strokeDasharray="5 18"
            className={active ? "animate-data-flow-1" : "animate-paused"}
          />

          {/* Diagonal connections */}
          <line
            x1="25%" y1="15%" x2="75%" y2="50%"
            stroke="#a78bfa" strokeWidth="0.6" opacity="0.25"
          />
          <line
            x1="75%" y1="40%" x2="30%" y2="85%"
            stroke="#a78bfa" strokeWidth="0.6" opacity="0.2"
          />
          <line
            x1="15%" y1="35%" x2="85%" y2="70%"
            stroke="#a78bfa" strokeWidth="0.5" opacity="0.15"
          />
          <line
            x1="40%" y1="10%" x2="60%" y2="90%"
            stroke="#a78bfa" strokeWidth="0.4" opacity="0.15"
          />

          {/* Nodes */}
          <circle cx="5%" cy="25%" r="3" fill="#a78bfa" opacity="0.4">
            {active && <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />}
          </circle>
          <circle cx="50%" cy="25%" r="2" fill="#6d28d9" opacity="0.3">
            {active && <animate attributeName="opacity" values="0.15;0.5;0.15" dur="2.5s" repeatCount="indefinite" />}
          </circle>
          <circle cx="75%" cy="40%" r="2.5" fill="#a78bfa" opacity="0.35">
            {active && <animate attributeName="opacity" values="0.2;0.55;0.2" dur="4s" repeatCount="indefinite" />}
          </circle>
          <circle cx="30%" cy="85%" r="3" fill="#6d28d9" opacity="0.25">
            {active && <animate attributeName="opacity" values="0.15;0.45;0.15" dur="3.5s" repeatCount="indefinite" />}
          </circle>
          <circle cx="85%" cy="70%" r="2" fill="#a78bfa" opacity="0.3">
            {active && <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.8s" repeatCount="indefinite" />}
          </circle>
          <circle cx="60%" cy="90%" r="2.5" fill="#6d28d9" opacity="0.2">
            {active && <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3.2s" repeatCount="indefinite" />}
          </circle>
        </g>
      </svg>
    </div>
  );
}


/* =============================================
   DataStream — vertical columns of falling data
   ============================================= */
function DataStreamColumn({
  index,
  count,
  active,
}: {
  index: number;
  count: number;
  active: boolean;
}) {
  const x = `${(index + 1) / (count + 1) * 100}%`;
  const duration = 9 + (index % 3) * 3;
  const delay = (index * 1.2) % 6;

  return (
    <div
      className="absolute top-0 bottom-0 w-px"
      style={{ left: x }}
    >
      <div
        className={`absolute inset-0 ${active ? "animate-data-fall" : ""}`}
        style={{
          animationDuration: `${duration}s`,
          animationDelay: `${-delay}s`,
        }}
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent via-primary/40 to-transparent mx-auto" />
      </div>
      <div
        className={`absolute inset-0 ${active ? "animate-data-fall" : ""}`}
        style={{
          animationDuration: `${duration + 2}s`,
          animationDelay: `${-(delay + 2)}s`,
        }}
      >
        <div className="w-px h-4 bg-gradient-to-b from-transparent via-accent/30 to-transparent mx-auto mt-12" />
      </div>
      <div
        className={`absolute inset-0 ${active ? "animate-data-fall" : ""}`}
        style={{
          animationDuration: `${duration + 4}s`,
          animationDelay: `${-(delay + 4)}s`,
        }}
      >
        <div className="w-px h-6 bg-gradient-to-b from-transparent via-primary/20 to-transparent mx-auto mt-24" />
      </div>
    </div>
  );
}

export function DataStream({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.07]">
      {Array.from({ length: 12 }).map((_, i) => (
        <DataStreamColumn key={i} index={i} count={12} active={active} />
      ))}
    </div>
  );
}


/* =============================================
   GeometricMesh — rotating diamond grid pattern
   ============================================= */
export function GeometricMesh({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className={`absolute inset-0 opacity-[0.06] ${active ? "animate-mesh-spin" : ""}`}
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 48.5%, #a78bfa 49%, #a78bfa 50%, transparent 50.5%),
            linear-gradient(-45deg, transparent 48.5%, #6d28d9 49%, #6d28d9 50%, transparent 50.5%)
          `,
          backgroundSize: "120px 120px",
          backgroundPosition: "0 0",
        }}
      />
      <div
        className={`absolute inset-0 opacity-[0.04] ${active ? "animate-mesh-spin-reverse" : ""}`}
        style={{
          backgroundImage: `
            linear-gradient(135deg, transparent 48.5%, #a78bfa 49%, #a78bfa 50%, transparent 50.5%),
            linear-gradient(-135deg, transparent 48.5%, #6d28d9 49%, #6d28d9 50%, transparent 50.5%)
          `,
          backgroundSize: "180px 180px",
          backgroundPosition: "60px 60px",
        }}
      />
    </div>
  );
}
