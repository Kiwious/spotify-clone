import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ContextType {
  playingTrack: Track | null;
  setPlayingTrack: Dispatch<SetStateAction<Track | null>>;
}

interface Props {
  children: ReactNode;
}

const TrackContext = createContext<ContextType | null>(null);

export const TrackProvider: FC<Props> = ({ children }) => {
  const [playingTrack, setPlayingTrack] = useState<Track | null>(null);
  
  const value = {
    playingTrack,
    setPlayingTrack,
  };

  return (
    <TrackContext.Provider value={value}>{children}</TrackContext.Provider>
  );
};

export const useTrack = () => {
  const context = useContext(TrackContext);

  if (!context)
    throw new Error("Track Context must be used within a Track Provider");

  return context;
};
