import { useLanguage } from "../../context/LanguageContext";
import styles from "../Projects/Projects.module.css";

export default function About() {
  const { t } = useLanguage();
  return (
    <section className={styles.page}>
      <h1>{t("about.title")}</h1>
      <p className={styles.note}>Bio, photo, skills — content to come.</p>
    </section>
  );
}
