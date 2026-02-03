# 💕 Saint-Valentin – Page pour Jade

Page Next.js responsive : demande à Jade d’être ta Valentine, avec bouton Oui / Non et popup paiement factice.

## Déploiement sur GitHub Pages

1. **Crée un nouveau dépôt sur GitHub**
   - Va sur [github.com/new](https://github.com/new)
   - Nom du dépôt : **valentineday**
   - Public, sans README ni .gitignore
   - Crée le dépôt

2. **Lie le projet et pousse le code**
   ```bash
   cd "/Users/mathias/Desktop/    /valentineday"
   git remote add origin https://github.com/TON_USERNAME/valentineday.git
   git push -u origin main
   ```
   Remplace `TON_USERNAME` par ton identifiant GitHub.

3. **Active GitHub Pages**
   - Dans le dépôt : **Settings** → **Pages**
   - Sous **Build and deployment** : **Source** = **GitHub Actions**
   - Enregistre

4. **Après le premier push**
   - L’onglet **Actions** exécutera le workflow « Deploy to GitHub Pages »
   - Une fois terminé, la page sera en ligne à :
   - **https://TON_USERNAME.github.io/valentineday/**

## En local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).
