import React from "react";
import Img from "../slike/pozadina.jpg";
import Img1 from "../slike/ide.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const style = {
    backgroundImage: `url(${Img})`,
  };
  const styled = {
    backgroundImage: `url(${Img1})`,
  };
  return (
    <div className="w-screen h-[calc(100%-50px)] final absolute top-[50px] flex justify-center">
      <div className="w-[60%] h-full top-[70px]  items-center flex justify-center grid grid-cols-2">
        <motion.div
          className="h-full w-full  "
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.7, ease: "easeInOut" }}
        >
          <div className="centar h-full w-full  ">
            <h1 className="text-white text-6xl bg-yellow text-black p-2">
              <span className="text-6xl ">
                {" "}
                Hi,
                <span className="text-4xl italic p-4">I'm Roberto</span>{" "}
                <br></br>
              </span>
            </h1>
            <h1 className="text-8xl font-bold bg-dark p-2 text-white">
              a web developer
            </h1>

            <h1 className="text-grey mb-2  ">
              Specialized in Frontend: React, Javascript, HTML, CSS
            </h1>
            <Link to="/aboutme">
              <button className="flex rounded-sm justify-start mt-4 bg-yellow p-4 w-[150px] hover:w-full transition-all hover:bg-dark hover:text-white">
                About me
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "tween", duration: 0.7, ease: "easeInOut" }}
          className="h-full w-full  shadow-xl bato relative"
          style={styled}
        >
          <Link to="/projects">
            <div className="h-full w-full bg-black bg-opacity-30 absolute top-0 left-0 hover:bg-transparent cursor-pointer transiton-all group ">
              <div className="h-full w-full flex justify-end relative">
                <h1 className="text-2xl font-bold text-dark text-end absolute bottom-10 right-10 invisible bg-yellow w-[30%]  group-hover:visible  ">
                  My <br></br> <span>Projects</span>
                </h1>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
