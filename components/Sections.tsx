import Link from "next/link";
import { Reveal, RevealText } from "./Effects";
import BtsMatrix, { type Source } from "./BtsMatrix";
import VideoLoop from "./VideoLoop";
import { profil } from "@/data/profil";
import { competences } from "@/data/competences";
import { projets } from "@/data/projets";
import { experiences } from "@/data/experiences";
import { documents } from "@/data/documents";
import { referentiel } from "@/data/referentiel";
import { asset } from "@/lib/asset";

/** En-tête de section : pastille « N°00X » + grand titre. */
function Titre({ id, num, children }: { id: string; num: string; children: string }) {
  return (
    <header className="shead">
      <span className="pill">N°00{Number(num)}</span>
      <h2 id={id} className="shead__title"><RevealText text={children} /></h2>
    </header>
  );
}

const Tags = ({ items }: { items: string[] }) => (
  <ul className="tags">
    {items.map((t) => <li key={t}>{t}</li>)}
  </ul>
);

/** Codes du référentiel, avec libellé au survol. */
export const Codes = ({ codes }: { codes: string[] }) => (
  <ul className="tags tags--code">
    {codes.map((c) => (
      <li key={c} title={referentiel.find((r) => r.code === c)?.libelle}>{c}</li>
    ))}
  </ul>
);

export function Accueil() {
  return (
    <section className="hero" aria-labelledby="titre-accueil">
      <div className="container hero__center">
        <span className="pill">N°001 · Portfolio BTS SIO SISR</span>
        <h1 id="titre-accueil"><RevealText text={profil.nom} /></h1>
        <p className="hero__lead">{profil.accroche}</p>
        <div className="btn-row btn-row--center">
          <Link className="btn btn--primary" href="/#projets">Voir mes projets <span aria-hidden="true">→</span></Link>
          <Link className="btn" href="/#contact">Me contacter</Link>
        </div>
      </div>
      <div className="container">
        <div className="media hero__media">
          <VideoLoop src="/videos/reseau-architecture.mp4" label="Animation de l'architecture réseau" />
        </div>
        <dl className="fiche">
          {profil.fiche.map((f) => (
            <div key={f.k} className="pill pill--big">
              <dt>{f.k}</dt>
              <dd>{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Apropos() {
  const a = profil.apropos;
  return (
    <section className="section container" aria-labelledby="apropos">
      <Titre id="apropos" num="2">À propos</Titre>
      <div className="split-grid">
        <Reveal>
          <p className="lead">{a.paragraphes[0]}</p>
          {a.paragraphes.slice(1).map((p) => <p key={p}>{p}</p>)}
          <h3>Objectifs</h3>
          <p>{a.objectifs}</p>
          <h3>Domaine qui m'intéresse</h3>
          <p>{a.domaine}</p>
        </Reveal>
        <Reveal>
          <div className="media media--pad">
            <h3>Parcours</h3>
            <ol className="parcours">
              {a.parcours.map((p) => (
                <li key={p.titre}>
                  <span className="label">{p.periode}</span>
                  <strong>{p.titre}</strong>
                  <span className="muted">{p.lieu}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Compétences : une catégorie par ligne. */
export function Competences() {
  return (
    <section className="section container" aria-labelledby="competences">
      <Titre id="competences" num="3">Compétences</Titre>
      <Reveal>
        <ul className="rows">
          {competences.map((c, i) => (
            <li key={c.id} className="row">
              <span className="label row__num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="row__title">{c.titre}</h3>
              <Tags items={c.outils} />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

/** Projets en index : une ligne cliquable par projet. */
export function Projets() {
  return (
    <section className="section container" aria-labelledby="projets">
      <Titre id="projets" num="4">Projets</Titre>
      <Reveal>
        <ul className="index">
          {projets.map((p) => (
            <li key={p.slug}>
              <Link href={`/projets/${p.slug}/`} className="index__item">
                <span className="label index__year">{p.periode}</span>
                <span className="index__main">
                  <span className="index__title">{p.titre}</span>
                  <span className="index__resume">{p.resume}</span>
                  <span className="index__tech">{p.technologies.join(" · ")}</span>
                </span>
                <span className="index__codes">{p.competences.join(" ")}</span>
                <span className="index__arrow" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

export function Experiences() {
  return (
    <section className="section container" aria-labelledby="experiences">
      <Titre id="experiences" num="5">Stages &amp; expériences</Titre>
      {experiences.map((e) => (
        <Reveal key={e.organisme + e.dates}>
          <article className="exp">
            <div className="exp__side">
              <span className="pill">{e.dates}</span>
              <h3>{e.organisme}</h3>
              <p className="muted">{e.role}</p>
            </div>
            <div className="exp__body">
              <ol className="reals">
                {e.realisations.map((r) => (
                  <li key={r.titre} className="real">
                    <div className="real__head">
                      <h4 className="real__title">{r.titre}</h4>
                      <span className="pill">{r.dates}</span>
                    </div>
                    <ul className="list">{r.details.map((d) => <li key={d}>{d}</li>)}</ul>
                    <Codes codes={r.competences} />
                  </li>
                ))}
              </ol>
              <h4>Technologies</h4>
              <Tags items={e.technologies} />
              {e.preuves && e.preuves.length > 0 && (
                <div className="btn-row">
                  {e.preuves.map((d) => (
                    <a key={d.href} className="btn" href={asset(d.href)} target="_blank" rel="noopener noreferrer">{d.label}</a>
                  ))}
                </div>
              )}
            </div>
          </article>
        </Reveal>
      ))}
    </section>
  );
}

/** Compétences E5 : grille interactive reliant référentiel, projets et stages. */
export function BtsSio() {
  const sources: Source[] = [
    ...projets.map((p) => ({ id: p.slug, nom: p.titre, type: "Projet" as const, codes: p.competences })),
    ...experiences.flatMap((e) =>
      e.realisations.map((r) => ({ id: `stage-${r.court}`, nom: r.court, type: "Stage" as const, codes: r.competences })),
    ),
  ];
  return (
    <section className="section container" aria-labelledby="bts-sio">
      <Titre id="bts-sio" num="6">BTS SIO — Compétences E5</Titre>
      <Reveal>
        <p className="lead bts__intro">Sélectionne un projet ou une réalisation de stage pour voir exactement quelles compétences du référentiel elle valide.</p>
        <BtsMatrix sources={sources} />
      </Reveal>
    </section>
  );
}

export function TableauSyntheseTeaser() {
  return (
    <section className="section container" aria-labelledby="synthese">
      <Titre id="synthese" num="7">Tableau de synthèse</Titre>
      <Reveal>
        <div className="callout">
          <p className="lead">Le tableau de synthèse se consulte directement dans le navigateur, ou se télécharge en PDF.</p>
          <div className="btn-row">
            <Link className="btn btn--dark" href="/tableau-synthese/">Voir le tableau de synthèse <span aria-hidden="true">→</span></Link>
            <a className="btn btn--line" href={asset("/documents/tableau-synthese.pdf")} download>Télécharger le PDF</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Documents() {
  return (
    <section className="section container" aria-labelledby="documents">
      <Titre id="documents" num="8">Documents</Titre>
      <Reveal>
        <ul className="rows">
          {documents.map((d) => (
            <li key={d.fichier} className="row row--doc">
              <span className="pill">{d.categorie}</span>
              <div>
                <h3 className="row__title">{d.titre}</h3>
                {d.description && <p className="muted">{d.description}</p>}
              </div>
              <div className="btn-row">
                <a className="btn btn--primary" href={asset(d.fichier)} target="_blank" rel="noopener noreferrer">Voir</a>
                <a className="btn" href={asset(d.fichier)} download>Télécharger</a>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

export function Contact() {
  const c = profil.contact;
  return (
    <section className="section container contact" aria-labelledby="contact">
      <span className="pill">N°009</span>
      <h2 id="contact" className="contact__title"><RevealText text="Un stage, une alternance ? Écrivez-moi." /></h2>
      <div className="btn-row btn-row--center">
        <a className="btn btn--primary btn--big" href={`mailto:${c.email}`}>{c.email}</a>
      </div>
      <ul className="contact-list">
        {c.telephone && <li><a href={`tel:${c.telephone.replace(/\s/g, "")}`}>{c.telephone}</a></li>}
        <li className="muted">{c.localisation}</li>
      </ul>
      <div className="btn-row btn-row--center">
        {profil.liens.map((l) => (
          <a key={l.href} className="btn btn--line" href={l.href} target="_blank" rel="noopener noreferrer">{l.label} ↗</a>
        ))}
      </div>
    </section>
  );
}
