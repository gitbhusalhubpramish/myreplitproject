// singinup.jsx

import React, { useState } from "react";
import "../App.css";
import { useForm } from "react-hook-form";

const SignInSignUp = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm();

  const handleSignUp = async (data) => {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSignIn = async (data) => {
    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        setLoggedIn(true);
        alert(result.message);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      {loggedIn && <div>User is logged in</div>}
      <form onSubmit={handleSubmit(handleSignUp)}>
        <input
          placeholder="email"
          {...register("email", { required: "This field is required" })}
          type="text"
        />
        <br />
        <input
          placeholder="username"
          {...register("username", {
            required: "This field is required",
            minLength: { value: 3, message: "Min length is 3" },
            maxLength: { value: 15, message: "Max length is 15" },
          })}
          type="text"
        />
        {errors.username && <div className="red">{errors.username && errors.username.message}</div>}
        <br />
        <input
          placeholder="password"
          {...register("password", {
            minLength: { value: 7, message: "Min length of password is 7" },
          })}
          type="password"
        />
        {errors.password && <div className="red">{errors.password && errors.password.message}</div>}
        <br />
        <input disabled={isSubmitting} type="submit" value="Sign Up" />
      </form>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <input
          placeholder="username"
          {...register("username", {
            required: "This field is required",
            minLength: { value: 3, message: "Min length is 3" },
            maxLength: { value: 15, message: "Max length is 15" },
          })}
          type="text"
        />
        {errors.username && <div className="red">{errors.username && errors.username.message}</div>}
        <br />
        <input
          placeholder="password"
          {...register("password", {
            minLength: { value: 7, message: "Min length of password is 7" },
          })}
          type="password"
        />
        {errors.password && <div className="red">{errors.password && errors.password.message}</div>}
        <br />
        <input disabled={isSubmitting} type="submit" value="Sign In" />
      </form>
    </>
  );
};

export default SignInSignUp;