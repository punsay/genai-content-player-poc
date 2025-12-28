import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function CustomAudioPlayer({ src }) {
  return (
    <div className="player-container">
      <AudioPlayer src={src} controls />
    </div>
  );
}
