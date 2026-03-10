document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme");

    // Initialize theme
    if (currentTheme === "light") {
        document.body.classList.add("light-mode");
    }

    // Toggle logic
    btn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        
        const theme = document.body.classList.contains("light-mode") 
            ? "light" 
            : "dark";
            
        localStorage.setItem("theme", theme);
    });
});