"use client";

import { useTrack } from "@/context/TrackContext";
import { FC, useEffect, useRef } from "react";

interface Props {
  track: Track;
}

const Audio: FC<Props> = ({ track }) => {
  const ref = useRef<HTMLAudioElement>(null);
  const { playingTrack, setPlayingTrack } = useTrack();

  useEffect(() => {
    setPlayingTrack(track);
  }, [setPlayingTrack, track]);

  useEffect(() => {
    if (!ref?.current) return;
  }, []);

  const handleTrackEnded = () => {
    setPlayingTrack(null);
  };

  return (
    <audio
      controls
      src={playingTrack?.signed_url}
      ref={ref}
      onEnded={handleTrackEnded}
    >
      {/* <source src={url} type="audio/mpeg"/> */}
      Your browser does not support the audio element.
    </audio>
  );
};
export default Audio;
