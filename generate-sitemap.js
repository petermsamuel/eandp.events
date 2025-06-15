const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.eandp.events';

const staticRoutes = [
  '/',
  '/weddings',
  '/corporate',
  '/5-questions',
  '/blog',
];

const blogPostsDir = path.join(__dirname, 'src/pages/blog/');
const blogSlugs = fs
  .readdirSync(blogPostsDir)
  .filter(file => file.endsWith('.tsx'))
  .map(file => `/blog/${file.replace('.tsx', '')}`);

const allRoutes = [...staticRoutes, ...blogSlugs];

const sitemapEntries = allRoutes
  .map(route => {
    return `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.7'}</priority>
  </url>`;
  })
  .join('');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'public/sitemap.xml'), sitemap);

console.log('Sitemap generated at public/sitemap.xml');
