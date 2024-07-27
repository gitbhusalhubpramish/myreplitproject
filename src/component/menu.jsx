import React from "react";
import "../index";
import "../App.css";

const Menu = () => {
  return (
    <aside>
      <ul className="menu">
        <li className="btnpar border-1 border-gray-950 border-solid">
          <button className="menubtnbody  menubtnbodybutton">you</button>
        </li>
        <li className="btnpar w-auto overflow-hidden border-1 border-gray-950">
          <div className="w-auto">
            <div className="menubtnbody  project w-auto">
              Project
              <button className="menubtnbody menubtnbodybutton project w-auto border-1 border-gray-950">
                + new project
              </button>
            </div>
          </div>
        </li>
        <li className="btnpar ">
          <button className="menubtnbody menubtnbodybutton border-2 border-gray-950 border-solid">
            liked project
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Menu;
