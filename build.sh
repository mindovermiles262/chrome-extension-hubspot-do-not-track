#/bin/bash

#
# Packs the extension into a .zip for you
#   USAGE: ./build.sh [VERSION NUMBER]
#

set -e -o pipefail

# Get version number from arguments, or parse manifest.json
if [ $# -eq 0 ]; then
  echo "[*] No Version Given. Parsing manifest.json"
  VERSION=$(cat manifest.json | jq '.version' | tr -d '"')
  echo "[*] Found version: $VERSION"
else
  VERSION=$1
  echo "[*] Version: $VERSION"
fi

# Package extension as .zip
zip -r releases/hubspot-dnt-$VERSION.zip ./* \
  --exclude "*.git*" \
  --exclude "build.sh" \
  --exclude "README.md" \
  --exclude "releases/*"

echo "[*] Created releases/hubspot-dnt-$VERSION.zip"
