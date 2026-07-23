import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Sadia Ghufran | Child Specialist in Gulistan-e-Johar, Karachi",
    template: "%s | Dr. Sadia Ghufran",
  },
  description:
    "Dr. Sadia Ghufran — Best Pediatrician in Karachi. MBBS, MCPS, PMDC Verified. Compassionate child specialist serving Gulistan-e-Johar.",
  keywords: [
    "Pediatrician Gulistan-e-Johar Karachi",
    "Child Specialist Karachi",
    "Best Pediatrician Karachi",
    "Dr. Sadia Ghufran",
    "Child Doctor Gulistan-e-Johar",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Dr. Sadia Ghufran | Child Specialist",
    description:
      "Compassionate and expert pediatric care in Gulistan-e-Johar, Karachi.",
    type: "website",
    locale: "en_PK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen bg-warm-gradient font-sans text-secondary-text antialiased selection:bg-peach/30 selection:text-primary">
        <Navbar />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
