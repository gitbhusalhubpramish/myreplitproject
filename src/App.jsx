import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ComponentInApp from "./component/componentinapp";
//src/component/componentinapp.jsx

const page = ({showMenu}) => {
  
  return (
    <div className={`${showMenu ? "menuopenforapp " : ""}main`}>
      <div className='contain'>
        <ComponentInApp />
      </div>
    </div>
  )
}

export default page;
