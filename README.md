# Portfolio - Paul-Antoine Sage

Portfolio personnel moderne et minimaliste avec dark mode élégant, construit avec Next.js 16, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

- ✨ Design minimaliste et élégant en dark mode
- 📱 Entièrement responsive
- ⚡ Performance optimale avec Next.js 16
- 🎨 Animations fluides et élégantes
- 🔍 SEO optimisé
- 📦 Cartes de projet extensibles avec détails complets
- 🎯 Navigation smooth scroll
- ⚙️ TypeScript pour une meilleure maintenabilité

## 🛠️ Technologies

- **Framework:** Next.js 16 (App Router)
- **Langage:** TypeScript
- **Styling:** Tailwind CSS v4
- **Font:** Geist (Sans & Mono)
- **Déploiement:** Alpic / Railway / Vercel

## 📦 Installation

1. Cloner le repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Installer les dépendances:
```bash
npm install
```

3. Lancer le serveur de développement:
```bash
npm run dev
```

4. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 🏗️ Structure du projet

```
portfolio/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   └── globals.css        # Styles globaux
├── components/            # Composants réutilisables
│   ├── Header.tsx         # Navigation
│   ├── Footer.tsx         # Pied de page
│   ├── Section.tsx        # Wrapper de section
│   ├── ProjectCard.tsx    # Carte de projet
│   └── Badge.tsx          # Badge de technologie
├── data/                  # Données
│   └── projects.ts        # Liste des projets
└── public/                # Fichiers statiques
```

## ✨ Personnalisation

### Ajouter un nouveau projet

Éditez le fichier `data/projects.ts` et ajoutez votre projet:

```typescript
{
  title: "Nom du projet",
  description: "Description courte",
  longDescription: "Description détaillée",
  technologies: ["Tech1", "Tech2"],
  features: [
    "Fonctionnalité 1",
    "Fonctionnalité 2",
  ],
  links: {
    github: "https://github.com/...",
    demo: "https://...",
    alpic: "https://alpic.ai/...",
  },
  icon: "🚀",
}
```

### Modifier les couleurs

Éditez le fichier `app/globals.css` pour personnaliser le thème:

```css
:root {
  --background: #0a0a0a;
  --foreground: #ededed;
  --accent: #3b82f6;
  /* ... */
}
```

### Modifier les informations personnelles

Éditez `app/page.tsx` pour mettre à jour:
- Votre nom
- Votre description
- Vos liens (GitHub, LinkedIn, Email)
- Les sections "À propos"

## 🚀 Déploiement

### Sur Alpic (Gratuit)

1. Créer un compte sur [Alpic](https://alpic.ai)
2. Créer un nouveau projet
3. Connecter votre repository Git
4. Alpic détectera automatiquement Next.js et le déploiera

### Sur Railway

```bash
# Installer Railway CLI
npm install -g @railway/cli

# Se connecter
railway login

# Initialiser le projet
railway init

# Déployer
railway up
```

### Sur Vercel

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel
```

## 📝 Scripts disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm start` - Démarre le serveur de production
- `npm run lint` - Vérifie le code avec ESLint

## 🎨 Thème Dark Mode

Le portfolio utilise un thème dark mode élégant par défaut avec:
- Fond noir profond (#0a0a0a)
- Texte clair (#ededed)
- Accent bleu moderne (#3b82f6)
- Bordures subtiles (#27272a)
- Cartes avec fond légèrement plus clair (#18181b)

## 📱 Responsive

Le portfolio est entièrement responsive et s'adapte à toutes les tailles d'écran:
- Mobile (< 768px)
- Tablette (768px - 1024px)
- Desktop (> 1024px)

## 🔧 Configuration

### Variables d'environnement

Créez un fichier `.env` à la racine:

```env
PORT=3000
NODE_ENV=production
```

## 📄 License

MIT © Paul-Antoine Sage

## 🤝 Contact

- Email: paul-antoine@presti.ai
- GitHub: [github.com/yourusername](https://github.com/yourusername)
- LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)

---

Créé avec ❤️ par Paul-Antoine Sage
