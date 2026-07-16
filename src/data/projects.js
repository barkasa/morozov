// One entry per interior design project.
// `images` will point to Cloudinary URLs once photos are migrated.
export const projects = [
  {
    slug: "example-apartment",
    title: "Example Apartment",
    year: 2024,
    location: "Düsseldorf",
    description: "Short description of the project, style, materials used.",
    cover: "/placeholder-cover.jpg",
    images: [
      { src: "/placeholder-1.jpg", caption: "Living room" },
      { src: "/placeholder-2.jpg", caption: "Kitchen" },
    ],
  },
];
