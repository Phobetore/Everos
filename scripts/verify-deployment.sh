#!/bin/bash

# Script de vérification pour le déploiement Everos
# Ce script vérifie que tous les composants nécessaires fonctionnent correctement

echo "🔍 Vérification des composants de déploiement Everos"
echo "=================================================="

# Variables
HUGO_VERSION="0.138.0"
ERRORS=0

# Fonction pour signaler les erreurs
report_error() {
    echo "❌ $1"
    ERRORS=$((ERRORS + 1))
}

report_success() {
    echo "✅ $1"
}

# Vérification 1: Structure des fichiers Hugo
echo ""
echo "📁 Vérification de la structure du projet..."
if [ -f "hugo.toml" ]; then
    report_success "Fichier de configuration Hugo trouvé"
else
    report_error "Fichier hugo.toml manquant"
fi

if [ -d "content" ]; then
    report_success "Dossier content trouvé"
else
    report_error "Dossier content manquant"
fi

if [ -d "layouts" ]; then
    report_success "Dossier layouts trouvé"
else
    report_error "Dossier layouts manquant"
fi

if [ -d "static" ]; then
    report_success "Dossier static trouvé"
else
    report_error "Dossier static manquant"
fi

# Vérification 2: Workflow GitHub Actions
echo ""
echo "⚙️  Vérification du workflow GitHub Actions..."
if [ -f ".github/workflows/hugo.yml" ]; then
    report_success "Workflow GitHub Actions trouvé"
    
    # Vérification des étapes critiques
    if grep -q "Test SFTP connectivity" .github/workflows/hugo.yml; then
        report_success "Test de connectivité SFTP configuré"
    else
        report_error "Test de connectivité SFTP manquant"
    fi
    
    if grep -q "Check deployment result" .github/workflows/hugo.yml; then
        report_success "Vérification du résultat de déploiement configurée"
    else
        report_error "Vérification du résultat de déploiement manquante"
    fi
else
    report_error "Workflow GitHub Actions manquant"
fi

# Vérification 3: Documentation
echo ""
echo "📚 Vérification de la documentation..."
if [ -f "DEPLOYMENT.md" ]; then
    report_success "Guide de déploiement trouvé"
else
    report_error "Guide de déploiement manquant"
fi

if [ -f "README.md" ]; then
    report_success "README trouvé"
else
    echo "⚠️  README recommandé mais pas requis"
fi

# Vérification 4: Configuration Hugo
echo ""
echo "🏗️  Vérification de la configuration Hugo..."
if grep -q "baseURL.*axarathe" hugo.toml; then
    report_success "URL de base configurée correctement"
else
    report_error "URL de base non configurée ou incorrecte"
fi

if grep -q "languageCode.*fr" hugo.toml; then
    report_success "Langue française configurée"
else
    report_error "Langue non configurée"
fi

# Vérification 5: Test de build (si Hugo est disponible)
echo ""
echo "🔧 Test de build Hugo..."
if command -v hugo >/dev/null 2>&1; then
    hugo version
    if hugo --gc --minify --baseURL "/" --destination /tmp/hugo-test-verify >/dev/null 2>&1; then
        file_count=$(find /tmp/hugo-test-verify -type f | wc -l)
        if [ "$file_count" -gt 0 ]; then
            report_success "Build Hugo réussi ($file_count fichiers générés)"
            rm -rf /tmp/hugo-test-verify
        else
            report_error "Build Hugo échoué (aucun fichier généré)"
        fi
    else
        report_error "Build Hugo échoué"
    fi
else
    echo "⚠️  Hugo non disponible pour le test de build"
fi

# Résumé
echo ""
echo "📊 Résumé de la vérification"
echo "=========================="
if [ $ERRORS -eq 0 ]; then
    echo "🎉 Tous les tests sont passés ! Le déploiement devrait fonctionner."
    echo ""
    echo "📋 Prochaines étapes :"
    echo "1. Vérifiez que les secrets GitHub sont configurés (voir DEPLOYMENT.md)"
    echo "2. Testez un déploiement en poussant sur la branche main"
    echo "3. Surveillez les logs dans l'onglet Actions de GitHub"
    exit 0
else
    echo "⚠️  $ERRORS erreur(s) détectée(s). Veuillez corriger avant de déployer."
    exit 1
fi