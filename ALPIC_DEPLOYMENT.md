# 🚀 Guide de Déploiement sur Alpic

## Votre portfolio est prêt à être déployé sur Alpic (GRATUIT) ! 🎉

---

## 📋 Étape 1: Créer un Repository GitHub

### Option A: Via l'interface GitHub (Recommandé)

1. **Allez sur GitHub**: [https://github.com/new](https://github.com/new)

2. **Créez le repository**:
   - **Repository name**: `portfolio` (ou le nom de votre choix)
   - **Description**: `Portfolio professionnel - Account Executive & AI Enthusiast`
   - **Visibilité**: Public ou Private (au choix)
   - ❌ **N'initialisez PAS** avec README, .gitignore ou licence

3. **Cliquez sur "Create repository"**

4. **GitHub vous donnera des commandes**, copiez l'URL du repo (format: `https://github.com/votre-username/portfolio.git`)

---

## 📤 Étape 2: Push vers GitHub

Dans votre terminal, exécutez ces commandes:

```bash
# Aller dans le dossier portfolio
cd /Users/paul-antoinesage/Desktop/portfolio

# Ajouter le remote GitHub (remplacez par VOTRE URL)
git remote add origin https://github.com/VOTRE-USERNAME/portfolio.git

# Vérifier que le remote est bien ajouté
git remote -v

# Push vers GitHub
git branch -M main
git push -u origin main
```

**Remplacez `VOTRE-USERNAME` par votre nom d'utilisateur GitHub !**

---

## ☁️ Étape 3: Déployer sur Alpic

### 1. Aller sur Alpic

Ouvrez: [https://alpic.ai](https://alpic.ai) ou [https://app.alpic.ai](https://app.alpic.ai)

### 2. Se connecter / Créer un compte

- Connectez-vous avec votre compte GitHub (recommandé)
- Ou créez un compte avec votre email

### 3. Créer un nouveau projet

Cliquez sur **"New Project"** ou **"+"**

### 4. Connecter votre Repository

1. **Sélectionnez votre repository** `portfolio` dans la liste
2. Si vous ne le voyez pas, cliquez sur "Configure GitHub App" pour autoriser l'accès

### 5. Configuration du Projet

Alpic détectera automatiquement Next.js et configurera:

```
Framework: Next.js
Build Command: npm run build
Start Command: npm start
Node Version: 18.x (ou supérieur)
Root Directory: /
```

**Vérifiez que ces paramètres sont corrects !**

### 6. Variables d'environnement (Optionnel)

Si nécessaire, ajoutez:
```
NODE_ENV=production
PORT=3000
```

*Mais normalement ce n'est pas nécessaire pour ce projet.*

### 7. Déployer ! 🚀

Cliquez sur **"Deploy"** ou **"Create Project"**

Alpic va:
1. ✅ Cloner votre repository
2. ✅ Installer les dépendances (`npm install`)
3. ✅ Builder le projet (`npm run build`)
4. ✅ Démarrer le serveur (`npm start`)

**Durée estimée: 2-4 minutes**

---

## 🎉 Étape 4: Votre Portfolio est en ligne !

Une fois le déploiement terminé:

1. **Alpic vous donnera une URL** du type:
   - `https://portfolio-xxx.alpic.app`
   - Ou un domaine personnalisé si vous l'avez configuré

2. **Testez votre site** en cliquant sur l'URL

3. **Partagez le lien** ! 🎊

---

## 🔄 Mises à jour automatiques

**Chaque fois que vous push sur GitHub, Alpic redéploiera automatiquement !**

Pour mettre à jour votre portfolio:

```bash
# Faites vos modifications
# Puis:
git add .
git commit -m "Update: description de vos changements"
git push origin main
```

Alpic détectera le push et redéploiera en 2-4 minutes ! ✨

---

## 🌐 Ajouter un domaine personnalisé (Optionnel)

### Sur Alpic:

1. Allez dans **Project Settings** > **Domains**
2. Cliquez sur **"Add Domain"**
3. Entrez votre domaine (ex: `paulantoine-sage.com`)
4. Suivez les instructions pour configurer vos DNS

### Configuration DNS:

Ajoutez ces enregistrements chez votre registrar:

```
Type: CNAME
Name: www (ou @)
Value: [l'URL fournie par Alpic]
```

---

## 🛠️ Dépannage

### ❌ Build échoue

**Problème**: Le build ne passe pas

**Solutions**:
1. Vérifiez que le build fonctionne en local:
   ```bash
   npm run build
   ```
2. Vérifiez que `node_modules` n'est pas dans Git (normalement exclu par .gitignore)
3. Vérifiez les logs de build sur Alpic pour voir l'erreur

### ❌ Le site ne charge pas

**Solutions**:
1. Vérifiez les logs sur Alpic (bouton "Logs")
2. Vérifiez que le port est correct (normalement Alpic gère ça automatiquement)
3. Attendez 1-2 minutes, le déploiement peut prendre un peu de temps

### ❌ Repository non trouvé

**Solutions**:
1. Vérifiez que le repository est public ou que vous avez donné accès à Alpic
2. Allez dans GitHub Settings > Applications > Alpic > Configurez l'accès
3. Reconnectez votre compte GitHub à Alpic

---

## 📊 Monitoring

Sur le dashboard Alpic, vous pouvez voir:
- 📈 **Déploiements**: Historique et statut
- 📋 **Logs**: Logs en temps réel
- 📊 **Analytics**: Visites et performance
- ⚙️ **Settings**: Configuration du projet

---

## 💡 Commandes Rapides

```bash
# Status du repository
git status

# Voir les commits
git log --oneline

# Voir les remotes
git remote -v

# Pull les dernières modifications (si travail en équipe)
git pull origin main

# Push les modifications
git add .
git commit -m "Votre message"
git push origin main
```

---

## 🎯 Checklist de Déploiement

- [ ] Repository GitHub créé
- [ ] Code pushé sur GitHub (`git push origin main`)
- [ ] Compte Alpic créé
- [ ] Repository connecté à Alpic
- [ ] Configuration vérifiée (Next.js détecté)
- [ ] Premier déploiement lancé
- [ ] Site accessible via l'URL Alpic
- [ ] URL partagée avec vos contacts

---

## 🚀 Prochaines Étapes

Après le déploiement:

1. **Testez votre site** en profondeur
2. **Partagez l'URL** sur LinkedIn, CV, email signature
3. **Ajoutez l'URL** dans votre profil GitHub
4. **Mettez à jour régulièrement** avec vos nouveaux projets

---

## 📞 Support

### Alpic Support
- Documentation: [https://docs.alpic.ai](https://docs.alpic.ai)
- Support: support@alpic.ai
- Discord communauté: [lien dans la doc]

### Next.js
- Docs: [https://nextjs.org/docs](https://nextjs.org/docs)

---

## 🎉 Félicitations !

Votre portfolio professionnel est maintenant **en ligne et accessible 24/7** ! 🌍

**URL type**: `https://portfolio-xxx.alpic.app`

Partagez-le fièrement ! 🚀✨

---

**Créé le**: 15 décembre 2025
**Stack**: Next.js 16 + TypeScript + Tailwind CSS v4
**Hébergement**: Alpic (Gratuit)
**Design**: Cursor-style + Glassmorphism + Orange Mistral

