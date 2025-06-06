// generate-sitemap.js (ES module version)

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const domain = "https://www.eandp.events";
const pages = ["/", "/corporate", "/5-questions", "/weddings"];

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

// Get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "public", "sitemap.xml");

try {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, sitemap);
  console.log("✅ Sitemap generated at public/sitemap.xml");
} catch (err) {
  console.error("❌ Error generating sitemap:", err);
  process.exit(1);
}
