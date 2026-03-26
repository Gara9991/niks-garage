"use client";

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { analytics } from '@/lib/analytics';

const HERO_SLIDES = [
  {
    image: '/images/tesla_workshop.png',
    title: 'Ihre freie TESLA Werkstatt.',
    subtitle: 'Spezialisiert auf Tesla, Elektroautos (NIO) & Oldtimer in Nürnberg.',
    alt: 'Freie Tesla Werkstatt und Oldtimer Service bei Niks Garage in Nürnberg'
  },
  {
    image: '/images/service_clean.png',
    title: 'Diagnose. Wartung. Perfektion.',
    subtitle: 'MEYLE HD Fahrwerke, Hochvolt-Systeme und zertifizierte Antriebsreparaturen.',
    alt: 'Diagnose und Wartung von Elektroautos bei Niks Garage'
  },
  {
    image: '/images/hero_clean.png',
    title: 'Electrified. Qualified.',
    subtitle: 'NIO ServiceCenter Nürnberg & bundesweites TESLA Partner-Netzwerk.',
    alt: 'NIO ServiceCenter und Werkstatt Niks Garage in Nürnberg'
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
    category: 'WEITERES & OLDTIMER',
    items: ['Oldtimer-Restaurierung', 'Windschutzscheibenwechsel', 'Klimaanlage & Heizung', 'Anhängerkupplung (EV)']
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
      <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clipPath: 'inset(50%)', whiteSpace: 'nowrap', border: '0' }}>
        Nik's Garage – Ihre freie Tesla Werkstatt in Nürnberg. Spezialist für Elektroautos (NIO) & Oldtimer. 4,8 Sterne Bewertung.
      </h1>
      {/* ── HERO ── */}
      <header className={styles.hero}>
        <div className={styles.heroSlides}>
          {HERO_SLIDES.map((s, i) => (
            <div key={i} className={`${styles.slide} ${currentSlide === i ? styles.slideOn : ''}`}>
              <Image src={s.image} alt={s.alt} fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 40%' }} priority={i === 0} />
              <div className={styles.slideOverlay} />
            </div>
          ))}
        </div>
        <div className={styles.heroInner}>
          <span className={styles.heroTag}>NIK&apos;S GARAGE — ELECTRIFIED. QUALIFIED.</span>
          <h2 key={`t${currentSlide}`} className={styles.heroH1}>{HERO_SLIDES[currentSlide].title}</h2>
          <p key={`s${currentSlide}`} className={styles.heroP}>{HERO_SLIDES[currentSlide].subtitle}</p>
          <div className={styles.heroBtns}>
            <Link href="/kontakt" className={styles.heroBtn} onClick={() => analytics.clickCTA("Termin vereinbaren", "hero")}>Termin vereinbaren</Link>
            <a href="#services" className={styles.heroBtnGhost} onClick={() => analytics.clickCTA("Leistungen ansehen", "hero")}>Leistungen ansehen</a>
          </div>
        </div>
        <div className={styles.heroDots}>
          {HERO_SLIDES.map((_, i) => (
            <button key={i} onClick={() => { setCurrentSlide(i); analytics.heroSlideChange(i); }} className={`${styles.hDot} ${currentSlide === i ? styles.hDotOn : ''}`} />
          ))}
        </div>
      </header>

      {/* ── Quicklinks (Infinite Marquee) ── */}
      <section className={styles.quickBar}>
        <div className={styles.quickInner}>
          <div className={styles.quickTrack}>
            {[...Array(4)].flatMap((_, arrayIdx) => [
              { label: 'TESLA SERVICE', icon: '⚡' },
              { label: 'NIO WARTUNG', icon: '🔧' },
              { label: 'OLDTIMER RESTAURIERUNG', icon: '🏎️' },
              { label: 'TÜV & DIAGNOSE', icon: '✅' },
              { label: 'ACHSVERMESSUNG', icon: '📐' },
              { label: 'HOCHVOLTTECHNIK', icon: '🔋' },
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
              <span className={styles.tag}>Ihre freie Tesla Werkstatt in Nürnberg</span>
              <h2>Spezialisiert auf Tesla, E-Autos (NIO) & Oldtimer.</h2>
              <p>NIK&apos;S GARAGE entstand aus der Begeisterung für <strong>TESLA</strong>. Heute sind wir der führende herstellerunabhängige Spezialist für Elektroautos in Nürnberg.</p>
              <p>Was als spezialisierter Standort begann, ist heute ein bundesweit wachsendes Netzwerk aus ausgewählten Partnerwerkstätten.</p>
              <p>Bereits heute sind wir unter anderem in Bad Honnef vertreten. Weitere Regionen – darunter der Raum Dortmund, Essen, Osnabrück und Frankfurt – befinden sich in Vorbereitung.</p>
              <p className={styles.highlight}>Unser Anspruch ist klar: Wir organisieren Service dort, wo er gebraucht wird – zuverlässig, strukturiert und persönlich.</p>
              <p>Als zertifiziertes NIO ServiceCenter und unabhängiger <strong>Tesla Service in Nürnberg</strong> bündeln wir echtes Hochvolt-Know-how. Zudem schlägt unser Herz für klassische Automobile, weshalb auch die fachgerechte Reparatur und Wartung von <strong>Oldtimern</strong> fester Bestandteil unseres Services ist.</p>
            </div>
            <div className={styles.aboutImage}>
              <Image src="/images/template_passion.png" alt="Nik's Garage Werkstatt in Nürnberg für Elektroautos, Tesla, NIO und Oldtimer" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Catalogue (Bento Grid) ── */}
      <section id="services" className={styles.catalogSection}>
        <div className={styles.container}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <span className={styles.tag}>SERVICELEISTUNGEN</span>
            <h2>Unser komplettes Leistungsspektrum.</h2>
            <p className={styles.subline} style={{ margin: '0 auto' }}>Weitere Leistungen auf Anfrage. Top-Ausstattung für Ihren Tesla, E-Autos (NIO) sowie klassische Oldtimer.</p>
          </div>
          <div className={styles.bentoCatalogGrid}>
            {SERVICE_CATEGORIES.map((cat, idx) => {
              // Get beautiful SVG based on category
              const renderIcon = (category: string) => {
                switch(category) {
                  case 'WARTUNG / SERVICE': return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>;
                  case 'ANTRIEB': return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>;
                  case 'BATTERIEN': return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect><line x1="22" y1="11" x2="22" y2="13"></line><line x1="6" y1="11" x2="6" y2="13"></line><line x1="10" y1="11" x2="10" y2="13"></line><line x1="14" y1="11" x2="14" y2="13"></line></svg>;
                  case 'BREMSEN': return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><path d="M12 2a10 10 0 0 1 10 10"></path></svg>;
                  case 'FAHRWERK': return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22"></line><line x1="4" y1="2" x2="20" y2="2"></line><line x1="4" y1="22" x2="20" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="4" y1="7" x2="20" y2="7"></line><line x1="4" y1="17" x2="20" y2="17"></line></svg>;
                  case 'KAROSSERIE & LACK': return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
                  case 'REIFEN & RÄDER': return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle><line x1="12" y1="2" x2="12" y2="9"></line><line x1="12" y1="15" x2="12" y2="22"></line><line x1="22" y1="12" x2="15" y2="12"></line><line x1="9" y1="12" x2="2" y2="12"></line><line x1="19.07" y1="4.93" x2="14.12" y2="9.88"></line><line x1="9.88" y1="14.12" x2="4.93" y2="19.07"></line><line x1="19.07" y1="19.07" x2="14.12" y2="14.12"></line><line x1="9.88" y1="9.88" x2="4.93" y2="4.93"></line></svg>;
                  case 'WEITERES & OLDTIMER': return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>;
                  default: return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>;
                }
              };

              return (
                <div key={idx} className={`${styles.bentoCatalogCard} ${styles.reveal}`}>
                  <div className={styles.bentoIconWrapper}>
                    {renderIcon(cat.category)}
                  </div>
                  <div className={styles.bentoCatalogHead}>
                    <h3>{cat.category}</h3>
                  </div>
                  <ul className={styles.bentoCatalogList}>
                    {cat.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Parts: MEYLE & SEG ── */}
      <section className={styles.partsSection}>
        <div className={styles.partsInner}>
          <div className={`${styles.partsImage} ${styles.reveal}`}>
            <Image src="/images/parts_clean.png" alt="MEYLE HD Fahrwerksteile und Refurbished Komponenten bei Nik's Garage" fill style={{ objectFit: 'cover' }} />
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
            <h2>So läuft Ihr Servicetermin bei NIK&apos;S GARAGE ab.</h2>
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
          <Image src="/images/hero_clean.png" alt="Nik's Garage Kontaktbereich Autowerkstatt Nürnberg" fill style={{ objectFit: 'cover' }} />
          <div className={styles.contactDim} />
        </div>
        <div className={`${styles.container} ${styles.contactInner}`}>
          <div className={`${styles.contactLeft} ${styles.reveal}`}>
            <span className={styles.tag}>KONTAKT</span>
            <h2>Jetzt Termin<br/>vereinbaren.</h2>
            <a href="tel:017670037698" className={styles.bigPhone} onClick={() => analytics.clickPhone("017670037698", "contact_section")}>0176 / 700 376 98</a>
            <a href="tel:017670037698" className={styles.altPhone} onClick={() => analytics.clickPhone("017670037698", "contact_section")}>Mobil: 0176 / 700 376 98</a>
            <a href="mailto:kontakt@niks-garage-nuernberg.de" className={styles.contactMail} onClick={() => analytics.clickEmail("contact_section")}>kontakt@niks-garage-nuernberg.de</a>
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
