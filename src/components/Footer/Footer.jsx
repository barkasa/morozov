import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaTelegram,
  FaArtstation,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Footer.module.css";

// TODO: fill in Ivan's real Instagram / LinkedIn / Telegram / ArtStation handles
const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/YOUR_HANDLE", Icon: FaInstagram },
  { label: "LinkedIn", href: "https://linkedin.com/in/YOUR_HANDLE", Icon: FaLinkedin },
  { label: "GitHub", href: "https://github.com/barkasa", Icon: FaGithub },
  { label: "ArtStation", href: "https://www.artstation.com/YOUR_HANDLE", Icon: FaArtstation },
  { label: "Telegram", href: "https://t.me/YOUR_HANDLE", Icon: FaTelegram },
  { label: "WhatsApp", href: "https://wa.me/4915752647752", Icon: FaWhatsapp },
  { label: "Email", href: "mailto:morosow.iwan@gmail.com", Icon: HiOutlineMail },
];

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.socials}>
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={label}
              className={styles.socialLink}
            >
              <Icon />
            </a>
          ))}
        </div>

        <p className={styles.credit}>
          Created by Morozov Ivan © {year} · Düsseldorf (Germany) ·{" "}
          <a href="tel:+4915752647752">+49 1575 2647752</a> ·{" "}
          <a href="mailto:morosow.iwan@gmail.com">morosow.iwan@gmail.com</a>
        </p>

        <div className={styles.bottom}>
          <span>{t("footer.rights")}</span>
          <div className={styles.legal}>
            <Link to="/impressum">{t("footer.impressum")}</Link>
            <Link to="/datenschutz">{t("footer.datenschutz")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
