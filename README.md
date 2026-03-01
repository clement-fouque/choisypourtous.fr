# Choisy pour tous

Site officiel de campagne pour la liste **Choisy pour tous** aux élections municipales 2026 de Choisy (Haute-Savoie, 74330).

**[choisypourtous.fr](https://choisypourtous.fr)**

## Apercu

Site vitrine statique en une page, présentant :

- La liste et ses 21 candidats (biographies, photos, hameaux)
- Les 4 piliers du programme municipal (citoyenneté, cohésion sociale, patrimoine, économie locale)
- Un fil d'actualités de campagne avec intégration de la page Facebook
- Les informations de contact et les dates des réunions publiques

## Stack technique

| Composant | Technologie |
|---|---|
| Structure | HTML statique (single-page) |
| Style | [Tailwind CSS](https://tailwindcss.com/) (CDN) |
| Icônes | [Lucide](https://lucide.dev/) |
| Polices | Inter, Playfair Display (Google Fonts) |
| Déploiement | GitHub Pages (GitHub Actions) |
| SEO | Schema.org (JSON-LD), Open Graph, sitemap.xml, robots.txt |

## Structure du projet

```
.
├── index.html              # Page principale
├── assets/
│   ├── css/style.css       # Styles personnalisés
│   ├── js/
│   │   ├── main.js         # Script applicatif (navigation, modales)
│   │   └── tailwind.config.js  # Configuration Tailwind
│   └── img/                # Images (logo, profils, favicon, hero)
├── robots.txt
├── sitemap.xml
└── .github/workflows/
    └── deploy.yml          # Déploiement automatique GitHub Pages
```

## Développement local

Aucune dépendance à installer. Ouvrir `index.html` dans un navigateur.

## Déploiement

Le site se déploie automatiquement sur GitHub Pages à chaque push sur la branche `main` via le workflow `.github/workflows/deploy.yml`.

## Licence

[GPL-3.0](LICENSE)
