import React, { useState, useEffect } from "react";
import ContentPlayer from "./components/ContentPlayer";
import "./App.css";

export default function App() {
  const [view, setView] = useState("content");
  const [type, setType] = useState("pdf");
  const [leftData, setLeftData] = useState([]);
  const [rightData, setRightData] = useState([]);
  const [loadingLeft, setLoadingLeft] = useState(false);
  const [loadingRight, setLoadingRight] = useState(false);

  const contentMap = {
    pdf: "/sample.pdf",
    video: "/sample.mp4",
    audio: "/sample.mp3",
    image: "/sample.jpg",
    text: "/sample.txt",
    webpage: "https://www.pwc.com/gx/en.html",
  };

  // Fetch API data for columns
  useEffect(() => {
    if (view === "columns") {
      setLoadingLeft(true);
      setLoadingRight(true);

      // Left column: Posts
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then((res) => res.json())
        .then(setLeftData)
        .catch((err) => console.error("Left column error:", err))
        .finally(() => setLoadingLeft(false));

      // Right column: Users
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then(setRightData)
        .catch((err) => console.error("Right column error:", err))
        .finally(() => setLoadingRight(false));
    }
  }, [view]);

  return (
    <div className="app-container">
      {/* Sticky Header */}
      <header className="header">
        <span>React Content Player + Layout Demo (with APIs)</span>
        <nav className="nav-links">
          <button
            onClick={() => setView("content")}
            aria-pressed={view === "content"}
          >
            Content Player
          </button>
          <button
            onClick={() => setView("columns")}
            aria-pressed={view === "columns"}
          >
            Two Column Layout
          </button>
        </nav>
      </header>

      {view === "content" ? (
        /* --- Content Player View --- */
        <main className="content-view">
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
      ) : (
        /* --- Two Column API Layout --- */
        <main className="main-layout">
          {/* Left Column */}
          <section className="column left-column">
            <h2>Posts (API Data)</h2>
            {loadingLeft ? (
              <p>Loading posts...</p>
            ) : (
              <ul>
                {leftData.map((post) => (
                  <li key={post.id}>
                    <strong>{post.title}</strong>
                    <p>{post.body}</p>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Right Column */}
          <section className="column right-column">
            <h2>Users (API Data)</h2>
            {loadingRight ? (
              <p>Loading users...</p>
            ) : (
              <ul>
                {rightData.map((user) => (
                  <li key={user.id}>
                    <strong>{user.name}</strong>
                    <p>{user.email}</p>
                    <small>{user.company.name}</small>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </main>
      )}
    </div>
  );
}
