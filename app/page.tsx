"use client";

import Audio from "@/components/Audio";
import UrlForm from "@/components/form/UrlForm";
import TrackPlayer from "@/components/TrackPlayer";
import { Skeleton } from "@/components/ui/skeleton";
import useGetTrack from "@/hooks/query/useGetTrack";
import Image from "next/image";
import { useState } from "react";
import { HashLoader } from "react-spinners";

const Page = () => {
  const [url, setUrl] = useState("");
  const { data, isLoading, isSuccess } = useGetTrack(url);
  const track = data?.track_metadata;

  return (
    <div className="flex flex-col size-full space-y-12 justify-center items-center">
      <div className="absolute top-0 px-48 pt-12 w-full">
        <UrlForm setUrl={setUrl} />
      </div>
      {isLoading || !isSuccess ? (
        <Skeleton className="w-1/2 h-1/2" />
      ) : (
        <div className="flex space-x-4">
          {track?.thumbnail ? (
            <Image
              className="rounded-sm"
              src={track.thumbnail}
              alt="Thumbnail"
              width={250}
              height={250}
            />
          ) : (
            <Skeleton className="size-[100px]" />
          )}
          <div>
            <div className="text-5xl">{track?.title}</div>
            <p className="text-gray-300">{track?.duration_string}</p>
          </div>
        </div>
      )}

      {isLoading ? (
        <HashLoader color="#fff" />
      ) : (
        data && (
          <>
            <Audio track={data}  />
            <TrackPlayer  />
          </>
        )
      )}
    </div>
  );
};

export default Page;
