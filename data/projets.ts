/**
 * Projets (réalisations en cours de formation).
 * ➜ Pour ajouter un projet : copie un bloc et change le `slug` (unique, sans espace).
 * La fiche détaillée est générée automatiquement à /projets/<slug>.
 * Source : tableau de synthèse E5 (1re année).
 */
export type Projet = {
  slug: string;
  titre: string;
  periode: string;
  resume: string;
  contexte: string;
  description: string;
  technologies: string[];
  competences: string[]; // codes du référentiel (voir data/referentiel.ts)
  realisations: string[];
  captures: { src: string; alt: string }[]; // fichiers dans public/images/projets/, ex: "/images/projets/ad-1.png"
  documentation?: string; // ex: "/documents/doc-ad.pdf"
  github?: string;
};

export const projets: Projet[] = [
  {
    slug: "biotech-infrastructure",
    titre: "Infrastructure système et réseau — entreprise fictive Biotech",
    periode: "Janvier – Avril (1re année)",
    resume:
      "Mise en place et configuration de l'infrastructure système et réseau d'une entreprise fictive : annuaire, réseau segmenté et sécurisation.",
    contexte: "Projet étudiant réalisé en cours de première année de BTS SIO, pour l'entreprise fictive Biotech.",
    description:
      "Déploiement complet d'une infrastructure : annuaire Active Directory avec GPO, réseau segmenté en VLAN avec services DHCP et DNS et routage inter-VLAN, puis sécurisation par un pare-feu et une gestion des droits d'accès.",
    technologies: ["Active Directory (AD DS)", "GPO", "VLAN", "DHCP", "DNS", "Routage inter-VLAN", "Pare-feu"],
    competences: ["B1.1", "B1.4", "B1.5"],
    realisations: [
      "Déploiement d'un annuaire Active Directory (AD DS) : unités d'organisation, utilisateurs, groupes et GPO",
      "Conception et configuration réseau : segmentation en VLAN, services DHCP et DNS, routage inter-VLAN",
      "Sécurisation de l'infrastructure : mise en place d'un pare-feu et gestion des droits d'accès",
    ],
    captures: [],
  },
];
