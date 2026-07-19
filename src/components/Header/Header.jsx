import { Link, NavLink } from "react-router-dom";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Header.module.css";

const LINKS = [
  { to: "/", key: "nav.home" },
  { to: "/projects", key: "nav.projects" },
  { to: "/arts", key: "nav.arts" },
  { to: "/about", key: "nav.about" },
  { to: "/contacts", key: "nav.contacts" },
];

export default function Header({ menuOpen, onToggleMenu }) {
  const { t, lang, setLang, supported } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} onClick={() => menuOpen && onToggleMenu()}>
          <span className={styles.logoMark}>M</span>
          <span className={styles.logoWord}>MOROZOV</span>
        </Link>

        <nav className={styles.desktopNav}>
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
              }
            >
              {t(link.key)}
            </NavLink>
          ))}
        </nav>

        <div className={styles.desktopUtilities}>
          <div className={styles.langs}>
            {supported.map((code) => (
              <button
                key={code}
                className={lang === code ? styles.langActive : styles.langBtn}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            className={styles.themeBtn}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />}
          </button>
        </div>

        <button
          className={`${styles.trigger} ${menuOpen ? styles.triggerOpen : ""}`}
          onClick={onToggleMenu}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}


