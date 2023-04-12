"use client";

import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { IoMailOutline, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  const handleSendEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="flex items-center justify-center mt-52 mb-2">
      <span className="mr-1">
        <AiOutlineCopyrightCircle />
      </span>
      <div className="flex items-center">
        <p>2023 Cláudio Vitor Dantas |</p>
        <div className="flex">
          <a
            href="https://www.linkedin.com/in/cl%C3%A1udio-dantas-520a1615b/"
            target="_blank"
            className="mx-2"
          >
            <IoLogoLinkedin />
          </a>
          <a
            href="https://github.com/CDInacio"
            target="_blank"
            className="mx-2"
          >
            <IoLogoGithub />
          </a>
          <a
            onClick={() => handleSendEmail("claudiodantas1996@gmail.com")}
            className="mx-2 cursor-pointer"
          >
            <IoMailOutline />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
