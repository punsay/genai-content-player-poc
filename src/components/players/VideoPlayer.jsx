import React from "react";

export default function VideoPlayer({ src }) {
  if (!src) return <p>No video source found</p>;

  return (
    <div className="player-container">
      <video
        src={src}
        width="100%"
        height="auto"
        controls
        preload="metadata"
        style={{
          borderRadius: "8px",
          backgroundColor: "#000",
        }}
      >
        <track kind="captions" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
