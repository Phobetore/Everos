# Configuration du Déploiement SFTP

Ce document explique comment configurer les secrets GitHub pour le déploiement automatique du site Everos.

## Secrets Requis

Pour que le déploiement automatique fonctionne, vous devez configurer les secrets suivants dans votre repository GitHub :

### Méthode 1 : Authentification par Mot de Passe

1. **SFTP_SERVER** - L'adresse IP ou le nom de domaine de votre serveur
   - Exemple : `203.0.113.1` ou `monserveur.com`

2. **SFTP_USERNAME** - Nom d'utilisateur pour la connexion SFTP
   - Exemple : `utilisateur` ou `www-data`

3. **SFTP_PASSWORD** - Mot de passe pour la connexion SFTP

### Méthode 2 : Authentification par Clé SSH (Recommandée)

1. **SFTP_SERVER** - L'adresse IP ou le nom de domaine de votre serveur
2. **SFTP_USERNAME** - Nom d'utilisateur pour la connexion SSH/SFTP
3. **SFTP_PRIVATE_KEY** - Clé privée SSH (au format PEM)
4. **SFTP_PASSPHRASE** - Phrase de passe de la clé SSH (optionnel)

## Comment Configurer les Secrets

1. Allez dans votre repository GitHub
2. Cliquez sur **Settings** → **Secrets and variables** → **Actions**
3. Cliquez sur **New repository secret**
4. Ajoutez chaque secret avec sa valeur correspondante

## Génération d'une Clé SSH (Méthode Recommandée)

```bash
# Générer une nouvelle clé SSH
ssh-keygen -t ed25519 -C "github-actions@everos"

# Copier la clé publique sur votre serveur
ssh-copy-id -i ~/.ssh/id_ed25519.pub utilisateur@votre-serveur.com

# Afficher la clé privée pour la copier dans GitHub
cat ~/.ssh/id_ed25519
```

## Structure du Serveur

Le déploiement copie les fichiers dans le dossier `./axarathe/` sur votre serveur. Assurez-vous que :

1. Le dossier existe et que l'utilisateur a les permissions d'écriture
2. Le service SSH/SFTP est activé sur le serveur
3. Le pare-feu autorise les connexions SSH (port 22)

## Test de Connexion

Vous pouvez tester la connexion manuellement :

```bash
# Test avec mot de passe
sftp utilisateur@votre-serveur.com

# Test avec clé SSH
sftp -i ~/.ssh/id_ed25519 utilisateur@votre-serveur.com
```

## Résolution des Problèmes

### "Permission denied"
- Vérifiez que les credentials sont corrects
- Assurez-vous que l'utilisateur existe sur le serveur
- Vérifiez que SSH/SFTP est activé

### "Connection timeout"
- Vérifiez l'adresse du serveur
- Assurez-vous que le port 22 est ouvert
- Vérifiez les règles de pare-feu

### "No such file or directory"
- Créez le dossier `axarathe` sur votre serveur
- Vérifiez les permissions du dossier de destination

## Configuration du Serveur Web

Après le déploiement, configurez votre serveur web (Apache/Nginx) pour servir les fichiers depuis `./axarathe/`.

### Exemple pour Nginx

```nginx
server {
    listen 80;
    server_name votre-domaine.com;
    root /home/utilisateur/axarathe;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
}
```

### Exemple pour Apache

```apache
<VirtualHost *:80>
    ServerName votre-domaine.com
    DocumentRoot /home/utilisateur/axarathe
    DirectoryIndex index.html
</VirtualHost>
```