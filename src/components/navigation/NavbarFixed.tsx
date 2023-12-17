import { links } from "../../data/constants";
import NavItem from "./NavItem";

const NavbarFixed = () => {
  return (
    <nav className="font-robotoMono  text-white absolute  z-50  w-full hidden lg:flex">
      <ul className="flex justify-end h-20 px-3  items-center container mx-auto ">
        {links.map((link) => (
          <NavItem key={link.id} text={link.text} />
        ))}
      </ul>
    </nav>
  );
};

export default NavbarFixed;
