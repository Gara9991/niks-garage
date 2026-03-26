"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import { analytics } from "@/lib/analytics";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <Image src="/images/logo.png" alt="NIK's GARAGE" width={180} height={60} style={{ objectFit: "contain" }} className={styles.footerLogo} />
            <p className={styles.footerTagline}>Erfahrung, Leidenschaft und ein bundesweites Partner-Netzwerk für Tesla, NIO und weitere Fabrikate.</p>
          </div>

          <div className={styles.footerNav}>
            <div className={styles.footerCol}>
              <h4>LEISTUNGEN</h4>
              <Link href="/tesla-specialist">TESLA Specialist</Link>
              <Link href="/nio-servicecenter">NIO ServiceCenter</Link>
              <Link href="/refurbished">Neu oder Refurbished?</Link>
            </div>
            <div className={styles.footerCol}>
              <h4>KONTAKT</h4>
              <a href="tel:017670037698" onClick={() => analytics.clickPhone("017670037698", "footer")}>0176 - 700 376 98</a>
              <a href="mailto:kontakt@niks-garage-nuernberg.de" onClick={() => analytics.clickEmail("footer")}>kontakt@niks-garage-nuernberg.de</a>
              <p>Nürnberg &amp; Bundesweit</p>
            </div>
            <div className={styles.footerCol}>
              <h4>UNTERNEHMEN</h4>
              <a href="https://niks-garage-concept.com" target="_blank" rel="noopener noreferrer">NIK&apos;s CONCEPT</a>
              <a href="https://www.evinity-gmbh.com" target="_blank" rel="noopener noreferrer">EVINITY GmbH</a>
              <Link href="/jobs">Jobs &amp; Karriere</Link>
            </div>
            <div className={styles.footerCol}>
              <h4>RECHTLICHES</h4>
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
              <a href="#">AGB</a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copy}>&copy; {new Date().getFullYear()} NIK&apos;S GARAGE. Electrified. Qualified. — Ihr NIK &amp; Partner-Team</p>
          <p className={styles.copy} style={{ opacity: 0.5 }}>
            Mit ❤ gemacht von{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.adsxperts.de"
              style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              adsXperts.de - SEO / Webdesign Marketing Agentur
            </a>{' '}
            2026
          </p>
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className={styles.backToTop}>BACK TO TOP ↑</a>
        </div>
      </div>
    </footer>
  );
}
