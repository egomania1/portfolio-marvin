"use client";

import { useMemo, useState } from "react";
import { referentiel } from "@/data/referentiel";

export type Source = { id: string; nom: string; type: "Projet" | "Stage"; codes: string[] };

const TOUS_LES_BLOCS = [
  { id: "B1", titre: "Support et services" },
  { id: "B2", titre: "Systèmes et réseaux" },
  { id: "B3", titre: "Cybersécurité" },
];
// Seuls les blocs présents dans data/referentiel.ts sont affichés
const BLOCS = TOUS_LES_BLOCS.filter((b) => referentiel.some((r) => r.code.startsWith(b.id)));

/**
 * Compétences du référentiel, regroupées par bloc, avec :
 * - un filtre par bloc,
 * - une jauge de couverture par bloc,
 * - un clic sur un projet / stage pour voir uniquement ce qu'il valide.
 */
export default function BtsMatrix({ sources }: { sources: Source[] }) {
  const [bloc, setBloc] = useState<string>("all");
  const [actif, setActif] = useState<string | null>(null);

  const source = sources.find((s) => s.id === actif) ?? null;
  const couvertes = useMemo(() => new Set(sources.flatMap((s) => s.codes)), [sources]);

  const toggle = (id: string) => setActif((a) => (a === id ? null : id));
  const blocsVisibles = BLOCS.filter((b) => bloc === "all" || bloc === b.id);

  return (
    <div className="bts">
      {/* Sélecteur de projet / stage */}
      <div className="bts__panel">
        <p className="label">Choisir un projet ou un stage</p>
        <div className="bts__chips" role="group" aria-label="Filtrer par projet ou stage">
          {sources.map((s) => (
            <button key={s.id} className="chip" aria-pressed={actif === s.id} onClick={() => toggle(s.id)}>
              <span className="chip__type">{s.type}</span>
              {s.nom}
              <span className="chip__count">{s.codes.length}</span>
            </button>
          ))}
        </div>
        <p className="bts__status" aria-live="polite">
          {source
            ? `${source.nom} valide ${source.codes.length} compétence${source.codes.length > 1 ? "s" : ""} sur ${referentiel.length}.`
            : `${couvertes.size} compétences sur ${referentiel.length} couvertes par l'ensemble des projets et stages.`}
        </p>
      </div>

      {/* Filtre par bloc */}
      {BLOCS.length > 1 && (
        <div className="bts__tabs" role="group" aria-label="Filtrer par bloc">
          {[{ id: "all", titre: "Tous les blocs" }, ...BLOCS.map((b) => ({ id: b.id, titre: `${b.id} · ${b.titre}` }))].map((b) => (
            <button key={b.id} className="tab" aria-pressed={bloc === b.id} onClick={() => setBloc(b.id)}>
              {b.titre}
            </button>
          ))}
        </div>
      )}

      {/* Blocs de compétences */}
      {blocsVisibles.map((b) => {
        const items = referentiel.filter((r) => r.code.startsWith(b.id));
        const nb = items.filter((r) => couvertes.has(r.code)).length;
        return (
          <section key={b.id} className="bloc" aria-label={`Bloc ${b.id} — ${b.titre}`}>
            <header className="bloc__head">
              <h3>
                <span className="pill">{b.id}</span> {b.titre}
              </h3>
              <div className="gauge" aria-label={`${nb} compétences couvertes sur ${items.length}`}>
                <div className="gauge__bar"><i style={{ width: `${(nb / items.length) * 100}%` }} /></div>
                <span className="label">{nb}/{items.length}</span>
              </div>
            </header>
            <ul className="comps">
              {items.map((r) => {
                const par = sources.filter((s) => s.codes.includes(r.code));
                const etat = source ? (source.codes.includes(r.code) ? "on" : "dim") : "";
                return (
                  <li key={r.code} className={`comp ${etat ? `is-${etat}` : ""} ${par.length === 0 ? "is-empty" : ""}`}>
                    <span className="comp__code">{r.code}</span>
                    <div className="comp__body">
                      <p className="comp__txt">{r.libelle}</p>
                      <details className="comp__acts">
                        <summary>Activités du référentiel</summary>
                        <ul>{r.activites.map((a) => <li key={a}>{a}</li>)}</ul>
                      </details>
                    </div>
                    <ul className="comp__by" aria-label="Validée par">
                      {par.length === 0 && <li className="comp__none">À valider</li>}
                      {par.map((s) => (
                        <li key={s.id}>
                          <button className="mini" aria-pressed={actif === s.id} onClick={() => toggle(s.id)} title={s.nom}>
                            {s.nom}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
