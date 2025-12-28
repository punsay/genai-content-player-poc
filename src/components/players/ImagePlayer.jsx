import React from "react";

export default function ImagePlayer({ src }) {
  return (
    <div className="player-container">
      <img
        src={src}
        alt="Content"
        className="image-player"
        loading="lazy"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
    </div>
  );
}
