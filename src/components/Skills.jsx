import React from "react";
import { Marquee } from "./magicui/marquee";
import { ShineBorder } from "./magicui/shine-border";
import ProgressBar from "@ramonak/react-progress-bar";

import html from "../assets/html.svg";
import css from "../assets/css.svg";
import react from "../assets/react.svg";
import tail from "../assets/tail.svg";
import mongo from "../assets/mongo.svg";
import js from "../assets/js.svg";
import node from "../assets/node.svg";
import es from "../assets/es.svg";
import figma from "../assets/figma.svg";
import gmail from "../assets/gmail.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

import { Dock, DockIcon } from "./magicui/dock"; // Adjust the path if needed

const Skills = () => {
  return (
    <div className="mx-32 mt-[10%] mb-[10%] " id="skills">
      <div className="mb-9">
        <h1 className="text-center text-white text-4xl font-bold mb-[80px]">
          Skills
        </h1>
      </div>
      <div className="flex flex-col gap-10">
        <Marquee
          pauseOnHover="true"
          className="text-white text-xl font-semibold"
        >
          <span className="mx-8">
            <ShineBorder>
              <div className="items-center flex flex-col gap-3">
                <img src={react} width={50} height={50} alt="" />
                <ProgressBar
                  className="w-[200px]"
                  height="15px"
                  completed="85%"
                ></ProgressBar>
              </div>
            </ShineBorder>
          </span>
          <span className="mx-8">
            <ShineBorder>
              <div className="items-center flex flex-col gap-3">
                <img src={tail} width={50} height={50} alt="" />
                <ProgressBar
                  className="w-[200px]"
                  height="15px"
                  completed="95%"
                ></ProgressBar>
              </div>
            </ShineBorder>
          </span>
          <span className="mx-8">
            <ShineBorder>
              <div className="items-center flex flex-col gap-3">
                <img src={js} width={50} height={50} alt="" />
                <ProgressBar
                  className="w-[200px]"
                  height="15px"
                  completed="80%"
                ></ProgressBar>
              </div>
            </ShineBorder>
          </span>
          <span className="mx-8">
            <ShineBorder>
              <div className="items-center flex flex-col gap-3">
                <img src={node} width={50} height={50} alt="" />
                <ProgressBar
                  className="w-[200px]"
                  height="15px"
                  completed="75%"
                ></ProgressBar>
              </div>
            </ShineBorder>
          </span>
        </Marquee>
        <Marquee
          pauseOnHover="true"
          reverse="true"
          className="text-white text-xl font-semibold"
        >
          <span className="mx-8">
            <ShineBorder>
              <div className="items-center flex flex-col gap-3">
                <img src={react} width={50} height={50} alt="" />
                <ProgressBar
                  className="w-[200px]"
                  height="15px"
                  completed="90%"
                ></ProgressBar>
              </div>
            </ShineBorder>
          </span>
          <span className="mx-8">
            <ShineBorder>
              <div className="items-center flex flex-col gap-3">
                <img src={figma} width={50} height={50} alt="" />
                <ProgressBar
                  className="w-[200px]"
                  height="15px"
                  completed="85%"
                ></ProgressBar>
              </div>
            </ShineBorder>
          </span>
          <span className="mx-8">
            <ShineBorder>
              <div className="items-center flex flex-col gap-3">
                <img src={es} width={50} height={50} alt="" />
                <ProgressBar
                  className="w-[200px]"
                  height="15px"
                  completed="80%"
                ></ProgressBar>
              </div>
            </ShineBorder>
          </span>
          <span className="mx-8">
            <ShineBorder>
              <div className="items-center flex flex-col gap-3">
                <img src={mongo} width={50} height={50} alt="" />
                <ProgressBar
                  className="w-[200px]"
                  height="15px"
                  completed="90%"
                ></ProgressBar>
              </div>
            </ShineBorder>
          </span>
          <span className="mx-8">
            <ShineBorder>
              <div className="items-center flex flex-col gap-3">
                <img src={html} width={50} height={50} alt="" />
                <ProgressBar
                  className="w-[200px]"
                  height="15px"
                  completed="95%"
                ></ProgressBar>
              </div>
            </ShineBorder>
          </span>
          <span className="mx-8">
            <ShineBorder>
              <div className="items-center flex flex-col gap-3">
                <img src={css} width={50} height={50} alt="" />
                <ProgressBar
                  className="w-[200px]"
                  height="15px"
                  completed="95%"
                ></ProgressBar>
              </div>
            </ShineBorder>
          </span>
        </Marquee>
      </div>

      <div className="relative my-9">
        <Dock className="absolute right-0 border-2 px-7">
          <DockIcon>
            <a target="_blank" href="mailto:dineshssd559@gmail.com">
              <img src={gmail} width={40} height={40} alt="Gmail" />
            </a>
          </DockIcon>
          <DockIcon>
            <a target="_blank" href="https://github.com/Dinesh-18-04">
              <img src={github} width={40} height={40} alt="GitHub" />
            </a>
          </DockIcon>
          <DockIcon>
            <img src={linkedin} width={40} height={40} alt="LinkedIn" />
          </DockIcon>
        </Dock>
      </div>
    </div>
  );
};

export default Skills;
