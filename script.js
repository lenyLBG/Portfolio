// ==========================================
// EMAILJS DIRECT - Configuration
// ==========================================
const EMAILJS_PUBLIC_KEY = 'MiWfB4Nu-DTa4AEJm';
const EMAILJS_SERVICE_ID = 'service_zqy6okk';
const EMAILJS_TEMPLATE_ID = 'template_rljs4lm';

// Initialiser EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);
console.log('✅ EmailJS initialisé');

// ==========================================
// FORMULAIRE DE CONTACT
// ==========================================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const submitBtn = document.getElementById('submitBtn');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        console.log('📧 Envoi du message...');
        
        // Afficher le statut de chargement
        formStatus.className = 'form-status loading';
        formStatus.textContent = '⏳ Envoi du message...';
        submitBtn.disabled = true;
        
        try {
            const response = await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                contactForm
            );
            
            console.log('✅ Success:', response);
            
            if (response.status === 200) {
                formStatus.className = 'form-status success';
                formStatus.textContent = '✅ Message envoyé avec succès! Je vous répondrai bientôt.';
                contactForm.reset();
                submitBtn.disabled = false;
                
                // Masquer le message après 5 secondes
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            }
        } catch (error) {
            console.error('❌ Erreur:', error);
            formStatus.className = 'form-status error';
            formStatus.textContent = '❌ Erreur lors de l\'envoi: ' + error.message;
            submitBtn.disabled = false;
        }
    });
}

// ==========================================
// NAVIGATION MOBILE
// ==========================================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.querySelector('nav');

if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', () => {
        // Toggle mobile menu (can be enhanced with actual mobile menu implementation)
        console.log('Mobile menu clicked');
        // TODO: Implement mobile menu toggle if needed
    });
}

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
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(11, 17, 32, 0.85)';
        } else {
            header.style.background = 'rgba(11, 17, 32, 0.7)';
        }
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
const projectCards = document.querySelectorAll('article');
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
    const heroSection = document.querySelector('#home .container');
    
    if (heroSection && scrolled < window.innerHeight) {
        heroSection.style.transform = `translateY(${scrolled * 0.3}px)`;
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
            const number = entry.target.querySelector('.text-cyan-400');
            if (number) {
                const target = parseInt(number.textContent);
                animateCounter(number, target);
                entry.target.classList.add('counted');
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.glass-card').forEach(stat => {
    if (stat.querySelector('.text-cyan-400')) {
        statObserver.observe(stat);
    }
});

// ==========================================
// ACTIVE NAV LINK BASED ON SCROLL
// ==========================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-cyan-300');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('text-cyan-300');
        }
    });
});

// ==========================================
// CONSOLE MESSAGE
// ==========================================
console.log('%c👋 Bienvenue sur mon portfolio!', 'color: #52F5EB; font-size: 20px; font-weight: bold;');
console.log('%cSi vous lisez ceci, vous devriez me contacter! 😉', 'color: #75D8FF; font-size: 14px;');
