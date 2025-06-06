// generate-sitemap.js

const fs = require("fs");
const path = require("path");

const domain = "https://www.eandp.events";

const pages = [
  "/",               // Homepage
  "/corporate",      // You mentioned this page
  "/5-questions",    // Actual destination
  "/weddings",       // If this is a standalone route
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${domain}${page}</loc>
    </url>
  `
    )
    .join("")}
</urlset>
`;

const filePath = path.join(__dirname, "public", "sitemap.xml");

// Ensure public directory exists
fs.mkdirSync(path.dirname(filePath), { recursive: true });

fs.writeFileSync(filePath, sitemap);

console.log("Sitemap generated at public/sitemap.xml");
