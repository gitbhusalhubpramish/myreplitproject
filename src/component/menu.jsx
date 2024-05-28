import React from "react";
import "../index";
import "../App.css";

const Menu = () => {

  return (
    <aside>
      <ul className="menu">
        <li className="btnpar">
          <button className="menubtnbody  menubtnbodybutton">you</button>
        </li>
        <li className="btnpar">
          <div>
            <div className="menubtnbody  project">
              Project
              <button className="menubtnbody menubtnbodybutton project"> 
                + new project
              </button>
            </div>
          </div>
        </li>
        <li className="btnpar ">
          <button className="menubtnbody menubtnbodybutton ">liked project</button>
        </li>
      </ul>
    </aside>
  );
};

export default Menu;