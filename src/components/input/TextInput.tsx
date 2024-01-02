import React from "react";

import { twMerge } from "tailwind-merge";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={twMerge(
          "bg-neutral-800 w-full mb-4  py-2 px-3  rounded border-[1px] border-transparent focus:border-[1px] focus:border-primary transtition duration-200",
          className
        )}
        {...props}
      />
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
