import { Link } from "react-scroll";

const NavItem = ({ text }: { text: string }) => {
  return (
    <Link to={text} smooth={true} duration={500}>
      <li className="mx-5 cursor-pointer border-b-4 border-transparent  py-2 hover:border-b-4 transition duration-300 hover:border-primary font-poppins">
        {text}
      </li>
    </Link>
  );
};

export default NavItem;
