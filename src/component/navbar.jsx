import React from "react";
import "../index.jsx";
import "../App.css";
import Menubtn from "./menubtn.jsx";

const Navbar = ({ toggleMenu }) => {
  return (
    <nav className="navbar">
      <div className="other">
        <ul className="menubtnlipar">
          <li className="menubtnpar">
            <Menubtn toggleMenu={toggleMenu} />
          </li>
        </ul>
        <ul className="web">
          <li>webname</li>
        </ul>
        <ul>
          <input className="search" type="text" placeholder="search" />
        </ul>
      </div>
      <ul className="item">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;