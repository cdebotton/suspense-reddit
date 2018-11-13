import React from "react";
import { RouteComponentProps } from "react-router";
import RedditResource from "./RedditResource";

function Post(
  props: RouteComponentProps<{ subreddit: string; postId: string }>
) {
  const {
    match: {
      params: { subreddit, postId }
    }
  } = props;

  const [
    {
      data: {
        children: [
          {
            data,
            data: { title, selftext }
          }
        ]
      }
    }
  ] = RedditResource.read(`${subreddit}/${postId}`);

  console.log(data);

  return (
    <div>
      <h2>{title}</h2>
      {selftext && <div dangerouslySetInnerHTML={{ __html: selftext }} />}
    </div>
  );
}

export default Post;
