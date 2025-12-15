# Guide de déploiement

Ce guide vous aide à déployer votre portfolio sur différentes plateformes.

## 🚀 Déploiement sur Alpic (Recommandé - Gratuit)

Alpic est une plateforme de déploiement gratuite qui supporte Next.js nativement.

### Étape 1: Préparer votre repository Git

```bash
cd /Users/paul-antoinesage/Desktop/portfolio
git init
git add .
git commit -m "Initial commit - Portfolio"
```

### Étape 2: Push vers GitHub/GitLab

```bash
# Créez un repository sur GitHub/GitLab
git remote add origin <your-repository-url>
git branch -M main
git push -u origin main
```

### Étape 3: Déployer sur Alpic

1. Visitez [https://alpic.ai](https://alpic.ai)
2. Créez un compte ou connectez-vous
3. Cliquez sur "New Project"
4. Connectez votre repository Git
5. Alpic détectera automatiquement Next.js
6. Configuration automatique:
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`
   - **Node Version:** 18+
7. Cliquez sur "Deploy"

### Variables d'environnement (optionnel)

Si nécessaire, ajoutez ces variables dans le dashboard Alpic:

```
NODE_ENV=production
PORT=3000
```

---

## 🚂 Déploiement sur Railway (Alternative)

### Option 1: Avec Railway CLI

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

### Option 2: Via le Dashboard

1. Visitez [https://railway.app](https://railway.app)
2. Connectez votre repository GitHub
3. Railway détectera automatiquement la configuration
4. Cliquez sur "Deploy"

---

## ▲ Déploiement sur Vercel (Alternative)

### Option 1: Avec Vercel CLI

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel
```

### Option 2: Via le Dashboard

1. Visitez [https://vercel.com](https://vercel.com)
2. Importez votre repository Git
3. Vercel configurera automatiquement Next.js
4. Cliquez sur "Deploy"

---

## 🐳 Déploiement avec Docker (Avancé)

Créez un `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

Build et run:

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## 🔧 Vérification avant déploiement

Avant de déployer, vérifiez que tout fonctionne:

```bash
# Build en local
npm run build

# Tester le build de production
npm start

# Vérifier le linting
npm run lint
```

---

## 📝 Checklist de déploiement

- [ ] Le build local fonctionne (`npm run build`)
- [ ] Tous les liens sont à jour (GitHub, LinkedIn, Email)
- [ ] Les informations personnelles sont correctes
- [ ] Les projets sont à jour dans `data/projects.ts`
- [ ] Les variables d'environnement sont configurées (si nécessaire)
- [ ] Le repository Git est à jour
- [ ] Le `.gitignore` est en place

---

## 🌐 Domaine personnalisé

### Sur Alpic

1. Accédez aux paramètres du projet
2. Section "Domains"
3. Ajoutez votre domaine personnalisé
4. Configurez les DNS selon les instructions

### Sur Vercel

1. Allez dans Project Settings > Domains
2. Ajoutez votre domaine
3. Configurez les enregistrements DNS

---

## 🔄 Mises à jour continues

Votre portfolio se mettra automatiquement à jour à chaque push vers la branche principale:

```bash
# Après avoir fait des modifications
git add .
git commit -m "Update: description de vos changements"
git push origin main
```

---

## 🆘 Dépannage

### Le build échoue

1. Vérifiez les versions Node.js (requiert 18+)
2. Supprimez `node_modules` et `.next`
3. Réinstallez: `npm install`
4. Rebuild: `npm run build`

### Erreurs d'import

Vérifiez que tous les chemins utilisent l'alias `@/`:

```typescript
import Component from "@/components/Component"
```

### Problèmes de CSS

Vérifiez que Tailwind CSS v4 est bien installé:

```bash
npm list tailwindcss @tailwindcss/postcss
```

---

## 📊 Monitoring et Analytics

### Ajouter Google Analytics (optionnel)

Dans `app/layout.tsx`, ajoutez:

```typescript
import Script from 'next/script'

// Dans le return du layout
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
  strategy="afterInteractive"
/>
```

---

## 🎉 C'est fait!

Votre portfolio est maintenant en ligne! Partagez le lien:
- Sur vos réseaux sociaux
- Dans votre CV
- Sur votre profil GitHub
- Dans vos signatures d'email

N'oubliez pas de le mettre à jour régulièrement avec vos nouveaux projets! 🚀

