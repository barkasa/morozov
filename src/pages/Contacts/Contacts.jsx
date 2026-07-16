import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Contacts.module.css";

// TODO: replace with Ivan's own Formspree form ID (formspree.io/forms -> your form -> endpoint)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function Contacts() {
  const { t } = useLanguage();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

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
        setStatus("success");
        form.reset();
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

        {status === "success" && <p className={styles.success}>{t("contacts.success")}</p>}
        {status === "error" && <p className={styles.error}>{t("contacts.error")}</p>}
      </form>
    </section>
  );
}
