import { Link } from "react-router-dom";
import { cld } from "../../utils/cloudinary";
import styles from "./NextUp.module.css";

// items: full data array (projects or arts), currentSlug: current item's slug,
// basePath: "/projects" or "/arts", label: translated "Next" word
export default function NextUp({ items, currentSlug, basePath, label }) {
  const index = items.findIndex((item) => item.slug === currentSlug);
  if (index === -1 || items.length < 2) return null;

  const next = items[(index + 1) % items.length];
  const coverId = next.images?.[0]?.id;

  return (
    <Link to={`${basePath}/${next.slug}`} className={styles.nextUp}>
      <span className={styles.text}>
        <span className={styles.label}>{label}</span>
        <span className={styles.title}>{next.title}</span>
      </span>
      <span className={styles.wire} aria-hidden="true" />
      {coverId && (
        <span className={styles.thumbWrap}>
          <span className={styles.thumbImg}>
            <img src={cld(coverId, { width: 200, height: 200 })} alt={next.title} loading="lazy" />
          </span>
        </span>
      )}
    </Link>
  );
}
