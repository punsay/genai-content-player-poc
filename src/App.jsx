import React, { useState } from "react";
import ContentPlayer from "./components/ContentPlayer";
import "./App.css";

export default function App() {
  const [type, setType] = useState("pdf");

  const contentMap = {
    pdf: "/sample.pdf",
    video: "/sample.mp4",
    audio: "/sample.mp3",
    image: "/sample.jpg",
    text: "/sample.txt",
  };

  return (
    <main className="App">
      <h1>Content Player</h1>
      <nav className="button-bar" aria-label="Content type selector">
        {Object.keys(contentMap).map((key) => (
          <button
            key={key}
            onClick={() => setType(key)}
            aria-pressed={type === key}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </nav>
      <section className="content-wrapper" aria-live="polite">
        <ContentPlayer type={type} src={contentMap[type]} />
      </section>
    </main>
  );
}
