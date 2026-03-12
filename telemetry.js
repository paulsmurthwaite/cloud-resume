document.addEventListener('DOMContentLoaded', () => {
    // This calculation is an estimate based on the "Pale Blue Dot" photo.
    // Base distance: 6.4 billion km on Feb 14, 1990.
    const baseDistanceKm = 6400000000;
    const baseDate = new Date("1990-02-14T00:00:00Z");
    
    // Current time
    const now = new Date();
    
    // Calculate hours elapsed since the base date in 1990.
    const hoursSinceBaseDate = (now - baseDate) / (1000 * 60 * 60);
    
    // Voyager 1's approximate speed is 17 km/s, which is ~61,200 km/h.
    const speedKmh = 61200;
    
    // Calculate the new distance by adding the distance travelled since 1990.
    const currentDistanceKm = baseDistanceKm + (hoursSinceBaseDate * speedKmh);
    
    const coordElement = document.querySelector('.pbd-coord');
    
    if (coordElement) {
        // Display the result in billions of km, rounded to two decimal places.
        coordElement.innerText = `${(currentDistanceKm / 1000000000).toFixed(2)}bn km`;
    }
});