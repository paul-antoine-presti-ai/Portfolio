import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paul-Antoine Sage - Account Executive & AI Enthusiast",
  description: "Account Executive passionné par l'IA. Je crée des cas d'usage concrets avec l'IA pour apporter de la valeur mesurable aux entreprises réelles.",
  keywords: ["Account Executive", "AI", "Intelligence Artificielle", "Sales", "Business", "MCP", "Automation", "Cas d'usage"],
  authors: [{ name: "Paul-Antoine Sage" }],
  openGraph: {
    title: "Paul-Antoine Sage - Account Executive & AI Enthusiast",
    description: "Cas d'usage IA concrets pour entreprises - Sales automation, analyse de données, optimisation business",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
