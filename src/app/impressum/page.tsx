import { Metadata } from "next";
import styles from "../subpage.module.css";
import legal from "./legal.module.css";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der EVINITY GmbH (Nik's Garage) – Angaben gemäß § 5 TMG.",
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <span className={styles.tag}>RECHTLICHES</span>
          <h1 className={styles.title}>Impressum.</h1>
          <p className={styles.subtitle}>Angaben gemäß § 5 TMG</p>
        </div>

        <div className={legal.content}>
          <section className={legal.section}>
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              EVINITY GmbH<br />
              (ehemals AutoCenter Langwasser GmbH)<br />
              Witschelstraße 60<br />
              90431 Nürnberg
            </p>
            <p>Sitz der Gesellschaft: Nürnberg</p>
          </section>

          <section className={legal.section}>
            <h2>Vertreten durch</h2>
            <p>Niklas Persch (Geschäftsführer)</p>
            <p>Amtsgericht Nürnberg HRB Nr. 17069</p>
          </section>

          <section className={legal.section}>
            <h2>Kontakt</h2>
            <p>
              Witschelstraße 60 | 90431 Nürnberg<br />
              Telefon: +49 1522 – 7649976<br />
              E-Mail: kontakt@niks-garage.com
            </p>
          </section>

          <section className={legal.section}>
            <h2>Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
              DE 206422156
            </p>
          </section>

          <section className={legal.section}>
            <h2>Haftung für Inhalte</h2>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Dienstanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section className={legal.section}>
            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section className={legal.section}>
            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
