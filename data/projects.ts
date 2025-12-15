import { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    title: "Sales Agent MCP - Assistant IA pour Sales",
    description:
      "Cas d'usage professionnel : Automatiser l'analyse des appels de vente pour gagner du temps et améliorer les performances commerciales. Intégration entre Claude AI et Fathom pour analyser automatiquement 100% de mes appels.",
    longDescription:
      "En tant qu'Account Executive, j'enregistre tous mes appels avec Fathom. Ce projet est né d'un besoin concret : comment exploiter ces données pour améliorer mes performances ? J'ai construit un serveur MCP qui connecte Claude AI à l'API Fathom, permettant à l'IA d'accéder instantanément à toutes mes transcriptions d'appels. L'impact business est direct : analyse automatique des objections clients, extraction des pain points, identification des patterns de succès, et génération de follow-ups personnalisés. C'est un laboratoire d'apprentissage où je maîtrise les APIs, l'architecture MCP, et surtout, je mesure l'impact réel de l'IA sur mon cycle de vente.",
    technologies: [
      "Claude AI",
      "MCP Protocol",
      "Fathom API",
      "TypeScript",
      "Node.js",
      "Express",
      "API Integration",
    ],
    features: [
      "🎯 Valeur Business : Économie de 2-3h par semaine sur l'analyse manuelle des appels",
      "📊 Analyse automatique des transcriptions d'appels de vente en temps réel",
      "💡 Extraction intelligente des pain points et objections clients",
      "🔍 Identification des patterns de réussite dans les conversations commerciales",
      "✅ Génération automatique de résumés structurés et d'actions de follow-up",
      "📈 Tracking des KPIs : durée d'appel, participation, sujets abordés",
      "🤖 Intégration native avec Claude AI via le Model Context Protocol",
      "⚡ Accès instantané à l'historique complet des appels depuis Claude",
      "🔐 Authentification API sécurisée et gestion des quotas",
      "☁️ Déployé sur Alpic pour un accès 24/7",
    ],
    links: {
      github: "https://github.com/yourusername/sales-agent-mcp",
      alpic: "https://alpic.ai",
    },
    icon: "📞",
  },
  {
    title: "Prochain cas d'usage en développement",
    description:
      "Pipeline automation, lead scoring avec IA, ou analyse prédictive ? Le prochain projet sera encore plus ambitieux pour continuer à maîtriser l'IA dans un contexte business réel.",
    longDescription:
      "Chaque nouveau projet est une opportunité d'explorer un nouveau cas d'usage professionnel. Les prochaines pistes : automatisation du pipeline de vente, scoring intelligent des leads, analyse prédictive du churn, ou générateur automatique de proposals personnalisées. L'objectif reste le même : apprendre en faisant, avec des projets qui créent de la valeur mesurable.",
    technologies: ["À définir selon le cas d'usage"],
    features: [
      "Focus sur un problème business réel et mesurable",
      "Intégration d'outils IA modernes (Claude, GPT, MCP, etc.)",
      "Architecture scalable et professionnelle",
      "ROI quantifiable et KPIs de performance",
    ],
    icon: "🚀",
  },
];

