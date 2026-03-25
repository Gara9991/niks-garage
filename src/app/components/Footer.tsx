"use client";

import Image from "next/image";
import styles from "../page.module.css";

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
              <h4>KONTAKT</h4>
              <a href="tel:091195036398">0911 - 950 363 98</a>
              <a href="mailto:info@niks-garage.com">info@niks-garage.com</a>
              <p>Nürnberg &amp; Bundesweit</p>
            </div>
            <div className={styles.footerCol}>
              <h4>UNTERNEHMEN</h4>
              <a href="https://niks-garage-concept.com" target="_blank" rel="noopener noreferrer">NIK&apos;s CONCEPT</a>
              <a href="https://www.evinity-gmbh.com" target="_blank" rel="noopener noreferrer">EVINITY GmbH</a>
              <a href="#">Jobs &amp; Karriere</a>
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
          <p className={styles.copy}>&copy; {new Date().getFullYear()} NIK&apos;S GARAGE. Electrified. Qualified. — Ihr NIK &amp; Partner-Team</p>
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className={styles.backToTop}>BACK TO TOP ↑</a>
        </div>
      </div>
    </footer>
  );
}
