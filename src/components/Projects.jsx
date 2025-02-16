import React from "react";

import blast from "../assets/BlastMailer.png";
import weather from "../assets/WeatherApp.png";
import Pixel from "../assets/Pixel.png";
import trip from "../assets/Trip.png";
import greenden from "../assets/Greenden.png";

import html from "../assets/html.svg";
import css from "../assets/css.svg";
import react from "../assets/react.svg";
import tail from "../assets/tail.svg";
import mongo from "../assets/mongo.svg";
import api from "../assets/api.svg";

import { MagicCard } from "./magicui/magic-card";
import { Meteors } from "./magicui/meteors";
import { ShinyButton } from "./magicui/shiny-button";
import { ShimmerButton } from "./magicui/shimmer-button";

const Projects = () => {
  return (
    <div className="md:mx-32 mx-4 scale-90 md:mt-[10%] md:mb-[10%] " id="projects">
      <div className="mb-9">
        <h1 className="text-center text-white text-3xl md:text-4xl font-bold md:mb-[80px]">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg">
        <div className="overflow-hidden w-full relative shadow-[0_0_15px_5px_rgba(255,255,0,0.6)] rounded-lg">
          <MagicCard className="w-[100%] h-[550px]">
            <Meteors />
            <div className="flex justify-between items-center">
              <div className="">
              <h1 className="text-3xl font-semibold m-3">Blast Mailer</h1>
              </div>
              <div className="mr-[30px] flex gap-2">
                <img src={react} width={20} height={20}  alt="" />
                <img src={tail} width={20} height={20}  alt="" />
                <img src={mongo} width={20} height={20}  alt="" />
                <img src={api} width={20} height={20}  alt="" />
              </div>
            </div>
            
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
            <div className="flex justify-between items-center">
              <div className="">
              <h1 className="text-3xl font-semibold m-3">Weather App</h1>
              </div>
              <div className="mr-[30px] flex gap-2">
                <img src={react} width={20} height={20}  alt="" />
                <img src={tail} width={20} height={20}  alt="" />
                <img src={api} width={20} height={20}  alt="" />
              </div>
            </div>
            
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
            <div className="flex justify-between items-center">
              <div className="">
              <h1 className="text-3xl font-semibold m-3">Greenden</h1>
              </div>
              <div className="mr-[30px] flex gap-2">
                <img src={html} width={20} height={20}  alt="" />
                <img src={tail} width={20} height={20}  alt="" />
              </div>
            </div>
            
            <img
              src={greenden}
              className="m-2 rounded-lg shadow-lg w-[96%]"
              alt=""
            />
            <p className="m-3 mt-5 font-mono">
              GreenDen is a plant shopping website where you focused on
              developing the frontend, ensuring a user-friendly interface for
              browsing and purchasing plants online. It enhances the shopping
              experience with smooth navigation and an appealing design.
            </p>
            <div className="flex items-center justify-between w-[96%]">
              <a href="https://greenden-two.vercel.app/" target="_blank">
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
        <div className="overflow-hidden w-full relative shadow-[0_0_15px_5px_rgba(255,255,0,0.6)] rounded-lg  ">
          <MagicCard className="w-[100%] h-[550px]">
            <Meteors />
            <div className="flex justify-between items-center">
              <div className="">
              <h1 className="text-3xl font-semibold m-3">TripAdvisor Clone</h1>
              </div>
              <div className="mr-[30px] flex gap-2">
                <img src={html} width={20} height={20}  alt="" />
                <img src={css} width={20} height={20}  alt="" />
              </div>
            </div>
            <img
              src={trip}
              className="m-2 rounded-lg shadow-lg w-[96%]"
              alt=""
            />
            <p className="m-3 mt-5 font-mono">
              A frontend replica of the TripAdvisor website built using HTML and
              CSS. Designed with a responsive layout, intuitive navigation, and
              visually appealing styles. Showcases key sections like hotel
              listings, travel guides, and user reviews.
            </p>
            <div className="flex items-center justify-between w-[96%]">
              <a
                href="https://dinesh-18-04.github.io/Trip-Advisor-Clone/"
                target="_blank"
              >
                <ShinyButton className="m-3" children="Try Now →"></ShinyButton>
              </a>
              <a
                href="https://github.com/Dinesh-18-04/Trip-Advisor-Clone"
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
            <div className="flex justify-between items-center">
              <div className="">
              <h1 className="text-3xl font-semibold m-3">Pixel Parade</h1>
              </div>
              <div className="mr-[30px] flex gap-2">
                <img src={react} width={20} height={20}  alt="" />
                <img src={tail} width={20} height={20}  alt="" />
              </div>
            </div>
            <img
              src={Pixel}
              className="m-2 rounded-lg shadow-lg w-[96%]"
              alt=""
            />
            <p className="m-3 mt-5 font-mono">
            A sleek image gallery app built with React and TailwindCSS. Designed for a smooth user experience with a responsive layout and modern UI. Allows users to browse and download high-quality wallpapers effortlessly.
            </p>
            <div className="flex items-center justify-between w-[96%]">
              <a
                href="https://pixel-parade.vercel.app/"
                target="_blank"
              >
                <ShinyButton className="m-3" children="Try Now →"></ShinyButton>
              </a>
              <a
                href="https://github.com/Dinesh-18-04/PixelParade"
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
