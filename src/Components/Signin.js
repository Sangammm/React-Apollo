import React, { useEffect, cleanUp, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Mutation, ApolloConsumer } from "react-apollo";
import jwt from "jsonwebtoken";
import { APP_SECRET } from "../Const";
import { from } from "zen-observable";

const Signin = props => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  console.log("props::", props.signin);
  const { signin, conditions } = props;
  useEffect(() => {
    let encrypted = localStorage.getItem("token");
    if (encrypted) {
      const decrypted = jwt.verify(encrypted, APP_SECRET);
      console.log("decrypted", decrypted);

      // signin({
      //   variables: {
      //     email: decrypted.email,
      //     password: decrypted.password
      //   }
      // });
    }
  }, []);

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
