# starrylight.art

Personal homepage for `starrylight.art`.

## Local development

```bash
npm ci
npm run dev
```

The app is served at http://localhost:3000/.

## Automatic Cloudflare deployment

Pushes to `main` deploy a dedicated Worker named `starrylight-art` and attach it to `starrylight.art` and `www.starrylight.art`. The existing `pixler.starrylight.art` Worker is left unchanged.

The repository needs one Actions secret: `CLOUDFLARE_API_TOKEN` (Cloudflare "Edit Cloudflare Workers" token). The account ID is already in the workflow.
