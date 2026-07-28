/* 
L.Peters MechE Portfolio
HTML Code 
Date Created: June 5, 2026
*/

document.addEventListener("DOMContentLoaded", () => {
    
// ========================================================================================
// 1. BACKDROP BLUR ELEMENTS
// ========================================================================================
    const quoteSection = document.getElementById('textoverVideo');
    const blurOverlay = document.getElementById('blurOverlay');
    const overviewSection = document.getElementById('overviewSection');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 40) {
            if (quoteSection) quoteSection.classList.add('hidden'); // Fades quote out
            if (blurOverlay) blurOverlay.classList.add('active');
            if (overviewSection) overviewSection.classList.add('active');
        } else {
            if (quoteSection) quoteSection.classList.remove('hidden'); // Fades quote back in at top
            if (blurOverlay) blurOverlay.classList.remove('active');
            if (overviewSection) overviewSection.classList.remove('active');
        }
    });






// ===============================================================================================
// FADE IN ON SCROLL
// ===============================================================================================


const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Triggers when 10% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Adds the active class to trigger the CSS transition
            // observer.unobserve(entry.target); // Uncomment if you only want it to animate once
        }
    });
}, observerOptions);

// Target all elements with the reveal class
document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
});







// ===============================================================================================
// BACK TO TOP BUTTON
// ===============================================================================================
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
});