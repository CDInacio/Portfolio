import { BsGithub } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";

import Image from "next/image";

import styles from "../style.module.css";

export default function ProjectItem({ ...props }) {
  return (
    <div
      className={`bg-white min-h-[550px] rounded-lg text-neutral-800  overflow-hidden shadow-md relative`}
    >
      <div className="h-64 relative bg-white">
        <Image
          className="object-cover"
          fill
          src={props.image}
          alt={`imagem do projeto ${props.name}`}
        />
      </div>
      <div className="px-4 pt-2 pb-4 flex flex-col  ">
        <div className="flex flex-wrap">
          {props.stacks.map((stack) => (
            <span
              key={stack}
              className="bg-neutral-800 text-white rounded-md p-2 mt-2 text-xs mr-2 cursor-pointer"
            >
              {stack}
            </span>
          ))}
        </div>
        <h1 className="text-xl sm:text-2xl font-neue font-bold  tracking-wide	mt-4">
          {props.name}
        </h1>
        <p className=" text-neutral-600 mt-3 mb-4 text-sm sm:text-base">
          {props.description}
        </p>
        {props.done ? (
          <div className="flex justify-between items-center">
            <a
              href={props.demo}
              target="_blank"
              className="bg-neutral-800 text-white p-2 rounded-md flex items-center mr-5 text-sm sm:text-base"
            >
              <p className="mr-2">Demo</p>
              <GoLinkExternal size={20} />
            </a>
            <a href={props.code} target="_blank" className="">
              {" "}
              <BsGithub size={20} />
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
