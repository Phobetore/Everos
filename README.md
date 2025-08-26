# EVEROS
### Un Univers de Royaumes Divins et d'Histoires Infinies

**Everos** est un univers de fantasy épique créé par **Le Collectif Everos**, où des royaumes divins s'étendent à travers des continents mystérieux, et où chaque divinité règne sur son propre domaine avec ses lois, ses mystères et ses légendes.

[![Site Web](https://img.shields.io/badge/Site-everos--universe.com-blue)](https://everos-universe.com/)
[![Licence](https://img.shields.io/badge/Licence-Apache%202.0-green)](#licence)
[![Hugo](https://img.shields.io/badge/Hugo-0.138.0-ff4088)](https://gohugo.io/)

---
## Installation et Développement

### Prérequis
- [Hugo Extended](https://gohugo.io/installation/) v0.138.0+
- Git

### Installation Locale

```bash
# Cloner le repository
git clone https://github.com/Phobetore/Everos.git
cd Everos

# Extraire Hugo (si nécessaire)
tar -xzf hugo_extended_0.138.0_linux-amd64.tar.gz
chmod +x hugo

# Lancer le serveur de développement
./hugo server --buildDrafts

# Ou construire le site statique
./hugo --buildDrafts
```

Le site sera accessible à `http://localhost:1313`

### Structure du Projet

```
Everos/
├── content/          # Contenu Markdown organisé par section
│   └── pages/        # Pages principales (divinités, univers, etc.)
├── data/             # Données YAML (divinités, carousel, mises à jour)
├── layouts/          # Templates Hugo
│   ├── _default/     # Templates par défaut
│   ├── partials/     # Composants réutilisables
│   └── shortcodes/   # Shortcodes personnalisés
├── static/           # Assets statiques (CSS, JS, images)
├── website/          # Version HTML statique (legacy)
└── hugo.toml         # Configuration Hugo
```

### Shortcodes Disponibles

- `{{< carousel >}}` : Carrousel d'images
- `{{< infocard >}}` : Cartes d'information
- `{{< lightbox >}}` : Galerie avec lightbox
- `{{< update >}}` : Cartes de mise à jour
- `{{< map >}}` : Cartes interactives des continents

## Rejoindre le Collectif

Le Collectif Everos est ouvert aux créateurs passionnés ! Nous recherchons :

- ** Écrivains & Narrateurs** : Chroniques, histoires, lore
- ** Artistes & Illustrateurs** : Visuels pour donner vie à l'univers
- ** Game Designers** : Mécaniques et règles de jeu
- ** Développeurs Web** : Maintenance et amélioration du site

### Comment Contribuer

1. **Rejoindre** : Le discord
2. **Contribuer** : Le discord
3. **Échanger** : Le discord

## Ressources et Liens

- **Site Principal** : [axarathe.com](https://axarathe.com/)
- **Discord** : [Rejoindre la communauté](#)

### Réseaux Sociaux
-  Twitter : [@EverosUniverse](#)
-  Instagram : [@everos.universe](#)
-  YouTube : [Chaîne Everos](#)

##  Documentation Technique

### Architecture Hugo
- **Version** : Hugo Extended 0.138.0
- **Langue** : Français (fr)
- **Permalinks** : Structure `/pages/section/slug/`
- **Assets** : CSS/SCSS avec variables par divinité
- **Déploiement** : Netlify avec formulaires intégrés

## Licence

Ce projet est sous licence Apache 2.0. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

**Contenu créatif** (histoires, artwork, lore) © 2025 Everos - Tous droits réservés.

## Crédits

- **Rédacteur en chef** : IsFa
- **CTO** : core.layer
- **Direction artistique** : LadyMagpie

---

*"Dans Everos, chaque histoire commence par un choix, chaque aventure par un pas vers l'inconnu, et chaque légende par la volonté de créer quelque chose de plus grand que soi."*
