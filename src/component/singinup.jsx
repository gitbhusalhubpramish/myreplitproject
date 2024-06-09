import React, { useState, useEffect } from "react";
import "../App.css";
import axios from 'axios';

const SignIn = () => {
  // Use useState hook to manage state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(name, email, password); // Log the state
  };

  useEffect(() => {
    axios.get('http://localhost:5000/api')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name} 
        onChange={(e) => setName(e.target.value)} // Update state using setName
        placeholder="Name"
        required
      />
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Update state using setEmail
        placeholder="Email"
        required
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Update state using setPassword
        placeholder="Password"
        required
      />
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignIn;