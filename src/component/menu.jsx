import React from "react";
import "../index"
import "../App.css";
const Menu = () =>{
  return(
      <ul className="menu">
        <li className="btnpar">
          <button className="menubtnbody">you</button>
        </li>
        <li className="btnpar">
          <button className="menubtnbody">project</button>
        </li>
        <li className="btnpar">
          <button className="menubtnbody">liked project</button>
        </li>
      </ul>
  )
}
export default Menu;
