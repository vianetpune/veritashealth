import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Logic
    const navContainer = document.querySelector('.nav__container');
    const navLinks = document.querySelector('.nav__links');
    
    if (navContainer && navLinks) {
        // Create Toggle Button
        const navToggle = document.createElement('button');
        navToggle.className = 'nav__toggle';
        navToggle.innerHTML = '<i class="fas fa-bars"></i>';
        navToggle.setAttribute('aria-label', 'Toggle navigation menu');
        
        // Target specifically before the desktop links
        navContainer.insertBefore(navToggle, navLinks);
        
        // Handle Menu Click
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav__links--open');
            const isOpen = navLinks.classList.contains('nav__links--open');
            navToggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Close on Link Click
        document.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('nav__links--open');
                navToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }

    // Active Navigation Highlighting
    const currentLocation = window.location.pathname;
    const navMenuItems = document.querySelectorAll('.nav__link');
    
    navMenuItems.forEach(item => {
        const itemPath = item.getAttribute('href');
        if (currentLocation === itemPath || (currentLocation === '/' && itemPath === 'index.html')) {
            item.classList.add('active');
        }
    });

    // Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Your request has been received. Dr. Jas will contact you shortly.');
            contactForm.reset();
        });
    }

    console.log('Veritas Health Advisory Initialized');
});
