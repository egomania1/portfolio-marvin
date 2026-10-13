/**
 * Informations personnelles et liens de contact.
 * ➜ Modifie uniquement ce fichier pour mettre à jour l'identité du site.
 */
export const profil = {
  nom: "Marvin DUHAUSSE",
  titre: "Étudiant BTS SIO — option SISR",
  accroche:
    "Je me forme à l'administration des systèmes et des réseaux, avec un intérêt marqué pour la cybersécurité.",
  siteUrl: "https://example.com", // ➜ URL finale du site (SEO / Open Graph)
  description:
    "Portfolio de Marvin DUHAUSSE, étudiant en 2e année de BTS SIO option SISR : projets, stages, compétences et tableau de synthèse.",

  /** Petite fiche affichée sous le titre de l'accueil. ➜ à adapter */
  fiche: [
    { k: "Formation", v: "BTS SIO — option SISR" },
    { k: "Niveau", v: "2e année · Session 2026" },
    { k: "Centre", v: "IPSSI Paris" },
  ],

  apropos: {
    // ➜ à personnaliser
    paragraphes: [
      "Étudiant en 2e année de BTS Services Informatiques aux Organisations, option Solutions d'Infrastructure, Systèmes et Réseaux, je suis passionné par le fonctionnement des infrastructures informatiques.",
      "J'aime comprendre comment les systèmes communiquent, les installer, les dépanner et surtout les sécuriser.",
    ],
    objectifs:
      "Poursuivre mes études en informatique (administration systèmes et réseaux / cybersécurité) et intégrer une équipe technique en alternance.",
    domaine: "Administration systèmes et réseaux, supervision, cybersécurité.",
    parcours: [
      { periode: "Session 2026", titre: "BTS SIO option SISR", lieu: "IPSSI Paris" },
      // ➜ Ajoute ici ta formation précédente
    ],
  },

  contact: {
    email: "contact@example.com", // ➜ ton e-mail
    telephone: "", // ➜ optionnel, ex: "06 00 00 00 00"
    localisation: "France",
  },

  liens: [
    { label: "GitHub", href: "https://github.com/" }, // ➜ ton profil
    { label: "LinkedIn", href: "https://www.linkedin.com/" }, // ➜ ton profil
  ],
};
