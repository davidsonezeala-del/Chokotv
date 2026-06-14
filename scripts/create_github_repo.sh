#!/usr/bin/env bash
set -e

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI (gh) is required. Install from https://cli.github.com/"
  exit 1
fi

if [ -z "$1" ]; then
  echo "Usage: $0 <github-repo-name>"
  exit 1
fi

REPO_NAME="$1"
echo "Creating GitHub repo: $REPO_NAME"
gh repo create "$REPO_NAME" --public --source=. --remote=origin --push
echo "Repository created and pushed. Now set Vercel secrets and/or import to Vercel UI."
