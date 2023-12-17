import Image from "next/image";

import useSize from "../../hooks/useSize";
import Button from "../commom/Button";
import Reveal from "../commom/Reveal";

interface ProjectItemProps {
  text: string;
  description: string;
  imagePath: string;
  stack: string[];
  code: string;
  link: string;
}

const ProjectItem = ({
  text,
  description,
  imagePath,
  stack,
  code,
  link,
}: ProjectItemProps) => {
  const { width } = useSize();

  return (
    <div className="flex flex-col text-white  ">
      <Reveal className="w-full  min-h-[200px] xl:h-auto">
        <Image
          src={imagePath}
          fill
          alt={text}
          className="rounded object-cover"
        />
      </Reveal>

      <div className="p-3 flex flex-col justify-between h-full w-full  ">
        <div>
          <Reveal>
            {stack.map((item, i) => (
              <span key={item + i} className="mr-1 text-sm text-neutral-400">
                #{item}
              </span>
            ))}
          </Reveal>
          <Reveal>
            <h1 className="text-lg sm:text-xl  font-poppins font-bold">
              {text}
            </h1>
          </Reveal>
          <Reveal>
            <p className="font-lato text-neutral-400 mb-3 mt-2 text-sm sm:text-base">
              {description}
            </p>
          </Reveal>
        </div>
        <div className="flex gap-x-3">
          <Reveal>
            <Button type="button" intent="primary" size="md">
              <a href={link} target="_blank">
                Link
              </a>
            </Button>
          </Reveal>
          <Reveal>
            <Button type="button" intent="primary" size="md">
              <a href={code} target="_blank">
                Código
              </a>
            </Button>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
