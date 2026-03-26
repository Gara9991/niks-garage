import { Metadata } from "next";
import styles from "../subpage.module.css";
import legal from "../impressum/legal.module.css";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der EVINITY GmbH (Nik's Garage) – Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <span className={styles.tag}>RECHTLICHES</span>
          <h1 className={styles.title}>Datenschutz.</h1>
          <p className={styles.subtitle}>Datenschutzerklärung gemäß DSGVO</p>
        </div>

        <div className={legal.content}>
          {/* 1 */}
          <section className={legal.section}>
            <h2>1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              EVINITY GmbH (ehemals AutoCenter Langwasser GmbH)<br />
              Niklas Persch (Geschäftsführer)<br />
              Witschelstraße 60, 90431 Nürnberg<br />
              Telefon: +49 176 – 70037698<br />
              E-Mail: kontakt@niks-garage-nuernberg.de
            </p>
          </section>

          {/* 2 */}
          <section className={legal.section}>
            <h2>2. Allgemeines zur Datenverarbeitung</h2>
            <p>
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.
            </p>
          </section>

          {/* 3 */}
          <section className={legal.section}>
            <h2>3. Rechtsgrundlagen</h2>
            <p>
              Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung einholen, dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage.
            </p>
            <p>
              Bei der Verarbeitung personenbezogener Daten, die zur Erfüllung eines Vertrages erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind (z. B. Terminanfragen).
            </p>
            <p>
              Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist, dient Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage.
            </p>
            <p>
              Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich und überwiegen die Interessen, Grundrechte und Grundfreiheiten des Betroffenen das erstgenannte Interesse nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage.
            </p>
          </section>

          {/* 4 */}
          <section className={legal.section}>
            <h2>4. Hosting und Server-Log-Dateien</h2>
            <p>
              Unser Hosting-Anbieter erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:
            </p>
            <ul>
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse (anonymisiert)</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website.
            </p>
          </section>

          {/* 5 */}
          <section className={legal.section}>
            <h2>5. Cookies</h2>
            <p>
              Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und die Ihr Browser speichert.
            </p>
            <h3>Technisch notwendige Cookies</h3>
            <p>
              Einige Cookies sind für den Betrieb der Website technisch notwendig. Sie ermöglichen grundlegende Funktionen und sind für die einwandfreie Funktion der Website erforderlich. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <h3>Analyse-Cookies</h3>
            <p>
              Darüber hinaus setzen wir Cookies ein, die eine Analyse des Surfverhaltens der Nutzer ermöglichen. Diese Cookies werden nur nach Ihrer ausdrücklichen Einwilligung gesetzt (Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre Einwilligung jederzeit über den Cookie-Banner auf unserer Website widerrufen.
            </p>
          </section>

          {/* 6 */}
          <section className={legal.section}>
            <h2>6. Google Analytics</h2>
            <p>
              Diese Website nutzt – nach Ihrer Einwilligung – Google Analytics 4, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google").
            </p>
            <h3>Umfang der Verarbeitung</h3>
            <p>
              Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in der EU übertragen und dort gespeichert.
            </p>
            <h3>IP-Anonymisierung</h3>
            <p>
              Wir haben auf dieser Website die IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt.
            </p>
            <h3>Google Consent Mode v2</h3>
            <p>
              Wir verwenden den Google Consent Mode v2. Ohne Ihre Einwilligung werden keine Analyse-Cookies gesetzt und keine personenbezogenen Daten an Google übermittelt. Erst nach Ihrer aktiven Zustimmung über unseren Cookie-Banner wird die Datenerhebung aktiviert.
            </p>
            <h3>Widerruf der Einwilligung</h3>
            <p>
              Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie die Cookie-Einstellungen in Ihrem Browser löschen oder den Cookie-Banner erneut aufrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>
            <p>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
            </p>
          </section>

          {/* 7 */}
          <section className={legal.section}>
            <h2>7. Kontaktaufnahme</h2>
            <p>
              Wenn Sie uns per Telefon, E-Mail oder über unser Kontaktformular kontaktieren, werden die von Ihnen mitgeteilten Daten (Name, E-Mail-Adresse, Telefonnummer, Fahrzeugdaten, Nachricht) zum Zwecke der Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung Ihrer Anfrage). Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind.
            </p>
          </section>

          {/* 8 */}
          <section className={legal.section}>
            <h2>8. Ihre Rechte als betroffene Person</h2>
            <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
            <ul>
              <li><strong>Auskunftsrecht</strong> (Art. 15 DSGVO) – Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.</li>
              <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO) – Sie können die Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.</li>
              <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO) – Sie können die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung, zur Erfüllung einer rechtlichen Verpflichtung oder aus Gründen des öffentlichen Interesses erforderlich ist.</li>
              <li><strong>Recht auf Einschränkung</strong> (Art. 18 DSGVO) – Sie können die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.</li>
              <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO) – Sie können verlangen, die von Ihnen bereitgestellten personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
              <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO) – Sie können jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einlegen.</li>
              <li><strong>Recht auf Widerruf</strong> (Art. 7 Abs. 3 DSGVO) – Sie können Ihre einmal erteilte Einwilligung jederzeit gegenüber uns widerrufen.</li>
            </ul>
          </section>

          {/* 9 */}
          <section className={legal.section}>
            <h2>9. Beschwerderecht bei einer Aufsichtsbehörde</h2>
            <p>
              Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer Aufsichtsbehörde zu, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
            </p>
            <p>
              Zuständige Aufsichtsbehörde:<br />
              Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
              Promenade 18, 91522 Ansbach<br />
              <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer">www.lda.bayern.de</a>
            </p>
          </section>

          {/* 10 */}
          <section className={legal.section}>
            <h2>10. SSL-/TLS-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          {/* 11 */}
          <section className={legal.section}>
            <h2>11. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
