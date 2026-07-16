import { useParams, Link } from "react-router-dom";
import { projects } from "../../data/projects";
import PhotoGrid from "../../components/PhotoGrid/PhotoGrid";
import styles from "../Projects/Projects.module.css";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className={styles.page}>
        <h1>Project not found</h1>
        <Link to="/projects">← Back to projects</Link>
      </section>
    );
  }

  return (
    <section className={styles.page}>
      <span className={styles.subtitle}>{project.location} — {project.year}</span>
      <h1>{project.title}</h1>
      <p className={styles.note}>{project.description}</p>
      <PhotoGrid images={project.images} />
    </section>
  );
}
