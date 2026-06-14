#!/usr/bin/env bash
set -e

if ! command -v vercel >/dev/null 2>&1; then
  echo "Vercel CLI required. Install with: npm i -g vercel"
  exit 1
fi

echo "Deploying 'app' directory to Vercel (production)..."
vercel --prod --cwd app --confirm
