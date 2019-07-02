import gql from "graphql-tag";
export const SIGNUP = gql`
  mutation signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`;
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`;
export const FEED = gql`
  {
    feed {
      id
      url
      description
      votes {
        id
        user {
          id
          name
        }
      }
    }
  }
`;
export const VOTE = gql`
  mutation vote($id: ID!) {
    vote(linkId: $id) {
      user {
        id
        name
      }
    }
  }
`;
