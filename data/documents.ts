/**
 * Documents consultables / téléchargeables.
 * ➜ Dépose le PDF dans public/documents/ puis ajoute une ligne ici.
 * Le chemin doit être RELATIF au site (commence par /documents/), jamais C:\...
 */
export type Doc = { titre: string; categorie: string; fichier: string; description?: string };

export const documents: Doc[] = [
  {
    titre: "Tableau de synthèse",
    categorie: "BTS",
    fichier: "/documents/tableau-synthese.pdf",
    description: "Synthèse des compétences et situations professionnelles.",
  },
  // { titre: "CV", categorie: "CV", fichier: "/documents/cv.pdf" },
  // { titre: "Attestation de stage", categorie: "Stage", fichier: "/documents/attestation-stage.pdf" },
];

/** Fichier affiché sur la page « Tableau de synthèse ». */
export const TABLEAU_SYNTHESE = "/documents/tableau-synthese.pdf";
