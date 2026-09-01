# pontus.pro

Cloudflare Workers Next.js application powered by vinext.

## Commands

- `npm run dev` starts local development.
- `npm run build` creates production Worker output.
- `npm run start` runs the built Worker locally.
- `npm run deploy` builds and deploys to Cloudflare Workers.

## Deployment

The Worker is configured as `pontus-pro` and includes the custom domain `pontus.pro`.

Before the first deploy, authenticate Wrangler with `wrangler login` or provide `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in the environment. The `pontus.pro` zone must already exist in the selected Cloudflare account.
