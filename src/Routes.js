import React from "react";
import { Route, Router } from "react-router";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Home from "./Components/Home";

const Routes = () => {
  return (
    <Router>
      <Route pah="/" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={Home} />
    </Router>
  );
};
export default Routes;
