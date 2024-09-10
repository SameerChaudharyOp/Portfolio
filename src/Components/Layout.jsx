import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import About from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function Layout() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-darkBackground text-black dark:text-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="p-4">
        <Outlet />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default Layout;
