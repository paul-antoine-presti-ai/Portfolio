import type { Metadata } from "next";
import { Geist, Geist_Mono, Archivo, Space_Mono } from "next/font/google";
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

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Paul-Antoine Sage - Founding AE @ Presti AI (YC S24)",
  description: "Founding Account Executive at Presti AI (YC S24). $1M+ generated in 20 months. Based in Paris, able to relocate anywhere.",
  keywords: ["Account Executive", "AI", "Intelligence Artificielle", "Sales", "Business", "MCP", "Automation", "Cas d'usage"],
  authors: [{ name: "Paul-Antoine Sage" }],
  openGraph: {
    title: "Paul-Antoine Sage - Founding AE @ Presti AI (YC S24)",
    description: "Founding AE at Presti AI (YC S24). $1M+ generated in 20 months. Based in Paris, able to relocate anywhere.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${spaceMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
