# 🌐 Guide d'hébergement gratuit - Site de Mariage

## 🚀 Options d'hébergement gratuites recommandées

### 1. **GitHub Pages** (Recommandé - Très simple)
**Avantages :** Gratuit, fiable, facile à mettre à jour

#### Étapes :
1. **Créez un compte GitHub** sur [github.com](https://github.com)
2. **Créez un nouveau repository** :
   - Cliquez sur "New repository"
   - Nom : `mariage-sarah-antonin` (ou autre nom)
   - Public (gratuit)
   - Cochez "Add a README file"
3. **Uploadez vos fichiers** :
   - Glissez-déposez tous vos fichiers dans le repository
   - Ou utilisez l'interface web pour créer les fichiers
4. **Activez GitHub Pages** :
   - Allez dans Settings → Pages
   - Source : "Deploy from a branch"
   - Branch : "main" (ou "master")
   - Folder : "/ (root)"
   - Cliquez "Save"
5. **Votre site sera disponible** : `https://votre-username.github.io/mariage-sarah-antonin`

### 2. **Netlify** (Alternative - Drag & Drop)
**Avantages :** Très simple, drag & drop, domaine personnalisé possible

#### Étapes :
1. **Allez sur [netlify.com](https://netlify.com)**
2. **Créez un compte** (gratuit)
3. **Glissez-déposez** votre dossier contenant les fichiers
4. **Votre site sera en ligne** immédiatement
5. **URL** : `https://random-name.netlify.app` (personnalisable)

### 3. **Vercel** (Pour les développeurs)
**Avantages :** Performance optimale, déploiement automatique

#### Étapes :
1. **Allez sur [vercel.com](https://vercel.com)**
2. **Connectez votre GitHub** (recommandé)
3. **Importez votre repository**
4. **Déploiement automatique**

## 📁 Fichiers à uploader

Assurez-vous d'avoir tous ces fichiers dans votre dossier :
```
/
├── index.html
├── style.css
├── script.js
├── IMG_9182.jpeg
├── domaine.jpg
└── README.md
```

## 🔗 Personnalisation de l'URL

### GitHub Pages
- **URL par défaut** : `https://username.github.io/repository-name`
- **Domaine personnalisé** : Possible avec un nom de domaine acheté

### Netlify
- **URL par défaut** : `https://random-name.netlify.app`
- **Changer le nom** : Settings → Site information → Change site name
- **Domaine personnalisé** : Settings → Domain management

## 📱 Test de votre site

Une fois en ligne, testez :
- ✅ **Navigation** sur mobile et desktop
- ✅ **Compte à rebours** fonctionne
- ✅ **FAQ** interactive
- ✅ **Liens de paiement** (à configurer)
- ✅ **Responsive design**

## 🎨 Personnalisation finale

### Avant de partager, vérifiez :
1. **Liens de paiement** dans `index.html`
2. **Adresse du lieu** dans la section "Infos pratiques"
3. **Coordonnées bancaires** réelles
4. **Lien Google Photos** pour la galerie
5. **Numéros de téléphone** de contact

### Exemple de liens à remplacer :
```html
<!-- Lydia -->
<a href="https://lydia-app.com/collect/12345" class="payment-link">

<!-- Revolut -->
<a href="https://revolut.me/username" class="payment-link">

<!-- Google Photos -->
<a href="https://photos.google.com/share/..." class="galerie-link">
```

## 📧 Partage avec vos invités

### Message type à envoyer :
```
💒 Bonjour !

Nous sommes ravis de vous inviter à notre mariage !

📅 Date : 23 août 2025
📍 Lieu : [Adresse à compléter]

🌐 Toutes les informations pratiques sont sur notre site :
[VOTRE_LIEN_ICI]

Vous y trouverez :
• Le programme détaillé du week-end
• Les informations pratiques (accès, hébergement)
• Notre cagnotte de mariage
• Le dress code et nos conseils
• Les réponses aux questions fréquentes

N'hésitez pas à nous contacter pour toute question !

Sarah & Antonin 💕
```

## 🔧 Dépannage

### Le site ne s'affiche pas ?
1. **Vérifiez l'URL** - elle peut prendre quelques minutes à être active
2. **Vérifiez les fichiers** - tous doivent être uploadés
3. **Console du navigateur** (F12) pour voir les erreurs

### Les images ne s'affichent pas ?
1. **Vérifiez les noms de fichiers** (sensibles à la casse)
2. **Vérifiez les extensions** (.jpg, .jpeg, .png)
3. **Taille des fichiers** - si trop gros, compressez-les

### Le compte à rebours ne fonctionne pas ?
1. **Vérifiez la date** dans `script.js`
2. **Console du navigateur** pour les erreurs JavaScript

## 💡 Conseils supplémentaires

### Optimisation des images
- **Compressez** vos images avec [TinyPNG](https://tinypng.com)
- **Format WebP** pour de meilleures performances
- **Taille recommandée** : max 1MB par image

### Sécurité
- **Ne partagez jamais** vos vrais RIB en public
- **Utilisez des liens sécurisés** (HTTPS)
- **Vérifiez les permissions** de vos albums photos

### Maintenance
- **Sauvegardez** vos fichiers localement
- **Testez régulièrement** le site
- **Mettez à jour** les informations si nécessaire

## 🎉 Félicitations !

Votre site de mariage est maintenant en ligne et prêt à être partagé avec vos invités ! 

N'oubliez pas de :
- Tester sur différents appareils
- Vérifier tous les liens
- Personnaliser le message d'invitation
- Garder une copie de sauvegarde

**Bonne chance pour votre mariage ! 💕** 