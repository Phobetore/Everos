# Guide de Déploiement - Everos

Ce document explique comment configurer et résoudre les problèmes de déploiement du site Everos.

## Configuration des Secrets GitHub

Pour que le déploiement automatique fonctionne, vous devez configurer les secrets GitHub suivants :

### Étapes de Configuration

1. **Accéder aux paramètres des secrets :**
   - Allez dans votre repository GitHub
   - Cliquez sur **Settings** (Paramètres)
   - Dans la barre latérale, cliquez sur **Secrets and variables** > **Actions**

2. **Ajouter les secrets requis :**

   | Nom du Secret | Description | Exemple |
   |---------------|-------------|---------|
   | `SFTP_SERVER` | Adresse du serveur SFTP | `votre-serveur.com` ou `192.168.1.100` |
   | `SFTP_USERNAME` | Nom d'utilisateur SFTP | `votre-nom-utilisateur` |
   | `SFTP_PASSWORD` | Mot de passe SFTP | `votre-mot-de-passe-securise` |

3. **Cliquer sur "New repository secret" pour chaque secret**

## Structure de Déploiement

- **Site local :** Le site Hugo est généré dans le dossier `./public/`
- **Serveur distant :** Les fichiers sont uploadés vers `./axarathe/` sur le serveur
- **URL finale :** Le site est accessible via `https://axarathe.com/`

## Résolution des Problèmes

### Problème : "Permission denied"

**Causes possibles :**
- Identifiants SFTP incorrects
- Secrets GitHub mal configurés
- Serveur inaccessible
- Permissions insuffisantes sur le serveur

**Solutions :**
1. Vérifiez que tous les secrets sont correctement configurés
2. Testez les identifiants SFTP manuellement avec un client SFTP
3. Vérifiez que le serveur accepte les connexions SFTP
4. Assurez-vous que le dossier de destination existe sur le serveur

### Problème : "Connection timeout"

**Causes possibles :**
- Serveur inaccessible depuis GitHub Actions
- Pare-feu bloquant les connexions
- Adresse de serveur incorrecte

**Solutions :**
1. Vérifiez l'adresse du serveur
2. Contactez votre hébergeur pour autoriser les connexions depuis GitHub
3. Vérifiez les paramètres de pare-feu

### Problème : "Directory not found"

**Causes possibles :**
- Le dossier `./axarathe/` n'existe pas sur le serveur
- Permissions insuffisantes pour accéder au dossier

**Solutions :**
1. Créez le dossier `axarathe` dans votre répertoire home sur le serveur
2. Vérifiez les permissions du dossier (rwx pour l'utilisateur)

## Test Manuel

Pour tester la configuration SFTP manuellement :

```bash
# Installer un client SFTP
sudo apt-get install openssh-client

# Tester la connexion
sftp username@your-server.com

# Dans le client SFTP :
ls                    # Lister les fichiers
pwd                   # Voir le répertoire courant
mkdir axarathe        # Créer le dossier si nécessaire
cd axarathe          # Entrer dans le dossier
put localfile.txt    # Tester l'upload d'un fichier
quit                 # Quitter
```

## Monitoring des Déploiements

- Les logs de déploiement sont disponibles dans l'onglet **Actions** du repository
- Chaque étape du processus est loggée pour faciliter le debugging
- En cas d'échec, des messages d'aide détaillés sont affichés

## Workflow de Déploiement

1. **Build :** Génération du site Hugo avec les contenus et assets
2. **Test de connectivité :** Vérification de la connexion SFTP
3. **Upload :** Transfert des fichiers vers le serveur
4. **Vérification :** Confirmation du succès du déploiement

## Support

Si vous rencontrez des problèmes persistants :

1. Vérifiez les logs dans l'onglet **Actions**
2. Consultez ce guide de dépannage
3. Testez manuellement la connexion SFTP
4. Contactez l'administrateur du serveur si nécessaire

---

*Ce document fait partie du projet Everos - Un univers de fantasy épique.*