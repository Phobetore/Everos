# Everos - Un Univers de Fantasy Épique

Bienvenue dans l'univers d'Everos, un monde de fantasy épique avec des royaumes divins, des histoires captivantes et un riche système de jeu de rôle.

## 🌍 À Propos d'Everos

Everos est un univers créé par un collectif passionné, comprenant :
- **7 divinités** et leurs royaumes respectifs
- Un **système de jeu de rôle** complet
- Des **chroniques et histoires** immersives
- Une **galerie d'art** dédiée
- Un **collectif de créateurs** talentueux

## 🏗️ Architecture Technique

Ce site est construit avec [Hugo](https://gohugo.io/), un générateur de sites statiques, et déployé automatiquement via GitHub Actions.

### Structure du Projet
```
├── content/          # Contenu du site (Markdown)
├── layouts/          # Templates Hugo
├── static/           # Assets statiques (CSS, JS, images)
├── data/            # Données structurées (YAML)
├── scripts/         # Scripts utilitaires
└── .github/         # Configuration GitHub Actions
```

## 🚀 Déploiement

Le site est automatiquement déployé sur `https://axarathe.com/` à chaque commit sur la branche `main`.

### Pour Contribuer
1. Forkez le repository
2. Créez une branche pour vos modifications
3. Testez vos changements localement
4. Soumettez une Pull Request

### Prérequis de Développement
- Hugo Extended v0.138.0 ou plus récent
- Git

### Test Local
```bash
# Installer Hugo (macOS)
brew install hugo

# Installer Hugo (Linux)
wget https://github.com/gohugoio/hugo/releases/download/v0.138.0/hugo_extended_0.138.0_linux-amd64.tar.gz
tar -xzf hugo_extended_0.138.0_linux-amd64.tar.gz

# Lancer le serveur de développement
hugo server -D

# Construire le site
hugo --gc --minify
```

### Vérification du Déploiement
Utilisez le script de vérification pour tester votre configuration :
```bash
./scripts/verify-deployment.sh
```

## 📖 Documentation

- **[Guide de Déploiement](DEPLOYMENT.md)** - Configuration des secrets et dépannage
- **[Instructions Hugo](/.github/instructions)** - Templates et conventions
- **[Instructions Copilot](/.github/copilot-instructions.md)** - Contexte du projet

## 🎨 Thème et Style

Le site utilise un thème personnalisé avec :
- **Esthétique gothique/fantasy** sombre et mystérieuse
- **Design responsive** adapté à tous les écrans
- **Variables CSS** pour les couleurs des divinités
- **Animations** et transitions fluides

## 🔧 Configuration

Le site est configuré via `hugo.toml` avec :
- URL de base : `https://axarathe.com/`
- Langue : Français
- SEO optimisé
- Permaliens personnalisés

## 📝 Licence

Ce projet est la propriété intellectuelle du Collectif Everos. Tous droits réservés.

## 📞 Contact

- **Email** : contact@axarathe.com
- **Discord** : [Lien vers le serveur Discord]

---

*Everos - Où les légendes prennent vie*