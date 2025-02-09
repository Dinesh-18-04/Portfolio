import React from "react";
import { MagicCard } from "./magicui/magic-card";
import { Meteors } from "./magicui/meteors";
import blast from "../assets/BlastMailer.png";
import weather from "../assets/WeatherApp.png";
import greenden from "../assets/Greenden.png";
import { ShinyButton } from "./magicui/shiny-button";
import { ShimmerButton } from "./magicui/shimmer-button";

const Projects = () => {
  return (
    <div className="mx-32 mt-[10%] mb-[10%] " id="projects">
      <div className="mb-9">
        <h1 className="text-center text-white text-4xl font-bold mb-[80px]" >Projects</h1>
      </div>
      <div className="grid grid-cols-3 gap-6 rounded-lg">
        <div className="overflow-hidden w-full relative shadow-[0_0_15px_5px_rgba(255,255,0,0.6)] rounded-lg">
          <MagicCard className="w-[100%] h-[550px]">
            <Meteors />
            <h1 className="text-3xl font-semibold m-3">Blast Mailer</h1>
            <img
              src={blast}
              className="m-2 rounded-lg shadow-lg w-[96%]"
              alt=""
            />
            <p className="m-3 mt-5 font-mono">
              BlastMailer is a bulk email-sending application that allows users
              to send personalized emails using an Excel sheet for recipient
              lists. It streamlines communication for businesses and
              organizations, ensuring efficiency and accuracy.
            </p>
            <div className="flex items-center justify-between w-[96%]">
              <a href="https://blast-mailer.vercel.app/" target="_blank">
                <ShinyButton className="m-3" children="Try Now →"></ShinyButton>
              </a>
              <a href="">
                <ShimmerButton children="GitHub"></ShimmerButton>
              </a>
            </div>
          </MagicCard>
        </div>
        <div className="overflow-hidden w-full relative shadow-[0_0_15px_5px_rgba(255,255,0,0.6)] rounded-lg">
          <MagicCard className="w-[100%] h-[550px]">
            <Meteors />
            <h1 className="text-3xl font-semibold m-3">Weather App</h1>
            <img
              src={weather}
              className="m-2 rounded-lg shadow-lg w-[96%]"
              alt=""
            />
            <p className="m-3 mt-5 font-mono">
              The Weather App is a responsive web application that provides
              real-time weather updates using API integration. Built with React
              and TailwindCSS, it delivers accurate forecasts with a clean and
              user-friendly interface.
            </p>
            <div className="flex items-center justify-between w-[96%]">
              <a
                href="https://weather-app-git-main-dinesh-18-04s-projects.vercel.app/"
                target="_blank"
              >
                <ShinyButton className="m-3" children="Try Now →"></ShinyButton>
              </a>
              <a
                href="https://github.com/Dinesh-18-04/Weather-App"
                target="_blank"
              >
                <ShimmerButton children="GitHub"></ShimmerButton>
              </a>
            </div>
          </MagicCard>
        </div>
        <div className="overflow-hidden w-full relative shadow-[0_0_15px_5px_rgba(255,255,0,0.6)] rounded-lg  ">
          <MagicCard className="w-[100%] h-[550px]">
            <Meteors />
            <h1 className="text-3xl font-semibold m-3">Greenden</h1>
            <img
              src={greenden}
              className="m-2 rounded-lg shadow-lg w-[96%]"
              alt=""
            />
            <p className="m-3 mt-5 font-mono">
            GreenDen is a plant shopping website where you focused on developing the frontend, ensuring a user-friendly interface for browsing and purchasing plants online. It enhances the shopping experience with smooth navigation and an appealing design.
            </p>
            <div className="flex items-center justify-between w-[96%]">
              <a
                href="https://greenden-two.vercel.app/"
                target="_blank"
              >
                <ShinyButton className="m-3" children="Try Now →"></ShinyButton>
              </a>
              <a
                href="https://github.com/Dinesh-18-04/Greenden"
                target="_blank"
              >
                <ShimmerButton children="GitHub"></ShimmerButton>
              </a>
            </div>
          </MagicCard>
        </div>
      </div>
    </div>
  );
};

export default Projects;
