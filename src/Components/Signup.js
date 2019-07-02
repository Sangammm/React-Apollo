import React, { useEffect } from "react";
import { Form, withFormik, Field } from "formik";
import * as yup from "yup";
import { Mutation } from "react-apollo";
import { withRouter, Link } from "react-router-dom";
import { SIGNUP } from "../Apollo/gql";
const Signupform = ({ values, errors, touched, history }) => {
  let errordesign = {
    background: "pink"
  };

  return (
    <div className="user">
      <Mutation
        mutation={SIGNUP}
        onCompleted={({ signup }) => {
          localStorage.setItem("token", signup.token);
          localStorage.setItem("id", signup.user.id);
          console.log("done signup", signup.user.id);
          history.replace("/home");
        }}
      >
        {(signup, { error, loading }) => (
          <div className="form">
            <h1 className="user__header">Signup</h1>
            <Form className="form">
              <div className="form__group" style={errordesign}>
                {touched.name && errors.name && <p>{errors.name}</p>}
                <Field
                  className="form__input"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div className="form__group" style={errordesign}>
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field
                  className="form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="form__group" style={errordesign}>
                {touched.password && errors.password && (
                  <p>{errors.password}</p>
                )}
                <Field
                  className="form__input"
                  type="password"
                  name="password"
                  autoComplete="true"
                  placeholder="Password"
                />
              </div>
              <div className="form__group" style={errordesign}>
                {touched.confirmpassword && errors.confirmpassword && (
                  <p>{errors.confirmpassword}</p>
                )}
                <Field
                  className="form__input"
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  autoComplete="true"
                />
              </div>

              <button
                disabled={loading}
                className="btn"
                type="submit"
                onClick={() => {
                  if (
                    !(errors.email && errors.password && errors.name) &&
                    values.email &&
                    values.password &&
                    values.email &&
                    values.confirmpassword
                  ) {
                    signup({
                      variables: {
                        name: values.name,
                        email: values.email,
                        password: values.password
                      }
                    });
                  }
                }}
              >
                SignUp
              </button>
              {error && console.log(error)}
              <Link className="user__title" to="/">
                Login
              </Link>
            </Form>
          </div>
        )}
      </Mutation>
    </div>
  );
};

const Signup = withFormik({
  mapPropsToValues() {
    return {
      name: "",
      email: "",
      password: "",
      confirmpassword: ""
    };
  },
  validationSchema: yup.object().shape({
    name: yup.string().required("Name Required!!"),
    email: yup
      .string()
      .required("Email Required!!")
      .email("Email Not valid"),
    password: yup
      .string()
      .required("Password Required!!")
      .min(6, "Password Too Short"),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
  })
})(Signupform);

export default withRouter(Signup);
