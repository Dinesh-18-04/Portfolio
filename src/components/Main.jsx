import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import pro from "../assets/pro.png";
import { AuroraText } from "./magicui/aurora-text";

const Main = () => {
  const [text] = useTypewriter({
    words: ["Mern Stack", "Developer"],
    loop: {},
  });
  return (
    <div className="md:mx-32 mt-[9%] mb-10">
      <div className="md:flex justify-between items-center md:w-[100%]">
        <div className="md:w-[400px] w-[200px] max-md:mx-auto order-1 md:order-2">
          <img src={pro} alt="" />
        </div>
        <div className="md:w-[50%] md:order-1 order-2 mt-5 mx-2">
          <h1 className="md:text-4xl text-2xl font-bold text-white">
            Hi, I'm Dinesh Kumar
          </h1>
          <h1 className="md:text-[100px] text-[50px] font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            {text}
            <Cursor />
          </h1>
          <p className="md:text-[18px] text-[15px] text-justify font-bold text-white">
            I’m a passionate web developer dedicated to crafting responsive,
            intuitive, and visually stunning websites. Leveraging cutting-edge
            front-end and back-end technologies, I bring ideas to life with
            precision and creativity. Let’s collaborate and create something
            exceptional!
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#projects">
              <button className="md:px-6 px-3 md:py-3 py-1 text-lg font-bold text-cyan-400 border-2 border-cyan-400 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-cyan-400 hover:text-black hover:shadow-cyan-400/50">
                View My Work
              </button>
            </a>
            <button className="md:px-6 px-3 md:py-3 py-1 text-lg font-bold text-red-400 border-2 border-red-400 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-red-400 hover:text-white hover:shadow-cyan-400/50">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
