import React from "react";
import logo from "../img/logo.png";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full border-t-[1px] bg-primary">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={scrollTop}
      >
        <img src={logo} alt="logo" className="h-7" />
        <div className="text-xl">aaDev</div>
      </div>
      <div className="flex items-center justify-center gap-5 p-10 [&>a>i]:text-4xl [&>a>i]:transition-all [&>a>i]:duration-300 [&>a>i:hover]:text-blue-400 [&>a>i:hover]:-translate-y-1">
        <a href="https://www.linkedin.com/in/arifalkharusi/" target="_blank">
          <i className=" fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/Arifalkharusi?tab=repositories"
          target="_blank"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
