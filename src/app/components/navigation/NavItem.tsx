import Link from "../link/Link";

const NavItem = ({ text }: { text: string }) => {
  return (
    <li className="mx-5 cursor-pointer  py-2 hover:border-b-4 transition duration-300 border-primary">
      <Link to={text}>{text}</Link>
    </li>
  );
};

export default NavItem;
