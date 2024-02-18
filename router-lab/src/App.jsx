import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="left-navbar">
          <Link className="logo" to="/">
            Kalvium❤️
          </Link>
        </div>
        <div className="right-navbar">
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;