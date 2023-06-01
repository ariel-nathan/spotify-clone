import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export default function Box(props: BoxProps) {
  return (
    <div
      className={twMerge(
        "h-fit w-full rounded-lg bg-neutral-900",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}
