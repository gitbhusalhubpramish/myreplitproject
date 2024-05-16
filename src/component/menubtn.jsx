import React from 'react';
import "../App.css";

const Menubtn = ({ toggleMenu }) => {

  return (
    <button type="button" className="menuiconbtn" onClick={toggleMenu}>
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
  );
};

export default Menubtn;