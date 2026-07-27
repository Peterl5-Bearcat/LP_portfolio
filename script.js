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