"use client";

import { useEffect, useRef } from "react";
import { asset } from "@/lib/asset";

/**
 * Vidéo en boucle, muette, sans contrôles (type « animation »).
 * Si l'utilisateur préfère moins de mouvement, elle reste sur la première image.
 */
export default function VideoLoop({ src, label }: { src: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) ref.current?.pause();
  }, []);

  return (
    <video
      ref={ref}
      className="video-loop"
      src={asset(src)}
      aria-label={label}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
}
