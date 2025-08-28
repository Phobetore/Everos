# Configuration des Réseaux Sociaux - Everos

## URLs des Réseaux Sociaux

Les URLs des réseaux sociaux sont centralisées dans le fichier `hugo.toml` et sont automatiquement utilisées dans tout le site.

### Configuration

Dans le fichier `hugo.toml`, modifiez la section `[params.social]` :

```toml
[params.social]
  discord = "https://discord.gg/votre-serveur"
  twitter = "https://twitter.com/votre-compte"
  instagram = "https://instagram.com/votre-compte"
  youtube = "https://youtube.com/@votre-chaine"
```

### Utilisation Automatique

Ces URLs sont automatiquement utilisées dans :

- **Footer** : Visible sur toutes les pages (template : `layouts/partials/footer.html`)
- **Page du Collectif** : Section "Rejoignez notre Discord" et boutons de réseaux sociaux (template : `layouts/partials/collective-layout.html`)

### Comment Ajouter un Nouveau Réseau Social

1. Ajoutez la nouvelle URL dans `hugo.toml` :
   ```toml
   [params.social]
     # ... URLs existantes ...
     tiktok = "https://tiktok.com/@votre-compte"
   ```

2. Utilisez cette URL dans vos templates :
   ```html
   <a href="{{ .Site.Params.social.tiktok }}" class="social-icon">
     <i class="fab fa-tiktok"></i>
   </a>
   ```

### Avantages de cette Approche

- ✅ **Centralisation** : Un seul endroit pour gérer toutes les URLs
- ✅ **Cohérence** : Même URL utilisée partout automatiquement
- ✅ **Maintenance** : Facile à mettre à jour
- ✅ **Flexibilité** : Ajout facile de nouveaux réseaux sociaux