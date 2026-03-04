# GEMINI.md - Projet "Choisy pour tous" (Municipales 2026)

## Project Overview
This project is the official website for "Choisy pour tous," a local political list for the 2026 municipal elections in **Choisy, Haute-Savoie (74330)**. It is a single-page static website designed for information and campaign communication.

- **Primary Goal:** Present the team, the program, and news related to the campaign.
- **Tone:** Professional, local, and engaging.
- **Target Audience:** Residents of Choisy (74330).

## Tech Stack
- **Structure:** HTML5 (single-page architecture).
- **Styling:** 
  - **Tailwind CSS:** Currently using the Play CDN version.
  - **Custom CSS:** `assets/css/style.css` for animations and fine-tuning.
  - **Fonts:** Inter (Sans-serif) and Playfair Display (Serif) via Google Fonts.
- **Icons:** Lucide Icons (via CDN).
- **Interactivity:** Vanilla JavaScript (`assets/js/main.js`).
- **SEO & Social:** 
  - Canonical URL: `https://choisypourtous.fr/`.
  - Open Graph meta tags for social sharing.
  - Structured Data (JSON-LD) for `Organization`, `WebSite`, `BreadcrumbList`, and `Event`.
- **Hosting:** GitHub Pages.
- **Automation:** GitHub Actions (`.github/workflows/deploy.yml`) for automated deployments on push to `main`.

## Project Structure
```text
/
├── .github/workflows/  # Deployment automation (GitHub Pages)
├── assets/
│   ├── css/            # Custom style overrides (style.css)
│   ├── img/            # Brand assets, backgrounds, and profile pictures (avif format preferred)
│   └── js/             # Interactive logic (main.js) and Tailwind config (tailwind.config.js)
├── index.html          # Main entry point and only page
├── robots.txt          # SEO crawler instructions
├── sitemap.xml         # SEO sitemap
├── LICENSE             # GPLv3 (assuming standard for this repo or as found)
└── README.md           # Basic project name
```

## Development & Maintenance
### Styles & Theme
- The Tailwind configuration is in `assets/js/tailwind.config.js`.
- **Colors:**
  - `republic-blue`: `#023047` (Primary)
  - `republic-red`: `#fb8500` (Accent)
  - `slate-custom`: `#334155`
- **Fonts:**
  - `font-sans`: Inter
  - `font-serif`: Playfair Display

### Modals & Candidates
- Candidate profiles are in the `index.html` file within the `#notre-equipe` section.
- Details are stored in hidden `<div class="candidate-description hidden">` tags and populated into the `#candidate-modal` via JavaScript.

### Updates
- **Actualités:** Managed manually in the `#actualites` section of `index.html`.
- **Candidats:** Update the `<img>` and description in the grid.
- **Deployment:** Simply push to the `main` branch; GitHub Actions will rebuild and deploy.

## Deployment Commands
- **Testing Locally:** Open `index.html` in any modern browser. No build step is currently required as all dependencies are loaded via CDN.
- **TODO:** If Tailwind is moved to a build step (PostCSS), the commands will be `npm run build`.

## Conventions
- **Language:** All user-facing content must be in French (`fr`).
- **Images:** Prefer modern formats like `.avif` for performance.
- **Accessibility:** Maintain proper heading hierarchy (H1 -> H2 -> H3) and alternative text for images.
- **SEO:** Always ensure structured data remains valid when changing sections.
