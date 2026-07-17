// One entry per interior design project.
// `images[].id` is the Cloudinary public_id (no transformations baked in —
// GalleryGrid/PhotoGrid/Lightbox each request their own size from it).
// The first image is used as the list-page cover automatically.
// `description` is per-language: { en, de, ru }.
//
// After uploading photos with `npm run upload-images -- ./photos/your-project projects/your-project`,
// take the printed public_id(s) from the console and paste them into `id` below.
export const projects = [
  {
    slug: "example-apartment",
    title: "Example Apartment",
    year: 2024,
    location: "Düsseldorf",
    description: {
      en: "Short description of the project, style, materials used.",
      de: "Kurze Beschreibung des Projekts, Stil, verwendete Materialien.",
      ru: "Краткое описание проекта, стиль, использованные материалы.",
    },
    images: [
      { id: "project_1_afupmz", caption: "Living room" },
      { id: "projects/example-apartment/02", caption: "Kitchen" },
    ],
  },
];
