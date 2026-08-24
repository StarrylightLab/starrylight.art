# starrylight.art

Personal homepage for `starrylight.art`.

## Automatic Cloudflare deployment

Publish this project to GitHub, then add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as repository Actions secrets. The included workflow deploys the Cloudflare Worker every time `main` receives a push. The existing `pixler.starrylight.art` DNS record remains separate.

After the first deployment, add `starrylight.art` (and optionally `www.starrylight.art`) as custom domains for the Worker in Cloudflare. Once connected, every push to `main` deploys automatically.
