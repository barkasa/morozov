import { useLanguage } from "../../context/LanguageContext";
import Seo from "../../components/Seo/Seo";
import styles from "./About.module.css";

export default function About() {
  const { t } = useLanguage();
  const tools = t("about.tools");
  const experience = t("about.experience");

  return (
    <section className={styles.page}>
      <Seo title="About — Ivan Morozov" description={t("about.intro")} />
      <div className={styles.intro}>
        <div className={styles.photoWrap}>
          <img
            src="https://res.cloudinary.com/bscnfhck/image/upload/v1784229925/foto_me_rk1pam.webp"
            alt="Ivan Morozov"
            className={styles.photo}
          />
        </div>

        <div className={styles.introText}>
          <span className={styles.eyebrow}>{t("about.eyebrow")}</span>
          <h1>{t("about.title")}</h1>
          <p className={styles.role}>{t("about.role")}</p>
          <p className={styles.paragraph}>{t("about.intro")}</p>
        </div>
      </div>

      <div className={styles.bioBlock}>
        <h2>{t("about.bioHeading")}</h2>
        <p className={styles.paragraph}>{t("about.bio")}</p>
        <p className={styles.paragraph}>{t("about.education")}</p>

        <div className={styles.tools}>
          <span className={styles.toolsLabel}>{t("about.toolsHeading")}</span>
          <ul className={styles.toolsList}>
            {Array.isArray(tools) &&
              tools.map((tool) => <li key={tool}>{tool}</li>)}
          </ul>
        </div>
      </div>

      <div className={styles.timeline}>
        <h2>{t("about.experienceHeading")}</h2>
        <ol className={styles.timelineList}>
          {Array.isArray(experience) &&
            experience.map((item, i) => (
              <li key={i}>
                <span className={styles.timelineTag}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={styles.timelinePeriod}>{item.period}</span>
                <p>{item.text}</p>
              </li>
            ))}
        </ol>
      </div>

      <p className={styles.closing}>{t("about.closing")}</p>

      <div className={styles.links}>
        <a
          href="https://drive.google.com/file/d/1jSvHsOlQKvW1fB306OsptpZD-e2OiRGS/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          {t("about.linkCv")}
        </a>
        <a
          href="https://drive.google.com/file/d/18DR1zuvWpr4BmM_1Hl9s0bT66fMvSAMS/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          {t("about.linkCertificate")}
        </a>
        <a href="https://3dsky.org/users/morosow/models" target="_blank" rel="noreferrer">
          {t("about.linkModels")}
        </a>
      </div>

      <p className={styles.tagline}>{t("about.tagline")}</p>
    </section>
  );
}
