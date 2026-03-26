import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./jobs.module.css";

export const metadata: Metadata = {
  title: "Karriere – Kfz-Mechatroniker (m/w/d) gesucht",
  description: "Kfz-Mechatroniker (m/w/d) in Nürnberg gesucht! Arbeite bei Nik's Garage an Tesla, NIO & Oldtimern. Jetzt bewerben.",
  keywords: ["Tesla Job Nürnberg", "Kfz Mechatroniker Stelle Tesla", "Tesla Werkstatt Karriere Nürnberg", "NIO Jobs Werkstatt", "Niks Garage Karriere"],
  alternates: {
    canonical: '/jobs',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Karriere – Kfz-Mechatroniker gesucht | Nik's Garage",
    description: "Werde Teil von Nik's Garage: Kfz-Mechatroniker (m/w/d) für Tesla, NIO & Oldtimer in Nürnberg gesucht.",
    url: 'https://niks-garage-nuernberg.de/jobs',
    images: [{ url: '/images/jobs_hero.png', width: 1200, height: 630 }],
  }
};

export default function Jobs() {
  return (
    <main className={styles.page}>
      
      {/* ── HERO SECTION ── */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image 
            src="/images/jobs_hero.png" 
            alt="Mechanic working on EV battery" 
            fill 
            style={{ objectFit: 'cover' }} 
            priority
          />
        </div>
        <div className={styles.heroOverlay} />
        
        <div className={styles.heroContent}>
          <span className={styles.tag}>Karriere bei NIK&apos;S GARAGE</span>
          <h1 className={styles.title} style={{ hyphens: 'auto', WebkitHyphens: 'auto', wordBreak: 'break-word' }}>
            Die Zukunft der<br/>E-Mobilität beginnt hier.
          </h1>
          <p className={styles.subtitle}>
            Wir suchen talentierte Kfz-Techniker*innen für die Unterstützung und den weiteren Aufbau unseres bundesweiten Netzwerkes.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className={styles.container}>
        
        <div className={styles.roleSelector}>
          <div className={styles.roleChip}>Offene Stelle: TESLA-Kfz-Mechatroniker / Automechaniker (m/w/d)</div>
        </div>

        <div className={styles.contentWrapper}>
          
          <div className={styles.mainContent}>
            
            <section>
              <h2 className={styles.sectionTitle}>Deine Rolle.</h2>
              <div className={styles.bentoGrid}>
                <div className={styles.bentoCard}>
                  <div className={styles.cardIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <h3>Geregelter Alltag</h3>
                  <p>Genieße strukturierte Prozesse und geregelte Arbeitszeiten in einem technologisch hochmodernen und sauberen Umfeld.</p>
                </div>
                <div className={styles.bentoCard}>
                  <div className={styles.cardIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                  </div>
                  <h3>Intensives Training</h3>
                  <p>Du startest mit einer fundierten Einarbeitungsphase. Wir nutzen Performance-Supports zur stetigen Förderung.</p>
                </div>
                <div className={styles.bentoCard}>
                  <div className={styles.cardIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 2 13 9 20 9"></polyline><polyline points="11 22 11 15 4 15"></polyline><polyline points="13 2 4 15"></polyline><polyline points="11 22 20 9"></polyline></svg>
                  </div>
                  <h3>Karrierechancen</h3>
                  <p>Raum für Persönlichkeitsentfaltung innerhalb unserer bundesweit wachsenden Werkstatt-Gruppe.</p>
                </div>
                <div className={styles.bentoCard}>
                  <div className={styles.cardIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </div>
                  <h3>Safety First</h3>
                  <p>Sicherheits-, Umwelt- und Nachhaltigkeits-Bewusstsein stehen bei uns an allererster Stelle.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className={styles.sectionTitle}>Dein Profil.</h2>
              <div className={styles.bentoGrid}>
                 <div className={styles.bentoCard} style={{ gridColumn: '1 / -1' }}>
                  <h3>Das bringst du idealerweise mit:</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.05rem' }}>
                    <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 700 }}>→</span>
                      Abgeschlossene Ausbildung zum/zur Mechatroniker*in oder Zertifizierung für Fahrzeugreparaturen in DE
                    </li>
                    <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 700 }}>→</span>
                      Sehr gute Deutschkenntnisse in Wort und Schrift
                    </li>
                    <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 700 }}>→</span>
                      Teamgeist, Effizienz und die Fähigkeit, sich auf das Wesentliche zu konzentrieren
                    </li>
                    <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 700 }}>→</span>
                      Gültiger EU-Führerschein (Klasse B) und Arbeitserlaubnis für Deutschland
                    </li>
                    <li style={{ display: 'flex', gap: '12px' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 700 }}>→</span>
                      Optional: Berufserfahrung in Fahrzeugservice/Reparaturarbeiten (Auto, Luftfahrt, Marine)
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
          </div>

          {/* ── SIDEBAR / STICKY CTA ── */}
          <aside>
            <div className={styles.applyCard}>
              <h3>Klingt spannend?</h3>
              <p>Tritt der hochkompetenten Alternative zum TESLA-Service bei. Lass uns bei einem kurzen Telefonat kennenlernen.</p>
              
              <div className={styles.infoRow}>
                <div className={styles.infoIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>Werkstattzeiten</span>
                  <span className={styles.infoVal}>Mo - Do: 08:00 - 17:00</span>
                  <span className={styles.infoVal}>Freitag: 08:00 - 12:30</span>
                </div>
              </div>

              <div className={styles.infoRow}>
                <div className={styles.infoIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>Standort</span>
                  <span className={styles.infoVal}>Zentrale Nürnberg</span>
                  <span className={styles.infoVal} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>(oder nach Absprache)</span>
                </div>
              </div>

              <a href="tel:017670037698" className={styles.btnPrimary}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '10px'}}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Sofort anrufen
              </a>
              <a href="mailto:kontakt@niks-garage-nuernberg.de" className={styles.btnSecondary}>
                E-Mail schreiben
              </a>
            </div>
          </aside>
          
        </div>
      </div>
    </main>
  );
}
