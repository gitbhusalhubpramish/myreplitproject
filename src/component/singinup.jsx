import React, { useState } from 'react';
import '../App.css';
import { useForm } from 'react-hook-form';

const SignInSignUp = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and sign-up
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data. Please try again later.');
      }

      const jsonData = await response.json();
      console.log(jsonData);

      // Handle the response data here
    } catch (error) {
      console.error('Error:', error);
      // Handle the error here
    }
  };

  return (
    <>
      <div className="container">
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Switch to Sign Up" : "Switch to Login"}
        </button>
        <form onSubmit={handleSubmit(onSubmit)}>
          {!isLogin && (
            <>
              <input
                placeholder="Email"
                {...register("email", { required: { value: true, message: "This field is required" } })}
                type="email"
              />
              {errors.email && <div className="red">{errors.email.message}</div>}
              <br />
              <input
                placeholder="First Name"
                {...register("firstName", { required: { value: true, message: "This field is required" } })}
                type="text"
              />
              {errors.firstName && <div className="red">{errors.firstName.message}</div>}
              <br />
              <input
                placeholder="Last Name"
                {...register("lastName", { required: { value: true, message: "This field is required" } })}
                type="text"
              />
              {errors.lastName && <div className="red">{errors.lastName.message}</div>}
              <br />
              <input
                placeholder="Full Name"
                {...register("fullName", { required: { value: true, message: "This field is required" } })}
                type="text"
              />
              {errors.fullName && <div className="red">{errors.fullName.message}</div>}
              <br />
              <input
                placeholder="Date of Birth"
                {...register("dob", { required: { value: true, message: "This field is required" } })}
                type="date"
              />
              {errors.dob && <div className="red">{errors.dob.message}</div>}
              <br />
            </>
          )}
          <input
            placeholder="Username"
            {...register("username", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 3, message: "Min length is 3" },
              maxLength: { value: 30, message: "Max length is 30" },
            })}
            type="text"
          />
          {errors.username && <div className="red">{errors.username.message}</div>}
          <br />
          <input
            placeholder="Password"
            {...register("password", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 7, message: "Min length of password is 7" },
            })}
            type="password"
          />
          {errors.password && <div className="red">{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value={isLogin ? "Login" : "Sign Up"} />
          {errors.loginError && <div className="red">{errors.loginError.message}</div>}
          {errors.signupError && <div className="red">{errors.signupError.message}</div>}
        </form>
      </div>
    </>
  );
};

export default SignInSignUp;
