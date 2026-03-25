"use client";

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

const HERO_SLIDES = [
  {
    image: '/images/tesla_workshop.png',
    title: 'Ihr TESLA & NIO Spezialist.',
    subtitle: 'Erfahrung, Leidenschaft und ein wachsendes Partner-Werkstatt-Netzwerk.'
  },
  {
    image: '/images/service_clean.png',
    title: 'Diagnose. Wartung. Perfektion.',
    subtitle: 'MEYLE HD Fahrwerke, Hochvolt-Systeme und zertifizierte Antriebsreparaturen.'
  },
  {
    image: '/images/hero_clean.png',
    title: 'Electrified. Qualified.',
    subtitle: 'NIO ServiceCenter Nürnberg & bundesweites TESLA Partner-Netzwerk.'
  }
];

const SERVICE_CATEGORIES = [
  {
    category: 'WARTUNG / SERVICE',
    items: ['Kleiner Serviceumfang', 'Großer Serviceumfang', 'End of Warranty-Check']
  },
  {
    category: 'ANTRIEB',
    items: ['Austausch Simmerringe', 'Ölwechsel Differenzial', 'Wechsel Antriebswellen / Drive Unit']
  },
  {
    category: 'BATTERIEN',
    items: ['Hochvoltbatterie (Diagnose zur Reparatur)', 'Hochvolt-System (Diagnose zur Reparatur)', '12-Volt Batterie']
  },
  {
    category: 'BREMSEN',
    items: ['Bremsenservice inkl. Bremsflüssigkeitswechsel', 'Feststellbremse (Diagnose / Instandsetzung)']
  },
  {
    category: 'FAHRWERK',
    items: ['Achsvermessung', 'Fahrwerkstuning', 'Diagnose & Reparatur']
  },
  {
    category: 'KAROSSERIE & LACK',
    items: ['Steinschlagschutzfolie', 'Chromdelite Spezialfolie', 'Fahrzeugaufbereitung', 'Unterboden-Hohlraumschutz']
  },
  {
    category: 'REIFEN & RÄDER',
    items: ['Laufruhenoptimierung', 'Felgenmontage inkl. Auswuchten', 'Reifenwechsel']
  },
  {
    category: 'WEITERES',
    items: ['Anhängerkupplung Montage', 'Windschutzscheibenwechsel', 'Klimaanlage & Heizung', 'Lenkung & Türen']
  }
];

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.isRevealed);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
    document.querySelectorAll(`.${styles.reveal}`).forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useScrollReveal();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className={styles.main}>
      {/* ── HERO ── */}
      <header className={styles.hero}>
        <div className={styles.heroSlides}>
          {HERO_SLIDES.map((s, i) => (
            <div key={i} className={`${styles.slide} ${currentSlide === i ? styles.slideOn : ''}`}>
              <Image src={s.image} alt={s.title} fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 40%' }} priority={i === 0} />
              <div className={styles.slideOverlay} />
            </div>
          ))}
        </div>
        <div className={styles.heroInner}>
          <span className={styles.heroTag}>NIK'S GARAGE — ELECTRIFIED. QUALIFIED.</span>
          <h1 key={`t${currentSlide}`} className={styles.heroH1}>{HERO_SLIDES[currentSlide].title}</h1>
          <p key={`s${currentSlide}`} className={styles.heroP}>{HERO_SLIDES[currentSlide].subtitle}</p>
          <div className={styles.heroBtns}>
            <Link href="/kontakt" className={styles.heroBtn}>Termin vereinbaren</Link>
            <a href="#services" className={styles.heroBtnGhost}>Leistungen ansehen</a>
          </div>
        </div>
        <div className={styles.heroDots}>
          {HERO_SLIDES.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className={`${styles.hDot} ${currentSlide === i ? styles.hDotOn : ''}`} />
          ))}
        </div>
      </header>

      {/* ── Quicklinks (Infinite Marquee) ── */}
      <section className={styles.quickBar}>
        <div className={styles.quickInner}>
          <div className={styles.quickTrack}>
            {[...Array(4)].flatMap((_, arrayIdx) => [
              { label: 'DIAGNOSE', icon: '⚡' },
              { label: 'WARTUNG', icon: '🔧' },
              { label: 'FAHRZEUGUMBAU', icon: '🏎️' },
              { label: 'TÜV-VORBEREITUNG', icon: '✅' },
              { label: 'VERMESSUNGEN', icon: '📐' },
              { label: 'AUFBEREITUNG', icon: '✨' },
            ].map((q, itemIdx) => (
              <div key={`${arrayIdx}-${itemIdx}`} className={styles.quickItem}>
                <span className={styles.quickIcon}>{q.icon}</span>
                <span className={styles.quickLabel}>{q.label}</span>
              </div>
            )))}
          </div>
        </div>
      </section>

      {/* ── About / Story ── */}
      <section id="about" className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={`${styles.aboutGrid} ${styles.reveal}`}>
            <div className={styles.aboutText}>
              <span className={styles.tag}>ÜBER NIK'S GARAGE</span>
              <h2>Erfahrung, Leidenschaft und ein wachsendes Partner-Werkstatt-Netzwerk.</h2>
              <p>NIK'S GARAGE entstand aus der Begeisterung für TESLA und aus langjähriger Erfahrung in der Automobilbranche.</p>
              <p>Was als spezialisierter Standort begann, ist heute ein bundesweit wachsendes Netzwerk aus ausgewählten Partnerwerkstätten.</p>
              <p>Bereits heute sind wir unter anderem in Bad Honnef vertreten. Weitere Regionen – darunter der Raum Dortmund, Essen, Osnabrück und Frankfurt – befinden sich in Vorbereitung.</p>
              <p className={styles.highlight}>Unser Anspruch ist klar: Wir organisieren Service dort, wo er gebraucht wird – zuverlässig, strukturiert und persönlich.</p>
              <p>Als spezialisierter Servicepartner für TESLA und als NIO ServiceCenter in Nürnberg bündeln wir technisches Know-how, Erfahrung und klare Abläufe. Auch Fahrzeuge anderer Hersteller sind bei uns willkommen.</p>
            </div>
            <div className={styles.aboutImage}>
              <Image src="/images/template_passion.png" alt="NIK's GARAGE Werkstatt" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Catalogue ── */}
      <section id="services" className={styles.catalogSection}>
        <div className={styles.container}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <span className={styles.tag}>SERVICELEISTUNGEN</span>
            <h2>Unser komplettes Leistungsspektrum.</h2>
            <p className={styles.subline}>Weitere Leistungen auf Anfrage. Alle Arbeiten für Tesla, NIO und weitere Hersteller.</p>
          </div>
          <div className={styles.catalogGrid}>
            {SERVICE_CATEGORIES.map((cat, idx) => (
              <details key={idx} className={`${styles.catalogCard} ${styles.reveal}`}>
                <summary className={styles.catalogHead}>
                  <h3>{cat.category}</h3>
                  <span className={styles.catalogToggle}></span>
                </summary>
                <ul className={styles.catalogList}>
                  {cat.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Parts: MEYLE & SEG ── */}
      <section className={styles.partsSection}>
        <div className={styles.partsInner}>
          <div className={`${styles.partsImage} ${styles.reveal}`}>
            <Image src="/images/parts_clean.png" alt="MEYLE HD Parts" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className={`${styles.partsText} ${styles.reveal}`}>
            <span className={styles.tag}>MEYLE & SEG TEILE</span>
            <h2>Neu oder Refurbished?</h2>
            <p>Bei der Instandhaltung Ihres Fahrzeugs stellen wir die entscheidende Frage: Müssen es teure Neuteile sein, oder bieten High-End Refurbished-Teile eine bessere, nachhaltigere Alternative?</p>
            <div className={styles.partsFacts}>
              <div className={styles.partsFact}>
                <strong>MEYLE HD</strong>
                <span>Extrem performante Aufhängungen und Querlenker, ausgelegt für das hohe Gewicht von EVs.</span>
              </div>
              <div className={styles.partsFact}>
                <strong>SEG Entwicklung</strong>
                <span>Aktive Weiterentwicklung, um Serienstandards deutlich zu übertreffen.</span>
              </div>
              <div className={styles.partsFact}>
                <strong>Einbaupartner</strong>
                <span>Amptech, Misterdotcom, KW Suspension</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process Steps ── */}
      <section id="process" className={styles.processSection}>
        <div className={styles.container}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <span className={styles.tag}>IHR SERVICETERMIN</span>
            <h2>So läuft Ihr Servicetermin bei NIK'S GARAGE ab.</h2>
          </div>
          <div className={styles.processGrid}>
            {[
              { step: '01', title: 'Termin vereinbaren', desc: 'Sie vereinbaren einen Servicetermin telefonisch innerhalb unserer Sprechzeiten.' },
              { step: '02', title: 'Beratung & Zuordnung', desc: 'Gemeinsam klären wir Ihr Anliegen und prüfen, welche Werkstatt aus unserem Netzwerk für Ihr Fahrzeug am besten geeignet ist.' },
              { step: '03', title: 'Zentrale Koordination', desc: 'Die Terminabstimmung, Teileorganisation und weitere Koordination übernehmen wir direkt aus unserer Zentrale in Nürnberg.' },
              { step: '04', title: 'Service & Abholung', desc: 'Sie können sich auf eine klare Empfehlung und einen gut vorbereiteten Servicetermin verlassen.' }
            ].map((s, i) => (
              <div key={i} className={`${styles.processStep} ${styles.reveal}`}>
                <span className={styles.stepNum}>{s.step}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Locations ── */}
      <section id="locations" className={styles.locSection}>
        <div className={styles.container}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <span className={styles.tag}>STANDORTE & PARTNER</span>
            <h2>Zentrale Koordination.<br/>Lokale Perfektion.</h2>
            <p className={styles.subline}>Alle Anfragen, Termine und Abläufe werden zentral koordiniert.</p>
          </div>
          <div className={styles.locGrid}>
            {[
              { city: 'NÜRNBERG', sub: 'Zentrale / NIO ServiceCenter', active: true },
              { city: 'BAD HONNEF', sub: 'Partner-Werkstatt aktiv', active: true },
              { city: 'OSNABRÜCK', sub: 'In Vorbereitung', active: false },
              { city: 'FRANKFURT', sub: 'In Vorbereitung', active: false },
              { city: 'DORTMUND / ESSEN', sub: 'In Vorbereitung', active: false },
            ].map((l, i) => (
              <div key={i} className={`${styles.locCard} ${styles.reveal} ${l.active ? styles.locActive : ''}`}>
                <div className={styles.locDot} />
                <h3>{l.city}</h3>
                <span>{l.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Werkstattzeiten & Kontakt ── */}
      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactOverlay}>
          <Image src="/images/hero_clean.png" alt="" fill style={{ objectFit: 'cover' }} />
          <div className={styles.contactDim} />
        </div>
        <div className={`${styles.container} ${styles.contactInner}`}>
          <div className={`${styles.contactLeft} ${styles.reveal}`}>
            <span className={styles.tag}>KONTAKT</span>
            <h2>Jetzt Termin<br/>vereinbaren.</h2>
            <a href="tel:091195036398" className={styles.bigPhone}>0911 / 950 363 98</a>
            <a href="tel:015227649976" className={styles.altPhone}>Mobil: 01522 / 7649976</a>
            <a href="mailto:kontakt@niks-garage.com" className={styles.contactMail}>kontakt@niks-garage.com</a>
            <p className={styles.contactNote}>Bitte beachten Sie unsere Sprechzeiten. Ohne telefonische Terminvereinbarung können wir Ihnen vor Ort leider nicht weiterhelfen.</p>
          </div>
          <div className={`${styles.contactRight} ${styles.reveal}`}>
            <h3>Werkstatt-Zeiten</h3>
            <div className={styles.hours}>
              <div className={styles.hourRow}><span>Montag – Donnerstag</span><span>08:00–12:00 | 13:00–17:00</span></div>
              <div className={styles.hourRow}><span>Freitag</span><span>08:00–14:00</span></div>
              <div className={styles.hourRow}><span>Samstag – Sonntag</span><span>Geschlossen</span></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
