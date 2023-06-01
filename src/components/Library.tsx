"use client";

import useAuthModal from "@/hooks/useAuthModal";
import useOnPlay from "@/hooks/useOnPlay";
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types/song";
import { ListMusic, PlusIcon } from "lucide-react";
import MediaItem from "./MediaItem";

interface LibraryProps {
  songs: Song[];
}

export default function Library(props: LibraryProps) {
  const { user } = useUser();

  const authModal = useAuthModal();

  const uploadModal = useUploadModal();

  const onPlay = useOnPlay(props.songs);

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    //TODO: Check for subscription

    return uploadModal.onOpen();
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <ListMusic size={20} className="text-neutral-400" />
          <p className="text-md font-medium text-neutral-400">Your Library</p>
        </div>
        <PlusIcon
          onClick={onClick}
          size={20}
          className="cursor-pointer text-neutral-400 transition hover:text-white"
        />
      </div>
      <div className="mt-4 flex flex-col gap-y-2 px-3">
        {props.songs.map((song) => (
          <MediaItem key={song.id} onClick={(id) => onPlay(id)} song={song} />
        ))}
      </div>
    </div>
  );
}
