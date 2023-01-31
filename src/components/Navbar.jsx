import React from "react";
import {
  FaHome,
  FaFileAlt,
  FaAlignLeft,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute z-10 w-screen h-[50px] bg-dark flex justify-center shadow-xl">
      <div className="w-[60%]  items-center flex justify-center grid grid-cols-2">
        <div className="flex w-full h-full justify-start items-center">
          <div className="flex items-center w-6">
            {" "}
            <a href="https://github.com/rovid19" target="_blank">
              <FaGithub
                size={15}
                className="cursor-pointer text-white hover:text-red hover:scale-125 transition-all"
              />
            </a>{" "}
          </div>
          <div className="w-6">
            {" "}
            <a
              href="https://www.linkedin.com/in/roberto-vidovi%C4%87-b90912149/"
              target="_blank"
            >
              <FaLinkedin
                size={15}
                className="cursor-pointer text-white hover:text-red hover:scale-125 transition-all"
              />
            </a>{" "}
          </div>
        </div>
        <div className="flex  w-full h-full justify-end items-center">
          <div className="w-[4%] flex justify-center">
            {" "}
            <Link to="/">
              <FaHome
                size={15}
                className="cursor-pointer text-white  hover:text-red hover:scale-125 transition-all"
              />{" "}
            </Link>
          </div>
          <div className="w-[4%] flex justify-center ">
            {" "}
            <Link to="/aboutme">
              <FaAlignLeft
                size={15}
                className="cursor-pointer text-white  hover:text-red hover:scale-125 transition-all"
              />{" "}
            </Link>
          </div>
          <div className="w-[4%] flex justify-center">
            {" "}
            <Link to="projects">
              <FaFileAlt
                size={15}
                className="cursor-pointer text-white  hover:text-red hover:scale-125 transition-all"
              />{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
