import { useEffect, useRef, useState } from "react";
import { HiOutlineX, HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import styles from "./Lightbox.module.css";

export default function Lightbox({ images, index, onClose, onNavigate }) {
  const touchStartX = useRef(null);
  const [zoomed, setZoomed] = useState(false);
  const open = index !== null && index !== undefined;

  useEffect(() => {
    setZoomed(false);
  }, [index]);

  useEffect(() => {
    if (!open) return;

    function handleKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    }

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, index, images, onClose, onNavigate]);

  if (!open) return null;

  const current = images[index];

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) onNavigate((index + 1) % images.length);
      else onNavigate((index - 1 + images.length) % images.length);
    }
    touchStartX.current = null;
  }

  // Click the image to zoom in on that point; click again to zoom back out.
  function handleImageClick(e) {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.transformOrigin = zoomed ? "center center" : `${x}% ${y}%`;
    setZoomed((z) => !z);
  }

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
    >
      <button className={styles.close} onClick={onClose} aria-label="Close">
        <HiOutlineX />
      </button>

      <button
        className={`${styles.nav} ${styles.navPrev}`}
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index - 1 + images.length) % images.length);
        }}
        aria-label="Previous image"
      >
        <HiOutlineChevronLeft />
      </button>

      <figure className={styles.figure} onClick={(e) => e.stopPropagation()}>
        <img
          src={current.src}
          alt={current.caption || ""}
          onClick={handleImageClick}
          className={`${styles.zoomableImg} ${zoomed ? styles.zoomed : ""}`}
        />
        {current.caption && <figcaption>{current.caption}</figcaption>}
      </figure>

      <button
        className={`${styles.nav} ${styles.navNext}`}
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index + 1) % images.length);
        }}
        aria-label="Next image"
      >
        <HiOutlineChevronRight />
      </button>

      <div className={styles.counter}>
        {index + 1} / {images.length}
      </div>
    </div>
  );
}
