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
    <html lang="fr" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
