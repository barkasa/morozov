import { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "../Lightbox/Lightbox";
import styles from "./PhotoGrid.module.css";

const breakpoints = { default: 3, 1024: 2, 640: 1 };

// images: [{ src, caption }]
export default function PhotoGrid({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <Masonry
        breakpointCols={breakpoints}
        className={styles.masonry}
        columnClassName={styles.column}
      >
        {images.map((img, i) => (
          <button
            key={i}
            className={styles.item}
            onClick={() => setActiveIndex(i)}
            aria-label={`Open image ${i + 1} fullscreen`}
          >
            <img src={img.src} alt={img.caption || ""} loading="lazy" />
          </button>
        ))}
      </Masonry>

      <Lightbox
        images={images}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  );
}
