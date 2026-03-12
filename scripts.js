/**
 * DCIPHR.CO.UK - Consolidated Core Logic
 * Components: Theme Toggle, Header Scramble, Telemetry, CV Reveal
 */

// ==========================================
// 1. THEME MANAGEMENT
// ==========================================
const root = document.documentElement;
const syncTheme = () => {
    const isLight = localStorage.getItem("theme") === "light";
    root.classList.toggle("light-mode", isLight);
};

// Listen for navigation and cross-tab storage changes
window.addEventListener("pageshow", syncTheme);
window.addEventListener("storage", (e) => {
    if (e.key === "theme") syncTheme();
});

// ==========================================
// 2. INITIALIZATION WRAPPER
// ==========================================
document.addEventListener("DOMContentLoaded", () => {

    // --- Module: Theme Toggle ---
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            const newTheme = root.classList.contains("light-mode") ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            syncTheme();
        });
    }

    // --- Module: Header Scramble (One-Armed Bandit) ---
    const brandElement = document.getElementById("brand-name");
    if (brandElement) {
        const state1 = "Paul Smurthwaite";
        const state2 = "dciphr.co.uk";
        const chars = "01<>_-$#!&%*+={}/¿?0123456789";
        let scrambleInterval = null;

        const startScramble = (targetText) => {
            let iteration = 0;
            clearInterval(scrambleInterval);
            scrambleInterval = setInterval(() => {
                brandElement.innerHTML = state1.split("").map((_, index) => {
                    const finalChar = targetText[index] || " ";
                    if (index < iteration) return `<span>${finalChar}</span>`;
                    
                    const randomChar = chars[Math.floor(Math.random() * chars.length)];
                    return `<span class="scramble-active">${randomChar}</span>`;
                }).join("");

                if (iteration >= state1.length) clearInterval(scrambleInterval);

                let step = (1 / 3) * (1 - (iteration / (state1.length * 1.5)));
                iteration += Math.max(step, 0.2);
            }, 20);
        };

        brandElement.addEventListener("mouseenter", () => startScramble(state2));
        brandElement.addEventListener("mouseleave", () => startScramble(state1));
    }

    // --- Module: Voyager-1 Telemetry ---
    const coordElement = document.querySelector('.pbd-coord');
    if (coordElement) {
        const baseDistanceKm = 6400000000;
        const baseDate = new Date("1990-02-14T00:00:00Z");
        const now = new Date();
        const hoursSinceBaseDate = (now - baseDate) / (1000 * 60 * 60);
        const speedKmh = 61200;
        const currentDistanceKm = baseDistanceKm + (hoursSinceBaseDate * speedKmh);
        
        coordElement.innerText = `${(currentDistanceKm / 1000000000).toFixed(2)}bn km`;
    }

    // --- Module: CV Progressive Disclosure (Reveal) ---
    const revealTrigger = document.getElementById('show-more-trigger');
    const overlay = document.getElementById('cv-overlay');
    const wrapper = document.querySelector('.main-grid');

    if (revealTrigger && overlay && wrapper) {
        revealTrigger.addEventListener('click', () => {
            revealTrigger.classList.add('collapsing');
            wrapper.classList.add('is-expanded');
            overlay.style.background = 'transparent';
            overlay.style.transition = 'background 0.5s ease';
            setTimeout(() => overlay.classList.add('hidden'), 600);
        });
    }

    // --- Module: Navigation ---
    const topBtn = document.getElementById("back-to-top");
    if (topBtn) {
        topBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});