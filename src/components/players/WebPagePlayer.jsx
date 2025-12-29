import React from "react";

export default function WebPagePlayer({ src }) {
  if (!src) return <p>No web page URL provided</p>;

  return (
    <div className="player-container">
      <iframe
        src={src}
        width="100%"
        height="600px"
        style={{
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}
        title="Web Page"
        //sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />
    </div>
  );
}
