import { useLanguage } from "../../context/LanguageContext";
import { projects } from "../../data/projects";
import GalleryGrid from "../../components/ProjectsList/GalleryGrid";
import Seo from "../../components/Seo/Seo";
import styles from "./Projects.module.css";

export default function Projects() {
  const { t } = useLanguage();
  const items = projects.map((p) => ({
    slug: p.slug,
    title: p.title,
    cover: p.images[0]?.id,
    meta: `${p.location} — ${p.year}`,
  }));

  return (
    <section className={styles.page}>
      <Seo
        title="Projects — Interior Design | Ivan Morozov"
        description={t("projects.subtitle")}
      />
      <h1>{t("projects.title")}</h1>
      <p className={styles.subtitle}>{t("projects.subtitle")}</p>
      <GalleryGrid items={items} basePath="/projects" aspect="4:3" />
    </section>
  );
}
