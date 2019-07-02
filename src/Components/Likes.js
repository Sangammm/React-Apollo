import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from "react";
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
                {props.votes.length > 1
                  ? `Liked by you and other ${props.votes.length - 1}`
                  : "Liked by You"}
              </div>
            ) : (
              <div className="Like">
                <button
                  className="like"
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
                  <h3>Like</h3>
                </button>
                {`Liked By ${props.votes.length}`}
              </div>
            )}
            <details>
              <summary>Expand</summary>
              <div>Your Likersss</div>
            </details>
          </div>
        )
      }
    </Mutation>
  );
};

export default withRouter(Likes);
