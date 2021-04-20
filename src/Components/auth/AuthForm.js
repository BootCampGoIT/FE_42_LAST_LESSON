import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const AuthForm = () => {
  const [state, setState] = useState({ ...initialState });
  const location = useLocation();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // isSignUpForm();
    // ? signUp({ ... state, returnSecureToken: true })
    // : signIn({ ... state, returnSecureToken: true });
  };
  const isSignUpForm = () => {
    return location.pathname === "/signup";
  };
  return (
    <>
      <h2>
        Please,
        {isSignUpForm() ? "sign up" : "sign in"}!
      </h2>
      <form onSubmit={onHandleSubmit}>
        <label>
          Email:
          <input
            type='text'
            name='email'
            value={state.email}
            onChange={onHandleChange}
          />
        </label>
        <label>
          Password:
          <input
            type='text'
            name='password'
            value={state.password}
            onChange={onHandleChange}
          />
        </label>
        <button type='submit'>{isSignUpForm() ? "sign up" : "sign in"}</button>
      </form>
    </>
  );
};

export default AuthForm;
