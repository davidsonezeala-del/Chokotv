# ChokoTv

ChokoTv is a Next.js + Express + PostgreSQL entertainment blog and advertising platform.

## Quick start (local)

1. Copy `.env.example` to `.env` and fill values.

2. Install dependencies per workspace:

```bash
# backend
npm --prefix backend install --legacy-peer-deps

# frontend (app)
npm --prefix app install --legacy-peer-deps

# root (optional if using workspaces)
npm install --legacy-peer-deps
```

Note: In some environments `npm install` may fail due to registry or network issues (ECONNRESET). If you hit errors, try running installs locally or in CI, and ensure access to `https://registry.npmjs.org/`.

3. Generate Prisma client and run migrations:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

4. Start backend and frontend in separate terminals:

```bash
# backend
npm --prefix backend run dev

# frontend
npm --prefix app run dev
```

## Environment
Required variables are in `.env.example`. Add your Google OAuth and Paystack keys as needed.

## Notes
- The project includes NextAuth with Google and Credentials providers.
- Payment endpoints for Paystack are included in `backend/routes/payments.js` as initialization placeholders. Flutterwave endpoints have been removed.
- Prisma models include the default NextAuth tables and application models.

## Deployment

- Frontend: Deploy the `app` folder to Vercel (set Root Directory to `app`).
- Backend: Deploy `backend` to Railway, Render, or similar. Ensure `DATABASE_URL` and payment secrets are set.

This repository includes helper scripts and CI to make deployment easier:

- `scripts/create_github_repo.sh` — create a GitHub repo and push current workspace (requires GitHub CLI `gh`).
- `scripts/deploy_vercel.sh` — deploy the `app` folder using Vercel CLI.
- GitHub Actions workflow: `.github/workflows/vercel-deploy.yml` — deploys `app` to Vercel using the Vercel Action (requires `VERCEL_*` secrets).

Required environment variables (set in Vercel/Render/Railway):

- `DATABASE_URL`
- `NEXTAUTH_URL` (e.g. `https://your-vercel-domain.vercel.app`)
- `NEXTAUTH_SECRET`
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` (if using Google login)
- `PAYSTACK_SECRET_KEY`
- `BACKEND_URL` (if using the frontend proxy to a separate backend)

Example Vercel steps:

1. Commit and push repository to GitHub (use `./scripts/create_github_repo.sh <name>` to automate).
2. In Vercel, choose "New Project" → Import Git Repository.
3. Set the Root Directory to `app`.
4. Add the environment variables listed above.
5. Deploy — Vercel will give you a live URL.

## Mock data

There is mock JSON data under `app/data` and mock API routes under `app/api/mock/*` so the frontend can render without a database. To switch to a real database, set `DATABASE_URL`, run `npx prisma generate` and `npx prisma migrate dev`.

If you'd like, I can push this repository to GitHub and/or connect it to Vercel for you (you'll need to provide `VERCEL_*` secrets or use the Vercel UI). Tell me which you'd prefer and I'll proceed.
