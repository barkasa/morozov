// Generates public/sitemap.xml from the static routes + whatever is
// currently in src/data/projects.js and src/data/arts.js.
//
// Usage: npm run generate-sitemap
// Run this again any time you add/remove a project or art piece.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { projects } from "../src/data/projects.js";
import { arts } from "../src/data/arts.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = "https://morozov-tan.vercel.app";

const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/projects", priority: "0.9", changefreq: "weekly" },
  { path: "/arts", priority: "0.9", changefreq: "weekly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/contacts", priority: "0.5", changefreq: "yearly" },
  { path: "/impressum", priority: "0.2", changefreq: "yearly" },
  { path: "/datenschutz", priority: "0.2", changefreq: "yearly" },
];

const projectRoutes = projects.map((p) => ({
  path: `/projects/${p.slug}`,
  priority: "0.8",
  changefreq: "monthly",
}));

const artRoutes = arts.map((a) => ({
  path: `/arts/${a.slug}`,
  priority: "0.8",
  changefreq: "monthly",
}));

const allRoutes = [...staticRoutes, ...projectRoutes, ...artRoutes];
const today = new Date().toISOString().split("T")[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const outPath = path.join(__dirname, "../public/sitemap.xml");
fs.writeFileSync(outPath, xml);
console.log(`Sitemap written to ${outPath} with ${allRoutes.length} URLs.`);
