# 💒 Site de Mariage - Sarah & Antonin

Un site web statique moderne et élégant pour célébrer le mariage de Sarah & Antonin le 23 août 2025.

## 🎨 Design

- **Couleurs** : Vert pastel, or, blanc cassé
- **Style** : Moderne, élégant, romantique
- **Responsive** : Optimisé pour mobile et desktop
- **Animations** : Effets subtils et fluides
- **Photo** : IMG_9182.jpeg intégrée en arrière-plan

## 📁 Structure des fichiers

```
/
├── index.html          # Page principale
├── style.css           # Styles CSS
├── script.js           # Fonctionnalités JavaScript
├── IMG_9182.jpeg       # Photo de Sarah & Antonin
└── README.md           # Ce fichier
```

## 🚀 Installation et utilisation

1. **Téléchargez** tous les fichiers dans un dossier
2. **Ajoutez** votre image de fond nommée `image.jpg`
3. **Ouvrez** `index.html` dans votre navigateur
4. **Personnalisez** le contenu selon vos besoins

## ✏️ Personnalisation

### 📸 Image de fond
Votre photo `IMG_9182.jpeg` est déjà intégrée en arrière-plan de la page d'accueil.
Pour la changer :
- Remplacez `IMG_9182.jpeg` par votre nouvelle image
- Modifiez le nom dans `style.css` ligne 147 : `background-image: url('VOTRE_IMAGE');`
- Format recommandé : JPG ou PNG
- Taille recommandée : 1920x1080px minimum

### 🔗 Liens à configurer

#### Liens de paiement
Dans `index.html`, remplacez les liens `#` par vos vrais liens :

```html
<!-- Lydia -->
<a href="VOTRE_LIEN_LYDIA" class="payment-link">

<!-- Revolut -->
<a href="VOTRE_LIEN_REVOLUT" class="payment-link">

<!-- Wero -->
<a href="VOTRE_LIEN_WERO" class="payment-link">
```

#### Album Google Photos
```html
<a href="VOTRE_LIEN_GOOGLE_PHOTOS" class="galerie-link" target="_blank">
```

### 📍 Informations pratiques
Modifiez les sections suivantes dans `index.html` :

#### Adresse du lieu
```html
<p><strong>Nom du lieu</strong><br>
Adresse complète<br>
Code postal Ville<br>
<em>Supprimez cette ligne quand l'adresse est complète</em></p>
```

#### Coordonnées bancaires
```html
<p><strong>IBAN :</strong> VOTRE_IBAN_REEL</p>
<p><strong>BIC :</strong> VOTRE_BIC_REEL</p>
<p><strong>Titulaire :</strong> VOS_NOMS_REELS</p>
```

#### Contacts
```html
<p>Sarah : VOTRE_NUMERO<br>
Antonin : VOTRE_NUMERO<br>
<em>Supprimez cette ligne quand les numéros sont ajoutés</em></p>
```

### 📅 Date du mariage
Pour changer la date, modifiez dans `script.js` :
```javascript
const weddingDate = new Date('August 23, 2025 15:00:00').getTime();
```

### 🎨 Couleurs
Pour modifier les couleurs, éditez les variables CSS dans `style.css` :
```css
:root {
    --color-off-white: #f8f9fa;    /* Blanc cassé */
    --color-pastel-green: #a8d5ba; /* Vert pastel */
    --color-gold: #d4af37;         /* Or */
    --color-dark-gold: #b8860b;    /* Or foncé */
}
```

## 📱 Fonctionnalités

### ✅ Fonctionnalités incluses
- **Navigation sticky** avec menu hamburger mobile
- **Compte à rebours** dynamique jusqu'au 23 août 2025
- **FAQ interactive** avec accordéon
- **Animations au scroll** fluides
- **Effets de parallaxe** subtils
- **Copier-coller RIB** en un clic
- **Design responsive** pour tous les écrans
- **Navigation smooth** entre les sections

### 🎯 Sections du site
1. **Accueil** - Noms et date du mariage
2. **Notre histoire** - Timeline romantique
3. **Programme** - Planning du week-end
4. **Infos pratiques** - Lieu, accès, hébergement
5. **Galerie** - Lien vers album photos
6. **Cagnotte** - Liens de paiement et RIB
7. **Dress code** - Couleurs et conseils
8. **Compte à rebours** - Temps restant
9. **FAQ** - Questions fréquentes

## 🔧 Personnalisation avancée

### Modifier la timeline
Dans `index.html`, section "Notre histoire" :
```html
<div class="timeline-item">
    <div class="timeline-date">2023</div>
    <div class="timeline-content">
        <h3>Titre de l'événement</h3>
        <p>Description de l'événement</p>
    </div>
</div>
```

### Ajouter des questions FAQ
```html
<div class="faq-item">
    <div class="faq-question">
        <h3>Votre question ?</h3>
        <span class="faq-toggle">+</span>
    </div>
    <div class="faq-answer">
        <p>Votre réponse</p>
    </div>
</div>
```

### Modifier le programme
Dans la section "Programme", ajoutez ou modifiez les événements :
```html
<div class="event">
    <span class="event-time">15h00</span>
    <span class="event-desc">Description de l'événement</span>
</div>
```

## 🌐 Hébergement

### Options gratuites
- **GitHub Pages** : Parfait pour les sites statiques
- **Netlify** : Déploiement facile avec drag & drop
- **Vercel** : Performance optimale

### Options payantes
- **OVH** : Hébergement français
- **InfinityFree** : Hébergement gratuit avec publicités

## 📞 Support

### Problèmes courants

#### L'image de fond ne s'affiche pas
- Vérifiez que `image.jpg` est dans le bon dossier
- Vérifiez l'extension du fichier (.jpg, .jpeg, .png)
- Essayez avec une image plus petite

#### Les liens de paiement ne fonctionnent pas
- Remplacez tous les `href="#"` par vos vrais liens
- Testez les liens dans un nouvel onglet

#### Le compte à rebours ne fonctionne pas
- Vérifiez la date dans `script.js`
- Ouvrez la console du navigateur (F12) pour voir les erreurs

### Debug
Ouvrez la console du navigateur (F12) et tapez :
```javascript
debugInfo()
```

## 🎨 Personnalisation du design

### Changer les polices
Dans `index.html`, modifiez les liens Google Fonts :
```html
<link href="https://fonts.googleapis.com/css2?family=VOTRE_POLICE:wght@400;700&display=swap" rel="stylesheet">
```

### Ajouter des animations
Dans `style.css`, ajoutez vos propres animations :
```css
@keyframes votreAnimation {
    from { /* état initial */ }
    to { /* état final */ }
}
```

## 📊 Performance

### Optimisations incluses
- **Images optimisées** (à faire manuellement)
- **CSS minifié** (optionnel)
- **JavaScript optimisé**
- **Chargement asynchrone** des polices

### Conseils d'optimisation
1. **Compressez** vos images (TinyPNG, Squoosh)
2. **Utilisez** des formats modernes (WebP)
3. **Minifiez** CSS/JS en production
4. **Activez** la compression GZIP sur votre serveur

## 🔒 Sécurité

### Bonnes pratiques
- **Ne partagez jamais** vos vrais RIB en public
- **Utilisez** des liens sécurisés (HTTPS)
- **Vérifiez** les permissions de vos albums photos
- **Testez** tous les liens avant publication

## 📝 Licence

Ce template est libre d'utilisation pour des mariages personnels.
Modifiez-le selon vos besoins !

---

**💝 Fait avec amour pour Sarah & Antonin**

*N'oubliez pas de personnaliser ce README selon vos besoins spécifiques !* 