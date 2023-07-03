import React from "react";
import "../styles/styles.css";
import { FaGithub, FaRegEye } from "react-icons/fa";

const PortfolioItem = ({ title, imgURL, stack, link, github }) => {
  return (
    <div className="mt-24 border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
      <img
        src={imgURL}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
          {stack.map((item) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
              {item}
            </span>
          ))}
        </p>
        <div className="flex flex-col md:flex-row gap-2 my-2">
          <a href={link} target="blank" className="button-48" role="button">
            <span className=" flex gap-2 text">
              Live Link <FaRegEye />
            </span>
          </a>

          <a href={github} target="blank" className="button-48" role="button">
            <span className=" flex gap-2 text">
              {" "}
              Github Repo <FaGithub />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
