import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between m-16 mx-28  font-[Poppins]">
        <div className="">
          <h1 className="text-4xl font-bold cursor-pointer text-white">
            Portfolio
          </h1>
        </div>
        <div className="">
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
              <a className="hover:text-red-300 transition-all" href="/skills">
                Skills
              </a>
            </li>
            <li>
              <a className="hover:text-red-300 transition-all" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="hover:text-red-300 transition-all" href="/contacts">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
