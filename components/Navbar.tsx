"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profil } from "@/data/profil";
import ThemeToggle from "./ThemeToggle";

/** Sommaire du site. Les ancres pointent vers l'accueil pour fonctionner depuis toutes les pages. */
const liens = [
  { href: "/#accueil", label: "Accueil" },
  { href: "/#apropos", label: "À propos" },
  { href: "/#competences", label: "Compétences" },
  { href: "/#projets", label: "Projets" },
  { href: "/#experiences", label: "Expériences" },
  { href: "/#bts-sio", label: "BTS SIO" },
  { href: "/tableau-synthese/", label: "Tableau de synthèse" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [ouvert, setOuvert] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Échap ferme le sommaire ; le scroll de la page est bloqué tant qu'il est ouvert
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOuvert(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    document.body.style.overflow = ouvert ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ouvert]);

  const fermer = () => setOuvert(false);

  return (
    <header className={`navbar ${scroll || ouvert ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <Link href="/" className="navbar__logo" onClick={fermer}>
          {profil.nom.split(" ")[0]}<span aria-hidden="true">.</span>
        </Link>
        <div className="navbar__actions">
          <ThemeToggle />
        <button
          className="navbar__toggle"
          aria-expanded={ouvert}
          aria-controls="sommaire"
          onClick={() => setOuvert(!ouvert)}
        >
          {ouvert ? "Fermer" : "Menu"}
          <span className="navbar__icon" aria-hidden="true"><i /><i /></span>
        </button>
        </div>
      </div>

      <nav id="sommaire" className={`sommaire ${ouvert ? "is-open" : ""}`} aria-label="Navigation principale">
        <ol className="sommaire__list container">
          {liens.map((l, i) => (
            <li key={l.href} style={{ transitionDelay: ouvert ? `${80 + i * 35}ms` : "0ms" }}>
              <Link href={l.href} onClick={fermer} tabIndex={ouvert ? 0 : -1}>
                <span className="label">{String(i + 1).padStart(2, "0")}</span>
                <span className="sommaire__txt">{l.label}</span>
                <span className="sommaire__arrow" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
}
