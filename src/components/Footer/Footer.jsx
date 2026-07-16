import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <span>© {year} Ivan — {t("footer.rights")}</span>
      <div className={styles.legal}>
        <Link to="/impressum">{t("footer.impressum")}</Link>
        <Link to="/datenschutz">{t("footer.datenschutz")}</Link>
      </div>
    </footer>
  );
}
