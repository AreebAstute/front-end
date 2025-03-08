// Pre-render the app into static HTML.
// Run `yarn generate` and then `dist/static` can be served as a static site.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8');

// Dynamically import the render function from the server entry
const { render } = await import('./dist/server/entry-server.js');

// Determine routes to pre-render from src/pages
const routesToPrerender = fs
  .readdirSync(toAbsolute('src/pages'))
  .map((file) => {
    const name = file.replace(/\.jsx$/, '').toLowerCase();
    return name === 'home' ? `/` : `/${name}`;
  });

(async () => {
  // Pre-render each route...
  for (const url of routesToPrerender) {
    const context = {};
    const appHtml = await render(url, context);

    const html = template.replace(`<!--app-html-->`, appHtml);

    const filePath = `dist/static${url === '/' ? '/index' : url}.html`;
    fs.writeFileSync(toAbsolute(filePath), html);
    console.log('Pre-rendered:', filePath);
  }
})();
