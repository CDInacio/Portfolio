import { twMerge } from "tailwind-merge";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const TextInput = ({ className, ...props }: TextInputProps) => {
  return (
    <input
      {...props}
      className={twMerge(
        "bg-neutral-800 py-2 px-3  rounded text-sm md:text-base border-[1px] border-transparent focus:border-[1px] focus:border-primary transtition duration-200",
        className
      )}
    />
  );
};

export default TextInput;
