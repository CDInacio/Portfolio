import React from "react";
import { Link as ScrollLink } from "react-scroll";

interface LinkProps {
  to: string;
  children: React.ReactNode;
}

const Link = ({ to, children }: LinkProps) => {
  return (
    <ScrollLink
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      duration={700}
      isDynamic={true}
    >
      {children}
    </ScrollLink>
  );
};

export default Link;
