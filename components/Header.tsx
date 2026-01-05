"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-xl font-semibold text-foreground hover:text-accent transition-colors"
        >
          PA Sage
        </a>

        <div className="flex gap-8 items-center">
          <a
            href="#about"
            className="text-foreground/80 hover:text-accent transition-colors"
          >
            {t("nav.about")}
          </a>
          <a
            href="#demo"
            className="text-foreground/80 hover:text-accent transition-colors"
          >
            {t("nav.demo")}
          </a>
          <a
            href="#projects"
            className="text-foreground/80 hover:text-accent transition-colors"
          >
            {t("nav.projects")}
          </a>
          <a
            href="#contact"
            className="text-foreground/80 hover:text-accent transition-colors"
          >
            {t("nav.contact")}
          </a>
          
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 glass border hover:border-accent rounded-lg text-sm font-medium text-foreground/80 hover:text-accent transition-all hover:orange-glow"
            aria-label="Toggle language"
          >
            {language === "fr" ? "🇬🇧 EN" : "🇫🇷 FR"}
          </button>
        </div>
      </nav>
    </header>
  );
}

