import { FC } from "react";
import { Card, CardContent } from "./ui/card";
import { useTrack } from "@/context/TrackContext";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import { Progress } from "./ui/progress";
import { Heart, ListPlus } from "lucide-react";
import IconButton from "./Button/IconButton";

interface Props {
  progress: number;
}

const TrackPlayer: FC<Props> = ({ progress }) => {
  const { playingTrack } = useTrack();

  const secondsToDurationString = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleLikeClick = () => {
    console.log("Like");
  };

  const handleAddToPlaylistClick = () => {
    console.log("Add to Playlist");
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
            <Skeleton className={`size-[70px]`} />
          )}
          <div className="flex flex-col">
            <div className="font-medium">
              {playingTrack?.track_metadata?.title}
            </div>
            <div className="font-light">
              {playingTrack?.track_metadata?.channel}
            </div>
          </div>
          <div className="flex items-center space-x-4 w-full">
            <div className="font-light opacity-20">
              {secondsToDurationString(progress)}
            </div>
            <Progress value={progress} />
            <div className="font-light opacity-20">
              {playingTrack?.track_metadata?.duration_string}
            </div>
          </div>
          <div className="flex space-x-6 opacity-50 ml-12 mr-4">
            <IconButton onClick={handleLikeClick} icon={<Heart />} />
            <IconButton
              onClick={handleAddToPlaylistClick}
              icon={<ListPlus />}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrackPlayer;
