import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Home.module.css";

export default function Home() {
  const { t } = useLanguage();

  return (
    <section className={styles.hero}>
      <span className={styles.eyebrow}>{t("home.eyebrow")}</span>
      <h1 className={styles.title}>{t("home.title")}</h1>
      <p className={styles.subtitle}>{t("home.subtitle")}</p>

      <div className={styles.ctas}>
        <Link to="/projects" className={`${styles.cta} ${styles.ctaProjects}`}>
          <span className={styles.ctaTag}>I</span> {t("home.cta_projects")}
        </Link>
        <Link to="/arts" className={`${styles.cta} ${styles.ctaArts}`}>
          <span className={styles.ctaTag}>II</span> {t("home.cta_arts")}
        </Link>
      </div>
    </section>
  );
}
