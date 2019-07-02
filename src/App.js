import React, { useEffect, useState, useContext } from "react";
import "./App.scss";
import { client } from "./Apollo/apollo";
import Routes from "./Routes";
import { ApolloProvider } from "react-apollo";
const App = () => {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
};
export default App;
