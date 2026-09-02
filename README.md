# Calvin Cabungcal — Portfolio

Personal portfolio site built with **React + TypeScript + Material UI (Vite)**.

Design concept: an industrial control-panel / HMI status-panel aesthetic, reflecting Calvin's
background bridging factory automation (PLC/SCADA) and modern full-stack software. Bold signal-orange
and cyan accents echo status lights; monospace tags read like data labels on a control panel.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys
automatically on every push to `main`.

**One-time setup on GitHub:**
1. Push this repo to GitHub (see commands below).
2. In the repo, go to **Settings → Pages → Source** and select **GitHub Actions**.
3. Push to `main` — the site deploys automatically to `https://<username>.github.io/<repo-name>/`.

This repo is `calijace2023.github.io-portfolio-site`, so it deploys to
`https://calijace2023.github.io/calijace2023.github.io-portfolio-site/` — that's already set as
the `base` path in `vite.config.ts`. If you ever rename the repo, update `base` to match:

```ts
base: '/your-repo-name/',
```

If you deploy to a root user site (`username.github.io` repo itself), set `base: '/'`.

## Editing content

All resume content lives in `src/data/profile.ts` — update your summary, skills, experience, and
projects there. Everything on the page pulls from this one file.

## To do before going live

- `index.html` references `og-image.png` (a 1200×630 social preview shown when this link is shared
  on LinkedIn/Slack/etc.) — drop that file into `public/` before deploying, or the preview will be
  a broken image.
- Add a screenshot of the site to the top of this README so the repo reads well on GitHub itself.
