/**
 * Export statique : `npm run build` génère le dossier /out,
 * hébergeable tel quel (GitHub Pages, Netlify, OVH, etc.).
 * Si le site est servi dans un sous-dossier (ex: github.io/portfolio),
 * définir NEXT_PUBLIC_BASE_PATH=/portfolio avant le build.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};
