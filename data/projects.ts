import { Project } from "@/components/ProjectCard";

export const projectsData = {
  fr: [
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
      title: "MétéoTrader - Prédiction Prix Électricité France",
      description:
        "Dashboard ML temps réel qui prédit les prix de l'électricité en France via Machine Learning, en analysant données météo (Open-Meteo) et production énergétique (RTE). Performance validée : R² de 0.81 avec 7.3% d'erreur moyenne sur 744h de données réelles.",
      longDescription:
        "MétéoTrader est né d'une question business concrète : comment anticiper les prix de l'électricité pour optimiser les coûts industriels ? J'ai construit un pipeline ML complet intégrant 4 APIs (RTE + Open-Meteo) pour récupérer données météo, production par filière (nucléaire, éolien, solaire) et consommation France en temps réel. Le modèle Random Forest prédit les prix avec 81% de précision (R²=0.81) sur 744h de données réelles. Cas d'usage business : trading électricité, optimisation production industrielle, planification énergétique. Le dashboard Streamlit permet d'explorer les corrélations météo-prix, visualiser l'impact des renouvelables, et identifier les patterns de volatilité. ROI potentiel : 10-15% d'économies sur la facture électrique industrielle.",
      technologies: [
        "Python 3.13",
        "Machine Learning (Scikit-learn)",
        "Streamlit Dashboard",
        "Plotly (Visualisation)",
        "RTE API (OAuth2)",
        "Open-Meteo API",
        "Pandas & NumPy",
        "Random Forest",
      ],
      features: [
        "🎯 Performance : R² de 0.81 (81% variance expliquée) et erreur de seulement 7.3%",
        "📊 744 heures de données réelles (météo + production + consommation France)",
        "⚡ Intégration OAuth2 avec 4 APIs RTE (Prix, Production, Consommation, Forecast)",
        "🌡️ Analyse impact météo : température, vitesse vent, radiation solaire sur les prix",
        "🔋 Visualisation production par filière : nucléaire, éolien, solaire, hydro, gaz",
        "💰 Génération prix réalistes basée sur loi offre/demande économique",
        "📈 Dashboard interactif : graphiques temps réel, feature importance, insights business",
        "🎨 Interface moderne : dark mode élégant avec touches orange (Mistral-inspired)",
        "🤖 16 features engineering : heures pointe, production renouvelable, gap offre-demande",
        "☁️ Déployable Streamlit Cloud : accès 24/7 avec URL publique",
      ],
      links: {
        demo: "https://meteo-trader-btjtstc9gy72eupdtzsgzj.streamlit.app",
        github: "https://github.com/paul-antoine-presti-ai/meteo-trader",
      },
      icon: "⚡",
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
  ],
  en: [
    {
      title: "Sales Agent MCP - AI Assistant for Sales",
      description:
        "Professional use case: Automate sales call analysis to save time and improve commercial performance. Integration between Claude AI and Fathom to automatically analyze 100% of my calls.",
      longDescription:
        "As an Account Executive, I record all my calls with Fathom. This project was born from a concrete need: how to leverage this data to improve my performance? I built an MCP server that connects Claude AI to the Fathom API, allowing the AI to instantly access all my call transcriptions. The business impact is direct: automatic analysis of customer objections, extraction of pain points, identification of success patterns, and generation of personalized follow-ups. It's a learning laboratory where I master APIs, MCP architecture, and most importantly, I measure the real impact of AI on my sales cycle.",
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
        "🎯 Business Value: Save 2-3h per week on manual call analysis",
        "📊 Automatic analysis of sales call transcriptions in real-time",
        "💡 Intelligent extraction of pain points and customer objections",
        "🔍 Identification of success patterns in commercial conversations",
        "✅ Automatic generation of structured summaries and follow-up actions",
        "📈 KPI tracking: call duration, participation, topics discussed",
        "🤖 Native integration with Claude AI via Model Context Protocol",
        "⚡ Instant access to complete call history from Claude",
        "🔐 Secure API authentication and quota management",
        "☁️ Deployed on Alpic for 24/7 access",
      ],
      links: {
        github: "https://github.com/yourusername/sales-agent-mcp",
        alpic: "https://alpic.ai",
      },
      icon: "📞",
    },
    {
      title: "MétéoTrader - France Electricity Price Prediction",
      description:
        "Real-time ML dashboard that predicts electricity prices in France via Machine Learning, analyzing weather data (Open-Meteo) and energy production (RTE). Validated performance: R² of 0.81 with 7.3% average error on 744h of real data.",
      longDescription:
        "MétéoTrader was born from a concrete business question: how to anticipate electricity prices to optimize industrial costs? I built a complete ML pipeline integrating 4 APIs (RTE + Open-Meteo) to retrieve weather data, production by sector (nuclear, wind, solar) and France consumption in real-time. The Random Forest model predicts prices with 81% accuracy (R²=0.81) on 744h of real data. Business use cases: electricity trading, industrial production optimization, energy planning. The Streamlit dashboard allows exploring weather-price correlations, visualizing renewable impact, and identifying volatility patterns. Potential ROI: 10-15% savings on industrial electricity bills.",
      technologies: [
        "Python 3.13",
        "Machine Learning (Scikit-learn)",
        "Streamlit Dashboard",
        "Plotly (Visualization)",
        "RTE API (OAuth2)",
        "Open-Meteo API",
        "Pandas & NumPy",
        "Random Forest",
      ],
      features: [
        "🎯 Performance: R² of 0.81 (81% variance explained) and only 7.3% error",
        "📊 744 hours of real data (weather + production + France consumption)",
        "⚡ OAuth2 integration with 4 RTE APIs (Prices, Production, Consumption, Forecast)",
        "🌡️ Weather impact analysis: temperature, wind speed, solar radiation on prices",
        "🔋 Production visualization by sector: nuclear, wind, solar, hydro, gas",
        "💰 Realistic price generation based on supply-demand economic law",
        "📈 Interactive dashboard: real-time charts, feature importance, business insights",
        "🎨 Modern interface: elegant dark mode with orange touches (Mistral-inspired)",
        "🤖 16 engineered features: peak hours, renewable production, supply-demand gap",
        "☁️ Streamlit Cloud deployable: 24/7 access with public URL",
      ],
      links: {
        demo: "https://meteo-trader-btjtstc9gy72eupdtzsgzj.streamlit.app",
        github: "https://github.com/paul-antoine-presti-ai/meteo-trader",
      },
      icon: "⚡",
    },
    {
      title: "Next use case in development",
      description:
        "Pipeline automation, AI-powered lead scoring, or predictive analysis? The next project will be even more ambitious to continue mastering AI in a real business context.",
      longDescription:
        "Each new project is an opportunity to explore a new professional use case. Next tracks: sales pipeline automation, intelligent lead scoring, churn predictive analysis, or automatic personalized proposal generator. The goal remains the same: learn by doing, with projects that create measurable value.",
      technologies: ["To be defined based on use case"],
      features: [
        "Focus on a real and measurable business problem",
        "Integration of modern AI tools (Claude, GPT, MCP, etc.)",
        "Scalable and professional architecture",
        "Quantifiable ROI and performance KPIs",
      ],
      icon: "🚀",
    },
  ],
};

// Backward compatibility - export default French version
export const projects: Project[] = projectsData.fr;
