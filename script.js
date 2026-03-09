// ==========================================
// EMAILJS CONFIGURATION
// ==========================================
const EMAILJS_PUBLIC_KEY = 'MiWfB4Nu-DTa4AEJm';
const EMAILJS_SERVICE_ID = 'service_zqy6okk';
const EMAILJS_TEMPLATE_ID = 'template_rljs4lm';

emailjs.init(EMAILJS_PUBLIC_KEY);

// ==========================================
// CONTACT FORM
// ==========================================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const submitBtn = document.getElementById('submitBtn');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        formStatus.className = 'form-status loading';
        formStatus.textContent = '⏳ Envoi en cours...';
        submitBtn.disabled = true;

        try {
            const response = await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm);
            if (response.status === 200) {
                formStatus.className = 'form-status success';
                formStatus.textContent = '✅ Message envoyé avec succès ! Je vous répondrai bientôt.';
                contactForm.reset();
                setTimeout(() => { formStatus.style.display = 'none'; }, 6000);
            }
        } catch (error) {
            formStatus.className = 'form-status error';
            formStatus.textContent = '❌ Erreur lors de l\'envoi : ' + error.message;
        } finally {
            submitBtn.disabled = false;
        }
    });
}

// ==========================================
// SCROLL PROGRESS BAR
// ==========================================
function updateScrollProgress() {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrolled / total) * 100;
    document.getElementById('scrollProgress').style.width = progress + '%';
}

// ==========================================
// NAVBAR - SCROLL EFFECT & ACTIVE LINK
// ==========================================
const navbar = document.getElementById('navbar');

function updateNavbar() {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Active nav link
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 250) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', () => {
    updateScrollProgress();
    updateNavbar();
}, { passive: true });

// ==========================================
// MOBILE NAVIGATION
// ==========================================
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navLinks.classList.toggle('mobile-open');
    document.body.style.overflow = navLinks.classList.contains('mobile-open') ? 'hidden' : '';
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('open');
        navLinks.classList.remove('mobile-open');
        document.body.style.overflow = '';
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
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ==========================================
// REVEAL ON SCROLL ANIMATIONS
// ==========================================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            // Staggered delay for grid items
            const siblings = entry.target.parentElement.querySelectorAll('.reveal');
            const index = Array.from(siblings).indexOf(entry.target);
            entry.target.style.transitionDelay = (index * 0.08) + 's';
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll(
    '.skill-card, .project-card, .stat-card, .tech-pill, .contact-link, .section-header'
).forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

// ==========================================
// CONSOLE EASTER EGG
// ==========================================
console.log('%c{ Leny Leborgne }', 'color: #8b5cf6; font-size: 22px; font-weight: bold; font-family: monospace;');
console.log('%cDéveloppeur Web & Logiciel — lenyleborgne.com', 'color: #94a3b8; font-size: 13px;');
console.log('%cVous lisez la console ? Contactez-moi ! 😄', 'color: #06b6d4; font-size: 13px;');
