import ApolloClient from "apollo-boost";
console.log(localStorage.getItem("token"));
let token;
export const client = new ApolloClient({
  uri: "http://localhost:4001/",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
  }
});
