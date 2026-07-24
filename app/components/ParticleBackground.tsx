"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0"
      options={{
        fullScreen: { enable: false, zIndex: 0 },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: false,
            },
            onClick: {
              enable: false,
            },
          },
        },
        particles: {
          color: {
            value: "#6d28d9",
          },
          links: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 0.15,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 18,
          },
          opacity: {
            value: 0.12,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.5, max: 2 },
          },
        },
        detectRetina: false,
      }}
    />
  );
}
