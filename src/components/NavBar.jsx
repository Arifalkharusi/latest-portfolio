import React from "react";
import logo from "../img/logo.png";

const NavBar = () => {
  const scrollIntoView = (e) => {
    if (e.target.localName === "li") {
      const section = document.querySelector(`.${e.target.innerHTML}`);
      section && section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 z-10 flex items-center justify-center w-full bg-primary">
      <div className="flex flex-col items-center justify-between w-full gap-4 md:flex-row">
        <div className="flex items-center gap-1">
          <img src={logo} alt="logo" className="h-7" />
          <div className="text-xl">aaDev</div>
        </div>
        <ul
          className="flex items-center gap-8 font-bold [&>li:hover]:text-blue-400 [&>li:hover]:cursor-pointer [&>li:hover]:transition-colors"
          onClick={scrollIntoView}
        >
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
