import React from "react";
import ReactDOM from "react-dom/client";
import * as ComponentInAppContain from "./componentinappcontain"; 
import "../index";
import "../App.css";
import "../App";
const Contain = () => {
  return (
    <div className="whole-contain">
      <div className="contain-row">
        <ComponentInAppContain.Contain1 />
      </div>
    </div>
  );
};
export default Contain;
