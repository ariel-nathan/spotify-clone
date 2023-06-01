import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types/song";
import Image from "next/image";

interface MediaItemProps {
  song: Song;
  onClick?: (id: string) => void;
}

export default function MediaItem(props: MediaItemProps) {
  const imageUrl = useLoadImage(props.song);

  const handleClick = () => {
    if (props.onClick) {
      return props.onClick(props.song.id);
    }

    //TODO: Default turn on player
  };

  return (
    <div
      onClick={handleClick}
      className="flex w-full cursor-pointer items-center gap-x-3 rounded-md p-2 hover:bg-neutral-800/50"
    >
      <div className="relative min-h-[48px] min-w-[48px] overflow-hidden rounded-md">
        <Image
          fill
          src={imageUrl || "/images/liked.png"}
          alt="Media Item"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="truncate text-white">{props.song.title}</p>
        <p className="truncate text-sm text-neutral-400">{props.song.author}</p>
      </div>
    </div>
  );
}
