# 🚀 Guide de démarrage rapide

## Installation et lancement local

```bash
# 1. Accéder au projet
cd /Users/paul-antoinesage/Desktop/portfolio

# 2. Installer les dépendances (si pas déjà fait)
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur! 🎉

---

## ✏️ Personnalisation rapide

### 1. Modifier vos informations personnelles

Éditez `app/page.tsx`:
- Ligne 22-24: Votre nom
- Ligne 25-28: Votre description
- Ligne 32-39: Vos boutons d'action

### 2. Ajouter/modifier vos projets

Éditez `data/projects.ts` et ajoutez vos projets:

```typescript
{
  title: "Mon Super Projet",
  description: "Description courte et accrocheuse",
  longDescription: "Description détaillée du projet...",
  technologies: ["React", "TypeScript", "Node.js"],
  features: [
    "Fonctionnalité 1",
    "Fonctionnalité 2",
    "Fonctionnalité 3",
  ],
  links: {
    github: "https://github.com/...",
    demo: "https://...",
    alpic: "https://alpic.ai/...",
  },
  icon: "🚀",
}
```

### 3. Modifier la section "À propos"

Éditez `app/page.tsx`, section `#about`:
- Lignes 50-58: Votre mission
- Lignes 60-68: Votre approche
- Lignes 74-87: Vos technologies
- Lignes 91-104: Vos valeurs

### 4. Modifier les liens de contact

Éditez `app/page.tsx` et `components/Footer.tsx`:
- Remplacez les liens GitHub, LinkedIn, Email par les vôtres

### 5. Changer les couleurs du thème

Éditez `app/globals.css`:

```css
:root {
  --background: #0a0a0a;    /* Fond principal */
  --foreground: #ededed;     /* Texte principal */
  --accent: #3b82f6;         /* Couleur d'accent (bleu) */
  --accent-hover: #2563eb;   /* Accent au survol */
  --border: #27272a;         /* Bordures */
  --card-bg: #18181b;        /* Fond des cartes */
}
```

---

## 📦 Déploiement rapide sur Alpic

```bash
# 1. Initialiser Git
git init
git add .
git commit -m "Initial commit"

# 2. Créer un repo sur GitHub et pusher
git remote add origin <your-repo-url>
git push -u origin main

# 3. Sur Alpic (alpic.ai)
# - Connectez votre repo
# - Cliquez sur "Deploy"
# - C'est tout! ✨
```

---

## 🎨 Structure des fichiers principaux

```
portfolio/
├── app/
│   ├── page.tsx           # 👈 Page principale (modifier ici)
│   ├── layout.tsx         # Métadonnées et layout
│   └── globals.css        # 👈 Thème et styles (modifier ici)
├── components/
│   ├── Header.tsx         # Navigation
│   ├── ProjectCard.tsx    # Carte de projet
│   ├── Footer.tsx         # Pied de page
│   └── ...
├── data/
│   └── projects.ts        # 👈 Vos projets (modifier ici)
├── DEPLOYMENT.md          # Guide de déploiement complet
└── README.md              # Documentation complète
```

---

## 🔧 Commandes utiles

```bash
# Développement avec hot-reload
npm run dev

# Build de production
npm run build

# Démarrer en production
npm start

# Vérifier le code
npm run lint
```

---

## ✨ Fonctionnalités incluses

- ✅ Design dark mode élégant
- ✅ Animations fluides
- ✅ Navigation smooth scroll
- ✅ Cartes de projet extensibles
- ✅ Responsive sur tous les écrans
- ✅ SEO optimisé
- ✅ Performance optimale
- ✅ TypeScript pour la sécurité du code
- ✅ Prêt pour le déploiement

---

## 🎯 Prochaines étapes

1. **Personnaliser** vos informations et projets
2. **Tester** en local avec `npm run dev`
3. **Déployer** sur Alpic (voir DEPLOYMENT.md)
4. **Partager** votre portfolio! 🎉

---

## 💡 Besoin d'aide?

- Documentation complète: `README.md`
- Guide de déploiement: `DEPLOYMENT.md`
- Structure du code: Voir les commentaires dans les fichiers

---

**Bon développement! 🚀**

