// ===== CONFIGURATION SUPABASE =====
const SUPABASE_URL = 'https://leokaeqifxrtoudfuhb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxlb2thZXFpZnhydG9vdWRmdWhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyMzIwNDEsImV4cCI6MjA2NjgwODA0MX0.zQKNH-CSifGGKKaQKfoc_VUx1Fnu_eumNq0jpU_IOlI';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ===== VARIABLES GLOBALES =====
const weddingDate = new Date('August 23, 2025 15:00:00').getTime();

// ===== FONCTIONS UTILITAIRES =====

/**
 * Formate un nombre pour afficher au moins 2 chiffres
 * @param {number} num - Le nombre à formater
 * @returns {string} Le nombre formaté avec 2 chiffres
 */
function formatNumber(num) {
  return num < 10 ? '0' + num : num;
}

/**
 * Calcule la différence entre la date actuelle et la date du mariage
 * @returns {object} Objet contenant les jours, heures, minutes et secondes restants
 */
function getTimeRemaining() {
  const now = new Date().getTime();
  const difference = weddingDate - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

/**
 * Met à jour l'affichage du compte à rebours
 */
function updateCountdown() {
  const timeRemaining = getTimeRemaining();

  // Mise à jour des éléments du DOM
  document.getElementById('days').textContent = formatNumber(timeRemaining.days);
  document.getElementById('hours').textContent = formatNumber(timeRemaining.hours);
  document.getElementById('minutes').textContent = formatNumber(timeRemaining.minutes);
  document.getElementById('seconds').textContent = formatNumber(timeRemaining.seconds);

  // Si le mariage est passé, afficher un message spécial
  if (timeRemaining.days === 0 && timeRemaining.hours === 0 &&
    timeRemaining.minutes === 0 && timeRemaining.seconds === 0) {
    const countdownContainer = document.querySelector('.countdown-container');
    countdownContainer.innerHTML = '<div class="countdown-complete"><h3>🎉 Le grand jour est arrivé ! 🎉</h3></div>';
  }
}

/**
 * Gère la navigation mobile (hamburger menu)
 */
function initMobileNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle du menu hamburger
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Fermer le menu quand on clique sur un lien
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Fermer le menu quand on clique en dehors
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
}

/**
 * Gère les animations au scroll
 */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observer tous les éléments avec la classe 'animate-on-scroll'
  const animatedElements = document.querySelectorAll('.section, .timeline-item, .programme-day, .info-card');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

/**
 * Gère la FAQ interactive
 */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const toggle = item.querySelector('.faq-toggle');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fermer tous les autres éléments FAQ
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-answer').classList.remove('active');
        }
      });

      // Toggle de l'élément actuel
      if (isActive) {
        item.classList.remove('active');
        answer.classList.remove('active');
      } else {
        item.classList.add('active');
        answer.classList.add('active');
      }
    });
  });
}

/**
 * Ajoute des effets de parallaxe subtils
 */
function initParallaxEffects() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-background');

    parallaxElements.forEach(element => {
      const speed = 0.5;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

/**
 * Gère les liens de paiement (placeholder)
 */
function initPaymentLinks() {
  const paymentLinks = document.querySelectorAll('.payment-link');

  paymentLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      alert('⚠️ Lien de paiement à configurer\n\nVeuillez remplacer les liens "#" par vos vrais liens de paiement dans le fichier HTML.');
    });
  });
}

/**
 * Ajoute des effets de hover sur les cartes
 */
function initCardHoverEffects() {
  const cards = document.querySelectorAll('.info-card, .payment-card, .programme-day');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
}

/**
 * Gère le copier-coller du RIB
 */
function initRIBCopy() {
  const ribCard = document.querySelector('.rib-card');

  if (ribCard) {
    ribCard.addEventListener('click', () => {
      const iban = 'FR76 XXXX XXXX XXXX XXXX XXXX XXX';

      // Copier dans le presse-papiers (si supporté)
      if (navigator.clipboard) {
        navigator.clipboard.writeText(iban).then(() => {
          showNotification('IBAN copié dans le presse-papiers !', 'success');
        }).catch(() => {
          showNotification('Cliquez pour copier l\'IBAN', 'info');
        });
      } else {
        showNotification('Cliquez pour copier l\'IBAN', 'info');
      }
    });

    ribCard.style.cursor = 'pointer';
    ribCard.title = 'Cliquez pour copier l\'IBAN';
  }
}

/**
 * Affiche une notification temporaire
 * @param {string} message - Le message à afficher
 * @param {string} type - Le type de notification ('success', 'info', 'error')
 */
function showNotification(message, type = 'info') {
  // Supprimer les notifications existantes
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => notification.remove());

  // Créer la nouvelle notification
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  // Styles pour la notification
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;

  document.body.appendChild(notification);

  // Animation d'entrée
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);

  // Supprimer après 3 secondes
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

/**
 * Bouton sticky flottant pour navigation entre sections
 */
function initStickySectionButton() {
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navButton = document.createElement('a');
  navButton.className = 'nav-button sticky-next';
  navButton.style.display = 'none';
  document.body.appendChild(navButton);

  function updateButton() {
    let currentSectionIndex = sections.findIndex(sec => {
      const rect = sec.getBoundingClientRect();
      return rect.top <= window.innerHeight * 0.3 && rect.bottom > window.innerHeight * 0.3;
    });
    if (currentSectionIndex === -1 || currentSectionIndex === sections.length - 1) {
      navButton.style.display = 'none';
      return;
    }
    // Si la section suivante est visible à plus de 40% dans la fenêtre, on cache le bouton
    const nextSection = sections[currentSectionIndex + 1];
    const nextRect = nextSection.getBoundingClientRect();
    if (nextRect.top < window.innerHeight * 0.4 && nextRect.bottom > window.innerHeight * 0.2) {
      navButton.style.display = 'none';
      return;
    }
    navButton.href = `#${nextSection.id}`;
    navButton.innerHTML = `${nextSection.querySelector('.section-title')?.textContent || 'Section suivante'} <span class="arrow">→</span>`;
    navButton.style.display = 'flex';
  }

  window.addEventListener('scroll', updateButton);
  window.addEventListener('resize', updateButton);
  document.addEventListener('DOMContentLoaded', updateButton);
  updateButton();
}

// NAVIGATION MOBILE OVERLAY REFAITE
function initMinimalNavBar() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const navBar = document.querySelector('.navbar');
  const navHeight = navBar ? navBar.offsetHeight : 60;

  // Hamburger mobile : toggle classe open
  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.classList.toggle('menu-open', isOpen);
    if (isOpen) navMenu.querySelector('.nav-link').focus();
  });
  // Fermer menu mobile au clic sur lien
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    });
  });
  // Fermer menu mobile avec Echap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
      hamburger.focus();
    }
  });
  // Focus piégé dans le menu mobile
  navMenu.addEventListener('keydown', (e) => {
    if (!navMenu.classList.contains('open')) return;
    const focusable = Array.from(navMenu.querySelectorAll('.nav-link'));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
  // Highlight actif + scroll smooth offset
  function getCurrentSection() {
    let current = '';
    const scrollPosition = window.scrollY + navHeight + 10;
    document.querySelectorAll('section[id]').forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    return current;
  }
  function updateActiveNavLink() {
    const currentSection = getCurrentSection();
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', updateActiveNavLink);
  document.addEventListener('DOMContentLoaded', updateActiveNavLink);
  // Scroll smooth offset
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const y = target.getBoundingClientRect().top + window.scrollY - navHeight + 1;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    });
  });
}

/**
 * Initialise la section covoiturage
 */
async function initCovoiturage() {
  const btnProposer = document.getElementById('btn-proposer');
  const btnRechercher = document.getElementById('btn-rechercher');
  const formProposer = document.getElementById('form-proposer');
  const listeTrajets = document.getElementById('liste-trajets');
  const covoiturageForm = document.getElementById('covoiturage-form');
  const btnRafraichir = document.getElementById('btn-rafraichir');
  const filtreDate = document.getElementById('filtre-date');
  const filtreDirection = document.getElementById('filtre-direction');
  const filtreStatut = document.getElementById('filtre-statut');

  // Gestion des boutons d'action
  if (btnProposer) {
    btnProposer.addEventListener('click', function () {
      formProposer.style.display = 'block';
      listeTrajets.style.display = 'none';
      btnProposer.style.opacity = '0.7';
      btnRechercher.style.opacity = '1';
    });
  }

  if (btnRechercher) {
    btnRechercher.addEventListener('click', function () {
      listeTrajets.style.display = 'block';
      formProposer.style.display = 'none';
      btnRechercher.style.opacity = '0.7';
      btnProposer.style.opacity = '1';
      afficherTrajets();
    });
  }

  // Gestion du formulaire
  if (covoiturageForm) {
    covoiturageForm.addEventListener('submit', function (e) {
      e.preventDefault();
      envoyerPropositionCovoiturage();
    });
  }

  // Gestion des filtres et actualisation
  if (btnRafraichir) {
    btnRafraichir.addEventListener('click', function () {
      afficherTrajets();
      afficherMessageConfirmation('Tableau actualisé !');
    });
  }

  if (filtreDate) {
    filtreDate.addEventListener('change', afficherTrajets);
  }

  if (filtreDirection) {
    filtreDirection.addEventListener('change', afficherTrajets);
  }

  if (filtreStatut) {
    filtreStatut.addEventListener('change', afficherTrajets);
  }

  // Effets de hover sur les boutons
  const covoiturageBtns = document.querySelectorAll('.covoiturage-btn');
  covoiturageBtns.forEach(btn => {
    btn.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    });

    btn.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = this.style.boxShadow.replace('0 4px 12px', '0 2px 8px');
    });
  });

  // Charger les trajets au démarrage
  await afficherTrajets();
}

/**
 * Envoie la proposition de covoiturage
 */
async function envoyerPropositionCovoiturage() {
  const formData = {
    id: Date.now(), // ID unique
    nom: document.getElementById('nom').value,
    telephone: document.getElementById('telephone').value,
    depart: document.getElementById('depart').value,
    arrivee: document.getElementById('arrivee').value,
    date: document.getElementById('date').value,
    heure: document.getElementById('heure').value,
    places: parseInt(document.getElementById('places').value),
    commentaires: document.getElementById('commentaires').value,
    timestamp: new Date().toISOString(),
    statut: 'disponible'
  };

  // Sauvegarder dans Supabase
  await sauvegarderTrajet(formData);

  // Créer le message pour l'email (pour backup)
  const message = `
Bonjour Sarah & Antonin,

Nouvelle proposition de covoiturage :

👤 Nom : ${formData.nom}
📞 Téléphone : ${formData.telephone}
🚗 Trajet : ${formData.depart} → ${formData.arrivee}
📅 Date : ${formData.date}
⏰ Heure : ${formData.heure}
💺 Places : ${formData.places}
💬 Commentaires : ${formData.commentaires || 'Aucun'}

Merci !
  `.trim();

  // Ouvrir l'email avec les données pré-remplies
  const emailSubject = encodeURIComponent('Nouvelle proposition de covoiturage - Mariage Sarah & Antonin');
  const emailBody = encodeURIComponent(message);
  const emailLink = `mailto:sarah.denisse@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  window.open(emailLink);

  // Réinitialiser le formulaire
  document.getElementById('covoiturage-form').reset();

  // Afficher un message de confirmation
  afficherMessageConfirmation('Votre proposition a été ajoutée au tableau ! Nous vous recontacterons rapidement.');

  // Actualiser l'affichage si la liste est visible
  if (document.getElementById('liste-trajets').style.display !== 'none') {
    await afficherTrajets();
  }
}

/**
 * Sauvegarde un trajet dans Supabase
 */
async function sauvegarderTrajet(trajet) {
  const { error } = await supabase.from('covoiturage').insert([trajet]);
  if (error) {
    afficherMessageConfirmation('Erreur lors de l\'ajout du trajet', 'error');
    console.error(error);
  }
}

/**
 * Met à jour un trajet existant dans Supabase
 */
async function mettreAJourTrajet(trajetModifie) {
  const { error } = await supabase
    .from('covoiturage')
    .update({ places: trajetModifie.places, statut: trajetModifie.statut })
    .eq('id', trajetModifie.id);
  if (error) {
    afficherMessageConfirmation('Erreur lors de la modification', 'error');
    console.error(error);
    return false;
  }
  return true;
}

/**
 * Supprime un trajet dans Supabase
 */
async function supprimerTrajet(trajetId) {
  const { error } = await supabase.from('covoiturage').delete().eq('id', trajetId);
  if (error) {
    afficherMessageConfirmation('Erreur lors de la suppression', 'error');
    console.error(error);
  }
}

/**
 * Récupère tous les trajets depuis Supabase
 */
async function recupererTrajets() {
  const { data, error } = await supabase
    .from('covoiturage')
    .select('*')
    .order('date', { ascending: true })
    .order('heure', { ascending: true });
  if (error) {
    console.error('Erreur chargement covoiturage:', error);
    return [];
  }
  return data || [];
}

/**
 * Affiche les trajets avec filtres
 */
async function afficherTrajets() {
  const container = document.getElementById('trajets-container');
  const filtreDate = document.getElementById('filtre-date');
  const filtreDirection = document.getElementById('filtre-direction');
  const filtreStatut = document.getElementById('filtre-statut');

  if (!container) return;

  let trajets = await recupererTrajets();

  // Appliquer les filtres
  if (filtreDate && filtreDate.value) {
    trajets = trajets.filter(trajet => trajet.date === filtreDate.value);
  }

  if (filtreDirection && filtreDirection.value) {
    if (filtreDirection.value === 'aller') {
      trajets = trajets.filter(trajet => trajet.arrivee.includes('Domaine les Aigas'));
    } else if (filtreDirection.value === 'retour') {
      trajets = trajets.filter(trajet => trajet.depart.includes('Domaine les Aigas'));
    }
  }

  if (filtreStatut && filtreStatut.value) {
    trajets = trajets.filter(trajet => trajet.statut === filtreStatut.value);
  }

  // Trier par date et heure
  trajets.sort((a, b) => {
    if (a.date !== b.date) return a.date.localeCompare(b.date);
    return a.heure.localeCompare(b.heure);
  });

  container.innerHTML = '';

  if (trajets.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--color-gray);">
        <p style="font-size: 1.1rem; margin-bottom: 1rem;">Aucun trajet disponible</p>
        <p>N'hésitez pas à proposer votre trajet !</p>
      </div>
    `;
  } else {
    trajets.forEach(trajet => {
      const trajetElement = document.createElement('div');
      trajetElement.style.cssText = `
        padding: 1rem;
        border-bottom: 1px solid #eee;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1.2fr;
        gap: 1rem;
        align-items: center;
        transition: background-color 0.2s ease;
        ${trajet.statut === 'complet' ? 'opacity: 0.6; background-color: #f5f5f5;' : ''}
      `;

      trajetElement.addEventListener('mouseenter', function () {
        if (trajet.statut !== 'complet') {
          this.style.backgroundColor = '#f8f9fa';
        }
      });

      trajetElement.addEventListener('mouseleave', function () {
        if (trajet.statut !== 'complet') {
          this.style.backgroundColor = 'transparent';
        }
      });

      const direction = trajet.arrivee.includes('Domaine les Aigas') ? 'aller' : 'retour';
      const directionIcon = direction === 'aller' ? '➡️' : '⬅️';
      const statutBadge = trajet.statut === 'complet' ? '<span style="background: #f44336; color: white; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.8rem; margin-left: 0.5rem;">COMPLET</span>' : '';

      trajetElement.innerHTML = `
        <div>
          <strong style="color: var(--color-pastel-green);">${trajet.nom}</strong>
          <div style="font-size: 0.9rem; color: var(--color-gray);">${trajet.telephone}</div>
        </div>
        <div>
          <div style="font-weight: 600;">${directionIcon} ${trajet.depart} → ${trajet.arrivee}</div>
          ${trajet.commentaires ? `<div style="font-size: 0.9rem; color: var(--color-gray); font-style: italic;">${trajet.commentaires}</div>` : ''}
        </div>
        <div>
          <div style="font-weight: 600;">${trajet.date}</div>
        </div>
        <div>
          <div style="font-size: 0.9rem; color: var(--color-gray);">${trajet.heure}</div>
        </div>
        <div>
          <span style="background: ${trajet.statut === 'complet' ? '#f44336' : 'var(--color-pastel-green)'}; color: white; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.9rem; font-weight: 600;">${trajet.places} place${trajet.places > 1 ? 's' : ''}</span>
          ${statutBadge}
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.4rem;">
          <a href="tel:${trajet.telephone.replace(/\s/g, '')}" style="background: var(--color-pastel-green); color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 6px; font-weight: 600; font-size: 0.9rem; display: inline-block; margin-bottom: 0.3rem; text-align: center;">
            📞 Appeler
          </a>
          <button onclick="modifierTrajet(${trajet.id})" style="background: #ff9800; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; font-weight: 600; font-size: 0.9rem; cursor: pointer; display: block; width: 100%; margin-bottom: 0.2rem;">
            ✏️ Modifier
          </button>
          <button onclick="supprimerTrajetAvecConfirmation(${trajet.id})" style="background: #f44336; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; font-weight: 600; font-size: 0.9rem; cursor: pointer; display: block; width: 100%;">
            🗑️ Supprimer
          </button>
        </div>
      `;

      container.appendChild(trajetElement);
    });
  }

  // Mettre à jour les statistiques
  mettreAJourStatistiques();
}

async function supprimerTrajetAvecConfirmation(trajetId) {
  if (confirm('Voulez-vous vraiment supprimer ce trajet ?')) {
    await supprimerTrajet(trajetId);
    await afficherTrajets();
    afficherMessageConfirmation('Trajet supprimé.');
  }
}

/**
 * Ouvre la modal de modification d'un trajet
 */
function modifierTrajet(trajetId) {
  const trajets = recupererTrajets();
  const trajet = trajets.find(t => t.id === trajetId);

  if (!trajet) return;

  // Créer la modal de modification
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `;

  modal.innerHTML = `
    <div style="background: white; border-radius: 12px; padding: 2rem; max-width: 500px; width: 90%; max-height: 90vh; overflow-y: auto; position: relative;">
      <button onclick="fermerModal()" style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #666; padding: 0.5rem; border-radius: 50%; transition: background-color 0.2s ease;">
        ✕
      </button>
      <h3 style="color: var(--color-pastel-green); margin-bottom: 1.5rem; padding-right: 2rem;">✏️ Modifier le trajet de ${trajet.nom}</h3>
      
      <div style="margin-bottom: 1rem;">
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: var(--color-gray);">Nombre de places disponibles</label>
        <input type="number" id="places-modif" value="${trajet.places}" min="0" max="8" style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 8px; font-size: 1rem;">
      </div>
      
      <div style="margin-bottom: 1.5rem;">
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: var(--color-gray);">Statut</label>
        <select id="statut-modif" style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 8px; font-size: 1rem;">
          <option value="disponible" ${trajet.statut === 'disponible' ? 'selected' : ''}>Disponible</option>
          <option value="complet" ${trajet.statut === 'complet' ? 'selected' : ''}>Complet</option>
        </select>
      </div>
      
      <div style="display: flex; gap: 1rem; justify-content: flex-end;">
        <button onclick="fermerModal()" style="background: #6c757d; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">
          Annuler
        </button>
        <button onclick="sauvegarderModification(${trajetId})" style="background: var(--color-pastel-green); color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">
          Sauvegarder
        </button>
      </div>
    </div>
  `;

  // Ajouter effet hover sur la croix
  const croix = modal.querySelector('button');
  croix.addEventListener('mouseenter', function () {
    this.style.backgroundColor = '#f0f0f0';
  });

  croix.addEventListener('mouseleave', function () {
    this.style.backgroundColor = 'transparent';
  });

  document.body.appendChild(modal);
}

/**
 * Sauvegarde les modifications d'un trajet
 */
async function sauvegarderModification(trajetId) {
  const places = parseInt(document.getElementById('places-modif').value);
  const statut = document.getElementById('statut-modif').value;

  const modification = {
    id: trajetId,
    places: places,
    statut: statut
  };

  if (await mettreAJourTrajet(modification)) {
    afficherMessageConfirmation('Trajet modifié avec succès !');
    await afficherTrajets();
  } else {
    afficherMessageConfirmation('Erreur lors de la modification', 'error');
  }

  fermerModal();
}

/**
 * Ferme la modal
 */
function fermerModal() {
  const modal = document.querySelector('div[style*="position: fixed"]');
  if (modal) {
    document.body.removeChild(modal);
  }
}

/**
 * Met à jour les statistiques
 */
function mettreAJourStatistiques() {
  const trajets = recupererTrajets();
  const totalTrajets = document.getElementById('total-trajets');
  const totalPlaces = document.getElementById('total-places');

  if (totalTrajets) totalTrajets.textContent = trajets.length;
  if (totalPlaces) totalPlaces.textContent = trajets.reduce((sum, t) => sum + t.places, 0);
}

/**
 * Affiche un message de confirmation
 */
function afficherMessageConfirmation(message, type = 'success') {
  // Créer un élément de notification
  const notification = document.createElement('div');
  const backgroundColor = type === 'error' ? 'linear-gradient(135deg, #f44336, #d32f2f)' : 'linear-gradient(135deg, var(--color-pastel-green), #8bc34a)';

  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${backgroundColor};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 1000;
    font-weight: 600;
    max-width: 300px;
    animation: slideIn 0.3s ease-out;
  `;
  notification.textContent = message;

  // Ajouter l'animation CSS
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);

  document.body.appendChild(notification);

  // Supprimer la notification après 5 secondes
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-in';
    notification.style.transform = 'translateX(100%)';
    notification.style.opacity = '0';
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 5000);
}

/**
 * Affiche des exemples de trajets disponibles (fonction legacy)
 */
function afficherTrajetsExemples() {
  afficherTrajets();
}

/**
 * Initialise toutes les fonctionnalités du site
 */
async function initWebsite() {
  // Initialiser le compte à rebours
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Initialiser la navigation mobile
  initMobileNavigation();

  // Initialiser les animations au scroll
  initScrollAnimations();

  // Initialiser la FAQ
  initFAQ();

  // Initialiser les effets de parallaxe
  initParallaxEffects();

  // Initialiser les liens de paiement
  initPaymentLinks();

  // Initialiser les effets de hover
  initCardHoverEffects();

  // Initialiser le copier-coller du RIB
  initRIBCopy();

  // Initialiser le bouton sticky
  initStickySectionButton();

  // Initialiser la navigation smooth
  initMinimalNavBar();

  // Initialiser la section covoiturage
  await initCovoiturage();

  // Ajouter un message de bienvenue dans la console
  console.log('🎉 Site de mariage Sarah & Antonin chargé avec succès !');
  console.log('📅 Date du mariage : 23 août 2025');
  console.log('💡 N\'oubliez pas de :');
  console.log('   - Remplacer "image.jpg" par votre vraie image de fond');
  console.log('   - Ajouter vos vrais liens de paiement');
  console.log('   - Compléter les informations pratiques');
  console.log('   - Ajouter le lien vers votre album Google Photos');
}

// ===== INITIALISATION =====

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', async () => { await initWebsite(); });

// Gérer le rechargement de la page pour les navigateurs qui ne supportent pas DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWebsite);
} else {
  initWebsite();
}

// ===== GESTION DES ERREURS =====

window.addEventListener('error', (e) => {
  console.error('Erreur JavaScript détectée:', e.error);
});

// ===== FONCTIONS DE DEBUG (à supprimer en production) =====

/**
 * Affiche les informations de debug dans la console
 */
function debugInfo() {
  console.log('=== DEBUG INFO ===');
  console.log('Date du mariage:', new Date(weddingDate));
  console.log('Temps restant:', getTimeRemaining());
  console.log('Sections trouvées:', document.querySelectorAll('section[id]').length);
  console.log('Liens de navigation:', document.querySelectorAll('.nav-link').length);
  console.log('Éléments FAQ:', document.querySelectorAll('.faq-item').length);
}

// Exposer la fonction de debug globalement (à supprimer en production)
window.debugInfo = debugInfo; 