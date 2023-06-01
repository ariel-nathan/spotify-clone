import { PlayIcon } from "lucide-react";

interface PlayButtonProps {}

export default function PlayButton(props: PlayButtonProps) {
  return (
    <button className="translate flex translate-y-1/4 items-center rounded-full bg-green-500 p-4 opacity-0 drop-shadow-md transition hover:scale-110 group-hover:translate-y-0 group-hover:opacity-100">
      <PlayIcon color="black" fill="true" />
    </button>
  );
}
