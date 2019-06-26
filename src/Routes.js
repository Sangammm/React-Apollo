import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Home from "./Components/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={Home} />
    </BrowserRouter>
  );
};
export default Routes;
