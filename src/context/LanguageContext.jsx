import { createContext, useContext, useEffect, useState } from "react";
import de from "../locales/de.json";
import en from "../locales/en.json";
import ru from "../locales/ru.json";

const dictionaries = { de, en, ru };
const SUPPORTED = ["de", "en", "ru"];
const LanguageContext = createContext(null);

function getInitialLang() {
  const stored = window.localStorage.getItem("ivan-lang");
  if (stored && SUPPORTED.includes(stored)) return stored;
  // Default to German regardless of browser language —
  // the site's primary audience is based in Germany.
  return "de";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem("ivan-lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  // t("nav.projects") -> looks up nested key in the active dictionary,
  // falls back to English, then to the key itself so missing strings
  // never crash the page.
  const t = (key) => {
    const path = key.split(".");
    const lookup = (dict) =>
      path.reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), dict);
    return lookup(dictionaries[lang]) ?? lookup(dictionaries.en) ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, supported: SUPPORTED }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
