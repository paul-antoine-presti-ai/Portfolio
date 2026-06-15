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
      title: "AudioLearn — Bibliothèque de leçons audio",
      description:
        "Application web qui transforme des leçons écrites sur la tech (entreprises, outils, concepts comme Databricks, SQL, le cloud) en audiobooks écoutables en arrière-plan, comme un podcast. Voix de synthèse haute qualité, lecture écran verrouillé sur iPhone.",
      longDescription:
        "AudioLearn est née d'un besoin personnel : apprendre en marchant, écouteurs sur les oreilles, téléphone verrouillé. Plutôt qu'une simple synthèse vocale (qui se coupe dès que l'écran d'iPhone se verrouille), j'ai conçu un pipeline qui pré-génère de vrais fichiers MP3 via l'API ElevenLabs, lus dans un lecteur HTML couplé à la Media Session API — ce qui permet une lecture continue en arrière-plan avec les contrôles sur l'écran verrouillé, exactement comme une app de podcast. Le contenu est rédigé sur mesure (niveau débutant → intermédiaire) puis converti en audio en une commande, avec un choix de fournisseur (ElevenLabs pour la qualité, OpenAI pour le coût). Le site est statique, déployé sur Vercel, installable comme une PWA, et tombe automatiquement sur la voix du navigateur tant qu'une leçon n'a pas encore son audio. Première leçon publiée : Databricks expliqué via le cas Netflix.",
      technologies: [
        "JavaScript (Vanilla)",
        "Media Session API",
        "ElevenLabs API",
        "OpenAI TTS",
        "Web Speech API",
        "Node.js",
        "PWA",
        "Vercel",
      ],
      features: [
        "🎧 Lecture en arrière-plan et écran verrouillé sur iPhone via la Media Session API (comme un podcast)",
        "🗣️ Voix de synthèse haute qualité générées par ElevenLabs, avec repli automatique sur la voix du navigateur",
        "⚙️ Pipeline text-to-speech multi-fournisseurs (ElevenLabs ou OpenAI) en une seule commande",
        "📚 Bibliothèques thématiques de leçons-audiobooks, pensées pour l'écoute (niveau débutant → intermédiaire)",
        "📱 PWA installable sur l'écran d'accueil, expérience plein écran",
        "💾 Progression sauvegardée, reprise automatique et contrôle de la vitesse de lecture",
        "🚀 Site statique déployé sur Vercel avec redéploiement automatique, zéro backend",
        "📝 Première leçon : Databricks via le cas concret Netflix (~14 min d'audio)",
      ],
      links: {
        github: "https://github.com/paul-antoine-presti-ai/audiolearn",
        demo: "https://audiolearn-seven.vercel.app/",
      },
      icon: "🎧",
    },
    {
      title: "Alpha Arena — Arène de 2 agents de trading IA",
      description:
        "Deux agents autonomes propulsés par Claude, au tempérament opposé (agressif vs équilibré), s'affrontent sur des comptes Alpaca simulés. Chaque agent fait sa veille, décide d'acheter/vendre/garder, puis une couche de garde-fous déterministes revérifie chaque décision avant exécution. 100 % simulation.",
      longDescription:
        "Alpha Arena explore une question d'ingénierie : peut-on faire trader des agents IA de façon autonome mais sûre ? J'ai construit deux traders Claude aux personnalités opposées — l'un agressif (chasse le momentum, concentre jusqu'à 40 % sur une conviction, coupe vite les pertes), l'autre équilibré (garde du cash, plafonne les positions, n'entre qu'avec une forte confiance). À chaque cycle : veille (prix récents + actualité sur une watchlist d'actions US), puis Claude produit un plan d'action structuré (sortie validée par Pydantic), et enfin une couche de validation déterministe a le dernier mot — cash suffisant ? quantité détenue ? position sous le plafond ? On ne fait jamais confiance aveuglément au LLM avant de toucher, même fictivement, à de l'argent. L'enseignement le plus précieux est assumé dans le projet : un agent LLM ne prédit pas les cours et ne bat pas un simple ETF sur la durée. La vraie valeur est ailleurs : maîtriser l'architecture multi-agents, les sorties structurées, le prompt caching et surtout l'évaluation honnête face à un buy-and-hold.",
      technologies: [
        "Claude AI",
        "Anthropic API",
        "Python",
        "Alpaca API",
        "Pydantic",
        "Architecture multi-agents",
        "Prompt Caching",
        "Sorties structurées",
      ],
      features: [
        "🤖 Architecture multi-agents : 2 traders Claude au tempérament opposé, chacun son portefeuille",
        "🛡️ Garde-fous déterministes : chaque décision du LLM revérifiée (cash, quantité, plafond) avant exécution",
        "🧠 Sorties structurées via Pydantic : Claude renvoie un plan validable, jamais du texte libre exécuté à l'aveugle",
        "📊 Veille automatique : prix récents et actualité sur une watchlist d'actions US",
        "💸 Exécution sur Alpaca Paper Trading — 100 % simulation, aucun argent réel",
        "⚡ Prompt caching : ~90 % d'économie de tokens sur le system prompt dès le 2ᵉ cycle",
        "📈 Journalisation par cycle + script d'analyse comparant les agents à un buy-and-hold",
        "🎓 Démarche d'évaluation honnête : le projet assume qu'un LLM ne bat pas un ETF — focus sur l'ingénierie",
      ],
      links: {
        github: "https://github.com/paul-antoine-presti-ai/alpha-arena",
      },
      icon: "📈",
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
      title: "AudioLearn — Audio Learning Library",
      description:
        "Web app that turns written tech lessons (companies, tools, concepts like Databricks, SQL, the cloud) into audiobooks you can listen to in the background, like a podcast. High-quality synthetic voice, locked-screen playback on iPhone.",
      longDescription:
        "AudioLearn was born from a personal need: learning while walking, earbuds in, phone locked. Rather than relying on plain speech synthesis (which stops the moment an iPhone screen locks), I designed a pipeline that pre-generates real MP3 files via the ElevenLabs API, played in an HTML audio player wired to the Media Session API — enabling continuous background playback with controls on the lock screen, exactly like a podcast app. Content is hand-written (beginner → intermediate level) then converted to audio in a single command, with a choice of provider (ElevenLabs for quality, OpenAI for cost). The site is static, deployed on Vercel, installable as a PWA, and automatically falls back to the browser voice until a lesson has its audio. First published lesson: Databricks explained through the Netflix use case.",
      technologies: [
        "JavaScript (Vanilla)",
        "Media Session API",
        "ElevenLabs API",
        "OpenAI TTS",
        "Web Speech API",
        "Node.js",
        "PWA",
        "Vercel",
      ],
      features: [
        "🎧 Background and locked-screen playback on iPhone via the Media Session API (like a podcast)",
        "🗣️ High-quality synthetic voices generated with ElevenLabs, with automatic fallback to the browser voice",
        "⚙️ Multi-provider text-to-speech pipeline (ElevenLabs or OpenAI) in a single command",
        "📚 Themed libraries of audiobook lessons, designed for listening (beginner → intermediate level)",
        "📱 Installable PWA on the home screen, full-screen experience",
        "💾 Saved progress, automatic resume and playback speed control",
        "🚀 Static site deployed on Vercel with automatic redeployment, zero backend",
        "📝 First lesson: Databricks through the real-world Netflix use case (~14 min of audio)",
      ],
      links: {
        github: "https://github.com/paul-antoine-presti-ai/audiolearn",
        demo: "https://audiolearn-seven.vercel.app/",
      },
      icon: "🎧",
    },
    {
      title: "Alpha Arena — Arena of 2 AI Trading Agents",
      description:
        "Two autonomous agents powered by Claude, with opposite temperaments (aggressive vs balanced), compete on simulated Alpaca accounts. Each agent does its research, decides to buy/sell/hold, then a deterministic guardrail layer re-checks every decision before execution. 100% simulation.",
      longDescription:
        "Alpha Arena explores an engineering question: can AI agents trade autonomously yet safely? I built two Claude traders with opposite personalities — one aggressive (chases momentum, concentrates up to 40% on a conviction, cuts losses fast), the other balanced (keeps cash, caps positions, only enters with high confidence). Each cycle: research (recent prices + news on a US stock watchlist), then Claude produces a structured action plan (validated by Pydantic), and finally a deterministic validation layer has the final say — enough cash? quantity held? position under the cap? You never blindly trust the LLM before touching money, even fictional. The most valuable lesson is owned by the project: an LLM agent does not predict prices and won't beat a simple ETF over time. The real value lies elsewhere: mastering multi-agent architecture, structured outputs, prompt caching, and above all honest evaluation against a buy-and-hold benchmark.",
      technologies: [
        "Claude AI",
        "Anthropic API",
        "Python",
        "Alpaca API",
        "Pydantic",
        "Multi-agent architecture",
        "Prompt Caching",
        "Structured Outputs",
      ],
      features: [
        "🤖 Multi-agent architecture: 2 Claude traders with opposite temperaments, each its own portfolio",
        "🛡️ Deterministic guardrails: every LLM decision re-checked (cash, quantity, cap) before execution",
        "🧠 Structured outputs via Pydantic: Claude returns a validatable plan, never free text executed blindly",
        "📊 Automatic research: recent prices and news on a US stock watchlist",
        "💸 Execution on Alpaca Paper Trading — 100% simulation, no real money",
        "⚡ Prompt caching: ~90% token savings on the system prompt from the 2nd cycle",
        "📈 Per-cycle journaling + analysis script comparing agents to a buy-and-hold",
        "🎓 Honest evaluation mindset: the project owns that an LLM won't beat an ETF — focus on engineering",
      ],
      links: {
        github: "https://github.com/paul-antoine-presti-ai/alpha-arena",
      },
      icon: "📈",
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
