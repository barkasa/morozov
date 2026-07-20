import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { projects } from "../../data/projects";
import { arts } from "../../data/arts";
import { cld } from "../../utils/cloudinary";
import styles from "./Home.module.css";

// Decorative cutout renders (transparent PNG/WebP) used for the two
// "gallery link" cards on the outer edges. Leave as null to hide that card.
const DECOR_LEFT_ID = "nterior_lr6lcg";
const DECOR_RIGHT_ID = "art_fsmqhz";

// Flattens every image from every entry into one pool, then picks one at
// random — so the showcase can spotlight any photo from any project/art,
// not just covers.
function pickRandom(entries) {
  const pool = entries.flatMap((entry) =>
    entry.images.map((img) => ({ slug: entry.slug, title: entry.title, imageId: img.id }))
  );
  if (pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

export default function Home() {
  const { t } = useLanguage();
  // Lazy initializer -> computed once per page load, not on every re-render.
  const [projectPick] = useState(() => pickRandom(projects));
  const [artPick] = useState(() => pickRandom(arts));

  // All four cards share one visual language: same shape, same hover glow.
  // Left pair = projects accent, right pair = arts accent.
  const cards = [
    DECOR_LEFT_ID && {
      key: "projects-gallery",
      to: "/projects",
      accent: "projects",
      imageId: DECOR_LEFT_ID,
      tag: t("nav.projects"),
      label: t("home.cta_projects"),
      dim: true,
    },
    projectPick && {
      key: "project-pick",
      to: `/projects/${projectPick.slug}`,
      accent: "projects",
      imageId: projectPick.imageId,
      tag: t("nav.projects"),
      label: projectPick.title,
      dim: false,
      galleryTo: "/projects",
      galleryLabel: t("home.cta_projects"),
    },
    artPick && {
      key: "art-pick",
      to: `/arts/${artPick.slug}`,
      accent: "arts",
      imageId: artPick.imageId,
      tag: t("nav.arts"),
      label: artPick.title,
      dim: false,
      galleryTo: "/arts",
      galleryLabel: t("home.cta_arts"),
    },
    DECOR_RIGHT_ID && {
      key: "arts-gallery",
      to: "/arts",
      accent: "arts",
      imageId: DECOR_RIGHT_ID,
      tag: t("nav.arts"),
      label: t("home.cta_arts"),
      dim: true,
    },
  ].filter(Boolean);

  return (
    <>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>{t("home.eyebrow")}</span>
        <h1 className={styles.title}>{t("home.title")}</h1>
        <p className={styles.subtitle}>{t("home.subtitle")}</p>
      </section>

      <section
        className={styles.showcase}
        style={{ gridTemplateColumns: `repeat(${cards.length}, 1fr)` }}
      >
        {cards.map((card) => (
          <div key={card.key} className={`${styles.cardWrap} ${card.dim ? styles.tileDecor : ""}`}>
            <Link
              to={card.to}
              className={`${styles.tile} ${card.accent === "arts" ? styles.tileArts : styles.tileProjects}`}
            >
              <img
                src={cld(card.imageId, { width: 900, height: 1150 })}
                alt={card.label}
              />
              <div className={styles.tileOverlay}>
                <span className={styles.tileTag}>{card.tag}</span>
                <span className={styles.tileLabel}>{card.label}</span>
              </div>
            </Link>

            {card.galleryTo && (
              <Link
                to={card.galleryTo}
                className={`${styles.mobileViewAll} ${card.accent === "arts" ? styles.viewAllArts : styles.viewAllProjects}`}
              >
                {card.galleryLabel}
              </Link>
            )}
          </div>
        ))}
      </section>
    </>
  );
}
