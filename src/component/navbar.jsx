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
        <ul id="webnamepar" className="web">
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
        <li>
          <button id="singinpar" className="bg-deepskyblue singinuppar border-radius flex">
            <a href="#" id="singin" className="text-decoration-none color-white singinup flex">sign in</a>
          </button>
        </li>
        <li>
          <button id="singuppar" className="bg-deepskyblue singinuppar border-radius flex">
            <a href="#" id="singup" className="text-decoration-none color-white singinup flex">sign up</a>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;