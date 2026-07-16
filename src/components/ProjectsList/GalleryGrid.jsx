import { Link } from "react-router-dom";
import styles from "./GalleryGrid.module.css";

// items: [{ slug, title, cover, meta (year/medium/location string) }]
// basePath: "/projects" or "/arts"
export default function GalleryGrid({ items, basePath }) {
  return (
    <div className={styles.grid}>
      {items.map((item, i) => (
        <Link key={item.slug} to={`${basePath}/${item.slug}`} className={styles.card}>
          <span className={styles.tag}>{String(i + 1).padStart(2, "0")}</span>
          <div className={styles.imageWrap}>
            <img src={item.cover} alt={item.title} loading="lazy" />
          </div>
          <div className={styles.caption}>
            <h3>{item.title}</h3>
            {item.meta && <span className={styles.meta}>{item.meta}</span>}
          </div>
        </Link>
      ))}
    </div>
  );
}
