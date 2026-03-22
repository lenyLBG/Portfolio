# Mon Portfolio

> **Mon portfolio professionnel** - Développeur Web & Logiciel
> 
> Je suis développeur web et logiciel spécialisé en **React**, **Node.js**, **Python** et **PHP**. Je propose des solutions digitales innovantes et performantes.
>
> 🌐 Disponible sur [lenyleborgne.com](https://lenyleborgne.com)
> 
> **Mots-clés** : Leny Leborgne, développeur web Chartres, développeur logiciel freelance, React, Node.js, Python

## 🎨 Design

- **Fond** : `#060612` (noir profond)
- **Primaire** : `#8b5cf6` (violet)
- **Secondaire** : `#06b6d4` (cyan)
- **Texte** : `#f1f5f9` / `#94a3b8`
- **Typographies** : Space Grotesk · Inter · Fira Code

## ✨ Fonctionnalités

- 📈 Barre de progression du scroll
- 🌐 Navigation fixe avec effet blur au scroll + lien actif dynamique
- 🎭 Hero avec blobs animés, grille décorative et carte de code syntax-highlighted
- 🃏 Floating cards animées (expérience / projets)
- 🔢 Numéros de section en filigrane
- 💊 Tech pills cliquables
- 🃏 Cartes de compétences avec bordure gradient au hover
- 📦 Projet *featured* en pleine largeur
- 📬 Formulaire de contact via EmailJS
- 🪄 Reveal animations décalées au scroll (IntersectionObserver)
- 📱 Menu mobile plein écran avec animation burger
- 🎨 Scrollbar personnalisée

## 📂 Structure

```
portfolio/
├── index.html       # Page principale
├── styles.css       # Feuille de styles (CSS custom, variables, responsive)
├── script.js        # JS vanilla (nav, scroll, EmailJS, animations)
├── server.js        # Backend Node.js (optionnel)
├── img/             # Images des projets
└── README.md
```

## 🛠️ Stack

| Couche | Technologie |
|--------|------------|
| Markup | HTML5 sémantique |
| Style | CSS3 — Variables, Flexbox, Grid, Animations |
| Script | JavaScript vanilla (ES2020+) |
| Icônes | Font Awesome 6 |
| Polices | Google Fonts (Space Grotesk, Inter, Fira Code) |
| Contact | EmailJS |
| Analytics | Google Tag Manager |

## ⚙️ Personnalisation

### Couleurs
```css
/* styles.css — :root */
--primary: #8b5cf6;
--secondary: #06b6d4;
--bg: #060612;
```

### Ajouter un projet
```html
<!-- index.html — .projects-grid -->
<article class="project-card">
    <div class="project-img">
        <img src="img/mon-projet.png" alt="Mon Projet" loading="lazy">
        <div class="project-overlay">
            <a href="URL" class="overlay-btn"><i class="fas fa-external-link-alt"></i></a>
            <a href="GITHUB" class="overlay-btn"><i class="fab fa-github"></i></a>
        </div>
    </div>
    <div class="project-info">
        <span class="project-category">Catégorie</span>
        <h3>Titre du projet</h3>
        <p>Description courte.</p>
        <div class="project-tags">
            <span class="tag">Tech</span>
        </div>
    </div>
</article>
```

### EmailJS
Remplacez les constantes dans `script.js` :
```js
const EMAILJS_PUBLIC_KEY = 'VOTRE_CLE';
const EMAILJS_SERVICE_ID  = 'VOTRE_SERVICE';
const EMAILJS_TEMPLATE_ID = 'VOTRE_TEMPLATE';
```

## 🚀 Déploiement

| Plateforme | Méthode |
|-----------|---------|
| **GitHub Pages** | Push sur `main` → activer Pages dans les Settings |
| **Netlify** | Glisser-déposer le dossier sur [netlify.com/drop](https://app.netlify.com/drop) |
| **Vercel** | `vercel --prod` ou import GitHub |

## 📄 Licence

© 2025 Leny Leborgne — Tous droits réservés.


## 🎨 Couleurs

- **Primary**: #52F5EB (Cyan vibrant)
- **Dark**: #000F26 (Bleu très foncé)
- **Light**: #FEFEFF (Blanc)
- **Accent**: #75D8FF (Bleu clair)

## 🚀 Fonctionnalités

- ✨ Design moderne et responsive
- 🎯 Navigation smooth scroll
- 📱 Menu mobile hamburger
- 🎨 Animations au scroll
- 💫 Effets hover interactifs
- 📊 Section statistiques animées
- 🎭 Fenêtre de code animée
- 📝 Formulaire de contact
- 🔗 Intégration réseaux sociaux

## 📂 Structure du projet

```
portfolio/
│
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── script.js           # JavaScript
└── README.md           # Documentation
```

## 🛠️ Technologies utilisées

- HTML5
- CSS3 (Variables CSS, Flexbox, Grid)
- JavaScript (Vanilla)
- Font Awesome (Icônes)

## 📋 Personnalisation

### 1. Informations personnelles

Éditez `index.html` et modifiez :
- Votre nom dans `.hero-title`
- Vos coordonnées dans `.contact-details`
- Vos liens réseaux sociaux dans `.social-links`

### 2. Projets

Modifiez la section `.projects-grid` pour ajouter vos projets :
```html
<div class="project-card">
    <div class="project-image">
        <!-- Image ou gradient -->
    </div>
    <div class="project-content">
        <h3>Titre du projet</h3>
        <p>Description du projet</p>
        <div class="project-tags">
            <span class="tag">Tech 1</span>
            <span class="tag">Tech 2</span>
        </div>
    </div>
</div>
```

### 3. Compétences

Ajoutez ou modifiez vos compétences dans `.skills-grid`

### 4. Couleurs

Pour changer les couleurs, modifiez les variables CSS dans `styles.css` :
```css
:root {
    --color-primary: #52F5EB;
    --color-dark: #000F26;
    --color-light: #FEFEFF;
    --color-accent: #75D8FF;
}
```

## 🚀 Déploiement

### Option 1 : GitHub Pages
1. Créez un repository GitHub
2. Uploadez tous les fichiers
3. Activez GitHub Pages dans les settings

### Option 2 : Netlify
1. Déposez le dossier sur Netlify Drop
2. Votre site sera en ligne instantanément

### Option 3 : Vercel
1. Connectez votre repository GitHub
2. Déployez en un clic

## 📱 Responsive

Le site est entièrement responsive et s'adapte à :
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## ⚡ Optimisations possibles

- [ ] Ajouter des images réelles pour les projets
- [ ] Intégrer un backend pour le formulaire de contact
- [ ] Ajouter un blog
- [ ] Implémenter un thème clair/sombre
- [ ] Optimiser les images (lazy loading)
- [ ] Ajouter des animations GSAP plus complexes
- [ ] Intégrer Google Analytics

## 📄 License

Libre d'utilisation - Personnalisez-le à votre guise !

## 🤝 Contact

N'hésitez pas à me contacter pour toute question ou collaboration.

---

Créé avec ❤️ et beaucoup de ☕
