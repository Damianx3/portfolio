# Portfolio

My personal portfolio built with Next.js and TypeScript.

## Development

```bash
npm ci
npm run dev
```

## Validation

```bash
npm test
npm run build
```

## Deployment

The production domain is `https://damian-portfolio.com`. Canonical URLs,
Open Graph URLs, the sitemap, and robots.txt use this domain by default.
Set `NEXT_PUBLIC_SITE_URL` at build time only when deploying to a different
production domain; `.env.example` documents the setting. Preview URLs do not
replace the public production domain in metadata.

Production uses `main`; develop and review changes on `portfolio-v2` before
merging. To preview a production build locally:

```bash
npm run build
npm start
```

Restart `npm start` after rebuilding so its JavaScript and HTML stay in sync.
