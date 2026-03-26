import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../subpage.module.css";

export const metadata: Metadata = {
  title: "Freie Tesla Werkstatt – Service & Reparatur",
  description: "Freie Tesla Werkstatt in Nürnberg: Achsvermessung, MEYLE HD Fahrwerke, Drive Unit Reparatur & Hochvolt-Diagnose. Jetzt Termin anfragen!",
  keywords: ["Tesla Werkstatt Nürnberg", "Tesla Service Nürnberg", "Freie Tesla Werkstatt", "Tesla Reparatur Nürnberg", "Tesla Querlenker MEYLE", "Model 3 Service Nürnberg", "Model Y Reparatur Nürnberg", "Niks Garage Tesla"],
  alternates: {
    canonical: '/tesla-specialist',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Freie Tesla Werkstatt Nürnberg | Nik's Garage",
    description: "Achsvermessung, MEYLE HD Fahrwerke, Drive Unit & Hochvolt-Diagnose für Ihren Tesla.",
    url: 'https://www.niks-garage-nuernberg.de/tesla-specialist',
    images: [{ url: '/images/service_clean.png', width: 1200, height: 630 }],
  }
};

export default function TeslaSpecialist() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <span className={styles.tag}>EXPERTISE & LEIDENSCHAFT</span>
          <h1 className={styles.title}>TESLA Specialist.</h1>
          <p className={styles.subtitle}>
            Ihre freie Tesla Werkstatt für höchste Ansprüche. Ausgeprägtes Know-how, spezialisierte Werkzeuge und absolute Leidenschaft für die E-Mobilität.
          </p>
        </div>

        <div className={styles.contentRow}>
          <div className={styles.textBlock}>
            <h2>Ihre Alternative zum Tesla Service Center.</h2>
            <p>
              Als auf Tesla spezialisierter Fachbetrieb bieten wir Ihnen das komplette Leistungsspektrum rund um Ihr Fahrzeug. Von der klassischen Wartung über komplexe Fahrwerksarbeiten bis hin zur Hochvoltdiagnostik.
            </p>
            <p>
              Wir setzen auf höchste Qualität durch Premium-Ersatzteile (z.B. von MEYLE) und smarte Reparaturwege – für mehr Nachhaltigkeit und oft deutlich attraktivere Konditionen als bei herkömmlichen Teiletausch-Verfahren.
            </p>
            <h3>Unsere Spezialgebiete</h3>
            <ul>
              <li>Fahrwerk: Achsvermessung, Tuning, Querlenker-Upgrades (MEYLE HD)</li>
              <li>Antrieb: Simmerringe, Differenzial-Ölwechsel, Drive Unit</li>
              <li>Batterie & Hochvolt: Diagnose zur Reparatur, 12V-Batterie</li>
              <li>Karosserie: Steinschlagschutzfolie, Hohlraumschutz, Dämmpakete</li>
            </ul>
          </div>
          <div className={styles.imageBox}>
            <Image src="/images/service_clean.png" alt="Tesla Werkstatt Service" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>MEYLE & KW Einbaupartner</h3>
            <p>Wir verwenden verstärkte Fahrwerkskomponenten und bieten professionellen Einbau von KW Suspension Fahrwerken.</p>
          </div>
          <div className={styles.card}>
            <h3>Klimaanlage & Heizung</h3>
            <p>Sicherungsaustausch PTC Heizer, Desinfektion, Innenraum-Filter-Wechsel und mehr für optimales Klima.</p>
          </div>
          <div className={styles.card}>
            <h3>Komfort & Schutz</h3>
            <p>Großes Dämmpaket, Chromdelite (Spezialfolie), Elektrischer Heckklappendämpfer und Softclosemechanismus.</p>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h2>Wir kümmern uns um Ihren Tesla.</h2>
          <p className={styles.subtitle}>Kontaktieren Sie uns für eine Erstberatung und Terminvereinbarung.</p>
          <Link href="/kontakt" className={styles.btn}>Jetzt Termin anfragen</Link>
        </div>
      </div>
    </main>
  );
}
