import { type LucideIcon } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  href: string;
}

export default function SidebarItem(props: SidebarItemProps) {
  return (
    <Link
      href={props.href}
      className={twMerge(
        "text-md group flex h-auto w-full cursor-pointer flex-row items-center gap-x-4 py-1 font-medium text-neutral-400 transition hover:text-white",
        props.active && "text-white"
      )}
    >
      <props.icon
        className={twMerge(
          "text-neutral-400 transition group-hover:text-white",
          props.active && "text-white"
        )}
      />
      <p className="w-full truncate">{props.label}</p>
    </Link>
  );
}
