/**
 * Référentiel BTS SIO option SISR — Bloc 1 « Support et mise à disposition de services informatiques »,
 * tel qu'il figure dans le tableau de synthèse E5 (public/documents/tableau-synthese.pdf).
 * Les `activites` sont celles listées sous chaque compétence dans le tableau.
 * ➜ Pour ajouter d'autres blocs (B2, B3), ajoute des entrées avec le code correspondant.
 */
export type Competence = { code: string; libelle: string; bloc: string; activites: string[] };

const B1 = "Bloc 1 — Support et mise à disposition de services";

export const referentiel: Competence[] = [
  {
    code: "B1.1",
    bloc: B1,
    libelle: "Gérer le patrimoine informatique",
    activites: [
      "Recenser et identifier les ressources numériques",
      "Exploiter des référentiels, normes et standards adoptés par le prestataire informatique",
      "Mettre en place et vérifier les niveaux d'habilitation associés à un service",
      "Vérifier les conditions de la continuité d'un service informatique",
      "Gérer des sauvegardes",
      "Vérifier le respect des règles d'utilisation des ressources numériques",
    ],
  },
  {
    code: "B1.2",
    bloc: B1,
    libelle: "Répondre aux incidents et aux demandes d'assistance et d'évolution",
    activites: [
      "Collecter, suivre et orienter des demandes",
      "Traiter des demandes concernant les services réseau et système, applicatifs",
      "Traiter des demandes concernant les applications",
    ],
  },
  {
    code: "B1.3",
    bloc: B1,
    libelle: "Développer la présence en ligne de l'organisation",
    activites: [
      "Participer à la valorisation de l'image de l'organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques",
      "Référencer les services en ligne de l'organisation et mesurer leur visibilité",
      "Participer à l'évolution d'un site Web exploitant les données de l'organisation",
    ],
  },
  {
    code: "B1.4",
    bloc: B1,
    libelle: "Travailler en mode projet",
    activites: [
      "Analyser les objectifs et les modalités d'organisation d'un projet",
      "Planifier les activités",
      "Évaluer les indicateurs de suivi d'un projet et analyser les écarts",
    ],
  },
  {
    code: "B1.5",
    bloc: B1,
    libelle: "Mettre à disposition des utilisateurs un service informatique",
    activites: [
      "Réaliser les tests d'intégration et d'acceptation d'un service",
      "Déployer un service",
      "Accompagner les utilisateurs dans la mise en place d'un service",
    ],
  },
  {
    code: "B1.6",
    bloc: B1,
    libelle: "Organiser son développement professionnel",
    activites: [
      "Mettre en place son environnement d'apprentissage personnel",
      "Mettre en œuvre des outils et stratégies de veille informationnelle",
      "Gérer son identité professionnelle",
      "Développer son projet professionnel",
    ],
  },
];
