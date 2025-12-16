# 🚀 Déployer le Backend Email - Guide Complet

Puisque GitHub Pages ne peut pas charger EmailJS, nous utilisons un backend Node.js simple déployé gratuitement.

## 📋 Prérequis

- Node.js installé localement
- Compte GitHub (gratuit)
- Compte Gmail

## 🔑 Étape 1 : Configurer Gmail pour les applications

1. **Allez sur** [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Connectez-vous avec votre compte Gmail
   - Sélectionnez **Mail** et **Windows/Linux/Windows Phone**
   - Générez un mot de passe d'application

2. **Copiez le mot de passe** généré (16 caractères)

## 📁 Étape 2 : Configuration locale

### 1. Installer les dépendances

```bash
cd c:\Users\LEBORGNE\portfolio
npm install
```

### 2. Créer le fichier `.env`

Créez un fichier `.env` à la racine (copie de `.env.example`) :

```
EMAIL_USER=lenyleborgne4@gmail.com
EMAIL_PASSWORD=votre_mot_de_passe_app_16_chars
PORT=3000
```

### 3. Tester localement

```bash
npm start
```

Le serveur démarre sur `http://localhost:3000`

Mettez à jour `script.js` :
```javascript
const BACKEND_URL = 'http://localhost:3000'; // Avant déploiement
```

Testez le formulaire localement. 🧪

## 🌍 Étape 3 : Déployer sur Render.com (Gratuit!)

### 1. Créer un compte

Allez sur [https://render.com](https://render.com)
- Inscrivez-vous avec votre compte GitHub
- Autorisez Render à accéder à vos repos

### 2. Créer un nouveau Web Service

1. Cliquez sur **New+** → **Web Service**
2. Sélectionnez votre repository GitHub `portfolio`
3. **Name**: `portfolio-backend`
4. **Environment**: `Node`
5. **Build Command**: `npm install`
6. **Start Command**: `npm start`
7. Cliquez sur **Create Web Service**

### 3. Ajouter les variables d'environnement

1. Allez dans **Environment**
2. Ajoutez les variables :
   - `EMAIL_USER`: `lenyleborgne4@gmail.com`
   - `EMAIL_PASSWORD`: Votre mot de passe app 16 chars

3. Cliquez sur **Deploy**

### 4. Récupérer l'URL

Une fois déployé, Render vous donne une URL comme :
```
https://portfolio-backend-xxxx.onrender.com
```

## 🔗 Étape 4 : Mettre à jour votre portfolio

Dans `script.js`, remplacez :

```javascript
const BACKEND_URL = 'https://portfolio-backend-xxxx.onrender.com'; // Votre URL Render
```

Commitez et poussez :

```bash
git add .
git commit -m "Update backend URL"
git push origin main
```

## ✅ Tester

1. Attendez 30 secondes que GitHub Pages se mette à jour
2. Allez sur votre portfolio
3. Testez le formulaire
4. Vous devriez recevoir les emails ! 🎉

## 💡 Autres options de déploiement

### Heroku (gratuit - version limitée)
- [https://www.heroku.com](https://www.heroku.com)
- Même processus que Render

### Railway.app
- [https://railway.app](https://railway.app)
- Très facile à déployer

### Vercel (avec serverless functions)
- [https://vercel.com](https://vercel.com)
- Déploiement auto depuis GitHub

## 🆘 Troubleshooting

### "Erreur: Cannot find module 'nodemailer'"
```bash
npm install
```

### "Erreur CORS"
Le serveur backend n'est pas accessible. Vérifiez l'URL dans `script.js`.

### "Erreur d'authentification Gmail"
- Vérifiez que vous avez généré un mot de passe d'application
- Pas votre mot de passe Gmail habituel!

### Les emails ne s'envoient pas
1. Vérifiez les logs Render
2. Assurez-vous que 2FA est activé sur Gmail
3. Vérifiez `EMAIL_USER` et `EMAIL_PASSWORD`

---

C'est tout ! 🚀 Votre portfolio envoie maintenant des emails de manière fiable !
