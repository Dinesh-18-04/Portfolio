import React from "react";
import { ScrollProgress } from "./magicui/scroll-progress";

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full z-[100]">
      <div className="relative z-10 py-4 bg-black">
        <div className="flex justify-between mx-28 font-[Poppins]">
          <div>
            <h1 className="text-4xl font-bold cursor-pointer text-white">
              Portfolio
            </h1>
          </div>
          <div>
            <ul className="flex gap-10 text-xl font-semibold text-white">
              <li>
                <a className="hover:text-red-300 transition-all" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-red-300 transition-all" href="#about">
                  About Me
                </a>
              </li>
              <li>
                <a
                  className="hover:text-red-300 transition-all"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a className="hover:text-red-300 transition-all" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a
                  className="hover:text-red-300 transition-all"
                  href="/contacts"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ScrollProgress className="h-1.5 rounded-lg bg-red-500 relative z-0" />
    </div>
  );
};

export default Navbar;
