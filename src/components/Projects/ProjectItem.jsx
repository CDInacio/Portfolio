import Image from "next/image";

import { GoLinkExternal } from "react-icons/go";
import { BsGithub } from "react-icons/bs";

import styles from "../style.module.css";

export default function ProjectItem({ stacks, image, name, description }) {
  return (
    <div
      className={`bg-white rounded-md text-neutral-800  overflow-hidden ${styles.shadow} cursor-pointer`}
    >
      <div className="h-64 relative bg-white">
        <Image
          className="object-cover"
          fill
          src={image}
          alt={`imagem do projeto ${name}`}
        />
      </div>
      <div className="px-4 py-4">
        <div className="">
          {stacks.map((stack) => (
            <span
              key={stack}
              className="bg-slate-900 text-white rounded-md p-2 text-xs mr-2"
            >
              {stack}
            </span>
          ))}
        </div>
        <h1 className="text-2xl font-neue font-bold  tracking-wide	mt-4">
          {name}
        </h1>
        <p className=" text-neutral-600 mt-2 mb-3">{description}</p>
        <div className="flex justify-between">
          <div className="bg-primary text-white p-2 rounded-sm flex items-center mr-5">
            <p className="mr-2">Demo</p>
            <GoLinkExternal size={20} />
          </div>
          <BsGithub size={20} />
        </div>
      </div>
    </div>
  );
}
