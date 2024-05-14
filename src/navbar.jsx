import React, { useState } from "react";
import "./index.jsx";
import "./App.css";
import  "./menu.jsx"
const Navbar = () => {
  const [openmenu, setOpenmenu] = useState(false);

  const togglemenu = () => {
    setOpenmenu(!openmenu);
    console.log(openmenu);
  }

  return (
    <nav className="navbar">
      <div className="other">
        <ul>
          <li className="menuicon">
            <button type="button" className="menuiconbtn" onClick={togglemenu}>
              <svg
                aria-hidden="true"
                height="17"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="octicon octicon-three-bars Button-visual"
              >
                <path
                  className="menuicon"
                  d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
        <ul className="web">
          <li>webname</li>
        </ul>
        <ul>
          <input className="search" type="text" placeholder="search" />
        </ul>
      </div>
      <ul className={`item ${openmenu ? "open" : ""}`}>
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
