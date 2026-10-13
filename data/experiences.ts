/**
 * Réalisations en milieu professionnel (2e année) — source : tableau de synthèse E5.
 * ➜ Renseigne `organisme` (nom de l'entreprise / de la structure) : il n'apparaît pas dans le tableau.
 */
export type Realisation = {
  titre: string;
  court: string; // libellé court (filtres de la section BTS SIO)
  dates: string;
  details: string[];
  competences: string[]; // codes du référentiel
};

export type Experience = {
  organisme: string;
  role: string;
  dates: string;
  realisations: Realisation[];
  technologies: string[];
  preuves?: { label: string; href: string }[];
};

export const experiences: Experience[] = [
  {
    organisme: "Organisme à renseigner",
    role: "Réalisations en milieu professionnel — 2e année",
    dates: "27/04/26 → 05/06/26",
    technologies: [
      "Active Directory",
      "MECM (ex-SCCM)",
      "MSRA",
      "BitLocker",
      "Outlook (.pst)",
      "Masterisation (postes Lenovo)",
      "Brassage / VLAN",
      "Wi-Fi",
    ],
    realisations: [
      {
        titre: "Migration et déploiement du parc informatique (renouvellement quinquennal)",
        court: "Migration du parc",
        dates: "27/04/26 au 22/05/26",
        details: [
          "Sauvegarde automatisée des profils utilisateurs (scripts de migration)",
          "Préparation / masterisation des postes Lenovo, intégration au domaine Active Directory",
          "Restauration des données, recette fonctionnelle et accompagnement de l'utilisateur",
        ],
        competences: ["B1.1", "B1.4", "B1.5"],
      },
      {
        titre: "Étude de l'infrastructure réseau et du local technique",
        court: "Local technique",
        dates: "27/04/26 au 28/04/26",
        details: [
          "Repérage de la baie de brassage (équipements actifs / passifs)",
          "Analyse du cheminement des cordons et de l'étiquetage du parc",
        ],
        competences: ["B1.1"],
      },
      {
        titre: "Support utilisateur N1/N2 et prise en main à distance",
        court: "Support N1/N2",
        dates: "04/05/26 au 05/05/26",
        details: [
          "Outils MSRA et MECM (ex-SCCM), prise de contrôle via IP",
          "Dépannage messagerie et périphériques",
          "Gestion des droits / permissions et paramétrage des badges",
        ],
        competences: ["B1.1", "B1.2", "B1.5"],
      },
      {
        titre: "Gestion de l'identité numérique et de la sécurité des données",
        court: "Identité & sécurité",
        dates: "04/05/26 au 05/05/26",
        details: [
          "Réinitialisation de mots de passe et déverrouillage de comptes Active Directory",
          "Récupération et saisie des clés de récupération BitLocker",
        ],
        competences: ["B1.1", "B1.2"],
      },
      {
        titre: "Optimisation et hygiène du système",
        court: "Optimisation système",
        dates: "05/06/26",
        details: [
          "Archivage Outlook (.pst) pour la gestion des quotas",
          "Nettoyage des profils utilisateurs (%AppData%\\Local\\Temp)",
          "Vidage du cache client MECM (CCM Cache)",
        ],
        competences: ["B1.1", "B1.5"],
      },
      {
        titre: "Résolution d'incidents réseau et mise à disposition de services",
        court: "Incidents réseau",
        dates: "29/04/26 au 11/05/26",
        details: [
          "Diagnostic / rétablissement Wi-Fi (salle des délibérés, salle de réunion)",
          "Rétablissement du codec de visioconférence (brassage, VLAN) et signalétique",
          "Rétablissement de la connectivité filaire (cordon RJ45)",
        ],
        competences: ["B1.2", "B1.5"],
      },
      {
        titre: "Réception, mise en stock et masterisation du parc",
        court: "Masterisation du parc",
        dates: "07/05/26 au 13/05/26",
        details: [
          "Contrôle d'inventaire des nouvelles unités centrales",
          "Rapatriement et remasterisation des postes (image système standardisée)",
        ],
        competences: ["B1.1", "B1.5"],
      },
    ],
    preuves: [{ label: "Tableau de synthèse (PDF)", href: "/documents/tableau-synthese.pdf" }],
  },
];
