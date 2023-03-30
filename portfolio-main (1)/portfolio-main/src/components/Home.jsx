import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import HeroImage from "../assets/heroimage.jpeg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 md:pt-40"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-screen px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            I'm a Front End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Hi there, I'm Pushpraj, a passionate Front End Developer who loves creating beautiful and engaging user experiences.I have completed over 300 problem-solving questions on the GeeksforGeeks coding platform.Tech stack: C++, HTML, Css, Scss, Bootstrap, JavaScript, jQuery, Reactjs .Proficiency in code optimization to improve performance.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </Link> 
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-3/3 md:w-full sm:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
