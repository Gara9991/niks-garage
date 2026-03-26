"use client";

import { useState, useCallback, useRef } from "react";
import Link from "next/link";
import styles from "./kontakt.module.css";
import { analytics } from "@/lib/analytics";

const VEHICLE_BRANDS = [
  { id: "tesla", label: "Tesla", sub: "Model S · 3 · X · Y" },
  { id: "nio", label: "NIO", sub: "Alle aktuellen Modelle" },
  { id: "other", label: "Andere", sub: "Alle Marken (EV)" },
];

const TESLA_MODELS = ["Model 3", "Model Y", "Model S", "Model X", "Cybertruck", "Roadster"];
const NIO_MODELS = ["ET5", "ET7", "EL6", "EL7", "EL8", "EP9"];

const SERVICE_CATEGORIES = [
  { id: "wartung", label: "Wartung", desc: "Kleiner & Großer Service, Garantie-Check", icon: "⚡" },
  { id: "antrieb", label: "Antrieb", desc: "Simmerringe, Differenzial, Drive Unit", icon: "⚙️" },
  { id: "batterie", label: "Batterien", desc: "HV-Batterie, HV-System, 12V-Batterie", icon: "🔋" },
  { id: "bremsen", label: "Bremsen", desc: "Bremsenservice, Feststellbremse", icon: "🛑" },
  { id: "fahrwerk", label: "Fahrwerk", desc: "Achsvermessung, Tuning, Querlenker", icon: "📐" },
  { id: "karosserie", label: "Karosserie", desc: "Unfallreparatur, Glasersatz", icon: "✨" },
  { id: "reifen", label: "Reifen", desc: "Reifenwechsel inkl. Wuchten", icon: "🏎️" },
  { id: "sonstiges", label: "Weiteres", desc: "Klimaservice, AHK, Scheiben", icon: "🔩" },
];

const LOCATIONS = [
  {
    id: "nuernberg",
    city: "Nürnberg",
    type: "Zentrale",
    partner: "Hauptstützpunkt",
    address: "Witschelstraße 60, 90431 Nürnberg",
    active: true,
  },
  {
    id: "bad-honnef",
    city: "Bonn | Bad Honnef",
    type: "Partner-Werkstatt",
    partner: "Jan Phillip Lang",
    address: "Rottbitze, NRW",
    active: true,
  },
  {
    id: "lohmar",
    city: "Köln | Lohmar",
    type: "Partner-Werkstatt",
    partner: "Sven Noll",
    address: "Lohmar | Siegburg | Köln",
    active: true,
  },
  {
    id: "frankfurt",
    city: "Frankfurt",
    type: "Partner-Werkstatt",
    partner: "Autoservice Napoli",
    address: "Weiterstadt, Hessen",
    active: true,
  },
  {
    id: "osnabrueck",
    city: "Osnabrück",
    partner: "",
    address: "Demnächst",
    active: false,
  },
  {
    id: "bamberg",
    city: "Bamberg",
    partner: "",
    address: "Demnächst",
    active: false,
  },
  {
    id: "stuttgart",
    city: "Stuttgart",
    partner: "",
    address: "Demnächst",
    active: false,
  },
];

const STEPS = ["Fahrzeug", "Service", "Beratung", "Standort", "Kontakt", "Abschluss"];
const TOTAL = STEPS.length;

export default function KontaktPage() {
  const [step, setStep] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // Step 0: Vehicle
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [customBrand, setCustomBrand] = useState("");
  const [year, setYear] = useState("");

  // Step 1: Service
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [serviceNote, setServiceNote] = useState("");

  // Step 2: Beratung (No state needed)

  // Step 3: Location
  const [selectedLocation, setSelectedLocation] = useState("");

  // Step 4: Contact
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [message, setMessage] = useState("");

  // Step 5: Done
  const [submitted, setSubmitted] = useState(false);

  const goTo = useCallback((target: number) => {
    setStep(target);
    contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleService = useCallback((id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  }, []);

  const canProceed = useCallback(() => {
    switch (step) {
      case 0: return brand && (brand !== "other" ? model : customBrand);
      case 1: return selectedServices.length > 0;
      case 2: return true; 
      case 3: return selectedLocation !== "";
      case 4: return name && (email || phone);
      default: return true;
    }
  }, [step, brand, model, customBrand, selectedServices, selectedLocation, name, email, phone]);

  const handleSubmit = () => {
    analytics.formSubmit("servicetermin");
    setSubmitted(true);
    goTo(TOTAL - 1);
  };

  const models = brand === "tesla" ? TESLA_MODELS : brand === "nio" ? NIO_MODELS : [];

  return (
    <main className={styles.page}>
      
      <div className={styles.formContainer}>
        {/* Sidebar Header / Tracker */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarHead}>
            <h1 className={styles.sidebarTitle}>Servicetermin.</h1>
            <p className={styles.sidebarSub}>Wenige Schritte zu Ihrem persönlichen Angebot.</p>
          </div>
          
          <div className={styles.stepper}>
            {STEPS.map((label, i) => (
              <div 
                key={i} 
                className={`${styles.stepItem} ${step === i ? styles.stepItemActive : ""} ${step > i ? styles.stepItemDone : ""}`}
              >
                <div className={styles.stepIndicator}>
                  {step > i ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  ) : (
                    <span>{i + 1}</span>
                  )}
                </div>
                <span className={styles.stepLabel}>{label}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* Content Area */}
        <section className={styles.contentWrap}>
          <div className={styles.contentInner} ref={contentRef}>
            
            {/* STEP 0: Fahrzeug */}
            {step === 0 && (
              <div className={styles.stepPane} key="s0">
                <div className={styles.stepHead}>
                  <span className={styles.stepTag}>Schritt 1 von {TOTAL - 1}</span>
                  <h2>Ihr Fahrzeug</h2>
                </div>

                <div className={`${styles.grid} ${styles.grid2}`}>
                  {VEHICLE_BRANDS.map((b) => (
                    <div key={b.id} className={`${styles.card} ${brand === b.id ? styles.cardActive : ""}`} onClick={() => { setBrand(b.id); setModel(""); }}>
                      <div className={styles.cardContent}>
                        <span className={styles.cardTitle}>{b.label}</span>
                        <span className={styles.cardSub}>{b.sub}</span>
                      </div>
                      <div className={styles.cardCheck}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                    </div>
                  ))}
                </div>

                {brand && brand !== "other" && (
                  <div className={styles.subSection}>
                    <span className={styles.subLabel}>Modell auswählen</span>
                    <div className={styles.chipGrid}>
                      {models.map((m) => (
                        <button key={m} className={`${styles.chip} ${model === m ? styles.chipActive : ""}`} onClick={() => setModel(m)} type="button">{m}</button>
                      ))}
                    </div>
                  </div>
                )}

                {brand === "other" && (
                  <div className={styles.subSection}>
                    <div className={styles.inputGroup}>
                      <label>Hersteller & Modell</label>
                      <input type="text" className={styles.input} placeholder="z.B. BMW i4" value={customBrand} onChange={(e) => setCustomBrand(e.target.value)} />
                    </div>
                  </div>
                )}

                {(model || customBrand) && (
                  <div className={styles.subSection}>
                    <div className={styles.inputGroup} style={{ maxWidth: 200 }}>
                      <label>Baujahr (optional)</label>
                      <input type="text" className={styles.input} placeholder="z.B. 2023" value={year} onChange={(e) => setYear(e.target.value)} maxLength={4} />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* STEP 1: Service */}
            {step === 1 && (
              <div className={styles.stepPane} key="s1">
                <div className={styles.stepHead}>
                  <span className={styles.stepTag}>Schritt 2 von {TOTAL - 1}</span>
                  <h2>Benötigter Service</h2>
                </div>
                
                <div className={`${styles.grid} ${styles.grid2}`}>
                  {SERVICE_CATEGORIES.map((s) => {
                    const active = selectedServices.includes(s.id);
                    return (
                      <div key={s.id} className={`${styles.card} ${active ? styles.cardActive : ""}`} onClick={() => toggleService(s.id)}>
                        <div className={styles.cardIcon}>{s.icon}</div>
                        <div className={styles.cardContent}>
                          <span className={styles.cardTitle}>{s.label}</span>
                          <span className={styles.cardSub}>{s.desc}</span>
                        </div>
                        <div className={styles.cardCheck}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {selectedServices.length > 0 && (
                  <div className={styles.subSection}>
                    <div className={styles.inputGroup}>
                      <label>Zusätzliche Hinweise (optional)</label>
                      <textarea className={`${styles.input} ${styles.textarea}`} placeholder="Beschreiben Sie Ihr Anliegen genauer..." value={serviceNote} onChange={(e) => setServiceNote(e.target.value)} />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* STEP 2: Beratung (Mandatory Call Info) */}
            {step === 2 && (
              <div className={styles.stepPane} key="s2">
                <div className={styles.stepHead}>
                  <span className={styles.stepTag}>Schritt 3 von {TOTAL - 1}</span>
                  <h2>Telefonische Klärung</h2>
                </div>

                <div className={styles.mandatoryCallBox}>
                  <div className={styles.mandatoryCallIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <h3>Persönliche Beratung vorab</h3>
                  <p>Unsere <strong>WERKSTATT-TERMINE</strong> vergeben wir ausschließlich nach persönlicher Rücksprache mit der Service-Leitung.</p>
                  <a href="tel:015227649976" className={styles.mandatoryCallBtn} onClick={() => analytics.clickPhone("015227649976", "kontakt_beratung")}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '10px', color: 'var(--accent)'}}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    01522 / 764 9976
                  </a>
                </div>
                
                <p className={styles.cardSub} style={{ marginTop: 24, textAlign: "center", opacity: 0.8 }}>
                  Sobald Sie uns angerufen haben, drücken Sie auf Weiter, damit die Service-Leitung Ihnen hilft.
                </p>
              </div>
            )}

            {/* STEP 3: Location Selection */}
            {step === 3 && (
              <div className={styles.stepPane} key="s3">
                <div className={styles.stepHead}>
                  <span className={styles.stepTag}>Schritt 4 von {TOTAL - 1}</span>
                  <h2>Standort-Auswahl</h2>
                </div>

                <p className={styles.cardSub} style={{ marginBottom: 32, textAlign: "center", opacity: 0.8 }}>
                  Wählen Sie den Standort, auf den Sie sich mit unserer Service-Leitung verständig haben.
                </p>

                <div className={`${styles.grid} ${styles.grid1}`}>
                  {LOCATIONS.map((loc) => (
                    <div
                      key={loc.id}
                      className={`${styles.card} ${selectedLocation === loc.id ? styles.cardActive : ""} ${!loc.active ? styles.locDisabled : ""}`}
                      onClick={() => loc.active && setSelectedLocation(loc.id)}
                    >
                      <div className={styles.cardContent}>
                        <span className={styles.cardTitle}>{loc.city} {loc.type === "Zentrale" && "(Zentrale)"}</span>
                        <span className={styles.cardSub}>{loc.active ? `${loc.partner ? loc.partner + " · " : ""}${loc.address}` : "Demnächst verfügbar"}</span>
                      </div>
                      <div className={styles.cardCheck}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 4: Contact */}
            {step === 4 && (
              <div className={styles.stepPane} key="s4">
                <div className={styles.stepHead}>
                  <span className={styles.stepTag}>Schritt 5 von {TOTAL - 1}</span>
                  <h2>Ihre Daten</h2>
                </div>
                
                <div className={`${styles.grid} ${styles.grid2}`}>
                  <div className={styles.inputGroup}>
                    <label>Name *</label>
                    <input type="text" className={styles.input} placeholder="Vor- und Nachname" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>E-Mail *</label>
                    <input type="email" className={styles.input} placeholder="ihre@email.de" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Telefon</label>
                    <input type="tel" className={styles.input} placeholder="+49 ..." value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Wunschtermin (optional)</label>
                    <input type="date" className={styles.input} value={preferredDate} onChange={(e) => setPreferredDate(e.target.value)} />
                  </div>
                  <div className={styles.inputGroup} style={{ gridColumn: "1 / -1" }}>
                    <label>Nachricht (optional)</label>
                    <textarea className={`${styles.input} ${styles.textarea}`} placeholder="Weitere Informationen..." value={message} onChange={(e) => setMessage(e.target.value)} />
                  </div>
                </div>

                <p className={styles.cardSub} style={{ marginTop: 8, textAlign: "center", opacity: 0.7 }}>
                  Unsere telefonischen Sprechzeiten: Mo-Fr 8-9 Uhr & Mo-Do 14-17 Uhr
                </p>
              </div>
            )}

            {/* STEP 5: Summary / Success */}
            {step === 5 && (
              <div className={styles.stepPane} key="s5">
                {submitted ? (
                  <div className={styles.stepHead} style={{ marginTop: 24 }}>
                    <div className={styles.successIcon}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h2>Anfrage versendet.</h2>
                    <p className={styles.cardSub} style={{ marginTop: 16, fontSize: '1.05rem' }}>
                      Vielen Dank, {name.split(' ')[0]}! Wir melden uns in Kürze telefonisch bei Ihnen zur Terminabstimmung.
                    </p>
                    
                    <div className={styles.successActions}>
                      <Link href="/" className={styles.btnSecondary} style={{ padding: '16px 32px', background: 'var(--bg-card)', borderRadius: 980, border: '1px solid rgba(150,150,150,0.2)' }}>Zur Startseite</Link>
                      <a href="tel:091195036398" className={styles.btnPrimary}>Zentrale Anrufen</a>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className={styles.stepHead}>
                      <span className={styles.stepTag}>Fertig</span>
                      <h2>Zusammenfassung</h2>
                    </div>
                    
                    <div className={styles.summaryBox}>
                      <div className={styles.summaryRow}>
                        <span>Fahrzeug</span>
                        <strong>{brand === "other" ? customBrand : `${VEHICLE_BRANDS.find(b => b.id === brand)?.label} ${model}`}{year ? ` (${year})` : ""}</strong>
                      </div>
                      <div className={styles.summaryRow}>
                        <span>Services</span>
                        <strong>{selectedServices.map(id => SERVICE_CATEGORIES.find(s => s.id === id)?.label).join(", ")}</strong>
                      </div>
                      <div className={styles.summaryRow}>
                        <span>Standort</span>
                        <strong>{LOCATIONS.find(l => l.id === selectedLocation)?.city}</strong>
                      </div>
                      {serviceNote && <div className={styles.summaryRow}><span>Hinweise</span><strong>{serviceNote}</strong></div>}
                      <div className={styles.summaryRow}>
                        <span>Kontakt</span>
                        <strong>{name}{email ? ` · ${email}` : ""}{phone ? ` · ${phone}` : ""}</strong>
                      </div>
                      {preferredDate && <div className={styles.summaryRow}><span>Wunschtermin</span><strong>{preferredDate}</strong></div>}
                      {message && <div className={styles.summaryRow}><span>Nachricht</span><strong>{message}</strong></div>}
                    </div>
                  </>
                )}
              </div>
            )}
            
          </div>

          {/* Nav Actions - Now Sticky Sibling */}
          {!submitted && (
            <div className={styles.navActions}>
              {step > 0 ? (
                <button className={styles.btnSecondary} onClick={() => goTo(step - 1)} type="button">
                  Zurück
                </button>
              ) : <div />}

              {step < TOTAL - 2 ? (
                <button className={styles.btnPrimary} onClick={() => goTo(step + 1)} disabled={!canProceed()} type="button">
                  Weiter
                </button>
              ) : step === TOTAL - 2 ? (
                <button className={styles.btnPrimary} onClick={() => goTo(step + 1)} disabled={!canProceed()} type="button">
                  Zusammenfassung
                </button>
              ) : (
                <button className={styles.btnPrimary} onClick={handleSubmit} type="button">
                  Anfrage absenden
                </button>
              )}
            </div>
          )}

        </section>
      </div>
    </main>
  );
}
