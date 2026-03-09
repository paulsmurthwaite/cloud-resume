async function loadCV() {
    try {
        const response = await fetch('./cv-data.json');
        const data = await response.json();

        // 1. Inject Header & About
        document.getElementById('user-name').textContent = data.info.name;
        document.getElementById('user-title').textContent = data.info.title;
        document.getElementById('about-text').textContent = data.info.about;

        // 2. Inject Links
        const linksContainer = document.getElementById('contact-links');
        const links = data.info.links;
        linksContainer.innerHTML = `
            <a href="${links.linkedin}" target="_blank">LinkedIn</a> | 
            <a href="${links.github}" target="_blank">GitHub</a> | 
            <a href="${links.pdf}" target="_blank">Download PDF</a>
        `;

        // 3. Inject Experience (Your 10 positions)
        const expContainer = document.getElementById('experience-container');
        expContainer.innerHTML = ''; 

        data.experience.forEach(job => {
            const jobElement = document.createElement('article');
            jobElement.className = 'job-entry';
            
            // Format details from your JSON string block
            const detailsHtml = job.details
                .split('\n')
                .filter(line => line.trim() !== '')
                .map(line => `<li>${line.replace(/^[●-]\s*/, '')}</li>`) // Cleans up existing bullets
                .join('');

            jobElement.innerHTML = `
                <div class="job-header">
                    <h3>${job.role}</h3>
                    <p class="job-meta"><strong>${job.company}</strong> | ${job.location} | ${job.dates}</p>
                </div>
                <ul>${detailsHtml}</ul>
            `;
            expContainer.appendChild(jobElement);
        });

    } catch (error) {
        console.error('Error:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadCV);