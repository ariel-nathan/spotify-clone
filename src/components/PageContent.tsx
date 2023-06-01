"use client";

import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types/song";
import SongItem from "./SongItem";

interface PageContentProps {
  songs: Song[];
}

export default function PageContent(props: PageContentProps) {
  const onPlay = useOnPlay(props.songs);

  if (props.songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No songs available</div>;
  }

  return (
    <div className="grid-col-2 mt-4 grid gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8">
      {props.songs.map((song) => (
        <SongItem key={song.id} onClick={(id) => onPlay(id)} song={song} />
      ))}
    </div>
  );
}
