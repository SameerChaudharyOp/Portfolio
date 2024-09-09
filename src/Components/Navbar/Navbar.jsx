// Navbar.js
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { FaLinkedin, FaBehance, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const rootElement = document.documentElement;
    if (theme === "dark") {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav
      className={`p-4 md:mx-36 rounded-full flex items-center justify-between relative ${
        theme === "light"
          ? "bg-lightNavbarBackground text-lightNavbarText"
          : "bg-darkNavbarBackground text-darkNavbarText"
      }`}
    >
      <div className="text-lg font-bold">Sameer Ahmed Chaudhari</div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Dark/Light Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 bg-transparent rounded hover:bg-lightNavbarHover dark:hover:bg-darkNavbarHover"
          aria-label="Toggle Dark Mode"
        >
          {theme === "light" ? (
            <MoonIcon className="h-5 w-5" />
          ) : (
            <SunIcon className="h-5 w-5" />
          )}
        </button>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-green-400 font-bold" : undefined
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-green-400 font-bold" : undefined
          }
        >
          About Me
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-green-400 font-bold" : undefined
          }
        >
          Contact
        </NavLink>
        {/* Social Media Icons */}
        {/* <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <FaLinkedin className="h-5 w-5" />
        </a>
        <a
          href="https://www.behance.net/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaBehance className="h-5 w-5" />
        </a>
        <a
          href="https://www.twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaTwitter className="h-5 w-5" />
        </a> */}
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center space-x-4">
        {/* Dark/Light Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 bg-transparent rounded hover:bg-lightNavbarHover dark:hover:bg-darkNavbarHover"
          aria-label="Toggle Dark Mode"
        >
          {theme === "light" ? (
            <MoonIcon className="h-5 w-5" />
          ) : (
            <SunIcon className="h-5 w-5" />
          )}
        </button>
        <button className="focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`absolute top-16 right-0 w-full md:hidden ${
            theme === "light"
              ? "bg-lightNavbarBackground"
              : "bg-darkNavbarBackground"
          }`}
        >
          <ul className="flex flex-col items-start p-4 space-y-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "font-bold" : "text-white"
                }
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "font-bold" : "text-white"
                }
                onClick={toggleMenu}
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "font-bold" : "text-white"
                }
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
