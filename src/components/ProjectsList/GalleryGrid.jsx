import { Link } from "react-router-dom";
import { cld } from "../../utils/cloudinary";
import styles from "./GalleryGrid.module.css";

// items: [{ slug, title, cover (Cloudinary public_id), meta }]
// basePath: "/projects" or "/arts"
// aspect: "square" (1200x1200, Arts) or "4:3" (1200x900, Projects)
export default function GalleryGrid({ items, basePath, aspect = "4:3" }) {
  const dims = aspect === "square" ? { width: 600, height: 600 } : { width: 600, height: 450 };

  return (
    <div className={`${styles.grid} ${aspect === "square" ? styles.square : styles.wide}`}>
      {items.map((item, i) => (
        <Link key={item.slug} to={`${basePath}/${item.slug}`} className={styles.card}>
          <span className={styles.tag}>{String(i + 1).padStart(2, "0")}</span>
          <div className={styles.imageWrap}>
            {item.cover && (
              <img src={cld(item.cover, dims)} alt={item.title} loading="lazy" />
            )}
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
