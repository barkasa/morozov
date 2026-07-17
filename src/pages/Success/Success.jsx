import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import styles from "../Projects/Projects.module.css";

export default function Success() {
  const { t } = useLanguage();
  return (
    <section className={styles.page}>
      <h1>{t("contacts.success")}</h1>
      <p className={styles.note}>
        <Link to="/">{t("notfound.cta")}</Link>
      </p>
    </section>
  );
}
