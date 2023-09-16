import {
  SiCss3,
  SiDart,
  SiFlutter,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { twMerge } from "tailwind-merge";

export default function Icon({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  let defaultStl = "mr-[7px] h-[20px] w-[20px]";
  switch (text) {
    case "html":
      return <SiHtml5 className={twMerge(defaultStl, className)} />;
    case "css":
      return <SiCss3 className={twMerge(defaultStl, className)} />;
    case "js":
      return <SiJavascript className={twMerge(defaultStl, className)} />;
    case "typescript":
      return <SiTypescript className={twMerge(defaultStl, className)} />;
    case "react":
      return <SiReact className={twMerge(defaultStl, className)} />;
    case "next":
      return <SiNextdotjs className={twMerge(defaultStl, className)} />;
    case "react query":
      return <SiReactquery className={twMerge(defaultStl, className)} />;
    case "tailwind":
      return <SiTailwindcss className={twMerge(defaultStl, className)} />;
    case "git":
      return <SiGit className={twMerge(defaultStl, className)} />;
    case "dart":
      return <SiDart className={twMerge(defaultStl, className)} />;
    case "flutter":
      return <SiFlutter />;
    default:
      return <SiHtml5 className={twMerge(defaultStl, className)} />;
  }
}
