# 🏠 Nestly — Real Estate Platform (Portfolio Project 2)

A modern real estate listing platform built with **React + Vite + Tailwind CSS**,
with a PHP backend for property search and enquiry handling.

**Live demo:** https://youssefabotaleb20.github.io/nestly-realestate/ · Part of [Youssef Abotaleb's portfolio](https://youssefabotaleb20.github.io/Portfolio/)


## Stack
- **Frontend:** React 18, Vite 5, Tailwind CSS 3, Framer Motion
- **Backend:** PHP 8+ (properties + enquiry API)
- **Fonts:** Syne, Instrument Sans (Google Fonts)

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the frontend
```bash
npm run dev
# → http://localhost:5173
```

### 3. Run the PHP API (optional)
```bash
php -S localhost:8000 -t api/
```

### 4. Build for production
```bash
npm run build
```

## Project Structure
```
nestly-realestate/
├── api/
│   └── properties.php       ← Properties list + enquiry endpoint
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Marquee.jsx
│   │   ├── PropertyCard.jsx
│   │   ├── Listings.jsx
│   │   ├── Agents.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Customisation
- Add real properties in `src/components/Listings.jsx` or wire up to the PHP API
- Replace agent photos with real headshots
- Configure MySQL in `api/properties.php` to serve dynamic listings
