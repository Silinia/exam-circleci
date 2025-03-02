# Projet Next.js avec CI/CD CircleCI

Ce projet implémente une application Next.js avec TypeScript et une configuration CI/CD complète utilisant CircleCI et le pattern GitFlow.

![CircleCI](https://img.shields.io/circleci/build/github/Silinia/exam-circleci/develop)
![Next.js](https://img.shields.io/badge/Next.js-15.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)
![Jest](https://img.shields.io/badge/Jest-29.6.0-red)

## 🚀 Caractéristiques

- Framework **Next.js 15** avec App Router et TypeScript
- Tests avec **Jest** et **Testing Library**
- Pattern de branches **GitFlow**
- **CI/CD** complet avec CircleCI
- Déploiement sur **3 environnements** (development, integration, production)
- Pipeline optimisé avec conditions d'exécution

## 📋 Prérequis

- Node.js 18.17.0 ou supérieur
- npm 9.6.0 ou supérieur
- Git
- Compte CircleCI
- Compte Vercel pour le déploiement

## 🛠️ Installation

1. Cloner le dépôt
   ```bash

   git clone https://github.com/Silinia/exam-circleci.git
   cd exam-circleci

   ```

2. Installer les dépendances
   ```bash

   npm install

   ```

3. Lancer le serveur de développement
   ```bash

   npm run dev

   ```
   L'application est accessible à l'adresse `http://localhost:3000`

## 🔄 Workflow GitFlow

Ce projet suit le pattern GitFlow avec les branches suivantes :

- **`main`** : Code de production (environnement de production)
- **`integration`** : Code de pré-production (environnement d'intégration)
- **`develop`** : Code de développement (environnement de développement)
- **`feature/*`** : Nouvelles fonctionnalités (temporaires)
- **`hotfix/*`** : Corrections urgentes (temporaires)

### Développer une nouvelle fonctionnalité

```bash
# Créer une branche feature depuis develop
git checkout develop
git pull
git checkout -b feature/ma-fonctionnalite

# Développer et commiter les changements
git add .
git commit -m "Description de la fonctionnalité"
git push origin feature/ma-fonctionnalite

# Créer une Pull Request vers develop
# Une fois la PR validée et mergée
git checkout develop
git pull

```

### Créer un hotfix

```bash
# Créer une branche hotfix depuis main
git checkout main
git pull
git checkout -b hotfix/bug-critique

# Corriger le bug et commiter
git add .
git commit -m "Fix: correction du bug critique"
git push origin hotfix/bug-critique

```

## 🔄 CI/CD avec CircleCI

Le projet utilise CircleCI pour l'intégration et le déploiement continus, avec trois stages principaux :

### Stage Build
- Installation des dépendances
- Analyse de code
- Packaging et build

### Stage Tests
- Tests unitaires
- Tests d'intégration
- Tests de régression
- Tests de performance
- Tests de sécurité
- Tests de compatibilité
- Tests d'accessibilité

### Stage Deploy
- Préparation de l'environnement
- Déploiement de l'application
- Tests de vérification
- Tests de validation fonctionnelle
- Tests de charge
- Surveillance et monitoring

## 🧪 Tests

Exécuter les tests unitaires :

```bash

npm run test

```


## 🚀 Déploiement

Le projet est configuré pour être déployé automatiquement sur Vercel via CircleCI :
- La branche `develop` est déployée sur l'environnement de développement
- La branche `integration` est déployée sur l'environnement d'intégration
- La branche `main` est déployée sur l'environnement de production

## 📚 Documentation

Pour plus de détails sur la configuration CI/CD et le workflow de développement, consultez la [documentation technique](./docs/documentation-technique.pdf).

## 🔎 Fonctionnalités implémentées

- **Composant Counter** : Un compteur interactif avec des boutons pour incrémenter, décrémenter et réinitialiser la valeur
- **Tests complets** : Tests unitaires pour tous les composants avec Jest et Testing Library

## 👥 Auteur

- **Thomas Alglave** - [GitHub](https://github.com/Silinia)

