// Génère un PDF d'exemple (à remplacer par ton vrai tableau de synthèse).
import { writeFileSync, mkdirSync } from "node:fs";

const objs = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>",
];
const t =
  "BT /F1 22 Tf 60 760 Td (Tableau de synthese - PDF d'exemple) Tj 0 -34 Td /F1 13 Tf (Remplacez ce fichier par votre PDF : public/documents/tableau-synthese.pdf) Tj ET";
objs.push(`<< /Length ${t.length} >>\nstream\n${t}\nendstream`);
objs.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");

let out = "%PDF-1.4\n";
const off = [];
objs.forEach((o, i) => {
  off.push(out.length);
  out += `${i + 1} 0 obj\n${o}\nendobj\n`;
});
const x = out.length;
out += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n`;
out += off.map((o) => `${String(o).padStart(10, "0")} 00000 n \n`).join("");
out += `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${x}\n%%EOF`;

mkdirSync("public/documents", { recursive: true });
writeFileSync("public/documents/tableau-synthese.pdf", out);
console.log("PDF d'exemple créé.");
