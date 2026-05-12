// ============================================
// Navigation Toggle (Mobile)
// ============================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Close mobile nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
}

// ============================================
// Scroll Animations (Intersection Observer)
// ============================================
const fadeElements = document.querySelectorAll('.fade-in');

if (fadeElements.length > 0) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    fadeElements.forEach(el => observer.observe(el));
}

// ============================================
// Active Nav Link Highlight (on scroll)
// ============================================
const sections = document.querySelectorAll('section[id]');

if (sections.length > 0) {
    const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

    if (navAnchors.length > 0) {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        navAnchors.forEach(a => {
                            a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );

        sections.forEach(section => sectionObserver.observe(section));
    }
}
