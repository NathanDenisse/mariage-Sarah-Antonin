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
 * Initialise toutes les fonctionnalités du site
 */
function initWebsite() {
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
document.addEventListener('DOMContentLoaded', initWebsite);

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