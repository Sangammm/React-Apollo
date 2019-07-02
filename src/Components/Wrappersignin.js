import React, { useEffect } from "react";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";
import Signin from "./Signin";
import { LOGIN } from "../Apollo/gql";

const Wrappersignin = ({ history }) => {
  return (
    <Mutation
      mutation={LOGIN}
      onCompleted={({ login }) => {
        localStorage.setItem("token", login.token);
        localStorage.setItem("id", login.user.id);
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
};
export default withRouter(Wrappersignin);
