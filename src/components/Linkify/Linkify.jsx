// Splits on URLs (keeping them, thanks to the capturing group) and wraps
// each one in a real <a> tag that opens in a new tab. Everything else stays
// as plain text, so this is safe to use on any description string.
export default function Linkify({ text }) {
  if (!text) return null;

  const parts = text.split(/(https?:\/\/[^\s]+)/g);

  return parts.map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a key={i} href={part} target="_blank" rel="noreferrer">
        {part}
      </a>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}
