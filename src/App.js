import React from "react";
import "./App.scss";
import { client } from "./Apollo/apollo";
import Routes from "./Routes";
import { ApolloProvider } from "react-apollo";

const App = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

export default App;
