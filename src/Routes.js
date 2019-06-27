import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Home from "./Components/Home";
import Wrapper from "./Components/Wrapper";

export const APP_SECRET = "MY-APP-SECRET";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Wrapper} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
