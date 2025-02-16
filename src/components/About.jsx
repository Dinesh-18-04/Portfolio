import React from "react";
import about from "../assets/About.png";
import { BlurFade } from "./magicui/blur-fade";
const About = () => {
  return (
    <div id="about" className="md:mx-32 md:mt-[10%] md:mb-[10%]">
      <BlurFade>
        <div className="mb-9">
          <h1 className="text-center text-white text-3xl md:text-4xl font-bold">
            About Me
          </h1>
        </div>
        <div className="md:flex justify-between items-center">
          <div className="md:w-[400px] w-[200px] max-md:mx-auto order-1 mb-10 md:order-2">
            <img src={about} alt="" className="rounded-full" />
          </div>
          <div className="md:w-[50%] flex mx-2 flex-col gap-5 order-2 md:order-1">
            <p className="text-xl md:text-2xl font-semibold text-white">
              Hi, I’m <span className="text-yellow-400">Dinesh Kumar</span>, a
              web developer from Kovilpatti, passionate about building
              user-friendly websites.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-white">
              {" "}
              I specialize in building scalable solutions using the{" "}
              <span className="text-yellow-400">MERN stack</span> and delivering
              seamless user experiences.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-white">
              Let’s connect and create something amazing together!
            </p>
          </div>
        </div>
      </BlurFade>
    </div>
  );
};

export default About;
