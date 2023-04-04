import { FaHtml5, FaReact, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function Icon({ name, stl }) {
  switch (name) {
    case "HTML5":
      return <FaHtml5 className={stl} size={60} />;
    case "CSS3":
      return <FaCss3Alt className={stl} size={60} />;
    case "JavaScript":
      return <SiJavascript className={stl} size={60} />;
    case "Tailwind CSS":
      return <SiTailwindcss className={stl} size={60} />;
    case "React":
      return <FaReact className={stl} size={60} />;
    case "Next.js":
      return <TbBrandNextjs className={stl} size={60} />;
  }
}
