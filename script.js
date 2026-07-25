/* 
L.Peters MechE Portfolio
HTML Code 
Date Created: June 5, 2026
*/

document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. BACKDROP BLUR ELEMENTS
    // ==========================================
    const blurOverlay = document.getElementById('blurOverlay');
    const overviewSection = document.getElementById('overviewSection');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 60) {
            if (blurOverlay) blurOverlay.classList.add('active');
            if (overviewSection) overviewSection.classList.add('active');
        } else {
            if (blurOverlay) blurOverlay.classList.remove('active');
            if (overviewSection) overviewSection.classList.remove('active');
        }
    });

    // ==========================================
    // 2. REVEAL-ON-SCROLL ENGINE
    // ==========================================
    const observerOptions = {
        root: null,       
        threshold: 0.05,  // Activates when just 5% of the element breaks the threshold edge
        rootMargin: "0px 0px -20px 0px" 
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Track reveal targets across the active view canvas frame
    const elementsToAnimate = document.querySelectorAll('.reveal-on-scroll');
    elementsToAnimate.forEach(element => scrollObserver.observe(element));


    // ==========================================
    // 3. HORIZONTAL TIMELINE TRANSLATION ENGINE
    // ==========================================
    const track = document.querySelector('.timeline-scroll-track');
    const content = document.querySelector('.timeline-horizontal-content');
    
    if (track && content) {
        function transformScroll() {
            // Find exactly where the top edge of the track container is relative to the screen window viewport
            const trackBounds = track.getBoundingClientRect();
            const trackTop = trackBounds.top;
            const trackHeight = trackBounds.height;
            const windowHeight = window.innerHeight;

            // Trigger window: the moment the track container hits the very top edge of the viewport
            if (trackTop <= 0) {
                // Calculate how many physical pixels your finger has driven downwards past the locking point
                const scrolledDistance = Math.abs(trackTop);
                const maxVerticalScrollAllowed = trackHeight - windowHeight;

                // If we are actively swimming within the track boundaries
                if (scrolledDistance <= maxVerticalScrollAllowed) {
                    // Drive the content leftwards matching your finger tracking 1:1
                    content.style.setProperty('--scroll-offset', `-${scrolledDistance}px`);
                } else {
                    // Lock it securely at max horizontal width if you scroll past it quickly
                    content.style.setProperty('--scroll-offset', `-${maxVerticalScrollAllowed}px`);
                }
            } else {
                // Pin it firmly at the starting threshold point if you scroll back upwards
                content.style.setProperty('--scroll-offset', '0px');
            }
        }

        // Bind calculation engine to active browser window scrolling ticks
        window.addEventListener('scroll', () => {
            window.requestAnimationFrame(transformScroll);
        });
    }
});