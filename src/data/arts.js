// One entry per personal creative piece/collection (Blender, drawing, etc.)
// `images[].id` is the Cloudinary public_id (no transformations baked in —
// GalleryGrid/PhotoGrid/Lightbox each request their own size from it).
// The first image is used as the list-page cover automatically.
// `description` is per-language: { en, de, ru }.
//
// IMPORTANT: `slug` must be unique, lowercase, no spaces (it goes straight
// into the URL as /arts/<slug>).
//
// After uploading photos with `npm run upload-images -- ./photos/your-art arts/your-art`,
// take the printed public_id(s) from the console and paste them into `id` below.
export const arts = [
  {
    slug: "art_blender_1",
    title: "3D Blender",
    medium: "Blender",
    year: 2025,
    description: {
      en: "Short description — what it is, technique, inspiration.",
      de: "Kurze Beschreibung — was es ist, Technik, Inspiration.",
      ru: "Короткое описание — что это, техника, вдохновение.",
    },
    images: [{ id: "arts_blender_1_yyhbvq", caption: "" }],
  },
  {
    slug: "star-wars-gravity-bike",
    title: "Star Wars Gravity Bike",
    medium: "Blender",
    year: 2023,
    description: {
      en: "A Star Wars-inspired gravity bike — the kind of speeder bike that many beloved characters from the Star Wars universe have raced. Created during a two-week online workshop at SHOK School under the guidance of Oleg Kononykhin in Blender, where every stage was reviewed and evaluated to advance further. This work is a particular source of pride, as it was featured as the cover artwork for the workshop and received high praise from both participants and instructors. It was also showcased in Oleg Kononykhin's YouTube tutorial https://www.youtube.com/watch?v=ITlLUrr_DFU on creating Grogu (at 0:46), where he highlighted the workshop and used my render as an example of student work — an honor I truly appreciate.",
      de: "Ein von Star Wars inspirierter Gravity Bike – das Modell eines Speeder-Bikes, wie es viele beliebte Charaktere aus dem Star-Wars-Universum gefahren sind. Entstanden während eines zweiwöchigen Online-Workshops an der SHOK School unter der Leitung von Oleg Kononykhin in Blender, bei dem jeder Schritt begutachtet und bewertet wurde, um weiterzukommen. Diese Arbeit ist für mich ein besonderer Stolz, da sie als Coverbild des Workshops ausgewählt wurde und sowohl bei den Teilnehmern als auch bei den Lehrkräften hohe Anerkennung fand. Sie wurde außerdem in Oleg Kononykhins YouTube-Tutorial https://www.youtube.com/watch?v=ITlLUrr_DFU zur Erstellung von Grogu (bei 0:46) gezeigt, in dem er den Workshop vorstellte und meinen Render als Beispiel für Schülerarbeit verwendete – eine Ehre, die ich sehr zu schätzen weiß.",
      ru: "Гравибайк в стиле Star Wars — спидербайк, на котором гоняли многие любимые герои из вселенной Star Wars. Создан во время двухнедельного онлайн-воркшопа в SHOK School под руководством Олега Кононыхина в Blender, где каждый этап контролировался и оценивался для прохождения дальше. Эта работа — особый повод для гордости, так как она была поставлена на обложку воркшопа и высоко оценена среди всех участников и учителей. Она также была показана в YouTube-уроке https://www.youtube.com/watch?v=ITlLUrr_DFU Олега Кононыхина по созданию Грогу (на 0:46), где он рассказывал о воркшопе и использовал мой рендер как пример работы ученика — честь, которой я очень дорожу.",
    },
    images: [
      { id: "arts_blender_3_enzrjt", caption: "" },
      { id: "arts_blender_4_npjxik", caption: "" },
      { id: "arts_blender_6_nhkrdj", caption: "" },
      { id: "arts_blender_9_h9nlwh", caption: "" },
      { id: "arts_blender_10_ifbnq2", caption: "" },
      { id: "arts_blender_11_k2bfmg", caption: "" },
      { id: "arts_blender_8_ozshlg", caption: "" },
      { id: "arts_blender_5_wox68e", caption: "" },
      { id: "arts_blender_7_skh2po", caption: "" },
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
    slug: "walking-castle-flying-city",
    title: "Flying City — Walking Castle Contest",
    medium: "3ds Max",
    year: 2024,
    description: {
      en: "A flying city inspired by the magical worlds of Studio Ghibli and 'Howl's Moving Castle'. Created for a 3D visualization competition hosted by SHOK School (Oleg Kononykhin), where participants were challenged to interpret the theme of a 'walking castle'. My work took 2nd place and was praised by Oleg during the final review — he said that for him, as a teacher, this work was one of his favorites. A truly inspiring project that combines architectural fantasy, atmospheric lighting, and a sense of wonder.",
      de: "Eine fliegende Stadt, inspiriert von den magischen Welten von Studio Ghibli und 'Das wandelnde Schloss'. Entstanden für einen 3D-Visualisierungswettbewerb der SHOK School (Oleg Kononykhin), bei dem die Teilnehmer aufgefordert waren, das Thema 'wandelndes Schloss' zu interpretieren. Meine Arbeit belegte den 2. Platz und wurde von Oleg im Rahmen der Finalbesprechung gelobt — er sagte, dass diese Arbeit für ihn als Lehrer eine seiner Favoriten sei. Ein wirklich inspirierendes Projekt, das architektonische Fantasie, atmosphärische Beleuchtung und ein Gefühl des Staunens vereint.",
      ru: "Летающий город, вдохновлённый волшебными мирами Studio Ghibli и фильмом «Ходячий замок». Создан для конкурса 3D-визуализации от SHOK School (Олег Кононыхин), где участникам предлагалось интерпретировать тему «ходячего замка». Моя работа заняла 2-е место и была отмечена Олегом во время финального разбора — он сказал, что для него, как для учителя, эта работа является одной из любимых. По-настоящему вдохновляющий проект, сочетающий архитектурную фантазию, атмосферное освещение и ощущение чуда.",
    },
    images: [
      { id: "flying_castle_1_bgesgo", caption: "Main view" },
      { id: "flying_castle_2_lkgkbp", caption: "Close-up detail" },
      { id: "flying_castle_3_gjvucs", caption: "Side view" },
      { id: "flying_castle_4_ka0rqd", caption: "Top view" },
      { id: "flying_castle_5_fvzefy", caption: "Bottom view" },
      { id: "flying_castle_6_h3phxi", caption: "Clay render (no textures)" },
    ],
  },
  {
    slug: "art_snowBall",
    title: "Snow Ball",
    medium: "3ds Max",
    year: 2025,
    description: {
      en: "Short description — what it is, technique, inspiration.",
      de: "Kurze Beschreibung — was es ist, Technik, Inspiration.",
      ru: "Короткое описание — что это, техника, вдохновение.",
    },
    images: [
      { id: "snowBall_1_gg6ggr", caption: "" },
      { id: "snowBall_2_v6fhc1", caption: "" },
    ],
  },
];
