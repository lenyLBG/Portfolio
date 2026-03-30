/* ═══════════════════════════════════════════════════════════════
   NEXUS v2.0 - JavaScript Engine
   ═══════════════════════════════════════════════════════════════ */

// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE';
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID_HERE';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID_HERE';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// ═══════════════════════════════════════════════════════════════
// SYSTEM INITIALIZATION
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    console.log('%c╔════════════════════════════════════════════╗', 'color: #00FFD1; font-size: 14px; font-weight: bold;');
    console.log('%c║  NEXUS v2.0 - INITIALIZED                  ║', 'color: #00FFD1; font-size: 14px; font-weight: bold;');
    console.log('%c║  LENY LEBORGNE - NEURAL DEV SYSTEM         ║', 'color: #FF006E; font-size: 14px; font-weight: bold;');
    console.log('%c╚════════════════════════════════════════════╝', 'color: #00FFD1; font-size: 14px; font-weight: bold;');
    
    initSystem();
});

function initSystem() {
    // Update year
    const year = new Date().getFullYear();
    document.getElementById('footerYear').textContent = year;
    
    // Navigation setup
    setupNavigation();
    
    // Contact form setup
    setupContactForm();
    
    // Scroll effects
    setupScrollEffects();
    
    // Matrix cursor effects
    setupCursorEffects();
    
    // Random glitches
    setupGlitches();
}

// ═══════════════════════════════════════════════════════════════
// NAVIGATION SYSTEM
// ═══════════════════════════════════════════════════════════════

function setupNavigation() {
    const navNodes = document.querySelectorAll('.nav-node');
    const sections = document.querySelectorAll('.nexus-section');
    
    // Smooth scroll on click
    navNodes.forEach(node => {
        node.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = node.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);
            
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                updateActiveNode(node);
            }
        });
    });
    
    // Update active node on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navNodes.forEach(node => {
            node.classList.remove('active');
            if (node.getAttribute('href') === '#' + current) {
                node.classList.add('active');
            }
        });
    }, { passive: true });
}

function updateActiveNode(node) {
    document.querySelectorAll('.nav-node').forEach(n => n.classList.remove('active'));
    node.classList.add('active');
}

// ═══════════════════════════════════════════════════════════════
// CONTACT FORM HANDLER - EmailJS Integration
// ═══════════════════════════════════════════════════════════════

function setupContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.send-btn');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'TRANSMITTING...';
        submitBtn.disabled = true;
        
        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                form
            );
            
            // Success state
            submitBtn.textContent = '✓ SIGNAL SENT';
            submitBtn.style.borderColor = '#00FFD1';
            submitBtn.style.color = '#00FFD1';
            
            // Reset form
            form.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.borderColor = '';
                submitBtn.style.color = '';
                submitBtn.disabled = false;
            }, 3000);
            
        } catch (error) {
            console.error('Error sending form:', error);
            
            submitBtn.textContent = '✗ TRANSMISSION FAILED';
            submitBtn.style.borderColor = '#FF006E';
            submitBtn.style.color = '#FF006E';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.borderColor = '';
                submitBtn.style.color = '';
                submitBtn.disabled = false;
            }, 3000);
        }
    });
}

// ═══════════════════════════════════════════════════════════════
// SCROLL EFFECTS & PARALLAX
// ═══════════════════════════════════════════════════════════════

function setupScrollEffects() {
    const sections = document.querySelectorAll('.nexus-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.8s, transform 0.8s';
        observer.observe(section);
    });
}

// ═══════════════════════════════════════════════════════════════
// CURSOR MATRIX EFFECTS
// ═══════════════════════════════════════════════════════════════

function setupCursorEffects() {
    const interactiveElements = document.querySelectorAll('.neo-btn, .social-btn, .skill-tag, a');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.cursor = 'pointer';
        });
    });
    
    // Add click ripple effect
    document.addEventListener('click', (e) => {
        if (e.target.matches('.neo-btn, .social-btn')) {
            createRipple(e);
        }
    });
}

function createRipple(e) {
    const btn = e.target.closest('.neo-btn, .social-btn');
    if (!btn) return;
    
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('span');
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    btn.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

// ═══════════════════════════════════════════════════════════════
// GLITCH EFFECTS & RANDOM ANIMATIONS
// ═══════════════════════════════════════════════════════════════

function setupGlitches() {
    // Glitch effects disabled
}

// ═══════════════════════════════════════════════════════════════
// THEME & COLOR CYCLING
// ═══════════════════════════════════════════════════════════════

let colorScheme = 0;
const colorSchemes = [
    { primary: '#00FFD1', secondary: '#FF006E', tertiary: '#FFBE0B' }, // Original
    { primary: '#FF006E', secondary: '#00FFD1', tertiary: '#8338EC' }, // Inverse
    { primary: '#FFBE0B', secondary: '#FB5607', tertiary: '#00FFD1' }, // Warm
    { primary: '#8338EC', secondary: '#3A86FF', tertiary: '#00FFD1' }  // Cool
];

// Uncomment to enable theme cycling (optional)
// document.addEventListener('keydown', (e) => {
//     if (e.key === 't' || e.key === 'T') {
//         cycleTheme();
//     }
// });

function cycleTheme() {
    colorScheme = (colorScheme + 1) % colorSchemes.length;
    const scheme = colorSchemes[colorScheme];
    
    document.documentElement.style.setProperty('--neon-cyan', scheme.primary);
    document.documentElement.style.setProperty('--neon-magenta', scheme.secondary);
    document.documentElement.style.setProperty('--neon-yellow', scheme.tertiary);
}

// ═══════════════════════════════════════════════════════════════
// SYSTEM MONITOR (Optional Easter Egg)
// ═══════════════════════════════════════════════════════════════

window.systemMonitor = {
    fps: 0,
    memory: 0,
    uptime: 0,
    
    start() {
        let frames = 0;
        setInterval(() => {
            this.fps = frames;
            frames = 0;
        }, 1000);
        
        setInterval(() => {
            this.uptime++;
        }, 1000);
        
        this.animate();
    },
    
    animate() {
        this.fps++;
        requestAnimationFrame(() => this.animate());
    }
};

// systemMonitor.start(); // Uncomment to enable

// ═══════════════════════════════════════════════════════════════
// KEYBOARD SHORTCUTS
// ═══════════════════════════════════════════════════════════════

document.addEventListener('keydown', (e) => {
    // ? key shows help
    if (e.key === '?') {
        console.log('%c╔═ NEXUS KEYBOARD SHORTCUTS ═╗', 'color: #00FFD1; font-weight: bold;');
        console.log('%c║ ? → Show this help           ║', 'color: #FFBE0B;');
        console.log('%c║ Ctrl+/ → Terminal mode      ║', 'color: #FFBE0B;');
        console.log('%c║ T → Cycle theme color       ║', 'color: #FFBE0B;');
        console.log('%c╚══════════════════════════════╝', 'color: #00FFD1; font-weight: bold;');
    }
    
    // Home key goes to top
    if (e.key === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// ═══════════════════════════════════════════════════════════════
// Performance Optimizations
// ═══════════════════════════════════════════════════════════════

// Use requestAnimationFrame for smooth animations
(function() {
    let animationFrame = null;
    
    function animate() {
        // Add any continuous animations here
        animationFrame = requestAnimationFrame(animate);
    }
    
    // Uncomment to enable continuous animation loop
    // animate();
})();

// Lazy load images (if needed)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ═══════════════════════════════════════════════════════════════
// END OF NEXUS SYSTEM
// ═══════════════════════════════════════════════════════════════
