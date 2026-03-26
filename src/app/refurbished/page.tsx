import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../subpage.module.css";

export const metadata: Metadata = {
  title: "Refurbished Tesla & E-Auto Ersatzteile | Nik's Garage Nürnberg",
  description: "Reparatur statt teurer Neukauf: Nach Herstellervorgaben geprüfte Refurbished-Ersatzteile und Drive Units für Tesla & NIO. Ressourcenschonend und sicher.",
  keywords: ["Refurbished Tesla Teile Nürnberg", "Tesla Drive Unit Reparatur", "Tesla Ersatzteile Refurbished", "Elektroauto Werkstatt Nürnberg Nachhaltig", "Oldtimer Ersatzteile Nürnberg", "Niks Garage Refurbished"],
  openGraph: {
    title: "Refurbished Tesla Ersatzteile & Drive Units | Nik's Garage",
    description: "Zeitwertgerechte und nachhaltige Reparaturen durch geprüfte Refurbished-Teile für Tesla, NIO und Oldtimer.",
    url: 'https://www.niks-garage.com/refurbished',
    images: [{ url: '/images/parts_clean.png', width: 1200, height: 630 }],
  }
};

export default function Refurbished() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <span className={styles.tag}>NACHHALTIGKEIT & EFFIZIENZ</span>
          <h1 className={styles.title}>Neu oder Refurbished?</h1>
          <p className={styles.subtitle}>
            Bei der Instandhaltung Ihres Fahrzeugs stellen wir die entscheidende Frage: Müssen es teure Neuteile sein, oder bieten High-End Refurbished-Teile eine bessere Alternative?
          </p>
        </div>

        <div className={styles.contentRow}>
          <div className={styles.imageBox}>
            <Image src="/images/parts_clean.png" alt="Refurbished Auto Parts" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className={styles.textBlock}>
            <h2>Was „refurbished“ bei uns bedeutet</h2>
            <p>
              Refurbished heißt bei NIK’s GARAGE nicht einfach „gebraucht“. Vielmehr durchlaufen die Komponenten einen rigorosen Prozess:
            </p>
            <ul>
              <li><strong>Geprüft:</strong> Sorgfältige Diagnostik der Baugruppe</li>
              <li><strong>Zerlegt:</strong> Fachgerechte Demontage der Einzelteile</li>
              <li><strong>Überarbeitet:</strong> Instandsetzung und Reinigung</li>
              <li><strong>Verbessert:</strong> Mit bekannten Schwachstellen versehen oder gezielt verstärkt</li>
              <li><strong>Nachvollziehbar eingesetzt:</strong> Transparenz für Sie als Kunden</li>
            </ul>
            <p>
              Viele dieser Komponenten stammen aus Baugruppen, die konstruktiv langlebig ausgelegt sind, deren Schwächen bekannt und beherrschbar sind – insbesondere im Bereich Antrieb, Fahrwerk und Hochvoltkomponenten.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Warum wir diesen Weg gehen</h3>
            <p>Elektrofahrzeuge sind dafür gebaut, lange genutzt zu werden. Technisch wie wirtschaftlich ergibt es deshalb Sinn, Bauteile nicht pauschal zu ersetzen, sondern gezielt instand zu setzen. Das schont Ressourcen und senkt Kosten.</p>
          </div>
          <div className={styles.card}>
            <h3>Planbarkeit</h3>
            <p>Ein wichtiger Faktor für unsere Entscheidung zu Refurbished-Teilen ist die Erhöhung der Planbarkeit und Teileverfügbarkeit im Service, um Ausfallzeiten zu minimieren.</p>
          </div>
          <div className={styles.card}>
            <h3>Unsere Kriterien</h3>
            <p>Entscheidend ist nicht der Preis, sondern der technische Zustand, Laufleistung, Sicherheitsrelevanz und die Verfügbarkeit geeigneter Komponenten. Immer fahrzeug- und fallbezogen!</p>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h2>Sie haben Fragen zu unseren Teilen?</h2>
          <p className={styles.subtitle}>Gerne beraten wir Sie persönlich zur besten Lösung für Ihr Fahrzeug.</p>
          <Link href="/kontakt" className={styles.btn}>Zur Beratung</Link>
        </div>
      </div>
    </main>
  );
}
