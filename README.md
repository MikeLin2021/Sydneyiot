# Sydney IoT Platform — complete source

This package contains the canonical files used to reproduce the Sydney IoT Platform page. The deployable files are deliberately placed at the package root, so no `dist` folder is required.

## Run locally

1. Open a terminal in this folder.
2. Run `python3 -m http.server 8080`.
3. Visit `http://localhost:8080/#research`.

You may also open `index.html` directly in a browser.

## Deploy

Upload `index.html`, `styles.css` and `script.js` together to your domain's public document root, commonly `public_html`, `www` or `htdocs`.

## File inventory

- `index.html` — complete semantic page content, inline SVG diagrams and links
- `styles.css` — complete responsive styling and CSS animation
- `script.js` — navigation, project selector and reveal interactions

## Media note

The canonical page has no local image, video, audio or font files. Its system diagram and ECG chart are inline SVG; other visual elements and motion are produced by CSS and JavaScript.

## External dependencies

- DM Sans and Manrope are requested from Google Fonts.
- Project and case-study buttons link to pages on `sydneyiot.com` and `sydney.edu.au`.

No build system or server-side runtime is required.
