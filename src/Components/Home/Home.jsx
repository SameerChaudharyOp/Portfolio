import React from "react";
import { useNavigate } from "react-router-dom";
import profilePhoto from "../../assets/mypic.jpeg"; // Ensure this path is correct
import {
  ArrowRightCircleIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid";
import Cv from "../../assets/SameerAhmedChaudhari.pdf";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-96 flex flex-col md:flex-row  mt-36 justify-center   text-white px-8">
      {/* Left Section: Name and Introduction */}
      <div className="flex flex-col items-start space-y-4 text-left">
        <h4>Software Developer</h4>
        <h1 className="text-4xl md:text-5xl font-bold">
          Hello, I’m <br />
          <span className="text-green-400">Sameer Ahmed Chaudhari</span>
        </h1>
        <p className="text-sm md:text-base text-gray-400 max-w-sm">
          I’m a frontend software developer skilled in HTML, CSS, JavaScript,
          and modern frameworks like React, Vue, and Angular.
        </p>
        <div className="flex">
          {/* Download Resume Button */}
          <a
            href={Cv}
            download
            className="flex items-center justify-center space-x-2 bg-transparent border-2 border-green-400 text-green-400 py-2 px-6 rounded-full hover:bg-green-400 hover:text-black transition duration-300"
          >
            <ArrowDownTrayIcon className="h-5 w-5" />
            <span>Download My CV</span>
          </a>
          {/* Get In Touch */}
          {/* <button
              onClick={() => navigate("/about")}
              className="flex items-center text-green-400 hover:text-green-500 transition duration-200 mt-4"
            >
              <ArrowRightCircleIcon className="h-5 w-5 mr-1" />
              Get In Touch
            </button> */}
        </div>
      </div>

      <div className="flex justify-center md:mt-0 md:ml-12 relative">
        {/* Animated Dashed Circle */}
        <div
          className="absolute w-72 h-72 rounded-full border-4 border-dashed border-green-400 animate-spin-slow"
          style={{ borderStyle: "outset" }}
        ></div>
        {/* Profile Image */}
        <img
          src={profilePhoto}
          alt="Profile"
          className="rounded-full w-64 h-64 object-cover mt-4 shadow-md relative z-10"
        />
      </div>
    </div>
  );
}

export default Home;
