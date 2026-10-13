import { Accueil, Apropos, Competences, Projets, Experiences, BtsSio, TableauSyntheseTeaser, Documents, Contact } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <div id="accueil"><Accueil /></div>
      <Apropos />
      <Competences />
      <Projets />
      <Experiences />
      <BtsSio />
      <TableauSyntheseTeaser />
      <Documents />
      <Contact />
    </>
  );
}
