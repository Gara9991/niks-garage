"use client";

import { useState, useEffect, useCallback, CSSProperties } from "react";

const CONSENT_KEY = "niks-cookie-consent";

type ConsentState = "granted" | "denied" | null;

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentState;
    if (!stored) {
      setVisible(true);
      updateConsent("denied");
    } else {
      updateConsent(stored);
    }
  }, []);

  const updateConsent = (state: "granted" | "denied") => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent" as "config", "update" as string, {
        analytics_storage: state,
        ad_storage: state,
      });
    }
  };

  const accept = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "granted");
    updateConsent("granted");
    setVisible(false);
  }, []);

  const deny = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "denied");
    updateConsent("denied");
    setVisible(false);
  }, []);

  if (!visible) return null;

  const s: Record<string, CSSProperties> = {
    overlay: {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      padding: "16px",
      pointerEvents: "none",
    },
    banner: {
      pointerEvents: "auto",
      maxWidth: 560,
      margin: "0 auto",
      background: "var(--bg-card)",
      border: "1px solid rgba(150,150,150,0.15)",
      borderRadius: 20,
      padding: "28px 28px 24px",
      backdropFilter: "blur(20px)",
      boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
    },
    title: {
      fontSize: "1rem",
      fontWeight: 600,
      marginBottom: 8,
      display: "block",
      color: "var(--text-primary)",
    },
    desc: {
      fontSize: "0.88rem",
      color: "var(--text-secondary)",
      lineHeight: 1.55,
      margin: "0 0 20px",
    },
    link: {
      color: "var(--accent)",
      textDecoration: "underline",
      textUnderlineOffset: "3px",
    },
    actions: {
      display: "flex",
      gap: 10,
    },
    btnDeny: {
      flex: 1,
      padding: "12px 20px",
      borderRadius: 980,
      border: "1px solid rgba(150,150,150,0.2)",
      background: "transparent",
      color: "var(--text-secondary)",
      fontSize: "0.88rem",
      fontWeight: 600,
      cursor: "pointer",
    },
    btnAccept: {
      flex: 1,
      padding: "12px 20px",
      borderRadius: 980,
      border: "none",
      background: "var(--accent)",
      color: "#000",
      fontSize: "0.88rem",
      fontWeight: 600,
      cursor: "pointer",
    },
  };

  return (
    <div style={s.overlay}>
      <div style={s.banner}>
        <strong style={s.title}>Cookie-Einstellungen</strong>
        <p style={s.desc}>
          Wir verwenden Cookies zur Analyse und Verbesserung unserer Website.
          Details finden Sie in unserer{" "}
          <a href="/datenschutz" style={s.link}>Datenschutzerklärung</a>.
        </p>
        <div style={s.actions}>
          <button onClick={deny} style={s.btnDeny}>Nur notwendige</button>
          <button onClick={accept} style={s.btnAccept}>Alle akzeptieren</button>
        </div>
      </div>
    </div>
  );
}
