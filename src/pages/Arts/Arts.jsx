import { useLanguage } from "../../context/LanguageContext";
import { arts } from "../../data/arts";
import GalleryGrid from "../../components/ProjectsList/GalleryGrid";
import styles from "../Projects/Projects.module.css";

export default function Arts() {
  const { t } = useLanguage();
  const items = arts.map((a) => ({
    slug: a.slug,
    title: a.title,
    cover: a.cover,
    meta: `${a.medium} — ${a.year}`,
  }));

  return (
    <section className={styles.page}>
      <h1>{t("arts.title")}</h1>
      <p className={styles.subtitle}>{t("arts.subtitle")}</p>
      <GalleryGrid items={items} basePath="/arts" />
    </section>
  );
}
