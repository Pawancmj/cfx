"use client";

import { useState, useCallback } from "react";

interface VideoBackgroundProps {
  src: string;
  active: boolean;
}

export default function VideoBackground({ src, active }: VideoBackgroundProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  const handleCanPlay = useCallback(() => setLoaded(true), []);
  const handleError = useCallback(() => setErrored(true), []);

  if (errored) {
    return <div className="absolute inset-0 bg-black" />;
  }

  return (
    <>
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${active && loaded ? "opacity-100" : "opacity-0"}`}
        autoPlay
        muted
        playsInline
        loop
        preload="metadata"
        onCanPlay={handleCanPlay}
        onError={handleError}
        src={src}
      />
      {(!active || !loaded) && <div className="absolute inset-0 bg-black" />}
    </>
  );
}