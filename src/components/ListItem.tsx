"use client";

import { PlayIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

export default function ListItem(props: ListItemProps) {
  const router = useRouter();

  const onClick = () => {
    // Add auth before push
    router.push(props.href);
  };

  return (
    <button
      onClick={onClick}
      className="group relative flex items-center gap-x-4 overflow-hidden rounded-md bg-neutral-100/10 pr-4 transition hover:bg-neutral-100/20"
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image src={props.image} fill className="object-cover" alt="Image" />
      </div>
      <p className="font-md truncate py-5">{props.name}</p>
      <div className="absolute right-5 flex items-center justify-center rounded-full bg-green-400 p-4 pr-4 opacity-0 drop-shadow-md transition hover:scale-110 group-hover:opacity-100">
        <PlayIcon fill="black" className="text-black" />
      </div>
    </button>
  );
}
