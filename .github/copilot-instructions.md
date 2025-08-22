# Instructions pour GitHub Copilot - Everos

## Contexte du Projet

Everos est un univers de fantasy épique avec un site web Hugo qui présente :
- 7 divinités et leurs royaumes respectifs
- Un système de jeu de rôle
- Des chroniques et histoires
- Une galerie d'art
- Un collectif de créateurs

## Architecture Hugo

### Structure des Dossiers
- `content/pages/` : Contenu principal organisé par section
- `layouts/` : Templates Hugo avec partials réutilisables
- `data/` : Fichiers YAML avec données structurées
- `static/` : Assets statiques (CSS, JS, images)

### Conventions de Nommage
- URLs en français : `/pages/divinites/`, `/pages/chroniques/`
- Slugs en minuscules avec tirets
- Fichiers de données en YAML

### Composants Réutilisables
- Shortcodes pour carousel, lightbox, cartes info
- Partials pour navigation, footer, head
- Data-driven content via fichiers YAML

## Règles de Développement

### CSS et Style
- Conserver l'esthétique gothique/fantasy existante
- Utiliser les variables CSS pour les couleurs des divinités
- Responsive design obligatoire

### Contenu
- Tout le contenu en français
- Respecter le ton épique et mystérieux
- Maintenir la cohérence du lore

### SEO et Performance
- Méta descriptions pour toutes les pages
- Open Graph et Twitter Cards
- Images optimisées
- Structure HTML sémantique

## Instructions Spécifiques

Quand tu travailles sur ce projet :
1. Utilise toujours les shortcodes Hugo existants quand possible
2. Maintiens la cohérence avec les données YAML
3. Teste les builds Hugo avant de proposer des changements
4. Respecte la structure des permalinks existante
5. Assure-toi que les formulaires Netlify sont correctement configurés