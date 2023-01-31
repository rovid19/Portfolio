import React from "react";
import Img from "../slike/pattern.png";
import { Link } from "react-router-dom";
import { FaBackspace } from "react-icons/fa";
import Img1 from "../slike/projekt.jpg";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
const Projects = () => {
  const [link, setLink] = useState(
    "https://rovid19.github.io/SoccerScoreFinal/"
  );
  const handleLink = () => {
    window.open(link);
  };
  const style = {
    backgroundImage: `url(${Img})`,
  };
  const styled = {
    backgroundImage: `url(${Img1})`,
  };
  return (
    <div className="w-screen h-[calc(100%-50px)] absolute top-[50px] final flex justify-center">
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
        className="h-full w-[60%] bg-red flex justify-center "
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
            <h1 className="text-8xl font-bold text-white">Projects</h1>
          </div>{" "}
          <div className="h-[30%] w-full bg-dark grid grid-cols-2 shadow-2xl  ">
            <div className="w-full h-full  baba p-4">
              {" "}
              <h1 className="text-4xl mb-2">SoccerScore</h1>
              <h1 className="">
                This project was built on React and Tailwind CSS.It's a website
                about soccer leagues, scores, teams, live games, highlights etc.
                It was built using 3 different APIs: "Football", "FootAPI" and
                "ScoreBatHighlights". Optimized for both mobile and desktop.
              </h1>
              <a
                href="https://github.com/rovid19/SoccerScoreFinal"
                target="_blank"
                className="mt-4 bg-yellow text-black rounded-sm p-1 hover:bg-red transition-all flex items-center"
              >
                <FaGithub className="mr-2" />
                GitHub Link
              </a>
            </div>

            <div
              onClick={handleLink}
              style={styled}
              className="cursor-pointer hover:scale-110 transition-all bg-cover"
            ></div>
          </div>
        </motion.div>{" "}
      </motion.div>{" "}
    </div>
  );
};

export default Projects;
