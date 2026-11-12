# Nestly architecture

Nestly is a front-end concept: a real estate listing site with no live data behind it. It exists to show UI and layout work on Youssef's portfolio.

## Components

| Part | What it does |
| --- | --- |
| `src/App.jsx` | Page order: portfolio modal, navbar, hero, marquee, listings, agents, footer |
| `PortfolioModal.jsx` | Explains on every visit that this is a demo; links to the portfolio |
| `Navbar.jsx` | Sticky top bar; links scroll to `#listings`, `#agents` and `#contact` (the footer) |
| `Listings.jsx` + `PropertyCard.jsx` | Filterable property grid; the listings are an array inside `Listings.jsx` |
| `Agents.jsx` | Agent cards (photos from randomuser.me) |
| `Footer.jsx` | Section links and the credit link to the portfolio |
| `api/properties.php` | Optional PHP endpoint for local experiments; the live site doesn't use it |

## Data flow

Everything is static. Listings and agents are hard-coded in the components, so the deployed site makes no API calls. `vite.config.js` proxies `/api` to `localhost:8000` only for local PHP work.

## Hosting

GitHub Pages, served from the `gh-pages` branch. `npm run deploy` builds with the `/nestly-realestate/` base path and pushes `dist/` to that branch with `gh-pages`. There's no GitHub Actions workflow, so merging to `main` alone doesn't update the live site.

## Key decisions

- **Static data, no backend in production.** A demo shouldn't need a server or a database, and GitHub Pages is free.
- **The modal shows on every visit.** Visitors arrive from the portfolio, and the modal makes clear that the listings aren't real.
- **Every link goes somewhere real.** Nav and footer links scroll to real sections. Links to pages that don't exist (Privacy, Careers and so on) were removed instead of being left as `#`.

## Links

- Live demo: https://youssefabotaleb20.github.io/nestly-realestate/
- Portfolio (the site this demo is shown on): https://youssefabotaleb20.github.io/Portfolio/
- Every "View my portfolio" or "Built by Youssef Abotaleb" link in the demo points to the portfolio. There are no Linktree links any more (changed 2026-11-12).
