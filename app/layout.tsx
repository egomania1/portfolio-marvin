import type { Metadata, Viewport } from "next";
import { Inter_Tight, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import ThemedWaves from "@/components/ThemedWaves";
import { SmoothScroll } from "@/components/Effects";
import { profil } from "@/data/profil";
import "./globals.css";

const sans = Inter_Tight({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(profil.siteUrl),
  title: { default: `${profil.nom} — Portfolio BTS SIO SISR`, template: `%s | ${profil.nom}` },
  description: profil.description,
  openGraph: {
    title: `${profil.nom} — Portfolio BTS SIO SISR`,
    description: profil.description,
    type: "website",
    locale: "fr_FR",
    // ➜ Ajoute une image dans public/images/og.png (1200x630) puis décommente :
    // images: ["/images/og.png"],
  },
};

export const viewport: Viewport = { themeColor: "#ffeab8", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${sans.variable} ${mono.variable}`} data-theme="soleil" suppressHydrationWarning>
      <body>
        {/* Applique le thème mémorisé avant l'affichage (évite un flash) */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="blanc"||t==="noir"||t==="soleil")document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
        <a href="#contenu" className="skip">Aller au contenu</a>
        <Loader />
        {/* Fond animé : vagues de points orange soleil, fixe derrière tout le contenu */}
        <div className="site-bg" aria-hidden="true">
          <ThemedWaves />
        </div>
        <SmoothScroll />
        <Navbar />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
