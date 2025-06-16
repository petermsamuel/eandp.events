import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 🔧 Required for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.eandp.events';

const staticRoutes = [
  '/',
  '/weddings',
  '/corporate',
  '/5-questions',
  '/blog',
];

const blogPostsDir = path.join(__dirname, 'src/pages/blog/');
const files = await fs.readdir(blogPostsDir);

// ✅ Add this debug log:
console.log('🧪 Blog files found:', files);

const blogSlugs = files
  .filter(file => file.endsWith('.tsx'))
  .map(file => `/blog/${file.replace('.tsx', '')}`);

const allRoutes = [...staticRoutes, ...blogSlugs];

const sitemapEntries = allRoutes.map(route => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.7'}</priority>
  </url>
`).join('');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;

await fs.writeFile(path.join(__dirname, 'public/sitemap.xml'), sitemap);

console.log('Sitemap generated at public/sitemap.xml');
