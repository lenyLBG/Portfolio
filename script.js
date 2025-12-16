// ==========================================
// INITIALISATION EMAILJS - Chargement Dynamique
// ==========================================
const EMAILJS_PUBLIC_KEY = 'MiWfB4Nu-DTa4AEJm'; // Votre clé publique
const EMAILJS_SERVICE_ID = 'service_zqy6okk'; // Votre ID de service
const EMAILJS_TEMPLATE_ID = 'template_rljs4lm'; // Votre ID de template

let emailjsLoaded = false;

// Charger EmailJS dynamiquement
function loadEmailJS() {
    return new Promise((resolve) => {
        if (typeof emailjs !== 'undefined') {
            console.log('✅ EmailJS déjà chargé');
            emailjsLoaded = true;
            emailjs.init(EMAILJS_PUBLIC_KEY);
            resolve(true);
        } else {
            console.log('📥 Chargement d\'EmailJS...');
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/index.min.js';
            script.async = true;
            script.onload = () => {
                console.log('✅ EmailJS chargé');
                emailjsLoaded = true;
                try {
                    emailjs.init(EMAILJS_PUBLIC_KEY);
                    console.log('✅ EmailJS initialisé');
                    resolve(true);
                } catch (error) {
                    console.error('❌ Erreur initialisation:', error);
                    resolve(false);
                }
            };
            script.onerror = () => {
                console.error('❌ Erreur chargement EmailJS');
                resolve(false);
            };
            document.head.appendChild(script);
        }
    });
}

// Charger EmailJS au démarrage
loadEmailJS().then(success => {
    if (success) {
        console.log('📧 EmailJS prêt à être utilisé');
    }
});

// ==========================================
// FORMULAIRE DE CONTACT
// ==========================================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const submitBtn = document.getElementById('submitBtn');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        console.log('📧 Tentative d\'envoi du formulaire...');
        
        // Afficher le statut de chargement
        formStatus.className = 'form-status loading';
        formStatus.textContent = '⏳ Envoi du message...';
        submitBtn.disabled = true;
        
        try {
            // S'assurer que EmailJS est chargé
            if (!emailjsLoaded) {
                console.log('⏳ Attente du chargement d\'EmailJS...');
                const loaded = await loadEmailJS();
                if (!loaded) {
                    throw new Error('EmailJS n\'a pas pu être chargé');
                }
            }
            
            // Vérifier que les clés sont configurées
            if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY' || 
                EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || 
                EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID') {
                formStatus.className = 'form-status error';
                formStatus.textContent = '⚠️ EmailJS non configuré. Consultez le fichier script.js';
                submitBtn.disabled = false;
                return;
            }
            
            console.log('📤 Envoi via EmailJS...');
            const response = await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                contactForm
            );
            
            console.log('✅ Réponse:', response.status);
            
            if (response.status === 200) {
                formStatus.className = 'form-status success';
                formStatus.textContent = '✅ Message envoyé avec succès! Je vous répondrai bientôt.';
                contactForm.reset();
                
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            } else {
                throw new Error('Erreur serveur');
            }
        } catch (error) {
            console.error('❌ Erreur:', error.message);
            formStatus.className = 'form-status error';
            formStatus.textContent = '❌ Erreur: ' + error.message.substring(0, 60);
        } finally {
            submitBtn.disabled = false;
        }
    });
}

// ==========================================
// NAVIGATION MOBILE
// ==========================================
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger Animation
    burger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('active');
    });
});

// ==========================================
// SMOOTH SCROLL
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// NAVBAR BACKGROUND ON SCROLL
// ==========================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 15, 38, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(82, 245, 235, 0.1)';
    } else {
        navbar.style.background = 'rgba(0, 15, 38, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// ==========================================
// INTERSECTION OBSERVER POUR ANIMATIONS
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Animate skill cards on scroll
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Animate project cards on scroll
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// ==========================================
// PARALLAX EFFECT
// ==========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-content');
    const codeWindow = document.querySelector('.code-window');
    
    if (parallax && scrolled < window.innerHeight) {
        parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    if (codeWindow && scrolled < window.innerHeight) {
        codeWindow.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// ==========================================
// STATS COUNTER ANIMATION
// ==========================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Animate stats when they come into view
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const number = entry.target.querySelector('.stat-number');
            const target = parseInt(number.textContent);
            animateCounter(number, target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(stat => {
    statObserver.observe(stat);
});

// ==========================================
// ACTIVE NAV LINK BASED ON SCROLL
// ==========================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// CONSOLE MESSAGE
// ==========================================
console.log('%c👋 Bienvenue sur mon portfolio!', 'color: #52F5EB; font-size: 20px; font-weight: bold;');
console.log('%cSi vous lisez ceci, vous devriez me contacter! 😉', 'color: #75D8FF; font-size: 14px;');
