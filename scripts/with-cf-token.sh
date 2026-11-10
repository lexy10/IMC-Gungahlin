#!/usr/bin/env bash
# Runs a Cloudflare CLI command authenticated with an API token instead of
# `wrangler login`.
#
# Credentials are taken from, in order:
#   1. CLOUDFLARE_API_TOKEN / CLOUDFLARE_ACCOUNT_ID already in the environment (CI)
#   2. The macOS Keychain items below (local machine)
#
# They must never go in .env / .env.local / .env.production(.local): the
# OpenNext build copies those files' values into the deployed Worker bundle.
#
# Usage (via npm scripts):
#   npm run deploy
#   npm run cf -- whoami
#   npm run cf -- secret put RESEND_API_KEY

set -euo pipefail
cd "$(dirname "$0")/.."

KEYCHAIN_TOKEN_ITEM="imc-gungahlin-cloudflare-token"
KEYCHAIN_ACCOUNT_ITEM="imc-gungahlin-cloudflare-account-id"

from_keychain() {
  command -v security >/dev/null 2>&1 || return 0
  security find-generic-password -s "$1" -w 2>/dev/null || true
}

# Refuse to continue if a token has been put where the build would ship it.
for f in .env .env.local .env.production .env.production.local; do
  if [[ -f "$f" ]] && grep -q "CLOUDFLARE_API_TOKEN" "$f"; then
    echo "✘ CLOUDFLARE_API_TOKEN found in $f." >&2
    echo "  OpenNext bundles $f into the deployed Worker. Remove it and store the" >&2
    echo "  token in the Keychain instead (see the header of scripts/with-cf-token.sh)." >&2
    exit 1
  fi
done

CLOUDFLARE_API_TOKEN="${CLOUDFLARE_API_TOKEN:-$(from_keychain "$KEYCHAIN_TOKEN_ITEM")}"
CLOUDFLARE_ACCOUNT_ID="${CLOUDFLARE_ACCOUNT_ID:-$(from_keychain "$KEYCHAIN_ACCOUNT_ITEM")}"

missing=()
[[ -n "$CLOUDFLARE_API_TOKEN" ]] || missing+=("token  → security add-generic-password -U -a \"\$USER\" -s $KEYCHAIN_TOKEN_ITEM -w")
[[ -n "$CLOUDFLARE_ACCOUNT_ID" ]] || missing+=("account → security add-generic-password -U -a \"\$USER\" -s $KEYCHAIN_ACCOUNT_ITEM -w")

if (( ${#missing[@]} > 0 )); then
  echo "✘ Cloudflare credentials not found. Store them once in the macOS Keychain" >&2
  echo "  (each command prompts for the value, so it never lands in shell history):" >&2
  for m in "${missing[@]}"; do echo "    $m" >&2; done
  echo "  In CI, set CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID as secrets instead." >&2
  exit 1
fi

export CLOUDFLARE_API_TOKEN CLOUDFLARE_ACCOUNT_ID
exec "$@"
