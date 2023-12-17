import React from "react";

import { cva } from "class-variance-authority";

const buttonClasses = cva(
  ["font-semibold", "border", "rounded", "transition duration-300"],
  {
    variants: {
      intent: {
        primary: [
          "bg-primary",
          "text-white",
          "border-transparent",
          "hover:bg-primaryDark",
        ],
        secondary: [
          "bg-white",
          "text-gray-800",
          "border-gray-400",
          "hover:bg-gray-100",
        ],
      },
      size: {
        sm: ["text-xs", "py-1", "px-2"],
        md: ["text-sm", "py-2", "px-4"],
        lg: ["text-base", "py-3", "px-6"],
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        size: "md",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  intent?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

const Button = ({ children, intent, size, ...props }: ButtonProps) => {
  return (
    <button className={buttonClasses({ intent, size })} {...props}>
      {children}
    </button>
  );
};

export default Button;
