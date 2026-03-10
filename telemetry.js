document.addEventListener('DOMContentLoaded', () => {
    // Estimate current distance (Voyager 1 moves at ~17 km/s)
    const launchDate = new Date("1977-09-05");
    const now = new Date();
    
    // Calculate hours elapsed since launch
    const hoursSinceLaunch = (now - launchDate) / (1000 * 60 * 60);
    
    // 6.4bn km was the 1990 distance. 
    // Voyager 1 currently adds roughly 61,200 km per hour.
    const distanceKM = 6400000000 + (hoursSinceLaunch * 61200); 
    
    const coordElement = document.querySelector('.pbd-coord');
    
    if (coordElement) {
        coordElement.innerText = `${(distanceKM / 1000000000).toFixed(2)}bn km`;
    }
});