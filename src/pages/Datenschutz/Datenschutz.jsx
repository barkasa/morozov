import { useLanguage } from "../../context/LanguageContext";
import styles from "../Projects/Projects.module.css";

export default function Datenschutz() {
  const { t } = useLanguage();
  return (
    <section className={styles.page}>
      <h1>{t("footer.datenschutz")}</h1>
      <p className={styles.note}>GDPR-compliant privacy policy text goes here.</p>
    </section>
  );
}
