#!/usr/bin/env bash
set -euo pipefail

[[ -f dist/index.html ]] || { echo "::error::dist/index.html is missing; not deploying."; exit 1; }

key="$RUNNER_TEMP/deploy_key"
trap 'rm -f "$key"' EXIT
(umask 077 && printf '%s\n' "$DEPLOY_SSH_KEY" > "$key")

target="$DEPLOY_USER@$DEPLOY_HOST"
ssh=(ssh -p "$DEPLOY_PORT" -i "$key" -o IdentitiesOnly=yes -o BatchMode=yes
  -o StrictHostKeyChecking=yes -o "UserKnownHostsFile=$(dirname "$0")/known_hosts")

rsync -rltcvz --delete \
  --exclude=/.well-known/ --exclude=/cgi-bin/ --exclude=/.ftpquota \
  -e "${ssh[*]}" dist/ "$target:"

if out=$("${ssh[@]}" "$target" true 2>&1) || [[ $out != *"is not rsync"* ]]; then
  echo "::error::The deploy key isn't restricted to rsync on the server. Check ~/.ssh/authorized_keys."
  exit 1
fi
echo "Deploy key is still restricted to rsync."
