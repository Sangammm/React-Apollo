import React, { useState, useEffect } from "react";
import Addpost from "./Addpost";
import { Query, Mutation } from "react-apollo";
import { FEED } from "../Apollo/gql";
//import { VOTE } from "../Apollo/gql";
import Likes from "./Likes";
import { withRouter } from "react-router-dom";
const Home = ({ history }) => {
  return (
    <div className="homepage">
      <button
        className="logout"
        onClick={() => {
          localStorage.removeItem("id");
          localStorage.removeItem("token");
          history.replace("/");
        }}
      >
        Logout
      </button>
      <Addpost />
      <Query query={FEED}>
        {({ loading, error, data }) => {
          return loading ? (
            <div>Loaderrr</div>
          ) : error ? (
            <div>
              {history.replace("/")}
              {console.log(error)}
            </div>
          ) : (
            <div className="nothing">
              {data.feed &&
                data.feed.map((object, index) => (
                  <div key={index} className="post">
                    <p>
                      {object.description}
                      {"    "}
                      <a
                        href={object.url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        open
                      </a>
                    </p>
                    <Likes {...object} />
                  </div>
                ))}
            </div>
          );
        }}
      </Query>
    </div>
  );
};
export default withRouter(Home);
