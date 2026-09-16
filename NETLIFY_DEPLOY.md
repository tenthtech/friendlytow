# Netlify deployment

This folder is a standalone Netlify-ready React site.

## Git deployment settings
- Base directory: leave empty
- Build command: `npm run build`
- Publish directory: `build`
- Node version: 20 (also set in netlify.toml)

`netlify.toml` already includes the React SPA rewrite, so routes such as `/services`, `/about`, `/reviews`, and `/contact` work on refresh.

## Contact form
The original Emergent export depended on a separate FastAPI + MongoDB backend. This Netlify-ready copy uses Netlify Forms instead so the website can be hosted as a single Netlify project. Submissions appear in Netlify's Forms area. Configure form notifications in Netlify if email alerts are required.

## Custom subdomain
After the Netlify site is deployed, add the desired subdomain under Domain management in Netlify. If DNS is managed by Cloudflare, create the CNAME record Netlify requests, pointing the subdomain host to the site's `*.netlify.app` hostname.
