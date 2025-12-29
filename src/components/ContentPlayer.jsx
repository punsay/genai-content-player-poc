import PDFPlayer from "./players/PDFPlayer";
import VideoPlayer from "./players/VideoPlayer";
import AudioPlayer from "./players/AudioPlayer";
import ImagePlayer from "./players/ImagePlayer";
import TextPlayer from "./players/TextPlayer";
import WebPagePlayer from "./players/WebPagePlayer";

export default function ContentPlayer({ type, src }) {
  if (!src) return <p>No source provided.</p>;

  const players = {
    pdf: <PDFPlayer src={src} />,
    video: <VideoPlayer src={src} />,
    audio: <AudioPlayer src={src} />,
    image: <ImagePlayer src={src} />,
    text: <TextPlayer src={src} />,
    webpage: <WebPagePlayer src={src} />,
  };

  return players[type] || <p>Unsupported content type: {type}</p>;
}
