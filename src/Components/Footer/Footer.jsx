import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  // Custom smooth scroll function with a slower speed
  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      let startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      let startTime = null;

      const scrollAnimation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const duration = 1000; // Duration in milliseconds (adjust for slower or faster scroll)

        // Ease function for smooth effect
        const ease = (t, b, c, d) => {
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t + b;
          t--;
          return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
      };

      requestAnimationFrame(scrollAnimation);
    }
  };

  return (
    <footer
      className={`bg-lightNavbarBackground dark:bg-darkNavbarBackground text-lightNavbarText dark:text-darkNavbarText py-5 md:mx-48 -mb-14 rounded-full`}
    >
      <div className="container mx-auto flex flex-col items-center">
        {/* Footer Branding */}
        <h1 className="text-2xl font-semibold mb-4">Sameer Ahmed Chaudhari</h1>

        {/* Navigation Links */}
        <nav className="flex space-x-8 text-base mb-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-white underline"
                : "text-gray-200 hover:text-white transition duration-300"
            }
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-white underline"
                : "text-gray-200 hover:text-white transition duration-300"
            }
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("about-section");
            }}
          >
            About Me
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-white underline"
                : "text-gray-200 hover:text-white transition duration-300"
            }
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("contact-section");
            }}
          >
            Contact
          </NavLink>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-6">
          <a
            href="https://www.linkedin.com/in/sameer-ahmed-chaudhari-1189b722a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            href="https://www.instagram.com/ig_sameer_tweet/?igsh=c2s0dXVtNWZmZzk%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <FaInstagram size={25} />
          </a>
          <a
            href="mailto:Sameerchaudhary749@gmail.com"
            className="text-white hover:text-gray-300 transition duration-300"
            aria-label="Email Sameer"
          >
            <FaEnvelope size={25} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-200">
          © {new Date().getFullYear()} Sameer Ahmed Chaudhari. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
