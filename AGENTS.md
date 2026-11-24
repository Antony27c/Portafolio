# AGENTS.md

- Stack: React 19 + Vite, plain CSS in `src/index.css`. No icon libraries: use `src/components/Icon.jsx` (inline SVG).
- Content lives in `src/data/*.js`; all UI text in `src/i18n.js` (keep `es` and `en` keys in sync).
- Vite `base` is `/Portafolio/` (GitHub Pages: https://antony27c.github.io/Portafolio/). Static files go in `public/` and are referenced via `import.meta.env.BASE_URL`.
- Dev server: `npm run dev` → `http://localhost:5173/Portafolio/` (port may bump if the user's other projects, e.g. Boxly, are using 5173).
- Verify: `npm run build`. Visual check: `npx -y playwright@1.49.1 screenshot --channel msedge --viewport-size "1440,900" <url> out.png` (scroll-reveal sections are hidden in full-page shots unless the page is scrolled first).
- Deploy: push to `main` triggers `.github/workflows/deploy.yml`.
