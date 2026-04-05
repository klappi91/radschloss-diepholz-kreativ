import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RadSchloß Diepholz — Fahrrad-Fachhandel & Meisterwerkstatt",
  description:
    "Erstklassiger Service aus Meisterhand. E-Bikes, Fahrräder, Reparatur & Dienstrad-Leasing in Diepholz. Victoria, Conway, HoheAcht, QiO.",
  keywords: [
    "Fahrrad Diepholz",
    "E-Bike Diepholz",
    "Fahrradwerkstatt",
    "RadSchloß",
    "Dienstrad-Leasing",
    "Victoria",
    "Conway",
    "HoheAcht",
  ],
  openGraph: {
    title: "RadSchloß Diepholz — Fahrrad-Fachhandel & Meisterwerkstatt",
    description:
      "Erstklassiger Service aus Meisterhand. E-Bikes, Fahrräder, Reparatur & Dienstrad-Leasing.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
