"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Badge from "@/components/Badge";
import WelcomeVideo from "@/components/WelcomeVideo";
import { projectsData } from "@/data/projects";
import { profile } from "@/data/profile";
import { useTranslation } from "@/hooks/useTranslation";

export default function Home() {
  const { t, language } = useTranslation();
  const projects = projectsData[language];
  const [photoError, setPhotoError] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <Section id="home" className="min-h-screen flex items-center pt-20">
        <div className="w-full grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
          {/* Avatar */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-accent/25 blur-3xl" aria-hidden="true" />
              <div className="relative w-44 h-44 md:w-72 md:h-72 rounded-full p-[3px] bg-gradient-to-br from-accent-light via-accent to-accent-hover orange-glow-strong">
                <div className="w-full h-full rounded-full bg-background-secondary overflow-hidden flex items-center justify-center">
                  {!photoError ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src="/paul-antoine.jpg"
                      alt="Paul-Antoine Sage"
                      onError={() => setPhotoError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-6xl md:text-8xl font-bold bg-gradient-to-br from-accent-light to-accent bg-clip-text text-transparent select-none">
                      PA
                    </span>
                  )}
                </div>
              </div>
              {/* Status badge */}
              <div className="absolute bottom-2 right-2 md:bottom-5 md:right-5 flex items-center gap-2 px-3 py-1.5 glass rounded-full text-xs font-medium text-foreground/90">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {t("hero.status")}
              </div>
            </div>
          </div>

          {/* Texte */}
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="inline-block mb-4 animate-pulse">
              <Badge variant="accent">{t("hero.badge")}</Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              {t("hero.greeting")}
              <br />
              <span className="text-accent">{t("hero.name")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-6 max-w-2xl leading-relaxed">
              {t("hero.description")}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: "🚀", text: t("hero.highlight.role") },
                { icon: "📈", text: t("hero.highlight.revenue") },
                { icon: "📍", text: t("hero.highlight.location") },
              ].map((highlight, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm md:text-base font-medium text-foreground"
                >
                  <span>{highlight.icon}</span>
                  {highlight.text}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-xl font-medium transition-all transform hover:scale-105 orange-glow-strong shadow-lg"
              >
                {t("hero.cta.projects")}
              </a>
              <a
                href="#contact"
                className="px-8 py-4 glass border hover:border-accent text-foreground rounded-xl font-medium transition-all hover:orange-glow"
              >
                {t("hero.cta.contact")}
              </a>
            </div>
          </div>
        </div>
      </Section>

      <WelcomeVideo />

      {/* About Section */}
      <Section
        id="about"
        title={t("about.title")}
        subtitle={t("about.subtitle")}
      >
        {/* Bio + infos rapides */}
        <div className="mb-12 animate-fade-in">
          <div className="p-8 glass-card rounded-2xl">
            <h3 className="text-xl font-semibold text-accent mb-4">
              {t("about.bio.title")}
            </h3>
            <p className="text-foreground/85 leading-relaxed text-lg mb-6">
              {t("about.bio.text")}
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                `🚀 ${t("about.fact.role")}`,
                `📈 ${t("about.fact.arr")}`,
                `📍 ${t("about.fact.location")}`,
                `🤖 ${t("about.fact.explore")}`,
              ].map((fact, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-secondary/60 border border-glass-border text-sm text-foreground/90"
                >
                  {fact}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 animate-slide-up">
          <div className="space-y-6">
            <div className="p-6 glass-card rounded-2xl">
              <h3 className="text-xl font-semibold text-accent mb-3">
                {t("about.mission.title")}
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {t("about.mission.text")}
              </p>
            </div>

            <div className="p-6 glass-card rounded-2xl">
              <h3 className="text-xl font-semibold text-accent mb-3">
                {t("about.approach.title")}
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {t("about.approach.text")}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 glass-card rounded-2xl">
              <h3 className="text-xl font-semibold text-accent mb-4">
                {t("about.stack.title")}
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Claude AI</Badge>
                <Badge>MCP Protocol</Badge>
                <Badge>Fathom API</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Node.js</Badge>
                <Badge>Python</Badge>
                <Badge>Sales Automation</Badge>
                <Badge>API Integration</Badge>
                <Badge>Data Analysis</Badge>
              </div>
            </div>

            <div className="p-6 glass-card rounded-2xl">
              <h3 className="text-xl font-semibold text-accent mb-3">
                {t("about.focus.title")}
              </h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>{t("about.focus.1")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>{t("about.focus.2")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>{t("about.focus.3")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>{t("about.focus.4")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section
        id="projects"
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
      >
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      >
        <div className="max-w-2xl mx-auto">
          <div className="p-8 glass-card rounded-2xl text-center space-y-6 animate-fade-in">
            <div className="text-6xl mb-4">💼</div>
            <h3 className="text-2xl font-semibold text-foreground">
              {t("contact.heading")}
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              {t("contact.text")}
            </p>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="block px-6 py-4 bg-accent hover:bg-accent-hover text-white rounded-xl font-medium transition-all transform hover:scale-105 orange-glow-strong shadow-lg"
                >
                  <span className="block text-xs uppercase tracking-wide opacity-80 mb-1">
                    {t("contact.emailLabel")}
                  </span>
                  {profile.email}
                </a>
                <a
                  href={`tel:${profile.phone}`}
                  className="block px-6 py-4 glass border hover:border-accent text-foreground rounded-xl font-medium transition-all hover:orange-glow"
                >
                  <span className="block text-xs uppercase tracking-wide text-foreground/50 mb-1">
                    {t("contact.phoneLabel")}
                  </span>
                  {profile.phoneDisplay}
                </a>
              </div>
              <div className="flex justify-center gap-6 pt-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-muted hover:text-accent transition-colors"
                >
                  GitHub →
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-muted hover:text-accent transition-colors"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
