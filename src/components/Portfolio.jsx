import React from "react";
import data from "../data/data.json";
import ecomerce from "../img/ecomerce.png";
import youtube from "../img/youtube.png";
import prime from "../img/prime.png";
import tax from "../img/uberTax.png";
import Project from "./Projects";

const Portfolio = () => {
  const images = [ecomerce, youtube, prime, tax];

  return (
    <div className=" Portfolio">
      <div className="flex flex-col gap-20 mt-20 text-black">
        <div className="self-center font-bold">PORTFOLIO</div>
        <div className="flex flex-col gap-10">
          {data.map((x, i) => (
            <Project data={x} image={images[i]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
