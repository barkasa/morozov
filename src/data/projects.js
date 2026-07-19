// One entry per interior design project.
// `images[].id` is the Cloudinary public_id (no transformations baked in —
// GalleryGrid/PhotoGrid/Lightbox each request their own size from it).
// The first image is used as the list-page cover automatically.
// `description` is per-language: { en, de, ru }.
//
// IMPORTANT: `slug` must be unique for every project.
//
// After uploading photos with `npm run upload-images -- ./photos/your-project projects/your-project`,
// take the printed public_id(s) from the console and paste them into `id` below.
export const projects = [
  {
    slug: "apartment_1",
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
      { id: "project_1_2_tpgf8i", caption: "Kitchen" },
    ],
  },
  {
    slug: "apartment_2",
    title: "Example Apartment",
    year: 2024,
    location: "Düsseldorf",
    description: {
      en: "Short description of the project, style, materials used.",
      de: "Kurze Beschreibung des Projekts, Stil, verwendete Materialien.",
      ru: "Краткое описание проекта, стиль, использованные материалы.",
    },
    images: [
      { id: "project_2_1_jncn3m", caption: "Living room" },
      { id: "project_2_2_szlgve", caption: "Kitchen" },
    ],
  },
  {
    slug: "apartment_3",
    title: "Example Apartment",
    year: 2024,
    location: "Düsseldorf",
    description: {
      en: "Short description of the project, style, materials used.",
      de: "Kurze Beschreibung des Projekts, Stil, verwendete Materialien.",
      ru: "Краткое описание проекта, стиль, использованные материалы.",
    },
    images: [
      { id: "project_3_1_vgqd5k", caption: "Living room" },
      { id: "project_3_2_lfeujo", caption: "Kitchen" },
    ],
  },
  {
    slug: "apartment_4",
    title: "Example Apartment",
    year: 2024,
    location: "Düsseldorf",
    description: {
      en: "Short description of the project, style, materials used.",
      de: "Kurze Beschreibung des Projekts, Stil, verwendete Materialien.",
      ru: "Краткое описание проекта, стиль, использованные материалы.",
    },
    images: [{ id: "project_4_1_akxiu3", caption: "Living room" }],
  },
  {
    slug: "apartment_5",
    title: "Example Apartment",
    year: 2024,
    location: "Düsseldorf",
    description: {
      en: "Short description of the project, style, materials used.",
      de: "Kurze Beschreibung des Projekts, Stil, verwendete Materialien.",
      ru: "Краткое описание проекта, стиль, использованные материалы.",
    },
    images: [{ id: "project_5_1_xfp6jv", caption: "Living room" }],
  },
  {
    slug: "apartment_6",
    title: "Example Apartment",
    year: 2024,
    location: "Düsseldorf",
    description: {
      en: "Short description of the project, style, materials used.",
      de: "Kurze Beschreibung des Projekts, Stil, verwendete Materialien.",
      ru: "Краткое описание проекта, стиль, использованные материалы.",
    },
    images: [{ id: "project_6_1_rrjurp", caption: "Living room" }],
  },
];
