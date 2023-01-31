import React from "react";
import Img from "../slike/pattern.png";
import { FaBackspace } from "react-icons/fa";
import Img1 from "../slike/skills.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Aboutme = ({ url }) => {
  const style = {
    backgroundImage: `url(${Img})`,
  };
  const styled = {
    backgroundImage: `url(${Img1})`,
  };
  console.log(window.location.url);
  return (
    <div className="w-screen h-[calc(100%-50px)] absolute top-[50px] final flex justify-center">
      <motion.div
        className="h-full w-[60%] bg-red flex justify-center "
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          className="h-full w-[80%] text-white centrar  relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", duration: 0.7, ease: "easeInOut" }}
        >
          <Link to="/">
            <FaBackspace
              size={50}
              className="absolute top-10 left-0 hover:text-dark hover:scale-125 transition-all"
            />
          </Link>
          <div className="bg-dark mb-10 w-[60%] shadow-2xl">
            <h1 className="text-8xl font-bold text-white">Who am I?</h1>
          </div>{" "}
          <h1 className="text-5xl bg-dark">My name is Roberto</h1>
          <h1 className="text-xl p-1 bg-dark">
            I'm a young, self-taught junior front end developer from Croatia.{" "}
            <br></br>
            I'm very familiar with React, Javascript, HTML and CSS, tailwind,
            framer-motion etc. <br /> I love doing frontend, but I'm currently
            learning backend aswell. <br></br>Please feel free to contact me if
            you need any further information.
          </h1>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Aboutme;
