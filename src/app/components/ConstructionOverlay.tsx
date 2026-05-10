"use client";

/**
 * Wird-umgebaut Fullscreen Overlay (Apple-clean)
 * ----------------------------------------------
 * SEO-Verhalten:
 *   - Komponente rendert ausschließlich client-seitig nach Hydration.
 *     Damit erscheint das Overlay NICHT im initialen Server-HTML.
 *   - Zusätzlich ist der Inhalt mit aria-hidden und data-nosnippet
 *     markiert, sollte er trotz Client-Rendering gecrawlt werden.
 *   - Es wird NICHTS an Metadata, robots.ts, sitemap.ts oder JSON-LD
 *     geändert. Suchmaschinen sehen weiterhin die vollständige Seite.
 *   - Keine Telefon-/E-Mail-Anzeige im UI.
 */

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ConstructionOverlay.module.css";

export default function ConstructionOverlay() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    // sanfter Fade-in nach Mount
    const t = window.setTimeout(() => setVisible(true), 60);

    // Body-Scroll sperren
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`${styles.overlay} ${visible ? styles.overlayVisible : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="construction-title"
      // SEO-Hinweise: nicht in Snippets aufnehmen, vor Crawlern verstecken
      aria-hidden="true"
      data-nosnippet
    >
      <span className={styles.bgGrid} aria-hidden="true" />
      <span className={styles.bgGlow} aria-hidden="true" />

      <div className={`${styles.content} ${visible ? styles.contentVisible : ""}`}>
        <div className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt=""
            width={160}
            height={50}
            priority
            style={{ objectFit: "contain", height: "auto" }}
          />
        </div>

        <span className={styles.statusRow}>
          <span className={styles.statusDot} aria-hidden="true" />
          In Bearbeitung
        </span>

        <h1 id="construction-title" className={styles.title}>
          Etwas Neues entsteht.
        </h1>

        <p className={styles.subtitle}>
          Wir verfeinern gerade unseren Auftritt. In Kürze sind wir mit einem
          frischen Erlebnis zurück.
        </p>
      </div>

      <div className={`${styles.footer} ${visible ? styles.footerVisible : ""}`}>
        <span className={styles.footerLine} aria-hidden="true" />
        <span>Nik&apos;s Garage</span>
        <span className={styles.footerLine} aria-hidden="true" />
      </div>
    </div>
  );
}
