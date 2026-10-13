import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projets } from "@/data/projets";
import { referentiel } from "@/data/referentiel";
import { asset } from "@/lib/asset";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projets.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projets.find((x) => x.slug === slug);
  return p ? { title: p.titre, description: p.resume } : {};
}

export default async function FicheProjet({ params }: Props) {
  const { slug } = await params;
  const p = projets.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <article className="section container page-top">
      <Link href="/#projets" className="back">← Tous les projets</Link>
      <p className="muted">{p.periode}</p>
      <h1 className="page-title">{p.titre}</h1>

      <div className="two-col">
        <div>
          <h2 className="h3">Contexte</h2>
          <p>{p.contexte}</p>
          <h2 className="h3">Description</h2>
          <p>{p.description}</p>
          <h2 className="h3">Réalisations</h2>
          <ul className="list">{p.realisations.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
        <aside className="box">
          <h2 className="h3">Technologies</h2>
          <ul className="tags">{p.technologies.map((t) => <li key={t}>{t}</li>)}</ul>
          <h2 className="h3">Compétences mobilisées</h2>
          <ul className="list">
            {p.competences.map((c) => (
              <li key={c}><span className="code">{c}</span> {referentiel.find((r) => r.code === c)?.libelle}</li>
            ))}
          </ul>
          <div className="btn-row">
            {p.documentation && <a className="btn btn--primary" href={asset(p.documentation)} target="_blank" rel="noopener noreferrer">Documentation</a>}
            {p.github && <a className="btn" href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
          </div>
        </aside>
      </div>

      <h2 className="h3">Captures d'écran</h2>
      {p.captures.length === 0 ? (
        <p className="muted">Captures à ajouter dans <code>public/images/projets/</code> puis à référencer dans <code>data/projets.ts</code>.</p>
      ) : (
        <div className="grid">
          {p.captures.map((c) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={c.src} src={asset(c.src)} alt={c.alt} loading="lazy" className="shot" />
          ))}
        </div>
      )}
    </article>
  );
}
