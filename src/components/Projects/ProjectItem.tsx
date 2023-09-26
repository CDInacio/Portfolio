import Image from "next/image";
import Link from "next/link";

import Button from "../ui/Button";
import Icon from "../ui/Icon";

export default function ProjectItem({ project }: { project: Project }) {
  return (
    <div className="flex flex-col md:flex-row mb-[60px] min-w-[300px]">
      <div className=" h-[200px]   sm:h-[250px] w-full md:w-[350px] md:h-[200px] relative  overflow-hidden rounded">
        <Image
          fill
          className="object-cover"
          src={project.image}
          alt={`${project.name} example image`}
        />
      </div>
      <div className=" flex flex-col justify-between ">
        <div className="md:ml-[20px]">
          <div className="flex mt-[20px] md:mt-0">
            {project.stacks.map((stack, i) => (
              <Icon key={i} className="w-[15px] h-[15px]" text={stack} />
            ))}
          </div>
          <h2 className="mb-[5px] mt-[5px]">
            <Link
              href={project.demo as string}
              target="_blank"
              className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-300 "
            >
              {project.name}
            </Link>
          </h2>
          <p className="max-w-[700px] text-neutral-600 dark:text-neutral-300 text-justify ">
            {project.description}
          </p>
        </div>
        <div className="md:ml-[20px] mt-[10px] md:mt-[0px]">
          <Button type="button" className="mr-[10px]" link={project.demo}>
            Link
          </Button>
          <Button type="button" link={project.code}>
            Código
          </Button>
        </div>
      </div>
    </div>
  );
}
