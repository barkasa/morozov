import { useParams, Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { useLanguage } from "../../context/LanguageContext";
import PhotoGrid from "../../components/PhotoGrid/PhotoGrid";
import NextUp from "../../components/NextUp/NextUp";
import Linkify from "../../components/Linkify/Linkify";
import Seo from "../../components/Seo/Seo";
import styles from "../Projects/Projects.module.css";

export default function ProjectDetail() {
  const { slug } = useParams();
  const { t, lang } = useLanguage();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className={styles.page}>
        <h1>Project not found</h1>
        <Link to="/projects">{t("projects.back")}</Link>
      </section>
    );
  }

  const description = project.description[lang] || project.description.en;

  return (
    <section className={styles.page}>
      <Seo title={`${project.title} — Ivan Morozov`} description={description} />
      <Link to="/projects" className={styles.backLink}>
        {t("projects.back")}
      </Link>
      <span className={styles.subtitle}>{project.location} — {project.year}</span>
      <h1>{project.title}</h1>
      <p className={styles.note}>
        <Linkify text={description} />
      </p>
      <PhotoGrid images={project.images} aspect="4:3" />
      <NextUp items={projects} currentSlug={slug} basePath="/projects" label={t("projects.next")} />
    </section>
  );
}
