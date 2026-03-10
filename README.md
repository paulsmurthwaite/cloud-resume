# Cloud Resume

[![Portfolio Site](https://img.shields.io/badge/Live-dciphr.co.uk-4ade80?style=flat-square)](https://www.dciphr.co.uk/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-4ade80.svg?style=flat-square)](https://github.com/paulsmurthwaite/cloud-resume/graphs/commit-activity)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

A professional landing page and serverless cloud resume built with a focus on best practices, high performance, and security hardening.

## The Stack
* **Frontend**: HTML5, CSS3 (Modern Grid/Flexbox), JavaScript (Vanilla).
* **Infrastructure**: Azure Cloud (Target Environment) / Static Web Hosting.
* **CI/CD**: GitHub Actions for automated deployment and build-ref stamping.
* **Performance**: WebP asset delivery, SVG optimization, and preloading strategies.
* **Security**: Strict Content Security Policy (CSP) implementation.

## Infrastructure Highlights

### Performance Optimisation
* **Asset Compression**: Migrated hero assets to **WebP**, reducing the primary payload from ~100KB to **12KB** while maintaining high pixel density (4x) for Retina displays.
* **Zero Layout Shift**: Defined explicit image dimensions and preloading hints in the document `<head>` to achieve a near-perfect Cumulative Layout Shift (CLS) score.
* **Vector Optimization**: Utilized SVGOMG to strip unnecessary XML metadata and editor-specific layers from vector assets.

### Security Hardening
* **Content Security Policy (CSP)**: Implemented a strict CSP meta-tag to enforce the principle of least privilege, allowing only trusted sources for styles, fonts, and images.
* **Minimal Surface Area**: Dependency-free frontend architecture to reduce the supply-chain attack surface.

### PWA & Accessibility
* **Web Manifest**: Configured `manifest.json` with **maskable icons** for professional OS-level integration on mobile devices.
* **Semantic HTML**: Utilized `<nav>`, `<address>`, and `<main>` landmarks to ensure full screen-reader compatibility and SEO indexing.
* **A11y**: Implemented `:focus-visible` logic for clear keyboard navigation without affecting mouse-user aesthetics.

## CI/CD Workflow
The project utilizes a custom GitHub Action that:
1. Triggers on every push to the `main` branch.
2. Dynamically updates the `BUILD_REF` timestamp in the footer using Linux `date` formatting.
3. Deploys production-ready assets to the live environment at [dciphr.co.uk](https://www.dciphr.co.uk/).

## Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/paulsmurthwaite/cloud-resume.git
2. Open index.html in any modern browser.
3. Test the theme engine using the toggle component (persists via localStorage).