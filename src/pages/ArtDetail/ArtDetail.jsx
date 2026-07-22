import { useParams, Link } from "react-router-dom";
import { arts } from "../../data/arts";
import { useLanguage } from "../../context/LanguageContext";
import PhotoGrid from "../../components/PhotoGrid/PhotoGrid";
import NextUp from "../../components/NextUp/NextUp";
import Linkify from "../../components/Linkify/Linkify";
import Seo from "../../components/Seo/Seo";
import styles from "../Projects/Projects.module.css";

export default function ArtDetail() {
  const { slug } = useParams();
  const { t, lang } = useLanguage();
  const art = arts.find((a) => a.slug === slug);

  if (!art) {
    return (
      <section className={styles.page}>
        <h1>Art not found</h1>
        <Link to="/arts">{t("arts.back")}</Link>
      </section>
    );
  }

  const description = art.description[lang] || art.description.en;

  return (
    <section className={styles.page}>
      <Seo title={`${art.title} — Ivan Morozov`} description={description} />
      <Link to="/arts" className={styles.backLink}>
        {t("arts.back")}
      </Link>
      <span className={styles.subtitle}>{art.medium} — {art.year}</span>
      <h1>{art.title}</h1>
      <p className={styles.note}>
        <Linkify text={description} />
      </p>
      <PhotoGrid images={art.images} aspect="square" />
      <NextUp items={arts} currentSlug={slug} basePath="/arts" label={t("arts.next")} />
    </section>
  );
}
