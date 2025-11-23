// ============================================
// LANGUAGE SWITCHER
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Get language buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    const body = document.body;
    
    // Set default language to French
    body.classList.add('lang-fr');
    
    // Add click event listeners to language buttons
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            
            // Remove active class from all buttons
            langButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Remove all language classes from body
            body.classList.remove('lang-fr', 'lang-en');
            
            // Add selected language class to body
            body.classList.add(`lang-${selectedLang}`);
            
            // Store language preference in localStorage
            localStorage.setItem('preferredLanguage', selectedLang);
        });
    });
    
    // Check if user has a language preference stored
    const storedLang = localStorage.getItem('preferredLanguage');
    if (storedLang) {
        // Apply stored language
        body.classList.remove('lang-fr', 'lang-en');
        body.classList.add(`lang-${storedLang}`);
        
        // Update button states
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === storedLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
});

// ============================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link, .scroll-btn');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow when scrolled
        if (scrollTop > 50) {
            navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.12)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
        }
        
        lastScrollTop = scrollTop;
    });
});

// ============================================
// HIGHLIGHT ACTIVE SECTION IN NAVBAR
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightNavigation() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active-section');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active-section');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // Call on load
});

// ============================================
// FADE-IN ANIMATION ON SCROLL
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for fade-in effect
    const sectionsToAnimate = document.querySelectorAll('.section');
    sectionsToAnimate.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// ============================================
// MOBILE MENU TOGGLE (if needed in future)
// ============================================

// This section is reserved for future mobile hamburger menu implementation
// Currently the navigation wraps on mobile, but this can be enhanced

// ============================================
// IMAGE LAZY LOADING FALLBACK
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Modern browsers support native lazy loading, but this provides a fallback
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
});

