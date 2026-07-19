import { useState } from "react";
import { cld } from "../../utils/cloudinary";
import Lightbox from "../Lightbox/Lightbox";
import styles from "./PhotoGrid.module.css";

// images: [{ id: cloudinary public_id, caption }]
// aspect: "square" (Arts, 1200x1200) or "4:3" (Projects, 1200x900)
export default function PhotoGrid({ images, aspect = "4:3" }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const gridDims = aspect === "square" ? { width: 700, height: 700 } : { width: 700, height: 525 };
  const fullDims = aspect === "square" ? { width: 2000, height: 2000 } : { width: 2000, height: 1500 };

  // Lightbox gets the full-resolution crop for each image
  const fullImages = images.map((img) => ({
    src: cld(img.id, fullDims),
    caption: img.caption,
  }));

  return (
    <>
      <div className={`${styles.grid} ${aspect === "square" ? styles.square : styles.wide}`}>
        {images.map((img, i) => (
          <button
            key={i}
            className={styles.item}
            onClick={() => setActiveIndex(i)}
            aria-label={`Open image ${i + 1} fullscreen`}
          >
            <img src={cld(img.id, gridDims)} alt={img.caption || ""} loading="lazy" />
          </button>
        ))}
      </div>

      <Lightbox
        images={fullImages}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  );
}
