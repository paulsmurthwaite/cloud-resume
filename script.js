// 1. Define the sync function OUTSIDE the wrapper so it's globally accessible
const root = document.documentElement;
const syncTheme = () => {
    // The inline script in the HTML head handles the initial load.
    // This function is for subsequent changes (clicks, other tabs).
    const isLight = localStorage.getItem("theme") === "light";
    root.classList.toggle("light-mode", isLight);
};

// 3. Listen for navigation and external changes
window.addEventListener("pageshow", syncTheme);
window.addEventListener("storage", (e) => {
    if (e.key === "theme") syncTheme();
});

// 4. Wrap ONLY the button listeners in DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("theme-toggle");
    
    if (btn) {
        btn.addEventListener("click", () => {
            const newTheme = root.classList.contains("light-mode") ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            syncTheme();
        });
    }

    // Back to Top Logic
    const topBtn = document.getElementById("back-to-top");
    if (topBtn) {
        topBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});