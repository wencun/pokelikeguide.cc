# Pokelike Guide

A responsive editorial landing page for discovering creature-collecting games.
The site is plain HTML, CSS, and JavaScript and has no framework, dependency
installation, or build step.

## Local development

```bash
python3 -m http.server 4173 --directory public
```

Then visit `http://localhost:4173`.

## Deploying to Vercel

The repository follows Vercel's conventional static-site layout: every deployable
file is checked into `public/`. The checked-in `vercel.json` selects no framework
and publishes that directory directly.

Use these Vercel project settings:

| Setting | Value |
| --- | --- |
| Root Directory | Leave empty |
| Framework Preset | `Other` |
| Build Command | Override off |
| Output Directory | Override off |
| Install Command | Override off |

Do not enter `./` in **Root Directory**. Vercel describes that field as a path to
a subdirectory; this project lives at the repository root, so the correct value is
empty. After changing it, save the settings and redeploy the latest commit without
the previous build cache.

No Next.js version should be installed or detected because this project does not
use Next.js. There is also no generated `dist/` directory that can go missing in
a deployment—the published files are present in Git under `public/`.
