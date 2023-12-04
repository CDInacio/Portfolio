import NavItem from "./NavItem";

const links = [
  { id: 1, text: "sobre()" },
  { id: 2, text: "projetos()" },
  { id: 3, text: "contato()" },
];

const Navbar = () => {
  return (
    <nav className="absolute right-20 top-10 font-robotoMono text-white ">
      <ul className="flex ">
        {links.map((link) => (
          <NavItem key={link.id} text={link.text} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
