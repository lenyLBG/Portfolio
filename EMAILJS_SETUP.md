# 📧 Configuration EmailJS - Guide Complet

Ce guide vous explique comment configurer le formulaire de contact avec **EmailJS** pour recevoir des emails directement depuis votre portfolio.

## 🚀 Étape 1 : Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur "Sign Up Free"
3. Créez un compte avec Google, GitHub ou votre email
4. Confirmez votre email

## 📝 Étape 2 : Ajouter votre service email

### Option A : Gmail
1. Dans le tableau de bord EmailJS, allez à **Add Service**
2. Sélectionnez **Gmail**
3. Connectez-vous à votre compte Gmail
4. Autorisez l'accès
5. Copiez l'**ID du service** (exemple: `service_abc123`)

### Option B : Autre service email
1. Allez à **Add Service**
2. Choisissez votre fournisseur email
3. Suivez les instructions spécifiques au service

## 🎯 Étape 3 : Créer un template d'email

1. Allez à l'onglet **Email Templates**
2. Cliquez sur **Create New Template**
3. Donnez un nom à votre template (exemple: `contact_form`)
4. Remplacez le contenu par ceci :

```
Subject: Nouveau message de {{user_name}}

Nom: {{user_name}}
Email: {{user_email}}
Sujet: {{subject}}

Message:
{{message}}
```

5. Cliquez sur **Save**
6. Copiez l'**ID du template** (exemple: `template_abc123`)

## 🔑 Étape 4 : Récupérer votre clé publique

1. Allez à **Account** ou **Dashboard**
2. Cliquez sur **API Keys** ou **Accessibility**
3. Copiez votre **Public Key** (commence par `YOUR_PUBLIC_KEY`)

## 🔧 Étape 5 : Configurer votre portfolio

Ouvrez le fichier `script.js` et remplacez les trois variables au début du fichier :

```javascript
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // ← Remplacez
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // ← Remplacez
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // ← Remplacez
```

Exemple avec des vraies valeurs :
```javascript
const EMAILJS_PUBLIC_KEY = 'pXxYyZzAbCdEfGhIjKlMnOpQrStUvWx';
const EMAILJS_SERVICE_ID = 'service_1a2b3c4d5e6f7g8h';
const EMAILJS_TEMPLATE_ID = 'template_9z8y7x6w5v4u3t2s';
```

## ✅ Étape 6 : Tester votre formulaire

1. Ouvrez `index.html` dans votre navigateur
2. Allez à la section **Contactez-moi**
3. Remplissez et envoyez le formulaire
4. Vérifiez votre email !

## 🎁 Limite gratuite EmailJS

- ✅ **200 emails/mois** gratuitement
- ✅ Parfait pour un portfolio
- ✅ Pas de frais de carte bancaire

## 🆘 Troubleshooting

### "EmailJS non configuré"
- Vous n'avez pas remplacé les variables dans `script.js`
- Vérifiez que vous avez copié les bonnes valeurs

### Le formulaire ne s'envoie pas
1. Ouvrez la console du navigateur (F12)
2. Vérifiez s'il y a des messages d'erreur
3. Assurez-vous que votre service Gmail/email est activé dans EmailJS

### Je ne reçois pas les emails
1. Vérifiez le dossier Spam/Courrier indésirable
2. Assurez-vous que le service email est activé
3. Vérifiez l'adresse email dans votre profil EmailJS

### Erreur "Invalid Service ID"
- Votre `EMAILJS_SERVICE_ID` est incorrect
- Allez dans le dashboard EmailJS et copiez le bon ID

## 📱 Alternative : Formspree

Si vous préférez une autre solution, vous pouvez utiliser **Formspree** :

1. Allez sur [https://formspree.io/](https://formspree.io/)
2. Créez un compte
3. Créez un nouveau formulaire
4. Remplacez l'action du formulaire HTML :

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 📞 Support

- 📖 Docs EmailJS : [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- 💬 Support Formspree : [https://formspree.io/help/](https://formspree.io/help/)

---

Maintenant vos visiteurs peuvent vous envoyer des messages directement depuis votre portfolio! 🎉
