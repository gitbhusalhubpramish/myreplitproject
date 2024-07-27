import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Page = ({ showMenu, results, ResultsList}) => {
  
  return (
    <div className={`${showMenu ? "menuopenforapp " : ""}main`}>
      <div className="contain">
        <ResultsList results={results} />
        
      </div>
    </div>
  );
};

export default Page;
