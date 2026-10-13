/** Préfixe les chemins publics avec le basePath (utile si le site est hébergé dans un sous-dossier). */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
