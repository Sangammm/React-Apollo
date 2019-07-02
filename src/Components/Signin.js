import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jwt from "jsonwebtoken";
import { APP_SECRET } from "../Const";

const Signin = props => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { signin, conditions } = props;

  return (
    <div className="user">
      <div className="form">
        <h1 className="user__header">SignIn</h1>
        <form
          className="form"
          onSubmit={e => {
            e.preventDefault();
            signin({
              variables: {
                email,
                password
              }
            });
          }}
        >
          <div className="form__group">
            <input
              className="form__input"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              required
              onChange={e => {
                setemail(e.target.value);
              }}
            />
          </div>
          <div className="form__group">
            <input
              className="form__input"
              type="password"
              name="password"
              required
              autoComplete="true"
              placeholder="Password"
              value={password}
              onChange={e => {
                setpassword(e.target.value);
              }}
            />
          </div>
          <div>
            <button type="submit" className="btn">
              {conditions.loading ? "loading..." : "SignIn"}
            </button>
            <Link className="user__title" to="/signup">
              SignUp
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signin;
