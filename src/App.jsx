import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Page = ({ showMenu }) => {
  
  return (
    <div className={`${showMenu ? "menuopenforapp " : ""}main`}>
      <div className="contain">
        
      </div>
    </div>
  );
};

export default Page;
