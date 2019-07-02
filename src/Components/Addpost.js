import React, { useState, useEffect } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { withRouter } from "react-router-dom";
import { FEED } from "../Apollo/gql";
export const POST = gql`
  mutation post($url: String!, $description: String!) {
    post(url: $url, description: $description) {
      id
    }
  }
`;
function is_url(str) {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}
const Addpost = ({ history }) => {
  const [link, setlink] = useState("");
  const [description, setdescription] = useState("");

  useEffect(() => {
    navigator.clipboard &&
      navigator.clipboard.readText().then(text => {
        if (text) {
          if (is_url(text)) {
            let bool = window.confirm("want to set Link = " + text);
            if (bool) {
              setlink(text);
            }
          }
        }
      });
  }, []);
  return (
    <Mutation
      mutation={POST}
      onCompleted={({ post }) => {
        debugger;
        // console.log(post);
        // console.log("mutation completed sucessfully");
      }}
      awaitRefetchQueries={true}
    >
      {(post, { error, loading }) =>
        loading ? (
          <h1>Loading..... </h1>
        ) : error ? (
          <h1>
            Error
            {history.replace("/")}
          </h1>
        ) : (
          <div className="homepage">
            <div className="addpost">
              <form
                className="form"
                onSubmit={e => {
                  e.preventDefault();
                  post({
                    variables: {
                      url: link,
                      description: description
                    },
                    fetchPolicy: "no-cache",
                    refetchQueries: [
                      {
                        query: FEED
                      }
                    ]
                  });
                }}
              >
                <div className="form__group_addpost">
                  <input
                    className="form__input_addpost"
                    type="text"
                    name="link"
                    placeholder="Link"
                    value={link}
                    onChange={e => {
                      setlink(e.target.value);
                    }}
                  />
                </div>
                <div className="form__group_addpost">
                  <textarea
                    className="form__input_addpost"
                    type="text"
                    name="Description"
                    placeholder="Description"
                    wrap="soft"
                    style={{
                      height: "8em"
                    }}
                    value={description}
                    onChange={e => {
                      setdescription(e.target.value);
                    }}
                  />
                </div>
                <button type="submit" className="btn_addpost">
                  SavePost
                </button>
              </form>
            </div>
          </div>
        )
      }
    </Mutation>
  );
};

export default withRouter(Addpost);
