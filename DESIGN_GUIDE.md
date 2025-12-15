# 🎨 Guide de Design - Cursor-Style avec Glassmorphism & Touches Orange Mistral

## 🌓 Palette de Couleurs

### Fond Principal (Cursor-like)
```css
--background: #1a1a1a;              /* Gris foncé au lieu du noir profond */
--background-secondary: #252525;     /* Gris légèrement plus clair pour contraste */
```

### Texte
```css
--foreground: #e4e4e7;              /* Blanc cassé pour le texte principal */
--foreground-muted: #a1a1aa;        /* Gris pour texte secondaire */
```

### Accent Orange Mistral 🍊
```css
--accent: #f97316;                  /* Orange Mistral principal */
--accent-hover: #ea580c;            /* Orange foncé au survol */
--accent-light: #fb923c;            /* Orange clair pour highlights */
--accent-glow: rgba(249, 115, 22, 0.15); /* Effet glow orange */
```

### Effet Glass (Apple-style)
```css
--glass-bg: rgba(37, 37, 37, 0.6);           /* Fond transparent */
--glass-border: rgba(255, 255, 255, 0.1);    /* Bordure subtile */
--glass-highlight: rgba(255, 255, 255, 0.05); /* Highlight interne */
```

### Bordures
```css
--border: rgba(255, 255, 255, 0.08);        /* Bordure normale */
--border-strong: rgba(255, 255, 255, 0.15); /* Bordure accentuée */
```

---

## ✨ Effets Glassmorphism

### Classe `.glass`
Pour les éléments principaux (Header, Footer):
```css
.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid var(--glass-border);
  box-shadow: 
    0 8px 32px 0 rgba(0, 0, 0, 0.37),
    inset 0 1px 0 0 var(--glass-highlight);
}
```

### Classe `.glass-card`
Pour les cartes de contenu:
```css
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid var(--glass-border);
  box-shadow: 
    0 4px 24px 0 rgba(0, 0, 0, 0.25),
    inset 0 1px 0 0 var(--glass-highlight);
  transition: all 0.3s ease;
}
```

**Au hover:**
- Background plus opaque
- Bordure plus visible
- Glow orange subtil
- Légère élévation (translateY)

---

## 🍊 Touches Orange Mistral

### Classe `.orange-glow`
Effet de lueur orange subtil:
```css
.orange-glow {
  box-shadow: 0 0 20px var(--accent-glow);
}
```

### Classe `.orange-glow-strong`
Effet de lueur orange prononcé pour les CTAs:
```css
.orange-glow-strong {
  box-shadow: 0 0 30px rgba(249, 115, 22, 0.3);
}
```

### Où sont les touches orange?

1. **Badge "Account Executive • AI Enthusiast"** - Orange avec glow
2. **Titres de sections** - Couleur orange
3. **Liens au hover** - Deviennent orange
4. **Boutons CTA principaux** - Fond orange avec glow
5. **Points des listes** - Bullets orange
6. **Boutons "Voir plus"** - Texte orange
7. **Liens de navigation au hover** - Orange

---

## 🎯 Éléments Clés du Design

### 1. Header (Navigation)
```tsx
className="glass border-b"
```
- Effet glass au scroll
- Transparent en haut de page
- Bordure glass subtile

### 2. Badges
```tsx
variant="accent" // Orange avec glow
variant="default" // Glass transparent
```

### 3. Boutons CTA
```tsx
className="bg-accent hover:bg-accent-hover orange-glow-strong"
```
- Fond orange
- Glow orange prononcé
- Hover plus foncé
- Transform scale au hover

### 4. Boutons Secondaires
```tsx
className="glass hover:border-accent hover:orange-glow"
```
- Fond glass transparent
- Bordure qui devient orange au hover
- Glow orange au hover

### 5. Cartes de Projet
```tsx
className="glass-card rounded-2xl"
```
- Effet glass avec blur
- Coins arrondis (2xl)
- Hover avec élévation et glow orange

### 6. Sections "À propos"
```tsx
className="glass-card rounded-2xl"
```
- 4 blocs avec effet glass
- Titre orange dans chaque bloc
- Fond semi-transparent

---

## 🌟 Gradient Background

Un subtil gradient orange est appliqué en arrière-plan:

```css
body::before {
  content: "";
  position: fixed;
  background: 
    radial-gradient(circle at 20% 20%, var(--accent-glow) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, var(--accent-glow) 0%, transparent 50%);
}
```

Cela crée des halos orange subtils qui donnent de la profondeur.

---

## 📜 Scrollbar Personnalisée

Style Cursor avec touche orange:

```css
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 5px;
  border: 2px solid var(--background);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--accent); /* Orange Mistral */
}
```

---

## 🎨 Hiérarchie Visuelle

### Niveaux de profondeur (du fond au premier plan):
1. **Background** - `#1a1a1a` (gris foncé)
2. **Gradient halos orange** - Radial gradients
3. **Glass cards** - Avec backdrop-blur
4. **Contenu** - Texte et éléments
5. **Accents orange** - CTAs et highlights

---

## 💡 Utilisation des Couleurs

### Orange Mistral (`#f97316`) pour:
- ✅ Badges d'état (Account Executive)
- ✅ Titres des sections
- ✅ Boutons d'action principaux
- ✅ Liens au hover
- ✅ Éléments interactifs au focus
- ✅ Glow effects

### Glass pour:
- ✅ Header au scroll
- ✅ Footer
- ✅ Cartes de projet
- ✅ Cartes "À propos"
- ✅ Formulaires et inputs
- ✅ Badges secondaires

### Transparent/Blur pour:
- ✅ Overlays
- ✅ Modals (si ajoutés)
- ✅ Dropdowns (si ajoutés)

---

## 🔄 Transitions

Toutes les transitions sont fluides:
```css
transition: all 0.3s ease;
```

### Effets au hover:
- **Transform scale** sur les CTAs: `hover:scale-105`
- **Translate Y** sur les cartes: `translateY(-2px)`
- **Border color** change vers orange
- **Glow orange** apparaît progressivement

---

## 📐 Border Radius

Style Apple moderne:
- **Cartes**: `rounded-2xl` (16px)
- **Boutons**: `rounded-xl` (12px)
- **Badges**: `rounded-full`
- **Inputs**: `rounded-xl`

---

## 🎭 Inspiration

### Cursor
- Fond gris foncé (#1a1a1a) au lieu de noir
- Interface claire et épurée
- Bordures subtiles et élégantes

### Apple (macOS Monterey/Sonoma)
- Glassmorphism avec backdrop-blur
- Ombres douces et réalistes
- Highlight interne pour effet 3D

### Mistral AI
- Orange signature (#f97316)
- Touche française et élégante
- Focus sur l'innovation IA

---

## 🛠️ Comment Personnaliser

### Changer l'intensité du blur:
```css
backdrop-filter: blur(16px); /* Augmentez/diminuez la valeur */
```

### Changer l'opacité du glass:
```css
--glass-bg: rgba(37, 37, 37, 0.6); /* Changez le 0.6 */
```

### Changer la couleur d'accent:
```css
--accent: #f97316; /* Remplacez par votre couleur */
```

### Ajouter plus de glow:
```css
.orange-glow-extra {
  box-shadow: 0 0 50px rgba(249, 115, 22, 0.5);
}
```

---

## ✅ Checklist Design

- [x] Fond gris foncé style Cursor
- [x] Effet glassmorphism Apple sur toutes les cartes
- [x] Orange Mistral comme couleur d'accent
- [x] Glow orange sur les CTAs
- [x] Backdrop-blur sur tous les éléments glass
- [x] Bordures subtiles et élégantes
- [x] Coins arrondis (border-radius 2xl)
- [x] Scrollbar personnalisée
- [x] Gradient background subtil
- [x] Transitions fluides partout
- [x] Hover effects avec orange
- [x] Responsive sur tous les écrans

---

**Résultat: Un design moderne, élégant et professionnel qui combine le style épuré de Cursor, l'effet glass d'Apple, et les touches orange de Mistral AI! 🎨✨🍊**

