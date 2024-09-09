import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./Components/Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import AboutMe from "./Components/AboutMe/AboutMe.jsx";
import Contact from "./Components/Contact/Contact.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
