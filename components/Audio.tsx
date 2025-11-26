"use client";

import { useTrack } from "@/context/TrackContext";
import { FC, useEffect } from "react";

interface Props {
  track: Track;
}

const Audio: FC<Props> = ({ track }) => {
  const {
    playingTrack,
    setPlayingTrack,
    setIsPlaying,
    ref,
    setCurrentTime,
    setProgress,
  } = useTrack();

  useEffect(() => {
    setPlayingTrack(track);
  }, [setPlayingTrack, track]);

  const handleTrackEnded = () => {
    setPlayingTrack(null);
    setIsPlaying(false);
  };

  const handleTimeUpdate = () => {
    if (!ref?.current) return;
    const { currentTime, duration } = ref?.current;
    const progressPercantage = (currentTime / duration) * 100;
    setProgress(progressPercantage);
    setCurrentTime(currentTime);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <audio
      controls
      src={playingTrack?.signed_url}
      ref={ref}
      onEnded={handleTrackEnded}
      onTimeUpdate={handleTimeUpdate}
      onPlay={handlePlay}
      onPause={handlePause}
      muted
      autoPlay
    >
      {/* <source src={url} type="audio/mpeg"/> */}
      Your browser does not support the audio element.
    </audio>
  );
};
export default Audio;
