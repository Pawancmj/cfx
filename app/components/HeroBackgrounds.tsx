"use client";

import VideoBackground from "./VideoBackground";

/* ==========================================================
   Slide 1 — DevWorkspace: Custom Software Development
   Abstract network/energy loop — blue/purple tech energy
   ========================================================== */
export function DevWorkspace({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <VideoBackground
        active={active}
        src="https://cdn.pixabay.com/video/2017/11/02/12716-241674181_large.mp4"
      />
    </div>
  );
}

/* ==========================================================
   Slide 2 — ForensicsScan: Digital Forensics
   Dark abstract particles — investigative atmosphere
   ========================================================== */
export function ForensicsScan({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <VideoBackground
        active={active}
        src="https://cdn.pixabay.com/video/2020/04/21/36784-412873690_large.mp4"
      />
    </div>
  );
}

/* ==========================================================
   Slide 3 — CyberSOC: Cybersecurity Solutions
   Network/geometric/connectivity loop
   ========================================================== */
export function CyberSOC({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <VideoBackground
        active={active}
        src="https://cdn.pixabay.com/video/2019/09/19/27018-361798566_large.mp4"
      />
    </div>
  );
}

/* ==========================================================
   Slide 4 — DataAnnotation: Intelligent Data Annotation
   Abstract futuristic technology — blue/digital
   ========================================================== */
export function DataAnnotation({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <VideoBackground
        active={active}
        src="https://cdn.pixabay.com/video/2019/09/26/27239-362518579_large.mp4"
      />
    </div>
  );
}

/* ==========================================================
   Slide 5 — MarketingGrowth: Digital Marketing
   Abstract chain/technology — growth and connections
   ========================================================== */
export function MarketingGrowth({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <VideoBackground
        active={active}
        src="https://cdn.pixabay.com/video/2019/07/20/25380-350507864_large.mp4"
      />
    </div>
  );
}

/* ==========================================================
   Slide 6 — TrainingAcademy: Training & Internship
   Abstract computer/calculations — learning atmosphere
   ========================================================== */
export function TrainingAcademy({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <VideoBackground
        active={active}
        src="https://cdn.pixabay.com/video/2020/11/20/56888-482029921_large.mp4"
      />
    </div>
  );
}