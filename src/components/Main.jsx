import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import pro from "../assets/pro.png";
import {AuroraText} from "./magicui/aurora-text"

const Main = () => {
  const [text] = useTypewriter({
    words: ["Mern Stack", "Developer"],
    loop: {},
  });
  return (
    <div className="mx-32 mt-[9%] mb-10">
      <div className="flex justify-between items-center w-[100%]">
        <div className="w-[50%]">
          <h1 className="text-4xl font-bold text-white">
            Hi, I'm Dinesh Kumar
          </h1>
          <h1 className="text-[100px] font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            {text}
            <Cursor />
          </h1>
          <p className="text-[18px] text-justify font-bold text-white">I’m a passionate web developer dedicated to crafting responsive, intuitive, and visually stunning websites. Leveraging cutting-edge front-end and back-end technologies, I bring ideas to life with precision and creativity. Let’s collaborate and create something exceptional!</p>
          <div className="mt-8 flex gap-4">
            <a href="#projects"><button className="px-6 py-3 text-lg font-bold text-cyan-400 border-2 border-cyan-400 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-cyan-400 hover:text-black hover:shadow-cyan-400/50">
              View My Work
            </button></a>
            <button className="px-6 py-3 text-lg font-bold text-red-400 border-2 border-red-400 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-red-400 hover:text-white hover:shadow-cyan-400/50">
              Hire Me
            </button>
          </div>
        </div>
        <div className="w-[400px]">
          <img src={pro} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
