"use client";

import usePlayer from "@/hooks/usePlayer";
import { Song } from "@/types/song";
import { HomeIcon, SearchIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import Box from "./Box";
import Library from "./Library";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
  children: React.ReactNode;
  songs: Song[];
}

export default function Sidebar(props: SidebarProps) {
  const pathname = usePathname();

  const player = usePlayer();

  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathname !== "/search",
        href: "/",
        icon: HomeIcon,
      },
      {
        label: "Search",
        active: pathname === "/search",
        href: "/search",
        icon: SearchIcon,
      },
    ],
    [pathname]
  );

  return (
    <div
      className={twMerge(
        "flex h-full",
        player.activeId && "h-[calc(100%-80px)]"
      )}
    >
      <div className="hidden h-full w-[300px] flex-col gap-y-2 bg-black p-2 md:flex">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((route) => (
              <SidebarItem key={route.label} {...route} />
            ))}
          </div>
        </Box>
        <Box className="h-full overflow-y-auto">
          <Library songs={props.songs} />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">
        {props.children}
      </main>
    </div>
  );
}
