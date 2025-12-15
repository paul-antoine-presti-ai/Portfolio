"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Badge from "@/components/Badge";
import ChatDemo from "@/components/ChatDemo";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <Section id="home" className="min-h-screen flex items-center pt-20">
        <div className="w-full">
          <div className="animate-fade-in">
            <div className="inline-block mb-4 animate-pulse">
              <Badge variant="accent">Account Executive • AI Enthusiast</Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Bonjour, je suis
              <br />
              <span className="text-accent">Paul-Antoine Sage</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl leading-relaxed">
              Account Executive passionné par l'IA. Je construis des cas d'usage concrets 
              pour maîtriser l'intelligence artificielle dans un cadre professionnel et 
              apporter de la valeur mesurable aux entreprises réelles.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#demo"
                className="px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-xl font-medium transition-all transform hover:scale-105 orange-glow-strong shadow-lg"
              >
                Tester la démo interactive
              </a>
              <a
                href="#projects"
                className="px-8 py-4 glass border hover:border-accent text-foreground rounded-xl font-medium transition-all hover:orange-glow"
              >
                Voir les cas d'usage
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section
        id="about"
        title="À propos"
        subtitle="De l'Account Executive à l'AI Enthusiast - Créer de la valeur concrète avec l'IA"
      >
        <div className="grid md:grid-cols-2 gap-12 animate-slide-up">
          <div className="space-y-6">
            <div className="p-6 glass-card rounded-2xl">
              <h3 className="text-xl font-semibold text-accent mb-3">
                🎯 Ma Mission
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                En tant qu'Account Executive, j'ai découvert le potentiel immense de l'IA 
                pour transformer les processus métier. Ma mission est d'apprendre à maîtriser 
                l'IA en créant des cas d'usage concrets qui apportent une valeur mesurable 
                aux entreprises réelles.
              </p>
            </div>

            <div className="p-6 glass-card rounded-2xl">
              <h3 className="text-xl font-semibold text-accent mb-3">
                💼 Mon Approche
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Plutôt que d'apprendre l'IA en théorie, je construis des projets professionnels 
                qui résolvent de vrais problèmes business. Chaque projet est un laboratoire 
                d'apprentissage où je teste, itère et mesure l'impact concret de l'IA sur 
                l'efficacité opérationnelle.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 glass-card rounded-2xl">
              <h3 className="text-xl font-semibold text-accent mb-4">
                🛠️ Stack IA & Tech
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
                🌟 Focus Métier
              </h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Automatisation des processus de vente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Analyse intelligente de conversations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Optimisation du cycle de vente avec l'IA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>ROI mesurable et KPIs concrets</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Demo Section */}
      <Section
        id="demo"
        title="🤖 Démo Interactive"
        subtitle="Testez le Sales Agent en action - Analyse IA de vos appels de vente"
        className="bg-background/50"
      >
        <ChatDemo />
      </Section>

      {/* Projects Section */}
      <Section
        id="projects"
        title="Mes Cas d'Usage IA"
        subtitle="Projets concrets pour maîtriser l'IA et créer de la valeur pour des entreprises réelles"
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
        title="Contact"
        subtitle="Discutons de vos défis business et de l'impact que l'IA peut avoir"
      >
        <div className="max-w-2xl mx-auto">
          <div className="p-8 glass-card rounded-2xl text-center space-y-6 animate-fade-in">
            <div className="text-6xl mb-4">💼</div>
            <h3 className="text-2xl font-semibold text-foreground">
              Échangeons sur vos projets IA
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              Vous avez un défi business qui pourrait bénéficier de l'IA ? 
              Vous voulez automatiser vos processus de vente ? 
              Parlons-en et trouvons ensemble des cas d'usage concrets !
            </p>
            <div className="space-y-4">
              <a
                href="mailto:paul-antoine@presti.ai"
                className="block px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-xl font-medium transition-all transform hover:scale-105 orange-glow-strong shadow-lg"
              >
                Envoyer un email
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
