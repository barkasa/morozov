import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import Seo from "../../components/Seo/Seo";
import styles from "../Projects/Projects.module.css";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <section className={styles.page}>
      <Seo title="404 — Ivan Morozov" />
      <h1>{t("notfound.title")}</h1>
      <p className={styles.note}>{t("notfound.text")}</p>
      <Link to="/">{t("notfound.cta")}</Link>
    </section>
  );
}
