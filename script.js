// script.js

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const currentSection = document.querySelector('section.active');
        if (currentSection) {
            currentSection.classList.remove('active');
        }

        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                section.classList.add('active');
            }
        });
    });
});
