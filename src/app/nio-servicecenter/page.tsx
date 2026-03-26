import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../subpage.module.css";

export const metadata: Metadata = {
  title: "NIO ServiceCenter – Autorisierte Werkstatt",
  description: "Autorisiertes NIO ServiceCenter in Nürnberg: Wartung, Inspektion & Instandsetzung für ET5, ET7, EL6 & EL7 bei Nik's Garage.",
  keywords: ["NIO ServiceCenter Nürnberg", "NIO Werkstatt Nürnberg", "NIO Service Deutschland", "ET7 Service", "ET5 Werkstatt Nürnberg", "EL7 Inspektion", "EL6 Wartung", "Niks Garage NIO"],
  alternates: {
    canonical: '/nio-servicecenter',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "NIO ServiceCenter – Autorisierte Werkstatt | Nik's Garage",
    description: "Autorisiertes NIO ServiceCenter in Nürnberg: Wartung, Inspektion & Instandsetzung für ET5, ET7, EL6 & EL7.",
    url: 'https://niks-garage-nuernberg.de/nio-servicecenter',
    images: [{ url: '/images/nio_service.png', width: 1200, height: 630 }],
  }
};

export default function NioServiceCenter() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <span className={styles.tag}>OFFIZIELLER PARTNER</span>
          <h1 className={styles.title}>
            VERLÄSSLICHER SERVICE.<br/>
            <span style={{ color: 'var(--text-secondary)' }}>MIT SYSTEMVERSTÄNDNIS.</span>
          </h1>
          <p className={styles.subtitle}>
            Als autorisiertes NIO ServiceCenter übernimmt NIK’s GARAGE umfassende Prüf-, Service- und Instandsetzungsarbeiten an NIO Fahrzeugen in Nürnberg.
          </p>
        </div>

        <div className={styles.contentRow}>
          <div className={styles.imageBox}>
            <Image src="/images/nio_service.png" alt="NIO Service Center" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className={styles.textBlock}>
            <h2>Mehr als klassische Wartung.</h2>
            <p>
              Die Arbeit reicht bei uns weit über klassische Wartungsleistungen hinaus. Neben technischen Prüfungen und Instandsetzungen gehören auch Karosserie- und Lackarbeiten sowie vollständige Fahrzeuginspektionen zu unserem Aufgabenbereich.
            </p>
            <p>
              NIK’s GARAGE arbeitet hier an der Schnittstelle zwischen Fahrzeugtechnik, Karosserie und Systemdiagnose. Gerade bei komplexen Fahrzeugen ist es entscheidend, nicht nur einzelne Bauteile zu betrachten, sondern das Gesamtfahrzeug zu verstehen – von der Struktur bis zur Funktion.
            </p>
            <ul>
              <li>Vollständige Fahrzeuginspektionen</li>
              <li>Karosserie- und Lackarbeiten</li>
              <li>Systemdiagnose & Fehlerbehebung</li>
              <li>Fachgerechte Instandsetzung nach Herstellervorgaben</li>
            </ul>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Kompetenz</h3>
            <p>Ganzheitliches Vorgehen, das auf tiefgreifendem Systemverständnis der neuesten Fahrzeugtechnik basiert.</p>
          </div>
          <div className={styles.card}>
            <h3>Vertrauen</h3>
            <p>Die Grundlage für unsere Partnerschaft mit NIO. Strukturierte Prozesse und nachvollziehbare Ergebnisse.</p>
          </div>
          <div className={styles.card}>
            <h3>Full-Service</h3>
            <p>Egal ob Inspektion, Unfallinstandsetzung oder Software-Diagnose – wir bieten den kompletten Service aus einer Hand.</p>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h2>Bereit für Ihren NIO Service?</h2>
          <p className={styles.subtitle}>Vereinbaren Sie jetzt einen Termin in unserem NIO ServiceCenter Nürnberg.</p>
          <Link href="/kontakt" className={styles.btn}>Termin vereinbaren</Link>
        </div>
      </div>
    </main>
  );
}
