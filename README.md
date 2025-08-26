# Everos

Un univers de fantasy épique avec des royaumes divins, des histoires captivantes et un riche système de jeu de rôle.

## 🚀 Site Web Hugo

Ce site est construit avec [Hugo](https://gohugo.io/), un générateur de site statique moderne et performant.

### Développement Local

#### Prérequis

- Hugo Extended >= 0.138.0
- Git

#### Installation

```bash
# Cloner le repository
git clone [repository-url]
cd Everos

# Installer Hugo (exemple Ubuntu/Debian)
wget https://github.com/gohugoio/hugo/releases/download/v0.138.0/hugo_extended_0.138.0_linux-amd64.deb
sudo dpkg -i hugo_extended_0.138.0_linux-amd64.deb

# Vérifier l'installation
hugo version
```

#### Commandes de Développement

```bash
# Serveur de développement
hugo server --buildDrafts

# Build de production
hugo --gc --minify

# Nouveau contenu
hugo new content/pages/section/page.md
```

### Structure du Projet

```
Everos/
├── content/           # Contenu Markdown
│   └── pages/         # Pages principales
├── data/              # Données YAML
├── layouts/           # Templates Hugo
│   ├── _default/      # Templates par défaut
│   ├── partials/      # Composants réutilisables
│   └── shortcodes/    # Shortcodes personnalisés
├── static/            # Assets statiques
│   ├── css/           # Feuilles de style
│   └── js/            # Scripts JavaScript
└── hugo.toml          # Configuration Hugo
```

### Fonctionnalités

- **Site statique** : Performance optimale et sécurité maximale
- **Contenu data-driven** : Divinités, mises à jour via fichiers YAML
- **Responsive design** : Compatible mobile et desktop
- **SEO optimisé** : Meta tags, Open Graph, sitemap
- **Formulaires Netlify** : Contact et candidatures
- **CI/CD** : Déploiement automatique via GitHub Actions

### Ajout de Contenu

#### Nouvelle Divinité

1. Ajouter dans `data/divinites.yaml`
2. Créer `content/pages/deities/nom.md`
3. Tester la navigation

#### Nouvelle Page

```bash
hugo new content/pages/section/page.md
```

### Déploiement

- **Production** : Push sur `main` déclenche le build automatique
- **Preview** : Les Pull Requests génèrent des previews
- **Netlify** : Formulaires et CDN automatiquement configurés

### Contribution

1. Fork le repository
2. Créer une branche feature
3. Développer et tester localement
4. Soumettre une Pull Request

---

*Créé par Le Collectif Everos*