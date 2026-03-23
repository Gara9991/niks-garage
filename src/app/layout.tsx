import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "NIK's GARAGE | Tesla Specialist & Premium Service",
  description: "Erleben Sie den besten und modernsten Service für Ihren Tesla. Spezialist für Elektroautos, Tesla, NIO und MEYLE. Buchen Sie jetzt Ihren Termin.",
  keywords: "Tesla Werkstatt, NIK's GARAGE, Tesla Service, Elektroauto Reparatur, NIO, MEYLE, Refurbished Teile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
