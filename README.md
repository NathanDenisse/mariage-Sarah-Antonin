# 💍 Annabelle & Nathan - Wedding Website

A beautiful, bilingual (French/English) static wedding website for a destination wedding in Sardinia.

## 🌐 Features

- **Bilingual**: French and English with easy language switching
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Classic & Romantic Style**: Terracotta and beige color palette
- **Single Page**: Smooth scrolling navigation between sections
- **No Framework**: Pure HTML, CSS, and vanilla JavaScript
- **Static**: No server or build process required

## 📁 Project Structure

```
Wedding Website/
├── index.html          # Main HTML file with all content
├── style.css           # All styling and responsive design
├── script.js           # Language switcher and interactive features
├── assets/             # Images and media
│   ├── dresscode-1.jpg
│   ├── dresscode-2.jpg
│   ├── dresscode-3.jpg
│   ├── photo-1.jpg
│   ├── photo-2.jpg
│   ├── photo-3.jpg
│   ├── photo-4.jpg
│   └── qr-revolut.png
└── README.md           # This file
```

## 🎨 Customization

### Update Text Content

1. Open `index.html` in any text editor
2. Find the section you want to modify
3. Update the text inside `<p class="lang-fr">` tags for French
4. Update the text inside `<p class="lang-en">` tags for English

### Replace Images

1. Replace placeholder images in the `assets/` folder with your own photos
2. Keep the same filenames, or update the image paths in `index.html`
3. Recommended formats: JPG or PNG
4. For the QR code: Generate a QR code for `https://revolut.me/nathanbo0k` and save it as `assets/qr-revolut.png`

### Change Colors

1. Open `style.css`
2. Modify the CSS variables at the top of the file:
   - `--color-terracotta`: Main accent color
   - `--color-beige`: Background color
   - Other color variables as needed

## 🖥️ Preview Locally

### Option 1: Double-click
Simply double-click on `index.html` to open it in your default browser.

### Option 2: Local Server (recommended)
If you have Python installed, run:

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open `http://localhost:8000` in your browser.

## 🔗 Connect with GitHub

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in (or create an account)
2. Click the **"+"** button in the top right → **"New repository"**
3. Name it `wedding-website` (or any name you prefer)
4. Keep it **Public** or **Private** (your choice)
5. **DO NOT** initialize with README, .gitignore, or license (we already have them)
6. Click **"Create repository"**

### Step 2: Push Your Code to GitHub

Open Terminal (macOS) and run these commands:

```bash
# Navigate to your project folder
cd "/Users/nathandenisse/Desktop/Wedding Website"

# Initialize Git repository
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit - Wedding website"

# Connect to your GitHub repository (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/wedding-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note**: You may be prompted to enter your GitHub username and password. For the password, use a [Personal Access Token](https://github.com/settings/tokens) instead of your actual password.

### Step 3: Update Later

When you make changes to your website:

```bash
# Add changed files
git add .

# Commit with a message
git commit -m "Update photos and content"

# Push to GitHub
git push
```

---

## 🚀 Deploy on Netlify

### Method 1: Drag & Drop (Easiest)

1. Go to [netlify.com](https://www.netlify.com/) and create a free account
2. Click on **"Add new site"** → **"Deploy manually"**
3. Drag and drop the entire `Wedding Website` folder into the upload area
4. Wait a few seconds for deployment
5. Your site is live! Netlify will give you a URL like `https://random-name-12345.netlify.app`
6. Optional: Click on **"Domain settings"** to customize your URL (e.g., `annabelle-nathan-wedding.netlify.app`)

### Method 2: Connect Git Repository

1. Push this project to a GitHub, GitLab, or Bitbucket repository
2. Go to [netlify.com](https://www.netlify.com/) and log in
3. Click on **"Add new site"** → **"Import an existing project"**
4. Connect your Git provider and select your repository
5. Configure build settings:
   - **Build command**: Leave empty
   - **Publish directory**: Leave empty or use `/`
6. Click **"Deploy site"**
7. Your site will automatically rebuild whenever you push changes to your repository

### Method 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Navigate to project folder
cd "Wedding Website"

# Deploy
netlify deploy

# Follow prompts, then deploy to production
netlify deploy --prod
```

## 🔧 Technical Details

- **HTML5**: Semantic markup for accessibility
- **CSS3**: Modern features including CSS Grid, Flexbox, and CSS variables
- **JavaScript ES6+**: Vanilla JS with no dependencies
- **Fonts**: Google Fonts (Cormorant Garamond & Montserrat)
- **Icons**: Unicode symbols (no icon library needed)
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)

## 📱 Sections

1. **Hero** - Main title with wedding date and location
2. **Our Story** - Romantic story of the couple
3. **Weekend Schedule** - Friday, Saturday, Sunday timeline
4. **Venue & Travel** - Hotel description and directions
5. **Dress Code** - Style suggestions with photo examples
6. **Practical Information** - Accommodation, beaches, weather, transport
7. **Gallery** - Video and photo placeholders
8. **Gift Fund** - Revolut link and QR code
9. **Footer** - Simple closing

## 🌍 Language System

The language switcher stores the user's preference in `localStorage`, so their choice persists across visits. The default language is French.

## 💡 Tips

- **Custom Domain**: You can connect your own domain in Netlify's domain settings (e.g., `annabelleetNathan.com`)
- **SSL/HTTPS**: Netlify automatically provides free SSL certificates
- **Performance**: The site is already optimized with lazy loading and smooth animations
- **Analytics**: Add Google Analytics or Netlify Analytics if you want to track visitors
- **Contact Form**: If you want to add RSVP functionality, you can use Netlify Forms (add `netlify` attribute to a form)

## 🎉 That's it!

Your wedding website is ready to share with your guests. Enjoy your special day in Sardinia!

---

**Made with ♥ for Annabelle & Nathan**

