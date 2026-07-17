import { useLanguage } from "../../context/LanguageContext";
import styles from "../Impressum/Legal.module.css";

export default function Datenschutz() {
  const { t } = useLanguage();

  return (
    <section className={styles.page}>
      <h1>{t("datenschutz.title")}</h1>
      <p>{t("datenschutz.intro")}</p>

      <div className={styles.block}>
        <h2>{t("datenschutz.controllerHeading")}</h2>
        <p>{t("datenschutz.controllerText")}</p>
      </div>

      <div className={styles.block}>
        <h2>{t("datenschutz.formHeading")}</h2>
        <p>{t("datenschutz.formText")}</p>
      </div>

      <div className={styles.block}>
        <h2>{t("datenschutz.hostingHeading")}</h2>
        <p>{t("datenschutz.hostingText")}</p>
      </div>

      <div className={styles.block}>
        <h2>{t("datenschutz.storageHeading")}</h2>
        <p>{t("datenschutz.storageText")}</p>
      </div>

      <div className={styles.block}>
        <h2>{t("datenschutz.rightsHeading")}</h2>
        <p>{t("datenschutz.rightsText")}</p>
      </div>

      <div className={styles.block}>
        <h2>{t("datenschutz.contactHeading")}</h2>
        <p>{t("datenschutz.contactText")}</p>
      </div>
    </section>
  );
}
