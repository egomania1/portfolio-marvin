# Portfolio — Marvin DUHAUSSE (BTS SIO SISR)

Next.js (export statique). Aucun serveur nécessaire une fois construit.

## Commandes
- `npm install` puis `npm run dev` → http://localhost:3000
- `npm run build` → génère le dossier `out/` à héberger tel quel
- `npm run start` → prévisualise `out/`

## Modifier le contenu (dossier `data/`)
| Fichier | Contenu |
|---|---|
| `profil.ts` | nom, accroche, à propos, parcours, contact, liens |
| `competences.ts` | cartes de compétences |
| `projets.ts` | projets + fiches détaillées (`/projets/<slug>`) |
| `experiences.ts` | stages / expériences |
| `referentiel.ts` | compétences BTS SIO (codes B1.1 …) |
| `documents.ts` | documents PDF |

## Tableau de synthèse
Remplace `public/documents/tableau-synthese.pdf` par ton PDF (même nom). Les chemins sont relatifs (`/documents/...`), jamais `C:\...`.

## Hébergement dans un sous-dossier (ex. GitHub Pages)
`NEXT_PUBLIC_BASE_PATH=/nom-du-repo npm run build`
