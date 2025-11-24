import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const QUERY_KEY = "GET_TRACK";

const useGetTrack = (url: string) => {
  return useQuery({
    queryKey: [QUERY_KEY, url],
    queryFn: async () => {
      const res = await axios.get<Track>(
        `${process.env.NEXT_PUBLIC_BASE_URL}/track?url=${encodeURIComponent(
          url
        )}`
      );
      return res?.data;
    },
  });
};

export default useGetTrack;
