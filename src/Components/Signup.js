import React from "react";
import { Form, withFormik, Field } from "formik";
import * as yup from "yup";
const Signpuform = ({ values, handleChange }) => (
  <Form>
    <Field type="text" name="name" placeholder="Name" />
    <Field type="email" name="email" placeholder="Email" />
    <Field type="password" name="password" placeholder="Password" />
    <Field
      type="password"
      name="confirmpassword"
      placeholder="Confirm Password"
    />
    <button>Submit</button>
  </Form>
);

const Signup = withFormik({
  mapPropsToValues({ name, email, password, confirmpassword }) {
    return {
      email: localStorage.getItem("email") || "",
      password: "",
      confirmpassword: ""
    };
  },
  validationSchema: yup.object().shape({
    name: yup.string().required("Name Required!!"),
    email: yup
      .string()
      .email("Email Not valid")
      .required("Email Required!!"),
    password: yup.string().min(7),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
  }),
  handleSubmit(values) {
    console.log(values);
  }
})(Signpuform);
export default Signup;
