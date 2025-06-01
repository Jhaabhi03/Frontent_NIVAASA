document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Toggle hamburger icon to X
            const icon = mobileMenuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Optional: Smooth scroll for anchor links (if you use them more extensively)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#') return; // Ignore empty hrefs

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuToggle.querySelector('i').classList.remove('fa-times');
                    mobileMenuToggle.querySelector('i').classList.add('fa-bars');
                }

                // Smooth scroll logic
                let offset = 0;
                const header = document.querySelector('header');
                if (header && getComputedStyle(header).position === 'fixed') {
                    offset = header.offsetHeight;
                }
                
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Optional: Active link highlighting based on scroll (basic example)
    // This is a simplified version and might need refinement for accuracy
    const sections = document.querySelectorAll('main section[id]');
    const navLi = document.querySelectorAll('header nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        const headerHeight = document.querySelector('header').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 50; // Adjusted for header and a small buffer
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current) && current !== '') {
                a.classList.add('active');
            } else if (current === '' && a.getAttribute('href') === 'index.html') { // Default to home if at top
                 a.classList.add('active');
            }
        });
        // Ensure home is active if no section is matched (e.g., at the very top)
        if (current === '' && navLi.length > 0 && navLi[0].getAttribute('href') === 'index.html') {
           if (!navLi[0].classList.contains('active')) {
                navLi.forEach(a => a.classList.remove('active')); // Clear others
                navLi[0].classList.add('active');
           }
        }
    });

});