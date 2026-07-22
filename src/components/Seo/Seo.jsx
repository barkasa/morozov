import { useEffect } from "react";

function setMeta(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

// Renders nothing — just syncs <title> and <meta name="description"> to
// whatever the current page passes in. Note: this only helps the browser
// tab and crawlers that execute JS (Google does; most link-preview bots for
// WhatsApp/Telegram/etc. do not) — social-share previews come from the
// static Open Graph tags in index.html instead.
export default function Seo({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;
    setMeta("description", description);
  }, [title, description]);

  return null;
}
