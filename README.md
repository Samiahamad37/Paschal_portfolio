# Pascal Jonathan — Portfolio

my first work as the web developer 


Modern personal portfolio for **Pascal Jonathan**, Sign Language & Interpretation Director and Military Officer.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4** and **framer-motion**, exported as a fully static site.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build      # static site written to ./out
npm start          # serve ./out locally (uses `npx serve`)
```

Requires Node.js 20.9 or newer.

## Editing content

All text, contact details, timeline entries and gallery images live in `src/lib/data.ts`.
Images are in `public/images/` (`port.jpg` is the main portrait and Open Graph image).
The favicon is `src/app/icon.png`.

## Deploy

The site uses `output: "export"`, so any static host works. Two optional environment variables:

| Variable | Purpose | Example |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Absolute site URL, used for Open Graph links | `https://pascal.vercel.app` |
| `NEXT_PUBLIC_BASE_PATH` | Sub-path when hosted under a folder (GitHub Pages project sites) | `/Paschal_portfolio` |

### Vercel
Import the repo. Framework preset: Next.js. Set `NEXT_PUBLIC_SITE_URL` to your Vercel URL. No base path needed.

### Netlify
Build command `npm run build`, publish directory `out`. Set `NEXT_PUBLIC_SITE_URL`.

### GitHub Pages
1. Build with the repo name as base path:
   ```bash
   NEXT_PUBLIC_BASE_PATH=/Paschal_portfolio \
   NEXT_PUBLIC_SITE_URL=https://samiahamad37.github.io/Paschal_portfolio \
   npm run build
   touch out/.nojekyll
   ```
2. Publish the `out/` folder (for example with a GitHub Actions workflow using `actions/upload-pages-artifact` and `actions/deploy-pages`, or by pushing `out/` to a `gh-pages` branch), then enable Pages in the repository settings.

## Features

- Dark theme by default with a light-mode toggle (remembered per visitor)
- Glass sticky navbar with active-section highlighting and a mobile menu
- Hero with rotating role animation, scroll reveals and smooth scrolling (respects reduced-motion)
- Age calculated from the birth date at runtime
- Masonry gallery with a keyboard-friendly lightbox (Esc, ←, →)
- Contact form that opens a prefilled email (no backend), plus phone, email and WhatsApp links
- SEO metadata, Open Graph image and favicon
