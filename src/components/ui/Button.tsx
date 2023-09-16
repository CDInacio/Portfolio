import React from "react";

import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  link?: string;
}

export default function Button({
  children,
  className,
  link,
  ...props
}: ButtonProps) {
  const handleNavigate = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };
  return (
    <button
      onClick={handleNavigate}
      className={twMerge(
        "text-white  min-w-[64px] rounded-md px-4 py-1 bg-primary hover:bg-primary-dark ",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
