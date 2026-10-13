import { asset } from "@/lib/asset";

/**
 * Affichage intégré d'un PDF avec solution de secours.
 * - <object> affiche le PDF avec le lecteur natif du navigateur.
 * - Si le navigateur ne sait pas l'afficher (mobile, etc.), le contenu de repli apparaît
 *   avec les boutons « Ouvrir » et « Télécharger ».
 */
export default function PdfViewer({ fichier, titre }: { fichier: string; titre: string }) {
  const url = asset(fichier);
  const boutons = (
    <div className="btn-row">
      <a className="btn btn--primary" href={url} target="_blank" rel="noopener noreferrer">
        Ouvrir le PDF
      </a>
      <a className="btn" href={url} download>
        Télécharger
      </a>
    </div>
  );
  return (
    <div className="pdf">
      {/* Écrans tactiles : un PDF intégré bloque le défilement, on propose des boutons à la place */}
      <div className="pdf__mobile">
        <p>
          <strong>Utilise les boutons pour consulter le document.</strong>
        </p>
        {boutons}
      </div>
      <object data={`${url}#view=FitH`} type="application/pdf" className="pdf__frame" aria-label={titre}>
        <div className="pdf__fallback">
          <p>
            <strong>L'aperçu intégré n'est pas disponible sur cet appareil.</strong>
          </p>
          <p>Utilise l'un des boutons ci-dessous pour consulter le document.</p>
          {boutons}
        </div>
      </object>
    </div>
  );
}
