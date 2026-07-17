// Uploads every image in a local folder to Cloudinary and prints ready-to-paste
// entries for src/data/projects.js or src/data/arts.js.
//
// Usage:
//   node scripts/upload-to-cloudinary.js ./photos/example-apartment projects/example-apartment
//
// Requires a .env file (see .env.example) — never commit .env, it holds your API secret.

import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const [, , localFolder, cloudinaryPrefix] = process.argv;

if (!localFolder || !cloudinaryPrefix) {
  console.error(
    "Usage: node scripts/upload-to-cloudinary.js <local-folder> <cloudinary-prefix>\n" +
      "Example: node scripts/upload-to-cloudinary.js ./photos/example-apartment projects/example-apartment"
  );
  process.exit(1);
}

if (!process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  console.error(
    "Missing CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET.\n" +
      "Copy .env.example to .env and fill in your credentials (see Cloudinary dashboard -> View API Keys)."
  );
  process.exit(1);
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "bscnfhck",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

async function run() {
  const files = fs
    .readdirSync(localFolder)
    .filter((f) => IMAGE_EXTENSIONS.includes(path.extname(f).toLowerCase()))
    .sort();

  if (files.length === 0) {
    console.error(`No images found in ${localFolder}`);
    process.exit(1);
  }

  console.log(`Uploading ${files.length} image(s) from ${localFolder}...\n`);

  const results = [];

  for (const [i, file] of files.entries()) {
    const publicId = `${cloudinaryPrefix}/${String(i + 1).padStart(2, "0")}`;
    const filePath = path.join(localFolder, file);

    process.stdout.write(`  ${file} -> ${publicId} ... `);
    const res = await cloudinary.uploader.upload(filePath, {
      public_id: publicId,
      overwrite: true,
    });
    console.log("done");

    results.push({ publicId: res.public_id, originalFile: file });
  }

  console.log("\n--- Paste into your data file ---\n");
  console.log("images: [");
  for (const r of results) {
    console.log(`  { src: cld("${r.publicId}", { width: 1600 }), caption: "" },`);
  }
  console.log("],");
}

run().catch((err) => {
  console.error("Upload failed:", err.message || err);
  process.exit(1);
});
