import React from "react";
import me from "../img/me.png";
import plus from "../img/plus.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Front-End Developer", "Back-End Developer"],
    loop: {},
  });

  const scrollIntoView = (e) => {
    const section = document.querySelector(`.${e.target.getAttribute("loc")}`);
    section && section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex items-center justify-center w-full Home bg-primary">
      <div className="flex flex-col py-[120px] md:py-0 items-center justify-center w-full h-auto gap-10 md:justify-start md:h-screen md:gap-60 md:flex-row">
        <div className="flex flex-col items-center gap-10 md:items-start">
          <div className="flex flex-col items-center gap-1 font-bold md:items-start">
            <div className="text-2xl">Hello, I'm</div>
            <div className="text-[40px] md:text-[50px]">
              Arif <span className="text-blue-400">Al Kharusi</span>
            </div>
            <div className="text-xl">
              <span className="font-light">A </span>
              <span className=""> {text}</span>
              <span>
                <Cursor />
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5 text-sm font-bold">
            <button
              className="px-5 py-2 bg-blue-400 rounded-sm"
              loc="Contact"
              onClick={scrollIntoView}
            >
              HIRE ME
            </button>
            <div
              loc="Portfolio"
              className="text-blue-400 cursor-pointer"
              onClick={scrollIntoView}
            >
              VIEW MY PORTFOLIO
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={me} alt="me" className="w-full max-w-md rounded-full" />
          <ul className="absolute hidden xl:flex top-[50%] translate-y-[-50%] right-[-150px] flex-col gap-4">
            <li className="flex items-center">
              <img
                src={plus}
                alt="plus"
                className="h-[64px] bg-gray-300 rounded-s-md"
              />
              <div className="w-full px-8 py-2 font-bold text-black bg-gray-200 rounded-e-md">
                <div>ATTENTION</div>
                <div>TO DETAIL</div>
              </div>
            </li>
            <li className="flex items-center">
              <img
                src={plus}
                alt="plus"
                className="h-[64px] bg-gray-300 rounded-s-md"
              />
              <div className="w-full px-8 py-2 font-bold text-black bg-gray-200 rounded-e-md">
                <div>TEAM </div>
                <div>ORIENTED</div>
              </div>
            </li>
            <li className="flex items-center">
              <img
                src={plus}
                alt="plus"
                className="h-[64px] bg-gray-300 rounded-s-md"
              />
              <div className="w-full px-8 py-2 font-bold text-black bg-gray-200 rounded-e-md">
                <div>RESPONSIVE</div>
                <div>DESIGN</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
