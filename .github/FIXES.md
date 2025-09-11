# Corrections du Déploiement Everos

## Problème Résolu

Le processus de déploiement était cassé avec l'erreur "Permission denied" lors de la connexion SFTP au serveur.

## Améliorations Apportées

### 1. Workflow GitHub Actions Amélioré

- ✅ **Validation des secrets** : Vérification que tous les secrets requis sont configurés
- ✅ **Test de connexion** : Test automatique de la connexion SFTP avant déploiement
- ✅ **Support double authentification** : Support pour authentification par mot de passe ET par clé SSH
- ✅ **Messages d'erreur détaillés** : Diagnostic précis en cas d'échec
- ✅ **Instructions de résolution** : Aide contextuelle pour résoudre les problèmes

### 2. Documentation Complète

- ✅ **Guide de configuration** : Instructions détaillées dans `.github/DEPLOYMENT.md`
- ✅ **Exemples de configuration serveur** : Nginx et Apache
- ✅ **Résolution de problèmes** : Guide de dépannage complet

## Actions Requises

Pour que le déploiement fonctionne, vous devez configurer les secrets GitHub :

### Méthode 1 : Authentification par Mot de Passe
```
SFTP_SERVER=votre-serveur.com
SFTP_USERNAME=votre-utilisateur
SFTP_PASSWORD=votre-mot-de-passe
```

### Méthode 2 : Authentification par Clé SSH (Recommandée)
```
SFTP_SERVER=votre-serveur.com
SFTP_USERNAME=votre-utilisateur
SFTP_PRIVATE_KEY=-----BEGIN OPENSSH PRIVATE KEY-----...
SFTP_PASSPHRASE=phrase-de-passe-optionnelle
```

## Configuration des Secrets

1. Allez dans votre repository GitHub
2. **Settings** → **Secrets and variables** → **Actions**
3. Cliquez sur **New repository secret**
4. Ajoutez chaque secret nécessaire

## Test du Déploiement

Après configuration des secrets :
1. Faites un commit sur la branche `main`
2. Le workflow se lancera automatiquement
3. Surveillez l'onglet **Actions** pour voir le progrès
4. En cas d'erreur, les messages détaillés vous guideront

## Support

Consultez `.github/DEPLOYMENT.md` pour :
- Instructions détaillées de configuration
- Exemples de configuration serveur
- Guide de résolution de problèmes
- Tests de connexion manuels