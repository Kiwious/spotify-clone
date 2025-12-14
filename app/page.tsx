"use client";

import Audio from "@/components/Audio";
import UrlForm from "@/components/Form/UrlForm";
import TrackPlayer from "@/components/TrackPlayer";
import { Item, ItemContent, ItemMedia } from "@/components/ui/item";
import { Spinner } from "@/components/ui/spinner";
import useGetTrack from "@/hooks/query/useGetTrack";
import { useState } from "react";

const Page = () => {
  const [url, setUrl] = useState("");
  const { data, isLoading } = useGetTrack(url);
  
  const track = data?.track_metadata;

  return (
    <div className="flex flex-col size-full space-y-12 justify-center items-center">
      <div className="absolute top-0 px-48 pt-12 w-full">
        <UrlForm setUrl={setUrl} />
      </div>
      {isLoading && (
        <Item variant="outline">
          <ItemMedia>
            <Spinner />
          </ItemMedia>
          <ItemContent>
            Das angeforderte Lied wird heruntergeladen. Dies kann einigie
            Minuten in Anspruch nehmen.
          </ItemContent>
        </Item>
      )}
      {track && <Audio track={data} />}
      <TrackPlayer />
    </div>
  );
};

export default Page;
