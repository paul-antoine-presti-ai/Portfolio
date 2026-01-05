"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Badge from "@/components/Badge";
import ChatDemo from "@/components/ChatDemo";
import { projectsData } from "@/data/projects";
import { useTranslation } from "@/hooks/useTranslation";

export default function Home() {
  const { t, language } = useTranslation();
  const projects = projectsData[language];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <Section id="home" className="min-h-screen flex items-center pt-20">
        <div className="w-full">
          <div className="animate-fade-in">
            <div className="inline-block mb-4 animate-pulse">
              <Badge variant="accent">{t("hero.badge")}</Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              {t("hero.greeting")}
              <br />
              <span className="text-accent">{t("hero.name")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl leading-relaxed">
              {t("hero.description")}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#demo"
                className="px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-xl font-medium transition-all transform hover:scale-105 orange-glow-strong shadow-lg"
              >
                {t("hero.cta.demo")}
              </a>
              <a
                href="#projects"
                className="px-8 py-4 glass border hover:border-accent text-foreground rounded-xl font-medium transition-all hover:orange-glow"
              >
                {t("hero.cta.projects")}
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section
        id="about"
        title={t("about.title")}
        subtitle={t("about.subtitle")}
      >
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

      {/* Demo Section */}
      <Section
        id="demo"
        title={t("demo.title")}
        subtitle={t("demo.subtitle")}
        className="bg-background/50"
      >
        <ChatDemo />
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
              <a
                href="mailto:paul-antoine@presti.ai"
                className="block px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-xl font-medium transition-all transform hover:scale-105 orange-glow-strong shadow-lg"
              >
                {t("contact.cta")}
              </a>
              <div className="flex justify-center gap-6 pt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-muted hover:text-accent transition-colors"
                >
                  GitHub →
                </a>
                <a
                  href="https://linkedin.com"
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
