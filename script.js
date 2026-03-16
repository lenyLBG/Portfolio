// ==========================================
// EMAILJS CONFIGURATION
// ==========================================
const EMAILJS_PUBLIC_KEY = 'MiWfB4Nu-DTa4AEJm';
const EMAILJS_SERVICE_ID = 'service_zqy6okk';
const EMAILJS_TEMPLATE_ID = 'template_rljs4lm';

emailjs.init(EMAILJS_PUBLIC_KEY);

// ==========================================
// FOOTER â€” ANNÃ‰E DYNAMIQUE
// ==========================================
const yearEl = document.getElementById('footerYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ==========================================
// THEME TOGGLE (dark / light)
// ==========================================
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeIcon) {
        themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

// Restaurer le thÃ¨me sauvegardÃ©
const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'light' ? 'dark' : 'light');
    });
}

// ==========================================
// CUSTOM CURSOR — MAGNETIC DUAL
// ==========================================
const cursorDot  = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');

if (cursorDot && cursorRing && window.matchMedia('(pointer: fine)').matches) {
    document.body.classList.add('custom-cursor-active');

    // Dot + Ring suivent la souris instantanément
    document.addEventListener('mousemove', e => {
        const x = e.clientX;
        const y = e.clientY;
        cursorDot.style.left  = x + 'px';
        cursorDot.style.top   = y + 'px';
        cursorRing.style.left = x + 'px';
        cursorRing.style.top  = y + 'px';
    });

    // Flash au clic
    document.addEventListener('mousedown', () => {
        cursorDot.classList.add('cursor-dot--click');
        cursorRing.classList.add('cursor-ring--click');
    });
    document.addEventListener('mouseup', () => {
        cursorDot.classList.remove('cursor-dot--click');
        cursorRing.classList.remove('cursor-ring--click');
    });

    // Hover sur éléments interactifs
    document.querySelectorAll('a, button, .tech-pill, .project-card, .service-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.classList.add('cursor-dot--hover');
            cursorRing.classList.add('cursor-ring--hover');
        });
        el.addEventListener('mouseleave', () => {
            cursorDot.classList.remove('cursor-dot--hover');
            cursorRing.classList.remove('cursor-ring--hover');
        });
    });
}

// ==========================================
// CONTACT FORM
// ==========================================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const submitBtn = document.getElementById('submitBtn');

// Toast notification
function showToast(message, type = 'success') {
    const existing = document.getElementById('toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'times-circle' : 'spinner fa-spin'}"></i> ${message}`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('toast--visible'));
    if (type !== 'loading') {
        setTimeout(() => {
            toast.classList.remove('toast--visible');
            setTimeout(() => toast.remove(), 400);
        }, 4500);
    }
    return toast;
}

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        let toastEl = showToast('Envoi en cours...', 'loading');
        submitBtn.disabled = true;
        try {
            const response = await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm);
            toastEl.remove();
            if (response.status === 200) {
                showToast('Message envoyÃ© avec succÃ¨s ! Je vous rÃ©pondrai bientÃ´t.', 'success');
                contactForm.reset();
            }
        } catch (error) {
            toastEl.remove();
            showToast('Erreur lors de l\'envoi. Essayez par email directement.', 'error');
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
// ANIMATED COUNTERS
// ==========================================
function animateCounter(el) {
    const target  = parseInt(el.dataset.target, 10);
    const suffix  = el.dataset.suffix || '';
    const duration = 1600;
    const step    = 16;
    const increment = target / (duration / step);
    let current  = 0;
    const timer  = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        el.textContent = Math.floor(current) + suffix;
    }, step);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.6 });

document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

// ==========================================
// LANG BAR ANIMATION
// ==========================================
const langBarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            bar.style.width = bar.dataset.width + '%';
            langBarObserver.unobserve(bar);
        }
    });
}, { threshold: 0.4 });

document.querySelectorAll('.lang-bar').forEach(bar => {
    bar.style.width = '0%';
    langBarObserver.observe(bar);
});

// ==========================================
// REVEAL ON SCROLL ANIMATIONS
// ==========================================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const siblings = entry.target.parentElement.querySelectorAll('.reveal');
            const index = Array.from(siblings).indexOf(entry.target);
            entry.target.style.transitionDelay = (index * 0.08) + 's';
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll(
    '.skill-card, .project-card, .stat-card, .tech-pill, .contact-link, .section-header, .timeline-card, .service-card, .testimonial-card, .faq-item, .language-card, .cert-card, .process-step'
).forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

// ==========================================
// FAQ ACCORDION
// ==========================================
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item   = btn.closest('.faq-item');
        const answer = item.querySelector('.faq-answer');
        const isOpen = item.classList.contains('open');

        document.querySelectorAll('.faq-item').forEach(i => {
            i.classList.remove('open');
            i.querySelector('.faq-answer').classList.remove('open');
            i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
            item.classList.add('open');
            answer.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
        }
    });
});

// ==========================================
// CONSOLE EASTER EGG - SEO OPTIMIZED
// ==========================================
console.clear();
console.log('%c╔════════════════════════════════════════════╗', 'color: #8b5cf6; font-size: 12px; font-weight: bold;');
console.log('%c║  LENY LEBORGNE - Web Developer & Software   ║', 'color: #8b5cf6; font-size: 12px; font-weight: bold;');
console.log('%c║          LeBorgne - Portfolio- Chartres    ║', 'color: #8b5cf6; font-size: 12px; font-weight: bold;');
console.log('%c╚════════════════════════════════════════════╝', 'color: #8b5cf6; font-size: 12px; font-weight: bold;');

console.log('%c🚀 Welcome to Leny Leborgne Portfolio!', 'color: #06b6d4; font-size: 14px; font-weight: bold; margin-top: 10px;');
console.log('%cWeb Developer & Software Engineer | LeBorgne', 'color: #94a3b8; font-size: 12px;');
console.log('%clenyleborgne.com', 'color: #06b6d4; font-size: 12px; font-style: italic;');

console.log('\n%c⚡ KEY SKILLS', 'color: #8b5cf6; font-size: 12px; font-weight: bold;');
console.log('%cReact • Node.js • Python • PHP • C# • JavaScript • TypeScript', 'color: #94a3b8; font-size: 11px;');
console.log('%cMySQL • SQLite • Docker • Git • SEO • REST API', 'color: #94a3b8; font-size: 11px;');

console.log('\n%c📍 LENY LEBORGNE SERVICES (LeBorgne)', 'color: #8b5cf6; font-size: 12px; font-weight: bold;');
console.log('%c› Web Development - Modern & Performant Sites', 'color: #94a3b8; font-size: 11px;');
console.log('%c› Web Apps & APIs - Custom Solutions', 'color: #94a3b8; font-size: 11px;');
console.log('%c› Maintenance & Support - Long-term Technical Care', 'color: #94a3b8; font-size: 11px;');
console.log('%c› Consulting & Audit - Digital Optimization', 'color: #94a3b8; font-size: 11px;');

console.log('\n%c💼 ABOUT LENY LEBORGNE', 'color: #8b5cf6; font-size: 12px; font-weight: bold;');
console.log('%cLeny Leborgne is a Passionate Web & Software Developer', 'color: #94a3b8; font-size: 11px;');
console.log('%cbased in Chartres, France. LeBorgne offers complete expertise', 'color: #94a3b8; font-size: 11px;');
console.log('%cin full-stack development with UX/DX excellence.', 'color: #94a3b8; font-size: 11px;');

console.log('\n%c📧 JOIN LENY LEBORGNE - GET IN TOUCH!', 'color: #06b6d4; font-size: 12px; font-weight: bold;');
console.log('%c✉️  lenyleborgne4@gmail.com', 'color: #06b6d4; font-size: 11px;');
console.log('%c🔗 https://lenyleborgne.com', 'color: #06b6d4; font-size: 11px;');
console.log('%c👤 GitHub: github.com/lenyLBG', 'color: #06b6d4; font-size: 11px;');
console.log('%c💼 LinkedIn: linkedin.com/in/lenyleborgne/', 'color: #06b6d4; font-size: 11px;');

console.log('\n%c═══════════════════════════════════════════', 'color: #8b5cf6; font-size: 11px; font-weight: bold;');
console.log('%cLeny Leborgne (LeBorgne) - Portfolio 2026', 'color: #8b5cf6; font-size: 11px; font-weight: bold;');
console.log('%c═══════════════════════════════════════════', 'color: #8b5cf6; font-size: 11px; font-weight: bold;');

