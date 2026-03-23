"use client";

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import Image from 'next/image';

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
  const [theme, setTheme] = useState('dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [contactFABOpen, setContactFABOpen] = useState(false);

  useScrollReveal();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className={styles.main}>
      {/* ── Navigation ── */}
      <nav className={`${styles.nav} ${isScrolled ? styles.navScrolled : ''} ${mobileMenuOpen ? styles.navMobileOpen : ''}`}>
        <div className={styles.navInner}>
          <div className={styles.logo}>
            <Image src="/images/logo.png" alt="NIK's GARAGE" width={140} height={45} style={{ objectFit: 'contain' }} priority />
          </div>
          <div className={styles.desktopLinks}>
            <a href="#about">Über uns</a>
            <a href="#services">Leistungen</a>
            <a href="#process">Ablauf</a>
            <a href="#locations">Standorte</a>
            <a href="#contact">Kontakt</a>
          </div>
          <div className={styles.navActions}>
            <button onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} className={styles.themeToggleBtn} aria-label="Theme umschalten">
              <div className={styles.themeTrack}>
                <div className={`${styles.themeThumb} ${theme === 'light' ? styles.themeThumbLight : ''}`}>
                  {theme === 'dark' ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                  )}
                </div>
              </div>
            </button>
            <a href="tel:091195036398" className={styles.navPhone}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>0911 / 950 363 98</span>
            </a>
            <button onClick={() => setMobileMenuOpen(o => !o)} className={styles.burger} aria-label="Menü">
              <span className={`${styles.bLine} ${mobileMenuOpen ? styles.bOpen1 : ''}`} />
              <span className={`${styles.bLine} ${mobileMenuOpen ? styles.bOpen2 : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── High-End Mobile Menu overlay ── */}
      <div className={`${styles.mobileOverlay} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
        <div className={styles.mobileInner}>
          <div className={styles.mobileLinks}>
            <span className={styles.mobileLabel}>Navigation</span>
            {['Über uns:#about', 'Leistungen:#services', 'Ablauf:#process', 'Standorte:#locations', 'Kontakt:#contact'].map((item, i) => {
              const [label, href] = item.split(':');
              return (
                <a key={i} href={href} onClick={() => setMobileMenuOpen(false)} style={{ transitionDelay: `${0.1 + (i * 0.05)}s` }} className={mobileMenuOpen ? styles.mobileLinkAnim : ''}>
                  {label}
                </a>
              );
            })}
          </div>
          
          <div className={`${styles.mobileFooter} ${mobileMenuOpen ? styles.mobileLinkAnim : ''}`} style={{ transitionDelay: '0.4s' }}>
            <span className={styles.mobileLabel}>Direktkontakt</span>
            <a href="tel:091195036398" className={styles.mobilePhoneBig}>0911 / 950 363 98</a>
            <a href="mailto:kontakt@niks-garage.com" className={styles.mobileMailText}>kontakt@niks-garage.com</a>
          </div>
        </div>
      </div>

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
            <a href="tel:091195036398" className={styles.heroBtn}>Termin vereinbaren</a>
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

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={`${styles.footerGrid} ${styles.reveal}`}>
            <div className={styles.footerBrand}>
              <Image src="/images/logo.png" alt="NIK's GARAGE" width={180} height={60} style={{ objectFit: 'contain' }} className={styles.footerLogo} />
              <p className={styles.footerTagline}>Erfahrung, Leidenschaft und ein bundesweites Partner-Netzwerk für Tesla, NIO und weitere Fabrikate.</p>
            </div>
            
            <div className={styles.footerNav}>
              <div className={styles.footerCol}>
                <h4>KONTAKT</h4>
                <a href="tel:091195036398">0911 - 950 363 98</a>
                <a href="mailto:info@niks-garage.com">info@niks-garage.com</a>
                <p>Nürnberg & Bundesweit</p>
              </div>
              <div className={styles.footerCol}>
                <h4>UNTERNEHMEN</h4>
                <a href="https://niks-garage-concept.com" target="_blank" rel="noopener noreferrer">NIK's CONCEPT</a>
                <a href="https://www.evinity-gmbh.com" target="_blank" rel="noopener noreferrer">EVINITY GmbH</a>
                <a href="#">Jobs & Karriere</a>
              </div>
              <div className={styles.footerCol}>
                <h4>RECHTLICHES</h4>
                <a href="#">Impressum</a>
                <a href="#">Datenschutz</a>
                <a href="#">AGB</a>
              </div>
              <div className={styles.footerCol}>
                <h4>SOCIAL</h4>
                <a href="https://instagram.com/niks_garage_offiziell" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="#">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p className={styles.copy}>&copy; {new Date().getFullYear()} NIK'S GARAGE. Electrified. Qualified. — Ihr NIK & Partner-Team</p>
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={styles.backToTop}>BACK TO TOP ↑</a>
          </div>
        </div>
      </footer>

      {/* ── Floating Contact FAB & Full-Screen Overlay ── */}
      <div 
        className={`${styles.fabOverlay} ${contactFABOpen ? styles.fabOverlayOpen : ''}`} 
        onClick={() => setContactFABOpen(false)}
        aria-hidden="true"
      ></div>
      <div className={`${styles.fabContainer} ${contactFABOpen ? styles.fabOpen : ''}`}>
        <div className={styles.fabPanel}>
          <button className={styles.fabClose} onClick={() => setContactFABOpen(false)}>×</button>
          <h5>WERKSTATT-TERMINE</h5>
          <p>
            Unsere WERKSTATT-TERMINE vergeben wir ausschließlich nach persönlicher Rücksprache mit der Service-Leitung und anschließender Vereinbarung und Buchung nach gemeinsamer Terminfindung.
          </p>
          <div className={styles.fabPhoneBox}>
            <span className={styles.fabPhoneLabel}>Rufen Sie uns an:</span>
            <a href="tel:015227649976" className={styles.fabPhoneLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              01522 / 764 9976
            </a>
          </div>
          <div className={styles.fabHours}>
            <strong>SPRECHZEITEN:</strong>
            Mo-Fr: 8:00-9:00 Uhr<br />
            Mo-Do: 14:00-17:00 Uhr
          </div>
        </div>
        
        <button 
          className={styles.fabButton}
          onClick={() => setContactFABOpen(!contactFABOpen)}
          aria-label="Kontakt & Termine"
        >
          {contactFABOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          )}
        </button>
      </div>
    </main>
  );
}
