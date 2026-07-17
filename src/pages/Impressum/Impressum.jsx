import { useLanguage } from "../../context/LanguageContext";
import styles from "./Legal.module.css";

export default function Impressum() {
  const { t } = useLanguage();
  const address = t("impressum.address");

  return (
    <section className={styles.page}>
      <h1>{t("impressum.title")}</h1>

      <div className={styles.block}>
        <h2>{t("impressum.infoHeading")}</h2>
        <p>{t("impressum.name")}</p>
        <p className={styles.label}>{t("impressum.addressHeading")}</p>
        {Array.isArray(address) && address.map((line) => <p key={line}>{line}</p>)}
      </div>

      <div className={styles.block}>
        <p className={styles.label}>{t("impressum.contactHeading")}</p>
        <p>
          <a href="mailto:morosow.iwan@gmail.com">morosow.iwan@gmail.com</a>
        </p>
        <p>
          <a href="tel:+4915752647752">+49 1575 2647752</a>
        </p>
      </div>

      <div className={styles.block}>
        <h2>{t("impressum.responsibleHeading")}</h2>
        <p>{t("impressum.responsibleText")}</p>
      </div>

      <div className={styles.block}>
        <h2>{t("impressum.disputeHeading")}</h2>
        <p>{t("impressum.disputeText")}</p>
      </div>

      <div className={styles.block}>
        <h2>{t("impressum.liabilityHeading")}</h2>
        <p>{t("impressum.liabilityText")}</p>
      </div>

      <p className={styles.note}>{t("impressum.note")}</p>
    </section>
  );
}
