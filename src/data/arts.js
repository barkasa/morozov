// One entry per personal creative piece/collection (Blender, drawing, etc.)
// `images[].id` is the Cloudinary public_id (no transformations baked in —
// GalleryGrid/PhotoGrid/Lightbox each request their own size from it).
// The first image is used as the list-page cover automatically.
// `description` is per-language: { en, de, ru }.
//
// After uploading photos with `npm run upload-images -- ./photos/your-art arts/your-art`,
// take the printed public_id(s) from the console and paste them into `id` below.
export const arts = [
  {
    slug: "art_blender",
    title: "3D Blender",
    medium: "Blender",
    year: 2025,
    description: {
      en: "Short description — what it is, technique, inspiration.",
      de: "Kurze Beschreibung — was es ist, Technik, Inspiration.",
      ru: "Короткое описание — что это, техника, вдохновение.",
    },
    images: [
      { id: "arts_blender_1_yyhbvq", caption: "" },
      { id: "arts_blender_3_enzrjt", caption: "" },
    ],
  },
  {
    slug: "art_3ddd",
    title: "3ds Max",
    medium: "3ds Max",
    year: 2025,
    description: {
      en: "Short description — what it is, technique, inspiration.",
      de: "Kurze Beschreibung — was es ist, Technik, Inspiration.",
      ru: "Короткое описание — что это, техника, вдохновение.",
    },
    images: [{ id: "Antiquität_hguggq", caption: "" }],
  },
  {
    slug: "art_flying_castle",
    title: "Flying Castle",
    medium: "3ds Max",
    year: 2025,
    description: {
      en: "Short description — what it is, technique, inspiration.",
      de: "Kurze Beschreibung — was es ist, Technik, Inspiration.",
      ru: "Короткое описание — что это, техника, вдохновение.",
    },
    images: [{ id: "flying_castle_1_kmghr9", caption: "" }],
  },
];
