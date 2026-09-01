"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { profile } from "@/data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="border-t border-glass-border py-8 px-6 glass">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground-muted text-sm">
            © {currentYear} Paul-Antoine Sage. {t("footer.rights")}
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-accent transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-accent transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-foreground-muted hover:text-accent transition-colors text-sm"
            >
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="text-foreground-muted hover:text-accent transition-colors text-sm"
            >
              {profile.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
