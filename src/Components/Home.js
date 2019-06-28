import React from "react";
import Addpost from "./Addpost";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { withRouter } from "react-router-dom";

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

const Home = ({ history }) => {
  return (
    <div className="homepage">
      <Addpost />
      <Query query={FEED}>
        {({ loading, error, data }) => {
          console.log(data);

          return loading ? (
            <div>Loaderrr</div>
          ) : error ? (
            <div>
              {
                //history.replace("/")
              }
              {console.log(error)}
            </div>
          ) : (
            <div className="nothing">
              <ul>
                {data.feed.map((object, index) => (
                  <li key={index}>
                    {object.description}
                    {"    "}
                    <a href={object.url}>open</a>
                    <button className="like">Like</button>{" "}
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      </Query>
    </div>
  );
};
export default Home;
