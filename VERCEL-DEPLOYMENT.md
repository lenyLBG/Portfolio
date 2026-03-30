# 🚀 Déploiement sur Vercel

## Instructions

### 1. **Créer un compte Vercel**
- Va sur [vercel.com](https://vercel.com)
- Login avec GitHub (c'est plus facile)

### 2. **Importer le projet**
- Clique sur **"Add New"** → **"Project"**
- Sélectionne ton repo GitHub `portfolio`
- Clique sur **"Import"**

### 3. **Configurer les variables d'environnement**
Avant de déployer, tu DOIS ajouter les secrets Vercel :

**Dans Vercel Dashboard :**
1. Va dans les **Settings** du projet
2. Clique sur **"Environment Variables"**
3. Ajoute ces 2 variables :

```
EMAIL_USER = lenyleborgne4@gmail.com
EMAIL_PASSWORD = vdso qkec dpmw yfsj
```

(Copie les valeurs depuis ton fichier `.env`)

### 4. **Déployer**
- Clique sur **"Deploy"**
- Vercel va build et déployer automatiquement
- C'est gratuit ! ✅

### 5. **Ton URL Vercel**
Une fois déployé, tu auras une URL comme :
```
https://portfolio-[random].vercel.app
```

Elle sera utilisée automatiquement par ton formulaire ! 🎉

---

## ⚠️ **Important : Ajouter GitHub Pages**

Ton portfolio reste sur **GitHub Pages** (frontend statique).
Le backend est sur **Vercel**.
Ils vont se connecter automatiquement ! 🔗

---

## 🔧 **Pour les déploiements futurs**

Chaque fois que tu pushs sur GitHub, Vercel se redéploie automatiquement ! 🚀

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

C'est tout ! Vercel detecte le changement et redéploie. ✅
