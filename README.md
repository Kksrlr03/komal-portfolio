# Komal Sriram portfolio

## Open locally

Extract the entire ZIP into a normal folder first. Open index.html in Chrome or Edge. Keep the css, js and assets folders alongside it. Do not open the HTML while it is still inside the ZIP.

For a local HTTP preview, run `python -m http.server 8877` in this folder and visit http://localhost:8877.

## Push to GitHub

Push the extracted files into the repository root, including the hidden .github folder. No npm install or build step is needed.

For GitHub Pages, select Settings → Pages → Source → GitHub Actions. The workflow deploys pushes to main and also supports manual runs. Enable Pages once in repository settings.

## Bundled files

All portfolio images, agency previews, the ProdLoca video, résumé and academic documents are local. The site has no remote runtime, font or animation dependency.

The agency demo websites, WhatsApp and LinkedIn remain external links and require internet access.

## Edit

Hero: js/sriram-portfolio.js and css/sriram-portfolio.css.
Sections: js/portfolio-rebuild.js and css/portfolio-rebuild.css.
Details: js/komal-content-data.js.


The opening screen renders a textured 3D portrait relief with automatic progress, a smooth exit, reduced-motion support and a 5.5-second maximum timeout. Browsers without usable WebGL display an animated portrait fallback.
