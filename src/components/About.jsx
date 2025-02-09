import React from "react";
import about from "../assets/About.png";
import { BlurFade } from "./magicui/blur-fade";
const About = () => {
  return (
    <div id="about" className="mx-32 mt-[10%] mb-[10%]">
      <BlurFade>
        <div className="mb-9">
          <h1 className="text-center text-white text-4xl font-bold">
            About Me
          </h1>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-[50%] flex flex-col gap-5 ">
            <p className="text-2xl font-semibold text-white">
              Hi, I’m <span className="text-yellow-400">Dinesh Kumar</span>, a
              web developer from Kovilpatti, passionate about building
              user-friendly websites.
            </p>
            <p className="text-2xl font-semibold text-white">
              {" "}
              I specialize in building scalable solutions using the{" "}
              <span className="text-yellow-400">MERN stack</span> and delivering
              seamless user experiences.
            </p>
            <p className="text-2xl font-semibold text-white">
              Let’s connect and create something amazing together!
            </p>
          </div>
          <div className="w-[400px]">
            <img src={about} alt="" className="rounded-full" />
          </div>
        </div>
      </BlurFade>
    </div>
  );
};

export default About;
