import React from "react";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";
import Signin from "./Signin";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const Wrappersignin = ({ history }) => (
  <Mutation
    mutation={LOGIN}
    onCompleted={({ login }) => {
      localStorage.setItem("token", login.token);
      history.replace("/home");
    }}
  >
    {(signin, conditions) => {
      const objects = {
        signin,
        conditions
      };
      return (
        <React.Fragment>
          {conditions.error && <p>{conditions.error.toString()}</p>}
          <Signin {...objects} />
        </React.Fragment>
      );
    }}
  </Mutation>
);
export default withRouter(Wrappersignin);
