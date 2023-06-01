import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, disabled, type, ...props }, ref) => (
    <input
      type={type}
      className={twMerge(
        "file:font-md flex w-full rounded-md border border-transparent bg-neutral-700 px-3 py-4 text-sm file:border-0 file:bg-transparent file:text-sm placeholder:text-neutral-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      disabled={disabled}
      ref={ref}
      {...props}
    />
  )
);

Input.displayName = "Input";

export default Input;
