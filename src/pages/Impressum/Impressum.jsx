import { useLanguage } from "../../context/LanguageContext";
import styles from "../Projects/Projects.module.css";

export default function Impressum() {
  const { t } = useLanguage();
  return (
    <section className={styles.page}>
      <h1>{t("footer.impressum")}</h1>
      <p className={styles.note}>Add real address, contact, Steuernummer.</p>
    </section>
  );
}
