import { useParams, Link } from "react-router-dom";
import { arts } from "../../data/arts";
import PhotoGrid from "../../components/PhotoGrid/PhotoGrid";
import styles from "../Projects/Projects.module.css";

export default function ArtDetail() {
  const { slug } = useParams();
  const art = arts.find((a) => a.slug === slug);

  if (!art) {
    return (
      <section className={styles.page}>
        <h1>Art not found</h1>
        <Link to="/arts">← Back to arts</Link>
      </section>
    );
  }

  return (
    <section className={styles.page}>
      <span className={styles.subtitle}>{art.medium} — {art.year}</span>
      <h1>{art.title}</h1>
      <p className={styles.note}>{art.description}</p>
      <PhotoGrid images={art.images} />
    </section>
  );
}
