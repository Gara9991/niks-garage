import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ContactFAB from "./components/ContactFAB";
import Analytics from "./components/Analytics";
import CookieConsent from "./components/CookieConsent";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://niks-garage-nuernberg.de'),
  title: {
    template: '%s | Nik\'s Garage Nürnberg',
    default: "Nik's Garage – Freie Tesla Werkstatt Nürnberg | NIO & Oldtimer",
  },
  description: "Freie Tesla Werkstatt in Nürnberg: Spezialist für Tesla, NIO & Oldtimer. MEYLE HD Fahrwerke, Hochvolt-Diagnose & mehr. ★ 4,8 Google-Sterne. Jetzt Termin vereinbaren!",
  keywords: [
    "Tesla Werkstatt Nürnberg", "Freie Tesla Werkstatt", "Tesla Spezialist Nürnberg", "Tesla Service Nürnberg",
    "Tesla Reparatur Nürnberg", "Elektroauto Werkstatt Nürnberg", "NIO ServiceCenter Nürnberg",
    "MEYLE HD", "Hochspannungsbatterie Reparatur", "Autowerkstatt Nürnberg",
    "Nik's Garage", "Oldtimer Werkstatt Nürnberg", "Auto Reparatur Nürnberg"
  ],
  authors: [{ name: "Nik's Garage" }],
  creator: "Nik's Garage",
  publisher: "Nik's Garage",
  alternates: {
    canonical: '/',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Nik's Garage – Freie Tesla Werkstatt Nürnberg",
    description: "Freie Tesla Werkstatt Nürnberg: MEYLE HD Fahrwerke, Hochvolt-Diagnose, NIO ServiceCenter & Oldtimer. ★ 4,8 Google-Sterne.",
    url: 'https://niks-garage-nuernberg.de',
    siteName: "Nik's Garage Tesla Werkstatt Nürnberg",
    images: [
      {
        url: '/images/hero_clean.png',
        width: 1200,
        height: 630,
        alt: "Nik's Garage Werkstatt in Nürnberg",
      },
      {
        url: '/images/tesla_workshop.png',
        width: 800,
        height: 600,
        alt: 'Niks Garage Tesla Werkstatt',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nik's Garage – Freie Tesla Werkstatt Nürnberg",
    description: "Spezialist für Tesla, NIO & Oldtimer in Nürnberg. Jetzt Werkstatt-Termin vereinbaren!",
    images: ['/images/hero_clean.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  appleWebApp: {
    title: "Niks Garage",
    statusBarStyle: 'black-translucent',
    capable: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["AutoRepair", "LocalBusiness"],
  "name": "Nik's Garage",
  "alternateName": "NIK'S GARAGE – Electrified. Qualified.",
  "image": "https://niks-garage-nuernberg.de/images/hero_clean.png",
  "@id": "https://niks-garage-nuernberg.de",
  "url": "https://niks-garage-nuernberg.de",
  "telephone": "015227649976",
  "email": "kontakt@niks-garage-nuernberg.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Witschelstraße 50",
    "addressLocality": "Nürnberg",
    "postalCode": "90439",
    "addressRegion": "Bayern",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 49.4473512,
    "longitude": 11.046918
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday"],
      "opens": "08:00",
      "closes": "14:00"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Nürnberg" },
    { "@type": "City", "name": "Bad Honnef" },
    { "@type": "City", "name": "Lohmar" },
    { "@type": "City", "name": "Frankfurt" },
    { "@type": "State", "name": "Bayern" },
    { "@type": "Country", "name": "Deutschland" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Werkstatt-Leistungen",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tesla Wartung & Service" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "NIO ServiceCenter" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hochvolt-Diagnose & Batteriereparatur" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Achsvermessung & Fahrwerk (MEYLE HD)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Antrieb & Drive Unit Reparatur" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bremsenservice" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Refurbished Ersatzteile" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Oldtimer-Restaurierung" } }
    ]
  },
  "sameAs": [
    "https://www.google.com/maps/place/Nik%27s+Garage/@49.4473512,11.046918"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "109"
  },
  "priceRange": "$$",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, EC, Credit Card",
  "description": "Freie Tesla Werkstatt und Spezialist für Elektroautos in Nürnberg. Zertifizierter Service für Tesla, NIO und Restaurierung von Oldtimern. MEYLE HD Fahrwerke, Hochvolt-Diagnose & bundesweites Partner-Netzwerk."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Analytics />
        <Navigation />
        {children}
        <Footer />
        <ContactFAB />
        <CookieConsent />
      </body>
    </html>
  );
}
