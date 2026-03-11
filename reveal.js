/**
 * CV Progressive Disclosure Logic
 * Handles the 'fold and fade' expansion of professional history.
 */
document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('show-more-trigger');
    const overlay = document.getElementById('cv-overlay');
    const wrapper = document.querySelector('.main-grid');

    if (trigger && overlay && wrapper) {
        trigger.addEventListener('click', () => {
            // 1. Start the button's slide-left animation
            trigger.classList.add('collapsing');
            
            // 2. IMMEDIATELY show the sections so they are visible behind the button
            wrapper.classList.add('is-expanded');
            
            // 3. Fade out the gradient overlay quickly 
            overlay.style.background = 'transparent';
            overlay.style.transition = 'background 0.5s ease';
            
            // 4. Remove the overlay from DOM after animations clear
            setTimeout(() => {
                overlay.classList.add('hidden');
            }, 600);
        });
    }
});