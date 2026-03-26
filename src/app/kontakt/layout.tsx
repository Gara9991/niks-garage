import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt & Termin vereinbaren',
  description: 'Jetzt Werkstatt-Termin bei Nik\'s Garage vereinbaren – Ihre freie Tesla Werkstatt in Nürnberg. Tesla, NIO & Oldtimer Service. ☎ 0176 70037698',
  keywords: ['Tesla Werkstatt Termin Nürnberg', 'Freie Tesla Werkstatt Kontakt', 'Tesla Reparatur Termin', 'NIO ServiceCenter Kontakt', 'Niks Garage Kontakt'],
  alternates: {
    canonical: '/kontakt',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Kontakt & Termin vereinbaren | Nik\'s Garage Nürnberg',
    description: 'Werkstatt-Termin bei Nik\'s Garage vereinbaren – freie Tesla Werkstatt in Nürnberg. Tesla, NIO & Oldtimer.',
    url: 'https://www.niks-garage-nuernberg.de/kontakt',
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
