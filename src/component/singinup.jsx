// SingUp.jsx
import React, { useState } from "react";
import "../App.css";
import { useForm } from "react-hook-form";

const SingUp = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm();

  const handleSignUp = async (data) => {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
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
        {errors.username && <div className="red">{errors.username.message}</div>}
        <br />
        <input
          placeholder="password"
          {...register("password", {
            minLength: { value: 7, message: "Min length of password is 7" },
          })}
          type="password"
        />
        {errors.password && <div className="red">{errors.password.message}</div>}
        <br />
        <input disabled={isSubmitting} type="submit" value="Submit" />
      </form>
    </>
  );
};

const SingIn = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm();

  const handleSignIn = async (data) => {
    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
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
        <input disabled={isSubmitting} type="submit" value="Submit" />
      </form>
    </>
  );
};

const SignInSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <button onClick={toggleForm}>{isLogin ? "not having an account" : "already having an account"}</button>
      {isLogin ? <SingIn /> : <SingUp />}
    </div>
  );
};

export default SignInSignUp;
