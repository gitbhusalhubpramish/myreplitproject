import React, { useState, useEffect } from "react";
import axios from "axios";
// import "../../backend/server.js";
const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(name, password);
  };
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);
  function togglePassword() {
    const passwordField = document.getElementById("password");
    const button = passwordField.nextElementSibling;
    if (passwordField.type === "password") {
      passwordField.type = "text";
      button.textContent = "Hide";
    } else {
      passwordField.type = "password";
      button.textContent = "Show";
    }
  }
  return (
    <div className="bg-slate-300 h-screen justify-center item-center w-screen flex">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center  relative items-center"
      >
        <li className="border-2 border-black rounded-md m-2 flex bg-white w-56">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update state using setName
            placeholder="Name"
            className="w-56"
            required
          />
        </li>

        <br />
        <li className="border-2 border-black rounded-md m-2 flex bg-white w-56">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state using setPassword
            placeholder="Password"
            className="w-auto "
            required
          />
          <button
            type="button"
            onClick={() => {
              togglePassword();
            }}
            className="flex items-center"
          >
            Show
          </button>
        </li>

        <br />
        <button
          className="bg-gray-300 rounded border-2 border-solid border-black"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default SignIn;