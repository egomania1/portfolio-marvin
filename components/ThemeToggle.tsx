"use client";

import { useEffect, useState } from "react";

export const THEMES = ["soleil", "blanc", "noir"] as const;
export type Theme = (typeof THEMES)[number];

const LABELS: Record<Theme, string> = { soleil: "Soleil", blanc: "Blanc", noir: "Noir" };

/** Bouton qui fait tourner les thèmes. Le thème est posé sur <html data-theme> et mémorisé. */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("soleil");

  useEffect(() => {
    const actuel = document.documentElement.dataset.theme as Theme | undefined;
    if (actuel && THEMES.includes(actuel)) setTheme(actuel);
  }, []);

  const suivant = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length];

  const changer = () => {
    document.documentElement.dataset.theme = suivant;
    try {
      localStorage.setItem("theme", suivant);
    } catch {}
    setTheme(suivant);
  };

  return (
    <button className="theme-toggle" onClick={changer} aria-label={`Thème ${LABELS[theme]} — passer au thème ${LABELS[suivant]}`}>
      <span className="theme-toggle__dot" aria-hidden="true" />
      {LABELS[theme]}
    </button>
  );
}
