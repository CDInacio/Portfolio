"use client";

import { useState } from "react";
import { FaHtml5, FaReact, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import styles from "./style.module.scss";

interface StackProps {
  stackName: string;
}

export default function StackItem({ stackName }: StackProps) {
  const [mounseIn, setMouseIn] = useState(false);

  let icon;
  let color = "";

  if (stackName == "HTML5") {
    icon = <FaHtml5 size={60} />;
    color = "#E44D26";
  } else if (stackName == "CSS3") {
    icon = <FaCss3Alt size={60} />;
    color = "#1576BD";
  } else if (stackName == "JavaScript") {
    icon = <SiJavascript size={60} />;
    color = "#FCB040";
  } else if (stackName == "Tailwind CSS") {
    icon = <SiTailwindcss size={60} />;
    color = "#36B7F0";
  } else if (stackName == "React") {
    icon = <FaReact size={60} />;
    color = "#00DCFF";
  } else if (stackName == "Next.js") {
    icon = <TbBrandNextjs size={60} />;
    color = "#000000";
  }

  return (
    <div
      onMouseEnter={() => setMouseIn(true)}
      onMouseLeave={() => setMouseIn(false)}
      className={`h-36 w-36 rounded-lg ${styles.shadow} shadow-zinc-500 flex items-center justify-center cursor-pointer`}
    >
      {!mounseIn ? (
        icon
      ) : (
        <div
          style={{ backgroundColor: color }}
          className={`w-full h-full rounded-lg flex items-center justify-center `}
        >
          <span className="text-white font-bold">{stackName}</span>
        </div>
      )}
    </div>
  );
}
