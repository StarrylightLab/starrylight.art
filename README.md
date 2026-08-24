# starrylight.art

Personal homepage for `starrylight.art`.

## Automatic Cloudflare deployment

Publish this project to GitHub, then connect the repository to Cloudflare Pages. The existing `pixler.starrylight.art` DNS record remains separate.

Use these Cloudflare Pages settings:

- Build command: `npm run build`
- Production branch: `main`
- Custom domain: `starrylight.art` (and optionally `www.starrylight.art`)

Once connected, every push to `main` deploys automatically.
