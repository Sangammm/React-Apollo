import React from "react";
import { Form, withFormik, Field } from "formik";
import gql from "graphql-tag";
import * as yup from "yup";
import { withApollo, Mutation } from "react-apollo";
import { client } from "../Apollo/apollo";
export const SIGNUP = gql`
  mutation signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
    }
  }
`;
const Signupform = ({ values, errors, touched, handleChange, client }) => (
  <Mutation mutation={SIGNUP}>
    {(signup, { data }) => (
      <div className="form">
        <h2>Signup</h2>
        {console.log(client)}
        <Form>
          <div>
            {touched.name && errors.name && <p>{errors.name}</p>}
            <Field type="text" name="name" placeholder="Name" />
          </div>
          <div>
            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field type="email" name="email" placeholder="Email" />
          </div>
          <div>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type="password" name="password" placeholder="Password" />
          </div>
          <div>
            {touched.confirmpassword && errors.confirmpassword && (
              <p>{errors.confirmpassword}</p>
            )}
            <Field
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
            />
          </div>
          <button
            type="submit"
            onClick={() => {
              if (!(errors.email && errors.password && errors.name)) {
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
            Submit
          </button>
        </Form>
      </div>
    )}
  </Mutation>
);

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
      .min(6),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
  })
})(Signupform);

export default withApollo(Signup);
