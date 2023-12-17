import React from "react";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoMail,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import { RiMapPin2Fill } from "react-icons/ri";
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

type IconMappingType = {
  [key: string]: JSX.Element;
};

const iconMapping: IconMappingType = {
  html: <SiHtml5 />,
  css: <SiCss3 />,
  javascript: <SiJavascript />,
  git: <SiGit />,
  tailwind: <SiTailwindcss />,
  next: <SiNextdotjs />,
  react: <SiReact />,
  github: <IoLogoGithub />,
  linkedin: <IoLogoLinkedin />,
  instagram: <IoLogoInstagram />,
  phone: <IoPhonePortraitOutline />,
  email: <IoMail />,
  local: <RiMapPin2Fill />,
};

interface IconProps {
  iconType: string;
  size?: number;
  className?: string;
}

const Icon = ({ iconType, className }: IconProps) => {
  const iconComponent = iconMapping[iconType];

  if (!iconComponent) {
    return null;
  }

  return React.cloneElement(iconComponent, {
    size: 20,
    className,
  });
};

export default Icon;
