import ApolloClient from "apollo-boost";

const token = localStorage.getItem("token");

export const client = new ApolloClient({
  uri: "http://localhost:4001/",
  headers: {
    Authorization: `Bearer ${token}`
  }
});
