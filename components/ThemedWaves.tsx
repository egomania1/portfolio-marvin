"use client";

import { useEffect, useState } from "react";
import PatternWaves from "./PatternWaves";
import type { Theme } from "./ThemeToggle";

/** Réglages du fond animé pour chaque thème. */
const REGLAGES: Record<Theme, { color: string; backgroundColor: string; opacity: number; contrast: number; depth: number }> = {
  soleil: { color: "#ff6a00", backgroundColor: "#ffeab8", opacity: 1, contrast: 1.9, depth: 1.4 },
  blanc: { color: "#1a1a1a", backgroundColor: "#f4f4f2", opacity: 0.5, contrast: 1.7, depth: 1.3 },
  noir: { color: "#ffffff", backgroundColor: "#0a0a0a", opacity: 0.75, contrast: 1.6, depth: 1.3 },
};

/** Fond PatternWaves qui suit le thème choisi (lit data-theme sur <html>). */
export default function ThemedWaves() {
  const [theme, setTheme] = useState<Theme>("soleil");

  useEffect(() => {
    const lire = () => {
      const t = document.documentElement.dataset.theme as Theme | undefined;
      if (t && t in REGLAGES) setTheme(t);
    };
    lire();
    const mo = new MutationObserver(lire);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => mo.disconnect();
  }, []);

  const r = REGLAGES[theme];
  return (
    <PatternWaves
      preset="silk"
      color={r.color}
      backgroundColor={r.backgroundColor}
      fade="none"
      pattern="dot"
      wave="silk"
      spacing={10}
      markSize={1}
      depth={r.depth}
      contrast={r.contrast}
      shine={1.3}
      opacity={r.opacity}
      speed={0.5}
      scale={1.15}
      intro={false}
      interactive
      cursorSize={90}
      cursorStrength={0.9}
    />
  );
}
