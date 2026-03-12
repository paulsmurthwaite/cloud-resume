document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("theme-toggle");
    
    // We target the root (html) element
    const root = document.documentElement;

    if (btn) {
        btn.addEventListener("click", () => {
            // Toggle the class on the root
            root.classList.toggle("light-mode");
            
            // Determine and save state
            const isLight = root.classList.contains("light-mode");
            localStorage.setItem("theme", isLight ? "light" : "dark");
            
            // Optional: Keep body in sync for any legacy styles
            document.body.classList.toggle("light-mode", isLight);
        });
    }

    // Back to Top Logic
    const topBtn = document.getElementById("back-to-top");
    if (topBtn) {
        topBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});