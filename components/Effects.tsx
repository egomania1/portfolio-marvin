"use client";

import Lenis from "lenis";
import { useEffect, useRef, useState, type ReactNode } from "react";

const reduit = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Détecte l'entrée dans l'écran. `armed` passe à true après le montage : sans JavaScript, le contenu reste visible. */
function useVisible<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [armed, setArmed] = useState(false);
  const [vu, setVu] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduit()) return;
    setArmed(true);
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setVu(true), io.disconnect()), { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, armed, vu };
}

/** Défilement fluide (Lenis), désactivé si l'utilisateur préfère moins de mouvement. */
export function SmoothScroll() {
  useEffect(() => {
    if (reduit()) return;
    const lenis = new Lenis({ duration: 1, anchors: { offset: -72 } });
    let raf = requestAnimationFrame(function loop(t) {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    });
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return null;
}

/** Apparition discrète d'un bloc au scroll. */
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { ref, armed, vu } = useVisible<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${armed ? "is-armed" : ""} ${vu ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

/** Titre dont les mots remontent un à un sous un masque (style éditorial). */
export function RevealText({ text, delay = 0 }: { text: string; delay?: number }) {
  const { ref, armed, vu } = useVisible<HTMLSpanElement>();
  const mots = text.split(" ");
  return (
    <span ref={ref} className={`rt ${armed ? "is-armed" : ""} ${vu ? "is-visible" : ""}`} aria-label={text}>
      {mots.map((m, i) => (
        <span key={i} aria-hidden="true">
          <span className="rt__mask">
            <span className="rt__word" style={{ transitionDelay: `${delay + i * 70}ms` }}>{m}</span>
          </span>
          {i < mots.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
