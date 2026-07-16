import { useLanguage } from "../../context/LanguageContext";
import { projects } from "../../data/projects";
import GalleryGrid from "../../components/ProjectsList/GalleryGrid";
import styles from "./Projects.module.css";

export default function Projects() {
  const { t } = useLanguage();
  const items = projects.map((p) => ({
    slug: p.slug,
    title: p.title,
    cover: p.cover,
    meta: `${p.location} — ${p.year}`,
  }));

  return (
    <section className={styles.page}>
      <h1>{t("projects.title")}</h1>
      <p className={styles.subtitle}>{t("projects.subtitle")}</p>
      <GalleryGrid items={items} basePath="/projects" />
    </section>
  );
}
