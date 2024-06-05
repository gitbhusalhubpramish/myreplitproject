// singinup.jsx

import React, { useState } from "react";
// import express from 'express';
// const app = express();
import "../App.css";
import { useForm } from "react-hook-form";
// import "../../backend/server.js";
// app.listen(port, () => {
//   console.log(`Backend server listening at http://localhost:${port}`);
// });
const SignIn = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/users', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <br/>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <br/>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <br/>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignIn;