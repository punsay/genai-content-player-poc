import { useEffect, useState } from "react";

export default function TextPlayer({ src }) {
  const [content, setContent] = useState("Loading...");

  useEffect(() => {
    fetch(src)
      .then((r) => {
        if (!r.ok) throw new Error(`Failed to load text: ${r.status}`);
        return r.text();
      })
      .then(setContent)
      .catch((err) => setContent(`⚠️ ${err.message}`));
  }, [src]);

  return (
    <div className="player-container text-player">
      <pre>{content}</pre>
    </div>
  );
}
