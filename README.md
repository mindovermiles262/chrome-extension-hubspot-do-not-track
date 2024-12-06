# Hubspot Do Not Track

## Manual Chrome Installation

1. Clone Repo
2. Go to `chrome://extensions` in your chrome browser
3. Turn on "Developer Mode"
4. Choose "Load Unpacked" and choose the root directory of this repo
5. Profit.

## Chrome Packaging
1. Follow the zipping instructions in `Firefox Packaging` below
2. Browse to https://chrome.google.com/webstore/devconsole
3. Browse into the extension >> "Package" >> "Upload new Package" and select the zipped file
4. Wait for approval

## Manual Firefox Installation
1. Clone Repo
2. Go to `about:debugging` in your Firefox browser
3. Choose "Load Temporary Add-on" and select the `manifest.json` file in this cloned repo
4. Profit.

## Firefox Packaging
1. `cd` into this directory
2. Run `build.sh`
3. Upload the zip to Firefox Addon Developer Hub
