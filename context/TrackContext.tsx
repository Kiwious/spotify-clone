import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  RefObject,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from "react";

interface ContextType {
  playingTrack: Track | null;
  setPlayingTrack: Dispatch<SetStateAction<Track | null>>;
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
  progress: number;
  setProgress: Dispatch<SetStateAction<number>>;
  seekTo: (percantage: number) => void;
  ref: RefObject<HTMLAudioElement | null>;
  setCurrentTime: Dispatch<SetStateAction<number>>;
  currentTime: number;
}

interface Props {
  children: ReactNode;
}

const TrackContext = createContext<ContextType | null>(null);

export const TrackProvider: FC<Props> = ({ children }) => {
  const [playingTrack, setPlayingTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const ref = useRef<HTMLAudioElement>(null);

  const seekTo = (percantage: number) => {
    if (!ref?.current) return;
    const { duration } = ref?.current;
    const time = duration * (percantage / 100);
    ref.current.currentTime = time;
  };

  const value: ContextType = {
    playingTrack,
    setPlayingTrack,
    isPlaying,
    setIsPlaying,
    progress,
    setProgress,
    seekTo,
    ref,
    currentTime,
    setCurrentTime,
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
