import Link from "next/link";

interface NavItemProps {
  link: string | undefined;
  path: string;
  text: string;
}

export default function NavItem({ link, path, text }: NavItemProps) {
  return (
    <li
      className={`mr-[20px] relative ${
        path === link?.replace("/", "")
          ? "text-primary dark:text-primary"
          : "text-neutral-800 hover:text-primary "
      } dark:text-neutral-300`}
    >
      <Link
        href={link ? link : "/"}
        className=" relative transition-all  group"
      >
        {text}
        <span
          className={`absolute bottom-[-10px] left-0 w-full  ${
            path === link?.replace("/", "")
              ? " h-0.5 bg-primary transition-all"
              : "   transform scale-x-0 group-hover:scale-x-100 origin-left  h-0.5 bg-primary transition-all"
          }   `}
        ></span>
      </Link>
    </li>
  );
}
