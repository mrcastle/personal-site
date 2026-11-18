#!/usr/bin/env bash
set -euo pipefail

[[ -f dist/index.html ]] || { echo "::error::dist/index.html is missing; not deploying."; exit 1; }

key="$RUNNER_TEMP/deploy_key"
trap 'rm -f "$key"' EXIT
(umask 077 && printf '%s\n' "$SSH_KEY" > "$key")

target="$SSH_USER@$SSH_HOST"
ssh=(ssh -p "$SSH_PORT" -i "$key" -o IdentitiesOnly=yes -o BatchMode=yes -o ConnectTimeout=30
  -o StrictHostKeyChecking=yes -o "UserKnownHostsFile=$GITHUB_ACTION_PATH/known_hosts")

retry() {
  for attempt in 1 2 3; do
    "$@" && return 0
    (( attempt < 3 )) && { echo "Attempt $attempt failed; retrying in 60s."; sleep 60; }
  done
  return 1
}

restricted() {
  local out
  if out=$("${ssh[@]}" "$target" true 2>&1); then
    echo "::error::The deploy key isn't restricted to rsync on the server. Check ~/.ssh/authorized_keys."
    exit 1
  fi
  [[ $out == *"is not rsync"* ]] || { echo "$out"; return 1; }
}

retry rsync -rltcvz --delete \
  --exclude=/.well-known/ --exclude=/cgi-bin/ --exclude=/.ftpquota \
  -e "${ssh[*]}" dist/ "$target:" \
  || { echo "::error::rsync failed 3 times."; exit 1; }

retry restricted || { echo "::error::Couldn't confirm the deploy key is restricted to rsync."; exit 1; }
echo "Deploy key is still restricted to rsync."
