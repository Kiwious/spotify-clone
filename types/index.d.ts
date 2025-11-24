interface TrackMetadata {
  title: string;
  thumbnail: string;
  description: string;
  channel: string;
  duration: number;
  categories: string[];
  youtube_id: string;
  channel_id: string;
  channel_url: string;
  view_count: number;
  webpage_url: string;
  like_count: number;
  upload_date: number;
  duration_string: string;
}

interface Track {
  track_metadata: TrackMetadata;
  key: string;
  signed_url: string;
  is_new: boolean;
}
