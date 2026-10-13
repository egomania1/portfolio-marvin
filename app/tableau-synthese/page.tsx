import type { Metadata } from "next";
import Link from "next/link";
import PdfViewer from "@/components/PdfViewer";
import { TABLEAU_SYNTHESE } from "@/data/documents";
import { asset } from "@/lib/asset";

export const metadata: Metadata = { title: "Tableau de synthèse" };

export default function TableauSynthese() {
  const url = asset(TABLEAU_SYNTHESE);
  return (
    <section className="section container page-top">
      <Link href="/#synthese" className="back">← Retour au portfolio</Link>
      <h1 className="page-title">Tableau de synthèse</h1>
      <div className="btn-row">
        <a className="btn btn--primary" href={url} target="_blank" rel="noopener noreferrer">Voir le tableau de synthèse</a>
        <a className="btn" href={url} download>Télécharger le PDF</a>
      </div>
      <PdfViewer fichier={TABLEAU_SYNTHESE} titre="Tableau de synthèse" />
      {/* Sortie toujours visible, même si le lecteur PDF capte la molette */}
      <Link href="/#synthese" className="close-fab" aria-label="Fermer et revenir au portfolio">✕ Fermer</Link>
    </section>
  );
}
