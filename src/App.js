import React from "react";
import "./App.css";
import { client } from "./Apollo/apollo";
import Routes from "./Routes";
import { ApolloProvider } from "react-apollo";

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <Routes />
    </div>
  </ApolloProvider>
);

export default App;
