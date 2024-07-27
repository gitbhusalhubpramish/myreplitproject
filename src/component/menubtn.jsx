import React from 'react';
import "../App.css";

const Menubtn = ({ toggleMenu }) => {
  
  return (
    <button type="button" className="menuiconbtn h-5 border-solid border-black border-1px w-6" onClick={toggleMenu}>
      <svg
        aria-hidden="true"
        height="17"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        className="octicon octicon-three-bars Button-visual h-6 m-0 p-0"
      >
        <path
          className="menuicon "
          d={`M1 2.75A.75.75 0 0 1 1.75 2h14a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Z 
          M1 7.75A.75.75 0 0 1 1.75 7h14a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75Z 
          M1.75 12h14a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z`}

        ></path>
      </svg>
    </button>
  );
};

export default Menubtn;