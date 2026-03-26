"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../page.module.css";
import { analytics } from "@/lib/analytics";

export default function Navigation() {
  const [theme, setTheme] = useState("dark");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
  }, [pathname]);

  const NAV_ITEMS = [
    { label: "TESLA", href: "/tesla-specialist" },
    { label: "NIO", href: "/nio-servicecenter" },
    { label: "Refurbished", href: "/refurbished" },
    { label: "Karriere", href: "/jobs" },
    { label: "Kontakt", href: "/kontakt" },
  ];

  return (
    <>
      <nav className={`${styles.nav} ${isScrolled ? styles.navScrolled : ""} ${mobileMenuOpen ? styles.navMobileOpen : ""}`}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.logo}>
            <Image src="/images/logo.png" alt="NIK's GARAGE" width={140} height={45} style={{ objectFit: "contain" }} priority />
          </Link>
          <div className={styles.desktopLinks}>
            {NAV_ITEMS.map((item, i) => (
              <Link key={i} href={item.href} onClick={() => analytics.clickNav(item.label)}>{item.label}</Link>
            ))}
          </div>
          <div className={styles.navActions}>
            <button onClick={() => { setTheme((t) => { const next = t === "dark" ? "light" : "dark"; analytics.toggleTheme(next); return next; }); }} className={styles.themeToggleBtn} aria-label="Theme umschalten">
              <div className={styles.themeTrack}>
                <div className={`${styles.themeThumb} ${theme === "light" ? styles.themeThumbLight : ""}`}>
                  {theme === "dark" ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                  )}
                </div>
              </div>
            </button>
            <a href="tel:091195036398" className={styles.navPhone} onClick={() => analytics.clickPhone("091195036398", "nav")}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>0911 / 950 363 98</span>
            </a>
            <button onClick={() => setMobileMenuOpen((o) => !o)} className={styles.burger} aria-label="Menü">
              <span className={`${styles.bLine} ${mobileMenuOpen ? styles.bOpen1 : ""}`} />
              <span className={`${styles.bLine} ${mobileMenuOpen ? styles.bOpen2 : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileOverlay} ${mobileMenuOpen ? styles.mobileOpen : ""}`}>
        <div className={styles.mobileInner}>
          <div className={styles.mobileLinks}>
            <span className={styles.mobileLabel}>Navigation</span>
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => { setMobileMenuOpen(false); analytics.clickNav(item.label); }}
                style={{ transitionDelay: `${0.1 + i * 0.05}s` }}
                className={mobileMenuOpen ? styles.mobileLinkAnim : ""}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className={`${styles.mobileFooter} ${mobileMenuOpen ? styles.mobileLinkAnim : ""}`} style={{ transitionDelay: "0.4s" }}>
            <span className={styles.mobileLabel}>Direktkontakt</span>
            <a href="tel:091195036398" className={styles.mobilePhoneBig}>0911 / 950 363 98</a>
            <a href="mailto:kontakt@niks-garage.com" className={styles.mobileMailText}>kontakt@niks-garage.com</a>
          </div>
        </div>
      </div>
    </>
  );
}
