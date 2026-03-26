"use client";

import { useState } from "react";
import styles from "../page.module.css";
import { analytics } from "@/lib/analytics";

export default function ContactFAB() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`${styles.fabOverlay} ${open ? styles.fabOverlayOpen : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div className={`${styles.fabContainer} ${open ? styles.fabOpen : ""}`}>
        <div className={styles.fabPanel}>
          <button className={styles.fabClose} onClick={() => { setOpen(false); analytics.fabClose(); }}>×</button>
          <h5>WERKSTATT-TERMINE</h5>
          <p>
            Unsere WERKSTATT-TERMINE vergeben wir ausschließlich nach persönlicher Rücksprache mit der Service-Leitung und anschließender Vereinbarung und Buchung nach gemeinsamer Terminfindung.
          </p>
          <div className={styles.fabPhoneBox}>
            <span className={styles.fabPhoneLabel}>Rufen Sie uns an:</span>
            <a href="tel:017670037698" className={styles.fabPhoneLink} onClick={() => analytics.clickPhone("017670037698", "fab")}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              0176 / 700 376 98
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
          onClick={() => { const next = !open; setOpen(next); next ? analytics.fabOpen() : analytics.fabClose(); }}
          aria-label="Kontakt & Termine"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          )}
        </button>
      </div>
    </>
  );
}
