import { Link } from "react-router-dom";
import React from "react";

const Signin = () => {
  return (
    <div className="user">
      <div className="form">
        <h1 className="user__title">SignIn</h1>
        <form
          className="form"
          onSubmit={() => {
            console.log();
          }}
        >
          <div className="form__group">
            <input
              className="form__input"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="form__group">
            <input
              className="form__input"
              type="password"
              name="password"
              autoComplete="true"
              placeholder="Password"
            />
          </div>
          <div>
            <button type="submit" className="btn">
              SignIn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signin;
