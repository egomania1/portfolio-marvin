/**
 * Compétences techniques, par catégorie — issues des réalisations du tableau de synthèse.
 * ➜ Ajoute / retire une ligne dans `outils` pour modifier une carte,
 *   ou une catégorie entière (Linux, virtualisation…) quand tu as des projets à montrer.
 */
export type Categorie = { id: string; titre: string; icone: string; outils: string[] };

export const competences: Categorie[] = [
  { id: "systemes", titre: "Systèmes", icone: "▣", outils: ["Active Directory (AD DS)", "GPO", "Unités d'organisation", "Domaine Windows"] },
  { id: "reseaux", titre: "Réseaux", icone: "⌁", outils: ["VLAN", "DHCP", "DNS", "Routage inter-VLAN", "Brassage", "Wi-Fi"] },
  { id: "windows", titre: "Administration Windows", icone: "⊞", outils: ["Comptes & mots de passe AD", "Droits / permissions", "Masterisation de postes", "Images système"] },
  { id: "support", titre: "Support informatique", icone: "✚", outils: ["Support N1/N2", "Prise en main à distance (MSRA)", "Messagerie & périphériques", "Recette & accompagnement"] },
  { id: "cyber", titre: "Cybersécurité", icone: "⛨", outils: ["Pare-feu", "Gestion des droits d'accès", "BitLocker", "Sauvegardes"] },
  { id: "scripts", titre: "Scripts", icone: "{ }", outils: ["Scripts de migration de profils"] },
  { id: "outils", titre: "Outils", icone: "⚙", outils: ["MECM (ex-SCCM)", "MSRA", "Outlook (.pst)"] },
];
