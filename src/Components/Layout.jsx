import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function Layout() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-darkBackground text-black dark:text-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
