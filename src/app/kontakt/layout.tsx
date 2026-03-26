import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt & Termine | Freie Tesla Werkstatt Nürnberg - Nik\'s Garage',
  description: 'Sichern Sie sich jetzt Ihren Termin bei Nik\'s Garage, der freien Tesla Werkstatt in Nürnberg. Spezialgebiet: Tesla, E-Autos (NIO) & Oldtimer. Hotline: 01522 7649976.',
  keywords: ['Tesla Werkstatt Termin Nürnberg', 'Freie Tesla Werkstatt Kontakt', 'Tesla Reparatur Termin', 'NIO ServiceCenter Kontakt', 'Niks Garage Kontakt'],
  openGraph: {
    title: 'Kontakt & Termine | Freie Tesla Werkstatt Nürnberg',
    description: 'Sichern Sie sich jetzt Ihren Termin beim Tesla-Spezialisten in Nürnberg. Auch zertifizierter Service für NIO und Oldtimer.',
    url: 'https://www.niks-garage.com/kontakt',
    images: [{ url: '/images/hero_clean.png', width: 1200, height: 630 }],
  }
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
