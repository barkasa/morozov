import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Contacts.module.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mlgqgaje";

export default function Contacts() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [status, setStatus] = useState("idle"); // idle | sending | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        navigate("/success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={styles.page}>
      <h1>{t("contacts.title")}</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          {t("contacts.name")}
          <input type="text" name="name" required />
        </label>
        <label>
          {t("contacts.email")}
          <input type="email" name="email" required />
        </label>
        <label>
          {t("contacts.message")}
          <textarea name="message" rows="6" required />
        </label>

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? t("contacts.sending") : t("contacts.send")}
        </button>

        {status === "error" && <p className={styles.error}>{t("contacts.error")}</p>}
      </form>
    </section>
  );
}
