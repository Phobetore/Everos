# 🌟 EVEROS
### Un Univers de Royaumes Divins et d'Histoires Infinies

**Everos** est un univers de fantasy épique créé par **Le Collectif Everos**, où des royaumes divins s'étendent à travers des continents mystérieux, et où chaque divinité règne sur son propre domaine avec ses lois, ses mystères et ses légendes.

[![Site Web](https://img.shields.io/badge/Site-everos--universe.com-blue)](https://everos-universe.com/)
[![Licence](https://img.shields.io/badge/Licence-Apache%202.0-green)](#licence)
[![Hugo](https://img.shields.io/badge/Hugo-0.138.0-ff4088)](https://gohugo.io/)

---

## 📖 Vue d'Ensemble

Everos est bien plus qu'un simple univers de fantasy - c'est un monde vivant et évolutif qui combine :

- **🏛️ Sept Divinités Uniques** - Chacune avec son domaine, sa personnalité et ses mystères
- **🗺️ Royaumes Détaillés** - Des terres volcaniques aux forêts éternelles, des océans infinis aux montagnes célestes
- **🎲 Système de Jeu de Rôle** - Règles complètes, aventures et concepts de jeu innovants
- **📚 Chroniques Épiques** - Histoires, personnages et lore riche
- **🎨 Galerie Artistique** - Visuels et illustrations pour donner vie à l'univers
- **👥 Collectif Créatif** - Communauté ouverte de créateurs passionnés

## 🏛️ Les Sept Divinités

### 🔥 Obsidienne - *Divinité des Terres Volcaniques*
Maîtresse des flammes éternelles et des terres de lave, souveraine des forges divines.
- **Domaine** : Feu, Forge, Destruction créatrice
- **Royaume** : Terres volcaniques avec rivières de lave et volcans-cathédrales

### 🌿 Mantha - *Gardienne des Forêts Éternelles*
Protectrice de la nature et des créatures sylvestres.
- **Domaine** : Nature, Croissance, Harmonie
- **Royaume** : Immenses forêts où coule la magie naturelle

### 🌊 Labir - *Seigneur des Profondeurs Marines*
Maître des océans et gardien des mystères abyssaux.
- **Domaine** : Océan, Tempêtes, Mystères
- **Royaume** : Vastes océans et archipels marins

### ⛰️ Hisangarde - *Protecteur des Montagnes Célestes*
Gardien des sommets éternels et des vents purs.
- **Domaine** : Air, Montagne, Pureté
- **Royaume** : Plus hauts sommets d'Everos avec neige éternelle

### 🏜️ Eromnia - *Maîtresse des Déserts Dorés*
Souveraine des sables infinis et des mirages.
- **Domaine** : Soleil, Mirage, Sagesse
- **Royaume** : Vastes déserts avec oasis magiques et cités perdues

### ✨ Light - *Porteur de la Lumière Éternelle*
Gardien de la lumière pure et de l'espoir.
- **Domaine** : Lumière, Guérison, Espoir
- **Royaume** : Plaines lumineuses baignées de lumière divine

### 🔮 Elzeryn - *Maître des Mystères Arcanes*
Gardien de la magie pure et des savoirs anciens.
- **Domaine** : Magie, Connaissance, Mystère
- **Royaume** : Terres arcanes où règnent les énergies magiques

## 🎲 Système de Jeu de Rôle

Everos propose un système de jeu complet avec :

### 📋 Règles de Base
- **Création de Personnage** : Guide complet pour créer votre héros
- **Système de Dés** : Mécaniques basées sur la Résonance Divine
- **Magie & Pouvoirs** : Connexion aux sept divinités
- **Téléchargements** : Manuel complet (200 pages) et résumé des règles

### 🗡️ Aventures Officielles
- **Les Reliques de Labir** : Aventure d'introduction (Niveau 1-3)
- **Les Secrets de la Forêt Millénaire** : Exploration de Sylvandor (Niveau 2-4)
- **Pack Complet** : Toutes les aventures avec cartes haute résolution

### 🧠 Concepts Avancés
- **Résonance Divine** : Connexion entre personnages et divinités
- **Liens Cosmiques** : Mécaniques de connexion universelle
- **Cycles Temporels** : Gestion des grands cycles cosmiques

## 🚀 Installation et Développement

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

## 👥 Rejoindre le Collectif

Le Collectif Everos est ouvert aux créateurs passionnés ! Nous recherchons :

- **✍️ Écrivains & Narrateurs** : Chroniques, histoires, lore
- **🎨 Artistes & Illustrateurs** : Visuels pour donner vie à l'univers
- **🎲 Game Designers** : Mécaniques et règles de jeu
- **💻 Développeurs Web** : Maintenance et amélioration du site

### Comment Contribuer

1. **Rejoindre** : Remplissez le [formulaire de candidature](content/pages/collective/join.md)
2. **Contribuer** : Soumettez vos créations via Pull Request
3. **Échanger** : Participez aux discussions dans les Issues

### Avantages des Membres
- 🤝 Communauté créative passionnée
- 🏆 Reconnaissance et crédits dans les publications
- 🎓 Apprentissage aux côtés d'experts
- 👁️ Accès exclusif aux nouveaux contenus

## 🌐 Ressources et Liens

- **Site Principal** : [everos-universe.com](https://everos-universe.com/)
- **Discord** : [Rejoindre la communauté](#)
- **Téléchargements** : Manuel JDR, feuilles de personnage, cartes
- **Galerie** : Art officiel et contributions de la communauté

### Réseaux Sociaux
- 🐦 Twitter : [@EverosUniverse](#)
- 📷 Instagram : [@everos.universe](#)
- 🎥 YouTube : [Chaîne Everos](#)

## 📝 Documentation Technique

### Architecture Hugo
- **Version** : Hugo Extended 0.138.0
- **Langue** : Français (fr)
- **Permalinks** : Structure `/pages/section/slug/`
- **Assets** : CSS/SCSS avec variables par divinité
- **Déploiement** : Netlify avec formulaires intégrés

### Conventions de Développement
- 🎨 Esthétique gothique/fantasy cohérente
- 🌈 Variables CSS pour couleurs thématiques des divinités
- 📱 Design responsive obligatoire
- 🔍 SEO optimisé avec méta descriptions
- 🚀 Performance et accessibilité

## 📄 Licence

Ce projet est sous licence Apache 2.0. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

**Contenu créatif** (histoires, artwork, lore) © 2025 Le Collectif Everos - Tous droits réservés.

## 🙏 Crédits

- **Créé par** : Le Collectif Everos
- **Générateur** : [Hugo](https://gohugo.io/)
- **Images** : Unsplash (voir attributions dans le code)
- **Inspirations** : Univers de fantasy classiques et mythologies

---

*"Dans Everos, chaque histoire commence par un choix, chaque aventure par un pas vers l'inconnu, et chaque légende par la volonté de créer quelque chose de plus grand que soi."*

**⭐ N'hésitez pas à mettre une étoile si vous appréciez le projet !**