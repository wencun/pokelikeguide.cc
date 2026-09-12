# Pokelike Guide

A responsive editorial landing page for discovering creature-collecting games. The site is intentionally dependency-free and can be hosted on any static web host.

## Local development

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Production build

```bash
npm run build
```

The deployable site is written to `dist/`. The included `vercel.json` explicitly
configures that directory as Vercel's build output and preserves real static
assets before falling back to `index.html`. This prevents direct links from
returning Vercel's `NOT_FOUND` response.

## Deploying to Vercel

Import the repository into Vercel without overriding its build settings. Vercel
will use the checked-in build command and output directory. If the project already
has dashboard-level overrides, clear **Build Command** and **Output Directory** so
that `vercel.json` remains the source of truth, then redeploy the latest commit.
