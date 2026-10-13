import { profil } from "@/data/profil";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{profil.nom}</p>
          <p className="footer__sub">{profil.titre}</p>
        </div>
        <ul className="footer__links">
          {profil.liens.map((l) => (
            <li key={l.href}><a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a></li>
          ))}
          <li><a href={`mailto:${profil.contact.email}`}>E-mail</a></li>
        </ul>
        <p className="footer__copy">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
