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
  metadataBase: new URL('https://www.niks-garage.com'),
  title: {
    template: '%s | Freie Tesla Werkstatt Nürnberg | Nik\'s Garage',
    default: "Nik's Garage | Ihre freie Tesla Werkstatt in Nürnberg (inkl. NIO & Oldtimer)",
  },
  description: "Die freie Tesla Werkstatt in Nürnberg: Spezialist für Elektroautos (Tesla, NIO), MEYLE HD Fahrwerke, Hochvolt-Systeme sowie Oldtimer. Jetzt Termin vereinbaren. (4,8 Google-Sterne)",
  keywords: [
    "Tesla Werkstatt Nürnberg", "Freie Tesla Werkstatt", "Tesla Spezialist Nürnberg", "Tesla Service Nürnberg",
    "Tesla Reparatur Nürnberg", "Elektroauto Werkstatt Nürnberg", "NIO ServiceCenter Nürnberg", 
    "MEYLE HD", "Hochspannungsbatterie Reparatur", "Autowerkstatt Nürnberg",
    "Nik's Garage", "Oldtimer Werkstatt Nürnberg", "Auto Reparatur Nürnberg"
  ],
  authors: [{ name: "Nik's Garage" }],
  creator: "Nik's Garage",
  publisher: "Nik's Garage",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Nik's Garage | Ihre freie Tesla Werkstatt & Elektro-Spezialist",
    description: "Freie Tesla Werkstatt Nürnberg. MEYLE HD Fahrwerke, Hochvoltdiagnostik, NIO ServiceCenter und Oldtimer Restaurierung. 4,8 Sterne bei Google.",
    url: 'https://www.niks-garage.com',
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
    title: "Nik's Garage | Freie Tesla Werkstatt Nürnberg",
    description: "Der Spezialist für Tesla, NIO und Oldtimer in Nürnberg. Vereinbaren Sie Ihren Werkstatt-Termin bei Nik's Garage.",
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
  "image": "https://www.niks-garage.com/images/hero_clean.png",
  "@id": "https://www.niks-garage.com",
  "url": "https://www.niks-garage.com",
  "telephone": "015227649976",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Witschelstraße 50",
    "addressLocality": "Nürnberg",
    "postalCode": "90439",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 49.44490, 
    "longitude": 11.03666 
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
  "sameAs": [
    "https://www.instagram.com/niks_garage",
    "https://www.facebook.com/niks_garage",
    "https://www.youtube.com/niks_garage"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "109"
  },
  "priceRange": "$$",
  "description": "Freie Tesla Werkstatt und Spezialist für Elektroautos in Nürnberg. Zertifizierter Service für NIO und Restaurierung von Oldtimern."
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
