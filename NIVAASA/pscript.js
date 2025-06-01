document.addEventListener('DOMContentLoaded', () => {
    // Example: Make favorite buttons toggle an 'active' class (visual only)
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            // You could change the heart icon or color here
            if (button.classList.contains('active')) {
                // button.innerHTML = '💖'; // Example of changing icon
            } else {
                // button.innerHTML = '❤️';
            }
        });
    });

    // Example: "Get Personalized Assistance" button
    const assistanceBtn = document.getElementById('personalizedAssistanceBtn');
    if (assistanceBtn) {
        assistanceBtn.addEventListener('click', () => {
            alert('Thank you! Our team will contact you shortly for personalized assistance.');
            // In a real app, this might open a contact form modal or redirect.
        });
    }

    // Simple active nav link (can be improved for multi-page sites)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        // If you want to set active based on current page URL:
        // if (link.href === window.location.href) {
        //     link.classList.add('active');
        // }
        // For this static demo, 'Properties' is hardcoded active in HTML.
        // You could remove 'active' from HTML and add logic here if needed.
    });

});