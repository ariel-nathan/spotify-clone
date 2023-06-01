"use client";

import useOnPlay from "@/hooks/useOnPlay";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types/song";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LikeButton from "./LikeButton";
import MediaItem from "./MediaItem";

interface LikedContentProps {
  songs: Song[];
}

export default function LikedContent(props: LikedContentProps) {
  const router = useRouter();

  const { isLoading, user } = useUser();

  const onPlay = useOnPlay(props.songs);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  if (props.songs.length === 0) {
    return (
      <div className="flex w-full flex-col gap-y-2 px-6 text-neutral-400">
        No liked songs
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-y-2 p-6">
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
