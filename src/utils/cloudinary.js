const CLOUD_NAME = "bscnfhck";

/**
 * Build an optimized Cloudinary delivery URL from a public_id
 * (the string printed by scripts/upload-to-cloudinary.js after upload).
 *
 * cld("projects/example-apartment/01")
 * cld("projects/example-apartment/01", { width: 1200 })
 * cld("projects/example-apartment/01", { width: 800, height: 600 }) // cropped fill
 */
export function cld(publicId, { width, height } = {}) {
  const transforms = ["f_auto", "q_auto"];

  if (width && height) {
    transforms.push(`c_fill`, `g_auto`, `w_${width}`, `h_${height}`);
  } else if (width) {
    transforms.push(`c_limit`, `w_${width}`);
  }

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms.join(",")}/${publicId}`;
}
