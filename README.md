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

Import the repository into Vercel with these project settings:

| Setting | Value |
| --- | --- |
| Root Directory | `.` (the repository root) |
| Framework Preset | `Other` |
| Build Command | Leave blank / use `vercel.json` |
| Output Directory | Leave blank / use `vercel.json` |

The checked-in configuration deliberately sets `framework` to `null`; this is a
static site, not a Next.js project. It also supplies the build command and output
directory. If this project was previously configured as **Next.js** in the Vercel
dashboard, change **Framework Preset** to **Other**, reset the Build Command and
Output Directory overrides, and confirm the Root Directory is the directory that
contains this `package.json`. Then redeploy the latest commit without using the
old build cache.

The error `No Next.js version detected` means the Vercel project is still applying
the Next.js preset to this static site; installing Next.js is not necessary and
would add an unused application framework.
