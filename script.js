document.addEventListener('DOMContentLoaded', function() {
    // Calculate years of experience
    const startDate = new Date('2018-01-01');
    const currentDate = new Date();
    const yearsOfExperience = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24 * 365));
    document.getElementById('years-of-experience').textContent = yearsOfExperience;

    // Optimize animations using Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-4');
            }
        });
    }, observerOptions);

    // Observe all elements that need animation
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-500', 'ease-out');
        observer.observe(el);
    });

    // Optimize scroll performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                // Handle scroll events here if needed
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Optimize image loading
    document.querySelectorAll('img').forEach(img => {
        if (img.dataset.src) {
            img.src = img.dataset.src;
        }
    });

    // Handle reduced motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
        document.documentElement.classList.add('reduce-motion');
    }

    // Optimize hover effects
    document.querySelectorAll('.hover-effect').forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.classList.add('scale-105', 'shadow-lg');
        });
        el.addEventListener('mouseleave', () => {
            el.classList.remove('scale-105', 'shadow-lg');
        });
    });

    // Animate progress bars on scroll
    const progressBars = document.querySelectorAll('.progress-bar');
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('aria-valuenow');
                progressBar.style.width = `${width}%`;
                progressObserver.unobserve(progressBar);
            }
        });
    }, { threshold: 0.2 });

    progressBars.forEach(bar => {
        bar.style.width = '0';
        progressObserver.observe(bar);
    });
}); 