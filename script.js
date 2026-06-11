// ----------------typing------------------

const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'Computer Science Student'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// -----------------------Scroll reveal------------------

ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-text, .heading, .head, .section-title', { origin: 'top' });
ScrollReveal().reveal('.home-image, .project-container, .certificate-container, .internship-card, .education-box', { origin: 'bottom' });
ScrollReveal().reveal('.about-img, .technical-skill, .contact-left', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .tool-box, .contact-right', { origin: 'right' });
