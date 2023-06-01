"use client";

import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types/song";
import LikeButton from "./LikeButton";
import MediaItem from "./MediaItem";

interface SearchContentProps {
  songs: Song[];
}

export default function SearchContent(props: SearchContentProps) {
  const onPlay = useOnPlay(props.songs);

  if (props.songs.length === 0) {
    return (
      <div className="flex w-full flex-col gap-y-2 px-6 text-neutral-400">
        No results
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-y-2 px-6">
      {props.songs.map((song) => (
        <div key={song.id} className="flex w-full items-center gap-x-4">
          <div className="flex-1">
            <MediaItem song={song} onClick={(id) => onPlay(id)} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
}
