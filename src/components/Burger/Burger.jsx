import { NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Burger.module.css";

const LINKS = [
  { to: "/", key: "nav.home" },
  { to: "/projects", key: "nav.projects" },
  { to: "/arts", key: "nav.arts" },
  { to: "/about", key: "nav.about" },
  { to: "/contacts", key: "nav.contacts" },
];

export default function Burger({ open, onClose }) {
  const { t, lang, setLang, supported } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
      aria-hidden={!open}
    >
      <ul className={styles.links}>
        {LINKS.map((link, i) => (
          <li key={link.to} style={{ transitionDelay: `${open ? i * 40 + 80 : 0}ms` }}>
            <NavLink
              to={link.to}
              onClick={onClose}
              className={({ isActive }) => (isActive ? styles.active : undefined)}
            >
              {t(link.key)}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className={styles.utilities}>
        <div className={styles.langs}>
          {supported.map((code) => (
            <button
              key={code}
              className={lang === code ? styles.langActive : ""}
              onClick={() => setLang(code)}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>

        <button className={styles.themeToggle} onClick={toggleTheme}>
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}
