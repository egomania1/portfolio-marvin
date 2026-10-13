"use client";

import { useEffect, useState } from "react";

const TAILLE = 5; // grille de points TAILLE × TAILLE
const COLS = 10; // cellules de la transition de sortie
const ROWS = 6;
const DUREE = 1500; // ms d'affichage avant la sortie
const SORTIE = 1000; // ms de l'animation de sortie

/**
 * Écran de chargement : grille de points, puis disparition par cellules.
 * Affiché une seule fois par session, ignoré si l'utilisateur préfère moins
 * de mouvement. Un repli CSS le masque même sans JavaScript.
 */
export default function Loader() {
  const [etat, setEtat] = useState<"visible" | "sortie" | "fini">("visible");

  useEffect(() => {
    let deja = false;
    try {
      deja = sessionStorage.getItem("loader-vu") === "1";
    } catch {}
    const reduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (deja || reduit) {
      setEtat("fini");
      return;
    }
    try {
      sessionStorage.setItem("loader-vu", "1");
    } catch {}
    const t1 = setTimeout(() => setEtat("sortie"), DUREE);
    const t2 = setTimeout(() => setEtat("fini"), DUREE + SORTIE);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Pas de scroll tant que le loader est là
  useEffect(() => {
    document.body.style.overflow = etat === "fini" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [etat]);

  if (etat === "fini") return null;

  return (
    <div className={`loader ${etat === "sortie" ? "is-leaving" : ""}`} role="status" aria-live="polite">
      {/* Cellules qui se retirent dans un ordre pseudo-aléatoire */}
      <div className="loader__cells" aria-hidden="true">
        {Array.from({ length: COLS * ROWS }, (_, i) => (
          <i key={i} style={{ transitionDelay: `${((i * 37) % 17) * 35}ms` }} />
        ))}
      </div>
      <div className="loader__center">
        <div className="loader__grid" aria-hidden="true">
          {Array.from({ length: TAILLE * TAILLE }, (_, i) => {
            const x = i % TAILLE;
            const y = Math.floor(i / TAILLE);
            return <i key={i} style={{ animationDelay: `${(x + y) * 110}ms` }} />;
          })}
        </div>
        <p className="loader__label">Chargement</p>
      </div>
    </div>
  );
}
