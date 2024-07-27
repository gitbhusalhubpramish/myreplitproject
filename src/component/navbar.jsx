import React, { memo } from "react";
import "../index.jsx";
import "../App.css";
import Menubtn from "./menubtn.jsx";
import "../index.css";
import "../../public/favicon.svg";
// Separate component for the results list

const Navbar = ({ toggleMenu, handleKeyPress, ResultsList, query, handleResultsChange, performSearch, results, respond, setQuery}) => {
  // const [query, setQuery] = useState("");
  // const [results, setResults] = useState([]);
  // const [respond, setRespond] = useState(false);
  
  return (
    <nav className="navbar color-white overflow-hidden ">
      <div className="other space-x-40">
        <ul className="menubtnlipar h-6 w-6 justify-center item-center flex">
          <li className="menubtnpar h-6 border-solid border-black border-2">
            <Menubtn toggleMenu={toggleMenu} />
          </li>
        </ul>

        <ul
          id="webnamepar"
          className="web text-white z-index-0 left-5 relative"
        >
          <img
            className="w-20 top-5 relative h-5"
            src="../../public/favicon.svg"
          />
        </ul>
        <ul>
          <li className="mx-0  my-2.5">
            <ul
              className={`flex rounded-3xl bg-gray-300 h-7`}
            >
              <input
                className="search mx-0 rounded-l-3xl rounded-r-0 my-0 h-7"
                type="text"
                placeholder="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  handleResultsChange();
                  
                }}
                onFocus={handleResultsChange}
                onKeyDown={handleKeyPress}
              />

              <button
                className="h-7 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500  rounded-r-3xl py-1 w-9"
                onClick={performSearch} // Use the memoized performSearch
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.71 20.29l-5.4-5.4a7.92 7.92 0 001.69-4.89 8 8 0 10-8 8 7.92 7.92 0 004.89-1.69l5.4 5.4a1 1 0 001.42-1.42zM10 16a6 6 0 116-6 6 6 0 01-6 6z" />
                </svg>
              </button>
            </ul>

            {/* Create a separate component for the results list */}
            {/* <ResultsList results={results} /> */}
          </li>
        </ul>
      </div>
      <ul className="item">
        <ul className="item">
          <li>
            <a className="text-blue-600" href="/home">
              Home
            </a>
          </li>
          <li>
            <a className="text-blue-600" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="text-blue-600" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="text-blue-600" href="#">
              Contact
            </a>
          </li>
          <li>
            <a href="/singinup/singin">
              <button
                id="singinpar"
                className="bg-deepskyblue singinuppar rounded flex text-white border-solid border-2 border-black"
              >
                <div
                  id="singin"
                  className="text-decoration-none color-white singinup flex color-white"
                >
                  sign in
                </div>
              </button>
            </a>
          </li>
          <li>
            <a href="/singinup/singup">
              <button
                id="singuppar"
                className="bg-deepskyblue singinuppar rounded flex text-white border-solid border-2 border-black"
              >
                <div
                  href="/singinup"
                  id="singup"
                  className="text-decoration-none color-white singinup flex color-white "
                >
                  sign up
                </div>
              </button>
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default memo(Navbar);
