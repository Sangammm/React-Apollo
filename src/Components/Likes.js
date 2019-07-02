import React from "react";
import { Mutation } from "react-apollo";
import { FEED } from "../Apollo/gql";
import { VOTE } from "../Apollo/gql";
import { withRouter } from "react-router-dom";
const Likes = (props, { history }) => {
  const check = id => {
    let r = false;
    if (id.length < 1) {
      return false;
    } else {
      //debugger;
      const userid = localStorage.getItem("id");
      console.log(userid);
      id.map(obj => {
        if (obj.user.id === userid) {
          console.log("trues");
          r = true;
        }
      });
    }
    return r;
  };
  return (
    <Mutation mutation={VOTE} awaitRefetchQueries={true}>
      {(vote, { error, loading }) =>
        error ? (
          <React.Fragment>{history.push("/")}</React.Fragment>
        ) : (
          <div>
            {check(props.votes) ? (
              <div className="Like">
                {props.votes.length > 1 ? (
                  <details>
                    <summary>{`Liked by you and other ${props.votes.length -
                      1}`}</summary>
                    <div>
                      {props.votes.map(obj => {
                        return `${obj.user.name}, `;
                      })}
                    </div>
                  </details>
                ) : (
                  <div>Liked by You</div>
                )}
              </div>
            ) : (
              <div className="Like">
                {loading ? (
                  "Liking....."
                ) : (
                  <div
                    className="button"
                    onClick={() =>
                      vote({
                        variables: {
                          id: props.id
                        },
                        fetchPolicy: "no-cache",
                        refetchQueries: [
                          {
                            query: FEED
                          }
                        ]
                      })
                    }
                  >
                    Like
                  </div>
                )}
                {props.votes.length > 0 ? (
                  <details>
                    <summary>{`Liked By ${props.votes.length}`}</summary>
                    <div>
                      {props.votes.map(obj => {
                        return `${obj.user.name}, `;
                      })}
                    </div>
                  </details>
                ) : (
                  "Liked By 0"
                )}
              </div>
            )}
          </div>
        )
      }
    </Mutation>
  );
};

export default withRouter(Likes);
