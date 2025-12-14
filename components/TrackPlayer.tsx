import { FC, MouseEvent, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { useTrack } from "@/context/TrackContext";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import { Progress } from "./ui/progress";
import { HeartPlus, Pause, Play } from "lucide-react";
import IconButton from "./Button/IconButton";
import LikeTrackModal from "./Modal/LikeTrackModal";

const TrackPlayer: FC = () => {
  const { playingTrack, isPlaying, seekTo, progress, currentTime, ref } =
    useTrack();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const secondsToDurationString = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleLikeClick = () => {
    // setModalIsOpen(true);
    console.log("Like");
  };

  const startPlayback = () => {
    if (!ref?.current) return;
    ref?.current?.play();
  };

  const stopPlayback = () => {
    if (!ref?.current) return;
    ref?.current?.pause();
  };

  const handleSeek = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = (clickX / rect.width) * 100;
    seekTo(percentage);
  };

  return (
    <Card className="absolute bottom-4 left-4 right-4">
      <CardContent>
        <div className="flex space-x-6 items-center">
          {playingTrack ? (
            <Image
              className="object-cover rounded-sm size-[70px]"
              src={playingTrack?.track_metadata?.thumbnail}
              alt="Track Thumbnail"
              height={70}
              width={70}
            />
          ) : (
            <Skeleton className="size-[70px] shrink-0" />
          )}

          <div className="flex flex-col">
            <div className="font-medium">
              {playingTrack?.track_metadata?.title}
            </div>
            <div className="font-light">
              {playingTrack?.track_metadata?.channel}
            </div>
          </div>

          <div className="flex items-center w-full space-x-4">
            <div>
              {isPlaying ? (
                <IconButton icon={<Pause />} onClick={stopPlayback} />
              ) : (
                <IconButton icon={<Play />} onClick={startPlayback} />
              )}
            </div>
            <div className="font-light opacity-20 w-8">
              {secondsToDurationString(currentTime)}
            </div>
            <Progress
              onClick={handleSeek}
              value={progress}
              className="cursor-pointer"
            />
            <div className="font-light opacity-20 w-8">
              {playingTrack?.track_metadata?.duration_string ?? "0:00"}
            </div>
          </div>
          {playingTrack && (
            <div className="flex space-x-6 mr-4">
              <LikeTrackModal
                track={playingTrack}
                trigger={
                  <IconButton onClick={handleLikeClick} icon={<HeartPlus />} />
                }
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TrackPlayer;
