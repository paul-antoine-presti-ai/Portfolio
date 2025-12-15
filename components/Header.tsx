"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

        <div className="flex gap-8">
          <a
            href="#about"
            className="text-foreground/80 hover:text-accent transition-colors"
          >
            À propos
          </a>
          <a
            href="#demo"
            className="text-foreground/80 hover:text-accent transition-colors"
          >
            Démo
          </a>
          <a
            href="#projects"
            className="text-foreground/80 hover:text-accent transition-colors"
          >
            Projets
          </a>
          <a
            href="#contact"
            className="text-foreground/80 hover:text-accent transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

